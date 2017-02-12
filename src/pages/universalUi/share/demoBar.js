import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Emulator from './emulator';

@connect(({app}) => {
	return {
		demoComponent: app.demoComponent,
	}
})

export default class UniversalCodeDemo extends Component {
	render () {
		const Demo = this.props.demoComponent;
		return <View style={styles.container}>
			<Emulator>
				<Demo/>
			</Emulator>
		</View>
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		width: 340,
		alignItems: 'center',
		backgroundColor: '#333333',
	}
});