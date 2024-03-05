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
import Products from "../Product/Products";
import ProductsFilter from "../Product/productsFilter";
import Amni from "../Product/Amni";
import Brands from "../Practice/Brands/Brands";
import PcProducts from "../Practice/PcProducts";
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
        loader: ({params}) => fetch(`http://localhost:5000/brand/${params.id}`),
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
      // {
      //   path: "/products",
      //   element: <Products></Products>,
      //   loader: () => fetch("http://localhost:5000/products"),
      // },
      // {
      //   path: "/products",
      //   element: <Amni></Amni>,
      //   loader: () => fetch("http://localhost:5000/brand"),
      // },
      // {
      //   path:'/products/:brand ',
      //   element:<Products></Products>,
      //   loader:({params}) => fetch(`http://localhost:5000/products/${params.brand}`)
      // }
      {
        path:'/brands',
        element:<Brands></Brands>
      },
      {
        path:'/bands/:brand',
        element:<PcProducts></PcProducts>,
        loader: ({params}) => fetch(`https://my-assignment-10-server-moga0irbs-kazirauf.vercel.app/brands/${params.brand}`)
      }
    ],
  },
]);

export default Route;
