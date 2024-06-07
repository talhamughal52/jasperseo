import { Schema, model, models } from "mongoose";
import initStripe from "stripe";

const UserSchema = new Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    stripe_id: {
      type: String,
      default: null,
    },
  },
  { timestamps: true },
  {
    suppressReservedKeysWarning: true,
  }
);

const User = models?.User || model("User", UserSchema);

export default User;
