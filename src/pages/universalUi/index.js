import React, { Component } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { scene } from '../../decorators';
import { Route } from 'react-router';
import Navigator from '../../share/navigator';
import SideBar from './share/SideBar';
import DocumentBar from './share/DocumentBar';
import DemoBar from './share/EmulatorBar';

@connect(({app}) => {
	return {
		activeSection: app.activeSection,
	}
})

@scene({enterSpeed: 800, delay: 200})
export default class UniversalUiPage extends Component {
	render () {
		return <View style={styles.container}>
			<Navigator/>
			<View style={styles.contentContainer}>
				<DocumentBar/>
				{this.renderDemo()}
			</View>
		</View>
	}

	renderDemo () {
		if (this.props.activeSection.component) {
			let opacity = this.state.enterAnimation.interpolate({
				inputRange: [0, 0.5, 1], outputRange: [0.2, 0.8, 1]
			}), translateY = this.state.enterAnimation.interpolate({
				inputRange: [0, 0.3, 0.6, 1], outputRange: [200, 50, -20, 0]
			}), emulatorStyles = {
				opacity,
				transform: [{translateY}],
			};

			return <DemoBar emulatorStyles={emulatorStyles}/>
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, flexDirection: 'column',
		backgroundColor: '#f9f9fb',
	},
	contentContainer: {
		flex: 1, flexDirection: 'row',
	}
});