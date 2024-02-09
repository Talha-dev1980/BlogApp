const { DataTypes } = require('sequelize');
const db = require('../config');

const BlogDetailView = db.sequelize.define('blogdetailview', {
 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
        
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
    author: {
        type: DataTypes.STRING,
        defaultValue: false
    }
}, {
    timestamps: false,
    tableName: 'blogdetailview'
});

module.exports = BlogDetailView;
