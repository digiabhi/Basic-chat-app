const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    name: {
        type: String
    },
    isPersonal: {
        type: Boolean,
        default: false
    },
    roomid: {
        type: mongoose.Schema.Types.ObjectId
    }
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
