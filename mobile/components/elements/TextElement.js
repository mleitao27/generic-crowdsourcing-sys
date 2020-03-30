import React, {useState, useEffect} from 'react';
import { TextInput } from 'react-native';

const TextElement = props => {

    const [value, setValue] = useState('');

    useEffect(() => {
        props.onChange(props.index, '');
    }, []);

    const inputHandler = enteredValue => {
        setValue(enteredValue);
        props.onChange(props.index, enteredValue);
    };

    return (
        <TextInput 
            onChangeText={inputHandler}
            value={value}
        />
    );
};

export default TextElement;