import React from 'react';
import { Link } from 'react-router-dom';

const ExpiredSessionPage = props => {
    return (
        <React.Fragment>
            <h1>Sorry, your session expired.</h1>
            <Link to="/login"><button>Back to Login Page</button></Link>
        </React.Fragment>
    );
};

export default ExpiredSessionPage;