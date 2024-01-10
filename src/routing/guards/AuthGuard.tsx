import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../..";
import LoadingPage from "../../pages/LoadingPage";
import RoleGuard from "./RoleGuard";


const AuthGuard: React.FC = observer(() => {
    const {store} = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        store.refresh();
        setIsLoading(false);
    })

    return(
        isLoading
        ?
            <LoadingPage/>
        :
            store.isAuth
            ?
                <RoleGuard/>
            :
                <Navigate to={'/login'}/>
    )
})

export default AuthGuard;