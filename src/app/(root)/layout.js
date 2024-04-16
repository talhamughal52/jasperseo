import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/jasperseoCSS/index.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
