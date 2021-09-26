const Promoter = require ('../../models/Promoter');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;

exports.saveInfoPromotor = async (req,res) =>{
 
    const {
        legal_name,
        business_name,
        tax_id,
        promoter_name,
        phone,
        email,
        password,
        business_type,
        address, 
        picture,
    } = req.body;

    try{
        const [promoter,created] = await Promoter.findOrCreate({
            where:{
                [Op.or]:[              
                    {email},
                    {tax_id},
                    {phone},
                    {legal_name}]
            },
            defaults:{
                email,
                tax_id,
                phone,
                legal_name,
                business_name,
                promoter_name,
                password,
                business_type,
                address,
                picture,
            },
        });
        if(!created){
            return res.json({created:false}); 
        }else {
            return res.json({created:true,promoter}) ; 
        }
    }catch(error){
        console.log(error)
        res.json({msg:'No se pudo crear'});
    }
}



//*________________________________________________________________________________________
exports.loginPromoter =  (req, res) => {
    const { type, email, password } = req.body;
    if (type === 'email'){
        Promoter.findOne({
            where: {
                email,
                password
            }
        }).then(promoter =>{
            if (promoter) return res.json({
                msg: true,
                id: promoter.id,
                business_name: promoter.business_name,
                promoter_name:promoter.promoter_name, 
                picture: promoter.picture,
                business_type: promoter.business_type,
                type: 'promoter'
            });
            else return res.json({ msg: false })
        }).catch(error => {
            console.log(error);
            res.json({ msg: 'error' });
        })
    } else
        Promoter.findOne({
            where: {
                email
            }
        }).then(promoter => {
            if (promoter) return res.json({
                msg: true,
                id: promoter.id,
                business_name: promoter.business_name,
                promoter_name:promoter.promoter_name, 
                picture: promoter.picture,
                business_type: promoter.business_type,
                type: 'promoter'
            });
            else return res.json({ msg: false })
        }).catch(error => {
            console.log(error);
            res.json({ msg: 'error' });
        })
}
