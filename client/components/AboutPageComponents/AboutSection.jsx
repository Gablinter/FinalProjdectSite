import { Link } from 'react-router-dom'
import '../../src/AboptPage/About.css'

export default function AboutSection() {
    return (
        <section className="about_section layout_padding">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="img_container">
                            <div className="img-box b1">
                                <img src="../../public/dist/images/a-1.jpg" alt="" />
                            </div>
                            <div className="img-box b2">
                                <img src="../../public/dist/images/a-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detail-box">
                            <h2>
                                About Our Shop
                            </h2>
                            <p>

                                Welcome to WatchWonders, where time meets style in the click of a second! As passionate watch enthusiasts, we curate a collection that blends the timeless elegance of classic designs with the cutting-edge innovation of contemporary timepieces.
                            </p>
                            <Link to="/readMore">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}