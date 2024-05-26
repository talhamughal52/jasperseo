import { getUserEditors } from "@/lib/actions/editor.actions";
import ContentEditorDataTable from "./ContentEditorDataTable";

const ContentEditorDataTableWrapper = async () => {
  const contentEditors = await getUserEditors();
  return <ContentEditorDataTable contentEditors={contentEditors} />;
};

export default ContentEditorDataTableWrapper;
