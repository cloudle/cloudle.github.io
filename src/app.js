import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Navigator from './share/navigator';

export default class App extends Component {
	render () {
		return <View>
			<Navigator/>
		</View>
	}
}