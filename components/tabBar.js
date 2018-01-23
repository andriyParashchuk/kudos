import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

class TabBar extends Component {
  render() {
    return (
      <View style={styles.tabBar}>
        <TouchableOpacity
          onPress={Actions.explore}
          style={styles.tabBar__button}>
          <Text style={[
            styles.tabBar__icon,
            Actions.currentScene === 'explore' ? styles.tabBar__icon_active : []
          ]}></Text>
          <Text style={[
            styles.tabBar__text,
            Actions.currentScene === 'explore' ? styles.tabBar__text_active : []
          ]}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={Actions.users}
          style={styles.tabBar__button}>
          <Text style={[
            styles.tabBar__icon,
            Actions.currentScene === 'users' ? styles.tabBar__icon_active : []
          ]}></Text>
          <Text style={[
            styles.tabBar__text,
            Actions.currentScene === 'users' ? styles.tabBar__text_active : []
          ]}>Users</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={Actions.profile}
          style={styles.tabBar__button}>
          <Text style={[
            styles.tabBar__icon,
            Actions.currentScene === '_profile' ? styles.tabBar__icon_active : []
          ]}></Text>
          <Text style={[
            styles.tabBar__text,
            Actions.currentScene === '_profile' ? styles.tabBar__text_active : []
          ]}>Profile</Text>
        </TouchableOpacity>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#8492A6',
    backgroundColor: '#fff'
  },
  tabBar__button: {
    flexGrow: 1,
    paddingTop: 7,
    paddingBottom: 7,
    alignItems: 'center'
  },
  tabBar__icon: {
    width: 20,
    height: 20,
    borderRadius: 5,
    marginBottom: 2,
    backgroundColor: '#e5e9f2'
  },
  tabBar__icon_active: {
    backgroundColor: '#343f4b'
  },
  tabBar__text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#8190a5'
  },
  tabBar__text_active: {
    color: '#343f4b'
  }
});

export default TabBar;
