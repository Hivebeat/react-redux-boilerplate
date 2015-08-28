import React, { Component } from 'react';
import SomeApp from './SomeApp';
import create from '../redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';

export default class App {
  render() {
      var store = null;
      if (typeof window !== 'undefined') {
            store = create(reducers, window.__data);
          } else {
                store = create(reducers);
              }
      return (
            <Provider store={store}>
              {() => <SomeApp />}
            </Provider>
          );
    }
}

