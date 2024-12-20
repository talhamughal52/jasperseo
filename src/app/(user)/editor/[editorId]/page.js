import { Suspense } from "react";
import ContentEditorMainWrapper from "@/components/ContentEditorMainWrapper";
import ContentEditorLoader from "@/components/ContentEditorLoader";

const page = async ({ params }) => {
  const editorId = params.editorId;
  return (
    <div className="flex justify-between">
      <Suspense fallback={<ContentEditorLoader />}>
        <ContentEditorMainWrapper editorId={editorId} />
      </Suspense>
    </div>
  );
};

export default page;
