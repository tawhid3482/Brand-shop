import { createBrowserRouter } from "react-router-dom";
import Login from "../Login/Login";
import MainLayOut from "../MainLayOut/MainLayOut";
import Register from "../Login/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import AddProduct from "../AddProduct/AddProduct";
import About from "../Home/About";
import AboutDetails from "../AboutDetails/AboutDetails";
import PrivateProvider from "../PrivateProvider/PrivateProvider";
import Service from "../Home/Service";
import Details from "../BrandProduct/Details";
import AddCart from "../AddCart/AddCart";
import UpdateProduct from "../AddCart/UpdateProduct";
import Brands from "../Home/Brands/Brands";
import PcProducts from "../Home/Brands/PcProducts";
const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateProvider>
            <AddProduct></AddProduct>
          </PrivateProvider>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/aboutDetails",
        element: <AboutDetails></AboutDetails>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/details/:_id",
        element: (
          <PrivateProvider>
            <Details></Details>
          </PrivateProvider>
        ),
        loader: () =>
          fetch(
            "https://assingment-10-server-site-6z7rmnwc8-saikats-projects.vercel.app/products"
          ),
      },
      {
        path: "/addCart",
        element: (
          <PrivateProvider>
            <AddCart></AddCart>
          </PrivateProvider>
        ),
        loader: () =>
          fetch(
            " https://assingment-10-server-site-odrcc285o-saikats-projects.vercel.app/cart"
          ),
      },
      {
        path: "/update/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(
            ` https://assingment-10-server-site-odrcc285o-saikats-projects.vercel.app/cart/${params.id}`
          ),
      },
      {   
        path:'/brands',
        element:<Brands></Brands>
      },
      {
        path:'/bands',
        element:<PcProducts></PcProducts>,
       
      }
    ],
  },
]);

export default Route;
