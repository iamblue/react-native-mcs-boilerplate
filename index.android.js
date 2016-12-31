/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MCSjs from 'react-native-mcsjs';

const myApp = MCSjs.register({
  appId: '673549393943134',
  appSecret: '0Eei1OGcGT6wxZ2aKWO3LHvvpLEs1SKe',
  deviceId: 'DU8xrUWV',
});


export default class test extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      message: 'Hello world',
    };
  }

  componentWillMount() {
    const _this = this;
    myApp.on('encodeByMD5', function(data) {
      console.log(data);
      _this.setState({ message: data.updateDatapoint.values.value })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!{this.state.message}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('test', () => test);
