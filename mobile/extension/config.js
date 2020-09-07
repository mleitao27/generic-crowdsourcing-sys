/* 
 * config (Object)
 * Description : Object containing all the configuration
 * variables essencial to the proper functioning of the 
 * system
 */

const config = {
    // OAuth credentials
    credentials: {
        // Google credentials
        google: {
            webClientId: "",
            androidClientId: "",
            iosClientId : ""
        },
        // Facebook credentials
        facebook: {
            appId: ""
        }
    },
    // Server URL
    serverURL: '',
    // Selected languages
    languages: ['en', 'pt', 'ru', 'fr', 'it', 'de', 'es']
};

// Export object
export default config;