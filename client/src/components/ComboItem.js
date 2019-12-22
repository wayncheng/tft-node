import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import itemData from '../utils/item_data';
import {makeCombo} from '../modules/items';

class ComboItem extends Component {
	handleClick = event => {
		event.preventDefault();

		const {item1, item2} = this.props;
		this.props.makeCombo(item1, item2);
	};

	render() {
		const {item1, item2} = this.props;
		const combo_id = `${item1}_${item2}`;
		const combo = itemData[combo_id];

		return (
			<a
				href='#!'
				className={classNames('item','combo-item','flex flex-col', this.props.className)}
				item1={item1}
				item2={item2}
				item_id={combo_id}
				onClick={this.handleClick}
			>
				<img src={`https://blitz-cdn.blitz.gg/blitz/tft/items/${combo.id}.png`} alt={combo.name || combo.id} />
		<p className="help">{item1}</p>
		<p className="help">{item2}</p>
			</a>
		);
	}
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			makeCombo,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(ComboItem);

ComboItem.defaultProps = {
	item1 : '',
	item2 : '',
};
