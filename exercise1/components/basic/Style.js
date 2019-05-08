import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class CustomStyle extends Component {

  render(){
    return (

      <View>
        <Text style={styles.redColor}>Red Text</Text>
        <Text style={styles.yellowColor}>Yellow Text</Text>
        <Text style={styles.greenColor}>Green Text</Text>
        <Text style={styles.blueColor}>Blue Text</Text>
      </View>
      
    );
  }

}

const styles = StyleSheet.create({
  redColor: { color: 'red', fontSize: 28  },
  yellowColor: { color: 'yellow', fontSize: 28  },
  greenColor: { color: 'green', fontSize: 28  },
  blueColor: { color: 'blue', fontSize: 28  }
});