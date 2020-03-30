import React, { useState, useEffect } from 'react';
import { Switch } from 'react-native';

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
        <Switch 
            onValueChange={toggleSwitch}
            value={state}
        />
    );
};

export default BooleanElement;