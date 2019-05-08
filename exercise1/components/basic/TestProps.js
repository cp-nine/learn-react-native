import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

class BananaTypes extends Component {
  render(){
    return (
      <View style={styles.bananaType}>
        <Text style={styles.display1}>{this.props.name}</Text>        
      </View>
    );
  }
}

export default class TestProps extends Component {

  render(){
    console.log("Render Component");
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Text>Test Props</Text>
        <BananaTypes name='King banana'/>
        <BananaTypes name='Kepok banana'/>        
      </View>
    );
  }

}

const styles = StyleSheet.create({
  display1: {
    fontSize: 28,
    marginTop: 10,
    marginBottom: 10
  }, 
  bananaType: {
    padding: 10,
    backgroundColor: 'brown',
    marginTop: 10,
    borderRadius: 5
  }
});