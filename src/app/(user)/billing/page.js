import BillingWrapper from "@/components/BillingWrapper";
import RenewalSwitch from "@/components/RenewalSwitch";
import { getUserBillingDetial } from "@/lib/actions/billing.actions";
import { toast } from "react-toastify";

const page = async ({ searchParams }) => {
  const billingDetail = await getUserBillingDetial();
  let date = new Date(billingDetail.activationDate);
  date = date.toISOString().split("T")[0];
  return (
    <BillingWrapper>
      <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center bg-white border border-stroke dark:bg-boxdark dark:border-strokedark rounded-sm shadow-default">
        <div className="w-full rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center dark:text-white">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Users only
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2 dark:text-white">
              Current Plan
            </div>
            <p className="text-gray-700 text-base text-right pr-10 font-bold dark:text-white">
              {billingDetail.planName.charAt(0).toUpperCase() +
                billingDetail.planName.slice(1)}
            </p>
          </div>
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2 dark:text-white">
              Available Content Editors
            </div>
            <p className="text-gray-700 text-base text-right pr-10 font-bold dark:text-white">
              {billingDetail.totalEditors}
            </p>
          </div>
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2 dark:text-white">
              Used Content Editors
            </div>
            <p className="text-gray-700 text-base text-right pr-10 font-bold dark:text-white">
              {billingDetail.usedEditors}
            </p>
          </div>
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2 dark:text-white">
              Renewal
            </div>
            <p className="text-gray-700 text-base text-right pr-10 dark:text-white">
              Your current plan activation date{" "}
              <span className="font-bold">{date}</span>
            </p>
          </div>
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2 dark:text-white">
              Auto Renew
            </div>
            <p className="text-gray-700 text-base dark:text-white">
              This means we will charge the card on file when its time to make
              another payment
            </p>
            <p className="text-gray-700 text-base text-right pr-10">
              <RenewalSwitch />
            </p>
          </div>
        </div>
      </div>
    </BillingWrapper>
  );
};

export default page;
