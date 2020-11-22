/* 
 * profileExtension
 * Description : Functions that extend the profile endpoints
 * should implement functions to get and edit the profile.
 */

// Get user profile
// Called by the '/api/profile/' endpoint
const getProfile = async (req, res) => {
    const result = await cache.get(req.body.email);
    // If user not in cache
    if (typeof result === 'undefined') res.status(404).send();
    else {

    }
};

// Request to edit user's profile form
// Called by the '/api/profile/editRequest' endpoint
const editProfileRequest = async (req, res) => {
    const result = await cache.get(req.body.email);
    // If user not in cache
    if (typeof result === 'undefined') res.status(404).send();
    else {

    }
};

// Edit user's profile (submit changes)
// Called by the '/api/profile/edit' endpoint
const editProfile = async (req, res) => {
    const result = await cache.get(req.body.email);
    // If user not in cache
    if (typeof result === 'undefined') res.status(404).send();
    else {

    }
};

// Edit user's ranking
// Called by the '/api/profile/editRanking' endpoint
const editRanking = async (req, res) => {
    const result = await cache.get(req.body.email);
    // If user not in cache
    if (typeof result === 'undefined') res.status(404).send();
    else {

    }
};

// Export funtions
exports.getProfile = getProfile;
exports.editProfileRequest = editProfileRequest;
exports.editProfile = editProfile;
exports.editRanking = editRanking;