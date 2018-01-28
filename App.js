import React, {Component} from 'react';
import Routes from './routes';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

class Cudo extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    )
  }
}

if (!firebase.apps.length) {
  firebase.initializeApp ({ 
    apiKey: "AIzaSyBOHScaFRsgNAS0VQkrsKTc9Gj_fck6bGs",
    authDomain: "kudos-1472c.firebaseapp.com",
    databaseURL: "https://kudos-1472c.firebaseio.com",
    projectId: "kudos-1472c",
  });
}

export default Cudo;
