import { Outlet } from "react-router-dom";
import Header from "../../Header/header";
import Footer from "../../Footer";

const PublicLayout = () => {
  return (
    <div className="w-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;
