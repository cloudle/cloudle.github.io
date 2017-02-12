import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Route } from 'react-router';
import Navigator from '../../share/navigator';
import Sidebar from './share/sidebar';
import CodeBar from './share/codeBar';
import DemoBar from './share/demoBar';

export default class UniversalUiPage extends Component {
	render () {
		return <View style={styles.container}>
			<Navigator/>
			<Sidebar/>
			<DemoBar/>
			<CodeBar/>
		</View>
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, flexDirection: 'row',
	},
});