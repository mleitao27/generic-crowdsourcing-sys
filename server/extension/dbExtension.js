/* 
 * dbExtension
 * Description : Handles database storages associated with user input
 */


var cache = require('../modules/cache');
var db = require('../modules/db');

 // Store users answers in the database
const storeAnswer = async (email, answer) => {
    const result = await cache.get(email);
    // If user not in cache
    if (typeof result === 'undefined') res.status(404).send();
    else {
        const newAnswer = {
            user: email,
            date: new Date(),
            data: answer
        }
        db.insertDocument('answers', newAnswer);
    }
};

// Store new survey in the database
const storeForm = async (email, form) => {
    const result = await cache.get(email);
    // If user not in cache
    if (typeof result === 'undefined') res.status(404).send();
    else {
        const surveys = await db.getDocument('surveys', {});
        if (surveys.length !== 0) await db.deleteAllDocuments('surveys', {});
        db.insertDocument('surveys', form);
    }
};

// Export functions
exports.storeAnswer = storeAnswer;
exports.storeForm = storeForm;
