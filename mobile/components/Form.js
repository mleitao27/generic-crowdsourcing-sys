import React from 'react';
import { View, Button, Alert } from 'react-native';

import TextElement from './elements/TextElement';
import BooleanElement from './elements/BooleanElement';
import CheckboxElement from './elements/CheckboxElement';

const Form = props => {

    // Form elements array
    let form = [];
    // Answer data array
    let data = [];

    const onChange = (index, value) => {
        data[index] = {type: props.json.elements[index].type, value: value};
    };

    props.json.elements.map((e, index) => {
        if (e.type === 'text') form.push(<TextElement key={index} onChange={onChange} index={index} />);
        else if (e.type === 'boolean') form.push(<BooleanElement key={index} onChange={onChange} index={index} />);
        else if (e.type === 'checkbox') form.push(<CheckboxElement key={index}/>);

        props.extension.map(ext => {
            if (e.type === ext.type) form.push(<ext.component key={index}/>);
        });
    });

    return (
        <View>
            {form}
            <Button title='Submit' onPress={() => console.log(data)}/>
        </View>
    );
};

export default Form;