import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import SignUp from "../pages/singup/SingUp";
import PUser from "../pages/p-admin/PUser";
import AllUser from "../pages/p-admin/all-user/AllUser";
import Products from "../pages/p-admin/products/Products";
import ProductDeteals from "../pages/productDeteals/ProductDeteals";
import Card from "../pages/card/card";
import Search from "../pages/search/search";
import CategoryProduct from "../pages/categoryProduct/CategoryProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "/product/:id",
    element: <ProductDeteals />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/category-products",
    element: <CategoryProduct />,
  },
  {
    path: "/user-card",
    element: <Card />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sing-up",
    element: <SignUp />,
  },
  {
    path: "/p-admin",
    element: <PUser />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "all-user",
        element: <AllUser />,
      },
    ],
  },
]);

export default router;
