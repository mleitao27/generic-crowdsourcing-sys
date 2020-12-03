/* 
 * surveysExtension
 * Description : Functions that extend the surveys endpoints
 * should implement functions to get the surveys,
 * process answers, get feedback from the answer, submit new
 * surveys to the system and get info about the system to
 * help answer the survey.
 */

// Imports
var surveysArray = require('./surveys/surveysArray').surveysArray;
var feedback = require('../modules/feedback');
var dbStorage = require('./dbExtension');

var cache = require('../modules/cache');

const survey1 = require('./surveys/survey1.json');
const survey2 = require('./surveys/survey2.json');
const survey3 = require('./surveys/survey3.json');

// Get a survey
// Called by the '/api/surveys/' endpoint
const dynamicSurvey = async (req, res) => {
    const result = await cache.get(req.body.email);
    // If user not in cache
    if (typeof result === 'undefined') res.status(404).send();
    else {
        const date = new Date();
        // Get survey either from the surveys array
        // res.status(200).send(surveysArray[i]);
        // Or from somewhere else
        // If also want to implement staticSurvey and pass some data to it
        if (date.getHours() >= 20 || date.getHours() < 7)
            return survey3;
        else if (date.getHours() >= 7 && date.getHours() < 12)
            return survey1;
        else if (date.getHours() >= 12 && date.getHours() < 20)
            return survey2;
        else return null;
    }
};

// Get a survey
// Called by the '/api/surveys/' endpoint
const staticSurvey = async (req, res, dynamicRes) => {
    const result = await cache.get(req.body.email);
    // If user not in cache
    if (typeof result === 'undefined') res.status(404).send();
    else {
        // Get static survey either from db
        // Or from somewhere else
        if (dynamicRes === null)
            res.status(200).send({form:survey1});
        else res.status(200).send({form:dynamicRes});
    }
};

// Get info to help answer survey
// Called by the '/api/surveys/getInfo' endpoint
const getInfo = async (req, res) => {
    const result = await cache.get(req.body.email);
    // If user not in cache
    if (typeof result === 'undefined') res.status(404).send();
    else {

    }
};

// Submit and process survey answer
// Called by the '/api/surveys/answer' endpoint
const processAnswer = async (req, res) => {
    const result = await cache.get(req.body.email);
    // If user not in cache
    if (typeof result === 'undefined') res.status(404).send();
    else {
        dbStorage.storeAnswer(req.body.email, req.body.answer);
        res.status(200).send();
    }
};

// Submit and process image as (part of) survey answer
// Called by the '/api/surveys/answerImage' endpoint
const processImage = async (req, res) => {
    const result = await cache.get(req.body.email);
    // If user not in cache
    if (typeof result === 'undefined') res.status(404).send();
    else {

    }
};

// Submit a new survey to the server
// Called by the '/api/surveys/submit' endpoint
const submitSurvey = async (req, res) => {
    const result = await cache.get(req.body.email);
    // If user not in cache
    if (typeof result === 'undefined') res.status(404).send();
    else {
        try {
            dbStorage.storeForm(req.body.email, JSON.parse(req.body.json));
        } catch(e) {
            res.status(415).send();
        }
    }
};

// Export functions
exports.dynamicSurvey = dynamicSurvey;
exports.staticSurvey = staticSurvey;
exports.submitSurvey = submitSurvey;
exports.processAnswer = processAnswer;
exports.processImage = processImage;
exports.getInfo = getInfo;