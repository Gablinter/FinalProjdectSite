import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { useCookies } from "react-cookie";


export default function LoginSection() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(<></>)
    const [cookies, setCookie] = useCookies(["token"]);
    const navigate = useNavigate()


    let body = {
        username,
        password
    }

    function formSubmitHandler(e) {
        e.preventDefault();
        body.username = username;
        body.password = password;
        fetch('http://localhost:3000/users/login', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        });
        setTimeout(() => {
            fetch(`http://localhost:3000/users/loggedin`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.message === 'Success') {
                        setCookie("token", data.messageToken, { path: '/' });
                        navigate('/')
                    } else {
                        setErrorMessage(
                            <>
                                <p className="loginErrorMessage">{data.errorMessage[0]}</p>
                            </>
                        )
                        setTimeout(() => {
                            setErrorMessage(<></>)
                        }, 3000)
                    }
                })
        }, 100)

    }



    function usernameChangeHandler(e) {
        setUsername(e.target.value)
    }

    function passwordChangeHandler(e) {
        setPassword(e.target.value);
    }

    return (

        <div className="limiter">
            <div className="background-image">
                {errorMessage}
                <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
                    <form action="POST" onSubmit={formSubmitHandler} className="login100-form validate-form flex-sb flex-w">
                        <span className="login100-form-title p-b-53">
                            Sign In With
                        </span>
                        <div className="fbAndGoogleLogin">

                            <div className="fbLogin">
                                <Link to="https://www.facebook.com/?stype=lo&deoia=1&jlou=Aff5GrF5zRp4S2qXXIJQl1wGExe1D23HQeBW5etgwmURBwknnAFtWit24NCD_oRy7Os7ubJnsMxGOaBe3zTITA9NuPES-lVNkfhC2iMxfUkc2w&smuh=45332&lh=Ac9ghbaQJpN1M3Gc_E8" className="btn-face m-b-20">
                                    <i className="fa fa-facebook-official"></i>
                                    Facebook
                                </Link>
                            </div>

                            <div className="googleLogin">
                                <Link to="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AVQVeyw9mv9SZLC4ds-SGvu-Qo6arLf7vSImK9_dGEI3I2Cy2I8MVaheiqjcm9hp1GLPorSLqAFS6g&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-469588622%3A1700301410556468&theme=glif" className="btn-google m-b-20">
                                    <img src="../public/login/images/icons/icon-google.png" alt="GOOGLE" />
                                    Google
                                </Link>
                            </div>
                        </div>


                        <div className="p-t-31 p-b-9">
                            <span className="txt1">
                                Username
                            </span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Username is required">
                            <input className="input100" type="text" name="username" value={username} onChange={usernameChangeHandler} />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="p-t-13 p-b-9">
                            <span className="txt1">
                                Password
                            </span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" name="password" value={password} onChange={passwordChangeHandler} />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="container-login100-form-btn m-t-17">
                            <button className="login100-form-btn">
                                Sign In
                            </button>
                        </div>

                        <div className="w-full text-center p-t-55">
                            <span className="txt2">
                                Not a member?
                            </span>

                            <Link to='/users/register' className="txt2 bo1">
                                Sign up now
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}