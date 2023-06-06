let multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
     cb(null, './upload')
    },
    filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + file.originalname);
     }
});

module.exports = storage