import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Input } from 'react-universal-ui';

import tinyColor from 'tinycolor2';
import { sizes, colors } from '../utils';
import MenuItem from './navigatorMenuItem';

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

const styles = StyleSheet.create({
	container: {
		// position: 'fixed',
		// top: 0, left: 0, right: 0,
		flexDirection: 'row',
		height: sizes.navigatorHeight,
		backgroundColor: '#ffffff',
		// backgroundColor: colors.darkBackground,
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