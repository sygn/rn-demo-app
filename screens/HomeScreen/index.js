import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GoalButton } from './components';
import * as actions from './actions';

const Goals = {
  LoseWeight: 'lose_weight',
  GetFitter: 'get_fitter',
  GainMuscle: 'gain_muscle',
}

export default class HomeScreen extends React.Component {
  handleClick(goal) {
    const { navigation } = this.props;
    return () => {
      actions.navigateToAge(navigation, {goal});
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            style={{ width: 22, height: 44, resizeMode: 'cover' }}
            source={require('./img/icon8Logo.png')}
          />
          <Text>Welcome to 8fit</Text>
        </View>
        <Text>What's your goal</Text>
        <GoalButton
          title={'Lose weight'}
          subTitle={'Burn fat & get lean'}
          onClick={this.handleClick(Goals.LoseWeight)}
        />
        <GoalButton
          title={'Get fitter'}
          subTitle={'Tone up & feel healthy'}
          onClick={this.handleClick(Goals.GetFitter)}
        />
        <GoalButton
          title={'Gain muscle'}
          subTitle={'Build mass & strength'}
          onClick={this.handleClick(Goals.GainMuscle)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  headerContainer: {
    alignItems: 'center',
  }
});


