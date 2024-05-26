"use server";
import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import ContentEditor from "../database/models/ContentEditor.model";
import { auth } from "@clerk/nextjs";
import { getUserById } from "./user.actions";
import { useRouter, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createEditor(contentEdiorFormData) {
  try {
    const { userId } = auth();
    await connectToDatabase();
    const user = await getUserById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    const contentEditorFormRawData = {
      keyword: contentEdiorFormData.get("keyword"),
      country: contentEdiorFormData.get("country"),
      countryCode: contentEdiorFormData.get("countryCode"),
      user: user._id,
    };
    const newContentEditor = await ContentEditor.create(
      contentEditorFormRawData
    );
    if (!newContentEditor) {
      throw new Error("Content Editor Not Created !");
    }
    revalidatePath("/");
  } catch (error) {
    handleError(error);
  }
}

export async function getUserEditors() {
  try {
    const { userId } = auth();
    await connectToDatabase();
    const user = await getUserById(userId);
    const userContentEditors = await ContentEditor.find({
      user: user._id,
    });
    return JSON.parse(JSON.stringify(userContentEditors));
  } catch (error) {
    handleError(error);
  }
}
