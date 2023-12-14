import { Link } from 'react-router-dom'
import { useCookies } from "react-cookie";
import { useEffect, useState } from 'react';


export default function ProductSection() {

    let [cookie, setCookie] = useCookies('[token]');
    let [errorMessage, setErrorMessage] = useState(<></>)

    useEffect(() => {
        fetch(`http://localhost:3000/posts/likes/${cookie.token}`, {
            method: 'GET',
            mode: 'cors',
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(result => {
                result.likes.map((x) => {
                    if (x === '250') {
                        document.getElementById('like250').textContent = 'Unlike'
                    } else if (x === '300') {
                        document.getElementById('like300').textContent = 'Unlike'
                    } else if (x === '400') {
                        document.getElementById('like400').textContent = 'Unlike'
                    } else if (x === '410') {
                        document.getElementById('like410').textContent = 'Unlike'
                    } else if (x === '350') {
                        document.getElementById('like350').textContent = 'Unlike'
                    } else if (x === '200') {
                        document.getElementById('like200').textContent = 'Unlike'
                    } else if (x === '190') {
                        document.getElementById('like190').textContent = 'Unlike'
                    } else if (x === '310') {
                        document.getElementById('like310').textContent = 'Unlike'
                    } else if (x === '390') {
                        document.getElementById('like390').textContent = 'Unlike'
                    }
                })
            })
    }, [])

    async function addToCartHandler(e) {
        e.preventDefault()
        let body = {
            token: cookie.token,
            watch: e.target.id
        }
        if (cookie.token !== undefined) {
            e.target.textContent = "Added"
            setTimeout(() => {
                e.target.textContent = 'Add to cart'
            }, 2500)
            fetch('http://localhost:3000/posts/addToCart', {
                method: 'POST',
                body: JSON.stringify(body),
                mode: 'cors',
                headers: { "Content-Type": "application/json" }
            })
        } else {
            let classId1 = ''
            if (e.target.id === '250' || e.target.id === '300' || e.target.id === '400') {
                classId1 = 'homeProductsErrorMessageAdd';
            } else if (e.target.id === '410' || e.target.id === '350' || e.target.id === '200') {
                classId1 = 'homeProductsErrorMessage1Add';
            } else if (e.target.id === '190' || e.target.id === '310' || e.target.id === '390') {
                classId1 = 'homeProductsErrorMessage2Add';
            }
            console.log(classId1)

            setErrorMessage(
                <>
                    <div>
                        <p className={classId1}>Login to add to cart</p>
                    </div>
                </>
            )
            setTimeout(() => {
                setErrorMessage(
                    <>
                    </>
                )
            }, 2500)
        }
    }


    function likeClickHandler(e) {
        let box = (e.target.parentElement.parentElement.parentElement.parentElement);
        let id = (box.children[1].children[0].id);
        fetch('http://localhost:3000/posts/liked', {
            method: 'POST',
            body: JSON.stringify({ token: cookie.token, watchId: id }),
            mode: 'cors',
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message !== 'Success') {
                    if (data.message === 'Login in order to like') {
                        let classId1 = ''
                        if (data.watchId === '250' || data.watchId === '300' || data.watchId === '400') {
                            classId1 = 'homeProductsErrorMessage';
                        } else if (data.watchId === '410' || data.watchId === '350' || data.watchId === '200') {
                            classId1 = 'homeProductsErrorMessage1';
                        } else if (data.watchId === '190' || data.watchId === '310' || data.watchId === '390') {
                            classId1 = 'homeProductsErrorMessage2';
                        }
                        setErrorMessage(
                            <>
                                <div>
                                    <p className={classId1}>{data.message}</p>
                                </div>
                            </>
                        )
                        setTimeout(() => {
                            setErrorMessage(
                                <>
                                </>
                            )
                        }, 2500)
                    } else {
                        fetch('http://localhost:3000/posts/unlike', {
                            method: 'PUT',
                            body: JSON.stringify({ token: cookie.token, watchId: id }),
                            mode: 'cors',
                            headers: { "Content-Type": "application/json" }
                        })
                            .then(res => res.json())
                            .then(result => {
                                if (result.message === 'Success') {
                                    e.target.textContent = 'Like';
                                }
                            })
                    }

                } else {
                    e.target.textContent = 'Unlike';
                }

            });

    }

    return (
        <>
            <section className="product_section ">

                <div className="container">
                    {errorMessage}
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
                                        <h6 onClick={likeClickHandler} id="like250">
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
                                <Link onClick={addToCartHandler} id="250">
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
                                        <h6 onClick={likeClickHandler} id="like300">
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
                                <Link onClick={addToCartHandler} id="300">
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
                                        <h6 onClick={likeClickHandler} id="like400">
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
                                <Link onClick={addToCartHandler} id="400">
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
                                            <span  >$</span> 410
                                        </h5>
                                    </div>
                                    <div className="like">
                                        <h6 onClick={likeClickHandler} id="like410">
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
                                <Link onClick={addToCartHandler} id="410">
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
                                        <h6 onClick={likeClickHandler} id="like350">
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
                                <Link onClick={addToCartHandler} id="350">
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
                                        <h6 onClick={likeClickHandler} id="like200">
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
                                <Link onClick={addToCartHandler} id="200">
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
                                        <h6 onClick={likeClickHandler} id="like190">
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
                                <Link onClick={addToCartHandler} id="190">
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
                                            <span>$</span> 310
                                        </h5>
                                    </div>
                                    <div className="like">
                                        <h6 onClick={likeClickHandler} id="like310">
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
                                <Link onClick={addToCartHandler} id="310">
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
                                            <span >$</span> 390
                                        </h5>
                                    </div>
                                    <div className="like">
                                        <h6 onClick={likeClickHandler} id="like390">
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
                                <Link onClick={addToCartHandler} id="390">
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