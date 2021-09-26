const Promoter = require ('../../models/Promoter');
const Event =require('../../models/Event');

exports.getAllPromoters = async (req,res) => {
    try {
        Promoter.findAll()
            .then(promoters => {res.json(promoters)})
            .catch(error => {
                console.log(error)
                res.json({msg:`There has been an error during the consult or There isn't any promoter saved yet`})
            })

    } catch (error) {
        console.log(error)
        return res.json({msg:`There has been an error during the consult or There isn't any promoter saved yet`})
    }  
}

//Get Eventos por promotor
exports.getEventPromoter = async (req,res) => {
    const {id} = req.params
    console.log('aquiiiiiiiii entre a gett')
    try{
        const eventPromotor = await Promoter.findByPk(id,{
            include:[
                Event,   
            ],
        });
        res.json({
            error:false,
            eventPromotor
        })
    }catch(error){
        console.log(error)
        res.json({error:true})
    }
    
} 