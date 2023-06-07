const Router = require('express').Router();

const { editUserProfile, register, } = require('../controller/userController');
const { addEducation, editEducation, deleteEducation } = require('../controller/educationController');
const { addExperience, editWorkExprience, deleteExperience } = require('../controller/experienceController')
const { addCertificate, editCertificate, deleteCertificate } = require('../controller/lic_&_Certif');
const { addProjects, editProjects, deleteProjects } = require('../controller/projectController');
const { addAwards, editAwards, deleteAwards } = require('../controller/awardsController');


const multer = require('multer');
const storage = require('../utills/uploadFile');
let upload = multer({ storage: storage })

// User Details
Router.post('/register', register);
Router.put('/editProfile', upload.single('image'), editUserProfile)



//experience Details
Router.post('/addExperience', addExperience);
Router.post('/editWorkExprience', editWorkExprience);
Router.post('/deletedExperience', deleteExperience);



// education deatails
Router.post('/addEducation', upload.single('image') ,addEducation);
Router.post('/editEducation', upload.single('image'),editEducation)
Router.post('/deletedEducation', deleteEducation);



// LIc_&_Certificate
Router.post('/addCertificate', addCertificate);
Router.put('/editCertificate', editCertificate);
Router.post('/deleteCertificate', deleteCertificate);



//projects
Router.post('/addProjects', addProjects);
Router.put('/editProjects', editProjects);
Router.post('/deleteProject', deleteProjects)


//awards
Router.post('/addAwards', addAwards);
Router.put('/editAwards', editAwards);
Router.post('/deleteAwards', deleteAwards);


module.exports = Router;