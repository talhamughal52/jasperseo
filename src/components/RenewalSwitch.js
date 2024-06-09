"use client";
import { autoRenew } from "@/lib/actions/billing.actions";

const RenewalSwitch = ({ renewal }) => {
  const handleChange = async () => {
    await autoRenew();
  };

  return (
    <div className="flex justify-end">
      <label
        htmlFor="toggle4"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="toggle4"
            className="sr-only"
            onChange={handleChange}
          />
          <div className="block h-6 w-10 rounded-full bg-black"></div>
          <div
            className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition ${
              renewal && "!right-1 !translate-x-full"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default RenewalSwitch;
