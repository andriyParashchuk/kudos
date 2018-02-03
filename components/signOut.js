import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import styles from '../style';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

class SignOut extends Component {
  render() {
    return (
        <TouchableOpacity style={styles.signOut} onPress={() => this.logOut()}>
          <Text style={styles.signOut__text}>Sign out</Text>
        </TouchableOpacity>
      )
  }

  async logOut() {
    try {
      await firebase.auth().signOut();
      Actions.home();
    } catch (error) {
      console.log(error);
    }
  }
}

export default SignOut;
