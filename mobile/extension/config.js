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
        google: {
            webClientId: "608098992888-pk0vantp01d0avqh423djgodbpm1k86m.apps.googleusercontent.com",
            androidClientId: "608098992888-f7pie3rd6osvls6jt04naaqeivd2m68j.apps.googleusercontent.com",
            iosClientId : "608098992888-v6gts7tcib7i4p6rv041kbklk2qk78lf.apps.googleusercontent.com"
        },
        facebook: {
            appId: "534270243959641"
        }
    },
    // Server URL
    serverURL: 'http://192.168.1.107:3000',
    // Selected languages
    languages: ['en', 'pt', 'ru', 'fr', 'it', 'de', 'es'],
    presentation: [presentation1, presentation2, presentation3]
};

// Export object
export default config;