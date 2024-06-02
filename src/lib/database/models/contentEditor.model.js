import { Schema, model, models } from "mongoose";

const ContentEditorSchema = new Schema(
  {
    keyword: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    countryCode: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: null,
    },
    nlp: {
      type: String,
      default: null,
    },
    saved: {
      type: String,
      default: null,
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

const ContentEditor =
  models?.Content_Editor || model("Content_Editor", ContentEditorSchema);

export default ContentEditor;
