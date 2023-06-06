const workExprience = require('../model/workExprience');


exports.addExperience = async (req, res) => {
    try {

        const userSave = await workExprience({
            title: req.body.title,
            employment_type: req.body.employment_type,
            company_Name: req.body.company_Name,
            location: req.body.location,
            isChecked: req.body.isChecked,
            industry: req.body.industry,
            description: req.body.description,
            startDate: req.body.startDate,
            endDate:req.body.endDate,
            userId: req.body.userId
        }).save()
        if (userSave) {
            res.status(200).json({ message: "experience add Succesfully", result: userSave })

        } else {
            res.status(404).json({ message: "Data Not Found", result: userSave })
        }

    } catch (error) {
        res.status(500).json({ message: "Internal Server error" })
    }
}


exports.editWorkExprience = async (req, res) => {
    try {

        let data = {
            title: req.body.title,
            employment_type: req.body.employment_type,
            company_Name: req.body.company_Name,
            location: req.body.location,
            isChecked: req.body.isChecked,
            industry: req.body.industry,
            description: req.body.description,
        }

        const userData = await workExprience.findByIdAndUpdate(
            { _id: req.body.userId },
            { $set: data },
            { new: true }
        )

        if (userData) {
            res.status(200).json({ status: 200, msg: "edit Work Exprience Successfully", res: userData })
        } else {
            res.status(404).json({ status: 200, msg: "No Data found" })
        }
    } catch (error) {
        console.log(error.message)
        res.status(401).json({ status: 401, msg: error })
    }
}


exports.deleteExperience = async (req, res) => {
    try {
        const userdata = await workExprience.findByIdAndDelete({ _id: req.body.userId })
        if (userdata) {
            res.status(200).json({ messsage: "Experience Deleted Succesfullty" })
        } else {
            res.status(404).json({ status: 200, msg: "No Data found" })
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
}



