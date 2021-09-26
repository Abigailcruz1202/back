const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/test', require('./rutaprueba'));//ruta de prueba

//Event Routes
router.use('/api', require('./event'));

//User Routes
router.use('/api/user', require('./user'));

//Comment Routes
router.use('/api/comment', require('./comment'));

//Promoter Routes
router.use('/api/promoter', require('./promoter'));

//Location Routes
router.use('/api/location', require('./location'))

//Cloudinary Routes
router.use('/cloudinary',require('./cloudinary'));

module.exports = router;
