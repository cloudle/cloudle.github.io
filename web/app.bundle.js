/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://0.0.0.0:3000/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(251);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(0);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.isAndroid=exports.isBrowser=exports.isIos=exports.os=exports.tinyColor=undefined;var _colors=__webpack_require__(33);









Object.keys(_colors).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _colors[key];}});});var _helpers=__webpack_require__(34);
Object.keys(_helpers).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _helpers[key];}});});var _reactNative=__webpack_require__(0);var _tinycolor=__webpack_require__(15);var _tinycolor2=_interopRequireDefault(_tinycolor);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var tinyColor=exports.tinyColor=_tinycolor2.default;var os=exports.os=_reactNative.Platform.OS;var isIos=exports.isIos=os==='ios';var isBrowser=exports.isBrowser=os==='web';var isAndroid=exports.isAndroid=os==='android';

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}













var action=_react.PropTypes.shape({
type:_react.PropTypes.string.isRequired});



var animatedValue=_react.PropTypes.instanceOf(_reactNative.Animated.Value);


var navigationRoute=_react.PropTypes.shape({
key:_react.PropTypes.string.isRequired});



var navigationState=_react.PropTypes.shape({
index:_react.PropTypes.number.isRequired,
routes:_react.PropTypes.arrayOf(navigationRoute)});



var layout=_react.PropTypes.shape({
height:animatedValue,
initHeight:_react.PropTypes.number.isRequired,
initWidth:_react.PropTypes.number.isRequired,
isMeasured:_react.PropTypes.bool.isRequired,
width:animatedValue});



var scene=_react.PropTypes.shape({
index:_react.PropTypes.number.isRequired,
isActive:_react.PropTypes.bool.isRequired,
isStale:_react.PropTypes.bool.isRequired,
key:_react.PropTypes.string.isRequired,
route:navigationRoute.isRequired});



var SceneRendererProps={
layout:layout.isRequired,
navigationState:navigationState.isRequired,
position:animatedValue.isRequired,
progress:animatedValue.isRequired,
scene:scene.isRequired,
scenes:_react.PropTypes.arrayOf(scene).isRequired};


var SceneRenderer=_react.PropTypes.shape(SceneRendererProps);


var panHandlers=_react.PropTypes.shape({
onMoveShouldSetResponder:_react.PropTypes.func.isRequired,
onMoveShouldSetResponderCapture:_react.PropTypes.func.isRequired,
onResponderEnd:_react.PropTypes.func.isRequired,
onResponderGrant:_react.PropTypes.func.isRequired,
onResponderMove:_react.PropTypes.func.isRequired,
onResponderReject:_react.PropTypes.func.isRequired,
onResponderRelease:_react.PropTypes.func.isRequired,
onResponderStart:_react.PropTypes.func.isRequired,
onResponderTerminate:_react.PropTypes.func.isRequired,
onResponderTerminationRequest:_react.PropTypes.func.isRequired,
onStartShouldSetResponder:_react.PropTypes.func.isRequired,
onStartShouldSetResponderCapture:_react.PropTypes.func.isRequired});





function extractSceneRendererProps(
props)
{
return{
layout:props.layout,
navigationState:props.navigationState,
position:props.position,
progress:props.progress,
scene:props.scene,
scenes:props.scenes};

}exports.default=

{

extractSceneRendererProps:extractSceneRendererProps,


SceneRendererProps:SceneRendererProps,


SceneRenderer:SceneRenderer,
action:action,
navigationState:navigationState,
navigationRoute:navigationRoute,
panHandlers:panHandlers};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(3);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _reactNative=__webpack_require__(0);
var _utils=__webpack_require__(4);

var _NavigationAbstractPanResponder=__webpack_require__(8);var _NavigationAbstractPanResponder2=_interopRequireDefault(_NavigationAbstractPanResponder);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}






var emptyFunction=function emptyFunction(){};




var ANIMATION_DURATION=250;






var POSITION_THRESHOLD=1/3;




var RESPOND_THRESHOLD=15;




var DISTANCE_THRESHOLD=100;




var Directions={
'HORIZONTAL':'horizontal',
'VERTICAL':'vertical'};var


























NavigationCardStackPanResponder=function(_NavigationAbstractPa){_inherits(NavigationCardStackPanResponder,_NavigationAbstractPa);






function NavigationCardStackPanResponder(
direction,
props)
{_classCallCheck(this,NavigationCardStackPanResponder);var _this=_possibleConstructorReturn(this,(NavigationCardStackPanResponder.__proto__||Object.getPrototypeOf(NavigationCardStackPanResponder)).call(this));

_this._isResponding=false;
_this._isVertical=direction===Directions.VERTICAL;
_this._props=props;
_this._startValue=0;








_this._addNativeListener(_this._props.layout.width);
_this._addNativeListener(_this._props.layout.height);
_this._addNativeListener(_this._props.position);return _this;
}_createClass(NavigationCardStackPanResponder,[{key:'onMoveShouldSetPanResponder',value:function onMoveShouldSetPanResponder(

event,gesture){
var props=this._props;

if(props.navigationState.index!==props.scene.index){
return false;
}

var layout=props.layout;
var isVertical=this._isVertical;
var index=props.navigationState.index;
var currentDragDistance=gesture[isVertical?'dy':'dx'];
var currentDragPosition=gesture[isVertical?'moveY':'moveX'];
var maxDragDistance=isVertical?
layout.height.__getValue():
layout.width.__getValue();

var positionMax=isVertical?
props.gestureResponseDistance:




props.gestureResponseDistance||30;

if(positionMax!=null&&currentDragPosition>positionMax){
return false;
}

return(
Math.abs(currentDragDistance)>RESPOND_THRESHOLD&&
maxDragDistance>0&&
index>0);

}},{key:'onPanResponderGrant',value:function onPanResponderGrant()

{var _this2=this;
this._isResponding=false;
this._props.position.stopAnimation(function(value){
_this2._isResponding=true;
_this2._startValue=value;
});
}},{key:'onPanResponderMove',value:function onPanResponderMove(

event,gesture){
if(!this._isResponding){
return;
}

var props=this._props;
var layout=props.layout;
var isVertical=this._isVertical;
var axis=isVertical?'dy':'dx';
var index=props.navigationState.index;
var distance=isVertical?
layout.height.__getValue():
layout.width.__getValue();
var currentValue=_reactNative.I18nManager.isRTL&&axis==='dx'?
this._startValue+gesture[axis]/distance:
this._startValue-gesture[axis]/distance;

var value=(0,_utils.clamp)(
index-1,
currentValue,
index);


props.position.setValue(value);
}},{key:'onPanResponderRelease',value:function onPanResponderRelease(

event,gesture){var _this3=this;
if(!this._isResponding){
return;
}

this._isResponding=false;

var props=this._props;
var isVertical=this._isVertical;
var axis=isVertical?'dy':'dx';
var index=props.navigationState.index;
var distance=_reactNative.I18nManager.isRTL&&axis==='dx'?
-gesture[axis]:
gesture[axis];

props.position.stopAnimation(function(value){
_this3._reset();

if(!props.onNavigateBack){
return;
}

if(
distance>DISTANCE_THRESHOLD||
value<=index-POSITION_THRESHOLD)
{
props.onNavigateBack();
}
});
}},{key:'onPanResponderTerminate',value:function onPanResponderTerminate()

{
this._isResponding=false;
this._reset();
}},{key:'_reset',value:function _reset()

{
var props=this._props;
_reactNative.Animated.timing(
props.position,
{
toValue:props.navigationState.index,
duration:ANIMATION_DURATION,
useNativeDriver:props.position.__isNative}).

start();
}},{key:'_addNativeListener',value:function _addNativeListener(

animatedValue){
if(!animatedValue.__isNative){
return;
}

if(Object.keys(animatedValue._listeners).length===0){
animatedValue.addListener(emptyFunction);
}
}}]);return NavigationCardStackPanResponder;}(_NavigationAbstractPanResponder2.default);


function createPanHandlers(
direction,
props)
{
var responder=new NavigationCardStackPanResponder(direction,props);
return responder.panHandlers;
}

function forHorizontal(
props)
{
return createPanHandlers(Directions.HORIZONTAL,props);
}

function forVertical(
props)
{
return createPanHandlers(Directions.VERTICAL,props);
}exports.default=

{

ANIMATION_DURATION:ANIMATION_DURATION,
DISTANCE_THRESHOLD:DISTANCE_THRESHOLD,
POSITION_THRESHOLD:POSITION_THRESHOLD,
RESPOND_THRESHOLD:RESPOND_THRESHOLD,


Directions:Directions,


forHorizontal:forHorizontal,
forVertical:forVertical};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=__webpack_require__(0);
var _invariant=__webpack_require__(6);var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}





