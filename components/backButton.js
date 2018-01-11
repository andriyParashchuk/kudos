import React, {Component} from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

class BackButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.backButton} onPress={Actions.pop}>
        <Image style={styles.backButton__img} source={require('../img/arrow-left.png')}/>
        <Text style={styles.backButton__text}>Back</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  backButton: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    width: 100
  },
  backButton__img: {
    width: 13,
    height: 21,
    marginRight: 8
  },
  backButton__text: {
    fontSize: 18,
    color: '#8190A5'
  }
});

export default BackButton;
