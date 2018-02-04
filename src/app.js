import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBGironGgTe9XtAYUZikvFN4otctptN3sI',
      authDomain: 'manager-103a6.firebaseapp.com',
      databaseURL: 'https://manager-103a6.firebaseio.com',
      projectId: 'manager-103a6',
      storageBucket: 'manager-103a6.appspot.com',
      messagingSenderId: '272793665502'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>The app!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