var EmptyPanHandlers={
onMoveShouldSetPanResponder:null,
onPanResponderGrant:null,
onPanResponderMove:null,
onPanResponderRelease:null,
onPanResponderTerminate:null};var






NavigationAbstractPanResponder=



function NavigationAbstractPanResponder(){var _this=this;_classCallCheck(this,NavigationAbstractPanResponder);
var config={};
Object.keys(EmptyPanHandlers).forEach(function(name){
var fn=_this[name];

(0,_invariant2.default)(
typeof fn==='function',
'subclass of `NavigationAbstractPanResponder` must implement method %s',
name);


config[name]=fn.bind(_this);
},this);

this.panHandlers=_reactNative.PanResponder.create(config).panHandlers;
};exports.default=


NavigationAbstractPanResponder;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);

var _NavigationCardStackPanResponder=__webpack_require__(7);var _NavigationCardStackPanResponder2=_interopRequireDefault(_NavigationCardStackPanResponder);
var _NavigationCardStackStyleInterpolator=__webpack_require__(10);var _NavigationCardStackStyleInterpolator2=_interopRequireDefault(_NavigationCardStackStyleInterpolator);
var _NavigationPagerPanResponder=__webpack_require__(26);var _NavigationPagerPanResponder2=_interopRequireDefault(_NavigationPagerPanResponder);
var _NavigationPagerStyleInterpolator=__webpack_require__(27);var _NavigationPagerStyleInterpolator2=_interopRequireDefault(_NavigationPagerStyleInterpolator);
var _NavigationPointerEventsContainer=__webpack_require__(28);var _NavigationPointerEventsContainer2=_interopRequireDefault(_NavigationPointerEventsContainer);
var _NavigationPropTypes=__webpack_require__(5);var _NavigationPropTypes2=_interopRequireDefault(_NavigationPropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var



















NavigationCard=function(_React$Component){_inherits(NavigationCard,_React$Component);function NavigationCard(){_classCallCheck(this,NavigationCard);return _possibleConstructorReturn(this,(NavigationCard.__proto__||Object.getPrototypeOf(NavigationCard)).apply(this,arguments));}_createClass(NavigationCard,[{key:'render',value:function render()












{var _props=






this.props,panHandlers=_props.panHandlers,pointerEvents=_props.pointerEvents,renderScene=_props.renderScene,style=_props.style,props=_objectWithoutProperties(_props,['panHandlers','pointerEvents','renderScene','style']);

var viewStyle=style===undefined?
_NavigationCardStackStyleInterpolator2.default.forHorizontal(props):
style;

var viewPanHandlers=panHandlers===undefined?
_NavigationCardStackPanResponder2.default.forHorizontal(_extends({},
props,{
onNavigateBack:this.props.onNavigateBack})):

panHandlers;

return(
_react2.default.createElement(_reactNative.Animated.View,_extends({},
viewPanHandlers,{
pointerEvents:pointerEvents,
ref:this.props.onComponentRef,
style:[styles.main,viewStyle]}),
renderScene(props)));


}}]);return NavigationCard;}(_react2.default.Component);process.env.NODE_ENV!=="production"?NavigationCard.propTypes=_extends({},_NavigationPropTypes2.default.SceneRendererProps,{onComponentRef:_react.PropTypes.func.isRequired,onNavigateBack:_react.PropTypes.func,panHandlers:_NavigationPropTypes2.default.panHandlers,pointerEvents:_react.PropTypes.string.isRequired,renderScene:_react.PropTypes.func.isRequired,style:_react.PropTypes.any}):void 0;


var styles=_reactNative.StyleSheet.create({
main:{
backgroundColor:'#E9E9EF',
bottom:0,
left:0,
position:'absolute',
right:0,




top:0}});



NavigationCard=_NavigationPointerEventsContainer2.default.create(NavigationCard);

NavigationCard.CardStackPanResponder=_NavigationCardStackPanResponder2.default;
NavigationCard.CardStackStyleInterpolator=_NavigationCardStackStyleInterpolator2.default;
NavigationCard.PagerPanResponder=_NavigationPagerPanResponder2.default;
NavigationCard.PagerStyleInterpolator=_NavigationPagerStyleInterpolator2.default;exports.default=

NavigationCard;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=__webpack_require__(0);























function forInitial(props){var

navigationState=

props.navigationState,scene=props.scene;

var focused=navigationState.index===scene.index;
var opacity=focused?1:0;

var translate=focused?0:1000000;
return{
opacity:opacity,
transform:[
{translateX:translate},
{translateY:translate}]};


}

function forHorizontal(props){var

layout=


props.layout,position=props.position,scene=props.scene;

if(!layout.isMeasured){
return forInitial(props);
}

var index=scene.index;
var inputRange=[index-1,index,index+0.99,index+1];
var width=layout.initWidth;
var outputRange=_reactNative.I18nManager.isRTL?
[-width,0,10,10]:
[width,0,-10,-10];


var opacity=position.interpolate({
inputRange:inputRange,
outputRange:[1,1,0.3,0]});


var scale=position.interpolate({
inputRange:inputRange,
outputRange:[1,1,0.95,0.95]});


var translateY=0;
var translateX=position.interpolate({
inputRange:inputRange,
outputRange:outputRange});


return{
opacity:opacity,
transform:[

{translateX:translateX},
{translateY:translateY}]};


}

function forVertical(props){var

layout=


props.layout,position=props.position,scene=props.scene;

if(!layout.isMeasured){
return forInitial(props);
}

var index=scene.index;
var inputRange=[index-1,index,index+0.99,index+1];
var height=layout.initHeight;

var opacity=position.interpolate({
inputRange:inputRange,
outputRange:[1,1,0.3,0]});


var scale=position.interpolate({
inputRange:inputRange,
outputRange:[1,1,0.95,0.95]});


var translateX=0;
var translateY=position.interpolate({
inputRange:inputRange,
outputRange:[height,0,-10,-10]});


return{
opacity:opacity,
transform:[
{scale:scale},
{translateX:translateX},
{translateY:translateY}]};


}

function canUseNativeDriver(isVertical){




return true;
}exports.default=

{
forHorizontal:forHorizontal,
forVertical:forVertical,
canUseNativeDriver:canUseNativeDriver};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);

var _NavigationPropTypes=__webpack_require__(5);var _NavigationPropTypes2=_interopRequireDefault(_NavigationPropTypes);
var _NavigationScenesReducer=__webpack_require__(30);var _NavigationScenesReducer2=_interopRequireDefault(_NavigationScenesReducer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var





























PropTypes=_react2.default.PropTypes;

var DefaultTransitionSpec={
duration:250,
easing:_reactNative.Easing.inOut(_reactNative.Easing.ease),
timing:_reactNative.Animated.timing};var


NavigationTransitioner=function(_React$Component){_inherits(NavigationTransitioner,_React$Component);

















function NavigationTransitioner(props,context){_classCallCheck(this,NavigationTransitioner);var _this=_possibleConstructorReturn(this,(NavigationTransitioner.__proto__||Object.getPrototypeOf(NavigationTransitioner)).call(this,
props,context));



var layout={
height:new _reactNative.Animated.Value(0),
initHeight:0,
initWidth:0,
isMeasured:false,
width:new _reactNative.Animated.Value(0)};


_this.state={
layout:layout,
position:new _reactNative.Animated.Value(_this.props.navigationState.index),
progress:new _reactNative.Animated.Value(1),
scenes:(0,_NavigationScenesReducer2.default)([],_this.props.navigationState)};


_this._prevTransitionProps=null;
_this._transitionProps=buildTransitionProps(props,_this.state);
_this._isMounted=false;return _this;
}_createClass(NavigationTransitioner,[{key:'componentWillMount',value:function componentWillMount()

{
this._onLayout=this._onLayout.bind(this);
this._onTransitionEnd=this._onTransitionEnd.bind(this);
}},{key:'componentDidMount',value:function componentDidMount()

{
this._isMounted=true;
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this._isMounted=false;
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){var _this2=this;
var nextScenes=(0,_NavigationScenesReducer2.default)(
this.state.scenes,
nextProps.navigationState,
this.props.navigationState);


if(nextScenes===this.state.scenes){
return;
}

var nextState=_extends({},
this.state,{
scenes:nextScenes});var



position=

nextState.position,progress=nextState.progress;

progress.setValue(0);

this._prevTransitionProps=this._transitionProps;
this._transitionProps=buildTransitionProps(nextProps,nextState);


var transitionUserSpec=nextProps.configureTransition?
nextProps.configureTransition(
this._transitionProps,
this._prevTransitionProps):

null;

var transitionSpec=_extends({},
DefaultTransitionSpec,
transitionUserSpec);var


timing=transitionSpec.timing;
delete transitionSpec.timing;

var animations=[
timing(
progress,_extends({},

transitionSpec,{
toValue:1}))];




if(nextProps.navigationState.index!==this.props.navigationState.index){
animations.push(
timing(
position,_extends({},

transitionSpec,{
toValue:nextProps.navigationState.index})));



}


this.setState(nextState,function(){
nextProps.onTransitionStart&&nextProps.onTransitionStart(
_this2._transitionProps,
_this2._prevTransitionProps);

_reactNative.Animated.parallel(animations).start(_this2._onTransitionEnd);
});
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.View,{
onLayout:this._onLayout,
style:[styles.main,this.props.style]},
this.props.render(this._transitionProps,this._prevTransitionProps)));


}},{key:'_onLayout',value:function _onLayout(

event){var _event$nativeEvent$la=
event.nativeEvent.layout,height=_event$nativeEvent$la.height,width=_event$nativeEvent$la.width;

if(this.state.layout.initWidth===width&&
this.state.layout.initHeight===height){
return;
}
var layout=_extends({},
this.state.layout,{
initHeight:height,
initWidth:width,
isMeasured:true});


layout.height.setValue(height);
layout.width.setValue(width);

var nextState=_extends({},
this.state,{
layout:layout});


this._transitionProps=buildTransitionProps(this.props,nextState);
this.setState(nextState);
}},{key:'_onTransitionEnd',value:function _onTransitionEnd()

{var _this3=this;
if(!this._isMounted){
return;
}

var prevTransitionProps=this._prevTransitionProps;
this._prevTransitionProps=null;

var nextState=_extends({},
this.state,{
scenes:this.state.scenes.filter(isSceneNotStale)});


this._transitionProps=buildTransitionProps(this.props,nextState);

this.setState(nextState,function(){
_this3.props.onTransitionEnd&&_this3.props.onTransitionEnd(
_this3._transitionProps,
prevTransitionProps);

});
}}]);return NavigationTransitioner;}(_react2.default.Component);process.env.NODE_ENV!=="production"?NavigationTransitioner.propTypes={configureTransition:PropTypes.func,navigationState:_NavigationPropTypes2.default.navigationState.isRequired,onTransitionEnd:PropTypes.func,onTransitionStart:PropTypes.func,render:PropTypes.func.isRequired}:void 0;


