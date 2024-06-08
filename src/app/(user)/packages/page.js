import PackagesWrapper from "@/components/PackagesWrapper";
import { getUserBillingDetial } from "@/lib/actions/billing.action";

const page = async () => {
  const billingDetail = await getUserBillingDetial();
  return (
    <>
      <PackagesWrapper billingDetail={billingDetail} />
    </>
  );
};

export default page;
