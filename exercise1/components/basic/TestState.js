import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default class TestState extends Component {

  constructor(props){
    super(props);
    this.state = {
      search: 'Angular',
      isLoading: false,
      dataSource: [],
      title: "Gambar Pisang Kesukaan Citra"
    }
  }

  componentWillMount(){
    console.log("Will Mount");    
  }

  componentDidMount(){
    console.log("Did Mount");
  }

  componentWillUpdate(nextProps, nextState){
    console.log(`Will Update : props= ${JSON.stringify(nextProps)} state= ${JSON.stringify(nextState)}`);
  }

  componentDidUpdate(prevProps, prevState){
    console.log(`Did Update : props= ${JSON.stringify(prevProps)} state= ${JSON.stringify(prevState)}`);
  }

  _changeTitle = (event) => {
    this.setState({title: event.nativeEvent.text});
  }


  render(){
    console.log("Render Component");
    return (
      <View>
        <Text style={styles.display1}>{this.state.title}</Text>
        
        {/* if use onChangeText => onChangeText={(title) => this.setState({title})}  */}
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChange={this._changeTitle} value={this.state.title} />
        
      </View>
    );
  }

}

const styles = StyleSheet.create({
  display1: {
    fontSize: 28,
    marginTop: 10,
    marginBottom: 10
  }
});