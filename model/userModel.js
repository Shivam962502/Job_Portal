const mongoose = require('mongoose');
const userData = new mongoose.Schema({
    image:{
        type:String,
        default:''
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    mobileNumber: {
        type: Number,
        default:""
    },
    email: {
        type: String,
        required:[true,"Please Enter Email Id"]
    },
    password: {
        type: String,
        required:[true,"Please Enter Password"]

    },
    role: {
        type: String, 
        default:"1"
    },
    isActive: {
        type: String,
        default: 1
    },
    about :{
        type:String,
        default:''
    },
    currentPostion:{
        type:String,
        default:''
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Users", userData);