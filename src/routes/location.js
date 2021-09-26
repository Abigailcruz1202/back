const express = require('express');
const router = express.Router();

const {
    getAllLocations
} = require('../controllers/Location/getController')

router.get('/all', getAllLocations)






module.exports = router;