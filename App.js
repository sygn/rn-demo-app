import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import * as screens from './screens';
import { Font } from 'expo';

const RootStack = createStackNavigator({
  Home: {
    screen: screens.HomeScreen,
    navigationOptions: {
      header: null,
    },
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
}, {
  header: {
    style: {
      elevation: 0, //remove shadow on Android
      shadowOpacity: 0, //remove shadow on iOS,
    }
  }
});

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontsLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'firasans-bold': require('./assets/fonts/FiraSans-Bold.otf'),
      'firasans-regular': require('./assets/fonts/FiraSans-Regular.otf'),
      'firasans-medium': require('./assets/fonts/FiraSans-Medium.otf')
    });
    this.setState({fontLoaded: true})
  }

  render() {
    const {fontLoaded}= this.state;
    if(!fontLoaded) {
      return null;
    }

    return <RootStack />;
  }
}
