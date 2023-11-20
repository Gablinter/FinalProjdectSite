let Message = require('../models/ticketModel');

exports.create = (body) => {
    Message.create(body);
}