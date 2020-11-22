/* 
 * immediateFeedback
 * Description : Immediate feedback dummy module
 */

const immediateFeedback = (req, res) => {
    res.status(200).send({data: 'Thank you for your answer!'})
};

// Export module
exports.immediateFeedback = immediateFeedback;