import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Root from "./layouts/Root";
import AuthRoute from "./routes/AuthRoute";
import AdminRoute from "./routes/MainRoute";


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root/>,
            errorElement: <ErrorPage/>
        },
        AuthRoute,
        AdminRoute
    ]
);

export default router;