import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <Text
        style={styles.header}
      >
        {title}
      </Text>
    </View>
  );
}

Header.defaultProps = {
  title: '',
};

export default Header;

const styles = StyleSheet.create({
  header :{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 26,
    textAlign: 'center',
  }
});  
