import React, { Component } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

import { scene } from '../../decorators';
import { Route } from 'react-router';
import Navigator from '../../share/navigator';
import SideBar from './share/SideBar';
import CodeBar from './share/DocumentBar';
import DemoBar from './share/EmulatorBar';

@scene({enterSpeed: 800, delay: 200})
export default class UniversalUiPage extends Component {
	render () {
		let opacity = this.state.enterAnimation.interpolate({
			inputRange: [0, 0.5, 1], outputRange: [0.2, 0.8, 1]
		}), translateY = this.state.enterAnimation.interpolate({
			inputRange: [0, 0.3, 0.6, 1], outputRange: [200, 50, -20, 0]
		}), emulatorStyles = {
			opacity,
			transform: [{translateY}],
		};

		return <View style={styles.container}>
			<Navigator/>
			<SideBar/>
			<CodeBar/>
			<DemoBar emulatorStyles={emulatorStyles}/>
		</View>
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, flexDirection: 'row',
		backgroundColor: '#f9f9fb',
	},
});