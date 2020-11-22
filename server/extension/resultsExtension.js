/* 
 * resultsExtension
 * Description : Functions that extend the results endpoints
 * should implement functions to get the results list.
 */

const cache = require('../modules/cache');
const db = require('../modules/db');

//  Get results list
// Called by the '/api/results/' endpoint
const getResults = async (req, res) => {
    const result = await cache.get(req.body.email);
    // If user not in cache
    if (typeof result === 'undefined') res.status(404).send();
    else {
        if (typeof result === 'undefined') res.status(403).send();
        else {
            res.status(200).send(await db.getDocument('answers', {user: req.body.email}));
        }
    }
};

// Export functions
exports.getResults = getResults;