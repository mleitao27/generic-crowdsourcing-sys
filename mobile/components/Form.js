import React from 'react';
import { View, Button, Alert } from 'react-native';

import TextElement from './elements/TextElement';
import BooleanElement from './elements/BooleanElement';
import CheckboxElement from './elements/CheckboxElement';
import DropdownElement from './elements/DropdownElement';
import RadioElement from './elements/RadioElement';
import RangeElement from "./elements/RangeElement";
import ImagePickerElement from "./elements/ImagePickerElement";
import DateElement from "./elements/DateElement";

const Form = props => {

    // Form elements array
    let form = [];
    // Answer data array
    let data = [];

    const onChange = (index, value) => {
        data[index] = {type: props.json.elements[index].type, value: value};
    };

    const onSubmit = () => {
        props.onSubmit(data);
    };

    props.json.elements.map((e, index) => {

         if (e.type === 'text') form.push(<TextElement key={index} onChange={onChange} index={index} title={e.name} />);
        else if (e.type === 'boolean') form.push(<BooleanElement key={index} onChange={onChange} index={index} title={e.name} />);
        else if (e.type === 'checkbox') form.push(<CheckboxElement key={index} onChange={onChange} index={index} title={e.name} items={e.items} />);
        else if (e.type === 'dropdown') form.push(<DropdownElement key={index} onChange={onChange} index={index} items={e.items} />);
        else if (e.type === 'radio') form.push(<RadioElement key={index} onChange={onChange} index={index} items={e.items} />);
        else if (e.type === 'range') form.push(<RangeElement key={index} onChange={onChange} index={index} min={e.min} max={e.max} />);
        else if (e.type === 'imagepicker') form.push(<ImagePickerElement key={index} onChange={onChange} index={index} items={e.items} />);
        else if (e.type === 'date') form.push(<DateElement key={index} onChange={onChange} index={index} />);

        props.extension.map(ext => {
            if (e.type === ext.type) form.push(<ext.component key={index}/>);
        });
    });

    return (
        <View>
            {form}
            <Button title='Submit' onPress={onSubmit}/>
        </View>
    );
};

export default Form;