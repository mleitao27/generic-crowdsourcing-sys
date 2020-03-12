import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainScreen from '../screens/MainScreen';
import FormScreen from '../screens/FormScreen';
import ResultsScreen from '../screens/ResultsScreen';
import RegisterScreen from '../screens/RegisterScreen';

const MainNavigator = createStackNavigator({
    Main: {
        screen: MainScreen,
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
});

export default createAppContainer(MainNavigator);