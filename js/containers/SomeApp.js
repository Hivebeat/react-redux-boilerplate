import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';


@connect(state => ({
	messages: state.Intl.get('messages')
}))
export default class SomeApp extends Component {
  const {messages} = this.props;
  render() {
    return (
      <div>
        <Main messages={messages} />
      </div>
    );
  }
}
