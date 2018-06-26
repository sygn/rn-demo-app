import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { ProgressBar, Header, ControlButton } from '../../shared';
import * as helpers from '../../helpers/conversion';
import {HeightMetrics} from '../../shared/constants';

export default class SummaryScreen extends React.Component {
  getHeight(cm, metric) {
    if (metric === HeightMetrics.Centimeter) {
      return `${cm}Cm`;
    }

    const feet = helpers.toFeet(cm);
    const inch = helpers.toInch(cm);

    return `${feet}Ft ${inch}In`;
  }

  render() {
    const {
      navigation: {
        state: {
          params: {
            goal,
            age,
            cm,
            metric
          },
        },
      }
    } = this.props;

    return (
      <View style={styles.container}>
        <Header title={"Confirm your details: "} />
        <View style={styles.groupContainer}>
          <View style={styles.group}>
            <Text style={styles.label} textAlign="left">Goal</Text>
            <Text style={styles.value} textAlign="right">{goal}</Text>
          </View>
          <View style={styles.seperator}></View>
          <View style={styles.group}>
            <Text style={styles.label} textAlign="left" >Age</Text>
            <Text style={styles.value} textAlign="right" >{age}</Text>
          </View>
          <View style={styles.seperator}></View>
          <View style={styles.group}>
            <Text style={styles.label} textAlign="left">Height</Text>
            <Text style={styles.value} textAlign="right">{this.getHeight(cm, metric)}</Text>
          </View>
        </View>
        <ControlButton
          title={'Save'}
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
  groupContainer: {
    flexDirection: 'column',
    marginHorizontal: 20,
    marginTop: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 10,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#000',
    marginLeft: 20,
    paddingLeft: 20,
  },
  group: {
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    padding: 20,
  },
  label: {
    flex: 1,
    fontSize: 18,
    textAlign: 'left',
  },
  value: {
    flex: 1,
    fontSize: 14,
    textAlign: 'right',
  }
});