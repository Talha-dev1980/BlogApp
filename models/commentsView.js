const { DataTypes } = require('sequelize');
const db = require('../config');

const CommentsDetailView = db.sequelize.define('commentsview', {
 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
        
    },
    blog_id: {
        type: DataTypes.INTEGER,
        allowNull: false
        
    },

    blog_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
    timePosted: {
        type: DataTypes.STRING,
        defaultValue: false
    },
    name: {
        type: DataTypes.STRING,
        defaultValue: false
    }, email: {
        type: DataTypes.STRING,
        defaultValue: false
    }, type: {
        type: DataTypes.STRING,
        defaultValue: false
    }
}, {
    timestamps: false,
    tableName: 'commentsview'
});

module.exports = CommentsDetailView;
