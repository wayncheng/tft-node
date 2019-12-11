'use strict';
(function() {
	const express = require('express');
	const router = express.Router();

	// GET /api/banana ...........................................
	router.get('/banana', (req, res) => {
		console.log('[GET] /api/banana');
	});

	// POST /api/banana ..........................................
	router.post('/banana', (req, res) => {
		const {data} = req.body;
		console.log('[POST] /api/banana | data:', data);
	});

	//////////////////////////////////////////////////////////////
	module.exports = router;
})();
