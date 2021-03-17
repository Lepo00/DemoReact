import CounterReducer from './counter';
import LoggedReducer from './logged';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counter: CounterReducer,
    logged: LoggedReducer
})

export default rootReducer;