function buildTransitionProps(
props,
state)
{var

navigationState=
props.navigationState;var


layout=



state.layout,position=state.position,progress=state.progress,scenes=state.scenes;

return{
layout:layout,
navigationState:navigationState,
position:position,
progress:progress,
scenes:scenes,

scene:scenes.find(isSceneActive)};

}

function isSceneNotStale(scene){
return!scene.isStale;
}

function isSceneActive(scene){
return scene.isActive;
}

var styles=_reactNative.StyleSheet.create({
main:{
flex:1}});exports.default=



NavigationTransitioner;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});exports.ResponsibleTouchArea=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp;var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);












var _RippleEffect=__webpack_require__(13);var _RippleEffect2=_interopRequireDefault(_RippleEffect);
var _utils=__webpack_require__(4);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var MAX_PARTICLE_COUNT=5;var

ResponsibleTouchArea=exports.ResponsibleTouchArea=(_temp=_class=function(_Component){_inherits(ResponsibleTouchArea,_Component);




















function ResponsibleTouchArea(props){_classCallCheck(this,ResponsibleTouchArea);var _this=_possibleConstructorReturn(this,(ResponsibleTouchArea.__proto__||Object.getPrototypeOf(ResponsibleTouchArea)).call(this,
props));_this.rippleIndex=0;
_this.state={
ripples:[],
raiseAnimation:new _reactNative.Animated.Value(0)};


if(_this.props.debounce){
_this.handlePress=(0,_utils.debounce)(_this.handlePress.bind(_this),_this.props.debounce);
}return _this;
}_createClass(ResponsibleTouchArea,[{key:'renderRipples',value:function renderRipples()

{var _this2=this;
return this.state.ripples.map(function(ripple){
return _react2.default.createElement(_RippleEffect2.default,{
key:ripple.index,
style:ripple.style,
index:ripple.index,
speed:_this2.props.rippleAnimationSpeed});

});
}},{key:'render',value:function render()

{
var InnerComponent=this.props.disabled?_reactNative.View:_reactNative.TouchableOpacity;

var shadowOpacity=this.state.raiseAnimation.interpolate({
inputRange:[0,1],outputRange:[this.props.raise?0.25:0,0.8]}),
shadows={
position:'absolute',
top:0,left:0,bottom:0,right:0,
borderRadius:3,
shadowColor:'#666666',
opacity:shadowOpacity,
shadowOpacity:1,
shadowRadius:14,
shadowOffset:{width:0,height:2}};


return _react2.default.createElement(_reactNative.View,{
onMouseLeave:onMouseLeave.bind(this),
onMouseEnter:onMouseEnter.bind(this),
className:'touchable',
ref:'wrapperView',collapsable:false,
style:this.props.wrapperStyle,
onLayout:this.props.onLayout},

_react2.default.createElement(_reactNative.Animated.View,{style:[styles.fullSizeAbsolute,shadows]}),
_react2.default.createElement(_reactNative.View,{style:[styles.fullSizeAbsolute]},
this.renderRipples()),


_react2.default.createElement(InnerComponent,{
activeOpacity:this.props.minActiveOpacity,
style:this.props.innerStyle,
onPressIn:onPressIn.bind(this),
onPressOut:onPressOut.bind(this),
onPress:onPress.bind(this),
onStartShouldSetResponderCapture:function onStartShouldSetResponderCapture(){return true;}},

this.props.children));


}}]);return ResponsibleTouchArea;}(_react.Component),_class.defaultProps={staticRipple:false,rippleColor:'#FFFFFF',minActiveOpacity:0.8},_temp);process.env.NODE_ENV!=="production"?ResponsibleTouchArea.propTypes={wrapperStyle:_react2.default.PropTypes.any,innerStyle:_react2.default.PropTypes.any,staticRipple:_react2.default.PropTypes.bool,rippleColor:_react2.default.PropTypes.string,minActiveOpacity:_react2.default.PropTypes.number,onPress:_react2.default.PropTypes.func,onLayout:_react2.default.PropTypes.func,onMouseEnter:_react2.default.PropTypes.func,onMouseLeave:_react2.default.PropTypes.func}:void 0;


function onPress(e){
!this.props.disabled&&this.props.onPress&&this.props.onPress(e);
}

function onPressIn(e){var _this3=this;
if(this.props.disabled)return;

if(this.props.raise){
playAnimation.call(this,1);
}

var event=e.nativeEvent,locationX=event.locationX,locationY=event.locationY,pageX=event.pageX,pageY=event.pageY;

this.refs.wrapperView.measure(function(fx,fy,wrapperWidth,wrapperHeight,px,py){
var ripplePosition=void 0,rippleRadius=0,touchX=pageX-px,touchY=pageY-py;

if(_this3.props.staticRipple){
rippleRadius=wrapperWidth/2;
ripplePosition={
top:wrapperHeight/2-rippleRadius,
left:wrapperWidth/2-rippleRadius};

}else{

if(touchX>wrapperWidth/2){
if(touchY>wrapperHeight/2){

rippleRadius=Math.sqrt(Math.pow(touchX,2)+Math.pow(touchY,2));
}else{

rippleRadius=Math.sqrt(Math.pow(touchX,2)+Math.pow(touchY-wrapperHeight,2));
}
}else{
if(touchY>wrapperHeight/2){

rippleRadius=Math.sqrt(Math.pow(touchX-wrapperWidth,2)+Math.pow(touchY,2));
}else{

rippleRadius=Math.sqrt(Math.pow(touchX-wrapperWidth,2)+Math.pow(touchY-wrapperHeight,2));
}
}

rippleRadius*=1.2;
ripplePosition={
top:touchY-rippleRadius,
left:touchX-rippleRadius};

}

var newRipple={
index:_this3.rippleIndex++,
style:_extends({
width:rippleRadius*2,
height:rippleRadius*2,
borderRadius:rippleRadius,
backgroundColor:_this3.props.rippleColor},
ripplePosition)},

ripples=[newRipple].concat(_toConsumableArray(_this3.state.ripples));

if(ripples.length>MAX_PARTICLE_COUNT){
ripples=ripples.slice(0,MAX_PARTICLE_COUNT);
}

_this3.setState({ripples:ripples});
});

this.props.onPressIn&&this.props.onPressIn(e);
}

function onPressOut(){
playAnimation.call(this,0);
}

function onMouseEnter(){

}

function onMouseLeave(){
return onPressOut.bind(this);
}

