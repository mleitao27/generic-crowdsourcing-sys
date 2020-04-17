import React from 'react';
import jsonHandler from '../extension/jsonHandler'

import MainButton from '../components/MainButton';

const ResearcherPage = props => {

    return (
        <React.Fragment>
            <h1>Researcher Page</h1>
            <MainButton title='Send JSON' onClick={jsonHandler}></MainButton>
        </React.Fragment>
    );
};

export default ResearcherPage;