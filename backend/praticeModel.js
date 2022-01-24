const mongoose = require('mongoose');

const PraticeSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
})

const PraticeModel = mongoose.model('PraticeModel', PraticeSchema)

module.exports = PraticeModel