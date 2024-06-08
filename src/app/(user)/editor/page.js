import { Suspense } from "react";
import { ContentEditorDataTableLoader } from "@/components/ContentEditorDataTable";
import ContentEditorDataTableWrapper from "@/components/ContentEditorDataTableWrapper";

const page = () => {
  return (
    <>
      <div className="row titlerow">
        <div className="col s12">
          <h2 className="text-title-md2 font-semibold text-black dark:text-white py-4">
            Content Editor History
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1 py-2">
        <div className="flex flex-col gap-9">
          <div className="ContentEditorDataTableWrapper rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <Suspense
              fallback={
                <>
                  <ContentEditorDataTableLoader />
                </>
              }
            >
              <ContentEditorDataTableWrapper />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
