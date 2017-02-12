import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Navigator from '../../share/navigator';

export default class WelcomePage extends Component {
	render () {
		return <View>
			<Navigator/>
			<Text>Welcome Page</Text>
		</View>
	}
}