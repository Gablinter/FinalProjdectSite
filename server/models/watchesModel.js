let mongoose = require('mongoose');

let watchSchema = new mongoose.Schema({
    img: {
        type: String, //required: [true, 'Username is required'], unique: [true, 'Username already in use']//minLength: [3, 'Username should be at least 3 characters'] 
    },
    price: {
        type: String, //required: [true, 'Password is required'], minLength: [4, 'Password should be at least 4 characters long'] 
    },
    name: {
        type: String,
    },
    watchId: {
        type: String
    },
    liked: {
        type: Array
    }

})

let watch = mongoose.model('watches', watchSchema);

module.exports = watch;