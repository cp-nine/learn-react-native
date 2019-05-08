import React, {Component} from 'react';
import {View, Text} from 'react-native';

class DoBlink extends Component {

  constructor(props){
    super(props);

    this.state = { show: true }

    setInterval(() => {
      this.setState(prevState => ({show: !prevState.show}));
    }, 1000);
  }

  render(){
    if (!this.state.show) {
      return null;
    }
    
    return (

      <Text style={{fontSize: 30}}>{this.props.text}</Text>
      
    );
  }
}

export default class Blink extends Component {

  render(){
    return (

      <View>
        <DoBlink text="Blink Text"/>
        <DoBlink text="Wak wak land"/>
      </View>
      
    );
  }
}