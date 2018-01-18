import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class CreateKudo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.placeholder}>
        <Text>Create Kudo</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  placeholder: {
    flexGrow: 1,
    width: 100
  },
});

export default CreateKudo;
