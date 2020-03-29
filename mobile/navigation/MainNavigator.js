import { createStackNavigator, TransitionSpecs } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainScreen from '../components/screens/MainScreen';
import FormScreen from '../components/screens/FormScreen';
import ResultsScreen from '../components/screens/ResultsScreen';
import RegisterScreen from '../components/screens/RegisterScreen';
import TestScreen1 from '../components/screens/TestScreen1';
import TestScreen2 from '../components/screens/TestScreen2';

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
    },
    Test1: {
        screen: TestScreen1
    },
    Test2: {
        screen: TestScreen2
    }
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

export default createAppContainer(MainNavigator);