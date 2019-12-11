import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.scss';

import HomePage from './pages/HomePage';
import DevSandboxPage from './pages/DevSandboxPage';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					{process.env.NODE_ENV !== 'production' && (
						<Route exact path="/dev" component={DevSandboxPage} />
					)}
					<Route exact path="/" component={HomePage} />
				</Switch>
			</BrowserRouter>

		);
	}
}
const mapStateToProps = state => ({
	...state.general
})
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(App)