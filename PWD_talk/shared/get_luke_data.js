var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
} = React;

module.exports = {
  get_luke: function(personId, cb) {
    fetch('http://swapi.co/api/people/' + personId +'/')
      .then((response) => response.json())
      .then((responseData) => responseData.name)
      .then(cb)
      .done();
  },
  get_ui: function(styles, personId, component) {
    return React.createClass({
      getInitialState: function() {
       return {
         personId: '1'
       };
     },
      render: function() {
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
  }
  });
  },
}
