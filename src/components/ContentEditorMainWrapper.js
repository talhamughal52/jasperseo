import ContentEditorWrapper from "@/components/ContentEditorWrapper";
import { getReadyEditorById } from "@/lib/actions/editor.actions";

const ContentEditorMainWrapper = async ({ editorId }) => {
  const response = await getReadyEditorById(editorId);
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  return <ContentEditorWrapper response={response} />;
};

export default ContentEditorMainWrapper;
