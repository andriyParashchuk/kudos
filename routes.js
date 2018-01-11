import React, {Component} from 'react';
import {Router, Scene, Stack, Tabs, Overlay} from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';

import Home from './components/home';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import MainPage from './components/mainPage';
import Explore from './components/explore';
import Users from './components/users';
import Profile from './components/profile';

import TabBar from './components/tabBar';
import BackButton from './components/backButton';
import SaveButton from './components/saveButton';
import EditButton from './components/editButton';
import SignOut from './components/signOut';
import Placeholder from './components/placeholder';

class Routes extends Component {
  render() {
    return (
      <Router
        titleStyle={{color: '#47525E', fontSize: 18, fontWeight: 'normal', alignSelf: 'center'}}
        renderBackButton={() => <BackButton/>}>
        <Overlay>
          <Stack key="root">
            <Scene key="home" component={Home} hideNavBar={true}/>
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
            <Scene hideNavBar={true}>
              <Tabs
                key="tabBar"
                tabBarComponent={TabBar}
                swipeEnabled={false}
                animationEnabled={false}
                tabBarPosition="bottom">
                <Scene key="explore" title="Explore Kudos">
                  <Scene key="exploreTab" component={Explore} />
                  <Scene
                    key="footerTabs"
                    component={TabBar}
                    renderRightButton={() => <SaveButton/>}
                    hideTabBar={true}/>
                </Scene>
                <Scene key="users" component={Users} title="Choose a User to send a Kudo"/>
                <Scene key="profile" component={Profile} title="My Profile"/>
              </Tabs>
            </Scene>
          </Stack>
        </Overlay>
      </Router>
    )
  }
}

export default Routes;
