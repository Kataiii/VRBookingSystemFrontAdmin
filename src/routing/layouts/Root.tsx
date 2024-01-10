import AuthGuard from "../guards/AuthGuard";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../..";
import LoadingPage from "../../pages/LoadingPage";
import RoleGuard from "../guards/RoleGuard";

const Root: React.FC = () => {
    return(
        <AuthGuard/>
    )
}

export default Root;