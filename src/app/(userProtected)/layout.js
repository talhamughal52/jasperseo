import Footer from "@/components/Footer";
import UserHeader from "@/components/UserHeader";
const Layout = ({ children }) => {
  return (
    <>
      <UserHeader />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
