export const SET_INVENTORY = 'items/SET_INVENTORY';
export const SET_COMBO_INVENTORY = 'items/SET_COMBO_INVENTORY';
export const SET_COMBOS = 'items/SET_COMBOS';
export const SET_UNIQUE = 'items/SET_UNIQUE';

const initialState = {
	base      : [ 'sword', 'vest', 'belt', 'rod', 'cloak', 'bow', 'spatula', 'tear', 'glove' ],
	// inventory : ['sword','vest'],
	// combos    : ['sword_vest'],
	// unique    : ['sword_vest'],
	inventory : [],
	combos    : [],
	unique    : [],
	comboInventory: [],
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
		case SET_COMBO_INVENTORY:
			return {
				...state,
				comboInventory : state.comboInventory.concat([action.combo]),
			};
		case SET_UNIQUE:
			return {
				...state,
				unique : action.unique,
			};
		default:
			return state;
	}
};

// LAYER CONTROLS ========================================

export const findCombos = inventory => (dispatch, getState) => {
	// const {inventory} = getState().items;
	const combos = [];
	const unique = {};
	const hash = {};

	for (let i = 0; i < inventory.length; i++) {
		const item = inventory[i];
		for (let j = 0; j < inventory.length; j++) {
			if (i !== j) {
				const partner = inventory[j];
				const pair = [ item, partner ].sort();

				// Unique unique
				unique[pair.join('_')] = 1;

				// Combos
				const combo = `${i}${j}`;
				const opposite = `${j}${i}`;
				if (hash[opposite] === undefined) {
					combos.push(pair);
					hash[combo] = 1;
				}
			}
		}
	}

	dispatch({
		type   : SET_COMBOS,
		combos,
	});
	dispatch({
		type   : SET_UNIQUE,
		unique : Object.keys(unique),
	});
};

export const processKey = key => (dispatch, getState) => {
	console.log('key:', key);
	const {base} = getState().items;

	const num = parseInt(key[key.length - 1]);
	const action = key.startsWith('shift+') ? 'remove' : 'add';
	const item = base[num - 1];
	
	if (action === 'add') {
		dispatch(addItem(item));
	} else if (action === 'remove') {
		dispatch(removeItem(item));
	}
};

export const addItem = item => (dispatch, getState) => {
	const {inventory} = getState().items;
	const newInventory = inventory.concat([ item ]);
	dispatch(setInventory(newInventory));
};
export const removeItem = _item => (dispatch, getState) => {
	// const parts = _item.split('_');
	// for (let i = 0; i < parts.length; i++) {
		// const item = parts[i];
		let {inventory} = getState().items;
		let newInv = inventory;

		const pos = newInv.indexOf(_item);
		if (pos !== -1) {
			newInv = newInv.slice(0, pos).concat(newInv.slice(pos + 1));
			dispatch(setInventory(newInv));
		}
	// }
}
export const makeCombo = (item1,item2) => (dispatch) => {
	console.log('combining:',item1,item2);
	
	// remove each item from inventory
	dispatch(removeItem(item1))
	dispatch(removeItem(item2))
	
	// add combined to inventory?
	dispatch({type:SET_COMBO_INVENTORY,
		combo: `${item1}_${item2}`
	})
};
export const setInventory = inventory => dispatch => {
	dispatch({
		type      : SET_INVENTORY,
		inventory,
	});

	dispatch(findCombos(inventory));
};
