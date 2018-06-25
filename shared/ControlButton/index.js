import React from 'react';
import {StyleSheet, Button} from 'react-native';

const ControlButton = ({title, onClick}) => {
  return (
    <Button
      onPress={onClick}
      style={styles.controlButton} 
      title={title}
    >
    </Button>
  );
}

export default ControlButton;

const styles = StyleSheet.create({
  controlButton: {
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#292c2f',
  }
});  
