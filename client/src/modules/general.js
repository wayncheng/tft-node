
export const INCREMENT   = 'general/INCREMENT';
export const DECREMENT   = 'general/DECREMENT';

const initialState = {
	count: 0,
};

export default (state = initialState, action) => {
	switch (action.type) {

		case INCREMENT:
			return {
				...state,
				count: state.count + 1,
			}
		case DECREMENT:
			return {
				...state,
				count: state.count - 1,
			}

		default:
			return state
	}
}

// LAYER CONTROLS ========================================
export const increment = () => dispatch => {
	dispatch({ type: INCREMENT })
}
export const decrement = () => dispatch => {
	dispatch({ type: DECREMENT })
}
