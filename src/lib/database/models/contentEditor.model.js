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
    save: {
      type: Boolean,
      default: null,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const ContentEditor =
  models?.Content_Editor || model("Content_Editor", ContentEditorSchema);

export default ContentEditor;
