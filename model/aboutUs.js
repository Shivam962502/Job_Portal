const mongoose = require('mongoose');
const aboutModels = mongoose.Schema({
    employerId: { type: mongoose.Schema.Types.ObjectId, ref: 'employer' },
    description: { type: String, default: '' },
    website: { type: String, default: '' },
    phone: { type: Number, default: null },
    industry: { type: String, default: '' },
    company_Size: { type: String, default: '' },
    headquarters: { type: String, default: '' },
    founded: { type: String, default: '' },
    location: { type: String, default: '' },
    value: { type: String, default: "1" }
},
    { timestamps: true }
)
const aboutModel = mongoose.model('aboutCompany', aboutModels)
module.exports - aboutModel


const data = async () => {
    try {
        const userData = await aboutModel.findOne({ value: "1" });
        if (userData) {
            console.log("AboutUs Data Already Exists")
        } else {
            const data = {
                description: '',
                website: '',
                phone: '',
                industry: '',
                company_Size: '',
                headquarters: '',
                founded: '',
                location: '',
            }

            const createData = aboutModel.create(data)
            if (createData) {
                console.log("Data save Succesfully")
            } else {
                console.log(" not Save",)
            }
        }
    } catch (error) {
        console.log(error.message)
    }
}
data()