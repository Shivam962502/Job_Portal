const education_Model = require('../model/educationModel');

exports.addEducation = async (req, res) => {

    try {
        const userSave = await education_Model({
            userId: req.body.userId,
            college: req.body.college,
            degreee: req.body.degreee,
            field_Study: req.body.field_Study,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            location: req.body.location,
            greade: req.body.greade,
            isChecked: req.body.isChecked,
            description: req.body.description,
            collegeImage: req.file.filename
        }).save();

        if (userSave) {
            res.status(200).json({ status: 200, message: "Education added Succesfully", result: userSave })

        } else {
            res.status(404).json({ status: 404, message: "Data Not Found" })
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message })
    }
}

exports.editEducation = async (req, res) => {
    try {

        let data = {
            college: req.body.college,
            degreee: req.body.degreee,
            field_Study: req.body.field_Study,
            location: req.body.location,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            isChecked: req.body.isChecked,
            greade: req.body.greade,
            description: req.body.description,
        }

        const userData = await education_Model.findByIdAndUpdate(
            { _id: req.body.userId },
            { $set: data },
            { new: true }
        )

        if (userData) {
            res.status(200).json({ status: 200, message: "Edit Education Successfully", res: userData })
        } else {
            res.status(404).json({ status: 404, message: "Data Not Found" })
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: error })
    }
}


exports.deleteEducation = async (req, res) => {
    try {
        const userdata = await education_Model.findByIdAndDelete({ _id: req.body.userId })
        if (userdata) {
            res.status(200).json({ status: 200, messsage: "Education Deleted Succesfullty" })
        } else {
            res.status(404).json({ status: 404, messsage: "Data Not Found" })
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: "Something went wrong" })
    }
}
