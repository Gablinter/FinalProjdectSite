import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

export default function LoginGuard(props) {
    const [cookies, setCookie] = useCookies(["token"]);

    if (cookies.token !== undefined) {
        return <Navigate to="/" />
    }

    return (
        <>
            {props.children}
        </>
    )
}