import React, { Component } from 'react';
import ImportEventApp from './ImportEventApp';
import create from '../redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

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
              {() => <CommunityApp />}
            </Provider>
          );
    }
}

