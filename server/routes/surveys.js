// Imports
var express = require('express');
var router = express.Router();

router.post('/', async (req, res) => {
    console.log('surveys');
});

// Export router
module.exports = router;