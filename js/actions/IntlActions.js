import {LOAD_MESSAGES} from '../constants/ActionTypes';

//Should be called on load serverside
export function loadMessages({locale}) {
  return {
    type: LOAD_MESSAGES,
    messages: require(`../intl/${locale}.js`)
  };
}
