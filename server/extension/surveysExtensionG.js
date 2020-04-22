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
    cache.get(req.body.email)
    .then(async result => {
        // If user not in cache
        if (typeof result === 'undefined') res.status(404).send();
        else {
            const surveys = await db.loadCollection('surveys');
            const json = await surveys.find().toArray();
            if (json.length > 0)
                await surveys.deleteOne({name: json[0].name});
            await surveys.insertOne(JSON.parse(req.body.json));
            res.status(200).send();
        }
    });
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