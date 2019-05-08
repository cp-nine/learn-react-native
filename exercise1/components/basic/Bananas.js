import React, {Component} from 'react';
import {Image} from 'react-native';

export default class Bananas extends Component {
  render(){
    let pic = {
      uri: 'https://images.pexels.com/photos/461208/pexels-photo-461208.jpeg'
    };

    let localPic = require('./../../assets/images/banana.jpg');
    return (
      <Image source={localPic} 
             style={{width: 500, height: 300}} />
    );
  }
}