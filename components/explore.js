import React, {Component} from 'react';
import {StyleSheet, View, Text, ListView, Image, KeyboardAvoidingView, TextInput, TouchableHighlight, ActivityIndicator, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

class Explore extends Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      isLoading: true
    }
    this.getKudos();
  }

  getKudos() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref('/kudos').once('value').then((data) => {
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            dataSource: ds.cloneWithRows(data.val()),
            isLoading: false,
            userId: user.uid
          });
        });
      } else {
      }
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator/>
        </View>
      );
    }
    return (
      <View style={styles.exploreWrapper}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(kudo) => this.getKudo(kudo)}
        />
      </View>
    );
  }

  getKudo(kudo) {
    return (
        <View style={styles.exploreBox}>
          <TouchableHighlight
            onPress={() => Actions.kudo({
              photo: kudo.photo,
              text: kudo.text,
              likes: kudo.likes.likeCount
            })}>
          <Image
            source={kudo.photo}
            style={styles.exploreBox__img}/>
          </TouchableHighlight>
          <TouchableOpacity style={styles.exploreHeart}
            onPress={() => this.onLike(kudo.date, kudo.likes.likeCount, kudo.likes.likedUsers)}>
            <Image
              source={require('../img/heart.png')}
              style={styles.exploreHeart__img}/>
            <Text style={styles.exploreHeart__text}>{kudo.likes.likeCount}</Text>
          </TouchableOpacity>
          <Text style={styles.exploreBox__text}>{kudo.text}</Text>
        </View>
    );
  }

  onLike(kudoId, likeCount, likedUsers) {
    let userId = [];
    likedUsers.forEach((item) => {
      if (item === this.state.userId) {
        return
      }
    });
    if (likedUsers) {
      userId = likedUsers.concat(this.state.userId);
    } else {
      userId = [this.state.userId];
    }
    firebase.database().ref('kudos/' + kudoId + '/likes').set({
      likeCount: likeCount+1,
      likedUsers: userId
    });
  }
}

  const styles = StyleSheet.create({
    exploreWrapper: {
      flexGrow: 1,
      backgroundColor: '#fff',
      padding: 15
    },
    exploreBox: {
      marginBottom: 10
    },
    exploreBox__img: {
      width: '100%',
      height: 180

    },
    exploreHeart: {
      position:'absolute',
      top: 10,
      right: 10,
      alignItems: 'center',
      zIndex: 2
    },
    exploreHeart__img: {
      width: 50,
      height: 50,
    },
    exploreHeart__text: {
      color: '#fff',
      fontSize: 25,
      position:'absolute',
      top: 5,
      zIndex: 3
    },
    exploreBox__text: {
      backgroundColor: '#e9e9e9',
      color: '#343f4b',
      padding: 15,
      fontSize: 18
    },
    loader: {
      backgroundColor: '#fff',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
});

export default Explore;
