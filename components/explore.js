import React, {Component} from 'react';
import {View, Text, ListView, Image, KeyboardAvoidingView, TextInput, TouchableHighlight, ActivityIndicator, TouchableOpacity} from 'react-native';
import styles from '../style';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import {fetchDataKudos} from '../actions/fetchDataKudos';

class Explore extends Component {
  componentDidMount() {
    this.props.fetchDataKudos('kudos');
  }

  render() {
    if (this.props.isLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator/>
        </View>
      );
    }
    return (
      <View style={styles.exploreWrapper}>
        <ListView
          enableEmptySections={true}
          dataSource={this.props.dataSource}
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

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

const mapStateToProps = (state) => {
  return {
    dataSource: dataSource.cloneWithRows(state.fetchDataKudos),
    hasErrored: state.fetchHasErroredKudos,
    isLoading: state.fetchIsLoadingKudos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataKudos: (dataName) => dispatch(fetchDataKudos(dataName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
