import React from 'react';
import {StyleSheet, View} from 'react-native';

export default ({percentage}) => {
  return (
    <View
      style={{
        width: '33%',
        borderWidth: 1,
      }}
    >
    </View>
  );
};

const styles = StyleSheet.create({
    progressBar: {
        height: 2,
        backgroundColor: 'green',
    },
  });  
