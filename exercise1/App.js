/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import Blink from './components/basic/Blink';
// import Bananas from './components/basic/Bananas';
// import Hello from './components/basic/Hello';

export default class App extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Blink></Blink>
        </View>
      );
    }
}