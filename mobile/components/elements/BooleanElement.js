import React, { useState, useEffect } from 'react';
import { Switch, View, Text } from 'react-native';

const BooleanElement = props => {

    const [state, setState] = useState(false);

    useEffect(() => {
        props.onChange(props.index, false);
    }, []);

    const toggleSwitch = newState => {
        setState(!state);
        props.onChange(props.index, !state);
    };

    return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text>{props.title}</Text>
            <Switch 
                onValueChange={toggleSwitch}
                value={state}
                thumbColor={state ? '#333' : 'white'}
                trackColor={{false: '#ccc', true: '#ccc'}}
            />
        </View>
    );
};

export default BooleanElement;