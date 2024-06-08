import { Schema, model, models } from "mongoose";

const BillingSchema = new Schema(
  {
    planName: {
      type: String,
      required: true,
    },
    totalEditors: {
      type: Number,
      default: 1,
    },
    usedEditors: {
      type: Number,
      default: 0,
    },
    activationDate: {
      type: Date,
      default: Date.now,
    },
    renewal: {
      type: Boolean,
      default: 0,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
  {
    suppressReservedKeysWarning: true,
  }
);

const Billing = models?.Billing || model("Billing", BillingSchema);

export default Billing;
