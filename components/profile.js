import React, {Component} from 'react';
import {StyleSheet, View, Text, KeyboardAvoidingView, TextInput, TouchableHighlight} from 'react-native';
import firebase from 'firebase';

class Profile extends Component {
  constructor() {
    super();
    this.getUser();
  }

  getUser() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {

        firebase.database().ref('/users/' + user.uid).once('value').then((data) => {
          const username = (data.val() && data.val().lastName) || 'Anonymous';
          alert(username)
        });

      } else {
        alert('log out');
      }
    });

  }

  render() {
    return (
      <View style={styles.profileWrapper}>
        <Text>Profile</Text>
      </View>
      )
  }
}

  const styles = StyleSheet.create({
    profileWrapper: {
      flexGrow: 1,
      backgroundColor: '#fff',
      padding: 15
    }
});

export default Profile;
