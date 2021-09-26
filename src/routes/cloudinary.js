const { cloudinary } = require('../cloudinaryConfig');
const express = require('express');
const router = express.Router();



router.get('/images', async (req, res) => {
    const { resources } = await cloudinary.search
        .expression('folder:cloudinary_event')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id);
    console.log(publicIds,'publicIds..')
    res.send(publicIds);
});

router.post('/upload', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'cloudinary_event',
        });
        // console.log(uploadResponse,'?????');
        res.json({ msg: 'File uploaded sucessfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});


module.exports = router;