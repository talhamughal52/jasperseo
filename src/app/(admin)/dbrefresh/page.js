import { refreshDatabase } from "@/lib/actions/seeder.action";

const page = async () => {
  await refreshDatabase();
  return <div>Database Refresh Done</div>;
};

export default page;
