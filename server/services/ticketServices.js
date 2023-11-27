let Message = require('../models/ticketModel');


exports.create = (body) => {

    if (body.name === '') {
        throw new Error('Name is required')
    }

    if (body.phoneNumber === '') {
        throw new Error('Phone number is required')
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


