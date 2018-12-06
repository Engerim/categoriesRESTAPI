var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db.js');

var app = express();
var PORT = process.env.PORT || 3000;
var chalk = require('chalk');

app.use(bodyParser.json());


var routes = require('./init/initRoutes');
app.use('/', routes(express));


Promise.resolve().then(()=>{
	console.log(chalk.green.bold('Welcome to Flaconi REST API service or as I call Akash Pindora Box!!'))
}).then(()=>{
	db.sequelize.sync().then(function() {
		console.log(chalk.blue('Database successfully synced..'));
		app.listen(PORT, function() {
			console.log(chalk.green('Flaconi REST API service listening on port ' + PORT + '!'));
		});
    })
});