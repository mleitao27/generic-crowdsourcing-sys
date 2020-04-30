var express = require('express');
var db = require('../modules/db');
var cache = require('../modules/cache');

var feedback = require('./feedback');
var dbStorage = require('./dbStorage');

const getForm = (req, res) => {
    cache.get(req.body.email)
    .then(async result => {
        // If user not in cache
        if (typeof result === 'undefined') res.status(404).send();
        else {
            const surveys = await db.loadCollection('surveys');
            const json = await surveys.find().toArray();
            res.status(200).send(json[0]);
        }
    });
};

const submitForm = (req, res) => {
    dbStorage.storeForm(req);
    res.status(200).send();
};

const processAnswer = (req, res) => {
    // Immediate Feedback
    feedback.immediateFeedback();
    // Differenciated Feedback
    feedback.diffFeedback();
    // Database storage
    dbStorage.storeAnswer(req);
    res.status(200).send({immediateFeedback: 'Thank You!'});
};

exports.getForm = getForm;
exports.submitForm = submitForm;
exports.processAnswer = processAnswer;