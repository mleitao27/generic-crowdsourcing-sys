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

// Get a survey
const dynamicSurvey = (req, res) => {
    // Get survey either from the surveys array
    // res.status(200).send(surveysArray[i]);
    // Or from somewhere else
};

// Get a survey
const staticSurvey = (req, res) => {
    // Get static survey either from db
    // Or from somewhere else
};

// Get info to help answer survey
const getInfo = async (req, res) => {
    
};

// Submit and process survey answer
const processAnswer = async (req, res) => {
    // Get immediate Feedback
    // feedback.immediate();

    // Get differenciated Feedback
    // feedback.differenciated();

    // Get database storage
    // dbStorage.storeAnswer();
};

// Submit and process image as (part of) survey answer
const processImage = async (req, res) => {
   
};

// Get feedback of an answer
const returnFeedback = (req, res) => {
    
};

// Submit a new survey to the server
const submitSurvey = (req, res) => {
    
};

// Export functions
exports.dynamicSurvey = dynamicSurvey;
exports.staticSurvey = staticSurvey;
exports.submitSurvey = submitSurvey;
exports.processAnswer = processAnswer;
exports.processImage = processImage;
exports.returnFeedback = returnFeedback;
exports.getInfo = getInfo;