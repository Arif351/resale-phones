import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Main from "../Components/Pages/Layout/Main/Main";
import Login from "../Components/Pages/Login/Login";
import AllPhones from "../Components/Pages/Shared/PhoneCtg/AllPhones";

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
                element: <AllPhones></AllPhones>,
                // loader: ({ params }) => fetch(`http://localhost:3000/allPhones/${params.id}`)

            },

            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    }
]);
export default router;