import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Item} from '.';
import classNames from 'classnames';
class BaseItemSelectionPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			
			<section className={classNames('base-select-panel items-row items-container', this.props.className)}>
				<div className="container mx-auto max-w-3xl flex flex-row justify-center align-center">

			{this.props.base.map((baseItem, index) => {
				return (
					// <div className="flex flex-1 justify-center align-center" key={'item-' + baseItem}>
						// {/* <p className='keybind-label text-xl font-bold text-center leading-tight'>{index + 1}</p> */}
						<Item className="" item_id={baseItem} key={'item-' + baseItem}/>
					// </div>
				);
			})}
			</div>
		</section>

		);
	}
}

const mapStateToProps = state => ({
	base : state.items.base,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BaseItemSelectionPanel);

// BaseItemSelectionPanel.defaultProps = {};
