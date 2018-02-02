import React, {Component} from 'react';
import {StyleSheet, View, Text, ListView, Image, KeyboardAvoidingView, TextInput, TouchableHighlight, ActivityIndicator, TouchableOpacity} from 'react-native';
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

const styles = StyleSheet.create({
  usersWrapper: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 15
  },
  usersBox: {
    backgroundColor: '#e9e9e9',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  usersBox__holder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  usersBox__circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#a1a1a1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15
  },
  usersBox__initials: {
    color: '#fff',
    fontSize: 20
  },
  usersBox__fullName: {
    color: '#343f4b',
    fontSize: 18
  },
  usersBox__countKudos: {
    color: '#5a6978',
    fontSize: 18
  },
  usersBox__img: {
    width: 40,
    height: 30
  },
  loader: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
