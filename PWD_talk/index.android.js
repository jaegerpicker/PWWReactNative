/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var luke = require('./shared/get_luke_data');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ToastAndroid,
} = React;

var PWD_talk = React.createClass({
  buttonClicked: function() {
    luke.get_luke(this.state.personId, function(result) {
      ToastAndroid.show(result, ToastAndroid.LONG);
    });
  },
  getInitialState: function() {
   return {
     personId: '1'
   };
 },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the SWAPI person lookup!
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 50, alignSelf: 'center'}}
          onChangeText={(personId) => this.setState({personId})}
          value={this.state.personId}
          />

        <TouchableHighlight
        style={styles.button}
        onPress={this.buttonClicked}>
          <Text style={styles.buttonText}>Lookup Person's Name!</Text>
      </TouchableHighlight>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonText: {
    fontSize:18,
    color: '#0D4F8B',
    borderColor: 'blue',
    borderWidth: 1,
    backgroundColor: '#33FF33'
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
    alignSelf: 'stretch',
    flexDirection:'row',
    justifyContent: 'flex-end',
  },
});


AppRegistry.registerComponent('PWD_talk', () => PWD_talk);
