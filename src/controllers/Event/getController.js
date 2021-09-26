const Event = require('../../models/Event');
const Comment = require('../../models/Comment');
const Location = require('../../models/Location');
const Promoter = require('../../models/Promoter');


exports.getController = async (req,res) => {

    const consult = await Event.findAll({
        attributes:[
            "id",
            "name",
            "price",
            "pictures",
            "tags",
            "age_rating",
            "weekdays"
        ],
        include:{
            model: Location,
            attributes: [
                "country",
                "province",
                "city"
            ]
        }
    });

    res.json(consult)
}

exports.getEventByIdController = async (req,res) => {
    const {id} = req.params;


    try {
        const consult = await Event.findByPk(id,{
            include:[
                {
                    model: Location,
                    attributes:['country','province','city']
                },
                Comment,
                {
                    model: Promoter,
                    attributes:['id','business_name']
                }
            ]
        });     
    

        if(!consult) return res.json({msg:'ID does not match with any event'});
        
        res.json({
            msg:`Search ID: ${id} Success!`,
            consult
        });
        
    } catch (error) {
        console.log(error);
        res.json({msg:'Error!!'});
    }

    
}

exports.getElementByCountryAndCity = (req,res) => {
    
    const { country, city } = req.query;
    

    if(country && city){
        return res.json(
            {
                msg:`Country: ${country}   City: ${city}`
            }
        )
    }

    if(country){
        return res.json({msg:`Country: ${country}`})
    }

    if(city){
        return res.json({msg:`City: ${city}`})
    }

    res.json({msg:'no data sent'})
}