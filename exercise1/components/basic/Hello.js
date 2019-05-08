import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class Hello extends Component {

  static navigationOptions = {
    title: 'Banana App'
  };

  render(){
    return (
    <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
      <Text>Hello Coder</Text>
    </View>
    );
  }
}