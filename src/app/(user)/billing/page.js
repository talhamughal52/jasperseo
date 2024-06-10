import BillingDetailsWrapper, {
  BillingDetailsWrapperLoader,
} from "@/components/BillingDetailsWrapper";
import { Suspense } from "react";

const page = async () => {
  return (
    <Suspense
      fallback={
        <>
          <BillingDetailsWrapperLoader />
        </>
      }
    >
      <BillingDetailsWrapper />
    </Suspense>
  );
};

export default page;
