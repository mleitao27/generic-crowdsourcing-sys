import React from 'react';

import MainNavigator from './navigation/MainNavigator';
import { enableScreens } from 'react-native-screens';
import configActivation from './config/configActivation';

// Under the hood react-navigation uses native optimized components
enableScreens();

configActivation();

export default function App() {
  return <MainNavigator />;
}