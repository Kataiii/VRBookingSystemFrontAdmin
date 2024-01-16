import { Outlet, RouteObject } from "react-router-dom";
import BookingPage from "../../pages/BookingPage";
import DataPage from "../../pages/DataPage";
import RulesPage from "../../pages/RulesPage";
import StatisticsPage from "../../pages/StatisticsPage";
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
            path: '/admin',
            element: <Admin />,
            children: [
                {
                    path: '',
                    element: <BookingPage/>
                },
                {
                    path: '/admin/rules',
                    element: <RulesPage/>
                },
                {
                    path: '/admin/data',
                    element: <DataPage/>
                },
                {
                    path: '/admin/statistics',
                    element: <StatisticsPage/>
                }
            ]
        },
    ]
}


export default AdminRoute;