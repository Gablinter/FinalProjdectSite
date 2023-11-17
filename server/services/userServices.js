let bcrypt = require('bcrypt')
let User = require('../models/userModel');
let jwt = require('../lib/jwt')
let SECRET = `f0e95d18-feb8-4561-ae18-d3cd41b749d5`;

exports.login = async (username, password) => {
    // const user = await User.findOne({ username });
    
    // if (!user) {
    //     throw new Error('Invalid email or password');
    // }


    // const isValid = await bcrypt.compare(password, user.password)


    // if (!isValid) {
    //     throw new Error('Invalid email or password');
    // }

    // const payload = {
    //     _id: user._id,
    //     username: user.username,
    // };

    // const token = await jwt.sign(payload, SECRET, { expiresIn: "3d" });

    // return token;

    // console.log(username, password)

     User.create({username, password})
};