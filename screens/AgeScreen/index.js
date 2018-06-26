import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { ProgressBar, Header, ControlButton } from '../../shared';
import * as actions from './actions';

export default class AgeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      age: undefined,
    };
    this.onChange = this.onChange.bind(this);
    this.onContinue = this.onContinue.bind(this);
  }

  onChange(age) {
    this.setState({ age });
  }

  onContinue() {
    const {
      navigation
    } = this.props;
    const {
      state: {
        params: {
          goal,
        }
      }
    } = navigation;
    const { age } = this.state;
    actions.navigateToHeight(navigation, { goal, age });
  }

  isValid(age) {
    return !Number.isNaN(parseInt(age, 10));
  }

  render() {
    const { age } = this.state;

    return (
      <View style={styles.container}>
        <ProgressBar percentage={66} />
        <Header title={"How old are you?"} />
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            keyboardType={'numeric'}
            onChangeText={this.onChange}
            underlineColorAndroid='rgba(0,0,0,0)'
            value={age}
            textAlign={'center'}
          />
        </View>
        <ControlButton
          title={'Continue'}
          onClick={this.onContinue}
          disabled={!this.isValid(age)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  textInput: {
    padding: 10,
    alignSelf: 'stretch',
    width: '100%',
    fontSize: 32,
    fontFamily: 'firasans-bold',
  },
  textInputContainer: {
    marginTop: 40,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 20,
  }
});


