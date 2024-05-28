import TextEditor from "@/components/TextEditor";
import TextEditorLeftSide from "@/components/TextEditorLeftSide";
import { getEditorById } from "@/lib/actions/editor.actions";

const page = async ({ params }) => {
  const editorId = params.editorId;
  const contentEditor = await getEditorById(editorId);
  return (
    <div className="flex justify-between">
      <TextEditor />
      <TextEditorLeftSide contentEditor={contentEditor} />
    </div>
  );
};

export default page;
