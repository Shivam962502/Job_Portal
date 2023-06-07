const lic_Certi = require('../model/licenses_certifications');
// const moment = require('moment');
exports.addCertificate = async (req, res) => {


    try {
        const userSave = await lic_Certi({
            courses: req.body.courses,
            company_Name: req.body.company_Name,
            issued_Date: req.body.issued_Date,
            expried_Date: req.body.expried_Date,
            userId: req.body.userId
        }).save()

        if (userSave) {
            res.status(200).json({ status: 200, message: "Certificate Added Succesfully", result: userSave })
        } else {
            res.status(404).json({ status: 404, message: "Data Not Found" })
        }

    } catch (error) {
        res.status(500).json({ status: 500, message: error.message })
    }
}



exports.editCertificate = async (req, res) => {
    try {
        const data = {
            courses: req.body.courses,
            company_Name: req.body.company_Name,
            issued_Date: req.body.issued_Date,
            expried_Date: req.body.expried_Date,
        }

        const userData = await lic_Certi.findByIdAndUpdate(
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
        res.status(500).json({ status: 500, message: error.message });
    }
};

exports.deleteCertificate = async (req, res) => {
    try {
        const userdata = await lic_Certi.findByIdAndDelete({ _id: req.body.userId })
        if (userdata) {
            res.status(200).json({ status: 200, messsage: "Certificate Deleted Succesfullty" })
        } else {
            res.status(404).json({ status: 404, message: "No Data found" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}