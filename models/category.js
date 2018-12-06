(function() {
	'use strict';
module.exports = function(sequelize, DataTypes) {
	var category = sequelize.define('category', {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		slug: {
      type: DataTypes.STRING,
      unique: true
    },
    parentCategory: {
      type: DataTypes.STRING
    },
		isVisible: {
			type: DataTypes.BOOLEAN,
		    defaultValue: false
        }
        });
      return category;
}
}());