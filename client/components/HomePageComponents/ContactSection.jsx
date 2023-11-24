import { useState } from "react"

export default function ContactSection() {

    let [name, setName] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');

    let body = {
        name,
        phoneNumber,
        email,
        message
    }

    function formSubmiteHanlder(e) {
        e.preventDefault();
        let btn = document.getElementById('submitBtnContact');
        btn.textContent = 'SUCCESSFULLY SENT';
        fetch('http://localhost:3000/posts/tickets', {
            method: "POST",
            body: JSON.stringify({
                body
            }),
            headers: { 'Content-Type': "application/json" }
        })
        setName('')
        setPhoneNumber('')
        setEmail('')
        setMessage('')
        setTimeout(() => {
            btn.textContent = 'SEND';
        }, 5000)



    }


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
                                    <button id="submitBtnContact">
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
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}