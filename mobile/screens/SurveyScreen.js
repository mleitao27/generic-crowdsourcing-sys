/* 
 * SurveyScreen (Component)
 * Description : Holds the survey screen the content of this component
 * is loaded from the extension and it's rendered from the Survey option in the menu
 * Props :
 * - navigation : navigation object used to navigate between the app's screens
 */

 // Imports
import React from 'react';
import SurveyScreenExtension from '../extension/SurveyScreenExtension';

/************************************************
 * 
 * COMPONENT - Screen
 * 
 ************************************************/
const SurveyScreen = props => {
    /************************************************
     * RENDER
    ************************************************/
    // Renders the survey screen component from the extension
    return (
        <SurveyScreenExtension navigation={props.navigation} />
    );
};

// Change in navigation options
// To change the screen's header title
SurveyScreen.navigationOptions = (navData) => {
    return (
        {
            headerTitle: 'Survey'
        }
    );
};

// Export Screen
export default SurveyScreen;