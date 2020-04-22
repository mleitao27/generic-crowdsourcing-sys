var express = require('express');


const immediateFeedback = () => {
    console.log('immediateFeedback');
};

const diffFeedback = () => {
    console.log('diffFeedback');
};

exports.immediateFeedback = immediateFeedback;
exports.diffFeedback = diffFeedback;