function playAnimation(toValue){
if(this.animation)this.animation.clear();

var animations=[
_reactNative.Animated.timing(this.state.raiseAnimation,{
toValue:toValue,
duration:500,
easing:_reactNative.Easing.in(_reactNative.Easing.bezier(0.23,1,0.32,1))})];



this.animation=_reactNative.Animated.parallel(animations).start();
}

var styles=_reactNative.StyleSheet.create({
fullSizeAbsolute:{
position:'absolute',
top:0,bottom:0,right:0,left:0,
overflow:'hidden'}});exports.default=



ResponsibleTouchArea;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.RippleEffect=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

RippleEffect=exports.RippleEffect=function(_Component){_inherits(RippleEffect,_Component);
function RippleEffect(props){_classCallCheck(this,RippleEffect);var _this=_possibleConstructorReturn(this,(RippleEffect.__proto__||Object.getPrototypeOf(RippleEffect)).call(this,
props));
_this.state={
expandAnimation:new _reactNative.Animated.Value(0)};return _this;

}_createClass(RippleEffect,[{key:'componentDidMount',value:function componentDidMount()

{
_reactNative.Animated.timing(this.state.expandAnimation,{
toValue:1,
duration:this.props.speed||750,
easing:_reactNative.Easing.out(_reactNative.Easing.bezier(0.445,0.05,0.55,0.95))}).
start();
}},{key:'render',value:function render()

{
var opacity=this.state.expandAnimation.interpolate({
inputRange:[0,1],outputRange:[0.2,0]}),
scale=this.state.expandAnimation.interpolate({
inputRange:[0,1],outputRange:[0,1]}),
styles=_extends({
position:'absolute'},
this.props.style,{
transform:[{scale:scale}],
opacity:opacity});


return _react2.default.createElement(_reactNative.Animated.View,{pointerEvents:'none',style:styles});
}}]);return RippleEffect;}(_react.Component);exports.default=


RippleEffect;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(187);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(406);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);var _reactNative2=_interopRequireDefault(_reactNative);
var _app=__webpack_require__(37);var _app2=_interopRequireDefault(_app);

var _reactHotLoader=__webpack_require__(40);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

render=function render(Component){
var rootEl=document.getElementById('root');

_reactNative2.default.render(
_react2.default.createElement(_reactHotLoader.AppContainer,null,
_react2.default.createElement(Component,null)),

rootEl);

};

render(_app2.default);

if(false){
module.hot.accept('./src/app',function(){
var nextApp=require('./src/app').default;
console.log(nextApp);
render(nextApp);
});
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp;var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);
var _ResponsibleTouchArea=__webpack_require__(12);var _ResponsibleTouchArea2=_interopRequireDefault(_ResponsibleTouchArea);
var _utils=__webpack_require__(4);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Button=(_temp=_class=function(_Component){_inherits(Button,_Component);function Button(){_classCallCheck(this,Button);return _possibleConstructorReturn(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));}_createClass(Button,[{key:'render',value:function render()





















{
return _react2.default.createElement(_ResponsibleTouchArea2.default,{
onPress:this.props.onPress,
raise:true,
staticRipple:this.props.staticRipple,
rippleColor:this.props.rippleColor,
wrapperStyle:[styles.wrapper,this.props.wrapperStyle],
innerStyle:[styles.contentContainer,this.props.innerStyle]},
this.renderContent());

}},{key:'renderContent',value:function renderContent()

{
var title=this.props.title,
icon=this.props.icon,
textStyles=[styles.titleText,this.props.textStyle];

if(this.props.children){
return this.props.children;
}else if(this.props.rightIcon){
return _react2.default.createElement(_reactNative.Text,{style:textStyles},
title,' ',icon);

}else{
return _react2.default.createElement(_reactNative.Text,{style:textStyles},
icon,' ',title);

}
}}]);return Button;}(_react.Component),_class.defaultProps={staticRipple:false,rippleColor:'#FFFFFF',title:'Title'},_temp);exports.default=Button;process.env.NODE_ENV!=="production"?Button.propTypes={wrapperStyle:_react2.default.PropTypes.any,innerStyle:_react2.default.PropTypes.object,color:_react2.default.PropTypes.string,borderRadius:_react2.default.PropTypes.number,rippleColor:_react2.default.PropTypes.string,staticRipple:_react2.default.PropTypes.bool,icon:_react2.default.PropTypes.any,rightIcon:_react2.default.PropTypes.bool,title:_react2.default.PropTypes.string,textStyle:_react2.default.PropTypes.object,raise:_react2.default.PropTypes.bool,onPress:_react2.default.PropTypes.func}:void 0;


var styles=_reactNative.StyleSheet.create({
wrapper:{
backgroundColor:_utils.colors.sky,
borderRadius:3,
margin:20},

contentContainer:{
padding:10,
alignItems:'center',
justifyContent:'center'},

titleText:{
color:'#FFFFFF',
backgroundColor:'transparent'}});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp;var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);
var _utils=__webpack_require__(4);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Input=(_temp=_class=function(_Component){_inherits(Input,_Component);










function Input(props){_classCallCheck(this,Input);var _this=_possibleConstructorReturn(this,(Input.__proto__||Object.getPrototypeOf(Input)).call(this,
props));
var empty=!_this.props.value.length,
initialFloating=_this.props.forceFloating||!empty?1:0;

_this.state={
underLineAnimation:new _reactNative.Animated.Value(0),
floatingAnimation:new _reactNative.Animated.Value(initialFloating),
floatingLabelWidth:0,
floatingLabelHeight:0,
inputContainerLocation:{x:0,y:0},
value:_this.props.value,
empty:empty};return _this;

}_createClass(Input,[{key:'render',value:function render()

{
var scale=this.state.underLineAnimation.interpolate({
inputRange:[0,1],outputRange:[0.0001,1]}),
underLineStyles={
transform:[{scaleX:scale}]},
inputContainerStyles=buildInputContainerStyles.call(this);

return _react2.default.createElement(_reactNative.View,{style:[styles.container,inputContainerStyles]},
_react2.default.createElement(_reactNative.TextInput,{
onChangeText:onChangeText.bind(this),
defaultValue:this.props.value,
style:styles.textInput,
underlineColorAndroid:'transparent',
onFocus:playAnimation.bind(this,1),
onBlur:playAnimation.bind(this,0)}),
this.renderFloatingLabel(),
_react2.default.createElement(_reactNative.Animated.View,{style:[styles.inputUnderLine,underLineStyles]}));

}},{key:'renderFloatingLabel',value:function renderFloatingLabel()

{
if(this.props.floatingLabel){
var scaleSize=0.8,
scaledWidth=this.state.floatingLabelWidth*(1.05-scaleSize),
sideScaledWidth=scaledWidth/2,
scale=this.state.floatingAnimation.interpolate({
inputRange:[0,1],outputRange:[1,scaleSize]}),

translateY=this.state.floatingAnimation.interpolate({
inputRange:[0,1],outputRange:[0,-this.state.floatingLabelHeight]}),

translateX=this.state.floatingAnimation.interpolate({
inputRange:[0,1],outputRange:[0,-sideScaledWidth]}),

wrapperStyles={
transform:[{scale:scale},{translateX:translateX},{translateY:translateY}]};


return _react2.default.createElement(_reactNative.Animated.View,{
pointerEvents:'none',
onLayout:onFloatingLabelLayout.bind(this),
style:[styles.floatingLabelWrapper,wrapperStyles]},
_react2.default.createElement(_reactNative.Text,{style:styles.floatingLabelText},
this.props.floatingLabel));


}
}}]);return Input;}(_react.Component),_class.defaultProps={value:''},_temp);exports.default=Input;process.env.NODE_ENV!=="production"?Input.propTypes={hint:_react2.default.PropTypes.string,floatingLabel:_react2.default.PropTypes.string,forceFloating:_react2.default.PropTypes.bool}:void 0;


var easeInSpeed=450,
easeOutSpeed=easeInSpeed;

function onChangeText(nextValue){
this.setState({value:nextValue,empty:!nextValue.length});
}

function playAnimation(toValue){
if(this.animation)this.animation.clear();

var animations=[
_reactNative.Animated.timing(this.state.underLineAnimation,{
toValue:toValue,
duration:easeInSpeed,
easing:_reactNative.Easing.in(_reactNative.Easing.bezier(0.23,1,0.32,1))})];



if(this.state.empty){
var floatingAnimation=_reactNative.Animated.timing(this.state.floatingAnimation,{
toValue:toValue,
duration:easeInSpeed,
easing:_reactNative.Easing.in(_reactNative.Easing.bezier(0.23,1,0.32,1))});


animations.push(floatingAnimation);
}

this.animation=_reactNative.Animated.parallel(animations).start();
}

