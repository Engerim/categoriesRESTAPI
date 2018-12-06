var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
	'dialect': 'sqlite',
	'storage': __dirname + '/data/flaconi-api.sqlite'
});
var db = {};


db.category = sequelize.import(__dirname + '/models/category.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;