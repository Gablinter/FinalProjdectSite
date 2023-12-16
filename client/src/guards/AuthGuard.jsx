import { useCookies } from "react-cookie";
import {  Navigate } from "react-router-dom";

export default function AuthGuard(props) {
    const [cookies, setCookie] = useCookies(["token"]);

    if (cookies.token === undefined) {
        return <Navigate to="/users/login" />   
    }

    return (
        <>
            {props.children}
        </>
    )
}