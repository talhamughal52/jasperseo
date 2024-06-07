"use server";
import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import { auth } from "@clerk/nextjs";
import { createStripeCustomer, getUserById } from "./user.actions";
import { revalidatePath } from "next/cache";

export async function charge() {
  try {
    const { userId } = auth();
    await connectToDatabase();
    const user = await getUserById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    console.log(user);
    if (!user.stripe_id) {
      const updatedUser = await createStripeCustomer(user._id, user.email);
      console.log(updatedUser);
    } else {
      console.log("stripe_id exist");
    }

    revalidatePath("/editor");
  } catch (error) {
    handleError(error);
  }
}
