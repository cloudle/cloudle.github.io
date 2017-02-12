import React, { Component } from 'react';
import { View, Text } from 'react-native';

import EsEditor from './EsEditor';
import ElixirEditor from './ElixirEditor';
import GraphEditor from './GraphEditor';
import './CodeEditor.css';

export default class CodeEditor extends Component {
	static propTypes = {
		ready: React.PropTypes.bool,
	};

	constructor (props) {
	  super(props);
	}

  render () {
	  if (this.props.ready) {
	  	return <EsEditor/>
	  } else {
	  	return <View/>
	  }
  }
}