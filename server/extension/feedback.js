var express = require('express');
const diffFeedbacksArray = require('./diffFeedbacksArray');

const immediateFeedback = () => {
    console.log('immediateFeedback');
};

const diffFeedback = () => {
    console.log('diffFeedback');
    diffFeedbacksArray.feedbacks.map(feedback => {
        const name = feedback.name;
        feedback.module.diffFeedback();
    });
};

exports.immediateFeedback = immediateFeedback;
exports.diffFeedback = diffFeedback;