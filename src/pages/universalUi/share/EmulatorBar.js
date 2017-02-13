import React, { Component } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Emulator from './emulator';

@connect(({app}) => {
	return {
		component: app.activeSection.component,
		fakeNavigator: app.activeSection.fakeNavigator,
	}
})

export default class EmulatorBar extends Component {
	render () {
		const Demo = this.props.component;
		return <View style={styles.container}>
			<Animated.View style={this.props.emulatorStyles}>
				<Emulator fakeNavigator={this.props.fakeNavigator}>
					<Demo/>
				</Emulator>
			</Animated.View>
		</View>
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		width: 350,
		alignItems: 'center',
		// backgroundColor: '#343542',
		backgroundColor: '#343542',
	}
});