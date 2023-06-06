const mongoose = require('mongoose');
const data = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userModel"
    },

    title:{
        type:String,
        default:""
    },
    
    employment_type:{
        type:String,
        default:''
    },

    company_Name:{
        type:String,
        default:''
    },

    location:{
        type:String,
        default:''
    },

    startDate:{
        type:Date,
        default:''
    },
    endDate:{
        type:Date,
        default:''
    },

    isChecked:{
        type:Boolean,
        default:false
    },

    industry:{
        type:String,
        default:''
    },
    description:{
        type:String,
        default:''
    }
    
},
{
    timestamps: true
}
)

module.exports = mongoose.model("Work_exprience",data)