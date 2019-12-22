import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
// import itemData from '../utils/item_data';
import './Combos.scss';
import {
	// Item, 
	ComboItem,
} from '../components';

class Combos extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {
			// combos, 
			unique,
		} = this.props;
		// console.log('combos:',combos);
		return (
				<section className={classNames("combos items-row", this.props.className)}>
					{unique.length > 0 && (
						<div className='items-container flex-row justify-center m-auto'>
							{unique.map((pair, index) => {
								const split = pair.split('_');

								return <ComboItem className="" item1={split[0]} item2={split[1]} key={'unique-' + index}/>
								// return <Item item_id={pair} action='none' key={'unique-' + index} />;
								// return <Item item_id={pair} action='none' key={'unique-' + index} />;
							})}
						</div>
					)}
				</section>

		);
	}
}

const mapStateToProps = state => ({
	combos : state.items.combos,
	unique : state.items.unique,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Combos);

// Combos.defaultProps = {};
