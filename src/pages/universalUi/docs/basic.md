[react-native-url]: https://facebook.github.io/react-native/
[react-native-web-url]: https://github.com/necolas/react-native-web
[react-native-web-why-url]: https://github.com/necolas/react-native-web

# Basic

## React Native building block
As we known, the default building block of this Library is [React Native][react-native-url].
We use it for both **Native** and **Browser** world, which like [React Native Web][react-native-web-why-url] said,
we **avoids, solves, or can solve almost all weakness of the traditional web-dom/css**.
<br>

```js
import React, { Component } from 'react';
import {
	StatusBar,
	View,
	Text,
	StyleSheet 
} from 'react-native';

import { Button, utils } from 'react-universal-ui';
const { isIos, isAndroid } = utils;

export default class app extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to React Native!
				</Text>
				<Text style={styles.instructions}>
					To get started, edit src/app.js
				</Text>
				<Text style={styles.instructions}>
					Press Cmd+R to reload,{'\n'}
					Cmd+D or shake for dev menu
				</Text>
				<Button
					wrapperStyle={{backgroundColor: '#00bcd4', width: 120}}
					title="Click me!!" onPress={() => console.log("Yay!")}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

if (isIos) {
	StatusBar.setBarStyle('light-content', true);
} else if (isAndroid) {
	StatusBar.setBackgroundColor('transparent');
	StatusBar.setTranslucent(true);
}
```
<br><br>
*Following line of code import our Universal component:*
```js
import { Button, utils } from 'react-universal-ui';
```