import {combineReducers} from 'redux'
import filmListReducer from './filmListReducer';
import filmPageReducer from "./filmPageReducer";
import cinemaBrandReducer from './cinemaBrandReducer'
import theaterReducer from './theaterReducer';
import scheduleOnTheaterReducer from './scheduleOnTheaterReducer'
const rootReducer = combineReducers({
  // Nơi khai báo các reducer con
  filmList: filmListReducer,
  filmPage: filmPageReducer,
  cinemaBrand: cinemaBrandReducer,
  theaters: theaterReducer,
  schedulesTheater: scheduleOnTheaterReducer,
})


export default rootReducer;