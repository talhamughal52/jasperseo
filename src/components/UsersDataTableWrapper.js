import { getUsers } from "@/lib/actions/user.actions";
import UsersDataTable from "./UsersDataTable";

const UsersDataTableWrapper = async () => {
  const users = await getUsers();
  return <UsersDataTable users={users} />;
};

export default UsersDataTableWrapper;
