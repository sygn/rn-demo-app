import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AgeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Age screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


