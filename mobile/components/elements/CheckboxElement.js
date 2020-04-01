import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

const CheckboxElement = props => {

    let auxOptions = [];
    const [options, setOptions] = useState([]);
    const [dummyState, setDummyState] = useState(false);

    useEffect(() => {
        for (var i = 0; i < props.items.length; i++) {
            auxOptions[i] = false;
        }
        props.onChange(props.index, auxOptions);
        setOptions(auxOptions);
    }, []);

    const form = [];

    const onChange = index => {
        auxOptions = options;
        auxOptions[index] = !auxOptions[index];
        setOptions(auxOptions);
        props.onChange(props.index, auxOptions);
        setDummyState(!dummyState);
    };

    props.items.map((i, index) => {
        form.push(
            <TouchableOpacity key={index} style={{flexDirection: 'row', alignItems: 'center'}} onPress={onChange.bind(this, index)}>
                <Icon name={options[index] ? 'ios-checkmark-circle' : 'ios-checkmark-circle-outline'} size={22}/>
                <Text> {i.name}</Text>
            </TouchableOpacity>
        );
    });

    return (
        <View>
            <Text>{props.title}</Text>
            {form}
        </View>
    );
};

export default CheckboxElement;