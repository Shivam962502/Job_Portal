const mongoose = require('mongoose');
const userData = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'userModel' },
    college: { type: String, default: '' },
    degreee: { type: String, default: '' },
    field_Study: { type: String, default: '' },
    location: { type: String, default: '' },
    startDate: { type: Date, defaule: null },
    greade: { type: String, default: '' },
    endDate: { type: Date, default: null },
    isChecked: { type: Boolean, default: false },
    description: { type: String, default: '' },
    collegeImage: { type: String, default: '' }
},
    {
        timestamps: true
    })
module.exports = mongoose.model("education_Details", userData)