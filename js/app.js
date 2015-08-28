// To run on client
import Intl from 'intl';
import App from './containers/App';
import React from 'react';

if (typeof window !== 'undefined') {
  //Here you can do client side inits if needed
  window.Intl = Intl;
}

React.render( <App /> , document.getElementById('react-app'));
