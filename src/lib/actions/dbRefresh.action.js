import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import User from "../database/models/user.model";
import ContentEditor from "@/lib/database/models/contentEditor.model";
import TopWebsite from "@/lib/database/models/topWebsite.model";

export async function refreshDatabase() {
  "use server";
  try {
    // await connectToDatabase();
    // await User.deleteMany();
    // await ContentEditor.deleteMany();
    // await TopWebsite.deleteMany();
  } catch (error) {
    handleError(error);
  }
}
