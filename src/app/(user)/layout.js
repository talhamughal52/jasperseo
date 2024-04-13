import AuthLayout from "@/components/AuthLayout";
import AuthWrapper from "@/components/AuthWrapper";

const Layout = ({ children }) => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <AuthWrapper>
        <AuthLayout>{children}</AuthLayout>
      </AuthWrapper>
    </div>
  );
};

export default Layout;
