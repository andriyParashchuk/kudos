import React, {Component} from 'react';
import {StyleSheet, View, Text, ListView, Image, KeyboardAvoidingView, TextInput, TouchableHighlight, ActivityIndicator, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

class Kudo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: props.photo,
      text: props.text,
      likes: props.likes,
    }
  }


  render() {
    return (
      <View style={styles.kudoWrapper}>
        <View style={styles.kudoBox}>
          <Image
            source={this.state.photo}
            style={styles.kudoBox__img}/>
          <TouchableOpacity style={styles.kudoHeart}>
            <Image
              source={require('../img/heart.png')}
              style={styles.kudoHeart__img}/>
            <Text style={styles.kudoHeart__text}>{this.state.likes}</Text>
          </TouchableOpacity>
          <View style={styles.kudoBottomPanel__receiver}>
            <Text style={styles.kudoBottomPanel__receiverName}>name</Text>
          </View>
          <Text style={styles.kudoBottomPanel__receiverInitials}>KS</Text>

          <View style={styles.kudoBottomPanel}>
            <Text style={styles.kudoBottomPanel__text}>{this.state.text}</Text>
            <View style={styles.kudoBottomPanel__sender}>
              <Text style={styles.kudoBottomPanel__senderInitials}>KS</Text>
              <Text style={styles.kudoBottomPanel__senderName}>name</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

}

  const styles = StyleSheet.create({
    kudoWrapper: {
      flexGrow: 1,
      backgroundColor: '#fff'
    },
    kudoBox: {
      marginBottom: 10
    },
    kudoBox__img: {
      width: '100%',
      height: 250
    },
    kudoHeart: {
      position:'absolute',
      top: 10,
      right: 10,
      alignItems: 'center',
      zIndex: 2
    },
    kudoHeart__img: {
      width: 50,
      height: 50,
    },
    kudoHeart__text: {
      color: '#fff',
      fontSize: 25,
      position:'absolute',
      top: 5
    },
    kudoBottomPanel__text: {
      backgroundColor: '#e9e9e9',
      color: '#343f4b',
      padding: 15,
      fontSize: 18
    },
    kudoBottomPanel: {
      padding: 15
    },
    kudoBottomPanel__sender: {
      backgroundColor: '#e9e9e9',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15
    },
    kudoBottomPanel__senderInitials: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#a1a1a1',
      marginRight: 15,
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
      textAlignVertical: 'center'
    },
    kudoBottomPanel__senderName: {
      color: '#343f4b',
      fontSize: 18
    },
    kudoBottomPanel__receiver: {
      backgroundColor: '#e9e9e9',
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 30,
      paddingRight: 15,
      paddingLeft: 115
    },
    kudoBottomPanel__receiverInitials: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: '#a1a1a1',
      marginRight: 15,
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
      textAlignVertical: 'center',
      position: 'absolute',
      top: 220,
      left: 15,
      zIndex: 3
    },
    kudoBottomPanel__receiverName: {
      color: '#343f4b',
      fontSize: 18
    },
    loader: {
      backgroundColor: '#fff',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
});

export default Kudo;
