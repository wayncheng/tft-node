import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import {Item, Inventory} from '../components';
import itemData from '../utils/item_data';

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



	render() {
		return (
			<div>
				<Helmet title='Home' />
				<h1>Home Page</h1>

				<section className='item-select-panel item-container'>
					<Item item_id='sword' />
					<Item item_id='vest' />
					<Item item_id='belt' />
					<Item item_id='rod' />
					<Item item_id='cloak' />
					<Item item_id='bow' />
					<Item item_id='spatula' />
					<Item item_id='tear' />
					<Item item_id='glove' />
				</section>

				<Inventory />
				<p>combos: {this.props.combos.length}</p>
				{/* <pre>{JSON.stringify(this.props.combos, null, 2)}</pre> */}
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
				)}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	combos : state.items.combos,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
