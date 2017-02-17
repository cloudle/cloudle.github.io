import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Input } from 'react-universal-ui';

import tinyColor from 'tinycolor2';
import { sizes, colors } from '../utils';
import MenuItem from './navigatorMenuItem';
import * as appActions from '../store/action/app';

@connect(({app}) => {
	return {
		activeSection: app.activeSection,
	}
})

export default class Navigator extends Component {
	render () {
		return <View style={styles.container}>
			<View style={styles.menuContainer}>
				{this.renderMenuItems()}
			</View>
			{this.renderRightCorner()}
		</View>
	}

	renderBurger () {
		return <TouchableOpacity
			onPress={this::toggleSidebar}
			activeOpacity={0.8}
			style={styles.burgerContainer}>
			<Icon name="md-menu" size={20} color="#666666"/>
		</TouchableOpacity>
	}

	renderMenuItems () {
		return menuItems.map((item, i) => {
			return <MenuItem key={i} title={item.title} path={item.path}/>
		});
	}

	renderRightCorner () {
		if (this.props.activeSection.component) {
			return <View style={styles.rightCornerContainer}/>
		}
	}
}

function toggleSidebar () {
	this.props.dispatch(appActions.toggleDrawer());
}


const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: sizes.navigatorHeight,
		backgroundColor: '#ffffff',
		// backgroundColor: colors.darkBackground,
	},
	burgerContainer: {
		width: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderRightWidth: 1,
		borderBottomWidth: 1,
		borderColor: "#f2f2f2",
	},
	rightCornerContainer: {
		width: 350,
		backgroundColor: '#343542',
	},
	menuContainer: {
		flex: 1, flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: "#f2f2f2",
		marginLeft: 60,
	}
});

const menuItems = [
	// { title: 'About me', path: '/about/cloudle' },
	{ title: 'Universal UI', path: '/' },
];