"use strict";(self.webpackChunkeasy_magnify=self.webpackChunkeasy_magnify||[]).push([[180],{"./src/stories/hooks/useMouse.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UseMouseDemoTest:()=>UseMouseDemoTest,__namedExportsOrder:()=>__namedExportsOrder,default:()=>useMouse_stories});var react=__webpack_require__("./node_modules/react/index.js"),hooks=__webpack_require__("./src/hooks/index.ts"),UseMouseDemo=function(){var _useMouse=(0,hooks.NT)({resetOnExit:!0}),ref=_useMouse.ref,x=_useMouse.x,y=_useMouse.y;return react.createElement(react.Fragment,null,react.createElement("p",null,"Note: Don't use this hook as of 1.1.0 as it re-renders whole component on mouse position change. It will be optimized on future versions to ensure debouncing and better performance."),react.createElement("div",{style:{height:"300px",width:"300px",border:"2px solid black"},ref}),react.createElement("p",null,"Mouse coordinates ","{ x: ".concat(x,", y: ").concat(y," }")))};const components_UseMouseDemo=UseMouseDemo;UseMouseDemo.__docgenInfo={description:"",methods:[],displayName:"UseMouseDemo"};const useMouse_stories={title:"Components/UseMouseDemo",component:components_UseMouseDemo,argTypes:{}};var UseMouseDemoTest=function(args){return react.createElement(components_UseMouseDemo,null)}.bind({});UseMouseDemoTest.parameters={...UseMouseDemoTest.parameters,docs:{...UseMouseDemoTest.parameters?.docs,source:{originalSource:"args => <UseMouseDemo />",...UseMouseDemoTest.parameters?.docs?.source}}};const __namedExportsOrder=["UseMouseDemoTest"]},"./src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kZ:()=>useSkeleton.k,y$:()=>createStore,NT:()=>use_mouse});var react=__webpack_require__("./node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const use_mouse=function useMouse(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{resetOnExit:!1},_useState=_sliced_to_array((0,react.useState)({x:0,y:0}),2),position=_useState[0],setPosition=_useState[1],ref=(0,react.useRef)(null),requestRef=(0,react.useRef)(null),positionRef=(0,react.useRef)(position),setMousePosition=(0,react.useCallback)((function(event){if(ref.current){var rect=event.currentTarget.getBoundingClientRect(),x=Math.max(0,Math.round(event.pageX-rect.left-(window.pageXOffset||window.scrollX))),y=Math.max(0,Math.round(event.pageY-rect.top-(window.pageYOffset||window.scrollY)));positionRef.current={x,y}}else positionRef.current={x:event.clientX,y:event.clientY};null===requestRef.current&&(requestRef.current=requestAnimationFrame((function(){setPosition(positionRef.current),requestRef.current=null})))}),[]),resetMousePosition=(0,react.useCallback)((function(){positionRef.current={x:0,y:0},setPosition({x:0,y:0})}),[]);return(0,react.useEffect)((function(){var element=ref.current||document;return element.addEventListener("mousemove",setMousePosition),options.resetOnExit&&element.addEventListener("mouseleave",resetMousePosition),function(){element.removeEventListener("mousemove",setMousePosition),options.resetOnExit&&element.removeEventListener("mouseleave",resetMousePosition),null!==requestRef.current&&cancelAnimationFrame(requestRef.current)}}),[setMousePosition,resetMousePosition,options.resetOnExit]),function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({ref},position)};var useSkeleton=__webpack_require__("./src/hooks/useSkeleton/index.ts");function use_store_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function use_store_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){use_store_define_property(target,key,source[key])}))}return target}function createStore(initialState){var updatedProperties,listeners=new Set,batching=!1,state=initialState,flush=function(){if(!batching){var hasChanged=!1;if(updatedProperties)for(var key in updatedProperties)if(state[key]!==updatedProperties[key]){hasChanged=!0;break}hasChanged&&(state=use_store_object_spread({},state,updatedProperties),listeners.forEach((function(listener){return listener({state,updatedProperties})})),updatedProperties=void 0)}};return{subscribe:function(listener){return listeners.add(listener),function(){listeners.delete(listener)}},cleanup:function(){return listeners.clear()},getState:function(){return state},setState:function(){updatedProperties=use_store_object_spread({},updatedProperties,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),flush()},batch:function(cb){batching=!0,cb(),batching=!1,flush()}}}},"./src/hooks/useSkeleton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Skeleton});var react=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var EasySkeleton=function(props){var height=props.height,width=props.width,backgroundColor=props.backgroundColor,animation=props.animation,other=_object_without_properties(props,["height","width","backgroundColor","animation"]);return react.createElement("div",function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({className:"easyPulseSkeleton",style:{backgroundColor:null!=backgroundColor?backgroundColor:"#0000001c",height:"".concat(height,"px"),width:"".concat(width,"px"),animation:null!=animation?animation:"pulse 2s ease-in-out 0.5s infinite"}},other))};const Skeleton=EasySkeleton;EasySkeleton.__docgenInfo={description:"",methods:[],displayName:"EasySkeleton",props:{height:{required:!0,tsType:{name:"number"},description:""},width:{required:!0,tsType:{name:"number"},description:""},animation:{required:!1,tsType:{name:"string"},description:'Animation of the skeleton. Default is "pulse 2s ease-in-out 0.5s infinite"'},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color of the skeleton. Default is #0000001c"}},composes:["HTMLAttributes"]}}}]);