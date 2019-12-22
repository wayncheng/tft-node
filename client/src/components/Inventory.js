import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import itemData from '../utils/item_data';
import classNames from 'classnames';
import './Inventory.scss';
import {Item} from '../components';

class Inventory extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		const {inventory} = this.props;
		// console.log('inventory --->',inventory);
		return (
			<section className={classNames('inventory items-row justify-center', this.props.className)}>
				{/* <div className="container m-auto"></div> */}
				{inventory.map((item_id, index) => {
					return (
						<Item 
							action='remove' 
							className='inv-item' 
							item_id={item_id} 
							key={'inv-item-' + index} 
						/>
						// <a className='inv-item item' >
						// 	<img src={`https://blitz-cdn.blitz.gg/blitz/tft/items/${item_id}.png`} alt={itemData[item_id].name} />
						// </a>
					);
				})}
			</section>
		);
	}
}

const mapStateToProps = state => ({
	// inventory: state.items.inventory,
	...state.items,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);

Inventory.defaultProps = {
	inventory : [ 'spatula' ],
};
