import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import push from './push';

const rootReducer = combineReducers({
  counter,
  routing,
  push
});

export default rootReducer;
