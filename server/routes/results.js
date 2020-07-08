// Imports
var express = require('express');
var router = express.Router();

const resultsExtension = require('../extension/resultsExtension');

router.post('/', async (req, res) => {
    resultsExtension.getResults(req, res);
});

router.post('/image', async (req, res) => {
    resultsExtension.getImageResults(req, res);
});

// Export router
module.exports = router;