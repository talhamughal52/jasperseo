import UserFooter from "@/components/UserFooter";
import UserHeader from "@/components/UserHeader";
const Layout = ({ children }) => {
  return (
    <>
      <UserHeader />
      {children}
      <UserFooter />
    </>
  );
};

export default Layout;
