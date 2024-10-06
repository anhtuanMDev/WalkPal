import {combineReducers} from 'redux';
import globalReducer from './GlobalReducer';

const rootReducer = combineReducers({
  global: globalReducer, 
});

export default rootReducer;
