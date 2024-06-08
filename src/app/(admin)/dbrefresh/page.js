import { refreshDatabase } from "@/lib/actions/dbRefresh.actions";

const page = async () => {
  await refreshDatabase();
  return <div>Database Refresh Done</div>;
};

export default page;
