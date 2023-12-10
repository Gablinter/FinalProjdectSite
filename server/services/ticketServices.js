let Message = require('../models/ticketModel');


exports.create = (body) => {

    if (body.name === '') {
        throw new Error('Name is required')
    }
    let nameRegex = /[a-zA-z ]+/g;
    let matchName = body.name.match(nameRegex);


    if (matchName == null) {
        throw new Error('Please enter a valid name');
    }

    let phoneRegex = /[0-9]+/g;
    let matchPhone = body.phoneNumber.match(phoneRegex);
    if (matchPhone == null) {
        throw new Error('Please enter a valid phone number');
    }

    if (body.phoneNumber === '') {
        throw new Error('Phone number is required')
    }


    let messageRegex = /[a-zA-z1-9. ,?!]+/;
    let matchMessage = (body.message.match(messageRegex));
    if (matchMessage.input !== matchMessage[0]) {
        throw new Error('Message may only consist of letters and numbers');
    }


    if (body.email === '') {
        throw new Error('Email is required')
    }


    if (body.message === '') {
        throw new Error('Message is required');
    }

    let regex = /[a-zA-z1-9._]+@[a-z]+.[a-z]+/g;

    if (body.message.length < 10) {
        throw new Error('Message must be valid statement');
    }
    let match = body.email.match(regex);
    if (match === null) {
        throw new Error('Please enter a valid email');
    }
    if (isNaN(Number(body.phoneNumber))) {
        throw new Error('Please enter a valid phone number');
    }

    Message.create(body);
}


