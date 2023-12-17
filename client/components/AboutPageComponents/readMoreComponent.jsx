import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function ReadMoreComponent() {
    let naviagte = useNavigate();

    function redirectHandled() {

        naviagte('/catalog')
    }

    return (
        <>
            <div className="readMore-row">
                <div className='img-1-div'>
                    <img className="img-1" src="../../public/dist/images/a-1.jpg" />
                    <button onClick={redirectHandled} className='shopNow1'>Show Now</button>
                </div>
                <div className="readMore-column">
                    <div className='img-2-div'>
                        <img className="img-2" src="../../public/dist/images/a-2.jpg" />
                        <button onClick={redirectHandled} className='shopNow'>Show Now</button>
                    </div>
                </div>
            </div>

            <h3 className="readMore">Explore our online watch store to discover a curated selection of watches that cater to every taste and occasion. From sophisticated dress watches that elevate your formal attire to robust and reliable sports watches for the adventurous spirits, we have something for everyone.

                At WathcWonders, we believe that a watch is more than just a timekeeping device; it's a statement of your personality and an accessory that complements your unique style. Our collection showcases a diverse range of brands, ensuring that you find the perfect watch that resonates with your individuality.

                Whether you appreciate the intricate craftsmanship of mechanical watches or prefer the precision of modern quartz movements, our shop caters to all horological preferences. We take pride in offering a seamless online shopping experience, providing detailed product descriptions and high-quality images to help you make an informed decision.

                Customer satisfaction is our priority, and we strive to exceed expectations with prompt and reliable delivery services. Our commitment to quality extends to our customer service, where our knowledgeable team is ready to assist you with any inquiries or concerns.

                Indulge in the world of horology with WathcWonders, where each watch is not just a timepiece but a reflection of your unique journey. Find the perfect companion for every moment, and let your wrist tell a story.

                Browse our collection now and discover the perfect watch that transcends time and style. Welcome to WathcWonders, where elegance and precision come together in every tick.</h3>
            <div className='align-center'>
                <Link to='/about'>
                    <button className='goBackBtn' >Go back</button>
                </Link>
            </div>
        </>
    )
}