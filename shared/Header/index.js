import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default ({title}) => {
  return (
    <Text style={styles.header}>{title}</Text>
  );
}

const styles = StyleSheet.create({
  header :{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 26,
  }
});  
