const employerModel = require('../../model/employer');
const bcrypt = require('bcrypt')
const jobsModel = require('../../model/addJobs');
const jwt = require('jsonwebtoken');
const aboutUsModel = require('../../model/aboutUs');
const JobsHighLights = require('../../model/jobHighLights')

exports.register = async (req, res) => {
    try {
        const { email, password, name, companyName, contactNumber, designationName, city } = req.body;
        const emailId = await employerModel.findOne({ email: email });

        if (emailId) {
            res.status(400).json({ message: "Email Already exists" });
        } else {
            const hasHpassword = await bcrypt.hashSync(password, 9);
            const userSave = await employerModel({
                email,
                password: hasHpassword,
                name,
                companyName,
                contactNumber,
                designationName,
                city
            }).save();
            res.status(200).json({ status: 200, message: "Empolyer Data is Save SccuessFully", result: userSave })
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ status: 500, message: error.message })
    }
}



exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (email && password) {
            const user = await employerModel.findOne({ email: email });
            if (user) {
                console.log(user)
                const isMatch = await bcrypt.compareSync(password, user.password)
                if (isMatch) {
                    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
                    res.status(200).json({ status: 200, message: "Empolyer Login SuccesFully", result: user, token: token })
                } else {
                    res.status(409).json({ status: 409, message: "Password is Not Match" });
                }
            } else {
                res.status(404).json({ status: 404, message: "Data Not Found" });
            }
        } else {
            res.status(401).json({ status: 401, message: "Please Enter all details" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


exports.editEmpolyer = async (req, res) => {
    try {
        console.log(req.body)
        const data = {
            email: req.body.email,
            name: req.body.name,
            companyName: req.body.companyName,
            contactNumber: req.body.contactNumber,
            designationName: req.body.designationName,
            city: req.body.city
        }

        const userData = await employerModel.findByIdAndUpdate(
            { _id: req.body.userId },
            { $set: data },
            { new: true }
        )

        if (userData) {
            res.status(200).json({ status: 200, message: "edit Profile SuccesFully", res: userData })
        } else {
            res.status(404).json({ status: 200, message: "Data Not Found" })
        }

    } catch (error) {
        res.status(500).json({ status: 500, message: error.message })
    }
};

exports.addJobs = async (req, res) => {
    const { JobProfile, experience, salary, Job_type, Shift, qualifications, jobDescription } = req.body
    try {
        const jobSave = await jobsModel({
            JobProfile,
            experience,
            salary,
            Job_type,
            Shift,
            qualifications,
            jobDescription,
            userId: req.body.userId
        }).save()
        if (jobSave) {
            res.status(200).json({ status: 200, message: "Job is Added SccuessFully", result: jobSave })

        } else {
            res.status(404).json({ status: 404, message: "Data Not Found", })
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ status: 500, message: "something went wrong" })
    }
}


exports.editJobs = async (req, res) => {
    try {
        const data = {
            JobProfile: req.body.JobProfile,
            experience: req.body.experience,
            salary: req.body.salary,
            Job_type: req.body.Job_type,
            Shift: req.body.Shift,
            qualifications: req.body.qualifications,
            jobDescription: req.body.jobDescription,
        }

        const userData = await jobsModel.findByIdAndUpdate(
            { _id: req.body.userId },
            { $set: data },
            { new: true }
        )

        if (userData) {
            res.status(200).json({ status: 200, message: "edit Profile SuccesFully", res: userData })
        } else {
            res.status(404).json({ status: 404, message: "Data Not Found" })
        }

    } catch (error) {
        res.status(500).json({ status: 500, message: error.message })
    }
};

exports.deleteJobs = async (req, res) => {
    try {
        const userdata = await jobsModel.findByIdAndDelete({ _id: req.body.userId })
        if (userdata) {
            res.status(200).json({ status: 200, messsage: "Jobs Deleted Succesfullty" })
        } else {
            res.status(404).json({ status: 404, message: "No Data found" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


exports.editAboutUs = async (req, res) => {
    try {
        const data = {
            description: req.body.description,
            website: req.body.website,
            phone: req.body.phone,
            industry: req.body.industry,
            company_Size: req.body.company_Size,
            headquarters: req.body.headquarters,
            founded: req.body.founded,
            location: req.body.location,
            userId: req.body.userId
        }

        const userData = await aboutUsModel.findByIdAndUpdate(
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



exports.editJobsHighLights = async (req, res) => {
    try {
        const data = {
            description: req.body.description,
            qualifications: req.body.qualifications,
            experience: req.body.experience,
        }

        const userData = await JobsHighLights.findByIdAndUpdate(
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
