import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ResponsibleTouchArea } from 'react-universal-ui';
import { colors } from '../../../../utils';

export default class UniversalSidebar extends Component {
	render () {
		return <ResponsibleTouchArea
			className="touchable"
			rippleColor="#c2c2c2"
			wrapperStyle={styles.wrapper}
			innerStyle={styles.inner}>
			<Text>{this.props.title}</Text>
		</ResponsibleTouchArea>
	}
}

const styles = StyleSheet.create({
	wrapper: {
		borderBottomWidth: 1,
		borderColor: '#f2f2f2',
	},
	inner: {
		padding: 8,
		paddingTop: 12, paddingBottom: 12,
	}
});