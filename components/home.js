import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import styles from '../style';
import {Actions} from 'react-native-router-flux';

class Home extends Component {
  render() {
    return (
      <View style={styles.home_wrapper}>
        <Image style={styles.home_img} source={require('../img/01.jpg')}/>
        <View style={styles.home_content}>
          <Text style={styles.home_title}>Kudos</Text>
          <Text style={styles.home_text}>Your small gestures of gratitude</Text>
          <TouchableHighlight
            onPress={Actions.signIn}
            style={styles.btnPrimary}>
            <Text style={styles.btnPrimary_text}>Sign in</Text>
          </TouchableHighlight>
          <TouchableOpacity onPress={Actions.signUp}>
            <Text style={styles.home_textSmall}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
      )
  }
}

export default Home;
