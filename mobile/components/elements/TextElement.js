import React, {useState, useEffect} from 'react';
import { TextInput, View, Text } from 'react-native';

const TextElement = props => {

    const [value, setValue] = useState('');

    useEffect(() => {
        props.onChange(props.pageIndex, props.index, '');
    }, []);

    const inputHandler = enteredValue => {
        setValue(enteredValue);
        props.onChange(props.pageIndex, props.index, enteredValue);
    };

    return (
        <View>
            <Text>{props.title}</Text>
            <TextInput 
                onChangeText={inputHandler}
                value={value}
            />
        </View>
    );
};

export default TextElement;