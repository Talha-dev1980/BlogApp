const { DataTypes } = require('sequelize');
const db = require('../config');

const Comments =db.sequelize.define('Comments', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    postedBy: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    blogId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    timePosted: {
        type: DataTypes.STRING,
        defaultValue: false
    }
},{
    timestamps: false 
});
module.exports = Comments;