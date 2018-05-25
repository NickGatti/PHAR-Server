const mongoose = require('mongoose')

const adoptionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    data: Object
})

module.exports = mongoose.model('Adoption', adoptionSchema)