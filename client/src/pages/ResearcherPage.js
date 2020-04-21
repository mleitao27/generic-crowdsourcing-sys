import React from 'react';
import JSONLoader from '../extension/JSONLoader';

const ResearcherPage = props => {
    
    return (
        <React.Fragment>
            <h1>Researcher Page</h1>
            <JSONLoader userEmail={props.userEmail}></JSONLoader>
        </React.Fragment>
    );
};

export default ResearcherPage;