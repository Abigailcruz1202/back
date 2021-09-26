const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Event = sequelize.define('event', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    starring: {
        type: DataTypes.STRING,
    },
    remote: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    //IF LOCATION MODEL IS DISCARDED:
    // location: {
    //     type: DataTypes.STRING, //Previously processed at frontend.
    //     allowNull: false,
    // },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pictures: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },
    start_date: { // AAAA-MM-DD
        type: DataTypes.STRING,
        validate: { isDate: true },
        allowNull: false,
    },
    finish_date: { // AAAA-MM-DD
        type: DataTypes.STRING,
        validate: { isDate: true, },
    },
    schedule: { //TEMPORARY. CONVERT INTO SEPARATE MODEL AFTERWARDS
        type: DataTypes.ARRAY(DataTypes.STRING),
    },
    isrecurrent: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    weekdays: {
        type: DataTypes.ARRAY(DataTypes.ENUM(
            "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado","Domingo"
            )),
        allowNull: false,
    },
    tags: { // TEMPORARY. TURN INTO SEPARATE MODEL AFTERWARDS
        type: DataTypes.ENUM(
            "exteriores", "Interiores", "En vivo", "Recital", "Teatro", "Película", "Disco", "Deportes","Pelicula"
            ),
        allowNull: false,
    },
    age_rating: {
        type: DataTypes.ENUM("0+", "7+", "13+", "18+"),
        allowNull: false,
    },
    price: { //SINGULAR FOR NOW. THEN TRY TO TURN INTO PRICES
        type: DataTypes.STRING,
        allowNull: false,
    },
    ticket_limit: {
        type: DataTypes.INTEGER,
    },
    seat_booking: {
        /* ?????????????? */
        type: DataTypes.STRING,
        allowNull: true,
    },
    // country:{
    //     type: DataTypes.STRING,
    //     // allowNull: false
    // },
    // region:{
    //     type: DataTypes.STRING,
    //     // allowNull:false,
    // }
},
{
    timestamps: false
}
)

module.exports = Event;