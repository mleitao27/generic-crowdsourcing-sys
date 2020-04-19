import React, { useState } from 'react';
import jsonHandler from '../extension/jsonHandler'

import MainButton from '../components/MainButton';

const ResearcherPage = props => {

    
    const [value, setValue] = useState('');
    const [file, setFile] = useState(null);

    const changeValue = (enteredValue) => {
        setValue(enteredValue.target.value);
    };

    const onChangeHandler = event =>{
        
        var reader = new FileReader();

        reader.onload = function(){
            var data = reader.result;
            setFile(data);
        };
        
        reader.readAsText(event.target.files[0]);
    };
    
    return (
        <React.Fragment>
            <h1>Researcher Page</h1>
            <form onSubmit={jsonHandler.bind(this,value)}>
                <textarea value={value} onChange={changeValue} />
                <input type="submit" />
            </form>
            <form onSubmit={jsonHandler.bind(this,file)}>
                <input type="file" name="form" accept=".json" onChange={onChangeHandler} />
                <input type="submit" />
            </form>
            <MainButton title='Send JSON' onClick={jsonHandler.bind(this, file)}></MainButton>
        </React.Fragment>
    );
};

export default ResearcherPage;