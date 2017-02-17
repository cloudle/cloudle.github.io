import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Input } from 'react-universal-ui';

import * as appActions from '../../../../store/action/app';
import { sizes } from '../../../../utils';
import MenuItem from './sideBarMenuItem';
import EssentialExample from '../../examples/essential';
import AdvanceExample from '../../examples/advance';


@connect(({app}) => {
	return {

	}
})

export default class SideBar extends Component {
	render () {
		return <View style={styles.container}>
			<TouchableOpacity
				onPress={this::toggleSidebar}
				activeOpacity={0.8}
				style={styles.burgerContainer}>
				<Icon name="md-menu" size={20} color="#666666"/>
			</TouchableOpacity>
			<View style={styles.leftCornerContainer}>
				<Input
					wrapperStyle={{bottom: -3, paddingLeft: 10}}
					hint="e.g: button"
					floatingLabel="Type to search"/>
			</View>

			{this.renderMenuItems()}
		</View>
	}

	renderMenuItems () {
		return sideBarMenus.map((itemOptions, i) => {
			return <MenuItem key={i} {...itemOptions} />
		})
	}
}

function toggleSidebar () {
	this.props.dispatch(appActions.toggleDrawer());
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: sizes.sideBarWidth,
		borderRightWidth: 1,
		borderColor: '#f2f2f2',
		backgroundColor: '#fafafa',
	},
	leftCornerContainer: {
		width: sizes.sideBarWidth,
		height: sizes.navigatorHeight,
		backgroundColor: '#ffffff',
		borderRightWidth: 1,
		borderBottomWidth: 1,
		borderColor: "#f2f2f2",
	},
	burgerContainer: {
		position: 'absolute',
		top: 0, right: -60,
		width: 60, backgroundColor: '#ffffff',
		height: sizes.navigatorHeight,
		justifyContent: 'center',
		alignItems: 'center',
		borderRightWidth: 1,
		borderBottomWidth: 1,
		borderColor: "#f2f2f2",
	},
});

export const sideBarMenus = [{
	title: 'Read me',
	document: require('../../docs/readme.md'),
},{
	title: 'Basic example',
	document: require('../../docs/basic.md'),
	component: EssentialExample,
	fakeNavigator: true,
}, {
	title: 'Buttons',
	document: require('../../docs/button.md'),
}, {
	title: 'Input',
	document: require('../../docs/missing.md'),
}, {
	title: 'Select',
	document: require('../../docs/select.md'),
}, {
	title: 'Drawer',
	document: require('../../docs/missing.md'),
}, {
	title: 'Navigator (Native)',
	document: require('../../docs/missing.md'),
}, {
	title: 'Advance example',
	document: require('../../docs/advance.md'),
	component: AdvanceExample,
}];