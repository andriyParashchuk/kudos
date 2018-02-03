import React, {Component} from 'react';
import {StyleSheet, Text, KeyboardAvoidingView, TextInput, TouchableHighlight} from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import styles from '../style';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.form_content}>
        <TextInput
          autoFocus
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
          onPress={() => this.logIn(this.state.email, this.state.password)}
          style={styles.btnPrimary}>
          <Text style={styles.btnPrimary_text}>Login</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
      )
  }
  async logIn(email, pass) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, pass);
      Actions.tabBar();
      // console.log("Logged In!");
    } catch (error) {
      // console.log(error.toString())
    }
  }
}

export default SignIn;
