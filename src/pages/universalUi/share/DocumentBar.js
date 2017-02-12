import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Markdown from 'react-markdown';
import CodeBlock from './markdownRenderers/CodeBlock';

export default class DocumentBar extends Component {
	constructor (props) {
	  super(props);
	  this.state = {
		  layoutFinished: false,
	  }
	}

	render () {
		const renderers = {
			...Markdown.renderers,
			CodeBlock,
		};

		return <View
			style={styles.container}
		  className="document-bar"
		  onLayout={this::onContainerLayout}>
			<Markdown
				source={basicSource}
				renderers={renderers}/>
		</View>
	}
}

function onContainerLayout ({ nativeEvent }) {
	this.setState({ layoutFinished: true });
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		padding: 12, paddingLeft: 36, paddingRight: 36,
		overflowX: 'auto',
	}
});

const basicSource = require('../docs/basic.md');