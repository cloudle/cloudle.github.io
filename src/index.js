import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import './pages/universalUi/share/markdownRenderers/Highlightjs.css';

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