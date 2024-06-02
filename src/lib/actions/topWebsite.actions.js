"use server";
import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import TopWebsite from "@/lib/database/models/topWebsite.model";

// CREATE
export async function createTopWebsite(topWebsite) {
  try {
    await connectToDatabase();
    const newTopWebsite = await TopWebsite.create(topWebsite);
    if (!newTopWebsite) {
      throw new Error("Top Website Not Created !");
    }
  } catch (error) {
    handleError(error);
  }
}
