import React from 'react';
import { StyleSheet, Button, View, TouchableHighlight, Text } from 'react-native';

const ControlButton = ({ title, onClick, disabled }) => {
  return (
    <TouchableHighlight
      onPress={!disabled ? onClick : () => { }}
      style={styles.button}
    >
      <View style={[styles.container, disabled ? styles.disabled : null]}>
        <Text style={styles.label}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}

ControlButton.defaultProps = {
  title: 'Continue',
  onClick: () => { },
};

export default ControlButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#292c2f',
    alignSelf: 'center',
  },
  disabled: {
    backgroundColor: '#a9abac',
    borderColor: '#a9abac',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'firasans-medium'
  }
});  
