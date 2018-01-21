import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, KeyboardAvoidingView, TextInput, TouchableHighlight, ActivityIndicator, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

class CreateKudo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.firstName,
      lastName: props.lastName,
      photo: require('../img/03.png'),
      kudoText: ''
    }
  }

  componentWillReceiveProps(props) {
    if (!props) {
      alet('ok')
    }
    this.setState({
      photo: {uri: props.photo}
    });
  }

  setKudo() {
    alert('save')
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.createKudoWrapper}>
        <View style={styles.createKudoBox}>
          <View style={styles.createKudoBox__holder}>
            <View style={styles.createKudoBox__circle}>
              <Text style={styles.createKudoBox__initials}>
                {this.state.firstName.charAt(0).toUpperCase()}
                {this.state.lastName.charAt(0).toUpperCase()}
               </Text>
            </View>
            <View>
              <Text style={styles.createKudoBox__fullName}>{this.state.firstName} {this.state.lastName}</Text>
            </View>
          </View>
        </View>

        <TouchableHighlight style={styles.createKudoPreview} onPress={Actions.cameraRoll}>
          <Image style={styles.createKudoPreview__img} source={this.state.photo}/>
        </TouchableHighlight>

        <TouchableHighlight style={styles.createKudo__btn}>
            <Text style={styles.createKudo__btnText}>Sign in</Text>
        </TouchableHighlight>

        <TextInput
          style={styles.createKudo__input}
          multiline={true}
          numberOfLines={4}
          underlineColorAndroid="transparent"
          placeholder="Your thankful message"
          placeholderTextColor="#8190a5"
          onChangeText={(kudoText) => this.setState({kudoText})}
        />

        <TouchableHighlight style={styles.createKudo__btn} onPress={() => this.setKudo()}>
            <Text style={styles.createKudo__btnText}>Save</Text>
        </TouchableHighlight>

      </KeyboardAvoidingView>
    )
  }
}

  const styles = StyleSheet.create({
    createKudoWrapper: {
      flexGrow: 1,
      backgroundColor: '#fff',
      padding: 15
    },
    createKudoBox: {
      backgroundColor: '#e9e9e9',
      padding: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 15
    },
    createKudoBox__holder: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    createKudoBox__circle: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#a1a1a1',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 15
    },
    createKudoBox__initials: {
      color: '#fff',
      fontSize: 20
    },
    createKudoBox__fullName: {
      color: '#343f4b',
      fontSize: 18
    },
    createKudoPreview: {
      marginBottom: 15
    },
    createKudoPreview__img: {
      height: 180,
      width: '100%'
    },
    createKudo__btn: {
      backgroundColor: '#47525E',
      borderRadius: 9,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      marginHorizontal: 25,
      marginBottom: 15
    },
    createKudo__btnText: {
      fontSize: 18,
      color: '#fff'
    },
    createKudo__input: {
      height: 100,
      borderWidth: 1,
      borderColor: '#8190a5',
      padding: 10,
      marginHorizontal: 25,
      textAlignVertical: 'top'
    },
    loader: {
      backgroundColor: '#fff',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
});

export default CreateKudo;
