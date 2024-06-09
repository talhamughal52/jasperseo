import { isAdminUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import AuthLayout from "@/components/AuthLayout";
import AuthWrapper from "@/components/AuthWrapper";
import StoreProvider from "@/store/StoreProvider";

const Layout = async ({ children }) => {
  const isAdmin = await isAdminUser();
  if (!isAdmin) redirect("/dashboard");

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <StoreProvider>
        <AuthWrapper isAdmin={isAdmin}>
          <AuthLayout>{children}</AuthLayout>
        </AuthWrapper>
      </StoreProvider>
    </div>
  );
};

export default Layout;
