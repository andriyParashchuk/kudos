import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, KeyboardAvoidingView, TextInput, TouchableHighlight, ActivityIndicator, TouchableOpacity} from 'react-native';
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
        // alert('Log out');
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

  const styles = StyleSheet.create({
    profileWrapper: {
      flexGrow: 1,
      backgroundColor: '#fff',
      padding: 15
    },
    profileBox: {
      backgroundColor: '#e9e9e9',
      padding: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 15
    },
    profileBox__holder: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    profileBox__circle: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#a1a1a1',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 15
    },
    profileBox__initials: {
      color: '#fff',
      fontSize: 20
    },
    profileBox__fullName: {
      color: '#343f4b',
      fontSize: 18
    },
    loader: {
      backgroundColor: '#fff',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
});

export default Profile;
