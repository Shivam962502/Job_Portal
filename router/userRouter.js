const { editUserProfile,  register,  } = require('../controller/userController');
const { addEducation, editEducation, deleteEducation } = require('../controller/educationController');
const {addExperience,editWorkExprience,deleteExperience} = require('../controller/experienceController')

const Router = require('express').Router();

const multer = require('multer');
const storage = require('../utills/uploadFile');
let upload = multer({storage:storage})


// User Details
Router.post('/register',register);
Router.post('/editProfile',upload.single('images'),editUserProfile)



//experience Details
Router.post('/addExperience',addExperience);
Router.post('/editWorkExprience',editWorkExprience);
Router.post('/deletedExperience',deleteExperience);



// education deatails
Router.post('/addEducation',addEducation);
Router.post('/editEducation',editEducation)
Router.post('/deletedEducation',deleteEducation);


module.exports = Router;