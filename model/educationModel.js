const mongoose = require('mongoose');
const userData = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'userModel.js'},
    college:{type:String ,default:''},
    degreee:{type:String,default:''},
    field_Study:{type:String,default:''},
    location:{type:String,default:''},
    startDate:{type: Date,defaule:''},
    endDate:{type:Date , default:''},
    greade:{type:String,default:''},
    isChecked:{type:Boolean,default:false,require:[true,"Please check the box"]},
    description:{type:String,default:''},
    collegeImage:{type:String,default:''}
},
{
    timestamps: true
})
module.exports = mongoose.model("education_Details",userData)