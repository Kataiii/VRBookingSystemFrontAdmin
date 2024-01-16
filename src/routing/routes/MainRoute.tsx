import { Outlet, RouteObject } from "react-router-dom";
import RoleGuard from "../guards/RoleGuard";
import Admin from "../layouts/Admin";


const AdminRoute: RouteObject = {
    path: '/admin',
    element:
        <RoleGuard>
            <Outlet context={[]} />
        </RoleGuard>,
    children: [
        {
            path: "/admin",
            element: <Admin />
        },
    ]
}


export default AdminRoute;