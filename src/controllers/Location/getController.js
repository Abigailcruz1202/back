const Event = require('../../models/Event');
const Location = require('../../models/Location')


exports.getAllLocations = async (req,res) => {

    try {
        const consult = await Location.findAll({
            include:{
                model:Event,
                attributes:[
                    "id",
                    "name",
                    "price",
                    "pictures",
                    "tags",
                    "age_rating",
                    "weekdays"
                ]
            }
        })
        res.json(consult)
        
    } catch (error) {
        console.log(error)
    }
    
}