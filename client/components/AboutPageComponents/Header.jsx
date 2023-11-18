import { Link } from "react-router-dom"

export default function Header() {
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
                            <li className="nav-item active">
                                <Link className="nav-link" to="/about"> About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/catalog">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/testimonials">Testimonial</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactUs">Contact Us</Link>
                            </li>
                        </ul>
                        <div className="user_optio_box">
                            <Link to="/users/login">
                                <i className="fa fa-user" aria-hidden="true"></i>
                            </Link>
                            <Link to="/cartPage">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

        // </div>
    )
}