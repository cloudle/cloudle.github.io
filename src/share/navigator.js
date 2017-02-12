import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-universal-ui';

import tinyColor from 'tinycolor2';
import { sizes, colors } from '../utils';
import MenuItem from './navigatorMenuItem';

export default class Navigator extends Component {
	render () {
		return <View style={styles.container}>
			{this.renderLeftCorner()}
			<View style={styles.menuContainer}>
				{this.renderMenuItems()}
			</View>
			{this.renderRightCorner()}
		</View>
	}

	renderLeftCorner () {
		return <View style={styles.leftCornerContainer}>
			<Input
				wrapperStyle={{bottom: -3}}
				hint="e.g: button"
				floatingLabel="Type to search"/>
		</View>
	}

	renderMenuItems () {
		return menuItems.map((item, i) => {
			return <MenuItem key={i} title={item.title} path={item.path}/>
		});
	}

	renderRightCorner () {
		return <View style={styles.rightCornerContainer}/>
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'fixed',
		top: 0, left: 0, right: 0,
		flexDirection: 'row',
		height: sizes.navigatorHeight,
		// backgroundColor: colors.darkBackground,
	},
	leftCornerContainer: {
		width: sizes.sideBarWidth,
		borderRightWidth: 1,
		borderBottomWidth: 1,
		borderColor: "#f2f2f2",
		// backgroundColor: tinyColor(colors.darkBackground).lighten(2).toHexString(),
	},
	rightCornerContainer: {
		width: 350,
		backgroundColor: '#343542',
	},
	menuContainer: {
		flex: 1, flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: "#f2f2f2",
	}
});

const menuItems = [
	{ title: 'About me', path: '/about/cloudle' },
	{ title: 'Universal UI', path: '/' },
];