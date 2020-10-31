var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let userSchema = new Schema({
    username: {
        type: String,
        trim: true,
    },
    firstname: {
        type: String,
        trim: true,
    },
    lastname: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    password: String,
    isMember: String,
    organization: {
        type: String,
        trim: true,
    },
    sector: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    contact_number: Number,
    email_alerts: [String],
    sms_alerts: [String],
})

module.exports = mongoose.model('User', userSchema);
