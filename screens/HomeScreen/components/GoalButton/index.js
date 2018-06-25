import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';

export default ({ onClick, title, subTitle }) => {
  return (
    <TouchableHighlight onPress={onClick}>
      <View
        accessibilityLabel="Learn more about this purple button"
        style={styles.container}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d6d7da',
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
  }
});