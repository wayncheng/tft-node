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
				<section className='big-img-container flex-1 m-auto bg-gray-500'>
					<img className='w-full' src={itemTable} alt='item cheat sheet' />
				</section>
				<main className='flex-1 flex flex-col justify-stretch'>
					<Combos className='bg-gray-400' />
					<Inventory className='bg-gray-300' />
					<BaseItemSelectionPanel className='bg-gray-100' />
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
