import React, {Component} from 'react';
import {View, Text, Image, KeyboardAvoidingView, TextInput, TouchableHighlight, ActivityIndicator, TouchableOpacity} from 'react-native';
import styles from '../style';
import firebase from 'firebase';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      isLoading: true
    }
    this.getUser();
  }

  getUser() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref('/users/' + user.uid).once('value').then((data) => {
          const firstName = data.val().firstName ? data.val().firstName : '';
          const lastName = data.val().lastName ? data.val().lastName : '';
          this.setState({
            firstName: firstName,
            lastName: lastName,
            isLoading: false
          });
        });
      } else {
      }
    });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={styles.profileWrapper}>
        <View style={styles.profileBox}>
          <View style={styles.profileBox__holder}>
            <View style={styles.profileBox__circle}>
              <Text style={styles.profileBox__initials}>
                {this.state.firstName.charAt(0).toUpperCase()}
                {this.state.lastName.charAt(0).toUpperCase()}
               </Text>
            </View>
            <View>
              <Text style={styles.profileBox__fullName}>{this.state.firstName} {this.state.lastName}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Profile;
