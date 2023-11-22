let bcrypt = require('bcrypt')
let User = require('../models/userModel');
let jwt = require('../lib/jwt')
let SECRET = `f0e95d18-feb8-4561-ae18-d3cd41b749d5`;




exports.login = async (username, password) => {
    const user = await User.findOne({ username });

    if (!user) {
        throw new Error('Invalid username or password');
    }


    const isValid = await bcrypt.compare(password, user.password)


    if (!isValid) {
        throw new Error('Invalid username or password');
    }

    const payload = {
        _id: user._id,
        username: user.username,
    };

    const token = await jwt.sign(payload, SECRET, { expiresIn: "3d" });

    return token;
};

exports.register = async (userData) => {
    let password = userData.password;
    let repeatPassword = userData.repeatPassword;
    if (password === '') {
        throw new Error('Password is required')
    }
    if (password.length < 4) {
        throw new Error('Password should be at least 4 characters long')
    }
    if (password === repeatPassword) {
        let cryptedPassword = await bcrypt.hash(password, 10);
        userData.password = cryptedPassword;
        return User.create(userData);

    } else {
        throw new Error(`Password don't match`);
    }

}

exports.registeredLogin = async (username, password) => {
    const user = await User.findOne({ username });


    const payload = {
        _id: user._id,
        username: user.username,
    };

    const token = await jwt.sign(payload, SECRET, { expiresIn: "3d" });

    return token;
}

exports.getByUsernameAndUpdate = async (username, id) => {
    let user = await User.findOne({ username })
    user.products.push(id);
    user.save()
    return user;
}

exports.getUser = async (username, ) => {
    let user = await User.findOne({ username })
    return user;
}

