import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import config from '../extension/config';

const LogoutPage = props => {

    // When logout button click
    const logout = () => {
        // Reset session state parameters
        props.onLogout(false, '', '');

        const params = {email: props.userEmail};

        // Deletes user from cache
        axios.post(`${config.serverURL}/api/users/logout`, params)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        });
    };

    // Default content with logout button
    let content = <button  className="submit formElement" onClick={logout}>Logout</button>;

    // If user not logged redirect to main page
    if (!props.isLogged) content = <Redirect to='/' />;

    return (
        <React.Fragment>
            <div className='formContainer'>
                <h1>LOGOUT</h1>
                {content}
            </div>
        </React.Fragment>
    );
};

export default LogoutPage;