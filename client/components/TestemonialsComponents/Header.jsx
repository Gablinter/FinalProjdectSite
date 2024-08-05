import { useNavigate, Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { useEffect, useState } from 'react';
let i = 0;

export default function Hearder() {
    let [isLoggedIn, setIsLoggedIn] = useState('');
    let [message, setMessage] = useState([]);
    let [cookie, setCookie, removeCookie] = useCookies('[token]');


    useEffect(() => {
        if (cookie.token === undefined) {
            setIsLoggedIn((str) => str + '1')
        }
    }, [message])


    function logoutClickHandler(e) {
        e.preventDefault();
        removeCookie('token')
        setIsLoggedIn(i);
        setMessage(i)
        i++
    }
    return (
        // <div className="hero_area">

        <header className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <Link className="navbar-brand" to="/">
                        <span>
                            WatchWonders
                        </span>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ">
                            <li className="nav-item ">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about"> About</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/catalog">Products</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/testimonials">Testimonial</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactUs">Contact Us</Link>
                            </li>
                        </ul>
                        <div className="user_optio_box">

                            {isLoggedIn === '' ?
                                <>

                                    <Link to="/cartPage">
                                        <i className="fa fa-shopping-cart" id="shoppingCart" aria-hidden="true"></i>
                                    </Link>
                                    <Link to="/tickets">
                                        <i className="tickets_header">Tickets</i>
                                    </Link>


                                    <button className="nav-item" id="logoutButton">
                                        <Link className="nav-link" id='logout-button' onClick={logoutClickHandler}>LOGOUT</Link>
                                    </button>

                                </>
                                :
                                <>
                                    <Link to="/users/login">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </Link>

                                </>}

                        </div>
                    </div>
                </nav>
            </div>
        </header>

        // </div>
    )
}