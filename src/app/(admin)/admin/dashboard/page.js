import AdminDashboardCards, {
  AdminDashboardCardsLoader,
} from "@/components/AdminDashboardCards";
import { BillingDetailsDataTableLoader } from "@/components/BillingDetailsDataTable";
import BillingDetailsDataTableWrapper from "@/components/BillingDetailsDataTableWrapper";
import { ContactsDataTableLoader } from "@/components/ContactsDataTable";
import ContactsDataTableWrapper from "@/components/ContactsDataTableWrapper";
import { ContentEditorDataTableLoader } from "@/components/ContentEditorDataTable";
import ContentEditorDataTableWrapper from "@/components/ContentEditorDataTableWrapper";
import { UsersDataTableLoader } from "@/components/UsersDataTable";
import UsersDataTableWrapper from "@/components/UsersDataTableWrapper";
import { Suspense } from "react";

const page = () => {
  return (
    <>
      <Suspense fallback={<AdminDashboardCardsLoader />}>
        <AdminDashboardCards />
      </Suspense>
      <div className="ContentEditorDataTableWrapper mt-4 md:mt-6 2xl:mt-7.5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
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
      <div className="ContentEditorDataTableWrapper mt-4 md:mt-6 2xl:mt-7.5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <Suspense fallback={<ContentEditorDataTableLoader admin={true} />}>
          <ContentEditorDataTableWrapper admin={true} />
        </Suspense>
      </div>
      <div className="ContentEditorDataTableWrapper mt-4 md:mt-6 2xl:mt-7.5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <Suspense fallback={<BillingDetailsDataTableLoader />}>
          <BillingDetailsDataTableWrapper />
        </Suspense>
      </div>
      <div className="ContentEditorDataTableWrapper mt-4 md:mt-6 2xl:mt-7.5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
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
    </>
  );
};

export default page;
