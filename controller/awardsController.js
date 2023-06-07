const awardsModel = require('../model/honors_&_Awards');

exports.addAwards = async (req, res) => {

    try {
        const userSave = await awardsModel({
            title: req.body.title,
            issuedBy: req.body.issuedBy,
            issuedDate: req.body.issuedDate,
            about: req.body.about,
            userId: req.body.userId
        }).save()

        if (userSave) {
            res.status(200).json({ status: 200, message: "Data Save Succesfully", result: userSave })
        } else {
            res.status(404).json({ status: 404, message: "Data Not Found" })
        }

    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
}

exports.editAwards = async (req, res) => {
    try {
        const data = {
            title: req.body.title,
            issuedBy: req.body.issuedBy,
            issuedDate: req.body.issuedDate,
            about: req.body.about,
        }

        const userData = await awardsModel.findByIdAndUpdate(
            { _id: req.body.userId },
            { $set: data },
            { new: true }
        )

        if (userData) {
            res.status(200).json({ status: 200, message: "Data Edit SuccesFully", res: userData })
        } else {
            res.status(404).json({ status: 404, message: "Data Not Found" });
        }

    } catch (error) {
        res.status(500).json({ status: 500, message: error.message});
    }
};

exports.deleteAwards = async (req, res) => {
    try {
        const userdata = await awardsModel.findByIdAndDelete({ _id: req.body.userId })
        if (userdata) {
            res.status(200).json({ status: 200, messsage: "Awards Deleted Succesfullty" })
        } else {
            res.status(404).json({ status: 404, message: "No Data found" })
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
}