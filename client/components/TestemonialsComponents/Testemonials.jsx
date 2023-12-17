import '../../src/TestemonialsPage/Testemonials.css'

export default function Testemonial() {
    return (
        <section className="client_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        Testimonial
                    </h2>
                </div>
            </div>
            <div id="customCarousel2" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 mx-auto">
                                    <div className="box">
                                        <div className="img-box">
                                            <img src="../../public/dist/images/client.jpg" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <div className="client_info">
                                                <div className="client_name">
                                                    <h5>
                                                        George
                                                    </h5>
                                                    <h6>
                                                        Customer
                                                    </h6>
                                                </div>
                                                <i className="fa fa-quote-left" aria-hidden="true"></i>
                                            </div>
                                            <p>
                                                I am delighted to share my exceptional experience with WatchWonders, an online watch shop that has truly redefined the art of timekeeping. As a passionate watch enthusiast, I have explored numerous online platforms, but WatchWonders stands out as a beacon of excellence.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 mx-auto">
                                    <div className="box">
                                        <div className="img-box">
                                            <img src="../../public/dist/images/client.jpg" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <div className="client_info">
                                                <div className="client_name">
                                                    <h5>
                                                        Pesho
                                                    </h5>
                                                    <h6>
                                                        Customer
                                                    </h6>
                                                </div>
                                                <i className="fa fa-quote-left" aria-hidden="true"></i>
                                            </div>
                                            <p>
                                                What sets WatchWonders apart is not only the remarkable variety but also the commitment to quality. Each watch showcased reflects precision craftsmanship and attention to detail, ensuring a level of excellence that exceeds expectations. The watches I purchased from WatchWonders have not only proven to be reliable timekeepers but also stylish accessories that garner compliments on every occasion.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 mx-auto">
                                    <div className="box">
                                        <div className="img-box">
                                            <img src="../../public/dist/images/client.jpg" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <div className="client_info">
                                                <div className="client_name">
                                                    <h5>
                                                        Nikola
                                                    </h5>
                                                    <h6>
                                                        Customer
                                                    </h6>
                                                </div>
                                                <i className="fa fa-quote-left" aria-hidden="true"></i>
                                            </div>
                                            <p>
                                                From the moment I navigated their user-friendly website, I was captivated by the extensive and curated collection of timepieces. Whether you're seeking a classic elegance, a sporty companion, or a cutting-edge design, WatchWonders offers a diverse range to suit every taste and occasion.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ol className="carousel-indicators">
                    <li data-target="#customCarousel2" data-slide-to="0" className="active"></li>
                    <li data-target="#customCarousel2" data-slide-to="1"></li>
                    <li data-target="#customCarousel2" data-slide-to="2"></li>
                </ol>
            </div>
        </section>
    )
}