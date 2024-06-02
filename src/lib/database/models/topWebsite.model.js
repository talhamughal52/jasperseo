import { Schema, model, models } from "mongoose";

const TopWebsiteSchema = new Schema(
  {
    h1: {
      type: String,
      default: null,
    },
    h2: {
      type: String,
      default: null,
    },
    h3: {
      type: String,
      default: null,
    },
    h4: {
      type: String,
      default: null,
    },
    h5: {
      type: String,
      default: null,
    },
    h6: {
      type: String,
      default: null,
    },
    images: {
      type: String,
      default: null,
    },
    paragraphs: {
      type: String,
      default: null,
    },
    url: {
      type: String,
      default: null,
    },
    words: {
      type: String,
      default: null,
    },
    content: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ["start", "complete", "error"],
      default: null,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    contentEdior: {
      type: Schema.Types.ObjectId,
      ref: "Content_Editor",
    },
  },
  { timestamps: true },
  {
    suppressReservedKeysWarning: true,
  }
);

const TopWebsite =
  models?.Top_Website || model("Top_Website", TopWebsiteSchema);

export default TopWebsite;
