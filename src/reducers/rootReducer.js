import {combineReducers} from 'redux'
import filmListReducer from './filmListReducer';
import filmPageReducer from "./filmPageReducer";
const rootReducer = combineReducers({
  // Nơi khai báo các reducer con
  filmList: filmListReducer,
  filmPage: filmPageReducer,
})


export default rootReducer;