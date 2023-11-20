import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie";


export default function ProductSection() {

    let [cookie, setCookie] = useCookies('[token]');
    let navigate1 = useNavigate()

    async function returnNavigate() {

        isValid = cookie.hasOwnProperty("token");
        if (!isValid) {
            return '/users/login'
        } else {
            return '/cartPage'
        }
    }



    async function addToCartHandler(e) {
        e.preventDefault()
        let navigate =  returnNavigate()
        navigate1(navigate)
    }


    return (
        <section className="product_section ">
            <div className="container">
                <div className="product_heading">
                    <h2>
                        Top Sale Watches
                    </h2>
                </div>
                <div className="product_container">
                    <div className="box">
                        <div className="box-content">
                            <div className="img-box">
                                <img src="../../public/dist/images/w1.png" alt="" />
                            </div>
                            <div className="detail-box">
                                <div className="text">
                                    <h6>
                                        Men's Watch
                                    </h6>
                                    <h5>
                                        <span>$</span> 300
                                    </h5>
                                </div>
                                <div className="like">
                                    <h6>
                                        Like
                                    </h6>
                                    <div className="star_container">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-box">
                            <Link onClick={addToCartHandler}>
                                Add To Cart
                            </Link>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-content">
                            <div className="img-box">
                                <img src="../../public/dist/images/w2.png" alt="" />
                            </div>
                            <div className="detail-box">
                                <div className="text">
                                    <h6>
                                        Men's Watch
                                    </h6>
                                    <h5>
                                        <span>$</span> 300
                                    </h5>
                                </div>
                                <div className="like">
                                    <h6>
                                        Like
                                    </h6>
                                    <div className="star_container">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-box">
                            <Link onClick={addToCartHandler}>
                                Add To Cart
                            </Link>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-content">
                            <div className="img-box">
                                <img src="../../public/dist/images/w3.png" alt="" />
                            </div>
                            <div className="detail-box">
                                <div className="text">
                                    <h6>
                                        Men's Watch
                                    </h6>
                                    <h5>
                                        <span>$</span> 300
                                    </h5>
                                </div>
                                <div className="like">
                                    <h6>
                                        Like
                                    </h6>
                                    <div className="star_container">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-box">
                            <Link onClick={addToCartHandler}>
                                Add To Cart
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}