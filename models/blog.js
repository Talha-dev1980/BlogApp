const { DataTypes } = require('sequelize');
const db = require('../config');

const Blog =db.sequelize.define('Blog', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    timePosted: {
        type: DataTypes.STRING,
        defaultValue: false
    },
    postedBy: {
        type: DataTypes.INTEGER,
        defaultValue: false
    }
},{
    timestamps: false 
});

module.exports = Blog;
