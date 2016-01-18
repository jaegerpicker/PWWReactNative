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
  render: function() {
    return luke.get_ui(styles, {personId}, this);
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
