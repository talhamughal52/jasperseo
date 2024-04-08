import UserFooter from "@/components/UserFooter";
import UserHeader from "@/components/UserHeader";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
const Layout = async ({ children }) => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  const user = await getUserById(userId);
  if (!user.isAdmin) redirect("/home");

  return (
    <>
      <UserHeader />
      {children}
      <UserFooter />
    </>
  );
};

export default Layout;
