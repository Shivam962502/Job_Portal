const education_Model = require('../model/educationModel');

exports.addEducation = async (req, res) => {

    try {
        const userSave = await education_Model({
            userId: req.body.userId,
            college: req.body.college,
            degreee: req.body.degreee,
            field_Study: req.body.field_Study,
            location: req.body.location,
            greade: req.body.greade,
            isChecked: req.body.isChecked,
            description: req.body.description,
            // collegeImage multer error
        }).save();

        if (userSave) {
            res.status(200).json({ message: "Education added Succesfully", result: userSave })

        } else {
            res.status(404).json({ message: "Data Not Found" })
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
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
            res.status(200).json({ status: 200, msg: "edit Work Exprience Successfully", res: userData })
        } else {
            res.status(404).json({ status: 200, msg: "Data Not Found" })
        }
    } catch (error) {
        res.status(401).json({ status: 401, msg: error })
    }
}


exports.deleteEducation = async (req, res) => {
    try {
        const userdata = await education_Model.findByIdAndDelete({ _id: req.body.userId })
        if (userdata) {
            res.status(200).json({ messsage: "Education Deleted Succesfullty" })
        } else {
            res.status(404).json({ messsage: "Data Not Found" })
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
}
