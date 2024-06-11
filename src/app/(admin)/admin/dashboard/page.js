import AdminDashboardCards, {
  AdminDashboardCardsLoader,
} from "@/components/AdminDashboardCards";
import { Suspense } from "react";

const page = () => {
  return (
    <>
      <Suspense fallback={<AdminDashboardCardsLoader />}>
        <AdminDashboardCards />
        {/* <AdminDashboardCardsLoader /> */}
      </Suspense>
    </>
  );
};

export default page;
