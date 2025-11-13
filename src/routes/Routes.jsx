import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddFood from "../pages/Foods/AddFood";
import AvailableFoods from "../pages/Foods/AvailableFoods";
import FoodDetails from "../pages/Foods/FoodDetails";
import PrivateRoute from "./PrivateRoute";
import ManageMyFoods from "../pages/ManageMyFoods/ManageMyFoods";
import ErrorPage from "../pages/Error/ErrorPage";
import UpdateFood from "../pages/ManageMyFoods/UpdateFood";
import MyFoodRequests from "../pages/Foods/MyFoodRequests";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("https://plate-share-server-kohl.vercel.app/featured-foods"),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/available-foods",
        element: <AvailableFoods></AvailableFoods>,
        loader: () => fetch("https://plate-share-server-kohl.vercel.app/foods"),
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/food/:id",
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-my-foods",
        element: (
          <PrivateRoute>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-food/:id",
        element: (
          <PrivateRoute>
            <UpdateFood></UpdateFood>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://plate-share-server-kohl.vercel.app/foods/${params.id}`
          ),
      },
      {
        path: "/my-food-requests",
        element: (
          <PrivateRoute>
            <MyFoodRequests></MyFoodRequests>
          </PrivateRoute>
        ),
        loader: () => fetch("https://plate-share-server-kohl.vercel.app/foods"),
      },
    ],
  },
]);
