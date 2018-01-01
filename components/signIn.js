import React, {Component} from 'react';
import {StyleSheet, Text, KeyboardAvoidingView, TextInput, TouchableHighlight} from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

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
      <KeyboardAvoidingView style={styles.content}>
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
          style={styles.btn}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
      )
  }
  async logIn(email, pass) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, pass);
      // console.log("Logged In!");
      Actions.explore();
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

export default SignIn;
