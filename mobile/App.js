import React from 'react';

import MainNavigator from './navigation/MainNavigator';
import { enableScreens } from 'react-native-screens';

// Under the hood react-navigation uses native optimized components
enableScreens();

export default function App() {
  return <MainNavigator />;
}