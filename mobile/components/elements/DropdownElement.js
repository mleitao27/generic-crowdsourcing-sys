import React, { useState, useEffect } from 'react';
import { Picker, Text, View } from 'react-native';

const DropdownElement = props => {

    const [value, setValue] = useState(false);

    useEffect(() => {
        props.onChange(props.index, "");
    }, []);

    const pickerHandler = enteredValue => {
        setValue(enteredValue);
        props.onChange(props.index, enteredValue);
    };

    return (
        <View>
            <Text>{props.title}</Text>
            <Picker
                mode="dialog"
                selectedValue={value}
                onValueChange={pickerHandler}>
                {props.items.map((item, index) => {
                    return (<Picker.Item label={item.name} value={item.value} key={index} />)
                })}
            </Picker>
        </View>
    );
};

export default DropdownElement;