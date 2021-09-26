const express = require('express');
const router = express.Router();
const { 
    getController,              
    getEventByIdController,
    getElementByCountryAndCity,
} = require('../controllers/Event/getController');

const {
    saveInfoEvent,
    saveInfoPromotor,
} = require('../controllers/Event/postController');

const {
    putController
} = require('../controllers/Event/putController');

const {
    deleteController
} = require('../controllers/Event/deleteController');



//GET
router.get('/main',getController);
router.get('/event/:id',getEventByIdController);
router.get('/event',getElementByCountryAndCity);

//POST
router.post('/event',saveInfoEvent);


//PUT(sequelize usa el metodo patch)
router.patch('/event/edit/:id',putController)

//DELETE
router.delete('/event/delete/:id',deleteController)


module.exports = router;