// components/Layout/Layout.jsx
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* This renders the nested route content */}
      <Footer />
    </>
  );
};

export default Layout;
