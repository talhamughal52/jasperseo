import AuthLayout from "@/components/AuthLayout";
import AuthWrapper from "@/components/AuthWrapper";
import StoreProvider from "@/store/StoreProvider";

const Layout = ({ children }) => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <StoreProvider>
        <AuthWrapper>
          <AuthLayout>{children}</AuthLayout>
        </AuthWrapper>
      </StoreProvider>
    </div>
  );
};

export default Layout;
