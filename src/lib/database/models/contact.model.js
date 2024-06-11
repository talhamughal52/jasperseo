import { Schema, model, models } from "mongoose";

const ContactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      default: null,
    },
  },
  { timestamps: true },
  {
    suppressReservedKeysWarning: true,
  }
);

const Contact = models?.Contact || model("Contact", ContactSchema);

export default Contact;
