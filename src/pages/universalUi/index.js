import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Route } from 'react-router';
import Navigator from '../../share/navigator';
import SideBar from './share/SideBar';
import CodeBar from './share/DocumentBar';
import DemoBar from './share/EmulatorBar';

export default class UniversalUiPage extends Component {
	render () {
		return <View style={styles.container}>
			<Navigator/>
			<SideBar/>
			<CodeBar/>
			<DemoBar/>
		</View>
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, flexDirection: 'row',
		backgroundColor: '#f9f9fb',
	},
});