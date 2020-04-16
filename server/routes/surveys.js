// Imports
var express = require('express');
var router = express.Router();

var formData = require('../data/form.json');

router.post('/', async (req, res) => {
    res.status(200).send(formData);
});

// Export router
module.exports = router;