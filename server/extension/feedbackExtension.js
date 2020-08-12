const diffFeedbacksArray = require('./feedback/diffFeedbacksArray');

const immediateFeedback = () => {
    
};

const diffFeedback = () => {
    diffFeedbacksArray.feedbacks.map(feedback => {
        feedback.module();
    });
};

exports.immediateFeedback = immediateFeedback;
exports.diffFeedback = diffFeedback;