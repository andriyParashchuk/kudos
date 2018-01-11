import React, {Component} from 'react';
import {StyleSheet, View, Text, KeyboardAvoidingView, TextInput, TouchableHighlight} from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';

import TabBar from './tabBar';


class MainPage extends Component {
  render() {
    return (
      <View style={styles.content}>

        <TabBar/>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: '#d00'
  }
});

export default MainPage;
