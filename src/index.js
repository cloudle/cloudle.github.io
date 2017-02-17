import React, { Component } from 'react';
import ReactNative, { Dimensions, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { utils } from 'react-universal-ui';
import * as UniversalUI from 'react-universal-ui';

import Drawer from 'react-native-drawer';
import Sidebar from './pages/universalUi/share/SideBar';
import Icon from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';

import 'highlight.js/styles/tomorrow.css';
import './pages/universalUi/share/DocumentBar.css';

import Routes from './routes';
import { sizes } from './utils';
import * as appActions from './store/action/app';

export default function AppContainer ({store}) {
	return <Provider store={store}>
		<App/>
	</Provider>
}

@connect(({app}) => {
	return {
		dimensions: app.dimensions,
		drawerOpen: app.drawerOpen,
	}
})

export class App extends Component {
	componentDidMount () {
		window.onresize = utils.debounce(this::onWindowResize, 100); this::onWindowResize();
	}

	componentWillUnmount () {
		window.onresize = null;
	}

	render () {
		const screenWidth = this.props.dimensions.width,
			isTouchDevice = utils.isTouchDevice(),
			smallScreen = screenWidth < sizes.smallScreen,
			drawerDisable = !isTouchDevice;

		return <Drawer
			type="overlay" side="left"
			negotiatePan={true} tapToClose={true}
			panOpenMask={0.2}
			openDrawerOffset={screenWidth - sizes.sideBarWidth}
			content={<Sidebar/>}
			disabled={drawerDisable}
			captureGestures={!drawerDisable}
			open={this.props.drawerOpen}
			tweenHandler={smallScreen ? mobileTween : desktopTween}>
			<View style={styles.container}>
				<Routes/>
			</View>
		</Drawer>
	}
}

function onWindowResize () {
	const dimensions = Dimensions.get('window'),
		smallScreen = dimensions.width < sizes.smallScreen,
		drawerDisable = !utils.isTouchDevice();

	if (smallScreen) {
		this.props.dispatch(appActions.toggleDrawer(false));
	} else {
		this.props.dispatch(appActions.toggleDrawer(true));
	}

	this.props.dispatch(appActions.syncDimensions(dimensions));
}

function desktopTween (ratio, side = 'left') {
	return {
		main: {
			paddingLeft: ratio * sizes.sideBarWidth,
		}
	}
}

function mobileTween (ratio, side = 'left') {
	return {
		main: {
			opacity:(2-ratio)/1.2,
			padding: 0,
			left: ratio * 50,
		},
		drawer: {
			shadowColor: '#000000',
			shadowOpacity: 0.1 + (ratio * 0.3),
			shadowRadius: ratio * 60,
			elevation: ratio * 50,
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});

global.React = React;
global.ReactNative = ReactNative;
global.UniversalUI = UniversalUI;
global.Icon = Icon;