function onFloatingLabelLayout(_ref){var layout=_ref.nativeEvent.layout;
if(!this.state.floatingLabelWidth)this.setState({
floatingLabelWidth:layout.width,
floatingLabelHeight:layout.height});

}
function buildInputContainerStyles(){var defaults=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
defaults.paddingTop=
(defaults.paddingTop||0)+(
this.props.floatingLabel?20:0);

return defaults;
}

var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
backgroundColor:'#FFFFFF',
borderBottomWidth:1,
borderColor:'#f5f5f5'},

textInput:{
flex:1,
height:30,
fontSize:16},

inputUnderLine:{
height:2,
backgroundColor:'#F0871A'},

floatingLabelWrapper:{
position:'absolute',
justifyContent:'center',
height:30},

floatingLabelText:{
backgroundColor:'transparent',
fontSize:16}});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var



NavigationAnimatedValueSubscription=function(){



function NavigationAnimatedValueSubscription(value,callback){_classCallCheck(this,NavigationAnimatedValueSubscription);
this._value=value;
this._token=value.addListener(callback);
}_createClass(NavigationAnimatedValueSubscription,[{key:'remove',value:function remove()

{
this._value.removeListener(this._token);
}}]);return NavigationAnimatedValueSubscription;}();exports.default=


NavigationAnimatedValueSubscription;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp;var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);

var _NavigationCard=__webpack_require__(9);var _NavigationCard2=_interopRequireDefault(_NavigationCard);
var _NavigationCardStackPanResponder=__webpack_require__(7);var _NavigationCardStackPanResponder2=_interopRequireDefault(_NavigationCardStackPanResponder);
var _NavigationCardStackStyleInterpolator=__webpack_require__(10);var _NavigationCardStackStyleInterpolator2=_interopRequireDefault(_NavigationCardStackStyleInterpolator);
var _NavigationPropTypes=__webpack_require__(5);var _NavigationPropTypes2=_interopRequireDefault(_NavigationPropTypes);
var _NavigationTransitioner=__webpack_require__(11);var _NavigationTransitioner2=_interopRequireDefault(_NavigationTransitioner);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Directions=_NavigationCardStackPanResponder2.default.Directions;
var NativeAnimatedModule=_reactNative.Animate;var















































































NavigationCardStack=(_temp=_class=function(_React$Component){_inherits(NavigationCardStack,_React$Component);










































































function NavigationCardStack(props,context){_classCallCheck(this,NavigationCardStack);var _this=_possibleConstructorReturn(this,(NavigationCardStack.__proto__||Object.getPrototypeOf(NavigationCardStack)).call(this,
props,context));_this.


















_configureTransition=function(){
var isVertical=_this.props.direction==='vertical';
var animationConfig={};
if(
!!NativeAnimatedModule&&



!_this.props.enableGestures&&


_NavigationCardStackStyleInterpolator2.default.canUseNativeDriver(isVertical))
{
animationConfig.useNativeDriver=true;
}
return animationConfig;
};return _this;}_createClass(NavigationCardStack,[{key:'componentWillMount',value:function componentWillMount(){this._render=this._render.bind(this);this._renderScene=this._renderScene.bind(this);}},{key:'render',value:function render(){return _react2.default.createElement(_NavigationTransitioner2.default,{configureTransition:this._configureTransition,navigationState:this.props.navigationState,render:this._render,style:this.props.style});}},{key:'_render',value:function _render(

props){var _this2=this;var

renderHeader=
this.props.renderHeader;

var header=renderHeader?_react2.default.createElement(_reactNative.View,null,renderHeader(props)):null;

var scenes=props.scenes.map(
function(scene){return _this2._renderScene(_extends({},
props,{
scene:scene}));});



return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.View,{
style:styles.scenes},
scenes),

header));


}},{key:'_renderScene',value:function _renderScene(

props){
var isVertical=this.props.direction==='vertical';

var style=isVertical?
_NavigationCardStackStyleInterpolator2.default.forVertical(props):
_NavigationCardStackStyleInterpolator2.default.forHorizontal(props);

var panHandlers=null;

if(this.props.enableGestures){
var panHandlersProps=_extends({},
props,{
onNavigateBack:this.props.onNavigateBack,
gestureResponseDistance:this.props.gestureResponseDistance});

panHandlers=isVertical?
_NavigationCardStackPanResponder2.default.forVertical(panHandlersProps):
_NavigationCardStackPanResponder2.default.forHorizontal(panHandlersProps);
}

return(
_react2.default.createElement(_NavigationCard2.default,_extends({},
props,{
key:'card_'+props.scene.key,
panHandlers:panHandlers,
renderScene:this.props.renderScene,
style:[style,this.props.cardStyle]})));


}}]);return NavigationCardStack;}(_react2.default.Component),_class.defaultProps={direction:Directions.HORIZONTAL,enableGestures:true},_temp);process.env.NODE_ENV!=="production"?NavigationCardStack.propTypes={cardStyle:_react.PropTypes.any,direction:_react.PropTypes.oneOf([Directions.HORIZONTAL,Directions.VERTICAL]),gestureResponseDistance:_react.PropTypes.number,enableGestures:_react.PropTypes.bool,navigationState:_NavigationPropTypes2.default.navigationState.isRequired,onNavigateBack:_react.PropTypes.func,renderHeader:_react.PropTypes.func,renderScene:_react.PropTypes.func.isRequired,style:_reactNative.View.propTypes.style}:void 0;


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,




flexDirection:'column-reverse'},

scenes:{
flex:1}});exports.default=



NavigationCardStack;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.NavigationExperimental=undefined;var _NavigationCard=__webpack_require__(9);var _NavigationCard2=_interopRequireDefault(_NavigationCard);
var _NavigationCardStack=__webpack_require__(20);var _NavigationCardStack2=_interopRequireDefault(_NavigationCardStack);
var _NavigationHeader=__webpack_require__(22);var _NavigationHeader2=_interopRequireDefault(_NavigationHeader);
var _NavigationPropTypes=__webpack_require__(5);var _NavigationPropTypes2=_interopRequireDefault(_NavigationPropTypes);
var _NavigationStateUtils=__webpack_require__(29);var _NavigationStateUtils2=_interopRequireDefault(_NavigationStateUtils);
var _NavigationTransitioner=__webpack_require__(11);var _NavigationTransitioner2=_interopRequireDefault(_NavigationTransitioner);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var NavigationExperimental=exports.NavigationExperimental={

StateUtils:_NavigationStateUtils2.default,


Transitioner:_NavigationTransitioner2.default,


Card:_NavigationCard2.default,
CardStack:_NavigationCardStack2.default,
Header:_NavigationHeader2.default,

PropTypes:_NavigationPropTypes2.default};exports.default=


NavigationExperimental;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp;var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);var _reactNative2=_interopRequireDefault(_reactNative);

var _NavigationHeaderTitle=__webpack_require__(25);var _NavigationHeaderTitle2=_interopRequireDefault(_NavigationHeaderTitle);
var _NavigationHeaderBackButton=__webpack_require__(23);var _NavigationHeaderBackButton2=_interopRequireDefault(_NavigationHeaderBackButton);
var _NavigationPropTypes=__webpack_require__(5);var _NavigationPropTypes2=_interopRequireDefault(_NavigationPropTypes);
var _NavigationHeaderStyleInterpolator=__webpack_require__(24);var _NavigationHeaderStyleInterpolator2=_interopRequireDefault(_NavigationHeaderStyleInterpolator);
var _ReactComponentWithPureRenderMixin=__webpack_require__(35);var _ReactComponentWithPureRenderMixin2=_interopRequireDefault(_ReactComponentWithPureRenderMixin);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}































var APPBAR_HEIGHT=new Set(['ios','web']).has(_reactNative.Platform.OS)?44:56;
var STATUSBAR_HEIGHT=new Set(['ios','web']).has(_reactNative.Platform.OS)?20:0;var

