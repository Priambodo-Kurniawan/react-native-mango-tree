import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './app/store/configureStore'
import App from './app/App'

import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

export default class iamManggoTree extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('iamManggoTree', () => iamManggoTree);
