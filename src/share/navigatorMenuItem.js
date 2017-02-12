import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { sizes } from '../utils';
import * as routerActions from '../store/action/router';

@connect(({app}) => {
	return {

	}
})

export default class NavigatorMenuItem extends Component {
	render () {
		return <TouchableOpacity
			className="touchable" style={styles.container}
			onPress={this::onNavigate}>
			<Text className="no-select" style={styles.title}>
				{this.props.title}
			</Text>
		</TouchableOpacity>
	}
}

function onNavigate () {
	this.props.dispatch(routerActions.push(this.props.path));
}

const titleBaseStyle = {
	lineHeight: sizes.navigatorHeight,
	fontSize: 13,
	fontWeight: '500',
};

const styles = StyleSheet.create({
	container: {
		paddingLeft: 15, paddingRight: 15,
		minWidth: 80,
		alignItems: 'center',
	},
	title: {
		...titleBaseStyle,
		color: '#757b8c',
	},
	activeTitle: {
		...titleBaseStyle,
		color: '#acb1be',
	}
});