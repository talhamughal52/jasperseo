import { getUserEditors } from "@/lib/actions/editor.actions";
import ContentEditorDataTable from "./ContentEditorDataTable";

const ContentEditorDataTableWrapper = async ({ admin = false }) => {
  const contentEditors = await getUserEditors(admin);
  return (
    <ContentEditorDataTable contentEditors={contentEditors} admin={admin} />
  );
};

export default ContentEditorDataTableWrapper;