NavigationHeader=(_temp=_class=function(_React$Component){_inherits(NavigationHeader,_React$Component);function NavigationHeader(){_classCallCheck(this,NavigationHeader);return _possibleConstructorReturn(this,(NavigationHeader.__proto__||Object.getPrototypeOf(NavigationHeader)).apply(this,arguments));}_createClass(NavigationHeader,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(






































nextProps,nextState){
return _ReactComponentWithPureRenderMixin2.default.shouldComponentUpdate.call(
this,
nextProps,
nextState);

}},{key:'render',value:function render()

{var _this2=this;var _props=
this.props,scenes=_props.scenes,style=_props.style,viewProps=_props.viewProps;

var scenesProps=scenes.map(function(scene){
var props=_NavigationPropTypes2.default.extractSceneRendererProps(_this2.props);
props.scene=scene;
return props;
});

var barHeight=this.props.statusBarHeight instanceof _reactNative.Animated.Value?
_reactNative.Animated.add(this.props.statusBarHeight,new _reactNative.Animated.Value(APPBAR_HEIGHT)):
APPBAR_HEIGHT+this.props.statusBarHeight;

return(
_react2.default.createElement(_reactNative.Animated.View,_extends({style:[
styles.appbar,
{height:barHeight},
style]},

viewProps),

scenesProps.map(this._renderLeft,this),
scenesProps.map(this._renderTitle,this),
scenesProps.map(this._renderRight,this)));


}},{key:'_renderLeft',value:function _renderLeft(

props){
return this._renderSubView(
props,
'left',
this.props.renderLeftComponent,
_NavigationHeaderStyleInterpolator2.default.forLeft);

}},{key:'_renderTitle',value:function _renderTitle(

props){
return this._renderSubView(
props,
'title',
this.props.renderTitleComponent,
_NavigationHeaderStyleInterpolator2.default.forCenter);

}},{key:'_renderRight',value:function _renderRight(

props){
return this._renderSubView(
props,
'right',
this.props.renderRightComponent,
_NavigationHeaderStyleInterpolator2.default.forRight);

}},{key:'_renderSubView',value:function _renderSubView(


props,
name,
renderer,
styleInterpolator)
{var

scene=

props.scene,navigationState=props.navigationState;var


index=


scene.index,isStale=scene.isStale,key=scene.key;

var offset=navigationState.index-index;

if(Math.abs(offset)>2){


return null;
}

var subViewProps=_extends({},props,{onNavigateBack:this.props.onNavigateBack});
var subView=renderer(subViewProps);
if(subView===null){
return null;
}

var pointerEvents=offset!==0||isStale?'none':'box-none';
return(
_react2.default.createElement(_reactNative.Animated.View,{
pointerEvents:pointerEvents,
key:name+'_'+key,
style:[
styles[name],
{marginTop:this.props.statusBarHeight},
styleInterpolator(props)]},

subView));


}}]);return NavigationHeader;}(_react2.default.Component),_class.defaultProps={renderTitleComponent:function renderTitleComponent(props){var title=String(props.scene.route.title||'');return _react2.default.createElement(_NavigationHeaderTitle2.default,null,title);},renderLeftComponent:function renderLeftComponent(props){if(props.scene.index===0||!props.onNavigateBack){return null;}return _react2.default.createElement(_NavigationHeaderBackButton2.default,{onPress:props.onNavigateBack});},renderRightComponent:function renderRightComponent(props){return null;},statusBarHeight:STATUSBAR_HEIGHT},_class.

HEIGHT=APPBAR_HEIGHT+STATUSBAR_HEIGHT,_class.
Title=_NavigationHeaderTitle2.default,_class.
BackButton=_NavigationHeaderBackButton2.default,_temp);process.env.NODE_ENV!=="production"?NavigationHeader.propTypes=_extends({},_NavigationPropTypes2.default.SceneRendererProps,{onNavigateBack:_react.PropTypes.func,renderLeftComponent:_react.PropTypes.func,renderRightComponent:_react.PropTypes.func,renderTitleComponent:_react.PropTypes.func,style:_reactNative.View.propTypes.style,statusBarHeight:_react.PropTypes.number,viewProps:_react.PropTypes.shape(_reactNative.View.propTypes)}):void 0;



var styles=_reactNative.StyleSheet.create({
appbar:{
alignItems:'center',
backgroundColor:new Set(['ios','web']).has(_reactNative.Platform.OS)?'#EFEFF2':'#FFF',
borderBottomColor:'rgba(0, 0, 0, .15)',
borderBottomWidth:new Set(['ios','web']).has(_reactNative.Platform.OS)?_reactNative.StyleSheet.hairlineWidth:0,

flexDirection:'row',
justifyContent:'flex-start'},


title:{
bottom:0,
left:APPBAR_HEIGHT,
position:'absolute',
right:APPBAR_HEIGHT,
top:0},


left:{
bottom:0,
left:0,
position:'absolute',
top:0},


right:{
bottom:0,
position:'absolute',
right:0,
top:0}});exports.default=



NavigationHeader;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);var _reactNative2=_interopRequireDefault(_reactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}





var NavigationHeaderBackButton=function NavigationHeaderBackButton(props){return(
_react2.default.createElement(_reactNative.TouchableOpacity,{style:styles.buttonContainer,onPress:props.onPress},
_react2.default.createElement(_reactNative.Image,{style:styles.button,source:__webpack_require__(38)})));};



process.env.NODE_ENV!=="production"?NavigationHeaderBackButton.propTypes={
onPress:_react2.default.PropTypes.func.isRequired}:void 0;


var styles=_reactNative.StyleSheet.create({
buttonContainer:{
flex:1,
flexDirection:'row',
alignItems:'center',
justifyContent:'center'},

button:{
height:24,
width:24,
margin:new Set(['ios','web']).has(_reactNative.Platform.OS)?10:16,
resizeMode:'contain',
transform:[{scaleX:_reactNative.I18nManager.isRTL?-1:1}]}});exports.default=



NavigationHeaderBackButton;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var _reactNative=__webpack_require__(0);
















function forLeft(props){var
position=props.position,scene=props.scene;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[0,1,0]})};


}

function forCenter(props){var
position=props.position,scene=props.scene;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[0,1,0]}),

transform:[
{
translateX:position.interpolate({
inputRange:[index-1,index+1],
outputRange:_reactNative.I18nManager.isRTL?
[-200,200]:
[200,-200]})}]};




}

function forRight(props){var
position=props.position,scene=props.scene;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[0,1,0]})};


}

module.exports={
forCenter:forCenter,
forLeft:forLeft,
forRight:forRight};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);var _reactNative2=_interopRequireDefault(_reactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}








var NavigationHeaderTitle=function NavigationHeaderTitle(_ref){var children=_ref.children,style=_ref.style,textStyle=_ref.textStyle,viewProps=_ref.viewProps;return(
_react2.default.createElement(_reactNative.View,_extends({style:[styles.title,style]},viewProps),
_react2.default.createElement(_reactNative.Text,{style:[styles.titleText,textStyle]},children)));};



var styles=_reactNative.StyleSheet.create({
title:{
flex:1,
flexDirection:'row',
alignItems:'center',
marginHorizontal:16},


titleText:{
flex:1,
fontSize:18,
fontWeight:'500',
color:'rgba(0, 0, 0, .9)',
textAlign:new Set(['ios','web']).has(_reactNative.Platform.OS)?'center':'left'}});



process.env.NODE_ENV!=="production"?NavigationHeaderTitle.propTypes={
children:_react2.default.PropTypes.node.isRequired,
style:_reactNative.View.propTypes.style,
textStyle:_reactNative.Text.propTypes.style}:void 0;exports.default=


NavigationHeaderTitle;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _reactNative=__webpack_require__(0);

var _NavigationAbstractPanResponder=__webpack_require__(8);var _NavigationAbstractPanResponder2=_interopRequireDefault(_NavigationAbstractPanResponder);
var _NavigationCardStackPanResponder=__webpack_require__(7);var _NavigationCardStackPanResponder2=_interopRequireDefault(_NavigationCardStackPanResponder);
var _utils=__webpack_require__(4);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var



















ANIMATION_DURATION=_NavigationCardStackPanResponder2.default.ANIMATION_DURATION,
POSITION_THRESHOLD=_NavigationCardStackPanResponder2.default.POSITION_THRESHOLD,
RESPOND_THRESHOLD=_NavigationCardStackPanResponder2.default.RESPOND_THRESHOLD,
Directions=_NavigationCardStackPanResponder2.default.Directions;





var DISTANCE_THRESHOLD=50;





var VELOCITY_THRESHOLD=1.5;var















