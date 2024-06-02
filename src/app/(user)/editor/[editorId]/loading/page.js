import { Suspense } from "react";
import ContentEditorLoader from "@/components/ContentEditorLoader";
import ContentEditorLoaderWrapper from "@/components/ContentEditorLoaderWrapper";

const page = async ({ params }) => {
  const editorId = params.editorId;
  return (
    <div className="flex justify-between">
      <Suspense fallback={<ContentEditorLoader />}>
        <ContentEditorLoaderWrapper editorId={editorId} />
      </Suspense>
    </div>
  );
};

export default page;
