const mongoose = require('mongoose')
const awardsModel = mongoose.Schema({
    
    title: { type: String, default: '' },
    issuedBy: { type: String, default: '' },
    issuedDate: { type: Date, default: null },
    about: { type: String, default: '' }
    
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Awards", awardsModel);