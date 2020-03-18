import React from 'react';
import { View } from 'react-native';


import globalStyles from '../constants/globalStyles';
import Colors from '../constants/colors';

import CustomButton from '../components/CustomButton';

const ResultsScreen = props => {
    return (
        <View style={globalStyles.screen}>
            <CustomButton
                title='Main'
                onPress={() => props.navigation.navigate({routeName: 'Main'})}
                backgroundColor={Colors.primary}
                textColor={Colors.secondary}
            />
        </View>
    );
};

export default ResultsScreen;