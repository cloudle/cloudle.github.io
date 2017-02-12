import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MenuItem from './sideBarMenuItem';

export default class UniversalSidebar extends Component {
	render () {
		return <View style={styles.container}>
			{this.renderMenuItems()}
		</View>
	}

	renderMenuItems () {
		return sideBarMenus.map((itemOptions, i) => {
			return <MenuItem key={i} {...itemOptions}/>
		})
	}
}

const styles = StyleSheet.create({
	container: {
		width: 220, paddingTop: 20,
		backgroundColor: 'white',
		borderRightWidth: 1,
		borderColor: '#f2f2f2',
	}
});

const sideBarMenus = [
	{ title: 'Basic' },
	{ title: 'Button' },
	{ title: 'Input' },
	{ title: 'Drawer' },
	{ title: 'Navigator (Native)' },
];