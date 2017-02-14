[navigator-part1]: https://medium.com/react-native-training/first-look-react-native-navigator-experimental-9a7cf39a615b#.3s4gvjk2j
[navigator-part2]: https://medium.com/react-native-training/react-native-navigator-experimental-part-2-implementing-redux-c6acbf66eca1#.v1dg6zpse
[navigator-in-depth]: https://medium.com/react-native-training/react-native-navigationexperimental-in-depth-6910b9b0b990#.tjgp6ckw9
[react-native-drawer]: https://github.com/root-two/react-native-drawer

# More complete example

This example **extract 2 scenes** from a real project.

## Features
- [x] Navigator (React Native's Navigation Experimental).
- [x] Drawer (React Native Drawer)
- [x] Selection
- [x] Button in real from
- [x] Input in real form

### Navigator: 
Navigation system of Native App, press **"REGISTER"** navigate us to **Register Scene**.

```flow js
import { NavigationExperimental, utils } from 'react-universal-ui';
```

These are very nice articles about **Navigation Experimental**:

[First look: React Native NavigationExperimental Part 1][navigator-part1]<br>
[React Native NavigationExperimental Part 2 — Implementing Redux][navigator-part2]<br>
[React Native NavigationExperimental in Depth][navigator-in-depth]

To make it work, we'll need some **Redux** setup - which **react-universal-ui**'s utils already do it for us:<br>

```flow js
/* Higher order route-reducer to use with Redux store*/
import { utils } from 'react-universal-ui';
import { initialRoute } from '../../utils/routes';

const initialRouterState = {
	routes: [initialRoute], //Our default scene.
};

export default utils.nativeRouteReducer(
	(state = initialRouterState, action) => {
		switch (action.type) {
			default:
				return state;
		}
	}
);
```

```flow js
/* Route Actions */
const { nativeRouteAction } = utils;
```

```flow js
const sceneConfigs = {
	key: 'login',
	component: Login,
	hideNavigation: true,
	style: {
		backgroundColor: colors.main,
	}
};

this.props.dispatch(nativeRouteAction.push(sceneConfigs))
```

#### Still thinking, this part is on progress...

### Drawer:
I use **react-native-drawer** for this example, it just work on **Browser** and **react-native-web** 
without any fixes ;).<br>

```
npm install --save react-native-drawer
```

[Read their site for more details - just normal setup like their document ;)][react-native-drawer]<br>
You could actually use any library for Drawer, in my case [react-native-drawer][react-native-drawer] is the way to go.
It's pretty good library with most of the feature we want ;).
<br><br>
In the right-side demo, **Press "Sign In (Drawer LOCKED)"** to unlock Drawer menu.<br>
With **UNLOCKED** status, swipe/drag from-right-to-left will pull the Drawer out, but it'll not work correct **cause we're run the example in desktop-web-view**.

In real usage, it work perfectly with **Browser** in **chrome emulator mode - or in Mobile's Browser**, which support basic touch handling instead of **mouse**.
<br>

### Selection:
Press **"LOGIN"** Button to see.<br>

#### Still on progress...