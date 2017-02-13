import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { ResponsibleTouchArea } from 'react-universal-ui';

import * as appActions from '../../../../store/action/app';
import { colors } from '../../../../utils';

@connect(({app}) => {
	return {

	}
})

export default class UniversalSidebar extends Component {
	render () {
		return <ResponsibleTouchArea
			onPress={this::this.handleMenuPress}
			className="touchable"
			rippleColor="#c2c2c2"
			wrapperStyle={styles.wrapper}
			innerStyle={styles.inner}>
			<Text style={styles.title}>
				{this.props.title}
			</Text>
		</ResponsibleTouchArea>
	}

	handleMenuPress () {
		this.props.dispatch(appActions.switchDocSection(this.props));
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
	},
	title: {
		// color: '#dedede',
	}
});