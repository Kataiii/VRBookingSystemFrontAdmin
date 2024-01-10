import AuthGuard from "../guards/AuthGuard";

const Root: React.FC = () => {
    return(
        <AuthGuard/>
    )
}

export default Root;