import { ContentEditorDataTableLoader } from "@/components/ContentEditorDataTable";
import ContentEditorDataTableWrapper from "@/components/ContentEditorDataTableWrapper";
import InovicesTable, { InovicesTableLoader } from "@/components/InovicesTable";
import UserDashboardCards, {
  UserDashboardCardsLoader,
} from "@/components/UserDashboardCards";
import { Suspense } from "react";

export default async function page() {
  return (
    <>
      <Suspense fallback={<UserDashboardCardsLoader />}>
        <UserDashboardCards />
      </Suspense>
      <div className="mt-4 md:mt-6 2xl:mt-7.5 ">
        <Suspense fallback={<InovicesTableLoader />}>
          <InovicesTable />
        </Suspense>
      </div>
      <div className="ContentEditorDataTableWrapper mt-4 md:mt-6 2xl:mt-7.5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        {/* <ContentEditorDataTableWrapper /> */}

        <Suspense fallback={<ContentEditorDataTableLoader />}>
          <ContentEditorDataTableWrapper />
        </Suspense>
      </div>
    </>
  );
}
