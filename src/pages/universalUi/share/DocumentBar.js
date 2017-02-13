import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Markdown from 'react-markdown';
import CodeBlock from './markdownRenderers/CodeBlock';

@connect(({app}) => {
	return {
		document: app.activeSection.document,
	}
})

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
			{/*source={this.props.document}*/}
			{/*source={require('../docs/advance.md')}*/}
			<Markdown
				source={this.props.document}
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