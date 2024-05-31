"use strict";(self.webpackChunkeasy_magnify=self.webpackChunkeasy_magnify||[]).push([[544],{"./src/stories/hooks/imageZoom.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ZoomImageOnMove:()=>ZoomImageOnMove,__namedExportsOrder:()=>__namedExportsOrder,default:()=>imageZoom_stories});var react=__webpack_require__("./node_modules/react/index.js"),utils=(__webpack_require__("./src/EasyZoomOnHover.tsx"),__webpack_require__("./src/utils/index.ts"));function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var EasyZoomOnMove=function(props){var createZoomImageMove=(0,utils.j)().createZoomImage,imageMoveContainerRef=react.useRef(null),imgRef=react.useRef(null),_React_useState=_sliced_to_array(react.useState(null),2),imageDimension=_React_useState[0],setImageDimensions=_React_useState[1];react.useEffect((function(){var imageContainer=imageMoveContainerRef.current;imageContainer&&createZoomImageMove(imageContainer,{zoomImageSource:props.zoomedImage.src,zoomImageProps:{alt:props.zoomedImage.alt}})}),[props.zoomedImage.src,props.zoomedImage.alt,createZoomImageMove]);var _props_image_height,_ref,_props_image_width,_props_image_alt;return react.createElement(react.Fragment,null,react.createElement("div",{ref:imageMoveContainerRef,style:{position:"relative",height:null!==(_ref=null!==(_props_image_height=props.image.height)&&void 0!==_props_image_height?_props_image_height:null==imageDimension?void 0:imageDimension.height)&&void 0!==_ref?_ref:"auto",minWidth:null!==(_props_image_width=props.image.width)&&void 0!==_props_image_width?_props_image_width:null==imageDimension?void 0:imageDimension.width,overflow:"hidden",cursor:"crosshair"},className:"EasyImageZoomOnMoveContainer "},react.createElement("img",{className:"EasyImageZoomOnMoveImage",onLoad:function(){imgRef.current&&setImageDimensions({width:imgRef.current.naturalWidth,height:imgRef.current.naturalHeight})},ref:imgRef,style:{width:"full",height:"full"},alt:null!==(_props_image_alt=props.image.alt)&&void 0!==_props_image_alt?_props_image_alt:"Large Pic",src:props.image.src})))};const src_EasyZoomOnMove=EasyZoomOnMove;EasyZoomOnMove.__docgenInfo={description:"",methods:[],displayName:"EasyZoomOnMove",props:{image:{required:!0,tsType:{name:"signature",type:"object",raw:"{\r\n    width?: number;\r\n    height?: number;\r\n    src: string;\r\n    alt?: string;\r\n}",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1}}]}},description:""},zoomedImage:{required:!0,tsType:{name:"signature",type:"object",raw:"{\r\n    src: string;\r\n    alt?: string;\r\n}",signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1}}]}},description:""}}};__webpack_require__("./src/hooks/index.ts"),__webpack_require__("./src/core/index.ts");const imageZoom_stories={title:"Components/ZoomOnMove",component:src_EasyZoomOnMove,args:{}};var ZoomImageOnMove=function(args){return react.createElement("div",{style:{display:"flex"}},react.createElement(src_EasyZoomOnMove,{image:{src:"https://m.media-amazon.com/images/I/61vThyaOrHL._AC_SX466_.jpg",alt:"My Product",width:466,height:466},zoomedImage:{src:"https://m.media-amazon.com/images/I/61vThyaOrHL._AC_SX1500_.jpg",alt:"My Product"}}),react.createElement("div",{style:{marginLeft:"20px"}},react.createElement("h1",{className:"text-2xl font-semibold "},"Logitech G305 LIGHTSPEED Wireless Gaming Mouse, Hero 12K Sensor, 12,000 DPI, Lightweight, - Black"),react.createElement("p",null,"Price: $49.99"),react.createElement("p",null,"Brand: Logitech"),react.createElement("p",null,"Color: Black"),react.createElement("p",null,"Connectivity Technology: Wireless")))}.bind({});ZoomImageOnMove.parameters={...ZoomImageOnMove.parameters,docs:{...ZoomImageOnMove.parameters?.docs,source:{originalSource:'args => <div style={{\n  display: "flex"\n}}>\r\n    <EasyZoomOnMove image={{\n    src: "https://m.media-amazon.com/images/I/61vThyaOrHL._AC_SX466_.jpg",\n    alt: "My Product",\n    width: 466,\n    height: 466\n  }} zoomedImage={{\n    src: "https://m.media-amazon.com/images/I/61vThyaOrHL._AC_SX1500_.jpg",\n    alt: "My Product"\n  }} />\r\n    <div style={{\n    marginLeft: "20px"\n  }}>\r\n        <h1 className="text-2xl font-semibold ">Logitech G305 LIGHTSPEED Wireless Gaming Mouse, Hero 12K Sensor, 12,000 DPI, Lightweight, - Black\r\n        </h1>\r\n        <p>Price: $49.99</p>\r\n        <p>Brand: Logitech</p>\r\n        <p>Color: Black</p>\r\n        <p>Connectivity Technology: Wireless</p>\r\n    </div>\r\n\r\n\r\n</div>',...ZoomImageOnMove.parameters?.docs?.source}}};const __namedExportsOrder=["ZoomImageOnMove"]}}]);