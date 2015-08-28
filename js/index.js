// To import in server
import * as reducers from './reducers';
import * as actions from './actions';
import create from './redux';
export default {
  actions: actions,
  reducers: reducers,
  create: create
};
