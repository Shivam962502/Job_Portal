const mongoose = require('mongoose');

const lic_Model = mongoose.Schema({
    
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'userModel'},
    courses:{type:String,default:''},
    company_Name:{type:String,default:''},
    issued_Date:{type:Date,default:null},
    expried_Date:{type:Date,default:''},
},
{
    timestamps: true
}
)

module.exports = mongoose.model("Lic_&_Certi", lic_Model);
