import React from 'react';
import { View } from 'react-native';

import globalStyles from '../../constants/globalStyles';
import Colors from '../../constants/colors';
import data from '../../data/surveyjs.json';

import CustomButton from '../CustomButton';
import Form from '../Form';

import FormExtension from '../../extension/FormExtension';

const FormScreen = props => {

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <View style={{width:'100%'}}>
            <Form json={data} extension={FormExtension} onSubmit={onSubmit} />

            <CustomButton
                title='Results'
                onPress={() => props.navigation.navigate({routeName: 'Results'})}
                backgroundColor={Colors.primary}
                textColor={Colors.secondary}
            />
        </View>
    );
};

export default FormScreen;