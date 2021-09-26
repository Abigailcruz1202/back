const Event = require('../../models/Event');

exports.putController = async (req, res) => {

    const { id } = req.params;
    const { 
        name,           description,    starring,   virtual,        location,   
        address,        pictures,       start_date, finish_date,    schedule,   
        isRecurrent,    weekdays,       tags,       age_rating,     price,  
        ticket_limit
    } = req.body;
    try {
        const result = await Event.update({
            name,           description,    starring,   virtual,        location,   
            address,        pictures,       start_date, finish_date,    schedule,   
            isRecurrent,    weekdays,       tags,       age_rating,     price,  
            ticket_limit
        },{
            where: {
                 id
            }
        })
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}