import React, {Component} from 'react';
import Routes from './routes';
import firebase from 'firebase';

class Cudo extends Component {
  render() {
    return <Routes/>;
  }
}

firebase.initializeApp ({ 
  apiKey: "AIzaSyBOHScaFRsgNAS0VQkrsKTc9Gj_fck6bGs",
  authDomain: "kudos-1472c.firebaseapp.com",
  databaseURL: "https://kudos-1472c.firebaseio.com",
  projectId: "kudos-1472c",
});

export default Cudo;
