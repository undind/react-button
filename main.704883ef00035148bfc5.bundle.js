(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1002:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1577),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1578),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);___CSS_LOADER_EXPORT___.push([module.i,".btn{background-color:red;padding:20px;font-size:26px}","",{version:3,sources:["webpack://./src/_style.scss"],names:[],mappings:"AAAA,KACE,oBAAA,CACA,YAAA,CACA,cAAA",sourcesContent:[".btn {\n  background-color: red;\n  padding: 20px;\n  font-size: 26px;\n}\n"],sourceRoot:""}]),__webpack_exports__.a=___CSS_LOADER_EXPORT___},1582:function(module,exports,__webpack_require__){__webpack_require__(1583),__webpack_require__(1756),__webpack_require__(1757),__webpack_require__(2198),__webpack_require__(2548),__webpack_require__(2586),__webpack_require__(2642),__webpack_require__(2684),__webpack_require__(2690),__webpack_require__(2726),__webpack_require__(2728),module.exports=__webpack_require__(2753)},1657:function(module,exports){},1757:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(1048)},2728:function(module,exports,__webpack_require__){"use strict";__webpack_require__(2729),__webpack_require__(2741),__webpack_require__(2745),__webpack_require__(2746),__webpack_require__(2747),__webpack_require__(2748),__webpack_require__(2749),__webpack_require__(997),__webpack_require__(2751);var _clientApi=__webpack_require__(102),_clientLogger=__webpack_require__(23),_configFilename=__webpack_require__(2768);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},2753:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(1048).configure)([__webpack_require__(2754),__webpack_require__(2758)],module,!1)}).call(this,__webpack_require__(245)(module))},2754:function(module,exports,__webpack_require__){var map={"./gettingStarted.stories.mdx":2755,"./intro.stories.mdx":2757};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=2754},2755:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(1566),__webpack_require__(998),__webpack_require__(997),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(99),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(241);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Meta,{title:"Getting Started",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("div",{style:{margin:"0 auto",maxWidth:"600px",color:"white",textAlign:"center"}},"React button"))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Getting Started",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},2757:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(1566),__webpack_require__(998),__webpack_require__(997),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(99),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(241);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Meta,{title:"Intro",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("div",{style:{margin:"0 auto",maxWidth:"600px",color:"white",textAlign:"center"}},"React button"))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Intro",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},2758:function(module,exports,__webpack_require__){var map={"./Button.stories.tsx":2767};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=2758},2767:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Simple",(function(){return Simple}));__webpack_require__(2759),__webpack_require__(998);var jsx_runtime=__webpack_require__(616),react=__webpack_require__(0),injectStylesIntoStyleTag=(__webpack_require__(2762),__webpack_require__(1576)),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),_style=__webpack_require__(1002),options={insert:"head",singleton:!1},classnames=(injectStylesIntoStyleTag_default()(_style.a,options),_style.a.locals,__webpack_require__(1579)),classnames_default=__webpack_require__.n(classnames);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Button_Button=function Button(_ref){var text=_ref.text,classString=_ref.classString,_onClick=_ref.onClick,_useState2=_slicedToArray(Object(react.useState)(text),2),state=_useState2[0],setState=_useState2[1];return Object(jsx_runtime.jsx)("button",{className:classnames_default()("btn","".concat(classString)),onClick:function onClick(e){setState("test"),_onClick(e)},children:state})};Button_Button.displayName="Button";var src_Button=Button_Button;try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},classString:{defaultValue:null,description:"",name:"classString",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(e: any) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Example/Button",component:src_Button};var Button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(src_Button,Object.assign({},args))};Button_stories_Template.displayName="Template";var Simple=Button_stories_Template.bind({});Simple.args={text:"Click",gradient:!0,onClick:function onClick(){return{}}},Simple.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Simple.parameters)},2768:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var create=__webpack_require__(1575),parameters={options:{storySort:function storySort(a,b){return a[0]<b[0]?1:-1}},layout:"centered",docs:{theme:Object(create.create)({base:"dark",brandTitle:"React button",brandUrl:"https://github.com/undind/react-button"})}}}},[[1582,1,2]]]);
//# sourceMappingURL=main.704883ef00035148bfc5.bundle.js.map