import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import Reducers from './Reducers';


export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(Reducers,{},applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}
