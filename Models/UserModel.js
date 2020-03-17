const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    Name: {
        required: true,
        type: String
    },

    Date_Of_Creation: {
        required: false,
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Users", UserSchema);