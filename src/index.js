import React, { Component } from 'react';
import ReactNative, { View, StyleSheet } from 'react-native';
import * as UniversalUI from 'react-universal-ui';
import Icon from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import 'highlight.js/styles/tomorrow.css';
import './pages/universalUi/share/DocumentBar.css';

import Routes from './routes';
import { sizes } from './utils';

export default function AppContainer ({store}) {
	return <Provider store={store}>
		<View style={styles.container}>
			<Routes/>
		</View>
	</Provider>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: sizes.navigatorHeight,
	}
});

global.React = React;
global.ReactNative = ReactNative;
global.UniversalUI = UniversalUI;
global.Icon = Icon;