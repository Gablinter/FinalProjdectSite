export default function InfoSection() {
    return (
        <section className="info_section layout_padding2">
            <div className="container">
                <div className="info_logo">
                    <h2>
                        WatchWonders
                    </h2>
                </div>
                <div className="row">

                    <div className="col-md-3">
                        <div className="info_contact">
                            <h5>
                                About Shop
                            </h5>
                            <div>
                                <div className="img-box">
                                    <img src="../../public/dist/images/location-white.png" width="18px" alt="" />
                                </div>
                                <p>
                                    Address
                                </p>
                            </div>
                            <div>
                                <div className="img-box">
                                    <img src="../../public/dist/images/telephone-white.png" width="12px" alt="" />
                                </div>
                                <p>
                                    +359 898938992 
                                </p>
                            </div>
                            <div>
                                <div className="img-box">
                                    <img src="../../public/dist/images/envelope-white.png" width="18px" alt="" />
                                </div>
                                <p>
                                    watchwonders@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="info_info">
                            <h5>
                                Informations
                            </h5>
                            <p>
                            In our online watch shop, we offer a diverse and carefully curated selection of timepieces to cater to every discerning taste. From classic and vintage-inspired watches to cutting-edge smartwatches, our collection encompasses a wide range of styles and functionalities.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="info_insta">
                            <h5>
                                Instagram
                            </h5>
                            <div className="insta_container">
                                <div className="row m-0">
                                    <div className="col-4 px-0">
                                        <a href="">
                                            <div className="insta-box b-1">
                                                <img src=".../../public/dist/images/w1.png" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-4 px-0">
                                        <a href="/catalog">
                                            <div className="insta-box b-1">
                                                <img src=".../../public/dist/images/w2.png" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-4 px-0">
                                        <a href="/catalog">
                                            <div className="insta-box b-1">
                                                <img src=".../../public/dist/images/w3.png" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-4 px-0">
                                        <a href="/catalog">
                                            <div className="insta-box b-1">
                                                <img src=".../../public/dist/images/w4.png" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-4 px-0">
                                        <a href="/catalog">
                                            <div className="insta-box b-1">
                                                <img src=".../../public/dist/images/w5.png" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-4 px-0">
                                        <a href="/catalog">
                                            <div className="insta-box b-1">
                                                <img src=".../../public/dist/images/w6.png" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="info_form ">
                            <h5>
                                Newsletter
                            </h5>
                            <form action="">
                                <input type="email" placeholder="Enter your email" />
                                <button>
                                    Subscribe
                                </button>
                            </form>
                            <div className="social_box">
                                <a href="https://www.facebook.com">
                                    <img src=".../../public/dist/images/fb.png" alt="" />
                                </a>
                                <a href="https://twitter.com">
                                    <img src=".../../public/dist/images/twitter.png" alt="" />
                                </a>
                                <a href="https://www.linkedin.com">
                                    <img src=".../../public/dist/images/linkedin.png" alt="" />
                                </a>
                                <a href="https://www.youtube.com/">
                                    <img src=".../../public/dist/images/youtube.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}