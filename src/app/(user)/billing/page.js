import RenewalSwitch from "@/components/RenewalSwitch";
import { getUserBillingDetial } from "@/lib/actions/billing.action";

const page = async () => {
  const billingDetail = await getUserBillingDetial();
  console.log(billingDetail);
  let date = new Date(billingDetail.activationDate);
  date = date.toISOString().split("T")[0];
  return (
    <div>
      <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center">
        <div className="w-full border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Users only
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              Current Plan
            </div>
            <p className="text-gray-700 text-base text-right pr-10 font-bold">
              {billingDetail.planName.charAt(0).toUpperCase() +
                billingDetail.planName.slice(1)}
            </p>
          </div>
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              Available Content Editors
            </div>
            <p className="text-gray-700 text-base text-right pr-10 font-bold">
              {billingDetail.totalEditors}
            </p>
          </div>
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              Used Content Editors
            </div>
            <p className="text-gray-700 text-base text-right pr-10 font-bold">
              {billingDetail.usedEditors}
            </p>
          </div>
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">Renewal</div>
            <p className="text-gray-700 text-base text-right pr-10">
              Your current plan activation date{" "}
              <span className="font-bold">{date}</span>
            </p>
          </div>
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              Auto Renew
            </div>
            <p className="text-gray-700 text-base">
              This means we will charge the card on file when its time to make
              another payment
            </p>
            <p className="text-gray-700 text-base text-right pr-10">
              <RenewalSwitch />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
