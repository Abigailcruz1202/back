const express = require('express');
const router = express.Router();

const {
    postComment
} = require('../controllers/Comment/postController');

const {
    getAllComments,
    getGeneralRating,
    getSomeComments
} = require('../controllers/Comment/getController');



//GET
router.get('/all', getAllComments);
router.get('/generalRating', getGeneralRating);
router.get('/someComments', getSomeComments);


//POST
router.post('/', postComment);


module.exports = router;