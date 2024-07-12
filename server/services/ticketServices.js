let Message = require('../models/ticketModel');


exports.create = (body) => {

    if (body.name === '') {
        throw new Error('Name is required')
    }
    let nameRegex = /[a-zA-z ]+/;
    let matchName = body.name.match(nameRegex);
    if (matchName == null) {
        throw new Error('Please enter a valid name');
    }
    if (matchName.input !== matchName[0]) {
        throw new Error('Please enter a valid name');
    }


    if (body.phoneNumber === '') {
        throw new Error('Phone number is required')
    }


    let phoneRegex = /[0-9]+/;
    let matchPhone = body.phoneNumber.match(phoneRegex);

    if (matchPhone == null) {
        throw new Error('Please enter a valid phone number');
    }
    if (matchPhone.input !== matchPhone[0]) {
        throw new Error('Please enter a valid phone number');
    }
    if (isNaN(Number(body.phoneNumber))) {
        throw new Error('Please enter a valid phone number');
    }



    if (body.email === '') {
        throw new Error('Email is required')
    }


    let emailRegex = /[a-zA-z1-9._]+@[a-z]+.[a-z]+/;


    let match = body.email.match(emailRegex);

    if (match == null) {
        throw new Error('Please enter a valid email');
    }
    if (match.input !== match[0]) {
        throw new Error('Please enter a valid email');
    }





    if (body.message === '') {
        throw new Error('Message is required');
    }

    let messageRegex = /[a-zA-z1-9. ,?!]+/;
    let matchMessage = (body.message.match(messageRegex));
    if (matchMessage == null) {
        throw new Error('Message must be valid statement');
    }
    if (body.message.length < 10) {
        throw new Error('Message must be at least 10 character');
    }
    if (matchMessage.input !== matchMessage[0]) {
        throw new Error('Message may only consist of letters and numbers');
    }



    let createe = Message.create(body);
    return createe;
}


exports.getInfo = (id) => {
    let ticket = Message.findById(id);
    return ticket;
}

exports.update = (id, body) => {
    let ticket = Message.findByIdAndUpdate(id, body);
    return ticket;
}
exports.delete = (id) => {
    let ticket = Message.findByIdAndDelete(id);
    return ticket;
}


