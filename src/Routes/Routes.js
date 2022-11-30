import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Main from "../Components/Pages/Layout/Main/Main";
import Login from "../Components/Pages/Login/Login";
import AppleLoader from "../Components/Pages/Shared/AllBrands/Apple/AppleLoader";
import RealmeCardLoader from "../Components/Pages/Shared/AllBrands/Realme/RealmeCardLoader";
import AllPhones from "../Components/Pages/Shared/PhoneCtg/AllPhones";
import Signup from "../Components/Pages/Signup/Signup";

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
                element: <AllPhones></AllPhones>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            // {
            //     path: '/signup',
            //     element: <Signup></Signup>
            // }
        ]
    }
]);
export default router;