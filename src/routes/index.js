import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import SignUp from "../pages/singup/SingUp";
import PUser from "../pages/p-admin/PUser";
import AllUser from "../pages/p-admin/all-user/AllUser";
import Products from "../pages/p-admin/products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
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
    children:[
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "all-user",
        element: <AllUser />,
      },
    
    ]
  },

]);

export default router;
