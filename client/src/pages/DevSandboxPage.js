import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import {Item} from '../components';
import itemData from '../utils/item_data';
class DevSandboxPage extends Component {
	render() {
		return (
			<div>
				<Helmet title='Sandbox (Dev)' />
				<h1>Sandbox Page</h1>

			<section className="flex flex-col">

				{Object.keys(itemData).map((item_id, index) => {
					return (
						<div className="flex flex-1 flex-row" key={'item-' + index}>
							<Item item_id={item_id} action='add' />
							<Item item_id={item_id} action='remove' />
							<Item item_id={item_id} action='none' />
						</div>
					);
				})}
				</section>
			</div>
		);
	}
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DevSandboxPage);
