import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import * as screens from './screens';

const RootStack = createStackNavigator({
  Home: {
    screen: screens.HomeScreen
  },
  Age: {
    screen: screens.AgeScreen,
  },
  Height: {
    screen: screens.HeightScreen,
  },
  Summary: {
    screen: screens.SummaryScreen,
  },
  initialScreen: 'HomeScreen',
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
