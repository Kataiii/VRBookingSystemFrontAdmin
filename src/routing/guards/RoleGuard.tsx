import { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import ErrorPage from "../../pages/ErrorPage";
import LoadingPage from "../../pages/LoadingPage";

interface RoleGuardProps{
    children: React.ReactElement;
}

const RoleGuard: React.FC<RoleGuardProps> = ({children}) => {
    const {store} = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);
    const [hasRole, setHasRole] = useState<boolean>(false);

    useEffect(() => {
        const role = store.client.roles.find(item => item.name == 'admin');
        if(role == null){
            setHasRole(false);

        }
        else{
            setHasRole(true);
        }
        setIsLoading(false);
    })

    return(
        isLoading
        ?
            <LoadingPage/>
        :
            hasRole
            ?
                children
            :
                <ErrorPage/>
    )
}

export default RoleGuard;