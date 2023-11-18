const { MongooseError } = require("mongoose")

exports.extractErrorMsgs = (error) => {
    const isInstenceOfMongoose = error instanceof MongooseError;
    if (isInstenceOfMongoose) {
        const errors = Object.values(error.errors);
        const msgs = errors.map((e) => e.message);
        return msgs
    }
    return [error.message]
}