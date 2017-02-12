import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { sizes } from '../../../../utils';
import MenuItem from './sideBarMenuItem';

export default class SideBar extends Component {
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
		width: sizes.sideBarWidth, paddingTop: 20,
		borderRightWidth: 1,
		borderColor: '#f2f2f2',
		backgroundColor: '#ffffff',
	}
});

const sideBarMenus = [
	{ title: 'Basic' },
	{ title: 'Button' },
	{ title: 'Input' },
	{ title: 'Drawer' },
	{ title: 'Navigator (Native)' },
];