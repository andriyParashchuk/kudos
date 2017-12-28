import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../img/01.jpg')} />
        <View style={styles.content}>
          <Text style={styles.title}>Kudos</Text>
          <Text style={styles.text}>Your small gestures of gratitude</Text>
          <TouchableHighlight style={styles.btn}>
            <Text style={styles.btnText}>Sign in</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text style={styles.textSmall}>Don't have an account? Sign up</Text>
          </TouchableHighlight>
        </View>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  content: {
    alignItems: 'center',
    padding: 50
  },
  img: {
    width: '100%',
    height: 200
  },
  title: {
    fontSize: 25,
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
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal:25,
    marginBottom: 10,
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
