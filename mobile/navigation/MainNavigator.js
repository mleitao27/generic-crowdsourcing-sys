import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, TransitionSpecs } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainScreen from '../screens/MainScreen';
import FormScreen from '../screens/FormScreen';
import ResultsScreen from '../screens/ResultsScreen';
import RegisterScreen from '../screens/RegisterScreen';

import Colors from '../constants/colors';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Colors.primary
    },
    headerTitleAlign: 'center',
    headerTintColor: 'white',
    headerBackTitle: 'Back'
};

const MainNavigator = createStackNavigator({
    Main: {
        screen: MainScreen
    },
    Form: {
        screen: FormScreen
    },
    Results: {
        screen: ResultsScreen
    },
    Register: {
        screen: RegisterScreen
    }
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

export default createAppContainer(MainNavigator);