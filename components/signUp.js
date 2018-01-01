import React, {Component} from 'react';
import {StyleSheet, View, Text, KeyboardAvoidingView, TextInput, TouchableHighlight} from 'react-native';
import firebase from 'firebase';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: ''
    };
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.content}>
          <TextInput
            autoFocus
            ref={'fullName'}
            underlineColorAndroid="transparent"
            selectTextOnFocus
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#A3ADBD"
            onChangeText={(fullName) => this.setState({fullName})}
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
            style={styles.btn}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableHighlight>
      </KeyboardAvoidingView>
      )
  }
  async signUp(email, pass) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, pass);
      // console.log("Account created");
    } catch (error) {
      // console.log(error.toString())
    }
  }
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    width: '100%'
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 15,
    color: '#47525E',
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: '#47525E',
    marginBottom: 15
  },
  btn: {
    marginTop: 11,
    backgroundColor: '#47525E',
    borderRadius: 9,
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal:25,
    width: '100%',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 18,
    color: '#fff'
  }
});

export default SignUp;
