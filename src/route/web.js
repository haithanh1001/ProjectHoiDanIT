import express from 'express';
import homeController from '../controller/homeController';
import multer from 'multer';
import path from 'path';
import appRoot from 'app-root-path';
let router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, appRoot + '/src/public/image/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const imageFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: imageFilter });
const initWebRoute = (app) =>{

    router.get('/',homeController.getHomePage);

    router.get('/about',(req,res)=>{
        res.send('Toi la bi nguyen');
    })
    router.post('/create-new-user',homeController.createNewUser);
    router.get('/detail/user/:userId',homeController.getDetailPage);
    router.post('/delete-user',homeController.deleteUser);
    router.get('/edit-user/:id',homeController.getEditPage);
    router.post('/update-user',homeController.updateUser);
    router.get('/upload',homeController.getUploadFilePage);
    router.post('/upload-profile-pic',upload.single('profile_pic'),homeController.handleUploadFile);
    return app.use('/',router);
}

module.exports = initWebRoute;