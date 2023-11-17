import { useState } from "react";
import {Routes, Route, useNavigate, Link} from 'react-router-dom';


export default function LoginSection() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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
        navigate('/')
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
                <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
                    <form action="POST" onSubmit={formSubmitHandler} className="login100-form validate-form flex-sb flex-w">
                        <span className="login100-form-title p-b-53">
                            Sign In With
                        </span>
                        <div className="fbAndGoogleLogin">

                            <div className="fbLogin">
                                <a href="#" className="btn-face m-b-20">
                                    <i className="fa fa-facebook-official"></i>
                                    Facebook
                                </a>
                            </div>

                            <div className="googleLogin">
                                <a href="#" className="btn-google m-b-20">
                                    <img src="../public/login/images/icons/icon-google.png" alt="GOOGLE" />
                                    Google
                                </a>
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