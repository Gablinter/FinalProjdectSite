let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username: {
        type: String, unique: [true, 'Username already in use']//required: [true, 'Username is required'], //minLength: [3, 'Username should be at least 3 characters'] 
    },
    password: {
        type: String, //required: [true, 'Password is required'], //minLength: [4, 'Password should be at least 4 characters long'] 
    },
    products: {
        type: Array,
    },
    likes: {
        type: Array,
    }

})

let user = mongoose.model('user', userSchema);

module.exports = user;