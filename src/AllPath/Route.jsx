import { createBrowserRouter } from "react-router-dom";
import Login from "../Login/Login";
import MainLayOut from "../MainLayOut/MainLayOut";
import Register from "../Login/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import BrandProduct from "../BrandProduct/BrandProduct";
import AddProduct from "../AddProduct/AddProduct";
import About from "../Home/About";
import AboutDetails from "../AboutDetails/AboutDetails";
import PrivateProvider from "../PrivateProvider/PrivateProvider";
import Service from "../Home/Service";
import Details from "../BrandProduct/Details";
import AddCart from "../AddCart/AddCart";
import UpdateProduct from "../AddCart/UpdateProduct";

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
        path: "/brandsProduct/:id",
        element: <BrandProduct></BrandProduct>,
        loader: () => fetch("/brand.json"),
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
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/addCart",
        element: (
          <PrivateProvider>
            <AddCart></AddCart>
          </PrivateProvider>
        ),
        loader: () => fetch("http://localhost:5000/products")
      },
      {
        path:'/update/:id',
        element:<UpdateProduct></UpdateProduct>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
      }
    ],
  },
]);

export default Route;
