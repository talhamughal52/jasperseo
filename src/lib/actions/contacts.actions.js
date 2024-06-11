"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import Contact from "../database/models/contact.model";

export async function createContact(contactFormData) {
  try {
    const contactEditorFormRawData = {
      name: contactFormData.get("name"),
      email: contactFormData.get("email"),
      subject: contactFormData.get("subject"),
      message: contactFormData.get("message"),
    };
    await connectToDatabase();
    const newContact = await Contact.create(contactEditorFormRawData);
    if (!newContact) {
      throw new Error("Contact Not Created !");
    }
    revalidatePath("/admin/contacts");
    return JSON.parse(JSON.stringify(true));
  } catch (error) {
    handleError(error);
  }
}

export async function getContacts() {
  try {
    await connectToDatabase();
    const allContacts = await Contact.find({});

    return JSON.parse(JSON.stringify(allContacts));
  } catch (error) {
    handleError(error);
  }
}
