import {combineReducers} from 'redux';
import themeReducer from './GlobalReducer';
import {TGlobalState} from './reducerType';

type IRootReducer = {
  global: TGlobalState;
};

const rootReducer = combineReducers<IRootReducer>({
  global: themeReducer, 
});

export default rootReducer;
