import React from 'react';
import { ScrollView } from 'react-native';

import Colors from '../../constants/colors';
import data from '../../data/form.json';

import CustomButton from '../CustomButton';
import Form from '../Form';

import FormExtension from '../../extension/FormExtension';


const FormScreen = props => {

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <ScrollView style={{ width: '100%' }}>
            <Form json={data} extension={FormExtension} onSubmit={onSubmit} />
        </ScrollView>
    );
};

export default FormScreen;