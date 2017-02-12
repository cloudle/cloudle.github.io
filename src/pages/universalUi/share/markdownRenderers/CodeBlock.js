import React, { Component } from 'react';
import hljs from 'highlight.js/lib/index';

hljs.configure({tabReplace: '  '});

export default class CodeBlock extends Component {
	componentDidMount () {
		this::highlightCode();
	}

	componentDidUpdate () {
	  this::highlightCode();
	}

	render () {
		return <pre>
			<code className={this.props.language} ref="code">
				{this.props.literal}
			</code>
		</pre>
	}
}

function highlightCode () {
	hljs.highlightBlock(this.refs.code);
}