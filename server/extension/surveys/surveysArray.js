/* 
 * surveysArray
 * Description : Array of surveys used to dynamically select the
 * appropriate survey
 */

// Import surveys
const SURVEY1 = require('./survey1.json');
const SURVEY2 = require('./survey2.json');
const SURVEY3 = require('./survey3.json');

const surveysArray = [
    SURVEY1,
    SURVEY2,
    SURVEY3,
    // ...
];

// Export array
exports.surveysArray = surveysArray;