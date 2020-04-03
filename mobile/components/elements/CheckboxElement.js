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
        props.onChange(props.pageIndex, props.index, []);
        setOptions(auxOptions);
    }, []);

    const form = [];

    const onChange = index => {
        var data = [];

        auxOptions = options;
        auxOptions[index] = !auxOptions[index];

        auxOptions.map((option, index) => {
            if (option) data.push(props.items[index]);
        });

        setOptions(auxOptions);
        props.onChange(props.pageIndex, props.index, data);
        setDummyState(!dummyState);
    };

    props.items.map((i, index) => {
        form.push(
            <TouchableOpacity key={index} style={{flexDirection: 'row', alignItems: 'center'}} onPress={onChange.bind(this, index)}>
                <Icon name={options[index] ? 'ios-checkmark-circle' : 'ios-checkmark-circle-outline'} size={22}/>
                <Text> {i}</Text>
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