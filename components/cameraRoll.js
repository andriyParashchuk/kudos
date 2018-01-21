import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import {Actions} from 'react-native-router-flux';

class CameraRill extends Component {
  render() {
    return (
      <CameraRollPicker
        maximum={1}
        assetType='Photos'
        callback={this.getSelectedImages}/>
    )
  }

  getSelectedImages(photo) {
    if (photo[0]) {
      Actions.pop({refresh: {photo: photo[0].uri}});
    }
  }
}

const styles = StyleSheet.create({
  placeholder: {
    flexGrow: 1,
    width: 100
  },
});

export default CameraRill;
