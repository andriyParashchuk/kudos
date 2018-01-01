import React, {Component} from 'react';
import Home from './components/home';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import Explore from './components/explore';
import {Router, Scene, Stack} from 'react-native-router-flux';


class Routes extends Component {
  render() {
    return (
     <Router>
      <Stack key="root">
        <Scene key="home" component={Home} hideNavBar={true}/>
        <Scene key="explore" component={Explore} hideNavBar={true}/>
        <Scene key="signIn" component={SignIn} title="SignIn"/>
        <Scene key="signUp" component={SignUp} title="SignUp"/>
      </Stack>
     </Router>
     )
  }
}

export default Routes;
