/* 
 * config
 * Description : Server configuration file.
 */

// Set admin credentials
const admin = [
    {
        email: 'admin',
        password: '616d2a76ce744eb777e15569cdc93528'
    }
];

// Database credentials
const db = {
    url: 'mongodb://127.0.0.1:27017/crowdsourcing',
    name: 'crowdsourcing'
};

// Set cache timeout in seconds
const userTimeout = 3600;


// Exports
exports.admin = admin;
exports.userTimeout = userTimeout;
exports.db = db;