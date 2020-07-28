/* 
 * ResultsScreen (Component)
 * Description : Holds the results screen the content of this component
 * is loaded from the extension and it's rendered from the Results option in the menu
 * Props :
 * - navigation : navigation object used to navigate between the app's screens
 */

 // Imports
import React from 'react';
import ResultsScreenExtension from '../extension/ResultsScreenExtension';

/************************************************
 * 
 * COMPONENT - Screen
 * 
 ************************************************/
const ResultsScreen = props => {
    /************************************************
     * RENDER
    ************************************************/
    // Renders the results screen component from the extension
    return (
        <ResultsScreenExtension navigation={props.navigation} />
    );
};

// Change in navigation options
// To change the screen's header title
ResultsScreen.navigationOptions = (navData) => {
    return (
        {
            headerTitle: 'Results'
        }
    );
};

// Export screen
export default ResultsScreen;