const userModel = require('../model/userModel');
// const { default: mongoose, model } = require("mongoose");
// const workExprience = require('../model/workExprience');
const bcrypt = require('bcrypt')



exports.register = async (req, res) => {
    try {
        const { email, password, firsName, lastName, mobileNumber, } = req.body;
        console.log(email)
        const user = await userModel.findOne({ email: email });
        if (user) {
            res.status(400).json({ message: "User Already exists" });
        } else {
            const hasHpassword = await bcrypt.hashSync(password, 9);
            const userSave = await userModel({
                email,
                password: hasHpassword,
                firsName,
                lastName,
                mobileNumber
            }).save();
            res.status(200).json({ message: "User Data is Save SccuessFully", result: userSave })
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "something went wrong" })
    }
}





exports.editUserProfile = async (req, res) => {
    try {
        console.log(req.file)
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            about: req.body.about,
            currentPostion: req.body.currentPostion,
            image: req.file.filename
        }

        const userData = await userModel.findByIdAndUpdate(
            { _id: req.body.userId },
            { $set: data },
            { new: true }
        )

        if (userData) {
            res.status(200).json({ status: 200, msg: "edit Profile SuccesFully", res: userData })
        } else {
            res.status(404).json({ status: 200, msg: "Data Not Found" })
        }

    } catch (error) {
        res.status(500).json({ status: 401, msg: error })
    }
};




// exports.addExperience = async(req,res)=>{
//     try {

//         const userSave = await workExprience({
//                 title: req.body.title,
//                 employment_type: req.body.employment_type,
//                 company_Name: req.body.company_Name,
//                 location: req.body.location,
//                 isChecked: req.body.isChecked,
//                 industry: req.body.industry,
//                 description: req.body.description,
//                 userId:req.body.userId
//         }).save()


//        res.status(200).json({message:"experience add Succesfully",result:userSave})
//     } catch (error) {
        
//     }
// }


// exports.editWorkExprience = async (req, res) => {
//     try {

//         let data = {
//             title: req.body.title,
//             employment_type: req.body.employment_type,
//             company_Name: req.body.company_Name,
//             location: req.body.location,
//             isChecked: req.body.isChecked,
//             industry: req.body.industry,
//             description: req.body.description,
//         }

//         const userData = await workExprience.findByIdAndUpdate(
//             { _id: req.body.userId },
//             { $set: data },
//             { new: true }
//         )

//         if (userData) {
//             res.status(200).json({ status: 200, msg: "edit Work Exprience Successfully", res: userData })
//         } else {
//             res.status(200).json({ status: 200, msg: "No Data found" })
//         }
//     } catch (error) {
//         console.log(error.message)
//         res.status(401).json({ status: 401, msg: error })
//     }
// }


// exports.deleteExperience = async(req,res)=>{
//     try {
//         const userdata = await workExprience.findByIdAndDelete({_id:req.body.userId})
//         res.status(200).json({messsage:"Experience Deleted Succesfullty"})
//     } catch (error) {
//         res.status(500).json({message:"Something went wrong"})
//     }
// }







