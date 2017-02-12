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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 251);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(251);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});


var _GraphQLError=__webpack_require__(25);

Object.defineProperty(exports,'GraphQLError',{
enumerable:true,
get:function get(){
return _GraphQLError.GraphQLError;
}});


var _syntaxError=__webpack_require__(123);

Object.defineProperty(exports,'syntaxError',{
enumerable:true,
get:function get(){
return _syntaxError.syntaxError;
}});


var _locatedError=__webpack_require__(122);

Object.defineProperty(exports,'locatedError',{
enumerable:true,
get:function get(){
return _locatedError.locatedError;
}});


var _formatError=__webpack_require__(121);

Object.defineProperty(exports,'formatError',{
enumerable:true,
get:function get(){
return _formatError.formatError;
}});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.GraphQLNonNull=exports.GraphQLList=exports.GraphQLInputObjectType=exports.GraphQLEnumType=exports.GraphQLUnionType=exports.GraphQLInterfaceType=exports.GraphQLObjectType=exports.GraphQLScalarType=undefined;

var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

exports.isType=isType;
exports.assertType=assertType;
exports.isInputType=isInputType;
exports.assertInputType=assertInputType;
exports.isOutputType=isOutputType;
exports.assertOutputType=assertOutputType;
exports.isLeafType=isLeafType;
exports.assertLeafType=assertLeafType;
exports.isCompositeType=isCompositeType;
exports.assertCompositeType=assertCompositeType;
exports.isAbstractType=isAbstractType;
exports.assertAbstractType=assertAbstractType;
exports.getNullableType=getNullableType;
exports.isNamedType=isNamedType;
exports.assertNamedType=assertNamedType;
exports.getNamedType=getNamedType;

var _invariant=__webpack_require__(7);

var _invariant2=_interopRequireDefault(_invariant);

var _isNullish=__webpack_require__(12);

var _isNullish2=_interopRequireDefault(_isNullish);

var _kinds=__webpack_require__(6);

var _assertValidName=__webpack_require__(50);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}














function isType(type){
return type instanceof GraphQLScalarType||type instanceof GraphQLObjectType||type instanceof GraphQLInterfaceType||type instanceof GraphQLUnionType||type instanceof GraphQLEnumType||type instanceof GraphQLInputObjectType||type instanceof GraphQLList||type instanceof GraphQLNonNull;
}

function assertType(type){
(0,_invariant2.default)(isType(type),'Expected '+String(type)+' to be a GraphQL type.');
return type;
}




function isInputType(type){
var namedType=getNamedType(type);
return namedType instanceof GraphQLScalarType||namedType instanceof GraphQLEnumType||namedType instanceof GraphQLInputObjectType;
}

function assertInputType(type){
(0,_invariant2.default)(isInputType(type),'Expected '+String(type)+' to be a GraphQL input type.');
return type;
}




function isOutputType(type){
var namedType=getNamedType(type);
return namedType instanceof GraphQLScalarType||namedType instanceof GraphQLObjectType||namedType instanceof GraphQLInterfaceType||namedType instanceof GraphQLUnionType||namedType instanceof GraphQLEnumType;
}

function assertOutputType(type){
(0,_invariant2.default)(isOutputType(type),'Expected '+String(type)+' to be a GraphQL output type.');
return type;
}




function isLeafType(type){
var namedType=getNamedType(type);
return namedType instanceof GraphQLScalarType||namedType instanceof GraphQLEnumType;
}

function assertLeafType(type){
(0,_invariant2.default)(isLeafType(type),'Expected '+String(type)+' to be a GraphQL leaf type.');
return type;
}




function isCompositeType(type){
return type instanceof GraphQLObjectType||type instanceof GraphQLInterfaceType||type instanceof GraphQLUnionType;
}

function assertCompositeType(type){
(0,_invariant2.default)(isCompositeType(type),'Expected '+String(type)+' to be a GraphQL composite type.');
return type;
}




function isAbstractType(type){
return type instanceof GraphQLInterfaceType||type instanceof GraphQLUnionType;
}

function assertAbstractType(type){
(0,_invariant2.default)(isAbstractType(type),'Expected '+String(type)+' to be a GraphQL abstract type.');
return type;
}




function getNullableType(type){
return type instanceof GraphQLNonNull?type.ofType:type;
}




function isNamedType(type){
return type instanceof GraphQLScalarType||type instanceof GraphQLObjectType||type instanceof GraphQLInterfaceType||type instanceof GraphQLUnionType||type instanceof GraphQLEnumType||type instanceof GraphQLInputObjectType;
}

function assertNamedType(type){
(0,_invariant2.default)(isNamedType(type),'Expected '+String(type)+' to be a GraphQL named type.');
return type;
}

function getNamedType(type){
var unmodifiedType=type;
while(unmodifiedType instanceof GraphQLList||unmodifiedType instanceof GraphQLNonNull){
unmodifiedType=unmodifiedType.ofType;
}
return unmodifiedType;
}







function resolveThunk(thunk){
return typeof thunk==='function'?thunk():thunk;
}



















var GraphQLScalarType=exports.GraphQLScalarType=function(){
function GraphQLScalarType(config){
_classCallCheck(this,GraphQLScalarType);

(0,_assertValidName.assertValidName)(config.name);
this.name=config.name;
this.description=config.description;
(0,_invariant2.default)(typeof config.serialize==='function',this.name+' must provide "serialize" function. If this custom Scalar '+'is also used as an input type, ensure "parseValue" and "parseLiteral" '+'functions are also provided.');
if(config.parseValue||config.parseLiteral){
(0,_invariant2.default)(typeof config.parseValue==='function'&&typeof config.parseLiteral==='function',this.name+' must provide both "parseValue" and "parseLiteral" '+'functions.');
}
this._scalarConfig=config;
}




GraphQLScalarType.prototype.serialize=function serialize(value){
var serializer=this._scalarConfig.serialize;
return serializer(value);
};




GraphQLScalarType.prototype.parseValue=function parseValue(value){
var parser=this._scalarConfig.parseValue;
return parser?parser(value):null;
};




GraphQLScalarType.prototype.parseLiteral=function parseLiteral(valueNode){
var parser=this._scalarConfig.parseLiteral;
return parser?parser(valueNode):null;
};

GraphQLScalarType.prototype.toString=function toString(){
return this.name;
};

return GraphQLScalarType;
}();




GraphQLScalarType.prototype.toJSON=GraphQLScalarType.prototype.inspect=GraphQLScalarType.prototype.toString;






































var GraphQLObjectType=exports.GraphQLObjectType=function(){
function GraphQLObjectType(config){
_classCallCheck(this,GraphQLObjectType);

(0,_assertValidName.assertValidName)(config.name,config.isIntrospection);
this.name=config.name;
this.description=config.description;
if(config.isTypeOf){
(0,_invariant2.default)(typeof config.isTypeOf==='function',this.name+' must provide "isTypeOf" as a function.');
}
this.isTypeOf=config.isTypeOf;
this._typeConfig=config;
}

GraphQLObjectType.prototype.getFields=function getFields(){
return this._fields||(this._fields=defineFieldMap(this,this._typeConfig.fields));
};

GraphQLObjectType.prototype.getInterfaces=function getInterfaces(){
return this._interfaces||(this._interfaces=defineInterfaces(this,this._typeConfig.interfaces));
};

GraphQLObjectType.prototype.toString=function toString(){
return this.name;
};

return GraphQLObjectType;
}();




GraphQLObjectType.prototype.toJSON=GraphQLObjectType.prototype.inspect=GraphQLObjectType.prototype.toString;

function defineInterfaces(type,interfacesThunk){
var interfaces=resolveThunk(interfacesThunk);
if(!interfaces){
return[];
}
(0,_invariant2.default)(Array.isArray(interfaces),type.name+' interfaces must be an Array or a function which returns '+'an Array.');
interfaces.forEach(function(iface){
(0,_invariant2.default)(iface instanceof GraphQLInterfaceType,type.name+' may only implement Interface types, it cannot '+('implement: '+String(iface)+'.'));
if(typeof iface.resolveType!=='function'){
(0,_invariant2.default)(typeof type.isTypeOf==='function','Interface Type '+iface.name+' does not provide a "resolveType" '+('function and implementing Type '+type.name+' does not provide a ')+'"isTypeOf" function. There is no way to resolve this implementing '+'type during execution.');
}
});
return interfaces;
}

function defineFieldMap(type,fieldsThunk){
var fieldMap=resolveThunk(fieldsThunk);
(0,_invariant2.default)(isPlainObj(fieldMap),type.name+' fields must be an object with field names as keys or a '+'function which returns such an object.');

var fieldNames=Object.keys(fieldMap);
(0,_invariant2.default)(fieldNames.length>0,type.name+' fields must be an object with field names as keys or a '+'function which returns such an object.');

var resultFieldMap={};
fieldNames.forEach(function(fieldName){
(0,_assertValidName.assertValidName)(fieldName);
var fieldConfig=fieldMap[fieldName];
(0,_invariant2.default)(!fieldConfig.hasOwnProperty('isDeprecated'),type.name+'.'+fieldName+' should provide "deprecationReason" instead '+'of "isDeprecated".');
var field=_extends({},fieldConfig,{
isDeprecated:Boolean(fieldConfig.deprecationReason),
name:fieldName});

(0,_invariant2.default)(isOutputType(field.type),type.name+'.'+fieldName+' field type must be Output Type but '+('got: '+String(field.type)+'.'));
(0,_invariant2.default)(isValidResolver(field.resolve),type.name+'.'+fieldName+' field resolver must be a function if '+('provided, but got: '+String(field.resolve)+'.'));
var argsConfig=fieldConfig.args;
if(!argsConfig){
field.args=[];
}else{
(0,_invariant2.default)(isPlainObj(argsConfig),type.name+'.'+fieldName+' args must be an object with argument '+'names as keys.');
field.args=Object.keys(argsConfig).map(function(argName){
(0,_assertValidName.assertValidName)(argName);
var arg=argsConfig[argName];
(0,_invariant2.default)(isInputType(arg.type),type.name+'.'+fieldName+'('+argName+':) argument type must be '+('Input Type but got: '+String(arg.type)+'.'));
return{
name:argName,
description:arg.description===undefined?null:arg.description,
type:arg.type,
defaultValue:arg.defaultValue};

});
}
resultFieldMap[fieldName]=field;
});
return resultFieldMap;
}

function isPlainObj(obj){
return obj&&typeof obj==='object'&&!Array.isArray(obj);
}


function isValidResolver(resolver){
return resolver==null||typeof resolver==='function';
}



















var GraphQLInterfaceType=exports.GraphQLInterfaceType=function(){
function GraphQLInterfaceType(config){
_classCallCheck(this,GraphQLInterfaceType);

(0,_assertValidName.assertValidName)(config.name);
this.name=config.name;
this.description=config.description;
if(config.resolveType){
(0,_invariant2.default)(typeof config.resolveType==='function',this.name+' must provide "resolveType" as a function.');
}
this.resolveType=config.resolveType;
this._typeConfig=config;
}

GraphQLInterfaceType.prototype.getFields=function getFields(){
return this._fields||(this._fields=defineFieldMap(this,this._typeConfig.fields));
};

GraphQLInterfaceType.prototype.toString=function toString(){
return this.name;
};

return GraphQLInterfaceType;
}();




GraphQLInterfaceType.prototype.toJSON=GraphQLInterfaceType.prototype.inspect=GraphQLInterfaceType.prototype.toString;
























var GraphQLUnionType=exports.GraphQLUnionType=function(){
function GraphQLUnionType(config){
_classCallCheck(this,GraphQLUnionType);

(0,_assertValidName.assertValidName)(config.name);
this.name=config.name;
this.description=config.description;
if(config.resolveType){
(0,_invariant2.default)(typeof config.resolveType==='function',this.name+' must provide "resolveType" as a function.');
}
this.resolveType=config.resolveType;
this._typeConfig=config;
}

GraphQLUnionType.prototype.getTypes=function getTypes(){
return this._types||(this._types=defineTypes(this,this._typeConfig.types));
};

GraphQLUnionType.prototype.toString=function toString(){
return this.name;
};

return GraphQLUnionType;
}();




GraphQLUnionType.prototype.toJSON=GraphQLUnionType.prototype.inspect=GraphQLUnionType.prototype.toString;

function defineTypes(unionType,typesThunk){
var types=resolveThunk(typesThunk);

(0,_invariant2.default)(Array.isArray(types)&&types.length>0,'Must provide Array of types or a function which returns '+('such an array for Union '+unionType.name+'.'));
types.forEach(function(objType){
(0,_invariant2.default)(objType instanceof GraphQLObjectType,unionType.name+' may only contain Object types, it cannot contain: '+(String(objType)+'.'));
if(typeof unionType.resolveType!=='function'){
(0,_invariant2.default)(typeof objType.isTypeOf==='function','Union type "'+unionType.name+'" does not provide a "resolveType" '+('function and possible type "'+objType.name+'" does not provide an ')+'"isTypeOf" function. There is no way to resolve this possible type '+'during execution.');
}
});

return types;
}






















var GraphQLEnumType=exports.GraphQLEnumType=function(){
function GraphQLEnumType(config){
_classCallCheck(this,GraphQLEnumType);

this.name=config.name;
(0,_assertValidName.assertValidName)(config.name,config.isIntrospection);
this.description=config.description;
this._values=defineEnumValues(this,config.values);
this._enumConfig=config;
}

GraphQLEnumType.prototype.getValues=function getValues(){
return this._values;
};

GraphQLEnumType.prototype.getValue=function getValue(name){
return this._getNameLookup()[name];
};

GraphQLEnumType.prototype.serialize=function serialize(value){
var enumValue=this._getValueLookup().get(value);
return enumValue?enumValue.name:null;
};

GraphQLEnumType.prototype.parseValue=function parseValue(value){
if(typeof value==='string'){
var enumValue=this._getNameLookup()[value];
if(enumValue){
return enumValue.value;
}
}
};

GraphQLEnumType.prototype.parseLiteral=function parseLiteral(valueNode){
if(valueNode.kind===_kinds.ENUM){
var enumValue=this._getNameLookup()[valueNode.value];
if(enumValue){
return enumValue.value;
}
}
};

GraphQLEnumType.prototype._getValueLookup=function _getValueLookup(){
var _this=this;

if(!this._valueLookup){
(function(){
var lookup=new Map();
_this.getValues().forEach(function(value){
lookup.set(value.value,value);
});
_this._valueLookup=lookup;
})();
}
return this._valueLookup;
};

GraphQLEnumType.prototype._getNameLookup=function _getNameLookup(){
var _this2=this;

if(!this._nameLookup){
(function(){
var lookup=Object.create(null);
_this2.getValues().forEach(function(value){
lookup[value.name]=value;
});
_this2._nameLookup=lookup;
})();
}
return this._nameLookup;
};

GraphQLEnumType.prototype.toString=function toString(){
return this.name;
};

return GraphQLEnumType;
}();




GraphQLEnumType.prototype.toJSON=GraphQLEnumType.prototype.inspect=GraphQLEnumType.prototype.toString;

function defineEnumValues(type,valueMap)
{
(0,_invariant2.default)(isPlainObj(valueMap),type.name+' values must be an object with value names as keys.');
var valueNames=Object.keys(valueMap);
(0,_invariant2.default)(valueNames.length>0,type.name+' values must be an object with value names as keys.');
return valueNames.map(function(valueName){
(0,_assertValidName.assertValidName)(valueName);
var value=valueMap[valueName];
(0,_invariant2.default)(isPlainObj(value),type.name+'.'+valueName+' must refer to an object with a "value" key '+('representing an internal value but got: '+String(value)+'.'));
(0,_invariant2.default)(!value.hasOwnProperty('isDeprecated'),type.name+'.'+valueName+' should provide "deprecationReason" instead '+'of "isDeprecated".');
return{
name:valueName,
description:value.description,
isDeprecated:Boolean(value.deprecationReason),
deprecationReason:value.deprecationReason,
value:(0,_isNullish2.default)(value.value)?valueName:value.value};

});
}






















var GraphQLInputObjectType=exports.GraphQLInputObjectType=function(){
function GraphQLInputObjectType(config){
_classCallCheck(this,GraphQLInputObjectType);

(0,_assertValidName.assertValidName)(config.name);
this.name=config.name;
this.description=config.description;
this._typeConfig=config;
}

GraphQLInputObjectType.prototype.getFields=function getFields(){
return this._fields||(this._fields=this._defineFieldMap());
};

GraphQLInputObjectType.prototype._defineFieldMap=function _defineFieldMap(){
var _this3=this;

var fieldMap=resolveThunk(this._typeConfig.fields);
(0,_invariant2.default)(isPlainObj(fieldMap),this.name+' fields must be an object with field names as keys or a '+'function which returns such an object.');
var fieldNames=Object.keys(fieldMap);
(0,_invariant2.default)(fieldNames.length>0,this.name+' fields must be an object with field names as keys or a '+'function which returns such an object.');
var resultFieldMap={};
fieldNames.forEach(function(fieldName){
(0,_assertValidName.assertValidName)(fieldName);
var field=_extends({},fieldMap[fieldName],{
name:fieldName});

(0,_invariant2.default)(isInputType(field.type),_this3.name+'.'+fieldName+' field type must be Input Type but '+('got: '+String(field.type)+'.'));
(0,_invariant2.default)(field.resolve==null,_this3.name+'.'+fieldName+' field type has a resolve property, but '+'Input Types cannot define resolvers.');
resultFieldMap[fieldName]=field;
});
return resultFieldMap;
};

GraphQLInputObjectType.prototype.toString=function toString(){
return this.name;
};

return GraphQLInputObjectType;
}();




GraphQLInputObjectType.prototype.toJSON=GraphQLInputObjectType.prototype.inspect=GraphQLInputObjectType.prototype.toString;



















var GraphQLList=exports.GraphQLList=function(){
function GraphQLList(type){
_classCallCheck(this,GraphQLList);

(0,_invariant2.default)(isType(type),'Can only create List of a GraphQLType but got: '+String(type)+'.');
this.ofType=type;
}

GraphQLList.prototype.toString=function toString(){
return'['+String(this.ofType)+']';
};

return GraphQLList;
}();




GraphQLList.prototype.toJSON=GraphQLList.prototype.inspect=GraphQLList.prototype.toString;






















var GraphQLNonNull=exports.GraphQLNonNull=function(){
function GraphQLNonNull(type){
_classCallCheck(this,GraphQLNonNull);

(0,_invariant2.default)(isType(type)&&!(type instanceof GraphQLNonNull),'Can only create NonNull of a Nullable GraphQLType but got: '+(String(type)+'.'));
this.ofType=type;
}

GraphQLNonNull.prototype.toString=function toString(){
return this.ofType.toString()+'!';
};

return GraphQLNonNull;
}();




GraphQLNonNull.prototype.toJSON=GraphQLNonNull.prototype.inspect=GraphQLNonNull.prototype.toString;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(0);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {










(function(global,factory){
 true?module.exports=factory():
typeof define==='function'&&define.amd?define(factory):
global.CodeMirror=factory();
})(this,function(){'use strict';



var userAgent=navigator.userAgent;
var platform=navigator.platform;

var gecko=/gecko\/\d/i.test(userAgent);
var ie_upto10=/MSIE \d/.test(userAgent);
var ie_11up=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
var ie=ie_upto10||ie_11up;
var ie_version=ie&&(ie_upto10?document.documentMode||6:ie_11up[1]);
var webkit=/WebKit\//.test(userAgent);
var qtwebkit=webkit&&/Qt\/\d+\.\d+/.test(userAgent);
var chrome=/Chrome\//.test(userAgent);
var presto=/Opera\//.test(userAgent);
var safari=/Apple Computer/.test(navigator.vendor);
var mac_geMountainLion=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
var phantom=/PhantomJS/.test(userAgent);

var ios=/AppleWebKit/.test(userAgent)&&/Mobile\/\w+/.test(userAgent);

var mobile=ios||/Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
var mac=ios||/Mac/.test(platform);
var chromeOS=/\bCrOS\b/.test(userAgent);
var windows=/win/i.test(platform);

var presto_version=presto&&userAgent.match(/Version\/(\d*\.\d*)/);
if(presto_version){presto_version=Number(presto_version[1]);}
if(presto_version&&presto_version>=15){presto=false;webkit=true;}

var flipCtrlCmd=mac&&(qtwebkit||presto&&(presto_version==null||presto_version<12.11));
var captureRightClick=gecko||ie&&ie_version>=9;

function classTest(cls){return new RegExp("(^|\\s)"+cls+"(?:$|\\s)\\s*");}

var rmClass=function rmClass(node,cls){
var current=node.className;
var match=classTest(cls).exec(current);
if(match){
var after=current.slice(match.index+match[0].length);
node.className=current.slice(0,match.index)+(after?match[1]+after:"");
}
};

function removeChildren(e){
for(var count=e.childNodes.length;count>0;--count)
{e.removeChild(e.firstChild);}
return e;
}

function removeChildrenAndAdd(parent,e){
return removeChildren(parent).appendChild(e);
}

function elt(tag,content,className,style){
var e=document.createElement(tag);
if(className){e.className=className;}
if(style){e.style.cssText=style;}
if(typeof content=="string"){e.appendChild(document.createTextNode(content));}else
if(content){for(var i=0;i<content.length;++i){e.appendChild(content[i]);}}
return e;
}

var range;
if(document.createRange){range=function range(node,start,end,endNode){
var r=document.createRange();
r.setEnd(endNode||node,end);
r.setStart(node,start);
return r;
};}else
{range=function range(node,start,end){
var r=document.body.createTextRange();
try{r.moveToElementText(node.parentNode);}
catch(e){return r;}
r.collapse(true);
r.moveEnd("character",end);
r.moveStart("character",start);
return r;
};}

function contains(parent,child){
if(child.nodeType==3)
{child=child.parentNode;}
if(parent.contains)
{return parent.contains(child);}
do{
if(child.nodeType==11){child=child.host;}
if(child==parent){return true;}
}while(child=child.parentNode);
}

function activeElt(){



var activeElement;
try{
activeElement=document.activeElement;
}catch(e){
activeElement=document.body||null;
}
while(activeElement&&activeElement.root&&activeElement.root.activeElement)
{activeElement=activeElement.root.activeElement;}
return activeElement;
}

function addClass(node,cls){
var current=node.className;
if(!classTest(cls).test(current)){node.className+=(current?" ":"")+cls;}
}
function joinClasses(a,b){
var as=a.split(" ");
for(var i=0;i<as.length;i++)
{if(as[i]&&!classTest(as[i]).test(b)){b+=" "+as[i];}}
return b;
}

var selectInput=function selectInput(node){node.select();};
if(ios)
{selectInput=function selectInput(node){node.selectionStart=0;node.selectionEnd=node.value.length;};}else
if(ie)
{selectInput=function selectInput(node){try{node.select();}catch(_e){}};}

function bind(f){
var args=Array.prototype.slice.call(arguments,1);
return function(){return f.apply(null,args);};
}

function copyObj(obj,target,overwrite){
if(!target){target={};}
for(var prop in obj)
{if(obj.hasOwnProperty(prop)&&(overwrite!==false||!target.hasOwnProperty(prop)))
{target[prop]=obj[prop];}}
return target;
}



function countColumn(string,end,tabSize,startIndex,startValue){
if(end==null){
end=string.search(/[^\s\u00a0]/);
if(end==-1){end=string.length;}
}
for(var i=startIndex||0,n=startValue||0;;){
var nextTab=string.indexOf("\t",i);
if(nextTab<0||nextTab>=end)
{return n+(end-i);}
n+=nextTab-i;
n+=tabSize-n%tabSize;
i=nextTab+1;
}
}

function Delayed(){this.id=null;}
Delayed.prototype.set=function(ms,f){
clearTimeout(this.id);
this.id=setTimeout(f,ms);
};

function indexOf(array,elt){
for(var i=0;i<array.length;++i)
{if(array[i]==elt){return i;}}
return-1;
}


var scrollerGap=30;



var Pass={toString:function toString(){return"CodeMirror.Pass";}};


var sel_dontScroll={scroll:false};
var sel_mouse={origin:"*mouse"};
var sel_move={origin:"+move"};


function findColumn(string,goal,tabSize){
for(var pos=0,col=0;;){
var nextTab=string.indexOf("\t",pos);
if(nextTab==-1){nextTab=string.length;}
var skipped=nextTab-pos;
if(nextTab==string.length||col+skipped>=goal)
{return pos+Math.min(skipped,goal-col);}
col+=nextTab-pos;
col+=tabSize-col%tabSize;
pos=nextTab+1;
if(col>=goal){return pos;}
}
}

var spaceStrs=[""];
function spaceStr(n){
while(spaceStrs.length<=n)
{spaceStrs.push(lst(spaceStrs)+" ");}
return spaceStrs[n];
}

function lst(arr){return arr[arr.length-1];}

function map(array,f){
var out=[];
for(var i=0;i<array.length;i++){out[i]=f(array[i],i);}
return out;
}

function insertSorted(array,value,score){
var pos=0,priority=score(value);
while(pos<array.length&&score(array[pos])<=priority){pos++;}
array.splice(pos,0,value);
}

function nothing(){}

function createObj(base,props){
var inst;
if(Object.create){
inst=Object.create(base);
}else{
nothing.prototype=base;
inst=new nothing();
}
if(props){copyObj(props,inst);}
return inst;
}

var nonASCIISingleCaseWordChar=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
function isWordCharBasic(ch){
return /\w/.test(ch)||ch>"\x80"&&(
ch.toUpperCase()!=ch.toLowerCase()||nonASCIISingleCaseWordChar.test(ch));
}
function isWordChar(ch,helper){
if(!helper){return isWordCharBasic(ch);}
if(helper.source.indexOf("\\w")>-1&&isWordCharBasic(ch)){return true;}
return helper.test(ch);
}

function isEmpty(obj){
for(var n in obj){if(obj.hasOwnProperty(n)&&obj[n]){return false;}}
return true;
}






var extendingChars=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
function isExtendingChar(ch){return ch.charCodeAt(0)>=768&&extendingChars.test(ch);}





function Display(place,doc,input){
var d=this;
this.input=input;


d.scrollbarFiller=elt("div",null,"CodeMirror-scrollbar-filler");
d.scrollbarFiller.setAttribute("cm-not-content","true");


d.gutterFiller=elt("div",null,"CodeMirror-gutter-filler");
d.gutterFiller.setAttribute("cm-not-content","true");

d.lineDiv=elt("div",null,"CodeMirror-code");

d.selectionDiv=elt("div",null,null,"position: relative; z-index: 1");
d.cursorDiv=elt("div",null,"CodeMirror-cursors");

d.measure=elt("div",null,"CodeMirror-measure");

d.lineMeasure=elt("div",null,"CodeMirror-measure");

d.lineSpace=elt("div",[d.measure,d.lineMeasure,d.selectionDiv,d.cursorDiv,d.lineDiv],
null,"position: relative; outline: none");

d.mover=elt("div",[elt("div",[d.lineSpace],"CodeMirror-lines")],null,"position: relative");

d.sizer=elt("div",[d.mover],"CodeMirror-sizer");
d.sizerWidth=null;



d.heightForcer=elt("div",null,null,"position: absolute; height: "+scrollerGap+"px; width: 1px;");

d.gutters=elt("div",null,"CodeMirror-gutters");
d.lineGutter=null;

d.scroller=elt("div",[d.sizer,d.heightForcer,d.gutters],"CodeMirror-scroll");
d.scroller.setAttribute("tabIndex","-1");

d.wrapper=elt("div",[d.scrollbarFiller,d.gutterFiller,d.scroller],"CodeMirror");


if(ie&&ie_version<8){d.gutters.style.zIndex=-1;d.scroller.style.paddingRight=0;}
if(!webkit&&!(gecko&&mobile)){d.scroller.draggable=true;}

if(place){
if(place.appendChild){place.appendChild(d.wrapper);}else
{place(d.wrapper);}
}


d.viewFrom=d.viewTo=doc.first;
d.reportedViewFrom=d.reportedViewTo=doc.first;

d.view=[];
d.renderedView=null;


d.externalMeasured=null;

d.viewOffset=0;
d.lastWrapHeight=d.lastWrapWidth=0;
d.updateLineNumbers=null;

d.nativeBarWidth=d.barHeight=d.barWidth=0;
d.scrollbarsClipped=false;



d.lineNumWidth=d.lineNumInnerWidth=d.lineNumChars=null;



d.alignWidgets=false;

d.cachedCharWidth=d.cachedTextHeight=d.cachedPaddingH=null;



d.maxLine=null;
d.maxLineLength=0;
d.maxLineChanged=false;


d.wheelDX=d.wheelDY=d.wheelStartX=d.wheelStartY=null;


d.shift=false;



d.selForContextMenu=null;

d.activeTouch=null;

input.init(d);
}


function getLine(doc,n){
n-=doc.first;
if(n<0||n>=doc.size){throw new Error("There is no line "+(n+doc.first)+" in the document.");}
var chunk=doc;
while(!chunk.lines){
for(var i=0;;++i){
var child=chunk.children[i],sz=child.chunkSize();
if(n<sz){chunk=child;break;}
n-=sz;
}
}
return chunk.lines[n];
}



function getBetween(doc,start,end){
var out=[],n=start.line;
doc.iter(start.line,end.line+1,function(line){
var text=line.text;
if(n==end.line){text=text.slice(0,end.ch);}
if(n==start.line){text=text.slice(start.ch);}
out.push(text);
++n;
});
return out;
}

function getLines(doc,from,to){
var out=[];
doc.iter(from,to,function(line){out.push(line.text);});
return out;
}



function updateLineHeight(line,height){
var diff=height-line.height;
if(diff){for(var n=line;n;n=n.parent){n.height+=diff;}}
}



function lineNo(line){
if(line.parent==null){return null;}
var cur=line.parent,no=indexOf(cur.lines,line);
for(var chunk=cur.parent;chunk;cur=chunk,chunk=chunk.parent){
for(var i=0;;++i){
if(chunk.children[i]==cur){break;}
no+=chunk.children[i].chunkSize();
}
}
return no+cur.first;
}



function _lineAtHeight(chunk,h){
var n=chunk.first;
outer:do{
for(var i$1=0;i$1<chunk.children.length;++i$1){
var child=chunk.children[i$1],ch=child.height;
if(h<ch){chunk=child;continue outer;}
h-=ch;
n+=child.chunkSize();
}
return n;
}while(!chunk.lines);
var i=0;
for(;i<chunk.lines.length;++i){
var line=chunk.lines[i],lh=line.height;
if(h<lh){break;}
h-=lh;
}
return n+i;
}

function isLine(doc,l){return l>=doc.first&&l<doc.first+doc.size;}

function lineNumberFor(options,i){
return String(options.lineNumberFormatter(i+options.firstLineNumber));
}


function Pos(line,ch){
if(!(this instanceof Pos)){return new Pos(line,ch);}
this.line=line;this.ch=ch;
}



function cmp(a,b){return a.line-b.line||a.ch-b.ch;}

function copyPos(x){return Pos(x.line,x.ch);}
function maxPos(a,b){return cmp(a,b)<0?b:a;}
function minPos(a,b){return cmp(a,b)<0?a:b;}



function clipLine(doc,n){return Math.max(doc.first,Math.min(n,doc.first+doc.size-1));}
function _clipPos(doc,pos){
if(pos.line<doc.first){return Pos(doc.first,0);}
var last=doc.first+doc.size-1;
if(pos.line>last){return Pos(last,getLine(doc,last).text.length);}
return clipToLen(pos,getLine(doc,pos.line).text.length);
}
function clipToLen(pos,linelen){
var ch=pos.ch;
if(ch==null||ch>linelen){return Pos(pos.line,linelen);}else
if(ch<0){return Pos(pos.line,0);}else
{return pos;}
}
function clipPosArray(doc,array){
var out=[];
for(var i=0;i<array.length;i++){out[i]=_clipPos(doc,array[i]);}
return out;
}


var sawReadOnlySpans=false;
var sawCollapsedSpans=false;
function seeReadOnlySpans(){
sawReadOnlySpans=true;
}

function seeCollapsedSpans(){
sawCollapsedSpans=true;
}



function MarkedSpan(marker,from,to){
this.marker=marker;
this.from=from;this.to=to;
}


function getMarkedSpanFor(spans,marker){
if(spans){for(var i=0;i<spans.length;++i){
var span=spans[i];
if(span.marker==marker){return span;}
}}
}


function removeMarkedSpan(spans,span){
var r;
for(var i=0;i<spans.length;++i)
{if(spans[i]!=span){(r||(r=[])).push(spans[i]);}}
return r;
}

function addMarkedSpan(line,span){
line.markedSpans=line.markedSpans?line.markedSpans.concat([span]):[span];
span.marker.attachLine(line);
}





function markedSpansBefore(old,startCh,isInsert){
var nw;
if(old){for(var i=0;i<old.length;++i){
var span=old[i],marker=span.marker;
var startsBefore=span.from==null||(marker.inclusiveLeft?span.from<=startCh:span.from<startCh);
if(startsBefore||span.from==startCh&&marker.type=="bookmark"&&(!isInsert||!span.marker.insertLeft)){
var endsAfter=span.to==null||(marker.inclusiveRight?span.to>=startCh:span.to>startCh);
(nw||(nw=[])).push(new MarkedSpan(marker,span.from,endsAfter?null:span.to));
}
}}
return nw;
}
function markedSpansAfter(old,endCh,isInsert){
var nw;
if(old){for(var i=0;i<old.length;++i){
var span=old[i],marker=span.marker;
var endsAfter=span.to==null||(marker.inclusiveRight?span.to>=endCh:span.to>endCh);
if(endsAfter||span.from==endCh&&marker.type=="bookmark"&&(!isInsert||span.marker.insertLeft)){
var startsBefore=span.from==null||(marker.inclusiveLeft?span.from<=endCh:span.from<endCh);
(nw||(nw=[])).push(new MarkedSpan(marker,startsBefore?null:span.from-endCh,
span.to==null?null:span.to-endCh));
}
}}
return nw;
}







function stretchSpansOverChange(doc,change){
if(change.full){return null;}
var oldFirst=isLine(doc,change.from.line)&&getLine(doc,change.from.line).markedSpans;
var oldLast=isLine(doc,change.to.line)&&getLine(doc,change.to.line).markedSpans;
if(!oldFirst&&!oldLast){return null;}

var startCh=change.from.ch,endCh=change.to.ch,isInsert=cmp(change.from,change.to)==0;

var first=markedSpansBefore(oldFirst,startCh,isInsert);
var last=markedSpansAfter(oldLast,endCh,isInsert);


var sameLine=change.text.length==1,offset=lst(change.text).length+(sameLine?startCh:0);
if(first){

for(var i=0;i<first.length;++i){
var span=first[i];
if(span.to==null){
var found=getMarkedSpanFor(last,span.marker);
if(!found){span.to=startCh;}else
if(sameLine){span.to=found.to==null?null:found.to+offset;}
}
}
}
if(last){

for(var i$1=0;i$1<last.length;++i$1){
var span$1=last[i$1];
if(span$1.to!=null){span$1.to+=offset;}
if(span$1.from==null){
var found$1=getMarkedSpanFor(first,span$1.marker);
if(!found$1){
span$1.from=offset;
if(sameLine){(first||(first=[])).push(span$1);}
}
}else{
span$1.from+=offset;
if(sameLine){(first||(first=[])).push(span$1);}
}
}
}

if(first){first=clearEmptySpans(first);}
if(last&&last!=first){last=clearEmptySpans(last);}

var newMarkers=[first];
if(!sameLine){

var gap=change.text.length-2,gapMarkers;
if(gap>0&&first)
{for(var i$2=0;i$2<first.length;++i$2)
{if(first[i$2].to==null)
{(gapMarkers||(gapMarkers=[])).push(new MarkedSpan(first[i$2].marker,null,null));}}}
for(var i$3=0;i$3<gap;++i$3)
{newMarkers.push(gapMarkers);}
newMarkers.push(last);
}
return newMarkers;
}



function clearEmptySpans(spans){
for(var i=0;i<spans.length;++i){
var span=spans[i];
if(span.from!=null&&span.from==span.to&&span.marker.clearWhenEmpty!==false)
{spans.splice(i--,1);}
}
if(!spans.length){return null;}
return spans;
}


function removeReadOnlyRanges(doc,from,to){
var markers=null;
doc.iter(from.line,to.line+1,function(line){
if(line.markedSpans){for(var i=0;i<line.markedSpans.length;++i){
var mark=line.markedSpans[i].marker;
if(mark.readOnly&&(!markers||indexOf(markers,mark)==-1))
{(markers||(markers=[])).push(mark);}
}}
});
if(!markers){return null;}
var parts=[{from:from,to:to}];
for(var i=0;i<markers.length;++i){
var mk=markers[i],m=mk.find(0);
for(var j=0;j<parts.length;++j){
var p=parts[j];
if(cmp(p.to,m.from)<0||cmp(p.from,m.to)>0){continue;}
var newParts=[j,1],dfrom=cmp(p.from,m.from),dto=cmp(p.to,m.to);
if(dfrom<0||!mk.inclusiveLeft&&!dfrom)
{newParts.push({from:p.from,to:m.from});}
if(dto>0||!mk.inclusiveRight&&!dto)
{newParts.push({from:m.to,to:p.to});}
parts.splice.apply(parts,newParts);
j+=newParts.length-1;
}
}
return parts;
}


function detachMarkedSpans(line){
var spans=line.markedSpans;
if(!spans){return;}
for(var i=0;i<spans.length;++i)
{spans[i].marker.detachLine(line);}
line.markedSpans=null;
}
function attachMarkedSpans(line,spans){
if(!spans){return;}
for(var i=0;i<spans.length;++i)
{spans[i].marker.attachLine(line);}
line.markedSpans=spans;
}



function extraLeft(marker){return marker.inclusiveLeft?-1:0;}
function extraRight(marker){return marker.inclusiveRight?1:0;}




function compareCollapsedMarkers(a,b){
var lenDiff=a.lines.length-b.lines.length;
if(lenDiff!=0){return lenDiff;}
var aPos=a.find(),bPos=b.find();
var fromCmp=cmp(aPos.from,bPos.from)||extraLeft(a)-extraLeft(b);
if(fromCmp){return-fromCmp;}
var toCmp=cmp(aPos.to,bPos.to)||extraRight(a)-extraRight(b);
if(toCmp){return toCmp;}
return b.id-a.id;
}



function collapsedSpanAtSide(line,start){
var sps=sawCollapsedSpans&&line.markedSpans,found;
if(sps){for(var sp=void 0,i=0;i<sps.length;++i){
sp=sps[i];
if(sp.marker.collapsed&&(start?sp.from:sp.to)==null&&(
!found||compareCollapsedMarkers(found,sp.marker)<0))
{found=sp.marker;}
}}
return found;
}
function collapsedSpanAtStart(line){return collapsedSpanAtSide(line,true);}
function collapsedSpanAtEnd(line){return collapsedSpanAtSide(line,false);}




function conflictingCollapsedRange(doc,lineNo,from,to,marker){
var line=getLine(doc,lineNo);
var sps=sawCollapsedSpans&&line.markedSpans;
if(sps){for(var i=0;i<sps.length;++i){
var sp=sps[i];
if(!sp.marker.collapsed){continue;}
var found=sp.marker.find(0);
var fromCmp=cmp(found.from,from)||extraLeft(sp.marker)-extraLeft(marker);
var toCmp=cmp(found.to,to)||extraRight(sp.marker)-extraRight(marker);
if(fromCmp>=0&&toCmp<=0||fromCmp<=0&&toCmp>=0){continue;}
if(fromCmp<=0&&(sp.marker.inclusiveRight&&marker.inclusiveLeft?cmp(found.to,from)>=0:cmp(found.to,from)>0)||
fromCmp>=0&&(sp.marker.inclusiveRight&&marker.inclusiveLeft?cmp(found.from,to)<=0:cmp(found.from,to)<0))
{return true;}
}}
}





function visualLine(line){
var merged;
while(merged=collapsedSpanAtStart(line))
{line=merged.find(-1,true).line;}
return line;
}



function visualLineContinued(line){
var merged,lines;
while(merged=collapsedSpanAtEnd(line)){
line=merged.find(1,true).line;
(lines||(lines=[])).push(line);
}
return lines;
}



function visualLineNo(doc,lineN){
var line=getLine(doc,lineN),vis=visualLine(line);
if(line==vis){return lineN;}
return lineNo(vis);
}



function visualLineEndNo(doc,lineN){
if(lineN>doc.lastLine()){return lineN;}
var line=getLine(doc,lineN),merged;
if(!lineIsHidden(doc,line)){return lineN;}
while(merged=collapsedSpanAtEnd(line))
{line=merged.find(1,true).line;}
return lineNo(line)+1;
}




function lineIsHidden(doc,line){
var sps=sawCollapsedSpans&&line.markedSpans;
if(sps){for(var sp=void 0,i=0;i<sps.length;++i){
sp=sps[i];
if(!sp.marker.collapsed){continue;}
if(sp.from==null){return true;}
if(sp.marker.widgetNode){continue;}
if(sp.from==0&&sp.marker.inclusiveLeft&&lineIsHiddenInner(doc,line,sp))
{return true;}
}}
}
function lineIsHiddenInner(doc,line,span){
if(span.to==null){
var end=span.marker.find(1,true);
return lineIsHiddenInner(doc,end.line,getMarkedSpanFor(end.line.markedSpans,span.marker));
}
if(span.marker.inclusiveRight&&span.to==line.text.length)
{return true;}
for(var sp=void 0,i=0;i<line.markedSpans.length;++i){
sp=line.markedSpans[i];
if(sp.marker.collapsed&&!sp.marker.widgetNode&&sp.from==span.to&&(
sp.to==null||sp.to!=span.from)&&(
sp.marker.inclusiveLeft||span.marker.inclusiveRight)&&
lineIsHiddenInner(doc,line,sp)){return true;}
}
}


function _heightAtLine(lineObj){
lineObj=visualLine(lineObj);

var h=0,chunk=lineObj.parent;
for(var i=0;i<chunk.lines.length;++i){
var line=chunk.lines[i];
if(line==lineObj){break;}else
{h+=line.height;}
}
for(var p=chunk.parent;p;chunk=p,p=chunk.parent){
for(var i$1=0;i$1<p.children.length;++i$1){
var cur=p.children[i$1];
if(cur==chunk){break;}else
{h+=cur.height;}
}
}
return h;
}




function lineLength(line){
if(line.height==0){return 0;}
var len=line.text.length,merged,cur=line;
while(merged=collapsedSpanAtStart(cur)){
var found=merged.find(0,true);
cur=found.from.line;
len+=found.from.ch-found.to.ch;
}
cur=line;
while(merged=collapsedSpanAtEnd(cur)){
var found$1=merged.find(0,true);
len-=cur.text.length-found$1.from.ch;
cur=found$1.to.line;
len+=cur.text.length-found$1.to.ch;
}
return len;
}


function findMaxLine(cm){
var d=cm.display,doc=cm.doc;
d.maxLine=getLine(doc,doc.first);
d.maxLineLength=lineLength(d.maxLine);
d.maxLineChanged=true;
doc.iter(function(line){
var len=lineLength(line);
if(len>d.maxLineLength){
d.maxLineLength=len;
d.maxLine=line;
}
});
}



function iterateBidiSections(order,from,to,f){
if(!order){return f(from,to,"ltr");}
var found=false;
for(var i=0;i<order.length;++i){
var part=order[i];
if(part.from<to&&part.to>from||from==to&&part.to==from){
f(Math.max(part.from,from),Math.min(part.to,to),part.level==1?"rtl":"ltr");
found=true;
}
}
if(!found){f(from,to,"ltr");}
}

function bidiLeft(part){return part.level%2?part.to:part.from;}
function bidiRight(part){return part.level%2?part.from:part.to;}

function lineLeft(line){var order=getOrder(line);return order?bidiLeft(order[0]):0;}
function lineRight(line){
var order=getOrder(line);
if(!order){return line.text.length;}
return bidiRight(lst(order));
}

function compareBidiLevel(order,a,b){
var linedir=order[0].level;
if(a==linedir){return true;}
if(b==linedir){return false;}
return a<b;
}

var bidiOther=null;
function getBidiPartAt(order,pos){
var found;
bidiOther=null;
for(var i=0;i<order.length;++i){
var cur=order[i];
if(cur.from<pos&&cur.to>pos){return i;}
if(cur.from==pos||cur.to==pos){
if(found==null){
found=i;
}else if(compareBidiLevel(order,cur.level,order[found].level)){
if(cur.from!=cur.to){bidiOther=found;}
return i;
}else{
if(cur.from!=cur.to){bidiOther=i;}
return found;
}
}
}
return found;
}

function moveInLine(line,pos,dir,byUnit){
if(!byUnit){return pos+dir;}
do{pos+=dir;}while(
pos>0&&isExtendingChar(line.text.charAt(pos)));
return pos;
}






function moveVisually(line,start,dir,byUnit){
var bidi=getOrder(line);
if(!bidi){return moveLogically(line,start,dir,byUnit);}
var pos=getBidiPartAt(bidi,start),part=bidi[pos];
var target=moveInLine(line,start,part.level%2?-dir:dir,byUnit);

for(;;){
if(target>part.from&&target<part.to){return target;}
if(target==part.from||target==part.to){
if(getBidiPartAt(bidi,target)==pos){return target;}
part=bidi[pos+=dir];
return dir>0==part.level%2?part.to:part.from;
}else{
part=bidi[pos+=dir];
if(!part){return null;}
if(dir>0==part.level%2)
{target=moveInLine(line,part.to,-1,byUnit);}else

{target=moveInLine(line,part.from,1,byUnit);}
}
}
}

function moveLogically(line,start,dir,byUnit){
var target=start+dir;
if(byUnit){while(target>0&&isExtendingChar(line.text.charAt(target))){target+=dir;}}
return target<0||target>line.text.length?null:target;
}
























var bidiOrdering=function(){

var lowTypes="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";

var arabicTypes="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
function charType(code){
if(code<=0xf7){return lowTypes.charAt(code);}else
if(0x590<=code&&code<=0x5f4){return"R";}else
if(0x600<=code&&code<=0x6f9){return arabicTypes.charAt(code-0x600);}else
if(0x6ee<=code&&code<=0x8ac){return"r";}else
if(0x2000<=code&&code<=0x200b){return"w";}else
if(code==0x200c){return"b";}else
{return"L";}
}

var bidiRE=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
var isNeutral=/[stwN]/,isStrong=/[LRr]/,countsAsLeft=/[Lb1n]/,countsAsNum=/[1n]/;

var outerType="L";

function BidiSpan(level,from,to){
this.level=level;
this.from=from;this.to=to;
}

return function(str){
if(!bidiRE.test(str)){return false;}
var len=str.length,types=[];
for(var i=0;i<len;++i)
{types.push(charType(str.charCodeAt(i)));}





for(var i$1=0,prev=outerType;i$1<len;++i$1){
var type=types[i$1];
if(type=="m"){types[i$1]=prev;}else
{prev=type;}
}






for(var i$2=0,cur=outerType;i$2<len;++i$2){
var type$1=types[i$2];
if(type$1=="1"&&cur=="r"){types[i$2]="n";}else
if(isStrong.test(type$1)){cur=type$1;if(type$1=="r"){types[i$2]="R";}}
}




for(var i$3=1,prev$1=types[0];i$3<len-1;++i$3){
var type$2=types[i$3];
if(type$2=="+"&&prev$1=="1"&&types[i$3+1]=="1"){types[i$3]="1";}else
if(type$2==","&&prev$1==types[i$3+1]&&(
prev$1=="1"||prev$1=="n")){types[i$3]=prev$1;}
prev$1=type$2;
}





for(var i$4=0;i$4<len;++i$4){
var type$3=types[i$4];
if(type$3==","){types[i$4]="N";}else
if(type$3=="%"){
var end=void 0;
for(end=i$4+1;end<len&&types[end]=="%";++end){}
var replace=i$4&&types[i$4-1]=="!"||end<len&&types[end]=="1"?"1":"N";
for(var j=i$4;j<end;++j){types[j]=replace;}
i$4=end-1;
}
}




for(var i$5=0,cur$1=outerType;i$5<len;++i$5){
var type$4=types[i$5];
if(cur$1=="L"&&type$4=="1"){types[i$5]="L";}else
if(isStrong.test(type$4)){cur$1=type$4;}
}







for(var i$6=0;i$6<len;++i$6){
if(isNeutral.test(types[i$6])){
var end$1=void 0;
for(end$1=i$6+1;end$1<len&&isNeutral.test(types[end$1]);++end$1){}
var before=(i$6?types[i$6-1]:outerType)=="L";
var after=(end$1<len?types[end$1]:outerType)=="L";
var replace$1=before||after?"L":"R";
for(var j$1=i$6;j$1<end$1;++j$1){types[j$1]=replace$1;}
i$6=end$1-1;
}
}






var order=[],m;
for(var i$7=0;i$7<len;){
if(countsAsLeft.test(types[i$7])){
var start=i$7;
for(++i$7;i$7<len&&countsAsLeft.test(types[i$7]);++i$7){}
order.push(new BidiSpan(0,start,i$7));
}else{
var pos=i$7,at=order.length;
for(++i$7;i$7<len&&types[i$7]!="L";++i$7){}
for(var j$2=pos;j$2<i$7;){
if(countsAsNum.test(types[j$2])){
if(pos<j$2){order.splice(at,0,new BidiSpan(1,pos,j$2));}
var nstart=j$2;
for(++j$2;j$2<i$7&&countsAsNum.test(types[j$2]);++j$2){}
order.splice(at,0,new BidiSpan(2,nstart,j$2));
pos=j$2;
}else{++j$2;}
}
if(pos<i$7){order.splice(at,0,new BidiSpan(1,pos,i$7));}
}
}
if(order[0].level==1&&(m=str.match(/^\s+/))){
order[0].from=m[0].length;
order.unshift(new BidiSpan(0,0,m[0].length));
}
if(lst(order).level==1&&(m=str.match(/\s+$/))){
lst(order).to-=m[0].length;
order.push(new BidiSpan(0,len-m[0].length,len));
}
if(order[0].level==2)
{order.unshift(new BidiSpan(1,order[0].to,order[0].to));}
if(order[0].level!=lst(order).level)
{order.push(new BidiSpan(order[0].level,len,len));}

return order;
};
}();




function getOrder(line){
var order=line.order;
if(order==null){order=line.order=bidiOrdering(line.text);}
return order;
}






var noHandlers=[];

var on=function on(emitter,type,f){
if(emitter.addEventListener){
emitter.addEventListener(type,f,false);
}else if(emitter.attachEvent){
emitter.attachEvent("on"+type,f);
}else{
var map=emitter._handlers||(emitter._handlers={});
map[type]=(map[type]||noHandlers).concat(f);
}
};

function getHandlers(emitter,type){
return emitter._handlers&&emitter._handlers[type]||noHandlers;
}

function off(emitter,type,f){
if(emitter.removeEventListener){
emitter.removeEventListener(type,f,false);
}else if(emitter.detachEvent){
emitter.detachEvent("on"+type,f);
}else{
var map=emitter._handlers,arr=map&&map[type];
if(arr){
var index=indexOf(arr,f);
if(index>-1)
{map[type]=arr.slice(0,index).concat(arr.slice(index+1));}
}
}
}

function signal(emitter,type){
var handlers=getHandlers(emitter,type);
if(!handlers.length){return;}
var args=Array.prototype.slice.call(arguments,2);
for(var i=0;i<handlers.length;++i){handlers[i].apply(null,args);}
}




function signalDOMEvent(cm,e,override){
if(typeof e=="string")
{e={type:e,preventDefault:function preventDefault(){this.defaultPrevented=true;}};}
signal(cm,override||e.type,cm,e);
return e_defaultPrevented(e)||e.codemirrorIgnore;
}

function signalCursorActivity(cm){
var arr=cm._handlers&&cm._handlers.cursorActivity;
if(!arr){return;}
var set=cm.curOp.cursorActivityHandlers||(cm.curOp.cursorActivityHandlers=[]);
for(var i=0;i<arr.length;++i){if(indexOf(set,arr[i])==-1)
{set.push(arr[i]);}}
}

function hasHandler(emitter,type){
return getHandlers(emitter,type).length>0;
}



function eventMixin(ctor){
ctor.prototype.on=function(type,f){on(this,type,f);};
ctor.prototype.off=function(type,f){off(this,type,f);};
}




function e_preventDefault(e){
if(e.preventDefault){e.preventDefault();}else
{e.returnValue=false;}
}
function e_stopPropagation(e){
if(e.stopPropagation){e.stopPropagation();}else
{e.cancelBubble=true;}
}
function e_defaultPrevented(e){
return e.defaultPrevented!=null?e.defaultPrevented:e.returnValue==false;
}
function e_stop(e){e_preventDefault(e);e_stopPropagation(e);}

function e_target(e){return e.target||e.srcElement;}
function e_button(e){
var b=e.which;
if(b==null){
if(e.button&1){b=1;}else
if(e.button&2){b=3;}else
if(e.button&4){b=2;}
}
if(mac&&e.ctrlKey&&b==1){b=3;}
return b;
}


var dragAndDrop=function(){


if(ie&&ie_version<9){return false;}
var div=elt('div');
return"draggable"in div||"dragDrop"in div;
}();

var zwspSupported;
function zeroWidthElement(measure){
if(zwspSupported==null){
var test=elt("span",'\u200B');
removeChildrenAndAdd(measure,elt("span",[test,document.createTextNode("x")]));
if(measure.firstChild.offsetHeight!=0)
{zwspSupported=test.offsetWidth<=1&&test.offsetHeight>2&&!(ie&&ie_version<8);}
}
var node=zwspSupported?elt("span",'\u200B'):
elt("span",'\xA0',null,"display: inline-block; width: 1px; margin-right: -1px");
node.setAttribute("cm-text","");
return node;
}


var badBidiRects;
function hasBadBidiRects(measure){
if(badBidiRects!=null){return badBidiRects;}
var txt=removeChildrenAndAdd(measure,document.createTextNode('A\u062EA'));
var r0=range(txt,0,1).getBoundingClientRect();
var r1=range(txt,1,2).getBoundingClientRect();
removeChildren(measure);
if(!r0||r0.left==r0.right){return false;}
return badBidiRects=r1.right-r0.right<3;
}



var splitLinesAuto="\n\nb".split(/\n/).length!=3?function(string){
var pos=0,result=[],l=string.length;
while(pos<=l){
var nl=string.indexOf("\n",pos);
if(nl==-1){nl=string.length;}
var line=string.slice(pos,string.charAt(nl-1)=="\r"?nl-1:nl);
var rt=line.indexOf("\r");
if(rt!=-1){
result.push(line.slice(0,rt));
pos+=rt+1;
}else{
result.push(line);
pos=nl+1;
}
}
return result;
}:function(string){return string.split(/\r\n?|\n/);};

var hasSelection=window.getSelection?function(te){
try{return te.selectionStart!=te.selectionEnd;}
catch(e){return false;}
}:function(te){
var range;
try{range=te.ownerDocument.selection.createRange();}
catch(e){}
if(!range||range.parentElement()!=te){return false;}
return range.compareEndPoints("StartToEnd",range)!=0;
};

var hasCopyEvent=function(){
var e=elt("div");
if("oncopy"in e){return true;}
e.setAttribute("oncopy","return;");
return typeof e.oncopy=="function";
}();

var badZoomedRects=null;
function hasBadZoomedRects(measure){
if(badZoomedRects!=null){return badZoomedRects;}
var node=removeChildrenAndAdd(measure,elt("span","x"));
var normal=node.getBoundingClientRect();
var fromRange=range(node,0,1).getBoundingClientRect();
return badZoomedRects=Math.abs(normal.left-fromRange.left)>1;
}

var modes={};
var mimeModes={};



function defineMode(name,mode){
if(arguments.length>2)
{mode.dependencies=Array.prototype.slice.call(arguments,2);}
modes[name]=mode;
}

function defineMIME(mime,spec){
mimeModes[mime]=spec;
}



function resolveMode(spec){
if(typeof spec=="string"&&mimeModes.hasOwnProperty(spec)){
spec=mimeModes[spec];
}else if(spec&&typeof spec.name=="string"&&mimeModes.hasOwnProperty(spec.name)){
var found=mimeModes[spec.name];
if(typeof found=="string"){found={name:found};}
spec=createObj(found,spec);
spec.name=found.name;
}else if(typeof spec=="string"&&/^[\w\-]+\/[\w\-]+\+xml$/.test(spec)){
return resolveMode("application/xml");
}else if(typeof spec=="string"&&/^[\w\-]+\/[\w\-]+\+json$/.test(spec)){
return resolveMode("application/json");
}
if(typeof spec=="string"){return{name:spec};}else
{return spec||{name:"null"};}
}



function getMode(options,spec){
spec=resolveMode(spec);
var mfactory=modes[spec.name];
if(!mfactory){return getMode(options,"text/plain");}
var modeObj=mfactory(options,spec);
if(modeExtensions.hasOwnProperty(spec.name)){
var exts=modeExtensions[spec.name];
for(var prop in exts){
if(!exts.hasOwnProperty(prop)){continue;}
if(modeObj.hasOwnProperty(prop)){modeObj["_"+prop]=modeObj[prop];}
modeObj[prop]=exts[prop];
}
}
modeObj.name=spec.name;
if(spec.helperType){modeObj.helperType=spec.helperType;}
if(spec.modeProps){for(var prop$1 in spec.modeProps)
{modeObj[prop$1]=spec.modeProps[prop$1];}}

return modeObj;
}



var modeExtensions={};
function extendMode(mode,properties){
var exts=modeExtensions.hasOwnProperty(mode)?modeExtensions[mode]:modeExtensions[mode]={};
copyObj(properties,exts);
}

function copyState(mode,state){
if(state===true){return state;}
if(mode.copyState){return mode.copyState(state);}
var nstate={};
for(var n in state){
var val=state[n];
if(val instanceof Array){val=val.concat([]);}
nstate[n]=val;
}
return nstate;
}



function innerMode(mode,state){
var info;
while(mode.innerMode){
info=mode.innerMode(state);
if(!info||info.mode==mode){break;}
state=info.state;
mode=info.mode;
}
return info||{mode:mode,state:state};
}

function startState(mode,a1,a2){
return mode.startState?mode.startState(a1,a2):true;
}






var StringStream=function StringStream(string,tabSize){
this.pos=this.start=0;
this.string=string;
this.tabSize=tabSize||8;
this.lastColumnPos=this.lastColumnValue=0;
this.lineStart=0;
};

StringStream.prototype={
eol:function eol(){return this.pos>=this.string.length;},
sol:function sol(){return this.pos==this.lineStart;},
peek:function peek(){return this.string.charAt(this.pos)||undefined;},
next:function next(){
if(this.pos<this.string.length)
{return this.string.charAt(this.pos++);}
},
eat:function eat(match){
var ch=this.string.charAt(this.pos);
var ok;
if(typeof match=="string"){ok=ch==match;}else
{ok=ch&&(match.test?match.test(ch):match(ch));}
if(ok){++this.pos;return ch;}
},
eatWhile:function eatWhile(match){
var start=this.pos;
while(this.eat(match)){}
return this.pos>start;
},
eatSpace:function eatSpace(){
var this$1=this;

var start=this.pos;
while(/[\s\u00a0]/.test(this.string.charAt(this.pos))){++this$1.pos;}
return this.pos>start;
},
skipToEnd:function skipToEnd(){this.pos=this.string.length;},
skipTo:function skipTo(ch){
var found=this.string.indexOf(ch,this.pos);
if(found>-1){this.pos=found;return true;}
},
backUp:function backUp(n){this.pos-=n;},
column:function column(){
if(this.lastColumnPos<this.start){
this.lastColumnValue=countColumn(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue);
this.lastColumnPos=this.start;
}
return this.lastColumnValue-(this.lineStart?countColumn(this.string,this.lineStart,this.tabSize):0);
},
indentation:function indentation(){
return countColumn(this.string,null,this.tabSize)-(
this.lineStart?countColumn(this.string,this.lineStart,this.tabSize):0);
},
match:function match(pattern,consume,caseInsensitive){
if(typeof pattern=="string"){
var cased=function cased(str){return caseInsensitive?str.toLowerCase():str;};
var substr=this.string.substr(this.pos,pattern.length);
if(cased(substr)==cased(pattern)){
if(consume!==false){this.pos+=pattern.length;}
return true;
}
}else{
var match=this.string.slice(this.pos).match(pattern);
if(match&&match.index>0){return null;}
if(match&&consume!==false){this.pos+=match[0].length;}
return match;
}
},
current:function current(){return this.string.slice(this.start,this.pos);},
hideFirstChars:function hideFirstChars(n,inner){
this.lineStart+=n;
try{return inner();}finally
{this.lineStart-=n;}
}};






function highlightLine(cm,line,state,forceToEnd){


var st=[cm.state.modeGen],lineClasses={};

runMode(cm,line.text,cm.doc.mode,state,function(end,style){return st.push(end,style);},
lineClasses,forceToEnd);


var loop=function loop(o){
var overlay=cm.state.overlays[o],i=1,at=0;
runMode(cm,line.text,overlay.mode,true,function(end,style){
var start=i;

while(at<end){
var i_end=st[i];
if(i_end>end)
{st.splice(i,1,end,st[i+1],i_end);}
i+=2;
at=Math.min(end,i_end);
}
if(!style){return;}
if(overlay.opaque){
st.splice(start,i-start,end,"overlay "+style);
i=start+2;
}else{
for(;start<i;start+=2){
var cur=st[start+1];
st[start+1]=(cur?cur+" ":"")+"overlay "+style;
}
}
},lineClasses);
};

for(var o=0;o<cm.state.overlays.length;++o){loop(o);}

return{styles:st,classes:lineClasses.bgClass||lineClasses.textClass?lineClasses:null};
}

function getLineStyles(cm,line,updateFrontier){
if(!line.styles||line.styles[0]!=cm.state.modeGen){
var state=getStateBefore(cm,lineNo(line));
var result=highlightLine(cm,line,line.text.length>cm.options.maxHighlightLength?copyState(cm.doc.mode,state):state);
line.stateAfter=state;
line.styles=result.styles;
if(result.classes){line.styleClasses=result.classes;}else
if(line.styleClasses){line.styleClasses=null;}
if(updateFrontier===cm.doc.frontier){cm.doc.frontier++;}
}
return line.styles;
}

function getStateBefore(cm,n,precise){
var doc=cm.doc,display=cm.display;
if(!doc.mode.startState){return true;}
var pos=findStartLine(cm,n,precise),state=pos>doc.first&&getLine(doc,pos-1).stateAfter;
if(!state){state=startState(doc.mode);}else
{state=copyState(doc.mode,state);}
doc.iter(pos,n,function(line){
processLine(cm,line.text,state);
var save=pos==n-1||pos%5==0||pos>=display.viewFrom&&pos<display.viewTo;
line.stateAfter=save?copyState(doc.mode,state):null;
++pos;
});
if(precise){doc.frontier=pos;}
return state;
}




function processLine(cm,text,state,startAt){
var mode=cm.doc.mode;
var stream=new StringStream(text,cm.options.tabSize);
stream.start=stream.pos=startAt||0;
if(text==""){callBlankLine(mode,state);}
while(!stream.eol()){
readToken(mode,stream,state);
stream.start=stream.pos;
}
}

function callBlankLine(mode,state){
if(mode.blankLine){return mode.blankLine(state);}
if(!mode.innerMode){return;}
var inner=innerMode(mode,state);
if(inner.mode.blankLine){return inner.mode.blankLine(inner.state);}
}

function readToken(mode,stream,state,inner){
for(var i=0;i<10;i++){
if(inner){inner[0]=innerMode(mode,state).mode;}
var style=mode.token(stream,state);
if(stream.pos>stream.start){return style;}
}
throw new Error("Mode "+mode.name+" failed to advance stream.");
}


function takeToken(cm,pos,precise,asArray){
var getObj=function getObj(copy){return{
start:stream.start,end:stream.pos,
string:stream.current(),
type:style||null,
state:copy?copyState(doc.mode,state):state};
};

var doc=cm.doc,mode=doc.mode,style;
pos=_clipPos(doc,pos);
var line=getLine(doc,pos.line),state=getStateBefore(cm,pos.line,precise);
var stream=new StringStream(line.text,cm.options.tabSize),tokens;
if(asArray){tokens=[];}
while((asArray||stream.pos<pos.ch)&&!stream.eol()){
stream.start=stream.pos;
style=readToken(mode,stream,state);
if(asArray){tokens.push(getObj(true));}
}
return asArray?tokens:getObj();
}

function extractLineClasses(type,output){
if(type){for(;;){
var lineClass=type.match(/(?:^|\s+)line-(background-)?(\S+)/);
if(!lineClass){break;}
type=type.slice(0,lineClass.index)+type.slice(lineClass.index+lineClass[0].length);
var prop=lineClass[1]?"bgClass":"textClass";
if(output[prop]==null)
{output[prop]=lineClass[2];}else
if(!new RegExp("(?:^|\s)"+lineClass[2]+"(?:$|\s)").test(output[prop]))
{output[prop]+=" "+lineClass[2];}
}}
return type;
}


function runMode(cm,text,mode,state,f,lineClasses,forceToEnd){
var flattenSpans=mode.flattenSpans;
if(flattenSpans==null){flattenSpans=cm.options.flattenSpans;}
var curStart=0,curStyle=null;
var stream=new StringStream(text,cm.options.tabSize),style;
var inner=cm.options.addModeClass&&[null];
if(text==""){extractLineClasses(callBlankLine(mode,state),lineClasses);}
while(!stream.eol()){
if(stream.pos>cm.options.maxHighlightLength){
flattenSpans=false;
if(forceToEnd){processLine(cm,text,state,stream.pos);}
stream.pos=text.length;
style=null;
}else{
style=extractLineClasses(readToken(mode,stream,state,inner),lineClasses);
}
if(inner){
var mName=inner[0].name;
if(mName){style="m-"+(style?mName+" "+style:mName);}
}
if(!flattenSpans||curStyle!=style){
while(curStart<stream.start){
curStart=Math.min(stream.start,curStart+5000);
f(curStart,curStyle);
}
curStyle=style;
}
stream.start=stream.pos;
}
while(curStart<stream.pos){



var pos=Math.min(stream.pos,curStart+5000);
f(pos,curStyle);
curStart=pos;
}
}






function findStartLine(cm,n,precise){
var minindent,minline,doc=cm.doc;
var lim=precise?-1:n-(cm.doc.mode.innerMode?1000:100);
for(var search=n;search>lim;--search){
if(search<=doc.first){return doc.first;}
var line=getLine(doc,search-1);
if(line.stateAfter&&(!precise||search<=doc.frontier)){return search;}
var indented=countColumn(line.text,null,cm.options.tabSize);
if(minline==null||minindent>indented){
minline=search-1;
minindent=indented;
}
}
return minline;
}





function Line(text,markedSpans,estimateHeight){
this.text=text;
attachMarkedSpans(this,markedSpans);
this.height=estimateHeight?estimateHeight(this):1;
}
eventMixin(Line);
Line.prototype.lineNo=function(){return lineNo(this);};




function updateLine(line,text,markedSpans,estimateHeight){
line.text=text;
if(line.stateAfter){line.stateAfter=null;}
if(line.styles){line.styles=null;}
if(line.order!=null){line.order=null;}
detachMarkedSpans(line);
attachMarkedSpans(line,markedSpans);
var estHeight=estimateHeight?estimateHeight(line):1;
if(estHeight!=line.height){updateLineHeight(line,estHeight);}
}


function cleanUpLine(line){
line.parent=null;
detachMarkedSpans(line);
}




var styleToClassCache={};
var styleToClassCacheWithMode={};
function interpretTokenStyle(style,options){
if(!style||/^\s*$/.test(style)){return null;}
var cache=options.addModeClass?styleToClassCacheWithMode:styleToClassCache;
return cache[style]||(
cache[style]=style.replace(/\S+/g,"cm-$&"));
}






function buildLineContent(cm,lineView){



var content=elt("span",null,null,webkit?"padding-right: .1px":null);
var builder={pre:elt("pre",[content],"CodeMirror-line"),content:content,
col:0,pos:0,cm:cm,
trailingSpace:false,
splitSpaces:(ie||webkit)&&cm.getOption("lineWrapping")};

content.setAttribute("role","presentation");
builder.pre.setAttribute("role","presentation");
lineView.measure={};


for(var i=0;i<=(lineView.rest?lineView.rest.length:0);i++){
var line=i?lineView.rest[i-1]:lineView.line,order=void 0;
builder.pos=0;
builder.addToken=buildToken;


if(hasBadBidiRects(cm.display.measure)&&(order=getOrder(line)))
{builder.addToken=buildTokenBadBidi(builder.addToken,order);}
builder.map=[];
var allowFrontierUpdate=lineView!=cm.display.externalMeasured&&lineNo(line);
insertLineContent(line,builder,getLineStyles(cm,line,allowFrontierUpdate));
if(line.styleClasses){
if(line.styleClasses.bgClass)
{builder.bgClass=joinClasses(line.styleClasses.bgClass,builder.bgClass||"");}
if(line.styleClasses.textClass)
{builder.textClass=joinClasses(line.styleClasses.textClass,builder.textClass||"");}
}


if(builder.map.length==0)
{builder.map.push(0,0,builder.content.appendChild(zeroWidthElement(cm.display.measure)));}


if(i==0){
lineView.measure.map=builder.map;
lineView.measure.cache={};
}else{
;(lineView.measure.maps||(lineView.measure.maps=[])).push(builder.map);
(lineView.measure.caches||(lineView.measure.caches=[])).push({});
}
}


if(webkit){
var last=builder.content.lastChild;
if(/\bcm-tab\b/.test(last.className)||last.querySelector&&last.querySelector(".cm-tab"))
{builder.content.className="cm-tab-wrap-hack";}
}

signal(cm,"renderLine",cm,lineView.line,builder.pre);
if(builder.pre.className)
{builder.textClass=joinClasses(builder.pre.className,builder.textClass||"");}

return builder;
}

function defaultSpecialCharPlaceholder(ch){
var token=elt("span",'\u2022',"cm-invalidchar");
token.title='\\u'+ch.charCodeAt(0).toString(16);
token.setAttribute("aria-label",token.title);
return token;
}



function buildToken(builder,text,style,startStyle,endStyle,title,css){
if(!text){return;}
var displayText=builder.splitSpaces?splitSpaces(text,builder.trailingSpace):text;
var special=builder.cm.state.specialChars,mustWrap=false;
var content;
if(!special.test(text)){
builder.col+=text.length;
content=document.createTextNode(displayText);
builder.map.push(builder.pos,builder.pos+text.length,content);
if(ie&&ie_version<9){mustWrap=true;}
builder.pos+=text.length;
}else{
content=document.createDocumentFragment();
var pos=0;
while(true){
special.lastIndex=pos;
var m=special.exec(text);
var skipped=m?m.index-pos:text.length-pos;
if(skipped){
var txt=document.createTextNode(displayText.slice(pos,pos+skipped));
if(ie&&ie_version<9){content.appendChild(elt("span",[txt]));}else
{content.appendChild(txt);}
builder.map.push(builder.pos,builder.pos+skipped,txt);
builder.col+=skipped;
builder.pos+=skipped;
}
if(!m){break;}
pos+=skipped+1;
var txt$1=void 0;
if(m[0]=="\t"){
var tabSize=builder.cm.options.tabSize,tabWidth=tabSize-builder.col%tabSize;
txt$1=content.appendChild(elt("span",spaceStr(tabWidth),"cm-tab"));
txt$1.setAttribute("role","presentation");
txt$1.setAttribute("cm-text","\t");
builder.col+=tabWidth;
}else if(m[0]=="\r"||m[0]=="\n"){
txt$1=content.appendChild(elt("span",m[0]=="\r"?'\u240D':'\u2424',"cm-invalidchar"));
txt$1.setAttribute("cm-text",m[0]);
builder.col+=1;
}else{
txt$1=builder.cm.options.specialCharPlaceholder(m[0]);
txt$1.setAttribute("cm-text",m[0]);
if(ie&&ie_version<9){content.appendChild(elt("span",[txt$1]));}else
{content.appendChild(txt$1);}
builder.col+=1;
}
builder.map.push(builder.pos,builder.pos+1,txt$1);
builder.pos++;
}
}
builder.trailingSpace=displayText.charCodeAt(text.length-1)==32;
if(style||startStyle||endStyle||mustWrap||css){
var fullStyle=style||"";
if(startStyle){fullStyle+=startStyle;}
if(endStyle){fullStyle+=endStyle;}
var token=elt("span",[content],fullStyle,css);
if(title){token.title=title;}
return builder.content.appendChild(token);
}
builder.content.appendChild(content);
}

function splitSpaces(text,trailingBefore){
if(text.length>1&&!/  /.test(text)){return text;}
var spaceBefore=trailingBefore,result="";
for(var i=0;i<text.length;i++){
var ch=text.charAt(i);
if(ch==" "&&spaceBefore&&(i==text.length-1||text.charCodeAt(i+1)==32))
{ch='\xA0';}
result+=ch;
spaceBefore=ch==" ";
}
return result;
}



function buildTokenBadBidi(inner,order){
return function(builder,text,style,startStyle,endStyle,title,css){
style=style?style+" cm-force-border":"cm-force-border";
var start=builder.pos,end=start+text.length;
for(;;){

var part=void 0;
for(var i=0;i<order.length;i++){
part=order[i];
if(part.to>start&&part.from<=start){break;}
}
if(part.to>=end){return inner(builder,text,style,startStyle,endStyle,title,css);}
inner(builder,text.slice(0,part.to-start),style,startStyle,null,title,css);
startStyle=null;
text=text.slice(part.to-start);
start=part.to;
}
};
}

function buildCollapsedSpan(builder,size,marker,ignoreWidget){
var widget=!ignoreWidget&&marker.widgetNode;
if(widget){builder.map.push(builder.pos,builder.pos+size,widget);}
if(!ignoreWidget&&builder.cm.display.input.needsContentAttribute){
if(!widget)
{widget=builder.content.appendChild(document.createElement("span"));}
widget.setAttribute("cm-marker",marker.id);
}
if(widget){
builder.cm.display.input.setUneditable(widget);
builder.content.appendChild(widget);
}
builder.pos+=size;
builder.trailingSpace=false;
}



function insertLineContent(line,builder,styles){
var spans=line.markedSpans,allText=line.text,at=0;
if(!spans){
for(var i$1=1;i$1<styles.length;i$1+=2)
{builder.addToken(builder,allText.slice(at,at=styles[i$1]),interpretTokenStyle(styles[i$1+1],builder.cm.options));}
return;
}

var len=allText.length,pos=0,i=1,text="",style,css;
var nextChange=0,spanStyle,spanEndStyle,spanStartStyle,title,collapsed;
for(;;){
if(nextChange==pos){
spanStyle=spanEndStyle=spanStartStyle=title=css="";
collapsed=null;nextChange=Infinity;
var foundBookmarks=[],endStyles=void 0;
for(var j=0;j<spans.length;++j){
var sp=spans[j],m=sp.marker;
if(m.type=="bookmark"&&sp.from==pos&&m.widgetNode){
foundBookmarks.push(m);
}else if(sp.from<=pos&&(sp.to==null||sp.to>pos||m.collapsed&&sp.to==pos&&sp.from==pos)){
if(sp.to!=null&&sp.to!=pos&&nextChange>sp.to){
nextChange=sp.to;
spanEndStyle="";
}
if(m.className){spanStyle+=" "+m.className;}
if(m.css){css=(css?css+";":"")+m.css;}
if(m.startStyle&&sp.from==pos){spanStartStyle+=" "+m.startStyle;}
if(m.endStyle&&sp.to==nextChange){(endStyles||(endStyles=[])).push(m.endStyle,sp.to);}
if(m.title&&!title){title=m.title;}
if(m.collapsed&&(!collapsed||compareCollapsedMarkers(collapsed.marker,m)<0))
{collapsed=sp;}
}else if(sp.from>pos&&nextChange>sp.from){
nextChange=sp.from;
}
}
if(endStyles){for(var j$1=0;j$1<endStyles.length;j$1+=2)
{if(endStyles[j$1+1]==nextChange){spanEndStyle+=" "+endStyles[j$1];}}}

if(!collapsed||collapsed.from==pos){for(var j$2=0;j$2<foundBookmarks.length;++j$2)
{buildCollapsedSpan(builder,0,foundBookmarks[j$2]);}}
if(collapsed&&(collapsed.from||0)==pos){
buildCollapsedSpan(builder,(collapsed.to==null?len+1:collapsed.to)-pos,
collapsed.marker,collapsed.from==null);
if(collapsed.to==null){return;}
if(collapsed.to==pos){collapsed=false;}
}
}
if(pos>=len){break;}

var upto=Math.min(len,nextChange);
while(true){
if(text){
var end=pos+text.length;
if(!collapsed){
var tokenText=end>upto?text.slice(0,upto-pos):text;
builder.addToken(builder,tokenText,style?style+spanStyle:spanStyle,
spanStartStyle,pos+tokenText.length==nextChange?spanEndStyle:"",title,css);
}
if(end>=upto){text=text.slice(upto-pos);pos=upto;break;}
pos=end;
spanStartStyle="";
}
text=allText.slice(at,at=styles[i++]);
style=interpretTokenStyle(styles[i++],builder.cm.options);
}
}
}





function LineView(doc,line,lineN){

this.line=line;

this.rest=visualLineContinued(line);

this.size=this.rest?lineNo(lst(this.rest))-lineN+1:1;
this.node=this.text=null;
this.hidden=lineIsHidden(doc,line);
}


function buildViewArray(cm,from,to){
var array=[],nextPos;
for(var pos=from;pos<to;pos=nextPos){
var view=new LineView(cm.doc,getLine(cm.doc,pos),pos);
nextPos=pos+view.size;
array.push(view);
}
return array;
}

var operationGroup=null;

function pushOperation(op){
if(operationGroup){
operationGroup.ops.push(op);
}else{
op.ownsGroup=operationGroup={
ops:[op],
delayedCallbacks:[]};

}
}

function fireCallbacksForOps(group){


var callbacks=group.delayedCallbacks,i=0;
do{
for(;i<callbacks.length;i++)
{callbacks[i].call(null);}
for(var j=0;j<group.ops.length;j++){
var op=group.ops[j];
if(op.cursorActivityHandlers)
{while(op.cursorActivityCalled<op.cursorActivityHandlers.length)
{op.cursorActivityHandlers[op.cursorActivityCalled++].call(null,op.cm);}}
}
}while(i<callbacks.length);
}

function finishOperation(op,endCb){
var group=op.ownsGroup;
if(!group){return;}

try{fireCallbacksForOps(group);}finally
{
operationGroup=null;
endCb(group);
}
}

var orphanDelayedCallbacks=null;








function signalLater(emitter,type){
var arr=getHandlers(emitter,type);
if(!arr.length){return;}
var args=Array.prototype.slice.call(arguments,2),list;
if(operationGroup){
list=operationGroup.delayedCallbacks;
}else if(orphanDelayedCallbacks){
list=orphanDelayedCallbacks;
}else{
list=orphanDelayedCallbacks=[];
setTimeout(fireOrphanDelayed,0);
}
var loop=function loop(i){
list.push(function(){return arr[i].apply(null,args);});
};

for(var i=0;i<arr.length;++i){
loop(i);}
}

function fireOrphanDelayed(){
var delayed=orphanDelayedCallbacks;
orphanDelayedCallbacks=null;
for(var i=0;i<delayed.length;++i){delayed[i]();}
}




function updateLineForChanges(cm,lineView,lineN,dims){
for(var j=0;j<lineView.changes.length;j++){
var type=lineView.changes[j];
if(type=="text"){updateLineText(cm,lineView);}else
if(type=="gutter"){updateLineGutter(cm,lineView,lineN,dims);}else
if(type=="class"){updateLineClasses(lineView);}else
if(type=="widget"){updateLineWidgets(cm,lineView,dims);}
}
lineView.changes=null;
}



function ensureLineWrapped(lineView){
if(lineView.node==lineView.text){
lineView.node=elt("div",null,null,"position: relative");
if(lineView.text.parentNode)
{lineView.text.parentNode.replaceChild(lineView.node,lineView.text);}
lineView.node.appendChild(lineView.text);
if(ie&&ie_version<8){lineView.node.style.zIndex=2;}
}
return lineView.node;
}

function updateLineBackground(lineView){
var cls=lineView.bgClass?lineView.bgClass+" "+(lineView.line.bgClass||""):lineView.line.bgClass;
if(cls){cls+=" CodeMirror-linebackground";}
if(lineView.background){
if(cls){lineView.background.className=cls;}else
{lineView.background.parentNode.removeChild(lineView.background);lineView.background=null;}
}else if(cls){
var wrap=ensureLineWrapped(lineView);
lineView.background=wrap.insertBefore(elt("div",null,cls),wrap.firstChild);
}
}



function getLineContent(cm,lineView){
var ext=cm.display.externalMeasured;
if(ext&&ext.line==lineView.line){
cm.display.externalMeasured=null;
lineView.measure=ext.measure;
return ext.built;
}
return buildLineContent(cm,lineView);
}




function updateLineText(cm,lineView){
var cls=lineView.text.className;
var built=getLineContent(cm,lineView);
if(lineView.text==lineView.node){lineView.node=built.pre;}
lineView.text.parentNode.replaceChild(built.pre,lineView.text);
lineView.text=built.pre;
if(built.bgClass!=lineView.bgClass||built.textClass!=lineView.textClass){
lineView.bgClass=built.bgClass;
lineView.textClass=built.textClass;
updateLineClasses(lineView);
}else if(cls){
lineView.text.className=cls;
}
}

function updateLineClasses(lineView){
updateLineBackground(lineView);
if(lineView.line.wrapClass)
{ensureLineWrapped(lineView).className=lineView.line.wrapClass;}else
if(lineView.node!=lineView.text)
{lineView.node.className="";}
var textClass=lineView.textClass?lineView.textClass+" "+(lineView.line.textClass||""):lineView.line.textClass;
lineView.text.className=textClass||"";
}

function updateLineGutter(cm,lineView,lineN,dims){
if(lineView.gutter){
lineView.node.removeChild(lineView.gutter);
lineView.gutter=null;
}
if(lineView.gutterBackground){
lineView.node.removeChild(lineView.gutterBackground);
lineView.gutterBackground=null;
}
if(lineView.line.gutterClass){
var wrap=ensureLineWrapped(lineView);
lineView.gutterBackground=elt("div",null,"CodeMirror-gutter-background "+lineView.line.gutterClass,
"left: "+(cm.options.fixedGutter?dims.fixedPos:-dims.gutterTotalWidth)+"px; width: "+dims.gutterTotalWidth+"px");
wrap.insertBefore(lineView.gutterBackground,lineView.text);
}
var markers=lineView.line.gutterMarkers;
if(cm.options.lineNumbers||markers){
var wrap$1=ensureLineWrapped(lineView);
var gutterWrap=lineView.gutter=elt("div",null,"CodeMirror-gutter-wrapper","left: "+(cm.options.fixedGutter?dims.fixedPos:-dims.gutterTotalWidth)+"px");
cm.display.input.setUneditable(gutterWrap);
wrap$1.insertBefore(gutterWrap,lineView.text);
if(lineView.line.gutterClass)
{gutterWrap.className+=" "+lineView.line.gutterClass;}
if(cm.options.lineNumbers&&(!markers||!markers["CodeMirror-linenumbers"]))
{lineView.lineNumber=gutterWrap.appendChild(
elt("div",lineNumberFor(cm.options,lineN),
"CodeMirror-linenumber CodeMirror-gutter-elt",
"left: "+dims.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+cm.display.lineNumInnerWidth+"px"));}
if(markers){for(var k=0;k<cm.options.gutters.length;++k){
var id=cm.options.gutters[k],found=markers.hasOwnProperty(id)&&markers[id];
if(found)
{gutterWrap.appendChild(elt("div",[found],"CodeMirror-gutter-elt",
"left: "+dims.gutterLeft[id]+"px; width: "+dims.gutterWidth[id]+"px"));}
}}
}
}

function updateLineWidgets(cm,lineView,dims){
if(lineView.alignable){lineView.alignable=null;}
for(var node=lineView.node.firstChild,next=void 0;node;node=next){
next=node.nextSibling;
if(node.className=="CodeMirror-linewidget")
{lineView.node.removeChild(node);}
}
insertLineWidgets(cm,lineView,dims);
}


function buildLineElement(cm,lineView,lineN,dims){
var built=getLineContent(cm,lineView);
lineView.text=lineView.node=built.pre;
if(built.bgClass){lineView.bgClass=built.bgClass;}
if(built.textClass){lineView.textClass=built.textClass;}

updateLineClasses(lineView);
updateLineGutter(cm,lineView,lineN,dims);
insertLineWidgets(cm,lineView,dims);
return lineView.node;
}



function insertLineWidgets(cm,lineView,dims){
insertLineWidgetsFor(cm,lineView.line,lineView,dims,true);
if(lineView.rest){for(var i=0;i<lineView.rest.length;i++)
{insertLineWidgetsFor(cm,lineView.rest[i],lineView,dims,false);}}
}

function insertLineWidgetsFor(cm,line,lineView,dims,allowAbove){
if(!line.widgets){return;}
var wrap=ensureLineWrapped(lineView);
for(var i=0,ws=line.widgets;i<ws.length;++i){
var widget=ws[i],node=elt("div",[widget.node],"CodeMirror-linewidget");
if(!widget.handleMouseEvents){node.setAttribute("cm-ignore-events","true");}
positionLineWidget(widget,node,lineView,dims);
cm.display.input.setUneditable(node);
if(allowAbove&&widget.above)
{wrap.insertBefore(node,lineView.gutter||lineView.text);}else

{wrap.appendChild(node);}
signalLater(widget,"redraw");
}
}

function positionLineWidget(widget,node,lineView,dims){
if(widget.noHScroll){
;(lineView.alignable||(lineView.alignable=[])).push(node);
var width=dims.wrapperWidth;
node.style.left=dims.fixedPos+"px";
if(!widget.coverGutter){
width-=dims.gutterTotalWidth;
node.style.paddingLeft=dims.gutterTotalWidth+"px";
}
node.style.width=width+"px";
}
if(widget.coverGutter){
node.style.zIndex=5;
node.style.position="relative";
if(!widget.noHScroll){node.style.marginLeft=-dims.gutterTotalWidth+"px";}
}
}

function widgetHeight(widget){
if(widget.height!=null){return widget.height;}
var cm=widget.doc.cm;
if(!cm){return 0;}
if(!contains(document.body,widget.node)){
var parentStyle="position: relative;";
if(widget.coverGutter)
{parentStyle+="margin-left: -"+cm.display.gutters.offsetWidth+"px;";}
if(widget.noHScroll)
{parentStyle+="width: "+cm.display.wrapper.clientWidth+"px;";}
removeChildrenAndAdd(cm.display.measure,elt("div",[widget.node],null,parentStyle));
}
return widget.height=widget.node.parentNode.offsetHeight;
}


function eventInWidget(display,e){
for(var n=e_target(e);n!=display.wrapper;n=n.parentNode){
if(!n||n.nodeType==1&&n.getAttribute("cm-ignore-events")=="true"||
n.parentNode==display.sizer&&n!=display.mover)
{return true;}
}
}



function paddingTop(display){return display.lineSpace.offsetTop;}
function paddingVert(display){return display.mover.offsetHeight-display.lineSpace.offsetHeight;}
function paddingH(display){
if(display.cachedPaddingH){return display.cachedPaddingH;}
var e=removeChildrenAndAdd(display.measure,elt("pre","x"));
var style=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle;
var data={left:parseInt(style.paddingLeft),right:parseInt(style.paddingRight)};
if(!isNaN(data.left)&&!isNaN(data.right)){display.cachedPaddingH=data;}
return data;
}

function scrollGap(cm){return scrollerGap-cm.display.nativeBarWidth;}
function displayWidth(cm){
return cm.display.scroller.clientWidth-scrollGap(cm)-cm.display.barWidth;
}
function displayHeight(cm){
return cm.display.scroller.clientHeight-scrollGap(cm)-cm.display.barHeight;
}





function ensureLineHeights(cm,lineView,rect){
var wrapping=cm.options.lineWrapping;
var curWidth=wrapping&&displayWidth(cm);
if(!lineView.measure.heights||wrapping&&lineView.measure.width!=curWidth){
var heights=lineView.measure.heights=[];
if(wrapping){
lineView.measure.width=curWidth;
var rects=lineView.text.firstChild.getClientRects();
for(var i=0;i<rects.length-1;i++){
var cur=rects[i],next=rects[i+1];
if(Math.abs(cur.bottom-next.bottom)>2)
{heights.push((cur.bottom+next.top)/2-rect.top);}
}
}
heights.push(rect.bottom-rect.top);
}
}




function mapFromLineView(lineView,line,lineN){
if(lineView.line==line)
{return{map:lineView.measure.map,cache:lineView.measure.cache};}
for(var i=0;i<lineView.rest.length;i++)
{if(lineView.rest[i]==line)
{return{map:lineView.measure.maps[i],cache:lineView.measure.caches[i]};}}
for(var i$1=0;i$1<lineView.rest.length;i$1++)
{if(lineNo(lineView.rest[i$1])>lineN)
{return{map:lineView.measure.maps[i$1],cache:lineView.measure.caches[i$1],before:true};}}
}



function updateExternalMeasurement(cm,line){
line=visualLine(line);
var lineN=lineNo(line);
var view=cm.display.externalMeasured=new LineView(cm.doc,line,lineN);
view.lineN=lineN;
var built=view.built=buildLineContent(cm,view);
view.text=built.pre;
removeChildrenAndAdd(cm.display.lineMeasure,built.pre);
return view;
}



function measureChar(cm,line,ch,bias){
return measureCharPrepared(cm,prepareMeasureForLine(cm,line),ch,bias);
}


function findViewForLine(cm,lineN){
if(lineN>=cm.display.viewFrom&&lineN<cm.display.viewTo)
{return cm.display.view[findViewIndex(cm,lineN)];}
var ext=cm.display.externalMeasured;
if(ext&&lineN>=ext.lineN&&lineN<ext.lineN+ext.size)
{return ext;}
}






function prepareMeasureForLine(cm,line){
var lineN=lineNo(line);
var view=findViewForLine(cm,lineN);
if(view&&!view.text){
view=null;
}else if(view&&view.changes){
updateLineForChanges(cm,view,lineN,getDimensions(cm));
cm.curOp.forceUpdate=true;
}
if(!view)
{view=updateExternalMeasurement(cm,line);}

var info=mapFromLineView(view,line,lineN);
return{
line:line,view:view,rect:null,
map:info.map,cache:info.cache,before:info.before,
hasHeights:false};

}



function measureCharPrepared(cm,prepared,ch,bias,varHeight){
if(prepared.before){ch=-1;}
var key=ch+(bias||""),found;
if(prepared.cache.hasOwnProperty(key)){
found=prepared.cache[key];
}else{
if(!prepared.rect)
{prepared.rect=prepared.view.text.getBoundingClientRect();}
if(!prepared.hasHeights){
ensureLineHeights(cm,prepared.view,prepared.rect);
prepared.hasHeights=true;
}
found=measureCharInner(cm,prepared,ch,bias);
if(!found.bogus){prepared.cache[key]=found;}
}
return{left:found.left,right:found.right,
top:varHeight?found.rtop:found.top,
bottom:varHeight?found.rbottom:found.bottom};
}

var nullRect={left:0,right:0,top:0,bottom:0};

function nodeAndOffsetInLineMap(map,ch,bias){
var node,start,end,collapse,mStart,mEnd;


for(var i=0;i<map.length;i+=3){
mStart=map[i];
mEnd=map[i+1];
if(ch<mStart){
start=0;end=1;
collapse="left";
}else if(ch<mEnd){
start=ch-mStart;
end=start+1;
}else if(i==map.length-3||ch==mEnd&&map[i+3]>ch){
end=mEnd-mStart;
start=end-1;
if(ch>=mEnd){collapse="right";}
}
if(start!=null){
node=map[i+2];
if(mStart==mEnd&&bias==(node.insertLeft?"left":"right"))
{collapse=bias;}
if(bias=="left"&&start==0)
{while(i&&map[i-2]==map[i-3]&&map[i-1].insertLeft){
node=map[(i-=3)+2];
collapse="left";
}}
if(bias=="right"&&start==mEnd-mStart)
{while(i<map.length-3&&map[i+3]==map[i+4]&&!map[i+5].insertLeft){
node=map[(i+=3)+2];
collapse="right";
}}
break;
}
}
return{node:node,start:start,end:end,collapse:collapse,coverStart:mStart,coverEnd:mEnd};
}

function getUsefulRect(rects,bias){
var rect=nullRect;
if(bias=="left"){for(var i=0;i<rects.length;i++){
if((rect=rects[i]).left!=rect.right){break;}
}}else{for(var i$1=rects.length-1;i$1>=0;i$1--){
if((rect=rects[i$1]).left!=rect.right){break;}
}}
return rect;
}

function measureCharInner(cm,prepared,ch,bias){
var place=nodeAndOffsetInLineMap(prepared.map,ch,bias);
var node=place.node,start=place.start,end=place.end,collapse=place.collapse;

var rect;
if(node.nodeType==3){
for(var i$1=0;i$1<4;i$1++){
while(start&&isExtendingChar(prepared.line.text.charAt(place.coverStart+start))){--start;}
while(place.coverStart+end<place.coverEnd&&isExtendingChar(prepared.line.text.charAt(place.coverStart+end))){++end;}
if(ie&&ie_version<9&&start==0&&end==place.coverEnd-place.coverStart)
{rect=node.parentNode.getBoundingClientRect();}else

{rect=getUsefulRect(range(node,start,end).getClientRects(),bias);}
if(rect.left||rect.right||start==0){break;}
end=start;
start=start-1;
collapse="right";
}
if(ie&&ie_version<11){rect=maybeUpdateRectForZooming(cm.display.measure,rect);}
}else{
if(start>0){collapse=bias="right";}
var rects;
if(cm.options.lineWrapping&&(rects=node.getClientRects()).length>1)
{rect=rects[bias=="right"?rects.length-1:0];}else

{rect=node.getBoundingClientRect();}
}
if(ie&&ie_version<9&&!start&&(!rect||!rect.left&&!rect.right)){
var rSpan=node.parentNode.getClientRects()[0];
if(rSpan)
{rect={left:rSpan.left,right:rSpan.left+charWidth(cm.display),top:rSpan.top,bottom:rSpan.bottom};}else

{rect=nullRect;}
}

var rtop=rect.top-prepared.rect.top,rbot=rect.bottom-prepared.rect.top;
var mid=(rtop+rbot)/2;
var heights=prepared.view.measure.heights;
var i=0;
for(;i<heights.length-1;i++)
{if(mid<heights[i]){break;}}
var top=i?heights[i-1]:0,bot=heights[i];
var result={left:(collapse=="right"?rect.right:rect.left)-prepared.rect.left,
right:(collapse=="left"?rect.left:rect.right)-prepared.rect.left,
top:top,bottom:bot};
if(!rect.left&&!rect.right){result.bogus=true;}
if(!cm.options.singleCursorHeightPerLine){result.rtop=rtop;result.rbottom=rbot;}

return result;
}



function maybeUpdateRectForZooming(measure,rect){
if(!window.screen||screen.logicalXDPI==null||
screen.logicalXDPI==screen.deviceXDPI||!hasBadZoomedRects(measure))
{return rect;}
var scaleX=screen.logicalXDPI/screen.deviceXDPI;
var scaleY=screen.logicalYDPI/screen.deviceYDPI;
return{left:rect.left*scaleX,right:rect.right*scaleX,
top:rect.top*scaleY,bottom:rect.bottom*scaleY};
}

function clearLineMeasurementCacheFor(lineView){
if(lineView.measure){
lineView.measure.cache={};
lineView.measure.heights=null;
if(lineView.rest){for(var i=0;i<lineView.rest.length;i++)
{lineView.measure.caches[i]={};}}
}
}

function clearLineMeasurementCache(cm){
cm.display.externalMeasure=null;
removeChildren(cm.display.lineMeasure);
for(var i=0;i<cm.display.view.length;i++)
{clearLineMeasurementCacheFor(cm.display.view[i]);}
}

function clearCaches(cm){
clearLineMeasurementCache(cm);
cm.display.cachedCharWidth=cm.display.cachedTextHeight=cm.display.cachedPaddingH=null;
if(!cm.options.lineWrapping){cm.display.maxLineChanged=true;}
cm.display.lineNumChars=null;
}

function pageScrollX(){return window.pageXOffset||(document.documentElement||document.body).scrollLeft;}
function pageScrollY(){return window.pageYOffset||(document.documentElement||document.body).scrollTop;}





function intoCoordSystem(cm,lineObj,rect,context,includeWidgets){
if(!includeWidgets&&lineObj.widgets){for(var i=0;i<lineObj.widgets.length;++i){if(lineObj.widgets[i].above){
var size=widgetHeight(lineObj.widgets[i]);
rect.top+=size;rect.bottom+=size;
}}}
if(context=="line"){return rect;}
if(!context){context="local";}
var yOff=_heightAtLine(lineObj);
if(context=="local"){yOff+=paddingTop(cm.display);}else
{yOff-=cm.display.viewOffset;}
if(context=="page"||context=="window"){
var lOff=cm.display.lineSpace.getBoundingClientRect();
yOff+=lOff.top+(context=="window"?0:pageScrollY());
var xOff=lOff.left+(context=="window"?0:pageScrollX());
rect.left+=xOff;rect.right+=xOff;
}
rect.top+=yOff;rect.bottom+=yOff;
return rect;
}



function fromCoordSystem(cm,coords,context){
if(context=="div"){return coords;}
var left=coords.left,top=coords.top;

if(context=="page"){
left-=pageScrollX();
top-=pageScrollY();
}else if(context=="local"||!context){
var localBox=cm.display.sizer.getBoundingClientRect();
left+=localBox.left;
top+=localBox.top;
}

var lineSpaceBox=cm.display.lineSpace.getBoundingClientRect();
return{left:left-lineSpaceBox.left,top:top-lineSpaceBox.top};
}

function _charCoords(cm,pos,context,lineObj,bias){
if(!lineObj){lineObj=getLine(cm.doc,pos.line);}
return intoCoordSystem(cm,lineObj,measureChar(cm,lineObj,pos.ch,bias),context);
}




function _cursorCoords(cm,pos,context,lineObj,preparedMeasure,varHeight){
lineObj=lineObj||getLine(cm.doc,pos.line);
if(!preparedMeasure){preparedMeasure=prepareMeasureForLine(cm,lineObj);}
function get(ch,right){
var m=measureCharPrepared(cm,preparedMeasure,ch,right?"right":"left",varHeight);
if(right){m.left=m.right;}else{m.right=m.left;}
return intoCoordSystem(cm,lineObj,m,context);
}
function getBidi(ch,partPos){
var part=order[partPos],right=part.level%2;
if(ch==bidiLeft(part)&&partPos&&part.level<order[partPos-1].level){
part=order[--partPos];
ch=bidiRight(part)-(part.level%2?0:1);
right=true;
}else if(ch==bidiRight(part)&&partPos<order.length-1&&part.level<order[partPos+1].level){
part=order[++partPos];
ch=bidiLeft(part)-part.level%2;
right=false;
}
if(right&&ch==part.to&&ch>part.from){return get(ch-1);}
return get(ch,right);
}
var order=getOrder(lineObj),ch=pos.ch;
if(!order){return get(ch);}
var partPos=getBidiPartAt(order,ch);
var val=getBidi(ch,partPos);
if(bidiOther!=null){val.other=getBidi(ch,bidiOther);}
return val;
}



function estimateCoords(cm,pos){
var left=0;
pos=_clipPos(cm.doc,pos);
if(!cm.options.lineWrapping){left=charWidth(cm.display)*pos.ch;}
var lineObj=getLine(cm.doc,pos.line);
var top=_heightAtLine(lineObj)+paddingTop(cm.display);
return{left:left,right:left,top:top,bottom:top+lineObj.height};
}







function PosWithInfo(line,ch,outside,xRel){
var pos=Pos(line,ch);
pos.xRel=xRel;
if(outside){pos.outside=true;}
return pos;
}



function _coordsChar(cm,x,y){
var doc=cm.doc;
y+=cm.display.viewOffset;
if(y<0){return PosWithInfo(doc.first,0,true,-1);}
var lineN=_lineAtHeight(doc,y),last=doc.first+doc.size-1;
if(lineN>last)
{return PosWithInfo(doc.first+doc.size-1,getLine(doc,last).text.length,true,1);}
if(x<0){x=0;}

var lineObj=getLine(doc,lineN);
for(;;){
var found=coordsCharInner(cm,lineObj,lineN,x,y);
var merged=collapsedSpanAtEnd(lineObj);
var mergedPos=merged&&merged.find(0,true);
if(merged&&(found.ch>mergedPos.from.ch||found.ch==mergedPos.from.ch&&found.xRel>0))
{lineN=lineNo(lineObj=mergedPos.to.line);}else

{return found;}
}
}

function coordsCharInner(cm,lineObj,lineNo,x,y){
var innerOff=y-_heightAtLine(lineObj);
var wrongLine=false,adjust=2*cm.display.wrapper.clientWidth;
var preparedMeasure=prepareMeasureForLine(cm,lineObj);

function getX(ch){
var sp=_cursorCoords(cm,Pos(lineNo,ch),"line",lineObj,preparedMeasure);
wrongLine=true;
if(innerOff>sp.bottom){return sp.left-adjust;}else
if(innerOff<sp.top){return sp.left+adjust;}else
{wrongLine=false;}
return sp.left;
}

var bidi=getOrder(lineObj),dist=lineObj.text.length;
var from=lineLeft(lineObj),to=lineRight(lineObj);
var fromX=getX(from),fromOutside=wrongLine,toX=getX(to),toOutside=wrongLine;

if(x>toX){return PosWithInfo(lineNo,to,toOutside,1);}

for(;;){
if(bidi?to==from||to==moveVisually(lineObj,from,1):to-from<=1){
var ch=x<fromX||x-fromX<=toX-x?from:to;
var outside=ch==from?fromOutside:toOutside;
var xDiff=x-(ch==from?fromX:toX);




if(toOutside&&!bidi&&!/\s/.test(lineObj.text.charAt(ch))&&xDiff>0&&
ch<lineObj.text.length&&preparedMeasure.view.measure.heights.length>1){
var charSize=measureCharPrepared(cm,preparedMeasure,ch,"right");
if(innerOff<=charSize.bottom&&innerOff>=charSize.top&&Math.abs(x-charSize.right)<xDiff){
outside=false;
ch++;
xDiff=x-charSize.right;
}
}
while(isExtendingChar(lineObj.text.charAt(ch))){++ch;}
var pos=PosWithInfo(lineNo,ch,outside,xDiff<-1?-1:xDiff>1?1:0);
return pos;
}
var step=Math.ceil(dist/2),middle=from+step;
if(bidi){
middle=from;
for(var i=0;i<step;++i){middle=moveVisually(lineObj,middle,1);}
}
var middleX=getX(middle);
if(middleX>x){to=middle;toX=middleX;if(toOutside=wrongLine){toX+=1000;}dist=step;}else
{from=middle;fromX=middleX;fromOutside=wrongLine;dist-=step;}
}
}

var measureText;

function textHeight(display){
if(display.cachedTextHeight!=null){return display.cachedTextHeight;}
if(measureText==null){
measureText=elt("pre");


for(var i=0;i<49;++i){
measureText.appendChild(document.createTextNode("x"));
measureText.appendChild(elt("br"));
}
measureText.appendChild(document.createTextNode("x"));
}
removeChildrenAndAdd(display.measure,measureText);
var height=measureText.offsetHeight/50;
if(height>3){display.cachedTextHeight=height;}
removeChildren(display.measure);
return height||1;
}


function charWidth(display){
if(display.cachedCharWidth!=null){return display.cachedCharWidth;}
var anchor=elt("span","xxxxxxxxxx");
var pre=elt("pre",[anchor]);
removeChildrenAndAdd(display.measure,pre);
var rect=anchor.getBoundingClientRect(),width=(rect.right-rect.left)/10;
if(width>2){display.cachedCharWidth=width;}
return width||10;
}



function getDimensions(cm){
var d=cm.display,left={},width={};
var gutterLeft=d.gutters.clientLeft;
for(var n=d.gutters.firstChild,i=0;n;n=n.nextSibling,++i){
left[cm.options.gutters[i]]=n.offsetLeft+n.clientLeft+gutterLeft;
width[cm.options.gutters[i]]=n.clientWidth;
}
return{fixedPos:compensateForHScroll(d),
gutterTotalWidth:d.gutters.offsetWidth,
gutterLeft:left,
gutterWidth:width,
wrapperWidth:d.wrapper.clientWidth};
}




function compensateForHScroll(display){
return display.scroller.getBoundingClientRect().left-display.sizer.getBoundingClientRect().left;
}




function estimateHeight(cm){
var th=textHeight(cm.display),wrapping=cm.options.lineWrapping;
var perLine=wrapping&&Math.max(5,cm.display.scroller.clientWidth/charWidth(cm.display)-3);
return function(line){
if(lineIsHidden(cm.doc,line)){return 0;}

var widgetsHeight=0;
if(line.widgets){for(var i=0;i<line.widgets.length;i++){
if(line.widgets[i].height){widgetsHeight+=line.widgets[i].height;}
}}

if(wrapping)
{return widgetsHeight+(Math.ceil(line.text.length/perLine)||1)*th;}else

{return widgetsHeight+th;}
};
}

function estimateLineHeights(cm){
var doc=cm.doc,est=estimateHeight(cm);
doc.iter(function(line){
var estHeight=est(line);
if(estHeight!=line.height){updateLineHeight(line,estHeight);}
});
}






function posFromMouse(cm,e,liberal,forRect){
var display=cm.display;
if(!liberal&&e_target(e).getAttribute("cm-not-content")=="true"){return null;}

var x,y,space=display.lineSpace.getBoundingClientRect();

try{x=e.clientX-space.left;y=e.clientY-space.top;}
catch(e){return null;}
var coords=_coordsChar(cm,x,y),line;
if(forRect&&coords.xRel==1&&(line=getLine(cm.doc,coords.line).text).length==coords.ch){
var colDiff=countColumn(line,line.length,cm.options.tabSize)-line.length;
coords=Pos(coords.line,Math.max(0,Math.round((x-paddingH(cm.display).left)/charWidth(cm.display))-colDiff));
}
return coords;
}



function findViewIndex(cm,n){
if(n>=cm.display.viewTo){return null;}
n-=cm.display.viewFrom;
if(n<0){return null;}
var view=cm.display.view;
for(var i=0;i<view.length;i++){
n-=view[i].size;
if(n<0){return i;}
}
}

function updateSelection(cm){
cm.display.input.showSelection(cm.display.input.prepareSelection());
}

function prepareSelection(cm,primary){
var doc=cm.doc,result={};
var curFragment=result.cursors=document.createDocumentFragment();
var selFragment=result.selection=document.createDocumentFragment();

for(var i=0;i<doc.sel.ranges.length;i++){
if(primary===false&&i==doc.sel.primIndex){continue;}
var range=doc.sel.ranges[i];
if(range.from().line>=cm.display.viewTo||range.to().line<cm.display.viewFrom){continue;}
var collapsed=range.empty();
if(collapsed||cm.options.showCursorWhenSelecting)
{drawSelectionCursor(cm,range.head,curFragment);}
if(!collapsed)
{drawSelectionRange(cm,range,selFragment);}
}
return result;
}


function drawSelectionCursor(cm,head,output){
var pos=_cursorCoords(cm,head,"div",null,null,!cm.options.singleCursorHeightPerLine);

var cursor=output.appendChild(elt("div",'\xA0',"CodeMirror-cursor"));
cursor.style.left=pos.left+"px";
cursor.style.top=pos.top+"px";
cursor.style.height=Math.max(0,pos.bottom-pos.top)*cm.options.cursorHeight+"px";

if(pos.other){

var otherCursor=output.appendChild(elt("div",'\xA0',"CodeMirror-cursor CodeMirror-secondarycursor"));
otherCursor.style.display="";
otherCursor.style.left=pos.other.left+"px";
otherCursor.style.top=pos.other.top+"px";
otherCursor.style.height=(pos.other.bottom-pos.other.top)*.85+"px";
}
}


function drawSelectionRange(cm,range,output){
var display=cm.display,doc=cm.doc;
var fragment=document.createDocumentFragment();
var padding=paddingH(cm.display),leftSide=padding.left;
var rightSide=Math.max(display.sizerWidth,displayWidth(cm)-display.sizer.offsetLeft)-padding.right;

function add(left,top,width,bottom){
if(top<0){top=0;}
top=Math.round(top);
bottom=Math.round(bottom);
fragment.appendChild(elt("div",null,"CodeMirror-selected","position: absolute; left: "+left+"px;\n                             top: "+top+"px; width: "+(width==null?rightSide-left:width)+"px;\n                             height: "+(bottom-top)+"px"));
}

function drawForLine(line,fromArg,toArg){
var lineObj=getLine(doc,line);
var lineLen=lineObj.text.length;
var start,end;
function coords(ch,bias){
return _charCoords(cm,Pos(line,ch),"div",lineObj,bias);
}

iterateBidiSections(getOrder(lineObj),fromArg||0,toArg==null?lineLen:toArg,function(from,to,dir){
var leftPos=coords(from,"left"),rightPos,left,right;
if(from==to){
rightPos=leftPos;
left=right=leftPos.left;
}else{
rightPos=coords(to-1,"right");
if(dir=="rtl"){var tmp=leftPos;leftPos=rightPos;rightPos=tmp;}
left=leftPos.left;
right=rightPos.right;
}
if(fromArg==null&&from==0){left=leftSide;}
if(rightPos.top-leftPos.top>3){
add(left,leftPos.top,null,leftPos.bottom);
left=leftSide;
if(leftPos.bottom<rightPos.top){add(left,leftPos.bottom,null,rightPos.top);}
}
if(toArg==null&&to==lineLen){right=rightSide;}
if(!start||leftPos.top<start.top||leftPos.top==start.top&&leftPos.left<start.left)
{start=leftPos;}
if(!end||rightPos.bottom>end.bottom||rightPos.bottom==end.bottom&&rightPos.right>end.right)
{end=rightPos;}
if(left<leftSide+1){left=leftSide;}
add(left,rightPos.top,right-left,rightPos.bottom);
});
return{start:start,end:end};
}

var sFrom=range.from(),sTo=range.to();
if(sFrom.line==sTo.line){
drawForLine(sFrom.line,sFrom.ch,sTo.ch);
}else{
var fromLine=getLine(doc,sFrom.line),toLine=getLine(doc,sTo.line);
var singleVLine=visualLine(fromLine)==visualLine(toLine);
var leftEnd=drawForLine(sFrom.line,sFrom.ch,singleVLine?fromLine.text.length+1:null).end;
var rightStart=drawForLine(sTo.line,singleVLine?0:null,sTo.ch).start;
if(singleVLine){
if(leftEnd.top<rightStart.top-2){
add(leftEnd.right,leftEnd.top,null,leftEnd.bottom);
add(leftSide,rightStart.top,rightStart.left,rightStart.bottom);
}else{
add(leftEnd.right,leftEnd.top,rightStart.left-leftEnd.right,leftEnd.bottom);
}
}
if(leftEnd.bottom<rightStart.top)
{add(leftSide,leftEnd.bottom,null,rightStart.top);}
}

output.appendChild(fragment);
}


function restartBlink(cm){
if(!cm.state.focused){return;}
var display=cm.display;
clearInterval(display.blinker);
var on=true;
display.cursorDiv.style.visibility="";
if(cm.options.cursorBlinkRate>0)
{display.blinker=setInterval(function(){return display.cursorDiv.style.visibility=(on=!on)?"":"hidden";},
cm.options.cursorBlinkRate);}else
if(cm.options.cursorBlinkRate<0)
{display.cursorDiv.style.visibility="hidden";}
}

function ensureFocus(cm){
if(!cm.state.focused){cm.display.input.focus();onFocus(cm);}
}

function delayBlurEvent(cm){
cm.state.delayingBlurEvent=true;
setTimeout(function(){if(cm.state.delayingBlurEvent){
cm.state.delayingBlurEvent=false;
onBlur(cm);
}},100);
}

function onFocus(cm,e){
if(cm.state.delayingBlurEvent){cm.state.delayingBlurEvent=false;}

if(cm.options.readOnly=="nocursor"){return;}
if(!cm.state.focused){
signal(cm,"focus",cm,e);
cm.state.focused=true;
addClass(cm.display.wrapper,"CodeMirror-focused");



if(!cm.curOp&&cm.display.selForContextMenu!=cm.doc.sel){
cm.display.input.reset();
if(webkit){setTimeout(function(){return cm.display.input.reset(true);},20);}
}
cm.display.input.receivedFocus();
}
restartBlink(cm);
}
function onBlur(cm,e){
if(cm.state.delayingBlurEvent){return;}

if(cm.state.focused){
signal(cm,"blur",cm,e);
cm.state.focused=false;
rmClass(cm.display.wrapper,"CodeMirror-focused");
}
clearInterval(cm.display.blinker);
setTimeout(function(){if(!cm.state.focused){cm.display.shift=false;}},150);
}



function alignHorizontally(cm){
var display=cm.display,view=display.view;
if(!display.alignWidgets&&(!display.gutters.firstChild||!cm.options.fixedGutter)){return;}
var comp=compensateForHScroll(display)-display.scroller.scrollLeft+cm.doc.scrollLeft;
var gutterW=display.gutters.offsetWidth,left=comp+"px";
for(var i=0;i<view.length;i++){if(!view[i].hidden){
if(cm.options.fixedGutter){
if(view[i].gutter)
{view[i].gutter.style.left=left;}
if(view[i].gutterBackground)
{view[i].gutterBackground.style.left=left;}
}
var align=view[i].alignable;
if(align){for(var j=0;j<align.length;j++)
{align[j].style.left=left;}}
}}
if(cm.options.fixedGutter)
{display.gutters.style.left=comp+gutterW+"px";}
}




function maybeUpdateLineNumberWidth(cm){
if(!cm.options.lineNumbers){return false;}
var doc=cm.doc,last=lineNumberFor(cm.options,doc.first+doc.size-1),display=cm.display;
if(last.length!=display.lineNumChars){
var test=display.measure.appendChild(elt("div",[elt("div",last)],
"CodeMirror-linenumber CodeMirror-gutter-elt"));
var innerW=test.firstChild.offsetWidth,padding=test.offsetWidth-innerW;
display.lineGutter.style.width="";
display.lineNumInnerWidth=Math.max(innerW,display.lineGutter.offsetWidth-padding)+1;
display.lineNumWidth=display.lineNumInnerWidth+padding;
display.lineNumChars=display.lineNumInnerWidth?last.length:-1;
display.lineGutter.style.width=display.lineNumWidth+"px";
updateGutterSpace(cm);
return true;
}
return false;
}



function updateHeightsInViewport(cm){
var display=cm.display;
var prevBottom=display.lineDiv.offsetTop;
for(var i=0;i<display.view.length;i++){
var cur=display.view[i],height=void 0;
if(cur.hidden){continue;}
if(ie&&ie_version<8){
var bot=cur.node.offsetTop+cur.node.offsetHeight;
height=bot-prevBottom;
prevBottom=bot;
}else{
var box=cur.node.getBoundingClientRect();
height=box.bottom-box.top;
}
var diff=cur.line.height-height;
if(height<2){height=textHeight(display);}
if(diff>.001||diff<-.001){
updateLineHeight(cur.line,height);
updateWidgetHeight(cur.line);
if(cur.rest){for(var j=0;j<cur.rest.length;j++)
{updateWidgetHeight(cur.rest[j]);}}
}
}
}



function updateWidgetHeight(line){
if(line.widgets){for(var i=0;i<line.widgets.length;++i)
{line.widgets[i].height=line.widgets[i].node.parentNode.offsetHeight;}}
}




function visibleLines(display,doc,viewport){
var top=viewport&&viewport.top!=null?Math.max(0,viewport.top):display.scroller.scrollTop;
top=Math.floor(top-paddingTop(display));
var bottom=viewport&&viewport.bottom!=null?viewport.bottom:top+display.wrapper.clientHeight;

var from=_lineAtHeight(doc,top),to=_lineAtHeight(doc,bottom);


if(viewport&&viewport.ensure){
var ensureFrom=viewport.ensure.from.line,ensureTo=viewport.ensure.to.line;
if(ensureFrom<from){
from=ensureFrom;
to=_lineAtHeight(doc,_heightAtLine(getLine(doc,ensureFrom))+display.wrapper.clientHeight);
}else if(Math.min(ensureTo,doc.lastLine())>=to){
from=_lineAtHeight(doc,_heightAtLine(getLine(doc,ensureTo))-display.wrapper.clientHeight);
to=ensureTo;
}
}
return{from:from,to:Math.max(to,from+1)};
}



function setScrollTop(cm,val){
if(Math.abs(cm.doc.scrollTop-val)<2){return;}
cm.doc.scrollTop=val;
if(!gecko){updateDisplaySimple(cm,{top:val});}
if(cm.display.scroller.scrollTop!=val){cm.display.scroller.scrollTop=val;}
cm.display.scrollbars.setScrollTop(val);
if(gecko){updateDisplaySimple(cm);}
startWorker(cm,100);
}


function setScrollLeft(cm,val,isScroller){
if(isScroller?val==cm.doc.scrollLeft:Math.abs(cm.doc.scrollLeft-val)<2){return;}
val=Math.min(val,cm.display.scroller.scrollWidth-cm.display.scroller.clientWidth);
cm.doc.scrollLeft=val;
alignHorizontally(cm);
if(cm.display.scroller.scrollLeft!=val){cm.display.scroller.scrollLeft=val;}
cm.display.scrollbars.setScrollLeft(val);
}












var wheelSamples=0;
var wheelPixelsPerUnit=null;




if(ie){wheelPixelsPerUnit=-.53;}else
if(gecko){wheelPixelsPerUnit=15;}else
if(chrome){wheelPixelsPerUnit=-.7;}else
if(safari){wheelPixelsPerUnit=-1/3;}

function wheelEventDelta(e){
var dx=e.wheelDeltaX,dy=e.wheelDeltaY;
if(dx==null&&e.detail&&e.axis==e.HORIZONTAL_AXIS){dx=e.detail;}
if(dy==null&&e.detail&&e.axis==e.VERTICAL_AXIS){dy=e.detail;}else
if(dy==null){dy=e.wheelDelta;}
return{x:dx,y:dy};
}
function wheelEventPixels(e){
var delta=wheelEventDelta(e);
delta.x*=wheelPixelsPerUnit;
delta.y*=wheelPixelsPerUnit;
return delta;
}

function onScrollWheel(cm,e){
var delta=wheelEventDelta(e),dx=delta.x,dy=delta.y;

var display=cm.display,scroll=display.scroller;

var canScrollX=scroll.scrollWidth>scroll.clientWidth;
var canScrollY=scroll.scrollHeight>scroll.clientHeight;
if(!(dx&&canScrollX||dy&&canScrollY)){return;}





if(dy&&mac&&webkit){
outer:for(var cur=e.target,view=display.view;cur!=scroll;cur=cur.parentNode){
for(var i=0;i<view.length;i++){
if(view[i].node==cur){
cm.display.currentWheelTarget=cur;
break outer;
}
}
}
}







if(dx&&!gecko&&!presto&&wheelPixelsPerUnit!=null){
if(dy&&canScrollY)
{setScrollTop(cm,Math.max(0,Math.min(scroll.scrollTop+dy*wheelPixelsPerUnit,scroll.scrollHeight-scroll.clientHeight)));}
setScrollLeft(cm,Math.max(0,Math.min(scroll.scrollLeft+dx*wheelPixelsPerUnit,scroll.scrollWidth-scroll.clientWidth)));




if(!dy||dy&&canScrollY)
{e_preventDefault(e);}
display.wheelStartX=null;
return;
}



if(dy&&wheelPixelsPerUnit!=null){
var pixels=dy*wheelPixelsPerUnit;
var top=cm.doc.scrollTop,bot=top+display.wrapper.clientHeight;
if(pixels<0){top=Math.max(0,top+pixels-50);}else
{bot=Math.min(cm.doc.height,bot+pixels+50);}
updateDisplaySimple(cm,{top:top,bottom:bot});
}

if(wheelSamples<20){
if(display.wheelStartX==null){
display.wheelStartX=scroll.scrollLeft;display.wheelStartY=scroll.scrollTop;
display.wheelDX=dx;display.wheelDY=dy;
setTimeout(function(){
if(display.wheelStartX==null){return;}
var movedX=scroll.scrollLeft-display.wheelStartX;
var movedY=scroll.scrollTop-display.wheelStartY;
var sample=movedY&&display.wheelDY&&movedY/display.wheelDY||
movedX&&display.wheelDX&&movedX/display.wheelDX;
display.wheelStartX=display.wheelStartY=null;
if(!sample){return;}
wheelPixelsPerUnit=(wheelPixelsPerUnit*wheelSamples+sample)/(wheelSamples+1);
++wheelSamples;
},200);
}else{
display.wheelDX+=dx;display.wheelDY+=dy;
}
}
}





function measureForScrollbars(cm){
var d=cm.display,gutterW=d.gutters.offsetWidth;
var docH=Math.round(cm.doc.height+paddingVert(cm.display));
return{
clientHeight:d.scroller.clientHeight,
viewHeight:d.wrapper.clientHeight,
scrollWidth:d.scroller.scrollWidth,clientWidth:d.scroller.clientWidth,
viewWidth:d.wrapper.clientWidth,
barLeft:cm.options.fixedGutter?gutterW:0,
docHeight:docH,
scrollHeight:docH+scrollGap(cm)+d.barHeight,
nativeBarWidth:d.nativeBarWidth,
gutterWidth:gutterW};

}

var NativeScrollbars=function NativeScrollbars(place,scroll,cm){
this.cm=cm;
var vert=this.vert=elt("div",[elt("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar");
var horiz=this.horiz=elt("div",[elt("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");
place(vert);place(horiz);

on(vert,"scroll",function(){
if(vert.clientHeight){scroll(vert.scrollTop,"vertical");}
});
on(horiz,"scroll",function(){
if(horiz.clientWidth){scroll(horiz.scrollLeft,"horizontal");}
});

this.checkedZeroWidth=false;

if(ie&&ie_version<8){this.horiz.style.minHeight=this.vert.style.minWidth="18px";}
};

NativeScrollbars.prototype.update=function(measure){
var needsH=measure.scrollWidth>measure.clientWidth+1;
var needsV=measure.scrollHeight>measure.clientHeight+1;
var sWidth=measure.nativeBarWidth;

if(needsV){
this.vert.style.display="block";
this.vert.style.bottom=needsH?sWidth+"px":"0";
var totalHeight=measure.viewHeight-(needsH?sWidth:0);

this.vert.firstChild.style.height=
Math.max(0,measure.scrollHeight-measure.clientHeight+totalHeight)+"px";
}else{
this.vert.style.display="";
this.vert.firstChild.style.height="0";
}

if(needsH){
this.horiz.style.display="block";
this.horiz.style.right=needsV?sWidth+"px":"0";
this.horiz.style.left=measure.barLeft+"px";
var totalWidth=measure.viewWidth-measure.barLeft-(needsV?sWidth:0);
this.horiz.firstChild.style.width=
measure.scrollWidth-measure.clientWidth+totalWidth+"px";
}else{
this.horiz.style.display="";
this.horiz.firstChild.style.width="0";
}

if(!this.checkedZeroWidth&&measure.clientHeight>0){
if(sWidth==0){this.zeroWidthHack();}
this.checkedZeroWidth=true;
}

return{right:needsV?sWidth:0,bottom:needsH?sWidth:0};
};

NativeScrollbars.prototype.setScrollLeft=function(pos){
if(this.horiz.scrollLeft!=pos){this.horiz.scrollLeft=pos;}
if(this.disableHoriz){this.enableZeroWidthBar(this.horiz,this.disableHoriz);}
};

NativeScrollbars.prototype.setScrollTop=function(pos){
if(this.vert.scrollTop!=pos){this.vert.scrollTop=pos;}
if(this.disableVert){this.enableZeroWidthBar(this.vert,this.disableVert);}
};

NativeScrollbars.prototype.zeroWidthHack=function(){
var w=mac&&!mac_geMountainLion?"12px":"18px";
this.horiz.style.height=this.vert.style.width=w;
this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none";
this.disableHoriz=new Delayed();
this.disableVert=new Delayed();
};

NativeScrollbars.prototype.enableZeroWidthBar=function(bar,delay){
bar.style.pointerEvents="auto";
function maybeDisable(){






var box=bar.getBoundingClientRect();
var elt=document.elementFromPoint(box.left+1,box.bottom-1);
if(elt!=bar){bar.style.pointerEvents="none";}else
{delay.set(1000,maybeDisable);}
}
delay.set(1000,maybeDisable);
};

NativeScrollbars.prototype.clear=function(){
var parent=this.horiz.parentNode;
parent.removeChild(this.horiz);
parent.removeChild(this.vert);
};

var NullScrollbars=function NullScrollbars(){};

NullScrollbars.prototype.update=function(){return{bottom:0,right:0};};
NullScrollbars.prototype.setScrollLeft=function(){};
NullScrollbars.prototype.setScrollTop=function(){};
NullScrollbars.prototype.clear=function(){};

function updateScrollbars(cm,measure){
if(!measure){measure=measureForScrollbars(cm);}
var startWidth=cm.display.barWidth,startHeight=cm.display.barHeight;
updateScrollbarsInner(cm,measure);
for(var i=0;i<4&&startWidth!=cm.display.barWidth||startHeight!=cm.display.barHeight;i++){
if(startWidth!=cm.display.barWidth&&cm.options.lineWrapping)
{updateHeightsInViewport(cm);}
updateScrollbarsInner(cm,measureForScrollbars(cm));
startWidth=cm.display.barWidth;startHeight=cm.display.barHeight;
}
}



function updateScrollbarsInner(cm,measure){
var d=cm.display;
var sizes=d.scrollbars.update(measure);

d.sizer.style.paddingRight=(d.barWidth=sizes.right)+"px";
d.sizer.style.paddingBottom=(d.barHeight=sizes.bottom)+"px";
d.heightForcer.style.borderBottom=sizes.bottom+"px solid transparent";

if(sizes.right&&sizes.bottom){
d.scrollbarFiller.style.display="block";
d.scrollbarFiller.style.height=sizes.bottom+"px";
d.scrollbarFiller.style.width=sizes.right+"px";
}else{d.scrollbarFiller.style.display="";}
if(sizes.bottom&&cm.options.coverGutterNextToScrollbar&&cm.options.fixedGutter){
d.gutterFiller.style.display="block";
d.gutterFiller.style.height=sizes.bottom+"px";
d.gutterFiller.style.width=measure.gutterWidth+"px";
}else{d.gutterFiller.style.display="";}
}

var scrollbarModel={"native":NativeScrollbars,"null":NullScrollbars};

function initScrollbars(cm){
if(cm.display.scrollbars){
cm.display.scrollbars.clear();
if(cm.display.scrollbars.addClass)
{rmClass(cm.display.wrapper,cm.display.scrollbars.addClass);}
}

cm.display.scrollbars=new scrollbarModel[cm.options.scrollbarStyle](function(node){
cm.display.wrapper.insertBefore(node,cm.display.scrollbarFiller);

on(node,"mousedown",function(){
if(cm.state.focused){setTimeout(function(){return cm.display.input.focus();},0);}
});
node.setAttribute("cm-not-content","true");
},function(pos,axis){
if(axis=="horizontal"){setScrollLeft(cm,pos);}else
{setScrollTop(cm,pos);}
},cm);
if(cm.display.scrollbars.addClass)
{addClass(cm.display.wrapper,cm.display.scrollbars.addClass);}
}





function maybeScrollWindow(cm,coords){
if(signalDOMEvent(cm,"scrollCursorIntoView")){return;}

var display=cm.display,box=display.sizer.getBoundingClientRect(),doScroll=null;
if(coords.top+box.top<0){doScroll=true;}else
if(coords.bottom+box.top>(window.innerHeight||document.documentElement.clientHeight)){doScroll=false;}
if(doScroll!=null&&!phantom){
var scrollNode=elt("div",'\u200B',null,"position: absolute;\n                         top: "+(coords.top-display.viewOffset-paddingTop(cm.display))+"px;\n                         height: "+(coords.bottom-coords.top+scrollGap(cm)+display.barHeight)+"px;\n                         left: "+coords.left+"px; width: 2px;");
cm.display.lineSpace.appendChild(scrollNode);
scrollNode.scrollIntoView(doScroll);
cm.display.lineSpace.removeChild(scrollNode);
}
}




function scrollPosIntoView(cm,pos,end,margin){
if(margin==null){margin=0;}
var coords;
for(var limit=0;limit<5;limit++){
var changed=false;
coords=_cursorCoords(cm,pos);
var endCoords=!end||end==pos?coords:_cursorCoords(cm,end);
var scrollPos=calculateScrollPos(cm,Math.min(coords.left,endCoords.left),
Math.min(coords.top,endCoords.top)-margin,
Math.max(coords.left,endCoords.left),
Math.max(coords.bottom,endCoords.bottom)+margin);
var startTop=cm.doc.scrollTop,startLeft=cm.doc.scrollLeft;
if(scrollPos.scrollTop!=null){
setScrollTop(cm,scrollPos.scrollTop);
if(Math.abs(cm.doc.scrollTop-startTop)>1){changed=true;}
}
if(scrollPos.scrollLeft!=null){
setScrollLeft(cm,scrollPos.scrollLeft);
if(Math.abs(cm.doc.scrollLeft-startLeft)>1){changed=true;}
}
if(!changed){break;}
}
return coords;
}


function scrollIntoView(cm,x1,y1,x2,y2){
var scrollPos=calculateScrollPos(cm,x1,y1,x2,y2);
if(scrollPos.scrollTop!=null){setScrollTop(cm,scrollPos.scrollTop);}
if(scrollPos.scrollLeft!=null){setScrollLeft(cm,scrollPos.scrollLeft);}
}





function calculateScrollPos(cm,x1,y1,x2,y2){
var display=cm.display,snapMargin=textHeight(cm.display);
if(y1<0){y1=0;}
var screentop=cm.curOp&&cm.curOp.scrollTop!=null?cm.curOp.scrollTop:display.scroller.scrollTop;
var screen=displayHeight(cm),result={};
if(y2-y1>screen){y2=y1+screen;}
var docBottom=cm.doc.height+paddingVert(display);
var atTop=y1<snapMargin,atBottom=y2>docBottom-snapMargin;
if(y1<screentop){
result.scrollTop=atTop?0:y1;
}else if(y2>screentop+screen){
var newTop=Math.min(y1,(atBottom?docBottom:y2)-screen);
if(newTop!=screentop){result.scrollTop=newTop;}
}

var screenleft=cm.curOp&&cm.curOp.scrollLeft!=null?cm.curOp.scrollLeft:display.scroller.scrollLeft;
var screenw=displayWidth(cm)-(cm.options.fixedGutter?display.gutters.offsetWidth:0);
var tooWide=x2-x1>screenw;
if(tooWide){x2=x1+screenw;}
if(x1<10)
{result.scrollLeft=0;}else
if(x1<screenleft)
{result.scrollLeft=Math.max(0,x1-(tooWide?0:10));}else
if(x2>screenw+screenleft-3)
{result.scrollLeft=x2+(tooWide?0:10)-screenw;}
return result;
}



function addToScrollPos(cm,left,top){
if(left!=null||top!=null){resolveScrollToPos(cm);}
if(left!=null)
{cm.curOp.scrollLeft=(cm.curOp.scrollLeft==null?cm.doc.scrollLeft:cm.curOp.scrollLeft)+left;}
if(top!=null)
{cm.curOp.scrollTop=(cm.curOp.scrollTop==null?cm.doc.scrollTop:cm.curOp.scrollTop)+top;}
}



function ensureCursorVisible(cm){
resolveScrollToPos(cm);
var cur=cm.getCursor(),from=cur,to=cur;
if(!cm.options.lineWrapping){
from=cur.ch?Pos(cur.line,cur.ch-1):cur;
to=Pos(cur.line,cur.ch+1);
}
cm.curOp.scrollToPos={from:from,to:to,margin:cm.options.cursorScrollMargin,isCursor:true};
}





function resolveScrollToPos(cm){
var range=cm.curOp.scrollToPos;
if(range){
cm.curOp.scrollToPos=null;
var from=estimateCoords(cm,range.from),to=estimateCoords(cm,range.to);
var sPos=calculateScrollPos(cm,Math.min(from.left,to.left),
Math.min(from.top,to.top)-range.margin,
Math.max(from.right,to.right),
Math.max(from.bottom,to.bottom)+range.margin);
cm.scrollTo(sPos.scrollLeft,sPos.scrollTop);
}
}







var nextOpId=0;

function startOperation(cm){
cm.curOp={
cm:cm,
viewChanged:false,
startHeight:cm.doc.height,
forceUpdate:false,
updateInput:null,
typing:false,
changeObjs:null,
cursorActivityHandlers:null,
cursorActivityCalled:0,
selectionChanged:false,
updateMaxLine:false,
scrollLeft:null,scrollTop:null,
scrollToPos:null,
focus:false,
id:++nextOpId};

pushOperation(cm.curOp);
}


function endOperation(cm){
var op=cm.curOp;
finishOperation(op,function(group){
for(var i=0;i<group.ops.length;i++)
{group.ops[i].cm.curOp=null;}
endOperations(group);
});
}



function endOperations(group){
var ops=group.ops;
for(var i=0;i<ops.length;i++)
{endOperation_R1(ops[i]);}
for(var i$1=0;i$1<ops.length;i$1++)
{endOperation_W1(ops[i$1]);}
for(var i$2=0;i$2<ops.length;i$2++)
{endOperation_R2(ops[i$2]);}
for(var i$3=0;i$3<ops.length;i$3++)
{endOperation_W2(ops[i$3]);}
for(var i$4=0;i$4<ops.length;i$4++)
{endOperation_finish(ops[i$4]);}
}

function endOperation_R1(op){
var cm=op.cm,display=cm.display;
maybeClipScrollbars(cm);
if(op.updateMaxLine){findMaxLine(cm);}

op.mustUpdate=op.viewChanged||op.forceUpdate||op.scrollTop!=null||
op.scrollToPos&&(op.scrollToPos.from.line<display.viewFrom||
op.scrollToPos.to.line>=display.viewTo)||
display.maxLineChanged&&cm.options.lineWrapping;
op.update=op.mustUpdate&&
new DisplayUpdate(cm,op.mustUpdate&&{top:op.scrollTop,ensure:op.scrollToPos},op.forceUpdate);
}

function endOperation_W1(op){
op.updatedDisplay=op.mustUpdate&&updateDisplayIfNeeded(op.cm,op.update);
}

function endOperation_R2(op){
var cm=op.cm,display=cm.display;
if(op.updatedDisplay){updateHeightsInViewport(cm);}

op.barMeasure=measureForScrollbars(cm);




if(display.maxLineChanged&&!cm.options.lineWrapping){
op.adjustWidthTo=measureChar(cm,display.maxLine,display.maxLine.text.length).left+3;
cm.display.sizerWidth=op.adjustWidthTo;
op.barMeasure.scrollWidth=
Math.max(display.scroller.clientWidth,display.sizer.offsetLeft+op.adjustWidthTo+scrollGap(cm)+cm.display.barWidth);
op.maxScrollLeft=Math.max(0,display.sizer.offsetLeft+op.adjustWidthTo-displayWidth(cm));
}

if(op.updatedDisplay||op.selectionChanged)
{op.preparedSelection=display.input.prepareSelection(op.focus);}
}

function endOperation_W2(op){
var cm=op.cm;

if(op.adjustWidthTo!=null){
cm.display.sizer.style.minWidth=op.adjustWidthTo+"px";
if(op.maxScrollLeft<cm.doc.scrollLeft)
{setScrollLeft(cm,Math.min(cm.display.scroller.scrollLeft,op.maxScrollLeft),true);}
cm.display.maxLineChanged=false;
}

var takeFocus=op.focus&&op.focus==activeElt()&&(!document.hasFocus||document.hasFocus());
if(op.preparedSelection)
{cm.display.input.showSelection(op.preparedSelection,takeFocus);}
if(op.updatedDisplay||op.startHeight!=cm.doc.height)
{updateScrollbars(cm,op.barMeasure);}
if(op.updatedDisplay)
{setDocumentHeight(cm,op.barMeasure);}

if(op.selectionChanged){restartBlink(cm);}

if(cm.state.focused&&op.updateInput)
{cm.display.input.reset(op.typing);}
if(takeFocus){ensureFocus(op.cm);}
}

function endOperation_finish(op){
var cm=op.cm,display=cm.display,doc=cm.doc;

if(op.updatedDisplay){postUpdateDisplay(cm,op.update);}


if(display.wheelStartX!=null&&(op.scrollTop!=null||op.scrollLeft!=null||op.scrollToPos))
{display.wheelStartX=display.wheelStartY=null;}


if(op.scrollTop!=null&&(display.scroller.scrollTop!=op.scrollTop||op.forceScroll)){
doc.scrollTop=Math.max(0,Math.min(display.scroller.scrollHeight-display.scroller.clientHeight,op.scrollTop));
display.scrollbars.setScrollTop(doc.scrollTop);
display.scroller.scrollTop=doc.scrollTop;
}
if(op.scrollLeft!=null&&(display.scroller.scrollLeft!=op.scrollLeft||op.forceScroll)){
doc.scrollLeft=Math.max(0,Math.min(display.scroller.scrollWidth-display.scroller.clientWidth,op.scrollLeft));
display.scrollbars.setScrollLeft(doc.scrollLeft);
display.scroller.scrollLeft=doc.scrollLeft;
alignHorizontally(cm);
}

if(op.scrollToPos){
var coords=scrollPosIntoView(cm,_clipPos(doc,op.scrollToPos.from),
_clipPos(doc,op.scrollToPos.to),op.scrollToPos.margin);
if(op.scrollToPos.isCursor&&cm.state.focused){maybeScrollWindow(cm,coords);}
}



var hidden=op.maybeHiddenMarkers,unhidden=op.maybeUnhiddenMarkers;
if(hidden){for(var i=0;i<hidden.length;++i)
{if(!hidden[i].lines.length){signal(hidden[i],"hide");}}}
if(unhidden){for(var i$1=0;i$1<unhidden.length;++i$1)
{if(unhidden[i$1].lines.length){signal(unhidden[i$1],"unhide");}}}

if(display.wrapper.offsetHeight)
{doc.scrollTop=cm.display.scroller.scrollTop;}


if(op.changeObjs)
{signal(cm,"changes",cm,op.changeObjs);}
if(op.update)
{op.update.finish();}
}


function runInOp(cm,f){
if(cm.curOp){return f();}
startOperation(cm);
try{return f();}finally
{endOperation(cm);}
}

function operation(cm,f){
return function(){
if(cm.curOp){return f.apply(cm,arguments);}
startOperation(cm);
try{return f.apply(cm,arguments);}finally
{endOperation(cm);}
};
}


function methodOp(f){
return function(){
if(this.curOp){return f.apply(this,arguments);}
startOperation(this);
try{return f.apply(this,arguments);}finally
{endOperation(this);}
};
}
function docMethodOp(f){
return function(){
var cm=this.cm;
if(!cm||cm.curOp){return f.apply(this,arguments);}
startOperation(cm);
try{return f.apply(this,arguments);}finally
{endOperation(cm);}
};
}







function regChange(cm,from,to,lendiff){
if(from==null){from=cm.doc.first;}
if(to==null){to=cm.doc.first+cm.doc.size;}
if(!lendiff){lendiff=0;}

var display=cm.display;
if(lendiff&&to<display.viewTo&&(
display.updateLineNumbers==null||display.updateLineNumbers>from))
{display.updateLineNumbers=from;}

cm.curOp.viewChanged=true;

if(from>=display.viewTo){
if(sawCollapsedSpans&&visualLineNo(cm.doc,from)<display.viewTo)
{resetView(cm);}
}else if(to<=display.viewFrom){
if(sawCollapsedSpans&&visualLineEndNo(cm.doc,to+lendiff)>display.viewFrom){
resetView(cm);
}else{
display.viewFrom+=lendiff;
display.viewTo+=lendiff;
}
}else if(from<=display.viewFrom&&to>=display.viewTo){
resetView(cm);
}else if(from<=display.viewFrom){
var cut=viewCuttingPoint(cm,to,to+lendiff,1);
if(cut){
display.view=display.view.slice(cut.index);
display.viewFrom=cut.lineN;
display.viewTo+=lendiff;
}else{
resetView(cm);
}
}else if(to>=display.viewTo){
var cut$1=viewCuttingPoint(cm,from,from,-1);
if(cut$1){
display.view=display.view.slice(0,cut$1.index);
display.viewTo=cut$1.lineN;
}else{
resetView(cm);
}
}else{
var cutTop=viewCuttingPoint(cm,from,from,-1);
var cutBot=viewCuttingPoint(cm,to,to+lendiff,1);
if(cutTop&&cutBot){
display.view=display.view.slice(0,cutTop.index).
concat(buildViewArray(cm,cutTop.lineN,cutBot.lineN)).
concat(display.view.slice(cutBot.index));
display.viewTo+=lendiff;
}else{
resetView(cm);
}
}

var ext=display.externalMeasured;
if(ext){
if(to<ext.lineN)
{ext.lineN+=lendiff;}else
if(from<ext.lineN+ext.size)
{display.externalMeasured=null;}
}
}



function regLineChange(cm,line,type){
cm.curOp.viewChanged=true;
var display=cm.display,ext=cm.display.externalMeasured;
if(ext&&line>=ext.lineN&&line<ext.lineN+ext.size)
{display.externalMeasured=null;}

if(line<display.viewFrom||line>=display.viewTo){return;}
var lineView=display.view[findViewIndex(cm,line)];
if(lineView.node==null){return;}
var arr=lineView.changes||(lineView.changes=[]);
if(indexOf(arr,type)==-1){arr.push(type);}
}


function resetView(cm){
cm.display.viewFrom=cm.display.viewTo=cm.doc.first;
cm.display.view=[];
cm.display.viewOffset=0;
}

function viewCuttingPoint(cm,oldN,newN,dir){
var index=findViewIndex(cm,oldN),diff,view=cm.display.view;
if(!sawCollapsedSpans||newN==cm.doc.first+cm.doc.size)
{return{index:index,lineN:newN};}
var n=cm.display.viewFrom;
for(var i=0;i<index;i++)
{n+=view[i].size;}
if(n!=oldN){
if(dir>0){
if(index==view.length-1){return null;}
diff=n+view[index].size-oldN;
index++;
}else{
diff=n-oldN;
}
oldN+=diff;newN+=diff;
}
while(visualLineNo(cm.doc,newN)!=newN){
if(index==(dir<0?0:view.length-1)){return null;}
newN+=dir*view[index-(dir<0?1:0)].size;
index+=dir;
}
return{index:index,lineN:newN};
}



function adjustView(cm,from,to){
var display=cm.display,view=display.view;
if(view.length==0||from>=display.viewTo||to<=display.viewFrom){
display.view=buildViewArray(cm,from,to);
display.viewFrom=from;
}else{
if(display.viewFrom>from)
{display.view=buildViewArray(cm,from,display.viewFrom).concat(display.view);}else
if(display.viewFrom<from)
{display.view=display.view.slice(findViewIndex(cm,from));}
display.viewFrom=from;
if(display.viewTo<to)
{display.view=display.view.concat(buildViewArray(cm,display.viewTo,to));}else
if(display.viewTo>to)
{display.view=display.view.slice(0,findViewIndex(cm,to));}
}
display.viewTo=to;
}



function countDirtyView(cm){
var view=cm.display.view,dirty=0;
for(var i=0;i<view.length;i++){
var lineView=view[i];
if(!lineView.hidden&&(!lineView.node||lineView.changes)){++dirty;}
}
return dirty;
}



function startWorker(cm,time){
if(cm.doc.mode.startState&&cm.doc.frontier<cm.display.viewTo)
{cm.state.highlight.set(time,bind(highlightWorker,cm));}
}

function highlightWorker(cm){
var doc=cm.doc;
if(doc.frontier<doc.first){doc.frontier=doc.first;}
if(doc.frontier>=cm.display.viewTo){return;}
var end=+new Date()+cm.options.workTime;
var state=copyState(doc.mode,getStateBefore(cm,doc.frontier));
var changedLines=[];

doc.iter(doc.frontier,Math.min(doc.first+doc.size,cm.display.viewTo+500),function(line){
if(doc.frontier>=cm.display.viewFrom){
var oldStyles=line.styles,tooLong=line.text.length>cm.options.maxHighlightLength;
var highlighted=highlightLine(cm,line,tooLong?copyState(doc.mode,state):state,true);
line.styles=highlighted.styles;
var oldCls=line.styleClasses,newCls=highlighted.classes;
if(newCls){line.styleClasses=newCls;}else
if(oldCls){line.styleClasses=null;}
var ischange=!oldStyles||oldStyles.length!=line.styles.length||
oldCls!=newCls&&(!oldCls||!newCls||oldCls.bgClass!=newCls.bgClass||oldCls.textClass!=newCls.textClass);
for(var i=0;!ischange&&i<oldStyles.length;++i){ischange=oldStyles[i]!=line.styles[i];}
if(ischange){changedLines.push(doc.frontier);}
line.stateAfter=tooLong?state:copyState(doc.mode,state);
}else{
if(line.text.length<=cm.options.maxHighlightLength)
{processLine(cm,line.text,state);}
line.stateAfter=doc.frontier%5==0?copyState(doc.mode,state):null;
}
++doc.frontier;
if(+new Date()>end){
startWorker(cm,cm.options.workDelay);
return true;
}
});
if(changedLines.length){runInOp(cm,function(){
for(var i=0;i<changedLines.length;i++)
{regLineChange(cm,changedLines[i],"text");}
});}
}



var DisplayUpdate=function DisplayUpdate(cm,viewport,force){
var display=cm.display;

this.viewport=viewport;

this.visible=visibleLines(display,cm.doc,viewport);
this.editorIsHidden=!display.wrapper.offsetWidth;
this.wrapperHeight=display.wrapper.clientHeight;
this.wrapperWidth=display.wrapper.clientWidth;
this.oldDisplayWidth=displayWidth(cm);
this.force=force;
this.dims=getDimensions(cm);
this.events=[];
};

DisplayUpdate.prototype.signal=function(emitter,type){
if(hasHandler(emitter,type))
{this.events.push(arguments);}
};
DisplayUpdate.prototype.finish=function(){
var this$1=this;

for(var i=0;i<this.events.length;i++)
{signal.apply(null,this$1.events[i]);}
};

function maybeClipScrollbars(cm){
var display=cm.display;
if(!display.scrollbarsClipped&&display.scroller.offsetWidth){
display.nativeBarWidth=display.scroller.offsetWidth-display.scroller.clientWidth;
display.heightForcer.style.height=scrollGap(cm)+"px";
display.sizer.style.marginBottom=-display.nativeBarWidth+"px";
display.sizer.style.borderRightWidth=scrollGap(cm)+"px";
display.scrollbarsClipped=true;
}
}




function updateDisplayIfNeeded(cm,update){
var display=cm.display,doc=cm.doc;

if(update.editorIsHidden){
resetView(cm);
return false;
}


if(!update.force&&
update.visible.from>=display.viewFrom&&update.visible.to<=display.viewTo&&(
display.updateLineNumbers==null||display.updateLineNumbers>=display.viewTo)&&
display.renderedView==display.view&&countDirtyView(cm)==0)
{return false;}

if(maybeUpdateLineNumberWidth(cm)){
resetView(cm);
update.dims=getDimensions(cm);
}


var end=doc.first+doc.size;
var from=Math.max(update.visible.from-cm.options.viewportMargin,doc.first);
var to=Math.min(end,update.visible.to+cm.options.viewportMargin);
if(display.viewFrom<from&&from-display.viewFrom<20){from=Math.max(doc.first,display.viewFrom);}
if(display.viewTo>to&&display.viewTo-to<20){to=Math.min(end,display.viewTo);}
if(sawCollapsedSpans){
from=visualLineNo(cm.doc,from);
to=visualLineEndNo(cm.doc,to);
}

var different=from!=display.viewFrom||to!=display.viewTo||
display.lastWrapHeight!=update.wrapperHeight||display.lastWrapWidth!=update.wrapperWidth;
adjustView(cm,from,to);

display.viewOffset=_heightAtLine(getLine(cm.doc,display.viewFrom));

cm.display.mover.style.top=display.viewOffset+"px";

var toUpdate=countDirtyView(cm);
if(!different&&toUpdate==0&&!update.force&&display.renderedView==display.view&&(
display.updateLineNumbers==null||display.updateLineNumbers>=display.viewTo))
{return false;}



var focused=activeElt();
if(toUpdate>4){display.lineDiv.style.display="none";}
patchDisplay(cm,display.updateLineNumbers,update.dims);
if(toUpdate>4){display.lineDiv.style.display="";}
display.renderedView=display.view;


if(focused&&activeElt()!=focused&&focused.offsetHeight){focused.focus();}



removeChildren(display.cursorDiv);
removeChildren(display.selectionDiv);
display.gutters.style.height=display.sizer.style.minHeight=0;

if(different){
display.lastWrapHeight=update.wrapperHeight;
display.lastWrapWidth=update.wrapperWidth;
startWorker(cm,400);
}

display.updateLineNumbers=null;

return true;
}

function postUpdateDisplay(cm,update){
var viewport=update.viewport;

for(var first=true;;first=false){
if(!first||!cm.options.lineWrapping||update.oldDisplayWidth==displayWidth(cm)){

if(viewport&&viewport.top!=null)
{viewport={top:Math.min(cm.doc.height+paddingVert(cm.display)-displayHeight(cm),viewport.top)};}


update.visible=visibleLines(cm.display,cm.doc,viewport);
if(update.visible.from>=cm.display.viewFrom&&update.visible.to<=cm.display.viewTo)
{break;}
}
if(!updateDisplayIfNeeded(cm,update)){break;}
updateHeightsInViewport(cm);
var barMeasure=measureForScrollbars(cm);
updateSelection(cm);
updateScrollbars(cm,barMeasure);
setDocumentHeight(cm,barMeasure);
}

update.signal(cm,"update",cm);
if(cm.display.viewFrom!=cm.display.reportedViewFrom||cm.display.viewTo!=cm.display.reportedViewTo){
update.signal(cm,"viewportChange",cm,cm.display.viewFrom,cm.display.viewTo);
cm.display.reportedViewFrom=cm.display.viewFrom;cm.display.reportedViewTo=cm.display.viewTo;
}
}

function updateDisplaySimple(cm,viewport){
var update=new DisplayUpdate(cm,viewport);
if(updateDisplayIfNeeded(cm,update)){
updateHeightsInViewport(cm);
postUpdateDisplay(cm,update);
var barMeasure=measureForScrollbars(cm);
updateSelection(cm);
updateScrollbars(cm,barMeasure);
setDocumentHeight(cm,barMeasure);
update.finish();
}
}





function patchDisplay(cm,updateNumbersFrom,dims){
var display=cm.display,lineNumbers=cm.options.lineNumbers;
var container=display.lineDiv,cur=container.firstChild;

function rm(node){
var next=node.nextSibling;

if(webkit&&mac&&cm.display.currentWheelTarget==node)
{node.style.display="none";}else

{node.parentNode.removeChild(node);}
return next;
}

var view=display.view,lineN=display.viewFrom;


for(var i=0;i<view.length;i++){
var lineView=view[i];
if(lineView.hidden){
}else if(!lineView.node||lineView.node.parentNode!=container){
var node=buildLineElement(cm,lineView,lineN,dims);
container.insertBefore(node,cur);
}else{
while(cur!=lineView.node){cur=rm(cur);}
var updateNumber=lineNumbers&&updateNumbersFrom!=null&&
updateNumbersFrom<=lineN&&lineView.lineNumber;
if(lineView.changes){
if(indexOf(lineView.changes,"gutter")>-1){updateNumber=false;}
updateLineForChanges(cm,lineView,lineN,dims);
}
if(updateNumber){
removeChildren(lineView.lineNumber);
lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options,lineN)));
}
cur=lineView.node.nextSibling;
}
lineN+=lineView.size;
}
while(cur){cur=rm(cur);}
}

function updateGutterSpace(cm){
var width=cm.display.gutters.offsetWidth;
cm.display.sizer.style.marginLeft=width+"px";
}

function setDocumentHeight(cm,measure){
cm.display.sizer.style.minHeight=measure.docHeight+"px";
cm.display.heightForcer.style.top=measure.docHeight+"px";
cm.display.gutters.style.height=measure.docHeight+cm.display.barHeight+scrollGap(cm)+"px";
}



function updateGutters(cm){
var gutters=cm.display.gutters,specs=cm.options.gutters;
removeChildren(gutters);
var i=0;
for(;i<specs.length;++i){
var gutterClass=specs[i];
var gElt=gutters.appendChild(elt("div",null,"CodeMirror-gutter "+gutterClass));
if(gutterClass=="CodeMirror-linenumbers"){
cm.display.lineGutter=gElt;
gElt.style.width=(cm.display.lineNumWidth||1)+"px";
}
}
gutters.style.display=i?"":"none";
updateGutterSpace(cm);
}



function setGuttersForLineNumbers(options){
var found=indexOf(options.gutters,"CodeMirror-linenumbers");
if(found==-1&&options.lineNumbers){
options.gutters=options.gutters.concat(["CodeMirror-linenumbers"]);
}else if(found>-1&&!options.lineNumbers){
options.gutters=options.gutters.slice(0);
options.gutters.splice(found,1);
}
}






function Selection(ranges,primIndex){
this.ranges=ranges;
this.primIndex=primIndex;
}

Selection.prototype={
primary:function primary(){return this.ranges[this.primIndex];},
equals:function equals(other){
var this$1=this;

if(other==this){return true;}
if(other.primIndex!=this.primIndex||other.ranges.length!=this.ranges.length){return false;}
for(var i=0;i<this.ranges.length;i++){
var here=this$1.ranges[i],there=other.ranges[i];
if(cmp(here.anchor,there.anchor)!=0||cmp(here.head,there.head)!=0){return false;}
}
return true;
},
deepCopy:function deepCopy(){
var this$1=this;

var out=[];
for(var i=0;i<this.ranges.length;i++)
{out[i]=new Range(copyPos(this$1.ranges[i].anchor),copyPos(this$1.ranges[i].head));}
return new Selection(out,this.primIndex);
},
somethingSelected:function somethingSelected(){
var this$1=this;

for(var i=0;i<this.ranges.length;i++)
{if(!this$1.ranges[i].empty()){return true;}}
return false;
},
contains:function contains(pos,end){
var this$1=this;

if(!end){end=pos;}
for(var i=0;i<this.ranges.length;i++){
var range=this$1.ranges[i];
if(cmp(end,range.from())>=0&&cmp(pos,range.to())<=0)
{return i;}
}
return-1;
}};


function Range(anchor,head){
this.anchor=anchor;this.head=head;
}

Range.prototype={
from:function from(){return minPos(this.anchor,this.head);},
to:function to(){return maxPos(this.anchor,this.head);},
empty:function empty(){
return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch;
}};





function normalizeSelection(ranges,primIndex){
var prim=ranges[primIndex];
ranges.sort(function(a,b){return cmp(a.from(),b.from());});
primIndex=indexOf(ranges,prim);
for(var i=1;i<ranges.length;i++){
var cur=ranges[i],prev=ranges[i-1];
if(cmp(prev.to(),cur.from())>=0){
var from=minPos(prev.from(),cur.from()),to=maxPos(prev.to(),cur.to());
var inv=prev.empty()?cur.from()==cur.head:prev.from()==prev.head;
if(i<=primIndex){--primIndex;}
ranges.splice(--i,2,new Range(inv?to:from,inv?from:to));
}
}
return new Selection(ranges,primIndex);
}

function simpleSelection(anchor,head){
return new Selection([new Range(anchor,head||anchor)],0);
}



function changeEnd(change){
if(!change.text){return change.to;}
return Pos(change.from.line+change.text.length-1,
lst(change.text).length+(change.text.length==1?change.from.ch:0));
}



function adjustForChange(pos,change){
if(cmp(pos,change.from)<0){return pos;}
if(cmp(pos,change.to)<=0){return changeEnd(change);}

var line=pos.line+change.text.length-(change.to.line-change.from.line)-1,ch=pos.ch;
if(pos.line==change.to.line){ch+=changeEnd(change).ch-change.to.ch;}
return Pos(line,ch);
}

function computeSelAfterChange(doc,change){
var out=[];
for(var i=0;i<doc.sel.ranges.length;i++){
var range=doc.sel.ranges[i];
out.push(new Range(adjustForChange(range.anchor,change),
adjustForChange(range.head,change)));
}
return normalizeSelection(out,doc.sel.primIndex);
}

function offsetPos(pos,old,nw){
if(pos.line==old.line)
{return Pos(nw.line,pos.ch-old.ch+nw.ch);}else

{return Pos(nw.line+(pos.line-old.line),pos.ch);}
}



function computeReplacedSel(doc,changes,hint){
var out=[];
var oldPrev=Pos(doc.first,0),newPrev=oldPrev;
for(var i=0;i<changes.length;i++){
var change=changes[i];
var from=offsetPos(change.from,oldPrev,newPrev);
var to=offsetPos(changeEnd(change),oldPrev,newPrev);
oldPrev=change.to;
newPrev=to;
if(hint=="around"){
var range=doc.sel.ranges[i],inv=cmp(range.head,range.anchor)<0;
out[i]=new Range(inv?to:from,inv?from:to);
}else{
out[i]=new Range(from,from);
}
}
return new Selection(out,doc.sel.primIndex);
}



function loadMode(cm){
cm.doc.mode=getMode(cm.options,cm.doc.modeOption);
resetModeState(cm);
}

function resetModeState(cm){
cm.doc.iter(function(line){
if(line.stateAfter){line.stateAfter=null;}
if(line.styles){line.styles=null;}
});
cm.doc.frontier=cm.doc.first;
startWorker(cm,100);
cm.state.modeGen++;
if(cm.curOp){regChange(cm);}
}






function isWholeLineUpdate(doc,change){
return change.from.ch==0&&change.to.ch==0&&lst(change.text)==""&&(
!doc.cm||doc.cm.options.wholeLineUpdateBefore);
}


function updateDoc(doc,change,markedSpans,estimateHeight){
function spansFor(n){return markedSpans?markedSpans[n]:null;}
function update(line,text,spans){
updateLine(line,text,spans,estimateHeight);
signalLater(line,"change",line,change);
}
function linesFor(start,end){
var result=[];
for(var i=start;i<end;++i)
{result.push(new Line(text[i],spansFor(i),estimateHeight));}
return result;
}

var from=change.from,to=change.to,text=change.text;
var firstLine=getLine(doc,from.line),lastLine=getLine(doc,to.line);
var lastText=lst(text),lastSpans=spansFor(text.length-1),nlines=to.line-from.line;


if(change.full){
doc.insert(0,linesFor(0,text.length));
doc.remove(text.length,doc.size-text.length);
}else if(isWholeLineUpdate(doc,change)){


var added=linesFor(0,text.length-1);
update(lastLine,lastLine.text,lastSpans);
if(nlines){doc.remove(from.line,nlines);}
if(added.length){doc.insert(from.line,added);}
}else if(firstLine==lastLine){
if(text.length==1){
update(firstLine,firstLine.text.slice(0,from.ch)+lastText+firstLine.text.slice(to.ch),lastSpans);
}else{
var added$1=linesFor(1,text.length-1);
added$1.push(new Line(lastText+firstLine.text.slice(to.ch),lastSpans,estimateHeight));
update(firstLine,firstLine.text.slice(0,from.ch)+text[0],spansFor(0));
doc.insert(from.line+1,added$1);
}
}else if(text.length==1){
update(firstLine,firstLine.text.slice(0,from.ch)+text[0]+lastLine.text.slice(to.ch),spansFor(0));
doc.remove(from.line+1,nlines);
}else{
update(firstLine,firstLine.text.slice(0,from.ch)+text[0],spansFor(0));
update(lastLine,lastText+lastLine.text.slice(to.ch),lastSpans);
var added$2=linesFor(1,text.length-1);
if(nlines>1){doc.remove(from.line+1,nlines-1);}
doc.insert(from.line+1,added$2);
}

signalLater(doc,"change",doc,change);
}


function linkedDocs(doc,f,sharedHistOnly){
function propagate(doc,skip,sharedHist){
if(doc.linked){for(var i=0;i<doc.linked.length;++i){
var rel=doc.linked[i];
if(rel.doc==skip){continue;}
var shared=sharedHist&&rel.sharedHist;
if(sharedHistOnly&&!shared){continue;}
f(rel.doc,shared);
propagate(rel.doc,doc,shared);
}}
}
propagate(doc,null,true);
}


function attachDoc(cm,doc){
if(doc.cm){throw new Error("This document is already in use.");}
cm.doc=doc;
doc.cm=cm;
estimateLineHeights(cm);
loadMode(cm);
if(!cm.options.lineWrapping){findMaxLine(cm);}
cm.options.mode=doc.modeOption;
regChange(cm);
}

function History(startGen){



this.done=[];this.undone=[];
this.undoDepth=Infinity;


this.lastModTime=this.lastSelTime=0;
this.lastOp=this.lastSelOp=null;
this.lastOrigin=this.lastSelOrigin=null;

this.generation=this.maxGeneration=startGen||1;
}



function historyChangeFromChange(doc,change){
var histChange={from:copyPos(change.from),to:changeEnd(change),text:getBetween(doc,change.from,change.to)};
attachLocalSpans(doc,histChange,change.from.line,change.to.line+1);
linkedDocs(doc,function(doc){return attachLocalSpans(doc,histChange,change.from.line,change.to.line+1);},true);
return histChange;
}



function clearSelectionEvents(array){
while(array.length){
var last=lst(array);
if(last.ranges){array.pop();}else
{break;}
}
}



function lastChangeEvent(hist,force){
if(force){
clearSelectionEvents(hist.done);
return lst(hist.done);
}else if(hist.done.length&&!lst(hist.done).ranges){
return lst(hist.done);
}else if(hist.done.length>1&&!hist.done[hist.done.length-2].ranges){
hist.done.pop();
return lst(hist.done);
}
}




function addChangeToHistory(doc,change,selAfter,opId){
var hist=doc.history;
hist.undone.length=0;
var time=+new Date(),cur;
var last;

if((hist.lastOp==opId||
hist.lastOrigin==change.origin&&change.origin&&(
change.origin.charAt(0)=="+"&&doc.cm&&hist.lastModTime>time-doc.cm.options.historyEventDelay||
change.origin.charAt(0)=="*"))&&(
cur=lastChangeEvent(hist,hist.lastOp==opId))){

last=lst(cur.changes);
if(cmp(change.from,change.to)==0&&cmp(change.from,last.to)==0){


last.to=changeEnd(change);
}else{

cur.changes.push(historyChangeFromChange(doc,change));
}
}else{

var before=lst(hist.done);
if(!before||!before.ranges)
{pushSelectionToHistory(doc.sel,hist.done);}
cur={changes:[historyChangeFromChange(doc,change)],
generation:hist.generation};
hist.done.push(cur);
while(hist.done.length>hist.undoDepth){
hist.done.shift();
if(!hist.done[0].ranges){hist.done.shift();}
}
}
hist.done.push(selAfter);
hist.generation=++hist.maxGeneration;
hist.lastModTime=hist.lastSelTime=time;
hist.lastOp=hist.lastSelOp=opId;
hist.lastOrigin=hist.lastSelOrigin=change.origin;

if(!last){signal(doc,"historyAdded");}
}

function selectionEventCanBeMerged(doc,origin,prev,sel){
var ch=origin.charAt(0);
return ch=="*"||
ch=="+"&&
prev.ranges.length==sel.ranges.length&&
prev.somethingSelected()==sel.somethingSelected()&&
new Date()-doc.history.lastSelTime<=(doc.cm?doc.cm.options.historyEventDelay:500);
}





function addSelectionToHistory(doc,sel,opId,options){
var hist=doc.history,origin=options&&options.origin;





if(opId==hist.lastSelOp||
origin&&hist.lastSelOrigin==origin&&(
hist.lastModTime==hist.lastSelTime&&hist.lastOrigin==origin||
selectionEventCanBeMerged(doc,origin,lst(hist.done),sel)))
{hist.done[hist.done.length-1]=sel;}else

{pushSelectionToHistory(sel,hist.done);}

hist.lastSelTime=+new Date();
hist.lastSelOrigin=origin;
hist.lastSelOp=opId;
if(options&&options.clearRedo!==false)
{clearSelectionEvents(hist.undone);}
}

function pushSelectionToHistory(sel,dest){
var top=lst(dest);
if(!(top&&top.ranges&&top.equals(sel)))
{dest.push(sel);}
}


function attachLocalSpans(doc,change,from,to){
var existing=change["spans_"+doc.id],n=0;
doc.iter(Math.max(doc.first,from),Math.min(doc.first+doc.size,to),function(line){
if(line.markedSpans)
{(existing||(existing=change["spans_"+doc.id]={}))[n]=line.markedSpans;}
++n;
});
}



function removeClearedSpans(spans){
if(!spans){return null;}
var out;
for(var i=0;i<spans.length;++i){
if(spans[i].marker.explicitlyCleared){if(!out){out=spans.slice(0,i);}}else
if(out){out.push(spans[i]);}
}
return!out?spans:out.length?out:null;
}


function getOldSpans(doc,change){
var found=change["spans_"+doc.id];
if(!found){return null;}
var nw=[];
for(var i=0;i<change.text.length;++i)
{nw.push(removeClearedSpans(found[i]));}
return nw;
}





function mergeOldSpans(doc,change){
var old=getOldSpans(doc,change);
var stretched=stretchSpansOverChange(doc,change);
if(!old){return stretched;}
if(!stretched){return old;}

for(var i=0;i<old.length;++i){
var oldCur=old[i],stretchCur=stretched[i];
if(oldCur&&stretchCur){
spans:for(var j=0;j<stretchCur.length;++j){
var span=stretchCur[j];
for(var k=0;k<oldCur.length;++k)
{if(oldCur[k].marker==span.marker){continue spans;}}
oldCur.push(span);
}
}else if(stretchCur){
old[i]=stretchCur;
}
}
return old;
}



function copyHistoryArray(events,newGroup,instantiateSel){
var copy=[];
for(var i=0;i<events.length;++i){
var event=events[i];
if(event.ranges){
copy.push(instantiateSel?Selection.prototype.deepCopy.call(event):event);
continue;
}
var changes=event.changes,newChanges=[];
copy.push({changes:newChanges});
for(var j=0;j<changes.length;++j){
var change=changes[j],m=void 0;
newChanges.push({from:change.from,to:change.to,text:change.text});
if(newGroup){for(var prop in change){if(m=prop.match(/^spans_(\d+)$/)){
if(indexOf(newGroup,Number(m[1]))>-1){
lst(newChanges)[prop]=change[prop];
delete change[prop];
}
}}}
}
}
return copy;
}









function extendRange(doc,range,head,other){
if(doc.cm&&doc.cm.display.shift||doc.extend){
var anchor=range.anchor;
if(other){
var posBefore=cmp(head,anchor)<0;
if(posBefore!=cmp(other,anchor)<0){
anchor=head;
head=other;
}else if(posBefore!=cmp(head,other)<0){
head=other;
}
}
return new Range(anchor,head);
}else{
return new Range(other||head,head);
}
}


function extendSelection(doc,head,other,options){
setSelection(doc,new Selection([extendRange(doc,doc.sel.primary(),head,other)],0),options);
}



function extendSelections(doc,heads,options){
var out=[];
for(var i=0;i<doc.sel.ranges.length;i++)
{out[i]=extendRange(doc,doc.sel.ranges[i],heads[i],null);}
var newSel=normalizeSelection(out,doc.sel.primIndex);
setSelection(doc,newSel,options);
}


function replaceOneSelection(doc,i,range,options){
var ranges=doc.sel.ranges.slice(0);
ranges[i]=range;
setSelection(doc,normalizeSelection(ranges,doc.sel.primIndex),options);
}


function setSimpleSelection(doc,anchor,head,options){
setSelection(doc,simpleSelection(anchor,head),options);
}



function filterSelectionChange(doc,sel,options){
var obj={
ranges:sel.ranges,
update:function update(ranges){
var this$1=this;

this.ranges=[];
for(var i=0;i<ranges.length;i++)
{this$1.ranges[i]=new Range(_clipPos(doc,ranges[i].anchor),
_clipPos(doc,ranges[i].head));}
},
origin:options&&options.origin};

signal(doc,"beforeSelectionChange",doc,obj);
if(doc.cm){signal(doc.cm,"beforeSelectionChange",doc.cm,obj);}
if(obj.ranges!=sel.ranges){return normalizeSelection(obj.ranges,obj.ranges.length-1);}else
{return sel;}
}

function setSelectionReplaceHistory(doc,sel,options){
var done=doc.history.done,last=lst(done);
if(last&&last.ranges){
done[done.length-1]=sel;
setSelectionNoUndo(doc,sel,options);
}else{
setSelection(doc,sel,options);
}
}


function setSelection(doc,sel,options){
setSelectionNoUndo(doc,sel,options);
addSelectionToHistory(doc,doc.sel,doc.cm?doc.cm.curOp.id:NaN,options);
}

function setSelectionNoUndo(doc,sel,options){
if(hasHandler(doc,"beforeSelectionChange")||doc.cm&&hasHandler(doc.cm,"beforeSelectionChange"))
{sel=filterSelectionChange(doc,sel,options);}

var bias=options&&options.bias||(
cmp(sel.primary().head,doc.sel.primary().head)<0?-1:1);
setSelectionInner(doc,skipAtomicInSelection(doc,sel,bias,true));

if(!(options&&options.scroll===false)&&doc.cm)
{ensureCursorVisible(doc.cm);}
}

function setSelectionInner(doc,sel){
if(sel.equals(doc.sel)){return;}

doc.sel=sel;

if(doc.cm){
doc.cm.curOp.updateInput=doc.cm.curOp.selectionChanged=true;
signalCursorActivity(doc.cm);
}
signalLater(doc,"cursorActivity",doc);
}



function reCheckSelection(doc){
setSelectionInner(doc,skipAtomicInSelection(doc,doc.sel,null,false),sel_dontScroll);
}



function skipAtomicInSelection(doc,sel,bias,mayClear){
var out;
for(var i=0;i<sel.ranges.length;i++){
var range=sel.ranges[i];
var old=sel.ranges.length==doc.sel.ranges.length&&doc.sel.ranges[i];
var newAnchor=skipAtomic(doc,range.anchor,old&&old.anchor,bias,mayClear);
var newHead=skipAtomic(doc,range.head,old&&old.head,bias,mayClear);
if(out||newAnchor!=range.anchor||newHead!=range.head){
if(!out){out=sel.ranges.slice(0,i);}
out[i]=new Range(newAnchor,newHead);
}
}
return out?normalizeSelection(out,sel.primIndex):sel;
}

function skipAtomicInner(doc,pos,oldPos,dir,mayClear){
var line=getLine(doc,pos.line);
if(line.markedSpans){for(var i=0;i<line.markedSpans.length;++i){
var sp=line.markedSpans[i],m=sp.marker;
if((sp.from==null||(m.inclusiveLeft?sp.from<=pos.ch:sp.from<pos.ch))&&(
sp.to==null||(m.inclusiveRight?sp.to>=pos.ch:sp.to>pos.ch))){
if(mayClear){
signal(m,"beforeCursorEnter");
if(m.explicitlyCleared){
if(!line.markedSpans){break;}else
{--i;continue;}
}
}
if(!m.atomic){continue;}

if(oldPos){
var near=m.find(dir<0?1:-1),diff=void 0;
if(dir<0?m.inclusiveRight:m.inclusiveLeft)
{near=movePos(doc,near,-dir,near&&near.line==pos.line?line:null);}
if(near&&near.line==pos.line&&(diff=cmp(near,oldPos))&&(dir<0?diff<0:diff>0))
{return skipAtomicInner(doc,near,pos,dir,mayClear);}
}

var far=m.find(dir<0?-1:1);
if(dir<0?m.inclusiveLeft:m.inclusiveRight)
{far=movePos(doc,far,dir,far.line==pos.line?line:null);}
return far?skipAtomicInner(doc,far,pos,dir,mayClear):null;
}
}}
return pos;
}


function skipAtomic(doc,pos,oldPos,bias,mayClear){
var dir=bias||1;
var found=skipAtomicInner(doc,pos,oldPos,dir,mayClear)||
!mayClear&&skipAtomicInner(doc,pos,oldPos,dir,true)||
skipAtomicInner(doc,pos,oldPos,-dir,mayClear)||
!mayClear&&skipAtomicInner(doc,pos,oldPos,-dir,true);
if(!found){
doc.cantEdit=true;
return Pos(doc.first,0);
}
return found;
}

function movePos(doc,pos,dir,line){
if(dir<0&&pos.ch==0){
if(pos.line>doc.first){return _clipPos(doc,Pos(pos.line-1));}else
{return null;}
}else if(dir>0&&pos.ch==(line||getLine(doc,pos.line)).text.length){
if(pos.line<doc.first+doc.size-1){return Pos(pos.line+1,0);}else
{return null;}
}else{
return new Pos(pos.line,pos.ch+dir);
}
}

function selectAll(cm){
cm.setSelection(Pos(cm.firstLine(),0),Pos(cm.lastLine()),sel_dontScroll);
}




function filterChange(doc,change,update){
var obj={
canceled:false,
from:change.from,
to:change.to,
text:change.text,
origin:change.origin,
cancel:function cancel(){return obj.canceled=true;}};

if(update){obj.update=function(from,to,text,origin){
if(from){obj.from=_clipPos(doc,from);}
if(to){obj.to=_clipPos(doc,to);}
if(text){obj.text=text;}
if(origin!==undefined){obj.origin=origin;}
};}
signal(doc,"beforeChange",doc,obj);
if(doc.cm){signal(doc.cm,"beforeChange",doc.cm,obj);}

if(obj.canceled){return null;}
return{from:obj.from,to:obj.to,text:obj.text,origin:obj.origin};
}



function makeChange(doc,change,ignoreReadOnly){
if(doc.cm){
if(!doc.cm.curOp){return operation(doc.cm,makeChange)(doc,change,ignoreReadOnly);}
if(doc.cm.state.suppressEdits){return;}
}

if(hasHandler(doc,"beforeChange")||doc.cm&&hasHandler(doc.cm,"beforeChange")){
change=filterChange(doc,change,true);
if(!change){return;}
}



var split=sawReadOnlySpans&&!ignoreReadOnly&&removeReadOnlyRanges(doc,change.from,change.to);
if(split){
for(var i=split.length-1;i>=0;--i)
{makeChangeInner(doc,{from:split[i].from,to:split[i].to,text:i?[""]:change.text});}
}else{
makeChangeInner(doc,change);
}
}

function makeChangeInner(doc,change){
if(change.text.length==1&&change.text[0]==""&&cmp(change.from,change.to)==0){return;}
var selAfter=computeSelAfterChange(doc,change);
addChangeToHistory(doc,change,selAfter,doc.cm?doc.cm.curOp.id:NaN);

makeChangeSingleDoc(doc,change,selAfter,stretchSpansOverChange(doc,change));
var rebased=[];

linkedDocs(doc,function(doc,sharedHist){
if(!sharedHist&&indexOf(rebased,doc.history)==-1){
rebaseHist(doc.history,change);
rebased.push(doc.history);
}
makeChangeSingleDoc(doc,change,null,stretchSpansOverChange(doc,change));
});
}


function makeChangeFromHistory(doc,type,allowSelectionOnly){
if(doc.cm&&doc.cm.state.suppressEdits&&!allowSelectionOnly){return;}

var hist=doc.history,event,selAfter=doc.sel;
var source=type=="undo"?hist.done:hist.undone,dest=type=="undo"?hist.undone:hist.done;



var i=0;
for(;i<source.length;i++){
event=source[i];
if(allowSelectionOnly?event.ranges&&!event.equals(doc.sel):!event.ranges)
{break;}
}
if(i==source.length){return;}
hist.lastOrigin=hist.lastSelOrigin=null;

for(;;){
event=source.pop();
if(event.ranges){
pushSelectionToHistory(event,dest);
if(allowSelectionOnly&&!event.equals(doc.sel)){
setSelection(doc,event,{clearRedo:false});
return;
}
selAfter=event;
}else
{break;}
}



var antiChanges=[];
pushSelectionToHistory(selAfter,dest);
dest.push({changes:antiChanges,generation:hist.generation});
hist.generation=event.generation||++hist.maxGeneration;

var filter=hasHandler(doc,"beforeChange")||doc.cm&&hasHandler(doc.cm,"beforeChange");

var loop=function loop(i){
var change=event.changes[i];
change.origin=type;
if(filter&&!filterChange(doc,change,false)){
source.length=0;
return{};
}

antiChanges.push(historyChangeFromChange(doc,change));

var after=i?computeSelAfterChange(doc,change):lst(source);
makeChangeSingleDoc(doc,change,after,mergeOldSpans(doc,change));
if(!i&&doc.cm){doc.cm.scrollIntoView({from:change.from,to:changeEnd(change)});}
var rebased=[];


linkedDocs(doc,function(doc,sharedHist){
if(!sharedHist&&indexOf(rebased,doc.history)==-1){
rebaseHist(doc.history,change);
rebased.push(doc.history);
}
makeChangeSingleDoc(doc,change,null,mergeOldSpans(doc,change));
});
};

for(var i$1=event.changes.length-1;i$1>=0;--i$1){
var returned=loop(i$1);

if(returned)return returned.v;
}
}



function shiftDoc(doc,distance){
if(distance==0){return;}
doc.first+=distance;
doc.sel=new Selection(map(doc.sel.ranges,function(range){return new Range(
Pos(range.anchor.line+distance,range.anchor.ch),
Pos(range.head.line+distance,range.head.ch));
}),doc.sel.primIndex);
if(doc.cm){
regChange(doc.cm,doc.first,doc.first-distance,distance);
for(var d=doc.cm.display,l=d.viewFrom;l<d.viewTo;l++)
{regLineChange(doc.cm,l,"gutter");}
}
}



function makeChangeSingleDoc(doc,change,selAfter,spans){
if(doc.cm&&!doc.cm.curOp)
{return operation(doc.cm,makeChangeSingleDoc)(doc,change,selAfter,spans);}

if(change.to.line<doc.first){
shiftDoc(doc,change.text.length-1-(change.to.line-change.from.line));
return;
}
if(change.from.line>doc.lastLine()){return;}


if(change.from.line<doc.first){
var shift=change.text.length-1-(doc.first-change.from.line);
shiftDoc(doc,shift);
change={from:Pos(doc.first,0),to:Pos(change.to.line+shift,change.to.ch),
text:[lst(change.text)],origin:change.origin};
}
var last=doc.lastLine();
if(change.to.line>last){
change={from:change.from,to:Pos(last,getLine(doc,last).text.length),
text:[change.text[0]],origin:change.origin};
}

change.removed=getBetween(doc,change.from,change.to);

if(!selAfter){selAfter=computeSelAfterChange(doc,change);}
if(doc.cm){makeChangeSingleDocInEditor(doc.cm,change,spans);}else
{updateDoc(doc,change,spans);}
setSelectionNoUndo(doc,selAfter,sel_dontScroll);
}



function makeChangeSingleDocInEditor(cm,change,spans){
var doc=cm.doc,display=cm.display,from=change.from,to=change.to;

var recomputeMaxLength=false,checkWidthStart=from.line;
if(!cm.options.lineWrapping){
checkWidthStart=lineNo(visualLine(getLine(doc,from.line)));
doc.iter(checkWidthStart,to.line+1,function(line){
if(line==display.maxLine){
recomputeMaxLength=true;
return true;
}
});
}

if(doc.sel.contains(change.from,change.to)>-1)
{signalCursorActivity(cm);}

updateDoc(doc,change,spans,estimateHeight(cm));

if(!cm.options.lineWrapping){
doc.iter(checkWidthStart,from.line+change.text.length,function(line){
var len=lineLength(line);
if(len>display.maxLineLength){
display.maxLine=line;
display.maxLineLength=len;
display.maxLineChanged=true;
recomputeMaxLength=false;
}
});
if(recomputeMaxLength){cm.curOp.updateMaxLine=true;}
}


doc.frontier=Math.min(doc.frontier,from.line);
startWorker(cm,400);

var lendiff=change.text.length-(to.line-from.line)-1;

if(change.full)
{regChange(cm);}else
if(from.line==to.line&&change.text.length==1&&!isWholeLineUpdate(cm.doc,change))
{regLineChange(cm,from.line,"text");}else

{regChange(cm,from.line,to.line+1,lendiff);}

var changesHandler=hasHandler(cm,"changes"),changeHandler=hasHandler(cm,"change");
if(changeHandler||changesHandler){
var obj={
from:from,to:to,
text:change.text,
removed:change.removed,
origin:change.origin};

if(changeHandler){signalLater(cm,"change",cm,obj);}
if(changesHandler){(cm.curOp.changeObjs||(cm.curOp.changeObjs=[])).push(obj);}
}
cm.display.selForContextMenu=null;
}

function _replaceRange(doc,code,from,to,origin){
if(!to){to=from;}
if(cmp(to,from)<0){var tmp=to;to=from;from=tmp;}
if(typeof code=="string"){code=doc.splitLines(code);}
makeChange(doc,{from:from,to:to,text:code,origin:origin});
}



function rebaseHistSelSingle(pos,from,to,diff){
if(to<pos.line){
pos.line+=diff;
}else if(from<pos.line){
pos.line=from;
pos.ch=0;
}
}








function rebaseHistArray(array,from,to,diff){
for(var i=0;i<array.length;++i){
var sub=array[i],ok=true;
if(sub.ranges){
if(!sub.copied){sub=array[i]=sub.deepCopy();sub.copied=true;}
for(var j=0;j<sub.ranges.length;j++){
rebaseHistSelSingle(sub.ranges[j].anchor,from,to,diff);
rebaseHistSelSingle(sub.ranges[j].head,from,to,diff);
}
continue;
}
for(var j$1=0;j$1<sub.changes.length;++j$1){
var cur=sub.changes[j$1];
if(to<cur.from.line){
cur.from=Pos(cur.from.line+diff,cur.from.ch);
cur.to=Pos(cur.to.line+diff,cur.to.ch);
}else if(from<=cur.to.line){
ok=false;
break;
}
}
if(!ok){
array.splice(0,i+1);
i=0;
}
}
}

function rebaseHist(hist,change){
var from=change.from.line,to=change.to.line,diff=change.text.length-(to-from)-1;
rebaseHistArray(hist.done,from,to,diff);
rebaseHistArray(hist.undone,from,to,diff);
}




function changeLine(doc,handle,changeType,op){
var no=handle,line=handle;
if(typeof handle=="number"){line=getLine(doc,clipLine(doc,handle));}else
{no=lineNo(handle);}
if(no==null){return null;}
if(op(line,no)&&doc.cm){regLineChange(doc.cm,no,changeType);}
return line;
}














function LeafChunk(lines){
var this$1=this;

this.lines=lines;
this.parent=null;
var height=0;
for(var i=0;i<lines.length;++i){
lines[i].parent=this$1;
height+=lines[i].height;
}
this.height=height;
}

LeafChunk.prototype={
chunkSize:function chunkSize(){return this.lines.length;},

removeInner:function removeInner(at,n){
var this$1=this;

for(var i=at,e=at+n;i<e;++i){
var line=this$1.lines[i];
this$1.height-=line.height;
cleanUpLine(line);
signalLater(line,"delete");
}
this.lines.splice(at,n);
},

collapse:function collapse(lines){
lines.push.apply(lines,this.lines);
},


insertInner:function insertInner(at,lines,height){
var this$1=this;

this.height+=height;
this.lines=this.lines.slice(0,at).concat(lines).concat(this.lines.slice(at));
for(var i=0;i<lines.length;++i){lines[i].parent=this$1;}
},

iterN:function iterN(at,n,op){
var this$1=this;

for(var e=at+n;at<e;++at)
{if(op(this$1.lines[at])){return true;}}
}};


function BranchChunk(children){
var this$1=this;

this.children=children;
var size=0,height=0;
for(var i=0;i<children.length;++i){
var ch=children[i];
size+=ch.chunkSize();height+=ch.height;
ch.parent=this$1;
}
this.size=size;
this.height=height;
this.parent=null;
}

BranchChunk.prototype={
chunkSize:function chunkSize(){return this.size;},
removeInner:function removeInner(at,n){
var this$1=this;

this.size-=n;
for(var i=0;i<this.children.length;++i){
var child=this$1.children[i],sz=child.chunkSize();
if(at<sz){
var rm=Math.min(n,sz-at),oldHeight=child.height;
child.removeInner(at,rm);
this$1.height-=oldHeight-child.height;
if(sz==rm){this$1.children.splice(i--,1);child.parent=null;}
if((n-=rm)==0){break;}
at=0;
}else{at-=sz;}
}


if(this.size-n<25&&(
this.children.length>1||!(this.children[0]instanceof LeafChunk))){
var lines=[];
this.collapse(lines);
this.children=[new LeafChunk(lines)];
this.children[0].parent=this;
}
},
collapse:function collapse(lines){
var this$1=this;

for(var i=0;i<this.children.length;++i){this$1.children[i].collapse(lines);}
},
insertInner:function insertInner(at,lines,height){
var this$1=this;

this.size+=lines.length;
this.height+=height;
for(var i=0;i<this.children.length;++i){
var child=this$1.children[i],sz=child.chunkSize();
if(at<=sz){
child.insertInner(at,lines,height);
if(child.lines&&child.lines.length>50){


var remaining=child.lines.length%25+25;
for(var pos=remaining;pos<child.lines.length;){
var leaf=new LeafChunk(child.lines.slice(pos,pos+=25));
child.height-=leaf.height;
this$1.children.splice(++i,0,leaf);
leaf.parent=this$1;
}
child.lines=child.lines.slice(0,remaining);
this$1.maybeSpill();
}
break;
}
at-=sz;
}
},

maybeSpill:function maybeSpill(){
if(this.children.length<=10){return;}
var me=this;
do{
var spilled=me.children.splice(me.children.length-5,5);
var sibling=new BranchChunk(spilled);
if(!me.parent){
var copy=new BranchChunk(me.children);
copy.parent=me;
me.children=[copy,sibling];
me=copy;
}else{
me.size-=sibling.size;
me.height-=sibling.height;
var myIndex=indexOf(me.parent.children,me);
me.parent.children.splice(myIndex+1,0,sibling);
}
sibling.parent=me.parent;
}while(me.children.length>10);
me.parent.maybeSpill();
},
iterN:function iterN(at,n,op){
var this$1=this;

for(var i=0;i<this.children.length;++i){
var child=this$1.children[i],sz=child.chunkSize();
if(at<sz){
var used=Math.min(n,sz-at);
if(child.iterN(at,used,op)){return true;}
if((n-=used)==0){break;}
at=0;
}else{at-=sz;}
}
}};




function LineWidget(doc,node,options){
var this$1=this;

if(options){for(var opt in options){if(options.hasOwnProperty(opt))
{this$1[opt]=options[opt];}}}
this.doc=doc;
this.node=node;
}
eventMixin(LineWidget);

function adjustScrollWhenAboveVisible(cm,line,diff){
if(_heightAtLine(line)<(cm.curOp&&cm.curOp.scrollTop||cm.doc.scrollTop))
{addToScrollPos(cm,null,diff);}
}

LineWidget.prototype.clear=function(){
var this$1=this;

var cm=this.doc.cm,ws=this.line.widgets,line=this.line,no=lineNo(line);
if(no==null||!ws){return;}
for(var i=0;i<ws.length;++i){if(ws[i]==this$1){ws.splice(i--,1);}}
if(!ws.length){line.widgets=null;}
var height=widgetHeight(this);
updateLineHeight(line,Math.max(0,line.height-height));
if(cm){runInOp(cm,function(){
adjustScrollWhenAboveVisible(cm,line,-height);
regLineChange(cm,no,"widget");
});}
};
LineWidget.prototype.changed=function(){
var oldH=this.height,cm=this.doc.cm,line=this.line;
this.height=null;
var diff=widgetHeight(this)-oldH;
if(!diff){return;}
updateLineHeight(line,line.height+diff);
if(cm){runInOp(cm,function(){
cm.curOp.forceUpdate=true;
adjustScrollWhenAboveVisible(cm,line,diff);
});}
};

function addLineWidget(doc,handle,node,options){
var widget=new LineWidget(doc,node,options);
var cm=doc.cm;
if(cm&&widget.noHScroll){cm.display.alignWidgets=true;}
changeLine(doc,handle,"widget",function(line){
var widgets=line.widgets||(line.widgets=[]);
if(widget.insertAt==null){widgets.push(widget);}else
{widgets.splice(Math.min(widgets.length-1,Math.max(0,widget.insertAt)),0,widget);}
widget.line=line;
if(cm&&!lineIsHidden(doc,line)){
var aboveVisible=_heightAtLine(line)<doc.scrollTop;
updateLineHeight(line,line.height+widgetHeight(widget));
if(aboveVisible){addToScrollPos(cm,null,widget.height);}
cm.curOp.forceUpdate=true;
}
return true;
});
return widget;
}
















var nextMarkerId=0;

function TextMarker(doc,type){
this.lines=[];
this.type=type;
this.doc=doc;
this.id=++nextMarkerId;
}
eventMixin(TextMarker);


TextMarker.prototype.clear=function(){
var this$1=this;

if(this.explicitlyCleared){return;}
var cm=this.doc.cm,withOp=cm&&!cm.curOp;
if(withOp){startOperation(cm);}
if(hasHandler(this,"clear")){
var found=this.find();
if(found){signalLater(this,"clear",found.from,found.to);}
}
var min=null,max=null;
for(var i=0;i<this.lines.length;++i){
var line=this$1.lines[i];
var span=getMarkedSpanFor(line.markedSpans,this$1);
if(cm&&!this$1.collapsed){regLineChange(cm,lineNo(line),"text");}else
if(cm){
if(span.to!=null){max=lineNo(line);}
if(span.from!=null){min=lineNo(line);}
}
line.markedSpans=removeMarkedSpan(line.markedSpans,span);
if(span.from==null&&this$1.collapsed&&!lineIsHidden(this$1.doc,line)&&cm)
{updateLineHeight(line,textHeight(cm.display));}
}
if(cm&&this.collapsed&&!cm.options.lineWrapping){for(var i$1=0;i$1<this.lines.length;++i$1){
var visual=visualLine(this$1.lines[i$1]),len=lineLength(visual);
if(len>cm.display.maxLineLength){
cm.display.maxLine=visual;
cm.display.maxLineLength=len;
cm.display.maxLineChanged=true;
}
}}

if(min!=null&&cm&&this.collapsed){regChange(cm,min,max+1);}
this.lines.length=0;
this.explicitlyCleared=true;
if(this.atomic&&this.doc.cantEdit){
this.doc.cantEdit=false;
if(cm){reCheckSelection(cm.doc);}
}
if(cm){signalLater(cm,"markerCleared",cm,this);}
if(withOp){endOperation(cm);}
if(this.parent){this.parent.clear();}
};






TextMarker.prototype.find=function(side,lineObj){
var this$1=this;

if(side==null&&this.type=="bookmark"){side=1;}
var from,to;
for(var i=0;i<this.lines.length;++i){
var line=this$1.lines[i];
var span=getMarkedSpanFor(line.markedSpans,this$1);
if(span.from!=null){
from=Pos(lineObj?line:lineNo(line),span.from);
if(side==-1){return from;}
}
if(span.to!=null){
to=Pos(lineObj?line:lineNo(line),span.to);
if(side==1){return to;}
}
}
return from&&{from:from,to:to};
};



TextMarker.prototype.changed=function(){
var pos=this.find(-1,true),widget=this,cm=this.doc.cm;
if(!pos||!cm){return;}
runInOp(cm,function(){
var line=pos.line,lineN=lineNo(pos.line);
var view=findViewForLine(cm,lineN);
if(view){
clearLineMeasurementCacheFor(view);
cm.curOp.selectionChanged=cm.curOp.forceUpdate=true;
}
cm.curOp.updateMaxLine=true;
if(!lineIsHidden(widget.doc,line)&&widget.height!=null){
var oldHeight=widget.height;
widget.height=null;
var dHeight=widgetHeight(widget)-oldHeight;
if(dHeight)
{updateLineHeight(line,line.height+dHeight);}
}
});
};

TextMarker.prototype.attachLine=function(line){
if(!this.lines.length&&this.doc.cm){
var op=this.doc.cm.curOp;
if(!op.maybeHiddenMarkers||indexOf(op.maybeHiddenMarkers,this)==-1)
{(op.maybeUnhiddenMarkers||(op.maybeUnhiddenMarkers=[])).push(this);}
}
this.lines.push(line);
};
TextMarker.prototype.detachLine=function(line){
this.lines.splice(indexOf(this.lines,line),1);
if(!this.lines.length&&this.doc.cm){
var op=this.doc.cm.curOp;
(op.maybeHiddenMarkers||(op.maybeHiddenMarkers=[])).push(this);
}
};


function _markText(doc,from,to,options,type){



if(options&&options.shared){return markTextShared(doc,from,to,options,type);}

if(doc.cm&&!doc.cm.curOp){return operation(doc.cm,_markText)(doc,from,to,options,type);}

var marker=new TextMarker(doc,type),diff=cmp(from,to);
if(options){copyObj(options,marker,false);}

if(diff>0||diff==0&&marker.clearWhenEmpty!==false)
{return marker;}
if(marker.replacedWith){

marker.collapsed=true;
marker.widgetNode=elt("span",[marker.replacedWith],"CodeMirror-widget");
marker.widgetNode.setAttribute("role","presentation");
if(!options.handleMouseEvents){marker.widgetNode.setAttribute("cm-ignore-events","true");}
if(options.insertLeft){marker.widgetNode.insertLeft=true;}
}
if(marker.collapsed){
if(conflictingCollapsedRange(doc,from.line,from,to,marker)||
from.line!=to.line&&conflictingCollapsedRange(doc,to.line,from,to,marker))
{throw new Error("Inserting collapsed marker partially overlapping an existing one");}
seeCollapsedSpans();
}

if(marker.addToHistory)
{addChangeToHistory(doc,{from:from,to:to,origin:"markText"},doc.sel,NaN);}

var curLine=from.line,cm=doc.cm,updateMaxLine;
doc.iter(curLine,to.line+1,function(line){
if(cm&&marker.collapsed&&!cm.options.lineWrapping&&visualLine(line)==cm.display.maxLine)
{updateMaxLine=true;}
if(marker.collapsed&&curLine!=from.line){updateLineHeight(line,0);}
addMarkedSpan(line,new MarkedSpan(marker,
curLine==from.line?from.ch:null,
curLine==to.line?to.ch:null));
++curLine;
});

if(marker.collapsed){doc.iter(from.line,to.line+1,function(line){
if(lineIsHidden(doc,line)){updateLineHeight(line,0);}
});}

if(marker.clearOnEnter){on(marker,"beforeCursorEnter",function(){return marker.clear();});}

if(marker.readOnly){
seeReadOnlySpans();
if(doc.history.done.length||doc.history.undone.length)
{doc.clearHistory();}
}
if(marker.collapsed){
marker.id=++nextMarkerId;
marker.atomic=true;
}
if(cm){

if(updateMaxLine){cm.curOp.updateMaxLine=true;}
if(marker.collapsed)
{regChange(cm,from.line,to.line+1);}else
if(marker.className||marker.title||marker.startStyle||marker.endStyle||marker.css)
{for(var i=from.line;i<=to.line;i++){regLineChange(cm,i,"text");}}
if(marker.atomic){reCheckSelection(cm.doc);}
signalLater(cm,"markerAdded",cm,marker);
}
return marker;
}






function SharedTextMarker(markers,primary){
var this$1=this;

this.markers=markers;
this.primary=primary;
for(var i=0;i<markers.length;++i)
{markers[i].parent=this$1;}
}
eventMixin(SharedTextMarker);

SharedTextMarker.prototype.clear=function(){
var this$1=this;

if(this.explicitlyCleared){return;}
this.explicitlyCleared=true;
for(var i=0;i<this.markers.length;++i)
{this$1.markers[i].clear();}
signalLater(this,"clear");
};
SharedTextMarker.prototype.find=function(side,lineObj){
return this.primary.find(side,lineObj);
};

function markTextShared(doc,from,to,options,type){
options=copyObj(options);
options.shared=false;
var markers=[_markText(doc,from,to,options,type)],primary=markers[0];
var widget=options.widgetNode;
linkedDocs(doc,function(doc){
if(widget){options.widgetNode=widget.cloneNode(true);}
markers.push(_markText(doc,_clipPos(doc,from),_clipPos(doc,to),options,type));
for(var i=0;i<doc.linked.length;++i)
{if(doc.linked[i].isParent){return;}}
primary=lst(markers);
});
return new SharedTextMarker(markers,primary);
}

function findSharedMarkers(doc){
return doc.findMarks(Pos(doc.first,0),doc.clipPos(Pos(doc.lastLine())),function(m){return m.parent;});
}

function copySharedMarkers(doc,markers){
for(var i=0;i<markers.length;i++){
var marker=markers[i],pos=marker.find();
var mFrom=doc.clipPos(pos.from),mTo=doc.clipPos(pos.to);
if(cmp(mFrom,mTo)){
var subMark=_markText(doc,mFrom,mTo,marker.primary,marker.primary.type);
marker.markers.push(subMark);
subMark.parent=marker;
}
}
}

function detachSharedMarkers(markers){
var loop=function loop(i){
var marker=markers[i],linked=[marker.primary.doc];
linkedDocs(marker.primary.doc,function(d){return linked.push(d);});
for(var j=0;j<marker.markers.length;j++){
var subMarker=marker.markers[j];
if(indexOf(linked,subMarker.doc)==-1){
subMarker.parent=null;
marker.markers.splice(j--,1);
}
}
};

for(var i=0;i<markers.length;i++){loop(i);}
}

var nextDocId=0;
var Doc=function Doc(text,mode,firstLine,lineSep){
if(!(this instanceof Doc)){return new Doc(text,mode,firstLine,lineSep);}
if(firstLine==null){firstLine=0;}

BranchChunk.call(this,[new LeafChunk([new Line("",null)])]);
this.first=firstLine;
this.scrollTop=this.scrollLeft=0;
this.cantEdit=false;
this.cleanGeneration=1;
this.frontier=firstLine;
var start=Pos(firstLine,0);
this.sel=simpleSelection(start);
this.history=new History(null);
this.id=++nextDocId;
this.modeOption=mode;
this.lineSep=lineSep;
this.extend=false;

if(typeof text=="string"){text=this.splitLines(text);}
updateDoc(this,{from:start,to:start,text:text});
setSelection(this,simpleSelection(start),sel_dontScroll);
};

Doc.prototype=createObj(BranchChunk.prototype,{
constructor:Doc,




iter:function iter(from,to,op){
if(op){this.iterN(from-this.first,to-from,op);}else
{this.iterN(this.first,this.first+this.size,from);}
},


insert:function insert(at,lines){
var height=0;
for(var i=0;i<lines.length;++i){height+=lines[i].height;}
this.insertInner(at-this.first,lines,height);
},
remove:function remove(at,n){this.removeInner(at-this.first,n);},




getValue:function getValue(lineSep){
var lines=getLines(this,this.first,this.first+this.size);
if(lineSep===false){return lines;}
return lines.join(lineSep||this.lineSeparator());
},
setValue:docMethodOp(function(code){
var top=Pos(this.first,0),last=this.first+this.size-1;
makeChange(this,{from:top,to:Pos(last,getLine(this,last).text.length),
text:this.splitLines(code),origin:"setValue",full:true},true);
setSelection(this,simpleSelection(top));
}),
replaceRange:function replaceRange(code,from,to,origin){
from=_clipPos(this,from);
to=to?_clipPos(this,to):from;
_replaceRange(this,code,from,to,origin);
},
getRange:function getRange(from,to,lineSep){
var lines=getBetween(this,_clipPos(this,from),_clipPos(this,to));
if(lineSep===false){return lines;}
return lines.join(lineSep||this.lineSeparator());
},

getLine:function getLine(line){var l=this.getLineHandle(line);return l&&l.text;},

getLineHandle:function getLineHandle(line){if(isLine(this,line)){return getLine(this,line);}},
getLineNumber:function getLineNumber(line){return lineNo(line);},

getLineHandleVisualStart:function getLineHandleVisualStart(line){
if(typeof line=="number"){line=getLine(this,line);}
return visualLine(line);
},

lineCount:function lineCount(){return this.size;},
firstLine:function firstLine(){return this.first;},
lastLine:function lastLine(){return this.first+this.size-1;},

clipPos:function clipPos(pos){return _clipPos(this,pos);},

getCursor:function getCursor(start){
var range=this.sel.primary(),pos;
if(start==null||start=="head"){pos=range.head;}else
if(start=="anchor"){pos=range.anchor;}else
if(start=="end"||start=="to"||start===false){pos=range.to();}else
{pos=range.from();}
return pos;
},
listSelections:function listSelections(){return this.sel.ranges;},
somethingSelected:function somethingSelected(){return this.sel.somethingSelected();},

setCursor:docMethodOp(function(line,ch,options){
setSimpleSelection(this,_clipPos(this,typeof line=="number"?Pos(line,ch||0):line),null,options);
}),
setSelection:docMethodOp(function(anchor,head,options){
setSimpleSelection(this,_clipPos(this,anchor),_clipPos(this,head||anchor),options);
}),
extendSelection:docMethodOp(function(head,other,options){
extendSelection(this,_clipPos(this,head),other&&_clipPos(this,other),options);
}),
extendSelections:docMethodOp(function(heads,options){
extendSelections(this,clipPosArray(this,heads),options);
}),
extendSelectionsBy:docMethodOp(function(f,options){
var heads=map(this.sel.ranges,f);
extendSelections(this,clipPosArray(this,heads),options);
}),
setSelections:docMethodOp(function(ranges,primary,options){
var this$1=this;

if(!ranges.length){return;}
var out=[];
for(var i=0;i<ranges.length;i++)
{out[i]=new Range(_clipPos(this$1,ranges[i].anchor),
_clipPos(this$1,ranges[i].head));}
if(primary==null){primary=Math.min(ranges.length-1,this.sel.primIndex);}
setSelection(this,normalizeSelection(out,primary),options);
}),
addSelection:docMethodOp(function(anchor,head,options){
var ranges=this.sel.ranges.slice(0);
ranges.push(new Range(_clipPos(this,anchor),_clipPos(this,head||anchor)));
setSelection(this,normalizeSelection(ranges,ranges.length-1),options);
}),

getSelection:function getSelection(lineSep){
var this$1=this;

var ranges=this.sel.ranges,lines;
for(var i=0;i<ranges.length;i++){
var sel=getBetween(this$1,ranges[i].from(),ranges[i].to());
lines=lines?lines.concat(sel):sel;
}
if(lineSep===false){return lines;}else
{return lines.join(lineSep||this.lineSeparator());}
},
getSelections:function getSelections(lineSep){
var this$1=this;

var parts=[],ranges=this.sel.ranges;
for(var i=0;i<ranges.length;i++){
var sel=getBetween(this$1,ranges[i].from(),ranges[i].to());
if(lineSep!==false){sel=sel.join(lineSep||this$1.lineSeparator());}
parts[i]=sel;
}
return parts;
},
replaceSelection:function replaceSelection(code,collapse,origin){
var dup=[];
for(var i=0;i<this.sel.ranges.length;i++)
{dup[i]=code;}
this.replaceSelections(dup,collapse,origin||"+input");
},
replaceSelections:docMethodOp(function(code,collapse,origin){
var this$1=this;

var changes=[],sel=this.sel;
for(var i=0;i<sel.ranges.length;i++){
var range=sel.ranges[i];
changes[i]={from:range.from(),to:range.to(),text:this$1.splitLines(code[i]),origin:origin};
}
var newSel=collapse&&collapse!="end"&&computeReplacedSel(this,changes,collapse);
for(var i$1=changes.length-1;i$1>=0;i$1--)
{makeChange(this$1,changes[i$1]);}
if(newSel){setSelectionReplaceHistory(this,newSel);}else
if(this.cm){ensureCursorVisible(this.cm);}
}),
undo:docMethodOp(function(){makeChangeFromHistory(this,"undo");}),
redo:docMethodOp(function(){makeChangeFromHistory(this,"redo");}),
undoSelection:docMethodOp(function(){makeChangeFromHistory(this,"undo",true);}),
redoSelection:docMethodOp(function(){makeChangeFromHistory(this,"redo",true);}),

setExtending:function setExtending(val){this.extend=val;},
getExtending:function getExtending(){return this.extend;},

historySize:function historySize(){
var hist=this.history,done=0,undone=0;
for(var i=0;i<hist.done.length;i++){if(!hist.done[i].ranges){++done;}}
for(var i$1=0;i$1<hist.undone.length;i$1++){if(!hist.undone[i$1].ranges){++undone;}}
return{undo:done,redo:undone};
},
clearHistory:function clearHistory(){this.history=new History(this.history.maxGeneration);},

markClean:function markClean(){
this.cleanGeneration=this.changeGeneration(true);
},
changeGeneration:function changeGeneration(forceSplit){
if(forceSplit)
{this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null;}
return this.history.generation;
},
isClean:function isClean(gen){
return this.history.generation==(gen||this.cleanGeneration);
},

getHistory:function getHistory(){
return{done:copyHistoryArray(this.history.done),
undone:copyHistoryArray(this.history.undone)};
},
setHistory:function setHistory(histData){
var hist=this.history=new History(this.history.maxGeneration);
hist.done=copyHistoryArray(histData.done.slice(0),null,true);
hist.undone=copyHistoryArray(histData.undone.slice(0),null,true);
},

setGutterMarker:docMethodOp(function(line,gutterID,value){
return changeLine(this,line,"gutter",function(line){
var markers=line.gutterMarkers||(line.gutterMarkers={});
markers[gutterID]=value;
if(!value&&isEmpty(markers)){line.gutterMarkers=null;}
return true;
});
}),

clearGutter:docMethodOp(function(gutterID){
var this$1=this;

this.iter(function(line){
if(line.gutterMarkers&&line.gutterMarkers[gutterID]){
changeLine(this$1,line,"gutter",function(){
line.gutterMarkers[gutterID]=null;
if(isEmpty(line.gutterMarkers)){line.gutterMarkers=null;}
return true;
});
}
});
}),

lineInfo:function lineInfo(line){
var n;
if(typeof line=="number"){
if(!isLine(this,line)){return null;}
n=line;
line=getLine(this,line);
if(!line){return null;}
}else{
n=lineNo(line);
if(n==null){return null;}
}
return{line:n,handle:line,text:line.text,gutterMarkers:line.gutterMarkers,
textClass:line.textClass,bgClass:line.bgClass,wrapClass:line.wrapClass,
widgets:line.widgets};
},

addLineClass:docMethodOp(function(handle,where,cls){
return changeLine(this,handle,where=="gutter"?"gutter":"class",function(line){
var prop=where=="text"?"textClass":
where=="background"?"bgClass":
where=="gutter"?"gutterClass":"wrapClass";
if(!line[prop]){line[prop]=cls;}else
if(classTest(cls).test(line[prop])){return false;}else
{line[prop]+=" "+cls;}
return true;
});
}),
removeLineClass:docMethodOp(function(handle,where,cls){
return changeLine(this,handle,where=="gutter"?"gutter":"class",function(line){
var prop=where=="text"?"textClass":
where=="background"?"bgClass":
where=="gutter"?"gutterClass":"wrapClass";
var cur=line[prop];
if(!cur){return false;}else
if(cls==null){line[prop]=null;}else
{
var found=cur.match(classTest(cls));
if(!found){return false;}
var end=found.index+found[0].length;
line[prop]=cur.slice(0,found.index)+(!found.index||end==cur.length?"":" ")+cur.slice(end)||null;
}
return true;
});
}),

addLineWidget:docMethodOp(function(handle,node,options){
return addLineWidget(this,handle,node,options);
}),
removeLineWidget:function removeLineWidget(widget){widget.clear();},

markText:function markText(from,to,options){
return _markText(this,_clipPos(this,from),_clipPos(this,to),options,options&&options.type||"range");
},
setBookmark:function setBookmark(pos,options){
var realOpts={replacedWith:options&&(options.nodeType==null?options.widget:options),
insertLeft:options&&options.insertLeft,
clearWhenEmpty:false,shared:options&&options.shared,
handleMouseEvents:options&&options.handleMouseEvents};
pos=_clipPos(this,pos);
return _markText(this,pos,pos,realOpts,"bookmark");
},
findMarksAt:function findMarksAt(pos){
pos=_clipPos(this,pos);
var markers=[],spans=getLine(this,pos.line).markedSpans;
if(spans){for(var i=0;i<spans.length;++i){
var span=spans[i];
if((span.from==null||span.from<=pos.ch)&&(
span.to==null||span.to>=pos.ch))
{markers.push(span.marker.parent||span.marker);}
}}
return markers;
},
findMarks:function findMarks(from,to,filter){
from=_clipPos(this,from);to=_clipPos(this,to);
var found=[],lineNo=from.line;
this.iter(from.line,to.line+1,function(line){
var spans=line.markedSpans;
if(spans){for(var i=0;i<spans.length;i++){
var span=spans[i];
if(!(span.to!=null&&lineNo==from.line&&from.ch>=span.to||
span.from==null&&lineNo!=from.line||
span.from!=null&&lineNo==to.line&&span.from>=to.ch)&&(
!filter||filter(span.marker)))
{found.push(span.marker.parent||span.marker);}
}}
++lineNo;
});
return found;
},
getAllMarks:function getAllMarks(){
var markers=[];
this.iter(function(line){
var sps=line.markedSpans;
if(sps){for(var i=0;i<sps.length;++i)
{if(sps[i].from!=null){markers.push(sps[i].marker);}}}
});
return markers;
},

posFromIndex:function posFromIndex(off){
var ch,lineNo=this.first,sepSize=this.lineSeparator().length;
this.iter(function(line){
var sz=line.text.length+sepSize;
if(sz>off){ch=off;return true;}
off-=sz;
++lineNo;
});
return _clipPos(this,Pos(lineNo,ch));
},
indexFromPos:function indexFromPos(coords){
coords=_clipPos(this,coords);
var index=coords.ch;
if(coords.line<this.first||coords.ch<0){return 0;}
var sepSize=this.lineSeparator().length;
this.iter(this.first,coords.line,function(line){
index+=line.text.length+sepSize;
});
return index;
},

copy:function copy(copyHistory){
var doc=new Doc(getLines(this,this.first,this.first+this.size),
this.modeOption,this.first,this.lineSep);
doc.scrollTop=this.scrollTop;doc.scrollLeft=this.scrollLeft;
doc.sel=this.sel;
doc.extend=false;
if(copyHistory){
doc.history.undoDepth=this.history.undoDepth;
doc.setHistory(this.getHistory());
}
return doc;
},

linkedDoc:function linkedDoc(options){
if(!options){options={};}
var from=this.first,to=this.first+this.size;
if(options.from!=null&&options.from>from){from=options.from;}
if(options.to!=null&&options.to<to){to=options.to;}
var copy=new Doc(getLines(this,from,to),options.mode||this.modeOption,from,this.lineSep);
if(options.sharedHist){copy.history=this.history;
}(this.linked||(this.linked=[])).push({doc:copy,sharedHist:options.sharedHist});
copy.linked=[{doc:this,isParent:true,sharedHist:options.sharedHist}];
copySharedMarkers(copy,findSharedMarkers(this));
return copy;
},
unlinkDoc:function unlinkDoc(other){
var this$1=this;

if(other instanceof CodeMirror){other=other.doc;}
if(this.linked){for(var i=0;i<this.linked.length;++i){
var link=this$1.linked[i];
if(link.doc!=other){continue;}
this$1.linked.splice(i,1);
other.unlinkDoc(this$1);
detachSharedMarkers(findSharedMarkers(this$1));
break;
}}

if(other.history==this.history){
var splitIds=[other.id];
linkedDocs(other,function(doc){return splitIds.push(doc.id);},true);
other.history=new History(null);
other.history.done=copyHistoryArray(this.history.done,splitIds);
other.history.undone=copyHistoryArray(this.history.undone,splitIds);
}
},
iterLinkedDocs:function iterLinkedDocs(f){linkedDocs(this,f);},

getMode:function getMode(){return this.mode;},
getEditor:function getEditor(){return this.cm;},

splitLines:function splitLines(str){
if(this.lineSep){return str.split(this.lineSep);}
return splitLinesAuto(str);
},
lineSeparator:function lineSeparator(){return this.lineSep||"\n";}});



Doc.prototype.eachLine=Doc.prototype.iter;



var lastDrop=0;

function onDrop(e){
var cm=this;
clearDragCursor(cm);
if(signalDOMEvent(cm,e)||eventInWidget(cm.display,e))
{return;}
e_preventDefault(e);
if(ie){lastDrop=+new Date();}
var pos=posFromMouse(cm,e,true),files=e.dataTransfer.files;
if(!pos||cm.isReadOnly()){return;}


if(files&&files.length&&window.FileReader&&window.File){
var n=files.length,text=Array(n),read=0;
var loadFile=function loadFile(file,i){
if(cm.options.allowDropFileTypes&&
indexOf(cm.options.allowDropFileTypes,file.type)==-1)
{return;}

var reader=new FileReader();
reader.onload=operation(cm,function(){
var content=reader.result;
if(/[\x00-\x08\x0e-\x1f]{2}/.test(content)){content="";}
text[i]=content;
if(++read==n){
pos=_clipPos(cm.doc,pos);
var change={from:pos,to:pos,
text:cm.doc.splitLines(text.join(cm.doc.lineSeparator())),
origin:"paste"};
makeChange(cm.doc,change);
setSelectionReplaceHistory(cm.doc,simpleSelection(pos,changeEnd(change)));
}
});
reader.readAsText(file);
};
for(var i=0;i<n;++i){loadFile(files[i],i);}
}else{

if(cm.state.draggingText&&cm.doc.sel.contains(pos)>-1){
cm.state.draggingText(e);

setTimeout(function(){return cm.display.input.focus();},20);
return;
}
try{
var text$1=e.dataTransfer.getData("Text");
if(text$1){
var selected;
if(cm.state.draggingText&&!cm.state.draggingText.copy)
{selected=cm.listSelections();}
setSelectionNoUndo(cm.doc,simpleSelection(pos,pos));
if(selected){for(var i$1=0;i$1<selected.length;++i$1)
{_replaceRange(cm.doc,"",selected[i$1].anchor,selected[i$1].head,"drag");}}
cm.replaceSelection(text$1,"around","paste");
cm.display.input.focus();
}
}
catch(e){}
}
}

function onDragStart(cm,e){
if(ie&&(!cm.state.draggingText||+new Date()-lastDrop<100)){e_stop(e);return;}
if(signalDOMEvent(cm,e)||eventInWidget(cm.display,e)){return;}

e.dataTransfer.setData("Text",cm.getSelection());
e.dataTransfer.effectAllowed="copyMove";



if(e.dataTransfer.setDragImage&&!safari){
var img=elt("img",null,null,"position: fixed; left: 0; top: 0;");
img.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
if(presto){
img.width=img.height=1;
cm.display.wrapper.appendChild(img);

img._top=img.offsetTop;
}
e.dataTransfer.setDragImage(img,0,0);
if(presto){img.parentNode.removeChild(img);}
}
}

function onDragOver(cm,e){
var pos=posFromMouse(cm,e);
if(!pos){return;}
var frag=document.createDocumentFragment();
drawSelectionCursor(cm,pos,frag);
if(!cm.display.dragCursor){
cm.display.dragCursor=elt("div",null,"CodeMirror-cursors CodeMirror-dragcursors");
cm.display.lineSpace.insertBefore(cm.display.dragCursor,cm.display.cursorDiv);
}
removeChildrenAndAdd(cm.display.dragCursor,frag);
}

function clearDragCursor(cm){
if(cm.display.dragCursor){
cm.display.lineSpace.removeChild(cm.display.dragCursor);
cm.display.dragCursor=null;
}
}





function forEachCodeMirror(f){
if(!document.body.getElementsByClassName){return;}
var byClass=document.body.getElementsByClassName("CodeMirror");
for(var i=0;i<byClass.length;i++){
var cm=byClass[i].CodeMirror;
if(cm){f(cm);}
}
}

var globalsRegistered=false;
function ensureGlobalHandlers(){
if(globalsRegistered){return;}
registerGlobalHandlers();
globalsRegistered=true;
}
function registerGlobalHandlers(){

var resizeTimer;
on(window,"resize",function(){
if(resizeTimer==null){resizeTimer=setTimeout(function(){
resizeTimer=null;
forEachCodeMirror(onResize);
},100);}
});

on(window,"blur",function(){return forEachCodeMirror(onBlur);});
}

function onResize(cm){
var d=cm.display;
if(d.lastWrapHeight==d.wrapper.clientHeight&&d.lastWrapWidth==d.wrapper.clientWidth)
{return;}

d.cachedCharWidth=d.cachedTextHeight=d.cachedPaddingH=null;
d.scrollbarsClipped=false;
cm.setSize();
}

var keyNames={
3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",
19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",
36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",
46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",
106:"*",107:"=",109:"-",110:".",111:"/",127:"Delete",
173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",
221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",
63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"};



for(var i=0;i<10;i++){keyNames[i+48]=keyNames[i+96]=String(i);}

for(var i$1=65;i$1<=90;i$1++){keyNames[i$1]=String.fromCharCode(i$1);}

for(var i$2=1;i$2<=12;i$2++){keyNames[i$2+111]=keyNames[i$2+63235]="F"+i$2;}

var keyMap={};

keyMap.basic={
"Left":"goCharLeft","Right":"goCharRight","Up":"goLineUp","Down":"goLineDown",
"End":"goLineEnd","Home":"goLineStartSmart","PageUp":"goPageUp","PageDown":"goPageDown",
"Delete":"delCharAfter","Backspace":"delCharBefore","Shift-Backspace":"delCharBefore",
"Tab":"defaultTab","Shift-Tab":"indentAuto",
"Enter":"newlineAndIndent","Insert":"toggleOverwrite",
"Esc":"singleSelection"};




keyMap.pcDefault={
"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo",
"Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown",
"Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd",
"Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find",
"Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll",
"Ctrl-[":"indentLess","Ctrl-]":"indentMore",
"Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",
fallthrough:"basic"};


keyMap.emacsy={
"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown",
"Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd",
"Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore",
"Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars",
"Ctrl-O":"openLine"};

keyMap.macDefault={
"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo",
"Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft",
"Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore",
"Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find",
"Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll",
"Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight",
"Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",
fallthrough:["basic","emacsy"]};

keyMap["default"]=mac?keyMap.macDefault:keyMap.pcDefault;



function normalizeKeyName(name){
var parts=name.split(/-(?!$)/);
name=parts[parts.length-1];
var alt,ctrl,shift,cmd;
for(var i=0;i<parts.length-1;i++){
var mod=parts[i];
if(/^(cmd|meta|m)$/i.test(mod)){cmd=true;}else
if(/^a(lt)?$/i.test(mod)){alt=true;}else
if(/^(c|ctrl|control)$/i.test(mod)){ctrl=true;}else
if(/^s(hift)?$/i.test(mod)){shift=true;}else
{throw new Error("Unrecognized modifier name: "+mod);}
}
if(alt){name="Alt-"+name;}
if(ctrl){name="Ctrl-"+name;}
if(cmd){name="Cmd-"+name;}
if(shift){name="Shift-"+name;}
return name;
}






function normalizeKeyMap(keymap){
var copy={};
for(var keyname in keymap){if(keymap.hasOwnProperty(keyname)){
var value=keymap[keyname];
if(/^(name|fallthrough|(de|at)tach)$/.test(keyname)){continue;}
if(value=="..."){delete keymap[keyname];continue;}

var keys=map(keyname.split(" "),normalizeKeyName);
for(var i=0;i<keys.length;i++){
var val=void 0,name=void 0;
if(i==keys.length-1){
name=keys.join(" ");
val=value;
}else{
name=keys.slice(0,i+1).join(" ");
val="...";
}
var prev=copy[name];
if(!prev){copy[name]=val;}else
if(prev!=val){throw new Error("Inconsistent bindings for "+name);}
}
delete keymap[keyname];
}}
for(var prop in copy){keymap[prop]=copy[prop];}
return keymap;
}

function lookupKey(key,map,handle,context){
map=getKeyMap(map);
var found=map.call?map.call(key,context):map[key];
if(found===false){return"nothing";}
if(found==="..."){return"multi";}
if(found!=null&&handle(found)){return"handled";}

if(map.fallthrough){
if(Object.prototype.toString.call(map.fallthrough)!="[object Array]")
{return lookupKey(key,map.fallthrough,handle,context);}
for(var i=0;i<map.fallthrough.length;i++){
var result=lookupKey(key,map.fallthrough[i],handle,context);
if(result){return result;}
}
}
}



function isModifierKey(value){
var name=typeof value=="string"?value:keyNames[value.keyCode];
return name=="Ctrl"||name=="Alt"||name=="Shift"||name=="Mod";
}


function keyName(event,noShift){
if(presto&&event.keyCode==34&&event["char"]){return false;}
var base=keyNames[event.keyCode],name=base;
if(name==null||event.altGraphKey){return false;}
if(event.altKey&&base!="Alt"){name="Alt-"+name;}
if((flipCtrlCmd?event.metaKey:event.ctrlKey)&&base!="Ctrl"){name="Ctrl-"+name;}
if((flipCtrlCmd?event.ctrlKey:event.metaKey)&&base!="Cmd"){name="Cmd-"+name;}
if(!noShift&&event.shiftKey&&base!="Shift"){name="Shift-"+name;}
return name;
}

function getKeyMap(val){
return typeof val=="string"?keyMap[val]:val;
}



function deleteNearSelection(cm,compute){
var ranges=cm.doc.sel.ranges,kill=[];


for(var i=0;i<ranges.length;i++){
var toKill=compute(ranges[i]);
while(kill.length&&cmp(toKill.from,lst(kill).to)<=0){
var replaced=kill.pop();
if(cmp(replaced.from,toKill.from)<0){
toKill.from=replaced.from;
break;
}
}
kill.push(toKill);
}

runInOp(cm,function(){
for(var i=kill.length-1;i>=0;i--)
{_replaceRange(cm.doc,"",kill[i].from,kill[i].to,"+delete");}
ensureCursorVisible(cm);
});
}



var commands={
selectAll:selectAll,
singleSelection:function singleSelection(cm){return cm.setSelection(cm.getCursor("anchor"),cm.getCursor("head"),sel_dontScroll);},
killLine:function killLine(cm){return deleteNearSelection(cm,function(range){
if(range.empty()){
var len=getLine(cm.doc,range.head.line).text.length;
if(range.head.ch==len&&range.head.line<cm.lastLine())
{return{from:range.head,to:Pos(range.head.line+1,0)};}else

{return{from:range.head,to:Pos(range.head.line,len)};}
}else{
return{from:range.from(),to:range.to()};
}
});},
deleteLine:function deleteLine(cm){return deleteNearSelection(cm,function(range){return{
from:Pos(range.from().line,0),
to:_clipPos(cm.doc,Pos(range.to().line+1,0))};
});},
delLineLeft:function delLineLeft(cm){return deleteNearSelection(cm,function(range){return{
from:Pos(range.from().line,0),to:range.from()};
});},
delWrappedLineLeft:function delWrappedLineLeft(cm){return deleteNearSelection(cm,function(range){
var top=cm.charCoords(range.head,"div").top+5;
var leftPos=cm.coordsChar({left:0,top:top},"div");
return{from:leftPos,to:range.from()};
});},
delWrappedLineRight:function delWrappedLineRight(cm){return deleteNearSelection(cm,function(range){
var top=cm.charCoords(range.head,"div").top+5;
var rightPos=cm.coordsChar({left:cm.display.lineDiv.offsetWidth+100,top:top},"div");
return{from:range.from(),to:rightPos};
});},
undo:function undo(cm){return cm.undo();},
redo:function redo(cm){return cm.redo();},
undoSelection:function undoSelection(cm){return cm.undoSelection();},
redoSelection:function redoSelection(cm){return cm.redoSelection();},
goDocStart:function goDocStart(cm){return cm.extendSelection(Pos(cm.firstLine(),0));},
goDocEnd:function goDocEnd(cm){return cm.extendSelection(Pos(cm.lastLine()));},
goLineStart:function goLineStart(cm){return cm.extendSelectionsBy(function(range){return lineStart(cm,range.head.line);},
{origin:"+move",bias:1});
},
goLineStartSmart:function goLineStartSmart(cm){return cm.extendSelectionsBy(function(range){return lineStartSmart(cm,range.head);},
{origin:"+move",bias:1});
},
goLineEnd:function goLineEnd(cm){return cm.extendSelectionsBy(function(range){return lineEnd(cm,range.head.line);},
{origin:"+move",bias:-1});
},
goLineRight:function goLineRight(cm){return cm.extendSelectionsBy(function(range){
var top=cm.charCoords(range.head,"div").top+5;
return cm.coordsChar({left:cm.display.lineDiv.offsetWidth+100,top:top},"div");
},sel_move);},
goLineLeft:function goLineLeft(cm){return cm.extendSelectionsBy(function(range){
var top=cm.charCoords(range.head,"div").top+5;
return cm.coordsChar({left:0,top:top},"div");
},sel_move);},
goLineLeftSmart:function goLineLeftSmart(cm){return cm.extendSelectionsBy(function(range){
var top=cm.charCoords(range.head,"div").top+5;
var pos=cm.coordsChar({left:0,top:top},"div");
if(pos.ch<cm.getLine(pos.line).search(/\S/)){return lineStartSmart(cm,range.head);}
return pos;
},sel_move);},
goLineUp:function goLineUp(cm){return cm.moveV(-1,"line");},
goLineDown:function goLineDown(cm){return cm.moveV(1,"line");},
goPageUp:function goPageUp(cm){return cm.moveV(-1,"page");},
goPageDown:function goPageDown(cm){return cm.moveV(1,"page");},
goCharLeft:function goCharLeft(cm){return cm.moveH(-1,"char");},
goCharRight:function goCharRight(cm){return cm.moveH(1,"char");},
goColumnLeft:function goColumnLeft(cm){return cm.moveH(-1,"column");},
goColumnRight:function goColumnRight(cm){return cm.moveH(1,"column");},
goWordLeft:function goWordLeft(cm){return cm.moveH(-1,"word");},
goGroupRight:function goGroupRight(cm){return cm.moveH(1,"group");},
goGroupLeft:function goGroupLeft(cm){return cm.moveH(-1,"group");},
goWordRight:function goWordRight(cm){return cm.moveH(1,"word");},
delCharBefore:function delCharBefore(cm){return cm.deleteH(-1,"char");},
delCharAfter:function delCharAfter(cm){return cm.deleteH(1,"char");},
delWordBefore:function delWordBefore(cm){return cm.deleteH(-1,"word");},
delWordAfter:function delWordAfter(cm){return cm.deleteH(1,"word");},
delGroupBefore:function delGroupBefore(cm){return cm.deleteH(-1,"group");},
delGroupAfter:function delGroupAfter(cm){return cm.deleteH(1,"group");},
indentAuto:function indentAuto(cm){return cm.indentSelection("smart");},
indentMore:function indentMore(cm){return cm.indentSelection("add");},
indentLess:function indentLess(cm){return cm.indentSelection("subtract");},
insertTab:function insertTab(cm){return cm.replaceSelection("\t");},
insertSoftTab:function insertSoftTab(cm){
var spaces=[],ranges=cm.listSelections(),tabSize=cm.options.tabSize;
for(var i=0;i<ranges.length;i++){
var pos=ranges[i].from();
var col=countColumn(cm.getLine(pos.line),pos.ch,tabSize);
spaces.push(spaceStr(tabSize-col%tabSize));
}
cm.replaceSelections(spaces);
},
defaultTab:function defaultTab(cm){
if(cm.somethingSelected()){cm.indentSelection("add");}else
{cm.execCommand("insertTab");}
},







transposeChars:function transposeChars(cm){return runInOp(cm,function(){
var ranges=cm.listSelections(),newSel=[];
for(var i=0;i<ranges.length;i++){
if(!ranges[i].empty()){continue;}
var cur=ranges[i].head,line=getLine(cm.doc,cur.line).text;
if(line){
if(cur.ch==line.length){cur=new Pos(cur.line,cur.ch-1);}
if(cur.ch>0){
cur=new Pos(cur.line,cur.ch+1);
cm.replaceRange(line.charAt(cur.ch-1)+line.charAt(cur.ch-2),
Pos(cur.line,cur.ch-2),cur,"+transpose");
}else if(cur.line>cm.doc.first){
var prev=getLine(cm.doc,cur.line-1).text;
if(prev){
cur=new Pos(cur.line,1);
cm.replaceRange(line.charAt(0)+cm.doc.lineSeparator()+
prev.charAt(prev.length-1),
Pos(cur.line-1,prev.length-1),cur,"+transpose");
}
}
}
newSel.push(new Range(cur,cur));
}
cm.setSelections(newSel);
});},
newlineAndIndent:function newlineAndIndent(cm){return runInOp(cm,function(){
var sels=cm.listSelections();
for(var i=sels.length-1;i>=0;i--)
{cm.replaceRange(cm.doc.lineSeparator(),sels[i].anchor,sels[i].head,"+input");}
sels=cm.listSelections();
for(var i$1=0;i$1<sels.length;i$1++)
{cm.indentLine(sels[i$1].from().line,null,true);}
ensureCursorVisible(cm);
});},
openLine:function openLine(cm){return cm.replaceSelection("\n","start");},
toggleOverwrite:function toggleOverwrite(cm){return cm.toggleOverwrite();}};



function lineStart(cm,lineN){
var line=getLine(cm.doc,lineN);
var visual=visualLine(line);
if(visual!=line){lineN=lineNo(visual);}
var order=getOrder(visual);
var ch=!order?0:order[0].level%2?lineRight(visual):lineLeft(visual);
return Pos(lineN,ch);
}
function lineEnd(cm,lineN){
var merged,line=getLine(cm.doc,lineN);
while(merged=collapsedSpanAtEnd(line)){
line=merged.find(1,true).line;
lineN=null;
}
var order=getOrder(line);
var ch=!order?line.text.length:order[0].level%2?lineLeft(line):lineRight(line);
return Pos(lineN==null?lineNo(line):lineN,ch);
}
function lineStartSmart(cm,pos){
var start=lineStart(cm,pos.line);
var line=getLine(cm.doc,start.line);
var order=getOrder(line);
if(!order||order[0].level==0){
var firstNonWS=Math.max(0,line.text.search(/\S/));
var inWS=pos.line==start.line&&pos.ch<=firstNonWS&&pos.ch;
return Pos(start.line,inWS?0:firstNonWS);
}
return start;
}


function doHandleBinding(cm,bound,dropShift){
if(typeof bound=="string"){
bound=commands[bound];
if(!bound){return false;}
}


cm.display.input.ensurePolled();
var prevShift=cm.display.shift,done=false;
try{
if(cm.isReadOnly()){cm.state.suppressEdits=true;}
if(dropShift){cm.display.shift=false;}
done=bound(cm)!=Pass;
}finally{
cm.display.shift=prevShift;
cm.state.suppressEdits=false;
}
return done;
}

function lookupKeyForEditor(cm,name,handle){
for(var i=0;i<cm.state.keyMaps.length;i++){
var result=lookupKey(name,cm.state.keyMaps[i],handle,cm);
if(result){return result;}
}
return cm.options.extraKeys&&lookupKey(name,cm.options.extraKeys,handle,cm)||
lookupKey(name,cm.options.keyMap,handle,cm);
}

var stopSeq=new Delayed();
function dispatchKey(cm,name,e,handle){
var seq=cm.state.keySeq;
if(seq){
if(isModifierKey(name)){return"handled";}
stopSeq.set(50,function(){
if(cm.state.keySeq==seq){
cm.state.keySeq=null;
cm.display.input.reset();
}
});
name=seq+" "+name;
}
var result=lookupKeyForEditor(cm,name,handle);

if(result=="multi")
{cm.state.keySeq=name;}
if(result=="handled")
{signalLater(cm,"keyHandled",cm,name,e);}

if(result=="handled"||result=="multi"){
e_preventDefault(e);
restartBlink(cm);
}

if(seq&&!result&&/\'$/.test(name)){
e_preventDefault(e);
return true;
}
return!!result;
}


function handleKeyBinding(cm,e){
var name=keyName(e,true);
if(!name){return false;}

if(e.shiftKey&&!cm.state.keySeq){



return dispatchKey(cm,"Shift-"+name,e,function(b){return doHandleBinding(cm,b,true);})||
dispatchKey(cm,name,e,function(b){
if(typeof b=="string"?/^go[A-Z]/.test(b):b.motion)
{return doHandleBinding(cm,b);}
});
}else{
return dispatchKey(cm,name,e,function(b){return doHandleBinding(cm,b);});
}
}


function handleCharBinding(cm,e,ch){
return dispatchKey(cm,"'"+ch+"'",e,function(b){return doHandleBinding(cm,b,true);});
}

var lastStoppedKey=null;
function onKeyDown(e){
var cm=this;
cm.curOp.focus=activeElt();
if(signalDOMEvent(cm,e)){return;}

if(ie&&ie_version<11&&e.keyCode==27){e.returnValue=false;}
var code=e.keyCode;
cm.display.shift=code==16||e.shiftKey;
var handled=handleKeyBinding(cm,e);
if(presto){
lastStoppedKey=handled?code:null;

if(!handled&&code==88&&!hasCopyEvent&&(mac?e.metaKey:e.ctrlKey))
{cm.replaceSelection("",null,"cut");}
}


if(code==18&&!/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
{showCrossHair(cm);}
}

function showCrossHair(cm){
var lineDiv=cm.display.lineDiv;
addClass(lineDiv,"CodeMirror-crosshair");

function up(e){
if(e.keyCode==18||!e.altKey){
rmClass(lineDiv,"CodeMirror-crosshair");
off(document,"keyup",up);
off(document,"mouseover",up);
}
}
on(document,"keyup",up);
on(document,"mouseover",up);
}

function onKeyUp(e){
if(e.keyCode==16){this.doc.sel.shift=false;}
signalDOMEvent(this,e);
}

function onKeyPress(e){
var cm=this;
if(eventInWidget(cm.display,e)||signalDOMEvent(cm,e)||e.ctrlKey&&!e.altKey||mac&&e.metaKey){return;}
var keyCode=e.keyCode,charCode=e.charCode;
if(presto&&keyCode==lastStoppedKey){lastStoppedKey=null;e_preventDefault(e);return;}
if(presto&&(!e.which||e.which<10)&&handleKeyBinding(cm,e)){return;}
var ch=String.fromCharCode(charCode==null?keyCode:charCode);

if(ch=="\x08"){return;}
if(handleCharBinding(cm,e,ch)){return;}
cm.display.input.onKeyPress(e);
}






function onMouseDown(e){
var cm=this,display=cm.display;
if(signalDOMEvent(cm,e)||display.activeTouch&&display.input.supportsTouch()){return;}
display.input.ensurePolled();
display.shift=e.shiftKey;

if(eventInWidget(display,e)){
if(!webkit){


display.scroller.draggable=false;
setTimeout(function(){return display.scroller.draggable=true;},100);
}
return;
}
if(clickInGutter(cm,e)){return;}
var start=posFromMouse(cm,e);
window.focus();

switch(e_button(e)){
case 1:

if(cm.state.selectingText)
{cm.state.selectingText(e);}else
if(start)
{leftButtonDown(cm,e,start);}else
if(e_target(e)==display.scroller)
{e_preventDefault(e);}
break;
case 2:
if(webkit){cm.state.lastMiddleDown=+new Date();}
if(start){extendSelection(cm.doc,start);}
setTimeout(function(){return display.input.focus();},20);
e_preventDefault(e);
break;
case 3:
if(captureRightClick){onContextMenu(cm,e);}else
{delayBlurEvent(cm);}
break;}

}

var lastClick;
var lastDoubleClick;
function leftButtonDown(cm,e,start){
if(ie){setTimeout(bind(ensureFocus,cm),0);}else
{cm.curOp.focus=activeElt();}

var now=+new Date(),type;
if(lastDoubleClick&&lastDoubleClick.time>now-400&&cmp(lastDoubleClick.pos,start)==0){
type="triple";
}else if(lastClick&&lastClick.time>now-400&&cmp(lastClick.pos,start)==0){
type="double";
lastDoubleClick={time:now,pos:start};
}else{
type="single";
lastClick={time:now,pos:start};
}

var sel=cm.doc.sel,modifier=mac?e.metaKey:e.ctrlKey,contained;
if(cm.options.dragDrop&&dragAndDrop&&!cm.isReadOnly()&&
type=="single"&&(contained=sel.contains(start))>-1&&(
cmp((contained=sel.ranges[contained]).from(),start)<0||start.xRel>0)&&(
cmp(contained.to(),start)>0||start.xRel<0))
{leftButtonStartDrag(cm,e,start,modifier);}else

{leftButtonSelect(cm,e,start,type,modifier);}
}



function leftButtonStartDrag(cm,e,start,modifier){
var display=cm.display,startTime=+new Date();
var dragEnd=operation(cm,function(e2){
if(webkit){display.scroller.draggable=false;}
cm.state.draggingText=false;
off(document,"mouseup",dragEnd);
off(display.scroller,"drop",dragEnd);
if(Math.abs(e.clientX-e2.clientX)+Math.abs(e.clientY-e2.clientY)<10){
e_preventDefault(e2);
if(!modifier&&+new Date()-200<startTime)
{extendSelection(cm.doc,start);}

if(webkit||ie&&ie_version==9)
{setTimeout(function(){document.body.focus();display.input.focus();},20);}else

{display.input.focus();}
}
});

if(webkit){display.scroller.draggable=true;}
cm.state.draggingText=dragEnd;
dragEnd.copy=mac?e.altKey:e.ctrlKey;

if(display.scroller.dragDrop){display.scroller.dragDrop();}
on(document,"mouseup",dragEnd);
on(display.scroller,"drop",dragEnd);
}


function leftButtonSelect(cm,e,start,type,addNew){
var display=cm.display,doc=cm.doc;
e_preventDefault(e);

var ourRange,ourIndex,startSel=doc.sel,ranges=startSel.ranges;
if(addNew&&!e.shiftKey){
ourIndex=doc.sel.contains(start);
if(ourIndex>-1)
{ourRange=ranges[ourIndex];}else

{ourRange=new Range(start,start);}
}else{
ourRange=doc.sel.primary();
ourIndex=doc.sel.primIndex;
}

if(chromeOS?e.shiftKey&&e.metaKey:e.altKey){
type="rect";
if(!addNew){ourRange=new Range(start,start);}
start=posFromMouse(cm,e,true,true);
ourIndex=-1;
}else if(type=="double"){
var word=cm.findWordAt(start);
if(cm.display.shift||doc.extend)
{ourRange=extendRange(doc,ourRange,word.anchor,word.head);}else

{ourRange=word;}
}else if(type=="triple"){
var line=new Range(Pos(start.line,0),_clipPos(doc,Pos(start.line+1,0)));
if(cm.display.shift||doc.extend)
{ourRange=extendRange(doc,ourRange,line.anchor,line.head);}else

{ourRange=line;}
}else{
ourRange=extendRange(doc,ourRange,start);
}

if(!addNew){
ourIndex=0;
setSelection(doc,new Selection([ourRange],0),sel_mouse);
startSel=doc.sel;
}else if(ourIndex==-1){
ourIndex=ranges.length;
setSelection(doc,normalizeSelection(ranges.concat([ourRange]),ourIndex),
{scroll:false,origin:"*mouse"});
}else if(ranges.length>1&&ranges[ourIndex].empty()&&type=="single"&&!e.shiftKey){
setSelection(doc,normalizeSelection(ranges.slice(0,ourIndex).concat(ranges.slice(ourIndex+1)),0),
{scroll:false,origin:"*mouse"});
startSel=doc.sel;
}else{
replaceOneSelection(doc,ourIndex,ourRange,sel_mouse);
}

var lastPos=start;
function extendTo(pos){
if(cmp(lastPos,pos)==0){return;}
lastPos=pos;

if(type=="rect"){
var ranges=[],tabSize=cm.options.tabSize;
var startCol=countColumn(getLine(doc,start.line).text,start.ch,tabSize);
var posCol=countColumn(getLine(doc,pos.line).text,pos.ch,tabSize);
var left=Math.min(startCol,posCol),right=Math.max(startCol,posCol);
for(var line=Math.min(start.line,pos.line),end=Math.min(cm.lastLine(),Math.max(start.line,pos.line));
line<=end;line++){
var text=getLine(doc,line).text,leftPos=findColumn(text,left,tabSize);
if(left==right)
{ranges.push(new Range(Pos(line,leftPos),Pos(line,leftPos)));}else
if(text.length>leftPos)
{ranges.push(new Range(Pos(line,leftPos),Pos(line,findColumn(text,right,tabSize))));}
}
if(!ranges.length){ranges.push(new Range(start,start));}
setSelection(doc,normalizeSelection(startSel.ranges.slice(0,ourIndex).concat(ranges),ourIndex),
{origin:"*mouse",scroll:false});
cm.scrollIntoView(pos);
}else{
var oldRange=ourRange;
var anchor=oldRange.anchor,head=pos;
if(type!="single"){
var range;
if(type=="double")
{range=cm.findWordAt(pos);}else

{range=new Range(Pos(pos.line,0),_clipPos(doc,Pos(pos.line+1,0)));}
if(cmp(range.anchor,anchor)>0){
head=range.head;
anchor=minPos(oldRange.from(),range.anchor);
}else{
head=range.anchor;
anchor=maxPos(oldRange.to(),range.head);
}
}
var ranges$1=startSel.ranges.slice(0);
ranges$1[ourIndex]=new Range(_clipPos(doc,anchor),head);
setSelection(doc,normalizeSelection(ranges$1,ourIndex),sel_mouse);
}
}

var editorSize=display.wrapper.getBoundingClientRect();




var counter=0;

function extend(e){
var curCount=++counter;
var cur=posFromMouse(cm,e,true,type=="rect");
if(!cur){return;}
if(cmp(cur,lastPos)!=0){
cm.curOp.focus=activeElt();
extendTo(cur);
var visible=visibleLines(display,doc);
if(cur.line>=visible.to||cur.line<visible.from)
{setTimeout(operation(cm,function(){if(counter==curCount){extend(e);}}),150);}
}else{
var outside=e.clientY<editorSize.top?-20:e.clientY>editorSize.bottom?20:0;
if(outside){setTimeout(operation(cm,function(){
if(counter!=curCount){return;}
display.scroller.scrollTop+=outside;
extend(e);
}),50);}
}
}

function done(e){
cm.state.selectingText=false;
counter=Infinity;
e_preventDefault(e);
display.input.focus();
off(document,"mousemove",move);
off(document,"mouseup",up);
doc.history.lastSelOrigin=null;
}

var move=operation(cm,function(e){
if(!e_button(e)){done(e);}else
{extend(e);}
});
var up=operation(cm,done);
cm.state.selectingText=up;
on(document,"mousemove",move);
on(document,"mouseup",up);
}




function gutterEvent(cm,e,type,prevent){
var mX,mY;
try{mX=e.clientX;mY=e.clientY;}
catch(e){return false;}
if(mX>=Math.floor(cm.display.gutters.getBoundingClientRect().right)){return false;}
if(prevent){e_preventDefault(e);}

var display=cm.display;
var lineBox=display.lineDiv.getBoundingClientRect();

if(mY>lineBox.bottom||!hasHandler(cm,type)){return e_defaultPrevented(e);}
mY-=lineBox.top-display.viewOffset;

for(var i=0;i<cm.options.gutters.length;++i){
var g=display.gutters.childNodes[i];
if(g&&g.getBoundingClientRect().right>=mX){
var line=_lineAtHeight(cm.doc,mY);
var gutter=cm.options.gutters[i];
signal(cm,type,cm,line,gutter,e);
return e_defaultPrevented(e);
}
}
}

function clickInGutter(cm,e){
return gutterEvent(cm,e,"gutterClick",true);
}






function onContextMenu(cm,e){
if(eventInWidget(cm.display,e)||contextMenuInGutter(cm,e)){return;}
if(signalDOMEvent(cm,e,"contextmenu")){return;}
cm.display.input.onContextMenu(e);
}

function contextMenuInGutter(cm,e){
if(!hasHandler(cm,"gutterContextMenu")){return false;}
return gutterEvent(cm,e,"gutterContextMenu",false);
}

function themeChanged(cm){
cm.display.wrapper.className=cm.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+
cm.options.theme.replace(/(^|\s)\s*/g," cm-s-");
clearCaches(cm);
}

var Init={toString:function toString(){return"CodeMirror.Init";}};

var defaults={};
var optionHandlers={};

function defineOptions(CodeMirror){
var optionHandlers=CodeMirror.optionHandlers;

function option(name,deflt,handle,notOnInit){
CodeMirror.defaults[name]=deflt;
if(handle){optionHandlers[name]=
notOnInit?function(cm,val,old){if(old!=Init){handle(cm,val,old);}}:handle;}
}

CodeMirror.defineOption=option;


CodeMirror.Init=Init;



option("value","",function(cm,val){return cm.setValue(val);},true);
option("mode",null,function(cm,val){
cm.doc.modeOption=val;
loadMode(cm);
},true);

option("indentUnit",2,loadMode,true);
option("indentWithTabs",false);
option("smartIndent",true);
option("tabSize",4,function(cm){
resetModeState(cm);
clearCaches(cm);
regChange(cm);
},true);
option("lineSeparator",null,function(cm,val){
cm.doc.lineSep=val;
if(!val){return;}
var newBreaks=[],lineNo=cm.doc.first;
cm.doc.iter(function(line){
for(var pos=0;;){
var found=line.text.indexOf(val,pos);
if(found==-1){break;}
pos=found+val.length;
newBreaks.push(Pos(lineNo,found));
}
lineNo++;
});
for(var i=newBreaks.length-1;i>=0;i--)
{_replaceRange(cm.doc,val,newBreaks[i],Pos(newBreaks[i].line,newBreaks[i].ch+val.length));}
});
option("specialChars",/[\u0000-\u001f\u007f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,function(cm,val,old){
cm.state.specialChars=new RegExp(val.source+(val.test("\t")?"":"|\t"),"g");
if(old!=Init){cm.refresh();}
});
option("specialCharPlaceholder",defaultSpecialCharPlaceholder,function(cm){return cm.refresh();},true);
option("electricChars",true);
option("inputStyle",mobile?"contenteditable":"textarea",function(){
throw new Error("inputStyle can not (yet) be changed in a running editor");
},true);
option("spellcheck",false,function(cm,val){return cm.getInputField().spellcheck=val;},true);
option("rtlMoveVisually",!windows);
option("wholeLineUpdateBefore",true);

option("theme","default",function(cm){
themeChanged(cm);
guttersChanged(cm);
},true);
option("keyMap","default",function(cm,val,old){
var next=getKeyMap(val);
var prev=old!=Init&&getKeyMap(old);
if(prev&&prev.detach){prev.detach(cm,next);}
if(next.attach){next.attach(cm,prev||null);}
});
option("extraKeys",null);

option("lineWrapping",false,wrappingChanged,true);
option("gutters",[],function(cm){
setGuttersForLineNumbers(cm.options);
guttersChanged(cm);
},true);
option("fixedGutter",true,function(cm,val){
cm.display.gutters.style.left=val?compensateForHScroll(cm.display)+"px":"0";
cm.refresh();
},true);
option("coverGutterNextToScrollbar",false,function(cm){return updateScrollbars(cm);},true);
option("scrollbarStyle","native",function(cm){
initScrollbars(cm);
updateScrollbars(cm);
cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
},true);
option("lineNumbers",false,function(cm){
setGuttersForLineNumbers(cm.options);
guttersChanged(cm);
},true);
option("firstLineNumber",1,guttersChanged,true);
option("lineNumberFormatter",function(integer){return integer;},guttersChanged,true);
option("showCursorWhenSelecting",false,updateSelection,true);

option("resetSelectionOnContextMenu",true);
option("lineWiseCopyCut",true);

option("readOnly",false,function(cm,val){
if(val=="nocursor"){
onBlur(cm);
cm.display.input.blur();
cm.display.disabled=true;
}else{
cm.display.disabled=false;
}
cm.display.input.readOnlyChanged(val);
});
option("disableInput",false,function(cm,val){if(!val){cm.display.input.reset();}},true);
option("dragDrop",true,dragDropChanged);
option("allowDropFileTypes",null);

option("cursorBlinkRate",530);
option("cursorScrollMargin",0);
option("cursorHeight",1,updateSelection,true);
option("singleCursorHeightPerLine",true,updateSelection,true);
option("workTime",100);
option("workDelay",100);
option("flattenSpans",true,resetModeState,true);
option("addModeClass",false,resetModeState,true);
option("pollInterval",100);
option("undoDepth",200,function(cm,val){return cm.doc.history.undoDepth=val;});
option("historyEventDelay",1250);
option("viewportMargin",10,function(cm){return cm.refresh();},true);
option("maxHighlightLength",10000,resetModeState,true);
option("moveInputWithCursor",true,function(cm,val){
if(!val){cm.display.input.resetPosition();}
});

option("tabindex",null,function(cm,val){return cm.display.input.getField().tabIndex=val||"";});
option("autofocus",null);
}

function guttersChanged(cm){
updateGutters(cm);
regChange(cm);
alignHorizontally(cm);
}

function dragDropChanged(cm,value,old){
var wasOn=old&&old!=Init;
if(!value!=!wasOn){
var funcs=cm.display.dragFunctions;
var toggle=value?on:off;
toggle(cm.display.scroller,"dragstart",funcs.start);
toggle(cm.display.scroller,"dragenter",funcs.enter);
toggle(cm.display.scroller,"dragover",funcs.over);
toggle(cm.display.scroller,"dragleave",funcs.leave);
toggle(cm.display.scroller,"drop",funcs.drop);
}
}

function wrappingChanged(cm){
if(cm.options.lineWrapping){
addClass(cm.display.wrapper,"CodeMirror-wrap");
cm.display.sizer.style.minWidth="";
cm.display.sizerWidth=null;
}else{
rmClass(cm.display.wrapper,"CodeMirror-wrap");
findMaxLine(cm);
}
estimateLineHeights(cm);
regChange(cm);
clearCaches(cm);
setTimeout(function(){return updateScrollbars(cm);},100);
}




function CodeMirror(place,options){
var this$1=this;

if(!(this instanceof CodeMirror)){return new CodeMirror(place,options);}

this.options=options=options?copyObj(options):{};

copyObj(defaults,options,false);
setGuttersForLineNumbers(options);

var doc=options.value;
if(typeof doc=="string"){doc=new Doc(doc,options.mode,null,options.lineSeparator);}
this.doc=doc;

var input=new CodeMirror.inputStyles[options.inputStyle](this);
var display=this.display=new Display(place,doc,input);
display.wrapper.CodeMirror=this;
updateGutters(this);
themeChanged(this);
if(options.lineWrapping)
{this.display.wrapper.className+=" CodeMirror-wrap";}
initScrollbars(this);

this.state={
keyMaps:[],
overlays:[],
modeGen:0,
overwrite:false,
delayingBlurEvent:false,
focused:false,
suppressEdits:false,
pasteIncoming:false,cutIncoming:false,
selectingText:false,
draggingText:false,
highlight:new Delayed(),
keySeq:null,
specialChars:null};


if(options.autofocus&&!mobile){display.input.focus();}



if(ie&&ie_version<11){setTimeout(function(){return this$1.display.input.reset(true);},20);}

registerEventHandlers(this);
ensureGlobalHandlers();

startOperation(this);
this.curOp.forceUpdate=true;
attachDoc(this,doc);

if(options.autofocus&&!mobile||this.hasFocus())
{setTimeout(bind(onFocus,this),20);}else

{onBlur(this);}

for(var opt in optionHandlers){if(optionHandlers.hasOwnProperty(opt))
{optionHandlers[opt](this$1,options[opt],Init);}}
maybeUpdateLineNumberWidth(this);
if(options.finishInit){options.finishInit(this);}
for(var i=0;i<initHooks.length;++i){initHooks[i](this$1);}
endOperation(this);


if(webkit&&options.lineWrapping&&
getComputedStyle(display.lineDiv).textRendering=="optimizelegibility")
{display.lineDiv.style.textRendering="auto";}
}


CodeMirror.defaults=defaults;

CodeMirror.optionHandlers=optionHandlers;


function registerEventHandlers(cm){
var d=cm.display;
on(d.scroller,"mousedown",operation(cm,onMouseDown));

if(ie&&ie_version<11)
{on(d.scroller,"dblclick",operation(cm,function(e){
if(signalDOMEvent(cm,e)){return;}
var pos=posFromMouse(cm,e);
if(!pos||clickInGutter(cm,e)||eventInWidget(cm.display,e)){return;}
e_preventDefault(e);
var word=cm.findWordAt(pos);
extendSelection(cm.doc,word.anchor,word.head);
}));}else

{on(d.scroller,"dblclick",function(e){return signalDOMEvent(cm,e)||e_preventDefault(e);});}



if(!captureRightClick){on(d.scroller,"contextmenu",function(e){return onContextMenu(cm,e);});}


var touchFinished,prevTouch={end:0};
function finishTouch(){
if(d.activeTouch){
touchFinished=setTimeout(function(){return d.activeTouch=null;},1000);
prevTouch=d.activeTouch;
prevTouch.end=+new Date();
}
}
function isMouseLikeTouchEvent(e){
if(e.touches.length!=1){return false;}
var touch=e.touches[0];
return touch.radiusX<=1&&touch.radiusY<=1;
}
function farAway(touch,other){
if(other.left==null){return true;}
var dx=other.left-touch.left,dy=other.top-touch.top;
return dx*dx+dy*dy>20*20;
}
on(d.scroller,"touchstart",function(e){
if(!signalDOMEvent(cm,e)&&!isMouseLikeTouchEvent(e)){
d.input.ensurePolled();
clearTimeout(touchFinished);
var now=+new Date();
d.activeTouch={start:now,moved:false,
prev:now-prevTouch.end<=300?prevTouch:null};
if(e.touches.length==1){
d.activeTouch.left=e.touches[0].pageX;
d.activeTouch.top=e.touches[0].pageY;
}
}
});
on(d.scroller,"touchmove",function(){
if(d.activeTouch){d.activeTouch.moved=true;}
});
on(d.scroller,"touchend",function(e){
var touch=d.activeTouch;
if(touch&&!eventInWidget(d,e)&&touch.left!=null&&
!touch.moved&&new Date()-touch.start<300){
var pos=cm.coordsChar(d.activeTouch,"page"),range;
if(!touch.prev||farAway(touch,touch.prev))
{range=new Range(pos,pos);}else
if(!touch.prev.prev||farAway(touch,touch.prev.prev))
{range=cm.findWordAt(pos);}else

{range=new Range(Pos(pos.line,0),_clipPos(cm.doc,Pos(pos.line+1,0)));}
cm.setSelection(range.anchor,range.head);
cm.focus();
e_preventDefault(e);
}
finishTouch();
});
on(d.scroller,"touchcancel",finishTouch);



on(d.scroller,"scroll",function(){
if(d.scroller.clientHeight){
setScrollTop(cm,d.scroller.scrollTop);
setScrollLeft(cm,d.scroller.scrollLeft,true);
signal(cm,"scroll",cm);
}
});


on(d.scroller,"mousewheel",function(e){return onScrollWheel(cm,e);});
on(d.scroller,"DOMMouseScroll",function(e){return onScrollWheel(cm,e);});


on(d.wrapper,"scroll",function(){return d.wrapper.scrollTop=d.wrapper.scrollLeft=0;});

d.dragFunctions={
enter:function enter(e){if(!signalDOMEvent(cm,e)){e_stop(e);}},
over:function over(e){if(!signalDOMEvent(cm,e)){onDragOver(cm,e);e_stop(e);}},
start:function start(e){return onDragStart(cm,e);},
drop:operation(cm,onDrop),
leave:function leave(e){if(!signalDOMEvent(cm,e)){clearDragCursor(cm);}}};


var inp=d.input.getField();
on(inp,"keyup",function(e){return onKeyUp.call(cm,e);});
on(inp,"keydown",operation(cm,onKeyDown));
on(inp,"keypress",operation(cm,onKeyPress));
on(inp,"focus",function(e){return onFocus(cm,e);});
on(inp,"blur",function(e){return onBlur(cm,e);});
}

var initHooks=[];
CodeMirror.defineInitHook=function(f){return initHooks.push(f);};






function indentLine(cm,n,how,aggressive){
var doc=cm.doc,state;
if(how==null){how="add";}
if(how=="smart"){


if(!doc.mode.indent){how="prev";}else
{state=getStateBefore(cm,n);}
}

var tabSize=cm.options.tabSize;
var line=getLine(doc,n),curSpace=countColumn(line.text,null,tabSize);
if(line.stateAfter){line.stateAfter=null;}
var curSpaceString=line.text.match(/^\s*/)[0],indentation;
if(!aggressive&&!/\S/.test(line.text)){
indentation=0;
how="not";
}else if(how=="smart"){
indentation=doc.mode.indent(state,line.text.slice(curSpaceString.length),line.text);
if(indentation==Pass||indentation>150){
if(!aggressive){return;}
how="prev";
}
}
if(how=="prev"){
if(n>doc.first){indentation=countColumn(getLine(doc,n-1).text,null,tabSize);}else
{indentation=0;}
}else if(how=="add"){
indentation=curSpace+cm.options.indentUnit;
}else if(how=="subtract"){
indentation=curSpace-cm.options.indentUnit;
}else if(typeof how=="number"){
indentation=curSpace+how;
}
indentation=Math.max(0,indentation);

var indentString="",pos=0;
if(cm.options.indentWithTabs)
{for(var i=Math.floor(indentation/tabSize);i;--i){pos+=tabSize;indentString+="\t";}}
if(pos<indentation){indentString+=spaceStr(indentation-pos);}

if(indentString!=curSpaceString){
_replaceRange(doc,indentString,Pos(n,0),Pos(n,curSpaceString.length),"+input");
line.stateAfter=null;
return true;
}else{


for(var i$1=0;i$1<doc.sel.ranges.length;i$1++){
var range=doc.sel.ranges[i$1];
if(range.head.line==n&&range.head.ch<curSpaceString.length){
var pos$1=Pos(n,curSpaceString.length);
replaceOneSelection(doc,i$1,new Range(pos$1,pos$1));
break;
}
}
}
}




var lastCopied=null;

function setLastCopied(newLastCopied){
lastCopied=newLastCopied;
}

function applyTextInput(cm,inserted,deleted,sel,origin){
var doc=cm.doc;
cm.display.shift=false;
if(!sel){sel=doc.sel;}

var paste=cm.state.pasteIncoming||origin=="paste";
var textLines=splitLinesAuto(inserted),multiPaste=null;

if(paste&&sel.ranges.length>1){
if(lastCopied&&lastCopied.text.join("\n")==inserted){
if(sel.ranges.length%lastCopied.text.length==0){
multiPaste=[];
for(var i=0;i<lastCopied.text.length;i++)
{multiPaste.push(doc.splitLines(lastCopied.text[i]));}
}
}else if(textLines.length==sel.ranges.length){
multiPaste=map(textLines,function(l){return[l];});
}
}

var updateInput;

for(var i$1=sel.ranges.length-1;i$1>=0;i$1--){
var range=sel.ranges[i$1];
var from=range.from(),to=range.to();
if(range.empty()){
if(deleted&&deleted>0)
{from=Pos(from.line,from.ch-deleted);}else
if(cm.state.overwrite&&!paste)
{to=Pos(to.line,Math.min(getLine(doc,to.line).text.length,to.ch+lst(textLines).length));}else
if(lastCopied&&lastCopied.lineWise&&lastCopied.text.join("\n")==inserted)
{from=to=Pos(from.line,0);}
}
updateInput=cm.curOp.updateInput;
var changeEvent={from:from,to:to,text:multiPaste?multiPaste[i$1%multiPaste.length]:textLines,
origin:origin||(paste?"paste":cm.state.cutIncoming?"cut":"+input")};
makeChange(cm.doc,changeEvent);
signalLater(cm,"inputRead",cm,changeEvent);
}
if(inserted&&!paste)
{triggerElectric(cm,inserted);}

ensureCursorVisible(cm);
cm.curOp.updateInput=updateInput;
cm.curOp.typing=true;
cm.state.pasteIncoming=cm.state.cutIncoming=false;
}

function handlePaste(e,cm){
var pasted=e.clipboardData&&e.clipboardData.getData("Text");
if(pasted){
e.preventDefault();
if(!cm.isReadOnly()&&!cm.options.disableInput)
{runInOp(cm,function(){return applyTextInput(cm,pasted,0,null,"paste");});}
return true;
}
}

function triggerElectric(cm,inserted){

if(!cm.options.electricChars||!cm.options.smartIndent){return;}
var sel=cm.doc.sel;

for(var i=sel.ranges.length-1;i>=0;i--){
var range=sel.ranges[i];
if(range.head.ch>100||i&&sel.ranges[i-1].head.line==range.head.line){continue;}
var mode=cm.getModeAt(range.head);
var indented=false;
if(mode.electricChars){
for(var j=0;j<mode.electricChars.length;j++)
{if(inserted.indexOf(mode.electricChars.charAt(j))>-1){
indented=indentLine(cm,range.head.line,"smart");
break;
}}
}else if(mode.electricInput){
if(mode.electricInput.test(getLine(cm.doc,range.head.line).text.slice(0,range.head.ch)))
{indented=indentLine(cm,range.head.line,"smart");}
}
if(indented){signalLater(cm,"electricInput",cm,range.head.line);}
}
}

function copyableRanges(cm){
var text=[],ranges=[];
for(var i=0;i<cm.doc.sel.ranges.length;i++){
var line=cm.doc.sel.ranges[i].head.line;
var lineRange={anchor:Pos(line,0),head:Pos(line+1,0)};
ranges.push(lineRange);
text.push(cm.getRange(lineRange.anchor,lineRange.head));
}
return{text:text,ranges:ranges};
}

function disableBrowserMagic(field,spellcheck){
field.setAttribute("autocorrect","off");
field.setAttribute("autocapitalize","off");
field.setAttribute("spellcheck",!!spellcheck);
}

function hiddenTextarea(){
var te=elt("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none");
var div=elt("div",[te],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");




if(webkit){te.style.width="1000px";}else
{te.setAttribute("wrap","off");}

if(ios){te.style.border="1px solid black";}
disableBrowserMagic(te);
return div;
}









function addEditorMethods(CodeMirror){
var optionHandlers=CodeMirror.optionHandlers;

var helpers=CodeMirror.helpers={};

CodeMirror.prototype={
constructor:CodeMirror,
focus:function focus(){window.focus();this.display.input.focus();},

setOption:function setOption(option,value){
var options=this.options,old=options[option];
if(options[option]==value&&option!="mode"){return;}
options[option]=value;
if(optionHandlers.hasOwnProperty(option))
{operation(this,optionHandlers[option])(this,value,old);}
signal(this,"optionChange",this,option);
},

getOption:function getOption(option){return this.options[option];},
getDoc:function getDoc(){return this.doc;},

addKeyMap:function addKeyMap(map,bottom){
this.state.keyMaps[bottom?"push":"unshift"](getKeyMap(map));
},
removeKeyMap:function removeKeyMap(map){
var maps=this.state.keyMaps;
for(var i=0;i<maps.length;++i)
{if(maps[i]==map||maps[i].name==map){
maps.splice(i,1);
return true;
}}
},

addOverlay:methodOp(function(spec,options){
var mode=spec.token?spec:CodeMirror.getMode(this.options,spec);
if(mode.startState){throw new Error("Overlays may not be stateful.");}
insertSorted(this.state.overlays,
{mode:mode,modeSpec:spec,opaque:options&&options.opaque,
priority:options&&options.priority||0},
function(overlay){return overlay.priority;});
this.state.modeGen++;
regChange(this);
}),
removeOverlay:methodOp(function(spec){
var this$1=this;

var overlays=this.state.overlays;
for(var i=0;i<overlays.length;++i){
var cur=overlays[i].modeSpec;
if(cur==spec||typeof spec=="string"&&cur.name==spec){
overlays.splice(i,1);
this$1.state.modeGen++;
regChange(this$1);
return;
}
}
}),

indentLine:methodOp(function(n,dir,aggressive){
if(typeof dir!="string"&&typeof dir!="number"){
if(dir==null){dir=this.options.smartIndent?"smart":"prev";}else
{dir=dir?"add":"subtract";}
}
if(isLine(this.doc,n)){indentLine(this,n,dir,aggressive);}
}),
indentSelection:methodOp(function(how){
var this$1=this;

var ranges=this.doc.sel.ranges,end=-1;
for(var i=0;i<ranges.length;i++){
var range=ranges[i];
if(!range.empty()){
var from=range.from(),to=range.to();
var start=Math.max(end,from.line);
end=Math.min(this$1.lastLine(),to.line-(to.ch?0:1))+1;
for(var j=start;j<end;++j)
{indentLine(this$1,j,how);}
var newRanges=this$1.doc.sel.ranges;
if(from.ch==0&&ranges.length==newRanges.length&&newRanges[i].from().ch>0)
{replaceOneSelection(this$1.doc,i,new Range(from,newRanges[i].to()),sel_dontScroll);}
}else if(range.head.line>end){
indentLine(this$1,range.head.line,how,true);
end=range.head.line;
if(i==this$1.doc.sel.primIndex){ensureCursorVisible(this$1);}
}
}
}),



getTokenAt:function getTokenAt(pos,precise){
return takeToken(this,pos,precise);
},

getLineTokens:function getLineTokens(line,precise){
return takeToken(this,Pos(line),precise,true);
},

getTokenTypeAt:function getTokenTypeAt(pos){
pos=_clipPos(this.doc,pos);
var styles=getLineStyles(this,getLine(this.doc,pos.line));
var before=0,after=(styles.length-1)/2,ch=pos.ch;
var type;
if(ch==0){type=styles[2];}else
{for(;;){
var mid=before+after>>1;
if((mid?styles[mid*2-1]:0)>=ch){after=mid;}else
if(styles[mid*2+1]<ch){before=mid+1;}else
{type=styles[mid*2+2];break;}
}}
var cut=type?type.indexOf("overlay "):-1;
return cut<0?type:cut==0?null:type.slice(0,cut-1);
},

getModeAt:function getModeAt(pos){
var mode=this.doc.mode;
if(!mode.innerMode){return mode;}
return CodeMirror.innerMode(mode,this.getTokenAt(pos).state).mode;
},

getHelper:function getHelper(pos,type){
return this.getHelpers(pos,type)[0];
},

getHelpers:function getHelpers(pos,type){
var this$1=this;

var found=[];
if(!helpers.hasOwnProperty(type)){return found;}
var help=helpers[type],mode=this.getModeAt(pos);
if(typeof mode[type]=="string"){
if(help[mode[type]]){found.push(help[mode[type]]);}
}else if(mode[type]){
for(var i=0;i<mode[type].length;i++){
var val=help[mode[type][i]];
if(val){found.push(val);}
}
}else if(mode.helperType&&help[mode.helperType]){
found.push(help[mode.helperType]);
}else if(help[mode.name]){
found.push(help[mode.name]);
}
for(var i$1=0;i$1<help._global.length;i$1++){
var cur=help._global[i$1];
if(cur.pred(mode,this$1)&&indexOf(found,cur.val)==-1)
{found.push(cur.val);}
}
return found;
},

getStateAfter:function getStateAfter(line,precise){
var doc=this.doc;
line=clipLine(doc,line==null?doc.first+doc.size-1:line);
return getStateBefore(this,line+1,precise);
},

cursorCoords:function cursorCoords(start,mode){
var pos,range=this.doc.sel.primary();
if(start==null){pos=range.head;}else
if(typeof start=="object"){pos=_clipPos(this.doc,start);}else
{pos=start?range.from():range.to();}
return _cursorCoords(this,pos,mode||"page");
},

charCoords:function charCoords(pos,mode){
return _charCoords(this,_clipPos(this.doc,pos),mode||"page");
},

coordsChar:function coordsChar(coords,mode){
coords=fromCoordSystem(this,coords,mode||"page");
return _coordsChar(this,coords.left,coords.top);
},

lineAtHeight:function lineAtHeight(height,mode){
height=fromCoordSystem(this,{top:height,left:0},mode||"page").top;
return _lineAtHeight(this.doc,height+this.display.viewOffset);
},
heightAtLine:function heightAtLine(line,mode,includeWidgets){
var end=false,lineObj;
if(typeof line=="number"){
var last=this.doc.first+this.doc.size-1;
if(line<this.doc.first){line=this.doc.first;}else
if(line>last){line=last;end=true;}
lineObj=getLine(this.doc,line);
}else{
lineObj=line;
}
return intoCoordSystem(this,lineObj,{top:0,left:0},mode||"page",includeWidgets).top+(
end?this.doc.height-_heightAtLine(lineObj):0);
},

defaultTextHeight:function defaultTextHeight(){return textHeight(this.display);},
defaultCharWidth:function defaultCharWidth(){return charWidth(this.display);},

getViewport:function getViewport(){return{from:this.display.viewFrom,to:this.display.viewTo};},

addWidget:function addWidget(pos,node,scroll,vert,horiz){
var display=this.display;
pos=_cursorCoords(this,_clipPos(this.doc,pos));
var top=pos.bottom,left=pos.left;
node.style.position="absolute";
node.setAttribute("cm-ignore-events","true");
this.display.input.setUneditable(node);
display.sizer.appendChild(node);
if(vert=="over"){
top=pos.top;
}else if(vert=="above"||vert=="near"){
var vspace=Math.max(display.wrapper.clientHeight,this.doc.height),
hspace=Math.max(display.sizer.clientWidth,display.lineSpace.clientWidth);

if((vert=='above'||pos.bottom+node.offsetHeight>vspace)&&pos.top>node.offsetHeight)
{top=pos.top-node.offsetHeight;}else
if(pos.bottom+node.offsetHeight<=vspace)
{top=pos.bottom;}
if(left+node.offsetWidth>hspace)
{left=hspace-node.offsetWidth;}
}
node.style.top=top+"px";
node.style.left=node.style.right="";
if(horiz=="right"){
left=display.sizer.clientWidth-node.offsetWidth;
node.style.right="0px";
}else{
if(horiz=="left"){left=0;}else
if(horiz=="middle"){left=(display.sizer.clientWidth-node.offsetWidth)/2;}
node.style.left=left+"px";
}
if(scroll)
{scrollIntoView(this,left,top,left+node.offsetWidth,top+node.offsetHeight);}
},

triggerOnKeyDown:methodOp(onKeyDown),
triggerOnKeyPress:methodOp(onKeyPress),
triggerOnKeyUp:onKeyUp,

execCommand:function execCommand(cmd){
if(commands.hasOwnProperty(cmd))
{return commands[cmd].call(null,this);}
},

triggerElectric:methodOp(function(text){triggerElectric(this,text);}),

findPosH:function findPosH(from,amount,unit,visually){
var this$1=this;

var dir=1;
if(amount<0){dir=-1;amount=-amount;}
var cur=_clipPos(this.doc,from);
for(var i=0;i<amount;++i){
cur=_findPosH(this$1.doc,cur,dir,unit,visually);
if(cur.hitSide){break;}
}
return cur;
},

moveH:methodOp(function(dir,unit){
var this$1=this;

this.extendSelectionsBy(function(range){
if(this$1.display.shift||this$1.doc.extend||range.empty())
{return _findPosH(this$1.doc,range.head,dir,unit,this$1.options.rtlMoveVisually);}else

{return dir<0?range.from():range.to();}
},sel_move);
}),

deleteH:methodOp(function(dir,unit){
var sel=this.doc.sel,doc=this.doc;
if(sel.somethingSelected())
{doc.replaceSelection("",null,"+delete");}else

{deleteNearSelection(this,function(range){
var other=_findPosH(doc,range.head,dir,unit,false);
return dir<0?{from:other,to:range.head}:{from:range.head,to:other};
});}
}),

findPosV:function findPosV(from,amount,unit,goalColumn){
var this$1=this;

var dir=1,x=goalColumn;
if(amount<0){dir=-1;amount=-amount;}
var cur=_clipPos(this.doc,from);
for(var i=0;i<amount;++i){
var coords=_cursorCoords(this$1,cur,"div");
if(x==null){x=coords.left;}else
{coords.left=x;}
cur=_findPosV(this$1,coords,dir,unit);
if(cur.hitSide){break;}
}
return cur;
},

moveV:methodOp(function(dir,unit){
var this$1=this;

var doc=this.doc,goals=[];
var collapse=!this.display.shift&&!doc.extend&&doc.sel.somethingSelected();
doc.extendSelectionsBy(function(range){
if(collapse)
{return dir<0?range.from():range.to();}
var headPos=_cursorCoords(this$1,range.head,"div");
if(range.goalColumn!=null){headPos.left=range.goalColumn;}
goals.push(headPos.left);
var pos=_findPosV(this$1,headPos,dir,unit);
if(unit=="page"&&range==doc.sel.primary())
{addToScrollPos(this$1,null,_charCoords(this$1,pos,"div").top-headPos.top);}
return pos;
},sel_move);
if(goals.length){for(var i=0;i<doc.sel.ranges.length;i++)
{doc.sel.ranges[i].goalColumn=goals[i];}}
}),


findWordAt:function findWordAt(pos){
var doc=this.doc,line=getLine(doc,pos.line).text;
var start=pos.ch,end=pos.ch;
if(line){
var helper=this.getHelper(pos,"wordChars");
if((pos.xRel<0||end==line.length)&&start){--start;}else{++end;}
var startChar=line.charAt(start);
var check=isWordChar(startChar,helper)?
function(ch){return isWordChar(ch,helper);}:
/\s/.test(startChar)?function(ch){return /\s/.test(ch);}:
function(ch){return!/\s/.test(ch)&&!isWordChar(ch);};
while(start>0&&check(line.charAt(start-1))){--start;}
while(end<line.length&&check(line.charAt(end))){++end;}
}
return new Range(Pos(pos.line,start),Pos(pos.line,end));
},

toggleOverwrite:function toggleOverwrite(value){
if(value!=null&&value==this.state.overwrite){return;}
if(this.state.overwrite=!this.state.overwrite)
{addClass(this.display.cursorDiv,"CodeMirror-overwrite");}else

{rmClass(this.display.cursorDiv,"CodeMirror-overwrite");}

signal(this,"overwriteToggle",this,this.state.overwrite);
},
hasFocus:function hasFocus(){return this.display.input.getField()==activeElt();},
isReadOnly:function isReadOnly(){return!!(this.options.readOnly||this.doc.cantEdit);},

scrollTo:methodOp(function(x,y){
if(x!=null||y!=null){resolveScrollToPos(this);}
if(x!=null){this.curOp.scrollLeft=x;}
if(y!=null){this.curOp.scrollTop=y;}
}),
getScrollInfo:function getScrollInfo(){
var scroller=this.display.scroller;
return{left:scroller.scrollLeft,top:scroller.scrollTop,
height:scroller.scrollHeight-scrollGap(this)-this.display.barHeight,
width:scroller.scrollWidth-scrollGap(this)-this.display.barWidth,
clientHeight:displayHeight(this),clientWidth:displayWidth(this)};
},

scrollIntoView:methodOp(function(range,margin){
if(range==null){
range={from:this.doc.sel.primary().head,to:null};
if(margin==null){margin=this.options.cursorScrollMargin;}
}else if(typeof range=="number"){
range={from:Pos(range,0),to:null};
}else if(range.from==null){
range={from:range,to:null};
}
if(!range.to){range.to=range.from;}
range.margin=margin||0;

if(range.from.line!=null){
resolveScrollToPos(this);
this.curOp.scrollToPos=range;
}else{
var sPos=calculateScrollPos(this,Math.min(range.from.left,range.to.left),
Math.min(range.from.top,range.to.top)-range.margin,
Math.max(range.from.right,range.to.right),
Math.max(range.from.bottom,range.to.bottom)+range.margin);
this.scrollTo(sPos.scrollLeft,sPos.scrollTop);
}
}),

setSize:methodOp(function(width,height){
var this$1=this;

var interpret=function interpret(val){return typeof val=="number"||/^\d+$/.test(String(val))?val+"px":val;};
if(width!=null){this.display.wrapper.style.width=interpret(width);}
if(height!=null){this.display.wrapper.style.height=interpret(height);}
if(this.options.lineWrapping){clearLineMeasurementCache(this);}
var lineNo=this.display.viewFrom;
this.doc.iter(lineNo,this.display.viewTo,function(line){
if(line.widgets){for(var i=0;i<line.widgets.length;i++)
{if(line.widgets[i].noHScroll){regLineChange(this$1,lineNo,"widget");break;}}}
++lineNo;
});
this.curOp.forceUpdate=true;
signal(this,"refresh",this);
}),

operation:function operation(f){return runInOp(this,f);},

refresh:methodOp(function(){
var oldHeight=this.display.cachedTextHeight;
regChange(this);
this.curOp.forceUpdate=true;
clearCaches(this);
this.scrollTo(this.doc.scrollLeft,this.doc.scrollTop);
updateGutterSpace(this);
if(oldHeight==null||Math.abs(oldHeight-textHeight(this.display))>.5)
{estimateLineHeights(this);}
signal(this,"refresh",this);
}),

swapDoc:methodOp(function(doc){
var old=this.doc;
old.cm=null;
attachDoc(this,doc);
clearCaches(this);
this.display.input.reset();
this.scrollTo(doc.scrollLeft,doc.scrollTop);
this.curOp.forceScroll=true;
signalLater(this,"swapDoc",this,old);
return old;
}),

getInputField:function getInputField(){return this.display.input.getField();},
getWrapperElement:function getWrapperElement(){return this.display.wrapper;},
getScrollerElement:function getScrollerElement(){return this.display.scroller;},
getGutterElement:function getGutterElement(){return this.display.gutters;}};

eventMixin(CodeMirror);

CodeMirror.registerHelper=function(type,name,value){
if(!helpers.hasOwnProperty(type)){helpers[type]=CodeMirror[type]={_global:[]};}
helpers[type][name]=value;
};
CodeMirror.registerGlobalHelper=function(type,name,predicate,value){
CodeMirror.registerHelper(type,name,value);
helpers[type]._global.push({pred:predicate,val:value});
};
}










function _findPosH(doc,pos,dir,unit,visually){
var line=pos.line,ch=pos.ch,origDir=dir;
var lineObj=getLine(doc,line);
function findNextLine(){
var l=line+dir;
if(l<doc.first||l>=doc.first+doc.size){return false;}
line=l;
return lineObj=getLine(doc,l);
}
function moveOnce(boundToLine){
var next=(visually?moveVisually:moveLogically)(lineObj,ch,dir,true);
if(next==null){
if(!boundToLine&&findNextLine()){
if(visually){ch=(dir<0?lineRight:lineLeft)(lineObj);}else
{ch=dir<0?lineObj.text.length:0;}
}else{return false;}
}else{ch=next;}
return true;
}

if(unit=="char"){
moveOnce();
}else if(unit=="column"){
moveOnce(true);
}else if(unit=="word"||unit=="group"){
var sawType=null,group=unit=="group";
var helper=doc.cm&&doc.cm.getHelper(pos,"wordChars");
for(var first=true;;first=false){
if(dir<0&&!moveOnce(!first)){break;}
var cur=lineObj.text.charAt(ch)||"\n";
var type=isWordChar(cur,helper)?"w":
group&&cur=="\n"?"n":
!group||/\s/.test(cur)?null:
"p";
if(group&&!first&&!type){type="s";}
if(sawType&&sawType!=type){
if(dir<0){dir=1;moveOnce();}
break;
}

if(type){sawType=type;}
if(dir>0&&!moveOnce(!first)){break;}
}
}
var result=skipAtomic(doc,Pos(line,ch),pos,origDir,true);
if(!cmp(pos,result)){result.hitSide=true;}
return result;
}




function _findPosV(cm,pos,dir,unit){
var doc=cm.doc,x=pos.left,y;
if(unit=="page"){
var pageSize=Math.min(cm.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight);
var moveAmount=Math.max(pageSize-.5*textHeight(cm.display),3);
y=(dir>0?pos.bottom:pos.top)+dir*moveAmount;

}else if(unit=="line"){
y=dir>0?pos.bottom+3:pos.top-3;
}
var target;
for(;;){
target=_coordsChar(cm,x,y);
if(!target.outside){break;}
if(dir<0?y<=0:y>=doc.height){target.hitSide=true;break;}
y+=dir*5;
}
return target;
}



var ContentEditableInput=function ContentEditableInput(cm){
this.cm=cm;
this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null;
this.polling=new Delayed();
this.composing=null;
this.gracePeriod=false;
this.readDOMTimeout=null;
};

ContentEditableInput.prototype.init=function(display){
var this$1=this;

var input=this,cm=input.cm;
var div=input.div=display.lineDiv;
disableBrowserMagic(div,cm.options.spellcheck);

on(div,"paste",function(e){
if(signalDOMEvent(cm,e)||handlePaste(e,cm)){return;}

if(ie_version<=11){setTimeout(operation(cm,function(){
if(!input.pollContent()){regChange(cm);}
}),20);}
});

on(div,"compositionstart",function(e){
this$1.composing={data:e.data,done:false};
});
on(div,"compositionupdate",function(e){
if(!this$1.composing){this$1.composing={data:e.data,done:false};}
});
on(div,"compositionend",function(e){
if(this$1.composing){
if(e.data!=this$1.composing.data){this$1.readFromDOMSoon();}
this$1.composing.done=true;
}
});

on(div,"touchstart",function(){return input.forceCompositionEnd();});

on(div,"input",function(){
if(!this$1.composing){this$1.readFromDOMSoon();}
});

function onCopyCut(e){
if(signalDOMEvent(cm,e)){return;}
if(cm.somethingSelected()){
setLastCopied({lineWise:false,text:cm.getSelections()});
if(e.type=="cut"){cm.replaceSelection("",null,"cut");}
}else if(!cm.options.lineWiseCopyCut){
return;
}else{
var ranges=copyableRanges(cm);
setLastCopied({lineWise:true,text:ranges.text});
if(e.type=="cut"){
cm.operation(function(){
cm.setSelections(ranges.ranges,0,sel_dontScroll);
cm.replaceSelection("",null,"cut");
});
}
}
if(e.clipboardData){
e.clipboardData.clearData();
var content=lastCopied.text.join("\n");

e.clipboardData.setData("Text",content);
if(e.clipboardData.getData("Text")==content){
e.preventDefault();
return;
}
}

var kludge=hiddenTextarea(),te=kludge.firstChild;
cm.display.lineSpace.insertBefore(kludge,cm.display.lineSpace.firstChild);
te.value=lastCopied.text.join("\n");
var hadFocus=document.activeElement;
selectInput(te);
setTimeout(function(){
cm.display.lineSpace.removeChild(kludge);
hadFocus.focus();
if(hadFocus==div){input.showPrimarySelection();}
},50);
}
on(div,"copy",onCopyCut);
on(div,"cut",onCopyCut);
};

ContentEditableInput.prototype.prepareSelection=function(){
var result=prepareSelection(this.cm,false);
result.focus=this.cm.state.focused;
return result;
};

ContentEditableInput.prototype.showSelection=function(info,takeFocus){
if(!info||!this.cm.display.view.length){return;}
if(info.focus||takeFocus){this.showPrimarySelection();}
this.showMultipleSelections(info);
};

ContentEditableInput.prototype.showPrimarySelection=function(){
var sel=window.getSelection(),prim=this.cm.doc.sel.primary();
var curAnchor=domToPos(this.cm,sel.anchorNode,sel.anchorOffset);
var curFocus=domToPos(this.cm,sel.focusNode,sel.focusOffset);
if(curAnchor&&!curAnchor.bad&&curFocus&&!curFocus.bad&&
cmp(minPos(curAnchor,curFocus),prim.from())==0&&
cmp(maxPos(curAnchor,curFocus),prim.to())==0)
{return;}

var start=posToDOM(this.cm,prim.from());
var end=posToDOM(this.cm,prim.to());
if(!start&&!end){return;}

var view=this.cm.display.view;
var old=sel.rangeCount&&sel.getRangeAt(0);
if(!start){
start={node:view[0].measure.map[2],offset:0};
}else if(!end){
var measure=view[view.length-1].measure;
var map=measure.maps?measure.maps[measure.maps.length-1]:measure.map;
end={node:map[map.length-1],offset:map[map.length-2]-map[map.length-3]};
}

var rng;
try{rng=range(start.node,start.offset,end.offset,end.node);}
catch(e){}
if(rng){
if(!gecko&&this.cm.state.focused){
sel.collapse(start.node,start.offset);
if(!rng.collapsed){
sel.removeAllRanges();
sel.addRange(rng);
}
}else{
sel.removeAllRanges();
sel.addRange(rng);
}
if(old&&sel.anchorNode==null){sel.addRange(old);}else
if(gecko){this.startGracePeriod();}
}
this.rememberSelection();
};

ContentEditableInput.prototype.startGracePeriod=function(){
var this$1=this;

clearTimeout(this.gracePeriod);
this.gracePeriod=setTimeout(function(){
this$1.gracePeriod=false;
if(this$1.selectionChanged())
{this$1.cm.operation(function(){return this$1.cm.curOp.selectionChanged=true;});}
},20);
};

ContentEditableInput.prototype.showMultipleSelections=function(info){
removeChildrenAndAdd(this.cm.display.cursorDiv,info.cursors);
removeChildrenAndAdd(this.cm.display.selectionDiv,info.selection);
};

ContentEditableInput.prototype.rememberSelection=function(){
var sel=window.getSelection();
this.lastAnchorNode=sel.anchorNode;this.lastAnchorOffset=sel.anchorOffset;
this.lastFocusNode=sel.focusNode;this.lastFocusOffset=sel.focusOffset;
};

ContentEditableInput.prototype.selectionInEditor=function(){
var sel=window.getSelection();
if(!sel.rangeCount){return false;}
var node=sel.getRangeAt(0).commonAncestorContainer;
return contains(this.div,node);
};

ContentEditableInput.prototype.focus=function(){
if(this.cm.options.readOnly!="nocursor"){
if(!this.selectionInEditor())
{this.showSelection(this.prepareSelection(),true);}
this.div.focus();
}
};
ContentEditableInput.prototype.blur=function(){this.div.blur();};
ContentEditableInput.prototype.getField=function(){return this.div;};

ContentEditableInput.prototype.supportsTouch=function(){return true;};

ContentEditableInput.prototype.receivedFocus=function(){
var input=this;
if(this.selectionInEditor())
{this.pollSelection();}else

{runInOp(this.cm,function(){return input.cm.curOp.selectionChanged=true;});}

function poll(){
if(input.cm.state.focused){
input.pollSelection();
input.polling.set(input.cm.options.pollInterval,poll);
}
}
this.polling.set(this.cm.options.pollInterval,poll);
};

ContentEditableInput.prototype.selectionChanged=function(){
var sel=window.getSelection();
return sel.anchorNode!=this.lastAnchorNode||sel.anchorOffset!=this.lastAnchorOffset||
sel.focusNode!=this.lastFocusNode||sel.focusOffset!=this.lastFocusOffset;
};

ContentEditableInput.prototype.pollSelection=function(){
if(!this.composing&&this.readDOMTimeout==null&&!this.gracePeriod&&this.selectionChanged()){
var sel=window.getSelection(),cm=this.cm;
this.rememberSelection();
var anchor=domToPos(cm,sel.anchorNode,sel.anchorOffset);
var head=domToPos(cm,sel.focusNode,sel.focusOffset);
if(anchor&&head){runInOp(cm,function(){
setSelection(cm.doc,simpleSelection(anchor,head),sel_dontScroll);
if(anchor.bad||head.bad){cm.curOp.selectionChanged=true;}
});}
}
};

ContentEditableInput.prototype.pollContent=function(){
if(this.readDOMTimeout!=null){
clearTimeout(this.readDOMTimeout);
this.readDOMTimeout=null;
}

var cm=this.cm,display=cm.display,sel=cm.doc.sel.primary();
var from=sel.from(),to=sel.to();
if(from.ch==0&&from.line>cm.firstLine())
{from=Pos(from.line-1,getLine(cm.doc,from.line-1).length);}
if(to.ch==getLine(cm.doc,to.line).text.length&&to.line<cm.lastLine())
{to=Pos(to.line+1,0);}
if(from.line<display.viewFrom||to.line>display.viewTo-1){return false;}

var fromIndex,fromLine,fromNode;
if(from.line==display.viewFrom||(fromIndex=findViewIndex(cm,from.line))==0){
fromLine=lineNo(display.view[0].line);
fromNode=display.view[0].node;
}else{
fromLine=lineNo(display.view[fromIndex].line);
fromNode=display.view[fromIndex-1].node.nextSibling;
}
var toIndex=findViewIndex(cm,to.line);
var toLine,toNode;
if(toIndex==display.view.length-1){
toLine=display.viewTo-1;
toNode=display.lineDiv.lastChild;
}else{
toLine=lineNo(display.view[toIndex+1].line)-1;
toNode=display.view[toIndex+1].node.previousSibling;
}

if(!fromNode){return false;}
var newText=cm.doc.splitLines(domTextBetween(cm,fromNode,toNode,fromLine,toLine));
var oldText=getBetween(cm.doc,Pos(fromLine,0),Pos(toLine,getLine(cm.doc,toLine).text.length));
while(newText.length>1&&oldText.length>1){
if(lst(newText)==lst(oldText)){newText.pop();oldText.pop();toLine--;}else
if(newText[0]==oldText[0]){newText.shift();oldText.shift();fromLine++;}else
{break;}
}

var cutFront=0,cutEnd=0;
var newTop=newText[0],oldTop=oldText[0],maxCutFront=Math.min(newTop.length,oldTop.length);
while(cutFront<maxCutFront&&newTop.charCodeAt(cutFront)==oldTop.charCodeAt(cutFront))
{++cutFront;}
var newBot=lst(newText),oldBot=lst(oldText);
var maxCutEnd=Math.min(newBot.length-(newText.length==1?cutFront:0),
oldBot.length-(oldText.length==1?cutFront:0));
while(cutEnd<maxCutEnd&&
newBot.charCodeAt(newBot.length-cutEnd-1)==oldBot.charCodeAt(oldBot.length-cutEnd-1))
{++cutEnd;}

newText[newText.length-1]=newBot.slice(0,newBot.length-cutEnd).replace(/^\u200b+/,"");
newText[0]=newText[0].slice(cutFront).replace(/\u200b+$/,"");

var chFrom=Pos(fromLine,cutFront);
var chTo=Pos(toLine,oldText.length?lst(oldText).length-cutEnd:0);
if(newText.length>1||newText[0]||cmp(chFrom,chTo)){
_replaceRange(cm.doc,newText,chFrom,chTo,"+input");
return true;
}
};

ContentEditableInput.prototype.ensurePolled=function(){
this.forceCompositionEnd();
};
ContentEditableInput.prototype.reset=function(){
this.forceCompositionEnd();
};
ContentEditableInput.prototype.forceCompositionEnd=function(){
if(!this.composing){return;}
clearTimeout(this.readDOMTimeout);
this.composing=null;
if(!this.pollContent()){regChange(this.cm);}
this.div.blur();
this.div.focus();
};
ContentEditableInput.prototype.readFromDOMSoon=function(){
var this$1=this;

if(this.readDOMTimeout!=null){return;}
this.readDOMTimeout=setTimeout(function(){
this$1.readDOMTimeout=null;
if(this$1.composing){
if(this$1.composing.done){this$1.composing=null;}else
{return;}
}
if(this$1.cm.isReadOnly()||!this$1.pollContent())
{runInOp(this$1.cm,function(){return regChange(this$1.cm);});}
},80);
};

ContentEditableInput.prototype.setUneditable=function(node){
node.contentEditable="false";
};

ContentEditableInput.prototype.onKeyPress=function(e){
e.preventDefault();
if(!this.cm.isReadOnly())
{operation(this.cm,applyTextInput)(this.cm,String.fromCharCode(e.charCode==null?e.keyCode:e.charCode),0);}
};

ContentEditableInput.prototype.readOnlyChanged=function(val){
this.div.contentEditable=String(val!="nocursor");
};

ContentEditableInput.prototype.onContextMenu=function(){};
ContentEditableInput.prototype.resetPosition=function(){};

ContentEditableInput.prototype.needsContentAttribute=true;

function posToDOM(cm,pos){
var view=findViewForLine(cm,pos.line);
if(!view||view.hidden){return null;}
var line=getLine(cm.doc,pos.line);
var info=mapFromLineView(view,line,pos.line);

var order=getOrder(line),side="left";
if(order){
var partPos=getBidiPartAt(order,pos.ch);
side=partPos%2?"right":"left";
}
var result=nodeAndOffsetInLineMap(info.map,pos.ch,side);
result.offset=result.collapse=="right"?result.end:result.start;
return result;
}

function badPos(pos,bad){if(bad){pos.bad=true;}return pos;}

function domTextBetween(cm,from,to,fromLine,toLine){
var text="",closing=false,lineSep=cm.doc.lineSeparator();
function recognizeMarker(id){return function(marker){return marker.id==id;};}
function walk(node){
if(node.nodeType==1){
var cmText=node.getAttribute("cm-text");
if(cmText!=null){
if(cmText==""){text+=node.textContent.replace(/\u200b/g,"");}else
{text+=cmText;}
return;
}
var markerID=node.getAttribute("cm-marker"),range;
if(markerID){
var found=cm.findMarks(Pos(fromLine,0),Pos(toLine+1,0),recognizeMarker(+markerID));
if(found.length&&(range=found[0].find()))
{text+=getBetween(cm.doc,range.from,range.to).join(lineSep);}
return;
}
if(node.getAttribute("contenteditable")=="false"){return;}
for(var i=0;i<node.childNodes.length;i++)
{walk(node.childNodes[i]);}
if(/^(pre|div|p)$/i.test(node.nodeName))
{closing=true;}
}else if(node.nodeType==3){
var val=node.nodeValue;
if(!val){return;}
if(closing){
text+=lineSep;
closing=false;
}
text+=val;
}
}
for(;;){
walk(from);
if(from==to){break;}
from=from.nextSibling;
}
return text;
}

function domToPos(cm,node,offset){
var lineNode;
if(node==cm.display.lineDiv){
lineNode=cm.display.lineDiv.childNodes[offset];
if(!lineNode){return badPos(cm.clipPos(Pos(cm.display.viewTo-1)),true);}
node=null;offset=0;
}else{
for(lineNode=node;;lineNode=lineNode.parentNode){
if(!lineNode||lineNode==cm.display.lineDiv){return null;}
if(lineNode.parentNode&&lineNode.parentNode==cm.display.lineDiv){break;}
}
}
for(var i=0;i<cm.display.view.length;i++){
var lineView=cm.display.view[i];
if(lineView.node==lineNode)
{return locateNodeInLineView(lineView,node,offset);}
}
}

function locateNodeInLineView(lineView,node,offset){
var wrapper=lineView.text.firstChild,bad=false;
if(!node||!contains(wrapper,node)){return badPos(Pos(lineNo(lineView.line),0),true);}
if(node==wrapper){
bad=true;
node=wrapper.childNodes[offset];
offset=0;
if(!node){
var line=lineView.rest?lst(lineView.rest):lineView.line;
return badPos(Pos(lineNo(line),line.text.length),bad);
}
}

var textNode=node.nodeType==3?node:null,topNode=node;
if(!textNode&&node.childNodes.length==1&&node.firstChild.nodeType==3){
textNode=node.firstChild;
if(offset){offset=textNode.nodeValue.length;}
}
while(topNode.parentNode!=wrapper){topNode=topNode.parentNode;}
var measure=lineView.measure,maps=measure.maps;

function find(textNode,topNode,offset){
for(var i=-1;i<(maps?maps.length:0);i++){
var map=i<0?measure.map:maps[i];
for(var j=0;j<map.length;j+=3){
var curNode=map[j+2];
if(curNode==textNode||curNode==topNode){
var line=lineNo(i<0?lineView.line:lineView.rest[i]);
var ch=map[j]+offset;
if(offset<0||curNode!=textNode){ch=map[j+(offset?1:0)];}
return Pos(line,ch);
}
}
}
}
var found=find(textNode,topNode,offset);
if(found){return badPos(found,bad);}


for(var after=topNode.nextSibling,dist=textNode?textNode.nodeValue.length-offset:0;after;after=after.nextSibling){
found=find(after,after.firstChild,0);
if(found)
{return badPos(Pos(found.line,found.ch-dist),bad);}else

{dist+=after.textContent.length;}
}
for(var before=topNode.previousSibling,dist$1=offset;before;before=before.previousSibling){
found=find(before,before.firstChild,-1);
if(found)
{return badPos(Pos(found.line,found.ch+dist$1),bad);}else

{dist$1+=before.textContent.length;}
}
}



var TextareaInput=function TextareaInput(cm){
this.cm=cm;

this.prevInput="";




this.pollingFast=false;

this.polling=new Delayed();


this.inaccurateSelection=false;

this.hasSelection=false;
this.composing=null;
};

TextareaInput.prototype.init=function(display){
var this$1=this;

var input=this,cm=this.cm;


var div=this.wrapper=hiddenTextarea();


var te=this.textarea=div.firstChild;
display.wrapper.insertBefore(div,display.wrapper.firstChild);


if(ios){te.style.width="0px";}

on(te,"input",function(){
if(ie&&ie_version>=9&&this$1.hasSelection){this$1.hasSelection=null;}
input.poll();
});

on(te,"paste",function(e){
if(signalDOMEvent(cm,e)||handlePaste(e,cm)){return;}

cm.state.pasteIncoming=true;
input.fastPoll();
});

function prepareCopyCut(e){
if(signalDOMEvent(cm,e)){return;}
if(cm.somethingSelected()){
setLastCopied({lineWise:false,text:cm.getSelections()});
if(input.inaccurateSelection){
input.prevInput="";
input.inaccurateSelection=false;
te.value=lastCopied.text.join("\n");
selectInput(te);
}
}else if(!cm.options.lineWiseCopyCut){
return;
}else{
var ranges=copyableRanges(cm);
setLastCopied({lineWise:true,text:ranges.text});
if(e.type=="cut"){
cm.setSelections(ranges.ranges,null,sel_dontScroll);
}else{
input.prevInput="";
te.value=ranges.text.join("\n");
selectInput(te);
}
}
if(e.type=="cut"){cm.state.cutIncoming=true;}
}
on(te,"cut",prepareCopyCut);
on(te,"copy",prepareCopyCut);

on(display.scroller,"paste",function(e){
if(eventInWidget(display,e)||signalDOMEvent(cm,e)){return;}
cm.state.pasteIncoming=true;
input.focus();
});


on(display.lineSpace,"selectstart",function(e){
if(!eventInWidget(display,e)){e_preventDefault(e);}
});

on(te,"compositionstart",function(){
var start=cm.getCursor("from");
if(input.composing){input.composing.range.clear();}
input.composing={
start:start,
range:cm.markText(start,cm.getCursor("to"),{className:"CodeMirror-composing"})};

});
on(te,"compositionend",function(){
if(input.composing){
input.poll();
input.composing.range.clear();
input.composing=null;
}
});
};

TextareaInput.prototype.prepareSelection=function(){

var cm=this.cm,display=cm.display,doc=cm.doc;
var result=prepareSelection(cm);


if(cm.options.moveInputWithCursor){
var headPos=_cursorCoords(cm,doc.sel.primary().head,"div");
var wrapOff=display.wrapper.getBoundingClientRect(),lineOff=display.lineDiv.getBoundingClientRect();
result.teTop=Math.max(0,Math.min(display.wrapper.clientHeight-10,
headPos.top+lineOff.top-wrapOff.top));
result.teLeft=Math.max(0,Math.min(display.wrapper.clientWidth-10,
headPos.left+lineOff.left-wrapOff.left));
}

return result;
};

TextareaInput.prototype.showSelection=function(drawn){
var cm=this.cm,display=cm.display;
removeChildrenAndAdd(display.cursorDiv,drawn.cursors);
removeChildrenAndAdd(display.selectionDiv,drawn.selection);
if(drawn.teTop!=null){
this.wrapper.style.top=drawn.teTop+"px";
this.wrapper.style.left=drawn.teLeft+"px";
}
};



TextareaInput.prototype.reset=function(typing){
if(this.contextMenuPending){return;}
var minimal,selected,cm=this.cm,doc=cm.doc;
if(cm.somethingSelected()){
this.prevInput="";
var range=doc.sel.primary();
minimal=hasCopyEvent&&(
range.to().line-range.from().line>100||(selected=cm.getSelection()).length>1000);
var content=minimal?"-":selected||cm.getSelection();
this.textarea.value=content;
if(cm.state.focused){selectInput(this.textarea);}
if(ie&&ie_version>=9){this.hasSelection=content;}
}else if(!typing){
this.prevInput=this.textarea.value="";
if(ie&&ie_version>=9){this.hasSelection=null;}
}
this.inaccurateSelection=minimal;
};

TextareaInput.prototype.getField=function(){return this.textarea;};

TextareaInput.prototype.supportsTouch=function(){return false;};

TextareaInput.prototype.focus=function(){
if(this.cm.options.readOnly!="nocursor"&&(!mobile||activeElt()!=this.textarea)){
try{this.textarea.focus();}
catch(e){}
}
};

TextareaInput.prototype.blur=function(){this.textarea.blur();};

TextareaInput.prototype.resetPosition=function(){
this.wrapper.style.top=this.wrapper.style.left=0;
};

TextareaInput.prototype.receivedFocus=function(){this.slowPoll();};



TextareaInput.prototype.slowPoll=function(){
var this$1=this;

if(this.pollingFast){return;}
this.polling.set(this.cm.options.pollInterval,function(){
this$1.poll();
if(this$1.cm.state.focused){this$1.slowPoll();}
});
};




TextareaInput.prototype.fastPoll=function(){
var missed=false,input=this;
input.pollingFast=true;
function p(){
var changed=input.poll();
if(!changed&&!missed){missed=true;input.polling.set(60,p);}else
{input.pollingFast=false;input.slowPoll();}
}
input.polling.set(20,p);
};







TextareaInput.prototype.poll=function(){
var this$1=this;

var cm=this.cm,input=this.textarea,prevInput=this.prevInput;




if(this.contextMenuPending||!cm.state.focused||
hasSelection(input)&&!prevInput&&!this.composing||
cm.isReadOnly()||cm.options.disableInput||cm.state.keySeq)
{return false;}

var text=input.value;

if(text==prevInput&&!cm.somethingSelected()){return false;}



if(ie&&ie_version>=9&&this.hasSelection===text||
mac&&/[\uf700-\uf7ff]/.test(text)){
cm.display.input.reset();
return false;
}

if(cm.doc.sel==cm.display.selForContextMenu){
var first=text.charCodeAt(0);
if(first==0x200b&&!prevInput){prevInput='\u200B';}
if(first==0x21da){this.reset();return this.cm.execCommand("undo");}
}

var same=0,l=Math.min(prevInput.length,text.length);
while(same<l&&prevInput.charCodeAt(same)==text.charCodeAt(same)){++same;}

runInOp(cm,function(){
applyTextInput(cm,text.slice(same),prevInput.length-same,
null,this$1.composing?"*compose":null);


if(text.length>1000||text.indexOf("\n")>-1){input.value=this$1.prevInput="";}else
{this$1.prevInput=text;}

if(this$1.composing){
this$1.composing.range.clear();
this$1.composing.range=cm.markText(this$1.composing.start,cm.getCursor("to"),
{className:"CodeMirror-composing"});
}
});
return true;
};

TextareaInput.prototype.ensurePolled=function(){
if(this.pollingFast&&this.poll()){this.pollingFast=false;}
};

TextareaInput.prototype.onKeyPress=function(){
if(ie&&ie_version>=9){this.hasSelection=null;}
this.fastPoll();
};

TextareaInput.prototype.onContextMenu=function(e){
var input=this,cm=input.cm,display=cm.display,te=input.textarea;
var pos=posFromMouse(cm,e),scrollPos=display.scroller.scrollTop;
if(!pos||presto){return;}



var reset=cm.options.resetSelectionOnContextMenu;
if(reset&&cm.doc.sel.contains(pos)==-1)
{operation(cm,setSelection)(cm.doc,simpleSelection(pos),sel_dontScroll);}

var oldCSS=te.style.cssText,oldWrapperCSS=input.wrapper.style.cssText;
input.wrapper.style.cssText="position: absolute";
var wrapperBox=input.wrapper.getBoundingClientRect();
te.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-wrapperBox.top-5)+"px; left: "+(e.clientX-wrapperBox.left-5)+"px;\n      z-index: 1000; background: "+(ie?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
var oldScrollY;
if(webkit){oldScrollY=window.scrollY;}
display.input.focus();
if(webkit){window.scrollTo(null,oldScrollY);}
display.input.reset();

if(!cm.somethingSelected()){te.value=input.prevInput=" ";}
input.contextMenuPending=true;
display.selForContextMenu=cm.doc.sel;
clearTimeout(display.detectingSelectAll);




function prepareSelectAllHack(){
if(te.selectionStart!=null){
var selected=cm.somethingSelected();
var extval='\u200B'+(selected?te.value:"");
te.value='\u21DA';
te.value=extval;
input.prevInput=selected?"":'\u200B';
te.selectionStart=1;te.selectionEnd=extval.length;


display.selForContextMenu=cm.doc.sel;
}
}
function rehide(){
input.contextMenuPending=false;
input.wrapper.style.cssText=oldWrapperCSS;
te.style.cssText=oldCSS;
if(ie&&ie_version<9){display.scrollbars.setScrollTop(display.scroller.scrollTop=scrollPos);}


if(te.selectionStart!=null){
if(!ie||ie&&ie_version<9){prepareSelectAllHack();}
var i=0,poll=function poll(){
if(display.selForContextMenu==cm.doc.sel&&te.selectionStart==0&&
te.selectionEnd>0&&input.prevInput=='\u200B')
{operation(cm,selectAll)(cm);}else
if(i++<10){display.detectingSelectAll=setTimeout(poll,500);}else
{display.input.reset();}
};
display.detectingSelectAll=setTimeout(poll,200);
}
}

if(ie&&ie_version>=9){prepareSelectAllHack();}
if(captureRightClick){
e_stop(e);
var mouseup=function mouseup(){
off(window,"mouseup",mouseup);
setTimeout(rehide,20);
};
on(window,"mouseup",mouseup);
}else{
setTimeout(rehide,50);
}
};

TextareaInput.prototype.readOnlyChanged=function(val){
if(!val){this.reset();}
};

TextareaInput.prototype.setUneditable=function(){};

TextareaInput.prototype.needsContentAttribute=false;

function fromTextArea(textarea,options){
options=options?copyObj(options):{};
options.value=textarea.value;
if(!options.tabindex&&textarea.tabIndex)
{options.tabindex=textarea.tabIndex;}
if(!options.placeholder&&textarea.placeholder)
{options.placeholder=textarea.placeholder;}


if(options.autofocus==null){
var hasFocus=activeElt();
options.autofocus=hasFocus==textarea||
textarea.getAttribute("autofocus")!=null&&hasFocus==document.body;
}

function save(){textarea.value=cm.getValue();}

var realSubmit;
if(textarea.form){
on(textarea.form,"submit",save);

if(!options.leaveSubmitMethodAlone){
var form=textarea.form;
realSubmit=form.submit;
try{
var wrappedSubmit=form.submit=function(){
save();
form.submit=realSubmit;
form.submit();
form.submit=wrappedSubmit;
};
}catch(e){}
}
}

options.finishInit=function(cm){
cm.save=save;
cm.getTextArea=function(){return textarea;};
cm.toTextArea=function(){
cm.toTextArea=isNaN;
save();
textarea.parentNode.removeChild(cm.getWrapperElement());
textarea.style.display="";
if(textarea.form){
off(textarea.form,"submit",save);
if(typeof textarea.form.submit=="function")
{textarea.form.submit=realSubmit;}
}
};
};

textarea.style.display="none";
var cm=CodeMirror(function(node){return textarea.parentNode.insertBefore(node,textarea.nextSibling);},
options);
return cm;
}

function addLegacyProps(CodeMirror){
CodeMirror.off=off;
CodeMirror.on=on;
CodeMirror.wheelEventPixels=wheelEventPixels;
CodeMirror.Doc=Doc;
CodeMirror.splitLines=splitLinesAuto;
CodeMirror.countColumn=countColumn;
CodeMirror.findColumn=findColumn;
CodeMirror.isWordChar=isWordCharBasic;
CodeMirror.Pass=Pass;
CodeMirror.signal=signal;
CodeMirror.Line=Line;
CodeMirror.changeEnd=changeEnd;
CodeMirror.scrollbarModel=scrollbarModel;
CodeMirror.Pos=Pos;
CodeMirror.cmpPos=cmp;
CodeMirror.modes=modes;
CodeMirror.mimeModes=mimeModes;
CodeMirror.resolveMode=resolveMode;
CodeMirror.getMode=getMode;
CodeMirror.modeExtensions=modeExtensions;
CodeMirror.extendMode=extendMode;
CodeMirror.copyState=copyState;
CodeMirror.startState=startState;
CodeMirror.innerMode=innerMode;
CodeMirror.commands=commands;
CodeMirror.keyMap=keyMap;
CodeMirror.keyName=keyName;
CodeMirror.isModifierKey=isModifierKey;
CodeMirror.lookupKey=lookupKey;
CodeMirror.normalizeKeyMap=normalizeKeyMap;
CodeMirror.StringStream=StringStream;
CodeMirror.SharedTextMarker=SharedTextMarker;
CodeMirror.TextMarker=TextMarker;
CodeMirror.LineWidget=LineWidget;
CodeMirror.e_preventDefault=e_preventDefault;
CodeMirror.e_stopPropagation=e_stopPropagation;
CodeMirror.e_stop=e_stop;
CodeMirror.addClass=addClass;
CodeMirror.contains=contains;
CodeMirror.rmClass=rmClass;
CodeMirror.keyNames=keyNames;
}



defineOptions(CodeMirror);

addEditorMethods(CodeMirror);


var dontDelegate="iter insert remove copy getEditor constructor".split(" ");
for(var prop in Doc.prototype){if(Doc.prototype.hasOwnProperty(prop)&&indexOf(dontDelegate,prop)<0)
{CodeMirror.prototype[prop]=function(method){
return function(){return method.apply(this.doc,arguments);};
}(Doc.prototype[prop]);}}

eventMixin(Doc);



CodeMirror.inputStyles={"textarea":TextareaInput,"contenteditable":ContentEditableInput};






CodeMirror.defineMode=function(name){
if(!CodeMirror.defaults.mode&&name!="null"){CodeMirror.defaults.mode=name;}
defineMode.apply(this,arguments);
};

CodeMirror.defineMIME=defineMIME;


CodeMirror.defineMode("null",function(){return{token:function token(stream){return stream.skipToEnd();}};});
CodeMirror.defineMIME("text/plain","null");



CodeMirror.defineExtension=function(name,func){
CodeMirror.prototype[name]=func;
};
CodeMirror.defineDocExtension=function(name,func){
Doc.prototype[name]=func;
};

CodeMirror.fromTextArea=fromTextArea;

addLegacyProps(CodeMirror);

CodeMirror.version="5.23.0";

return CodeMirror;

});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});













var NAME=exports.NAME='Name';



var DOCUMENT=exports.DOCUMENT='Document';
var OPERATION_DEFINITION=exports.OPERATION_DEFINITION='OperationDefinition';
var VARIABLE_DEFINITION=exports.VARIABLE_DEFINITION='VariableDefinition';
var VARIABLE=exports.VARIABLE='Variable';
var SELECTION_SET=exports.SELECTION_SET='SelectionSet';
var FIELD=exports.FIELD='Field';
var ARGUMENT=exports.ARGUMENT='Argument';



var FRAGMENT_SPREAD=exports.FRAGMENT_SPREAD='FragmentSpread';
var INLINE_FRAGMENT=exports.INLINE_FRAGMENT='InlineFragment';
var FRAGMENT_DEFINITION=exports.FRAGMENT_DEFINITION='FragmentDefinition';



var INT=exports.INT='IntValue';
var FLOAT=exports.FLOAT='FloatValue';
var STRING=exports.STRING='StringValue';
var BOOLEAN=exports.BOOLEAN='BooleanValue';
var NULL=exports.NULL='NullValue';
var ENUM=exports.ENUM='EnumValue';
var LIST=exports.LIST='ListValue';
var OBJECT=exports.OBJECT='ObjectValue';
var OBJECT_FIELD=exports.OBJECT_FIELD='ObjectField';



var DIRECTIVE=exports.DIRECTIVE='Directive';



var NAMED_TYPE=exports.NAMED_TYPE='NamedType';
var LIST_TYPE=exports.LIST_TYPE='ListType';
var NON_NULL_TYPE=exports.NON_NULL_TYPE='NonNullType';



var SCHEMA_DEFINITION=exports.SCHEMA_DEFINITION='SchemaDefinition';
var OPERATION_TYPE_DEFINITION=exports.OPERATION_TYPE_DEFINITION='OperationTypeDefinition';



var SCALAR_TYPE_DEFINITION=exports.SCALAR_TYPE_DEFINITION='ScalarTypeDefinition';
var OBJECT_TYPE_DEFINITION=exports.OBJECT_TYPE_DEFINITION='ObjectTypeDefinition';
var FIELD_DEFINITION=exports.FIELD_DEFINITION='FieldDefinition';
var INPUT_VALUE_DEFINITION=exports.INPUT_VALUE_DEFINITION='InputValueDefinition';
var INTERFACE_TYPE_DEFINITION=exports.INTERFACE_TYPE_DEFINITION='InterfaceTypeDefinition';
var UNION_TYPE_DEFINITION=exports.UNION_TYPE_DEFINITION='UnionTypeDefinition';
var ENUM_TYPE_DEFINITION=exports.ENUM_TYPE_DEFINITION='EnumTypeDefinition';
var ENUM_VALUE_DEFINITION=exports.ENUM_VALUE_DEFINITION='EnumValueDefinition';
var INPUT_OBJECT_TYPE_DEFINITION=exports.INPUT_OBJECT_TYPE_DEFINITION='InputObjectTypeDefinition';



var TYPE_EXTENSION_DEFINITION=exports.TYPE_EXTENSION_DEFINITION='TypeExtensionDefinition';



var DIRECTIVE_DEFINITION=exports.DIRECTIVE_DEFINITION='DirectiveDefinition';

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.default=invariant;










function invariant(condition,message){
if(!condition){
throw new Error(message);
}
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.print=print;

var _visitor=__webpack_require__(27);





function print(ast){
return(0,_visitor.visit)(ast,{leave:printDocASTReducer});
}








var printDocASTReducer={
Name:function Name(node){
return node.value;
},
Variable:function Variable(node){
return'$'+node.name;
},



Document:function Document(node){
return join(node.definitions,'\n\n')+'\n';
},

OperationDefinition:function OperationDefinition(node){
var op=node.operation;
var name=node.name;
var varDefs=wrap('(',join(node.variableDefinitions,', '),')');
var directives=join(node.directives,' ');
var selectionSet=node.selectionSet;


return!name&&!directives&&!varDefs&&op==='query'?selectionSet:join([op,join([name,varDefs]),directives,selectionSet],' ');
},


VariableDefinition:function VariableDefinition(_ref){
var variable=_ref.variable,
type=_ref.type,
defaultValue=_ref.defaultValue;
return variable+': '+type+wrap(' = ',defaultValue);
},

SelectionSet:function SelectionSet(_ref2){
var selections=_ref2.selections;
return block(selections);
},

Field:function Field(_ref3){
var alias=_ref3.alias,
name=_ref3.name,
args=_ref3.arguments,
directives=_ref3.directives,
selectionSet=_ref3.selectionSet;
return join([wrap('',alias,': ')+name+wrap('(',join(args,', '),')'),join(directives,' '),selectionSet],' ');
},

Argument:function Argument(_ref4){
var name=_ref4.name,
value=_ref4.value;
return name+': '+value;
},



FragmentSpread:function FragmentSpread(_ref5){
var name=_ref5.name,
directives=_ref5.directives;
return'...'+name+wrap(' ',join(directives,' '));
},

InlineFragment:function InlineFragment(_ref6){
var typeCondition=_ref6.typeCondition,
directives=_ref6.directives,
selectionSet=_ref6.selectionSet;
return join(['...',wrap('on ',typeCondition),join(directives,' '),selectionSet],' ');
},

FragmentDefinition:function FragmentDefinition(_ref7){
var name=_ref7.name,
typeCondition=_ref7.typeCondition,
directives=_ref7.directives,
selectionSet=_ref7.selectionSet;
return'fragment '+name+' on '+typeCondition+' '+wrap('',join(directives,' '),' ')+selectionSet;
},



IntValue:function IntValue(_ref8){
var value=_ref8.value;
return value;
},
FloatValue:function FloatValue(_ref9){
var value=_ref9.value;
return value;
},
StringValue:function StringValue(_ref10){
var value=_ref10.value;
return JSON.stringify(value);
},
BooleanValue:function BooleanValue(_ref11){
var value=_ref11.value;
return JSON.stringify(value);
},
NullValue:function NullValue(){
return'null';
},
EnumValue:function EnumValue(_ref12){
var value=_ref12.value;
return value;
},
ListValue:function ListValue(_ref13){
var values=_ref13.values;
return'['+join(values,', ')+']';
},
ObjectValue:function ObjectValue(_ref14){
var fields=_ref14.fields;
return'{'+join(fields,', ')+'}';
},
ObjectField:function ObjectField(_ref15){
var name=_ref15.name,
value=_ref15.value;
return name+': '+value;
},



Directive:function Directive(_ref16){
var name=_ref16.name,
args=_ref16.arguments;
return'@'+name+wrap('(',join(args,', '),')');
},



NamedType:function NamedType(_ref17){
var name=_ref17.name;
return name;
},
ListType:function ListType(_ref18){
var type=_ref18.type;
return'['+type+']';
},
NonNullType:function NonNullType(_ref19){
var type=_ref19.type;
return type+'!';
},



SchemaDefinition:function SchemaDefinition(_ref20){
var directives=_ref20.directives,
operationTypes=_ref20.operationTypes;
return join(['schema',join(directives,' '),block(operationTypes)],' ');
},

OperationTypeDefinition:function OperationTypeDefinition(_ref21){
var operation=_ref21.operation,
type=_ref21.type;
return operation+': '+type;
},

ScalarTypeDefinition:function ScalarTypeDefinition(_ref22){
var name=_ref22.name,
directives=_ref22.directives;
return join(['scalar',name,join(directives,' ')],' ');
},

ObjectTypeDefinition:function ObjectTypeDefinition(_ref23){
var name=_ref23.name,
interfaces=_ref23.interfaces,
directives=_ref23.directives,
fields=_ref23.fields;
return join(['type',name,wrap('implements ',join(interfaces,', ')),join(directives,' '),block(fields)],' ');
},

FieldDefinition:function FieldDefinition(_ref24){
var name=_ref24.name,
args=_ref24.arguments,
type=_ref24.type,
directives=_ref24.directives;
return name+wrap('(',join(args,', '),')')+': '+type+wrap(' ',join(directives,' '));
},

InputValueDefinition:function InputValueDefinition(_ref25){
var name=_ref25.name,
type=_ref25.type,
defaultValue=_ref25.defaultValue,
directives=_ref25.directives;
return join([name+': '+type,wrap('= ',defaultValue),join(directives,' ')],' ');
},

InterfaceTypeDefinition:function InterfaceTypeDefinition(_ref26){
var name=_ref26.name,
directives=_ref26.directives,
fields=_ref26.fields;
return join(['interface',name,join(directives,' '),block(fields)],' ');
},

UnionTypeDefinition:function UnionTypeDefinition(_ref27){
var name=_ref27.name,
directives=_ref27.directives,
types=_ref27.types;
return join(['union',name,join(directives,' '),'= '+join(types,' | ')],' ');
},

EnumTypeDefinition:function EnumTypeDefinition(_ref28){
var name=_ref28.name,
directives=_ref28.directives,
values=_ref28.values;
return join(['enum',name,join(directives,' '),block(values)],' ');
},

EnumValueDefinition:function EnumValueDefinition(_ref29){
var name=_ref29.name,
directives=_ref29.directives;
return join([name,join(directives,' ')],' ');
},

InputObjectTypeDefinition:function InputObjectTypeDefinition(_ref30){
var name=_ref30.name,
directives=_ref30.directives,
fields=_ref30.fields;
return join(['input',name,join(directives,' '),block(fields)],' ');
},

TypeExtensionDefinition:function TypeExtensionDefinition(_ref31){
var definition=_ref31.definition;
return'extend '+definition;
},

DirectiveDefinition:function DirectiveDefinition(_ref32){
var name=_ref32.name,
args=_ref32.arguments,
locations=_ref32.locations;
return'directive @'+name+wrap('(',join(args,', '),')')+' on '+join(locations,' | ');
}};






function join(maybeArray,separator){
return maybeArray?maybeArray.filter(function(x){
return x;
}).join(separator||''):'';
}





function block(array){
return array&&array.length!==0?indent('{\n'+join(array,'\n'))+'\n}':'{}';
}





function wrap(start,maybeString,end){
return maybeString?start+maybeString+(end||''):'';
}

function indent(maybeString){
return maybeString&&maybeString.replace(/\n/g,'\n  ');
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.specifiedDirectives=exports.GraphQLDeprecatedDirective=exports.DEFAULT_DEPRECATION_REASON=exports.GraphQLSkipDirective=exports.GraphQLIncludeDirective=exports.GraphQLDirective=exports.DirectiveLocation=undefined;

var _definition=__webpack_require__(3);

var _scalars=__webpack_require__(13);

var _invariant=__webpack_require__(7);

var _invariant2=_interopRequireDefault(_invariant);

var _assertValidName=__webpack_require__(50);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}









var DirectiveLocation=exports.DirectiveLocation={

QUERY:'QUERY',
MUTATION:'MUTATION',
SUBSCRIPTION:'SUBSCRIPTION',
FIELD:'FIELD',
FRAGMENT_DEFINITION:'FRAGMENT_DEFINITION',
FRAGMENT_SPREAD:'FRAGMENT_SPREAD',
INLINE_FRAGMENT:'INLINE_FRAGMENT',

SCHEMA:'SCHEMA',
SCALAR:'SCALAR',
OBJECT:'OBJECT',
FIELD_DEFINITION:'FIELD_DEFINITION',
ARGUMENT_DEFINITION:'ARGUMENT_DEFINITION',
INTERFACE:'INTERFACE',
UNION:'UNION',
ENUM:'ENUM',
ENUM_VALUE:'ENUM_VALUE',
INPUT_OBJECT:'INPUT_OBJECT',
INPUT_FIELD_DEFINITION:'INPUT_FIELD_DEFINITION'};








var GraphQLDirective=exports.GraphQLDirective=function GraphQLDirective(config){
_classCallCheck(this,GraphQLDirective);

(0,_invariant2.default)(config.name,'Directive must be named.');
(0,_assertValidName.assertValidName)(config.name);
(0,_invariant2.default)(Array.isArray(config.locations),'Must provide locations for directive.');
this.name=config.name;
this.description=config.description;
this.locations=config.locations;

var args=config.args;
if(!args){
this.args=[];
}else{
(0,_invariant2.default)(!Array.isArray(args),'@'+config.name+' args must be an object with argument names as keys.');
this.args=Object.keys(args).map(function(argName){
(0,_assertValidName.assertValidName)(argName);
var arg=args[argName];
(0,_invariant2.default)((0,_definition.isInputType)(arg.type),'@'+config.name+'('+argName+':) argument type must be '+('Input Type but got: '+String(arg.type)+'.'));
return{
name:argName,
description:arg.description===undefined?null:arg.description,
type:arg.type,
defaultValue:arg.defaultValue};

});
}
};




var GraphQLIncludeDirective=exports.GraphQLIncludeDirective=new GraphQLDirective({
name:'include',
description:'Directs the executor to include this field or fragment only when '+'the `if` argument is true.',
locations:[DirectiveLocation.FIELD,DirectiveLocation.FRAGMENT_SPREAD,DirectiveLocation.INLINE_FRAGMENT],
args:{
'if':{
type:new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
description:'Included when true.'}}});







var GraphQLSkipDirective=exports.GraphQLSkipDirective=new GraphQLDirective({
name:'skip',
description:'Directs the executor to skip this field or fragment when the `if` '+'argument is true.',
locations:[DirectiveLocation.FIELD,DirectiveLocation.FRAGMENT_SPREAD,DirectiveLocation.INLINE_FRAGMENT],
args:{
'if':{
type:new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
description:'Skipped when true.'}}});







var DEFAULT_DEPRECATION_REASON=exports.DEFAULT_DEPRECATION_REASON='No longer supported';




var GraphQLDeprecatedDirective=exports.GraphQLDeprecatedDirective=new GraphQLDirective({
name:'deprecated',
description:'Marks an element of a GraphQL schema as no longer supported.',
locations:[DirectiveLocation.FIELD_DEFINITION,DirectiveLocation.ENUM_VALUE],
args:{
reason:{
type:_scalars.GraphQLString,
description:'Explains why this element was deprecated, usually also including a '+'suggestion for how to access supported similar data. Formatted '+'in [Markdown](https://daringfireball.net/projects/markdown/).',
defaultValue:DEFAULT_DEPRECATION_REASON}}});







var specifiedDirectives=exports.specifiedDirectives=[GraphQLIncludeDirective,GraphQLSkipDirective,GraphQLDeprecatedDirective];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.TypeNameMetaFieldDef=exports.TypeMetaFieldDef=exports.SchemaMetaFieldDef=exports.__TypeKind=exports.TypeKind=exports.__EnumValue=exports.__InputValue=exports.__Field=exports.__Type=exports.__DirectiveLocation=exports.__Directive=exports.__Schema=undefined;

var _isInvalid=__webpack_require__(26);

var _isInvalid2=_interopRequireDefault(_isInvalid);

var _astFromValue=__webpack_require__(51);

var _printer=__webpack_require__(9);

var _definition=__webpack_require__(3);

var _scalars=__webpack_require__(13);

var _directives=__webpack_require__(10);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}










var __Schema=exports.__Schema=new _definition.GraphQLObjectType({
name:'__Schema',
isIntrospection:true,
description:'A GraphQL Schema defines the capabilities of a GraphQL server. It '+'exposes all available types and directives on the server, as well as '+'the entry points for query, mutation, and subscription operations.',
fields:function fields(){
return{
types:{
description:'A list of all types supported by this server.',
type:new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type))),
resolve:function resolve(schema){
var typeMap=schema.getTypeMap();
return Object.keys(typeMap).map(function(key){
return typeMap[key];
});
}},

queryType:{
description:'The type that query operations will be rooted at.',
type:new _definition.GraphQLNonNull(__Type),
resolve:function resolve(schema){
return schema.getQueryType();
}},

mutationType:{
description:'If this server supports mutation, the type that '+'mutation operations will be rooted at.',
type:__Type,
resolve:function resolve(schema){
return schema.getMutationType();
}},

subscriptionType:{
description:'If this server support subscription, the type that '+'subscription operations will be rooted at.',
type:__Type,
resolve:function resolve(schema){
return schema.getSubscriptionType();
}},

directives:{
description:'A list of all directives supported by this server.',
type:new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Directive))),
resolve:function resolve(schema){
return schema.getDirectives();
}}};


}});


var __Directive=exports.__Directive=new _definition.GraphQLObjectType({
name:'__Directive',
isIntrospection:true,
description:'A Directive provides a way to describe alternate runtime execution and '+'type validation behavior in a GraphQL document.'+'\n\nIn some cases, you need to provide options to alter GraphQL\'s '+'execution behavior in ways field arguments will not suffice, such as '+'conditionally including or skipping a field. Directives provide this by '+'describing additional information to the executor.',
fields:function fields(){
return{
name:{type:new _definition.GraphQLNonNull(_scalars.GraphQLString)},
description:{type:_scalars.GraphQLString},
locations:{
type:new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__DirectiveLocation)))},

args:{
type:new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue))),
resolve:function resolve(directive){
return directive.args||[];
}},



onOperation:{
deprecationReason:'Use `locations`.',
type:new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
resolve:function resolve(d){
return d.locations.indexOf(_directives.DirectiveLocation.QUERY)!==-1||d.locations.indexOf(_directives.DirectiveLocation.MUTATION)!==-1||d.locations.indexOf(_directives.DirectiveLocation.SUBSCRIPTION)!==-1;
}},

onFragment:{
deprecationReason:'Use `locations`.',
type:new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
resolve:function resolve(d){
return d.locations.indexOf(_directives.DirectiveLocation.FRAGMENT_SPREAD)!==-1||d.locations.indexOf(_directives.DirectiveLocation.INLINE_FRAGMENT)!==-1||d.locations.indexOf(_directives.DirectiveLocation.FRAGMENT_DEFINITION)!==-1;
}},

onField:{
deprecationReason:'Use `locations`.',
type:new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
resolve:function resolve(d){
return d.locations.indexOf(_directives.DirectiveLocation.FIELD)!==-1;
}}};


}});


var __DirectiveLocation=exports.__DirectiveLocation=new _definition.GraphQLEnumType({
name:'__DirectiveLocation',
isIntrospection:true,
description:'A Directive can be adjacent to many parts of the GraphQL language, a '+'__DirectiveLocation describes one such possible adjacencies.',
values:{
QUERY:{
value:_directives.DirectiveLocation.QUERY,
description:'Location adjacent to a query operation.'},

MUTATION:{
value:_directives.DirectiveLocation.MUTATION,
description:'Location adjacent to a mutation operation.'},

SUBSCRIPTION:{
value:_directives.DirectiveLocation.SUBSCRIPTION,
description:'Location adjacent to a subscription operation.'},

FIELD:{
value:_directives.DirectiveLocation.FIELD,
description:'Location adjacent to a field.'},

FRAGMENT_DEFINITION:{
value:_directives.DirectiveLocation.FRAGMENT_DEFINITION,
description:'Location adjacent to a fragment definition.'},

FRAGMENT_SPREAD:{
value:_directives.DirectiveLocation.FRAGMENT_SPREAD,
description:'Location adjacent to a fragment spread.'},

INLINE_FRAGMENT:{
value:_directives.DirectiveLocation.INLINE_FRAGMENT,
description:'Location adjacent to an inline fragment.'},

SCHEMA:{
value:_directives.DirectiveLocation.SCHEMA,
description:'Location adjacent to a schema definition.'},

SCALAR:{
value:_directives.DirectiveLocation.SCALAR,
description:'Location adjacent to a scalar definition.'},

OBJECT:{
value:_directives.DirectiveLocation.OBJECT,
description:'Location adjacent to an object type definition.'},

FIELD_DEFINITION:{
value:_directives.DirectiveLocation.FIELD_DEFINITION,
description:'Location adjacent to a field definition.'},

ARGUMENT_DEFINITION:{
value:_directives.DirectiveLocation.ARGUMENT_DEFINITION,
description:'Location adjacent to an argument definition.'},

INTERFACE:{
value:_directives.DirectiveLocation.INTERFACE,
description:'Location adjacent to an interface definition.'},

UNION:{
value:_directives.DirectiveLocation.UNION,
description:'Location adjacent to a union definition.'},

ENUM:{
value:_directives.DirectiveLocation.ENUM,
description:'Location adjacent to an enum definition.'},

ENUM_VALUE:{
value:_directives.DirectiveLocation.ENUM_VALUE,
description:'Location adjacent to an enum value definition.'},

INPUT_OBJECT:{
value:_directives.DirectiveLocation.INPUT_OBJECT,
description:'Location adjacent to an input object type definition.'},

INPUT_FIELD_DEFINITION:{
value:_directives.DirectiveLocation.INPUT_FIELD_DEFINITION,
description:'Location adjacent to an input object field definition.'}}});




var __Type=exports.__Type=new _definition.GraphQLObjectType({
name:'__Type',
isIntrospection:true,
description:'The fundamental unit of any GraphQL Schema is the type. There are '+'many kinds of types in GraphQL as represented by the `__TypeKind` enum.'+'\n\nDepending on the kind of a type, certain fields describe '+'information about that type. Scalar types provide no information '+'beyond a name and description, while Enum types provide their values. '+'Object and Interface types provide the fields they describe. Abstract '+'types, Union and Interface, provide the Object types possible '+'at runtime. List and NonNull types compose other types.',
fields:function fields(){
return{
kind:{
type:new _definition.GraphQLNonNull(__TypeKind),
resolve:function resolve(type){
if(type instanceof _definition.GraphQLScalarType){
return TypeKind.SCALAR;
}else if(type instanceof _definition.GraphQLObjectType){
return TypeKind.OBJECT;
}else if(type instanceof _definition.GraphQLInterfaceType){
return TypeKind.INTERFACE;
}else if(type instanceof _definition.GraphQLUnionType){
return TypeKind.UNION;
}else if(type instanceof _definition.GraphQLEnumType){
return TypeKind.ENUM;
}else if(type instanceof _definition.GraphQLInputObjectType){
return TypeKind.INPUT_OBJECT;
}else if(type instanceof _definition.GraphQLList){
return TypeKind.LIST;
}else if(type instanceof _definition.GraphQLNonNull){
return TypeKind.NON_NULL;
}
throw new Error('Unknown kind of type: '+type);
}},

name:{type:_scalars.GraphQLString},
description:{type:_scalars.GraphQLString},
fields:{
type:new _definition.GraphQLList(new _definition.GraphQLNonNull(__Field)),
args:{
includeDeprecated:{type:_scalars.GraphQLBoolean,defaultValue:false}},

resolve:function resolve(type,_ref){
var includeDeprecated=_ref.includeDeprecated;

if(type instanceof _definition.GraphQLObjectType||type instanceof _definition.GraphQLInterfaceType){
var _ret=function(){
var fieldMap=type.getFields();
var fields=Object.keys(fieldMap).map(function(fieldName){
return fieldMap[fieldName];
});
if(!includeDeprecated){
fields=fields.filter(function(field){
return!field.deprecationReason;
});
}
return{
v:fields};

}();

if(typeof _ret==="object")return _ret.v;
}
return null;
}},

interfaces:{
type:new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
resolve:function resolve(type){
if(type instanceof _definition.GraphQLObjectType){
return type.getInterfaces();
}
}},

possibleTypes:{
type:new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
resolve:function resolve(type,args,context,_ref2){
var schema=_ref2.schema;

if(type instanceof _definition.GraphQLInterfaceType||type instanceof _definition.GraphQLUnionType){
return schema.getPossibleTypes(type);
}
}},

enumValues:{
type:new _definition.GraphQLList(new _definition.GraphQLNonNull(__EnumValue)),
args:{
includeDeprecated:{type:_scalars.GraphQLBoolean,defaultValue:false}},

resolve:function resolve(type,_ref3){
var includeDeprecated=_ref3.includeDeprecated;

if(type instanceof _definition.GraphQLEnumType){
var values=type.getValues();
if(!includeDeprecated){
values=values.filter(function(value){
return!value.deprecationReason;
});
}
return values;
}
}},

inputFields:{
type:new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue)),
resolve:function resolve(type){
if(type instanceof _definition.GraphQLInputObjectType){
var _ret2=function(){
var fieldMap=type.getFields();
return{
v:Object.keys(fieldMap).map(function(fieldName){
return fieldMap[fieldName];
})};

}();

if(typeof _ret2==="object")return _ret2.v;
}
}},

ofType:{type:__Type}};

}});


var __Field=exports.__Field=new _definition.GraphQLObjectType({
name:'__Field',
isIntrospection:true,
description:'Object and Interface types are described by a list of Fields, each of '+'which has a name, potentially a list of arguments, and a return type.',
fields:function fields(){
return{
name:{type:new _definition.GraphQLNonNull(_scalars.GraphQLString)},
description:{type:_scalars.GraphQLString},
args:{
type:new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue))),
resolve:function resolve(field){
return field.args||[];
}},

type:{type:new _definition.GraphQLNonNull(__Type)},
isDeprecated:{type:new _definition.GraphQLNonNull(_scalars.GraphQLBoolean)},
deprecationReason:{
type:_scalars.GraphQLString}};


}});


var __InputValue=exports.__InputValue=new _definition.GraphQLObjectType({
name:'__InputValue',
isIntrospection:true,
description:'Arguments provided to Fields or Directives and the input fields of an '+'InputObject are represented as Input Values which describe their type '+'and optionally a default value.',
fields:function fields(){
return{
name:{type:new _definition.GraphQLNonNull(_scalars.GraphQLString)},
description:{type:_scalars.GraphQLString},
type:{type:new _definition.GraphQLNonNull(__Type)},
defaultValue:{
type:_scalars.GraphQLString,
description:'A GraphQL-formatted string representing the default value for this '+'input value.',
resolve:function resolve(inputVal){
return(0,_isInvalid2.default)(inputVal.defaultValue)?null:(0,_printer.print)((0,_astFromValue.astFromValue)(inputVal.defaultValue,inputVal.type));
}}};


}});


var __EnumValue=exports.__EnumValue=new _definition.GraphQLObjectType({
name:'__EnumValue',
isIntrospection:true,
description:'One possible value for a given Enum. Enum values are unique values, not '+'a placeholder for a string or numeric value. However an Enum value is '+'returned in a JSON response as a string.',
fields:function fields(){
return{
name:{type:new _definition.GraphQLNonNull(_scalars.GraphQLString)},
description:{type:_scalars.GraphQLString},
isDeprecated:{type:new _definition.GraphQLNonNull(_scalars.GraphQLBoolean)},
deprecationReason:{
type:_scalars.GraphQLString}};


}});


var TypeKind=exports.TypeKind={
SCALAR:'SCALAR',
OBJECT:'OBJECT',
INTERFACE:'INTERFACE',
UNION:'UNION',
ENUM:'ENUM',
INPUT_OBJECT:'INPUT_OBJECT',
LIST:'LIST',
NON_NULL:'NON_NULL'};


var __TypeKind=exports.__TypeKind=new _definition.GraphQLEnumType({
name:'__TypeKind',
isIntrospection:true,
description:'An enum describing what kind of type a given `__Type` is.',
values:{
SCALAR:{
value:TypeKind.SCALAR,
description:'Indicates this type is a scalar.'},

OBJECT:{
value:TypeKind.OBJECT,
description:'Indicates this type is an object. '+'`fields` and `interfaces` are valid fields.'},

INTERFACE:{
value:TypeKind.INTERFACE,
description:'Indicates this type is an interface. '+'`fields` and `possibleTypes` are valid fields.'},

UNION:{
value:TypeKind.UNION,
description:'Indicates this type is a union. '+'`possibleTypes` is a valid field.'},

ENUM:{
value:TypeKind.ENUM,
description:'Indicates this type is an enum. '+'`enumValues` is a valid field.'},

INPUT_OBJECT:{
value:TypeKind.INPUT_OBJECT,
description:'Indicates this type is an input object. '+'`inputFields` is a valid field.'},

LIST:{
value:TypeKind.LIST,
description:'Indicates this type is a list. '+'`ofType` is a valid field.'},

NON_NULL:{
value:TypeKind.NON_NULL,
description:'Indicates this type is a non-null. '+'`ofType` is a valid field.'}}});









var SchemaMetaFieldDef=exports.SchemaMetaFieldDef={
name:'__schema',
type:new _definition.GraphQLNonNull(__Schema),
description:'Access the current type schema of this server.',
args:[],
resolve:function resolve(source,args,context,_ref4){
var schema=_ref4.schema;
return schema;
}};


var TypeMetaFieldDef=exports.TypeMetaFieldDef={
name:'__type',
type:__Type,
description:'Request the type information of a single type.',
args:[{name:'name',type:new _definition.GraphQLNonNull(_scalars.GraphQLString)}],
resolve:function resolve(source,_ref5,context,_ref6){
var name=_ref5.name;
var schema=_ref6.schema;
return schema.getType(name);
}};


var TypeNameMetaFieldDef=exports.TypeNameMetaFieldDef={
name:'__typename',
type:new _definition.GraphQLNonNull(_scalars.GraphQLString),
description:'The name of the current Object type at runtime.',
args:[],
resolve:function resolve(source,args,context,_ref7){
var parentType=_ref7.parentType;
return parentType.name;
}};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.default=isNullish;













function isNullish(value){
return value===null||value===undefined||value!==value;
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.GraphQLID=exports.GraphQLBoolean=exports.GraphQLString=exports.GraphQLFloat=exports.GraphQLInt=undefined;

var _definition=__webpack_require__(3);

var _kinds=__webpack_require__(6);

var Kind=_interopRequireWildcard(_kinds);

function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}
















var MAX_INT=2147483647;
var MIN_INT=-2147483648;

function coerceInt(value){
if(value===''){
throw new TypeError('Int cannot represent non 32-bit signed integer value: (empty string)');
}
var num=Number(value);
if(num===num&&num<=MAX_INT&&num>=MIN_INT){
return(num<0?Math.ceil:Math.floor)(num);
}
throw new TypeError('Int cannot represent non 32-bit signed integer value: '+String(value));
}

var GraphQLInt=exports.GraphQLInt=new _definition.GraphQLScalarType({
name:'Int',
description:'The `Int` scalar type represents non-fractional signed whole numeric '+'values. Int can represent values between -(2^31) and 2^31 - 1. ',
serialize:coerceInt,
parseValue:coerceInt,
parseLiteral:function parseLiteral(ast){
if(ast.kind===Kind.INT){
var num=parseInt(ast.value,10);
if(num<=MAX_INT&&num>=MIN_INT){
return num;
}
}
return null;
}});


function coerceFloat(value){
if(value===''){
throw new TypeError('Float cannot represent non numeric value: (empty string)');
}
var num=Number(value);
if(num===num){
return num;
}
throw new TypeError('Float cannot represent non numeric value: '+String(value));
}

var GraphQLFloat=exports.GraphQLFloat=new _definition.GraphQLScalarType({
name:'Float',
description:'The `Float` scalar type represents signed double-precision fractional '+'values as specified by '+'[IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). ',
serialize:coerceFloat,
parseValue:coerceFloat,
parseLiteral:function parseLiteral(ast){
return ast.kind===Kind.FLOAT||ast.kind===Kind.INT?parseFloat(ast.value):null;
}});


var GraphQLString=exports.GraphQLString=new _definition.GraphQLScalarType({
name:'String',
description:'The `String` scalar type represents textual data, represented as UTF-8 '+'character sequences. The String type is most often used by GraphQL to '+'represent free-form human-readable text.',
serialize:String,
parseValue:String,
parseLiteral:function parseLiteral(ast){
return ast.kind===Kind.STRING?ast.value:null;
}});


var GraphQLBoolean=exports.GraphQLBoolean=new _definition.GraphQLScalarType({
name:'Boolean',
description:'The `Boolean` scalar type represents `true` or `false`.',
serialize:Boolean,
parseValue:Boolean,
parseLiteral:function parseLiteral(ast){
return ast.kind===Kind.BOOLEAN?ast.value:null;
}});


var GraphQLID=exports.GraphQLID=new _definition.GraphQLScalarType({
name:'ID',
description:'The `ID` scalar type represents a unique identifier, often used to '+'refetch an object or as key for a cache. The ID type appears in a JSON '+'response as a String; however, it is not intended to be human-readable. '+'When expected as an input type, any string (such as `"4"`) or integer '+'(such as `4`) input value will be accepted as an ID.',
serialize:String,
parseValue:String,
parseLiteral:function parseLiteral(ast){
return ast.kind===Kind.STRING||ast.kind===Kind.INT?ast.value:null;
}});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.GraphQLSchema=undefined;

var _definition=__webpack_require__(3);

var _directives=__webpack_require__(10);

var _introspection=__webpack_require__(11);

var _find=__webpack_require__(17);

var _find2=_interopRequireDefault(_find);

var _invariant=__webpack_require__(7);

var _invariant2=_interopRequireDefault(_invariant);

var _typeComparators=__webpack_require__(36);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}



































var GraphQLSchema=exports.GraphQLSchema=function(){
function GraphQLSchema(config){
var _this=this;

_classCallCheck(this,GraphQLSchema);

(0,_invariant2.default)(typeof config==='object','Must provide configuration object.');

(0,_invariant2.default)(config.query instanceof _definition.GraphQLObjectType,'Schema query must be Object Type but got: '+String(config.query)+'.');
this._queryType=config.query;

(0,_invariant2.default)(!config.mutation||config.mutation instanceof _definition.GraphQLObjectType,'Schema mutation must be Object Type if provided but got: '+String(config.mutation)+'.');
this._mutationType=config.mutation;

(0,_invariant2.default)(!config.subscription||config.subscription instanceof _definition.GraphQLObjectType,'Schema subscription must be Object Type if provided but got: '+String(config.subscription)+'.');
this._subscriptionType=config.subscription;

(0,_invariant2.default)(!config.types||Array.isArray(config.types),'Schema types must be Array if provided but got: '+String(config.types)+'.');

(0,_invariant2.default)(!config.directives||Array.isArray(config.directives)&&config.directives.every(function(directive){
return directive instanceof _directives.GraphQLDirective;
}),'Schema directives must be Array<GraphQLDirective> if provided but got: '+String(config.directives)+'.');

this._directives=config.directives||_directives.specifiedDirectives;


var initialTypes=[this.getQueryType(),this.getMutationType(),this.getSubscriptionType(),_introspection.__Schema];

var types=config.types;
if(types){
initialTypes=initialTypes.concat(types);
}

this._typeMap=initialTypes.reduce(typeMapReducer,Object.create(null));


this._implementations=Object.create(null);
Object.keys(this._typeMap).forEach(function(typeName){
var type=_this._typeMap[typeName];
if(type instanceof _definition.GraphQLObjectType){
type.getInterfaces().forEach(function(iface){
var impls=_this._implementations[iface.name];
if(impls){
impls.push(type);
}else{
_this._implementations[iface.name]=[type];
}
});
}
});


Object.keys(this._typeMap).forEach(function(typeName){
var type=_this._typeMap[typeName];
if(type instanceof _definition.GraphQLObjectType){
type.getInterfaces().forEach(function(iface){
return assertObjectImplementsInterface(_this,type,iface);
});
}
});
}

GraphQLSchema.prototype.getQueryType=function getQueryType(){
return this._queryType;
};

GraphQLSchema.prototype.getMutationType=function getMutationType(){
return this._mutationType;
};

GraphQLSchema.prototype.getSubscriptionType=function getSubscriptionType(){
return this._subscriptionType;
};

GraphQLSchema.prototype.getTypeMap=function getTypeMap(){
return this._typeMap;
};

GraphQLSchema.prototype.getType=function getType(name){
return this.getTypeMap()[name];
};

GraphQLSchema.prototype.getPossibleTypes=function getPossibleTypes(abstractType){
if(abstractType instanceof _definition.GraphQLUnionType){
return abstractType.getTypes();
}
(0,_invariant2.default)(abstractType instanceof _definition.GraphQLInterfaceType);
return this._implementations[abstractType.name];
};

GraphQLSchema.prototype.isPossibleType=function isPossibleType(abstractType,possibleType){
var possibleTypeMap=this._possibleTypeMap;
if(!possibleTypeMap){
this._possibleTypeMap=possibleTypeMap=Object.create(null);
}

if(!possibleTypeMap[abstractType.name]){
var possibleTypes=this.getPossibleTypes(abstractType);
(0,_invariant2.default)(Array.isArray(possibleTypes),'Could not find possible implementing types for '+abstractType.name+' '+'in schema. Check that schema.types is defined and is an array of '+'all possible types in the schema.');
possibleTypeMap[abstractType.name]=possibleTypes.reduce(function(map,type){
return map[type.name]=true,map;
},Object.create(null));
}

return Boolean(possibleTypeMap[abstractType.name][possibleType.name]);
};

GraphQLSchema.prototype.getDirectives=function getDirectives(){
return this._directives;
};

GraphQLSchema.prototype.getDirective=function getDirective(name){
return(0,_find2.default)(this.getDirectives(),function(directive){
return directive.name===name;
});
};

return GraphQLSchema;
}();

function typeMapReducer(map,type){
if(!type){
return map;
}
if(type instanceof _definition.GraphQLList||type instanceof _definition.GraphQLNonNull){
return typeMapReducer(map,type.ofType);
}
if(map[type.name]){
(0,_invariant2.default)(map[type.name]===type,'Schema must contain unique named types but contains multiple '+('types named "'+type.name+'".'));
return map;
}
map[type.name]=type;

var reducedMap=map;

if(type instanceof _definition.GraphQLUnionType){
reducedMap=type.getTypes().reduce(typeMapReducer,reducedMap);
}

if(type instanceof _definition.GraphQLObjectType){
reducedMap=type.getInterfaces().reduce(typeMapReducer,reducedMap);
}

if(type instanceof _definition.GraphQLObjectType||type instanceof _definition.GraphQLInterfaceType){
(function(){
var fieldMap=type.getFields();
Object.keys(fieldMap).forEach(function(fieldName){
var field=fieldMap[fieldName];

if(field.args){
var fieldArgTypes=field.args.map(function(arg){
return arg.type;
});
reducedMap=fieldArgTypes.reduce(typeMapReducer,reducedMap);
}
reducedMap=typeMapReducer(reducedMap,field.type);
});
})();
}

if(type instanceof _definition.GraphQLInputObjectType){
(function(){
var fieldMap=type.getFields();
Object.keys(fieldMap).forEach(function(fieldName){
var field=fieldMap[fieldName];
reducedMap=typeMapReducer(reducedMap,field.type);
});
})();
}

return reducedMap;
}

function assertObjectImplementsInterface(schema,object,iface){
var objectFieldMap=object.getFields();
var ifaceFieldMap=iface.getFields();


Object.keys(ifaceFieldMap).forEach(function(fieldName){
var objectField=objectFieldMap[fieldName];
var ifaceField=ifaceFieldMap[fieldName];


(0,_invariant2.default)(objectField,'"'+iface.name+'" expects field "'+fieldName+'" but "'+object.name+'" '+'does not provide it.');



(0,_invariant2.default)((0,_typeComparators.isTypeSubTypeOf)(schema,objectField.type,ifaceField.type),iface.name+'.'+fieldName+' expects type "'+String(ifaceField.type)+'" '+'but '+(object.name+'.'+fieldName+' provides type "'+String(objectField.type)+'".'));


ifaceField.args.forEach(function(ifaceArg){
var argName=ifaceArg.name;
var objectArg=(0,_find2.default)(objectField.args,function(arg){
return arg.name===argName;
});


(0,_invariant2.default)(objectArg,iface.name+'.'+fieldName+' expects argument "'+argName+'" but '+(object.name+'.'+fieldName+' does not provide it.'));



(0,_invariant2.default)((0,_typeComparators.isEqualType)(ifaceArg.type,objectArg.type),iface.name+'.'+fieldName+'('+argName+':) expects type '+('"'+String(ifaceArg.type)+'" but ')+(object.name+'.'+fieldName+'('+argName+':) provides type ')+('"'+String(objectArg.type)+'".'));
});


objectField.args.forEach(function(objectArg){
var argName=objectArg.name;
var ifaceArg=(0,_find2.default)(ifaceField.args,function(arg){
return arg.name===argName;
});
if(!ifaceArg){
(0,_invariant2.default)(!(objectArg.type instanceof _definition.GraphQLNonNull),object.name+'.'+fieldName+'('+argName+':) is of required type '+('"'+String(objectArg.type)+'" but is not also provided by the ')+('interface '+iface.name+'.'+fieldName+'.'));
}
});
});
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.typeFromAST=typeFromAST;

var _invariant=__webpack_require__(7);

var _invariant2=_interopRequireDefault(_invariant);

var _kinds=__webpack_require__(6);

var _definition=__webpack_require__(3);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

function typeFromAST(schema,typeNode){
var innerType=void 0;
if(typeNode.kind===_kinds.LIST_TYPE){
innerType=typeFromAST(schema,typeNode.type);
return innerType&&new _definition.GraphQLList(innerType);
}
if(typeNode.kind===_kinds.NON_NULL_TYPE){
innerType=typeFromAST(schema,typeNode.type);
return innerType&&new _definition.GraphQLNonNull(innerType);
}
(0,_invariant2.default)(typeNode.kind===_kinds.NAMED_TYPE,'Must be a named type.');
return schema.getType(typeNode.name.value);
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule=true;
exports.createPath=exports.parsePath=exports.getQueryStringValueFromPath=exports.stripQueryStringValueFromPath=exports.addQueryStringValueToPath=undefined;

var _warning=__webpack_require__(20);

var _warning2=_interopRequireDefault(_warning);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var addQueryStringValueToPath=exports.addQueryStringValueToPath=function addQueryStringValueToPath(path,key,value){
var _parsePath=parsePath(path);

var pathname=_parsePath.pathname;
var search=_parsePath.search;
var hash=_parsePath.hash;


return createPath({
pathname:pathname,
search:search+(search.indexOf('?')===-1?'?':'&')+key+'='+value,
hash:hash});

};

var stripQueryStringValueFromPath=exports.stripQueryStringValueFromPath=function stripQueryStringValueFromPath(path,key){
var _parsePath2=parsePath(path);

var pathname=_parsePath2.pathname;
var search=_parsePath2.search;
var hash=_parsePath2.hash;


return createPath({
pathname:pathname,
search:search.replace(new RegExp('([?&])'+key+'=[a-zA-Z0-9]+(&?)'),function(match,prefix,suffix){
return prefix==='?'?prefix:suffix;
}),
hash:hash});

};

var getQueryStringValueFromPath=exports.getQueryStringValueFromPath=function getQueryStringValueFromPath(path,key){
var _parsePath3=parsePath(path);

var search=_parsePath3.search;

var match=search.match(new RegExp('[?&]'+key+'=([a-zA-Z0-9]+)'));
return match&&match[1];
};

var extractPath=function extractPath(string){
var match=string.match(/^(https?:)?\/\/[^\/]*/);
return match==null?string:string.substring(match[0].length);
};

var parsePath=exports.parsePath=function parsePath(path){
var pathname=extractPath(path);
var search='';
var hash='';

process.env.NODE_ENV!=='production'?(0,_warning2.default)(path===pathname,'A path must be pathname + search + hash only, not a full URL like "%s"',path):void 0;

var hashIndex=pathname.indexOf('#');
if(hashIndex!==-1){
hash=pathname.substring(hashIndex);
pathname=pathname.substring(0,hashIndex);
}

var searchIndex=pathname.indexOf('?');
if(searchIndex!==-1){
search=pathname.substring(searchIndex);
pathname=pathname.substring(0,searchIndex);
}

if(pathname==='')pathname='/';

return{
pathname:pathname,
search:search,
hash:hash};

};

var createPath=exports.createPath=function createPath(location){
if(location==null||typeof location==='string')return location;

var basename=location.basename;
var pathname=location.pathname;
var search=location.search;
var hash=location.hash;

var path=(basename||'')+pathname;

if(search&&search!=='?')path+=search;

if(hash)path+=hash;

return path;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.default=find;










function find(list,predicate){
for(var i=0;i<list.length;i++){
if(predicate(list[i])){
return list[i];
}
}
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule=true;
exports.locationsAreEqual=exports.statesAreEqual=exports.createLocation=exports.createQuery=undefined;

var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};

var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _invariant=__webpack_require__(24);

var _invariant2=_interopRequireDefault(_invariant);

var _warning=__webpack_require__(20);

var _warning2=_interopRequireDefault(_warning);

var _PathUtils=__webpack_require__(16);

var _Actions=__webpack_require__(37);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var createQuery=exports.createQuery=function createQuery(props){
return _extends(Object.create(null),props);
};

var createLocation=exports.createLocation=function createLocation(){
var input=arguments.length<=0||arguments[0]===undefined?'/':arguments[0];
var action=arguments.length<=1||arguments[1]===undefined?_Actions.POP:arguments[1];
var key=arguments.length<=2||arguments[2]===undefined?null:arguments[2];

var object=typeof input==='string'?(0,_PathUtils.parsePath)(input):input;

process.env.NODE_ENV!=='production'?(0,_warning2.default)(!object.path,'Location descriptor objects should have a `pathname`, not a `path`.'):void 0;

var pathname=object.pathname||'/';
var search=object.search||'';
var hash=object.hash||'';
var state=object.state;

return{
pathname:pathname,
search:search,
hash:hash,
state:state,
action:action,
key:key};

};

var isDate=function isDate(object){
return Object.prototype.toString.call(object)==='[object Date]';
};

var statesAreEqual=exports.statesAreEqual=function statesAreEqual(a,b){
if(a===b)return true;

var typeofA=typeof a==='undefined'?'undefined':_typeof(a);
var typeofB=typeof b==='undefined'?'undefined':_typeof(b);

if(typeofA!==typeofB)return false;

!(typeofA!=='function')?process.env.NODE_ENV!=='production'?(0,_invariant2.default)(false,'You must not store functions in location state'):(0,_invariant2.default)(false):void 0;


if(typeofA==='object'){
!!(isDate(a)&&isDate(b))?process.env.NODE_ENV!=='production'?(0,_invariant2.default)(false,'You must not store Date objects in location state'):(0,_invariant2.default)(false):void 0;

if(!Array.isArray(a)){
var keysofA=Object.keys(a);
var keysofB=Object.keys(b);
return keysofA.length===keysofB.length&&keysofA.every(function(key){
return statesAreEqual(a[key],b[key]);
});
}

return Array.isArray(b)&&a.length===b.length&&a.every(function(item,index){
return statesAreEqual(item,b[index]);
});
}



return false;
};

var locationsAreEqual=exports.locationsAreEqual=function locationsAreEqual(a,b){
return a.key===b.key&&

a.pathname===b.pathname&&a.search===b.search&&a.hash===b.hash&&statesAreEqual(a.state,b.state);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.isAndroid=exports.isBrowser=exports.isIos=exports.os=exports.tinyColor=undefined;var _colors=__webpack_require__(203);









Object.keys(_colors).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _colors[key];}});});var _helpers=__webpack_require__(204);
Object.keys(_helpers).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _helpers[key];}});});var _route=__webpack_require__(207);
Object.keys(_route).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _route[key];}});});var _reactNative=__webpack_require__(0);var _tinycolor=__webpack_require__(95);var _tinycolor2=_interopRequireDefault(_tinycolor);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var tinyColor=exports.tinyColor=_tinycolor2.default;var os=exports.os=_reactNative.Platform.OS;var isIos=exports.isIos=os==='ios';var isBrowser=exports.isBrowser=os==='web';var isAndroid=exports.isAndroid=os==='android';

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(38);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});


var _graphql=__webpack_require__(125);

Object.defineProperty(exports,'graphql',{
enumerable:true,
get:function get(){
return _graphql.graphql;
}});


var _type=__webpack_require__(127);

Object.defineProperty(exports,'GraphQLSchema',{
enumerable:true,
get:function get(){
return _type.GraphQLSchema;
}});

Object.defineProperty(exports,'GraphQLScalarType',{
enumerable:true,
get:function get(){
return _type.GraphQLScalarType;
}});

Object.defineProperty(exports,'GraphQLObjectType',{
enumerable:true,
get:function get(){
return _type.GraphQLObjectType;
}});

Object.defineProperty(exports,'GraphQLInterfaceType',{
enumerable:true,
get:function get(){
return _type.GraphQLInterfaceType;
}});

Object.defineProperty(exports,'GraphQLUnionType',{
enumerable:true,
get:function get(){
return _type.GraphQLUnionType;
}});

Object.defineProperty(exports,'GraphQLEnumType',{
enumerable:true,
get:function get(){
return _type.GraphQLEnumType;
}});

Object.defineProperty(exports,'GraphQLInputObjectType',{
enumerable:true,
get:function get(){
return _type.GraphQLInputObjectType;
}});

Object.defineProperty(exports,'GraphQLList',{
enumerable:true,
get:function get(){
return _type.GraphQLList;
}});

Object.defineProperty(exports,'GraphQLNonNull',{
enumerable:true,
get:function get(){
return _type.GraphQLNonNull;
}});

Object.defineProperty(exports,'GraphQLDirective',{
enumerable:true,
get:function get(){
return _type.GraphQLDirective;
}});

Object.defineProperty(exports,'TypeKind',{
enumerable:true,
get:function get(){
return _type.TypeKind;
}});

Object.defineProperty(exports,'DirectiveLocation',{
enumerable:true,
get:function get(){
return _type.DirectiveLocation;
}});

Object.defineProperty(exports,'GraphQLInt',{
enumerable:true,
get:function get(){
return _type.GraphQLInt;
}});

Object.defineProperty(exports,'GraphQLFloat',{
enumerable:true,
get:function get(){
return _type.GraphQLFloat;
}});

Object.defineProperty(exports,'GraphQLString',{
enumerable:true,
get:function get(){
return _type.GraphQLString;
}});

Object.defineProperty(exports,'GraphQLBoolean',{
enumerable:true,
get:function get(){
return _type.GraphQLBoolean;
}});

Object.defineProperty(exports,'GraphQLID',{
enumerable:true,
get:function get(){
return _type.GraphQLID;
}});

Object.defineProperty(exports,'specifiedDirectives',{
enumerable:true,
get:function get(){
return _type.specifiedDirectives;
}});

Object.defineProperty(exports,'GraphQLIncludeDirective',{
enumerable:true,
get:function get(){
return _type.GraphQLIncludeDirective;
}});

Object.defineProperty(exports,'GraphQLSkipDirective',{
enumerable:true,
get:function get(){
return _type.GraphQLSkipDirective;
}});

Object.defineProperty(exports,'GraphQLDeprecatedDirective',{
enumerable:true,
get:function get(){
return _type.GraphQLDeprecatedDirective;
}});

Object.defineProperty(exports,'DEFAULT_DEPRECATION_REASON',{
enumerable:true,
get:function get(){
return _type.DEFAULT_DEPRECATION_REASON;
}});

Object.defineProperty(exports,'SchemaMetaFieldDef',{
enumerable:true,
get:function get(){
return _type.SchemaMetaFieldDef;
}});

Object.defineProperty(exports,'TypeMetaFieldDef',{
enumerable:true,
get:function get(){
return _type.TypeMetaFieldDef;
}});

Object.defineProperty(exports,'TypeNameMetaFieldDef',{
enumerable:true,
get:function get(){
return _type.TypeNameMetaFieldDef;
}});

Object.defineProperty(exports,'__Schema',{
enumerable:true,
get:function get(){
return _type.__Schema;
}});

Object.defineProperty(exports,'__Directive',{
enumerable:true,
get:function get(){
return _type.__Directive;
}});

Object.defineProperty(exports,'__DirectiveLocation',{
enumerable:true,
get:function get(){
return _type.__DirectiveLocation;
}});

Object.defineProperty(exports,'__Type',{
enumerable:true,
get:function get(){
return _type.__Type;
}});

Object.defineProperty(exports,'__Field',{
enumerable:true,
get:function get(){
return _type.__Field;
}});

Object.defineProperty(exports,'__InputValue',{
enumerable:true,
get:function get(){
return _type.__InputValue;
}});

Object.defineProperty(exports,'__EnumValue',{
enumerable:true,
get:function get(){
return _type.__EnumValue;
}});

Object.defineProperty(exports,'__TypeKind',{
enumerable:true,
get:function get(){
return _type.__TypeKind;
}});

Object.defineProperty(exports,'isType',{
enumerable:true,
get:function get(){
return _type.isType;
}});

Object.defineProperty(exports,'isInputType',{
enumerable:true,
get:function get(){
return _type.isInputType;
}});

Object.defineProperty(exports,'isOutputType',{
enumerable:true,
get:function get(){
return _type.isOutputType;
}});

Object.defineProperty(exports,'isLeafType',{
enumerable:true,
get:function get(){
return _type.isLeafType;
}});

Object.defineProperty(exports,'isCompositeType',{
enumerable:true,
get:function get(){
return _type.isCompositeType;
}});

Object.defineProperty(exports,'isAbstractType',{
enumerable:true,
get:function get(){
return _type.isAbstractType;
}});

Object.defineProperty(exports,'isNamedType',{
enumerable:true,
get:function get(){
return _type.isNamedType;
}});

Object.defineProperty(exports,'assertType',{
enumerable:true,
get:function get(){
return _type.assertType;
}});

Object.defineProperty(exports,'assertInputType',{
enumerable:true,
get:function get(){
return _type.assertInputType;
}});

Object.defineProperty(exports,'assertOutputType',{
enumerable:true,
get:function get(){
return _type.assertOutputType;
}});

Object.defineProperty(exports,'assertLeafType',{
enumerable:true,
get:function get(){
return _type.assertLeafType;
}});

Object.defineProperty(exports,'assertCompositeType',{
enumerable:true,
get:function get(){
return _type.assertCompositeType;
}});

Object.defineProperty(exports,'assertAbstractType',{
enumerable:true,
get:function get(){
return _type.assertAbstractType;
}});

Object.defineProperty(exports,'assertNamedType',{
enumerable:true,
get:function get(){
return _type.assertNamedType;
}});

Object.defineProperty(exports,'getNullableType',{
enumerable:true,
get:function get(){
return _type.getNullableType;
}});

Object.defineProperty(exports,'getNamedType',{
enumerable:true,
get:function get(){
return _type.getNamedType;
}});


var _language=__webpack_require__(126);

Object.defineProperty(exports,'Source',{
enumerable:true,
get:function get(){
return _language.Source;
}});

Object.defineProperty(exports,'getLocation',{
enumerable:true,
get:function get(){
return _language.getLocation;
}});

Object.defineProperty(exports,'parse',{
enumerable:true,
get:function get(){
return _language.parse;
}});

Object.defineProperty(exports,'parseValue',{
enumerable:true,
get:function get(){
return _language.parseValue;
}});

Object.defineProperty(exports,'parseType',{
enumerable:true,
get:function get(){
return _language.parseType;
}});

Object.defineProperty(exports,'print',{
enumerable:true,
get:function get(){
return _language.print;
}});

Object.defineProperty(exports,'visit',{
enumerable:true,
get:function get(){
return _language.visit;
}});

Object.defineProperty(exports,'visitInParallel',{
enumerable:true,
get:function get(){
return _language.visitInParallel;
}});

Object.defineProperty(exports,'visitWithTypeInfo',{
enumerable:true,
get:function get(){
return _language.visitWithTypeInfo;
}});

Object.defineProperty(exports,'Kind',{
enumerable:true,
get:function get(){
return _language.Kind;
}});

Object.defineProperty(exports,'TokenKind',{
enumerable:true,
get:function get(){
return _language.TokenKind;
}});

Object.defineProperty(exports,'BREAK',{
enumerable:true,
get:function get(){
return _language.BREAK;
}});


var _execution=__webpack_require__(124);

Object.defineProperty(exports,'execute',{
enumerable:true,
get:function get(){
return _execution.execute;
}});

Object.defineProperty(exports,'defaultFieldResolver',{
enumerable:true,
get:function get(){
return _execution.defaultFieldResolver;
}});

Object.defineProperty(exports,'responsePathAsArray',{
enumerable:true,
get:function get(){
return _execution.responsePathAsArray;
}});


var _validation=__webpack_require__(138);

Object.defineProperty(exports,'validate',{
enumerable:true,
get:function get(){
return _validation.validate;
}});

Object.defineProperty(exports,'ValidationContext',{
enumerable:true,
get:function get(){
return _validation.ValidationContext;
}});

Object.defineProperty(exports,'specifiedRules',{
enumerable:true,
get:function get(){
return _validation.specifiedRules;
}});


var _error=__webpack_require__(2);

Object.defineProperty(exports,'GraphQLError',{
enumerable:true,
get:function get(){
return _error.GraphQLError;
}});

Object.defineProperty(exports,'formatError',{
enumerable:true,
get:function get(){
return _error.formatError;
}});


var _utilities=__webpack_require__(134);

Object.defineProperty(exports,'introspectionQuery',{
enumerable:true,
get:function get(){
return _utilities.introspectionQuery;
}});

Object.defineProperty(exports,'getOperationAST',{
enumerable:true,
get:function get(){
return _utilities.getOperationAST;
}});

Object.defineProperty(exports,'buildClientSchema',{
enumerable:true,
get:function get(){
return _utilities.buildClientSchema;
}});

Object.defineProperty(exports,'buildASTSchema',{
enumerable:true,
get:function get(){
return _utilities.buildASTSchema;
}});

Object.defineProperty(exports,'buildSchema',{
enumerable:true,
get:function get(){
return _utilities.buildSchema;
}});

Object.defineProperty(exports,'extendSchema',{
enumerable:true,
get:function get(){
return _utilities.extendSchema;
}});

Object.defineProperty(exports,'printSchema',{
enumerable:true,
get:function get(){
return _utilities.printSchema;
}});

Object.defineProperty(exports,'printType',{
enumerable:true,
get:function get(){
return _utilities.printType;
}});

Object.defineProperty(exports,'typeFromAST',{
enumerable:true,
get:function get(){
return _utilities.typeFromAST;
}});

Object.defineProperty(exports,'valueFromAST',{
enumerable:true,
get:function get(){
return _utilities.valueFromAST;
}});

Object.defineProperty(exports,'astFromValue',{
enumerable:true,
get:function get(){
return _utilities.astFromValue;
}});

Object.defineProperty(exports,'TypeInfo',{
enumerable:true,
get:function get(){
return _utilities.TypeInfo;
}});

Object.defineProperty(exports,'isValidJSValue',{
enumerable:true,
get:function get(){
return _utilities.isValidJSValue;
}});

Object.defineProperty(exports,'isValidLiteralValue',{
enumerable:true,
get:function get(){
return _utilities.isValidLiteralValue;
}});

Object.defineProperty(exports,'concatAST',{
enumerable:true,
get:function get(){
return _utilities.concatAST;
}});

Object.defineProperty(exports,'separateOperations',{
enumerable:true,
get:function get(){
return _utilities.separateOperations;
}});

Object.defineProperty(exports,'isEqualType',{
enumerable:true,
get:function get(){
return _utilities.isEqualType;
}});

Object.defineProperty(exports,'isTypeSubTypeOf',{
enumerable:true,
get:function get(){
return _utilities.isTypeSubTypeOf;
}});

Object.defineProperty(exports,'doTypesOverlap',{
enumerable:true,
get:function get(){
return _utilities.doTypesOverlap;
}});

Object.defineProperty(exports,'assertValidName',{
enumerable:true,
get:function get(){
return _utilities.assertValidName;
}});

Object.defineProperty(exports,'findBreakingChanges',{
enumerable:true,
get:function get(){
return _utilities.findBreakingChanges;
}});

Object.defineProperty(exports,'findDeprecatedUsages',{
enumerable:true,
get:function get(){
return _utilities.findDeprecatedUsages;
}});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.default=keyMap;

































function keyMap(list,keyFn){
return list.reduce(function(map,item){
return map[keyFn(item)]=item,map;
},{});
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _const=__webpack_require__(238);Object.keys(_const).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _const[key];}});});var _wire=__webpack_require__(239);
Object.keys(_wire).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _wire[key];}});});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(14);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.GraphQLError=GraphQLError;

var _location=__webpack_require__(47);







function GraphQLError(
message,nodes,source,positions,path,originalError){

if(originalError&&originalError.stack){
Object.defineProperty(this,'stack',{
value:originalError.stack,
writable:true,
configurable:true});

}else if(Error.captureStackTrace){
Error.captureStackTrace(this,GraphQLError);
}else{
Object.defineProperty(this,'stack',{
value:Error().stack,
writable:true,
configurable:true});

}


var _source=source;
if(!_source&&nodes&&nodes.length>0){
var node=nodes[0];
_source=node&&node.loc&&node.loc.source;
}

var _positions=positions;
if(!_positions&&nodes){
_positions=nodes.filter(function(node){
return Boolean(node.loc);
}).map(function(node){
return node.loc.start;
});
}
if(_positions&&_positions.length===0){
_positions=undefined;
}

var _locations=void 0;
var _source2=_source;
if(_source2&&_positions){
_locations=_positions.map(function(pos){
return(0,_location.getLocation)(_source2,pos);
});
}

Object.defineProperties(this,{
message:{
value:message,



enumerable:true,
writable:true},

locations:{


value:_locations||undefined,



enumerable:true},

path:{


value:path||undefined,



enumerable:true},

nodes:{
value:nodes||undefined},

source:{
value:_source||undefined},

positions:{
value:_positions||undefined},

originalError:{
value:originalError}});


}









GraphQLError.prototype=Object.create(Error.prototype,{
constructor:{value:GraphQLError},
name:{value:'GraphQLError'}});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.default=isInvalid;













function isInvalid(value){
return value===undefined||value!==value;
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.visit=visit;
exports.visitInParallel=visitInParallel;
exports.visitWithTypeInfo=visitWithTypeInfo;









var QueryDocumentKeys=exports.QueryDocumentKeys={
Name:[],

Document:['definitions'],
OperationDefinition:['name','variableDefinitions','directives','selectionSet'],
VariableDefinition:['variable','type','defaultValue'],
Variable:['name'],
SelectionSet:['selections'],
Field:['alias','name','arguments','directives','selectionSet'],
Argument:['name','value'],

FragmentSpread:['name','directives'],
InlineFragment:['typeCondition','directives','selectionSet'],
FragmentDefinition:['name','typeCondition','directives','selectionSet'],

IntValue:[],
FloatValue:[],
StringValue:[],
BooleanValue:[],
NullValue:[],
EnumValue:[],
ListValue:['values'],
ObjectValue:['fields'],
ObjectField:['name','value'],

Directive:['name','arguments'],

NamedType:['name'],
ListType:['type'],
NonNullType:['type'],

SchemaDefinition:['directives','operationTypes'],
OperationTypeDefinition:['type'],

ScalarTypeDefinition:['name','directives'],
ObjectTypeDefinition:['name','interfaces','directives','fields'],
FieldDefinition:['name','arguments','type','directives'],
InputValueDefinition:['name','type','defaultValue','directives'],
InterfaceTypeDefinition:['name','directives','fields'],
UnionTypeDefinition:['name','directives','types'],
EnumTypeDefinition:['name','directives','values'],
EnumValueDefinition:['name','directives'],
InputObjectTypeDefinition:['name','directives','fields'],

TypeExtensionDefinition:['definition'],

DirectiveDefinition:['name','arguments','locations']};


var BREAK=exports.BREAK={};























































































function visit(root,visitor,keyMap){
var visitorKeys=keyMap||QueryDocumentKeys;

var stack=void 0;
var inArray=Array.isArray(root);
var keys=[root];
var index=-1;
var edits=[];
var parent=void 0;
var path=[];
var ancestors=[];
var newRoot=root;

do{
index++;
var isLeaving=index===keys.length;
var key=void 0;
var node=void 0;
var isEdited=isLeaving&&edits.length!==0;
if(isLeaving){
key=ancestors.length===0?undefined:path.pop();
node=parent;
parent=ancestors.pop();
if(isEdited){
if(inArray){
node=node.slice();
}else{
var clone={};
for(var k in node){
if(node.hasOwnProperty(k)){
clone[k]=node[k];
}
}
node=clone;
}
var editOffset=0;
for(var ii=0;ii<edits.length;ii++){
var editKey=edits[ii][0];
var editValue=edits[ii][1];
if(inArray){
editKey-=editOffset;
}
if(inArray&&editValue===null){
node.splice(editKey,1);
editOffset++;
}else{
node[editKey]=editValue;
}
}
}
index=stack.index;
keys=stack.keys;
edits=stack.edits;
inArray=stack.inArray;
stack=stack.prev;
}else{
key=parent?inArray?index:keys[index]:undefined;
node=parent?parent[key]:newRoot;
if(node===null||node===undefined){
continue;
}
if(parent){
path.push(key);
}
}

var result=void 0;
if(!Array.isArray(node)){
if(!isNode(node)){
throw new Error('Invalid AST Node: '+JSON.stringify(node));
}
var visitFn=getVisitFn(visitor,node.kind,isLeaving);
if(visitFn){
result=visitFn.call(visitor,node,key,parent,path,ancestors);

if(result===BREAK){
break;
}

if(result===false){
if(!isLeaving){
path.pop();
continue;
}
}else if(result!==undefined){
edits.push([key,result]);
if(!isLeaving){
if(isNode(result)){
node=result;
}else{
path.pop();
continue;
}
}
}
}
}

if(result===undefined&&isEdited){
edits.push([key,node]);
}

if(!isLeaving){
stack={inArray:inArray,index:index,keys:keys,edits:edits,prev:stack};
inArray=Array.isArray(node);
keys=inArray?node:visitorKeys[node.kind]||[];
index=-1;
edits=[];
if(parent){
ancestors.push(parent);
}
parent=node;
}
}while(stack!==undefined);

if(edits.length!==0){
newRoot=edits[edits.length-1][1];
}

return newRoot;
}

function isNode(maybeNode){
return maybeNode&&typeof maybeNode.kind==='string';
}







function visitInParallel(visitors){
var skipping=new Array(visitors.length);

return{
enter:function enter(node){
for(var i=0;i<visitors.length;i++){
if(!skipping[i]){
var fn=getVisitFn(visitors[i],node.kind,false);
if(fn){
var result=fn.apply(visitors[i],arguments);
if(result===false){
skipping[i]=node;
}else if(result===BREAK){
skipping[i]=BREAK;
}else if(result!==undefined){
return result;
}
}
}
}
},
leave:function leave(node){
for(var i=0;i<visitors.length;i++){
if(!skipping[i]){
var fn=getVisitFn(visitors[i],node.kind,true);
if(fn){
var result=fn.apply(visitors[i],arguments);
if(result===BREAK){
skipping[i]=BREAK;
}else if(result!==undefined&&result!==false){
return result;
}
}
}else if(skipping[i]===node){
skipping[i]=null;
}
}
}};

}





function visitWithTypeInfo(typeInfo,visitor){
return{
enter:function enter(node){
typeInfo.enter(node);
var fn=getVisitFn(visitor,node.kind,false);
if(fn){
var result=fn.apply(visitor,arguments);
if(result!==undefined){
typeInfo.leave(node);
if(isNode(result)){
typeInfo.enter(result);
}
}
return result;
}
},
leave:function leave(node){
var fn=getVisitFn(visitor,node.kind,true);
var result=void 0;
if(fn){
result=fn.apply(visitor,arguments);
}
typeInfo.leave(node);
return result;
}};

}





function getVisitFn(visitor,kind,isLeaving){
var kindVisitor=visitor[kind];
if(kindVisitor){
if(!isLeaving&&typeof kindVisitor==='function'){

return kindVisitor;
}
var kindSpecificVisitor=isLeaving?kindVisitor.leave:kindVisitor.enter;
if(typeof kindSpecificVisitor==='function'){

return kindSpecificVisitor;
}
}else{
var specificVisitor=isLeaving?visitor.leave:visitor.enter;
if(specificVisitor){
if(typeof specificVisitor==='function'){

return specificVisitor;
}
var specificKindVisitor=specificVisitor[kind];
if(typeof specificKindVisitor==='function'){

return specificKindVisitor;
}
}
}
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.valueFromAST=valueFromAST;

var _keyMap=__webpack_require__(22);

var _keyMap2=_interopRequireDefault(_keyMap);

var _invariant=__webpack_require__(7);

var _invariant2=_interopRequireDefault(_invariant);

var _isNullish=__webpack_require__(12);

var _isNullish2=_interopRequireDefault(_isNullish);

var _isInvalid=__webpack_require__(26);

var _isInvalid2=_interopRequireDefault(_isInvalid);

var _kinds=__webpack_require__(6);

var Kind=_interopRequireWildcard(_kinds);

var _definition=__webpack_require__(3);

function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}































function valueFromAST(valueNode,type,variables){
if(!valueNode){


return;
}

if(type instanceof _definition.GraphQLNonNull){
if(valueNode.kind===Kind.NULL){
return;
}
return valueFromAST(valueNode,type.ofType,variables);
}

if(valueNode.kind===Kind.NULL){

return null;
}

if(valueNode.kind===Kind.VARIABLE){
var variableName=valueNode.name.value;
if(!variables||(0,_isInvalid2.default)(variables[variableName])){

return;
}



return variables[variableName];
}

if(type instanceof _definition.GraphQLList){
var itemType=type.ofType;
if(valueNode.kind===Kind.LIST){
var coercedValues=[];
var itemNodes=valueNode.values;
for(var i=0;i<itemNodes.length;i++){
if(isMissingVariable(itemNodes[i],variables)){


if(itemType instanceof _definition.GraphQLNonNull){
return;
}
coercedValues.push(null);
}else{
var itemValue=valueFromAST(itemNodes[i],itemType,variables);
if((0,_isInvalid2.default)(itemValue)){
return;
}
coercedValues.push(itemValue);
}
}
return coercedValues;
}
var coercedValue=valueFromAST(valueNode,itemType,variables);
if((0,_isInvalid2.default)(coercedValue)){
return;
}
return[coercedValue];
}

if(type instanceof _definition.GraphQLInputObjectType){
if(valueNode.kind!==Kind.OBJECT){
return;
}
var coercedObj=Object.create(null);
var fields=type.getFields();
var fieldNodes=(0,_keyMap2.default)(valueNode.fields,function(field){
return field.name.value;
});
var fieldNames=Object.keys(fields);
for(var _i=0;_i<fieldNames.length;_i++){
var fieldName=fieldNames[_i];
var field=fields[fieldName];
var fieldNode=fieldNodes[fieldName];
if(!fieldNode||isMissingVariable(fieldNode.value,variables)){
if(!(0,_isInvalid2.default)(field.defaultValue)){
coercedObj[fieldName]=field.defaultValue;
}else if(field.type instanceof _definition.GraphQLNonNull){
return;
}
continue;
}
var fieldValue=valueFromAST(fieldNode.value,field.type,variables);
if((0,_isInvalid2.default)(fieldValue)){
return;
}
coercedObj[fieldName]=fieldValue;
}
return coercedObj;
}

(0,_invariant2.default)(type instanceof _definition.GraphQLScalarType||type instanceof _definition.GraphQLEnumType,'Must be input type');

var parsed=type.parseLiteral(valueNode);
if((0,_isNullish2.default)(parsed)){


return;
}

return parsed;
}



function isMissingVariable(valueNode,variables){
return valueNode.kind===Kind.VARIABLE&&(!variables||(0,_isInvalid2.default)(variables[valueNode.name.value]));
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule=true;
var addEventListener=exports.addEventListener=function addEventListener(node,event,listener){
return node.addEventListener?node.addEventListener(event,listener,false):node.attachEvent('on'+event,listener);
};

var removeEventListener=exports.removeEventListener=function removeEventListener(node,event,listener){
return node.removeEventListener?node.removeEventListener(event,listener,false):node.detachEvent('on'+event,listener);
};








var supportsHistory=exports.supportsHistory=function supportsHistory(){
var ua=window.navigator.userAgent;

if((ua.indexOf('Android 2.')!==-1||ua.indexOf('Android 4.0')!==-1)&&ua.indexOf('Mobile Safari')!==-1&&ua.indexOf('Chrome')===-1&&ua.indexOf('Windows Phone')===-1)return false;

return window.history&&'pushState'in window.history;
};




var supportsGoWithoutReloadUsingHash=exports.supportsGoWithoutReloadUsingHash=function supportsGoWithoutReloadUsingHash(){
return window.navigator.userAgent.indexOf('Firefox')===-1;
};





var supportsPopstateOnHashchange=exports.supportsPopstateOnHashchange=function supportsPopstateOnHashchange(){
return window.navigator.userAgent.indexOf('Trident')===-1;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.connect=exports.connectAdvanced=exports.Provider=undefined;var _Provider=__webpack_require__(181);var _Provider2=_interopRequireDefault(_Provider);
var _connectAdvanced=__webpack_require__(76);var _connectAdvanced2=_interopRequireDefault(_connectAdvanced);
var _connect=__webpack_require__(182);var _connect2=_interopRequireDefault(_connect);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.

Provider=_Provider2.default;exports.connectAdvanced=_connectAdvanced2.default;exports.connect=_connect2.default;

/***/ }),
/* 31 */
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
/* 32 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var ReduxInit=exports.ReduxInit='@@redux/INIT';
var BrowserRouterNavigate=exports.BrowserRouterNavigate='ROUTER:BROWSER-NAVIGATE';
var NativeRouterPush=exports.NativeRouterPush='ROUTER:NATIVE-PUSH';
var NativeRouterPop=exports.NativeRouterPop='ROUTER:NATIVE-POP';
var NativeRouterJumpToIndex=exports.NativeRouterJumpToIndex='ROUTER:NATIVE-JUMP-TO-INDEX';
var NativeRouterJumpTo=exports.NativeRouterJumpTo='ROUTER:NATIVE-JUMP-TO';
var NativeRouterReset=exports.NativeRouterReset='ROUTER:NATIVE-RESET';

/***/ }),
/* 33 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var IncreaseCounter=exports.IncreaseCounter='@APP:INCREASE-COUNTER';

var BrowserRouterNavigate=exports.BrowserRouterNavigate='ROUTER:BROWSER-NAVIGATE';

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.parse=parse;
exports.parseValue=parseValue;
exports.parseType=parseType;
exports.parseConstValue=parseConstValue;
exports.parseTypeReference=parseTypeReference;
exports.parseNamedType=parseNamedType;

var _source=__webpack_require__(48);

var _error=__webpack_require__(2);

var _lexer=__webpack_require__(46);

var _kinds=__webpack_require__(6);




















function parse(source,options){
var sourceObj=typeof source==='string'?new _source.Source(source):source;
var lexer=(0,_lexer.createLexer)(sourceObj,options||{});
return parseDocument(lexer);
}











function parseValue(source,options){
var sourceObj=typeof source==='string'?new _source.Source(source):source;
var lexer=(0,_lexer.createLexer)(sourceObj,options||{});
expect(lexer,_lexer.TokenKind.SOF);
var value=parseValueLiteral(lexer,false);
expect(lexer,_lexer.TokenKind.EOF);
return value;
}











function parseType(source,options){
var sourceObj=typeof source==='string'?new _source.Source(source):source;
var lexer=(0,_lexer.createLexer)(sourceObj,options||{});
expect(lexer,_lexer.TokenKind.SOF);
var type=parseTypeReference(lexer);
expect(lexer,_lexer.TokenKind.EOF);
return type;
}




function parseName(lexer){
var token=expect(lexer,_lexer.TokenKind.NAME);
return{
kind:_kinds.NAME,
value:token.value,
loc:loc(lexer,token)};

}






function parseDocument(lexer){
var start=lexer.token;
expect(lexer,_lexer.TokenKind.SOF);
var definitions=[];
do{
definitions.push(parseDefinition(lexer));
}while(!skip(lexer,_lexer.TokenKind.EOF));

return{
kind:_kinds.DOCUMENT,
definitions:definitions,
loc:loc(lexer,start)};

}







function parseDefinition(lexer){
if(peek(lexer,_lexer.TokenKind.BRACE_L)){
return parseOperationDefinition(lexer);
}

if(peek(lexer,_lexer.TokenKind.NAME)){
switch(lexer.token.value){

case'query':
case'mutation':
case'subscription':
return parseOperationDefinition(lexer);

case'fragment':
return parseFragmentDefinition(lexer);


case'schema':
case'scalar':
case'type':
case'interface':
case'union':
case'enum':
case'input':
case'extend':
case'directive':
return parseTypeSystemDefinition(lexer);}

}

throw unexpected(lexer);
}








function parseOperationDefinition(lexer){
var start=lexer.token;
if(peek(lexer,_lexer.TokenKind.BRACE_L)){
return{
kind:_kinds.OPERATION_DEFINITION,
operation:'query',
name:null,
variableDefinitions:null,
directives:[],
selectionSet:parseSelectionSet(lexer),
loc:loc(lexer,start)};

}
var operation=parseOperationType(lexer);
var name=void 0;
if(peek(lexer,_lexer.TokenKind.NAME)){
name=parseName(lexer);
}
return{
kind:_kinds.OPERATION_DEFINITION,
operation:operation,
name:name,
variableDefinitions:parseVariableDefinitions(lexer),
directives:parseDirectives(lexer),
selectionSet:parseSelectionSet(lexer),
loc:loc(lexer,start)};

}




function parseOperationType(lexer){
var operationToken=expect(lexer,_lexer.TokenKind.NAME);
switch(operationToken.value){
case'query':
return'query';
case'mutation':
return'mutation';

case'subscription':
return'subscription';}


throw unexpected(lexer,operationToken);
}




function parseVariableDefinitions(lexer){
return peek(lexer,_lexer.TokenKind.PAREN_L)?many(lexer,_lexer.TokenKind.PAREN_L,parseVariableDefinition,_lexer.TokenKind.PAREN_R):[];
}




function parseVariableDefinition(lexer){
var start=lexer.token;
return{
kind:_kinds.VARIABLE_DEFINITION,
variable:parseVariable(lexer),
type:(expect(lexer,_lexer.TokenKind.COLON),parseTypeReference(lexer)),
defaultValue:skip(lexer,_lexer.TokenKind.EQUALS)?parseValueLiteral(lexer,true):null,
loc:loc(lexer,start)};

}




function parseVariable(lexer){
var start=lexer.token;
expect(lexer,_lexer.TokenKind.DOLLAR);
return{
kind:_kinds.VARIABLE,
name:parseName(lexer),
loc:loc(lexer,start)};

}




function parseSelectionSet(lexer){
var start=lexer.token;
return{
kind:_kinds.SELECTION_SET,
selections:many(lexer,_lexer.TokenKind.BRACE_L,parseSelection,_lexer.TokenKind.BRACE_R),
loc:loc(lexer,start)};

}







function parseSelection(lexer){
return peek(lexer,_lexer.TokenKind.SPREAD)?parseFragment(lexer):parseField(lexer);
}






function parseField(lexer){
var start=lexer.token;

var nameOrAlias=parseName(lexer);
var alias=void 0;
var name=void 0;
if(skip(lexer,_lexer.TokenKind.COLON)){
alias=nameOrAlias;
name=parseName(lexer);
}else{
alias=null;
name=nameOrAlias;
}

return{
kind:_kinds.FIELD,
alias:alias,
name:name,
arguments:parseArguments(lexer),
directives:parseDirectives(lexer),
selectionSet:peek(lexer,_lexer.TokenKind.BRACE_L)?parseSelectionSet(lexer):null,
loc:loc(lexer,start)};

}




function parseArguments(lexer){
return peek(lexer,_lexer.TokenKind.PAREN_L)?many(lexer,_lexer.TokenKind.PAREN_L,parseArgument,_lexer.TokenKind.PAREN_R):[];
}




function parseArgument(lexer){
var start=lexer.token;
return{
kind:_kinds.ARGUMENT,
name:parseName(lexer),
value:(expect(lexer,_lexer.TokenKind.COLON),parseValueLiteral(lexer,false)),
loc:loc(lexer,start)};

}










function parseFragment(lexer){
var start=lexer.token;
expect(lexer,_lexer.TokenKind.SPREAD);
if(peek(lexer,_lexer.TokenKind.NAME)&&lexer.token.value!=='on'){
return{
kind:_kinds.FRAGMENT_SPREAD,
name:parseFragmentName(lexer),
directives:parseDirectives(lexer),
loc:loc(lexer,start)};

}
var typeCondition=null;
if(lexer.token.value==='on'){
lexer.advance();
typeCondition=parseNamedType(lexer);
}
return{
kind:_kinds.INLINE_FRAGMENT,
typeCondition:typeCondition,
directives:parseDirectives(lexer),
selectionSet:parseSelectionSet(lexer),
loc:loc(lexer,start)};

}







function parseFragmentDefinition(lexer){
var start=lexer.token;
expectKeyword(lexer,'fragment');
return{
kind:_kinds.FRAGMENT_DEFINITION,
name:parseFragmentName(lexer),
typeCondition:(expectKeyword(lexer,'on'),parseNamedType(lexer)),
directives:parseDirectives(lexer),
selectionSet:parseSelectionSet(lexer),
loc:loc(lexer,start)};

}




function parseFragmentName(lexer){
if(lexer.token.value==='on'){
throw unexpected(lexer);
}
return parseName(lexer);
}





















function parseValueLiteral(lexer,isConst){
var token=lexer.token;
switch(token.kind){
case _lexer.TokenKind.BRACKET_L:
return parseList(lexer,isConst);
case _lexer.TokenKind.BRACE_L:
return parseObject(lexer,isConst);
case _lexer.TokenKind.INT:
lexer.advance();
return{
kind:_kinds.INT,
value:token.value,
loc:loc(lexer,token)};

case _lexer.TokenKind.FLOAT:
lexer.advance();
return{
kind:_kinds.FLOAT,
value:token.value,
loc:loc(lexer,token)};

case _lexer.TokenKind.STRING:
lexer.advance();
return{
kind:_kinds.STRING,
value:token.value,
loc:loc(lexer,token)};

case _lexer.TokenKind.NAME:
if(token.value==='true'||token.value==='false'){
lexer.advance();
return{
kind:_kinds.BOOLEAN,
value:token.value==='true',
loc:loc(lexer,token)};

}else if(token.value==='null'){
lexer.advance();
return{
kind:_kinds.NULL,
loc:loc(lexer,token)};

}
lexer.advance();
return{
kind:_kinds.ENUM,
value:token.value,
loc:loc(lexer,token)};

case _lexer.TokenKind.DOLLAR:
if(!isConst){
return parseVariable(lexer);
}
break;}

throw unexpected(lexer);
}

function parseConstValue(lexer){
return parseValueLiteral(lexer,true);
}

function parseValueValue(lexer){
return parseValueLiteral(lexer,false);
}






function parseList(lexer,isConst){
var start=lexer.token;
var item=isConst?parseConstValue:parseValueValue;
return{
kind:_kinds.LIST,
values:any(lexer,_lexer.TokenKind.BRACKET_L,item,_lexer.TokenKind.BRACKET_R),
loc:loc(lexer,start)};

}






function parseObject(lexer,isConst){
var start=lexer.token;
expect(lexer,_lexer.TokenKind.BRACE_L);
var fields=[];
while(!skip(lexer,_lexer.TokenKind.BRACE_R)){
fields.push(parseObjectField(lexer,isConst));
}
return{
kind:_kinds.OBJECT,
fields:fields,
loc:loc(lexer,start)};

}




function parseObjectField(lexer,isConst){
var start=lexer.token;
return{
kind:_kinds.OBJECT_FIELD,
name:parseName(lexer),
value:(expect(lexer,_lexer.TokenKind.COLON),parseValueLiteral(lexer,isConst)),
loc:loc(lexer,start)};

}






function parseDirectives(lexer){
var directives=[];
while(peek(lexer,_lexer.TokenKind.AT)){
directives.push(parseDirective(lexer));
}
return directives;
}




function parseDirective(lexer){
var start=lexer.token;
expect(lexer,_lexer.TokenKind.AT);
return{
kind:_kinds.DIRECTIVE,
name:parseName(lexer),
arguments:parseArguments(lexer),
loc:loc(lexer,start)};

}









function parseTypeReference(lexer){
var start=lexer.token;
var type=void 0;
if(skip(lexer,_lexer.TokenKind.BRACKET_L)){
type=parseTypeReference(lexer);
expect(lexer,_lexer.TokenKind.BRACKET_R);
type={
kind:_kinds.LIST_TYPE,
type:type,
loc:loc(lexer,start)};

}else{
type=parseNamedType(lexer);
}
if(skip(lexer,_lexer.TokenKind.BANG)){
return{
kind:_kinds.NON_NULL_TYPE,
type:type,
loc:loc(lexer,start)};

}
return type;
}




function parseNamedType(lexer){
var start=lexer.token;
return{
kind:_kinds.NAMED_TYPE,
name:parseName(lexer),
loc:loc(lexer,start)};

}


















function parseTypeSystemDefinition(lexer){
if(peek(lexer,_lexer.TokenKind.NAME)){
switch(lexer.token.value){
case'schema':
return parseSchemaDefinition(lexer);
case'scalar':
return parseScalarTypeDefinition(lexer);
case'type':
return parseObjectTypeDefinition(lexer);
case'interface':
return parseInterfaceTypeDefinition(lexer);
case'union':
return parseUnionTypeDefinition(lexer);
case'enum':
return parseEnumTypeDefinition(lexer);
case'input':
return parseInputObjectTypeDefinition(lexer);
case'extend':
return parseTypeExtensionDefinition(lexer);
case'directive':
return parseDirectiveDefinition(lexer);}

}

throw unexpected(lexer);
}






function parseSchemaDefinition(lexer){
var start=lexer.token;
expectKeyword(lexer,'schema');
var directives=parseDirectives(lexer);
var operationTypes=many(lexer,_lexer.TokenKind.BRACE_L,parseOperationTypeDefinition,_lexer.TokenKind.BRACE_R);
return{
kind:_kinds.SCHEMA_DEFINITION,
directives:directives,
operationTypes:operationTypes,
loc:loc(lexer,start)};

}

function parseOperationTypeDefinition(lexer){
var start=lexer.token;
var operation=parseOperationType(lexer);
expect(lexer,_lexer.TokenKind.COLON);
var type=parseNamedType(lexer);
return{
kind:_kinds.OPERATION_TYPE_DEFINITION,
operation:operation,
type:type,
loc:loc(lexer,start)};

}




function parseScalarTypeDefinition(lexer){
var start=lexer.token;
expectKeyword(lexer,'scalar');
var name=parseName(lexer);
var directives=parseDirectives(lexer);
return{
kind:_kinds.SCALAR_TYPE_DEFINITION,
name:name,
directives:directives,
loc:loc(lexer,start)};

}





function parseObjectTypeDefinition(lexer){
var start=lexer.token;
expectKeyword(lexer,'type');
var name=parseName(lexer);
var interfaces=parseImplementsInterfaces(lexer);
var directives=parseDirectives(lexer);
var fields=any(lexer,_lexer.TokenKind.BRACE_L,parseFieldDefinition,_lexer.TokenKind.BRACE_R);
return{
kind:_kinds.OBJECT_TYPE_DEFINITION,
name:name,
interfaces:interfaces,
directives:directives,
fields:fields,
loc:loc(lexer,start)};

}




function parseImplementsInterfaces(lexer){
var types=[];
if(lexer.token.value==='implements'){
lexer.advance();
do{
types.push(parseNamedType(lexer));
}while(peek(lexer,_lexer.TokenKind.NAME));
}
return types;
}




function parseFieldDefinition(lexer){
var start=lexer.token;
var name=parseName(lexer);
var args=parseArgumentDefs(lexer);
expect(lexer,_lexer.TokenKind.COLON);
var type=parseTypeReference(lexer);
var directives=parseDirectives(lexer);
return{
kind:_kinds.FIELD_DEFINITION,
name:name,
arguments:args,
type:type,
directives:directives,
loc:loc(lexer,start)};

}




function parseArgumentDefs(lexer){
if(!peek(lexer,_lexer.TokenKind.PAREN_L)){
return[];
}
return many(lexer,_lexer.TokenKind.PAREN_L,parseInputValueDef,_lexer.TokenKind.PAREN_R);
}




function parseInputValueDef(lexer){
var start=lexer.token;
var name=parseName(lexer);
expect(lexer,_lexer.TokenKind.COLON);
var type=parseTypeReference(lexer);
var defaultValue=null;
if(skip(lexer,_lexer.TokenKind.EQUALS)){
defaultValue=parseConstValue(lexer);
}
var directives=parseDirectives(lexer);
return{
kind:_kinds.INPUT_VALUE_DEFINITION,
name:name,
type:type,
defaultValue:defaultValue,
directives:directives,
loc:loc(lexer,start)};

}




function parseInterfaceTypeDefinition(lexer){
var start=lexer.token;
expectKeyword(lexer,'interface');
var name=parseName(lexer);
var directives=parseDirectives(lexer);
var fields=any(lexer,_lexer.TokenKind.BRACE_L,parseFieldDefinition,_lexer.TokenKind.BRACE_R);
return{
kind:_kinds.INTERFACE_TYPE_DEFINITION,
name:name,
directives:directives,
fields:fields,
loc:loc(lexer,start)};

}




function parseUnionTypeDefinition(lexer){
var start=lexer.token;
expectKeyword(lexer,'union');
var name=parseName(lexer);
var directives=parseDirectives(lexer);
expect(lexer,_lexer.TokenKind.EQUALS);
var types=parseUnionMembers(lexer);
return{
kind:_kinds.UNION_TYPE_DEFINITION,
name:name,
directives:directives,
types:types,
loc:loc(lexer,start)};

}






function parseUnionMembers(lexer){
var members=[];
do{
members.push(parseNamedType(lexer));
}while(skip(lexer,_lexer.TokenKind.PIPE));
return members;
}




function parseEnumTypeDefinition(lexer){
var start=lexer.token;
expectKeyword(lexer,'enum');
var name=parseName(lexer);
var directives=parseDirectives(lexer);
var values=many(lexer,_lexer.TokenKind.BRACE_L,parseEnumValueDefinition,_lexer.TokenKind.BRACE_R);
return{
kind:_kinds.ENUM_TYPE_DEFINITION,
name:name,
directives:directives,
values:values,
loc:loc(lexer,start)};

}






function parseEnumValueDefinition(lexer){
var start=lexer.token;
var name=parseName(lexer);
var directives=parseDirectives(lexer);
return{
kind:_kinds.ENUM_VALUE_DEFINITION,
name:name,
directives:directives,
loc:loc(lexer,start)};

}




function parseInputObjectTypeDefinition(lexer){
var start=lexer.token;
expectKeyword(lexer,'input');
var name=parseName(lexer);
var directives=parseDirectives(lexer);
var fields=any(lexer,_lexer.TokenKind.BRACE_L,parseInputValueDef,_lexer.TokenKind.BRACE_R);
return{
kind:_kinds.INPUT_OBJECT_TYPE_DEFINITION,
name:name,
directives:directives,
fields:fields,
loc:loc(lexer,start)};

}




function parseTypeExtensionDefinition(lexer){
var start=lexer.token;
expectKeyword(lexer,'extend');
var definition=parseObjectTypeDefinition(lexer);
return{
kind:_kinds.TYPE_EXTENSION_DEFINITION,
definition:definition,
loc:loc(lexer,start)};

}





function parseDirectiveDefinition(lexer){
var start=lexer.token;
expectKeyword(lexer,'directive');
expect(lexer,_lexer.TokenKind.AT);
var name=parseName(lexer);
var args=parseArgumentDefs(lexer);
expectKeyword(lexer,'on');
var locations=parseDirectiveLocations(lexer);
return{
kind:_kinds.DIRECTIVE_DEFINITION,
name:name,
arguments:args,
locations:locations,
loc:loc(lexer,start)};

}






function parseDirectiveLocations(lexer){
var locations=[];
do{
locations.push(parseName(lexer));
}while(skip(lexer,_lexer.TokenKind.PIPE));
return locations;
}







function loc(lexer,startToken){
if(!lexer.options.noLocation){
return new Loc(startToken,lexer.lastToken,lexer.source);
}
}

function Loc(startToken,endToken,source){
this.start=startToken.start;
this.end=endToken.end;
this.startToken=startToken;
this.endToken=endToken;
this.source=source;
}


Loc.prototype.toJSON=Loc.prototype.inspect=function toJSON(){
return{start:this.start,end:this.end};
};




function peek(lexer,kind){
return lexer.token.kind===kind;
}





function skip(lexer,kind){
var match=lexer.token.kind===kind;
if(match){
lexer.advance();
}
return match;
}





function expect(lexer,kind){
var token=lexer.token;
if(token.kind===kind){
lexer.advance();
return token;
}
throw(0,_error.syntaxError)(lexer.source,token.start,'Expected '+kind+', found '+(0,_lexer.getTokenDesc)(token));
}






function expectKeyword(lexer,value){
var token=lexer.token;
if(token.kind===_lexer.TokenKind.NAME&&token.value===value){
lexer.advance();
return token;
}
throw(0,_error.syntaxError)(lexer.source,token.start,'Expected "'+value+'", found '+(0,_lexer.getTokenDesc)(token));
}





function unexpected(lexer,atToken){
var token=atToken||lexer.token;
return(0,_error.syntaxError)(lexer.source,token.start,'Unexpected '+(0,_lexer.getTokenDesc)(token));
}







function any(lexer,openKind,parseFn,closeKind){
expect(lexer,openKind);
var nodes=[];
while(!skip(lexer,closeKind)){
nodes.push(parseFn(lexer));
}
return nodes;
}







function many(lexer,openKind,parseFn,closeKind){
expect(lexer,openKind);
var nodes=[parseFn(lexer)];
while(!skip(lexer,closeKind)){
nodes.push(parseFn(lexer));
}
return nodes;
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.isValidLiteralValue=isValidLiteralValue;

var _printer=__webpack_require__(9);

var _kinds=__webpack_require__(6);

var _definition=__webpack_require__(3);

var _invariant=__webpack_require__(7);

var _invariant2=_interopRequireDefault(_invariant);

var _keyMap=__webpack_require__(22);

var _keyMap2=_interopRequireDefault(_keyMap);

var _isNullish=__webpack_require__(12);

var _isNullish2=_interopRequireDefault(_isNullish);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}


















function isValidLiteralValue(type,valueNode){

if(type instanceof _definition.GraphQLNonNull){
if(!valueNode||valueNode.kind===_kinds.NULL){
return['Expected "'+String(type)+'", found null.'];
}
return isValidLiteralValue(type.ofType,valueNode);
}

if(!valueNode||valueNode.kind===_kinds.NULL){
return[];
}



if(valueNode.kind===_kinds.VARIABLE){
return[];
}


if(type instanceof _definition.GraphQLList){
var _ret=function(){
var itemType=type.ofType;
if(valueNode.kind===_kinds.LIST){
return{
v:valueNode.values.reduce(function(acc,item,index){
var errors=isValidLiteralValue(itemType,item);
return acc.concat(errors.map(function(error){
return'In element #'+index+': '+error;
}));
},[])};

}
return{
v:isValidLiteralValue(itemType,valueNode)};

}();

if(typeof _ret==="object")return _ret.v;
}


if(type instanceof _definition.GraphQLInputObjectType){
var _ret2=function(){
if(valueNode.kind!==_kinds.OBJECT){
return{
v:['Expected "'+type.name+'", found not an object.']};

}
var fields=type.getFields();

var errors=[];


var fieldNodes=valueNode.fields;
fieldNodes.forEach(function(providedFieldNode){
if(!fields[providedFieldNode.name.value]){
errors.push('In field "'+providedFieldNode.name.value+'": Unknown field.');
}
});


var fieldNodeMap=(0,_keyMap2.default)(fieldNodes,function(fieldNode){
return fieldNode.name.value;
});
Object.keys(fields).forEach(function(fieldName){
var result=isValidLiteralValue(fields[fieldName].type,fieldNodeMap[fieldName]&&fieldNodeMap[fieldName].value);
errors.push.apply(errors,result.map(function(error){
return'In field "'+fieldName+'": '+error;
}));
});

return{
v:errors};

}();

if(typeof _ret2==="object")return _ret2.v;
}

(0,_invariant2.default)(type instanceof _definition.GraphQLScalarType||type instanceof _definition.GraphQLEnumType,'Must be input type');



var parseResult=type.parseLiteral(valueNode);
if((0,_isNullish2.default)(parseResult)){
return['Expected type "'+type.name+'", found '+(0,_printer.print)(valueNode)+'.'];
}

return[];
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.isEqualType=isEqualType;
exports.isTypeSubTypeOf=isTypeSubTypeOf;
exports.doTypesOverlap=doTypesOverlap;

var _definition=__webpack_require__(3);




function isEqualType(typeA,typeB){

if(typeA===typeB){
return true;
}


if(typeA instanceof _definition.GraphQLNonNull&&typeB instanceof _definition.GraphQLNonNull){
return isEqualType(typeA.ofType,typeB.ofType);
}


if(typeA instanceof _definition.GraphQLList&&typeB instanceof _definition.GraphQLList){
return isEqualType(typeA.ofType,typeB.ofType);
}


return false;
}















function isTypeSubTypeOf(schema,maybeSubType,superType){

if(maybeSubType===superType){
return true;
}


if(superType instanceof _definition.GraphQLNonNull){
if(maybeSubType instanceof _definition.GraphQLNonNull){
return isTypeSubTypeOf(schema,maybeSubType.ofType,superType.ofType);
}
return false;
}else if(maybeSubType instanceof _definition.GraphQLNonNull){

return isTypeSubTypeOf(schema,maybeSubType.ofType,superType);
}


if(superType instanceof _definition.GraphQLList){
if(maybeSubType instanceof _definition.GraphQLList){
return isTypeSubTypeOf(schema,maybeSubType.ofType,superType.ofType);
}
return false;
}else if(maybeSubType instanceof _definition.GraphQLList){

return false;
}



if((0,_definition.isAbstractType)(superType)&&maybeSubType instanceof _definition.GraphQLObjectType&&schema.isPossibleType(superType,maybeSubType)){
return true;
}


return false;
}










function doTypesOverlap(schema,typeA,typeB){

var _typeB=typeB;


if(typeA===_typeB){
return true;
}

if(typeA instanceof _definition.GraphQLInterfaceType||typeA instanceof _definition.GraphQLUnionType){
if(_typeB instanceof _definition.GraphQLInterfaceType||_typeB instanceof _definition.GraphQLUnionType){


return schema.getPossibleTypes(typeA).some(function(type){
return schema.isPossibleType(_typeB,type);
});
}

return schema.isPossibleType(typeA,_typeB);
}

if(_typeB instanceof _definition.GraphQLInterfaceType||_typeB instanceof _definition.GraphQLUnionType){

return schema.isPossibleType(_typeB,typeA);
}


return false;
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule=true;



var PUSH=exports.PUSH='PUSH';




var REPLACE=exports.REPLACE='REPLACE';









var POP=exports.POP='POP';

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule=true;
var canUseDOM=exports.canUseDOM=!!(typeof window!=='undefined'&&window.document&&window.document.createElement);

/***/ }),
/* 39 */
/***/ (function(module, exports) {











































var SYMBOL_ITERATOR=typeof Symbol==='function'&&(typeof Symbol==='function'?Symbol.iterator:'@@iterator');







































var $$iterator=SYMBOL_ITERATOR||'@@iterator';
exports.$$iterator=$$iterator;


















function isIterable(obj){
return!!getIteratorMethod(obj);
}
exports.isIterable=isIterable;


















function isArrayLike(obj){
var length=obj!=null&&obj.length;
return typeof length==='number'&&length>=0&&length%1===0;
}
exports.isArrayLike=isArrayLike;
































function isCollection(obj){
return Object(obj)===obj&&(isArrayLike(obj)||isIterable(obj));
}
exports.isCollection=isCollection;



















function getIterator(iterable){
var method=getIteratorMethod(iterable);
if(method){
return method.call(iterable);
}
}
exports.getIterator=getIterator;






















function getIteratorMethod(iterable){
if(iterable!=null){
var method=SYMBOL_ITERATOR&&iterable[SYMBOL_ITERATOR]||iterable['@@iterator'];
if(typeof method==='function'){
return method;
}
}
}
exports.getIteratorMethod=getIteratorMethod;














































function forEach(collection,callback,thisArg){
if(collection!=null){
if(typeof collection.forEach==='function'){
return collection.forEach(callback,thisArg);
}
var i=0;
var iterator=getIterator(collection);
if(iterator){
var step;
while(!(step=iterator.next()).done){
callback.call(thisArg,step.value,i++,collection);



if(i>9999999){
throw new TypeError('Near-infinite iteration.');
}
}
}else if(isArrayLike(collection)){
for(;i<collection.length;i++){
if(collection.hasOwnProperty(i)){
callback.call(thisArg,collection[i],i,collection);
}
}
}
}
}
exports.forEach=forEach;





























function createIterator(collection){
if(collection!=null){
var iterator=getIterator(collection);
if(iterator){
return iterator;
}
if(isArrayLike(collection)){
return new ArrayLikeIterator(collection);
}
}
}
exports.createIterator=createIterator;



function ArrayLikeIterator(obj){
this._o=obj;
this._i=0;
}


ArrayLikeIterator.prototype[$$iterator]=function(){
return this;
};



ArrayLikeIterator.prototype.next=function(){
if(this._o===void 0||this._i>=this._o.length){
this._o=void 0;
return{value:void 0,done:true};
}
return{value:this._o[this._i++],done:false};
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);

var _utils=__webpack_require__(23);
var _navigatorMenuItem=__webpack_require__(233);var _navigatorMenuItem2=_interopRequireDefault(_navigatorMenuItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Navigator=function(_Component){_inherits(Navigator,_Component);function Navigator(){_classCallCheck(this,Navigator);return _possibleConstructorReturn(this,(Navigator.__proto__||Object.getPrototypeOf(Navigator)).apply(this,arguments));}_createClass(Navigator,[{key:'render',value:function render()
{
return _react2.default.createElement(_reactNative.View,{style:styles.container},
this.renderMenuItems());

}},{key:'renderMenuItems',value:function renderMenuItems()

{
return menuItems.map(function(item,i){
return _react2.default.createElement(_navigatorMenuItem2.default,{key:i,title:item.title,path:item.path});
});
}}]);return Navigator;}(_react.Component);exports.default=Navigator;


var styles=_reactNative.StyleSheet.create({
container:{
position:'fixed',
top:0,left:0,right:0,
flexDirection:'row',
height:_utils.sizes.navigatorHeight,
backgroundColor:_utils.colors.darkBackground}});



var menuItems=[
{title:'About me',path:'/about/cloudle'},
{title:'Universal UI',path:'/'}];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(3);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.default=getTypeInfo;

var _graphql=__webpack_require__(21);

var _introspection=__webpack_require__(11);

var _forEachState=__webpack_require__(64);

var _forEachState2=_interopRequireDefault(_forEachState);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}





function getTypeInfo(schema,tokenState){
var info={
schema:schema,
type:null,
parentType:null,
inputType:null,
directiveDef:null,
fieldDef:null,
argDef:null,
argDefs:null,
objectFieldDefs:null};


(0,_forEachState2.default)(tokenState,function(state){
switch(state.kind){
case'Query':
case'ShortQuery':
info.type=schema.getQueryType();
break;
case'Mutation':
info.type=schema.getMutationType();
break;
case'Subscription':
info.type=schema.getSubscriptionType();
break;
case'InlineFragment':
case'FragmentDefinition':
if(state.type){
info.type=schema.getType(state.type);
}
break;
case'Field':
case'AliasedField':
info.fieldDef=info.type&&state.name?getFieldDef(schema,info.parentType,state.name):null;
info.type=info.fieldDef&&info.fieldDef.type;
break;
case'SelectionSet':
info.parentType=(0,_graphql.getNamedType)(info.type);
break;
case'Directive':
info.directiveDef=state.name&&schema.getDirective(state.name);
break;
case'Arguments':
var parentDef=state.prevState.kind==='Field'?info.fieldDef:state.prevState.kind==='Directive'?info.directiveDef:state.prevState.kind==='AliasedField'?state.prevState.name&&getFieldDef(schema,info.parentType,state.prevState.name):null;
info.argDefs=parentDef&&parentDef.args;
break;
case'Argument':
info.argDef=null;
if(info.argDefs){
for(var i=0;i<info.argDefs.length;i++){
if(info.argDefs[i].name===state.name){
info.argDef=info.argDefs[i];
break;
}
}
}
info.inputType=info.argDef&&info.argDef.type;
break;
case'EnumValue':
var enumType=(0,_graphql.getNamedType)(info.inputType);
info.enumValue=enumType instanceof _graphql.GraphQLEnumType?find(enumType.getValues(),function(val){
return val.value===state.name;
}):null;
break;
case'ListValue':
var nullableType=(0,_graphql.getNullableType)(info.inputType);
info.inputType=nullableType instanceof _graphql.GraphQLList?nullableType.ofType:null;
break;
case'ObjectValue':
var objectType=(0,_graphql.getNamedType)(info.inputType);
info.objectFieldDefs=objectType instanceof _graphql.GraphQLInputObjectType?objectType.getFields():null;
break;
case'ObjectField':
var objectField=state.name&&info.objectFieldDefs?info.objectFieldDefs[state.name]:null;
info.inputType=objectField&&objectField.type;
break;
case'NamedType':
info.type=schema.getType(state.name);
break;}

});

return info;
}











function getFieldDef(schema,type,fieldName){
if(fieldName===_introspection.SchemaMetaFieldDef.name&&schema.getQueryType()===type){
return _introspection.SchemaMetaFieldDef;
}
if(fieldName===_introspection.TypeMetaFieldDef.name&&schema.getQueryType()===type){
return _introspection.TypeMetaFieldDef;
}
if(fieldName===_introspection.TypeNameMetaFieldDef.name&&(0,_graphql.isCompositeType)(type)){
return _introspection.TypeNameMetaFieldDef;
}
if(type.getFields){
return type.getFields()[fieldName];
}
}


function find(array,predicate){
for(var i=0;i<array.length;i++){
if(predicate(array[i])){
return array[i];
}
}
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.default=keyValMap;



























function keyValMap(list,keyFn,valFn){
return list.reduce(function(map,item){
return map[keyFn(item)]=valFn(item),map;
},{});
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.default=quotedOrList;










var MAX_LENGTH=5;




function quotedOrList(items){
var selected=items.slice(0,MAX_LENGTH);
return selected.map(function(item){
return'"'+item+'"';
}).reduce(function(list,quoted,index){
return list+(selected.length>2?', ':' ')+(index===selected.length-1?'or ':'')+quoted;
});
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.default=suggestionList;














function suggestionList(input,options){
var optionsByDistance=Object.create(null);
var oLength=options.length;
var inputThreshold=input.length/2;
for(var i=0;i<oLength;i++){
var distance=lexicalDistance(input,options[i]);
var threshold=Math.max(inputThreshold,options[i].length/2,1);
if(distance<=threshold){
optionsByDistance[options[i]]=distance;
}
}
return Object.keys(optionsByDistance).sort(function(a,b){
return optionsByDistance[a]-optionsByDistance[b];
});
}















function lexicalDistance(a,b){
var i=void 0;
var j=void 0;
var d=[];
var aLength=a.length;
var bLength=b.length;

for(i=0;i<=aLength;i++){
d[i]=[i];
}

for(j=1;j<=bLength;j++){
d[0][j]=j;
}

for(i=1;i<=aLength;i++){
for(j=1;j<=bLength;j++){
var cost=a[i-1]===b[j-1]?0:1;

d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+cost);

if(i>1&&j>1&&a[i-1]===b[j-2]&&a[i-2]===b[j-1]){
d[i][j]=Math.min(d[i][j],d[i-2][j-2]+cost);
}
}
}

return d[aLength][bLength];
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.TokenKind=undefined;
exports.createLexer=createLexer;
exports.getTokenDesc=getTokenDesc;

var _error=__webpack_require__(2);









function createLexer(source,options){
var startOfFileToken=new Tok(SOF,0,0,0,0,null);
var lexer={
source:source,
options:options,
lastToken:startOfFileToken,
token:startOfFileToken,
line:1,
lineStart:0,
advance:advanceLexer};

return lexer;
}









function advanceLexer(){
var token=this.lastToken=this.token;
if(token.kind!==EOF){
do{
token=token.next=readToken(this,token);
}while(token.kind===COMMENT);
this.token=token;
}
return token;
}







var SOF='<SOF>';
var EOF='<EOF>';
var BANG='!';
var DOLLAR='$';
var PAREN_L='(';
var PAREN_R=')';
var SPREAD='...';
var COLON=':';
var EQUALS='=';
var AT='@';
var BRACKET_L='[';
var BRACKET_R=']';
var BRACE_L='{';
var PIPE='|';
var BRACE_R='}';
var NAME='Name';
var INT='Int';
var FLOAT='Float';
var STRING='String';
var COMMENT='Comment';





var TokenKind=exports.TokenKind={
SOF:SOF,
EOF:EOF,
BANG:BANG,
DOLLAR:DOLLAR,
PAREN_L:PAREN_L,
PAREN_R:PAREN_R,
SPREAD:SPREAD,
COLON:COLON,
EQUALS:EQUALS,
AT:AT,
BRACKET_L:BRACKET_L,
BRACKET_R:BRACKET_R,
BRACE_L:BRACE_L,
PIPE:PIPE,
BRACE_R:BRACE_R,
NAME:NAME,
INT:INT,
FLOAT:FLOAT,
STRING:STRING,
COMMENT:COMMENT};





function getTokenDesc(token){
var value=token.value;
return value?token.kind+' "'+value+'"':token.kind;
}

var charCodeAt=String.prototype.charCodeAt;
var slice=String.prototype.slice;




function Tok(kind,start,end,line,column,prev,value){
this.kind=kind;
this.start=start;
this.end=end;
this.line=line;
this.column=column;
this.value=value;
this.prev=prev;
this.next=null;
}


Tok.prototype.toJSON=Tok.prototype.inspect=function toJSON(){
return{
kind:this.kind,
value:this.value,
line:this.line,
column:this.column};

};

function printCharCode(code){
return(

isNaN(code)?EOF:

code<0x007F?JSON.stringify(String.fromCharCode(code)):

'"\\u'+('00'+code.toString(16).toUpperCase()).slice(-4)+'"');

}








function readToken(lexer,prev){
var source=lexer.source;
var body=source.body;
var bodyLength=body.length;

var position=positionAfterWhitespace(body,prev.end,lexer);
var line=lexer.line;
var col=1+position-lexer.lineStart;

if(position>=bodyLength){
return new Tok(EOF,bodyLength,bodyLength,line,col,prev);
}

var code=charCodeAt.call(body,position);


if(code<0x0020&&code!==0x0009&&code!==0x000A&&code!==0x000D){
throw(0,_error.syntaxError)(source,position,'Cannot contain the invalid character '+printCharCode(code)+'.');
}

switch(code){

case 33:
return new Tok(BANG,position,position+1,line,col,prev);

case 35:
return readComment(source,position,line,col,prev);

case 36:
return new Tok(DOLLAR,position,position+1,line,col,prev);

case 40:
return new Tok(PAREN_L,position,position+1,line,col,prev);

case 41:
return new Tok(PAREN_R,position,position+1,line,col,prev);

case 46:
if(charCodeAt.call(body,position+1)===46&&charCodeAt.call(body,position+2)===46){
return new Tok(SPREAD,position,position+3,line,col,prev);
}
break;

case 58:
return new Tok(COLON,position,position+1,line,col,prev);

case 61:
return new Tok(EQUALS,position,position+1,line,col,prev);

case 64:
return new Tok(AT,position,position+1,line,col,prev);

case 91:
return new Tok(BRACKET_L,position,position+1,line,col,prev);

case 93:
return new Tok(BRACKET_R,position,position+1,line,col,prev);

case 123:
return new Tok(BRACE_L,position,position+1,line,col,prev);

case 124:
return new Tok(PIPE,position,position+1,line,col,prev);

case 125:
return new Tok(BRACE_R,position,position+1,line,col,prev);

case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:
case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:
case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:
case 89:case 90:
case 95:
case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:
case 105:case 106:case 107:case 108:case 109:case 110:case 111:
case 112:case 113:case 114:case 115:case 116:case 117:case 118:
case 119:case 120:case 121:case 122:
return readName(source,position,line,col,prev);

case 45:
case 48:case 49:case 50:case 51:case 52:
case 53:case 54:case 55:case 56:case 57:
return readNumber(source,position,code,line,col,prev);

case 34:
return readString(source,position,line,col,prev);}


throw(0,_error.syntaxError)(source,position,unexpectedCharacterMessage(code));
}




function unexpectedCharacterMessage(code){
if(code===39){

return'Unexpected single quote character (\'), did you mean to use '+'a double quote (")?';
}

return'Cannot parse the unexpected character '+printCharCode(code)+'.';
}






function positionAfterWhitespace(body,startPosition,lexer){
var bodyLength=body.length;
var position=startPosition;
while(position<bodyLength){
var code=charCodeAt.call(body,position);

if(code===9||code===32||code===44||code===0xFEFF){
++position;
}else if(code===10){

++position;
++lexer.line;
lexer.lineStart=position;
}else if(code===13){

if(charCodeAt.call(body,position+1)===10){
position+=2;
}else{
++position;
}
++lexer.line;
lexer.lineStart=position;
}else{
break;
}
}
return position;
}






function readComment(source,start,line,col,prev){
var body=source.body;
var code=void 0;
var position=start;

do{
code=charCodeAt.call(body,++position);
}while(code!==null&&(

code>0x001F||code===0x0009));

return new Tok(COMMENT,start,position,line,col,prev,slice.call(body,start+1,position));
}








function readNumber(source,start,firstCode,line,col,prev){
var body=source.body;
var code=firstCode;
var position=start;
var isFloat=false;

if(code===45){

code=charCodeAt.call(body,++position);
}

if(code===48){

code=charCodeAt.call(body,++position);
if(code>=48&&code<=57){
throw(0,_error.syntaxError)(source,position,'Invalid number, unexpected digit after 0: '+printCharCode(code)+'.');
}
}else{
position=readDigits(source,position,code);
code=charCodeAt.call(body,position);
}

if(code===46){

isFloat=true;

code=charCodeAt.call(body,++position);
position=readDigits(source,position,code);
code=charCodeAt.call(body,position);
}

if(code===69||code===101){

isFloat=true;

code=charCodeAt.call(body,++position);
if(code===43||code===45){

code=charCodeAt.call(body,++position);
}
position=readDigits(source,position,code);
}

return new Tok(isFloat?FLOAT:INT,start,position,line,col,prev,slice.call(body,start,position));
}




function readDigits(source,start,firstCode){
var body=source.body;
var position=start;
var code=firstCode;
if(code>=48&&code<=57){

do{
code=charCodeAt.call(body,++position);
}while(code>=48&&code<=57);
return position;
}
throw(0,_error.syntaxError)(source,position,'Invalid number, expected digit but got: '+printCharCode(code)+'.');
}






function readString(source,start,line,col,prev){
var body=source.body;
var position=start+1;
var chunkStart=position;
var code=0;
var value='';

while(position<body.length&&(code=charCodeAt.call(body,position))!==null&&

code!==0x000A&&code!==0x000D&&

code!==34){

if(code<0x0020&&code!==0x0009){
throw(0,_error.syntaxError)(source,position,'Invalid character within String: '+printCharCode(code)+'.');
}

++position;
if(code===92){

value+=slice.call(body,chunkStart,position-1);
code=charCodeAt.call(body,position);
switch(code){
case 34:
value+='"';break;
case 47:
value+='/';break;
case 92:
value+='\\';break;
case 98:
value+='\b';break;
case 102:
value+='\f';break;
case 110:
value+='\n';break;
case 114:
value+='\r';break;
case 116:
value+='\t';break;
case 117:

var charCode=uniCharCode(charCodeAt.call(body,position+1),charCodeAt.call(body,position+2),charCodeAt.call(body,position+3),charCodeAt.call(body,position+4));
if(charCode<0){
throw(0,_error.syntaxError)(source,position,'Invalid character escape sequence: '+('\\u'+body.slice(position+1,position+5)+'.'));
}
value+=String.fromCharCode(charCode);
position+=4;
break;
default:
throw(0,_error.syntaxError)(source,position,'Invalid character escape sequence: \\'+String.fromCharCode(code)+'.');}

++position;
chunkStart=position;
}
}

if(code!==34){

throw(0,_error.syntaxError)(source,position,'Unterminated string.');
}

value+=slice.call(body,chunkStart,position);
return new Tok(STRING,start,position+1,line,col,prev,value);
}











function uniCharCode(a,b,c,d){
return char2hex(a)<<12|char2hex(b)<<8|char2hex(c)<<4|char2hex(d);
}









function char2hex(a){
return a>=48&&a<=57?a-48:
a>=65&&a<=70?a-55:
a>=97&&a<=102?a-87:
-1;
}






function readName(source,position,line,col,prev){
var body=source.body;
var bodyLength=body.length;
var end=position+1;
var code=0;
while(end!==bodyLength&&(code=charCodeAt.call(body,end))!==null&&(code===95||
code>=48&&code<=57||
code>=65&&code<=90||
code>=97&&code<=122))
{
++end;
}
return new Tok(NAME,position,end,line,col,prev,slice.call(body,position,end));
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.getLocation=getLocation;
















function getLocation(source,position){
var lineRegexp=/\r\n|[\n\r]/g;
var line=1;
var column=position+1;
var match=void 0;
while((match=lineRegexp.exec(source.body))&&match.index<position){
line+=1;
column=position+1-(match.index+match[0].length);
}
return{line:line,column:column};
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});


function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
















var Source=exports.Source=function Source(body,name){
_classCallCheck(this,Source);

this.body=body;
this.name=name||'GraphQL';
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.TypeInfo=undefined;

var _kinds=__webpack_require__(6);

var Kind=_interopRequireWildcard(_kinds);

var _definition=__webpack_require__(3);

var _introspection=__webpack_require__(11);

var _typeFromAST=__webpack_require__(15);

var _find=__webpack_require__(17);

var _find2=_interopRequireDefault(_find);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}

function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}














var TypeInfo=exports.TypeInfo=function(){
function TypeInfo(schema,


getFieldDefFn){
_classCallCheck(this,TypeInfo);

this._schema=schema;
this._typeStack=[];
this._parentTypeStack=[];
this._inputTypeStack=[];
this._fieldDefStack=[];
this._directive=null;
this._argument=null;
this._enumValue=null;
this._getFieldDef=getFieldDefFn||getFieldDef;
}

TypeInfo.prototype.getType=function getType(){
if(this._typeStack.length>0){
return this._typeStack[this._typeStack.length-1];
}
};

TypeInfo.prototype.getParentType=function getParentType(){
if(this._parentTypeStack.length>0){
return this._parentTypeStack[this._parentTypeStack.length-1];
}
};

TypeInfo.prototype.getInputType=function getInputType(){
if(this._inputTypeStack.length>0){
return this._inputTypeStack[this._inputTypeStack.length-1];
}
};

TypeInfo.prototype.getFieldDef=function getFieldDef(){
if(this._fieldDefStack.length>0){
return this._fieldDefStack[this._fieldDefStack.length-1];
}
};

TypeInfo.prototype.getDirective=function getDirective(){
return this._directive;
};

TypeInfo.prototype.getArgument=function getArgument(){
return this._argument;
};

TypeInfo.prototype.getEnumValue=function getEnumValue(){
return this._enumValue;
};




TypeInfo.prototype.enter=function enter(node){
var schema=this._schema;
switch(node.kind){
case Kind.SELECTION_SET:
var namedType=(0,_definition.getNamedType)(this.getType());
var compositeType=void 0;
if((0,_definition.isCompositeType)(namedType)){

compositeType=namedType;
}
this._parentTypeStack.push(compositeType);
break;
case Kind.FIELD:
var parentType=this.getParentType();
var fieldDef=void 0;
if(parentType){
fieldDef=this._getFieldDef(schema,parentType,node);
}
this._fieldDefStack.push(fieldDef);
this._typeStack.push(fieldDef&&fieldDef.type);
break;
case Kind.DIRECTIVE:
this._directive=schema.getDirective(node.name.value);
break;
case Kind.OPERATION_DEFINITION:
var type=void 0;
if(node.operation==='query'){
type=schema.getQueryType();
}else if(node.operation==='mutation'){
type=schema.getMutationType();
}else if(node.operation==='subscription'){
type=schema.getSubscriptionType();
}
this._typeStack.push(type);
break;
case Kind.INLINE_FRAGMENT:
case Kind.FRAGMENT_DEFINITION:
var typeConditionAST=node.typeCondition;
var outputType=typeConditionAST?(0,_typeFromAST.typeFromAST)(schema,typeConditionAST):this.getType();
this._typeStack.push(outputType);
break;
case Kind.VARIABLE_DEFINITION:
var inputType=(0,_typeFromAST.typeFromAST)(schema,node.type);
this._inputTypeStack.push(inputType);
break;
case Kind.ARGUMENT:
var argDef=void 0;
var argType=void 0;
var fieldOrDirective=this.getDirective()||this.getFieldDef();
if(fieldOrDirective){
argDef=(0,_find2.default)(fieldOrDirective.args,function(arg){
return arg.name===node.name.value;
});
if(argDef){
argType=argDef.type;
}
}
this._argument=argDef;
this._inputTypeStack.push(argType);
break;
case Kind.LIST:
var listType=(0,_definition.getNullableType)(this.getInputType());
this._inputTypeStack.push(listType instanceof _definition.GraphQLList?listType.ofType:undefined);
break;
case Kind.OBJECT_FIELD:
var objectType=(0,_definition.getNamedType)(this.getInputType());
var fieldType=void 0;
if(objectType instanceof _definition.GraphQLInputObjectType){
var inputField=objectType.getFields()[node.name.value];
fieldType=inputField?inputField.type:undefined;
}
this._inputTypeStack.push(fieldType);
break;
case Kind.ENUM:
var enumType=(0,_definition.getNamedType)(this.getInputType());
var enumValue=void 0;
if(enumType instanceof _definition.GraphQLEnumType){
enumValue=enumType.getValue(node.value);
}
this._enumValue=enumValue;
break;}

};

TypeInfo.prototype.leave=function leave(node){
switch(node.kind){
case Kind.SELECTION_SET:
this._parentTypeStack.pop();
break;
case Kind.FIELD:
this._fieldDefStack.pop();
this._typeStack.pop();
break;
case Kind.DIRECTIVE:
this._directive=null;
break;
case Kind.OPERATION_DEFINITION:
case Kind.INLINE_FRAGMENT:
case Kind.FRAGMENT_DEFINITION:
this._typeStack.pop();
break;
case Kind.VARIABLE_DEFINITION:
this._inputTypeStack.pop();
break;
case Kind.ARGUMENT:
this._argument=null;
this._inputTypeStack.pop();
break;
case Kind.LIST:
case Kind.OBJECT_FIELD:
this._inputTypeStack.pop();
break;
case Kind.ENUM:
this._enumValue=null;
break;}

};

return TypeInfo;
}();








function getFieldDef(schema,parentType,fieldNode){
var name=fieldNode.name.value;
if(name===_introspection.SchemaMetaFieldDef.name&&schema.getQueryType()===parentType){
return _introspection.SchemaMetaFieldDef;
}
if(name===_introspection.TypeMetaFieldDef.name&&schema.getQueryType()===parentType){
return _introspection.TypeMetaFieldDef;
}
if(name===_introspection.TypeNameMetaFieldDef.name&&(parentType instanceof _definition.GraphQLObjectType||parentType instanceof _definition.GraphQLInterfaceType||parentType instanceof _definition.GraphQLUnionType)){
return _introspection.TypeNameMetaFieldDef;
}
if(parentType instanceof _definition.GraphQLObjectType||parentType instanceof _definition.GraphQLInterfaceType){
return parentType.getFields()[name];
}
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.assertValidName=assertValidName;










var NAME_RX=/^[_a-zA-Z][_a-zA-Z0-9]*$/;


var hasWarnedAboutDunder=false;




function assertValidName(name,isIntrospection){
if(!name||typeof name!=='string'){
throw new Error('Must be named. Unexpected name: '+name+'.');
}
if(!isIntrospection&&name.slice(0,2)==='__'&&!hasWarnedAboutDunder){
hasWarnedAboutDunder=true;

if(console&&console.error){
var error=new Error('Name "'+name+'" must not begin with "__", which is reserved by '+'GraphQL introspection.');
console.error(error.stack||String(error));
}

}
if(!NAME_RX.test(name)){
throw new Error('Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but "'+name+'" does not.');
}
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.astFromValue=astFromValue;

var _iterall=__webpack_require__(39);

var _invariant=__webpack_require__(7);

var _invariant2=_interopRequireDefault(_invariant);

var _isNullish=__webpack_require__(12);

var _isNullish2=_interopRequireDefault(_isNullish);

var _isInvalid=__webpack_require__(26);

var _isInvalid2=_interopRequireDefault(_isInvalid);

var _kinds=__webpack_require__(6);

var _definition=__webpack_require__(3);

var _scalars=__webpack_require__(13);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}


















function astFromValue(value,type){

var _value=value;

if(type instanceof _definition.GraphQLNonNull){
var astValue=astFromValue(_value,type.ofType);
if(astValue&&astValue.kind===_kinds.NULL){
return null;
}
return astValue;
}


if(_value===null){
return{kind:_kinds.NULL};
}


if((0,_isInvalid2.default)(_value)){
return null;
}



if(type instanceof _definition.GraphQLList){
var _ret=function(){
var itemType=type.ofType;
if((0,_iterall.isCollection)(_value)){
var _ret2=function(){
var valuesNodes=[];
(0,_iterall.forEach)(_value,function(item){
var itemNode=astFromValue(item,itemType);
if(itemNode){
valuesNodes.push(itemNode);
}
});
return{
v:{
v:{kind:_kinds.LIST,values:valuesNodes}}};


}();

if(typeof _ret2==="object")return _ret2.v;
}
return{
v:astFromValue(_value,itemType)};

}();

if(typeof _ret==="object")return _ret.v;
}



if(type instanceof _definition.GraphQLInputObjectType){
var _ret3=function(){
if(_value===null||typeof _value!=='object'){
return{
v:null};

}
var fields=type.getFields();
var fieldNodes=[];
Object.keys(fields).forEach(function(fieldName){
var fieldType=fields[fieldName].type;
var fieldValue=astFromValue(_value[fieldName],fieldType);
if(fieldValue){
fieldNodes.push({
kind:_kinds.OBJECT_FIELD,
name:{kind:_kinds.NAME,value:fieldName},
value:fieldValue});

}
});
return{
v:{kind:_kinds.OBJECT,fields:fieldNodes}};

}();

if(typeof _ret3==="object")return _ret3.v;
}

(0,_invariant2.default)(type instanceof _definition.GraphQLScalarType||type instanceof _definition.GraphQLEnumType,'Must provide Input Type, cannot use: '+String(type));



var serialized=type.serialize(_value);
if((0,_isNullish2.default)(serialized)){
return null;
}


if(typeof serialized==='boolean'){
return{kind:_kinds.BOOLEAN,value:serialized};
}


if(typeof serialized==='number'){
var stringNum=String(serialized);
return /^[0-9]+$/.test(stringNum)?{kind:_kinds.INT,value:stringNum}:{kind:_kinds.FLOAT,value:stringNum};

}

if(typeof serialized==='string'){

if(type instanceof _definition.GraphQLEnumType){
return{kind:_kinds.ENUM,value:serialized};
}


if(type===_scalars.GraphQLID&&/^[0-9]+$/.test(serialized)){
return{kind:_kinds.INT,value:serialized};
}



return{
kind:_kinds.STRING,
value:JSON.stringify(serialized).slice(1,-1)};

}

throw new TypeError('Cannot convert value to AST: '+String(serialized));
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule=true;
exports.go=exports.replaceLocation=exports.pushLocation=exports.startListener=exports.getUserConfirmation=exports.getCurrentLocation=undefined;

var _LocationUtils=__webpack_require__(18);

var _DOMUtils=__webpack_require__(29);

var _DOMStateStorage=__webpack_require__(73);

var _PathUtils=__webpack_require__(16);

var _ExecutionEnvironment=__webpack_require__(38);

var PopStateEvent='popstate';
var HashChangeEvent='hashchange';

var needsHashchangeListener=_ExecutionEnvironment.canUseDOM&&!(0,_DOMUtils.supportsPopstateOnHashchange)();

var _createLocation=function _createLocation(historyState){
var key=historyState&&historyState.key;

return(0,_LocationUtils.createLocation)({
pathname:window.location.pathname,
search:window.location.search,
hash:window.location.hash,
state:key?(0,_DOMStateStorage.readState)(key):undefined},
undefined,key);
};

var getCurrentLocation=exports.getCurrentLocation=function getCurrentLocation(){
var historyState=void 0;
try{
historyState=window.history.state||{};
}catch(error){


historyState={};
}

return _createLocation(historyState);
};

var getUserConfirmation=exports.getUserConfirmation=function getUserConfirmation(message,callback){
return callback(window.confirm(message));
};

var startListener=exports.startListener=function startListener(listener){
var handlePopState=function handlePopState(event){
if(event.state!==undefined)
listener(_createLocation(event.state));
};

(0,_DOMUtils.addEventListener)(window,PopStateEvent,handlePopState);

var handleUnpoppedHashChange=function handleUnpoppedHashChange(){
return listener(getCurrentLocation());
};

if(needsHashchangeListener){
(0,_DOMUtils.addEventListener)(window,HashChangeEvent,handleUnpoppedHashChange);
}

return function(){
(0,_DOMUtils.removeEventListener)(window,PopStateEvent,handlePopState);

if(needsHashchangeListener){
(0,_DOMUtils.removeEventListener)(window,HashChangeEvent,handleUnpoppedHashChange);
}
};
};

var updateLocation=function updateLocation(location,updateState){
var state=location.state;
var key=location.key;


if(state!==undefined)(0,_DOMStateStorage.saveState)(key,state);

updateState({key:key},(0,_PathUtils.createPath)(location));
};

var pushLocation=exports.pushLocation=function pushLocation(location){
return updateLocation(location,function(state,path){
return window.history.pushState(state,null,path);
});
};

var replaceLocation=exports.replaceLocation=function replaceLocation(location){
return updateLocation(location,function(state,path){
return window.history.replaceState(state,null,path);
});
};

var go=exports.go=function go(n){
if(n)window.history.go(n);
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule=true;

var _AsyncUtils=__webpack_require__(164);

var _PathUtils=__webpack_require__(16);

var _runTransitionHook=__webpack_require__(54);

var _runTransitionHook2=_interopRequireDefault(_runTransitionHook);

var _Actions=__webpack_require__(37);

var _LocationUtils=__webpack_require__(18);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var createHistory=function createHistory(){
var options=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
var getCurrentLocation=options.getCurrentLocation;
var getUserConfirmation=options.getUserConfirmation;
var pushLocation=options.pushLocation;
var replaceLocation=options.replaceLocation;
var go=options.go;
var keyLength=options.keyLength;


var currentLocation=void 0;
var pendingLocation=void 0;
var beforeListeners=[];
var listeners=[];
var allKeys=[];

var getCurrentIndex=function getCurrentIndex(){
if(pendingLocation&&pendingLocation.action===_Actions.POP)return allKeys.indexOf(pendingLocation.key);

if(currentLocation)return allKeys.indexOf(currentLocation.key);

return-1;
};

var updateLocation=function updateLocation(nextLocation){
var currentIndex=getCurrentIndex();

currentLocation=nextLocation;

if(currentLocation.action===_Actions.PUSH){
allKeys=[].concat(allKeys.slice(0,currentIndex+1),[currentLocation.key]);
}else if(currentLocation.action===_Actions.REPLACE){
allKeys[currentIndex]=currentLocation.key;
}

listeners.forEach(function(listener){
return listener(currentLocation);
});
};

var listenBefore=function listenBefore(listener){
beforeListeners.push(listener);

return function(){
return beforeListeners=beforeListeners.filter(function(item){
return item!==listener;
});
};
};

var listen=function listen(listener){
listeners.push(listener);

return function(){
return listeners=listeners.filter(function(item){
return item!==listener;
});
};
};

var confirmTransitionTo=function confirmTransitionTo(location,callback){
(0,_AsyncUtils.loopAsync)(beforeListeners.length,function(index,next,done){
(0,_runTransitionHook2.default)(beforeListeners[index],location,function(result){
return result!=null?done(result):next();
});
},function(message){
if(getUserConfirmation&&typeof message==='string'){
getUserConfirmation(message,function(ok){
return callback(ok!==false);
});
}else{
callback(message!==false);
}
});
};

var transitionTo=function transitionTo(nextLocation){
if(currentLocation&&(0,_LocationUtils.locationsAreEqual)(currentLocation,nextLocation)||pendingLocation&&(0,_LocationUtils.locationsAreEqual)(pendingLocation,nextLocation))return;

pendingLocation=nextLocation;

confirmTransitionTo(nextLocation,function(ok){
if(pendingLocation!==nextLocation)return;

pendingLocation=null;

if(ok){

if(nextLocation.action===_Actions.PUSH){
var prevPath=(0,_PathUtils.createPath)(currentLocation);
var nextPath=(0,_PathUtils.createPath)(nextLocation);

if(nextPath===prevPath&&(0,_LocationUtils.statesAreEqual)(currentLocation.state,nextLocation.state))nextLocation.action=_Actions.REPLACE;
}

if(nextLocation.action===_Actions.POP){
updateLocation(nextLocation);
}else if(nextLocation.action===_Actions.PUSH){
if(pushLocation(nextLocation)!==false)updateLocation(nextLocation);
}else if(nextLocation.action===_Actions.REPLACE){
if(replaceLocation(nextLocation)!==false)updateLocation(nextLocation);
}
}else if(currentLocation&&nextLocation.action===_Actions.POP){
var prevIndex=allKeys.indexOf(currentLocation.key);
var nextIndex=allKeys.indexOf(nextLocation.key);

if(prevIndex!==-1&&nextIndex!==-1)go(prevIndex-nextIndex);
}
});
};

var push=function push(input){
return transitionTo(createLocation(input,_Actions.PUSH));
};

var replace=function replace(input){
return transitionTo(createLocation(input,_Actions.REPLACE));
};

var goBack=function goBack(){
return go(-1);
};

var goForward=function goForward(){
return go(1);
};

var createKey=function createKey(){
return Math.random().toString(36).substr(2,keyLength||6);
};

var createHref=function createHref(location){
return(0,_PathUtils.createPath)(location);
};

var createLocation=function createLocation(location,action){
var key=arguments.length<=2||arguments[2]===undefined?createKey():arguments[2];
return(0,_LocationUtils.createLocation)(location,action,key);
};

return{
getCurrentLocation:getCurrentLocation,
listenBefore:listenBefore,
listen:listen,
transitionTo:transitionTo,
push:push,
replace:replace,
go:go,
goBack:goBack,
goForward:goForward,
createKey:createKey,
createPath:_PathUtils.createPath,
createHref:createHref,
createLocation:createLocation};

};

exports.default=createHistory;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule=true;

var _warning=__webpack_require__(20);

var _warning2=_interopRequireDefault(_warning);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var runTransitionHook=function runTransitionHook(hook,location,callback){
var result=hook(location,callback);

if(hook.length<2){


callback(result);
}else{
process.env.NODE_ENV!=='production'?(0,_warning2.default)(result===undefined,'You should not "return" in a transition hook with a callback argument; '+'call the callback instead'):void 0;
}
};

exports.default=runTransitionHook;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _baseGetTag=__webpack_require__(173);var _baseGetTag2=_interopRequireDefault(_baseGetTag);
var _getPrototype=__webpack_require__(175);var _getPrototype2=_interopRequireDefault(_getPrototype);
var _isObjectLike=__webpack_require__(180);var _isObjectLike2=_interopRequireDefault(_isObjectLike);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var objectTag='[object Object]';


var funcProto=Function.prototype,
objectProto=Object.prototype;


var funcToString=funcProto.toString;


var hasOwnProperty=objectProto.hasOwnProperty;


var objectCtorString=funcToString.call(Object);





























function isPlainObject(value){
if(!(0,_isObjectLike2.default)(value)||(0,_baseGetTag2.default)(value)!=objectTag){
return false;
}
var proto=(0,_getPrototype2.default)(value);
if(proto===null){
return true;
}
var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;
return typeof Ctor=='function'&&Ctor instanceof Ctor&&
funcToString.call(Ctor)==objectCtorString;
}exports.default=

isPlainObject;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=





warning;function warning(message){

if(typeof console!=='undefined'&&typeof console.error==='function'){
console.error(message);
}

try{



throw new Error(message);

}catch(e){}

}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _reactNative=__webpack_require__(0);
var _utils=__webpack_require__(19);

var _NavigationAbstractPanResponder=__webpack_require__(81);var _NavigationAbstractPanResponder2=_interopRequireDefault(_NavigationAbstractPanResponder);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}






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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.utils=undefined;var _components=__webpack_require__(202);Object.keys(_components).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _components[key];}});});

var _utils=__webpack_require__(19);var utilsImport=_interopRequireWildcard(_utils);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}
var utils=exports.utils=utilsImport;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});exports.compose=exports.applyMiddleware=exports.bindActionCreators=exports.combineReducers=exports.createStore=undefined;var _createStore=__webpack_require__(89);var _createStore2=_interopRequireDefault(_createStore);
var _combineReducers=__webpack_require__(214);var _combineReducers2=_interopRequireDefault(_combineReducers);
var _bindActionCreators=__webpack_require__(213);var _bindActionCreators2=_interopRequireDefault(_bindActionCreators);
var _applyMiddleware=__webpack_require__(212);var _applyMiddleware2=_interopRequireDefault(_applyMiddleware);
var _compose=__webpack_require__(88);var _compose2=_interopRequireDefault(_compose);
var _warning=__webpack_require__(90);var _warning2=_interopRequireDefault(_warning);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}





function isCrushed(){}

if(process.env.NODE_ENV!=='production'&&typeof isCrushed.name==='string'&&isCrushed.name!=='isCrushed'){
(0,_warning2.default)('You are currently using minified code outside of NODE_ENV === \'production\'. '+'This means that you are running a slower development build of Redux. '+'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify '+'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) '+'to ensure you have the correct code for your production build.');
}exports.

createStore=_createStore2.default;exports.combineReducers=_combineReducers2.default;exports.bindActionCreators=_bindActionCreators2.default;exports.applyMiddleware=_applyMiddleware2.default;exports.compose=_compose2.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.

injectEditor=injectEditor;var _codemirror=__webpack_require__(5);var _codemirror2=_interopRequireDefault(_codemirror);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function injectEditor(options){
__webpack_require__(115);
__webpack_require__(110);
__webpack_require__(66);
__webpack_require__(111);
__webpack_require__(114);
__webpack_require__(112);
__webpack_require__(116);
__webpack_require__(118);

var extraKeys=options.extraKeys||{};

this.editor=(0,_codemirror2.default)(this.domNode,_extends({
lineNumbers:true,
tabSize:2,
theme:'wings'},
options,{
extraKeys:_extends({
'Ctrl-Left':'goSubwordLeft',
'Ctrl-Right':'goSubwordRight',
'Alt-Left':'goGroupLeft',
'Alt-Right':'goGroupRight'},
extraKeys)}));


}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(6);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.ParseRules=exports.LexRules=exports.isIgnored=undefined;

var _RuleHelpers=__webpack_require__(103);




var isIgnored=exports.isIgnored=function isIgnored(ch){
return ch===' '||ch==='\t'||ch===','||ch==='\n'||ch==='\r'||ch==='\uFEFF';
};













var LexRules=exports.LexRules={

Name:/^[_A-Za-z][_0-9A-Za-z]*/,


Punctuation:/^(?:!|\$|\(|\)|\.\.\.|:|=|@|\[|]|\{|\||\})/,


Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,


String:/^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,


Comment:/^#.*/};







var ParseRules=exports.ParseRules={
Document:[(0,_RuleHelpers.list)('Definition')],
Definition:function Definition(token){
switch(token.value){
case'{':
return'ShortQuery';
case'query':
return'Query';
case'mutation':
return'Mutation';
case'subscription':
return'Subscription';
case'fragment':
return'FragmentDefinition';
case'schema':
return'SchemaDef';
case'scalar':
return'ScalarDef';
case'type':
return'ObjectTypeDef';
case'interface':
return'InterfaceDef';
case'union':
return'UnionDef';
case'enum':
return'EnumDef';
case'input':
return'InputDef';
case'extend':
return'ExtendDef';
case'directive':
return'DirectiveDef';}

},


ShortQuery:['SelectionSet'],
Query:[word('query'),(0,_RuleHelpers.opt)(name('def')),(0,_RuleHelpers.opt)('VariableDefinitions'),(0,_RuleHelpers.list)('Directive'),'SelectionSet'],
Mutation:[word('mutation'),(0,_RuleHelpers.opt)(name('def')),(0,_RuleHelpers.opt)('VariableDefinitions'),(0,_RuleHelpers.list)('Directive'),'SelectionSet'],
Subscription:[word('subscription'),(0,_RuleHelpers.opt)(name('def')),(0,_RuleHelpers.opt)('VariableDefinitions'),(0,_RuleHelpers.list)('Directive'),'SelectionSet'],
VariableDefinitions:[(0,_RuleHelpers.p)('('),(0,_RuleHelpers.list)('VariableDefinition'),(0,_RuleHelpers.p)(')')],
VariableDefinition:['Variable',(0,_RuleHelpers.p)(':'),'Type',(0,_RuleHelpers.opt)('DefaultValue')],
Variable:[(0,_RuleHelpers.p)('$','variable'),name('variable')],
DefaultValue:[(0,_RuleHelpers.p)('='),'Value'],
SelectionSet:[(0,_RuleHelpers.p)('{'),(0,_RuleHelpers.list)('Selection'),(0,_RuleHelpers.p)('}')],
Selection:function Selection(token,stream){
return token.value==='...'?stream.match(/[\s\u00a0,]*(on\b|@|{)/,false)?'InlineFragment':'FragmentSpread':stream.match(/[\s\u00a0,]*:/,false)?'AliasedField':'Field';
},


AliasedField:[name('property'),(0,_RuleHelpers.p)(':'),name('qualifier'),(0,_RuleHelpers.opt)('Arguments'),(0,_RuleHelpers.list)('Directive'),(0,_RuleHelpers.opt)('SelectionSet')],
Field:[name('property'),(0,_RuleHelpers.opt)('Arguments'),(0,_RuleHelpers.list)('Directive'),(0,_RuleHelpers.opt)('SelectionSet')],
Arguments:[(0,_RuleHelpers.p)('('),(0,_RuleHelpers.list)('Argument'),(0,_RuleHelpers.p)(')')],
Argument:[name('attribute'),(0,_RuleHelpers.p)(':'),'Value'],
FragmentSpread:[(0,_RuleHelpers.p)('...'),name('def'),(0,_RuleHelpers.list)('Directive')],
InlineFragment:[(0,_RuleHelpers.p)('...'),(0,_RuleHelpers.opt)('TypeCondition'),(0,_RuleHelpers.list)('Directive'),'SelectionSet'],
FragmentDefinition:[word('fragment'),(0,_RuleHelpers.opt)((0,_RuleHelpers.butNot)(name('def'),[word('on')])),'TypeCondition',(0,_RuleHelpers.list)('Directive'),'SelectionSet'],
TypeCondition:[word('on'),'NamedType'],

Value:function Value(token){
switch(token.kind){
case'Number':
return'NumberValue';
case'String':
return'StringValue';
case'Punctuation':
switch(token.value){
case'[':
return'ListValue';
case'{':
return'ObjectValue';
case'$':
return'Variable';}

return null;
case'Name':
switch(token.value){
case'true':case'false':
return'BooleanValue';}

if(token.value==='null'){
return'NullValue';
}
return'EnumValue';}

},

NumberValue:[(0,_RuleHelpers.t)('Number','number')],
StringValue:[(0,_RuleHelpers.t)('String','string')],
BooleanValue:[(0,_RuleHelpers.t)('Name','builtin')],
NullValue:[(0,_RuleHelpers.t)('Name','keyword')],
EnumValue:[name('string-2')],
ListValue:[(0,_RuleHelpers.p)('['),(0,_RuleHelpers.list)('Value'),(0,_RuleHelpers.p)(']')],
ObjectValue:[(0,_RuleHelpers.p)('{'),(0,_RuleHelpers.list)('ObjectField'),(0,_RuleHelpers.p)('}')],
ObjectField:[name('attribute'),(0,_RuleHelpers.p)(':'),'Value'],
Type:function Type(token){
return token.value==='['?'ListType':'NonNullType';
},


ListType:[(0,_RuleHelpers.p)('['),'Type',(0,_RuleHelpers.p)(']'),(0,_RuleHelpers.opt)((0,_RuleHelpers.p)('!'))],
NonNullType:['NamedType',(0,_RuleHelpers.opt)((0,_RuleHelpers.p)('!'))],
NamedType:[type('atom')],
Directive:[(0,_RuleHelpers.p)('@','meta'),name('meta'),(0,_RuleHelpers.opt)('Arguments')],

SchemaDef:[word('schema'),(0,_RuleHelpers.list)('Directive'),(0,_RuleHelpers.p)('{'),(0,_RuleHelpers.list)('OperationTypeDef'),(0,_RuleHelpers.p)('}')],
OperationTypeDef:[name('keyword'),(0,_RuleHelpers.p)(':'),name('atom')],
ScalarDef:[word('scalar'),name('atom'),(0,_RuleHelpers.list)('Directive')],
ObjectTypeDef:[word('type'),name('atom'),(0,_RuleHelpers.opt)('Implements'),(0,_RuleHelpers.list)('Directive'),(0,_RuleHelpers.p)('{'),(0,_RuleHelpers.list)('FieldDef'),(0,_RuleHelpers.p)('}')],
Implements:[word('implements'),(0,_RuleHelpers.list)('NamedType')],
FieldDef:[name('property'),(0,_RuleHelpers.opt)('ArgumentsDef'),(0,_RuleHelpers.p)(':'),'Type',(0,_RuleHelpers.list)('Directive')],
ArgumentsDef:[(0,_RuleHelpers.p)('('),(0,_RuleHelpers.list)('InputValueDef'),(0,_RuleHelpers.p)(')')],
InputValueDef:[name('attribute'),(0,_RuleHelpers.p)(':'),'Type',(0,_RuleHelpers.opt)('DefaultValue'),(0,_RuleHelpers.list)('Directive')],
InterfaceDef:[word('interface'),name('atom'),(0,_RuleHelpers.list)('Directive'),(0,_RuleHelpers.p)('{'),(0,_RuleHelpers.list)('FieldDef'),(0,_RuleHelpers.p)('}')],
UnionDef:[word('union'),name('atom'),(0,_RuleHelpers.list)('Directive'),(0,_RuleHelpers.p)('='),(0,_RuleHelpers.list)('UnionMember',(0,_RuleHelpers.p)('|'))],
UnionMember:['NamedType'],
EnumDef:[word('enum'),name('atom'),(0,_RuleHelpers.list)('Directive'),(0,_RuleHelpers.p)('{'),(0,_RuleHelpers.list)('EnumValueDef'),(0,_RuleHelpers.p)('}')],
EnumValueDef:[name('string-2'),(0,_RuleHelpers.list)('Directive')],
InputDef:[word('input'),name('atom'),(0,_RuleHelpers.list)('Directive'),(0,_RuleHelpers.p)('{'),(0,_RuleHelpers.list)('InputValueDef'),(0,_RuleHelpers.p)('}')],
ExtendDef:[word('extend'),'ObjectTypeDef'],
DirectiveDef:[word('directive'),(0,_RuleHelpers.p)('@','meta'),name('meta'),(0,_RuleHelpers.opt)('ArgumentsDef'),word('on'),(0,_RuleHelpers.list)('DirectiveLocation',(0,_RuleHelpers.p)('|'))],
DirectiveLocation:[name('string-2')]};



function word(value){
return{
style:'keyword',
match:function match(token){
return token.kind==='Name'&&token.value===value;
}};

}


function name(style){
return{
style:style,
match:function match(token){
return token.kind==='Name';
},
update:function update(state,token){
state.name=token.value;
}};

}


function type(style){
return{
style:style,
match:function match(token){
return token.kind==='Name';
},
update:function update(state,token){
state.name=token.value;
state.prevState.prevState.type=token.value;
}};

}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.getFieldReference=getFieldReference;
exports.getDirectiveReference=getDirectiveReference;
exports.getArgumentReference=getArgumentReference;
exports.getEnumValueReference=getEnumValueReference;
exports.getTypeReference=getTypeReference;

var _graphql=__webpack_require__(21);

function getFieldReference(typeInfo){
return{
kind:'Field',
schema:typeInfo.schema,
field:typeInfo.fieldDef,
type:isMetaField(typeInfo.fieldDef)?null:typeInfo.parentType};

}









function getDirectiveReference(typeInfo){
return{
kind:'Directive',
schema:typeInfo.schema,
directive:typeInfo.directiveDef};

}

function getArgumentReference(typeInfo){
return typeInfo.directiveDef?{
kind:'Argument',
schema:typeInfo.schema,
argument:typeInfo.argDef,
directive:typeInfo.directiveDef}:
{
kind:'Argument',
schema:typeInfo.schema,
argument:typeInfo.argDef,
field:typeInfo.fieldDef,
type:isMetaField(typeInfo.fieldDef)?null:typeInfo.parentType};

}

function getEnumValueReference(typeInfo){
return{
kind:'EnumValue',
value:typeInfo.enumValue,
type:(0,_graphql.getNamedType)(typeInfo.inputType)};

}



function getTypeReference(typeInfo,type){
return{
kind:'Type',
schema:typeInfo.schema,
type:type||typeInfo.type};

}

function isMetaField(fieldDef){
return fieldDef.name.slice(0,2)==='__';
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.default=forEachState;










function forEachState(stack,fn){
var reverseStateStack=[];
var state=stack;
while(state&&state.kind){
reverseStateStack.push(state);
state=state.prevState;
}
for(var i=reverseStateStack.length-1;i>=0;i--){
fn(reverseStateStack[i]);
}
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.default=onlineParser;





























function onlineParser(options){
return{
startState:function startState(){
var initialState={level:0};
pushRule(options.ParseRules,initialState,'Document');
return initialState;
},
token:function token(stream,state){
return getToken(stream,state,options);
}};

}

function getToken(stream,state,options){
var LexRules=options.LexRules,
ParseRules=options.ParseRules,
eatWhitespace=options.eatWhitespace,
editorConfig=options.editorConfig;



if(state.rule&&state.rule.length===0){
popRule(state);
}else if(state.needsAdvance){
state.needsAdvance=false;
advanceRule(state,true);
}


if(stream.sol()){
var tabSize=editorConfig&&editorConfig.tabSize||2;
state.indentLevel=Math.floor(stream.indentation()/tabSize);
}


if(eatWhitespace(stream)){
return'ws';
}


var token=lex(LexRules,stream);


if(!token){
stream.match(/\S+/);
pushRule(SpecialParseRules,state,'Invalid');
return'invalidchar';
}


if(token.kind==='Comment'){
pushRule(SpecialParseRules,state,'Comment');
return'comment';
}


var backupState=assign({},state);


if(token.kind==='Punctuation'){
if(/^[{([]/.test(token.value)){

state.levels=(state.levels||[]).concat(state.indentLevel+1);
}else if(/^[})\]]/.test(token.value)){



var levels=state.levels=(state.levels||[]).slice(0,-1);
if(levels.length>0&&levels[levels.length-1]<state.indentLevel){
state.indentLevel=levels[levels.length-1];
}
}
}

while(state.rule){


var expected=typeof state.rule==='function'?state.step===0?state.rule(token,stream):null:state.rule[state.step];


if(state.needsSeperator){
expected=expected&&expected.separator;
}

if(expected){

if(expected.ofRule){
expected=expected.ofRule;
}


if(typeof expected==='string'){
pushRule(ParseRules,state,expected);
continue;
}


if(expected.match&&expected.match(token)){
if(expected.update){
expected.update(state,token);
}




if(token.kind==='Punctuation'){
advanceRule(state,true);
}else{
state.needsAdvance=true;
}

return expected.style;
}
}

unsuccessful(state);
}


assign(state,backupState);
pushRule(SpecialParseRules,state,'Invalid');
return'invalidchar';
}


var SpecialParseRules={
Invalid:[],
Comment:[]};


function assign(to,from){
var keys=Object.keys(from);
for(var i=0;i<keys.length;i++){
to[keys[i]]=from[keys[i]];
}
return to;
}


function pushRule(ParseRules,state,ruleKind){
if(!ParseRules[ruleKind]){
throw new TypeError('Unknown rule: '+ruleKind);
}
state.prevState=assign({},state);
state.kind=ruleKind;
state.name=null;
state.type=null;
state.rule=ParseRules[ruleKind];
state.step=0;
state.needsSeperator=false;
}


function popRule(state){
state.kind=state.prevState.kind;
state.name=state.prevState.name;
state.type=state.prevState.type;
state.rule=state.prevState.rule;
state.step=state.prevState.step;
state.needsSeperator=state.prevState.needsSeperator;
state.prevState=state.prevState.prevState;
}


function advanceRule(state,successful){


if(isList(state)){
var separator=state.rule[state.step].separator;
if(separator){
state.needsSeperator=!state.needsSeperator;

if(!state.needsSeperator&&separator.ofRule){
return;
}
}

if(successful){
return;
}
}



state.needsSeperator=false;
state.step++;

while(state.rule&&!(Array.isArray(state.rule)&&state.step<state.rule.length)){
popRule(state);

if(state.rule){

if(isList(state)){
if(state.rule[state.step].separator){
state.needsSeperator=!state.needsSeperator;
}
}else{
state.needsSeperator=false;
state.step++;
}
}
}
}

function isList(state){
return Array.isArray(state.rule)&&state.rule[state.step].isList;
}


function unsuccessful(state){


while(state.rule&&!(Array.isArray(state.rule)&&state.rule[state.step].ofRule)){
popRule(state);
}



if(state.rule){
advanceRule(state,false);
}
}


function lex(LexRules,stream){
var kinds=Object.keys(LexRules);
for(var i=0;i<kinds.length;i++){
var match=stream.match(LexRules[kinds[i]]);
if(match){
return{kind:kinds[i],value:match[0]};
}
}
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {




(function(mod){
if(true)
mod(__webpack_require__(5));else
if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else

mod(CodeMirror);
})(function(CodeMirror){
var ie_lt8=/MSIE \d/.test(navigator.userAgent)&&(
document.documentMode==null||document.documentMode<8);

var Pos=CodeMirror.Pos;

var matching={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<"};

function findMatchingBracket(cm,where,strict,config){
var line=cm.getLineHandle(where.line),pos=where.ch-1;
var match=pos>=0&&matching[line.text.charAt(pos)]||matching[line.text.charAt(++pos)];
if(!match)return null;
var dir=match.charAt(1)==">"?1:-1;
if(strict&&dir>0!=(pos==where.ch))return null;
var style=cm.getTokenTypeAt(Pos(where.line,pos+1));

var found=scanForBracket(cm,Pos(where.line,pos+(dir>0?1:0)),dir,style||null,config);
if(found==null)return null;
return{from:Pos(where.line,pos),to:found&&found.pos,
match:found&&found.ch==match.charAt(0),forward:dir>0};
}








function scanForBracket(cm,where,dir,style,config){
var maxScanLen=config&&config.maxScanLineLength||10000;
var maxScanLines=config&&config.maxScanLines||1000;

var stack=[];
var re=config&&config.bracketRegex?config.bracketRegex:/[(){}[\]]/;
var lineEnd=dir>0?Math.min(where.line+maxScanLines,cm.lastLine()+1):
Math.max(cm.firstLine()-1,where.line-maxScanLines);
for(var lineNo=where.line;lineNo!=lineEnd;lineNo+=dir){
var line=cm.getLine(lineNo);
if(!line)continue;
var pos=dir>0?0:line.length-1,end=dir>0?line.length:-1;
if(line.length>maxScanLen)continue;
if(lineNo==where.line)pos=where.ch-(dir<0?1:0);
for(;pos!=end;pos+=dir){
var ch=line.charAt(pos);
if(re.test(ch)&&(style===undefined||cm.getTokenTypeAt(Pos(lineNo,pos+1))==style)){
var match=matching[ch];
if(match.charAt(1)==">"==dir>0)stack.push(ch);else
if(!stack.length)return{pos:Pos(lineNo,pos),ch:ch};else
stack.pop();
}
}
}
return lineNo-dir==(dir>0?cm.lastLine():cm.firstLine())?false:null;
}

function matchBrackets(cm,autoclear,config){

var maxHighlightLen=cm.state.matchBrackets.maxHighlightLineLength||1000;
var marks=[],ranges=cm.listSelections();
for(var i=0;i<ranges.length;i++){
var match=ranges[i].empty()&&findMatchingBracket(cm,ranges[i].head,false,config);
if(match&&cm.getLine(match.from.line).length<=maxHighlightLen){
var style=match.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";
marks.push(cm.markText(match.from,Pos(match.from.line,match.from.ch+1),{className:style}));
if(match.to&&cm.getLine(match.to.line).length<=maxHighlightLen)
marks.push(cm.markText(match.to,Pos(match.to.line,match.to.ch+1),{className:style}));
}
}

if(marks.length){


if(ie_lt8&&cm.state.focused)cm.focus();

var clear=function clear(){
cm.operation(function(){
for(var i=0;i<marks.length;i++){marks[i].clear();}
});
};
if(autoclear)setTimeout(clear,800);else
return clear;
}
}

var currentlyHighlighted=null;
function doMatchBrackets(cm){
cm.operation(function(){
if(currentlyHighlighted){currentlyHighlighted();currentlyHighlighted=null;}
currentlyHighlighted=matchBrackets(cm,false,cm.state.matchBrackets);
});
}

CodeMirror.defineOption("matchBrackets",false,function(cm,val,old){
if(old&&old!=CodeMirror.Init){
cm.off("cursorActivity",doMatchBrackets);
if(currentlyHighlighted){currentlyHighlighted();currentlyHighlighted=null;}
}
if(val){
cm.state.matchBrackets=typeof val=="object"?val:{};
cm.on("cursorActivity",doMatchBrackets);
}
});

CodeMirror.defineExtension("matchBrackets",function(){matchBrackets(this,true);});
CodeMirror.defineExtension("findMatchingBracket",function(pos,strict,config){
return findMatchingBracket(this,pos,strict,config);
});
CodeMirror.defineExtension("scanForBracket",function(pos,dir,style,config){
return scanForBracket(this,pos,dir,style,config);
});
});

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.defaultFieldResolver=undefined;
exports.execute=execute;
exports.responsePathAsArray=responsePathAsArray;

var _iterall=__webpack_require__(39);

var _error=__webpack_require__(2);

var _find=__webpack_require__(17);

var _find2=_interopRequireDefault(_find);

var _invariant=__webpack_require__(7);

var _invariant2=_interopRequireDefault(_invariant);

var _isNullish=__webpack_require__(12);

var _isNullish2=_interopRequireDefault(_isNullish);

var _typeFromAST=__webpack_require__(15);

var _kinds=__webpack_require__(6);

var Kind=_interopRequireWildcard(_kinds);

var _values=__webpack_require__(68);

var _definition=__webpack_require__(3);

var _schema=__webpack_require__(14);

var _introspection=__webpack_require__(11);

var _directives=__webpack_require__(10);

function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}























































function execute(schema,document,rootValue,contextValue,variableValues,operationName){
(0,_invariant2.default)(schema,'Must provide schema');
(0,_invariant2.default)(document,'Must provide document');
(0,_invariant2.default)(schema instanceof _schema.GraphQLSchema,'Schema must be an instance of GraphQLSchema. Also ensure that there are '+'not multiple versions of GraphQL installed in your node_modules directory.');


(0,_invariant2.default)(!variableValues||typeof variableValues==='object','Variables must be provided as an Object where each property is a '+'variable value. Perhaps look to see if an unparsed JSON string '+'was provided.');



var context=buildExecutionContext(schema,document,rootValue,contextValue,variableValues,operationName);








return new Promise(function(resolve){
resolve(executeOperation(context,context.operation,rootValue));
}).then(undefined,function(error){



context.errors.push(error);
return null;
}).then(function(data){
if(!context.errors.length){
return{data:data};
}
return{data:data,errors:context.errors};
});
}





function responsePathAsArray(path){
var flattened=[];
var curr=path;
while(curr){
flattened.push(curr.key);
curr=curr.prev;
}
return flattened.reverse();
}

function addPath(prev,key){
return{prev:prev,key:key};
}







function buildExecutionContext(schema,document,rootValue,contextValue,rawVariableValues,operationName){
var errors=[];
var operation=void 0;
var fragments=Object.create(null);
document.definitions.forEach(function(definition){
switch(definition.kind){
case Kind.OPERATION_DEFINITION:
if(!operationName&&operation){
throw new _error.GraphQLError('Must provide operation name if query contains multiple operations.');
}
if(!operationName||definition.name&&definition.name.value===operationName){
operation=definition;
}
break;
case Kind.FRAGMENT_DEFINITION:
fragments[definition.name.value]=definition;
break;
default:
throw new _error.GraphQLError('GraphQL cannot execute a request containing a '+definition.kind+'.',[definition]);}

});
if(!operation){
if(operationName){
throw new _error.GraphQLError('Unknown operation named "'+operationName+'".');
}else{
throw new _error.GraphQLError('Must provide an operation.');
}
}
var variableValues=(0,_values.getVariableValues)(schema,operation.variableDefinitions||[],rawVariableValues||{});

return{
schema:schema,
fragments:fragments,
rootValue:rootValue,
contextValue:contextValue,
operation:operation,
variableValues:variableValues,
errors:errors};

}




function executeOperation(exeContext,operation,rootValue){
var type=getOperationRootType(exeContext.schema,operation);
var fields=collectFields(exeContext,type,operation.selectionSet,Object.create(null),Object.create(null));

var path=undefined;

if(operation.operation==='mutation'){
return executeFieldsSerially(exeContext,type,rootValue,path,fields);
}
return executeFields(exeContext,type,rootValue,path,fields);
}




function getOperationRootType(schema,operation){
switch(operation.operation){
case'query':
return schema.getQueryType();
case'mutation':
var mutationType=schema.getMutationType();
if(!mutationType){
throw new _error.GraphQLError('Schema is not configured for mutations',[operation]);
}
return mutationType;
case'subscription':
var subscriptionType=schema.getSubscriptionType();
if(!subscriptionType){
throw new _error.GraphQLError('Schema is not configured for subscriptions',[operation]);
}
return subscriptionType;
default:
throw new _error.GraphQLError('Can only execute queries, mutations and subscriptions',[operation]);}

}





function executeFieldsSerially(exeContext,parentType,sourceValue,path,fields){
return Object.keys(fields).reduce(function(prevPromise,responseName){
return prevPromise.then(function(results){
var fieldNodes=fields[responseName];
var fieldPath=addPath(path,responseName);
var result=resolveField(exeContext,parentType,sourceValue,fieldNodes,fieldPath);
if(result===undefined){
return results;
}
if(isThenable(result)){
return result.then(function(resolvedResult){
results[responseName]=resolvedResult;
return results;
});
}
results[responseName]=result;
return results;
});
},Promise.resolve({}));
}





function executeFields(exeContext,parentType,sourceValue,path,fields){
var containsPromise=false;

var finalResults=Object.keys(fields).reduce(function(results,responseName){
var fieldNodes=fields[responseName];
var fieldPath=addPath(path,responseName);
var result=resolveField(exeContext,parentType,sourceValue,fieldNodes,fieldPath);
if(result===undefined){
return results;
}
results[responseName]=result;
if(isThenable(result)){
containsPromise=true;
}
return results;
},Object.create(null));


if(!containsPromise){
return finalResults;
}





return promiseForObject(finalResults);
}









function collectFields(exeContext,runtimeType,selectionSet,fields,visitedFragmentNames){
for(var i=0;i<selectionSet.selections.length;i++){
var selection=selectionSet.selections[i];
switch(selection.kind){
case Kind.FIELD:
if(!shouldIncludeNode(exeContext,selection.directives)){
continue;
}
var _name=getFieldEntryKey(selection);
if(!fields[_name]){
fields[_name]=[];
}
fields[_name].push(selection);
break;
case Kind.INLINE_FRAGMENT:
if(!shouldIncludeNode(exeContext,selection.directives)||!doesFragmentConditionMatch(exeContext,selection,runtimeType)){
continue;
}
collectFields(exeContext,runtimeType,selection.selectionSet,fields,visitedFragmentNames);
break;
case Kind.FRAGMENT_SPREAD:
var fragName=selection.name.value;
if(visitedFragmentNames[fragName]||!shouldIncludeNode(exeContext,selection.directives)){
continue;
}
visitedFragmentNames[fragName]=true;
var fragment=exeContext.fragments[fragName];
if(!fragment||!doesFragmentConditionMatch(exeContext,fragment,runtimeType)){
continue;
}
collectFields(exeContext,runtimeType,fragment.selectionSet,fields,visitedFragmentNames);
break;}

}
return fields;
}





function shouldIncludeNode(exeContext,directives){
var skipNode=directives&&(0,_find2.default)(directives,function(directive){
return directive.name.value===_directives.GraphQLSkipDirective.name;
});
if(skipNode){
var _getArgumentValues=(0,_values.getArgumentValues)(_directives.GraphQLSkipDirective,skipNode,exeContext.variableValues),
skipIf=_getArgumentValues.if;

if(skipIf===true){
return false;
}
}

var includeNode=directives&&(0,_find2.default)(directives,function(directive){
return directive.name.value===_directives.GraphQLIncludeDirective.name;
});
if(includeNode){
var _getArgumentValues2=(0,_values.getArgumentValues)(_directives.GraphQLIncludeDirective,includeNode,exeContext.variableValues),
includeIf=_getArgumentValues2.if;

if(includeIf===false){
return false;
}
}

return true;
}




function doesFragmentConditionMatch(exeContext,fragment,type){
var typeConditionNode=fragment.typeCondition;
if(!typeConditionNode){
return true;
}
var conditionalType=(0,_typeFromAST.typeFromAST)(exeContext.schema,typeConditionNode);
if(conditionalType===type){
return true;
}
if((0,_definition.isAbstractType)(conditionalType)){
var abstractType=conditionalType;
return exeContext.schema.isPossibleType(abstractType,type);
}
return false;
}








function promiseForObject(object){
var keys=Object.keys(object);
var valuesAndPromises=keys.map(function(name){
return object[name];
});
return Promise.all(valuesAndPromises).then(function(values){
return values.reduce(function(resolvedObject,value,i){
resolvedObject[keys[i]]=value;
return resolvedObject;
},Object.create(null));
});
}




function getFieldEntryKey(node){
return node.alias?node.alias.value:node.name.value;
}







function resolveField(exeContext,parentType,source,fieldNodes,path){
var fieldNode=fieldNodes[0];
var fieldName=fieldNode.name.value;

var fieldDef=getFieldDef(exeContext.schema,parentType,fieldName);
if(!fieldDef){
return;
}

var returnType=fieldDef.type;
var resolveFn=fieldDef.resolve||defaultFieldResolver;




var context=exeContext.contextValue;



var info={
fieldName:fieldName,
fieldNodes:fieldNodes,
returnType:returnType,
parentType:parentType,
path:path,
schema:exeContext.schema,
fragments:exeContext.fragments,
rootValue:exeContext.rootValue,
operation:exeContext.operation,
variableValues:exeContext.variableValues};




var result=resolveOrError(exeContext,fieldDef,fieldNode,resolveFn,source,context,info);

return completeValueCatchingError(exeContext,returnType,fieldNodes,info,path,result);
}



function resolveOrError(exeContext,fieldDef,fieldNode,resolveFn,source,context,info){
try{



var args=(0,_values.getArgumentValues)(fieldDef,fieldNode,exeContext.variableValues);

return resolveFn(source,args,context,info);
}catch(error){


return error instanceof Error?error:new Error(error);
}
}



function completeValueCatchingError(exeContext,returnType,fieldNodes,info,path,result){


if(returnType instanceof _definition.GraphQLNonNull){
return completeValueWithLocatedError(exeContext,returnType,fieldNodes,info,path,result);
}



try{
var completed=completeValueWithLocatedError(exeContext,returnType,fieldNodes,info,path,result);
if(isThenable(completed)){




return completed.then(undefined,function(error){
exeContext.errors.push(error);
return Promise.resolve(null);
});
}
return completed;
}catch(error){


exeContext.errors.push(error);
return null;
}
}



function completeValueWithLocatedError(exeContext,returnType,fieldNodes,info,path,result){
try{
var completed=completeValue(exeContext,returnType,fieldNodes,info,path,result);
if(isThenable(completed)){
return completed.then(undefined,function(error){
return Promise.reject((0,_error.locatedError)(error,fieldNodes,responsePathAsArray(path)));
});
}
return completed;
}catch(error){
throw(0,_error.locatedError)(error,fieldNodes,responsePathAsArray(path));
}
}






















function completeValue(exeContext,returnType,fieldNodes,info,path,result){

if(isThenable(result)){
return result.then(function(resolved){
return completeValue(exeContext,returnType,fieldNodes,info,path,resolved);
});
}


if(result instanceof Error){
throw result;
}



if(returnType instanceof _definition.GraphQLNonNull){
var completed=completeValue(exeContext,returnType.ofType,fieldNodes,info,path,result);
if(completed===null){
throw new Error('Cannot return null for non-nullable field '+info.parentType.name+'.'+info.fieldName+'.');
}
return completed;
}


if((0,_isNullish2.default)(result)){
return null;
}


if(returnType instanceof _definition.GraphQLList){
return completeListValue(exeContext,returnType,fieldNodes,info,path,result);
}



if(returnType instanceof _definition.GraphQLScalarType||returnType instanceof _definition.GraphQLEnumType){
return completeLeafValue(returnType,result);
}



if(returnType instanceof _definition.GraphQLInterfaceType||returnType instanceof _definition.GraphQLUnionType){
return completeAbstractValue(exeContext,returnType,fieldNodes,info,path,result);
}


if(returnType instanceof _definition.GraphQLObjectType){
return completeObjectValue(exeContext,returnType,fieldNodes,info,path,result);
}


throw new Error('Cannot complete value of unexpected type "'+String(returnType)+'".');
}





function completeListValue(exeContext,returnType,fieldNodes,info,path,result){
(0,_invariant2.default)((0,_iterall.isCollection)(result),'Expected Iterable, but did not find one for field '+info.parentType.name+'.'+info.fieldName+'.');



var itemType=returnType.ofType;
var containsPromise=false;
var completedResults=[];
(0,_iterall.forEach)(result,function(item,index){


var fieldPath=addPath(path,index);
var completedItem=completeValueCatchingError(exeContext,itemType,fieldNodes,info,fieldPath,item);

if(!containsPromise&&isThenable(completedItem)){
containsPromise=true;
}
completedResults.push(completedItem);
});

return containsPromise?Promise.all(completedResults):completedResults;
}





function completeLeafValue(returnType,result){
(0,_invariant2.default)(returnType.serialize,'Missing serialize method on type');
var serializedResult=returnType.serialize(result);
if((0,_isNullish2.default)(serializedResult)){
throw new Error('Expected a value of type "'+String(returnType)+'" but '+('received: '+String(result)));
}
return serializedResult;
}





function completeAbstractValue(exeContext,returnType,fieldNodes,info,path,result){
var runtimeType=returnType.resolveType?returnType.resolveType(result,exeContext.contextValue,info):defaultResolveTypeFn(result,exeContext.contextValue,info,returnType);

if(isThenable(runtimeType)){

var runtimeTypePromise=runtimeType;
return runtimeTypePromise.then(function(resolvedRuntimeType){
return completeObjectValue(exeContext,ensureValidRuntimeType(resolvedRuntimeType,exeContext,returnType,fieldNodes,info,result),fieldNodes,info,path,result);
});
}

return completeObjectValue(exeContext,ensureValidRuntimeType(runtimeType,exeContext,returnType,fieldNodes,info,result),fieldNodes,info,path,result);
}

function ensureValidRuntimeType(runtimeTypeOrName,exeContext,returnType,fieldNodes,info,result){
var runtimeType=typeof runtimeTypeOrName==='string'?exeContext.schema.getType(runtimeTypeOrName):runtimeTypeOrName;

if(!(runtimeType instanceof _definition.GraphQLObjectType)){
throw new _error.GraphQLError('Abstract type '+returnType.name+' must resolve to an Object type at '+('runtime for field '+info.parentType.name+'.'+info.fieldName+' with ')+('value "'+String(result)+'", received "'+String(runtimeType)+'".'),fieldNodes);
}

if(!exeContext.schema.isPossibleType(returnType,runtimeType)){
throw new _error.GraphQLError('Runtime Object type "'+runtimeType.name+'" is not a possible type '+('for "'+returnType.name+'".'),fieldNodes);
}

return runtimeType;
}




function completeObjectValue(exeContext,returnType,fieldNodes,info,path,result){



if(returnType.isTypeOf){
var isTypeOf=returnType.isTypeOf(result,exeContext.contextValue,info);

if(isThenable(isTypeOf)){
return isTypeOf.then(function(isTypeOfResult){
if(!isTypeOfResult){
throw invalidReturnTypeError(returnType,result,fieldNodes);
}
return collectAndExecuteSubfields(exeContext,returnType,fieldNodes,info,path,result);
});
}

if(!isTypeOf){
throw invalidReturnTypeError(returnType,result,fieldNodes);
}
}

return collectAndExecuteSubfields(exeContext,returnType,fieldNodes,info,path,result);
}

function invalidReturnTypeError(returnType,result,fieldNodes){
return new _error.GraphQLError('Expected value of type "'+returnType.name+'" but got: '+String(result)+'.',fieldNodes);
}

function collectAndExecuteSubfields(exeContext,returnType,fieldNodes,info,path,result){

var subFieldNodes=Object.create(null);
var visitedFragmentNames=Object.create(null);
for(var i=0;i<fieldNodes.length;i++){
var selectionSet=fieldNodes[i].selectionSet;
if(selectionSet){
subFieldNodes=collectFields(exeContext,returnType,selectionSet,subFieldNodes,visitedFragmentNames);
}
}

return executeFields(exeContext,returnType,result,path,subFieldNodes);
}






function defaultResolveTypeFn(value,context,info,abstractType){
var possibleTypes=info.schema.getPossibleTypes(abstractType);
var promisedIsTypeOfResults=[];

for(var i=0;i<possibleTypes.length;i++){
var type=possibleTypes[i];

if(type.isTypeOf){
var isTypeOfResult=type.isTypeOf(value,context,info);

if(isThenable(isTypeOfResult)){
promisedIsTypeOfResults[i]=isTypeOfResult;
}else if(isTypeOfResult){
return type;
}
}
}

if(promisedIsTypeOfResults.length){
return Promise.all(promisedIsTypeOfResults).then(function(isTypeOfResults){
for(var _i=0;_i<isTypeOfResults.length;_i++){
if(isTypeOfResults[_i]){
return possibleTypes[_i];
}
}
});
}
}







var defaultFieldResolver=exports.defaultFieldResolver=function defaultFieldResolver(source,args,context,info){

if(typeof source==='object'||typeof source==='function'){
var property=source[info.fieldName];
if(typeof property==='function'){
return source[info.fieldName](args,context,info);
}
return property;
}
};





function isThenable(value){
return typeof value==='object'&&value!==null&&typeof value.then==='function';
}










function getFieldDef(schema,parentType,fieldName){
if(fieldName===_introspection.SchemaMetaFieldDef.name&&schema.getQueryType()===parentType){
return _introspection.SchemaMetaFieldDef;
}else if(fieldName===_introspection.TypeMetaFieldDef.name&&schema.getQueryType()===parentType){
return _introspection.TypeMetaFieldDef;
}else if(fieldName===_introspection.TypeNameMetaFieldDef.name){
return _introspection.TypeNameMetaFieldDef;
}
return parentType.getFields()[fieldName];
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.getVariableValues=getVariableValues;
exports.getArgumentValues=getArgumentValues;

var _iterall=__webpack_require__(39);

var _error=__webpack_require__(2);

var _invariant=__webpack_require__(7);

var _invariant2=_interopRequireDefault(_invariant);

var _isNullish=__webpack_require__(12);

var _isNullish2=_interopRequireDefault(_isNullish);

var _isInvalid=__webpack_require__(26);

var _isInvalid2=_interopRequireDefault(_isInvalid);

var _keyMap=__webpack_require__(22);

var _keyMap2=_interopRequireDefault(_keyMap);

var _typeFromAST=__webpack_require__(15);

var _valueFromAST=__webpack_require__(28);

var _isValidJSValue=__webpack_require__(70);

var _isValidLiteralValue=__webpack_require__(35);

var _kinds=__webpack_require__(6);

var Kind=_interopRequireWildcard(_kinds);

var _printer=__webpack_require__(9);

var _definition=__webpack_require__(3);

function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}






function getVariableValues(schema,varDefNodes,inputs){
var coercedValues=Object.create(null);
for(var i=0;i<varDefNodes.length;i++){
var varDefNode=varDefNodes[i];
var varName=varDefNode.variable.name.value;
var varType=(0,_typeFromAST.typeFromAST)(schema,varDefNode.type);
if(!(0,_definition.isInputType)(varType)){
throw new _error.GraphQLError('Variable "$'+varName+'" expected value of type '+('"'+(0,_printer.print)(varDefNode.type)+'" which cannot be used as an input type.'),[varDefNode.type]);
}
varType=varType;

var value=inputs[varName];
if((0,_isInvalid2.default)(value)){
var defaultValue=varDefNode.defaultValue;
if(defaultValue){
coercedValues[varName]=(0,_valueFromAST.valueFromAST)(defaultValue,varType);
}
if(varType instanceof _definition.GraphQLNonNull){
throw new _error.GraphQLError('Variable "$'+varName+'" of required type '+('"'+String(varType)+'" was not provided.'),[varDefNode]);
}
}else{
var errors=(0,_isValidJSValue.isValidJSValue)(value,varType);
if(errors.length){
var message=errors?'\n'+errors.join('\n'):'';
throw new _error.GraphQLError('Variable "$'+varName+'" got invalid value '+(JSON.stringify(value)+'.'+message),[varDefNode]);
}

var coercedValue=coerceValue(varType,value);
(0,_invariant2.default)(!(0,_isInvalid2.default)(coercedValue),'Should have reported error.');
coercedValues[varName]=coercedValue;
}
}
return coercedValues;
}















function getArgumentValues(def,node,variableValues){
var argDefs=def.args;
var argNodes=node.arguments;
if(!argDefs||!argNodes){
return{};
}
var coercedValues=Object.create(null);
var argNodeMap=(0,_keyMap2.default)(argNodes,function(arg){
return arg.name.value;
});
for(var i=0;i<argDefs.length;i++){
var argDef=argDefs[i];
var name=argDef.name;
var argType=argDef.type;
var argumentNode=argNodeMap[name];
var defaultValue=argDef.defaultValue;
if(!argumentNode){
if(!(0,_isInvalid2.default)(defaultValue)){
coercedValues[name]=defaultValue;
}else if(argType instanceof _definition.GraphQLNonNull){
throw new _error.GraphQLError('Argument "'+name+'" of required type '+('"'+String(argType)+'" was not provided.'),[node]);
}
}else if(argumentNode.value.kind===Kind.VARIABLE){
var variableName=argumentNode.value.name.value;
if(variableValues&&!(0,_isInvalid2.default)(variableValues[variableName])){



coercedValues[name]=variableValues[variableName];
}else if(!(0,_isInvalid2.default)(defaultValue)){
coercedValues[name]=defaultValue;
}else if(argType instanceof _definition.GraphQLNonNull){
throw new _error.GraphQLError('Argument "'+name+'" of required type "'+String(argType)+'" was '+('provided the variable "$'+variableName+'" which was not provided ')+'a runtime value.',[argumentNode.value]);
}
}else{
var valueNode=argumentNode.value;
var coercedValue=(0,_valueFromAST.valueFromAST)(valueNode,argType,variableValues);
if((0,_isInvalid2.default)(coercedValue)){
var errors=(0,_isValidLiteralValue.isValidLiteralValue)(argType,valueNode);
var message=errors?'\n'+errors.join('\n'):'';
throw new _error.GraphQLError('Argument "'+name+'" got invalid value '+(0,_printer.print)(valueNode)+'.'+message,[argumentNode.value]);
}
coercedValues[name]=coercedValue;
}
}
return coercedValues;
}




function coerceValue(type,value){

var _value=value;

if((0,_isInvalid2.default)(_value)){
return;
}

if(type instanceof _definition.GraphQLNonNull){
if(_value===null){
return;
}
return coerceValue(type.ofType,_value);
}

if(_value===null){

return null;
}

if(type instanceof _definition.GraphQLList){
var itemType=type.ofType;
if((0,_iterall.isCollection)(_value)){
var coercedValues=[];
var valueIter=(0,_iterall.createIterator)(_value);
if(!valueIter){
return;
}
var step=void 0;
while(!(step=valueIter.next()).done){
var itemValue=coerceValue(itemType,step.value);
if((0,_isInvalid2.default)(itemValue)){
return;
}
coercedValues.push(itemValue);
}
return coercedValues;
}
var coercedValue=coerceValue(itemType,_value);
if((0,_isInvalid2.default)(coercedValue)){
return;
}
return[coerceValue(itemType,_value)];
}

if(type instanceof _definition.GraphQLInputObjectType){
if(typeof _value!=='object'){
return;
}
var coercedObj=Object.create(null);
var fields=type.getFields();
var fieldNames=Object.keys(fields);
for(var i=0;i<fieldNames.length;i++){
var fieldName=fieldNames[i];
var field=fields[fieldName];
if((0,_isInvalid2.default)(_value[fieldName])){
if(!(0,_isInvalid2.default)(field.defaultValue)){
coercedObj[fieldName]=field.defaultValue;
}else if(field.type instanceof _definition.GraphQLNonNull){
return;
}
continue;
}
var fieldValue=coerceValue(field.type,_value[fieldName]);
if((0,_isInvalid2.default)(fieldValue)){
return;
}
coercedObj[fieldName]=fieldValue;
}
return coercedObj;
}

(0,_invariant2.default)(type instanceof _definition.GraphQLScalarType||type instanceof _definition.GraphQLEnumType,'Must be input type');

var parsed=type.parseValue(_value);
if((0,_isNullish2.default)(parsed)){


return;
}

return parsed;
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.buildASTSchema=buildASTSchema;
exports.getDescription=getDescription;
exports.buildSchema=buildSchema;

var _find=__webpack_require__(17);

var _find2=_interopRequireDefault(_find);

var _invariant=__webpack_require__(7);

var _invariant2=_interopRequireDefault(_invariant);

var _keyValMap=__webpack_require__(43);

var _keyValMap2=_interopRequireDefault(_keyValMap);

var _valueFromAST=__webpack_require__(28);

var _lexer=__webpack_require__(46);

var _parser=__webpack_require__(34);

var _values=__webpack_require__(68);

var _kinds=__webpack_require__(6);

var _schema=__webpack_require__(14);

var _scalars=__webpack_require__(13);

var _definition=__webpack_require__(3);

var _directives=__webpack_require__(10);

var _introspection=__webpack_require__(11);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

function buildWrappedType(innerType,inputTypeNode){
if(inputTypeNode.kind===_kinds.LIST_TYPE){
return new _definition.GraphQLList(buildWrappedType(innerType,inputTypeNode.type));
}
if(inputTypeNode.kind===_kinds.NON_NULL_TYPE){
var wrappedType=buildWrappedType(innerType,inputTypeNode.type);
(0,_invariant2.default)(!(wrappedType instanceof _definition.GraphQLNonNull),'No nesting nonnull.');
return new _definition.GraphQLNonNull(wrappedType);
}
return innerType;
}









function getNamedTypeNode(typeNode){
var namedType=typeNode;
while(namedType.kind===_kinds.LIST_TYPE||namedType.kind===_kinds.NON_NULL_TYPE){
namedType=namedType.type;
}
return namedType;
}











function buildASTSchema(ast){
if(!ast||ast.kind!==_kinds.DOCUMENT){
throw new Error('Must provide a document ast.');
}

var schemaDef=void 0;

var typeDefs=[];
var nodeMap=Object.create(null);
var directiveDefs=[];
for(var i=0;i<ast.definitions.length;i++){
var d=ast.definitions[i];
switch(d.kind){
case _kinds.SCHEMA_DEFINITION:
if(schemaDef){
throw new Error('Must provide only one schema definition.');
}
schemaDef=d;
break;
case _kinds.SCALAR_TYPE_DEFINITION:
case _kinds.OBJECT_TYPE_DEFINITION:
case _kinds.INTERFACE_TYPE_DEFINITION:
case _kinds.ENUM_TYPE_DEFINITION:
case _kinds.UNION_TYPE_DEFINITION:
case _kinds.INPUT_OBJECT_TYPE_DEFINITION:
typeDefs.push(d);
nodeMap[d.name.value]=d;
break;
case _kinds.DIRECTIVE_DEFINITION:
directiveDefs.push(d);
break;}

}

var queryTypeName=void 0;
var mutationTypeName=void 0;
var subscriptionTypeName=void 0;
if(schemaDef){
schemaDef.operationTypes.forEach(function(operationType){
var typeName=operationType.type.name.value;
if(operationType.operation==='query'){
if(queryTypeName){
throw new Error('Must provide only one query type in schema.');
}
if(!nodeMap[typeName]){
throw new Error('Specified query type "'+typeName+'" not found in document.');
}
queryTypeName=typeName;
}else if(operationType.operation==='mutation'){
if(mutationTypeName){
throw new Error('Must provide only one mutation type in schema.');
}
if(!nodeMap[typeName]){
throw new Error('Specified mutation type "'+typeName+'" not found in document.');
}
mutationTypeName=typeName;
}else if(operationType.operation==='subscription'){
if(subscriptionTypeName){
throw new Error('Must provide only one subscription type in schema.');
}
if(!nodeMap[typeName]){
throw new Error('Specified subscription type "'+typeName+'" not found in document.');
}
subscriptionTypeName=typeName;
}
});
}else{
if(nodeMap.Query){
queryTypeName='Query';
}
if(nodeMap.Mutation){
mutationTypeName='Mutation';
}
if(nodeMap.Subscription){
subscriptionTypeName='Subscription';
}
}

if(!queryTypeName){
throw new Error('Must provide schema definition with query type or a type named Query.');
}

var innerTypeMap={
String:_scalars.GraphQLString,
Int:_scalars.GraphQLInt,
Float:_scalars.GraphQLFloat,
Boolean:_scalars.GraphQLBoolean,
ID:_scalars.GraphQLID,
__Schema:_introspection.__Schema,
__Directive:_introspection.__Directive,
__DirectiveLocation:_introspection.__DirectiveLocation,
__Type:_introspection.__Type,
__Field:_introspection.__Field,
__InputValue:_introspection.__InputValue,
__EnumValue:_introspection.__EnumValue,
__TypeKind:_introspection.__TypeKind};


var types=typeDefs.map(function(def){
return typeDefNamed(def.name.value);
});

var directives=directiveDefs.map(getDirective);


if(!directives.some(function(directive){
return directive.name==='skip';
})){
directives.push(_directives.GraphQLSkipDirective);
}

if(!directives.some(function(directive){
return directive.name==='include';
})){
directives.push(_directives.GraphQLIncludeDirective);
}

if(!directives.some(function(directive){
return directive.name==='deprecated';
})){
directives.push(_directives.GraphQLDeprecatedDirective);
}

return new _schema.GraphQLSchema({
query:getObjectType(nodeMap[queryTypeName]),
mutation:mutationTypeName?getObjectType(nodeMap[mutationTypeName]):null,
subscription:subscriptionTypeName?getObjectType(nodeMap[subscriptionTypeName]):null,
types:types,
directives:directives});


function getDirective(directiveNode){
return new _directives.GraphQLDirective({
name:directiveNode.name.value,
description:getDescription(directiveNode),
locations:directiveNode.locations.map(function(node){
return node.value;
}),
args:directiveNode.arguments&&makeInputValues(directiveNode.arguments)});

}

function getObjectType(typeNode){
var type=typeDefNamed(typeNode.name.value);
(0,_invariant2.default)(type instanceof _definition.GraphQLObjectType,'AST must provide object type.');
return type;
}

function produceType(typeNode){
var typeName=getNamedTypeNode(typeNode).name.value;
var typeDef=typeDefNamed(typeName);
return buildWrappedType(typeDef,typeNode);
}

function produceInputType(typeNode){
var type=produceType(typeNode);
(0,_invariant2.default)((0,_definition.isInputType)(type),'Expected Input type.');
return type;
}

function produceOutputType(typeNode){
var type=produceType(typeNode);
(0,_invariant2.default)((0,_definition.isOutputType)(type),'Expected Output type.');
return type;
}

function produceObjectType(typeNode){
var type=produceType(typeNode);
(0,_invariant2.default)(type instanceof _definition.GraphQLObjectType,'Expected Object type.');
return type;
}

function produceInterfaceType(typeNode){
var type=produceType(typeNode);
(0,_invariant2.default)(type instanceof _definition.GraphQLInterfaceType,'Expected Interface type.');
return type;
}

function typeDefNamed(typeName){
if(innerTypeMap[typeName]){
return innerTypeMap[typeName];
}

if(!nodeMap[typeName]){
throw new Error('Type "'+typeName+'" not found in document.');
}

var innerTypeDef=makeSchemaDef(nodeMap[typeName]);
if(!innerTypeDef){
throw new Error('Nothing constructed for "'+typeName+'".');
}
innerTypeMap[typeName]=innerTypeDef;
return innerTypeDef;
}

function makeSchemaDef(def){
if(!def){
throw new Error('def must be defined');
}
switch(def.kind){
case _kinds.OBJECT_TYPE_DEFINITION:
return makeTypeDef(def);
case _kinds.INTERFACE_TYPE_DEFINITION:
return makeInterfaceDef(def);
case _kinds.ENUM_TYPE_DEFINITION:
return makeEnumDef(def);
case _kinds.UNION_TYPE_DEFINITION:
return makeUnionDef(def);
case _kinds.SCALAR_TYPE_DEFINITION:
return makeScalarDef(def);
case _kinds.INPUT_OBJECT_TYPE_DEFINITION:
return makeInputObjectDef(def);
default:
throw new Error('Type kind "'+def.kind+'" not supported.');}

}

function makeTypeDef(def){
var typeName=def.name.value;
return new _definition.GraphQLObjectType({
name:typeName,
description:getDescription(def),
fields:function fields(){
return makeFieldDefMap(def);
},
interfaces:function interfaces(){
return makeImplementedInterfaces(def);
}});

}

function makeFieldDefMap(def){
return(0,_keyValMap2.default)(def.fields,function(field){
return field.name.value;
},function(field){
return{
type:produceOutputType(field.type),
description:getDescription(field),
args:makeInputValues(field.arguments),
deprecationReason:getDeprecationReason(field.directives)};

});
}

function makeImplementedInterfaces(def){
return def.interfaces&&def.interfaces.map(function(iface){
return produceInterfaceType(iface);
});
}

function makeInputValues(values){
return(0,_keyValMap2.default)(values,function(value){
return value.name.value;
},function(value){
var type=produceInputType(value.type);
return{
type:type,
description:getDescription(value),
defaultValue:(0,_valueFromAST.valueFromAST)(value.defaultValue,type)};

});
}

function makeInterfaceDef(def){
var typeName=def.name.value;
return new _definition.GraphQLInterfaceType({
name:typeName,
description:getDescription(def),
fields:function fields(){
return makeFieldDefMap(def);
},
resolveType:cannotExecuteSchema});

}

function makeEnumDef(def){
var enumType=new _definition.GraphQLEnumType({
name:def.name.value,
description:getDescription(def),
values:(0,_keyValMap2.default)(def.values,function(enumValue){
return enumValue.name.value;
},function(enumValue){
return{
description:getDescription(enumValue),
deprecationReason:getDeprecationReason(enumValue.directives)};

})});


return enumType;
}

function makeUnionDef(def){
return new _definition.GraphQLUnionType({
name:def.name.value,
description:getDescription(def),
types:def.types.map(function(t){
return produceObjectType(t);
}),
resolveType:cannotExecuteSchema});

}

function makeScalarDef(def){
return new _definition.GraphQLScalarType({
name:def.name.value,
description:getDescription(def),
serialize:function serialize(){
return null;
},




parseValue:function parseValue(){
return false;
},
parseLiteral:function parseLiteral(){
return false;
}});

}

function makeInputObjectDef(def){
return new _definition.GraphQLInputObjectType({
name:def.name.value,
description:getDescription(def),
fields:function fields(){
return makeInputValues(def.fields);
}});

}
}

function getDeprecationReason(directives){
var deprecatedAST=directives&&(0,_find2.default)(directives,function(directive){
return directive.name.value===_directives.GraphQLDeprecatedDirective.name;
});
if(!deprecatedAST){
return;
}

var _getArgumentValues=(0,_values.getArgumentValues)(_directives.GraphQLDeprecatedDirective,deprecatedAST),
reason=_getArgumentValues.reason;

return reason;
}





function getDescription(node){
var loc=node.loc;
if(!loc){
return;
}
var comments=[];
var minSpaces=void 0;
var token=loc.startToken.prev;
while(token&&token.kind===_lexer.TokenKind.COMMENT&&token.next&&token.prev&&token.line+1===token.next.line&&token.line!==token.prev.line){
var value=String(token.value);
var spaces=leadingSpaces(value);
if(minSpaces===undefined||spaces<minSpaces){
minSpaces=spaces;
}
comments.push(value);
token=token.prev;
}
return comments.reverse().map(function(comment){
return comment.slice(minSpaces);
}).join('\n');
}





function buildSchema(source){
return buildASTSchema((0,_parser.parse)(source));
}


function leadingSpaces(str){
var i=0;
for(;i<str.length;i++){
if(str[i]!==' '){
break;
}
}
return i;
}

function cannotExecuteSchema(){
throw new Error('Generated Schema cannot use Interface or Union types for execution.');
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.isValidJSValue=isValidJSValue;

var _iterall=__webpack_require__(39);

var _invariant=__webpack_require__(7);

var _invariant2=_interopRequireDefault(_invariant);

var _isNullish=__webpack_require__(12);

var _isNullish2=_interopRequireDefault(_isNullish);

var _definition=__webpack_require__(3);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}
















function isValidJSValue(value,type){

if(type instanceof _definition.GraphQLNonNull){
if((0,_isNullish2.default)(value)){
return['Expected "'+String(type)+'", found null.'];
}
return isValidJSValue(value,type.ofType);
}

if((0,_isNullish2.default)(value)){
return[];
}


if(type instanceof _definition.GraphQLList){
var _ret=function(){
var itemType=type.ofType;
if((0,_iterall.isCollection)(value)){
var _ret2=function(){
var errors=[];
(0,_iterall.forEach)(value,function(item,index){
errors.push.apply(errors,isValidJSValue(item,itemType).map(function(error){
return'In element #'+index+': '+error;
}));
});
return{
v:{
v:errors}};


}();

if(typeof _ret2==="object")return _ret2.v;
}
return{
v:isValidJSValue(value,itemType)};

}();

if(typeof _ret==="object")return _ret.v;
}


if(type instanceof _definition.GraphQLInputObjectType){
var _ret3=function(){
if(typeof value!=='object'||value===null){
return{
v:['Expected "'+type.name+'", found not an object.']};

}
var fields=type.getFields();

var errors=[];


Object.keys(value).forEach(function(providedField){
if(!fields[providedField]){
errors.push('In field "'+providedField+'": Unknown field.');
}
});


Object.keys(fields).forEach(function(fieldName){
var newErrors=isValidJSValue(value[fieldName],fields[fieldName].type);
errors.push.apply(errors,newErrors.map(function(error){
return'In field "'+fieldName+'": '+error;
}));
});

return{
v:errors};

}();

if(typeof _ret3==="object")return _ret3.v;
}

(0,_invariant2.default)(type instanceof _definition.GraphQLScalarType||type instanceof _definition.GraphQLEnumType,'Must be input type');



try{
var parseResult=type.parseValue(value);
if((0,_isNullish2.default)(parseResult)){
return['Expected type "'+type.name+'", found '+JSON.stringify(value)+'.'];
}
}catch(error){
return['Expected type "'+type.name+'", found '+JSON.stringify(value)+': '+error.message];
}

return[];
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.specifiedRules=undefined;

var _UniqueOperationNames=__webpack_require__(160);

var _LoneAnonymousOperation=__webpack_require__(147);

var _KnownTypeNames=__webpack_require__(146);

var _FragmentsOnCompositeTypes=__webpack_require__(142);

var _VariablesAreInputTypes=__webpack_require__(162);

var _ScalarLeafs=__webpack_require__(155);

var _FieldsOnCorrectType=__webpack_require__(141);

var _UniqueFragmentNames=__webpack_require__(158);

var _KnownFragmentNames=__webpack_require__(145);

var _NoUnusedFragments=__webpack_require__(150);

var _PossibleFragmentSpreads=__webpack_require__(153);

var _NoFragmentCycles=__webpack_require__(148);

var _UniqueVariableNames=__webpack_require__(161);

var _NoUndefinedVariables=__webpack_require__(149);

var _NoUnusedVariables=__webpack_require__(151);

var _KnownDirectives=__webpack_require__(144);

var _UniqueDirectivesPerLocation=__webpack_require__(157);

var _KnownArgumentNames=__webpack_require__(143);

var _UniqueArgumentNames=__webpack_require__(156);

var _ArgumentsOfCorrectType=__webpack_require__(139);

var _ProvidedNonNullArguments=__webpack_require__(154);

var _DefaultValuesOfCorrectType=__webpack_require__(140);

var _VariablesInAllowedPosition=__webpack_require__(163);

var _OverlappingFieldsCanBeMerged=__webpack_require__(152);

var _UniqueInputFieldNames=__webpack_require__(159);








































var specifiedRules=exports.specifiedRules=[_UniqueOperationNames.UniqueOperationNames,_LoneAnonymousOperation.LoneAnonymousOperation,_KnownTypeNames.KnownTypeNames,_FragmentsOnCompositeTypes.FragmentsOnCompositeTypes,_VariablesAreInputTypes.VariablesAreInputTypes,_ScalarLeafs.ScalarLeafs,_FieldsOnCorrectType.FieldsOnCorrectType,_UniqueFragmentNames.UniqueFragmentNames,_KnownFragmentNames.KnownFragmentNames,_NoUnusedFragments.NoUnusedFragments,_PossibleFragmentSpreads.PossibleFragmentSpreads,_NoFragmentCycles.NoFragmentCycles,_UniqueVariableNames.UniqueVariableNames,_NoUndefinedVariables.NoUndefinedVariables,_NoUnusedVariables.NoUnusedVariables,_KnownDirectives.KnownDirectives,_UniqueDirectivesPerLocation.UniqueDirectivesPerLocation,_KnownArgumentNames.KnownArgumentNames,_UniqueArgumentNames.UniqueArgumentNames,_ArgumentsOfCorrectType.ArgumentsOfCorrectType,_ProvidedNonNullArguments.ProvidedNonNullArguments,_DefaultValuesOfCorrectType.DefaultValuesOfCorrectType,_VariablesInAllowedPosition.VariablesInAllowedPosition,_OverlappingFieldsCanBeMerged.OverlappingFieldsCanBeMerged,_UniqueInputFieldNames.UniqueInputFieldNames];

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.ValidationContext=undefined;
exports.validate=validate;
exports.visitUsingRules=visitUsingRules;

var _invariant=__webpack_require__(7);

var _invariant2=_interopRequireDefault(_invariant);

var _error=__webpack_require__(2);

var _visitor=__webpack_require__(27);

var _kinds=__webpack_require__(6);

var Kind=_interopRequireWildcard(_kinds);

var _schema=__webpack_require__(14);

var _TypeInfo=__webpack_require__(49);

var _specifiedRules=__webpack_require__(71);

function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}






















function validate(schema,ast,rules){
(0,_invariant2.default)(schema,'Must provide schema');
(0,_invariant2.default)(ast,'Must provide document');
(0,_invariant2.default)(schema instanceof _schema.GraphQLSchema,'Schema must be an instance of GraphQLSchema. Also ensure that there are '+'not multiple versions of GraphQL installed in your node_modules directory.');
var typeInfo=new _TypeInfo.TypeInfo(schema);
return visitUsingRules(schema,typeInfo,ast,rules||_specifiedRules.specifiedRules);
}







function visitUsingRules(schema,typeInfo,documentAST,rules){
var context=new ValidationContext(schema,documentAST,typeInfo);
var visitors=rules.map(function(rule){
return rule(context);
});

(0,_visitor.visit)(documentAST,(0,_visitor.visitWithTypeInfo)(typeInfo,(0,_visitor.visitInParallel)(visitors)));
return context.getErrors();
}






var ValidationContext=exports.ValidationContext=function(){
function ValidationContext(schema,ast,typeInfo){
_classCallCheck(this,ValidationContext);

this._schema=schema;
this._ast=ast;
this._typeInfo=typeInfo;
this._errors=[];
this._fragmentSpreads=new Map();
this._recursivelyReferencedFragments=new Map();
this._variableUsages=new Map();
this._recursiveVariableUsages=new Map();
}

ValidationContext.prototype.reportError=function reportError(error){
this._errors.push(error);
};

ValidationContext.prototype.getErrors=function getErrors(){
return this._errors;
};

ValidationContext.prototype.getSchema=function getSchema(){
return this._schema;
};

ValidationContext.prototype.getDocument=function getDocument(){
return this._ast;
};

ValidationContext.prototype.getFragment=function getFragment(name){
var fragments=this._fragments;
if(!fragments){
this._fragments=fragments=this.getDocument().definitions.reduce(function(frags,statement){
if(statement.kind===Kind.FRAGMENT_DEFINITION){
frags[statement.name.value]=statement;
}
return frags;
},{});
}
return fragments[name];
};

ValidationContext.prototype.getFragmentSpreads=function getFragmentSpreads(node){
var spreads=this._fragmentSpreads.get(node);
if(!spreads){
spreads=[];
var setsToVisit=[node];
while(setsToVisit.length!==0){
var set=setsToVisit.pop();
for(var i=0;i<set.selections.length;i++){
var selection=set.selections[i];
if(selection.kind===Kind.FRAGMENT_SPREAD){
spreads.push(selection);
}else if(selection.selectionSet){
setsToVisit.push(selection.selectionSet);
}
}
}
this._fragmentSpreads.set(node,spreads);
}
return spreads;
};

ValidationContext.prototype.getRecursivelyReferencedFragments=function getRecursivelyReferencedFragments(operation){
var fragments=this._recursivelyReferencedFragments.get(operation);
if(!fragments){
fragments=[];
var collectedNames=Object.create(null);
var nodesToVisit=[operation.selectionSet];
while(nodesToVisit.length!==0){
var _node=nodesToVisit.pop();
var spreads=this.getFragmentSpreads(_node);
for(var i=0;i<spreads.length;i++){
var fragName=spreads[i].name.value;
if(collectedNames[fragName]!==true){
collectedNames[fragName]=true;
var fragment=this.getFragment(fragName);
if(fragment){
fragments.push(fragment);
nodesToVisit.push(fragment.selectionSet);
}
}
}
}
this._recursivelyReferencedFragments.set(operation,fragments);
}
return fragments;
};

ValidationContext.prototype.getVariableUsages=function getVariableUsages(node){
var _this=this;

var usages=this._variableUsages.get(node);
if(!usages){
(function(){
var newUsages=[];
var typeInfo=new _TypeInfo.TypeInfo(_this._schema);
(0,_visitor.visit)(node,(0,_visitor.visitWithTypeInfo)(typeInfo,{
VariableDefinition:function VariableDefinition(){
return false;
},
Variable:function Variable(variable){
newUsages.push({node:variable,type:typeInfo.getInputType()});
}}));

usages=newUsages;
_this._variableUsages.set(node,usages);
})();
}
return usages;
};

ValidationContext.prototype.getRecursiveVariableUsages=function getRecursiveVariableUsages(operation){
var usages=this._recursiveVariableUsages.get(operation);
if(!usages){
usages=this.getVariableUsages(operation);
var fragments=this.getRecursivelyReferencedFragments(operation);
for(var i=0;i<fragments.length;i++){
Array.prototype.push.apply(usages,this.getVariableUsages(fragments[i]));
}
this._recursiveVariableUsages.set(operation,usages);
}
return usages;
};

ValidationContext.prototype.getType=function getType(){
return this._typeInfo.getType();
};

ValidationContext.prototype.getParentType=function getParentType(){
return this._typeInfo.getParentType();
};

ValidationContext.prototype.getInputType=function getInputType(){
return this._typeInfo.getInputType();
};

ValidationContext.prototype.getFieldDef=function getFieldDef(){
return this._typeInfo.getFieldDef();
};

ValidationContext.prototype.getDirective=function getDirective(){
return this._typeInfo.getDirective();
};

ValidationContext.prototype.getArgument=function getArgument(){
return this._typeInfo.getArgument();
};

return ValidationContext;
}();

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule=true;
exports.readState=exports.saveState=undefined;

var _warning=__webpack_require__(20);

var _warning2=_interopRequireDefault(_warning);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var QuotaExceededErrors={
QuotaExceededError:true,
QUOTA_EXCEEDED_ERR:true};


var SecurityErrors={
SecurityError:true};


var KeyPrefix='@@History/';

var createKey=function createKey(key){
return KeyPrefix+key;
};

var saveState=exports.saveState=function saveState(key,state){
if(!window.sessionStorage){


process.env.NODE_ENV!=='production'?(0,_warning2.default)(false,'[history] Unable to save state; sessionStorage is not available'):void 0;

return;
}

try{
if(state==null){
window.sessionStorage.removeItem(createKey(key));
}else{
window.sessionStorage.setItem(createKey(key),JSON.stringify(state));
}
}catch(error){
if(SecurityErrors[error.name]){


process.env.NODE_ENV!=='production'?(0,_warning2.default)(false,'[history] Unable to save state; sessionStorage is not available due to security settings'):void 0;

return;
}

if(QuotaExceededErrors[error.name]&&window.sessionStorage.length===0){

process.env.NODE_ENV!=='production'?(0,_warning2.default)(false,'[history] Unable to save state; sessionStorage is not available in Safari private mode'):void 0;

return;
}

throw error;
}
};

var readState=exports.readState=function readState(key){
var json=void 0;
try{
json=window.sessionStorage.getItem(createKey(key));
}catch(error){
if(SecurityErrors[error.name]){


process.env.NODE_ENV!=='production'?(0,_warning2.default)(false,'[history] Unable to read state; sessionStorage is not available due to security settings'):void 0;

return undefined;
}
}

if(json){
try{
return JSON.parse(json);
}catch(error){

}
}

return undefined;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule=true;
exports.locationsAreEqual=exports.Actions=exports.useQueries=exports.useBeforeUnload=exports.useBasename=exports.createMemoryHistory=exports.createHashHistory=exports.createHistory=undefined;

var _LocationUtils=__webpack_require__(18);

Object.defineProperty(exports,'locationsAreEqual',{
enumerable:true,
get:function get(){
return _LocationUtils.locationsAreEqual;
}});


var _createBrowserHistory=__webpack_require__(167);

var _createBrowserHistory2=_interopRequireDefault(_createBrowserHistory);

var _createHashHistory2=__webpack_require__(168);

var _createHashHistory3=_interopRequireDefault(_createHashHistory2);

var _createMemoryHistory2=__webpack_require__(169);

var _createMemoryHistory3=_interopRequireDefault(_createMemoryHistory2);

var _useBasename2=__webpack_require__(170);

var _useBasename3=_interopRequireDefault(_useBasename2);

var _useBeforeUnload2=__webpack_require__(171);

var _useBeforeUnload3=_interopRequireDefault(_useBeforeUnload2);

var _useQueries2=__webpack_require__(172);

var _useQueries3=_interopRequireDefault(_useQueries2);

var _Actions2=__webpack_require__(37);

var _Actions=_interopRequireWildcard(_Actions2);

function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

exports.createHistory=_createBrowserHistory2.default;
exports.createHashHistory=_createHashHistory3.default;
exports.createMemoryHistory=_createMemoryHistory3.default;
exports.useBasename=_useBasename3.default;
exports.useBeforeUnload=_useBeforeUnload3.default;
exports.useQueries=_useQueries3.default;
exports.Actions=_Actions;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _root=__webpack_require__(179);var _root2=_interopRequireDefault(_root);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var Symbol=_root2.default.Symbol;exports.default=

Symbol;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});exports.default=

















connectAdvanced;var _hoistNonReactStatics=__webpack_require__(249);var _hoistNonReactStatics2=_interopRequireDefault(_hoistNonReactStatics);var _invariant=__webpack_require__(24);var _invariant2=_interopRequireDefault(_invariant);var _react=__webpack_require__(1);var _Subscription=__webpack_require__(78);var _Subscription2=_interopRequireDefault(_Subscription);var _storeShape=__webpack_require__(79);var _storeShape2=_interopRequireDefault(_storeShape);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}var hotReloadingVersion=0;function connectAdvanced(














selectorFactory){
var _contextTypes,_childContextTypes;

var _ref=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},
_ref$getDisplayName=_ref.getDisplayName,
getDisplayName=_ref$getDisplayName===undefined?function(name){
return'ConnectAdvanced('+name+')';
}:_ref$getDisplayName,
_ref$methodName=_ref.methodName,
methodName=_ref$methodName===undefined?'connectAdvanced':_ref$methodName,
_ref$renderCountProp=_ref.renderCountProp,
renderCountProp=_ref$renderCountProp===undefined?undefined:_ref$renderCountProp,
_ref$shouldHandleStat=_ref.shouldHandleStateChanges,
shouldHandleStateChanges=_ref$shouldHandleStat===undefined?true:_ref$shouldHandleStat,
_ref$storeKey=_ref.storeKey,
storeKey=_ref$storeKey===undefined?'store':_ref$storeKey,
_ref$withRef=_ref.withRef,
withRef=_ref$withRef===undefined?false:_ref$withRef,
connectOptions=_objectWithoutProperties(_ref,['getDisplayName','methodName','renderCountProp','shouldHandleStateChanges','storeKey','withRef']);

var subscriptionKey=storeKey+'Subscription';
var version=hotReloadingVersion++;

var contextTypes=(_contextTypes={},_contextTypes[storeKey]=_storeShape2.default,_contextTypes[subscriptionKey]=_react.PropTypes.instanceOf(_Subscription2.default),_contextTypes);
var childContextTypes=(_childContextTypes={},_childContextTypes[subscriptionKey]=_react.PropTypes.instanceOf(_Subscription2.default),_childContextTypes);

return function wrapWithConnect(WrappedComponent){
(0,_invariant2.default)(typeof WrappedComponent=='function','You must pass a component to the function returned by '+('connect. Instead received '+WrappedComponent));

var wrappedComponentName=WrappedComponent.displayName||WrappedComponent.name||'Component';

var displayName=getDisplayName(wrappedComponentName);

var selectorFactoryOptions=_extends({},connectOptions,{
getDisplayName:getDisplayName,
methodName:methodName,
renderCountProp:renderCountProp,
shouldHandleStateChanges:shouldHandleStateChanges,
storeKey:storeKey,
withRef:withRef,
displayName:displayName,
wrappedComponentName:wrappedComponentName,
WrappedComponent:WrappedComponent});


var Connect=function(_Component){
_inherits(Connect,_Component);

function Connect(props,context){
_classCallCheck(this,Connect);

var _this=_possibleConstructorReturn(this,_Component.call(this,props,context));

_this.version=version;
_this.state={};
_this.renderCount=0;
_this.store=_this.props[storeKey]||_this.context[storeKey];
_this.parentSub=props[subscriptionKey]||context[subscriptionKey];

_this.setWrappedInstance=_this.setWrappedInstance.bind(_this);

(0,_invariant2.default)(_this.store,'Could not find "'+storeKey+'" in either the context or '+('props of "'+displayName+'". ')+'Either wrap the root component in a <Provider>, '+('or explicitly pass "'+storeKey+'" as a prop to "'+displayName+'".'));



_this.getState=_this.store.getState.bind(_this.store);

_this.initSelector();
_this.initSubscription();
return _this;
}

Connect.prototype.getChildContext=function getChildContext(){
var _ref2;

return _ref2={},_ref2[subscriptionKey]=this.subscription||this.parentSub,_ref2;
};

Connect.prototype.componentDidMount=function componentDidMount(){
if(!shouldHandleStateChanges)return;







this.subscription.trySubscribe();
this.selector.run(this.props);
if(this.selector.shouldComponentUpdate)this.forceUpdate();
};

Connect.prototype.componentWillReceiveProps=function componentWillReceiveProps(nextProps){
this.selector.run(nextProps);
};

Connect.prototype.shouldComponentUpdate=function shouldComponentUpdate(){
return this.selector.shouldComponentUpdate;
};

Connect.prototype.componentWillUnmount=function componentWillUnmount(){
if(this.subscription)this.subscription.tryUnsubscribe();


this.subscription=null;
this.store=null;
this.parentSub=null;
this.selector.run=function(){};
};

Connect.prototype.getWrappedInstance=function getWrappedInstance(){
(0,_invariant2.default)(withRef,'To access the wrapped instance, you need to specify '+('{ withRef: true } in the options argument of the '+methodName+'() call.'));
return this.wrappedInstance;
};

Connect.prototype.setWrappedInstance=function setWrappedInstance(ref){
this.wrappedInstance=ref;
};

Connect.prototype.initSelector=function initSelector(){
var dispatch=this.store.dispatch;
var getState=this.getState;

var sourceSelector=selectorFactory(dispatch,selectorFactoryOptions);


var selector=this.selector={
shouldComponentUpdate:true,
props:sourceSelector(getState(),this.props),
run:function runComponentSelector(props){
try{
var nextProps=sourceSelector(getState(),props);
if(selector.error||nextProps!==selector.props){
selector.shouldComponentUpdate=true;
selector.props=nextProps;
selector.error=null;
}
}catch(error){
selector.shouldComponentUpdate=true;
selector.error=error;
}
}};

};

Connect.prototype.initSubscription=function initSubscription(){
var _this2=this;

if(shouldHandleStateChanges){
(function(){
var subscription=_this2.subscription=new _Subscription2.default(_this2.store,_this2.parentSub);
var dummyState={};

subscription.onStateChange=function onStateChange(){
this.selector.run(this.props);

if(!this.selector.shouldComponentUpdate){
subscription.notifyNestedSubs();
}else{
this.componentDidUpdate=function componentDidUpdate(){
this.componentDidUpdate=undefined;
subscription.notifyNestedSubs();
};

this.setState(dummyState);
}
}.bind(_this2);
})();
}
};

Connect.prototype.isSubscribed=function isSubscribed(){
return Boolean(this.subscription)&&this.subscription.isSubscribed();
};

Connect.prototype.addExtraProps=function addExtraProps(props){
if(!withRef&&!renderCountProp)return props;




var withExtras=_extends({},props);
if(withRef)withExtras.ref=this.setWrappedInstance;
if(renderCountProp)withExtras[renderCountProp]=this.renderCount++;
return withExtras;
};

Connect.prototype.render=function render(){
var selector=this.selector;
selector.shouldComponentUpdate=false;

if(selector.error){
throw selector.error;
}else{
return(0,_react.createElement)(WrappedComponent,this.addExtraProps(selector.props));
}
};

return Connect;
}(_react.Component);

Connect.WrappedComponent=WrappedComponent;
Connect.displayName=displayName;
Connect.childContextTypes=childContextTypes;
Connect.contextTypes=contextTypes;
Connect.propTypes=contextTypes;

if(process.env.NODE_ENV!=='production'){
Connect.prototype.componentWillUpdate=function componentWillUpdate(){

if(this.version!==version){
this.version=version;
this.initSelector();

if(this.subscription)this.subscription.tryUnsubscribe();
this.initSubscription();
if(shouldHandleStateChanges)this.subscription.trySubscribe();
}
};
}

return(0,_hoistNonReactStatics2.default)(Connect,WrappedComponent);
};
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});exports.

wrapMapToPropsConstant=wrapMapToPropsConstant;exports.


















getDependsOnOwnProps=getDependsOnOwnProps;exports.















wrapMapToPropsFunc=wrapMapToPropsFunc;var _verifyPlainObject=__webpack_require__(80);var _verifyPlainObject2=_interopRequireDefault(_verifyPlainObject);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function wrapMapToPropsConstant(getConstant){return function initConstantSelector(dispatch,options){var constant=getConstant(dispatch,options);function constantSelector(){return constant;}constantSelector.dependsOnOwnProps=false;return constantSelector;};}function getDependsOnOwnProps(mapToProps){return mapToProps.dependsOnOwnProps!==null&&mapToProps.dependsOnOwnProps!==undefined?Boolean(mapToProps.dependsOnOwnProps):mapToProps.length!==1;}function wrapMapToPropsFunc(mapToProps,methodName){
return function initProxySelector(dispatch,_ref){
var displayName=_ref.displayName;

var proxy=function mapToPropsProxy(stateOrDispatch,ownProps){
return proxy.dependsOnOwnProps?proxy.mapToProps(stateOrDispatch,ownProps):proxy.mapToProps(stateOrDispatch);
};

proxy.dependsOnOwnProps=getDependsOnOwnProps(mapToProps);

proxy.mapToProps=function detectFactoryAndVerify(stateOrDispatch,ownProps){
proxy.mapToProps=mapToProps;
var props=proxy(stateOrDispatch,ownProps);

if(typeof props==='function'){
proxy.mapToProps=props;
proxy.dependsOnOwnProps=getDependsOnOwnProps(props);
props=proxy(stateOrDispatch,ownProps);
}

if(process.env.NODE_ENV!=='production')(0,_verifyPlainObject2.default)(props,displayName,methodName);

return props;
};

return proxy;
};
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 78 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}





var CLEARED=null;
var nullListeners={
notify:function notify(){}};


function createListenerCollection(){


var current=[];
var next=[];

return{
clear:function clear(){
next=CLEARED;
current=CLEARED;
},
notify:function notify(){
var listeners=current=next;
for(var i=0;i<listeners.length;i++){
listeners[i]();
}
},
subscribe:function subscribe(listener){
var isSubscribed=true;
if(next===current)next=current.slice();
next.push(listener);

return function unsubscribe(){
if(!isSubscribed||current===CLEARED)return;
isSubscribed=false;

if(next===current)next=current.slice();
next.splice(next.indexOf(listener),1);
};
}};

}

var Subscription=function(){
function Subscription(store,parentSub){
_classCallCheck(this,Subscription);

this.store=store;
this.parentSub=parentSub;
this.unsubscribe=null;
this.listeners=nullListeners;
}

Subscription.prototype.addNestedSub=function addNestedSub(listener){
this.trySubscribe();
return this.listeners.subscribe(listener);
};

Subscription.prototype.notifyNestedSubs=function notifyNestedSubs(){
this.listeners.notify();
};

Subscription.prototype.isSubscribed=function isSubscribed(){
return Boolean(this.unsubscribe);
};

Subscription.prototype.trySubscribe=function trySubscribe(){
if(!this.unsubscribe){

this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange);

this.listeners=createListenerCollection();
}
};

Subscription.prototype.tryUnsubscribe=function tryUnsubscribe(){
if(this.unsubscribe){
this.unsubscribe();
this.unsubscribe=null;
this.listeners.clear();
this.listeners=nullListeners;
}
};

return Subscription;
}();exports.

default=Subscription;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(1);exports.default=

_react.PropTypes.shape({
subscribe:_react.PropTypes.func.isRequired,
dispatch:_react.PropTypes.func.isRequired,
getState:_react.PropTypes.func.isRequired});

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=


verifyPlainObject;var _isPlainObject=__webpack_require__(55);var _isPlainObject2=_interopRequireDefault(_isPlainObject);var _warning=__webpack_require__(56);var _warning2=_interopRequireDefault(_warning);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function verifyPlainObject(value,displayName,methodName){
if(!(0,_isPlainObject2.default)(value)){
(0,_warning2.default)(methodName+'() in '+displayName+' must return a plain object. Instead received '+value+'.');
}
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=__webpack_require__(0);
var _invariant=__webpack_require__(41);var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}





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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);

var _NavigationCardStackPanResponder=__webpack_require__(57);var _NavigationCardStackPanResponder2=_interopRequireDefault(_NavigationCardStackPanResponder);
var _NavigationCardStackStyleInterpolator=__webpack_require__(83);var _NavigationCardStackStyleInterpolator2=_interopRequireDefault(_NavigationCardStackStyleInterpolator);
var _NavigationPagerPanResponder=__webpack_require__(198);var _NavigationPagerPanResponder2=_interopRequireDefault(_NavigationPagerPanResponder);
var _NavigationPagerStyleInterpolator=__webpack_require__(199);var _NavigationPagerStyleInterpolator2=_interopRequireDefault(_NavigationPagerStyleInterpolator);
var _NavigationPointerEventsContainer=__webpack_require__(200);var _NavigationPointerEventsContainer2=_interopRequireDefault(_NavigationPointerEventsContainer);
var _NavigationPropTypes=__webpack_require__(31);var _NavigationPropTypes2=_interopRequireDefault(_NavigationPropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var



















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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 83 */
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _invariant=__webpack_require__(41);var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}














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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);

var _NavigationPropTypes=__webpack_require__(31);var _NavigationPropTypes2=_interopRequireDefault(_NavigationPropTypes);
var _NavigationScenesReducer=__webpack_require__(201);var _NavigationScenesReducer2=_interopRequireDefault(_NavigationScenesReducer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var





























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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});exports.ResponsibleTouchArea=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp;var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);












var _RippleEffect=__webpack_require__(87);var _RippleEffect2=_interopRequireDefault(_RippleEffect);
var _utils=__webpack_require__(19);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var MAX_PARTICLE_COUNT=5;var

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
inputRange:[0,1],outputRange:[this.props.raise?0.15:0,0.6]}),
shadows={
borderRadius:3,
shadowColor:'#666666',
opacity:shadowOpacity,
shadowOpacity:1,
shadowRadius:raiseShadowRadius,
shadowOffset:{width:0,height:2}};


return _react2.default.createElement(_reactNative.View,{
onMouseLeave:onMouseLeave.bind(this),
onMouseEnter:onMouseEnter.bind(this),
className:'touchable',
ref:'wrapperView',collapsable:false,
style:this.props.wrapperStyle,
onLayout:this.props.onLayout},

_react2.default.createElement(_reactNative.Animated.View,{style:[styles.fullSizeAbsolute,shadows]}),
_react2.default.createElement(_reactNative.View,{style:[styles.fullSizeAbsolute,{overflow:'hidden'}]},
this.renderRipples()),


_react2.default.createElement(InnerComponent,{
activeOpacity:this.props.minActiveOpacity,
style:this.props.innerStyle,
onPressIn:onPressIn.bind(this),
onPressOut:onPressOut.bind(this),
onPress:onPress.bind(this),
onStartShouldSetResponderCapture:function onStartShouldSetResponderCapture(){return true;}},
_react2.default.createElement(_reactNative.View,{pointerEvents:'none'},
this.props.children)));



}}]);return ResponsibleTouchArea;}(_react.Component),_class.defaultProps={staticRipple:false,rippleColor:'#FFFFFF',minActiveOpacity:0.8},_temp);process.env.NODE_ENV!=="production"?ResponsibleTouchArea.propTypes={wrapperStyle:_react2.default.PropTypes.any,innerStyle:_react2.default.PropTypes.any,staticRipple:_react2.default.PropTypes.bool,rippleColor:_react2.default.PropTypes.string,minActiveOpacity:_react2.default.PropTypes.number,onPress:_react2.default.PropTypes.func,onLayout:_react2.default.PropTypes.func,onMouseEnter:_react2.default.PropTypes.func,onMouseLeave:_react2.default.PropTypes.func}:void 0;


function onPress(e){
!this.props.disabled&&this.props.onPress&&this.props.onPress(e);
}

function onPressIn(e){var _this3=this;
if(this.props.disabled)return;

if(this.props.raise){
playAnimation.call(this,1);
}var _e$nativeEvent=

e.nativeEvent,locationX=_e$nativeEvent.locationX,locationY=_e$nativeEvent.locationY,pageX=_e$nativeEvent.pageX,pageY=_e$nativeEvent.pageY;

this.refs.wrapperView.measure(function(fx,fy,wrapperWidth,wrapperHeight,px,py){
var ripplePosition=void 0,rippleRadius=0,touchX=locationX,touchY=locationY;

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
top:0,bottom:0,right:0,left:0}});



var raiseShadowRadius=_utils.isIos?4:10;exports.default=

ResponsibleTouchArea;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 87 */
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
/* 88 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=










compose;function compose(){
for(var _len=arguments.length,funcs=Array(_len),_key=0;_key<_len;_key++){
funcs[_key]=arguments[_key];
}

if(funcs.length===0){
return function(arg){
return arg;
};
}

if(funcs.length===1){
return funcs[0];
}

var last=funcs[funcs.length-1];
var rest=funcs.slice(0,-1);
return function(){
return rest.reduceRight(function(composed,f){
return f(composed);
},last.apply(undefined,arguments));
};
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.ActionTypes=undefined;exports.default=





































createStore;var _isPlainObject=__webpack_require__(55);var _isPlainObject2=_interopRequireDefault(_isPlainObject);var _symbolObservable=__webpack_require__(215);var _symbolObservable2=_interopRequireDefault(_symbolObservable);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var ActionTypes=exports.ActionTypes={INIT:'@@redux/INIT'};function createStore(reducer,preloadedState,enhancer){
var _ref2;

if(typeof preloadedState==='function'&&typeof enhancer==='undefined'){
enhancer=preloadedState;
preloadedState=undefined;
}

if(typeof enhancer!=='undefined'){
if(typeof enhancer!=='function'){
throw new Error('Expected the enhancer to be a function.');
}

return enhancer(createStore)(reducer,preloadedState);
}

if(typeof reducer!=='function'){
throw new Error('Expected the reducer to be a function.');
}

var currentReducer=reducer;
var currentState=preloadedState;
var currentListeners=[];
var nextListeners=currentListeners;
var isDispatching=false;

function ensureCanMutateNextListeners(){
if(nextListeners===currentListeners){
nextListeners=currentListeners.slice();
}
}






function getState(){
return currentState;
}
























function subscribe(listener){
if(typeof listener!=='function'){
throw new Error('Expected listener to be a function.');
}

var isSubscribed=true;

ensureCanMutateNextListeners();
nextListeners.push(listener);

return function unsubscribe(){
if(!isSubscribed){
return;
}

isSubscribed=false;

ensureCanMutateNextListeners();
var index=nextListeners.indexOf(listener);
nextListeners.splice(index,1);
};
}


























function dispatch(action){
if(!(0,_isPlainObject2.default)(action)){
throw new Error('Actions must be plain objects. '+'Use custom middleware for async actions.');
}

if(typeof action.type==='undefined'){
throw new Error('Actions may not have an undefined "type" property. '+'Have you misspelled a constant?');
}

if(isDispatching){
throw new Error('Reducers may not dispatch actions.');
}

try{
isDispatching=true;
currentState=currentReducer(currentState,action);
}finally{
isDispatching=false;
}

var listeners=currentListeners=nextListeners;
for(var i=0;i<listeners.length;i++){
listeners[i]();
}

return action;
}











function replaceReducer(nextReducer){
if(typeof nextReducer!=='function'){
throw new Error('Expected the nextReducer to be a function.');
}

currentReducer=nextReducer;
dispatch({type:ActionTypes.INIT});
}







function observable(){
var _ref;

var outerSubscribe=subscribe;
return _ref={








subscribe:function subscribe(observer){
if(typeof observer!=='object'){
throw new TypeError('Expected the observer to be an object.');
}

function observeState(){
if(observer.next){
observer.next(getState());
}
}

observeState();
var unsubscribe=outerSubscribe(observeState);
return{unsubscribe:unsubscribe};
}},
_ref[_symbolObservable2.default]=function(){
return this;
},_ref;
}




dispatch({type:ActionTypes.INIT});

return _ref2={
dispatch:dispatch,
subscribe:subscribe,
getState:getState,
replaceReducer:replaceReducer},
_ref2[_symbolObservable2.default]=observable,_ref2;
}

/***/ }),
/* 90 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=





warning;function warning(message){

if(typeof console!=='undefined'&&typeof console.error==='function'){
console.error(message);
}

try{



throw new Error(message);

}catch(e){}

}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _router=__webpack_require__(92);Object.keys(_router).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _router[key];}});});exports.default=








configureStore;var _redux=__webpack_require__(59);var _reducers=__webpack_require__(237);var _reducers2=_interopRequireDefault(_reducers);var _actions=__webpack_require__(33);var Actions=_interopRequireWildcard(_actions);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var DEVTOOLS='__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',composeEnhancers=window[DEVTOOLS]||_redux.compose;function configureStore(initialState){
var enhancers=composeEnhancers();



var store=initialState?
(0,_redux.createStore)(_reducers2.default,initialState,enhancers):
(0,_redux.createStore)(_reducers2.default,enhancers);

if(false){
module.hot.accept('./reducers',function(){
var nextRootReducer=require('./reducers').default;
store.replaceReducer(nextRootReducer);
});
}

return store;
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.history=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=












function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
switch(action.type){
case Actions.BrowserRouterNavigate:
return browserNavigate(state,action);

default:
return state;}

};var _actions=__webpack_require__(33);var Actions=_interopRequireWildcard(_actions);var _history=__webpack_require__(74);var _reactUniversalUi=__webpack_require__(58);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}var history=exports.history=_reactUniversalUi.utils.isBrowser?(0,_history.createHistory)():(0,_history.createMemoryHistory)();var initialState={history:history,params:{}};

function browserNavigate(state,action){
history.push(action.path,action.params);

return _extends({},state,{params:action.params});
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(187);

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(403);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(406);

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(247);
var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);var _reactNative2=_interopRequireDefault(_reactNative);
var _src=__webpack_require__(218);var _src2=_interopRequireDefault(_src);
var _store=__webpack_require__(91);var _store2=_interopRequireDefault(_store);
var _app=__webpack_require__(234);var appActions=_interopRequireWildcard(_app);

var _reactHotLoader=__webpack_require__(248);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var store=(0,_store2.default)();
render=function render(Component){
var rootEl=document.getElementById('root');

_reactNative2.default.render(
_react2.default.createElement(_reactHotLoader.AppContainer,null,
_react2.default.createElement(Component,{store:store})),

rootEl);

};

render(_src2.default);

if(false){
module.hot.accept('./src',function(){
var nextApp=require('./src').default;
render(nextApp);



setTimeout(function(){return store.dispatch(appActions.increaseCounter());},0);
});
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _codemirror=__webpack_require__(5);

var _codemirror2=_interopRequireDefault(_codemirror);

var _getHintsAtPosition=__webpack_require__(104);

var _getHintsAtPosition2=_interopRequireDefault(_getHintsAtPosition);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



























_codemirror2.default.registerHelper('hint','graphql',function(editor,options){
var schema=options.schema;
if(!schema){
return;
}

var cur=editor.getCursor();
var token=editor.getTokenAt(cur);
var results=(0,_getHintsAtPosition2.default)(schema,editor.getValue(),cur,token);
if(results&&results.list&&results.list.length>0){
results.from=_codemirror2.default.Pos(results.from.line,results.from.column);
results.to=_codemirror2.default.Pos(results.to.line,results.to.column);
_codemirror2.default.signal(editor,'hasCompletion',editor,results,token);
}

return results;
});

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _graphql=__webpack_require__(21);

var _codemirror=__webpack_require__(5);

var _codemirror2=_interopRequireDefault(_codemirror);

var _getTypeInfo=__webpack_require__(42);

var _getTypeInfo2=_interopRequireDefault(_getTypeInfo);

var _SchemaReference=__webpack_require__(63);

__webpack_require__(106);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}















_codemirror2.default.registerHelper('info','graphql',function(token,options){
if(!options.schema||!token.state){
return;
}

var state=token.state;
var kind=state.kind;
var step=state.step;
var typeInfo=(0,_getTypeInfo2.default)(options.schema,token.state);




if(kind==='Field'&&step===0&&typeInfo.fieldDef||kind==='AliasedField'&&step===2&&typeInfo.fieldDef){
var into=document.createElement('div');
renderField(into,typeInfo,options);
renderDescription(into,options,typeInfo.fieldDef);
return into;
}else if(kind==='Directive'&&step===1&&typeInfo.directiveDef){
var _into=document.createElement('div');
renderDirective(_into,typeInfo,options);
renderDescription(_into,options,typeInfo.directiveDef);
return _into;
}else if(kind==='Argument'&&step===0&&typeInfo.argDef){
var _into2=document.createElement('div');
renderArg(_into2,typeInfo,options);
renderDescription(_into2,options,typeInfo.argDef);
return _into2;
}else if(kind==='EnumValue'&&typeInfo.enumValue&&typeInfo.enumValue.description){
var _into3=document.createElement('div');
renderEnumValue(_into3,typeInfo,options);
renderDescription(_into3,options,typeInfo.enumValue);
return _into3;
}else if(kind==='NamedType'&&typeInfo.type&&typeInfo.type.description){
var _into4=document.createElement('div');
renderType(_into4,typeInfo,options,typeInfo.type);
renderDescription(_into4,options,typeInfo.type);
return _into4;
}
});









function renderField(into,typeInfo,options){
renderQualifiedField(into,typeInfo,options);
renderTypeAnnotation(into,typeInfo,options,typeInfo.type);
}

function renderQualifiedField(into,typeInfo,options){
var fieldName=typeInfo.fieldDef.name;
if(fieldName.slice(0,2)!=='__'){
renderType(into,typeInfo,options,typeInfo.parentType);
text(into,'.');
}
text(into,fieldName,'field-name',options,(0,_SchemaReference.getFieldReference)(typeInfo));
}

function renderDirective(into,typeInfo,options){
var name='@'+typeInfo.directiveDef.name;
text(into,name,'directive-name',options,(0,_SchemaReference.getDirectiveReference)(typeInfo));
}

function renderArg(into,typeInfo,options){
if(typeInfo.directiveDef){
renderDirective(into,typeInfo,options);
}else if(typeInfo.fieldDef){
renderQualifiedField(into,typeInfo,options);
}

var name=typeInfo.argDef.name;
text(into,'(');
text(into,name,'arg-name',options,(0,_SchemaReference.getArgumentReference)(typeInfo));
renderTypeAnnotation(into,typeInfo,options,typeInfo.inputType);
text(into,')');
}

function renderTypeAnnotation(into,typeInfo,options,t){
text(into,': ');
renderType(into,typeInfo,options,t);
}

function renderEnumValue(into,typeInfo,options){
var name=typeInfo.enumValue.name;
renderType(into,typeInfo,options,typeInfo.inputType);
text(into,'.');
text(into,name,'enum-value',options,(0,_SchemaReference.getEnumValueReference)(typeInfo));
}

function renderType(into,typeInfo,options,t){
if(t instanceof _graphql.GraphQLNonNull){
renderType(into,typeInfo,options,t.ofType);
text(into,'!');
}else if(t instanceof _graphql.GraphQLList){
text(into,'[');
renderType(into,typeInfo,options,t.ofType);
text(into,']');
}else{
text(into,t.name,'type-name',options,(0,_SchemaReference.getTypeReference)(typeInfo,t));
}
}

function renderDescription(into,options,def){
var description=def.description;
if(description){
var descriptionDiv=document.createElement('div');
descriptionDiv.className='info-description';
if(options.renderDescription){
descriptionDiv.innerHTML=options.renderDescription(description);
}else{
descriptionDiv.appendChild(document.createTextNode(description));
}
into.appendChild(descriptionDiv);
}

renderDeprecation(into,options,def);
}

function renderDeprecation(into,options,def){
var reason=def.deprecationReason;
if(reason){
var deprecationDiv=document.createElement('div');
deprecationDiv.className='info-deprecation';
if(options.renderDescription){
deprecationDiv.innerHTML=options.renderDescription(reason);
}else{
deprecationDiv.appendChild(document.createTextNode(reason));
}
var label=document.createElement('span');
label.className='info-deprecation-label';
label.appendChild(document.createTextNode('Deprecated: '));
deprecationDiv.insertBefore(label,deprecationDiv.firstChild);
into.appendChild(deprecationDiv);
}
}

function text(into,content,className,options,ref){
if(className){
(function(){
var onClick=options.onClick;
var node=document.createElement(onClick?'a':'span');
if(onClick){


node.href='javascript:void 0';
node.addEventListener('click',function(e){
onClick(ref,e);
});
}
node.className=className;
node.appendChild(document.createTextNode(content));
into.appendChild(node);
})();
}else{
into.appendChild(document.createTextNode(content));
}
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _codemirror=__webpack_require__(5);

var _codemirror2=_interopRequireDefault(_codemirror);

var _getTypeInfo=__webpack_require__(42);

var _getTypeInfo2=_interopRequireDefault(_getTypeInfo);

var _SchemaReference=__webpack_require__(63);

__webpack_require__(107);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}























_codemirror2.default.registerHelper('jump','graphql',function(token,options){
if(!options.schema||!options.onClick||!token.state){
return;
}




var state=token.state;
var kind=state.kind;
var step=state.step;
var typeInfo=(0,_getTypeInfo2.default)(options.schema,state);

if(kind==='Field'&&step===0&&typeInfo.fieldDef||kind==='AliasedField'&&step===2&&typeInfo.fieldDef){
return(0,_SchemaReference.getFieldReference)(typeInfo);
}else if(kind==='Directive'&&step===1&&typeInfo.directiveDef){
return(0,_SchemaReference.getDirectiveReference)(typeInfo);
}else if(kind==='Argument'&&step===0&&typeInfo.argDef){
return(0,_SchemaReference.getArgumentReference)(typeInfo);
}else if(kind==='EnumValue'&&typeInfo.enumValue){
return(0,_SchemaReference.getEnumValueReference)(typeInfo);
}else if(kind==='NamedType'&&typeInfo.type){
return(0,_SchemaReference.getTypeReference)(typeInfo);
}
});

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _codemirror=__webpack_require__(5);

var _codemirror2=_interopRequireDefault(_codemirror);

var _graphql=__webpack_require__(21);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}






















_codemirror2.default.registerHelper('lint','graphql',function(text,options,editor){
var schema=options.schema;
if(!schema){
return[];
}

try{
var ast=(0,_graphql.parse)(text);
var validationErrorAnnotations=mapCat((0,_graphql.validate)(schema,ast),function(error){
return annotations(editor,error,'error','validation');
});


var deprecationWarningAnnotations=!_graphql.findDeprecatedUsages?[]:mapCat((0,_graphql.findDeprecatedUsages)(schema,ast),function(error){
return annotations(editor,error,'warning','deprecation');
});
return validationErrorAnnotations.concat(deprecationWarningAnnotations);
}catch(error){
var location=error.locations[0];
var pos=_codemirror2.default.Pos(location.line-1,location.column);
var token=editor.getTokenAt(pos);
return[{
message:error.message,
severity:'error',
type:'syntax',
from:_codemirror2.default.Pos(location.line-1,token.start),
to:_codemirror2.default.Pos(location.line-1,token.end)}];

}
});

function annotations(editor,error,severity,type){
return error.nodes.map(function(node){
var highlightNode=node.kind!=='Variable'&&node.name?node.name:node.variable?node.variable:node;
return{
message:error.message,
severity:severity,
type:type,
from:editor.posFromIndex(highlightNode.loc.start),
to:editor.posFromIndex(highlightNode.loc.end)};

});
}


function mapCat(array,mapper){
return Array.prototype.concat.apply([],array.map(mapper));
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _codemirror=__webpack_require__(5);

var _codemirror2=_interopRequireDefault(_codemirror);

var _onlineParser=__webpack_require__(65);

var _onlineParser2=_interopRequireDefault(_onlineParser);

var _Rules=__webpack_require__(62);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}





















_codemirror2.default.defineMode('graphql',function(config){
var parser=(0,_onlineParser2.default)({
eatWhitespace:function eatWhitespace(stream){
return stream.eatWhile(_Rules.isIgnored);
},
LexRules:_Rules.LexRules,
ParseRules:_Rules.ParseRules,
editorConfig:{tabSize:config.tabSize}});


return{
config:config,
startState:parser.startState,
token:parser.token,
indent:indent,
electricInput:/^\s*[})\]]/,
fold:'brace',
lineComment:'#',
closeBrackets:{
pairs:'()[]{}""',
explode:'()[]{}'}};


});








function indent(state,textAfter){
var levels=state.levels;


var level=!levels||levels.length===0?state.indentLevel:levels[levels.length-1]-(this.electricInput.test(textAfter)?1:0);
return level*this.config.indentUnit;
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});


function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}





















var CharacterStream=function(){
function CharacterStream(sourceText){
_classCallCheck(this,CharacterStream);

this._start=0;
this._pos=0;
this._sourceText=sourceText;
}

CharacterStream.prototype.getStartOfToken=function getStartOfToken(){
return this._start;
};

CharacterStream.prototype.getCurrentPosition=function getCurrentPosition(){
return this._pos;
};

CharacterStream.prototype._testNextCharacter=function _testNextCharacter(pattern){
var character=this._sourceText.charAt(this._pos);
return typeof pattern==='string'?character===pattern:pattern.test?pattern.test(character):pattern(character);
};

CharacterStream.prototype.eol=function eol(){
return this._sourceText.length===this._pos;
};

CharacterStream.prototype.sol=function sol(){
return this._pos===0;
};

CharacterStream.prototype.peek=function peek(){
return this._sourceText.charAt(this._pos)?this._sourceText.charAt(this._pos):null;
};

CharacterStream.prototype.next=function next(){
var char=this._sourceText.charAt(this._pos);
this._pos++;
return char;
};

CharacterStream.prototype.eat=function eat(pattern){
var isMatched=this._testNextCharacter(pattern);
if(isMatched){
this._start=this._pos;
this._pos++;
return this._sourceText.charAt(this._pos-1);
}
return undefined;
};

CharacterStream.prototype.eatWhile=function eatWhile(match){
var isMatched=this._testNextCharacter(match);
var didEat=false;


if(isMatched){
didEat=isMatched;
this._start=this._pos;
}

while(isMatched){
this._pos++;
isMatched=this._testNextCharacter(match);
didEat=true;
}

return didEat;
};

CharacterStream.prototype.eatSpace=function eatSpace(){
return this.eatWhile(/[\s\u00a0]/);
};

CharacterStream.prototype.skipToEnd=function skipToEnd(){
this._pos=this._sourceText.length;
};

CharacterStream.prototype.skipTo=function skipTo(position){
this._pos=position;
};

CharacterStream.prototype.match=function match(pattern){
var consume=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;
var caseFold=arguments[2];

var token=null;
var match=null;

switch(typeof pattern){
case'string':
var regex=new RegExp(pattern,caseFold?'i':'');
match=regex.test(this._sourceText.substr(this._pos,pattern.length));
token=pattern;
break;
case'object':
case'function':
match=this._sourceText.slice(this._pos).match(pattern);
token=match&&match[0];
break;}


if(match&&(typeof pattern==='string'||match.index===0)){
if(consume){
this._start=this._pos;
this._pos+=token.length;
}
return match;
}


return false;
};

CharacterStream.prototype.backUp=function backUp(num){
this._pos-=num;
};

CharacterStream.prototype.column=function column(){
return this._pos;
};

CharacterStream.prototype.indentation=function indentation(){
var match=this._sourceText.match(/\s*/);
var indent=0;
if(match&&match.index===0){
var whitespaces=match[0];
var pos=0;
while(whitespaces.length>pos){
if(whitespaces.charCodeAt(pos)===9){
indent+=2;
}else{
indent++;
}
pos++;
}
}

return indent;
};

CharacterStream.prototype.current=function current(){
return this._sourceText.slice(this._start,this._pos);
};

return CharacterStream;
}();

exports.default=CharacterStream;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.opt=opt;
exports.list=list;
exports.butNot=butNot;
exports.t=t;
exports.p=p;











function opt(ofRule){
return{ofRule:ofRule};
}


function list(ofRule,separator){
return{ofRule:ofRule,isList:true,separator:separator};
}


function butNot(rule,exclusions){
var ruleMatch=rule.match;
rule.match=function(token){
return ruleMatch(token)&&exclusions.every(function(exclusion){
return!exclusion.match(token);
});
};
return rule;
}


function t(kind,style){
return{style:style,match:function match(token){
return token.kind===kind;
}};
}


function p(value,style){
return{
style:style||'punctuation',
match:function match(token){
return token.kind==='Punctuation'&&token.value===value;
}};

}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.default=getHintsAtPosition;

var _graphql=__webpack_require__(21);

var _introspection=__webpack_require__(11);

var _forEachState=__webpack_require__(64);

var _forEachState2=_interopRequireDefault(_forEachState);

var _getTypeInfo=__webpack_require__(42);

var _getTypeInfo2=_interopRequireDefault(_getTypeInfo);

var _hintList=__webpack_require__(105);

var _hintList2=_interopRequireDefault(_hintList);

var _objectValues=__webpack_require__(108);

var _objectValues2=_interopRequireDefault(_objectValues);

var _runParser=__webpack_require__(109);

var _runParser2=_interopRequireDefault(_runParser);

var _Rules=__webpack_require__(62);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

























function getHintsAtPosition(schema,sourceText,cursor,token){


var state=token.state.kind==='Invalid'?token.state.prevState:token.state;

var kind=state.kind;
var step=state.step;
var typeInfo=(0,_getTypeInfo2.default)(schema,state);


if(kind==='Document'){
return(0,_hintList2.default)(cursor,token,[{text:'query'},{text:'mutation'},{text:'subscription'},{text:'fragment'},{text:'{'}]);
}


if(kind==='SelectionSet'||kind==='Field'||kind==='AliasedField'){
if(typeInfo.parentType){
var fields=typeInfo.parentType.getFields?(0,_objectValues2.default)(typeInfo.parentType.getFields()):[];
if((0,_graphql.isAbstractType)(typeInfo.parentType)){
fields.push(_introspection.TypeNameMetaFieldDef);
}
if(typeInfo.parentType===schema.getQueryType()){
fields.push(_introspection.SchemaMetaFieldDef,_introspection.TypeMetaFieldDef);
}
return(0,_hintList2.default)(cursor,token,fields.map(function(field){
return{
text:field.name,
type:field.type,
description:field.description,
isDeprecated:field.isDeprecated,
deprecationReason:field.deprecationReason};

}));
}
}


if(kind==='Arguments'||kind==='Argument'&&step===0){
var argDefs=typeInfo.argDefs;
if(argDefs){
return(0,_hintList2.default)(cursor,token,argDefs.map(function(argDef){
return{
text:argDef.name,
type:argDef.type,
description:argDef.description};

}));
}
}


if(kind==='ObjectValue'||kind==='ObjectField'&&step===0){
if(typeInfo.objectFieldDefs){
var objectFields=(0,_objectValues2.default)(typeInfo.objectFieldDefs);
return(0,_hintList2.default)(cursor,token,objectFields.map(function(field){
return{
text:field.name,
type:field.type,
description:field.description};

}));
}
}


if(kind==='EnumValue'||kind==='ListValue'&&step===1||kind==='ObjectField'&&step===2||kind==='Argument'&&step===2){
var _ret=function(){
var namedInputType=(0,_graphql.getNamedType)(typeInfo.inputType);
if(namedInputType instanceof _graphql.GraphQLEnumType){
var valueMap=namedInputType.getValues();
var values=(0,_objectValues2.default)(valueMap);
return{
v:(0,_hintList2.default)(cursor,token,values.map(function(value){
return{
text:value.name,
type:namedInputType,
description:value.description,
isDeprecated:value.isDeprecated,
deprecationReason:value.deprecationReason};

}))};

}else if(namedInputType===_graphql.GraphQLBoolean){
return{
v:(0,_hintList2.default)(cursor,token,[{text:'true',type:_graphql.GraphQLBoolean,description:'Not false.'},{text:'false',type:_graphql.GraphQLBoolean,description:'Not true.'}])};

}
}();

if(typeof _ret==="object")return _ret.v;
}


if(kind==='TypeCondition'&&step===1||kind==='NamedType'&&state.prevState.kind==='TypeCondition'){
var possibleTypes=void 0;
if(typeInfo.parentType){
if((0,_graphql.isAbstractType)(typeInfo.parentType)){
(function(){


var possibleObjTypes=schema.getPossibleTypes(typeInfo.parentType);
var possibleIfaceMap=Object.create(null);
possibleObjTypes.forEach(function(type){
type.getInterfaces().forEach(function(iface){
possibleIfaceMap[iface.name]=iface;
});
});
possibleTypes=possibleObjTypes.concat((0,_objectValues2.default)(possibleIfaceMap));
})();
}else{


possibleTypes=[typeInfo.parentType];
}
}else{
var typeMap=schema.getTypeMap();
possibleTypes=(0,_objectValues2.default)(typeMap).filter(_graphql.isCompositeType);
}
return(0,_hintList2.default)(cursor,token,possibleTypes.map(function(type){
return{
text:type.name,
description:type.description};

}));
}


if(kind==='FragmentSpread'&&step===1){
var _ret3=function(){
var typeMap=schema.getTypeMap();
var defState=getDefinitionState(token.state);
var fragments=getFragmentDefinitions(sourceText);


var relevantFrags=fragments.filter(function(frag){
return(

typeMap[frag.typeCondition.name.value]&&

!(defState&&defState.kind==='FragmentDefinition'&&defState.name===frag.name.value)&&

(0,_graphql.doTypesOverlap)(schema,typeInfo.parentType,typeMap[frag.typeCondition.name.value]));

});

return{
v:(0,_hintList2.default)(cursor,token,relevantFrags.map(function(frag){
return{
text:frag.name.value,
type:typeMap[frag.typeCondition.name.value],
description:'fragment '+frag.name.value+' on '+frag.typeCondition.name.value};

}))};

}();

if(typeof _ret3==="object")return _ret3.v;
}


if(kind==='VariableDefinition'&&step===2||kind==='ListType'&&step===1||kind==='NamedType'&&(state.prevState.kind==='VariableDefinition'||state.prevState.kind==='ListType')){
var inputTypeMap=schema.getTypeMap();
var inputTypes=(0,_objectValues2.default)(inputTypeMap).filter(_graphql.isInputType);
return(0,_hintList2.default)(cursor,token,inputTypes.map(function(type){
return{
text:type.name,
description:type.description};

}));
}


if(kind==='Directive'){
var directives=schema.getDirectives().filter(function(directive){
return canUseDirective(state.prevState.kind,directive);
});
return(0,_hintList2.default)(cursor,token,directives.map(function(directive){
return{
text:directive.name,
description:directive.description};

}));
}
}

function canUseDirective(kind,directive){
var locations=directive.locations;
switch(kind){
case'Query':
return locations.indexOf('QUERY')!==-1;
case'Mutation':
return locations.indexOf('MUTATION')!==-1;
case'Subscription':
return locations.indexOf('SUBSCRIPTION')!==-1;
case'Field':
case'AliasedField':
return locations.indexOf('FIELD')!==-1;
case'FragmentDefinition':
return locations.indexOf('FRAGMENT_DEFINITION')!==-1;
case'FragmentSpread':
return locations.indexOf('FRAGMENT_SPREAD')!==-1;
case'InlineFragment':
return locations.indexOf('INLINE_FRAGMENT')!==-1;}

return false;
}


function getFragmentDefinitions(sourceText){
var fragmentDefs=[];
(0,_runParser2.default)(sourceText,{
eatWhitespace:function eatWhitespace(stream){
return stream.eatWhile(_Rules.isIgnored);
},
LexRules:_Rules.LexRules,
ParseRules:_Rules.ParseRules},
function(stream,state){
if(state.kind==='FragmentDefinition'&&state.name&&state.type){
fragmentDefs.push({
kind:'FragmentDefinition',
name:{
kind:'Name',
value:state.name},

typeCondition:{
kind:'NamedType',
name:{
kind:'Name',
value:state.type}}});



}
});

return fragmentDefs;
}



function getDefinitionState(tokenState){
var definitionState=void 0;

(0,_forEachState2.default)(tokenState,function(state){
switch(state.kind){
case'Query':
case'ShortQuery':
case'Mutation':
case'Subscription':
case'FragmentDefinition':
definitionState=state;
break;}

});

return definitionState;
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.default=hintList;










function hintList(cursor,token,list){
var hints=filterAndSortList(list,normalizeText(token.string));
if(!hints){
return;
}

var tokenStart=token.type!==null&&/"|\w/.test(token.string[0])?token.start:token.end;

return{
list:hints,
from:{line:cursor.line,column:tokenStart},
to:{line:cursor.line,column:token.end}};

}



function filterAndSortList(list,text){
if(!text){
return filterNonEmpty(list,function(entry){
return!entry.isDeprecated;
});
}

var byProximity=list.map(function(entry){
return{
proximity:getProximity(normalizeText(entry.text),text),
entry:entry};

});

var conciseMatches=filterNonEmpty(filterNonEmpty(byProximity,function(pair){
return pair.proximity<=2;
}),function(pair){
return!pair.entry.isDeprecated;
});

var sortedMatches=conciseMatches.sort(function(a,b){
return(a.entry.isDeprecated?1:0)-(b.entry.isDeprecated?1:0)||a.proximity-b.proximity||a.entry.text.length-b.entry.text.length;
});

return sortedMatches.map(function(pair){
return pair.entry;
});
}



function filterNonEmpty(array,predicate){
var filtered=array.filter(predicate);
return filtered.length===0?array:filtered;
}

function normalizeText(text){
return text.toLowerCase().replace(/\W/g,'');
}


function getProximity(suggestion,text){

var proximity=lexicalDistance(text,suggestion);
if(suggestion.length>text.length){

proximity-=suggestion.length-text.length-1;

proximity+=suggestion.indexOf(text)===0?0:0.5;
}
return proximity;
}















function lexicalDistance(a,b){
var i=void 0;
var j=void 0;
var d=[];
var aLength=a.length;
var bLength=b.length;

for(i=0;i<=aLength;i++){
d[i]=[i];
}

for(j=1;j<=bLength;j++){
d[0][j]=j;
}

for(i=1;i<=aLength;i++){
for(j=1;j<=bLength;j++){
var cost=a[i-1]===b[j-1]?0:1;

d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+cost);

if(i>1&&j>1&&a[i-1]===b[j-2]&&a[i-2]===b[j-1]){
d[i][j]=Math.min(d[i][j],d[i-2][j-2]+cost);
}
}
}

return d[aLength][bLength];
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _codemirror=__webpack_require__(5);

var _codemirror2=_interopRequireDefault(_codemirror);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

_codemirror2.default.defineOption('info',false,function(cm,options,old){
if(old&&old!==_codemirror2.default.Init){
var oldOnMouseOver=cm.state.info.onMouseOver;
_codemirror2.default.off(cm.getWrapperElement(),'mouseover',oldOnMouseOver);
clearTimeout(cm.state.info.hoverTimeout);
delete cm.state.info;
}

if(options){
var state=cm.state.info=createState(options);
state.onMouseOver=onMouseOver.bind(null,cm);
_codemirror2.default.on(cm.getWrapperElement(),'mouseover',state.onMouseOver);
}
});








function createState(options){
return{
options:options instanceof Function?{render:options}:options===true?{}:options};

}

function getHoverTime(cm){
var options=cm.state.info.options;
return options&&options.hoverTime||500;
}

function onMouseOver(cm,e){
var state=cm.state.info;

var target=e.target||e.srcElement;
if(target.nodeName!=='SPAN'||state.hoverTimeout!==undefined){
return;
}

var box=target.getBoundingClientRect();

var hoverTime=getHoverTime(cm);
state.hoverTimeout=setTimeout(onHover,hoverTime);

var onMouseMove=function onMouseMove(){
clearTimeout(state.hoverTimeout);
state.hoverTimeout=setTimeout(onHover,hoverTime);
};

var onMouseOut=function onMouseOut(){
_codemirror2.default.off(document,'mousemove',onMouseMove);
_codemirror2.default.off(cm.getWrapperElement(),'mouseout',onMouseOut);
clearTimeout(state.hoverTimeout);
state.hoverTimeout=undefined;
};

var onHover=function onHover(){
_codemirror2.default.off(document,'mousemove',onMouseMove);
_codemirror2.default.off(cm.getWrapperElement(),'mouseout',onMouseOut);
state.hoverTimeout=undefined;
onMouseHover(cm,box);
};

_codemirror2.default.on(document,'mousemove',onMouseMove);
_codemirror2.default.on(cm.getWrapperElement(),'mouseout',onMouseOut);
}

function onMouseHover(cm,box){
var pos=cm.coordsChar({
left:(box.left+box.right)/2,
top:(box.top+box.bottom)/2});


var state=cm.state.info;
var options=state.options;
var render=options.render||cm.getHelper(pos,'info');
if(render){
var token=cm.getTokenAt(pos,true);
if(token){
var info=render(token,options,cm);
if(info){
showPopup(cm,box,info);
}
}
}
}

function showPopup(cm,box,info){
var popup=document.createElement('div');
popup.className='CodeMirror-info';
popup.appendChild(info);
document.body.appendChild(popup);

var popupBox=popup.getBoundingClientRect();
var popupStyle=popup.currentStyle||window.getComputedStyle(popup);
var popupWidth=popupBox.right-popupBox.left+parseFloat(popupStyle.marginLeft)+parseFloat(popupStyle.marginRight);
var popupHeight=popupBox.bottom-popupBox.top+parseFloat(popupStyle.marginTop)+parseFloat(popupStyle.marginBottom);

var topPos=box.bottom;
if(popupHeight>window.innerHeight-box.bottom-15&&box.top>window.innerHeight-box.bottom){
topPos=box.top-popupHeight;
}

if(topPos<0){
topPos=box.bottom;
}

var leftPos=Math.max(0,window.innerWidth-popupWidth-15);
if(leftPos>box.left){
leftPos=box.left;
}

popup.style.opacity=1;
popup.style.top=topPos+'px';
popup.style.left=leftPos+'px';

var popupTimeout=void 0;

var onMouseOverPopup=function onMouseOverPopup(){
clearTimeout(popupTimeout);
};

var onMouseOut=function onMouseOut(){
clearTimeout(popupTimeout);
popupTimeout=setTimeout(hidePopup,200);
};

var hidePopup=function hidePopup(){
_codemirror2.default.off(popup,'mouseover',onMouseOverPopup);
_codemirror2.default.off(popup,'mouseout',onMouseOut);
_codemirror2.default.off(cm.getWrapperElement(),'mouseout',onMouseOut);

if(popup.style.opacity){
popup.style.opacity=0;
setTimeout(function(){
if(popup.parentNode){
popup.parentNode.removeChild(popup);
}
},600);
}else if(popup.parentNode){
popup.parentNode.removeChild(popup);
}
};

_codemirror2.default.on(popup,'mouseover',onMouseOverPopup);
_codemirror2.default.on(popup,'mouseout',onMouseOut);
_codemirror2.default.on(cm.getWrapperElement(),'mouseout',onMouseOut);
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _codemirror=__webpack_require__(5);

var _codemirror2=_interopRequireDefault(_codemirror);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

_codemirror2.default.defineOption('jump',false,function(cm,options,old){
if(old&&old!==_codemirror2.default.Init){
var oldOnMouseOver=cm.state.jump.onMouseOver;
_codemirror2.default.off(cm.getWrapperElement(),'mouseover',oldOnMouseOver);
var oldOnMouseOut=cm.state.jump.onMouseOut;
_codemirror2.default.off(cm.getWrapperElement(),'mouseout',oldOnMouseOut);
_codemirror2.default.off(document,'keydown',cm.state.jump.onKeyDown);
delete cm.state.jump;
}

if(options){
var state=cm.state.jump={
options:options,
onMouseOver:onMouseOver.bind(null,cm),
onMouseOut:onMouseOut.bind(null,cm),
onKeyDown:onKeyDown.bind(null,cm)};


_codemirror2.default.on(cm.getWrapperElement(),'mouseover',state.onMouseOver);
_codemirror2.default.on(cm.getWrapperElement(),'mouseout',state.onMouseOut);
_codemirror2.default.on(document,'keydown',state.onKeyDown);
}
});








function onMouseOver(cm,event){
var target=event.target||event.srcElement;
if(target.nodeName!=='SPAN'){
return;
}

var box=target.getBoundingClientRect();
var cursor={
left:(box.left+box.right)/2,
top:(box.top+box.bottom)/2};


cm.state.jump.cursor=cursor;

if(cm.state.jump.isHoldingModifier){
enableJumpMode(cm);
}
}

function onMouseOut(cm){
if(!cm.state.jump.isHoldingModifier&&cm.state.jump.cursor){
cm.state.jump.cursor=null;
return;
}

if(cm.state.jump.isHoldingModifier&&cm.state.jump.marker){
disableJumpMode(cm);
}
}

function onKeyDown(cm,event){
if(cm.state.jump.isHoldingModifier||!isJumpModifier(event.key)){
return;
}

cm.state.jump.isHoldingModifier=true;

if(cm.state.jump.cursor){
enableJumpMode(cm);
}

var onKeyUp=function onKeyUp(upEvent){
if(upEvent.code!==event.code){
return;
}

cm.state.jump.isHoldingModifier=false;

if(cm.state.jump.marker){
disableJumpMode(cm);
}

_codemirror2.default.off(document,'keyup',onKeyUp);
_codemirror2.default.off(document,'click',onClick);
cm.off('mousedown',onMouseDown);
};

var onClick=function onClick(clickEvent){
var destination=cm.state.jump.destination;
if(destination){
cm.state.jump.options.onClick(destination,clickEvent);
}
};

var onMouseDown=function onMouseDown(_,downEvent){
if(cm.state.jump.destination){
downEvent.codemirrorIgnore=true;
}
};

_codemirror2.default.on(document,'keyup',onKeyUp);
_codemirror2.default.on(document,'click',onClick);
cm.on('mousedown',onMouseDown);
}

var isMac=navigator&&navigator.appVersion.indexOf('Mac')!==-1;

function isJumpModifier(key){
return key===(isMac?'Meta':'Control');
}

function enableJumpMode(cm){
if(cm.state.jump.marker){
return;
}

var cursor=cm.state.jump.cursor;
var pos=cm.coordsChar(cursor);
var token=cm.getTokenAt(pos,true);

var options=cm.state.jump.options;
var getDestination=options.getDestination||cm.getHelper(pos,'jump');
if(getDestination){
var destination=getDestination(token,options,cm);
if(destination){
var marker=cm.markText({line:pos.line,ch:token.start},{line:pos.line,ch:token.end},{className:'CodeMirror-jump-token'});

cm.state.jump.marker=marker;
cm.state.jump.destination=destination;
}
}
}

function disableJumpMode(cm){
var marker=cm.state.jump.marker;
cm.state.jump.marker=null;
cm.state.jump.destination=null;

marker.clear();
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.default=objectValues;









function objectValues(object){
var keys=Object.keys(object);
var len=keys.length;
var values=new Array(len);
for(var i=0;i<len;++i){
values[i]=object[keys[i]];
}
return values;
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.default=runParser;

var _CharacterStream=__webpack_require__(102);

var _CharacterStream2=_interopRequireDefault(_CharacterStream);

var _onlineParser=__webpack_require__(65);

var _onlineParser2=_interopRequireDefault(_onlineParser);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}










function runParser(sourceText,parserOptions,callbackFn){
var parser=(0,_onlineParser2.default)(parserOptions);
var state=parser.startState();
var lines=sourceText.split('\n');

lines.forEach(function(line){
var stream=new _CharacterStream2.default(line);
while(!stream.eol()){
var style=parser.token(stream,state);
callbackFn(stream,state,style);
}
});
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {




(function(mod){
if(true)
mod(__webpack_require__(5));else
if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else

mod(CodeMirror);
})(function(CodeMirror){
"use strict";

var noOptions={};
var nonWS=/[^\s\u00a0]/;
var Pos=CodeMirror.Pos;

function firstNonWS(str){
var found=str.search(nonWS);
return found==-1?0:found;
}

CodeMirror.commands.toggleComment=function(cm){
cm.toggleComment();
};

CodeMirror.defineExtension("toggleComment",function(options){
if(!options)options=noOptions;
var cm=this;
var minLine=Infinity,ranges=this.listSelections(),mode=null;
for(var i=ranges.length-1;i>=0;i--){
var from=ranges[i].from(),to=ranges[i].to();
if(from.line>=minLine)continue;
if(to.line>=minLine)to=Pos(minLine,0);
minLine=from.line;
if(mode==null){
if(cm.uncomment(from,to,options))mode="un";else
{cm.lineComment(from,to,options);mode="line";}
}else if(mode=="un"){
cm.uncomment(from,to,options);
}else{
cm.lineComment(from,to,options);
}
}
});


function probablyInsideString(cm,pos,line){
return /\bstring\b/.test(cm.getTokenTypeAt(Pos(pos.line,0)))&&!/^[\'\"`]/.test(line);
}

CodeMirror.defineExtension("lineComment",function(from,to,options){
if(!options)options=noOptions;
var self=this,mode=self.getModeAt(from);
var firstLine=self.getLine(from.line);
if(firstLine==null||probablyInsideString(self,from,firstLine))return;

var commentString=options.lineComment||mode.lineComment;
if(!commentString){
if(options.blockCommentStart||mode.blockCommentStart){
options.fullLines=true;
self.blockComment(from,to,options);
}
return;
}

var end=Math.min(to.ch!=0||to.line==from.line?to.line+1:to.line,self.lastLine()+1);
var pad=options.padding==null?" ":options.padding;
var blankLines=options.commentBlankLines||from.line==to.line;

self.operation(function(){
if(options.indent){
var baseString=null;
for(var i=from.line;i<end;++i){
var line=self.getLine(i);
var whitespace=line.slice(0,firstNonWS(line));
if(baseString==null||baseString.length>whitespace.length){
baseString=whitespace;
}
}
for(var i=from.line;i<end;++i){
var line=self.getLine(i),cut=baseString.length;
if(!blankLines&&!nonWS.test(line))continue;
if(line.slice(0,cut)!=baseString)cut=firstNonWS(line);
self.replaceRange(baseString+commentString+pad,Pos(i,0),Pos(i,cut));
}
}else{
for(var i=from.line;i<end;++i){
if(blankLines||nonWS.test(self.getLine(i)))
self.replaceRange(commentString+pad,Pos(i,0));
}
}
});
});

CodeMirror.defineExtension("blockComment",function(from,to,options){
if(!options)options=noOptions;
var self=this,mode=self.getModeAt(from);
var startString=options.blockCommentStart||mode.blockCommentStart;
var endString=options.blockCommentEnd||mode.blockCommentEnd;
if(!startString||!endString){
if((options.lineComment||mode.lineComment)&&options.fullLines!=false)
self.lineComment(from,to,options);
return;
}
if(/\bcomment\b/.test(self.getTokenTypeAt(Pos(from.line,0))))return;

var end=Math.min(to.line,self.lastLine());
if(end!=from.line&&to.ch==0&&nonWS.test(self.getLine(end)))--end;

var pad=options.padding==null?" ":options.padding;
if(from.line>end)return;

self.operation(function(){
if(options.fullLines!=false){
var lastLineHasText=nonWS.test(self.getLine(end));
self.replaceRange(pad+endString,Pos(end));
self.replaceRange(startString+pad,Pos(from.line,0));
var lead=options.blockCommentLead||mode.blockCommentLead;
if(lead!=null)for(var i=from.line+1;i<=end;++i){
if(i!=end||lastLineHasText)
self.replaceRange(lead+pad,Pos(i,0));}
}else{
self.replaceRange(endString,to);
self.replaceRange(startString,from);
}
});
});

CodeMirror.defineExtension("uncomment",function(from,to,options){
if(!options)options=noOptions;
var self=this,mode=self.getModeAt(from);
var end=Math.min(to.ch!=0||to.line==from.line?to.line:to.line-1,self.lastLine()),start=Math.min(from.line,end);


var lineString=options.lineComment||mode.lineComment,lines=[];
var pad=options.padding==null?" ":options.padding,didSomething;
lineComment:{
if(!lineString)break lineComment;
for(var i=start;i<=end;++i){
var line=self.getLine(i);
var found=line.indexOf(lineString);
if(found>-1&&!/comment/.test(self.getTokenTypeAt(Pos(i,found+1))))found=-1;
if(found==-1&&nonWS.test(line))break lineComment;
if(found>-1&&nonWS.test(line.slice(0,found)))break lineComment;
lines.push(line);
}
self.operation(function(){
for(var i=start;i<=end;++i){
var line=lines[i-start];
var pos=line.indexOf(lineString),endPos=pos+lineString.length;
if(pos<0)continue;
if(line.slice(endPos,endPos+pad.length)==pad)endPos+=pad.length;
didSomething=true;
self.replaceRange("",Pos(i,pos),Pos(i,endPos));
}
});
if(didSomething)return true;
}


var startString=options.blockCommentStart||mode.blockCommentStart;
var endString=options.blockCommentEnd||mode.blockCommentEnd;
if(!startString||!endString)return false;
var lead=options.blockCommentLead||mode.blockCommentLead;
var startLine=self.getLine(start),open=startLine.indexOf(startString);
if(open==-1)return false;
var endLine=end==start?startLine:self.getLine(end);
var close=endLine.indexOf(endString,end==start?open+startString.length:0);
if(close==-1&&start!=end){
endLine=self.getLine(--end);
close=endLine.indexOf(endString);
}
if(close==-1||
!/comment/.test(self.getTokenTypeAt(Pos(start,open+1)))||
!/comment/.test(self.getTokenTypeAt(Pos(end,close+1))))
return false;



var lastStart=startLine.lastIndexOf(startString,from.ch);
var firstEnd=lastStart==-1?-1:startLine.slice(0,from.ch).indexOf(endString,lastStart+startString.length);
if(lastStart!=-1&&firstEnd!=-1&&firstEnd+endString.length!=from.ch)return false;

firstEnd=endLine.indexOf(endString,to.ch);
var almostLastStart=endLine.slice(to.ch).lastIndexOf(startString,firstEnd-to.ch);
lastStart=firstEnd==-1||almostLastStart==-1?-1:to.ch+almostLastStart;
if(firstEnd!=-1&&lastStart!=-1&&lastStart!=to.ch)return false;

self.operation(function(){
self.replaceRange("",Pos(end,close-(pad&&endLine.slice(close-pad.length,close)==pad?pad.length:0)),
Pos(end,close+endString.length));
var openEnd=open+startString.length;
if(pad&&startLine.slice(openEnd,openEnd+pad.length)==pad)openEnd+=pad.length;
self.replaceRange("",Pos(start,open),Pos(start,openEnd));
if(lead)for(var i=start+1;i<=end;++i){
var line=self.getLine(i),found=line.indexOf(lead);
if(found==-1||nonWS.test(line.slice(0,found)))continue;
var foundEnd=found+lead.length;
if(pad&&line.slice(foundEnd,foundEnd+pad.length)==pad)foundEnd+=pad.length;
self.replaceRange("",Pos(i,found),Pos(i,foundEnd));
}
});
return true;
});
});

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {




(function(mod){
if(true)
mod(__webpack_require__(5));else
if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else

mod(CodeMirror);
})(function(CodeMirror){
var defaults={
pairs:"()[]{}''\"\"",
triples:"",
explode:"[]{}"};


var Pos=CodeMirror.Pos;

CodeMirror.defineOption("autoCloseBrackets",false,function(cm,val,old){
if(old&&old!=CodeMirror.Init){
cm.removeKeyMap(keyMap);
cm.state.closeBrackets=null;
}
if(val){
cm.state.closeBrackets=val;
cm.addKeyMap(keyMap);
}
});

function getOption(conf,name){
if(name=="pairs"&&typeof conf=="string")return conf;
if(typeof conf=="object"&&conf[name]!=null)return conf[name];
return defaults[name];
}

var bind=defaults.pairs+"`";
var keyMap={Backspace:handleBackspace,Enter:handleEnter};
for(var i=0;i<bind.length;i++){
keyMap["'"+bind.charAt(i)+"'"]=handler(bind.charAt(i));}

function handler(ch){
return function(cm){return handleChar(cm,ch);};
}

function getConfig(cm){
var deflt=cm.state.closeBrackets;
if(!deflt||deflt.override)return deflt;
var mode=cm.getModeAt(cm.getCursor());
return mode.closeBrackets||deflt;
}

function handleBackspace(cm){
var conf=getConfig(cm);
if(!conf||cm.getOption("disableInput"))return CodeMirror.Pass;

var pairs=getOption(conf,"pairs");
var ranges=cm.listSelections();
for(var i=0;i<ranges.length;i++){
if(!ranges[i].empty())return CodeMirror.Pass;
var around=charsAround(cm,ranges[i].head);
if(!around||pairs.indexOf(around)%2!=0)return CodeMirror.Pass;
}
for(var i=ranges.length-1;i>=0;i--){
var cur=ranges[i].head;
cm.replaceRange("",Pos(cur.line,cur.ch-1),Pos(cur.line,cur.ch+1),"+delete");
}
}

function handleEnter(cm){
var conf=getConfig(cm);
var explode=conf&&getOption(conf,"explode");
if(!explode||cm.getOption("disableInput"))return CodeMirror.Pass;

var ranges=cm.listSelections();
for(var i=0;i<ranges.length;i++){
if(!ranges[i].empty())return CodeMirror.Pass;
var around=charsAround(cm,ranges[i].head);
if(!around||explode.indexOf(around)%2!=0)return CodeMirror.Pass;
}
cm.operation(function(){
cm.replaceSelection("\n\n",null);
cm.execCommand("goCharLeft");
ranges=cm.listSelections();
for(var i=0;i<ranges.length;i++){
var line=ranges[i].head.line;
cm.indentLine(line,null,true);
cm.indentLine(line+1,null,true);
}
});
}

function contractSelection(sel){
var inverted=CodeMirror.cmpPos(sel.anchor,sel.head)>0;
return{anchor:new Pos(sel.anchor.line,sel.anchor.ch+(inverted?-1:1)),
head:new Pos(sel.head.line,sel.head.ch+(inverted?1:-1))};
}

function handleChar(cm,ch){
var conf=getConfig(cm);
if(!conf||cm.getOption("disableInput"))return CodeMirror.Pass;

var pairs=getOption(conf,"pairs");
var pos=pairs.indexOf(ch);
if(pos==-1)return CodeMirror.Pass;
var triples=getOption(conf,"triples");

var identical=pairs.charAt(pos+1)==ch;
var ranges=cm.listSelections();
var opening=pos%2==0;

var type;
for(var i=0;i<ranges.length;i++){
var range=ranges[i],cur=range.head,curType;
var next=cm.getRange(cur,Pos(cur.line,cur.ch+1));
if(opening&&!range.empty()){
curType="surround";
}else if((identical||!opening)&&next==ch){
if(identical&&stringStartsAfter(cm,cur))
curType="both";else
if(triples.indexOf(ch)>=0&&cm.getRange(cur,Pos(cur.line,cur.ch+3))==ch+ch+ch)
curType="skipThree";else

curType="skip";
}else if(identical&&cur.ch>1&&triples.indexOf(ch)>=0&&
cm.getRange(Pos(cur.line,cur.ch-2),cur)==ch+ch&&(
cur.ch<=2||cm.getRange(Pos(cur.line,cur.ch-3),Pos(cur.line,cur.ch-2))!=ch)){
curType="addFour";
}else if(identical){
if(!CodeMirror.isWordChar(next)&&enteringString(cm,cur,ch))curType="both";else
return CodeMirror.Pass;
}else if(opening&&(cm.getLine(cur.line).length==cur.ch||
isClosingBracket(next,pairs)||
/\s/.test(next))){
curType="both";
}else{
return CodeMirror.Pass;
}
if(!type)type=curType;else
if(type!=curType)return CodeMirror.Pass;
}

var left=pos%2?pairs.charAt(pos-1):ch;
var right=pos%2?ch:pairs.charAt(pos+1);
cm.operation(function(){
if(type=="skip"){
cm.execCommand("goCharRight");
}else if(type=="skipThree"){
for(var i=0;i<3;i++){
cm.execCommand("goCharRight");}
}else if(type=="surround"){
var sels=cm.getSelections();
for(var i=0;i<sels.length;i++){
sels[i]=left+sels[i]+right;}
cm.replaceSelections(sels,"around");
sels=cm.listSelections().slice();
for(var i=0;i<sels.length;i++){
sels[i]=contractSelection(sels[i]);}
cm.setSelections(sels);
}else if(type=="both"){
cm.replaceSelection(left+right,null);
cm.triggerElectric(left+right);
cm.execCommand("goCharLeft");
}else if(type=="addFour"){
cm.replaceSelection(left+left+left+left,"before");
cm.execCommand("goCharRight");
}
});
}

function isClosingBracket(ch,pairs){
var pos=pairs.lastIndexOf(ch);
return pos>-1&&pos%2==1;
}

function charsAround(cm,pos){
var str=cm.getRange(Pos(pos.line,pos.ch-1),
Pos(pos.line,pos.ch+1));
return str.length==2?str:null;
}




function enteringString(cm,pos,ch){
var line=cm.getLine(pos.line);
var token=cm.getTokenAt(pos);
if(/\bstring2?\b/.test(token.type))return false;
var stream=new CodeMirror.StringStream(line.slice(0,pos.ch)+ch+line.slice(pos.ch),4);
stream.pos=stream.start=token.start;
for(;;){
var type1=cm.getMode().token(stream,token.state);
if(stream.pos>=pos.ch+1)return /\bstring2?\b/.test(type1);
stream.start=stream.pos;
}
}

function stringStartsAfter(cm,pos){
var token=cm.getTokenAt(Pos(pos.line,pos.ch+1));
return /\bstring/.test(token.type)&&token.start==pos.ch;
}
});

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {




(function(mod){
if(true)
mod(__webpack_require__(5));else
if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else

mod(CodeMirror);
})(function(CodeMirror){
"use strict";

CodeMirror.registerHelper("fold","brace",function(cm,start){
var line=start.line,lineText=cm.getLine(line);
var tokenType;

function findOpening(openCh){
for(var at=start.ch,pass=0;;){
var found=at<=0?-1:lineText.lastIndexOf(openCh,at-1);
if(found==-1){
if(pass==1)break;
pass=1;
at=lineText.length;
continue;
}
if(pass==1&&found<start.ch)break;
tokenType=cm.getTokenTypeAt(CodeMirror.Pos(line,found+1));
if(!/^(comment|string)/.test(tokenType))return found+1;
at=found-1;
}
}

var startToken="{",endToken="}",startCh=findOpening("{");
if(startCh==null){
startToken="[",endToken="]";
startCh=findOpening("[");
}

if(startCh==null)return;
var count=1,lastLine=cm.lastLine(),end,endCh;
outer:for(var i=line;i<=lastLine;++i){
var text=cm.getLine(i),pos=i==line?startCh:0;
for(;;){
var nextOpen=text.indexOf(startToken,pos),nextClose=text.indexOf(endToken,pos);
if(nextOpen<0)nextOpen=text.length;
if(nextClose<0)nextClose=text.length;
pos=Math.min(nextOpen,nextClose);
if(pos==text.length)break;
if(cm.getTokenTypeAt(CodeMirror.Pos(i,pos+1))==tokenType){
if(pos==nextOpen)++count;else
if(! --count){end=i;endCh=pos;break outer;}
}
++pos;
}
}
if(end==null||line==end&&endCh==startCh)return;
return{from:CodeMirror.Pos(line,startCh),
to:CodeMirror.Pos(end,endCh)};
});

CodeMirror.registerHelper("fold","import",function(cm,start){
function hasImport(line){
if(line<cm.firstLine()||line>cm.lastLine())return null;
var start=cm.getTokenAt(CodeMirror.Pos(line,1));
if(!/\S/.test(start.string))start=cm.getTokenAt(CodeMirror.Pos(line,start.end+1));
if(start.type!="keyword"||start.string!="import")return null;

for(var i=line,e=Math.min(cm.lastLine(),line+10);i<=e;++i){
var text=cm.getLine(i),semi=text.indexOf(";");
if(semi!=-1)return{startCh:start.end,end:CodeMirror.Pos(i,semi)};
}
}

var startLine=start.line,has=hasImport(startLine),prev;
if(!has||hasImport(startLine-1)||(prev=hasImport(startLine-2))&&prev.end.line==startLine-1)
return null;
for(var end=has.end;;){
var next=hasImport(end.line+1);
if(next==null)break;
end=next.end;
}
return{from:cm.clipPos(CodeMirror.Pos(startLine,has.startCh+1)),to:end};
});

CodeMirror.registerHelper("fold","include",function(cm,start){
function hasInclude(line){
if(line<cm.firstLine()||line>cm.lastLine())return null;
var start=cm.getTokenAt(CodeMirror.Pos(line,1));
if(!/\S/.test(start.string))start=cm.getTokenAt(CodeMirror.Pos(line,start.end+1));
if(start.type=="meta"&&start.string.slice(0,8)=="#include")return start.start+8;
}

var startLine=start.line,has=hasInclude(startLine);
if(has==null||hasInclude(startLine-1)!=null)return null;
for(var end=startLine;;){
var next=hasInclude(end+1);
if(next==null)break;
++end;
}
return{from:CodeMirror.Pos(startLine,has+1),
to:cm.clipPos(CodeMirror.Pos(end))};
});

});

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {




(function(mod){
if(true)
mod(__webpack_require__(5));else
if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else

mod(CodeMirror);
})(function(CodeMirror){
"use strict";

function doFold(cm,pos,options,force){
if(options&&options.call){
var finder=options;
options=null;
}else{
var finder=getOption(cm,options,"rangeFinder");
}
if(typeof pos=="number")pos=CodeMirror.Pos(pos,0);
var minSize=getOption(cm,options,"minFoldSize");

function getRange(allowFolded){
var range=finder(cm,pos);
if(!range||range.to.line-range.from.line<minSize)return null;
var marks=cm.findMarksAt(range.from);
for(var i=0;i<marks.length;++i){
if(marks[i].__isFold&&force!=="fold"){
if(!allowFolded)return null;
range.cleared=true;
marks[i].clear();
}
}
return range;
}

var range=getRange(true);
if(getOption(cm,options,"scanUp"))while(!range&&pos.line>cm.firstLine()){
pos=CodeMirror.Pos(pos.line-1,0);
range=getRange(false);
}
if(!range||range.cleared||force==="unfold")return;

var myWidget=makeWidget(cm,options);
CodeMirror.on(myWidget,"mousedown",function(e){
myRange.clear();
CodeMirror.e_preventDefault(e);
});
var myRange=cm.markText(range.from,range.to,{
replacedWith:myWidget,
clearOnEnter:getOption(cm,options,"clearOnEnter"),
__isFold:true});

myRange.on("clear",function(from,to){
CodeMirror.signal(cm,"unfold",cm,from,to);
});
CodeMirror.signal(cm,"fold",cm,range.from,range.to);
}

function makeWidget(cm,options){
var widget=getOption(cm,options,"widget");
if(typeof widget=="string"){
var text=document.createTextNode(widget);
widget=document.createElement("span");
widget.appendChild(text);
widget.className="CodeMirror-foldmarker";
}
return widget;
}


CodeMirror.newFoldFunction=function(rangeFinder,widget){
return function(cm,pos){doFold(cm,pos,{rangeFinder:rangeFinder,widget:widget});};
};


CodeMirror.defineExtension("foldCode",function(pos,options,force){
doFold(this,pos,options,force);
});

CodeMirror.defineExtension("isFolded",function(pos){
var marks=this.findMarksAt(pos);
for(var i=0;i<marks.length;++i){
if(marks[i].__isFold)return true;}
});

CodeMirror.commands.toggleFold=function(cm){
cm.foldCode(cm.getCursor());
};
CodeMirror.commands.fold=function(cm){
cm.foldCode(cm.getCursor(),null,"fold");
};
CodeMirror.commands.unfold=function(cm){
cm.foldCode(cm.getCursor(),null,"unfold");
};
CodeMirror.commands.foldAll=function(cm){
cm.operation(function(){
for(var i=cm.firstLine(),e=cm.lastLine();i<=e;i++){
cm.foldCode(CodeMirror.Pos(i,0),null,"fold");}
});
};
CodeMirror.commands.unfoldAll=function(cm){
cm.operation(function(){
for(var i=cm.firstLine(),e=cm.lastLine();i<=e;i++){
cm.foldCode(CodeMirror.Pos(i,0),null,"unfold");}
});
};

CodeMirror.registerHelper("fold","combine",function(){
var funcs=Array.prototype.slice.call(arguments,0);
return function(cm,start){
for(var i=0;i<funcs.length;++i){
var found=funcs[i](cm,start);
if(found)return found;
}
};
});

CodeMirror.registerHelper("fold","auto",function(cm,start){
var helpers=cm.getHelpers(start,"fold");
for(var i=0;i<helpers.length;i++){
var cur=helpers[i](cm,start);
if(cur)return cur;
}
});

var defaultOptions={
rangeFinder:CodeMirror.fold.auto,
widget:"\u2194",
minFoldSize:0,
scanUp:false,
clearOnEnter:true};


CodeMirror.defineOption("foldOptions",null);

function getOption(cm,options,name){
if(options&&options[name]!==undefined)
return options[name];
var editorOptions=cm.options.foldOptions;
if(editorOptions&&editorOptions[name]!==undefined)
return editorOptions[name];
return defaultOptions[name];
}

CodeMirror.defineExtension("foldOption",function(options,name){
return getOption(this,options,name);
});
});

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {




(function(mod){
if(true)
mod(__webpack_require__(5),__webpack_require__(113));else
if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror","./foldcode"],mod);else

mod(CodeMirror);
})(function(CodeMirror){
"use strict";

CodeMirror.defineOption("foldGutter",false,function(cm,val,old){
if(old&&old!=CodeMirror.Init){
cm.clearGutter(cm.state.foldGutter.options.gutter);
cm.state.foldGutter=null;
cm.off("gutterClick",onGutterClick);
cm.off("change",onChange);
cm.off("viewportChange",onViewportChange);
cm.off("fold",onFold);
cm.off("unfold",onFold);
cm.off("swapDoc",onChange);
}
if(val){
cm.state.foldGutter=new State(parseOptions(val));
updateInViewport(cm);
cm.on("gutterClick",onGutterClick);
cm.on("change",onChange);
cm.on("viewportChange",onViewportChange);
cm.on("fold",onFold);
cm.on("unfold",onFold);
cm.on("swapDoc",onChange);
}
});

var Pos=CodeMirror.Pos;

function State(options){
this.options=options;
this.from=this.to=0;
}

function parseOptions(opts){
if(opts===true)opts={};
if(opts.gutter==null)opts.gutter="CodeMirror-foldgutter";
if(opts.indicatorOpen==null)opts.indicatorOpen="CodeMirror-foldgutter-open";
if(opts.indicatorFolded==null)opts.indicatorFolded="CodeMirror-foldgutter-folded";
return opts;
}

function isFolded(cm,line){
var marks=cm.findMarks(Pos(line,0),Pos(line+1,0));
for(var i=0;i<marks.length;++i){
if(marks[i].__isFold&&marks[i].find().from.line==line)return marks[i];}
}

function marker(spec){
if(typeof spec=="string"){
var elt=document.createElement("div");
elt.className=spec+" CodeMirror-guttermarker-subtle";
return elt;
}else{
return spec.cloneNode(true);
}
}

function updateFoldInfo(cm,from,to){
var opts=cm.state.foldGutter.options,cur=from;
var minSize=cm.foldOption(opts,"minFoldSize");
var func=cm.foldOption(opts,"rangeFinder");
cm.eachLine(from,to,function(line){
var mark=null;
if(isFolded(cm,cur)){
mark=marker(opts.indicatorFolded);
}else{
var pos=Pos(cur,0);
var range=func&&func(cm,pos);
if(range&&range.to.line-range.from.line>=minSize)
mark=marker(opts.indicatorOpen);
}
cm.setGutterMarker(line,opts.gutter,mark);
++cur;
});
}

function updateInViewport(cm){
var vp=cm.getViewport(),state=cm.state.foldGutter;
if(!state)return;
cm.operation(function(){
updateFoldInfo(cm,vp.from,vp.to);
});
state.from=vp.from;state.to=vp.to;
}

function onGutterClick(cm,line,gutter){
var state=cm.state.foldGutter;
if(!state)return;
var opts=state.options;
if(gutter!=opts.gutter)return;
var folded=isFolded(cm,line);
if(folded)folded.clear();else
cm.foldCode(Pos(line,0),opts.rangeFinder);
}

function onChange(cm){
var state=cm.state.foldGutter;
if(!state)return;
var opts=state.options;
state.from=state.to=0;
clearTimeout(state.changeUpdate);
state.changeUpdate=setTimeout(function(){updateInViewport(cm);},opts.foldOnChangeTimeSpan||600);
}

function onViewportChange(cm){
var state=cm.state.foldGutter;
if(!state)return;
var opts=state.options;
clearTimeout(state.changeUpdate);
state.changeUpdate=setTimeout(function(){
var vp=cm.getViewport();
if(state.from==state.to||vp.from-state.to>20||state.from-vp.to>20){
updateInViewport(cm);
}else{
cm.operation(function(){
if(vp.from<state.from){
updateFoldInfo(cm,vp.from,state.from);
state.from=vp.from;
}
if(vp.to>state.to){
updateFoldInfo(cm,state.to,vp.to);
state.to=vp.to;
}
});
}
},opts.updateViewportTimeSpan||400);
}

function onFold(cm,from){
var state=cm.state.foldGutter;
if(!state)return;
var line=from.line;
if(line>=state.from&&line<state.to)
updateFoldInfo(cm,line,line+1);
}
});

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {




(function(mod){
if(true)
mod(__webpack_require__(5));else
if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else

mod(CodeMirror);
})(function(CodeMirror){
"use strict";

var HINT_ELEMENT_CLASS="CodeMirror-hint";
var ACTIVE_HINT_ELEMENT_CLASS="CodeMirror-hint-active";



CodeMirror.showHint=function(cm,getHints,options){
if(!getHints)return cm.showHint(options);
if(options&&options.async)getHints.async=true;
var newOpts={hint:getHints};
if(options)for(var prop in options){newOpts[prop]=options[prop];}
return cm.showHint(newOpts);
};

CodeMirror.defineExtension("showHint",function(options){
options=parseOptions(this,this.getCursor("start"),options);
var selections=this.listSelections();
if(selections.length>1)return;



if(this.somethingSelected()){
if(!options.hint.supportsSelection)return;

for(var i=0;i<selections.length;i++){
if(selections[i].head.line!=selections[i].anchor.line)return;}
}

if(this.state.completionActive)this.state.completionActive.close();
var completion=this.state.completionActive=new Completion(this,options);
if(!completion.options.hint)return;

CodeMirror.signal(this,"startCompletion",this);
completion.update(true);
});

function Completion(cm,options){
this.cm=cm;
this.options=options;
this.widget=null;
this.debounce=0;
this.tick=0;
this.startPos=this.cm.getCursor("start");
this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length;

var self=this;
cm.on("cursorActivity",this.activityFunc=function(){self.cursorActivity();});
}

var requestAnimationFrame=window.requestAnimationFrame||function(fn){
return setTimeout(fn,1000/60);
};
var cancelAnimationFrame=window.cancelAnimationFrame||clearTimeout;

Completion.prototype={
close:function close(){
if(!this.active())return;
this.cm.state.completionActive=null;
this.tick=null;
this.cm.off("cursorActivity",this.activityFunc);

if(this.widget&&this.data)CodeMirror.signal(this.data,"close");
if(this.widget)this.widget.close();
CodeMirror.signal(this.cm,"endCompletion",this.cm);
},

active:function active(){
return this.cm.state.completionActive==this;
},

pick:function pick(data,i){
var completion=data.list[i];
if(completion.hint)completion.hint(this.cm,data,completion);else
this.cm.replaceRange(getText(completion),completion.from||data.from,
completion.to||data.to,"complete");
CodeMirror.signal(data,"pick",completion);
this.close();
},

cursorActivity:function cursorActivity(){
if(this.debounce){
cancelAnimationFrame(this.debounce);
this.debounce=0;
}

var pos=this.cm.getCursor(),line=this.cm.getLine(pos.line);
if(pos.line!=this.startPos.line||line.length-pos.ch!=this.startLen-this.startPos.ch||
pos.ch<this.startPos.ch||this.cm.somethingSelected()||
pos.ch&&this.options.closeCharacters.test(line.charAt(pos.ch-1))){
this.close();
}else{
var self=this;
this.debounce=requestAnimationFrame(function(){self.update();});
if(this.widget)this.widget.disable();
}
},

update:function update(first){
if(this.tick==null)return;
var self=this,myTick=++this.tick;
fetchHints(this.options.hint,this.cm,this.options,function(data){
if(self.tick==myTick)self.finishUpdate(data,first);
});
},

finishUpdate:function finishUpdate(data,first){
if(this.data)CodeMirror.signal(this.data,"update");

var picked=this.widget&&this.widget.picked||first&&this.options.completeSingle;
if(this.widget)this.widget.close();

if(data&&this.data&&isNewCompletion(this.data,data))return;
this.data=data;

if(data&&data.list.length){
if(picked&&data.list.length==1){
this.pick(data,0);
}else{
this.widget=new Widget(this,data);
CodeMirror.signal(data,"shown");
}
}
}};


function isNewCompletion(old,nw){
var moved=CodeMirror.cmpPos(nw.from,old.from);
return moved>0&&old.to.ch-old.from.ch!=nw.to.ch-nw.from.ch;
}

function parseOptions(cm,pos,options){
var editor=cm.options.hintOptions;
var out={};
for(var prop in defaultOptions){out[prop]=defaultOptions[prop];}
if(editor)for(var prop in editor){
if(editor[prop]!==undefined)out[prop]=editor[prop];}
if(options)for(var prop in options){
if(options[prop]!==undefined)out[prop]=options[prop];}
if(out.hint.resolve)out.hint=out.hint.resolve(cm,pos);
return out;
}

function getText(completion){
if(typeof completion=="string")return completion;else
return completion.text;
}

function buildKeyMap(completion,handle){
var baseMap={
Up:function Up(){handle.moveFocus(-1);},
Down:function Down(){handle.moveFocus(1);},
PageUp:function PageUp(){handle.moveFocus(-handle.menuSize()+1,true);},
PageDown:function PageDown(){handle.moveFocus(handle.menuSize()-1,true);},
Home:function Home(){handle.setFocus(0);},
End:function End(){handle.setFocus(handle.length-1);},
Enter:handle.pick,
Tab:handle.pick,
Esc:handle.close};

var custom=completion.options.customKeys;
var ourMap=custom?{}:baseMap;
function addBinding(key,val){
var bound;
if(typeof val!="string")
bound=function bound(cm){return val(cm,handle);};else

if(baseMap.hasOwnProperty(val))
bound=baseMap[val];else

bound=val;
ourMap[key]=bound;
}
if(custom)
for(var key in custom){if(custom.hasOwnProperty(key))
addBinding(key,custom[key]);}
var extra=completion.options.extraKeys;
if(extra)
for(var key in extra){if(extra.hasOwnProperty(key))
addBinding(key,extra[key]);}
return ourMap;
}

function getHintElement(hintsElement,el){
while(el&&el!=hintsElement){
if(el.nodeName.toUpperCase()==="LI"&&el.parentNode==hintsElement)return el;
el=el.parentNode;
}
}

function Widget(completion,data){
this.completion=completion;
this.data=data;
this.picked=false;
var widget=this,cm=completion.cm;

var hints=this.hints=document.createElement("ul");
hints.className="CodeMirror-hints";
this.selectedHint=data.selectedHint||0;

var completions=data.list;
for(var i=0;i<completions.length;++i){
var elt=hints.appendChild(document.createElement("li")),cur=completions[i];
var className=HINT_ELEMENT_CLASS+(i!=this.selectedHint?"":" "+ACTIVE_HINT_ELEMENT_CLASS);
if(cur.className!=null)className=cur.className+" "+className;
elt.className=className;
if(cur.render)cur.render(elt,data,cur);else
elt.appendChild(document.createTextNode(cur.displayText||getText(cur)));
elt.hintId=i;
}

var pos=cm.cursorCoords(completion.options.alignWithWord?data.from:null);
var left=pos.left,top=pos.bottom,below=true;
hints.style.left=left+"px";
hints.style.top=top+"px";

var winW=window.innerWidth||Math.max(document.body.offsetWidth,document.documentElement.offsetWidth);
var winH=window.innerHeight||Math.max(document.body.offsetHeight,document.documentElement.offsetHeight);
(completion.options.container||document.body).appendChild(hints);
var box=hints.getBoundingClientRect(),overlapY=box.bottom-winH;
var scrolls=hints.scrollHeight>hints.clientHeight+1;
var startScroll=cm.getScrollInfo();

if(overlapY>0){
var height=box.bottom-box.top,curTop=pos.top-(pos.bottom-box.top);
if(curTop-height>0){
hints.style.top=(top=pos.top-height)+"px";
below=false;
}else if(height>winH){
hints.style.height=winH-5+"px";
hints.style.top=(top=pos.bottom-box.top)+"px";
var cursor=cm.getCursor();
if(data.from.ch!=cursor.ch){
pos=cm.cursorCoords(cursor);
hints.style.left=(left=pos.left)+"px";
box=hints.getBoundingClientRect();
}
}
}
var overlapX=box.right-winW;
if(overlapX>0){
if(box.right-box.left>winW){
hints.style.width=winW-5+"px";
overlapX-=box.right-box.left-winW;
}
hints.style.left=(left=pos.left-overlapX)+"px";
}
if(scrolls)for(var node=hints.firstChild;node;node=node.nextSibling){
node.style.paddingRight=cm.display.nativeBarWidth+"px";}

cm.addKeyMap(this.keyMap=buildKeyMap(completion,{
moveFocus:function moveFocus(n,avoidWrap){widget.changeActive(widget.selectedHint+n,avoidWrap);},
setFocus:function setFocus(n){widget.changeActive(n);},
menuSize:function menuSize(){return widget.screenAmount();},
length:completions.length,
close:function close(){completion.close();},
pick:function pick(){widget.pick();},
data:data}));


if(completion.options.closeOnUnfocus){
var closingOnBlur;
cm.on("blur",this.onBlur=function(){closingOnBlur=setTimeout(function(){completion.close();},100);});
cm.on("focus",this.onFocus=function(){clearTimeout(closingOnBlur);});
}

cm.on("scroll",this.onScroll=function(){
var curScroll=cm.getScrollInfo(),editor=cm.getWrapperElement().getBoundingClientRect();
var newTop=top+startScroll.top-curScroll.top;
var point=newTop-(window.pageYOffset||(document.documentElement||document.body).scrollTop);
if(!below)point+=hints.offsetHeight;
if(point<=editor.top||point>=editor.bottom)return completion.close();
hints.style.top=newTop+"px";
hints.style.left=left+startScroll.left-curScroll.left+"px";
});

CodeMirror.on(hints,"dblclick",function(e){
var t=getHintElement(hints,e.target||e.srcElement);
if(t&&t.hintId!=null){widget.changeActive(t.hintId);widget.pick();}
});

CodeMirror.on(hints,"click",function(e){
var t=getHintElement(hints,e.target||e.srcElement);
if(t&&t.hintId!=null){
widget.changeActive(t.hintId);
if(completion.options.completeOnSingleClick)widget.pick();
}
});

CodeMirror.on(hints,"mousedown",function(){
setTimeout(function(){cm.focus();},20);
});

CodeMirror.signal(data,"select",completions[0],hints.firstChild);
return true;
}

Widget.prototype={
close:function close(){
if(this.completion.widget!=this)return;
this.completion.widget=null;
this.hints.parentNode.removeChild(this.hints);
this.completion.cm.removeKeyMap(this.keyMap);

var cm=this.completion.cm;
if(this.completion.options.closeOnUnfocus){
cm.off("blur",this.onBlur);
cm.off("focus",this.onFocus);
}
cm.off("scroll",this.onScroll);
},

disable:function disable(){
this.completion.cm.removeKeyMap(this.keyMap);
var widget=this;
this.keyMap={Enter:function Enter(){widget.picked=true;}};
this.completion.cm.addKeyMap(this.keyMap);
},

pick:function pick(){
this.completion.pick(this.data,this.selectedHint);
},

changeActive:function changeActive(i,avoidWrap){
if(i>=this.data.list.length)
i=avoidWrap?this.data.list.length-1:0;else
if(i<0)
i=avoidWrap?0:this.data.list.length-1;
if(this.selectedHint==i)return;
var node=this.hints.childNodes[this.selectedHint];
node.className=node.className.replace(" "+ACTIVE_HINT_ELEMENT_CLASS,"");
node=this.hints.childNodes[this.selectedHint=i];
node.className+=" "+ACTIVE_HINT_ELEMENT_CLASS;
if(node.offsetTop<this.hints.scrollTop)
this.hints.scrollTop=node.offsetTop-3;else
if(node.offsetTop+node.offsetHeight>this.hints.scrollTop+this.hints.clientHeight)
this.hints.scrollTop=node.offsetTop+node.offsetHeight-this.hints.clientHeight+3;
CodeMirror.signal(this.data,"select",this.data.list[this.selectedHint],node);
},

screenAmount:function screenAmount(){
return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1;
}};


function applicableHelpers(cm,helpers){
if(!cm.somethingSelected())return helpers;
var result=[];
for(var i=0;i<helpers.length;i++){
if(helpers[i].supportsSelection)result.push(helpers[i]);}
return result;
}

function fetchHints(hint,cm,options,callback){
if(hint.async){
hint(cm,callback,options);
}else{
var result=hint(cm,options);
if(result&&result.then)result.then(callback);else
callback(result);
}
}

function resolveAutoHints(cm,pos){
var helpers=cm.getHelpers(pos,"hint"),words;
if(helpers.length){
var resolved=function resolved(cm,callback,options){
var app=applicableHelpers(cm,helpers);
function run(i){
if(i==app.length)return callback(null);
fetchHints(app[i],cm,options,function(result){
if(result&&result.list.length>0)callback(result);else
run(i+1);
});
}
run(0);
};
resolved.async=true;
resolved.supportsSelection=true;
return resolved;
}else if(words=cm.getHelper(cm.getCursor(),"hintWords")){
return function(cm){return CodeMirror.hint.fromList(cm,{words:words});};
}else if(CodeMirror.hint.anyword){
return function(cm,options){return CodeMirror.hint.anyword(cm,options);};
}else{
return function(){};
}
}

CodeMirror.registerHelper("hint","auto",{
resolve:resolveAutoHints});


CodeMirror.registerHelper("hint","fromList",function(cm,options){
var cur=cm.getCursor(),token=cm.getTokenAt(cur);
var to=CodeMirror.Pos(cur.line,token.end);
if(token.string&&/\w/.test(token.string[token.string.length-1])){
var term=token.string,from=CodeMirror.Pos(cur.line,token.start);
}else{
var term="",from=to;
}
var found=[];
for(var i=0;i<options.words.length;i++){
var word=options.words[i];
if(word.slice(0,term.length)==term)
found.push(word);
}

if(found.length)return{list:found,from:from,to:to};
});

CodeMirror.commands.autocomplete=CodeMirror.showHint;

var defaultOptions={
hint:CodeMirror.hint.auto,
completeSingle:true,
alignWithWord:true,
closeCharacters:/[\s()\[\]{};:>,]/,
closeOnUnfocus:true,
completeOnSingleClick:true,
container:null,
customKeys:null,
extraKeys:null};


CodeMirror.defineOption("hintOptions",null);
});

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {




(function(mod){
if(true)
mod(__webpack_require__(5));else
if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else

mod(CodeMirror);
})(function(CodeMirror){
"use strict";
var GUTTER_ID="CodeMirror-lint-markers";

function showTooltip(e,content){
var tt=document.createElement("div");
tt.className="CodeMirror-lint-tooltip";
tt.appendChild(content.cloneNode(true));
document.body.appendChild(tt);

function position(e){
if(!tt.parentNode)return CodeMirror.off(document,"mousemove",position);
tt.style.top=Math.max(0,e.clientY-tt.offsetHeight-5)+"px";
tt.style.left=e.clientX+5+"px";
}
CodeMirror.on(document,"mousemove",position);
position(e);
if(tt.style.opacity!=null)tt.style.opacity=1;
return tt;
}
function rm(elt){
if(elt.parentNode)elt.parentNode.removeChild(elt);
}
function hideTooltip(tt){
if(!tt.parentNode)return;
if(tt.style.opacity==null)rm(tt);
tt.style.opacity=0;
setTimeout(function(){rm(tt);},600);
}

function showTooltipFor(e,content,node){
var tooltip=showTooltip(e,content);
function hide(){
CodeMirror.off(node,"mouseout",hide);
if(tooltip){hideTooltip(tooltip);tooltip=null;}
}
var poll=setInterval(function(){
if(tooltip)for(var n=node;;n=n.parentNode){
if(n&&n.nodeType==11)n=n.host;
if(n==document.body)return;
if(!n){hide();break;}
}
if(!tooltip)return clearInterval(poll);
},400);
CodeMirror.on(node,"mouseout",hide);
}

function LintState(cm,options,hasGutter){
this.marked=[];
this.options=options;
this.timeout=null;
this.hasGutter=hasGutter;
this.onMouseOver=function(e){onMouseOver(cm,e);};
this.waitingFor=0;
}

function parseOptions(_cm,options){
if(options instanceof Function)return{getAnnotations:options};
if(!options||options===true)options={};
return options;
}

function clearMarks(cm){
var state=cm.state.lint;
if(state.hasGutter)cm.clearGutter(GUTTER_ID);
for(var i=0;i<state.marked.length;++i){
state.marked[i].clear();}
state.marked.length=0;
}

function makeMarker(labels,severity,multiple,tooltips){
var marker=document.createElement("div"),inner=marker;
marker.className="CodeMirror-lint-marker-"+severity;
if(multiple){
inner=marker.appendChild(document.createElement("div"));
inner.className="CodeMirror-lint-marker-multiple";
}

if(tooltips!=false)CodeMirror.on(inner,"mouseover",function(e){
showTooltipFor(e,labels,inner);
});

return marker;
}

function getMaxSeverity(a,b){
if(a=="error")return a;else
return b;
}

function groupByLine(annotations){
var lines=[];
for(var i=0;i<annotations.length;++i){
var ann=annotations[i],line=ann.from.line;
(lines[line]||(lines[line]=[])).push(ann);
}
return lines;
}

function annotationTooltip(ann){
var severity=ann.severity;
if(!severity)severity="error";
var tip=document.createElement("div");
tip.className="CodeMirror-lint-message-"+severity;
tip.appendChild(document.createTextNode(ann.message));
return tip;
}

function lintAsync(cm,getAnnotations,passOptions){
var state=cm.state.lint;
var id=++state.waitingFor;
function abort(){
id=-1;
cm.off("change",abort);
}
cm.on("change",abort);
getAnnotations(cm.getValue(),function(annotations,arg2){
cm.off("change",abort);
if(state.waitingFor!=id)return;
if(arg2&&annotations instanceof CodeMirror)annotations=arg2;
updateLinting(cm,annotations);
},passOptions,cm);
}

function startLinting(cm){
var state=cm.state.lint,options=state.options;
var passOptions=options.options||options;
var getAnnotations=options.getAnnotations||cm.getHelper(CodeMirror.Pos(0,0),"lint");
if(!getAnnotations)return;
if(options.async||getAnnotations.async){
lintAsync(cm,getAnnotations,passOptions);
}else{
updateLinting(cm,getAnnotations(cm.getValue(),passOptions,cm));
}
}

function updateLinting(cm,annotationsNotSorted){
clearMarks(cm);
var state=cm.state.lint,options=state.options;

var annotations=groupByLine(annotationsNotSorted);

for(var line=0;line<annotations.length;++line){
var anns=annotations[line];
if(!anns)continue;

var maxSeverity=null;
var tipLabel=state.hasGutter&&document.createDocumentFragment();

for(var i=0;i<anns.length;++i){
var ann=anns[i];
var severity=ann.severity;
if(!severity)severity="error";
maxSeverity=getMaxSeverity(maxSeverity,severity);

if(options.formatAnnotation)ann=options.formatAnnotation(ann);
if(state.hasGutter)tipLabel.appendChild(annotationTooltip(ann));

if(ann.to)state.marked.push(cm.markText(ann.from,ann.to,{
className:"CodeMirror-lint-mark-"+severity,
__annotation:ann}));

}

if(state.hasGutter)
cm.setGutterMarker(line,GUTTER_ID,makeMarker(tipLabel,maxSeverity,anns.length>1,
state.options.tooltips));
}
if(options.onUpdateLinting)options.onUpdateLinting(annotationsNotSorted,annotations,cm);
}

function onChange(cm){
var state=cm.state.lint;
if(!state)return;
clearTimeout(state.timeout);
state.timeout=setTimeout(function(){startLinting(cm);},state.options.delay||500);
}

function popupTooltips(annotations,e){
var target=e.target||e.srcElement;
var tooltip=document.createDocumentFragment();
for(var i=0;i<annotations.length;i++){
var ann=annotations[i];
tooltip.appendChild(annotationTooltip(ann));
}
showTooltipFor(e,tooltip,target);
}

function onMouseOver(cm,e){
var target=e.target||e.srcElement;
if(!/\bCodeMirror-lint-mark-/.test(target.className))return;
var box=target.getBoundingClientRect(),x=(box.left+box.right)/2,y=(box.top+box.bottom)/2;
var spans=cm.findMarksAt(cm.coordsChar({left:x,top:y},"client"));

var annotations=[];
for(var i=0;i<spans.length;++i){
var ann=spans[i].__annotation;
if(ann)annotations.push(ann);
}
if(annotations.length)popupTooltips(annotations,e);
}

CodeMirror.defineOption("lint",false,function(cm,val,old){
if(old&&old!=CodeMirror.Init){
clearMarks(cm);
if(cm.state.lint.options.lintOnChange!==false)
cm.off("change",onChange);
CodeMirror.off(cm.getWrapperElement(),"mouseover",cm.state.lint.onMouseOver);
clearTimeout(cm.state.lint.timeout);
delete cm.state.lint;
}

if(val){
var gutters=cm.getOption("gutters"),hasLintGutter=false;
for(var i=0;i<gutters.length;++i){if(gutters[i]==GUTTER_ID)hasLintGutter=true;}
var state=cm.state.lint=new LintState(cm,parseOptions(cm,val),hasLintGutter);
if(state.options.lintOnChange!==false)
cm.on("change",onChange);
if(state.options.tooltips!=false&&state.options.tooltips!="gutter")
CodeMirror.on(cm.getWrapperElement(),"mouseover",state.onMouseOver);

startLinting(cm);
}
});

CodeMirror.defineExtension("performLint",function(){
if(this.state.lint)startLinting(this);
});
});

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {




(function(mod){
if(true)
mod(__webpack_require__(5));else
if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else

mod(CodeMirror);
})(function(CodeMirror){
"use strict";
var Pos=CodeMirror.Pos;

function SearchCursor(doc,query,pos,caseFold){
this.atOccurrence=false;this.doc=doc;
if(caseFold==null&&typeof query=="string")caseFold=false;

pos=pos?doc.clipPos(pos):Pos(0,0);
this.pos={from:pos,to:pos};





if(typeof query!="string"){
if(!query.global)query=new RegExp(query.source,query.ignoreCase?"ig":"g");
this.matches=function(reverse,pos){
if(reverse){
query.lastIndex=0;
var line=doc.getLine(pos.line).slice(0,pos.ch),cutOff=0,match,start;
for(;;){
query.lastIndex=cutOff;
var newMatch=query.exec(line);
if(!newMatch)break;
match=newMatch;
start=match.index;
cutOff=match.index+(match[0].length||1);
if(cutOff==line.length)break;
}
var matchLen=match&&match[0].length||0;
if(!matchLen){
if(start==0&&line.length==0){match=undefined;}else
if(start!=doc.getLine(pos.line).length){
matchLen++;
}
}
}else{
query.lastIndex=pos.ch;
var line=doc.getLine(pos.line),match=query.exec(line);
var matchLen=match&&match[0].length||0;
var start=match&&match.index;
if(start+matchLen!=line.length&&!matchLen)matchLen=1;
}
if(match&&matchLen)
return{from:Pos(pos.line,start),
to:Pos(pos.line,start+matchLen),
match:match};
};
}else{
var origQuery=query;
if(caseFold)query=query.toLowerCase();
var fold=caseFold?function(str){return str.toLowerCase();}:function(str){return str;};
var target=query.split("\n");

if(target.length==1){
if(!query.length){


this.matches=function(){};
}else{
this.matches=function(reverse,pos){
if(reverse){
var orig=doc.getLine(pos.line).slice(0,pos.ch),line=fold(orig);
var match=line.lastIndexOf(query);
if(match>-1){
match=adjustPos(orig,line,match);
return{from:Pos(pos.line,match),to:Pos(pos.line,match+origQuery.length)};
}
}else{
var orig=doc.getLine(pos.line).slice(pos.ch),line=fold(orig);
var match=line.indexOf(query);
if(match>-1){
match=adjustPos(orig,line,match)+pos.ch;
return{from:Pos(pos.line,match),to:Pos(pos.line,match+origQuery.length)};
}
}
};
}
}else{
var origTarget=origQuery.split("\n");
this.matches=function(reverse,pos){
var last=target.length-1;
if(reverse){
if(pos.line-(target.length-1)<doc.firstLine())return;
if(fold(doc.getLine(pos.line).slice(0,origTarget[last].length))!=target[target.length-1])return;
var to=Pos(pos.line,origTarget[last].length);
for(var ln=pos.line-1,i=last-1;i>=1;--i,--ln){
if(target[i]!=fold(doc.getLine(ln)))return;}
var line=doc.getLine(ln),cut=line.length-origTarget[0].length;
if(fold(line.slice(cut))!=target[0])return;
return{from:Pos(ln,cut),to:to};
}else{
if(pos.line+(target.length-1)>doc.lastLine())return;
var line=doc.getLine(pos.line),cut=line.length-origTarget[0].length;
if(fold(line.slice(cut))!=target[0])return;
var from=Pos(pos.line,cut);
for(var ln=pos.line+1,i=1;i<last;++i,++ln){
if(target[i]!=fold(doc.getLine(ln)))return;}
if(fold(doc.getLine(ln).slice(0,origTarget[last].length))!=target[last])return;
return{from:from,to:Pos(ln,origTarget[last].length)};
}
};
}
}
}

SearchCursor.prototype={
findNext:function findNext(){return this.find(false);},
findPrevious:function findPrevious(){return this.find(true);},

find:function find(reverse){
var self=this,pos=this.doc.clipPos(reverse?this.pos.from:this.pos.to);
function savePosAndFail(line){
var pos=Pos(line,0);
self.pos={from:pos,to:pos};
self.atOccurrence=false;
return false;
}

for(;;){
if(this.pos=this.matches(reverse,pos)){
this.atOccurrence=true;
return this.pos.match||true;
}
if(reverse){
if(!pos.line)return savePosAndFail(0);
pos=Pos(pos.line-1,this.doc.getLine(pos.line-1).length);
}else
{
var maxLine=this.doc.lineCount();
if(pos.line==maxLine-1)return savePosAndFail(maxLine);
pos=Pos(pos.line+1,0);
}
}
},

from:function from(){if(this.atOccurrence)return this.pos.from;},
to:function to(){if(this.atOccurrence)return this.pos.to;},

replace:function replace(newText,origin){
if(!this.atOccurrence)return;
var lines=CodeMirror.splitLines(newText);
this.doc.replaceRange(lines,this.pos.from,this.pos.to,origin);
this.pos.to=Pos(this.pos.from.line+lines.length-1,
lines[lines.length-1].length+(lines.length==1?this.pos.from.ch:0));
}};




function adjustPos(orig,folded,pos){
if(orig.length==folded.length)return pos;
for(var pos1=Math.min(pos,orig.length);;){
var len1=orig.slice(0,pos1).toLowerCase().length;
if(len1<pos)++pos1;else
if(len1>pos)--pos1;else
return pos1;
}
}

CodeMirror.defineExtension("getSearchCursor",function(query,pos,caseFold){
return new SearchCursor(this.doc,query,pos,caseFold);
});
CodeMirror.defineDocExtension("getSearchCursor",function(query,pos,caseFold){
return new SearchCursor(this,query,pos,caseFold);
});

CodeMirror.defineExtension("selectMatches",function(query,caseFold){
var ranges=[];
var cur=this.getSearchCursor(query,this.getCursor("from"),caseFold);
while(cur.findNext()){
if(CodeMirror.cmpPos(cur.to(),this.getCursor("to"))>0)break;
ranges.push({anchor:cur.from(),head:cur.to()});
}
if(ranges.length)
this.setSelections(ranges,0);
});
});

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {







(function(mod){
if(true)
mod(__webpack_require__(5),__webpack_require__(117),__webpack_require__(66));else
if(typeof define=="function"&&define.amd)
define(["../lib/codemirror","../addon/search/searchcursor","../addon/edit/matchbrackets"],mod);else

mod(CodeMirror);
})(function(CodeMirror){
"use strict";

var map=CodeMirror.keyMap.sublime={fallthrough:"default"};
var cmds=CodeMirror.commands;
var Pos=CodeMirror.Pos;
var mac=CodeMirror.keyMap["default"]==CodeMirror.keyMap.macDefault;
var ctrl=mac?"Cmd-":"Ctrl-";


function findPosSubword(doc,start,dir){
if(dir<0&&start.ch==0)return doc.clipPos(Pos(start.line-1));
var line=doc.getLine(start.line);
if(dir>0&&start.ch>=line.length)return doc.clipPos(Pos(start.line+1,0));
var state="start",type;
for(var pos=start.ch,e=dir<0?0:line.length,i=0;pos!=e;pos+=dir,i++){
var next=line.charAt(dir<0?pos-1:pos);
var cat=next!="_"&&CodeMirror.isWordChar(next)?"w":"o";
if(cat=="w"&&next.toUpperCase()==next)cat="W";
if(state=="start"){
if(cat!="o"){state="in";type=cat;}
}else if(state=="in"){
if(type!=cat){
if(type=="w"&&cat=="W"&&dir<0)pos--;
if(type=="W"&&cat=="w"&&dir>0){type="w";continue;}
break;
}
}
}
return Pos(start.line,pos);
}

function moveSubword(cm,dir){
cm.extendSelectionsBy(function(range){
if(cm.display.shift||cm.doc.extend||range.empty())
return findPosSubword(cm.doc,range.head,dir);else

return dir<0?range.from():range.to();
});
}

var goSubwordCombo=mac?"Ctrl-":"Alt-";

cmds[map[goSubwordCombo+"Left"]="goSubwordLeft"]=function(cm){moveSubword(cm,-1);};
cmds[map[goSubwordCombo+"Right"]="goSubwordRight"]=function(cm){moveSubword(cm,1);};

if(mac)map["Cmd-Left"]="goLineStartSmart";

var scrollLineCombo=mac?"Ctrl-Alt-":"Ctrl-";

cmds[map[scrollLineCombo+"Up"]="scrollLineUp"]=function(cm){
var info=cm.getScrollInfo();
if(!cm.somethingSelected()){
var visibleBottomLine=cm.lineAtHeight(info.top+info.clientHeight,"local");
if(cm.getCursor().line>=visibleBottomLine)
cm.execCommand("goLineUp");
}
cm.scrollTo(null,info.top-cm.defaultTextHeight());
};
cmds[map[scrollLineCombo+"Down"]="scrollLineDown"]=function(cm){
var info=cm.getScrollInfo();
if(!cm.somethingSelected()){
var visibleTopLine=cm.lineAtHeight(info.top,"local")+1;
if(cm.getCursor().line<=visibleTopLine)
cm.execCommand("goLineDown");
}
cm.scrollTo(null,info.top+cm.defaultTextHeight());
};

cmds[map["Shift-"+ctrl+"L"]="splitSelectionByLine"]=function(cm){
var ranges=cm.listSelections(),lineRanges=[];
for(var i=0;i<ranges.length;i++){
var from=ranges[i].from(),to=ranges[i].to();
for(var line=from.line;line<=to.line;++line){
if(!(to.line>from.line&&line==to.line&&to.ch==0))
lineRanges.push({anchor:line==from.line?from:Pos(line,0),
head:line==to.line?to:Pos(line)});}
}
cm.setSelections(lineRanges,0);
};

map["Shift-Tab"]="indentLess";

cmds[map["Esc"]="singleSelectionTop"]=function(cm){
var range=cm.listSelections()[0];
cm.setSelection(range.anchor,range.head,{scroll:false});
};

cmds[map[ctrl+"L"]="selectLine"]=function(cm){
var ranges=cm.listSelections(),extended=[];
for(var i=0;i<ranges.length;i++){
var range=ranges[i];
extended.push({anchor:Pos(range.from().line,0),
head:Pos(range.to().line+1,0)});
}
cm.setSelections(extended);
};

map["Shift-Ctrl-K"]="deleteLine";

function insertLine(cm,above){
if(cm.isReadOnly())return CodeMirror.Pass;
cm.operation(function(){
var len=cm.listSelections().length,newSelection=[],last=-1;
for(var i=0;i<len;i++){
var head=cm.listSelections()[i].head;
if(head.line<=last)continue;
var at=Pos(head.line+(above?0:1),0);
cm.replaceRange("\n",at,null,"+insertLine");
cm.indentLine(at.line,null,true);
newSelection.push({head:at,anchor:at});
last=head.line+1;
}
cm.setSelections(newSelection);
});
cm.execCommand("indentAuto");
}

cmds[map[ctrl+"Enter"]="insertLineAfter"]=function(cm){return insertLine(cm,false);};

cmds[map["Shift-"+ctrl+"Enter"]="insertLineBefore"]=function(cm){return insertLine(cm,true);};

function wordAt(cm,pos){
var start=pos.ch,end=start,line=cm.getLine(pos.line);
while(start&&CodeMirror.isWordChar(line.charAt(start-1))){--start;}
while(end<line.length&&CodeMirror.isWordChar(line.charAt(end))){++end;}
return{from:Pos(pos.line,start),to:Pos(pos.line,end),word:line.slice(start,end)};
}

cmds[map[ctrl+"D"]="selectNextOccurrence"]=function(cm){
var from=cm.getCursor("from"),to=cm.getCursor("to");
var fullWord=cm.state.sublimeFindFullWord==cm.doc.sel;
if(CodeMirror.cmpPos(from,to)==0){
var word=wordAt(cm,from);
if(!word.word)return;
cm.setSelection(word.from,word.to);
fullWord=true;
}else{
var text=cm.getRange(from,to);
var query=fullWord?new RegExp("\\b"+text+"\\b"):text;
var cur=cm.getSearchCursor(query,to);
if(cur.findNext()){
cm.addSelection(cur.from(),cur.to());
}else{
cur=cm.getSearchCursor(query,Pos(cm.firstLine(),0));
if(cur.findNext())
cm.addSelection(cur.from(),cur.to());
}
}
if(fullWord)
cm.state.sublimeFindFullWord=cm.doc.sel;
};

var mirror="(){}[]";
function selectBetweenBrackets(cm){
var ranges=cm.listSelections(),newRanges=[];
for(var i=0;i<ranges.length;i++){
var range=ranges[i],pos=range.head,opening=cm.scanForBracket(pos,-1);
if(!opening)return false;
for(;;){
var closing=cm.scanForBracket(pos,1);
if(!closing)return false;
if(closing.ch==mirror.charAt(mirror.indexOf(opening.ch)+1)){
newRanges.push({anchor:Pos(opening.pos.line,opening.pos.ch+1),
head:closing.pos});
break;
}
pos=Pos(closing.pos.line,closing.pos.ch+1);
}
}
cm.setSelections(newRanges);
return true;
}

cmds[map["Shift-"+ctrl+"Space"]="selectScope"]=function(cm){
selectBetweenBrackets(cm)||cm.execCommand("selectAll");
};
cmds[map["Shift-"+ctrl+"M"]="selectBetweenBrackets"]=function(cm){
if(!selectBetweenBrackets(cm))return CodeMirror.Pass;
};

cmds[map[ctrl+"M"]="goToBracket"]=function(cm){
cm.extendSelectionsBy(function(range){
var next=cm.scanForBracket(range.head,1);
if(next&&CodeMirror.cmpPos(next.pos,range.head)!=0)return next.pos;
var prev=cm.scanForBracket(range.head,-1);
return prev&&Pos(prev.pos.line,prev.pos.ch+1)||range.head;
});
};

var swapLineCombo=mac?"Cmd-Ctrl-":"Shift-Ctrl-";

cmds[map[swapLineCombo+"Up"]="swapLineUp"]=function(cm){
if(cm.isReadOnly())return CodeMirror.Pass;
var ranges=cm.listSelections(),linesToMove=[],at=cm.firstLine()-1,newSels=[];
for(var i=0;i<ranges.length;i++){
var range=ranges[i],from=range.from().line-1,to=range.to().line;
newSels.push({anchor:Pos(range.anchor.line-1,range.anchor.ch),
head:Pos(range.head.line-1,range.head.ch)});
if(range.to().ch==0&&!range.empty())--to;
if(from>at)linesToMove.push(from,to);else
if(linesToMove.length)linesToMove[linesToMove.length-1]=to;
at=to;
}
cm.operation(function(){
for(var i=0;i<linesToMove.length;i+=2){
var from=linesToMove[i],to=linesToMove[i+1];
var line=cm.getLine(from);
cm.replaceRange("",Pos(from,0),Pos(from+1,0),"+swapLine");
if(to>cm.lastLine())
cm.replaceRange("\n"+line,Pos(cm.lastLine()),null,"+swapLine");else

cm.replaceRange(line+"\n",Pos(to,0),null,"+swapLine");
}
cm.setSelections(newSels);
cm.scrollIntoView();
});
};

cmds[map[swapLineCombo+"Down"]="swapLineDown"]=function(cm){
if(cm.isReadOnly())return CodeMirror.Pass;
var ranges=cm.listSelections(),linesToMove=[],at=cm.lastLine()+1;
for(var i=ranges.length-1;i>=0;i--){
var range=ranges[i],from=range.to().line+1,to=range.from().line;
if(range.to().ch==0&&!range.empty())from--;
if(from<at)linesToMove.push(from,to);else
if(linesToMove.length)linesToMove[linesToMove.length-1]=to;
at=to;
}
cm.operation(function(){
for(var i=linesToMove.length-2;i>=0;i-=2){
var from=linesToMove[i],to=linesToMove[i+1];
var line=cm.getLine(from);
if(from==cm.lastLine())
cm.replaceRange("",Pos(from-1),Pos(from),"+swapLine");else

cm.replaceRange("",Pos(from,0),Pos(from+1,0),"+swapLine");
cm.replaceRange(line+"\n",Pos(to,0),null,"+swapLine");
}
cm.scrollIntoView();
});
};

cmds[map[ctrl+"/"]="toggleCommentIndented"]=function(cm){
cm.toggleComment({indent:true});
};

cmds[map[ctrl+"J"]="joinLines"]=function(cm){
var ranges=cm.listSelections(),joined=[];
for(var i=0;i<ranges.length;i++){
var range=ranges[i],from=range.from();
var start=from.line,end=range.to().line;
while(i<ranges.length-1&&ranges[i+1].from().line==end){
end=ranges[++i].to().line;}
joined.push({start:start,end:end,anchor:!range.empty()&&from});
}
cm.operation(function(){
var offset=0,ranges=[];
for(var i=0;i<joined.length;i++){
var obj=joined[i];
var anchor=obj.anchor&&Pos(obj.anchor.line-offset,obj.anchor.ch),head;
for(var line=obj.start;line<=obj.end;line++){
var actual=line-offset;
if(line==obj.end)head=Pos(actual,cm.getLine(actual).length+1);
if(actual<cm.lastLine()){
cm.replaceRange(" ",Pos(actual),Pos(actual+1,/^\s*/.exec(cm.getLine(actual+1))[0].length));
++offset;
}
}
ranges.push({anchor:anchor||head,head:head});
}
cm.setSelections(ranges,0);
});
};

cmds[map["Shift-"+ctrl+"D"]="duplicateLine"]=function(cm){
cm.operation(function(){
var rangeCount=cm.listSelections().length;
for(var i=0;i<rangeCount;i++){
var range=cm.listSelections()[i];
if(range.empty())
cm.replaceRange(cm.getLine(range.head.line)+"\n",Pos(range.head.line,0));else

cm.replaceRange(cm.getRange(range.from(),range.to()),range.from());
}
cm.scrollIntoView();
});
};

if(!mac)map[ctrl+"T"]="transposeChars";

function sortLines(cm,caseSensitive){
if(cm.isReadOnly())return CodeMirror.Pass;
var ranges=cm.listSelections(),toSort=[],selected;
for(var i=0;i<ranges.length;i++){
var range=ranges[i];
if(range.empty())continue;
var from=range.from().line,to=range.to().line;
while(i<ranges.length-1&&ranges[i+1].from().line==to){
to=ranges[++i].to().line;}
if(!ranges[i].to().ch)to--;
toSort.push(from,to);
}
if(toSort.length)selected=true;else
toSort.push(cm.firstLine(),cm.lastLine());

cm.operation(function(){
var ranges=[];
for(var i=0;i<toSort.length;i+=2){
var from=toSort[i],to=toSort[i+1];
var start=Pos(from,0),end=Pos(to);
var lines=cm.getRange(start,end,false);
if(caseSensitive)
lines.sort();else

lines.sort(function(a,b){
var au=a.toUpperCase(),bu=b.toUpperCase();
if(au!=bu){a=au;b=bu;}
return a<b?-1:a==b?0:1;
});
cm.replaceRange(lines,start,end);
if(selected)ranges.push({anchor:start,head:Pos(to+1,0)});
}
if(selected)cm.setSelections(ranges,0);
});
}

cmds[map["F9"]="sortLines"]=function(cm){sortLines(cm,true);};
cmds[map[ctrl+"F9"]="sortLinesInsensitive"]=function(cm){sortLines(cm,false);};

cmds[map["F2"]="nextBookmark"]=function(cm){
var marks=cm.state.sublimeBookmarks;
if(marks)while(marks.length){
var current=marks.shift();
var found=current.find();
if(found){
marks.push(current);
return cm.setSelection(found.from,found.to);
}
}
};

cmds[map["Shift-F2"]="prevBookmark"]=function(cm){
var marks=cm.state.sublimeBookmarks;
if(marks)while(marks.length){
marks.unshift(marks.pop());
var found=marks[marks.length-1].find();
if(!found)
marks.pop();else

return cm.setSelection(found.from,found.to);
}
};

cmds[map[ctrl+"F2"]="toggleBookmark"]=function(cm){
var ranges=cm.listSelections();
var marks=cm.state.sublimeBookmarks||(cm.state.sublimeBookmarks=[]);
for(var i=0;i<ranges.length;i++){
var from=ranges[i].from(),to=ranges[i].to();
var found=cm.findMarks(from,to);
for(var j=0;j<found.length;j++){
if(found[j].sublimeBookmark){
found[j].clear();
for(var k=0;k<marks.length;k++){
if(marks[k]==found[j])
marks.splice(k--,1);}
break;
}
}
if(j==found.length)
marks.push(cm.markText(from,to,{sublimeBookmark:true,clearWhenEmpty:false}));
}
};

cmds[map["Shift-"+ctrl+"F2"]="clearBookmarks"]=function(cm){
var marks=cm.state.sublimeBookmarks;
if(marks)for(var i=0;i<marks.length;i++){marks[i].clear();}
marks.length=0;
};

cmds[map["Alt-F2"]="selectBookmarks"]=function(cm){
var marks=cm.state.sublimeBookmarks,ranges=[];
if(marks)for(var i=0;i<marks.length;i++){
var found=marks[i].find();
if(!found)
marks.splice(i--,0);else

ranges.push({anchor:found.from,head:found.to});
}
if(ranges.length)
cm.setSelections(ranges,0);
};

map["Alt-Q"]="wrapLines";

var cK=ctrl+"K ";

function modifyWordOrSelection(cm,mod){
cm.operation(function(){
var ranges=cm.listSelections(),indices=[],replacements=[];
for(var i=0;i<ranges.length;i++){
var range=ranges[i];
if(range.empty()){indices.push(i);replacements.push("");}else
replacements.push(mod(cm.getRange(range.from(),range.to())));
}
cm.replaceSelections(replacements,"around","case");
for(var i=indices.length-1,at;i>=0;i--){
var range=ranges[indices[i]];
if(at&&CodeMirror.cmpPos(range.head,at)>0)continue;
var word=wordAt(cm,range.head);
at=word.from;
cm.replaceRange(mod(word.word),word.from,word.to);
}
});
}

map[cK+ctrl+"Backspace"]="delLineLeft";

cmds[map["Backspace"]="smartBackspace"]=function(cm){
if(cm.somethingSelected())return CodeMirror.Pass;

cm.operation(function(){
var cursors=cm.listSelections();
var indentUnit=cm.getOption("indentUnit");

for(var i=cursors.length-1;i>=0;i--){
var cursor=cursors[i].head;
var toStartOfLine=cm.getRange({line:cursor.line,ch:0},cursor);
var column=CodeMirror.countColumn(toStartOfLine,null,cm.getOption("tabSize"));


var deletePos=cm.findPosH(cursor,-1,"char",false);

if(toStartOfLine&&!/\S/.test(toStartOfLine)&&column%indentUnit==0){
var prevIndent=new Pos(cursor.line,
CodeMirror.findColumn(toStartOfLine,column-indentUnit,indentUnit));


if(prevIndent.ch!=cursor.ch)deletePos=prevIndent;
}

cm.replaceRange("",deletePos,cursor,"+delete");
}
});
};

cmds[map[cK+ctrl+"K"]="delLineRight"]=function(cm){
cm.operation(function(){
var ranges=cm.listSelections();
for(var i=ranges.length-1;i>=0;i--){
cm.replaceRange("",ranges[i].anchor,Pos(ranges[i].to().line),"+delete");}
cm.scrollIntoView();
});
};

cmds[map[cK+ctrl+"U"]="upcaseAtCursor"]=function(cm){
modifyWordOrSelection(cm,function(str){return str.toUpperCase();});
};
cmds[map[cK+ctrl+"L"]="downcaseAtCursor"]=function(cm){
modifyWordOrSelection(cm,function(str){return str.toLowerCase();});
};

cmds[map[cK+ctrl+"Space"]="setSublimeMark"]=function(cm){
if(cm.state.sublimeMark)cm.state.sublimeMark.clear();
cm.state.sublimeMark=cm.setBookmark(cm.getCursor());
};
cmds[map[cK+ctrl+"A"]="selectToSublimeMark"]=function(cm){
var found=cm.state.sublimeMark&&cm.state.sublimeMark.find();
if(found)cm.setSelection(cm.getCursor(),found);
};
cmds[map[cK+ctrl+"W"]="deleteToSublimeMark"]=function(cm){
var found=cm.state.sublimeMark&&cm.state.sublimeMark.find();
if(found){
var from=cm.getCursor(),to=found;
if(CodeMirror.cmpPos(from,to)>0){var tmp=to;to=from;from=tmp;}
cm.state.sublimeKilled=cm.getRange(from,to);
cm.replaceRange("",from,to);
}
};
cmds[map[cK+ctrl+"X"]="swapWithSublimeMark"]=function(cm){
var found=cm.state.sublimeMark&&cm.state.sublimeMark.find();
if(found){
cm.state.sublimeMark.clear();
cm.state.sublimeMark=cm.setBookmark(cm.getCursor());
cm.setCursor(found);
}
};
cmds[map[cK+ctrl+"Y"]="sublimeYank"]=function(cm){
if(cm.state.sublimeKilled!=null)
cm.replaceSelection(cm.state.sublimeKilled,null,"paste");
};

map[cK+ctrl+"G"]="clearBookmarks";
cmds[map[cK+ctrl+"C"]="showInCenter"]=function(cm){
var pos=cm.cursorCoords(null,"local");
cm.scrollTo(null,(pos.top+pos.bottom)/2-cm.getScrollInfo().clientHeight/2);
};

var selectLinesCombo=mac?"Ctrl-Shift-":"Ctrl-Alt-";
cmds[map[selectLinesCombo+"Up"]="selectLinesUpward"]=function(cm){
cm.operation(function(){
var ranges=cm.listSelections();
for(var i=0;i<ranges.length;i++){
var range=ranges[i];
if(range.head.line>cm.firstLine())
cm.addSelection(Pos(range.head.line-1,range.head.ch));
}
});
};
cmds[map[selectLinesCombo+"Down"]="selectLinesDownward"]=function(cm){
cm.operation(function(){
var ranges=cm.listSelections();
for(var i=0;i<ranges.length;i++){
var range=ranges[i];
if(range.head.line<cm.lastLine())
cm.addSelection(Pos(range.head.line+1,range.head.ch));
}
});
};

function getTarget(cm){
var from=cm.getCursor("from"),to=cm.getCursor("to");
if(CodeMirror.cmpPos(from,to)==0){
var word=wordAt(cm,from);
if(!word.word)return;
from=word.from;
to=word.to;
}
return{from:from,to:to,query:cm.getRange(from,to),word:word};
}

function findAndGoTo(cm,forward){
var target=getTarget(cm);
if(!target)return;
var query=target.query;
var cur=cm.getSearchCursor(query,forward?target.to:target.from);

if(forward?cur.findNext():cur.findPrevious()){
cm.setSelection(cur.from(),cur.to());
}else{
cur=cm.getSearchCursor(query,forward?Pos(cm.firstLine(),0):
cm.clipPos(Pos(cm.lastLine())));
if(forward?cur.findNext():cur.findPrevious())
cm.setSelection(cur.from(),cur.to());else
if(target.word)
cm.setSelection(target.from,target.to);
}
};
cmds[map[ctrl+"F3"]="findUnder"]=function(cm){findAndGoTo(cm,true);};
cmds[map["Shift-"+ctrl+"F3"]="findUnderPrevious"]=function(cm){findAndGoTo(cm,false);};
cmds[map["Alt-F3"]="findAllUnder"]=function(cm){
var target=getTarget(cm);
if(!target)return;
var cur=cm.getSearchCursor(target.query);
var matches=[];
var primaryIndex=-1;
while(cur.findNext()){
matches.push({anchor:cur.from(),head:cur.to()});
if(cur.from().line<=target.from.line&&cur.from().ch<=target.from.ch)
primaryIndex++;
}
cm.setSelections(matches,primaryIndex);
};

map["Shift-"+ctrl+"["]="fold";
map["Shift-"+ctrl+"]"]="unfold";
map[cK+ctrl+"0"]=map[cK+ctrl+"J"]="unfoldAll";

map[ctrl+"I"]="findIncremental";
map["Shift-"+ctrl+"I"]="findIncrementalReverse";
map[ctrl+"H"]="replace";
map["F3"]="findNext";
map["Shift-F3"]="findPrev";

CodeMirror.normalizeKeyMap(map);
});

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {




(function(mod){
if(true)
mod(__webpack_require__(5));else
if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else

mod(CodeMirror);
})(function(CodeMirror){
"use strict";

function expressionAllowed(stream,state,backUp){
return /^(?:operator|sof|keyword c|case|new|export|default|[\[{}\(,;:]|=>)$/.test(state.lastType)||
state.lastType=="quasi"&&/\{\s*$/.test(stream.string.slice(0,stream.pos-(backUp||0)));
}

CodeMirror.defineMode("javascript",function(config,parserConfig){
var indentUnit=config.indentUnit;
var statementIndent=parserConfig.statementIndent;
var jsonldMode=parserConfig.jsonld;
var jsonMode=parserConfig.json||jsonldMode;
var isTS=parserConfig.typescript;
var wordRE=parserConfig.wordCharacters||/[\w$\xa1-\uffff]/;



var keywords=function(){
function kw(type){return{type:type,style:"keyword"};}
var A=kw("keyword a"),B=kw("keyword b"),C=kw("keyword c");
var operator=kw("operator"),atom={type:"atom",style:"atom"};

var jsKeywords={
"if":kw("if"),"while":A,"with":A,"else":B,"do":B,"try":B,"finally":B,
"return":C,"break":C,"continue":C,"new":kw("new"),"delete":C,"throw":C,"debugger":C,
"var":kw("var"),"const":kw("var"),"let":kw("var"),
"function":kw("function"),"catch":kw("catch"),
"for":kw("for"),"switch":kw("switch"),"case":kw("case"),"default":kw("default"),
"in":operator,"typeof":operator,"instanceof":operator,
"true":atom,"false":atom,"null":atom,"undefined":atom,"NaN":atom,"Infinity":atom,
"this":kw("this"),"class":kw("class"),"super":kw("atom"),
"yield":C,"export":kw("export"),"import":kw("import"),"extends":C,
"await":C,"async":kw("async")};



if(isTS){
var type={type:"variable",style:"variable-3"};
var tsKeywords={

"interface":kw("class"),
"implements":C,
"namespace":C,
"module":kw("module"),
"enum":kw("module"),
"type":kw("type"),


"public":kw("modifier"),
"private":kw("modifier"),
"protected":kw("modifier"),
"abstract":kw("modifier"),


"as":operator,


"string":type,"number":type,"boolean":type,"any":type};


for(var attr in tsKeywords){
jsKeywords[attr]=tsKeywords[attr];
}
}

return jsKeywords;
}();

var isOperatorChar=/[+\-*&%=<>!?|~^]/;
var isJsonldKeyword=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

function readRegexp(stream){
var escaped=false,next,inSet=false;
while((next=stream.next())!=null){
if(!escaped){
if(next=="/"&&!inSet)return;
if(next=="[")inSet=true;else
if(inSet&&next=="]")inSet=false;
}
escaped=!escaped&&next=="\\";
}
}



var type,content;
function ret(tp,style,cont){
type=tp;content=cont;
return style;
}
function tokenBase(stream,state){
var ch=stream.next();
if(ch=='"'||ch=="'"){
state.tokenize=tokenString(ch);
return state.tokenize(stream,state);
}else if(ch=="."&&stream.match(/^\d+(?:[eE][+\-]?\d+)?/)){
return ret("number","number");
}else if(ch=="."&&stream.match("..")){
return ret("spread","meta");
}else if(/[\[\]{}\(\),;\:\.]/.test(ch)){
return ret(ch);
}else if(ch=="="&&stream.eat(">")){
return ret("=>","operator");
}else if(ch=="0"&&stream.eat(/x/i)){
stream.eatWhile(/[\da-f]/i);
return ret("number","number");
}else if(ch=="0"&&stream.eat(/o/i)){
stream.eatWhile(/[0-7]/i);
return ret("number","number");
}else if(ch=="0"&&stream.eat(/b/i)){
stream.eatWhile(/[01]/i);
return ret("number","number");
}else if(/\d/.test(ch)){
stream.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);
return ret("number","number");
}else if(ch=="/"){
if(stream.eat("*")){
state.tokenize=tokenComment;
return tokenComment(stream,state);
}else if(stream.eat("/")){
stream.skipToEnd();
return ret("comment","comment");
}else if(expressionAllowed(stream,state,1)){
readRegexp(stream);
stream.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/);
return ret("regexp","string-2");
}else{
stream.eatWhile(isOperatorChar);
return ret("operator","operator",stream.current());
}
}else if(ch=="`"){
state.tokenize=tokenQuasi;
return tokenQuasi(stream,state);
}else if(ch=="#"){
stream.skipToEnd();
return ret("error","error");
}else if(isOperatorChar.test(ch)){
if(ch!=">"||!state.lexical||state.lexical.type!=">")
stream.eatWhile(isOperatorChar);
return ret("operator","operator",stream.current());
}else if(wordRE.test(ch)){
stream.eatWhile(wordRE);
var word=stream.current(),known=keywords.propertyIsEnumerable(word)&&keywords[word];
return known&&state.lastType!="."?ret(known.type,known.style,word):
ret("variable","variable",word);
}
}

function tokenString(quote){
return function(stream,state){
var escaped=false,next;
if(jsonldMode&&stream.peek()=="@"&&stream.match(isJsonldKeyword)){
state.tokenize=tokenBase;
return ret("jsonld-keyword","meta");
}
while((next=stream.next())!=null){
if(next==quote&&!escaped)break;
escaped=!escaped&&next=="\\";
}
if(!escaped)state.tokenize=tokenBase;
return ret("string","string");
};
}

function tokenComment(stream,state){
var maybeEnd=false,ch;
while(ch=stream.next()){
if(ch=="/"&&maybeEnd){
state.tokenize=tokenBase;
break;
}
maybeEnd=ch=="*";
}
return ret("comment","comment");
}

function tokenQuasi(stream,state){
var escaped=false,next;
while((next=stream.next())!=null){
if(!escaped&&(next=="`"||next=="$"&&stream.eat("{"))){
state.tokenize=tokenBase;
break;
}
escaped=!escaped&&next=="\\";
}
return ret("quasi","string-2",stream.current());
}

var brackets="([{}])";







function findFatArrow(stream,state){
if(state.fatArrowAt)state.fatArrowAt=null;
var arrow=stream.string.indexOf("=>",stream.start);
if(arrow<0)return;

if(isTS){
var m=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start,arrow));
if(m)arrow=m.index;
}

var depth=0,sawSomething=false;
for(var pos=arrow-1;pos>=0;--pos){
var ch=stream.string.charAt(pos);
var bracket=brackets.indexOf(ch);
if(bracket>=0&&bracket<3){
if(!depth){++pos;break;}
if(--depth==0){if(ch=="(")sawSomething=true;break;}
}else if(bracket>=3&&bracket<6){
++depth;
}else if(wordRE.test(ch)){
sawSomething=true;
}else if(/["'\/]/.test(ch)){
return;
}else if(sawSomething&&!depth){
++pos;
break;
}
}
if(sawSomething&&!depth)state.fatArrowAt=pos;
}



var atomicTypes={"atom":true,"number":true,"variable":true,"string":true,"regexp":true,"this":true,"jsonld-keyword":true};

function JSLexical(indented,column,type,align,prev,info){
this.indented=indented;
this.column=column;
this.type=type;
this.prev=prev;
this.info=info;
if(align!=null)this.align=align;
}

function inScope(state,varname){
for(var v=state.localVars;v;v=v.next){
if(v.name==varname)return true;}
for(var cx=state.context;cx;cx=cx.prev){
for(var v=cx.vars;v;v=v.next){
if(v.name==varname)return true;}
}
}

function parseJS(state,style,type,content,stream){
var cc=state.cc;


cx.state=state;cx.stream=stream;cx.marked=null,cx.cc=cc;cx.style=style;

if(!state.lexical.hasOwnProperty("align"))
state.lexical.align=true;

while(true){
var combinator=cc.length?cc.pop():jsonMode?expression:statement;
if(combinator(type,content)){
while(cc.length&&cc[cc.length-1].lex){
cc.pop()();}
if(cx.marked)return cx.marked;
if(type=="variable"&&inScope(state,content))return"variable-2";
return style;
}
}
}



var cx={state:null,column:null,marked:null,cc:null};
function pass(){
for(var i=arguments.length-1;i>=0;i--){cx.cc.push(arguments[i]);}
}
function cont(){
pass.apply(null,arguments);
return true;
}
function register(varname){
function inList(list){
for(var v=list;v;v=v.next){
if(v.name==varname)return true;}
return false;
}
var state=cx.state;
cx.marked="def";
if(state.context){
if(inList(state.localVars))return;
state.localVars={name:varname,next:state.localVars};
}else{
if(inList(state.globalVars))return;
if(parserConfig.globalVars)
state.globalVars={name:varname,next:state.globalVars};
}
}



var defaultVars={name:"this",next:{name:"arguments"}};
function pushcontext(){
cx.state.context={prev:cx.state.context,vars:cx.state.localVars};
cx.state.localVars=defaultVars;
}
function popcontext(){
cx.state.localVars=cx.state.context.vars;
cx.state.context=cx.state.context.prev;
}
function pushlex(type,info){
var result=function result(){
var state=cx.state,indent=state.indented;
if(state.lexical.type=="stat")indent=state.lexical.indented;else
for(var outer=state.lexical;outer&&outer.type==")"&&outer.align;outer=outer.prev){
indent=outer.indented;}
state.lexical=new JSLexical(indent,cx.stream.column(),type,null,state.lexical,info);
};
result.lex=true;
return result;
}
function poplex(){
var state=cx.state;
if(state.lexical.prev){
if(state.lexical.type==")")
state.indented=state.lexical.indented;
state.lexical=state.lexical.prev;
}
}
poplex.lex=true;

function expect(wanted){
function exp(type){
if(type==wanted)return cont();else
if(wanted==";")return pass();else
return cont(exp);
};
return exp;
}

function statement(type,value){
if(type=="var")return cont(pushlex("vardef",value.length),vardef,expect(";"),poplex);
if(type=="keyword a")return cont(pushlex("form"),parenExpr,statement,poplex);
if(type=="keyword b")return cont(pushlex("form"),statement,poplex);
if(type=="{")return cont(pushlex("}"),block,poplex);
if(type==";")return cont();
if(type=="if"){
if(cx.state.lexical.info=="else"&&cx.state.cc[cx.state.cc.length-1]==poplex)
cx.state.cc.pop()();
return cont(pushlex("form"),parenExpr,statement,poplex,maybeelse);
}
if(type=="function")return cont(functiondef);
if(type=="for")return cont(pushlex("form"),forspec,statement,poplex);
if(type=="variable")return cont(pushlex("stat"),maybelabel);
if(type=="switch")return cont(pushlex("form"),parenExpr,pushlex("}","switch"),expect("{"),
block,poplex,poplex);
if(type=="case")return cont(expression,expect(":"));
if(type=="default")return cont(expect(":"));
if(type=="catch")return cont(pushlex("form"),pushcontext,expect("("),funarg,expect(")"),
statement,poplex,popcontext);
if(type=="class")return cont(pushlex("form"),className,poplex);
if(type=="export")return cont(pushlex("stat"),afterExport,poplex);
if(type=="import")return cont(pushlex("stat"),afterImport,poplex);
if(type=="module")return cont(pushlex("form"),pattern,pushlex("}"),expect("{"),block,poplex,poplex);
if(type=="type")return cont(typeexpr,expect("operator"),typeexpr,expect(";"));
if(type=="async")return cont(statement);
return pass(pushlex("stat"),expression,expect(";"),poplex);
}
function expression(type){
return expressionInner(type,false);
}
function expressionNoComma(type){
return expressionInner(type,true);
}
function parenExpr(type){
if(type!="(")return pass();
return cont(pushlex(")"),expression,expect(")"),poplex);
}
function expressionInner(type,noComma){
if(cx.state.fatArrowAt==cx.stream.start){
var body=noComma?arrowBodyNoComma:arrowBody;
if(type=="(")return cont(pushcontext,pushlex(")"),commasep(pattern,")"),poplex,expect("=>"),body,popcontext);else
if(type=="variable")return pass(pushcontext,pattern,expect("=>"),body,popcontext);
}

var maybeop=noComma?maybeoperatorNoComma:maybeoperatorComma;
if(atomicTypes.hasOwnProperty(type))return cont(maybeop);
if(type=="function")return cont(functiondef,maybeop);
if(type=="class")return cont(pushlex("form"),classExpression,poplex);
if(type=="keyword c"||type=="async")return cont(noComma?maybeexpressionNoComma:maybeexpression);
if(type=="(")return cont(pushlex(")"),maybeexpression,expect(")"),poplex,maybeop);
if(type=="operator"||type=="spread")return cont(noComma?expressionNoComma:expression);
if(type=="[")return cont(pushlex("]"),arrayLiteral,poplex,maybeop);
if(type=="{")return contCommasep(objprop,"}",null,maybeop);
if(type=="quasi")return pass(quasi,maybeop);
if(type=="new")return cont(maybeTarget(noComma));
return cont();
}
function maybeexpression(type){
if(type.match(/[;\}\)\],]/))return pass();
return pass(expression);
}
function maybeexpressionNoComma(type){
if(type.match(/[;\}\)\],]/))return pass();
return pass(expressionNoComma);
}

function maybeoperatorComma(type,value){
if(type==",")return cont(expression);
return maybeoperatorNoComma(type,value,false);
}
function maybeoperatorNoComma(type,value,noComma){
var me=noComma==false?maybeoperatorComma:maybeoperatorNoComma;
var expr=noComma==false?expression:expressionNoComma;
if(type=="=>")return cont(pushcontext,noComma?arrowBodyNoComma:arrowBody,popcontext);
if(type=="operator"){
if(/\+\+|--/.test(value))return cont(me);
if(value=="?")return cont(expression,expect(":"),expr);
return cont(expr);
}
if(type=="quasi"){return pass(quasi,me);}
if(type==";")return;
if(type=="(")return contCommasep(expressionNoComma,")","call",me);
if(type==".")return cont(property,me);
if(type=="[")return cont(pushlex("]"),maybeexpression,expect("]"),poplex,me);
}
function quasi(type,value){
if(type!="quasi")return pass();
if(value.slice(value.length-2)!="${")return cont(quasi);
return cont(expression,continueQuasi);
}
function continueQuasi(type){
if(type=="}"){
cx.marked="string-2";
cx.state.tokenize=tokenQuasi;
return cont(quasi);
}
}
function arrowBody(type){
findFatArrow(cx.stream,cx.state);
return pass(type=="{"?statement:expression);
}
function arrowBodyNoComma(type){
findFatArrow(cx.stream,cx.state);
return pass(type=="{"?statement:expressionNoComma);
}
function maybeTarget(noComma){
return function(type){
if(type==".")return cont(noComma?targetNoComma:target);else
return pass(noComma?expressionNoComma:expression);
};
}
function target(_,value){
if(value=="target"){cx.marked="keyword";return cont(maybeoperatorComma);}
}
function targetNoComma(_,value){
if(value=="target"){cx.marked="keyword";return cont(maybeoperatorNoComma);}
}
function maybelabel(type){
if(type==":")return cont(poplex,statement);
return pass(maybeoperatorComma,expect(";"),poplex);
}
function property(type){
if(type=="variable"){cx.marked="property";return cont();}
}
function objprop(type,value){
if(type=="async"){
cx.marked="property";
return cont(objprop);
}else if(type=="variable"||cx.style=="keyword"){
cx.marked="property";
if(value=="get"||value=="set")return cont(getterSetter);
return cont(afterprop);
}else if(type=="number"||type=="string"){
cx.marked=jsonldMode?"property":cx.style+" property";
return cont(afterprop);
}else if(type=="jsonld-keyword"){
return cont(afterprop);
}else if(type=="modifier"){
return cont(objprop);
}else if(type=="["){
return cont(expression,expect("]"),afterprop);
}else if(type=="spread"){
return cont(expression);
}else if(type==":"){
return pass(afterprop);
}
}
function getterSetter(type){
if(type!="variable")return pass(afterprop);
cx.marked="property";
return cont(functiondef);
}
function afterprop(type){
if(type==":")return cont(expressionNoComma);
if(type=="(")return pass(functiondef);
}
function commasep(what,end,sep){
function proceed(type,value){
if(sep?sep.indexOf(type)>-1:type==","){
var lex=cx.state.lexical;
if(lex.info=="call")lex.pos=(lex.pos||0)+1;
return cont(function(type,value){
if(type==end||value==end)return pass();
return pass(what);
},proceed);
}
if(type==end||value==end)return cont();
return cont(expect(end));
}
return function(type,value){
if(type==end||value==end)return cont();
return pass(what,proceed);
};
}
function contCommasep(what,end,info){
for(var i=3;i<arguments.length;i++){
cx.cc.push(arguments[i]);}
return cont(pushlex(end,info),commasep(what,end),poplex);
}
function block(type){
if(type=="}")return cont();
return pass(statement,block);
}
function maybetype(type,value){
if(isTS){
if(type==":")return cont(typeexpr);
if(value=="?")return cont(maybetype);
}
}
function typeexpr(type){
if(type=="variable"){cx.marked="variable-3";return cont(afterType);}
if(type=="string"||type=="number"||type=="atom")return cont(afterType);
if(type=="{")return cont(pushlex("}"),commasep(typeprop,"}",",;"),poplex);
if(type=="(")return cont(commasep(typearg,")"),maybeReturnType);
}
function maybeReturnType(type){
if(type=="=>")return cont(typeexpr);
}
function typeprop(type,value){
if(type=="variable"||cx.style=="keyword"){
cx.marked="property";
return cont(typeprop);
}else if(value=="?"){
return cont(typeprop);
}else if(type==":"){
return cont(typeexpr);
}
}
function typearg(type){
if(type=="variable")return cont(typearg);else
if(type==":")return cont(typeexpr);
}
function afterType(type,value){
if(value=="<")return cont(pushlex(">"),commasep(typeexpr,">"),poplex,afterType);
if(value=="|"||type==".")return cont(typeexpr);
if(type=="[")return cont(expect("]"),afterType);
}
function vardef(){
return pass(pattern,maybetype,maybeAssign,vardefCont);
}
function pattern(type,value){
if(type=="modifier")return cont(pattern);
if(type=="variable"){register(value);return cont();}
if(type=="spread")return cont(pattern);
if(type=="[")return contCommasep(pattern,"]");
if(type=="{")return contCommasep(proppattern,"}");
}
function proppattern(type,value){
if(type=="variable"&&!cx.stream.match(/^\s*:/,false)){
register(value);
return cont(maybeAssign);
}
if(type=="variable")cx.marked="property";
if(type=="spread")return cont(pattern);
if(type=="}")return pass();
return cont(expect(":"),pattern,maybeAssign);
}
function maybeAssign(_type,value){
if(value=="=")return cont(expressionNoComma);
}
function vardefCont(type){
if(type==",")return cont(vardef);
}
function maybeelse(type,value){
if(type=="keyword b"&&value=="else")return cont(pushlex("form","else"),statement,poplex);
}
function forspec(type){
if(type=="(")return cont(pushlex(")"),forspec1,expect(")"),poplex);
}
function forspec1(type){
if(type=="var")return cont(vardef,expect(";"),forspec2);
if(type==";")return cont(forspec2);
if(type=="variable")return cont(formaybeinof);
return pass(expression,expect(";"),forspec2);
}
function formaybeinof(_type,value){
if(value=="in"||value=="of"){cx.marked="keyword";return cont(expression);}
return cont(maybeoperatorComma,forspec2);
}
function forspec2(type,value){
if(type==";")return cont(forspec3);
if(value=="in"||value=="of"){cx.marked="keyword";return cont(expression);}
return pass(expression,expect(";"),forspec3);
}
function forspec3(type){
if(type!=")")cont(expression);
}
function functiondef(type,value){
if(value=="*"){cx.marked="keyword";return cont(functiondef);}
if(type=="variable"){register(value);return cont(functiondef);}
if(type=="(")return cont(pushcontext,pushlex(")"),commasep(funarg,")"),poplex,maybetype,statement,popcontext);
}
function funarg(type){
if(type=="spread")return cont(funarg);
return pass(pattern,maybetype,maybeAssign);
}
function classExpression(type,value){

if(type=="variable")return className(type,value);
return classNameAfter(type,value);
}
function className(type,value){
if(type=="variable"){register(value);return cont(classNameAfter);}
}
function classNameAfter(type,value){
if(value=="extends"||value=="implements")return cont(isTS?typeexpr:expression,classNameAfter);
if(type=="{")return cont(pushlex("}"),classBody,poplex);
}
function classBody(type,value){
if(type=="variable"||cx.style=="keyword"){
if((value=="static"||value=="get"||value=="set"||
isTS&&(value=="public"||value=="private"||value=="protected"||value=="readonly"||value=="abstract"))&&
cx.stream.match(/^\s+[\w$\xa1-\uffff]/,false)){
cx.marked="keyword";
return cont(classBody);
}
cx.marked="property";
return cont(isTS?classfield:functiondef,classBody);
}
if(value=="*"){
cx.marked="keyword";
return cont(classBody);
}
if(type==";")return cont(classBody);
if(type=="}")return cont();
}
function classfield(type,value){
if(value=="?")return cont(classfield);
if(type==":")return cont(typeexpr,maybeAssign);
return pass(functiondef);
}
function afterExport(type,value){
if(value=="*"){cx.marked="keyword";return cont(maybeFrom,expect(";"));}
if(value=="default"){cx.marked="keyword";return cont(expression,expect(";"));}
if(type=="{")return cont(commasep(exportField,"}"),maybeFrom,expect(";"));
return pass(statement);
}
function exportField(type,value){
if(value=="as"){cx.marked="keyword";return cont(expect("variable"));}
if(type=="variable")return pass(expressionNoComma,exportField);
}
function afterImport(type){
if(type=="string")return cont();
return pass(importSpec,maybeMoreImports,maybeFrom);
}
function importSpec(type,value){
if(type=="{")return contCommasep(importSpec,"}");
if(type=="variable")register(value);
if(value=="*")cx.marked="keyword";
return cont(maybeAs);
}
function maybeMoreImports(type){
if(type==",")return cont(importSpec,maybeMoreImports);
}
function maybeAs(_type,value){
if(value=="as"){cx.marked="keyword";return cont(importSpec);}
}
function maybeFrom(_type,value){
if(value=="from"){cx.marked="keyword";return cont(expression);}
}
function arrayLiteral(type){
if(type=="]")return cont();
return pass(commasep(expressionNoComma,"]"));
}

function isContinuedStatement(state,textAfter){
return state.lastType=="operator"||state.lastType==","||
isOperatorChar.test(textAfter.charAt(0))||
/[,.]/.test(textAfter.charAt(0));
}



return{
startState:function startState(basecolumn){
var state={
tokenize:tokenBase,
lastType:"sof",
cc:[],
lexical:new JSLexical((basecolumn||0)-indentUnit,0,"block",false),
localVars:parserConfig.localVars,
context:parserConfig.localVars&&{vars:parserConfig.localVars},
indented:basecolumn||0};

if(parserConfig.globalVars&&typeof parserConfig.globalVars=="object")
state.globalVars=parserConfig.globalVars;
return state;
},

token:function token(stream,state){
if(stream.sol()){
if(!state.lexical.hasOwnProperty("align"))
state.lexical.align=false;
state.indented=stream.indentation();
findFatArrow(stream,state);
}
if(state.tokenize!=tokenComment&&stream.eatSpace())return null;
var style=state.tokenize(stream,state);
if(type=="comment")return style;
state.lastType=type=="operator"&&(content=="++"||content=="--")?"incdec":type;
return parseJS(state,style,type,content,stream);
},

indent:function indent(state,textAfter){
if(state.tokenize==tokenComment)return CodeMirror.Pass;
if(state.tokenize!=tokenBase)return 0;
var firstChar=textAfter&&textAfter.charAt(0),lexical=state.lexical,top;

if(!/^\s*else\b/.test(textAfter))for(var i=state.cc.length-1;i>=0;--i){
var c=state.cc[i];
if(c==poplex)lexical=lexical.prev;else
if(c!=maybeelse)break;
}
while((lexical.type=="stat"||lexical.type=="form")&&(
firstChar=="}"||(top=state.cc[state.cc.length-1])&&(
top==maybeoperatorComma||top==maybeoperatorNoComma)&&
!/^[,\.=+\-*:?[\(]/.test(textAfter))){
lexical=lexical.prev;}
if(statementIndent&&lexical.type==")"&&lexical.prev.type=="stat")
lexical=lexical.prev;
var type=lexical.type,closing=firstChar==type;

if(type=="vardef")return lexical.indented+(state.lastType=="operator"||state.lastType==","?lexical.info+1:0);else
if(type=="form"&&firstChar=="{")return lexical.indented;else
if(type=="form")return lexical.indented+indentUnit;else
if(type=="stat")
return lexical.indented+(isContinuedStatement(state,textAfter)?statementIndent||indentUnit:0);else
if(lexical.info=="switch"&&!closing&&parserConfig.doubleIndentSwitch!=false)
return lexical.indented+(/^(?:case|default)\b/.test(textAfter)?indentUnit:2*indentUnit);else
if(lexical.align)return lexical.column+(closing?0:1);else
return lexical.indented+(closing?0:indentUnit);
},

electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,
blockCommentStart:jsonMode?null:"/*",
blockCommentEnd:jsonMode?null:"*/",
lineComment:jsonMode?null:"//",
fold:"brace",
closeBrackets:"()[]{}''\"\"``",

helperType:jsonMode?"json":"javascript",
jsonldMode:jsonldMode,
jsonMode:jsonMode,

expressionAllowed:expressionAllowed,
skipExpression:function skipExpression(state){
var top=state.cc[state.cc.length-1];
if(top==expression||top==expressionNoComma)state.cc.pop();
}};

});

CodeMirror.registerHelper("wordChars","javascript",/[\w$]/);

CodeMirror.defineMIME("text/javascript","javascript");
CodeMirror.defineMIME("text/ecmascript","javascript");
CodeMirror.defineMIME("application/javascript","javascript");
CodeMirror.defineMIME("application/x-javascript","javascript");
CodeMirror.defineMIME("application/ecmascript","javascript");
CodeMirror.defineMIME("application/json",{name:"javascript",json:true});
CodeMirror.defineMIME("application/x-json",{name:"javascript",json:true});
CodeMirror.defineMIME("application/ld+json",{name:"javascript",jsonld:true});
CodeMirror.defineMIME("text/typescript",{name:"javascript",typescript:true});
CodeMirror.defineMIME("application/typescript",{name:"javascript",typescript:true});

});

/***/ }),
/* 120 */
/***/ (function(module, exports) {






module.exports=function(){
var list=[];


list.toString=function toString(){
var result=[];
for(var i=0;i<this.length;i++){
var item=this[i];
if(item[2]){
result.push("@media "+item[2]+"{"+item[1]+"}");
}else{
result.push(item[1]);
}
}
return result.join("");
};


list.i=function(modules,mediaQuery){
if(typeof modules==="string")
modules=[[null,modules,""]];
var alreadyImportedModules={};
for(var i=0;i<this.length;i++){
var id=this[i][0];
if(typeof id==="number")
alreadyImportedModules[id]=true;
}
for(i=0;i<modules.length;i++){
var item=modules[i];




if(typeof item[0]!=="number"||!alreadyImportedModules[item[0]]){
if(mediaQuery&&!item[2]){
item[2]=mediaQuery;
}else if(mediaQuery){
item[2]="("+item[2]+") and ("+mediaQuery+")";
}
list.push(item);
}
}
};
return list;
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.formatError=formatError;

var _invariant=__webpack_require__(7);

var _invariant2=_interopRequireDefault(_invariant);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}





function formatError(error){
(0,_invariant2.default)(error,'Received null or undefined error.');
return{
message:error.message,
locations:error.locations,
path:error.path};

}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.locatedError=locatedError;

var _GraphQLError=__webpack_require__(25);






function locatedError(originalError,nodes,path){


if(originalError&&originalError.path){
return originalError;
}

var message=originalError?originalError.message||String(originalError):'An unknown error occurred.';
return new _GraphQLError.GraphQLError(message,originalError&&originalError.nodes||nodes,originalError&&originalError.source,originalError&&originalError.positions,path,originalError);
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.syntaxError=syntaxError;

var _location=__webpack_require__(47);

var _GraphQLError=__webpack_require__(25);















function syntaxError(source,position,description){
var location=(0,_location.getLocation)(source,position);
var error=new _GraphQLError.GraphQLError('Syntax Error '+source.name+' ('+location.line+':'+location.column+') '+description+'\n\n'+highlightSourceAtLocation(source,location),undefined,source,[position]);
return error;
}





function highlightSourceAtLocation(source,location){
var line=location.line;
var prevLineNum=(line-1).toString();
var lineNum=line.toString();
var nextLineNum=(line+1).toString();
var padLen=nextLineNum.length;
var lines=source.body.split(/\r\n|[\n\r]/g);
return(line>=2?lpad(padLen,prevLineNum)+': '+lines[line-2]+'\n':'')+lpad(padLen,lineNum)+': '+lines[line-1]+'\n'+Array(2+padLen+location.column).join(' ')+'^\n'+(line<lines.length?lpad(padLen,nextLineNum)+': '+lines[line]+'\n':'');
}

function lpad(len,str){
return Array(len-str.length+1).join(' ')+str;
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});


var _execute=__webpack_require__(67);

Object.defineProperty(exports,'execute',{
enumerable:true,
get:function get(){
return _execute.execute;
}});

Object.defineProperty(exports,'defaultFieldResolver',{
enumerable:true,
get:function get(){
return _execute.defaultFieldResolver;
}});

Object.defineProperty(exports,'responsePathAsArray',{
enumerable:true,
get:function get(){
return _execute.responsePathAsArray;
}});

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.graphql=graphql;

var _source=__webpack_require__(48);

var _parser=__webpack_require__(34);

var _validate=__webpack_require__(72);

var _execute=__webpack_require__(67);



































function graphql(schema,requestString,rootValue,contextValue,variableValues,operationName){
return new Promise(function(resolve){
var source=new _source.Source(requestString||'','GraphQL request');
var documentAST=(0,_parser.parse)(source);
var validationErrors=(0,_validate.validate)(schema,documentAST);
if(validationErrors.length>0){
resolve({errors:validationErrors});
}else{
resolve((0,_execute.execute)(schema,documentAST,rootValue,contextValue,variableValues,operationName));
}
}).then(undefined,function(error){
return{errors:[error]};
});
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.BREAK=exports.visitWithTypeInfo=exports.visitInParallel=exports.visit=exports.Source=exports.print=exports.parseType=exports.parseValue=exports.parse=exports.TokenKind=exports.createLexer=exports.Kind=exports.getLocation=undefined;

var _location=__webpack_require__(47);

Object.defineProperty(exports,'getLocation',{
enumerable:true,
get:function get(){
return _location.getLocation;
}});


var _lexer=__webpack_require__(46);

Object.defineProperty(exports,'createLexer',{
enumerable:true,
get:function get(){
return _lexer.createLexer;
}});

Object.defineProperty(exports,'TokenKind',{
enumerable:true,
get:function get(){
return _lexer.TokenKind;
}});


var _parser=__webpack_require__(34);

Object.defineProperty(exports,'parse',{
enumerable:true,
get:function get(){
return _parser.parse;
}});

Object.defineProperty(exports,'parseValue',{
enumerable:true,
get:function get(){
return _parser.parseValue;
}});

Object.defineProperty(exports,'parseType',{
enumerable:true,
get:function get(){
return _parser.parseType;
}});


var _printer=__webpack_require__(9);

Object.defineProperty(exports,'print',{
enumerable:true,
get:function get(){
return _printer.print;
}});


var _source=__webpack_require__(48);

Object.defineProperty(exports,'Source',{
enumerable:true,
get:function get(){
return _source.Source;
}});


var _visitor=__webpack_require__(27);

Object.defineProperty(exports,'visit',{
enumerable:true,
get:function get(){
return _visitor.visit;
}});

Object.defineProperty(exports,'visitInParallel',{
enumerable:true,
get:function get(){
return _visitor.visitInParallel;
}});

Object.defineProperty(exports,'visitWithTypeInfo',{
enumerable:true,
get:function get(){
return _visitor.visitWithTypeInfo;
}});

Object.defineProperty(exports,'BREAK',{
enumerable:true,
get:function get(){
return _visitor.BREAK;
}});


var _kinds=__webpack_require__(6);

var Kind=_interopRequireWildcard(_kinds);

function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}

exports.Kind=Kind;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});


var _schema=__webpack_require__(14);

Object.defineProperty(exports,'GraphQLSchema',{
enumerable:true,
get:function get(){
return _schema.GraphQLSchema;
}});


var _definition=__webpack_require__(3);

Object.defineProperty(exports,'isType',{
enumerable:true,
get:function get(){
return _definition.isType;
}});

Object.defineProperty(exports,'isInputType',{
enumerable:true,
get:function get(){
return _definition.isInputType;
}});

Object.defineProperty(exports,'isOutputType',{
enumerable:true,
get:function get(){
return _definition.isOutputType;
}});

Object.defineProperty(exports,'isLeafType',{
enumerable:true,
get:function get(){
return _definition.isLeafType;
}});

Object.defineProperty(exports,'isCompositeType',{
enumerable:true,
get:function get(){
return _definition.isCompositeType;
}});

Object.defineProperty(exports,'isAbstractType',{
enumerable:true,
get:function get(){
return _definition.isAbstractType;
}});

Object.defineProperty(exports,'isNamedType',{
enumerable:true,
get:function get(){
return _definition.isNamedType;
}});

Object.defineProperty(exports,'assertType',{
enumerable:true,
get:function get(){
return _definition.assertType;
}});

Object.defineProperty(exports,'assertInputType',{
enumerable:true,
get:function get(){
return _definition.assertInputType;
}});

Object.defineProperty(exports,'assertOutputType',{
enumerable:true,
get:function get(){
return _definition.assertOutputType;
}});

Object.defineProperty(exports,'assertLeafType',{
enumerable:true,
get:function get(){
return _definition.assertLeafType;
}});

Object.defineProperty(exports,'assertCompositeType',{
enumerable:true,
get:function get(){
return _definition.assertCompositeType;
}});

Object.defineProperty(exports,'assertAbstractType',{
enumerable:true,
get:function get(){
return _definition.assertAbstractType;
}});

Object.defineProperty(exports,'assertNamedType',{
enumerable:true,
get:function get(){
return _definition.assertNamedType;
}});

Object.defineProperty(exports,'getNullableType',{
enumerable:true,
get:function get(){
return _definition.getNullableType;
}});

Object.defineProperty(exports,'getNamedType',{
enumerable:true,
get:function get(){
return _definition.getNamedType;
}});

Object.defineProperty(exports,'GraphQLScalarType',{
enumerable:true,
get:function get(){
return _definition.GraphQLScalarType;
}});

Object.defineProperty(exports,'GraphQLObjectType',{
enumerable:true,
get:function get(){
return _definition.GraphQLObjectType;
}});

Object.defineProperty(exports,'GraphQLInterfaceType',{
enumerable:true,
get:function get(){
return _definition.GraphQLInterfaceType;
}});

Object.defineProperty(exports,'GraphQLUnionType',{
enumerable:true,
get:function get(){
return _definition.GraphQLUnionType;
}});

Object.defineProperty(exports,'GraphQLEnumType',{
enumerable:true,
get:function get(){
return _definition.GraphQLEnumType;
}});

Object.defineProperty(exports,'GraphQLInputObjectType',{
enumerable:true,
get:function get(){
return _definition.GraphQLInputObjectType;
}});

Object.defineProperty(exports,'GraphQLList',{
enumerable:true,
get:function get(){
return _definition.GraphQLList;
}});

Object.defineProperty(exports,'GraphQLNonNull',{
enumerable:true,
get:function get(){
return _definition.GraphQLNonNull;
}});


var _directives=__webpack_require__(10);

Object.defineProperty(exports,'DirectiveLocation',{
enumerable:true,
get:function get(){
return _directives.DirectiveLocation;
}});

Object.defineProperty(exports,'GraphQLDirective',{
enumerable:true,
get:function get(){
return _directives.GraphQLDirective;
}});

Object.defineProperty(exports,'specifiedDirectives',{
enumerable:true,
get:function get(){
return _directives.specifiedDirectives;
}});

Object.defineProperty(exports,'GraphQLIncludeDirective',{
enumerable:true,
get:function get(){
return _directives.GraphQLIncludeDirective;
}});

Object.defineProperty(exports,'GraphQLSkipDirective',{
enumerable:true,
get:function get(){
return _directives.GraphQLSkipDirective;
}});

Object.defineProperty(exports,'GraphQLDeprecatedDirective',{
enumerable:true,
get:function get(){
return _directives.GraphQLDeprecatedDirective;
}});

Object.defineProperty(exports,'DEFAULT_DEPRECATION_REASON',{
enumerable:true,
get:function get(){
return _directives.DEFAULT_DEPRECATION_REASON;
}});


var _scalars=__webpack_require__(13);

Object.defineProperty(exports,'GraphQLInt',{
enumerable:true,
get:function get(){
return _scalars.GraphQLInt;
}});

Object.defineProperty(exports,'GraphQLFloat',{
enumerable:true,
get:function get(){
return _scalars.GraphQLFloat;
}});

Object.defineProperty(exports,'GraphQLString',{
enumerable:true,
get:function get(){
return _scalars.GraphQLString;
}});

Object.defineProperty(exports,'GraphQLBoolean',{
enumerable:true,
get:function get(){
return _scalars.GraphQLBoolean;
}});

Object.defineProperty(exports,'GraphQLID',{
enumerable:true,
get:function get(){
return _scalars.GraphQLID;
}});


var _introspection=__webpack_require__(11);

Object.defineProperty(exports,'TypeKind',{
enumerable:true,
get:function get(){
return _introspection.TypeKind;
}});

Object.defineProperty(exports,'__Schema',{
enumerable:true,
get:function get(){
return _introspection.__Schema;
}});

Object.defineProperty(exports,'__Directive',{
enumerable:true,
get:function get(){
return _introspection.__Directive;
}});

Object.defineProperty(exports,'__DirectiveLocation',{
enumerable:true,
get:function get(){
return _introspection.__DirectiveLocation;
}});

Object.defineProperty(exports,'__Type',{
enumerable:true,
get:function get(){
return _introspection.__Type;
}});

Object.defineProperty(exports,'__Field',{
enumerable:true,
get:function get(){
return _introspection.__Field;
}});

Object.defineProperty(exports,'__InputValue',{
enumerable:true,
get:function get(){
return _introspection.__InputValue;
}});

Object.defineProperty(exports,'__EnumValue',{
enumerable:true,
get:function get(){
return _introspection.__EnumValue;
}});

Object.defineProperty(exports,'__TypeKind',{
enumerable:true,
get:function get(){
return _introspection.__TypeKind;
}});

Object.defineProperty(exports,'SchemaMetaFieldDef',{
enumerable:true,
get:function get(){
return _introspection.SchemaMetaFieldDef;
}});

Object.defineProperty(exports,'TypeMetaFieldDef',{
enumerable:true,
get:function get(){
return _introspection.TypeMetaFieldDef;
}});

Object.defineProperty(exports,'TypeNameMetaFieldDef',{
enumerable:true,
get:function get(){
return _introspection.TypeNameMetaFieldDef;
}});

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.buildClientSchema=buildClientSchema;

var _invariant=__webpack_require__(7);

var _invariant2=_interopRequireDefault(_invariant);

var _keyMap=__webpack_require__(22);

var _keyMap2=_interopRequireDefault(_keyMap);

var _keyValMap=__webpack_require__(43);

var _keyValMap2=_interopRequireDefault(_keyValMap);

var _valueFromAST=__webpack_require__(28);

var _parser=__webpack_require__(34);

var _schema=__webpack_require__(14);

var _definition=__webpack_require__(3);

var _introspection=__webpack_require__(11);

var _scalars=__webpack_require__(13);

var _directives=__webpack_require__(10);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}










function buildClientSchema(introspection){


var schemaIntrospection=introspection.__schema;


var typeIntrospectionMap=(0,_keyMap2.default)(schemaIntrospection.types,function(type){
return type.name;
});




var typeDefCache={
String:_scalars.GraphQLString,
Int:_scalars.GraphQLInt,
Float:_scalars.GraphQLFloat,
Boolean:_scalars.GraphQLBoolean,
ID:_scalars.GraphQLID,
__Schema:_introspection.__Schema,
__Directive:_introspection.__Directive,
__DirectiveLocation:_introspection.__DirectiveLocation,
__Type:_introspection.__Type,
__Field:_introspection.__Field,
__InputValue:_introspection.__InputValue,
__EnumValue:_introspection.__EnumValue,
__TypeKind:_introspection.__TypeKind};




function getType(typeRef){
if(typeRef.kind===_introspection.TypeKind.LIST){
var itemRef=typeRef.ofType;
if(!itemRef){
throw new Error('Decorated type deeper than introspection query.');
}
return new _definition.GraphQLList(getType(itemRef));
}
if(typeRef.kind===_introspection.TypeKind.NON_NULL){
var nullableRef=typeRef.ofType;
if(!nullableRef){
throw new Error('Decorated type deeper than introspection query.');
}
var nullableType=getType(nullableRef);
(0,_invariant2.default)(!(nullableType instanceof _definition.GraphQLNonNull),'No nesting nonnull.');
return new _definition.GraphQLNonNull(nullableType);
}
return getNamedType(typeRef.name);
}

function getNamedType(typeName){
if(typeDefCache[typeName]){
return typeDefCache[typeName];
}
var typeIntrospection=typeIntrospectionMap[typeName];
if(!typeIntrospection){
throw new Error('Invalid or incomplete schema, unknown type: '+typeName+'. Ensure '+'that a full introspection query is used in order to build a '+'client schema.');
}
var typeDef=buildType(typeIntrospection);
typeDefCache[typeName]=typeDef;
return typeDef;
}

function getInputType(typeRef){
var type=getType(typeRef);
(0,_invariant2.default)((0,_definition.isInputType)(type),'Introspection must provide input type for arguments.');
return type;
}

function getOutputType(typeRef){
var type=getType(typeRef);
(0,_invariant2.default)((0,_definition.isOutputType)(type),'Introspection must provide output type for fields.');
return type;
}

function getObjectType(typeRef){
var type=getType(typeRef);
(0,_invariant2.default)(type instanceof _definition.GraphQLObjectType,'Introspection must provide object type for possibleTypes.');
return type;
}

function getInterfaceType(typeRef){
var type=getType(typeRef);
(0,_invariant2.default)(type instanceof _definition.GraphQLInterfaceType,'Introspection must provide interface type for interfaces.');
return type;
}



function buildType(type){
switch(type.kind){
case _introspection.TypeKind.SCALAR:
return buildScalarDef(type);
case _introspection.TypeKind.OBJECT:
return buildObjectDef(type);
case _introspection.TypeKind.INTERFACE:
return buildInterfaceDef(type);
case _introspection.TypeKind.UNION:
return buildUnionDef(type);
case _introspection.TypeKind.ENUM:
return buildEnumDef(type);
case _introspection.TypeKind.INPUT_OBJECT:
return buildInputObjectDef(type);
default:
throw new Error('Invalid or incomplete schema, unknown kind: '+type.kind+'. Ensure '+'that a full introspection query is used in order to build a '+'client schema.');}

}

function buildScalarDef(scalarIntrospection){
return new _definition.GraphQLScalarType({
name:scalarIntrospection.name,
description:scalarIntrospection.description,
serialize:function serialize(id){
return id;
},




parseValue:function parseValue(){
return false;
},
parseLiteral:function parseLiteral(){
return false;
}});

}

function buildObjectDef(objectIntrospection){
return new _definition.GraphQLObjectType({
name:objectIntrospection.name,
description:objectIntrospection.description,
interfaces:objectIntrospection.interfaces.map(getInterfaceType),
fields:function fields(){
return buildFieldDefMap(objectIntrospection);
}});

}

function buildInterfaceDef(interfaceIntrospection){
return new _definition.GraphQLInterfaceType({
name:interfaceIntrospection.name,
description:interfaceIntrospection.description,
fields:function fields(){
return buildFieldDefMap(interfaceIntrospection);
},
resolveType:cannotExecuteClientSchema});

}

function buildUnionDef(unionIntrospection){
return new _definition.GraphQLUnionType({
name:unionIntrospection.name,
description:unionIntrospection.description,
types:unionIntrospection.possibleTypes.map(getObjectType),
resolveType:cannotExecuteClientSchema});

}

function buildEnumDef(enumIntrospection){
return new _definition.GraphQLEnumType({
name:enumIntrospection.name,
description:enumIntrospection.description,
values:(0,_keyValMap2.default)(enumIntrospection.enumValues,function(valueIntrospection){
return valueIntrospection.name;
},function(valueIntrospection){
return{
description:valueIntrospection.description,
deprecationReason:valueIntrospection.deprecationReason};

})});

}

function buildInputObjectDef(inputObjectIntrospection){
return new _definition.GraphQLInputObjectType({
name:inputObjectIntrospection.name,
description:inputObjectIntrospection.description,
fields:function fields(){
return buildInputValueDefMap(inputObjectIntrospection.inputFields);
}});

}

function buildFieldDefMap(typeIntrospection){
return(0,_keyValMap2.default)(typeIntrospection.fields,function(fieldIntrospection){
return fieldIntrospection.name;
},function(fieldIntrospection){
return{
description:fieldIntrospection.description,
deprecationReason:fieldIntrospection.deprecationReason,
type:getOutputType(fieldIntrospection.type),
args:buildInputValueDefMap(fieldIntrospection.args)};

});
}

function buildInputValueDefMap(inputValueIntrospections){
return(0,_keyValMap2.default)(inputValueIntrospections,function(inputValue){
return inputValue.name;
},buildInputValue);
}

function buildInputValue(inputValueIntrospection){
var type=getInputType(inputValueIntrospection.type);
var defaultValue=inputValueIntrospection.defaultValue?(0,_valueFromAST.valueFromAST)((0,_parser.parseValue)(inputValueIntrospection.defaultValue),type):undefined;
return{
name:inputValueIntrospection.name,
description:inputValueIntrospection.description,
type:type,
defaultValue:defaultValue};

}

function buildDirective(directiveIntrospection){


var locations=directiveIntrospection.locations?directiveIntrospection.locations.slice():[].concat(!directiveIntrospection.onField?[]:[_directives.DirectiveLocation.FIELD],!directiveIntrospection.onOperation?[]:[_directives.DirectiveLocation.QUERY,_directives.DirectiveLocation.MUTATION,_directives.DirectiveLocation.SUBSCRIPTION],!directiveIntrospection.onFragment?[]:[_directives.DirectiveLocation.FRAGMENT_DEFINITION,_directives.DirectiveLocation.FRAGMENT_SPREAD,_directives.DirectiveLocation.INLINE_FRAGMENT]);
return new _directives.GraphQLDirective({
name:directiveIntrospection.name,
description:directiveIntrospection.description,
locations:locations,
args:buildInputValueDefMap(directiveIntrospection.args)});

}



var types=schemaIntrospection.types.map(function(typeIntrospection){
return getNamedType(typeIntrospection.name);
});


var queryType=getObjectType(schemaIntrospection.queryType);

var mutationType=schemaIntrospection.mutationType?getObjectType(schemaIntrospection.mutationType):null;

var subscriptionType=schemaIntrospection.subscriptionType?getObjectType(schemaIntrospection.subscriptionType):null;



var directives=schemaIntrospection.directives?schemaIntrospection.directives.map(buildDirective):[];


return new _schema.GraphQLSchema({
query:queryType,
mutation:mutationType,
subscription:subscriptionType,
types:types,
directives:directives});

}









function cannotExecuteClientSchema(){
throw new Error('Client Schema cannot use Interface or Union types for execution.');
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.concatAST=concatAST;







function concatAST(asts){
var batchDefinitions=[];
for(var i=0;i<asts.length;i++){
var definitions=asts[i].definitions;
for(var j=0;j<definitions.length;j++){
batchDefinitions.push(definitions[j]);
}
}
return{
kind:'Document',
definitions:batchDefinitions};

}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.extendSchema=extendSchema;

var _invariant=__webpack_require__(7);

var _invariant2=_interopRequireDefault(_invariant);

var _keyMap=__webpack_require__(22);

var _keyMap2=_interopRequireDefault(_keyMap);

var _keyValMap=__webpack_require__(43);

var _keyValMap2=_interopRequireDefault(_keyValMap);

var _buildASTSchema=__webpack_require__(69);

var _valueFromAST=__webpack_require__(28);

var _GraphQLError=__webpack_require__(25);

var _schema=__webpack_require__(14);

var _definition=__webpack_require__(3);

var _directives=__webpack_require__(10);

var _introspection=__webpack_require__(11);

var _scalars=__webpack_require__(13);

var _kinds=__webpack_require__(6);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}























function extendSchema(schema,documentAST){
(0,_invariant2.default)(schema instanceof _schema.GraphQLSchema,'Must provide valid GraphQLSchema');

(0,_invariant2.default)(documentAST&&documentAST.kind===_kinds.DOCUMENT,'Must provide valid Document AST');


var typeDefinitionMap={};
var typeExtensionsMap={};



var directiveDefinitions=[];

for(var i=0;i<documentAST.definitions.length;i++){
var def=documentAST.definitions[i];
switch(def.kind){
case _kinds.OBJECT_TYPE_DEFINITION:
case _kinds.INTERFACE_TYPE_DEFINITION:
case _kinds.ENUM_TYPE_DEFINITION:
case _kinds.UNION_TYPE_DEFINITION:
case _kinds.SCALAR_TYPE_DEFINITION:
case _kinds.INPUT_OBJECT_TYPE_DEFINITION:


var typeName=def.name.value;
if(schema.getType(typeName)){
throw new _GraphQLError.GraphQLError('Type "'+typeName+'" already exists in the schema. It cannot also '+'be defined in this type definition.',[def]);
}
typeDefinitionMap[typeName]=def;
break;
case _kinds.TYPE_EXTENSION_DEFINITION:


var extendedTypeName=def.definition.name.value;
var existingType=schema.getType(extendedTypeName);
if(!existingType){
throw new _GraphQLError.GraphQLError('Cannot extend type "'+extendedTypeName+'" because it does not '+'exist in the existing schema.',[def.definition]);
}
if(!(existingType instanceof _definition.GraphQLObjectType)){
throw new _GraphQLError.GraphQLError('Cannot extend non-object type "'+extendedTypeName+'".',[def.definition]);
}
var extensions=typeExtensionsMap[extendedTypeName];
if(extensions){
extensions.push(def);
}else{
extensions=[def];
}
typeExtensionsMap[extendedTypeName]=extensions;
break;
case _kinds.DIRECTIVE_DEFINITION:
var directiveName=def.name.value;
var existingDirective=schema.getDirective(directiveName);
if(existingDirective){
throw new _GraphQLError.GraphQLError('Directive "'+directiveName+'" already exists in the schema. It '+'cannot be redefined.',[def]);
}
directiveDefinitions.push(def);
break;}

}



if(Object.keys(typeExtensionsMap).length===0&&Object.keys(typeDefinitionMap).length===0&&directiveDefinitions.length===0){
return schema;
}





var typeDefCache={
String:_scalars.GraphQLString,
Int:_scalars.GraphQLInt,
Float:_scalars.GraphQLFloat,
Boolean:_scalars.GraphQLBoolean,
ID:_scalars.GraphQLID,
__Schema:_introspection.__Schema,
__Directive:_introspection.__Directive,
__DirectiveLocation:_introspection.__DirectiveLocation,
__Type:_introspection.__Type,
__Field:_introspection.__Field,
__InputValue:_introspection.__InputValue,
__EnumValue:_introspection.__EnumValue,
__TypeKind:_introspection.__TypeKind};



var queryType=getTypeFromDef(schema.getQueryType());

var existingMutationType=schema.getMutationType();
var mutationType=existingMutationType?getTypeFromDef(existingMutationType):null;

var existingSubscriptionType=schema.getSubscriptionType();
var subscriptionType=existingSubscriptionType?getTypeFromDef(existingSubscriptionType):null;



var typeMap=schema.getTypeMap();
var types=Object.keys(typeMap).map(function(typeName){
return getTypeFromDef(typeMap[typeName]);
});


Object.keys(typeDefinitionMap).forEach(function(typeName){
types.push(getTypeFromAST(typeDefinitionMap[typeName]));
});


return new _schema.GraphQLSchema({
query:queryType,
mutation:mutationType,
subscription:subscriptionType,
types:types,
directives:getMergedDirectives()});





function getMergedDirectives(){
var existingDirectives=schema.getDirectives();
(0,_invariant2.default)(existingDirectives,'schema must have default directives');

var newDirectives=directiveDefinitions.map(function(directiveNode){
return getDirective(directiveNode);
});
return existingDirectives.concat(newDirectives);
}

function getTypeFromDef(typeDef){
var type=_getNamedType(typeDef.name);
(0,_invariant2.default)(type,'Missing type from schema');
return type;
}

function getTypeFromAST(node){
var type=_getNamedType(node.name.value);
if(!type){
throw new _GraphQLError.GraphQLError('Unknown type: "'+node.name.value+'". Ensure that this type exists '+'either in the original schema, or is added in a type definition.',[node]);
}
return type;
}

function getObjectTypeFromAST(node){
var type=getTypeFromAST(node);
(0,_invariant2.default)(type instanceof _definition.GraphQLObjectType,'Must be Object type.');
return type;
}

function getInterfaceTypeFromAST(node){
var type=getTypeFromAST(node);
(0,_invariant2.default)(type instanceof _definition.GraphQLInterfaceType,'Must be Interface type.');
return type;
}

function getInputTypeFromAST(node){
var type=getTypeFromAST(node);
(0,_invariant2.default)((0,_definition.isInputType)(type),'Must be Input type.');
return type;
}

function getOutputTypeFromAST(node){
var type=getTypeFromAST(node);
(0,_invariant2.default)((0,_definition.isOutputType)(type),'Must be Output type.');
return type;
}



function _getNamedType(typeName){
var cachedTypeDef=typeDefCache[typeName];
if(cachedTypeDef){
return cachedTypeDef;
}

var existingType=schema.getType(typeName);
if(existingType){
var typeDef=extendType(existingType);
typeDefCache[typeName]=typeDef;
return typeDef;
}

var typeNode=typeDefinitionMap[typeName];
if(typeNode){
var _typeDef=buildType(typeNode);
typeDefCache[typeName]=_typeDef;
return _typeDef;
}
}



function extendType(type){
if(type instanceof _definition.GraphQLObjectType){
return extendObjectType(type);
}
if(type instanceof _definition.GraphQLInterfaceType){
return extendInterfaceType(type);
}
if(type instanceof _definition.GraphQLUnionType){
return extendUnionType(type);
}
return type;
}

function extendObjectType(type){
return new _definition.GraphQLObjectType({
name:type.name,
description:type.description,
interfaces:function interfaces(){
return extendImplementedInterfaces(type);
},
fields:function fields(){
return extendFieldMap(type);
},
isTypeOf:type.isTypeOf});

}

function extendInterfaceType(type){
return new _definition.GraphQLInterfaceType({
name:type.name,
description:type.description,
fields:function fields(){
return extendFieldMap(type);
},
resolveType:type.resolveType});

}

function extendUnionType(type){
return new _definition.GraphQLUnionType({
name:type.name,
description:type.description,
types:type.getTypes().map(getTypeFromDef),
resolveType:type.resolveType});

}

function extendImplementedInterfaces(type){
var interfaces=type.getInterfaces().map(getTypeFromDef);


var extensions=typeExtensionsMap[type.name];
if(extensions){
extensions.forEach(function(extension){
extension.definition.interfaces.forEach(function(namedType){
var interfaceName=namedType.name.value;
if(interfaces.some(function(def){
return def.name===interfaceName;
})){
throw new _GraphQLError.GraphQLError('Type "'+type.name+'" already implements "'+interfaceName+'". '+'It cannot also be implemented in this type extension.',[namedType]);
}
interfaces.push(getInterfaceTypeFromAST(namedType));
});
});
}

return interfaces;
}

function extendFieldMap(type){
var newFieldMap={};
var oldFieldMap=type.getFields();
Object.keys(oldFieldMap).forEach(function(fieldName){
var field=oldFieldMap[fieldName];
newFieldMap[fieldName]={
description:field.description,
deprecationReason:field.deprecationReason,
type:extendFieldType(field.type),
args:(0,_keyMap2.default)(field.args,function(arg){
return arg.name;
}),
resolve:field.resolve};

});


var extensions=typeExtensionsMap[type.name];
if(extensions){
extensions.forEach(function(extension){
extension.definition.fields.forEach(function(field){
var fieldName=field.name.value;
if(oldFieldMap[fieldName]){
throw new _GraphQLError.GraphQLError('Field "'+type.name+'.'+fieldName+'" already exists in the '+'schema. It cannot also be defined in this type extension.',[field]);
}
newFieldMap[fieldName]={
description:(0,_buildASTSchema.getDescription)(field),
type:buildOutputFieldType(field.type),
args:buildInputValues(field.arguments)};

});
});
}

return newFieldMap;
}

function extendFieldType(typeDef){
if(typeDef instanceof _definition.GraphQLList){
return new _definition.GraphQLList(extendFieldType(typeDef.ofType));
}
if(typeDef instanceof _definition.GraphQLNonNull){
return new _definition.GraphQLNonNull(extendFieldType(typeDef.ofType));
}
return getTypeFromDef(typeDef);
}

function buildType(typeNode){
switch(typeNode.kind){
case _kinds.OBJECT_TYPE_DEFINITION:
return buildObjectType(typeNode);
case _kinds.INTERFACE_TYPE_DEFINITION:
return buildInterfaceType(typeNode);
case _kinds.UNION_TYPE_DEFINITION:
return buildUnionType(typeNode);
case _kinds.SCALAR_TYPE_DEFINITION:
return buildScalarType(typeNode);
case _kinds.ENUM_TYPE_DEFINITION:
return buildEnumType(typeNode);
case _kinds.INPUT_OBJECT_TYPE_DEFINITION:
return buildInputObjectType(typeNode);}

throw new TypeError('Unknown type kind '+typeNode.kind);
}

function buildObjectType(typeNode){
return new _definition.GraphQLObjectType({
name:typeNode.name.value,
description:(0,_buildASTSchema.getDescription)(typeNode),
interfaces:function interfaces(){
return buildImplementedInterfaces(typeNode);
},
fields:function fields(){
return buildFieldMap(typeNode);
}});

}

function buildInterfaceType(typeNode){
return new _definition.GraphQLInterfaceType({
name:typeNode.name.value,
description:(0,_buildASTSchema.getDescription)(typeNode),
fields:function fields(){
return buildFieldMap(typeNode);
},
resolveType:cannotExecuteExtendedSchema});

}

function buildUnionType(typeNode){
return new _definition.GraphQLUnionType({
name:typeNode.name.value,
description:(0,_buildASTSchema.getDescription)(typeNode),
types:typeNode.types.map(getObjectTypeFromAST),
resolveType:cannotExecuteExtendedSchema});

}

function buildScalarType(typeNode){
return new _definition.GraphQLScalarType({
name:typeNode.name.value,
description:(0,_buildASTSchema.getDescription)(typeNode),
serialize:function serialize(id){
return id;
},




parseValue:function parseValue(){
return false;
},
parseLiteral:function parseLiteral(){
return false;
}});

}

function buildEnumType(typeNode){
return new _definition.GraphQLEnumType({
name:typeNode.name.value,
description:(0,_buildASTSchema.getDescription)(typeNode),
values:(0,_keyValMap2.default)(typeNode.values,function(v){
return v.name.value;
},function(){
return{};
})});

}

function buildInputObjectType(typeNode){
return new _definition.GraphQLInputObjectType({
name:typeNode.name.value,
description:(0,_buildASTSchema.getDescription)(typeNode),
fields:function fields(){
return buildInputValues(typeNode.fields);
}});

}

function getDirective(directiveNode){
return new _directives.GraphQLDirective({
name:directiveNode.name.value,
locations:directiveNode.locations.map(function(node){
return node.value;
}),
args:directiveNode.arguments&&buildInputValues(directiveNode.arguments)});

}

function buildImplementedInterfaces(typeNode){
return typeNode.interfaces&&typeNode.interfaces.map(getInterfaceTypeFromAST);
}

function buildFieldMap(typeNode){
return(0,_keyValMap2.default)(typeNode.fields,function(field){
return field.name.value;
},function(field){
return{
type:buildOutputFieldType(field.type),
description:(0,_buildASTSchema.getDescription)(field),
args:buildInputValues(field.arguments)};

});
}

function buildInputValues(values){
return(0,_keyValMap2.default)(values,function(value){
return value.name.value;
},function(value){
var type=buildInputFieldType(value.type);
return{
type:type,
description:(0,_buildASTSchema.getDescription)(value),
defaultValue:(0,_valueFromAST.valueFromAST)(value.defaultValue,type)};

});
}

function buildInputFieldType(typeNode){
if(typeNode.kind===_kinds.LIST_TYPE){
return new _definition.GraphQLList(buildInputFieldType(typeNode.type));
}
if(typeNode.kind===_kinds.NON_NULL_TYPE){
var nullableType=buildInputFieldType(typeNode.type);
(0,_invariant2.default)(!(nullableType instanceof _definition.GraphQLNonNull),'Must be nullable');
return new _definition.GraphQLNonNull(nullableType);
}
return getInputTypeFromAST(typeNode);
}

function buildOutputFieldType(typeNode){
if(typeNode.kind===_kinds.LIST_TYPE){
return new _definition.GraphQLList(buildOutputFieldType(typeNode.type));
}
if(typeNode.kind===_kinds.NON_NULL_TYPE){
var nullableType=buildOutputFieldType(typeNode.type);
(0,_invariant2.default)(!(nullableType instanceof _definition.GraphQLNonNull),'Must be nullable');
return new _definition.GraphQLNonNull(nullableType);
}
return getOutputTypeFromAST(typeNode);
}
}

function cannotExecuteExtendedSchema(){
throw new Error('Extended Schema cannot use Interface or Union types for execution.');
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.BreakingChangeType=undefined;
exports.findBreakingChanges=findBreakingChanges;
exports.findRemovedTypes=findRemovedTypes;
exports.findTypesThatChangedKind=findTypesThatChangedKind;
exports.findFieldsThatChangedType=findFieldsThatChangedType;
exports.findTypesRemovedFromUnions=findTypesRemovedFromUnions;
exports.findValuesRemovedFromEnums=findValuesRemovedFromEnums;

var _definition=__webpack_require__(3);

var _schema=__webpack_require__(14);










var BreakingChangeType=exports.BreakingChangeType={
FIELD_CHANGED_KIND:'FIELD_CHANGED_KIND',
FIELD_REMOVED:'FIELD_REMOVED',
TYPE_CHANGED_KIND:'TYPE_CHANGED_KIND',
TYPE_REMOVED:'TYPE_REMOVED',
TYPE_REMOVED_FROM_UNION:'TYPE_REMOVED_FROM_UNION',
VALUE_REMOVED_FROM_ENUM:'VALUE_REMOVED_FROM_ENUM'};






function findBreakingChanges(oldSchema,newSchema){
return[].concat(findRemovedTypes(oldSchema,newSchema),findTypesThatChangedKind(oldSchema,newSchema),findFieldsThatChangedType(oldSchema,newSchema),findTypesRemovedFromUnions(oldSchema,newSchema),findValuesRemovedFromEnums(oldSchema,newSchema));
}





function findRemovedTypes(oldSchema,newSchema){
var oldTypeMap=oldSchema.getTypeMap();
var newTypeMap=newSchema.getTypeMap();

var breakingChanges=[];
Object.keys(oldTypeMap).forEach(function(typeName){
if(!newTypeMap[typeName]){
breakingChanges.push({
type:BreakingChangeType.TYPE_REMOVED,
description:typeName+' was removed.'});

}
});
return breakingChanges;
}





function findTypesThatChangedKind(oldSchema,newSchema){
var oldTypeMap=oldSchema.getTypeMap();
var newTypeMap=newSchema.getTypeMap();

var breakingChanges=[];
Object.keys(oldTypeMap).forEach(function(typeName){
if(!newTypeMap[typeName]){
return;
}
var oldType=oldTypeMap[typeName];
var newType=newTypeMap[typeName];
if(!(oldType instanceof newType.constructor)){
breakingChanges.push({
type:BreakingChangeType.TYPE_CHANGED_KIND,
description:typeName+' changed from '+(typeKindName(oldType)+' to '+typeKindName(newType)+'.')});

}
});
return breakingChanges;
}

function typeKindName(type){
if(type instanceof _definition.GraphQLScalarType){
return'a Scalar type';
}
if(type instanceof _definition.GraphQLObjectType){
return'an Object type';
}
if(type instanceof _definition.GraphQLInterfaceType){
return'an Interface type';
}
if(type instanceof _definition.GraphQLUnionType){
return'a Union type';
}
if(type instanceof _definition.GraphQLEnumType){
return'an Enum type';
}
if(type instanceof _definition.GraphQLInputObjectType){
return'an Input type';
}
throw new TypeError('Unknown type '+type.constructor.name);
}






function findFieldsThatChangedType(oldSchema,newSchema){
var oldTypeMap=oldSchema.getTypeMap();
var newTypeMap=newSchema.getTypeMap();

var breakingFieldChanges=[];
Object.keys(oldTypeMap).forEach(function(typeName){
var oldType=oldTypeMap[typeName];
var newType=newTypeMap[typeName];
if(!(oldType instanceof _definition.GraphQLObjectType||oldType instanceof _definition.GraphQLInterfaceType||oldType instanceof _definition.GraphQLInputObjectType)||!(newType instanceof oldType.constructor)){
return;
}

var oldTypeFieldsDef=oldType.getFields();
var newTypeFieldsDef=newType.getFields();
Object.keys(oldTypeFieldsDef).forEach(function(fieldName){

if(!(fieldName in newTypeFieldsDef)){
breakingFieldChanges.push({
type:BreakingChangeType.FIELD_REMOVED,
description:typeName+'.'+fieldName+' was removed.'});

}else{

var oldFieldType=(0,_definition.getNamedType)(oldTypeFieldsDef[fieldName].type);
var newFieldType=(0,_definition.getNamedType)(newTypeFieldsDef[fieldName].type);
if(oldFieldType&&newFieldType&&oldFieldType.name!==newFieldType.name){
breakingFieldChanges.push({
type:BreakingChangeType.FIELD_CHANGED_KIND,
description:typeName+'.'+fieldName+' changed type from '+(oldFieldType.name+' to '+newFieldType.name+'.')});

}
}
});
});
return breakingFieldChanges;
}





function findTypesRemovedFromUnions(oldSchema,newSchema){
var oldTypeMap=oldSchema.getTypeMap();
var newTypeMap=newSchema.getTypeMap();

var typesRemovedFromUnion=[];
Object.keys(oldTypeMap).forEach(function(typeName){
var oldType=oldTypeMap[typeName];
var newType=newTypeMap[typeName];
if(!(oldType instanceof _definition.GraphQLUnionType)||!(newType instanceof _definition.GraphQLUnionType)){
return;
}
var typeNamesInNewUnion=Object.create(null);
newType.getTypes().forEach(function(type){
typeNamesInNewUnion[type.name]=true;
});
oldType.getTypes().forEach(function(type){
if(!typeNamesInNewUnion[type.name]){
typesRemovedFromUnion.push({
type:BreakingChangeType.TYPE_REMOVED_FROM_UNION,
description:type.name+' was removed from union type '+typeName+'.'});

}
});
});
return typesRemovedFromUnion;
}





function findValuesRemovedFromEnums(oldSchema,newSchema){
var oldTypeMap=oldSchema.getTypeMap();
var newTypeMap=newSchema.getTypeMap();

var valuesRemovedFromEnums=[];
Object.keys(oldTypeMap).forEach(function(typeName){
var oldType=oldTypeMap[typeName];
var newType=newTypeMap[typeName];
if(!(oldType instanceof _definition.GraphQLEnumType)||!(newType instanceof _definition.GraphQLEnumType)){
return;
}
var valuesInNewEnum=Object.create(null);
newType.getValues().forEach(function(value){
valuesInNewEnum[value.name]=true;
});
oldType.getValues().forEach(function(value){
if(!valuesInNewEnum[value.name]){
valuesRemovedFromEnums.push({
type:BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
description:value.name+' was removed from enum type '+typeName+'.'});

}
});
});
return valuesRemovedFromEnums;
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.findDeprecatedUsages=findDeprecatedUsages;

var _GraphQLError=__webpack_require__(25);

var _visitor=__webpack_require__(27);

var _definition=__webpack_require__(3);

var _schema=__webpack_require__(14);

var _TypeInfo=__webpack_require__(49);






function findDeprecatedUsages(schema,ast){
var errors=[];
var typeInfo=new _TypeInfo.TypeInfo(schema);

(0,_visitor.visit)(ast,(0,_visitor.visitWithTypeInfo)(typeInfo,{
Field:function Field(node){
var fieldDef=typeInfo.getFieldDef();
if(fieldDef&&fieldDef.isDeprecated){
var parentType=typeInfo.getParentType();
if(parentType){
var reason=fieldDef.deprecationReason;
errors.push(new _GraphQLError.GraphQLError('The field '+parentType.name+'.'+fieldDef.name+' is deprecated.'+(reason?' '+reason:''),[node]));
}
}
},
EnumValue:function EnumValue(node){
var enumVal=typeInfo.getEnumValue();
if(enumVal&&enumVal.isDeprecated){
var type=(0,_definition.getNamedType)(typeInfo.getInputType());
if(type){
var reason=enumVal.deprecationReason;
errors.push(new _GraphQLError.GraphQLError('The enum value '+type.name+'.'+enumVal.name+' is deprecated.'+(reason?' '+reason:''),[node]));
}
}
}}));


return errors;
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.getOperationAST=getOperationAST;

var _kinds=__webpack_require__(6);






function getOperationAST(documentAST,operationName){
var operation=null;
for(var i=0;i<documentAST.definitions.length;i++){
var definition=documentAST.definitions[i];
if(definition.kind===_kinds.OPERATION_DEFINITION){
if(!operationName){



if(operation){
return null;
}
operation=definition;
}else if(definition.name&&definition.name.value===operationName){
return definition;
}
}
}
return operation;
}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});


var _introspectionQuery=__webpack_require__(135);

Object.defineProperty(exports,'introspectionQuery',{
enumerable:true,
get:function get(){
return _introspectionQuery.introspectionQuery;
}});


var _getOperationAST=__webpack_require__(133);

Object.defineProperty(exports,'getOperationAST',{
enumerable:true,
get:function get(){
return _getOperationAST.getOperationAST;
}});


var _buildClientSchema=__webpack_require__(128);

Object.defineProperty(exports,'buildClientSchema',{
enumerable:true,
get:function get(){
return _buildClientSchema.buildClientSchema;
}});


var _buildASTSchema=__webpack_require__(69);

Object.defineProperty(exports,'buildASTSchema',{
enumerable:true,
get:function get(){
return _buildASTSchema.buildASTSchema;
}});

Object.defineProperty(exports,'buildSchema',{
enumerable:true,
get:function get(){
return _buildASTSchema.buildSchema;
}});


var _extendSchema=__webpack_require__(130);

Object.defineProperty(exports,'extendSchema',{
enumerable:true,
get:function get(){
return _extendSchema.extendSchema;
}});


var _schemaPrinter=__webpack_require__(136);

Object.defineProperty(exports,'printSchema',{
enumerable:true,
get:function get(){
return _schemaPrinter.printSchema;
}});

Object.defineProperty(exports,'printType',{
enumerable:true,
get:function get(){
return _schemaPrinter.printType;
}});

Object.defineProperty(exports,'printIntrospectionSchema',{
enumerable:true,
get:function get(){
return _schemaPrinter.printIntrospectionSchema;
}});


var _typeFromAST=__webpack_require__(15);

Object.defineProperty(exports,'typeFromAST',{
enumerable:true,
get:function get(){
return _typeFromAST.typeFromAST;
}});


var _valueFromAST=__webpack_require__(28);

Object.defineProperty(exports,'valueFromAST',{
enumerable:true,
get:function get(){
return _valueFromAST.valueFromAST;
}});


var _astFromValue=__webpack_require__(51);

Object.defineProperty(exports,'astFromValue',{
enumerable:true,
get:function get(){
return _astFromValue.astFromValue;
}});


var _TypeInfo=__webpack_require__(49);

Object.defineProperty(exports,'TypeInfo',{
enumerable:true,
get:function get(){
return _TypeInfo.TypeInfo;
}});


var _isValidJSValue=__webpack_require__(70);

Object.defineProperty(exports,'isValidJSValue',{
enumerable:true,
get:function get(){
return _isValidJSValue.isValidJSValue;
}});


var _isValidLiteralValue=__webpack_require__(35);

Object.defineProperty(exports,'isValidLiteralValue',{
enumerable:true,
get:function get(){
return _isValidLiteralValue.isValidLiteralValue;
}});


var _concatAST=__webpack_require__(129);

Object.defineProperty(exports,'concatAST',{
enumerable:true,
get:function get(){
return _concatAST.concatAST;
}});


var _separateOperations=__webpack_require__(137);

Object.defineProperty(exports,'separateOperations',{
enumerable:true,
get:function get(){
return _separateOperations.separateOperations;
}});


var _typeComparators=__webpack_require__(36);

Object.defineProperty(exports,'isEqualType',{
enumerable:true,
get:function get(){
return _typeComparators.isEqualType;
}});

Object.defineProperty(exports,'isTypeSubTypeOf',{
enumerable:true,
get:function get(){
return _typeComparators.isTypeSubTypeOf;
}});

Object.defineProperty(exports,'doTypesOverlap',{
enumerable:true,
get:function get(){
return _typeComparators.doTypesOverlap;
}});


var _assertValidName=__webpack_require__(50);

Object.defineProperty(exports,'assertValidName',{
enumerable:true,
get:function get(){
return _assertValidName.assertValidName;
}});


var _findBreakingChanges=__webpack_require__(131);

Object.defineProperty(exports,'findBreakingChanges',{
enumerable:true,
get:function get(){
return _findBreakingChanges.findBreakingChanges;
}});


var _findDeprecatedUsages=__webpack_require__(132);

Object.defineProperty(exports,'findDeprecatedUsages',{
enumerable:true,
get:function get(){
return _findDeprecatedUsages.findDeprecatedUsages;
}});

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

var introspectionQuery=exports.introspectionQuery='\n  query IntrospectionQuery {\n    __schema {\n      queryType { name }\n      mutationType { name }\n      subscriptionType { name }\n      types {\n        ...FullType\n      }\n      directives {\n        name\n        description\n        locations\n        args {\n          ...InputValue\n        }\n      }\n    }\n  }\n\n  fragment FullType on __Type {\n    kind\n    name\n    description\n    fields(includeDeprecated: true) {\n      name\n      description\n      args {\n        ...InputValue\n      }\n      type {\n        ...TypeRef\n      }\n      isDeprecated\n      deprecationReason\n    }\n    inputFields {\n      ...InputValue\n    }\n    interfaces {\n      ...TypeRef\n    }\n    enumValues(includeDeprecated: true) {\n      name\n      description\n      isDeprecated\n      deprecationReason\n    }\n    possibleTypes {\n      ...TypeRef\n    }\n  }\n\n  fragment InputValue on __InputValue {\n    name\n    description\n    type { ...TypeRef }\n    defaultValue\n  }\n\n  fragment TypeRef on __Type {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n';

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.printSchema=printSchema;
exports.printIntrospectionSchema=printIntrospectionSchema;
exports.printType=printType;

var _invariant=__webpack_require__(7);

var _invariant2=_interopRequireDefault(_invariant);

var _isNullish=__webpack_require__(12);

var _isNullish2=_interopRequireDefault(_isNullish);

var _isInvalid=__webpack_require__(26);

var _isInvalid2=_interopRequireDefault(_isInvalid);

var _astFromValue=__webpack_require__(51);

var _printer=__webpack_require__(9);

var _definition=__webpack_require__(3);

var _scalars=__webpack_require__(13);

var _directives=__webpack_require__(10);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}










function printSchema(schema){
return printFilteredSchema(schema,function(n){
return!isSpecDirective(n);
},isDefinedType);
}

function printIntrospectionSchema(schema){
return printFilteredSchema(schema,isSpecDirective,isIntrospectionType);
}

function isSpecDirective(directiveName){
return directiveName==='skip'||directiveName==='include'||directiveName==='deprecated';
}

function isDefinedType(typename){
return!isIntrospectionType(typename)&&!isBuiltInScalar(typename);
}

function isIntrospectionType(typename){
return typename.indexOf('__')===0;
}

function isBuiltInScalar(typename){
return typename==='String'||typename==='Boolean'||typename==='Int'||typename==='Float'||typename==='ID';
}

function printFilteredSchema(schema,directiveFilter,typeFilter){
var directives=schema.getDirectives().filter(function(directive){
return directiveFilter(directive.name);
});
var typeMap=schema.getTypeMap();
var types=Object.keys(typeMap).filter(typeFilter).sort(function(name1,name2){
return name1.localeCompare(name2);
}).map(function(typeName){
return typeMap[typeName];
});

return[printSchemaDefinition(schema)].concat(directives.map(printDirective),types.map(printType)).filter(Boolean).join('\n\n')+'\n';
}

function printSchemaDefinition(schema){
if(isSchemaOfCommonNames(schema)){
return;
}

var operationTypes=[];

var queryType=schema.getQueryType();
if(queryType){
operationTypes.push('  query: '+queryType.name);
}

var mutationType=schema.getMutationType();
if(mutationType){
operationTypes.push('  mutation: '+mutationType.name);
}

var subscriptionType=schema.getSubscriptionType();
if(subscriptionType){
operationTypes.push('  subscription: '+subscriptionType.name);
}

return'schema {\n'+operationTypes.join('\n')+'\n}';
}













function isSchemaOfCommonNames(schema){
var queryType=schema.getQueryType();
if(queryType&&queryType.name!=='Query'){
return false;
}

var mutationType=schema.getMutationType();
if(mutationType&&mutationType.name!=='Mutation'){
return false;
}

var subscriptionType=schema.getSubscriptionType();
if(subscriptionType&&subscriptionType.name!=='Subscription'){
return false;
}

return true;
}

function printType(type){
if(type instanceof _definition.GraphQLScalarType){
return printScalar(type);
}else if(type instanceof _definition.GraphQLObjectType){
return printObject(type);
}else if(type instanceof _definition.GraphQLInterfaceType){
return printInterface(type);
}else if(type instanceof _definition.GraphQLUnionType){
return printUnion(type);
}else if(type instanceof _definition.GraphQLEnumType){
return printEnum(type);
}
(0,_invariant2.default)(type instanceof _definition.GraphQLInputObjectType);
return printInputObject(type);
}

function printScalar(type){
return printDescription(type)+('scalar '+type.name);
}

function printObject(type){
var interfaces=type.getInterfaces();
var implementedInterfaces=interfaces.length?' implements '+interfaces.map(function(i){
return i.name;
}).join(', '):'';
return printDescription(type)+('type '+type.name+implementedInterfaces+' {\n')+printFields(type)+'\n'+'}';
}

function printInterface(type){
return printDescription(type)+('interface '+type.name+' {\n')+printFields(type)+'\n'+'}';
}

function printUnion(type){
return printDescription(type)+('union '+type.name+' = '+type.getTypes().join(' | '));
}

function printEnum(type){
return printDescription(type)+('enum '+type.name+' {\n')+printEnumValues(type.getValues())+'\n'+'}';
}

function printEnumValues(values){
return values.map(function(value,i){
return printDescription(value,'  ',!i)+'  '+value.name+printDeprecated(value);
}).join('\n');
}

function printInputObject(type){
var fieldMap=type.getFields();
var fields=Object.keys(fieldMap).map(function(fieldName){
return fieldMap[fieldName];
});
return printDescription(type)+('input '+type.name+' {\n')+fields.map(function(f,i){
return printDescription(f,'  ',!i)+'  '+printInputValue(f);
}).join('\n')+'\n'+'}';
}

function printFields(type){
var fieldMap=type.getFields();
var fields=Object.keys(fieldMap).map(function(fieldName){
return fieldMap[fieldName];
});
return fields.map(function(f,i){
return printDescription(f,'  ',!i)+'  '+f.name+printArgs(f.args,'  ')+': '+String(f.type)+printDeprecated(f);
}).join('\n');
}

function printArgs(args){
var indentation=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';

if(args.length===0){
return'';
}


if(args.every(function(arg){
return!arg.description;
})){
return'('+args.map(printInputValue).join(', ')+')';
}

return'(\n'+args.map(function(arg,i){
return printDescription(arg,'  '+indentation,!i)+'  '+indentation+printInputValue(arg);
}).join('\n')+'\n'+indentation+')';
}

function printInputValue(arg){
var argDecl=arg.name+': '+String(arg.type);
if(!(0,_isInvalid2.default)(arg.defaultValue)){
argDecl+=' = '+(0,_printer.print)((0,_astFromValue.astFromValue)(arg.defaultValue,arg.type));
}
return argDecl;
}

function printDirective(directive){
return printDescription(directive)+'directive @'+directive.name+printArgs(directive.args)+' on '+directive.locations.join(' | ');
}

function printDeprecated(fieldOrEnumVal){
var reason=fieldOrEnumVal.deprecationReason;
if((0,_isNullish2.default)(reason)){
return'';
}
if(reason===''||reason===_directives.DEFAULT_DEPRECATION_REASON){
return' @deprecated';
}
return' @deprecated(reason: '+(0,_printer.print)((0,_astFromValue.astFromValue)(reason,_scalars.GraphQLString))+')';
}

function printDescription(def){
var indentation=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';
var firstInBlock=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;

if(!def.description){
return'';
}
var lines=def.description.split('\n');
var description=indentation&&!firstInBlock?'\n':'';
for(var i=0;i<lines.length;i++){
if(lines[i]===''){
description+=indentation+'#\n';
}else{


var sublines=breakLine(lines[i],120-indentation.length);
for(var j=0;j<sublines.length;j++){
description+=indentation+'# '+sublines[j]+'\n';
}
}
}
return description;
}

function breakLine(line,len){
if(line.length<len+5){
return[line];
}
var parts=line.split(new RegExp('((?: |^).{15,'+(len-40)+'}(?= |$))'));
if(parts.length<4){
return[line];
}
var sublines=[parts[0]+parts[1]+parts[2]];
for(var i=3;i<parts.length;i+=2){
sublines.push(parts[i].slice(1)+parts[i+1]);
}
return sublines;
}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.separateOperations=separateOperations;

var _visitor=__webpack_require__(27);







function separateOperations(documentAST){

var operations=[];
var depGraph=Object.create(null);
var fromName=void 0;


(0,_visitor.visit)(documentAST,{
OperationDefinition:function OperationDefinition(node){
operations.push(node);
fromName=opName(node);
},
FragmentDefinition:function FragmentDefinition(node){
fromName=node.name.value;
},
FragmentSpread:function FragmentSpread(node){
var toName=node.name.value;
(depGraph[fromName]||(depGraph[fromName]=Object.create(null)))[toName]=true;
}});




var separatedDocumentASTs=Object.create(null);
operations.forEach(function(operation){
var operationName=opName(operation);
var dependencies=Object.create(null);
collectTransitiveDependencies(dependencies,depGraph,operationName);

separatedDocumentASTs[operationName]={
kind:'Document',
definitions:documentAST.definitions.filter(function(def){
return def===operation||def.kind==='FragmentDefinition'&&dependencies[def.name.value];
})};

});

return separatedDocumentASTs;
}










function opName(operation){
return operation.name?operation.name.value:'';
}



function collectTransitiveDependencies(collected,depGraph,fromName){
var immediateDeps=depGraph[fromName];
if(immediateDeps){
Object.keys(immediateDeps).forEach(function(toName){
if(!collected[toName]){
collected[toName]=true;
collectTransitiveDependencies(collected,depGraph,toName);
}
});
}
}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});


var _validate=__webpack_require__(72);

Object.defineProperty(exports,'validate',{
enumerable:true,
get:function get(){
return _validate.validate;
}});

Object.defineProperty(exports,'ValidationContext',{
enumerable:true,
get:function get(){
return _validate.ValidationContext;
}});


var _specifiedRules=__webpack_require__(71);

Object.defineProperty(exports,'specifiedRules',{
enumerable:true,
get:function get(){
return _specifiedRules.specifiedRules;
}});

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.badValueMessage=badValueMessage;
exports.ArgumentsOfCorrectType=ArgumentsOfCorrectType;

var _error=__webpack_require__(2);

var _printer=__webpack_require__(9);

var _isValidLiteralValue=__webpack_require__(35);










function badValueMessage(argName,type,value,verboseErrors){
var message=verboseErrors?'\n'+verboseErrors.join('\n'):'';
return'Argument "'+argName+'" has invalid value '+value+'.'+message;
}







function ArgumentsOfCorrectType(context){
return{
Argument:function Argument(node){
var argDef=context.getArgument();
if(argDef){
var errors=(0,_isValidLiteralValue.isValidLiteralValue)(argDef.type,node.value);
if(errors&&errors.length>0){
context.reportError(new _error.GraphQLError(badValueMessage(node.name.value,argDef.type,(0,_printer.print)(node.value),errors),[node.value]));
}
}
return false;
}};

}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.defaultForNonNullArgMessage=defaultForNonNullArgMessage;
exports.badValueForDefaultArgMessage=badValueForDefaultArgMessage;
exports.DefaultValuesOfCorrectType=DefaultValuesOfCorrectType;

var _error=__webpack_require__(2);

var _printer=__webpack_require__(9);

var _definition=__webpack_require__(3);

var _isValidLiteralValue=__webpack_require__(35);

function defaultForNonNullArgMessage(varName,type,guessType){
return'Variable "$'+varName+'" of type "'+String(type)+'" is required and '+'will not use the default value. '+('Perhaps you meant to use type "'+String(guessType)+'".');
}









function badValueForDefaultArgMessage(varName,type,value,verboseErrors){
var message=verboseErrors?'\n'+verboseErrors.join('\n'):'';
return'Variable "$'+varName+'" of type "'+String(type)+'" has invalid '+('default value '+value+'.'+message);
}







function DefaultValuesOfCorrectType(context){
return{
VariableDefinition:function VariableDefinition(node){
var name=node.variable.name.value;
var defaultValue=node.defaultValue;
var type=context.getInputType();
if(type instanceof _definition.GraphQLNonNull&&defaultValue){
context.reportError(new _error.GraphQLError(defaultForNonNullArgMessage(name,type,type.ofType),[defaultValue]));
}
if(type&&defaultValue){
var errors=(0,_isValidLiteralValue.isValidLiteralValue)(type,defaultValue);
if(errors&&errors.length>0){
context.reportError(new _error.GraphQLError(badValueForDefaultArgMessage(name,type,(0,_printer.print)(defaultValue),errors),[defaultValue]));
}
}
return false;
},

SelectionSet:function SelectionSet(){
return false;
},
FragmentDefinition:function FragmentDefinition(){
return false;
}};

}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.undefinedFieldMessage=undefinedFieldMessage;
exports.FieldsOnCorrectType=FieldsOnCorrectType;

var _error=__webpack_require__(2);

var _suggestionList=__webpack_require__(45);

var _suggestionList2=_interopRequireDefault(_suggestionList);

var _quotedOrList=__webpack_require__(44);

var _quotedOrList2=_interopRequireDefault(_quotedOrList);

var _definition=__webpack_require__(3);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

function undefinedFieldMessage(fieldName,type,suggestedTypeNames,suggestedFieldNames){
var message='Cannot query field "'+fieldName+'" on type "'+type+'".';
if(suggestedTypeNames.length!==0){
var suggestions=(0,_quotedOrList2.default)(suggestedTypeNames);
message+=' Did you mean to use an inline fragment on '+suggestions+'?';
}else if(suggestedFieldNames.length!==0){
message+=' Did you mean '+(0,_quotedOrList2.default)(suggestedFieldNames)+'?';
}
return message;
}

















function FieldsOnCorrectType(context){
return{
Field:function Field(node){
var type=context.getParentType();
if(type){
var fieldDef=context.getFieldDef();
if(!fieldDef){

var schema=context.getSchema();
var fieldName=node.name.value;

var suggestedTypeNames=getSuggestedTypeNames(schema,type,fieldName);

var suggestedFieldNames=suggestedTypeNames.length!==0?[]:getSuggestedFieldNames(schema,type,fieldName);


context.reportError(new _error.GraphQLError(undefinedFieldMessage(fieldName,type.name,suggestedTypeNames,suggestedFieldNames),[node]));
}
}
}};

}







function getSuggestedTypeNames(schema,type,fieldName){
if(type instanceof _definition.GraphQLInterfaceType||type instanceof _definition.GraphQLUnionType){
var _ret=function(){
var suggestedObjectTypes=[];
var interfaceUsageCount=Object.create(null);
schema.getPossibleTypes(type).forEach(function(possibleType){
if(!possibleType.getFields()[fieldName]){
return;
}

suggestedObjectTypes.push(possibleType.name);
possibleType.getInterfaces().forEach(function(possibleInterface){
if(!possibleInterface.getFields()[fieldName]){
return;
}

interfaceUsageCount[possibleInterface.name]=(interfaceUsageCount[possibleInterface.name]||0)+1;
});
});


var suggestedInterfaceTypes=Object.keys(interfaceUsageCount).sort(function(a,b){
return interfaceUsageCount[b]-interfaceUsageCount[a];
});


return{
v:suggestedInterfaceTypes.concat(suggestedObjectTypes)};

}();

if(typeof _ret==="object")return _ret.v;
}


return[];
}





function getSuggestedFieldNames(schema,type,fieldName){
if(type instanceof _definition.GraphQLObjectType||type instanceof _definition.GraphQLInterfaceType){
var possibleFieldNames=Object.keys(type.getFields());
return(0,_suggestionList2.default)(fieldName,possibleFieldNames);
}

return[];
}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.inlineFragmentOnNonCompositeErrorMessage=inlineFragmentOnNonCompositeErrorMessage;
exports.fragmentOnNonCompositeErrorMessage=fragmentOnNonCompositeErrorMessage;
exports.FragmentsOnCompositeTypes=FragmentsOnCompositeTypes;

var _error=__webpack_require__(2);

var _printer=__webpack_require__(9);

var _definition=__webpack_require__(3);










function inlineFragmentOnNonCompositeErrorMessage(type){
return'Fragment cannot condition on non composite type "'+String(type)+'".';
}

function fragmentOnNonCompositeErrorMessage(fragName,type){
return'Fragment "'+fragName+'" cannot condition on non composite '+('type "'+String(type)+'".');
}








function FragmentsOnCompositeTypes(context){
return{
InlineFragment:function InlineFragment(node){
var type=context.getType();
if(node.typeCondition&&type&&!(0,_definition.isCompositeType)(type)){
context.reportError(new _error.GraphQLError(inlineFragmentOnNonCompositeErrorMessage((0,_printer.print)(node.typeCondition)),[node.typeCondition]));
}
},
FragmentDefinition:function FragmentDefinition(node){
var type=context.getType();
if(type&&!(0,_definition.isCompositeType)(type)){
context.reportError(new _error.GraphQLError(fragmentOnNonCompositeErrorMessage(node.name.value,(0,_printer.print)(node.typeCondition)),[node.typeCondition]));
}
}};

}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.unknownArgMessage=unknownArgMessage;
exports.unknownDirectiveArgMessage=unknownDirectiveArgMessage;
exports.KnownArgumentNames=KnownArgumentNames;

var _error=__webpack_require__(2);

var _find=__webpack_require__(17);

var _find2=_interopRequireDefault(_find);

var _invariant=__webpack_require__(7);

var _invariant2=_interopRequireDefault(_invariant);

var _suggestionList=__webpack_require__(45);

var _suggestionList2=_interopRequireDefault(_suggestionList);

var _quotedOrList=__webpack_require__(44);

var _quotedOrList2=_interopRequireDefault(_quotedOrList);

var _kinds=__webpack_require__(6);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

function unknownArgMessage(argName,fieldName,type,suggestedArgs){
var message='Unknown argument "'+argName+'" on field "'+fieldName+'" of '+('type "'+String(type)+'".');
if(suggestedArgs.length){
message+=' Did you mean '+(0,_quotedOrList2.default)(suggestedArgs)+'?';
}
return message;
}









function unknownDirectiveArgMessage(argName,directiveName,suggestedArgs){
var message='Unknown argument "'+argName+'" on directive "@'+directiveName+'".';
if(suggestedArgs.length){
message+=' Did you mean '+(0,_quotedOrList2.default)(suggestedArgs)+'?';
}
return message;
}







function KnownArgumentNames(context){
return{
Argument:function Argument(node,key,parent,path,ancestors){
var argumentOf=ancestors[ancestors.length-1];
if(argumentOf.kind===_kinds.FIELD){
var fieldDef=context.getFieldDef();
if(fieldDef){
var fieldArgDef=(0,_find2.default)(fieldDef.args,function(arg){
return arg.name===node.name.value;
});
if(!fieldArgDef){
var parentType=context.getParentType();
(0,_invariant2.default)(parentType);
context.reportError(new _error.GraphQLError(unknownArgMessage(node.name.value,fieldDef.name,parentType.name,(0,_suggestionList2.default)(node.name.value,fieldDef.args.map(function(arg){
return arg.name;
}))),[node]));
}
}
}else if(argumentOf.kind===_kinds.DIRECTIVE){
var directive=context.getDirective();
if(directive){
var directiveArgDef=(0,_find2.default)(directive.args,function(arg){
return arg.name===node.name.value;
});
if(!directiveArgDef){
context.reportError(new _error.GraphQLError(unknownDirectiveArgMessage(node.name.value,directive.name,(0,_suggestionList2.default)(node.name.value,directive.args.map(function(arg){
return arg.name;
}))),[node]));
}
}
}
}};

}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.unknownDirectiveMessage=unknownDirectiveMessage;
exports.misplacedDirectiveMessage=misplacedDirectiveMessage;
exports.KnownDirectives=KnownDirectives;

var _error=__webpack_require__(2);

var _find=__webpack_require__(17);

var _find2=_interopRequireDefault(_find);

var _kinds=__webpack_require__(6);

var _directives=__webpack_require__(10);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

function unknownDirectiveMessage(directiveName){
return'Unknown directive "'+directiveName+'".';
}









function misplacedDirectiveMessage(directiveName,location){
return'Directive "'+directiveName+'" may not be used on '+location+'.';
}







function KnownDirectives(context){
return{
Directive:function Directive(node,key,parent,path,ancestors){
var directiveDef=(0,_find2.default)(context.getSchema().getDirectives(),function(def){
return def.name===node.name.value;
});
if(!directiveDef){
context.reportError(new _error.GraphQLError(unknownDirectiveMessage(node.name.value),[node]));
return;
}
var candidateLocation=getDirectiveLocationForASTPath(ancestors);
if(!candidateLocation){
context.reportError(new _error.GraphQLError(misplacedDirectiveMessage(node.name.value,node.type),[node]));
}else if(directiveDef.locations.indexOf(candidateLocation)===-1){
context.reportError(new _error.GraphQLError(misplacedDirectiveMessage(node.name.value,candidateLocation),[node]));
}
}};

}

function getDirectiveLocationForASTPath(ancestors){
var appliedTo=ancestors[ancestors.length-1];
switch(appliedTo.kind){
case _kinds.OPERATION_DEFINITION:
switch(appliedTo.operation){
case'query':
return _directives.DirectiveLocation.QUERY;
case'mutation':
return _directives.DirectiveLocation.MUTATION;
case'subscription':
return _directives.DirectiveLocation.SUBSCRIPTION;}

break;
case _kinds.FIELD:
return _directives.DirectiveLocation.FIELD;
case _kinds.FRAGMENT_SPREAD:
return _directives.DirectiveLocation.FRAGMENT_SPREAD;
case _kinds.INLINE_FRAGMENT:
return _directives.DirectiveLocation.INLINE_FRAGMENT;
case _kinds.FRAGMENT_DEFINITION:
return _directives.DirectiveLocation.FRAGMENT_DEFINITION;
case _kinds.SCHEMA_DEFINITION:
return _directives.DirectiveLocation.SCHEMA;
case _kinds.SCALAR_TYPE_DEFINITION:
return _directives.DirectiveLocation.SCALAR;
case _kinds.OBJECT_TYPE_DEFINITION:
return _directives.DirectiveLocation.OBJECT;
case _kinds.FIELD_DEFINITION:
return _directives.DirectiveLocation.FIELD_DEFINITION;
case _kinds.INTERFACE_TYPE_DEFINITION:
return _directives.DirectiveLocation.INTERFACE;
case _kinds.UNION_TYPE_DEFINITION:
return _directives.DirectiveLocation.UNION;
case _kinds.ENUM_TYPE_DEFINITION:
return _directives.DirectiveLocation.ENUM;
case _kinds.ENUM_VALUE_DEFINITION:
return _directives.DirectiveLocation.ENUM_VALUE;
case _kinds.INPUT_OBJECT_TYPE_DEFINITION:
return _directives.DirectiveLocation.INPUT_OBJECT;
case _kinds.INPUT_VALUE_DEFINITION:
var parentNode=ancestors[ancestors.length-3];
return parentNode.kind===_kinds.INPUT_OBJECT_TYPE_DEFINITION?_directives.DirectiveLocation.INPUT_FIELD_DEFINITION:_directives.DirectiveLocation.ARGUMENT_DEFINITION;}

}

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.unknownFragmentMessage=unknownFragmentMessage;
exports.KnownFragmentNames=KnownFragmentNames;

var _error=__webpack_require__(2);










function unknownFragmentMessage(fragName){
return'Unknown fragment "'+fragName+'".';
}







function KnownFragmentNames(context){
return{
FragmentSpread:function FragmentSpread(node){
var fragmentName=node.name.value;
var fragment=context.getFragment(fragmentName);
if(!fragment){
context.reportError(new _error.GraphQLError(unknownFragmentMessage(fragmentName),[node.name]));
}
}};

}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.unknownTypeMessage=unknownTypeMessage;
exports.KnownTypeNames=KnownTypeNames;

var _error=__webpack_require__(2);

var _suggestionList=__webpack_require__(45);

var _suggestionList2=_interopRequireDefault(_suggestionList);

var _quotedOrList=__webpack_require__(44);

var _quotedOrList2=_interopRequireDefault(_quotedOrList);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}










function unknownTypeMessage(type,suggestedTypes){
var message='Unknown type "'+String(type)+'".';
if(suggestedTypes.length){
message+=' Did you mean '+(0,_quotedOrList2.default)(suggestedTypes)+'?';
}
return message;
}







function KnownTypeNames(context){
return{



ObjectTypeDefinition:function ObjectTypeDefinition(){
return false;
},
InterfaceTypeDefinition:function InterfaceTypeDefinition(){
return false;
},
UnionTypeDefinition:function UnionTypeDefinition(){
return false;
},
InputObjectTypeDefinition:function InputObjectTypeDefinition(){
return false;
},
NamedType:function NamedType(node){
var schema=context.getSchema();
var typeName=node.name.value;
var type=schema.getType(typeName);
if(!type){
context.reportError(new _error.GraphQLError(unknownTypeMessage(typeName,(0,_suggestionList2.default)(typeName,Object.keys(schema.getTypeMap()))),[node]));
}
}};

}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.anonOperationNotAloneMessage=anonOperationNotAloneMessage;
exports.LoneAnonymousOperation=LoneAnonymousOperation;

var _error=__webpack_require__(2);

var _kinds=__webpack_require__(6);

function anonOperationNotAloneMessage(){
return'This anonymous operation must be the only defined operation.';
}

















function LoneAnonymousOperation(context){
var operationCount=0;
return{
Document:function Document(node){
operationCount=node.definitions.filter(function(definition){
return definition.kind===_kinds.OPERATION_DEFINITION;
}).length;
},
OperationDefinition:function OperationDefinition(node){
if(!node.name&&operationCount>1){
context.reportError(new _error.GraphQLError(anonOperationNotAloneMessage(),[node]));
}
}};

}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.cycleErrorMessage=cycleErrorMessage;
exports.NoFragmentCycles=NoFragmentCycles;

var _error=__webpack_require__(2);










function cycleErrorMessage(fragName,spreadNames){
var via=spreadNames.length?' via '+spreadNames.join(', '):'';
return'Cannot spread fragment "'+fragName+'" within itself'+via+'.';
}

function NoFragmentCycles(context){


var visitedFrags=Object.create(null);


var spreadPath=[];


var spreadPathIndexByName=Object.create(null);

return{
OperationDefinition:function OperationDefinition(){
return false;
},
FragmentDefinition:function FragmentDefinition(node){
if(!visitedFrags[node.name.value]){
detectCycleRecursive(node);
}
return false;
}};





function detectCycleRecursive(fragment){
var fragmentName=fragment.name.value;
visitedFrags[fragmentName]=true;

var spreadNodes=context.getFragmentSpreads(fragment.selectionSet);
if(spreadNodes.length===0){
return;
}

spreadPathIndexByName[fragmentName]=spreadPath.length;

for(var i=0;i<spreadNodes.length;i++){
var spreadNode=spreadNodes[i];
var spreadName=spreadNode.name.value;
var cycleIndex=spreadPathIndexByName[spreadName];

if(cycleIndex===undefined){
spreadPath.push(spreadNode);
if(!visitedFrags[spreadName]){
var spreadFragment=context.getFragment(spreadName);
if(spreadFragment){
detectCycleRecursive(spreadFragment);
}
}
spreadPath.pop();
}else{
var cyclePath=spreadPath.slice(cycleIndex);
context.reportError(new _error.GraphQLError(cycleErrorMessage(spreadName,cyclePath.map(function(s){
return s.name.value;
})),cyclePath.concat(spreadNode)));
}
}

spreadPathIndexByName[fragmentName]=undefined;
}
}

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.undefinedVarMessage=undefinedVarMessage;
exports.NoUndefinedVariables=NoUndefinedVariables;

var _error=__webpack_require__(2);










function undefinedVarMessage(varName,opName){
return opName?'Variable "$'+varName+'" is not defined by operation "'+opName+'".':'Variable "$'+varName+'" is not defined.';
}







function NoUndefinedVariables(context){
var variableNameDefined=Object.create(null);

return{
OperationDefinition:{
enter:function enter(){
variableNameDefined=Object.create(null);
},
leave:function leave(operation){
var usages=context.getRecursiveVariableUsages(operation);

usages.forEach(function(_ref){
var node=_ref.node;

var varName=node.name.value;
if(variableNameDefined[varName]!==true){
context.reportError(new _error.GraphQLError(undefinedVarMessage(varName,operation.name&&operation.name.value),[node,operation]));
}
});
}},

VariableDefinition:function VariableDefinition(node){
variableNameDefined[node.variable.name.value]=true;
}};

}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.unusedFragMessage=unusedFragMessage;
exports.NoUnusedFragments=NoUnusedFragments;

var _error=__webpack_require__(2);










function unusedFragMessage(fragName){
return'Fragment "'+fragName+'" is never used.';
}







function NoUnusedFragments(context){
var operationDefs=[];
var fragmentDefs=[];

return{
OperationDefinition:function OperationDefinition(node){
operationDefs.push(node);
return false;
},
FragmentDefinition:function FragmentDefinition(node){
fragmentDefs.push(node);
return false;
},

Document:{
leave:function leave(){
var fragmentNameUsed=Object.create(null);
operationDefs.forEach(function(operation){
context.getRecursivelyReferencedFragments(operation).forEach(function(fragment){
fragmentNameUsed[fragment.name.value]=true;
});
});

fragmentDefs.forEach(function(fragmentDef){
var fragName=fragmentDef.name.value;
if(fragmentNameUsed[fragName]!==true){
context.reportError(new _error.GraphQLError(unusedFragMessage(fragName),[fragmentDef]));
}
});
}}};


}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.unusedVariableMessage=unusedVariableMessage;
exports.NoUnusedVariables=NoUnusedVariables;

var _error=__webpack_require__(2);










function unusedVariableMessage(varName,opName){
return opName?'Variable "$'+varName+'" is never used in operation "'+opName+'".':'Variable "$'+varName+'" is never used.';
}







function NoUnusedVariables(context){
var variableDefs=[];

return{
OperationDefinition:{
enter:function enter(){
variableDefs=[];
},
leave:function leave(operation){
var variableNameUsed=Object.create(null);
var usages=context.getRecursiveVariableUsages(operation);
var opName=operation.name?operation.name.value:null;

usages.forEach(function(_ref){
var node=_ref.node;

variableNameUsed[node.name.value]=true;
});

variableDefs.forEach(function(variableDef){
var variableName=variableDef.variable.name.value;
if(variableNameUsed[variableName]!==true){
context.reportError(new _error.GraphQLError(unusedVariableMessage(variableName,opName),[variableDef]));
}
});
}},

VariableDefinition:function VariableDefinition(def){
variableDefs.push(def);
}};

}

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.fieldsConflictMessage=fieldsConflictMessage;
exports.OverlappingFieldsCanBeMerged=OverlappingFieldsCanBeMerged;

var _error=__webpack_require__(2);

var _find=__webpack_require__(17);

var _find2=_interopRequireDefault(_find);

var _kinds=__webpack_require__(6);

var _printer=__webpack_require__(9);

var _definition=__webpack_require__(3);

var _typeFromAST=__webpack_require__(15);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}









function fieldsConflictMessage(responseName,reason){
return'Fields "'+responseName+'" conflict because '+reasonMessage(reason)+'. Use different aliases on the fields to fetch both if this was '+'intentional.';
}

function reasonMessage(reason){
if(Array.isArray(reason)){
return reason.map(function(_ref){
var responseName=_ref[0],
subreason=_ref[1];
return'subfields "'+responseName+'" conflict because '+reasonMessage(subreason);
}).join(' and ');
}
return reason;
}








function OverlappingFieldsCanBeMerged(context){



var comparedFragments=new PairSet();




var cachedFieldsAndFragmentNames=new Map();

return{
SelectionSet:function SelectionSet(selectionSet){
var conflicts=findConflictsWithinSelectionSet(context,cachedFieldsAndFragmentNames,comparedFragments,context.getParentType(),selectionSet);
conflicts.forEach(function(_ref2){
var _ref2$=_ref2[0],
responseName=_ref2$[0],
reason=_ref2$[1],
fields1=_ref2[1],
fields2=_ref2[2];
return context.reportError(new _error.GraphQLError(fieldsConflictMessage(responseName,reason),fields1.concat(fields2)));
});
}};

}



































































function findConflictsWithinSelectionSet(context,cachedFieldsAndFragmentNames,comparedFragments,parentType,selectionSet){
var conflicts=[];

var _getFieldsAndFragment=getFieldsAndFragmentNames(context,cachedFieldsAndFragmentNames,parentType,selectionSet),
fieldMap=_getFieldsAndFragment[0],
fragmentNames=_getFieldsAndFragment[1];





collectConflictsWithin(context,conflicts,cachedFieldsAndFragmentNames,comparedFragments,fieldMap);



for(var i=0;i<fragmentNames.length;i++){
collectConflictsBetweenFieldsAndFragment(context,conflicts,cachedFieldsAndFragmentNames,comparedFragments,false,fieldMap,fragmentNames[i]);




for(var j=i+1;j<fragmentNames.length;j++){
collectConflictsBetweenFragments(context,conflicts,cachedFieldsAndFragmentNames,comparedFragments,false,fragmentNames[i],fragmentNames[j]);
}
}
return conflicts;
}



function collectConflictsBetweenFieldsAndFragment(context,conflicts,cachedFieldsAndFragmentNames,comparedFragments,areMutuallyExclusive,fieldMap,fragmentName){
var fragment=context.getFragment(fragmentName);
if(!fragment){
return;
}

var _getReferencedFieldsA=getReferencedFieldsAndFragmentNames(context,cachedFieldsAndFragmentNames,fragment),
fieldMap2=_getReferencedFieldsA[0],
fragmentNames2=_getReferencedFieldsA[1];





collectConflictsBetween(context,conflicts,cachedFieldsAndFragmentNames,comparedFragments,areMutuallyExclusive,fieldMap,fieldMap2);



for(var i=0;i<fragmentNames2.length;i++){
collectConflictsBetweenFieldsAndFragment(context,conflicts,cachedFieldsAndFragmentNames,comparedFragments,areMutuallyExclusive,fieldMap,fragmentNames2[i]);
}
}



function collectConflictsBetweenFragments(context,conflicts,cachedFieldsAndFragmentNames,comparedFragments,areMutuallyExclusive,fragmentName1,fragmentName2){
var fragment1=context.getFragment(fragmentName1);
var fragment2=context.getFragment(fragmentName2);
if(!fragment1||!fragment2){
return;
}


if(fragment1===fragment2){
return;
}


if(comparedFragments.has(fragmentName1,fragmentName2,areMutuallyExclusive)){
return;
}
comparedFragments.add(fragmentName1,fragmentName2,areMutuallyExclusive);

var _getReferencedFieldsA2=getReferencedFieldsAndFragmentNames(context,cachedFieldsAndFragmentNames,fragment1),
fieldMap1=_getReferencedFieldsA2[0],
fragmentNames1=_getReferencedFieldsA2[1];

var _getReferencedFieldsA3=getReferencedFieldsAndFragmentNames(context,cachedFieldsAndFragmentNames,fragment2),
fieldMap2=_getReferencedFieldsA3[0],
fragmentNames2=_getReferencedFieldsA3[1];





collectConflictsBetween(context,conflicts,cachedFieldsAndFragmentNames,comparedFragments,areMutuallyExclusive,fieldMap1,fieldMap2);



for(var j=0;j<fragmentNames2.length;j++){
collectConflictsBetweenFragments(context,conflicts,cachedFieldsAndFragmentNames,comparedFragments,areMutuallyExclusive,fragmentName1,fragmentNames2[j]);
}



for(var i=0;i<fragmentNames1.length;i++){
collectConflictsBetweenFragments(context,conflicts,cachedFieldsAndFragmentNames,comparedFragments,areMutuallyExclusive,fragmentNames1[i],fragmentName2);
}
}




function findConflictsBetweenSubSelectionSets(context,cachedFieldsAndFragmentNames,comparedFragments,areMutuallyExclusive,parentType1,selectionSet1,parentType2,selectionSet2){
var conflicts=[];

var _getFieldsAndFragment2=getFieldsAndFragmentNames(context,cachedFieldsAndFragmentNames,parentType1,selectionSet1),
fieldMap1=_getFieldsAndFragment2[0],
fragmentNames1=_getFieldsAndFragment2[1];

var _getFieldsAndFragment3=getFieldsAndFragmentNames(context,cachedFieldsAndFragmentNames,parentType2,selectionSet2),
fieldMap2=_getFieldsAndFragment3[0],
fragmentNames2=_getFieldsAndFragment3[1];




collectConflictsBetween(context,conflicts,cachedFieldsAndFragmentNames,comparedFragments,areMutuallyExclusive,fieldMap1,fieldMap2);



for(var j=0;j<fragmentNames2.length;j++){
collectConflictsBetweenFieldsAndFragment(context,conflicts,cachedFieldsAndFragmentNames,comparedFragments,areMutuallyExclusive,fieldMap1,fragmentNames2[j]);
}



for(var i=0;i<fragmentNames1.length;i++){
collectConflictsBetweenFieldsAndFragment(context,conflicts,cachedFieldsAndFragmentNames,comparedFragments,areMutuallyExclusive,fieldMap2,fragmentNames1[i]);
}




for(var _i=0;_i<fragmentNames1.length;_i++){
for(var _j=0;_j<fragmentNames2.length;_j++){
collectConflictsBetweenFragments(context,conflicts,cachedFieldsAndFragmentNames,comparedFragments,areMutuallyExclusive,fragmentNames1[_i],fragmentNames2[_j]);
}
}
return conflicts;
}


function collectConflictsWithin(context,conflicts,cachedFieldsAndFragmentNames,comparedFragments,fieldMap){




Object.keys(fieldMap).forEach(function(responseName){
var fields=fieldMap[responseName];



if(fields.length>1){
for(var i=0;i<fields.length;i++){
for(var j=i+1;j<fields.length;j++){
var conflict=findConflict(context,cachedFieldsAndFragmentNames,comparedFragments,false,
responseName,fields[i],fields[j]);
if(conflict){
conflicts.push(conflict);
}
}
}
}
});
}






function collectConflictsBetween(context,conflicts,cachedFieldsAndFragmentNames,comparedFragments,parentFieldsAreMutuallyExclusive,fieldMap1,fieldMap2){





Object.keys(fieldMap1).forEach(function(responseName){
var fields2=fieldMap2[responseName];
if(fields2){
var fields1=fieldMap1[responseName];
for(var i=0;i<fields1.length;i++){
for(var j=0;j<fields2.length;j++){
var conflict=findConflict(context,cachedFieldsAndFragmentNames,comparedFragments,parentFieldsAreMutuallyExclusive,responseName,fields1[i],fields2[j]);
if(conflict){
conflicts.push(conflict);
}
}
}
}
});
}



function findConflict(context,cachedFieldsAndFragmentNames,comparedFragments,parentFieldsAreMutuallyExclusive,responseName,field1,field2){
var parentType1=field1[0],
node1=field1[1],
def1=field1[2];
var parentType2=field2[0],
node2=field2[1],
def2=field2[2];










var areMutuallyExclusive=parentFieldsAreMutuallyExclusive||parentType1!==parentType2&&parentType1 instanceof _definition.GraphQLObjectType&&parentType2 instanceof _definition.GraphQLObjectType;


var type1=def1&&def1.type;
var type2=def2&&def2.type;

if(!areMutuallyExclusive){

var name1=node1.name.value;
var name2=node2.name.value;
if(name1!==name2){
return[[responseName,name1+' and '+name2+' are different fields'],[node1],[node2]];
}


if(!sameArguments(node1.arguments||[],node2.arguments||[])){
return[[responseName,'they have differing arguments'],[node1],[node2]];
}
}

if(type1&&type2&&doTypesConflict(type1,type2)){
return[[responseName,'they return conflicting types '+String(type1)+' and '+String(type2)],[node1],[node2]];
}




var selectionSet1=node1.selectionSet;
var selectionSet2=node2.selectionSet;
if(selectionSet1&&selectionSet2){
var conflicts=findConflictsBetweenSubSelectionSets(context,cachedFieldsAndFragmentNames,comparedFragments,areMutuallyExclusive,(0,_definition.getNamedType)(type1),selectionSet1,(0,_definition.getNamedType)(type2),selectionSet2);
return subfieldConflicts(conflicts,responseName,node1,node2);
}
}

function sameArguments(arguments1,arguments2){
if(arguments1.length!==arguments2.length){
return false;
}
return arguments1.every(function(argument1){
var argument2=(0,_find2.default)(arguments2,function(argument){
return argument.name.value===argument1.name.value;
});
if(!argument2){
return false;
}
return sameValue(argument1.value,argument2.value);
});
}

function sameValue(value1,value2){
return!value1&&!value2||(0,_printer.print)(value1)===(0,_printer.print)(value2);
}




function doTypesConflict(type1,type2){
if(type1 instanceof _definition.GraphQLList){
return type2 instanceof _definition.GraphQLList?doTypesConflict(type1.ofType,type2.ofType):true;
}
if(type2 instanceof _definition.GraphQLList){
return type1 instanceof _definition.GraphQLList?doTypesConflict(type1.ofType,type2.ofType):true;
}
if(type1 instanceof _definition.GraphQLNonNull){
return type2 instanceof _definition.GraphQLNonNull?doTypesConflict(type1.ofType,type2.ofType):true;
}
if(type2 instanceof _definition.GraphQLNonNull){
return type1 instanceof _definition.GraphQLNonNull?doTypesConflict(type1.ofType,type2.ofType):true;
}
if((0,_definition.isLeafType)(type1)||(0,_definition.isLeafType)(type2)){
return type1!==type2;
}
return false;
}




function getFieldsAndFragmentNames(context,cachedFieldsAndFragmentNames,parentType,selectionSet){
var cached=cachedFieldsAndFragmentNames.get(selectionSet);
if(!cached){
var nodeAndDefs={};
var fragmentNames={};
_collectFieldsAndFragmentNames(context,parentType,selectionSet,nodeAndDefs,fragmentNames);
cached=[nodeAndDefs,Object.keys(fragmentNames)];
cachedFieldsAndFragmentNames.set(selectionSet,cached);
}
return cached;
}



function getReferencedFieldsAndFragmentNames(context,cachedFieldsAndFragmentNames,fragment){

var cached=cachedFieldsAndFragmentNames.get(fragment.selectionSet);
if(cached){
return cached;
}

var fragmentType=(0,_typeFromAST.typeFromAST)(context.getSchema(),fragment.typeCondition);
return getFieldsAndFragmentNames(context,cachedFieldsAndFragmentNames,fragmentType,fragment.selectionSet);
}

function _collectFieldsAndFragmentNames(context,parentType,selectionSet,nodeAndDefs,fragmentNames){
for(var i=0;i<selectionSet.selections.length;i++){
var selection=selectionSet.selections[i];
switch(selection.kind){
case _kinds.FIELD:
var fieldName=selection.name.value;
var fieldDef=void 0;
if(parentType instanceof _definition.GraphQLObjectType||parentType instanceof _definition.GraphQLInterfaceType){
fieldDef=parentType.getFields()[fieldName];
}
var responseName=selection.alias?selection.alias.value:fieldName;
if(!nodeAndDefs[responseName]){
nodeAndDefs[responseName]=[];
}
nodeAndDefs[responseName].push([parentType,selection,fieldDef]);
break;
case _kinds.FRAGMENT_SPREAD:
fragmentNames[selection.name.value]=true;
break;
case _kinds.INLINE_FRAGMENT:
var typeCondition=selection.typeCondition;
var inlineFragmentType=typeCondition?(0,_typeFromAST.typeFromAST)(context.getSchema(),typeCondition):parentType;
_collectFieldsAndFragmentNames(context,inlineFragmentType,selection.selectionSet,nodeAndDefs,fragmentNames);
break;}

}
}



function subfieldConflicts(conflicts,responseName,node1,node2){
if(conflicts.length>0){
return[[responseName,conflicts.map(function(_ref3){
var reason=_ref3[0];
return reason;
})],conflicts.reduce(function(allFields,_ref4){
var fields1=_ref4[1];
return allFields.concat(fields1);
},[node1]),conflicts.reduce(function(allFields,_ref5){
var fields2=_ref5[2];
return allFields.concat(fields2);
},[node2])];
}
}






var PairSet=function(){
function PairSet(){
_classCallCheck(this,PairSet);

this._data=Object.create(null);
}

PairSet.prototype.has=function has(a,b,areMutuallyExclusive){
var first=this._data[a];
var result=first&&first[b];
if(result===undefined){
return false;
}



if(areMutuallyExclusive===false){
return result===false;
}
return true;
};

PairSet.prototype.add=function add(a,b,areMutuallyExclusive){
_pairSetAdd(this._data,a,b,areMutuallyExclusive);
_pairSetAdd(this._data,b,a,areMutuallyExclusive);
};

return PairSet;
}();

function _pairSetAdd(data,a,b,areMutuallyExclusive){
var map=data[a];
if(!map){
map=Object.create(null);
data[a]=map;
}
map[b]=areMutuallyExclusive;
}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.typeIncompatibleSpreadMessage=typeIncompatibleSpreadMessage;
exports.typeIncompatibleAnonSpreadMessage=typeIncompatibleAnonSpreadMessage;
exports.PossibleFragmentSpreads=PossibleFragmentSpreads;

var _error=__webpack_require__(2);

var _typeComparators=__webpack_require__(36);

var _typeFromAST=__webpack_require__(15);










function typeIncompatibleSpreadMessage(fragName,parentType,fragType){
return'Fragment "'+fragName+'" cannot be spread here as objects of '+('type "'+String(parentType)+'" can never be of type "'+String(fragType)+'".');
}

function typeIncompatibleAnonSpreadMessage(parentType,fragType){
return'Fragment cannot be spread here as objects of '+('type "'+String(parentType)+'" can never be of type "'+String(fragType)+'".');
}








function PossibleFragmentSpreads(context){
return{
InlineFragment:function InlineFragment(node){
var fragType=context.getType();
var parentType=context.getParentType();
if(fragType&&parentType&&!(0,_typeComparators.doTypesOverlap)(context.getSchema(),fragType,parentType)){
context.reportError(new _error.GraphQLError(typeIncompatibleAnonSpreadMessage(parentType,fragType),[node]));
}
},
FragmentSpread:function FragmentSpread(node){
var fragName=node.name.value;
var fragType=getFragmentType(context,fragName);
var parentType=context.getParentType();
if(fragType&&parentType&&!(0,_typeComparators.doTypesOverlap)(context.getSchema(),fragType,parentType)){
context.reportError(new _error.GraphQLError(typeIncompatibleSpreadMessage(fragName,parentType,fragType),[node]));
}
}};

}

function getFragmentType(context,name){
var frag=context.getFragment(name);
return frag&&(0,_typeFromAST.typeFromAST)(context.getSchema(),frag.typeCondition);
}

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.missingFieldArgMessage=missingFieldArgMessage;
exports.missingDirectiveArgMessage=missingDirectiveArgMessage;
exports.ProvidedNonNullArguments=ProvidedNonNullArguments;

var _error=__webpack_require__(2);

var _keyMap=__webpack_require__(22);

var _keyMap2=_interopRequireDefault(_keyMap);

var _definition=__webpack_require__(3);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}










function missingFieldArgMessage(fieldName,argName,type){
return'Field "'+fieldName+'" argument "'+argName+'" of type '+('"'+String(type)+'" is required but not provided.');
}

function missingDirectiveArgMessage(directiveName,argName,type){
return'Directive "@'+directiveName+'" argument "'+argName+'" of type '+('"'+String(type)+'" is required but not provided.');
}







function ProvidedNonNullArguments(context){
return{
Field:{

leave:function leave(node){
var fieldDef=context.getFieldDef();
if(!fieldDef){
return false;
}
var argNodes=node.arguments||[];

var argNodeMap=(0,_keyMap2.default)(argNodes,function(arg){
return arg.name.value;
});
fieldDef.args.forEach(function(argDef){
var argNode=argNodeMap[argDef.name];
if(!argNode&&argDef.type instanceof _definition.GraphQLNonNull){
context.reportError(new _error.GraphQLError(missingFieldArgMessage(node.name.value,argDef.name,argDef.type),[node]));
}
});
}},


Directive:{

leave:function leave(node){
var directiveDef=context.getDirective();
if(!directiveDef){
return false;
}
var argNodes=node.arguments||[];

var argNodeMap=(0,_keyMap2.default)(argNodes,function(arg){
return arg.name.value;
});
directiveDef.args.forEach(function(argDef){
var argNode=argNodeMap[argDef.name];
if(!argNode&&argDef.type instanceof _definition.GraphQLNonNull){
context.reportError(new _error.GraphQLError(missingDirectiveArgMessage(node.name.value,argDef.name,argDef.type),[node]));
}
});
}}};


}

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.noSubselectionAllowedMessage=noSubselectionAllowedMessage;
exports.requiredSubselectionMessage=requiredSubselectionMessage;
exports.ScalarLeafs=ScalarLeafs;

var _error=__webpack_require__(2);

var _definition=__webpack_require__(3);

function noSubselectionAllowedMessage(fieldName,type){
return'Field "'+fieldName+'" must not have a selection since '+('type "'+String(type)+'" has no subfields.');
}









function requiredSubselectionMessage(fieldName,type){
return'Field "'+fieldName+'" of type "'+String(type)+'" must have a '+('selection of subfields. Did you mean "'+fieldName+' { ... }"?');
}







function ScalarLeafs(context){
return{
Field:function Field(node){
var type=context.getType();
if(type){
if((0,_definition.isLeafType)(type)){
if(node.selectionSet){
context.reportError(new _error.GraphQLError(noSubselectionAllowedMessage(node.name.value,type),[node.selectionSet]));
}
}else if(!node.selectionSet){
context.reportError(new _error.GraphQLError(requiredSubselectionMessage(node.name.value,type),[node]));
}
}
}};

}

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.duplicateArgMessage=duplicateArgMessage;
exports.UniqueArgumentNames=UniqueArgumentNames;

var _error=__webpack_require__(2);










function duplicateArgMessage(argName){
return'There can be only one argument named "'+argName+'".';
}







function UniqueArgumentNames(context){
var knownArgNames=Object.create(null);
return{
Field:function Field(){
knownArgNames=Object.create(null);
},
Directive:function Directive(){
knownArgNames=Object.create(null);
},
Argument:function Argument(node){
var argName=node.name.value;
if(knownArgNames[argName]){
context.reportError(new _error.GraphQLError(duplicateArgMessage(argName),[knownArgNames[argName],node.name]));
}else{
knownArgNames[argName]=node.name;
}
return false;
}};

}

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.duplicateDirectiveMessage=duplicateDirectiveMessage;
exports.UniqueDirectivesPerLocation=UniqueDirectivesPerLocation;

var _error=__webpack_require__(2);










function duplicateDirectiveMessage(directiveName){
return'The directive "'+directiveName+'" can only be used once at '+'this location.';
}







function UniqueDirectivesPerLocation(context){
return{



enter:function enter(node){
if(node.directives){
(function(){
var knownDirectives=Object.create(null);
node.directives.forEach(function(directive){
var directiveName=directive.name.value;
if(knownDirectives[directiveName]){
context.reportError(new _error.GraphQLError(duplicateDirectiveMessage(directiveName),[knownDirectives[directiveName],directive]));
}else{
knownDirectives[directiveName]=directive;
}
});
})();
}
}};

}

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.duplicateFragmentNameMessage=duplicateFragmentNameMessage;
exports.UniqueFragmentNames=UniqueFragmentNames;

var _error=__webpack_require__(2);










function duplicateFragmentNameMessage(fragName){
return'There can only be one fragment named "'+fragName+'".';
}






function UniqueFragmentNames(context){
var knownFragmentNames=Object.create(null);
return{
OperationDefinition:function OperationDefinition(){
return false;
},
FragmentDefinition:function FragmentDefinition(node){
var fragmentName=node.name.value;
if(knownFragmentNames[fragmentName]){
context.reportError(new _error.GraphQLError(duplicateFragmentNameMessage(fragmentName),[knownFragmentNames[fragmentName],node.name]));
}else{
knownFragmentNames[fragmentName]=node.name;
}
return false;
}};

}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.duplicateInputFieldMessage=duplicateInputFieldMessage;
exports.UniqueInputFieldNames=UniqueInputFieldNames;

var _error=__webpack_require__(2);










function duplicateInputFieldMessage(fieldName){
return'There can be only one input field named "'+fieldName+'".';
}







function UniqueInputFieldNames(context){
var knownNameStack=[];
var knownNames=Object.create(null);

return{
ObjectValue:{
enter:function enter(){
knownNameStack.push(knownNames);
knownNames=Object.create(null);
},
leave:function leave(){
knownNames=knownNameStack.pop();
}},

ObjectField:function ObjectField(node){
var fieldName=node.name.value;
if(knownNames[fieldName]){
context.reportError(new _error.GraphQLError(duplicateInputFieldMessage(fieldName),[knownNames[fieldName],node.name]));
}else{
knownNames[fieldName]=node.name;
}
return false;
}};

}

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.duplicateOperationNameMessage=duplicateOperationNameMessage;
exports.UniqueOperationNames=UniqueOperationNames;

var _error=__webpack_require__(2);










function duplicateOperationNameMessage(operationName){
return'There can only be one operation named "'+operationName+'".';
}






function UniqueOperationNames(context){
var knownOperationNames=Object.create(null);
return{
OperationDefinition:function OperationDefinition(node){
var operationName=node.name;
if(operationName){
if(knownOperationNames[operationName.value]){
context.reportError(new _error.GraphQLError(duplicateOperationNameMessage(operationName.value),[knownOperationNames[operationName.value],operationName]));
}else{
knownOperationNames[operationName.value]=operationName;
}
}
return false;
},

FragmentDefinition:function FragmentDefinition(){
return false;
}};

}

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.duplicateVariableMessage=duplicateVariableMessage;
exports.UniqueVariableNames=UniqueVariableNames;

var _error=__webpack_require__(2);

function duplicateVariableMessage(variableName){
return'There can be only one variable named "'+variableName+'".';
}
















function UniqueVariableNames(context){
var knownVariableNames=Object.create(null);
return{
OperationDefinition:function OperationDefinition(){
knownVariableNames=Object.create(null);
},
VariableDefinition:function VariableDefinition(node){
var variableName=node.variable.name.value;
if(knownVariableNames[variableName]){
context.reportError(new _error.GraphQLError(duplicateVariableMessage(variableName),[knownVariableNames[variableName],node.variable.name]));
}else{
knownVariableNames[variableName]=node.variable.name;
}
}};

}

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.nonInputTypeOnVarMessage=nonInputTypeOnVarMessage;
exports.VariablesAreInputTypes=VariablesAreInputTypes;

var _error=__webpack_require__(2);

var _printer=__webpack_require__(9);

var _definition=__webpack_require__(3);

var _typeFromAST=__webpack_require__(15);

function nonInputTypeOnVarMessage(variableName,typeName){
return'Variable "$'+variableName+'" cannot be non-input type "'+typeName+'".';
}

















function VariablesAreInputTypes(context){
return{
VariableDefinition:function VariableDefinition(node){
var type=(0,_typeFromAST.typeFromAST)(context.getSchema(),node.type);


if(type&&!(0,_definition.isInputType)(type)){
var variableName=node.variable.name.value;
context.reportError(new _error.GraphQLError(nonInputTypeOnVarMessage(variableName,(0,_printer.print)(node.type)),[node.type]));
}
}};

}

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports.badVarPosMessage=badVarPosMessage;
exports.VariablesInAllowedPosition=VariablesInAllowedPosition;

var _error=__webpack_require__(2);

var _definition=__webpack_require__(3);

var _typeComparators=__webpack_require__(36);

var _typeFromAST=__webpack_require__(15);

function badVarPosMessage(varName,varType,expectedType){
return'Variable "$'+varName+'" of type "'+String(varType)+'" used in '+('position expecting type "'+String(expectedType)+'".');
}














function VariablesInAllowedPosition(context){
var varDefMap=Object.create(null);

return{
OperationDefinition:{
enter:function enter(){
varDefMap=Object.create(null);
},
leave:function leave(operation){
var usages=context.getRecursiveVariableUsages(operation);

usages.forEach(function(_ref){
var node=_ref.node,
type=_ref.type;

var varName=node.name.value;
var varDef=varDefMap[varName];
if(varDef&&type){





var schema=context.getSchema();
var varType=(0,_typeFromAST.typeFromAST)(schema,varDef.type);
if(varType&&!(0,_typeComparators.isTypeSubTypeOf)(schema,effectiveType(varType,varDef),type)){
context.reportError(new _error.GraphQLError(badVarPosMessage(varName,varType,type),[varDef,node]));
}
}
});
}},

VariableDefinition:function VariableDefinition(node){
varDefMap[node.variable.name.value]=node;
}};

}


function effectiveType(varType,varDef){
return!varDef.defaultValue||varType instanceof _definition.GraphQLNonNull?varType:new _definition.GraphQLNonNull(varType);
}

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule=true;
var loopAsync=exports.loopAsync=function loopAsync(turns,work,callback){
var currentTurn=0,
isDone=false;
var isSync=false,
hasNext=false,
doneArgs=void 0;

var done=function done(){
for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){
args[_key]=arguments[_key];
}

isDone=true;

if(isSync){

doneArgs=args;
return;
}

callback.apply(undefined,args);
};

var next=function next(){
if(isDone)return;

hasNext=true;

if(isSync)return;

isSync=true;

while(!isDone&&currentTurn<turns&&hasNext){
hasNext=false;
work(currentTurn++,next,done);
}

isSync=false;

if(isDone){

callback.apply(undefined,doneArgs);
return;
}

if(currentTurn>=turns&&hasNext){
isDone=true;
callback();
}
};

next();
};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule=true;
exports.replaceLocation=exports.pushLocation=exports.startListener=exports.getCurrentLocation=exports.go=exports.getUserConfirmation=undefined;

var _BrowserProtocol=__webpack_require__(52);

Object.defineProperty(exports,'getUserConfirmation',{
enumerable:true,
get:function get(){
return _BrowserProtocol.getUserConfirmation;
}});

Object.defineProperty(exports,'go',{
enumerable:true,
get:function get(){
return _BrowserProtocol.go;
}});


var _warning=__webpack_require__(20);

var _warning2=_interopRequireDefault(_warning);

var _LocationUtils=__webpack_require__(18);

var _DOMUtils=__webpack_require__(29);

var _DOMStateStorage=__webpack_require__(73);

var _PathUtils=__webpack_require__(16);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var HashChangeEvent='hashchange';

var getHashPath=function getHashPath(){


var href=window.location.href;
var hashIndex=href.indexOf('#');
return hashIndex===-1?'':href.substring(hashIndex+1);
};

var pushHashPath=function pushHashPath(path){
return window.location.hash=path;
};

var replaceHashPath=function replaceHashPath(path){
var hashIndex=window.location.href.indexOf('#');

window.location.replace(window.location.href.slice(0,hashIndex>=0?hashIndex:0)+'#'+path);
};

var getCurrentLocation=exports.getCurrentLocation=function getCurrentLocation(pathCoder,queryKey){
var path=pathCoder.decodePath(getHashPath());
var key=(0,_PathUtils.getQueryStringValueFromPath)(path,queryKey);

var state=void 0;
if(key){
path=(0,_PathUtils.stripQueryStringValueFromPath)(path,queryKey);
state=(0,_DOMStateStorage.readState)(key);
}

var init=(0,_PathUtils.parsePath)(path);
init.state=state;

return(0,_LocationUtils.createLocation)(init,undefined,key);
};

var prevLocation=void 0;

var startListener=exports.startListener=function startListener(listener,pathCoder,queryKey){
var handleHashChange=function handleHashChange(){
var path=getHashPath();
var encodedPath=pathCoder.encodePath(path);

if(path!==encodedPath){

replaceHashPath(encodedPath);
}else{
var currentLocation=getCurrentLocation(pathCoder,queryKey);

if(prevLocation&&currentLocation.key&&prevLocation.key===currentLocation.key)return;

prevLocation=currentLocation;

listener(currentLocation);
}
};


var path=getHashPath();
var encodedPath=pathCoder.encodePath(path);

if(path!==encodedPath)replaceHashPath(encodedPath);

(0,_DOMUtils.addEventListener)(window,HashChangeEvent,handleHashChange);

return function(){
return(0,_DOMUtils.removeEventListener)(window,HashChangeEvent,handleHashChange);
};
};

var updateLocation=function updateLocation(location,pathCoder,queryKey,updateHash){
var state=location.state;
var key=location.key;


var path=pathCoder.encodePath((0,_PathUtils.createPath)(location));

if(state!==undefined){
path=(0,_PathUtils.addQueryStringValueToPath)(path,queryKey,key);
(0,_DOMStateStorage.saveState)(key,state);
}

prevLocation=location;

updateHash(path);
};

var pushLocation=exports.pushLocation=function pushLocation(location,pathCoder,queryKey){
return updateLocation(location,pathCoder,queryKey,function(path){
if(getHashPath()!==path){
pushHashPath(path);
}else{
process.env.NODE_ENV!=='production'?(0,_warning2.default)(false,'You cannot PUSH the same path using hash history'):void 0;
}
});
};

var replaceLocation=exports.replaceLocation=function replaceLocation(location,pathCoder,queryKey){
return updateLocation(location,pathCoder,queryKey,function(path){
if(getHashPath()!==path)replaceHashPath(path);
});
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule=true;
exports.replaceLocation=exports.pushLocation=exports.getCurrentLocation=exports.go=exports.getUserConfirmation=undefined;

var _BrowserProtocol=__webpack_require__(52);

Object.defineProperty(exports,'getUserConfirmation',{
enumerable:true,
get:function get(){
return _BrowserProtocol.getUserConfirmation;
}});

Object.defineProperty(exports,'go',{
enumerable:true,
get:function get(){
return _BrowserProtocol.go;
}});


var _LocationUtils=__webpack_require__(18);

var _PathUtils=__webpack_require__(16);

var getCurrentLocation=exports.getCurrentLocation=function getCurrentLocation(){
return(0,_LocationUtils.createLocation)(window.location);
};

var pushLocation=exports.pushLocation=function pushLocation(location){
window.location.href=(0,_PathUtils.createPath)(location);
return false;
};

var replaceLocation=exports.replaceLocation=function replaceLocation(location){
window.location.replace((0,_PathUtils.createPath)(location));
return false;
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule=true;

var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _invariant=__webpack_require__(24);

var _invariant2=_interopRequireDefault(_invariant);

var _ExecutionEnvironment=__webpack_require__(38);

var _BrowserProtocol=__webpack_require__(52);

var BrowserProtocol=_interopRequireWildcard(_BrowserProtocol);

var _RefreshProtocol=__webpack_require__(166);

var RefreshProtocol=_interopRequireWildcard(_RefreshProtocol);

var _DOMUtils=__webpack_require__(29);

var _createHistory=__webpack_require__(53);

var _createHistory2=_interopRequireDefault(_createHistory);

function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}











var createBrowserHistory=function createBrowserHistory(){
var options=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];

!_ExecutionEnvironment.canUseDOM?process.env.NODE_ENV!=='production'?(0,_invariant2.default)(false,'Browser history needs a DOM'):(0,_invariant2.default)(false):void 0;

var useRefresh=options.forceRefresh||!(0,_DOMUtils.supportsHistory)();
var Protocol=useRefresh?RefreshProtocol:BrowserProtocol;

var getUserConfirmation=Protocol.getUserConfirmation;
var getCurrentLocation=Protocol.getCurrentLocation;
var pushLocation=Protocol.pushLocation;
var replaceLocation=Protocol.replaceLocation;
var go=Protocol.go;


var history=(0,_createHistory2.default)(_extends({
getUserConfirmation:getUserConfirmation},options,{
getCurrentLocation:getCurrentLocation,
pushLocation:pushLocation,
replaceLocation:replaceLocation,
go:go}));


var listenerCount=0,
stopListener=void 0;

var startListener=function startListener(listener,before){
if(++listenerCount===1)stopListener=BrowserProtocol.startListener(history.transitionTo);

var unlisten=before?history.listenBefore(listener):history.listen(listener);

return function(){
unlisten();

if(--listenerCount===0)stopListener();
};
};

var listenBefore=function listenBefore(listener){
return startListener(listener,true);
};

var listen=function listen(listener){
return startListener(listener,false);
};

return _extends({},history,{
listenBefore:listenBefore,
listen:listen});

};

exports.default=createBrowserHistory;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule=true;

var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _warning=__webpack_require__(20);

var _warning2=_interopRequireDefault(_warning);

var _invariant=__webpack_require__(24);

var _invariant2=_interopRequireDefault(_invariant);

var _ExecutionEnvironment=__webpack_require__(38);

var _DOMUtils=__webpack_require__(29);

var _HashProtocol=__webpack_require__(165);

var HashProtocol=_interopRequireWildcard(_HashProtocol);

var _createHistory=__webpack_require__(53);

var _createHistory2=_interopRequireDefault(_createHistory);

function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var DefaultQueryKey='_k';

var addLeadingSlash=function addLeadingSlash(path){
return path.charAt(0)==='/'?path:'/'+path;
};

var HashPathCoders={
hashbang:{
encodePath:function encodePath(path){
return path.charAt(0)==='!'?path:'!'+path;
},
decodePath:function decodePath(path){
return path.charAt(0)==='!'?path.substring(1):path;
}},

noslash:{
encodePath:function encodePath(path){
return path.charAt(0)==='/'?path.substring(1):path;
},
decodePath:addLeadingSlash},

slash:{
encodePath:addLeadingSlash,
decodePath:addLeadingSlash}};



var createHashHistory=function createHashHistory(){
var options=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];

!_ExecutionEnvironment.canUseDOM?process.env.NODE_ENV!=='production'?(0,_invariant2.default)(false,'Hash history needs a DOM'):(0,_invariant2.default)(false):void 0;

var queryKey=options.queryKey;
var hashType=options.hashType;


process.env.NODE_ENV!=='production'?(0,_warning2.default)(queryKey!==false,'Using { queryKey: false } no longer works. Instead, just don\'t '+'use location state if you don\'t want a key in your URL query string'):void 0;

if(typeof queryKey!=='string')queryKey=DefaultQueryKey;

if(hashType==null)hashType='slash';

if(!(hashType in HashPathCoders)){
process.env.NODE_ENV!=='production'?(0,_warning2.default)(false,'Invalid hash type: %s',hashType):void 0;

hashType='slash';
}

var pathCoder=HashPathCoders[hashType];

var getUserConfirmation=HashProtocol.getUserConfirmation;


var getCurrentLocation=function getCurrentLocation(){
return HashProtocol.getCurrentLocation(pathCoder,queryKey);
};

var pushLocation=function pushLocation(location){
return HashProtocol.pushLocation(location,pathCoder,queryKey);
};

var replaceLocation=function replaceLocation(location){
return HashProtocol.replaceLocation(location,pathCoder,queryKey);
};

var history=(0,_createHistory2.default)(_extends({
getUserConfirmation:getUserConfirmation},options,{
getCurrentLocation:getCurrentLocation,
pushLocation:pushLocation,
replaceLocation:replaceLocation,
go:HashProtocol.go}));


var listenerCount=0,
stopListener=void 0;

var startListener=function startListener(listener,before){
if(++listenerCount===1)stopListener=HashProtocol.startListener(history.transitionTo,pathCoder,queryKey);

var unlisten=before?history.listenBefore(listener):history.listen(listener);

return function(){
unlisten();

if(--listenerCount===0)stopListener();
};
};

var listenBefore=function listenBefore(listener){
return startListener(listener,true);
};

var listen=function listen(listener){
return startListener(listener,false);
};

var goIsSupportedWithoutReload=(0,_DOMUtils.supportsGoWithoutReloadUsingHash)();

var go=function go(n){
process.env.NODE_ENV!=='production'?(0,_warning2.default)(goIsSupportedWithoutReload,'Hash history go(n) causes a full page reload in this browser'):void 0;

history.go(n);
};

var createHref=function createHref(path){
return'#'+pathCoder.encodePath(history.createHref(path));
};

return _extends({},history,{
listenBefore:listenBefore,
listen:listen,
go:go,
createHref:createHref});

};

exports.default=createHashHistory;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule=true;

var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _warning=__webpack_require__(20);

var _warning2=_interopRequireDefault(_warning);

var _invariant=__webpack_require__(24);

var _invariant2=_interopRequireDefault(_invariant);

var _LocationUtils=__webpack_require__(18);

var _PathUtils=__webpack_require__(16);

var _createHistory=__webpack_require__(53);

var _createHistory2=_interopRequireDefault(_createHistory);

var _Actions=__webpack_require__(37);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var createStateStorage=function createStateStorage(entries){
return entries.filter(function(entry){
return entry.state;
}).reduce(function(memo,entry){
memo[entry.key]=entry.state;
return memo;
},{});
};

var createMemoryHistory=function createMemoryHistory(){
var options=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];

if(Array.isArray(options)){
options={entries:options};
}else if(typeof options==='string'){
options={entries:[options]};
}

var getCurrentLocation=function getCurrentLocation(){
var entry=entries[current];
var path=(0,_PathUtils.createPath)(entry);

var key=void 0,
state=void 0;
if(entry.key){
key=entry.key;
state=readState(key);
}

var init=(0,_PathUtils.parsePath)(path);

return(0,_LocationUtils.createLocation)(_extends({},init,{state:state}),undefined,key);
};

var canGo=function canGo(n){
var index=current+n;
return index>=0&&index<entries.length;
};

var go=function go(n){
if(!n)return;

if(!canGo(n)){
process.env.NODE_ENV!=='production'?(0,_warning2.default)(false,'Cannot go(%s) there is not enough history',n):void 0;

return;
}

current+=n;
var currentLocation=getCurrentLocation();


history.transitionTo(_extends({},currentLocation,{action:_Actions.POP}));
};

var pushLocation=function pushLocation(location){
current+=1;

if(current<entries.length)entries.splice(current);

entries.push(location);

saveState(location.key,location.state);
};

var replaceLocation=function replaceLocation(location){
entries[current]=location;
saveState(location.key,location.state);
};

var history=(0,_createHistory2.default)(_extends({},options,{
getCurrentLocation:getCurrentLocation,
pushLocation:pushLocation,
replaceLocation:replaceLocation,
go:go}));


var _options=options;
var entries=_options.entries;
var current=_options.current;


if(typeof entries==='string'){
entries=[entries];
}else if(!Array.isArray(entries)){
entries=['/'];
}

entries=entries.map(function(entry){
return(0,_LocationUtils.createLocation)(entry);
});

if(current==null){
current=entries.length-1;
}else{
!(current>=0&&current<entries.length)?process.env.NODE_ENV!=='production'?(0,_invariant2.default)(false,'Current index must be >= 0 and < %s, was %s',entries.length,current):(0,_invariant2.default)(false):void 0;
}

var storage=createStateStorage(entries);

var saveState=function saveState(key,state){
return storage[key]=state;
};

var readState=function readState(key){
return storage[key];
};

return _extends({},history,{
canGo:canGo});

};

exports.default=createMemoryHistory;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule=true;

var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _runTransitionHook=__webpack_require__(54);

var _runTransitionHook2=_interopRequireDefault(_runTransitionHook);

var _PathUtils=__webpack_require__(16);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var useBasename=function useBasename(createHistory){
return function(){
var options=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];

var history=createHistory(options);
var basename=options.basename;


var addBasename=function addBasename(location){
if(!location)return location;

if(basename&&location.basename==null){
if(location.pathname.indexOf(basename)===0){
location.pathname=location.pathname.substring(basename.length);
location.basename=basename;

if(location.pathname==='')location.pathname='/';
}else{
location.basename='';
}
}

return location;
};

var prependBasename=function prependBasename(location){
if(!basename)return location;

var object=typeof location==='string'?(0,_PathUtils.parsePath)(location):location;
var pname=object.pathname;
var normalizedBasename=basename.slice(-1)==='/'?basename:basename+'/';
var normalizedPathname=pname.charAt(0)==='/'?pname.slice(1):pname;
var pathname=normalizedBasename+normalizedPathname;

return _extends({},object,{
pathname:pathname});

};


var getCurrentLocation=function getCurrentLocation(){
return addBasename(history.getCurrentLocation());
};

var listenBefore=function listenBefore(hook){
return history.listenBefore(function(location,callback){
return(0,_runTransitionHook2.default)(hook,addBasename(location),callback);
});
};

var listen=function listen(listener){
return history.listen(function(location){
return listener(addBasename(location));
});
};


var push=function push(location){
return history.push(prependBasename(location));
};

var replace=function replace(location){
return history.replace(prependBasename(location));
};

var createPath=function createPath(location){
return history.createPath(prependBasename(location));
};

var createHref=function createHref(location){
return history.createHref(prependBasename(location));
};

var createLocation=function createLocation(location){
for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){
args[_key-1]=arguments[_key];
}

return addBasename(history.createLocation.apply(history,[prependBasename(location)].concat(args)));
};

return _extends({},history,{
getCurrentLocation:getCurrentLocation,
listenBefore:listenBefore,
listen:listen,
push:push,
replace:replace,
createPath:createPath,
createHref:createHref,
createLocation:createLocation});

};
};

exports.default=useBasename;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule=true;

var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _invariant=__webpack_require__(24);

var _invariant2=_interopRequireDefault(_invariant);

var _DOMUtils=__webpack_require__(29);

var _ExecutionEnvironment=__webpack_require__(38);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var startListener=function startListener(getPromptMessage){
var handleBeforeUnload=function handleBeforeUnload(event){
var message=getPromptMessage();

if(typeof message==='string'){
(event||window.event).returnValue=message;
return message;
}

return undefined;
};

(0,_DOMUtils.addEventListener)(window,'beforeunload',handleBeforeUnload);

return function(){
return(0,_DOMUtils.removeEventListener)(window,'beforeunload',handleBeforeUnload);
};
};






var useBeforeUnload=function useBeforeUnload(createHistory){
!_ExecutionEnvironment.canUseDOM?process.env.NODE_ENV!=='production'?(0,_invariant2.default)(false,'useBeforeUnload only works in DOM environments'):(0,_invariant2.default)(false):void 0;

return function(options){
var history=createHistory(options);

var listeners=[];
var stopListener=void 0;

var getPromptMessage=function getPromptMessage(){
var message=void 0;
for(var i=0,len=listeners.length;message==null&&i<len;++i){
message=listeners[i].call();
}return message;
};

var listenBeforeUnload=function listenBeforeUnload(listener){
if(listeners.push(listener)===1)stopListener=startListener(getPromptMessage);

return function(){
listeners=listeners.filter(function(item){
return item!==listener;
});

if(listeners.length===0&&stopListener){
stopListener();
stopListener=null;
}
};
};

return _extends({},history,{
listenBeforeUnload:listenBeforeUnload});

};
};

exports.default=useBeforeUnload;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule=true;

var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _queryString=__webpack_require__(250);

var _runTransitionHook=__webpack_require__(54);

var _runTransitionHook2=_interopRequireDefault(_runTransitionHook);

var _LocationUtils=__webpack_require__(18);

var _PathUtils=__webpack_require__(16);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var defaultStringifyQuery=function defaultStringifyQuery(query){
return(0,_queryString.stringify)(query).replace(/%20/g,'+');
};

var defaultParseQueryString=_queryString.parse;





var useQueries=function useQueries(createHistory){
return function(){
var options=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];

var history=createHistory(options);
var stringifyQuery=options.stringifyQuery;
var parseQueryString=options.parseQueryString;


if(typeof stringifyQuery!=='function')stringifyQuery=defaultStringifyQuery;

if(typeof parseQueryString!=='function')parseQueryString=defaultParseQueryString;

var decodeQuery=function decodeQuery(location){
if(!location)return location;

if(location.query==null)location.query=parseQueryString(location.search.substring(1));

return location;
};

var encodeQuery=function encodeQuery(location,query){
if(query==null)return location;

var object=typeof location==='string'?(0,_PathUtils.parsePath)(location):location;
var queryString=stringifyQuery(query);
var search=queryString?'?'+queryString:'';

return _extends({},object,{
search:search});

};


var getCurrentLocation=function getCurrentLocation(){
return decodeQuery(history.getCurrentLocation());
};

var listenBefore=function listenBefore(hook){
return history.listenBefore(function(location,callback){
return(0,_runTransitionHook2.default)(hook,decodeQuery(location),callback);
});
};

var listen=function listen(listener){
return history.listen(function(location){
return listener(decodeQuery(location));
});
};


var push=function push(location){
return history.push(encodeQuery(location,location.query));
};

var replace=function replace(location){
return history.replace(encodeQuery(location,location.query));
};

var createPath=function createPath(location){
return history.createPath(encodeQuery(location,location.query));
};

var createHref=function createHref(location){
return history.createHref(encodeQuery(location,location.query));
};

var createLocation=function createLocation(location){
for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){
args[_key-1]=arguments[_key];
}

var newLocation=history.createLocation.apply(history,[encodeQuery(location,location.query)].concat(args));

if(location.query)newLocation.query=(0,_LocationUtils.createQuery)(location.query);

return decodeQuery(newLocation);
};

return _extends({},history,{
getCurrentLocation:getCurrentLocation,
listenBefore:listenBefore,
listen:listen,
push:push,
replace:replace,
createPath:createPath,
createHref:createHref,
createLocation:createLocation});

};
};

exports.default=useQueries;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _Symbol=__webpack_require__(75);var _Symbol2=_interopRequireDefault(_Symbol);
var _getRawTag=__webpack_require__(176);var _getRawTag2=_interopRequireDefault(_getRawTag);
var _objectToString=__webpack_require__(177);var _objectToString2=_interopRequireDefault(_objectToString);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var nullTag='[object Null]',
undefinedTag='[object Undefined]';


var symToStringTag=_Symbol2.default?typeof _Symbol2.default==='function'?_Symbol2.default.toStringTag:'@@toStringTag':undefined;








function baseGetTag(value){
if(value==null){
return value===undefined?undefinedTag:nullTag;
}
return symToStringTag&&symToStringTag in Object(value)?
(0,_getRawTag2.default)(value):
(0,_objectToString2.default)(value);
}exports.default=

baseGetTag;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports,"__esModule",{value:true});
var freeGlobal=typeof global=='object'&&global&&global.Object===Object&&global;exports.default=

freeGlobal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61)))

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _overArg=__webpack_require__(178);var _overArg2=_interopRequireDefault(_overArg);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var getPrototype=(0,_overArg2.default)(Object.getPrototypeOf,Object);exports.default=

getPrototype;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _Symbol=__webpack_require__(75);var _Symbol2=_interopRequireDefault(_Symbol);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var objectProto=Object.prototype;


var hasOwnProperty=objectProto.hasOwnProperty;






var nativeObjectToString=objectProto.toString;


var symToStringTag=_Symbol2.default?typeof _Symbol2.default==='function'?_Symbol2.default.toStringTag:'@@toStringTag':undefined;








function getRawTag(value){
var isOwn=hasOwnProperty.call(value,symToStringTag),
tag=value[symToStringTag];

try{
value[symToStringTag]=undefined;
var unmasked=true;
}catch(e){}

var result=nativeObjectToString.call(value);
if(unmasked){
if(isOwn){
value[symToStringTag]=tag;
}else{
delete value[symToStringTag];
}
}
return result;
}exports.default=

getRawTag;

/***/ }),
/* 177 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});
var objectProto=Object.prototype;






var nativeObjectToString=objectProto.toString;








function objectToString(value){
return nativeObjectToString.call(value);
}exports.default=

objectToString;

/***/ }),
/* 178 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});







function overArg(func,transform){
return function(arg){
return func(transform(arg));
};
}exports.default=

overArg;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _freeGlobal=__webpack_require__(174);var _freeGlobal2=_interopRequireDefault(_freeGlobal);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var freeSelf=typeof self=='object'&&self&&self.Object===Object&&self;


var root=_freeGlobal2.default||freeSelf||Function('return this')();exports.default=

root;

/***/ }),
/* 180 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});























function isObjectLike(value){
return value!=null&&typeof value=='object';
}exports.default=

isObjectLike;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;





var _react=__webpack_require__(1);
var _Subscription=__webpack_require__(78);var _Subscription2=_interopRequireDefault(_Subscription);
var _storeShape=__webpack_require__(79);var _storeShape2=_interopRequireDefault(_storeShape);
var _warning=__webpack_require__(56);var _warning2=_interopRequireDefault(_warning);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var didWarnAboutReceivingStore=false;
function warnAboutReceivingStore(){
if(didWarnAboutReceivingStore){
return;
}
didWarnAboutReceivingStore=true;

(0,_warning2.default)('<Provider> does not support changing `store` on the fly. '+'It is most likely that you see this error because you updated to '+'Redux 2.x and React Redux 2.x which no longer hot reload reducers '+'automatically. See https://github.com/reactjs/react-redux/releases/'+'tag/v2.0.0 for the migration instructions.');
}

var Provider=function(_Component){
_inherits(Provider,_Component);

Provider.prototype.getChildContext=function getChildContext(){
return{store:this.store,storeSubscription:null};
};

function Provider(props,context){
_classCallCheck(this,Provider);

var _this=_possibleConstructorReturn(this,_Component.call(this,props,context));

_this.store=props.store;
return _this;
}

Provider.prototype.render=function render(){
return _react.Children.only(this.props.children);
};

return Provider;
}(_react.Component);exports.

default=Provider;


if(process.env.NODE_ENV!=='production'){
Provider.prototype.componentWillReceiveProps=function(nextProps){
var store=this.store;
var nextStore=nextProps.store;


if(store!==nextStore){
warnAboutReceivingStore();
}
};
}

Provider.propTypes={
store:_storeShape2.default.isRequired,
children:_react.PropTypes.element.isRequired};

Provider.childContextTypes={
store:_storeShape2.default.isRequired,
storeSubscription:_react.PropTypes.instanceOf(_Subscription2.default)};

Provider.displayName='Provider';
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.












































createConnect=createConnect;var _connectAdvanced=__webpack_require__(76);var _connectAdvanced2=_interopRequireDefault(_connectAdvanced);var _shallowEqual=__webpack_require__(188);var _shallowEqual2=_interopRequireDefault(_shallowEqual);var _mapDispatchToProps=__webpack_require__(183);var _mapDispatchToProps2=_interopRequireDefault(_mapDispatchToProps);var _mapStateToProps=__webpack_require__(184);var _mapStateToProps2=_interopRequireDefault(_mapStateToProps);var _mergeProps=__webpack_require__(185);var _mergeProps2=_interopRequireDefault(_mergeProps);var _selectorFactory=__webpack_require__(186);var _selectorFactory2=_interopRequireDefault(_selectorFactory);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function match(arg,factories,name){for(var i=factories.length-1;i>=0;i--){var result=factories[i](arg);if(result)return result;}return function(dispatch,options){throw new Error('Invalid value of type '+typeof arg+' for '+name+' argument when connecting component '+options.wrappedComponentName+'.');};}function strictEqual(a,b){return a===b;}function createConnect(){
var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},
_ref$connectHOC=_ref.connectHOC,
connectHOC=_ref$connectHOC===undefined?_connectAdvanced2.default:_ref$connectHOC,
_ref$mapStateToPropsF=_ref.mapStateToPropsFactories,
mapStateToPropsFactories=_ref$mapStateToPropsF===undefined?_mapStateToProps2.default:_ref$mapStateToPropsF,
_ref$mapDispatchToPro=_ref.mapDispatchToPropsFactories,
mapDispatchToPropsFactories=_ref$mapDispatchToPro===undefined?_mapDispatchToProps2.default:_ref$mapDispatchToPro,
_ref$mergePropsFactor=_ref.mergePropsFactories,
mergePropsFactories=_ref$mergePropsFactor===undefined?_mergeProps2.default:_ref$mergePropsFactor,
_ref$selectorFactory=_ref.selectorFactory,
selectorFactory=_ref$selectorFactory===undefined?_selectorFactory2.default:_ref$selectorFactory;

return function connect(mapStateToProps,mapDispatchToProps,mergeProps){
var _ref2=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{},
_ref2$pure=_ref2.pure,
pure=_ref2$pure===undefined?true:_ref2$pure,
_ref2$areStatesEqual=_ref2.areStatesEqual,
areStatesEqual=_ref2$areStatesEqual===undefined?strictEqual:_ref2$areStatesEqual,
_ref2$areOwnPropsEqua=_ref2.areOwnPropsEqual,
areOwnPropsEqual=_ref2$areOwnPropsEqua===undefined?_shallowEqual2.default:_ref2$areOwnPropsEqua,
_ref2$areStatePropsEq=_ref2.areStatePropsEqual,
areStatePropsEqual=_ref2$areStatePropsEq===undefined?_shallowEqual2.default:_ref2$areStatePropsEq,
_ref2$areMergedPropsE=_ref2.areMergedPropsEqual,
areMergedPropsEqual=_ref2$areMergedPropsE===undefined?_shallowEqual2.default:_ref2$areMergedPropsE,
extraOptions=_objectWithoutProperties(_ref2,['pure','areStatesEqual','areOwnPropsEqual','areStatePropsEqual','areMergedPropsEqual']);

var initMapStateToProps=match(mapStateToProps,mapStateToPropsFactories,'mapStateToProps');
var initMapDispatchToProps=match(mapDispatchToProps,mapDispatchToPropsFactories,'mapDispatchToProps');
var initMergeProps=match(mergeProps,mergePropsFactories,'mergeProps');

return connectHOC(selectorFactory,_extends({

methodName:'connect',


getDisplayName:function getDisplayName(name){
return'Connect('+name+')';
},


shouldHandleStateChanges:Boolean(mapStateToProps),


initMapStateToProps:initMapStateToProps,
initMapDispatchToProps:initMapDispatchToProps,
initMergeProps:initMergeProps,
pure:pure,
areStatesEqual:areStatesEqual,
areOwnPropsEqual:areOwnPropsEqual,
areStatePropsEqual:areStatePropsEqual,
areMergedPropsEqual:areMergedPropsEqual},

extraOptions));
};
}exports.default=

createConnect();

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.


whenMapDispatchToPropsIsFunction=whenMapDispatchToPropsIsFunction;exports.



whenMapDispatchToPropsIsMissing=whenMapDispatchToPropsIsMissing;exports.





whenMapDispatchToPropsIsObject=whenMapDispatchToPropsIsObject;var _redux=__webpack_require__(59);var _wrapMapToProps=__webpack_require__(77);function whenMapDispatchToPropsIsFunction(mapDispatchToProps){return typeof mapDispatchToProps==='function'?(0,_wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps,'mapDispatchToProps'):undefined;}function whenMapDispatchToPropsIsMissing(mapDispatchToProps){return!mapDispatchToProps?(0,_wrapMapToProps.wrapMapToPropsConstant)(function(dispatch){return{dispatch:dispatch};}):undefined;}function whenMapDispatchToPropsIsObject(mapDispatchToProps){
return mapDispatchToProps&&typeof mapDispatchToProps==='object'?(0,_wrapMapToProps.wrapMapToPropsConstant)(function(dispatch){
return(0,_redux.bindActionCreators)(mapDispatchToProps,dispatch);
}):undefined;
}exports.default=

[whenMapDispatchToPropsIsFunction,whenMapDispatchToPropsIsMissing,whenMapDispatchToPropsIsObject];

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.

whenMapStateToPropsIsFunction=whenMapStateToPropsIsFunction;exports.



whenMapStateToPropsIsMissing=whenMapStateToPropsIsMissing;var _wrapMapToProps=__webpack_require__(77);function whenMapStateToPropsIsFunction(mapStateToProps){return typeof mapStateToProps==='function'?(0,_wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps,'mapStateToProps'):undefined;}function whenMapStateToPropsIsMissing(mapStateToProps){
return!mapStateToProps?(0,_wrapMapToProps.wrapMapToPropsConstant)(function(){
return{};
}):undefined;
}exports.default=

[whenMapStateToPropsIsFunction,whenMapStateToPropsIsMissing];

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});exports.



defaultMergeProps=defaultMergeProps;exports.



wrapMergePropsFunc=wrapMergePropsFunc;exports.

























whenMergePropsIsFunction=whenMergePropsIsFunction;exports.



whenMergePropsIsOmitted=whenMergePropsIsOmitted;var _verifyPlainObject=__webpack_require__(80);var _verifyPlainObject2=_interopRequireDefault(_verifyPlainObject);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function defaultMergeProps(stateProps,dispatchProps,ownProps){return _extends({},ownProps,stateProps,dispatchProps);}function wrapMergePropsFunc(mergeProps){return function initMergePropsProxy(dispatch,_ref){var displayName=_ref.displayName,pure=_ref.pure,areMergedPropsEqual=_ref.areMergedPropsEqual;var hasRunOnce=false;var mergedProps=void 0;return function mergePropsProxy(stateProps,dispatchProps,ownProps){var nextMergedProps=mergeProps(stateProps,dispatchProps,ownProps);if(hasRunOnce){if(!pure||!areMergedPropsEqual(nextMergedProps,mergedProps))mergedProps=nextMergedProps;}else{hasRunOnce=true;mergedProps=nextMergedProps;if(process.env.NODE_ENV!=='production')(0,_verifyPlainObject2.default)(mergedProps,displayName,'mergeProps');}return mergedProps;};};}function whenMergePropsIsFunction(mergeProps){return typeof mergeProps==='function'?wrapMergePropsFunc(mergeProps):undefined;}function whenMergePropsIsOmitted(mergeProps){
return!mergeProps?function(){
return defaultMergeProps;
}:undefined;
}exports.default=

[whenMergePropsIsFunction,whenMergePropsIsOmitted];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});exports.



impureFinalPropsSelectorFactory=impureFinalPropsSelectorFactory;exports.





pureFinalPropsSelectorFactory=pureFinalPropsSelectorFactory;exports.default=









































































finalPropsSelectorFactory;var _verifySubselectors=__webpack_require__(187);var _verifySubselectors2=_interopRequireDefault(_verifySubselectors);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function impureFinalPropsSelectorFactory(mapStateToProps,mapDispatchToProps,mergeProps,dispatch){return function impureFinalPropsSelector(state,ownProps){return mergeProps(mapStateToProps(state,ownProps),mapDispatchToProps(dispatch,ownProps),ownProps);};}function pureFinalPropsSelectorFactory(mapStateToProps,mapDispatchToProps,mergeProps,dispatch,_ref){var areStatesEqual=_ref.areStatesEqual,areOwnPropsEqual=_ref.areOwnPropsEqual,areStatePropsEqual=_ref.areStatePropsEqual;var hasRunAtLeastOnce=false;var state=void 0;var ownProps=void 0;var stateProps=void 0;var dispatchProps=void 0;var mergedProps=void 0;function handleFirstCall(firstState,firstOwnProps){state=firstState;ownProps=firstOwnProps;stateProps=mapStateToProps(state,ownProps);dispatchProps=mapDispatchToProps(dispatch,ownProps);mergedProps=mergeProps(stateProps,dispatchProps,ownProps);hasRunAtLeastOnce=true;return mergedProps;}function handleNewPropsAndNewState(){stateProps=mapStateToProps(state,ownProps);if(mapDispatchToProps.dependsOnOwnProps)dispatchProps=mapDispatchToProps(dispatch,ownProps);mergedProps=mergeProps(stateProps,dispatchProps,ownProps);return mergedProps;}function handleNewProps(){if(mapStateToProps.dependsOnOwnProps)stateProps=mapStateToProps(state,ownProps);if(mapDispatchToProps.dependsOnOwnProps)dispatchProps=mapDispatchToProps(dispatch,ownProps);mergedProps=mergeProps(stateProps,dispatchProps,ownProps);return mergedProps;}function handleNewState(){var nextStateProps=mapStateToProps(state,ownProps);var statePropsChanged=!areStatePropsEqual(nextStateProps,stateProps);stateProps=nextStateProps;if(statePropsChanged)mergedProps=mergeProps(stateProps,dispatchProps,ownProps);return mergedProps;}function handleSubsequentCalls(nextState,nextOwnProps){var propsChanged=!areOwnPropsEqual(nextOwnProps,ownProps);var stateChanged=!areStatesEqual(nextState,state);state=nextState;ownProps=nextOwnProps;if(propsChanged&&stateChanged)return handleNewPropsAndNewState();if(propsChanged)return handleNewProps();if(stateChanged)return handleNewState();return mergedProps;}return function pureFinalPropsSelector(nextState,nextOwnProps){return hasRunAtLeastOnce?handleSubsequentCalls(nextState,nextOwnProps):handleFirstCall(nextState,nextOwnProps);};}function finalPropsSelectorFactory(dispatch,_ref2){
var initMapStateToProps=_ref2.initMapStateToProps,
initMapDispatchToProps=_ref2.initMapDispatchToProps,
initMergeProps=_ref2.initMergeProps,
options=_objectWithoutProperties(_ref2,['initMapStateToProps','initMapDispatchToProps','initMergeProps']);

var mapStateToProps=initMapStateToProps(dispatch,options);
var mapDispatchToProps=initMapDispatchToProps(dispatch,options);
var mergeProps=initMergeProps(dispatch,options);

if(process.env.NODE_ENV!=='production'){
(0,_verifySubselectors2.default)(mapStateToProps,mapDispatchToProps,mergeProps,options.displayName);
}

var selectorFactory=options.pure?pureFinalPropsSelectorFactory:impureFinalPropsSelectorFactory;

return selectorFactory(mapStateToProps,mapDispatchToProps,mergeProps,dispatch,options);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=











verifySubselectors;var _warning=__webpack_require__(56);var _warning2=_interopRequireDefault(_warning);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function verify(selector,methodName,displayName){if(!selector){throw new Error('Unexpected value for '+methodName+' in '+displayName+'.');}else if(methodName==='mapStateToProps'||methodName==='mapDispatchToProps'){if(!selector.hasOwnProperty('dependsOnOwnProps')){(0,_warning2.default)('The selector for '+methodName+' of '+displayName+' did not specify a value for dependsOnOwnProps.');}}}function verifySubselectors(mapStateToProps,mapDispatchToProps,mergeProps,displayName){
verify(mapStateToProps,'mapStateToProps',displayName);
verify(mapDispatchToProps,'mapDispatchToProps',displayName);
verify(mergeProps,'mergeProps',displayName);
}

/***/ }),
/* 188 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=

shallowEqual;var hasOwn=Object.prototype.hasOwnProperty;function shallowEqual(a,b){
if(a===b)return true;

var countA=0;
var countB=0;

for(var key in a){
if(hasOwn.call(a,key)&&a[key]!==b[key])return false;
countA++;
}

for(var _key in b){
if(hasOwn.call(b,_key))countB++;
}

return countA===countB;
}

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp;var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);
var _ResponsibleTouchArea=__webpack_require__(86);var _ResponsibleTouchArea2=_interopRequireDefault(_ResponsibleTouchArea);
var _utils=__webpack_require__(19);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

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
}}]);return Button;}(_react.Component),_class.defaultProps={staticRipple:false,rippleColor:'#FFFFFF',title:'TITLE'},_temp);exports.default=Button;process.env.NODE_ENV!=="production"?Button.propTypes={wrapperStyle:_react2.default.PropTypes.any,innerStyle:_react2.default.PropTypes.object,color:_react2.default.PropTypes.string,borderRadius:_react2.default.PropTypes.number,rippleColor:_react2.default.PropTypes.string,staticRipple:_react2.default.PropTypes.bool,icon:_react2.default.PropTypes.any,rightIcon:_react2.default.PropTypes.bool,title:_react2.default.PropTypes.string,textStyle:_react2.default.PropTypes.object,raise:_react2.default.PropTypes.bool,onPress:_react2.default.PropTypes.func}:void 0;


var styles=_reactNative.StyleSheet.create({
wrapper:{
backgroundColor:_utils.colors.sky,
borderRadius:3},

contentContainer:{
padding:10,
alignItems:'center',
justifyContent:'center'},

titleText:{
color:'#FFFFFF',
backgroundColor:'transparent'}});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp;var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);
var _utils=__webpack_require__(19);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

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
empty:empty,
focus:false};return _this;

}_createClass(Input,[{key:'render',value:function render()

{
var pointerEvents=this.props.disabled?"none":"auto",
scale=this.state.underLineAnimation.interpolate({
inputRange:[0,1],outputRange:[0.0001,1]}),
underLineStyles=_extends({},
this.props.underLineStyle,{
transform:[{scaleX:scale}]}),
inputContainerStyles=buildInputContainerStyles.call(this,this.props.wrapperStyle),
hint=this.state.focus&&this.state.empty?this.props.hint:'';

return _react2.default.createElement(_reactNative.View,{pointerEvents:pointerEvents,style:[styles.container,inputContainerStyles]},
_react2.default.createElement(_reactNative.View,{style:{marginLeft:8,marginRight:8}},
_react2.default.createElement(_reactNative.TextInput,{
onChangeText:onChangeText.bind(this),
defaultValue:this.props.value,
style:styles.textInput,
placeholder:hint,
underlineColorAndroid:'transparent',
onFocus:playAnimation.bind(this,1),
onBlur:playAnimation.bind(this,0)}),
this.renderFloatingLabel()),

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
transform:[{scale:scale},{translateX:translateX},{translateY:translateY}]},

textStyles={
color:'#888888'};


return _react2.default.createElement(_reactNative.Animated.View,{
pointerEvents:'none',
onLayout:onFloatingLabelLayout.bind(this),
style:[styles.floatingLabelWrapper,wrapperStyles]},
_react2.default.createElement(_reactNative.Text,{style:[styles.floatingLabelText,textStyles]},
this.props.floatingLabel));


}
}}]);return Input;}(_react.Component),_class.defaultProps={value:''},_temp);exports.default=Input;process.env.NODE_ENV!=="production"?Input.propTypes={wrapperStyle:_react2.default.PropTypes.any,underLineStyle:_react2.default.PropTypes.any,hint:_react2.default.PropTypes.string,floatingLabel:_react2.default.PropTypes.string,forceFloating:_react2.default.PropTypes.bool,errorText:_react2.default.PropTypes.string,disabled:_react2.default.PropTypes.bool}:void 0;


var easeInSpeed=450,
easeOutSpeed=easeInSpeed;

function onChangeText(nextValue){
this.setState({value:nextValue,empty:!nextValue.length});
}

function playAnimation(toValue){
if(this.animation)this.animation.clear();
this.setState({focus:toValue==1});

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
return _extends({},
defaults,{
paddingTop:(defaults.paddingTop||0)+(
this.props.floatingLabel?24:0)});

}

var styles=_reactNative.StyleSheet.create({
container:{
backgroundColor:'transparent',
borderBottomWidth:1,
borderColor:'#f5f5f5'},

textInput:{
height:30,
fontSize:16,
paddingTop:6,
paddingBottom:0,
color:'#444444'},

inputUnderLine:{
height:2,
backgroundColor:'#F0871A',
bottom:-1},

floatingLabelWrapper:{
position:'absolute',
justifyContent:'center',
height:30},

floatingLabelText:{
backgroundColor:'transparent',
fontSize:16}});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 191 */
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
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp;var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);

var _NavigationCard=__webpack_require__(82);var _NavigationCard2=_interopRequireDefault(_NavigationCard);
var _NavigationCardStackPanResponder=__webpack_require__(57);var _NavigationCardStackPanResponder2=_interopRequireDefault(_NavigationCardStackPanResponder);
var _NavigationCardStackStyleInterpolator=__webpack_require__(83);var _NavigationCardStackStyleInterpolator2=_interopRequireDefault(_NavigationCardStackStyleInterpolator);
var _NavigationPropTypes=__webpack_require__(31);var _NavigationPropTypes2=_interopRequireDefault(_NavigationPropTypes);
var _NavigationTransitioner=__webpack_require__(85);var _NavigationTransitioner2=_interopRequireDefault(_NavigationTransitioner);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.NavigationExperimental=undefined;var _NavigationCard=__webpack_require__(82);var _NavigationCard2=_interopRequireDefault(_NavigationCard);
var _NavigationCardStack=__webpack_require__(192);var _NavigationCardStack2=_interopRequireDefault(_NavigationCardStack);
var _NavigationHeader=__webpack_require__(194);var _NavigationHeader2=_interopRequireDefault(_NavigationHeader);
var _NavigationPropTypes=__webpack_require__(31);var _NavigationPropTypes2=_interopRequireDefault(_NavigationPropTypes);
var _NavigationStateUtils=__webpack_require__(84);var _NavigationStateUtils2=_interopRequireDefault(_NavigationStateUtils);
var _NavigationTransitioner=__webpack_require__(85);var _NavigationTransitioner2=_interopRequireDefault(_NavigationTransitioner);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var NavigationExperimental=exports.NavigationExperimental={

StateUtils:_NavigationStateUtils2.default,


Transitioner:_NavigationTransitioner2.default,


Card:_NavigationCard2.default,
CardStack:_NavigationCardStack2.default,
Header:_NavigationHeader2.default,

PropTypes:_NavigationPropTypes2.default};exports.default=


NavigationExperimental;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp;var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);var _reactNative2=_interopRequireDefault(_reactNative);

var _NavigationHeaderTitle=__webpack_require__(197);var _NavigationHeaderTitle2=_interopRequireDefault(_NavigationHeaderTitle);
var _NavigationHeaderBackButton=__webpack_require__(195);var _NavigationHeaderBackButton2=_interopRequireDefault(_NavigationHeaderBackButton);
var _NavigationPropTypes=__webpack_require__(31);var _NavigationPropTypes2=_interopRequireDefault(_NavigationPropTypes);
var _NavigationHeaderStyleInterpolator=__webpack_require__(196);var _NavigationHeaderStyleInterpolator2=_interopRequireDefault(_NavigationHeaderStyleInterpolator);
var _ReactComponentWithPureRenderMixin=__webpack_require__(210);var _ReactComponentWithPureRenderMixin2=_interopRequireDefault(_ReactComponentWithPureRenderMixin);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}































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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);var _reactNative2=_interopRequireDefault(_reactNative);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}





var NavigationHeaderBackButton=function NavigationHeaderBackButton(props){return(
_react2.default.createElement(_reactNative.TouchableOpacity,{style:styles.buttonContainer,onPress:props.onPress},
_react2.default.createElement(_reactNative.Image,{style:styles.button,source:__webpack_require__(242)})));};



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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 196 */
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
/* 197 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _reactNative=__webpack_require__(0);

var _NavigationAbstractPanResponder=__webpack_require__(81);var _NavigationAbstractPanResponder2=_interopRequireDefault(_NavigationAbstractPanResponder);
var _NavigationCardStackPanResponder=__webpack_require__(57);var _NavigationCardStackPanResponder2=_interopRequireDefault(_NavigationCardStackPanResponder);
var _utils=__webpack_require__(19);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var



















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
/* 199 */
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
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);

var _NavigationAnimatedValueSubscription=__webpack_require__(191);var _NavigationAnimatedValueSubscription2=_interopRequireDefault(_NavigationAnimatedValueSubscription);
var _invariant=__webpack_require__(41);var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}







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
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _invariant=__webpack_require__(41);var _invariant2=_interopRequireDefault(_invariant);
var _shallowEqual=__webpack_require__(93);var _shallowEqual2=_interopRequireDefault(_shallowEqual);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}







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
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.Input=exports.Button=exports.RippleEffect=exports.ResponsibleTouchArea=undefined;var _NavigationExperimental=__webpack_require__(193);Object.keys(_NavigationExperimental).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _NavigationExperimental[key];}});});
var _ResponsibleTouchArea=__webpack_require__(86);var _ResponsibleTouchArea2=_interopRequireDefault(_ResponsibleTouchArea);
var _RippleEffect=__webpack_require__(87);var _RippleEffect2=_interopRequireDefault(_RippleEffect);
var _Button=__webpack_require__(189);var _Button2=_interopRequireDefault(_Button);
var _Input=__webpack_require__(190);var _Input2=_interopRequireDefault(_Input);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var ResponsibleTouchArea=exports.ResponsibleTouchArea=_ResponsibleTouchArea2.default;
var RippleEffect=exports.RippleEffect=_RippleEffect2.default;
var Button=exports.Button=_Button2.default;
var Input=exports.Input=_Input2.default;

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.colors=undefined;var _tinycolor=__webpack_require__(95);var _tinycolor2=_interopRequireDefault(_tinycolor);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

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
/* 204 */
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
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.

push=push;var _actions=__webpack_require__(32);var Actions=_interopRequireWildcard(_actions);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function push(path){
return{
type:Actions.BrowserRouterNavigate,
location:{pathname:path},
action:'PUSH'};

}

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.history=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.






browserRouteReducer=browserRouteReducer;var _actions=__webpack_require__(32);var Actions=_interopRequireWildcard(_actions);var _history=__webpack_require__(74);var _utils=__webpack_require__(19);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}var history=exports.history=_utils.isBrowser?(0,_history.createHistory)():(0,_history.createMemoryHistory)();function browserRouteReducer(reducer){
var initialState=_extends({
location:history.location,
action:history.action},
reducer(undefined,{type:Actions.ReduxInit}));


return function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
switch(action.type){
case Actions.BrowserRouterNavigate:
return _extends({},
state,{
location:action.location,
action:action.action});

default:
return reducer(state,action);}

};
}

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.browserRouteAction=exports.nativeRouteAction=exports.routerActions=undefined;var _nativeReducer=__webpack_require__(209);







Object.keys(_nativeReducer).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _nativeReducer[key];}});});var _browserReducer=__webpack_require__(206);
Object.keys(_browserReducer).forEach(function(key){if(key==="default"||key==="__esModule")return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _browserReducer[key];}});});var _actions=__webpack_require__(32);var actionsImport=_interopRequireWildcard(_actions);var _nativeAction=__webpack_require__(208);var nativeActionImport=_interopRequireWildcard(_nativeAction);var _browserAction=__webpack_require__(205);var browserActionImport=_interopRequireWildcard(_browserAction);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}var routerActions=exports.routerActions=actionsImport;var nativeRouteAction=exports.nativeRouteAction=nativeActionImport;var browserRouteAction=exports.browserRouteAction=browserActionImport;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.

push=push;exports.



pop=pop;exports.



reset=reset;exports.



jumpTo=jumpTo;exports.



jupToIndex=jupToIndex;var _actions=__webpack_require__(32);var Actions=_interopRequireWildcard(_actions);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function push(route){return{type:Actions.NativeRouterPush,route:route};}function pop(){return{type:Actions.NativeRouterPop};}function reset(){return{type:Actions.NativeRouterReset};}function jumpTo(key){return{type:Actions.NativeRouterJumpTo,key:key};}function jupToIndex(index){
return{type:Actions.NativeRouterJumpToIndex,index:index};
}

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.


nativeRouteReducer=nativeRouteReducer;var _actions=__webpack_require__(32);var Actions=_interopRequireWildcard(_actions);var _NavigationStateUtils=__webpack_require__(84);var _NavigationStateUtils2=_interopRequireDefault(_NavigationStateUtils);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function nativeRouteReducer(reducer){
var initialState=_extends({
index:0,
routes:[]},
reducer(undefined,{type:Actions.ReduxInit}));


return function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
switch(action.type){
case Actions.NativeRouterPush:
return _NavigationStateUtils2.default.push(state,action.route);
case Actions.NativeRouterPop:
return _NavigationStateUtils2.default.pop(state);
case Actions.NativeRouterReset:
return _NavigationStateUtils2.default.reset(state);
case Actions.NativeRouterJumpTo:
return _NavigationStateUtils2.default.jumpTo(state,action.key);
case Actions.NativeRouterJumpToIndex:
return _NavigationStateUtils2.default.jumpToIndex(state,action.index);
default:
return reducer(state,action);}

};
}

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";












var shallowCompare=__webpack_require__(211);



























var ReactComponentWithPureRenderMixin={
shouldComponentUpdate:function shouldComponentUpdate(nextProps,nextState){
return shallowCompare(this,nextProps,nextState);
}};


module.exports=ReactComponentWithPureRenderMixin;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";












var shallowEqual=__webpack_require__(93);






function shallowCompare(instance,nextProps,nextState){
return!shallowEqual(instance.props,nextProps)||!shallowEqual(instance.state,nextState);
}

module.exports=shallowCompare;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=



















applyMiddleware;var _compose=__webpack_require__(88);var _compose2=_interopRequireDefault(_compose);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function applyMiddleware(){
for(var _len=arguments.length,middlewares=Array(_len),_key=0;_key<_len;_key++){
middlewares[_key]=arguments[_key];
}

return function(createStore){
return function(reducer,preloadedState,enhancer){
var store=createStore(reducer,preloadedState,enhancer);
var _dispatch=store.dispatch;
var chain=[];

var middlewareAPI={
getState:store.getState,
dispatch:function dispatch(action){
return _dispatch(action);
}};

chain=middlewares.map(function(middleware){
return middleware(middlewareAPI);
});
_dispatch=_compose2.default.apply(undefined,chain)(store.dispatch);

return _extends({},store,{
dispatch:_dispatch});

};
};
}

/***/ }),
/* 213 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=


























bindActionCreators;function bindActionCreator(actionCreator,dispatch){return function(){return dispatch(actionCreator.apply(undefined,arguments));};}function bindActionCreators(actionCreators,dispatch){
if(typeof actionCreators==='function'){
return bindActionCreator(actionCreators,dispatch);
}

if(typeof actionCreators!=='object'||actionCreators===null){
throw new Error('bindActionCreators expected an object or a function, instead received '+(actionCreators===null?'null':typeof actionCreators)+'. '+'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
}

var keys=Object.keys(actionCreators);
var boundActionCreators={};
for(var i=0;i<keys.length;i++){
var key=keys[i];
var actionCreator=actionCreators[key];
if(typeof actionCreator==='function'){
boundActionCreators[key]=bindActionCreator(actionCreator,dispatch);
}
}
return boundActionCreators;
}

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});exports.default=



































































combineReducers;var _createStore=__webpack_require__(89);var _isPlainObject=__webpack_require__(55);var _isPlainObject2=_interopRequireDefault(_isPlainObject);var _warning=__webpack_require__(90);var _warning2=_interopRequireDefault(_warning);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function getUndefinedStateErrorMessage(key,action){var actionType=action&&action.type;var actionName=actionType&&'"'+actionType.toString()+'"'||'an action';return'Given action '+actionName+', reducer "'+key+'" returned undefined. '+'To ignore an action, you must explicitly return the previous state.';}function getUnexpectedStateShapeWarningMessage(inputState,reducers,action,unexpectedKeyCache){var reducerKeys=Object.keys(reducers);var argumentName=action&&action.type===_createStore.ActionTypes.INIT?'preloadedState argument passed to createStore':'previous state received by the reducer';if(reducerKeys.length===0){return'Store does not have a valid reducer. Make sure the argument passed '+'to combineReducers is an object whose values are reducers.';}if(!(0,_isPlainObject2.default)(inputState)){return'The '+argumentName+' has unexpected type of "'+{}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following '+('keys: "'+reducerKeys.join('", "')+'"');}var unexpectedKeys=Object.keys(inputState).filter(function(key){return!reducers.hasOwnProperty(key)&&!unexpectedKeyCache[key];});unexpectedKeys.forEach(function(key){unexpectedKeyCache[key]=true;});if(unexpectedKeys.length>0){return'Unexpected '+(unexpectedKeys.length>1?'keys':'key')+' '+('"'+unexpectedKeys.join('", "')+'" found in '+argumentName+'. ')+'Expected to find one of the known reducer keys instead: '+('"'+reducerKeys.join('", "')+'". Unexpected keys will be ignored.');}}function assertReducerSanity(reducers){Object.keys(reducers).forEach(function(key){var reducer=reducers[key];var initialState=reducer(undefined,{type:_createStore.ActionTypes.INIT});if(typeof initialState==='undefined'){throw new Error('Reducer "'+key+'" returned undefined during initialization. '+'If the state passed to the reducer is undefined, you must '+'explicitly return the initial state. The initial state may '+'not be undefined.');}var type='@@redux/PROBE_UNKNOWN_ACTION_'+Math.random().toString(36).substring(7).split('').join('.');if(typeof reducer(undefined,{type:type})==='undefined'){throw new Error('Reducer "'+key+'" returned undefined when probed with a random type. '+('Don\'t try to handle '+_createStore.ActionTypes.INIT+' or other actions in "redux/*" ')+'namespace. They are considered private. Instead, you must return the '+'current state for any unknown actions, unless it is undefined, '+'in which case you must return the initial state, regardless of the '+'action type. The initial state may not be undefined.');}});}function combineReducers(reducers){
var reducerKeys=Object.keys(reducers);
var finalReducers={};
for(var i=0;i<reducerKeys.length;i++){
var key=reducerKeys[i];

if(process.env.NODE_ENV!=='production'){
if(typeof reducers[key]==='undefined'){
(0,_warning2.default)('No reducer provided for key "'+key+'"');
}
}

if(typeof reducers[key]==='function'){
finalReducers[key]=reducers[key];
}
}
var finalReducerKeys=Object.keys(finalReducers);

if(process.env.NODE_ENV!=='production'){
var unexpectedKeyCache={};
}

var sanityError;
try{
assertReducerSanity(finalReducers);
}catch(e){
sanityError=e;
}

return function combination(){
var state=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
var action=arguments[1];

if(sanityError){
throw sanityError;
}

if(process.env.NODE_ENV!=='production'){
var warningMessage=getUnexpectedStateShapeWarningMessage(state,finalReducers,action,unexpectedKeyCache);
if(warningMessage){
(0,_warning2.default)(warningMessage);
}
}

var hasChanged=false;
var nextState={};
for(var i=0;i<finalReducerKeys.length;i++){
var key=finalReducerKeys[i];
var reducer=finalReducers[key];
var previousStateForKey=state[key];
var nextStateForKey=reducer(previousStateForKey,action);
if(typeof nextStateForKey==='undefined'){
var errorMessage=getUndefinedStateErrorMessage(key,action);
throw new Error(errorMessage);
}
nextState[key]=nextStateForKey;
hasChanged=hasChanged||nextStateForKey!==previousStateForKey;
}
return hasChanged?nextState:state;
};
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

module.exports=__webpack_require__(216);

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports,"__esModule",{
value:true});


var _ponyfill=__webpack_require__(217);

var _ponyfill2=_interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

var root;


if(typeof self!=='undefined'){
root=self;
}else if(typeof window!=='undefined'){
root=window;
}else if(typeof global!=='undefined'){
root=global;
}else if(true){
root=module;
}else{
root=Function('return this')();
}

var result=(0,_ponyfill2['default'])(root);
exports['default']=result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61), __webpack_require__(246)(module)))

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports,"__esModule",{
value:true});

exports['default']=symbolObservablePonyfill;
function symbolObservablePonyfill(root){
var result;
var _Symbol=root.Symbol;

if(typeof _Symbol==='function'){
if(_Symbol.observable){
result=_Symbol.observable;
}else{
result=_Symbol('observable');
_Symbol.observable=result;
}
}else{
result='@@observable';
}

return result;
};

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=






AppContainer;var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);var _reactNative=__webpack_require__(0);var _reactRedux=__webpack_require__(30);var _routes=__webpack_require__(232);var _routes2=_interopRequireDefault(_routes);var _utils=__webpack_require__(23);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function AppContainer(_ref){var store=_ref.store;
return _react2.default.createElement(_reactRedux.Provider,{store:store},
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_routes2.default,null)));


}

var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
marginTop:_utils.sizes.navigatorHeight}});

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);

var _navigator=__webpack_require__(40);var _navigator2=_interopRequireDefault(_navigator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

AboutPage=function(_Component){_inherits(AboutPage,_Component);function AboutPage(){_classCallCheck(this,AboutPage);return _possibleConstructorReturn(this,(AboutPage.__proto__||Object.getPrototypeOf(AboutPage)).apply(this,arguments));}_createClass(AboutPage,[{key:'render',value:function render()
{var
author=this.props.routeParams.author;

return _react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_navigator2.default,null),
_react2.default.createElement(_reactNative.Text,null,'About ',author));

}}]);return AboutPage;}(_react.Component);exports.default=AboutPage;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);






var _reactUniversalUi=__webpack_require__(58);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
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
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);

var _reactRouter=__webpack_require__(94);
var _navigator=__webpack_require__(40);var _navigator2=_interopRequireDefault(_navigator);
var _sidebar=__webpack_require__(229);var _sidebar2=_interopRequireDefault(_sidebar);
var _codeBar=__webpack_require__(226);var _codeBar2=_interopRequireDefault(_codeBar);
var _demoBar=__webpack_require__(227);var _demoBar2=_interopRequireDefault(_demoBar);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

UniversalUiPage=function(_Component){_inherits(UniversalUiPage,_Component);function UniversalUiPage(){_classCallCheck(this,UniversalUiPage);return _possibleConstructorReturn(this,(UniversalUiPage.__proto__||Object.getPrototypeOf(UniversalUiPage)).apply(this,arguments));}_createClass(UniversalUiPage,[{key:'render',value:function render()
{
return _react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_navigator2.default,null),
_react2.default.createElement(_sidebar2.default,null),
_react2.default.createElement(_demoBar2.default,null),
_react2.default.createElement(_codeBar2.default,null));

}}]);return UniversalUiPage;}(_react.Component);exports.default=UniversalUiPage;


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,flexDirection:'row'}});

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);

var _EsEditor=__webpack_require__(224);var _EsEditor2=_interopRequireDefault(_EsEditor);
var _ElixirEditor=__webpack_require__(223);var _ElixirEditor2=_interopRequireDefault(_ElixirEditor);
var _GraphEditor=__webpack_require__(225);var _GraphEditor2=_interopRequireDefault(_GraphEditor);
__webpack_require__(245);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

CodeEditor=function(_Component){_inherits(CodeEditor,_Component);




function CodeEditor(props){_classCallCheck(this,CodeEditor);return _possibleConstructorReturn(this,(CodeEditor.__proto__||Object.getPrototypeOf(CodeEditor)).call(this,
props));
}_createClass(CodeEditor,[{key:'render',value:function render()

{
if(this.props.ready){
return _react2.default.createElement(_EsEditor2.default,null);
}else{
return _react2.default.createElement(_reactNative.View,null);
}
}}]);return CodeEditor;}(_react.Component);exports.default=CodeEditor;process.env.NODE_ENV!=="production"?CodeEditor.propTypes={ready:_react2.default.PropTypes.bool}:void 0;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);

var _utils=__webpack_require__(23);
var _CodeEditorUtils=__webpack_require__(60);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ElixirEditor=function(_Component){_inherits(ElixirEditor,_Component);function ElixirEditor(){_classCallCheck(this,ElixirEditor);return _possibleConstructorReturn(this,(ElixirEditor.__proto__||Object.getPrototypeOf(ElixirEditor)).apply(this,arguments));}_createClass(ElixirEditor,[{key:'render',value:function render()
{var _this2=this;
return _react2.default.createElement('div',{className:'codeEditor',ref:function ref(node){_this2.domNode=node;}});
}},{key:'componentDidMount',value:function componentDidMount()

{var _this3=this;
__webpack_require__(240);

_CodeEditorUtils.injectEditor.call(this,{
value:defaultCode,
mode:'elixir',
extraKeys:{
'Cmd-Enter':function CmdEnter(){
(0,_utils.query)('\n\t\t\t\t\t\tquery execute($source: String!) {\n\t\t\t\t\t\t\tevil(source: $source) \n\t\t\t\t\t\t}\n\t\t\t\t\t',



{source:_this3.editor.getValue()}).then(function(response){
console.info(response.evil);
}).catch(function(errors){return console.log(errors);});
}}});


}}]);return ElixirEditor;}(_react.Component);exports.default=ElixirEditor;


var defaultCode='\nuser = %{name: "Cloud Le"}\n\ncase user do\n\t%{name: name} -> "Welcome, #{name}!"\n  _ -> "Hello stranger!"\nend\n';

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);

var _CodeEditorUtils=__webpack_require__(60);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

EsEditor=function(_Component){_inherits(EsEditor,_Component);function EsEditor(){_classCallCheck(this,EsEditor);return _possibleConstructorReturn(this,(EsEditor.__proto__||Object.getPrototypeOf(EsEditor)).apply(this,arguments));}_createClass(EsEditor,[{key:'render',value:function render()
{var _this2=this;
return _react2.default.createElement('div',{className:'codeEditor',ref:function ref(node){_this2.domNode=node;}});
}},{key:'componentDidMount',value:function componentDidMount()

{var _this3=this;
__webpack_require__(119);

_CodeEditorUtils.injectEditor.call(this,{
value:defaultCode,
mode:'javascript',
extraKeys:{
'Cmd-Enter':function CmdEnter(){
eval(_this3.editor.getValue());
},
'Cmd-Space':"autocomplete"}});


}}]);return EsEditor;}(_react.Component);exports.default=EsEditor;


var defaultCode='\nconsole.log("Hello world!");\n';

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);

var _utils=__webpack_require__(23);
var _graphql=__webpack_require__(21);
var _CodeEditorUtils=__webpack_require__(60);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

GraphEditor=function(_Component){_inherits(GraphEditor,_Component);function GraphEditor(){_classCallCheck(this,GraphEditor);return _possibleConstructorReturn(this,(GraphEditor.__proto__||Object.getPrototypeOf(GraphEditor)).apply(this,arguments));}_createClass(GraphEditor,[{key:'render',value:function render()

{var _this2=this;
return _react2.default.createElement('div',{className:'codeEditor',ref:function ref(node){_this2.domNode=node;}});
}},{key:'componentDidMount',value:function componentDidMount()

{var _this3=this;
__webpack_require__(101);
__webpack_require__(97);
__webpack_require__(100);
__webpack_require__(98);
__webpack_require__(99);

(0,_utils.query)(_graphql.introspectionQuery).then(function(response){
var schema=(0,_graphql.buildClientSchema)(response);

_CodeEditorUtils.injectEditor.call(_this3,{
value:defaultQuery,
mode:'graphql',
lint:{schema:schema},
hintOptions:{schema:schema},
extraKeys:{
'Cmd-Space':function CmdSpace(){return _this3.editor.showHint({completeSingle:true});},
'Ctrl-Space':function CtrlSpace(){return _this3.editor.showHint({completeSingle:true});},
'Alt-Space':function AltSpace(){return _this3.editor.showHint({completeSingle:true});},
'Shift-Space':function ShiftSpace(){return _this3.editor.showHint({completeSingle:true});},
'Cmd-Enter':function CmdEnter(){
(0,_utils.query)(_this3.editor.getValue()).then(function(response){
console.log(response);
}).catch(function(errors){
console.error(errors);
});
}}});


});
}}]);return GraphEditor;}(_react.Component);exports.default=GraphEditor;


var defaultQuery='\nquery welcome {\n\tgreeting\n}';

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);

var _CodeEditor=__webpack_require__(222);var _CodeEditor2=_interopRequireDefault(_CodeEditor);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

UniversalCodeDemo=function(_Component){_inherits(UniversalCodeDemo,_Component);
function UniversalCodeDemo(props){_classCallCheck(this,UniversalCodeDemo);var _this=_possibleConstructorReturn(this,(UniversalCodeDemo.__proto__||Object.getPrototypeOf(UniversalCodeDemo)).call(this,
props));
_this.state={
layoutFinished:false};return _this;

}_createClass(UniversalCodeDemo,[{key:'render',value:function render()

{
return _react2.default.createElement(_reactNative.View,{style:styles.container,onLayout:onContainerLayout.bind(this)},
_react2.default.createElement(_CodeEditor2.default,{ready:this.state.layoutFinished}));

}}]);return UniversalCodeDemo;}(_react.Component);exports.default=UniversalCodeDemo;


function onContainerLayout(){
this.setState({layoutFinished:true});
}

var styles=_reactNative.StyleSheet.create({
container:{
flex:1,flexDirection:'row',
backgroundColor:'#282C34'}});

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class;var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);
var _reactRedux=__webpack_require__(30);

var _emulator=__webpack_require__(228);var _emulator2=_interopRequireDefault(_emulator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var







UniversalCodeDemo=(_dec=(0,_reactRedux.connect)(function(_ref){var app=_ref.app;return{demoComponent:app.demoComponent};}),_dec(_class=function(_Component){_inherits(UniversalCodeDemo,_Component);function UniversalCodeDemo(){_classCallCheck(this,UniversalCodeDemo);return _possibleConstructorReturn(this,(UniversalCodeDemo.__proto__||Object.getPrototypeOf(UniversalCodeDemo)).apply(this,arguments));}_createClass(UniversalCodeDemo,[{key:'render',value:function render()
{
var Demo=this.props.demoComponent;
return _react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_emulator2.default,null,
_react2.default.createElement(Demo,null)));


}}]);return UniversalCodeDemo;}(_react.Component))||_class);exports.default=UniversalCodeDemo;


var styles=_reactNative.StyleSheet.create({
container:{
paddingTop:20,
width:340,
alignItems:'center',
backgroundColor:'#333333'}});

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);
var _reactRedux=__webpack_require__(30);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

AppEmulator=function(_Component){_inherits(AppEmulator,_Component);function AppEmulator(){_classCallCheck(this,AppEmulator);return _possibleConstructorReturn(this,(AppEmulator.__proto__||Object.getPrototypeOf(AppEmulator)).apply(this,arguments));}_createClass(AppEmulator,[{key:'render',value:function render()

{
return _react2.default.createElement(_reactNative.View,{style:styles.container},
this.props.children,
_react2.default.createElement(_reactNative.View,{style:{
position:'absolute',top:0,left:0,right:0,height:64,
backgroundColor:'#00bcd4'}}),
_react2.default.createElement(_reactNative.Image,{
resizeMode:_reactNative.Image.resizeMode.contain,
style:styles.statusBar,
source:__webpack_require__(243)}));

}}]);return AppEmulator;}(_react.Component);exports.default=AppEmulator;


var emulatorSize={
width:320,height:568};


var styles=_reactNative.StyleSheet.create({
container:_extends({},
emulatorSize,{
borderRadius:3,
overflow:'hidden',
backgroundColor:'#292929'}),

statusBar:{
position:'absolute',
top:0,left:0,right:0,
height:24}});

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);

var _sideBarMenuItem=__webpack_require__(230);var _sideBarMenuItem2=_interopRequireDefault(_sideBarMenuItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

UniversalSidebar=function(_Component){_inherits(UniversalSidebar,_Component);function UniversalSidebar(){_classCallCheck(this,UniversalSidebar);return _possibleConstructorReturn(this,(UniversalSidebar.__proto__||Object.getPrototypeOf(UniversalSidebar)).apply(this,arguments));}_createClass(UniversalSidebar,[{key:'render',value:function render()
{
return _react2.default.createElement(_reactNative.View,{style:styles.container},
this.renderMenuItems());

}},{key:'renderMenuItems',value:function renderMenuItems()

{
return sideBarMenus.map(function(itemOptions,i){
return _react2.default.createElement(_sideBarMenuItem2.default,_extends({key:i},itemOptions));
});
}}]);return UniversalSidebar;}(_react.Component);exports.default=UniversalSidebar;


var styles=_reactNative.StyleSheet.create({
container:{
width:220,paddingTop:20,
backgroundColor:'white',
borderRightWidth:1,
borderColor:'#f2f2f2'}});



var sideBarMenus=[
{title:'Basic'},
{title:'Button'},
{title:'Input'},
{title:'Drawer'},
{title:'Navigator (Native)'}];

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);
var _reactUniversalUi=__webpack_require__(58);
var _utils=__webpack_require__(23);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

UniversalSidebar=function(_Component){_inherits(UniversalSidebar,_Component);function UniversalSidebar(){_classCallCheck(this,UniversalSidebar);return _possibleConstructorReturn(this,(UniversalSidebar.__proto__||Object.getPrototypeOf(UniversalSidebar)).apply(this,arguments));}_createClass(UniversalSidebar,[{key:'render',value:function render()
{
return _react2.default.createElement(_reactUniversalUi.ResponsibleTouchArea,{
className:'touchable',
rippleColor:'#c2c2c2',
wrapperStyle:styles.wrapper,
innerStyle:styles.inner},
_react2.default.createElement(_reactNative.Text,null,this.props.title));

}}]);return UniversalSidebar;}(_react.Component);exports.default=UniversalSidebar;


var styles=_reactNative.StyleSheet.create({
wrapper:{
borderBottomWidth:1,
borderColor:'#f2f2f2'},

inner:{
padding:8,
paddingTop:12,paddingBottom:12}});

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);

var _navigator=__webpack_require__(40);var _navigator2=_interopRequireDefault(_navigator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

WelcomePage=function(_Component){_inherits(WelcomePage,_Component);function WelcomePage(){_classCallCheck(this,WelcomePage);return _possibleConstructorReturn(this,(WelcomePage.__proto__||Object.getPrototypeOf(WelcomePage)).apply(this,arguments));}_createClass(WelcomePage,[{key:'render',value:function render()
{
return _react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_navigator2.default,null),
_react2.default.createElement(_reactNative.Text,null,'Welcome Page'));

}}]);return WelcomePage;}(_react.Component);exports.default=WelcomePage;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class;var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);
var _reactRedux=__webpack_require__(30);

var _reactRouter=__webpack_require__(94);
var _store=__webpack_require__(91);

var _navigator=__webpack_require__(40);var _navigator2=_interopRequireDefault(_navigator);
var _welcome=__webpack_require__(231);var _welcome2=_interopRequireDefault(_welcome);
var _about=__webpack_require__(219);var _about2=_interopRequireDefault(_about);
var _universalUi=__webpack_require__(221);var _universalUi2=_interopRequireDefault(_universalUi);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var









Routes=(_dec=(0,_reactRedux.connect)(function(_ref){var app=_ref.app,router=_ref.router;return{counter:app.counter,location:router.location,action:router.action};}),_dec(_class=function(_Component){_inherits(Routes,_Component);function Routes(){_classCallCheck(this,Routes);return _possibleConstructorReturn(this,(Routes.__proto__||Object.getPrototypeOf(Routes)).apply(this,arguments));}_createClass(Routes,[{key:'render',value:function render()
{
return _react2.default.createElement(_reactRouter.Router,{history:_store.history},
_react2.default.createElement(_reactRouter.Route,{path:'/',component:_universalUi2.default}),
_react2.default.createElement(_reactRouter.Route,{path:'/about/:author',component:_about2.default}),
_react2.default.createElement(_reactRouter.Route,{component:_welcome2.default}));

}}]);return Routes;}(_react.Component))||_class);exports.default=Routes;


function onRouterChange(location,action){
this.props.dispatch({
type:routerActions.BrowserRouterNavigate,
action:action=='SYNC'?this.props.action:action,
location:location});

}

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class;var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(0);
var _reactRedux=__webpack_require__(30);

var _utils=__webpack_require__(23);
var _router=__webpack_require__(235);var routerActions=_interopRequireWildcard(_router);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var







NavigatorMenuItem=(_dec=(0,_reactRedux.connect)(function(_ref){var app=_ref.app;return{};}),_dec(_class=function(_Component){_inherits(NavigatorMenuItem,_Component);function NavigatorMenuItem(){_classCallCheck(this,NavigatorMenuItem);return _possibleConstructorReturn(this,(NavigatorMenuItem.__proto__||Object.getPrototypeOf(NavigatorMenuItem)).apply(this,arguments));}_createClass(NavigatorMenuItem,[{key:'render',value:function render()
{
return _react2.default.createElement(_reactNative.TouchableOpacity,{
className:'touchable',style:styles.container,
onPress:onNavigate.bind(this)},
_react2.default.createElement(_reactNative.Text,{className:'no-select',style:styles.title},
this.props.title));


}}]);return NavigatorMenuItem;}(_react.Component))||_class);exports.default=NavigatorMenuItem;


function onNavigate(){
this.props.dispatch(routerActions.push(this.props.path));
}

var titleBaseStyle={
lineHeight:_utils.sizes.navigatorHeight,
fontSize:13,
fontWeight:'500'};


var styles=_reactNative.StyleSheet.create({
container:{
paddingLeft:15,paddingRight:15,
minWidth:80,
alignItems:'center'},

title:_extends({},
titleBaseStyle,{
color:'#757b8c'}),

activeTitle:_extends({},
titleBaseStyle,{
color:'#acb1be'})});

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.

increaseCounter=increaseCounter;var _actions=__webpack_require__(33);var Actions=_interopRequireWildcard(_actions);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function increaseCounter(){var volume=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;
return{type:Actions.IncreaseCounter,volume:volume};
}

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.

push=push;var _actions=__webpack_require__(33);var Actions=_interopRequireWildcard(_actions);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function push(path){var params=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
return{type:Actions.BrowserRouterNavigate,path:path,params:params};
}

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=








function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
switch(action.type){
case Actions.IncreaseCounter:
return _extends({},state,{counter:state.counter+action.volume});
default:
return state;}

};var _actions=__webpack_require__(33);var Actions=_interopRequireWildcard(_actions);var _essential=__webpack_require__(220);var _essential2=_interopRequireDefault(_essential);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}var initialState={counter:0,demoComponent:_essential2.default};

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _redux=__webpack_require__(59);
var _app=__webpack_require__(236);var _app2=_interopRequireDefault(_app);
var _router=__webpack_require__(92);var _router2=_interopRequireDefault(_router);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

(0,_redux.combineReducers)({
app:_app2.default,
router:_router2.default});

/***/ }),
/* 238 */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var sizes=exports.sizes={
navigatorHeight:60};


var colors=exports.colors={
darkBackground:'#1f2532'};

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports,"__esModule",{value:true});exports.Relay=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.



query=query;var _reactNative=__webpack_require__(0);var graphFetch=factory('http://localhost:4000/wire');function query(query){var vars=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var opts=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};

return new Promise(function(resolve,reject){
graphFetch(query,vars,opts).then(function(result){
if(result.errors){
reject(result.errors);
}else{
resolve(result.data);
}
}).catch(function(errors){
console.warn("Outer error (Network/HTTP?):",errors);
});
});
}

if(_reactNative.Platform.OS=='web')global.wire={
query:query};


function factory(graphqlUrl){
return function graphqlFetch(query){var vars=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var opts=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var headers,token;return regeneratorRuntime.async(function graphqlFetch$(_context){while(1){switch(_context.prev=_context.next){case 0:
opts.body=JSON.stringify({
query:query,
variables:vars});



opts=_extends({
method:'POST',
mode:'cors',
headers:new Headers()},
opts);



headers=opts.headers;_context.next=5;return regeneratorRuntime.awrap(_reactNative.AsyncStorage.getItem('sysConfigs'));case 5:token=_context.sent;
if(!headers.get('content-type'))opts.headers.append('content-type','application/json');
if(token)opts.headers.append('Authorization',token);return _context.abrupt('return',

fetch(graphqlUrl,opts).then(function(res){
return res.json();
}));case 9:case'end':return _context.stop();}}},null,this);};

}

var Relay=exports.Relay={
QL:function QL(fragments){for(var _len=arguments.length,params=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){params[_key-1]=arguments[_key];}
var pureQuery='',headingFragments=[],headingFragment='';

for(var i=0;i<params.length;i++){
var nextFragment=gatherFragments(headingFragment,params[i]);




if(headingFragments.indexOf(nextFragment.name)<0){
headingFragment=nextFragment.headings;
headingFragments.push(nextFragment.name);
}

pureQuery+=fragments[i]+('...'+nextFragment.name);
}


if(headingFragments.length)pureQuery=headingFragment+pureQuery;
return pureQuery+fragments[params.length];
}};


var fragmentRegEx=/[\t\n ]{0,}fragment[\n\t ]{1,}([\w]+)[\n\t ]{1,}on[\n\t ]{0,}([\w]+)[\n\t ]{0,}[{]{1}[\n\t\ ]+([\w\W]+)[\n\t ]+[}]{1}[\n\t ]{0,}/;












function gatherFragments(fragments,fragment){
var nextFragmentName=void 0,nextFragmentHeadings=fragments,
results=fragmentRegEx.exec(fragment);



if(results){

nextFragmentName=results[1];
nextFragmentHeadings+=fragment;
}

return{
headings:nextFragmentHeadings,
name:nextFragmentName};

}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61)))

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_codemirror__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_codemirror___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_codemirror__);


// CodeMirror Mode Elixir, copyright (c) by Marijn Haverbeke, Ian Walter, and
// others. Distributed under an MIT license: http://codemirror.net/LICENSE.
__WEBPACK_IMPORTED_MODULE_0_codemirror___default.a.defineMode('elixir', function (config) {
  var wordObj = function wordObj(words) {
    var o = {};
    for (var i = 0, e = words.length; i < e; ++i) {
      o[words[i]] = true;
    }return o;
  };

  var keywords = wordObj(['alias', 'case', 'cond', 'def', 'defmodule', 'defp', 'defstruct', 'defprotocol', 'defimpl', 'defmacro', 'quote', 'unquote', 'receive', 'fn', 'do', 'else', 'else if', 'end', 'false', 'if', 'in', 'next', 'rescue', 'for', 'true', 'unless', 'when', 'nil', 'raise', 'throw', 'try', 'catch', 'after', 'with', 'require', 'use', '__MODULE__', '__FILE__', '__DIR__', '__ENV__', '__CALLER__']);
  var indentWords = wordObj(['def', 'defmodule', 'defp', 'case', 'cond', 'rescue', 'try', 'catch', '->']);
  var dedentWords = wordObj(['end']);
  var matching = { '[': ']', '{': '}', '(': ')' };

  var curPunc = void 0;

  var chain = function chain(newtok, stream, state) {
    state.tokenize.push(newtok);
    return newtok(stream, state);
  };

  var tokenBase = function tokenBase(stream, state) {
    if (stream.sol() && stream.match('"""') && stream.eol()) {
      state.tokenize.push(readBlockComment);
      return 'comment';
    }

    if (stream.eatSpace()) {
      return null;
    }

    var ch = stream.next();
    var m = void 0;

    if (ch === '\'' || ch === '"') {
      return chain(readQuoted(ch, 'string', ch === '"'), stream, state);
    } else if (ch === '/') {
      var currentIndex = stream.current().length;
      if (stream.skipTo('/')) {
        var searchTill = stream.current().length;
        var balance = 0; // balance brackets

        stream.backUp(stream.current().length - currentIndex);

        while (stream.current().length < searchTill) {
          var chchr = stream.next();
          if (chchr === '(') {
            balance += 1;
          } else if (chchr === ')') {
            balance -= 1;
          }
          if (balance < 0) {
            break;
          }
        }

        stream.backUp(stream.current().length - currentIndex);

        if (balance === 0) {
          return chain(readQuoted(ch, 'string-2', true), stream, state);
        }
      }

      return 'operator';
    } else if (ch === '%') {
      var style = 'string';
      var embed = true;

      if (stream.eat('s')) {
        style = 'atom';
      } else if (stream.eat(/[WQ]/)) {
        style = 'string';
      } else if (stream.eat(/[r]/)) {
        style = 'string-2';
      } else if (stream.eat(/[wxq]/)) {
        style = 'string';
        embed = false;
      }

      var delim = stream.eat(/[^\w\s=]/);

      if (!delim) {
        return 'operator';
      }

      if (matching.propertyIsEnumerable(delim)) {
        delim = matching[delim];
      }

      return chain(readQuoted(delim, style, embed, true), stream, state);
    } else if (ch === '#') {
      stream.skipToEnd();
      return 'comment';
    } else if (ch === '<' && (m = stream.match(/^<-?[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/))) {
      return chain(readHereDoc(m[1]), stream, state);
    } else if (ch === '0') {
      if (stream.eat('x')) {
        stream.eatWhile(/[\da-fA-F]/);
      } else if (stream.eat('b')) {
        stream.eatWhile(/[01]/);
      } else {
        stream.eatWhile(/[0-7]/);
      }
      return 'number';
    } else if (/\d/.test(ch)) {
      stream.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/);
      return 'number';
    } else if (ch === '?') {
      while (stream.match(/^\\[CM]-/)) {}

      if (stream.eat('\\')) {
        stream.eatWhile(/\w/);
      } else {
        stream.next();
      }
      return 'string';
    } else if (ch === ':') {
      if (stream.eat('\'')) {
        return chain(readQuoted('\'', 'atom', false), stream, state);
      }
      if (stream.eat('"')) {
        return chain(readQuoted('"', 'atom', true), stream, state);
      }

      // :> :>> :< :<< are valid symbols
      if (stream.eat(/[\<\>]/)) {
        stream.eat(/[\<\>]/);
        return 'atom';
      }

      // :+ :- :/ :* :| :& :! are valid symbols
      if (stream.eat(/[\+\-\*\/\&\|\:\!]/)) {
        return 'atom';
      }

      // Symbols can't start by a digit
      if (stream.eat(/[a-zA-Z$@_\xa1-\uffff]/)) {
        stream.eatWhile(/[\w$\xa1-\uffff]/);
        // Only one ? ! = is allowed and only as the last character
        stream.eat(/[\?\!\=]/);
        return 'atom';
      }

      return 'operator';
    } else if (ch === '@' && stream.match(/^@?[a-zA-Z_\xa1-\uffff]/)) {
      stream.eat('@');
      stream.eatWhile(/[\w\xa1-\uffff]/);
      return 'variable-2';
    } else if (ch === '$') {
      if (stream.eat(/[a-zA-Z_]/)) {
        stream.eatWhile(/[\w]/);
      } else if (stream.eat(/\d/)) {
        stream.eat(/\d/);
      } else {
        stream.next(); // Must be a special global like $: or $!
      }
      return 'variable-3';
    } else if (/[a-zA-Z_\xa1-\uffff]/.test(ch)) {
      stream.eatWhile(/[\w\xa1-\uffff]/);
      stream.eat(/[\?\!]/);
      if (stream.eat(':')) {
        return 'atom';
      }
      return 'ident';
    } else if (ch === '|' && (state.varList || state.lastTok === '{' || state.lastTok === 'do')) {
      curPunc = '|';
      return null;
    } else if (/[\(\)\[\]{}\\;]/.test(ch)) {
      curPunc = ch;
      return null;
    } else if (ch === '-' && stream.eat('>')) {
      return 'arrow';
    } else if (ch === '|' && stream.eat('>')) {
      return 'pipe';
    } else if (/[=+\-\/*:\.^%<>~|]/.test(ch)) {
      if (ch === '.' && !stream.eatWhile(/[=+\-\/*:\.^%<>~|]/)) {
        curPunc = '.';
      }
      return 'operator';
    } else {
      return null;
    }
  };

  var tokenBaseUntilBrace = function tokenBaseUntilBrace(depth) {
    if (!depth) {
      depth = 1;
    }

    return function (stream, state) {
      if (stream.peek() === '}') {
        if (depth === 1) {
          state.tokenize.pop();
          return state.tokenize[state.tokenize.length - 1](stream, state);
        } else {
          state.tokenize[state.tokenize.length - 1] = tokenBaseUntilBrace(depth - 1);
        }
      } else if (stream.peek() === '{') {
        state.tokenize[state.tokenize.length - 1] = tokenBaseUntilBrace(depth + 1);
      }
      return tokenBase(stream, state);
    };
  };

  var tokenBaseOnce = function tokenBaseOnce() {
    var alreadyCalled = false;
    return function (stream, state) {
      if (alreadyCalled) {
        state.tokenize.pop();
        return state.tokenize[state.tokenize.length - 1](stream, state);
      }
      alreadyCalled = true;
      return tokenBase(stream, state);
    };
  };

  var readQuoted = function readQuoted(quote, style, embed, unescaped) {
    return function (stream, state) {
      var escaped = false;
      var ch = void 0;

      if (state.context.type === 'read-quoted-paused') {
        state.context = state.context.prev;
        stream.eat('}');
      }

      while ((ch = stream.next()) != null) {
        // eslint-disable-line
        if (ch === quote && (unescaped || !escaped)) {
          state.tokenize.pop();
          break;
        }

        if (embed && ch === '#' && !escaped) {
          if (stream.eat('{')) {
            if (quote === '}') {
              state.context = { prev: state.context, type: 'read-quoted-paused' };
            }
            state.tokenize.push(tokenBaseUntilBrace());
            break;
          } else if (/[@\$]/.test(stream.peek())) {
            state.tokenize.push(tokenBaseOnce());
            break;
          }
        }

        escaped = !escaped && ch === '\\';
      }

      return style;
    };
  };

  var readHereDoc = function readHereDoc(phrase) {
    return function (stream, state) {
      if (stream.match(phrase)) {
        state.tokenize.pop();
      } else {
        stream.skipToEnd();
      }
      return 'string';
    };
  };

  var readBlockComment = function readBlockComment(stream, state) {
    if (stream.sol() && stream.match('"""') && stream.eol()) {
      state.tokenize.pop();
    }
    stream.skipToEnd();
    return 'comment';
  };

  return {
    startState: function startState() {
      return {
        tokenize: [tokenBase],
        indented: 0,
        context: { type: 'top', indented: -config.indentUnit },
        continuedLine: false,
        lastTok: null,
        varList: false
      };
    },
    token: function token(stream, state) {
      curPunc = null;

      // if (stream.sol()) {
      //   state.indented = stream.indentation()
      // }

      var style = state.tokenize[state.tokenize.length - 1](stream, state);
      var kwtype = void 0;
      var thisTok = curPunc;

      if (style === 'ident') {
        var word = stream.current();

        style = state.lastTok === '.' ? 'property' : keywords.propertyIsEnumerable(stream.current()) ? 'keyword' : /^[A-Z]/.test(word) ? 'tag' : state.lastTok === 'def' || state.lastTok === 'class' || state.varList ? 'def' : 'variable';

        var isColumnIndent = stream.column() === stream.indentation();
        if (style === 'keyword') {
          thisTok = word;
          if (indentWords.propertyIsEnumerable(word)) {
            kwtype = 'indent';
          } else if (dedentWords.propertyIsEnumerable(word)) {
            kwtype = 'dedent';
          } else if ((word === 'if' || word === 'unless') && isColumnIndent) {
            kwtype = 'indent';
          } else if (word === 'do' && state.context.indented < state.indented) {
            kwtype = 'indent';
          }
        }
      }

      if (curPunc || style && style !== 'comment') {
        state.lastTok = thisTok;
      }

      if (curPunc === '|') {
        state.varList = !state.varList;
      }

      if (kwtype === 'indent' || /[\(\[\{]/.test(curPunc)) {
        state.context = {
          prev: state.context,
          type: curPunc || style,
          indented: state.indented
        };
      } else if ((kwtype === 'dedent' || /[\)\]\}]/.test(curPunc)) && state.context.prev) {
        state.context = state.context.prev;
      }

      if (stream.eol()) {
        state.continuedLine = curPunc === '\\' || style === 'operator';
      }

      return style;
    },
    // indent: (state, textAfter) => {
    //   if (state.tokenize[state.tokenize.length - 1] !== tokenBase) {
    //     return 0
    //   }
    //   let firstChar = textAfter && textAfter.charAt(0)
    //   let ct = state.context
    //   let closing = ct.type === matching[firstChar] ||
    //     ct.type === 'keyword' && /^(?:end|until|else|else if|when|rescue)\b/.test(textAfter)
    //   return ct.indented + (closing ? 0 : config.indentUnit) +
    //     (state.continuedLine ? config.indentUnit : 0)
    // },
    electricInput: /^\s*(?:end|rescue|else if|else|catch\})$/,
    lineComment: '#'
  };
});


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(120)();
// imports


// module
exports.push([module.i, ".codeEditor { height: 100%; }\n\n.cm-s-wings.CodeMirror {\n  background-color: #282C34;\n  color: #C5C8C6;\n  height: 100%;\n  font-size: 14px;\n  font-family: 'Fira Mono', 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;\n}\n\n.cm-s-wings.CodeMirror .CodeMirror-sizer { margin-top: 12px; }\n\n.cm-s-wings .CodeMirror-gutters {\n  background: #262a33;\n  color: #C5C8C6;\n  border: none;\n  margin-right: 5px;\n  padding-right: 5px;\n}\n\n.cm-s-wings .CodeMirror-guttermarker,\n.cm-s-wings .CodeMirror-guttermarker-subtle,\n.cm-s-wings .CodeMirror-linenumber { color: #636D83; font-size: 10px; }\n.cm-s-wings .CodeMirror-cursor { border-left: 1px solid #f8f8f0 !important; }\n.cm-s-wings div.CodeMirror-selected { background: rgba(255, 255, 255, 0.15); }\n.cm-s-wings .CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-wings .CodeMirror-line::selection, .cm-s-wings .CodeMirror-line > span::selection, .cm-s-wings .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-wings .CodeMirror-line::-moz-selection, .cm-s-wings .CodeMirror-line > span::-moz-selection, .cm-s-wings .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n\n.cm-s-wings .CodeMirror-activeline-background { background: rgba(0, 0, 0, 0); }\n.cm-s-wings .cm-keyword { color: #C678DD; }\n.cm-s-wings .cm-operator { color: #56B6C2; }\n.cm-s-wings .cm-variable-2 { color: #E06C75; }\n.cm-s-wings .cm-variable-3 { color: #E06C75; }\n.cm-s-wings .cm-builtin { color: #DECB6B; }\n.cm-s-wings .cm-atom { color: #F77669; }\n.cm-s-wings .cm-number { color: #D19A66; }\n.cm-s-wings .cm-def { color: rgba(233, 237, 237, 1); }\n.cm-s-wings .cm-string { color: #C3E88D; }\n.cm-s-wings .cm-string-2 { color: #80CBC4; }\n.cm-s-wings .cm-comment { color: #546E7A; }\n.cm-s-wings .cm-variable { color: #E06C75; }\n.cm-s-wings .cm-tag { color: #80CBC4; }\n.cm-s-wings .cm-meta { color: #80CBC4; }\n.cm-s-wings .cm-attribute { color: #FFCB6B; }\n.cm-s-wings .cm-property { color: #80CBAE; }\n.cm-s-wings .cm-qualifier { color: #DECB6B; }\n.cm-s-wings .cm-variable-3 { color: #DECB6B; }\n.cm-s-wings .cm-punctuation { color: #FFFFFF; }\n.cm-s-wings .cm-tag { color: rgba(255, 83, 112, 1); }\n.cm-s-wings .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #EC5F67;\n  text-decoration: overline;\n}\n.cm-s-wings .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n", ""]);

// exports


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "back-icon.png";

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ios-statusbar-light.png";

/***/ }),
/* 244 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(241);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(244)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./CodeEditor.css", function() {
			var newContent = require("!!./../../../../node_modules/css-loader/index.js!./CodeEditor.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(122);

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(396);

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(399);

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(630);

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(749);

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(96);


/***/ })
/******/ ]);