/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import RnTabbar from './js/common/RnTabbar'

export default class App extends Component<{}> {
  constructor(props){
     super(props);
  }
  render() {
    return (
      <View style={styles.container}>
         <RnTabbar/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
