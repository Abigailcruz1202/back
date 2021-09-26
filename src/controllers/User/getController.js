const User = require('../../models/User');
const Comment = require('../../models/Comment');


exports.getAllUsers = async (req,res) => {

    try {
        User.findAll({include:Comment})
            .then(user => {res.json(user)})
            .catch(error => {
                console.log(error)
                res.json('error')
            })

    } catch (error) {
        console.log(error)
        return res.json({msg:`There has been an error during the consult or There isn't any user saved yet`})
    }  
}

exports.getUserByID = async (req,res) => {

    try {
        const { id } = req.params;

        const consult = await User.findOne({
            where: {
                id
            },
            include:Comment
        })

        if(!consult) return res.json({msg:`Can't find an user whit ID: ${id}`})

        res.json(consult)
        
    } catch (error) {
        console.log(error);
        res.json({msg:'Error!!'})
    }
}