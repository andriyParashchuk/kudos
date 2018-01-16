import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

class Home extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Image style={styles.img} source={require('../img/01.jpg')}/>
        <View style={styles.content}>
          <Text style={styles.title}>Kudos</Text>
          <Text style={styles.text}>Your small gestures of gratitude</Text>
          <TouchableHighlight
            onPress={Actions.signIn}
            style={styles.btn}>
            <Text style={styles.btnText}>Sign in</Text>
          </TouchableHighlight>
          <TouchableOpacity onPress={Actions.signUp}>
            <Text style={styles.textSmall}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flexGrow: 1
  },
  img: {
    width: '100%',
    height: '41%'
  },
  content: {
    alignItems: 'center',
    padding: 50
  },
  title: {
    fontSize: 27,
    color: '#47525E',
    marginBottom: 5
  },
  text: {
    fontSize: 15,
    color: '#A3ADBD',
    marginBottom: 100
  },
  btn: {
    backgroundColor: '#47525E',
    borderRadius: 9,
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal:25,
    marginBottom: 12,
    width: '100%',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 18,
    color: '#fff'
  },
  textSmall: {
    fontSize: 12,
    color: '#A3ADBD'
  }
});

export default Home;
