import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { sizes } from '../../../../utils';
import MenuItem from './sideBarMenuItem';
import EssentialExample from '../../examples/essential';
import AdvanceExample from '../../examples/advance';

export default class SideBar extends Component {
	render () {
		return <View style={styles.container}>
			{this.renderMenuItems()}
		</View>
	}

	renderMenuItems () {
		return sideBarMenus.map((itemOptions, i) => {
			return <MenuItem key={i} {...itemOptions} />
		})
	}
}

const styles = StyleSheet.create({
	container: {
		width: sizes.sideBarWidth, paddingTop: 20,
		borderRightWidth: 1,
		borderColor: '#f2f2f2',
		backgroundColor: '#fafafa',
	}
});

export const sideBarMenus = [{
	title: 'Basic',
	document: require('../../docs/basic.md'),
	component: EssentialExample,
	fakeNavigator: true,
},{
	title: 'More...',
	document: require('../../docs/advance.md'),
	component: AdvanceExample,
}, {
	title: 'Buttons',
	document: require('../../docs/missing.md'),
	component: EssentialExample,
}, {
	title: 'Input',
	document: require('../../docs/missing.md'),
	component: EssentialExample,
}, {
	title: 'Drawer',
	document: require('../../docs/missing.md'),
	component: EssentialExample,
}, {
	title: 'Navigator (Native)',
	document: require('../../docs/missing.md'),
	component: EssentialExample,
}];