const userModel = require('../model/userModel');
// const { default: mongoose, model } = require("mongoose");
// const workExprience = require('../model/workExprience');
const bcrypt = require('bcrypt')


exports.register = async (req, res) => {
    try {
        const { email, password, firsName, lastName, mobileNumber, } = req.body;
        const user = await userModel.findOne({ email: email });
        if (user) {
            res.status(400).json({ message: "Email Already exists" });
        } else {
            const hasHpassword = await bcrypt.hashSync(password, 9);
            const userSave = await userModel({
                email,
                password: hasHpassword,
                firsName,
                lastName,
                mobileNumber
            }).save();
            res.status(200).json({ status: 200, message: "User Data is Save SccuessFully", result: userSave })
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ status: 500, message: error.message })
    }
}

exports.editUserProfile = async (req, res) => {
    try {
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
            res.status(404).json({ status: 404, msg: "Data Not Found" })
        }

    } catch (error) {
        res.status(500).json({ status: 500, msg: error.message })
    }
};
