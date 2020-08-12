// Imports
var surveysArray = require('./surveys/surveysArray').surveysArray;

var feedback = require('./feedbackExtension');
var dbStorage = require('./dbExtension');


const getForm = (req, res) => {
    // Get survey either from the surveys array
    // res.status(200).send(surveysArray[i]);
    // Or from somewhere else
};

const getMarkers = async (req, res) => {
    
};

const processAnswer = async (req, res) => {
    // Get immediate Feedback
    // feedback.immediateFeedback();

    // Get differenciated Feedback
    // feedback.diffFeedback();

    // Get database storage
    // dbStorage.storeAnswer();
};

const processImage = async (req, res) => {
   
};


const returnFeedback = (req, res) => {
    
};

const submitForm = (req, res) => {
    
};

exports.getForm = getForm;
exports.submitForm = submitForm;
exports.processAnswer = processAnswer;
exports.processImage = processImage;
exports.returnFeedback = returnFeedback;
exports.getMarkers = getMarkers;