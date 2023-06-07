const mongoose = require('mongoose');
const jobsModel = mongoose.Schema({

    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'employer' },
    JobProfile: { type: String, required: true },
    experience: { type: String, required: true },
    salary: { type: String, required: true },
    Job_type: { type: String, required: true },
    Shift: { type: String, required: true },
    qualifications: { type: String },
    jobDescription: { type: String },

}, { timestamps: true }
)
module.exports = mongoose.model("jobsModel", jobsModel)