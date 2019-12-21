export const SET_INVENTORY = 'items/SET_INVENTORY';
export const SET_COMBOS = 'items/SET_COMBOS';

const initialState = {
	inventory : [],
	combos: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_INVENTORY:
			return {
				...state,
				inventory : action.inventory,
			};
		case SET_COMBOS:
			return {
				...state,
				combos : action.combos,
			};
		default:
			return state;
	}
};

// LAYER CONTROLS ========================================

export const findCombos = (inventory) => (dispatch, getState) => {
	// const {inventory} = getState().items;
	const combos = [];
	const hash = {}

	for (let i = 0; i < inventory.length; i++) {
		const item = inventory[i];
		for (let j = 0; j < inventory.length; j++) {
			if (i !== j){
				const partner = inventory[j];
				// const pair = [item,partner].sort().join('_')
				const pair = [item,partner].sort();
				// const pair = `${item}+${partner}`

				const combo = `${i}${j}`
				const opposite = `${j}${i}`
				if (hash[opposite] === undefined){
					combos.push(pair)
					hash[combo] = 1
				}
			}
		}
	}

	dispatch({
		type: SET_COMBOS,
		combos,
	})
};
export const addItem = item => (dispatch, getState) => {
	const {inventory} = getState().items;
	const newInventory = inventory.concat([item])
	// dispatch({
	// 	type      : SET_INVENTORY,
	// 	inventory: newInventory,
	// });

	dispatch(setInventory(newInventory))
};
export const removeItem = item => (dispatch, getState) => {
	let {inventory} = getState().items;
	const index = inventory.indexOf(item)
	const newInventory = inventory.slice(0,index).concat(inventory.slice(index+1,))
	dispatch({
		type      : SET_INVENTORY,
		inventory:  newInventory,
	});
};
export const setInventory = inventory => (dispatch) => {
	dispatch({
		type: SET_INVENTORY, 
		inventory,
	});

	dispatch(findCombos(inventory))
};
