import presidentDataReducer from './presidentDataReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './erroredReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  presidentData: presidentDataReducer,
  hasErrored: errorReducer,
  isLoading: loadingReducer
})

export default rootReducer;