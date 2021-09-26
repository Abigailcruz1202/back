const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    /* THIS:
    birth_day: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    birth_month: {
        type: DataTypes.ENUM(
            "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
        ),
        allowNull: false,
    },
    birth_year: {
        type: DataTypes.INTEGER, // No olvidar limitar rango en front
        allowNull: false,
    },
    OR : */
    birthdate: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    picture: {
        type: DataTypes.STRING,
        defaultValue: "https://cdn2.vectorstock.com/i/thumb-large/04/96/user-icon-vector-19240496.jpg",
    },
    //SI SE DESCARTA EL MODELO LOCATION:
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
},
{
    timestamps: false
});

module.exports = User;