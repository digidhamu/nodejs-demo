const express = require('express');

const app = express();

app.get('/', (req, res) => {
	// res.send('NodeJS Demo')
	res.json({message: 'NodeJS-Demo'})
});

app.get('/health', (req, res) => {
	res.sendStatus(200)
});

module.exports = app;
