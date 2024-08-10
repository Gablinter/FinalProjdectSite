import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import '../../src/CartPage/App.css'

export default function CartPage() {
    let [cookie, setCookie] = useCookies('[token]')
    let [products, setProducts] = useState([]);
    let [price, setPrice] = useState(0);
    let [cart, setCart] = useState(<></>);


    useEffect(() => {
        fetch(`http://localhost:3000/posts/cartPage/${cookie.token}`, {
            method: "GET",
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


    useEffect( () => {
        let name;
        let img;
        let syl;
        setCart(products.map((x) => {
            if (x == 250) {
                name = 'Eternal Elegance Chronograph';
                img = "../../public/dist/images/w1.png";
                syl = "deleteFromCartPage250";
            } else if (x == 300) {
                name = 'Sapphire Serenity Dive Watch'
                img = "../../public/dist/images/w2.png"
                syl = "deleteFromCartPage300";
            } else if (x == 400) {
                name = 'Horizon Heritage Automatic'
                img = "../../public/dist/images/w3.png"
                syl = "deleteFromCartPage400";
            } else if (x == 410) {
                name = 'Lunar Luminescence Moonphase'
                img = "../../public/dist/images/w4.png"
                syl = "deleteFromCartPage410";
            } else if (x == 350) {
                name = 'Majestic Marvel Swiss Classic'
                img = "../../public/dist/images/w5.png"
                syl = "deleteFromCartPage350";
            } else if (x == 200) {
                name = 'Velocity Voyager Pilot Watch'
                img = "../../public/dist/images/w6.png"
                syl = "deleteFromCartPage200";
            } else if (x == 190) {
                name = 'Crimson Cascade Limited Edition'
                img = "../../public/dist/images/w7.png"
                syl = "deleteFromCartPage3190";
            } else if (x == 310) {
                name = 'Nautical Marine Chronometer'
                img = "../../public/dist/images/w8.png"
                syl = "deleteFromCartPage310";
            } else if (x == 390) {
                name = 'Celestial Constellation Starlight'
                img = "../../public/dist/images/w9.png"
                syl = "deleteFromCartPage390";
            };
            // let watchId = x;
            // fetch(`http://localhost:3000/posts/watches/${watchId}`, {
            //     method: "GET",
            //     headers: {
            //         "Content-Type": 'application/json'
            //     }
            // })
            //     .then((res) => res.json())
            //     .then((data) => {
            //         name = data.watches.name;
            //         img = data.watches.img;
            //         syl = `deleteFromCartPage${price}`;
            //         console.log(name)
            //     }
            //     );

            return (
                <div className="card mb-3" key={name}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                                <div>
                                    <img
                                        src={img}
                                        className="img-fluid rounded-3"
                                        alt="Shopping item"
                                        style={{ width: 65, marginRight: 10 }}
                                    />
                                </div>
                                <div className="ms-3">
                                    <h5>{name}</h5>
                                    <p className="small mb-0"></p>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                                <div style={{ width: 50 }}>
                                    <h5 className="fw-normal mb-0">1</h5>
                                </div>
                                <div style={{ width: 80 }}>
                                    <h5 className="mb-0">${x}</h5>
                                </div>
                                <a href="#!" style={{ color: "#cecece" }}>
                                    <i className="fas fa-trash-alt" />
                                </a>
                                <p className={syl} onClick={delteWatchHandler}>X</p>
                            </div>
                        </div>
                    </div>
                </div>)
        }
        )
        )
    }, [products]);



    // useEffect(() => { 
    //    console.log(products)
    // }, [products]);

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
                                        {cart}



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