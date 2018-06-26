import React from 'react';
import { StyleSheet, View } from 'react-native';

export default ({ percentage = 0 }) => {
  return (
    <View
      style={[styles.progressBar, {
        width: `${percentage}%`,
      }]}
    >
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    height: 2,
    borderColor: '#32e09e',
    borderWidth: 1,
  },
});  
