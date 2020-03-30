import React from 'react';
import { View } from 'react-native';

import globalStyles from '../../constants/globalStyles';
import Colors from '../../constants/colors';
import data from '../../data/form.json';

import CustomButton from '../CustomButton';
import Form from '../Form';

import FormExtension from '../../extension/FormExtension';

const FormScreen = props => {

    return (
        <View style={{width:'100%'}}>
            <Form json={data} extension={FormExtension} />

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