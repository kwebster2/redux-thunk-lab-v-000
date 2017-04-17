import catsReducer from './cats_reducer'
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({cats: catsReducer})
