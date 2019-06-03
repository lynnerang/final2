import presidentDataReducer from './presidentDataReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  presidentData: presidentDataReducer
})

export default rootReducer;