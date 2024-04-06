import { Schema, model, models } from "mongoose";

const newUser = {
  clerkId: Math.random(),
  email: "abc@example.com",
  username: "abc",
  photo: "photo",
  firstName: "talha",
  lastName: "younas",
};

const UserSchema = new Schema({
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
});

const User = models?.User || model("User", UserSchema);

export default User;
