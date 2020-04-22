var express = require('express');

var db = require('../modules/db');
var cache = require('../modules/cache');

const json1 = require('../data/form.json');
const json2 = require('../data/test.json');

const getForm = (req, res) => {
    cache.get(req.body.email)
    .then(async result => {
        // If user not in cache
        if (typeof result === 'undefined') res.status(404).send();
        else {
            const date = new Date();
            if (date.getHours() > 11)
                res.status(200).send(json1);
            else
                res.status(200).send(json2);
        }
    });
};

const submitForm = (req, res) => {

};

const processAnswer = (req, res) => {
    // Immediate Feedback
    feedback.immediateFeedback();
    // Differenciated Feedback
    feedback.diffFeedback();
    // Database storage
    dbStorage.storeAnswer();
};

exports.getForm = getForm;
exports.submitForm = submitForm;
exports.processAnswer = processAnswer;