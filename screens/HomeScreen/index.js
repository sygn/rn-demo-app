import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {GoalButton} from './components';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>    
        <View>
          <Image
            style={{width: 44, height: 22}}
          />
          <Text>Welcome to 8fit</Text>
        </View>
        <Text>What's your goal</Text>
        <GoalButton title={'Lose weight'} subTitle={'Burn fat & get lean'}/>
        <GoalButton title={'Get fitter'} subTitle={'Tone up & feel healthy'}/>
        <GoalButton title={'Gain muscle'} subTitle={'Build mass & strength'}/>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});


