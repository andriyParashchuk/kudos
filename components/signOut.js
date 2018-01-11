import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

class SignOut extends Component {
  render() {
    return (
        <TouchableOpacity style={styles.signOut}>
          <Text style={styles.saveButton__text}>Save</Text>
        </TouchableOpacity>
      )
  }
}

const styles = StyleSheet.create({
  signOut: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 15,
    width: 100
  },
  signOut__text: {
    fontSize: 18,
    color: '#8190A5'
  }
});

export default SignOut;
