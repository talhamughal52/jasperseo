import UsersDataTable from "@/components/UsersDataTable";
import { getUsers } from "@/lib/actions/user.actions";

const page = async () => {
  const users = await getUsers();
  return <UsersDataTable users={users} />;
};

export default page;
