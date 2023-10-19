import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MainLayOut = () => {
  return (
    <div className="container mx-auto ">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>

    </div>
  );
};

export default MainLayOut;
