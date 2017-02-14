# React Universal UI

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]

**[React Universal UI][github-url]** is a cross-platform **React's UI Kit** which could be run on both **Web Browser** and **React Native** environment, **write once and use everywhere**.

## Platforms

**Native platforms**: **iOs, Android** (we'll need more customize to make it run on another native places like Mac, Windows or Linux - currently I got no plan for those platforms).

**Browser support**: Chrome, Firefox, Safari >= 7, IE 10, Edge.

[npm-image]: https://badge.fury.io/js/react-universal-ui.svg
[npm-url]: https://npmjs.org/package/react-universal-ui
[travis-image]: https://travis-ci.org/cloudle/ruui.svg?branch=master
[travis-url]: https://travis-ci.org/cloudle/ruui
[github-url]: https://github.com/cloudle/ruui
[react-url]: https://facebook.github.io/react/
[react-native-url]: https://facebook.github.io/react-native/
[react-native-web-url]: https://github.com/necolas/react-native-web
[react-wings-boilerplate-url]: https://github.com/cloudle/react-wings-boilerplate
[material-ui-url]: http://www.material-ui.com/
[ionic-url]: http://ionicframework.com/docs/v2/components/#overview
[react-native-vector-icon-url]: https://github.com/oblador/react-native-vector-icons
[cloud-vector-icons]: https://github.com/cloudle/react-native-vector-icons
[react-native-drawer-url]: https://github.com/root-two/react-native-drawer
[documentation-url]: https://cloudle.github.io/

## Installation
```
npm install --save react-universal-ui
```

**Alternatively, you can start with [react-wings-boilerplate][react-wings-boilerplate-url] which have more complete structure to work on cross-platform [React Native][react-native-url] project.**

## Influences
[Material UI][material-ui-url], heavily inspired by their great component design for **Web**! My job is make it work in **Native** way.

[Ionic 2][ionic-url], As a fan of **Ionic** - their **ecosystem** and **design** is a great reference for me when developing **this project**.

## Status
**This is a work in progress, right now here's what is done:**

- [x] Cross-platform Vector Icons (react-native-vector-icons)
- [x] ResponsibleTouchArea (Reuseable Ripple Effect).
- [x] Cross-platform Drawer (Aka Side Menus - based on react-native-drawer)
- [x] Cross-platform Navigation, Routing integration
  - [x] Native Navigation (based on React Native's ExperimentalNavigation)
  - [x] React-Router for Web/Native (Full-featured Browser support, fallback to Memory Navigation History for React Native)
  - [x] Redux helpers
- [x] Switches (exposed from react-native-web)
- [x] Button Component
  - [x] Ripple effect
  - [x] Fade effect
  - [x] Raised style
  - [x] Icon Button
  - [ ] Tooltip (Web only)
- [x] Text Input Component (Material-inspired, but highly customizable)
  - [x] Underline effect
  - [x] Floating label
  - [x] Force label-floating
  - [ ] Field Error
  - [x] Hint
  - [ ] Multi-line
  - [ ] Number, currency, datetime masking
  - [ ] Tooltip (Web only)
- [ ] Radio
- [ ] Slider
- [ ] Popover
- [ ] Snackbar
- [ ] Select field (mostly for Web)
- [x] Selector API and Selector components for Native.  
- [ ] Picker Components 
  - [ ] Datetime picker
  - [ ] Scroll Picker
- [ ] Table
- [ ] Tabs

# License

MIT