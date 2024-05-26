import { Suspense } from "react";
import { UsersDataTableLoader } from "@/components/UsersDataTable";
import UsersDataTableWrapper from "@/components/UsersDataTableWrapper";

const page = () => {
  return (
    <Suspense
      fallback={
        <>
          <UsersDataTableLoader />
        </>
      }
    >
      <UsersDataTableWrapper />
    </Suspense>
  );
};

export default page;
