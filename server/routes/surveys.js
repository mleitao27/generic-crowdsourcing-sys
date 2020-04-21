// Imports
var express = require('express');
var router = express.Router();

var formData = require('../data/form.json');

const surveyExtension = require('../extension/surveysExtensionM');

router.post('/', async (req, res) => {
    surveyExtension.getForm(req, res);
});

router.post('/submit', async (req, res) => {
    surveyExtension.submitForm(req, res);
});

// Export router
module.exports = router;