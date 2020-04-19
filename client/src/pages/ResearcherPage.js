import React, { useState } from 'react';

import MainButton from '../components/MainButton';

import axios from 'axios';
import config from '../extension/config';

const ResearcherPage = props => {

    
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
    
    return (
        <React.Fragment>
            <h1>Researcher Page</h1>
            <textarea value={value} onChange={onChangeText} />
            <input type="file" name="form" accept=".json" onChange={onChangeFile} />
            <MainButton title='Send JSON' onClick={jsonHandler.bind(this, value, props.userEmail)}></MainButton>
        </React.Fragment>
    );
};

export default ResearcherPage;