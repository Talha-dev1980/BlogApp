const { DataTypes } = require('sequelize');
const db = require('../config');

const Comments =db.sequelize.define('comments', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    postedBy: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    blogId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
    timestamps: false ,
    tableName: 'comments' 
});
module.exports = Comments;