import React, {Component} from 'react';
import {StyleSheet, View, Text, KeyboardAvoidingView, TextInput, TouchableHighlight} from 'react-native';

class SignIn extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor="#A3ADBD"
          />
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="#A3ADBD"
            secureTextEntry
          />
          <TouchableHighlight style={styles.btn}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    padding: 50,
    width: '100%'
  },
  input: {
    width: '100%',
    height: 45,
    paddingHorizontal: 15,
    color: '#47525E',
    fontSize: 18,
    marginBottom: 15
  },
  btn: {
    backgroundColor: '#47525E',
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    width: '100%',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 18,
    color: '#fff'
  },
});

export default SignIn;
