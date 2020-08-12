/* 
 * feedbackExtension
 * Description : Handles feedback both immediate and differenciated
 */

// Imports
const diffFeedbacksArray = require('./feedback/diffFeedbacksArray');

// Sends immeadiate feedback to the users answer
const immediateFeedback = () => {
    
};

// Call differenciated feedback modules that can will
// deliver feed back to the user after doing some processing
const diffFeedback = () => {
    diffFeedbacksArray.feedbacks.map(feedback => {
        feedback.module();
    });
};

// Export functions
exports.immediateFeedback = immediateFeedback;
exports.diffFeedback = diffFeedback;