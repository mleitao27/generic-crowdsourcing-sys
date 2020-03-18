import React from 'react';
import { View } from 'react-native';

import globalStyles from '../constants/globalStyles';
import Colors from '../constants/colors';

import CustomButton from '../components/CustomButton';

const FormScreen = props => {
    return (
        <View style={globalStyles.screen}>
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