import React from 'react';
import { ScrollView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

import Colors from '../../constants/colors';
import data from '../../data/form.json';

import CustomButton from '../CustomButton';
import Form from '../Form';

import FormExtension from '../../extension/FormExtension';


const FormScreen = props => {

    const getFile = async () => {
        const file = await DocumentPicker.getDocumentAsync();
        console.log(file);
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <ScrollView style={{ width: '100%' }}>

            <Form json={data} extension={FormExtension} onSubmit={onSubmit} />
            <CustomButton
                title='Results'
                onPress={() => props.navigation.navigate({ routeName: 'Results' })}
                backgroundColor={Colors.primary}
                textColor={Colors.secondary}
            />
            <CustomButton
                title='File'
                onPress={getFile}
                backgroundColor={Colors.primary}
                textColor={Colors.secondary}
            />
        </ScrollView>
    );
};

export default FormScreen;