import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../..";
import LoadingPage from "../../pages/LoadingPage";


const AuthGuard: React.FC = observer(() => {
    const {store} = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const response = store.refresh();
        response.then((response) => {
            setIsLoading(false);
        });
    }, []);
    

    return(
        isLoading
        ?
            <LoadingPage/>
        :
            store.isAuth
            ?
                <Navigate to={'/admin'}/>
            :
                <Navigate to={'/login'}/>
    )
})

export default AuthGuard;