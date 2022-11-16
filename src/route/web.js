import express from 'express';
import homeController from '../controller/homeController'
let router = express.Router();

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
    return app.use('/',router);
}

module.exports = initWebRoute;