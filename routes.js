import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import {Router, Scene, Stack, Tabs, Overlay, Actions} from 'react-native-router-flux';
import firebase from 'firebase';

import Home from './components/home';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import Explore from './components/explore';
import Users from './components/users';
import Profile from './components/profile';
import TabBar from './components/tabBar';
import BackButton from './components/backButton';
import SaveButton from './components/saveButton';
import EditButton from './components/editButton';
import Placeholder from './components/placeholder';
import SignOut from './components/signOut';
import CreateKudo from './components/createKudo';
import Kudo from './components/kudo';
import CameraRoll from './components/cameraRoll';

class Routes extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <Router
        headerStyle={{
          shadowOpacity: 0,
          elevation: 0,
          borderBottomWidth: 1,
          borderColor: '#8492A6',
          backgroundColor: '#fff',
          height: 50
        }}
        titleStyle={{
          color: '#47525E',
          fontSize: 18,
          fontWeight: 'normal',
          alignSelf: 'center'
        }}
        renderBackButton={() => <BackButton/>}>
        <Overlay>
          <Stack key="root">

            <Scene key="home" component={Home} hideNavBar={true}/>

            <Scene hideNavBar={true}>
              <Tabs
                key="tabBar"
                tabBarComponent={TabBar}
                swipeEnabled={false}
                animationEnabled={false}
                tabBarPosition="bottom">
                <Scene key="exploreTab" title="Explore Kudos">
                  <Scene key="explore" component={Explore}/>
                  <Scene
                    key="footerTabs"
                    component={TabBar}
                    renderRightButton={() => <SaveButton/>}
                    hideTabBar={true}/>
                </Scene>
                <Scene key="usersTab" title="Choose a User to send a Kudo">
                  <Scene key="users" component={Users}/>
                  <Scene
                    key="createKudo"
                    component={CreateKudo}
                    title="Create Kudo"
                    renderRightButton={() => <SaveButton/>}
                    hideTabBar={true}/>
                </Scene>
                <Scene
                  key="profile"
                  component={Profile}
                  renderLeftButton={() => <Placeholder/>}
                  renderRightButton={() => <SignOut/>}
                  title="My Profile"/>
              </Tabs>
            </Scene>

            <Scene
              key="signIn"
              component={SignIn}
              title="SignIn"
              renderRightButton={() => <Placeholder/>}/>
            <Scene
              key="signUp"
              component={SignUp}
              title="SignUp"
              renderRightButton={() => <Placeholder/>}/>

            <Scene
              key="cameraRoll"
              component={CameraRoll}/>

            <Scene
              key="kudo"
              title="Kudo"
              component={Kudo}
              renderRightButton={() => <EditButton/>}/>

          </Stack>
        </Overlay>
      </Router>
    )
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        isLoading: false
      });
      if (user) {
        Actions.tabBar();
      } else {
        Actions.home();
      }
    });
  }
}

const styles = StyleSheet.create({
  loader: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Routes;
