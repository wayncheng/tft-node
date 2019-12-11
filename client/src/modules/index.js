import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import general from './general';


export default combineReducers({
	routing: routerReducer,
	general,
})
