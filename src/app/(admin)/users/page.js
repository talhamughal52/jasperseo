import { Suspense } from "react";
import { UsersDataTableLoader } from "@/components/UsersDataTable";
import UsersDataTableWrapper from "@/components/UsersDataTableWrapper";

const page = () => {
  return (
    <div className="ContentEditorDataTableWrapper rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <Suspense
        fallback={
          <>
            <UsersDataTableLoader />
          </>
        }
      >
        <UsersDataTableWrapper />
      </Suspense>
    </div>
  );
};

export default page;
