let mongoose = require('mongoose');

let messageSchema = new mongoose.Schema({
    name: {
        type: String,// required: //[true, 'Username is required'], unique: [true, 'Username already in use']//minLength: [3, 'Username should be at least 3 characters'] 
    },
    phoneNumber: {
        type: String, //required: [true, 'Password is required'], minLength: [4, 'Password should be at least 4 characters long'] 
    },
    email: {
        type: String,
    },
    message: {
        type: String,
    }

})

let message = mongoose.model('message', messageSchema);

module.exports = message;