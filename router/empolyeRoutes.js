const { register, login, editEmpolyer, addJobs, editJobs, deleteJobs, editAboutUs, editJobsHighLights } = require('../controller/employerController/employer');
const Router = require('express').Router();

Router.post('/register', register);
Router.post('/login', login )
Router.put('/editEmployer',editEmpolyer)
Router.post('/addJobs',addJobs)
Router.put('/editJobs',editJobs);
Router.post('/deleteJobs',deleteJobs)
Router.put('/editAboutUs',editAboutUs);
Router.put('/editJobsHighLights',editJobsHighLights)


module.exports = Router;