import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie";


export default function ProductSection() {

    let [cookie, setCookie] = useCookies('[token]');
    let navigate1 = useNavigate()

    async function returnNavigate() {

        let isValid = cookie.hasOwnProperty("token");
        if (!isValid) {
            return '/users/login'
        } else {
            return '/cartPage'
        }
    }



    async function addToCartHandler(e) {
        e.preventDefault()
        let body = {
            token: cookie.token,
            watch: e.target.id
        }
        if (cookie.token !== undefined) {
            fetch('http://localhost:3000/posts/addToCart', {
                method: 'POST',
                body: JSON.stringify(body),
                mode: 'cors',
                headers: { "Content-Type": "application/json" }
            })
        }
        let navigate = await returnNavigate()
        navigate1(navigate)
    }


    return (
        <>
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
                                            Eternal Elegance Chronograph
                                        </h6>
                                        <h5 className='priceStyle'>
                                            <span  >$</span> 250
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
                                <Link onClick={addToCartHandler} id="1">
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
                                            Sapphire Serenity Dive Watch
                                        </h6>
                                        <h5 className='priceStyle'>
                                            <span  >$</span> 300
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
                                <Link onClick={addToCartHandler} id="2">
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
                                            Horizon Heritage Automatic
                                        </h6>
                                        <h5 className='priceStyle'>
                                            <span  >$</span> 400
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
                                <Link onClick={addToCartHandler} id="3">
                                    Add To Cart
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product_section ">
                <div className="container">
                    <div className="product_heading">
                        <h2>
                            Feature Watches
                        </h2>
                    </div>
                    <div className="product_container">
                        <div className="box">
                            <div className="box-content">
                                <div className="img-box">
                                    <img src="../../public/dist/images/w4.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <div className="text">
                                        <h6>
                                            Lunar Luminescence Moonphase
                                        </h6>
                                        <h5 className='priceStyle'>
                                            <span  >$</span> 400
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
                                <Link onClick={addToCartHandler} id="4">
                                    Add To Cart
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-content">
                                <div className="img-box">
                                    <img src="../../public/dist/images/w5.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <div className="text">
                                        <h6>
                                            Majestic Marvel Swiss Classic
                                        </h6>
                                        <h5 className='priceStyle'>
                                            <span  >$</span> 350
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
                                <Link onClick={addToCartHandler} id="5">
                                    Add To Cart
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-content">
                                <div className="img-box">
                                    <img src="../../public/dist/images/w6.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <div className="text">
                                        <h6>
                                            Velocity Voyager Pilot Watch
                                        </h6>
                                        <h5 className='priceStyle'>
                                            <span  >$</span> 200
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
                                <Link onClick={addToCartHandler} id="6">
                                    Add To Cart
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="product_section ">
                <div className="container">
                    <div className="product_heading">
                        <h2>
                            New Arrivals
                        </h2>
                    </div>
                    <div className="product_container">
                        <div className="box">
                            <div className="box-content">
                                <div className="img-box">
                                    <img src="../../public/dist/images/w7.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <div className="text">
                                        <h6>
                                            Crimson Cascade Limited Edition
                                        </h6>
                                        <h5 className='priceStyle'>
                                            <span >$</span> 190
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
                                <Link onClick={addToCartHandler} id="7">
                                    Add To Cart
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-content">
                                <div className="img-box">
                                    <img src="../../public/dist/images/w8.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <div className="text">
                                        <h6>
                                            Nautical Marine Chronometer
                                        </h6>
                                        <h5 className='priceStyle'>
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
                                <Link onClick={addToCartHandler} id="8">
                                    Add To Cart
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-content">
                                <div className="img-box">
                                    <img src=".../../public/dist/images/w9.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <div className="text">
                                        <h6>
                                            Celestial Constellation Starlight
                                        </h6>
                                        <h5 className='priceStyle'>
                                            <span >$</span> 400
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
                                <Link onClick={addToCartHandler} id="9">
                                    Add To Cart
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}