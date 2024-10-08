let bcrypt = require('bcrypt')
let User = require('../models/userModel');
let Watch = require('../models/watchesModel');
let jwt = require('../lib/jwt')
let SECRET = `f0e95d18-feb8-4561-ae18-d3cd41b749d5`;




exports.login = async (username, password) => {
    const user = await User.findOne({ username });

    if (username === '') {
        throw new Error('Username is required');
    }

    let usernameRegex = /[a-zA-z0-9]+/;
    let matchUsername = username.match(usernameRegex);
    if (matchUsername[0] !== matchUsername.input) {
        throw new Error(`Username must be 1 word consisting only of letters and numbers`)
    }

    if (!user) {
        throw new Error('Invalid username or password');
    }

    if (password === '') {
        throw new Error('Password is required');
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
    let username = userData.username;
    if (username === '') {
        throw new Error('Username is required!');
    }
    if (password === '') {
        throw new Error('Password is required')
    }

    if (password.length < 4) {
        throw new Error('Password should be at least 4 characters long')
    }

    let usernameRegex = /[a-zA-z0-9]+/;
    let matchUsername = username.match(usernameRegex);
    if (matchUsername[0] !== matchUsername.input) {
        throw new Error(`Username must be 1 word consisting only of letters and numbers`)
    }


    let user = await User.findOne({ username });
    if (user !== null) {
        throw new Error(`User already exists`)
    }
    if (password === repeatPassword) {
        let cryptedPassword = await bcrypt.hash(password, 10);
        userData.password = cryptedPassword;
        return await User.create(userData);

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

exports.getByUsernameAndDelete = async (username, watchId) => {
    let user = await User.findOne({ username });
    let productIndex = user.products.findIndex((element) => element == watchId);
    user.products.splice(productIndex, 1)
    user.save()
    return user;
}

exports.unlike = async (username, watchId) => {
    let user = await User.findOne({ username });
    let likeIndex = user.likes.findIndex((element) => element == watchId);
    user.likes.splice(likeIndex, 1)
    user.save()
    let watch = await Watch.findOne({ watchId });
    let nameIndex = user.likes.findIndex((element) => element == username);
    watch.likes.splice(nameIndex, 1)
    watch.save()
    return user;
}

exports.getUser = async (username,) => {
    let user = await User.findOne({ username })
    return user;
}

exports.getWatches = async (watchId) => {
    let watch = await Watch.findOne({ watchId })
    return watch;
}

exports.likeWatch = async (username, watchId) => {
    let user = await User.findOne({ username });
    user.likes.push(watchId)
    user.save()
    let watch = await Watch.findOne({ watchId });
    watch.likes.push(user.username)
    watch.save()
}

exports.getLikes = async (username) => {
    let user = await User.findOne({ username });
    return user;
}

