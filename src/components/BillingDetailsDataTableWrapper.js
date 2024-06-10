import { getAllUsersBillingDetial } from "@/lib/actions/billing.actions";
import BillingDetailsDataTable from "./BillingDetailsDataTable";

const BillingDetailsDataTableWrapper = async () => {
  const allUsersBillingDetial = await getAllUsersBillingDetial();
  return (
    <BillingDetailsDataTable allUsersBillingDetial={allUsersBillingDetial} />
  );
};

export default BillingDetailsDataTableWrapper;
