const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('video', videoSchema);