import React, { useState } from 'react';

import axios from 'axios';
import config from './config';

import MainButton from '../components/MainButton';
import List from './List';
import AnswerItem from './AnswerItem';

import ExpiredSessionPage from '../pages/ExpiredSessionPage';


const ResearcherPageExtension = props => {

    const [answers, setAnswers] = useState(null);

    const renderAnswersList = () => {
        const params = {
            email: props.userEmail,
            data: 'answers'
        };
        axios.post(`${config.serverURL}/api/researcher/getData`, params)
        .then(res => {
            if (res.status === 200) {
                setAnswers(res.data.data);
            }
        })
        .catch(error => {
            if (error.response.status === 403) {
                console.log(error.response.status);
                props.onLogout(false, '', '');
            }
        });
    };

    const removeAnswer = (answer) => {
        const params = {
            answer,
            email: props.userEmail,
            data: 'answers'
        };
        axios.post(`${config.serverURL}/api/researcher/removeData`, params)
        .then(res => {
            if (res.status === 200)
                renderAnswersList();
        })
        .catch(error => {
            if (error.response.status === 403) {
                console.log(error.response.status);
                props.onLogout(false, '', '');
            }
        });
    };

    let answersListContent = <React.Fragment />;
    if (answers !== null) {
        if (answers.length === 0)
            answersListContent = <h3>No answers found in the database!</h3>;
        else
            answersListContent = (
                <List
                    list={answers}
                    item={AnswerItem}
                    email={props.userEmail}
                    onLogout={props.onLogout}
                    removeAnswer={removeAnswer}
                />
            );
    }

    const [value, setValue] = useState('');

    const onChangeText = (enteredValue) => {
        setValue(enteredValue.target.value);
    };

    const onChangeFile = event =>{
        
        var reader = new FileReader();

        reader.onload = function(){
            var data = reader.result;
            setValue(data);
        };
        
        if (typeof event.target.files[0] !== 'undefined')
            reader.readAsText(event.target.files[0]);
        else
            setValue('');
    };

    const jsonHandler = (param, email)  => {   
        // Render user list when button clicked

        console.log(param);
        console.log(email);
        
        const params = {
            'json': param,
            'email': email
        };
    
        axios.post(`${config.serverURL}/api/surveys/submit`, params)
        .then(res => {
            // If successful set user list
            console.log(res.status);
        })
        .catch(error => {
            console.log(error);
        });

        setValue('');
    
    };

    let content = (
        <React.Fragment>
            <h1>Researcher Page</h1>
            <textarea placeholder="Write your JSON Form here!"  rows='10' className='textarea' value={value} onChange={onChangeText} />
            <input className="fileInput" type="file" name="form" accept=".json" onChange={onChangeFile} />
            <MainButton title='Send JSON' onClick={jsonHandler.bind(this, value, props.userEmail)}></MainButton>
            
            <MainButton title='ANSWER LIST' onClick={renderAnswersList} />
            {answersListContent}
        </React.Fragment>
    );
    if (!props.isLogged)
        content = <ExpiredSessionPage />;

    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    );
};

export default ResearcherPageExtension;
    
