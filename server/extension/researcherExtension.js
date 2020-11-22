/* 
 * researcherExtension
 * Description : Functions that extend the researcher endpoints
 * should implement functions to get, edit, remove and validate
 * data from the researcher console.
 */

var mongodb = require('mongodb');

var db = require('../modules/db');
var cache = require('../modules/cache');

// Get some data for the researcher's console
const getData = async (req, res) => {
    const result = await cache.get(req.body.email);
    // If user not in cache
    if (typeof result === 'undefined') res.status(404).send();
    else {
        let data;
        // If user not in cache
        if (typeof result === 'undefined') res.status(403).send();
        else res.status(200).send({data: await db.getDocument(req.body.data, {})});
    }
};

// Edit some data from the researcher's console
const editData = async (req, res) => {
    const result = await cache.get(req.body.email);
    // If user not in cache
    if (typeof result === 'undefined') res.status(404).send();
    else {

    }
};

// Remove some system data from the researcher's console
const removeData = async (req, res) => {
    const result = await cache.get(req.body.email);
    // If user not in cache
    if (typeof result === 'undefined') res.status(404).send();
    else {
        db.deleteDocument('answers', {_id: mongodb.ObjectId(req.body.answer)});
        res.status(200).send();
    }
};

// Validate som data from the researcher's console
const validateData = async (req, res) => {
    const result = await cache.get(req.body.email);
    // If user not in cache
    if (typeof result === 'undefined') res.status(404).send();
    else {

    }
};

// Export functions
exports.getData = getData;
exports.editData = editData;
exports.removeData = removeData;
exports.validateData = validateData;