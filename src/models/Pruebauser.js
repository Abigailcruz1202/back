const {  DataTypes } = require('sequelize');
const sequelize = require('../db');

const Pruebauser = sequelize.define('pruebauser',{
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
    }
})

module.exports = Pruebauser;