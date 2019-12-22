import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import {
	// Item, 
	Inventory, 
	Combos,
	BaseItemSelectionPanel,
} from '../components';
// import itemData from '../utils/item_data';
import itemTable from '../static/img/item-table.png';
import {addItem, removeItem, processKey} from '../modules/items';
// const items = [ 'sword', 'vest', 'belt', 'rod', 'cloak', 'bow', 'spatula', 'tear', 'glove' ];
class HomePage extends Component {
	// componentDidMount = () => {
	// 	const a = [ 'belt', 'bow', 'cloak', 'glove', 'rod', 'spatula', 'sword', 'tear', 'vest' ];
	// 	const hash = {};
	// 	const combos = {};

	// 	for (let i = 0; i < a.length; i++) {
	// 		const item1 = a[i];
	// 		for (let j = 0; j < a.length; j++) {
	// 			const item2 = a[j];
	// 			const pair = [ item1, item2 ].sort().join('_');
	// 			if (hash[pair] === undefined) {
	// 				const comboItem = itemData[item1].combos[item2];
	// 				combos[pair] = {id: comboItem};
	// 				hash[pair] = 1;
	// 			}
	// 		}
	// 	}

	// 	console.log(Object.keys(combos).length);
	// 	console.log(combos);
	// }

	handleKeyEvent = (key, event) => {
		event.preventDefault();
		this.props.processKey(key);
	};

	render() {
		return (
			<div className='page-root flex flex-col	justify-between'>
				<Helmet title='Home' />

				<section className='big-img-container flex-1 m-auto '>
					{/* <img src="https://progameguides.com/wp-content/uploads/2019/06/tft-full-item-cheat-sheet-desktop-set2-9-23.png" alt="cheat sheet"/> */}
					{/* <img className="w-full" src="https://progameguides.com/wp-content/uploads/2019/06/tft-full-item-cheat-sheet-extra-set2-9-24-1.png" alt="cheat sheet"/> */}
					<img className='w-full' src={itemTable} alt='item cheat sheet' />
				</section>
				<main className='flex-1 flex flex-col justify-stretch'>
					<Combos />
					<Inventory />
					<BaseItemSelectionPanel/>
					{/* <p>combos: {this.props.combos.length}</p>
				{this.props.combos.length > 0 && (
					<div>
						{this.props.combos.map((combo, index) => {
							const item1 = combo[0];
							const item2 = combo[1];
							// const comboItem = itemData[item1].combos[item2];
							const comboItem = combo.join('_');
							// console.log('comboItem:', comboItem);
							return <Item item_id={comboItem} partner={item2} action='none' key={'combo-' + index} />;
						})}
					</div>
				)} */}
				</main>

				<KeyboardEventHandler
					handleKeys={[
						'1',
						'2',
						'3',
						'4',
						'5',
						'6',
						'7',
						'8',
						'9',
						'shift+1',
						'shift+2',
						'shift+3',
						'shift+4',
						'shift+5',
						'shift+6',
						'shift+7',
						'shift+8',
						'shift+9',
					]}
					onKeyEvent={this.handleKeyEvent}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	combos : state.items.combos,
	base   : state.items.base,
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			addItem,
			removeItem,
			processKey,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
