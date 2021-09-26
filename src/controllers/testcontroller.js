const Event  = require('../models/Event')

exports.controller =  (req, res) => {

   Event.create({
        name: 'Feria del libro',
        description: 'Esta es la descripcion del modelo',
        location: 'Colombia/Valle/cali',
        address: 'cra 7ksdfkdsj',
        pictures: ['image 1'],
        start_date: '2021-10-30',
        schedule: ['10:00'],
        weekdays: ['SUN','FRI'],
        tags: "Indoors",
        age_rating: "7+",
        price: '290'
    }).then(evento => {
        res.json(evento)
    })

    // res.json({ msg: 'Hola aqui probando'})
}

exports.controller3 = (req,res) => {
    res.json({msg: 'Aqui probando el controller 3'})
}