NavigationPagerPanResponder=function(_NavigationAbstractPa){_inherits(NavigationPagerPanResponder,_NavigationAbstractPa);






function NavigationPagerPanResponder(
direction,
props)
{_classCallCheck(this,NavigationPagerPanResponder);var _this=_possibleConstructorReturn(this,(NavigationPagerPanResponder.__proto__||Object.getPrototypeOf(NavigationPagerPanResponder)).call(this));

_this._isResponding=false;
_this._isVertical=direction===Directions.VERTICAL;
_this._props=props;
_this._startValue=0;return _this;
}_createClass(NavigationPagerPanResponder,[{key:'onMoveShouldSetPanResponder',value:function onMoveShouldSetPanResponder(

event,gesture){
var props=this._props;

if(props.navigationState.index!==props.scene.index){
return false;
}

var layout=props.layout;
var isVertical=this._isVertical;
var axis=isVertical?'dy':'dx';
var index=props.navigationState.index;
var distance=isVertical?
layout.height.__getValue():
layout.width.__getValue();

return(
Math.abs(gesture[axis])>RESPOND_THRESHOLD&&
distance>0&&
index>=0);

}},{key:'onPanResponderGrant',value:function onPanResponderGrant()

{var _this2=this;
this._isResponding=false;
this._props.position.stopAnimation(function(value){
_this2._isResponding=true;
_this2._startValue=value;
});
}},{key:'onPanResponderMove',value:function onPanResponderMove(

event,gesture){
if(!this._isResponding){
return;
}var _props=






this._props,layout=_props.layout,navigationState=_props.navigationState,position=_props.position,scenes=_props.scenes;

var isVertical=this._isVertical;
var axis=isVertical?'dy':'dx';
var index=navigationState.index;
var distance=isVertical?
layout.height.__getValue():
layout.width.__getValue();
var currentValue=_reactNative.I18nManager.isRTL&&axis==='dx'?
this._startValue+gesture[axis]/distance:
this._startValue-gesture[axis]/distance;

var prevIndex=Math.max(
0,
index-1);


var nextIndex=Math.min(
index+1,
scenes.length-1);


var value=(0,_utils.clamp)(
prevIndex,
currentValue,
nextIndex);


position.setValue(value);
}},{key:'onPanResponderRelease',value:function onPanResponderRelease(

event,gesture){var _this3=this;
if(!this._isResponding){
return;
}

this._isResponding=false;var _props2=






this._props,navigationState=_props2.navigationState,onNavigateBack=_props2.onNavigateBack,onNavigateForward=_props2.onNavigateForward,position=_props2.position;

var isVertical=this._isVertical;
var axis=isVertical?'dy':'dx';
var velocityAxis=isVertical?'vy':'vx';
var index=navigationState.index;
var distance=_reactNative.I18nManager.isRTL&&axis==='dx'?
-gesture[axis]:
gesture[axis];
var moveSpeed=_reactNative.I18nManager.isRTL&&velocityAxis==='vx'?
-gesture[velocityAxis]:
gesture[velocityAxis];

position.stopAnimation(function(value){
_this3._reset();
if(
distance>DISTANCE_THRESHOLD||
value<=index-POSITION_THRESHOLD||
moveSpeed>VELOCITY_THRESHOLD)
{
onNavigateBack&&onNavigateBack();
return;
}

if(
distance<-DISTANCE_THRESHOLD||
value>=index+POSITION_THRESHOLD||
moveSpeed<-VELOCITY_THRESHOLD)
{
onNavigateForward&&onNavigateForward();
}
});
}},{key:'onPanResponderTerminate',value:function onPanResponderTerminate()

{
this._isResponding=false;
this._reset();
}},{key:'_reset',value:function _reset()

{
var props=this._props;
_reactNative.Animated.timing(
props.position,
{
toValue:props.navigationState.index,
duration:ANIMATION_DURATION}).

start();
}}]);return NavigationPagerPanResponder;}(_NavigationAbstractPanResponder2.default);


function createPanHandlers(
direction,
props)
{
var responder=new NavigationPagerPanResponder(direction,props);
return responder.panHandlers;
}

function forHorizontal(
props)
{
return createPanHandlers(Directions.HORIZONTAL,props);
}exports.default=

{
forHorizontal:forHorizontal};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var _reactNative=__webpack_require__(0);























function forInitial(props){var

navigationState=

props.navigationState,scene=props.scene;

var focused=navigationState.index===scene.index;
var opacity=focused?1:0;

var dir=scene.index>navigationState.index?1:-1;
var translate=focused?0:1000000*dir;
return{
opacity:opacity,
transform:[
{translateX:translate},
{translateY:translate}]};


}

function forHorizontal(props){var

layout=


props.layout,position=props.position,scene=props.scene;

if(!layout.isMeasured){
return forInitial(props);
}

var index=scene.index;
var inputRange=[index-1,index,index+1];
var width=layout.initWidth;
var outputRange=_reactNative.I18nManager.isRTL?
[-width,0,width]:
[width,0,-width];

var translateX=position.interpolate({
inputRange:inputRange,
outputRange:outputRange});


return{
opacity:1,
shadowColor:'transparent',
shadowRadius:0,
transform:[
{scale:1},
{translateX:translateX},
{translateY:0}]};


}

module.exports={
forHorizontal:forHorizontal};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);

var _NavigationAnimatedValueSubscription=__webpack_require__(19);var _NavigationAnimatedValueSubscription2=_interopRequireDefault(_NavigationAnimatedValueSubscription);
var _invariant=__webpack_require__(6);var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}







var MIN_POSITION_OFFSET=0.01;






function create(
Component)
{var

Container=function(_React$Component){_inherits(Container,_React$Component);









function Container(props,context){_classCallCheck(this,Container);var _this=_possibleConstructorReturn(this,(Container.__proto__||Object.getPrototypeOf(Container)).call(this,
props,context));
_this._pointerEvents=_this._computePointerEvents();return _this;
}_createClass(Container,[{key:'componentWillMount',value:function componentWillMount()

{
this._onPositionChange=this._onPositionChange.bind(this);
this._onComponentRef=this._onComponentRef.bind(this);
}},{key:'componentDidMount',value:function componentDidMount()

{
this._bindPosition(this.props);
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this._positionListener&&this._positionListener.remove();
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
this._bindPosition(nextProps);
}},{key:'render',value:function render()

{
this._pointerEvents=this._computePointerEvents();
return(
_react2.default.createElement(Component,_extends({},
this.props,{
pointerEvents:this._pointerEvents,
onComponentRef:this._onComponentRef})));


}},{key:'_onComponentRef',value:function _onComponentRef(

component){
this._component=component;
if(component){
(0,_invariant2.default)(
typeof component.setNativeProps==='function',
'component must implement method `setNativeProps`');

}
}},{key:'_bindPosition',value:function _bindPosition(

props){
this._positionListener&&this._positionListener.remove();
this._positionListener=new _NavigationAnimatedValueSubscription2.default(
props.position,
this._onPositionChange);

}},{key:'_onPositionChange',value:function _onPositionChange()

{
if(this._component){
var pointerEvents=this._computePointerEvents();
if(this._pointerEvents!==pointerEvents){
this._pointerEvents=pointerEvents;
this._component.setNativeProps({pointerEvents:pointerEvents});
}
}
}},{key:'_computePointerEvents',value:function _computePointerEvents()

{var _props=




this.props,navigationState=_props.navigationState,position=_props.position,scene=_props.scene;

if(scene.isStale||navigationState.index!==scene.index){

return scene.index>navigationState.index?
'box-only':
'none';
}

var offset=position.__getAnimatedValue()-navigationState.index;
if(Math.abs(offset)>MIN_POSITION_OFFSET){



return'box-only';
}

return'auto';
}}]);return Container;}(_react2.default.Component);

return Container;
}exports.default=

{
create:create};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _invariant=__webpack_require__(6);var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}














var NavigationStateUtils={




get:function get(state,key){
return state.routes.find(function(route){return route.key===key;})||null;
},





indexOf:function indexOf(state,key){
return state.routes.map(function(route){return route.key;}).indexOf(key);
},





has:function has(state,key){
return!!state.routes.some(function(route){return route.key===key;});
},






push:function push(state,route){
(0,_invariant2.default)(
NavigationStateUtils.indexOf(state,route.key)===-1,
'should not push route with duplicated key %s',
route.key);


var routes=state.routes.slice();
routes.push(route);

return _extends({},
state,{
index:routes.length-1,
routes:routes});

},






pop:function pop(state){
if(state.index<=0){

return state;
}
var routes=state.routes.slice(0,-1);
return _extends({},
state,{
index:routes.length-1,
routes:routes});

},




jumpToIndex:function jumpToIndex(state,index){
if(index===state.index){
return state;
}

(0,_invariant2.default)(!!state.routes[index],'invalid index %s to jump to',index);

return _extends({},
state,{
index:index});

},




jumpTo:function jumpTo(state,key){
var index=NavigationStateUtils.indexOf(state,key);
return NavigationStateUtils.jumpToIndex(state,index);
},




back:function back(state){
var index=state.index-1;
var route=state.routes[index];
return route?NavigationStateUtils.jumpToIndex(state,index):state;
},




forward:function forward(state){
var index=state.index+1;
var route=state.routes[index];
return route?NavigationStateUtils.jumpToIndex(state,index):state;
},






replaceAt:function replaceAt(
state,
key,
route)
{
var index=NavigationStateUtils.indexOf(state,key);
return NavigationStateUtils.replaceAtIndex(state,index,route);
},






replaceAtIndex:function replaceAtIndex(
state,
index,
route)
{
(0,_invariant2.default)(
!!state.routes[index],
'invalid index %s for replacing route %s',
index,
route.key);


if(state.routes[index]===route){
return state;
}

var routes=state.routes.slice();
routes[index]=route;

return _extends({},
state,{
index:index,
routes:routes});

},






reset:function reset(
state,
routes,
index)
{
(0,_invariant2.default)(
routes.length&&Array.isArray(routes),
'invalid routes to replace');


var nextIndex=index===undefined?routes.length-1:index;

if(state.routes.length===routes.length&&state.index===nextIndex){
var compare=function compare(route,ii){return routes[ii]===route;};
if(state.routes.every(compare)){
return state;
}
}

(0,_invariant2.default)(!!routes[nextIndex],'invalid index %s to reset',nextIndex);

return _extends({},
state,{
index:nextIndex,
routes:routes});

}};exports.default=


