import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { sizes, colors } from '../utils';
import MenuItem from './navigatorMenuItem';

export default class Navigator extends Component {
	render () {
		return <View style={styles.container}>
			{this.renderMenuItems()}
		</View>
	}

	renderMenuItems () {
		return menuItems.map((item, i) => {
			return <MenuItem key={i} title={item.title} path={item.path}/>
		});
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'fixed',
		top: 0, left: 0, right: 0,
		flexDirection: 'row',
		height: sizes.navigatorHeight,
		backgroundColor: colors.darkBackground,
	},
});

const menuItems = [
	{ title: 'About me', path: '/about/cloudle' },
	{ title: 'Universal UI', path: '/' },
];