import {combineReducers} from 'redux'
import filmListReducer from './filmListReducer';
import filmPageReducer from "./filmPageReducer";
import cinemaBrandReducer from './cinemaBrandReducer'
import theaterReducer from './theaterReducer';
import scheduleOnTheaterReducer from './scheduleOnTheaterReducer'
import filmInfoReducer from './filmInfoReducer';
import filmScheduleReducer from './filmScheduleReducer';
import slotsReducer from './slotsReducer'
const rootReducer = combineReducers({
  // Nơi khai báo các reducer con
  filmList: filmListReducer,
  filmPage: filmPageReducer,
  cinemaBrand: cinemaBrandReducer,
  theaters: theaterReducer,
  schedulesTheater: scheduleOnTheaterReducer,
  filmInfo: filmInfoReducer,
  filmSchedule:filmScheduleReducer,
  slots: slotsReducer,
})


export default rootReducer;