import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import itemData from '../utils/item_data';
import {addItem,removeItem} from '../modules/items';
import './Item.scss';

class Item extends Component {

	handleClick = event => {
		event.preventDefault();
		const{item_id,action} = this.props;
		// console.log('item_id:',item_id);
		if (action === 'add'){
			// console.log(`add ${item_id}`)
			this.props.addItem(item_id)
		} else if (action === 'remove'){
			// console.log(`remove ${item_id}`)
			this.props.removeItem(item_id)
		}
	}

	render() {
		const {item_id} = this.props;
		const item = itemData[item_id];
		// const full_id = partner ? item.combos[partner] : item.id;
		return (
						<a href='#!' className={classNames("item",this.props.className)} item_id={item_id} onClick={this.handleClick}>
							{/* <img src={`../static/img/${item_id}.png`} alt={item.name}/> */}
							<img src={`https://blitz-cdn.blitz.gg/blitz/tft/items/${item.id}.png`} alt={item.name || item.id}/>
						</a>
			// <React.Fragment>
			// 		{item_id && (
			// 			<a href='#!' className="item" item_id={item_id} onClick={this.handleClick}>
			// 				{/* <img src={`../static/img/${item_id}.png`} alt={item.name}/> */}
			// 				<img src={`https://blitz-cdn.blitz.gg/blitz/tft/items/${item_id}.png`} alt={item.name}/>
			// 			</a>
			// 		)}
			// </React.Fragment>
		);
	}
}

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => bindActionCreators({
	addItem,
	removeItem,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Item);

Item.defaultProps = {
	item_id : '',
	action: 'add',
	partner: '',
};
