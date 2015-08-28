import { createStore, combineReducers, applyMiddleware } from 'redux';

export default function create(reducers, initialState) {
  const reducer = combineReducers(reducers);
  const finalCreateStore = applyMiddleware(promiseMiddleware)(createStore);
  const store = finalCreateStore(reducer, initialState);
  return store;
}

function promiseMiddleware() {
  return next => action => {
    const { promise, types, ...rest } = action;
    if (!promise) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;
    next({ ...rest, type: REQUEST, promise: promise });
    return promise.then(
      (result) => next({ ...rest, result, type: SUCCESS }),
      (error) => next({ ...rest, error, type: FAILURE })
    );
  };
}
