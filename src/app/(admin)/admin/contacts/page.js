import { Suspense } from "react";
import ContactsDataTableWrapper from "@/components/ContactsDataTableWrapper";
import { ContactsDataTableLoader } from "@/components/ContactsDataTable";

const page = () => {
  return (
    <div className="ContentEditorDataTableWrapper rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <Suspense
        fallback={
          <>
            <ContactsDataTableLoader />
          </>
        }
      >
        <ContactsDataTableWrapper />
      </Suspense>
    </div>
  );
};

export default page;
