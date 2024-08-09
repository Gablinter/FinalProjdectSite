import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import "../../src/TicketPage/Tickets.css"

export default function ContactSection() {

    let [cookie, setCookie] = useCookies('[token]')
    let [name, setName] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');
    let [errorMessage, setErrorMessage] = useState(<></>);
    let [editButton, seteditButton] = useState(<></>);
    let [deleteButton, setDeleteButton] = useState(<></>);
    let [submitButton, setSubmitButton] = useState(<></>);
    let [tickets, setTickets] = useState(<></>)
    let body = {
        name,
        phoneNumber,
        email,
        message
    }


    useEffect(() => {
        let token = cookie.token;

        fetch(`http://localhost:3000/posts/tickets/${token}`, {
            method: "GET",
            mode: "cors",

        })
            .then((res) => res.json())
            .then((data) => {
                let info = data.info; 
                setTickets(info.map((x) =>
                    <article className="ticketConteinter" key={x._id}>

                        {/* // {/* < div className="ticketConteinter" key={x._id}> */}
                        <h5>{x.message.substring(0, 10)}...</h5>
                        <button type="button" onClick={viewMessageHandler} id={x._id} className="viewMessageButton"> View Message</button>
                        {/* </div > */}
                    </article >

                )
                )
                
            }
            );
    }, [tickets]);

    function viewMessageHandler(e) {
        e.preventDefault()
        let id = e.target.id

        fetch(`http://localhost:3000/posts/getInfo/${id}`, {
            method: "GET",
            headers: { 'Content-Type': "application/json" }
        })
            .then((res) => res.json())
            .then((data) => {
                let sendBtn = document.getElementById('sendTicket');
                seteditButton(<button className="editButtonTicket" id={e.target.id} onClick={editButtonHandler}>Edit</button>)
                sendBtn.style.display = "none"
                let info = data.info;
                setName(info.name);
                setPhoneNumber(info.phoneNumber);
                setEmail(info.email);
                setMessage(info.message);
            })
        let nameInput = document.getElementById('nameInput');
        let phoneInput = document.getElementById('phoneInput');
        let emailInput = document.getElementById('emailInput');
        let messageInput = document.getElementById('msgInput');
        nameInput.readOnly = true;
        phoneInput.readOnly = true;
        emailInput.readOnly = true;
        messageInput.readOnly = true;
    }


    function formSubmiteHanlder(e) {
        e.preventDefault();
        let btn = document.getElementById('sendTicket');
        fetch('http://localhost:3000/posts/tickets/', {
            method: "POST",
            body: JSON.stringify({
                body
            }),
            headers: { 'Content-Type': "application/json" }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message !== 'Success') {
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
                } else if (data.message === "Success") {
                    btn.textContent = 'SUCCESSFULLY SENT';
                    setName('')
                    setPhoneNumber('')
                    setEmail('')
                    setMessage('')

                    seteditButton(<button className="editButton" id={data.id} onClick={editButtonHandler}>Edit</button>)


                    setTimeout(() => {
                        seteditButton(<></>)
                        btn.textContent = 'SEND';
                    }, 5000)



                }
            })
    }

    function editButtonHandler(e) {
        e.preventDefault();
        let id = (e.target.id)
        let phoneInput = document.getElementById('phoneInput');
        let emailInput = document.getElementById('emailInput');
        let messageInput = document.getElementById('msgInput');
        phoneInput.readOnly = false;
        emailInput.readOnly = false;
        messageInput.readOnly = false;
        setDeleteButton(<button className="deleteButton" id={id} onClick={deleteButtonHandler}>DELETE</button>);
        setSubmitButton(<button className="submitButton" id={id} onClick={submitFormHandler}>SUBMIT</button>);
        seteditButton(<></>)

        fetch(`http://localhost:3000/posts/getInfo/${id}`, {
            method: "GET",
            headers: { 'Content-Type': "application/json" }
        })
            .then((res) => res.json())
            .then((data) => {
                let btn = document.getElementById('sendTicket');
                btn.style.display = "none"
                let info = data.info;
                setName(info.name);
                setPhoneNumber(info.phoneNumber);
                setEmail(info.email);
                setMessage(info.message);
            })
    }

    function deleteButtonHandler(e) {
        e.preventDefault();
        let id = e.target.id;
        fetch(`http://localhost:3000/posts/deleteTicket/${id}`, {
            method: "DELETE",
            headers: { 'Content-Type': "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                if (data.message === 'Success') {
                    setName('');
                    setPhoneNumber('');
                    setEmail('');
                    setMessage('');
                    setSubmitButton(<></>);
                    setDeleteButton(<button className="submitButton" id={id} onClick={submitFormHandler}>DELETED</button>);
                    setTimeout(() => {
                        setDeleteButton(<></>);
                        let btn = document.getElementById('sendTicket');
                        btn.style.display = "block"
                    }, 3000)
                } else {
                    errorMessage(data.message)
                }
            })
    }

    function submitFormHandler(e) {
        e.preventDefault();
        let id = e.target.id;
        let nameInput = document.getElementById('nameInput').value;
        let phoneInput = document.getElementById('phoneInput').value;
        let emailInput = document.getElementById('emailInput').value;
        let msgInput = document.getElementById('msgInput').value;
        let body1 = {
            name: nameInput,
            phoneNumber: phoneInput,
            email: emailInput,
            message: msgInput
        }
        fetch(`http://localhost:3000/posts/updateTicket/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                body1
            }),
            headers: { 'Content-Type': "application/json" }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === 'Success') {
                    setName('');
                    setPhoneNumber('');
                    setEmail('');
                    setMessage('');
                    setDeleteButton(<></>);
                    setSubmitButton(<button className="submitButton" id={id} onClick={submitFormHandler}>UPDATED</button>);
                    setTimeout(() => {
                        setSubmitButton(<></>);
                        let btn = document.getElementById('sendTicket');
                        btn.style.display = "block"
                    }, 3000)
                } else {
                    errorMessage(data.message)
                }
            })
    }




    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    function nameChangeHandler(e) {
        setName(e.target.value);
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
        <>
            <section className="tickets">
                <div>
                    <h1 id="headerTickets">Tickets</h1>
                </div>
                <div className="ticketsDiv">
                    {/* <div className="ticketConteinter">
                        <h3>Name:{username}    </h3>
                        <button>View Message</button>

                    </div>
                    <div className="ticketConteinter2">
                        <h3>Name:{username}    </h3>
                        <button>View Message</button>

                    </div> */}
                    {tickets}

                </div>
            </section>

            <section className="contact_section layout_padding">
                <div className="container" id="ticketsContact">
                    {errorMessage}
                    <div className="heading_container">
                        <h2>
                            Contact Us
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form_container">
                                <form method="POST">
                                    <div>
                                        <input id="nameInput" type="text" placeholder="Your Name" value={name} onChange={nameChangeHandler}/>
                                    </div>
                                    <div>
                                        <input id="phoneInput" type="text" placeholder="Phone Number" value={phoneNumber} onChange={phoneNumberChangeHandler} />
                                    </div>
                                    <div>
                                        <input id="emailInput" type="email" placeholder="Email" value={email} onChange={emailChangeHandler} />
                                    </div>
                                    <div>
                                        <input id="msgInput" type="text" className="message-box" placeholder="Message" value={message} onChange={messageChangeHandler} />
                                    </div>
                                    <div className="btn_box">
                                        <button id="sendTicket" onClick={formSubmiteHanlder}>
                                            SEND
                                        </button>
                                        {submitButton}
                                    </div>
                                </form>
                                {editButton}
                                {deleteButton}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}