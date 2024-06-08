"use server";

import { revalidatePath } from "next/cache";

import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import { auth } from "@clerk/nextjs";
import initStripe from "stripe";
import Billing from "../database/models/billing.model";

// CREATE
export async function createUser(user) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);
    if (!newUser) {
      throw new Error("User not created");
    }

    const billing = await Billing.create({
      planName: "free",
      user: newUser._id,
    });

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

// READ
export async function getUserById(userId) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ clerkId: userId });

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateUser(clerkId, user) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

// Create stripe ID
export async function createStripeCustomer(id, username, email) {
  try {
    const stripe = initStripe(process.env.STRIPE_SECRET_KEY);
    const customer = await stripe.customers.create({
      name: username,
      email: email,
    });

    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      {
        stripe_id: customer.id,
      },
      {
        new: true,
      }
    );

    if (!updatedUser) throw new Error("User not found");

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteUser(clerkId) {
  try {
    await connectToDatabase();

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

// isAdmin
export async function isAdminUser() {
  try {
    const { userId } = auth();
    await connectToDatabase();
    let isAdmin = false;
    // Find Admin user
    const user = await getUserById(userId);
    if (user.isAdmin) {
      isAdmin = true;
    }
    return JSON.parse(JSON.stringify(isAdmin));
  } catch (error) {
    handleError(error);
  }
}

// READ ALL
export async function getUsers() {
  try {
    await connectToDatabase();

    const users = await User.find({});

    // if (!users) throw new Error("Users not found");

    return JSON.parse(JSON.stringify(users));
  } catch (error) {
    handleError(error);
  }
}
