import React, { Component } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Emulator from './emulator';

@connect(({app}) => {
	return {
		demoComponent: app.demoComponent,
	}
})

export default class EmulatorBar extends Component {
	render () {
		const Demo = this.props.demoComponent;
		return <View style={styles.container}>
			<Animated.View style={this.props.emulatorStyles}>
				<Emulator>
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