/* 
 * config (Object)
 * Description : Object containing all the configuration
 * variables essencial to the proper functioning of the 
 * system
 */

import presentation1 from './presentation/presentation1';
import presentation2 from './presentation/presentation2';
import presentation3 from './presentation/presentation3';

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
    languages: ['en', 'pt', 'ru', 'fr', 'it', 'de', 'es'],
    presentation: [presentation1, presentation2, presentation3]
};

// Export object
export default config;