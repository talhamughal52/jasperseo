import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import AuthLayout from "@/components/AuthLayout";
import AuthWrapper from "@/components/AuthWrapper";

const Layout = async ({ children }) => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  const user = await getUserById(userId);
  if (!user.isAdmin) redirect("/home");

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <AuthWrapper>
        <AuthLayout>{children}</AuthLayout>
      </AuthWrapper>
    </div>
  );
};

export default Layout;
