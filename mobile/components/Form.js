import React from 'react';
import { Button, ScrollView } from 'react-native';

import BooleanElement from './elements/BooleanElement';
import CheckboxElement from './elements/CheckboxElement';
import CommentElement from './elements/CommentElement';
import DateTimePickerElement from "./elements/DateTimePickerElement";
import DropdownElement from './elements/DropdownElement';
import ExpressionElement from './elements/ExpressionElement';
import FileElement from './elements/FileElement';
import HtmlElement from './elements/HtmlElement';
import ImageElement from './elements/ImageElement';
import ImagePickerElement from "./elements/ImagePickerElement";
import MatrixDropdownElement from './elements/MatrixDropdownElement';
import MatrixDynamicElement from './elements/MatrixDynamicElement';
import MatrixElement from './elements/MatrixElement';
import MultipleTextElement from './elements/MultipleTextElement';
import PanelDynamicElement from './elements/PanelDynamicElement';
import PanelElement from './elements/PanelElement';
import RadioElement from './elements/RadioElement';
import RangeElement from "./elements/RangeElement";
import RatingElement from './elements/RatingElement';
import TextElement from './elements/TextElement';

const Form = props => {

    // Form elements array
    let form = [];
    // Answer data array
    let data = [];

    const onChange = (pageIndex, index, value) => {
        data[index] = {type: props.json.pages[pageIndex].elements[index].type, value: value};
    };

    const onSubmit = () => {
        props.onSubmit(data);
    };

    props.json.pages.map((page, pageIndex) => {
        page.elements.map((e, index) => {
        
            if (e.type === 'boolean') 
                form.push(
                    <BooleanElement 
                        key={index} 
                        onChange={onChange} 
                        index={index} 
                        pageIndex={pageIndex}
                        title={e.name} 
                    />
                );
            else if (e.type === 'checkbox') 
                form.push(
                    <CheckboxElement 
                        key={index} 
                        onChange={onChange} 
                        index={index} 
                        pageIndex={pageIndex}
                        title={e.name}
                        items={e.choices} 
                    />
                );
            else if (e.type === 'comment') 
                form.push(
                    <CommentElement 
                        key={index} 
                        onChange={onChange} 
                        index={index} 
                        pageIndex={pageIndex}
                        title={e.name}
                    />
                );
            else if (e.type === 'datepicker') 
                form.push(
                    <DateTimePickerElement 
                        key={index}
                        onChange={onChange}
                        index={index}
                        pageIndex={pageIndex}
                        title={e.name} 
                        mode={'date'}
                    />
                );
            else if (e.type === 'timepicker') 
                form.push(
                    <DateTimePickerElement 
                        key={index}
                        onChange={onChange}
                        index={index}
                        pageIndex={pageIndex}
                        title={e.name} 
                        mode={'time'}
                    />
                );
            else if (e.type === 'dropdown') 
                form.push(
                    <DropdownElement
                        key={index}
                        onChange={onChange}
                        index={index}
                        pageIndex={pageIndex}
                        title={e.name}
                        items={e.choices} 
                    />
                );
            else if (e.type === 'expression') 
                form.push(
                    <ExpressionElement
                        key={index}
                        onChange={onChange}
                        index={index}
                        pageIndex={pageIndex}
                        title={e.name}
                    />
                );
            else if (e.type === 'file') 
                form.push(
                    <FileElement
                        key={index}
                        onChange={onChange}
                        index={index}
                        pageIndex={pageIndex}
                        title={e.name}
                    />
                );
            else if (e.type === 'html') 
                form.push(
                    <HtmlElement
                        key={index}
                        onChange={onChange}
                        index={index}
                        pageIndex={pageIndex}
                        title={e.name}
                    />
                );
            else if (e.type === 'image') 
                form.push(
                    <ImageElement
                        key={index}
                        onChange={onChange}
                        index={index}
                        pageIndex={pageIndex}
                        title={e.name}
                    />
                );
            else if (e.type === 'imagepicker') 
                form.push(
                    <ImagePickerElement
                        key={index}
                        onChange={onChange}
                        index={index}
                        pageIndex={pageIndex}
                        title={e.name}
                        items={e.choices} 
                    />
                );
            else if (e.type === 'matrixdropdown') 
                form.push(
                    <MatrixDropdownElement
                        key={index}
                        onChange={onChange}
                        index={index}
                        pageIndex={pageIndex}
                        title={e.name}
                    />
                );
            else if (e.type === 'matrixdynamic') 
                form.push(
                    <MatrixDynamicElement
                        key={index}
                        onChange={onChange}
                        index={index}
                        pageIndex={pageIndex}
                        title={e.name}
                    />
                );
            else if (e.type === 'matrix') 
                form.push(
                    <MatrixElement
                        key={index}
                        onChange={onChange}
                        index={index}
                        pageIndex={pageIndex}
                        title={e.name}
                    />
                );
            else if (e.type === 'multipletext') 
                form.push(
                    <MultipleTextElement
                        key={index}
                        onChange={onChange}
                        index={index}
                        pageIndex={pageIndex}
                        title={e.name}
                    />
                );
            else if (e.type === 'paneldynamic') 
                form.push(
                    <PanelDynamicElement
                        key={index}
                        onChange={onChange}
                        index={index}
                        pageIndex={pageIndex}
                        title={e.name}
                    />
                );
            else if (e.type === 'panel') 
                form.push(
                    <PanelElement
                        key={index}
                        onChange={onChange}
                        index={index}
                        pageIndex={pageIndex}
                        title={e.name}
                    />
                );
            else if (e.type === 'radiogroup') 
                form.push(
                    <RadioElement
                        key={index}
                        onChange={onChange}
                        index={index}
                        pageIndex={pageIndex}
                        title={e.name}
                        items={e.choices} 
                    />
                );
            else if (e.type === 'range') 
                form.push(
                    <RangeElement
                        key={index}
                        onChange={onChange}
                        index={index}
                        pageIndex={pageIndex}
                        title={e.name}
                        min={e.min}
                        max={e.max} 
                        step={e.step} 
                    />
                );
            else if (e.type === 'rating') 
                form.push(
                    <RatingElement
                        key={index}
                        onChange={onChange}
                        index={index}
                        pageIndex={pageIndex}
                        title={e.name}
                    />
                );
            else if (e.type === 'text') 
                form.push(
                    <TextElement
                        key={index}
                        onChange={onChange}
                        index={index}
                        pageIndex={pageIndex}
                        title={e.name} 
                    />
                );

            props.extension.map(ext => {
                if (e.type === ext.type) form.push(<ext.component key={index}/>);
            });

        });
    });

    return (
        <ScrollView>
            {form}
            <Button title='Submit' onPress={onSubmit}/>
        </ScrollView>
    );
};

export default Form;