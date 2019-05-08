/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Hello from './components/basic/Hello';
import Bananas from './components/basic/Bananas';
import TestState from './components/basic/TestState';
import TestProps from './components/basic/TestProps';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

const RootStack = createStackNavigator({
  Home: {screen: MainPage},
  Result: {screen: SearchResultPage}
});

const App = createAppContainer(RootStack);

export default App; 