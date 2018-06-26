import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { ProgressBar, Header, ControlButton } from '../../shared';
import * as actions from './actions';
import * as helpers from '../../helpers/conversion';
import {HeightMetrics} from '../../shared/constants';
 
const MinHeight = 104;
const MaxHeight = 204;

export default class HeightScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      height: null,
      metric: HeightMetrics.Centimeter,
      isValid: null,
      cm: null,
      feet: null,
      inch: null,
    };
    this.handleCentimeterInput = this.handleCentimeterInput.bind(this);
    this.handleFeetChange = this.handleFeetChange.bind(this);
    this.handleInchChange = this.handleInchChange.bind(this);
    this.handleCmChange = this.handleCmChange.bind(this);
    this.onContinue = this.onContinue.bind(this);
  }

  handleCentimeterInput(e) {
    const cm = parseInt(e.target.value, 10);
    const feet = helpers.toFeet(cm);
    const inch = helpers.toInch(cm);

    this.setState({ height: cm, feet, inch });
  }

  isValid(cm) {
    const height = parseInt(cm);
    return MinHeight <= height && height <= MaxHeight;
  }

  handleFeetChange(feet = 0) {
    const { inch } = this.state;
    const cm = helpers.toCm(feet || 0, inch || 0);

    this.setState({ feet, cm });
  }

  handleInchChange(inch = 0) {
    const { feet } = this.state;
    const cm = helpers.toCm(feet || 0, inch || 0);
    this.setState({ inch, cm });
  }

  handleCmChange(cm = 0) {
    const height = parseInt(cm || 0);
    const feet = helpers.toFeet(height);
    const inch = helpers.toInch(height);

    this.setState({ cm: cm.toString(), inch: inch.toString(), feet: feet.toString() });
  }

  onContinue() {
    const {cm, metric} = this.state;
    const { navigation } = this.props;
    const {
      state: {
        params: {
          goal,
          age,
        }
      }
    } = navigation;

    actions.navigateToSummary(navigation, { goal, age, cm, metric });
  }

  render() {
    const {
      height,
      metric,
      cm,
      feet,
      inch
    } = this.state;


    return (
      <View style={styles.container}>
        <ProgressBar percentage={100} />
        <Header title="How tall are you?" />
        {
          metric === HeightMetrics.Centimeter
            ? <View style={styles.feetContainer}>
              <View style={[styles.inputContainer]}>
                <TextInput
                  style={[styles.textInput]}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  keyboardType='numeric'
                  onChangeText={this.handleCmChange}
                  value={cm}
                  textAlign={'right'}
                />
                <View style={{ flex:1, justifyContent: 'flex-end' }}>
                  <Text style={styles.label} textAlignVertical={'bottom'}>Cm</Text>
                </View>
              </View>
            </View>
            : <View style={styles.feetContainer}>
              <View style={[styles.inputContainer]}>
                <TextInput
                  style={[styles.textInput]}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  keyboardType='numeric'
                  onChangeText={this.handleFeetChange}
                  value={feet}
                  textAlign={'right'}
                />
                <View style={{ flex:1, justifyContent: 'flex-end' }}>
                  <Text style={styles.label} textAlignVertical={'bottom'}>Ft</Text>
                </View>
              </View>
              <View style={[styles.inputContainer]}>
                <TextInput
                  style={[styles.textInput]}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  keyboardType='numeric'
                  onChangeText={this.handleInchChange}
                  value={inch}
                  textAlign={'right'}
                />
                <View style={{ flex:1, justifyContent: 'flex-end' }}>
                  <Text style={styles.label} textAlignVertical={'bottom'}>In</Text>
                </View>
              </View>
            </View>
        }

        <View style={styles.btnGroup}>
          <TouchableOpacity
            onPress={() => this.setState({ metric: HeightMetrics.Feet })}
          >
            <View style={[styles.toggleButton, styles.feetButton, metric === HeightMetrics.Feet ? styles.activeBtn : null]}>
              <Text style={[styles.toggleText, metric === HeightMetrics.Feet ? styles.activeText : null]}>FT</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ metric: HeightMetrics.Centimeter })}
          >
            <View style={[styles.toggleButton, styles.cmButton, metric === HeightMetrics.Centimeter ? styles.activeBtn : null]}>
              <Text style={[styles.toggleText,  metric === HeightMetrics.Centimeter ? styles.activeText : null]}>CM</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ControlButton
          title={'Continue'}
          onClick={this.onContinue}
          disabled={!this.isValid(cm)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  toggleButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#2a2d30',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  btnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
  },
  activeBtn: {
    backgroundColor: '#2a2d30',
  },
  activeText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#a9abac',
    marginHorizontal: 20,
  },
  feetContainer: {
    flexDirection: 'row',
    marginBottom: 40,
    marginTop: 60,
  },
  textInput: {
    flex: 1,
    fontSize: 32,
    paddingHorizontal: 5,
    fontFamily: 'firasans-bold'
  },
  label: {
    color: '#a9abac',
    fontFamily: 'firasans-medium'
  },
  feetButton: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  cmButton: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  toggleText :{
    fontFamily: 'firasans-medium'
  }
});


