import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {ProgressBar, Header, ControlButton} from '../../shared';
import * as actions from './actions';

export default class AgeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      age: null,
    };
    this.onChange = this.onChange.bind(this);
    this.onContinue = this.onContinue.bind(this);
  }

  onChange(e) {
    const val = e.target.value;
    this.setState({age: parseInt(val, 10)});
  }

  onContinue() {
    const {navigation, goal} = this.props;
    const {age} = this.state;
    actions.navigateToHeight(navigation, {goal, age});
  }

  render() {
    const {age} = this.state;
    return (
      <View style={styles.container}>
        <ProgressBar />
        <Header title={"How old are you?"}/>
        <View style={styles.textInputContainer}>
          <TextInput 
            style={styles.textInput}
            keyboardType={'numeric'}
            onChange={this.onChange}
            value={age}
          />
          </View>
        <ControlButton
          title={'Continue'}
          onClick={this.onContinue}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textInput: {
    padding: 20,
  },
  textInputContainer: {
    marginHorizontal: 20,
  }
});


