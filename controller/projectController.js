const projectModel = require('../model/projects');


exports.addProjects = async (req, res) => {

    try {
        const userSave = await projectModel({
            title: req.body.title,
            startDate: req.body.startDate,
            associated: req.body.associated,
            about: req.body.about,
            location: req.body.location,
            userId: req.body.userId
        }).save()

        if (userSave) {
            res.status(200).json({ status: 200, message: "Project Added Succesfully", result: userSave })
        } else {
            res.status(404).json({ status: 404, message: "Data Not Found" })
        }

    } catch (error) {
        res.status(500).json({ status: 500, message: error.message })
    }
}

exports.editProjects = async (req, res) => {
    try {
        const data = {
            title: req.body.title,
            startDate: req.body.startDate,
            associated: req.body.associated,
            location: req.body.location,
            about: req.body.about,
        }

        const userData = await projectModel.findByIdAndUpdate(
            { _id: req.body.userId },
            { $set: data },
            { new: true }
        )

        if (userData) {
            res.status(200).json({ status: 200, message: "Project Edit SuccesFully", res: userData })
        } else {
            res.status(404).json({ status: 404, message: "Data Not Found" });
        }

    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

exports.deleteProjects = async (req, res) => {
    try {
        const userdata = await projectModel.findByIdAndDelete({ _id: req.body.userId })
        if (userdata) {
            res.status(200).json({ status: 200, messsage: "Projects Deleted Succesfullty" })
        } else {
            res.status(404).json({ status: 404, message: "No Data found" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}