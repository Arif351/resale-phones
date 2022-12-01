import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Main from "../Components/Pages/Layout/Main/Main";
import Login from "../Components/Pages/Login/Login";
import MyOrders from "../Components/Pages/Shared/DashBoard/BuyerOrders/MyOrders";
import DashBoardLayout from "../Components/Pages/Shared/DashBoard/DashBoard/DashBoardLayout";
import AddaProduct from "../Components/Pages/Shared/DashBoard/Seller/AddaProduct";
import MyAllProducts from "../Components/Pages/Shared/DashBoard/Seller/MyAllProducts";
import MyBuyers from "../Components/Pages/Shared/DashBoard/Seller/MyBuyers";
import AllUsers from "../Components/Pages/Shared/DashBoard/Admin/AllUsers";
import AllBuyers from "../Components/Pages/Shared/DashBoard/Admin/AllBuyers";
import ReportedItems from "../Components/Pages/Shared/DashBoard/Admin/ReportedItems";
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
            },
            {
                path: '/dashboard/sellerAddaProuct',
                element: <AddaProduct></AddaProduct>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyAllProducts></MyAllProducts>
            },
            {
                path: '/dashboard/myBuyers',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/allSellers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/ReportedItems',
                element: <ReportedItems></ReportedItems>
            }
        ]
    }

]);
export default router;