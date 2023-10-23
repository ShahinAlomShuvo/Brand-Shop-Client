import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyCarts from "../Pages/MyCarts/MyCarts";
import BrandProduct from "../Pages/BrandProduct/BrandProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/brands"),
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/carts",
        element: (
          <PrivateRoute>
            <MyCarts></MyCarts>
          </PrivateRoute>
        ),
      },
      {
        path: "/brandProduct/:brandName",
        element: <BrandProduct></BrandProduct>,
      },
    ],
  },
]);

export default router;
