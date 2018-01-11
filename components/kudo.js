import React, {Component} from 'react';
import {StyleSheet, View, Text, KeyboardAvoidingView, TextInput, TouchableHighlight} from 'react-native';
import FooterTabs from './footerTabs';
import {Actions} from 'react-native-router-flux';

class Explore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Explore </Text>
         <TouchableHighlight
          onPress={Actions.footerTabs}
          style={styles.btn}>
          <Text>footerTabs</Text>
        </TouchableHighlight>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    
  }
});

export default Explore;