NavigationStateUtils;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _invariant=__webpack_require__(6);var _invariant2=_interopRequireDefault(_invariant);
var _shallowEqual=__webpack_require__(14);var _shallowEqual2=_interopRequireDefault(_shallowEqual);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}







var SCENE_KEY_PREFIX='scene_';




function compareKey(one,two){
var delta=one.length-two.length;
if(delta>0){
return 1;
}
if(delta<0){
return-1;
}
return one>two?1:-1;
}




function compareScenes(
one,
two)
{
if(one.index>two.index){
return 1;
}
if(one.index<two.index){
return-1;
}

return compareKey(
one.key,
two.key);

}




function areScenesShallowEqual(
one,
two)
{
return(
one.key===two.key&&
one.index===two.index&&
one.isStale===two.isStale&&
one.isActive===two.isActive&&
areRoutesShallowEqual(one.route,two.route));

}




function areRoutesShallowEqual(
one,
two)
{
if(!one||!two){
return one===two;
}

if(one.key!==two.key){
return false;
}

return(0,_shallowEqual2.default)(one,two);
}

function NavigationScenesReducer(
scenes,
nextState,
prevState)
{
if(prevState===nextState){
return scenes;
}

var prevScenes=new Map();
var freshScenes=new Map();
var staleScenes=new Map();


scenes.forEach(function(scene){var
key=scene.key;
if(scene.isStale){
staleScenes.set(key,scene);
}
prevScenes.set(key,scene);
});

var nextKeys=new Set();
nextState.routes.forEach(function(route,index){
var key=SCENE_KEY_PREFIX+route.key;
var scene={
index:index,
isActive:false,
isStale:false,
key:key,
route:route};

(0,_invariant2.default)(
!nextKeys.has(key),
'navigationState.routes['+index+'].key "'+key+'" conflicts with '+
'another route!');

nextKeys.add(key);

if(staleScenes.has(key)){


staleScenes.delete(key);
}
freshScenes.set(key,scene);
});

if(prevState){

prevState.routes.forEach(function(route,index){
var key=SCENE_KEY_PREFIX+route.key;
if(freshScenes.has(key)){
return;
}
staleScenes.set(key,{
index:index,
isActive:false,
isStale:true,
key:key,
route:route});

});
}

var nextScenes=[];

var mergeScene=function mergeScene(nextScene){var
key=nextScene.key;
var prevScene=prevScenes.has(key)?prevScenes.get(key):null;
if(prevScene&&areScenesShallowEqual(prevScene,nextScene)){


nextScenes.push(prevScene);
}else{
nextScenes.push(nextScene);
}
};

staleScenes.forEach(mergeScene);
freshScenes.forEach(mergeScene);

nextScenes.sort(compareScenes);

var activeScenesCount=0;
nextScenes.forEach(function(scene,ii){
var isActive=!scene.isStale&&scene.index===nextState.index;
if(isActive!==scene.isActive){
nextScenes[ii]=_extends({},
scene,{
isActive:isActive});

}
if(isActive){
activeScenesCount++;
}
});

(0,_invariant2.default)(
activeScenesCount===1,
'there should always be only one scene active, not %s.',
activeScenesCount);


if(nextScenes.length!==scenes.length){
return nextScenes;
}

if(nextScenes.some(
function(scene,index){return!areScenesShallowEqual(scenes[index],scene);}))
{
return nextScenes;
}


return scenes;
}exports.default=

NavigationScenesReducer;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.Input=exports.Button=exports.RippleEffect=exports.ResponsibleTouchArea=undefined;var _NavigationExperimental=__webpack_require__(21);Object.keys(_NavigationExperimental).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _NavigationExperimental[key];}});});
var _ResponsibleTouchArea=__webpack_require__(12);var _ResponsibleTouchArea2=_interopRequireDefault(_ResponsibleTouchArea);
var _RippleEffect=__webpack_require__(13);var _RippleEffect2=_interopRequireDefault(_RippleEffect);
var _Button=__webpack_require__(17);var _Button2=_interopRequireDefault(_Button);
var _Input=__webpack_require__(18);var _Input2=_interopRequireDefault(_Input);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var ResponsibleTouchArea=exports.ResponsibleTouchArea=_ResponsibleTouchArea2.default;
var RippleEffect=exports.RippleEffect=_RippleEffect2.default;
var Button=exports.Button=_Button2.default;
var Input=exports.Input=_Input2.default;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.utils=undefined;var _index=__webpack_require__(31);Object.keys(_index).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _index[key];}});});

var _utils=__webpack_require__(4);var utilsImport=_interopRequireWildcard(_utils);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}
var utils=exports.utils=utilsImport;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.colors=undefined;var _tinycolor=__webpack_require__(15);var _tinycolor2=_interopRequireDefault(_tinycolor);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var main='#F0871A';
var lighterMain=(0,_tinycolor2.default)(main).lighten(15).toHexString();
var darkerMain=(0,_tinycolor2.default)(main).darken(10).toHexString();

var colors=exports.colors={
main:main,
darkerMain:darkerMain,
lighterMain:lighterMain,
danger:'#ff8142',
blue:'#2196F3',
orange:'#FF9800',
green:'#8daf7e',
text:'#444444'};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});exports.debounce=debounce;exports.










instantInterval=instantInterval;exports.








minGuard=minGuard;exports.



maxGuard=maxGuard;exports.



clamp=clamp;function debounce(duration,fn){var timeout=void 0;return function(){var _this=this,_arguments=arguments;clearTimeout(timeout);timeout=setTimeout(function(){timeout=null;fn.apply(_this,_arguments);},duration);};}function instantInterval(func,interval){var trigger=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;if(trigger)func.call(this);return setInterval(func,interval);}function minGuard(value){var gap=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;return value<gap?gap:value;}function maxGuard(value,gap){return value>gap?gap:value;}function clamp(value,min,max){
return min<max?
value<min?min:value>max?max:value:
value<max?max:value>min?min:value;
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";












var shallowCompare=__webpack_require__(36);



























var ReactComponentWithPureRenderMixin={
shouldComponentUpdate:function shouldComponentUpdate(nextProps,nextState){
return shallowCompare(this,nextProps,nextState);
}};


module.exports=ReactComponentWithPureRenderMixin;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";












var shallowEqual=__webpack_require__(14);






function shallowCompare(instance,nextProps,nextState){
return!shallowEqual(instance.props,nextProps)||!shallowEqual(instance.state,nextState);
}

module.exports=shallowCompare;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);






var _reactUniversalUi=__webpack_require__(32);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
isIos=_reactUniversalUi.utils.isIos,isAndroid=_reactUniversalUi.utils.isAndroid;var

app=function(_Component){_inherits(app,_Component);function app(){_classCallCheck(this,app);return _possibleConstructorReturn(this,(app.__proto__||Object.getPrototypeOf(app)).apply(this,arguments));}_createClass(app,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.Text,{style:styles.welcome},'Welcome to React Native!'),


_react2.default.createElement(_reactNative.Text,{style:styles.instructions},'To get started, edit src/app.js'),


_react2.default.createElement(_reactNative.Text,{style:styles.instructions},'Press Cmd+R to reload,',
'\n','Cmd+D or shake for dev menu'),


_react2.default.createElement(_reactUniversalUi.Button,{
wrapperStyle:{backgroundColor:'#00bcd4',width:120},
title:'Click me!!',onPress:function onPress(){return console.log("Yay!");}})));


}}]);return app;}(_react.Component);exports.default=app;


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#F5FCFF'},

welcome:{
fontSize:20,
textAlign:'center',
margin:10},

instructions:{
textAlign:'center',
color:'#333333',
marginBottom:5}});



if(isIos){
_reactNative.StatusBar.setBarStyle('light-content',true);
}else if(isAndroid){
_reactNative.StatusBar.setBackgroundColor('transparent');
_reactNative.StatusBar.setTranslucent(true);
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "back-icon.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(396);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(399);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ })
/******/ ]);