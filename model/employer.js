const mongoose = require('mongoose');
const employerModel = mongoose.Schema({
    name: { type: String ,required:[true,"Please Enter Name"]},
    contactNumber: { type: Number },
    companyName: { type: String },
    designationName: { type: String },
    email: { type: String, required:[true,"Please Enter email"] },
    city: { type: String },
    password:{type:String}
},
    { timestamps: true }
)

module.exports = mongoose.model("employer", employerModel);
