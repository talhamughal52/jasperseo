"use server";
import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import { auth } from "@clerk/nextjs";
import {
  createStripeCustomer,
  getUserById,
  getUserByStripeId,
} from "./user.actions";
import { revalidatePath } from "next/cache";
import initStripe from "stripe";
import Billing from "../database/models/billing.model";

export async function charge(planName) {
  try {
    const { userId } = auth();
    await connectToDatabase();
    let user = await getUserById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    if (!user.stripe_id) {
      user = await createStripeCustomer(user._id, user.username, user.email);
    }

    let priceId = null;
    let editors = null;

    if (planName === "starter") {
      priceId = "price_1PPB9sGJ0qDgL9Yh9tt2IrZt";
      editors = 6;
    } else if (planName === "pro") {
      priceId = "price_1PPBFQGJ0qDgL9YhZzf8LT5G";
      editors = 15;
    } else if ("premium") {
      editors = 60;
      priceId = "price_1PPJoQGJ0qDgL9YhFO3qxe2e";
    }
    const stripe = initStripe(process.env.STRIPE_SECRET_KEY);

    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      customer: user.stripe_id,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: process.env.NEXT_PUBLIC_WEBSITE_URL + `/payment/success`,
      cancel_url: process.env.NEXT_PUBLIC_WEBSITE_URL + `/payment/cancel`,
      metadata: {
        user: user._id,
        planName: planName,
        editors: editors,
      },
    });

    if (!checkoutSession.url) {
      throw new Error(`Could not create checkout session`);
    }
    revalidatePath("/invoices");
    return JSON.parse(JSON.stringify({ session: checkoutSession }));
  } catch (error) {
    handleError(error);
  }
}

export async function customerInvoices() {
  try {
    const { userId } = auth();
    await connectToDatabase();
    let user = await getUserById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    if (!user.stripe_id) {
      user = await createStripeCustomer(user._id, user.username, user.email);
    }

    const stripe = initStripe(process.env.STRIPE_SECRET_KEY);

    const { data } = await stripe.invoices.list();
    let invoices = [];
    data.map((invoice) => {
      if (invoice.customer === user.stripe_id) {
        invoices.push(invoice);
      }
    });
    revalidatePath("/invoices");
    return JSON.parse(JSON.stringify(invoices));
  } catch (error) {
    handleError(error);
  }
}

export async function getUserBillingDetial() {
  try {
    const { userId } = auth();
    await connectToDatabase();
    let user = await getUserById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    const billingDetial = await Billing.findOne({
      user: user._id,
    });
    revalidatePath("/billing");
    return JSON.parse(JSON.stringify(billingDetial));
  } catch (error) {
    handleError(error);
  }
}

export async function updateUserBillingDetial(user, updateedBillingDetial) {
  try {
    await connectToDatabase();
    let billingDetial = await Billing.findOneAndUpdate(
      {
        user: user,
      },
      {
        updateedBillingDetial,
      },
      {
        new: true,
      }
    );

    if (!billingDetial) {
      throw new Error("User Billing Detial not found");
    }

    // billingDetial.activationDate = Date.now();
    // billingDetial.totalEditors = 6;
    // await billingDetial.save();

    // billingDetial = await Billing.findOne({
    //   user: user._id,
    // });

    revalidatePath("/billing");
    return JSON.parse(JSON.stringify(billingDetial));
  } catch (error) {
    handleError(error);
  }
}
