import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Markdown from 'react-markdown';
import CodeBlock from './markdownRenderers/CodeBlock';
import Heading from './markdownRenderers/Heading';
import List from './markdownRenderers/List';
import markdownDocumentHeadings from '../docs/headingConfigs.md';

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
		const liveEdit = false, developmentMode = ENV == 'dev',
			renderers = { ...Markdown.renderers, CodeBlock, Heading, List },
			markdownContent = developmentMode && liveEdit
				? require('../docs/select.md') : this.props.document;
			markdownSource = markdownDocumentHeadings + markdownContent;

		return <View
			style={styles.container}
		  className="document-bar"
		  onLayout={this::onContainerLayout}>
			<Markdown
				source={markdownSource}
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