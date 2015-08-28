import {LOAD_MESSAGES} from '../constants/ActionTypes';
import {Map, fromJS} from 'immutable';

const initialState = [];

export default function Intl(state = initialState, action = null) {
  switch (action.type) {
  case LOAD_MESSAGES:
  	return fromJS(action.messages);
  default:
    return fromJS(state);
  }
}
