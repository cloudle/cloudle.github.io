import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { sizes } from '../utils';

export default class NavigatorMenuItem extends Component {
	render () {
		return <View className="touchable" style={styles.container}>
			<Text className="no-select" style={styles.title}>
				{this.props.title}
			</Text>
		</View>
	}
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