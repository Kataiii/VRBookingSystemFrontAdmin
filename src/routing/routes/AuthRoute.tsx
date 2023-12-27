import { RouteObject } from "react-router-dom";
import Auth from "../layouts/Auth";


const AuthRoute: RouteObject = {
    path: '/login',
    element: <Auth/>
}


export default AuthRoute;