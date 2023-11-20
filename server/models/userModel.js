let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username: {
        type: String, required: [true, 'Username is required'], unique: [true, 'Username already in use']//minLength: [3, 'Username should be at least 3 characters'] 
    },
    password: {
        type: String, //required: [true, 'Password is required'], minLength: [4, 'Password should be at least 4 characters long'] 
    },
    products: {
        type: Array,
    }

})

let user = mongoose.model('user', userSchema);

module.exports = user;