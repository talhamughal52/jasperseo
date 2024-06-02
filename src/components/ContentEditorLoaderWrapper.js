import TextEditor from "@/components/TextEditor";
import TextEditorLeftSide from "@/components/TextEditorLeftSide";
import { getEditorById, setupEditorById } from "@/lib/actions/editor.actions";
import { redirect } from "next/navigation";
import ContentEditorLoader from "./ContentEditorLoader";

const ContentEditorLoaderWrapper = async ({ editorId }) => {
  const contentEditor = await getEditorById(editorId);
  const topWebsites = await setupEditorById(contentEditor);
  redirect(`/editor/${editorId}`);
  return <ContentEditorLoader />;
};

export default ContentEditorLoaderWrapper;
