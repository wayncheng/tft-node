'use strict';
(function() {
	const express = require('express');
	const bodyParser = require('body-parser');
	const path = require('path');
	const chalk = require('chalk');
	require('dotenv').config();


	// CONFIG ====================================================
	const PORT = process.env.PORT || 5000;
	const app = express();
	
	// Headers
	app.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		next();
	});

	// Body Parser
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.text());
	app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


	// ROUTES ====================================================
	// Routes/controllers go here (before static files) //////////
	//------------------------------------------------------------
	
	
	// PRODUCTION STATIC FILES ===================================
	if (process.env.NODE_ENV === 'production') {
		// Route to serve gzipped bundle.js file. Needs to have higher priority than static route
		app.get('*/bundle.js', function(req, res, next) {
			req.url = req.url + '.gz';
			res.set('Content-Encoding', 'gzip');
			res.set('Content-Type', 'text/javascript');
			next();
		});

		// Serve any static files
		app.use(express.static(path.join(__dirname, 'client/build')));

		// Handle React routing, return all requests to React app
		app.get('*', function(req, res) {
			res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
		});
	}

	
	// ERRORS ====================================================
	app.use((req, res) => res.status(404));
	app.use((err, req, res) => {
		console.error(err.stack);
		res.status(500);
	});


	// START SERVER ==============================================
	const server = app.listen(PORT, () => {
		console.log(`\n\n\n${new Date().toLocaleString()}`)
		console.log('===========================================================');
		console.log(`[SERVER] listening on port ${chalk.yellow(PORT)}`);
	});



	module.exports = server;
})();
