import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

class HomePage extends Component {
	render() {
		return (
			<div>
				<Helmet title="Home" />
				<h1>Home Page</h1>
			</div>
		);
	}
}

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePage);
