import { useContext, useEffect, useState } from "react";
import { Context } from "../..";

const RoleGuard = () => {
    const {store} = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log(store.client.roles.find(item => item.name == 'admin'));
    })

    return(
        <h1>RoleGuard</h1>
    )
}

export default RoleGuard;