const express = require('express');
const router = express.Router();
const { controller, controller3} = require('../controllers/testcontroller');
const {testcontroller2} = require('../controllers/testcontroller2');


router.get('/prueba',
    controller
)

router.get('/prueba3',
    controller3
)

router.get('/prueba2',
    testcontroller2
)

module.exports = router;
