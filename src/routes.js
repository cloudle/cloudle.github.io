import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { Router, Route } from 'react-router';
import { history } from './store';

import Navigator from './share/navigator';
import Welcome from './pages/welcome';
import About from './pages/about';
import Universal from './pages/universalUi';

@connect(({app, router}) => {
	return {
		counter: app.counter,
		location: router.location,
		action: router.action,
	}
})

export default class Routes extends Component {
	render () {
		return <Router history={history}>
			<Route path="/" component={Universal}/>
			<Route path="/about/:author" component={About}/>
			<Route component={Welcome}/>
		</Router>
	}
}

function onRouterChange (location, action) {
	this.props.dispatch({
		type: routerActions.BrowserRouterNavigate,
		action: action == 'SYNC' ? this.props.action : action,
		location,
	});
}