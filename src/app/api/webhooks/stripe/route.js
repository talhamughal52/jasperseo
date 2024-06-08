import { updateUserBillingDetial } from "@/lib/actions/billing.action";
import { NextResponse } from "next/server";
import stripe from "stripe";

export async function POST(request) {
  const body = await request.text();

  const sig = request.headers.get("stripe-signature");
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    return NextResponse.json({ message: "Webhook error", error: err });
  }

  // Get the ID and type
  const eventType = event.type;

  // CREATE
  if (eventType === "checkout.session.completed") {
    const { id, amount_total, metadata, customer } = event.data.object;

    console.log(event.data.object);

    const transaction = {
      stripeId: id,
      amount: amount_total ? amount_total / 100 : 0,
      plan: metadata?.plan || "",
      credits: Number(metadata?.credits) || 0,
      buyerId: metadata?.buyerId || "",
      createdAt: new Date(),
    };

    console.log(event.data.object);
    console.log(transaction);
    console.log(customer);

    // const billingDetial = await updateUserBillingDetial(customer);
    // const newTransaction = await createTransaction(transaction);

    // return NextResponse.json({ message: "OK", transaction: newTransaction });
    return NextResponse.json({
      message: "OK",
      transaction,
    });
  }

  return new Response("", { status: 200 });
}
