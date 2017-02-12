import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Navigator from '../../share/navigator';

export default class AboutPage extends Component {
	render () {
		const { author } = this.props.routeParams;

		return <View>
			<Navigator/>
			<Text>About {author}</Text>
		</View>
	}
}