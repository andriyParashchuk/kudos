import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

class Placeholder extends Component {
  render() {
    return (
      <View style={styles.placeholder}></View>
    )
  }
}

const styles = StyleSheet.create({
  placeholder: {
    flexGrow: 1,
    width: 100
  },
});

export default Placeholder;
