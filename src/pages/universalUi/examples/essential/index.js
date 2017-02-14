import React, { Component } from 'react';
import {
	StatusBar,
	View,
	Text,
	StyleSheet
} from 'react-native';

import { Button, utils } from 'react-universal-ui';
import Icon from 'react-native-vector-icons/Ionicons';
const { isIos, isAndroid } = utils;

export default class app extends Component {

	handlePress () {
		console.log("Yay!");
	}

	render() {
		return <View style={styles.container}>
			<Text style={styles.welcome}>
				Welcome to{'\n'}
				React Universal! <Icon name="md-bulb"/>
			</Text>
			<Text style={styles.instructions}>
				Source code for this example is in{'\n'}
				the left-side document.
			</Text>
			<Text style={styles.instructions}>
				Nah, you cannot shake for dev-menu,{'\n'}
				because we are in Browser!
			</Text>
			<Button
				wrapperStyle={styles.buttonWrapper}
				title="Click me!!"
				onPress={this.handlePress.bind(this)}/>
		</View>
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 10,
	},
	buttonWrapper: {
		backgroundColor: '#00bcd4',
		width: 120,
		marginTop: 15,
	}
});

if (isIos) {
	StatusBar.setBarStyle('light-content', true);
} else if (isAndroid) {
	StatusBar.setBackgroundColor('transparent');
	StatusBar.setTranslucent(true);
}