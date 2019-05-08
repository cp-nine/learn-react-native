import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

class Kinds extends Component {
  render(){
    return(
      <View>
        <Text style={styles.type}>{this.props.id} - {this.props.name}</Text>
      </View>
    );
  }
}

export default class Bananas extends Component {
  render(){
    let pic = {
      uri: 'https://images.pexels.com/photos/461208/pexels-photo-461208.jpeg'
    };

    let localPic = require('./../../assets/images/banana.jpg');
    return (
      <View style={styles.container}>
        <Image source={localPic} 
              style={styles.banner} />

        <Kinds id='1' name='King Banana'/>
        <Kinds id='2' name='Gold Banana'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  banner: {
    marginTop: 0,
    width: 500,
    height: 300
  },
  type: {
    alignSelf: 'stretch',
    margin: 10
  }
});