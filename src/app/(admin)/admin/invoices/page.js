import InovicesTable, { InovicesTableLoader } from "@/components/InovicesTable";
import { Suspense } from "react";

const page = async () => {
  return (
    <div>
      <Suspense fallback={<InovicesTableLoader />}>
        <InovicesTable admin={true} />
      </Suspense>
    </div>
  );
};

export default page;
