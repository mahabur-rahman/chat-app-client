import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";


export const routes = [
    {path: '/login', element: <Login />},
    {path: '/signup', element: <SignUp />}
]