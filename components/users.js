import React, {Component} from 'react';
import {StyleSheet, View, Text, ListView, Image, KeyboardAvoidingView, TextInput, TouchableHighlight, ActivityIndicator, TouchableOpacity} from 'react-native';
import styles from '../style';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import {fetchData} from '../actions/fetchData';

class Users extends Component {

  componentDidMount() {
    this.props.fetchData('users');
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
      <View style={styles.usersWrapper}>
        <ListView
          enableEmptySections={true}
          dataSource={this.props.dataSource}
          renderRow={(user) => this.getUser(user)}
        />
      </View>
    );
  }

  getUser(user) {
    return (
        <View style={styles.usersBox}>
          <View style={styles.usersBox__holder}>
            <View style={styles.usersBox__circle}>
              <Text style={styles.usersBox__initials}>
                {user.firstName.charAt(0).toUpperCase()}
                {user.lastName.charAt(0).toUpperCase()}
              </Text>
            </View>
            <View>
              <Text style={styles.usersBox__fullName}>
                {user.firstName} {user.lastName}
              </Text>
              <Text style={styles.usersBox__countKudos}>has {user.countKudos} kudos</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => Actions.createKudo({
              firstName: user.firstName,
              lastName: user.lastName,
              receiver: user.id
            })}>
            <Image style={styles.usersBox__img} source={require('../img/arrow-right.png')}/>
          </TouchableOpacity>
        </View>
    );
  }
}

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

const mapStateToProps = (state) => {
  return {
    dataSource: dataSource.cloneWithRows(state.fetchData),
    hasErrored: state.fetchHasErrored,
    isLoading: state.fetchIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (dataName) => dispatch(fetchData(dataName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
