import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import AllReducers from './reducers';
import Root from './rootNavigator';
import LoginForm from './components/LoginForm';
import Home from './components/home';


const store = createStore(AllReducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCYfq_xp6FKALi8BtOR-s6sGilGqK-lfdU',
      authDomain: 'provapraticac.firebaseapp.com',
      databaseURL: 'https://provapraticac.firebaseio.com',
      projectId: 'provapraticac',
      storageBucket: 'provapraticac.appspot.com',
      messagingSenderId: '744942410926'
    };

    firebase.initializeApp(config);
  }

  render() {
    return ( 
    <Provider store={store}>
     <LoginForm />
    </Provider>
    );
  }
}

export default App;
