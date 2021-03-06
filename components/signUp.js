import React, {Component} from 'react';
import {StyleSheet, View, Text, KeyboardAvoidingView, TextInput, TouchableHighlight} from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import styles from '../style';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.form_content}>
          <TextInput
            autoFocus
            ref={'firstName'}
            underlineColorAndroid="transparent"
            selectTextOnFocus
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#A3ADBD"
            onChangeText={(firstName) => this.setState({firstName})}
            onSubmitEditing={(e) => {this.refs.lastName.focus()}}
          />
          <TextInput
            ref={'lastName'}
            underlineColorAndroid="transparent"
            selectTextOnFocus
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#A3ADBD"
            onChangeText={(lastName) => this.setState({lastName})}
            onSubmitEditing={(e) => {this.refs.email.focus()}}
          />
          <TextInput
            ref={'email'}
            underlineColorAndroid="transparent"
            selectTextOnFocus
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#A3ADBD"
            onChangeText={(email) => this.setState({email})}
            onSubmitEditing={(e) => {this.refs.password.focus()}}
          />
          <TextInput
            secureTextEntry
            ref={'password'}
            underlineColorAndroid="transparent"
            selectTextOnFocus
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#A3ADBD"
            onChangeText={(password) => this.setState({password})}
          />
          <TouchableHighlight
            onPress={() => this.signUp(this.state.email, this.state.password)}
            style={styles.btnPrimary}>
            <Text style={styles.btnPrimary_text}>Login</Text>
          </TouchableHighlight>
      </KeyboardAvoidingView>
      )
  }

  async signUp(email, pass) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, pass);
      this.logIn(email, pass)
    } catch (error) {
      // console.log(error.toString())
    }
  }

  async logIn(email, pass) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, pass);
      const userId = firebase.auth().currentUser.uid;
      this.setUser(userId, this.state.firstName, this.state.lastName);
      Actions.tabBar();
    } catch (error) {
      // console.log(error.toString())
    }
  }

  async setUser(userId, firstName, lastName) {
    firebase.database().ref('users/' + userId).set({
      firstName: firstName,
      lastName: lastName,
      countKudos: 0,
      id: userId
    });
  }

}

export default SignUp;
