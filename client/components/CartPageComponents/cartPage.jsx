import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import '../../src/CartPage/App.css'

export default function CartPage() {
    let [cookie, setCookie] = useCookies('[token]')
    let [products, setProducts] = useState([]);
    let [price, setPrice] = useState(0);



    useEffect(() => {
        fetch('http://localhost:3000/posts/cartPage', {
            method: "POST",
            body: JSON.stringify({
                cookie: cookie
            }),
            headers: {
                "Content-Type": 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                let sum = data.products;
                let price = 0;
                sum.map((x) => price += Number(x))
                setPrice(price)
            }
            );
    }, []);

    useEffect(() => { 
       console.log(products)
    }, [products]);

    async function delteWatchHandler(e) {
        let watchId = e.target.className;
        fetch(`http://localhost:3000/posts/watches/${watchId}/${cookie.token}`, {
            method: "DELETE",
            mode: "cors",
            // body: JSON.stringify({
            //     cookie: cookie
            // }),
            headers: {
                "Content-Type": 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                let sum = data.products;
                let price = 0;
                sum.map((x) => price += Number(x))
                setPrice(price)
            })
    }




    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card">
                            <div className="card-body p-4">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <h5 className="mb-3">
                                            <Link to="/catalog" className="text-body">
                                                <i className="fas fa-long-arrow-alt-left me-2" />
                                                Continue shopping
                                            </Link>
                                        </h5>
                                        <hr />
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div>
                                                <p className="mb-1">Shopping cart</p>
                                                <p className="mb-0">You have {products.length} items in your cart</p>
                                            </div>

                                        </div>

                                        {products.includes('250') &&
                                            <>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div>
                                                                    <img
                                                                        src='../../public/dist/images/w1.png'
                                                                        id="cartImage1"
                                                                    // alt="Shopping item"
                                                                    // style={{ width: 65 }}
                                                                    />
                                                                </div>
                                                                <div className="ms-3">
                                                                    <h5>Eternal Elegance Chronograph</h5>
                                                                    <p className="small mb-0"></p>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div style={{ width: 50 }}>
                                                                    <h5 className="fw-normal mb-0">1</h5>
                                                                </div>
                                                                <div style={{ width: 80 }}>
                                                                    <h5 className="mb-0">$250</h5>
                                                                </div>
                                                                <a href="#!" style={{ color: "#cecece" }}>
                                                                    <i className="fas fa-trash-alt" />
                                                                </a>
                                                            </div>
                                                            <p className="deleteFromCartPage250" onClick={delteWatchHandler}>X</p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </>
                                        }
                                        {products.includes('300') &&
                                            <>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div>
                                                                    <img
                                                                        src='../../public/dist/images/w2.png'
                                                                        className="img-fluid rounded-3"
                                                                        alt="Shopping item"
                                                                        style={{ width: 65, marginRight: 10 }}
                                                                    />
                                                                </div>
                                                                <div className="ms-3">
                                                                    <h5>Sapphire Serenity Dive Watch</h5>
                                                                    <p className="small mb-0"></p>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div style={{ width: 50 }}>
                                                                    <h5 className="fw-normal mb-0">1</h5>
                                                                </div>
                                                                <div style={{ width: 80 }}>
                                                                    <h5 className="mb-0">$300</h5>
                                                                </div>
                                                                <a href="#!" style={{ color: "#cecece" }}>
                                                                    <i className="fas fa-trash-alt" />
                                                                </a>
                                                                <p className="deleteFromCartPage300" onClick={delteWatchHandler}>X</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                        {products.includes('400') &&
                                            <>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div>
                                                                    <img
                                                                        src='../../public/dist/images/w3.png'
                                                                        className="img-fluid rounded-3"
                                                                        alt="Shopping item"
                                                                        style={{ width: 65, marginRight: 10 }}
                                                                    />
                                                                </div>
                                                                <div className="ms-3">
                                                                    <h5>Horizon Heritage Automatic</h5>
                                                                    <p className="small mb-0"></p>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div style={{ width: 50 }}>
                                                                    <h5 className="fw-normal mb-0">1</h5>
                                                                </div>
                                                                <div style={{ width: 80 }}>
                                                                    <h5 className="mb-0">$400</h5>
                                                                </div>
                                                                <a href="#!" style={{ color: "#cecece" }}>
                                                                    <i className="fas fa-trash-alt" />
                                                                </a>
                                                                <p className="deleteFromCartPage400" onClick={delteWatchHandler}>X</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                        {products.includes('410') &&
                                            <>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div>
                                                                    <img
                                                                        src='../../public/dist/images/w4.png'
                                                                        className="img-fluid rounded-3"
                                                                        alt="Shopping item"
                                                                        style={{ width: 65, marginRight: 10 }}
                                                                    />
                                                                </div>
                                                                <div className="ms-3">
                                                                    <h5>Lunar Luminescence Moonphase</h5>
                                                                    <p className="small mb-0"></p>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div style={{ width: 50 }}>
                                                                    <h5 className="fw-normal mb-0">1</h5>
                                                                </div>
                                                                <div style={{ width: 80 }}>
                                                                    <h5 className="mb-0">$410</h5>
                                                                </div>
                                                                <a href="#!" style={{ color: "#cecece" }}>
                                                                    <i className="fas fa-trash-alt" />
                                                                </a>
                                                                <p className="deleteFromCartPage410" onClick={delteWatchHandler}>X</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                        {products.includes('350') &&
                                            <>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div>
                                                                    <img
                                                                        src='../../public/dist/images/w5.png'
                                                                        className="img-fluid rounded-3"
                                                                        alt="Shopping item"
                                                                        style={{ width: 65, marginRight: 10 }}
                                                                    />
                                                                </div>
                                                                <div className="ms-3">
                                                                    <h5>Majestic Marvel Swiss Classic</h5>
                                                                    <p className="small mb-0"></p>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div style={{ width: 50 }}>
                                                                    <h5 className="fw-normal mb-0">1</h5>
                                                                </div>
                                                                <div style={{ width: 80 }}>
                                                                    <h5 className="mb-0">$350</h5>
                                                                </div>
                                                                <a href="#!" style={{ color: "#cecece" }}>
                                                                    <i className="fas fa-trash-alt" />
                                                                </a>
                                                                <p className="deleteFromCartPage350" onClick={delteWatchHandler}>X</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                        {products.includes('200') &&
                                            <>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div>
                                                                    <img
                                                                        src='../../public/dist/images/w6.png'
                                                                        className="img-fluid rounded-3"
                                                                        alt="Shopping item"
                                                                        style={{ width: 65, marginRight: 10 }}
                                                                    />
                                                                </div>
                                                                <div className="ms-3">
                                                                    <h5>Velocity Voyager Pilot Watch</h5>
                                                                    <p className="small mb-0"></p>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div style={{ width: 50 }}>
                                                                    <h5 className="fw-normal mb-0">1</h5>
                                                                </div>
                                                                <div style={{ width: 80 }}>
                                                                    <h5 className="mb-0">$200</h5>
                                                                </div>
                                                                <a href="#!" style={{ color: "#cecece" }}>
                                                                    <i className="fas fa-trash-alt" />
                                                                </a>
                                                                <p className="deleteFromCartPage200" onClick={delteWatchHandler}>X</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                        {products.includes('190') &&
                                            <>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div>
                                                                    <img
                                                                        src='../../public/dist/images/w7.png'
                                                                        className="img-fluid rounded-3"
                                                                        alt="Shopping item"
                                                                        style={{ width: 65, marginRight: 10 }}
                                                                    />
                                                                </div>
                                                                <div className="ms-3">
                                                                    <h5>Crimson Cascade Limited Edition</h5>
                                                                    <p className="small mb-0"></p>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div style={{ width: 50 }}>
                                                                    <h5 className="fw-normal mb-0">1</h5>
                                                                </div>
                                                                <div style={{ width: 80 }}>
                                                                    <h5 className="mb-0">$190</h5>
                                                                </div>
                                                                <a href="#!" style={{ color: "#cecece" }}>
                                                                    <i className="fas fa-trash-alt" />
                                                                </a>
                                                                <p className="deleteFromCartPage190" onClick={delteWatchHandler}>X</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                        {products.includes('310') &&
                                            <>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div>
                                                                    <img
                                                                        src='../../public/dist/images/w8.png'
                                                                        className="img-fluid rounded-3"
                                                                        alt="Shopping item"
                                                                        style={{ width: 65, marginRight: 10 }}
                                                                    />
                                                                </div>
                                                                <div className="ms-3">
                                                                    <h5>Nautical Marine Chronometer</h5>
                                                                    <p className="small mb-0"></p>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div style={{ width: 50 }}>
                                                                    <h5 className="fw-normal mb-0">1</h5>
                                                                </div>
                                                                <div style={{ width: 80 }}>
                                                                    <h5 className="mb-0">$310</h5>
                                                                </div>
                                                                <a href="#!" style={{ color: "#cecece" }}>
                                                                    <i className="fas fa-trash-alt" />
                                                                </a>
                                                                <p className="deleteFromCartPage310" onClick={delteWatchHandler}>X</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                        {products.includes('390') &&
                                            <>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div>
                                                                    <img
                                                                        src='../../public/dist/images/w9.png'
                                                                        className="img-fluid rounded-3"
                                                                        alt="Shopping item"
                                                                        style={{ width: 65, marginRight: 10 }}
                                                                    />
                                                                </div>
                                                                <div className="ms-3">
                                                                    <h5>Celestial Constellation Starlight</h5>
                                                                    <p className="small mb-0"></p>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div style={{ width: 50 }}>
                                                                    <h5 className="fw-normal mb-0">1</h5>
                                                                </div>
                                                                <div style={{ width: 80 }}>
                                                                    <h5 className="mb-0">$390</h5>
                                                                </div>
                                                                <a href="#!" style={{ color: "#cecece" }}>
                                                                    <i className="fas fa-trash-alt" />
                                                                </a>
                                                                <p className="deleteFromCartPage390" onClick={delteWatchHandler}>X</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        }




                                    </div>
                                    <div className="col-lg-5">
                                        <div className="card bg-primary text-white rounded-3">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                    <h5 className="mb-0">Card details</h5>
                                                    <img
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                        className="img-fluid rounded-3"
                                                        style={{ width: 45 }}
                                                        alt="Avatar"
                                                    />
                                                </div>
                                                <p className="small mb-2">Card type</p>
                                                <a href="#!" type="submit" className="text-white">
                                                    <img className='cartPageMasterCardLogo' src="../../public/dist/images/mastercardLogo.webp" />
                                                </a>
                                                <a href="#!" type="submit" className="text-white">
                                                    <img className='cartPageVisaLogo' src="../../public/dist/images/visaLogo.jpg" />
                                                </a>
                                                <a href="#!" type="submit" className="text-white">
                                                    <img className='cartPageAmexLogo' src="../../public/dist/images/amexLogo.png" />
                                                </a>
                                                <a href="#!" type="submit" className="text-white">
                                                    <img className='cartPagePaypalLogo' src="../../public/dist/images/paypalLogo.jpg" />
                                                </a>
                                                <form className="mt-4">
                                                    <div className="form-outline form-white mb-4">
                                                        <input
                                                            type="text"
                                                            id="typeName"
                                                            className="form-control form-control-lg"
                                                            siez={17}
                                                            placeholder="Cardholder's Name"
                                                        />
                                                        <label className="form-label" htmlFor="typeName">
                                                            Cardholder's Name
                                                        </label>
                                                    </div>
                                                    <div className="form-outline form-white mb-4">
                                                        <input
                                                            type="text"
                                                            id="typeText"
                                                            className="form-control form-control-lg"
                                                            siez={17}
                                                            placeholder="1234 5678 9012 3457"
                                                            minLength={19}
                                                            maxLength={19}
                                                        />
                                                        <label className="form-label" htmlFor="typeText">
                                                            Card Number
                                                        </label>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <div className="col-md-6">
                                                            <div className="form-outline form-white">
                                                                <input
                                                                    type="text"
                                                                    id="typeExp"
                                                                    className="form-control form-control-lg"
                                                                    placeholder="MM/YYYY"
                                                                    size={7}
                                                                    minLength={7}
                                                                    maxLength={7}
                                                                />
                                                                <label className="form-label" htmlFor="typeExp">
                                                                    Expiration
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-outline form-white">
                                                                <input
                                                                    type="password"
                                                                    id="typeText"
                                                                    className="form-control form-control-lg"
                                                                    placeholder="●●●"
                                                                    size={1}
                                                                    minLength={3}
                                                                    maxLength={3}
                                                                />
                                                                <label className="form-label" htmlFor="typeText">
                                                                    Cvv
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <hr className="my-4" />
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Subtotal</p>
                                                    <p className="mb-2">${price}</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Shipping</p>
                                                    <p className="mb-2">$20.00</p>
                                                </div>
                                                <div className="d-flex justify-content-between mb-4">
                                                    <p className="mb-2">Total(Incl. taxes)</p>
                                                    <p className="mb-2">${price + 20}</p>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="btn btn-info btn-block btn-lg"
                                                >
                                                    <div className="d-flex justify-content-between">
                                                        <span>${price + 20}</span>
                                                        <span>
                                                            Checkout{" "}
                                                            <i className="fas fa-long-arrow-alt-right ms-2" />
                                                        </span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}