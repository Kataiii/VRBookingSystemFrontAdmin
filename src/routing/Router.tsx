import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/Root";
import AuthRoute from "./routes/AuthRoute";
import AdminRoute from "./routes/MainRoute";


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root/>
        },
        AuthRoute,
        AdminRoute
    ]
);

export default router;