import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';


@connect(state => ({
	messages: state.Intl.get('messages')
}))
export default class SomeApp extends Component {
  render() {
		const { messages, dispatch } = this.props;
    return (
      <div>
        <Main messages={messages} />
      </div>
    );
  }
}
