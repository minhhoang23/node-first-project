const express = require('express');
const _ = require('lodash');

const app = express();

//Routes
const packageJson = require('./package.json');

//Roots
app.get('/', function (req, res) {
	res.json(
		_.pick(packageJson, ['name', 'version', 'description', 'author', 'license'])
	);
});

const port = process.env.PORT || 9999;
app.listen(port);