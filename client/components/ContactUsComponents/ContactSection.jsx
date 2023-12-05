
import { useState } from "react";
import GoogleMapReact from 'google-map-react';

export default function ContactSection() {

    let [name, setName] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');
    let [errorMessage, setErrorMessage] = useState(<></>)

    let body = {
        name,
        phoneNumber,
        email,
        message
    }

    function formSubmiteHanlder(e) {
        e.preventDefault();
        let btn = document.getElementById('sendTicket');
        btn.textContent = 'SUCCESSFULLY SENT';
        fetch('http://localhost:3000/posts/tickets', {
            method: "POST",
            body: JSON.stringify({
                body
            }),
            headers: { 'Content-Type': "application/json" }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message !== 'Success') {
                    console.log(data.message)
                    setErrorMessage(
                        <>
                            <p className="contactErorMessage">{data.message}</p>
                        </>
                    )

                    setTimeout(() => {
                        setErrorMessage(
                            <>
                            </>
                        )
                    }, 2500)
                } else {
                    console.log('Raboti')
                    btn.textContent = 'SUCCESSFULLY SENT';
                    setName('')
                    setPhoneNumber('')
                    setEmail('')
                    setMessage('')
                    setTimeout(() => {
                        btn.textContent = 'SEND';
                    }, 5000)

                }
            })
    }


    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const defaultProps = {
        center: {
            lat: 42.649068,
            lng: 23.344907
        },
        zoom: 11,
    };

    function nameChangeHandler(e) {
        setName(e.target.value)
    }

    function phoneNumberChangeHandler(e) {
        setPhoneNumber(e.target.value);
    }

    function emailChangeHandler(e) {
        setEmail(e.target.value);
    }

    function messageChangeHandler(e) {
        setMessage(e.target.value);
    }
    return (
        <section className="contact_section layout_padding">
            <div className="container">
                {errorMessage}
                <div className="heading_container">
                    <h2>
                        Contact Us
                    </h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form_container">
                            <form method="POST" onSubmit={formSubmiteHanlder}>
                                <div>
                                    <input type="text" placeholder="Your Name" value={name} onChange={nameChangeHandler} />
                                </div>
                                <div>
                                    <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={phoneNumberChangeHandler} />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" value={email} onChange={emailChangeHandler} />
                                </div>
                                <div>
                                    <input type="text" className="message-box" placeholder="Message" value={message} onChange={messageChangeHandler} />
                                </div>
                                <div className="btn_box">
                                    <button id="sendTicket">
                                        SEND
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="map_container">
                            <div className="map">
                                <div id="googleMap">
                                <div style={{ height: '100vh', width: '100%' }}>
                                        <GoogleMapReact
                                            bootstrapURLKeys={{key: "AIzaSyDB3-r8KWTgnW5HwvI3wiY2yN3YYNxzoIk"}}
                                            defaultCenter={defaultProps.center}
                                            defaultZoom={defaultProps.zoom}
                                        >
                                            <AnyReactComponent
                                                lat={42.649068}
                                                lng={23.344907}
                                                text="My Marker"
                                            />
                                        </GoogleMapReact>
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