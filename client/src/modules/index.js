import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import general from './general';
import items from './items';


export default combineReducers({
	routing: routerReducer,
	general,
	items,
})
