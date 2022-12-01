import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Main from "../Components/Pages/Layout/Main/Main";
import Login from "../Components/Pages/Login/Login";
import AppleLoader from "../Components/Pages/Shared/AllBrands/Apple/AppleLoader";
import RealmeCardLoader from "../Components/Pages/Shared/AllBrands/Realme/RealmeCardLoader";
import MyOrders from "../Components/Pages/Shared/DashBoard/BuyerOrders/MyOrders";
import DashBoard from "../Components/Pages/Shared/DashBoard/DashBoard/DashBoard";
import DashBoardLayout from "../Components/Pages/Shared/DashBoard/DashBoard/DashBoardLayout";
import AllPhones from "../Components/Pages/Shared/PhoneCtg/AllPhones";
import Signup from "../Components/Pages/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allPhones/:id',
                element: <PrivateRoutes><AllPhones></AllPhones></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ],
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashBoardLayout></DashBoardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            }
        ]
    }

]);
export default router;