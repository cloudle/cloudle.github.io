import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CodeEditor from './CodeEditor';

export default class UniversalCodeDemo extends Component {
	constructor (props) {
	  super(props);
	  this.state = {
		  layoutFinished: false,
	  }
	}

	render () {
		return <View style={styles.container} onLayout={this::onContainerLayout}>
			<CodeEditor ready={this.state.layoutFinished}/>
		</View>
	}
}

function onContainerLayout () {
	this.setState({ layoutFinished: true });
}

const styles = StyleSheet.create({
	container: {
		flex: 1, flexDirection: 'row',
		backgroundColor: '#282C34',
	}
});