!function(e){var t={};function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=17)}([function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t,o){var a;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)&&a.length){var r=n.apply(null,a);r&&e.push(r)}else if("object"===l)for(var c in a)o.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function o(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,t,a){return t&&o(e.prototype,t),a&&o(e,a),e}},function(e,t,o){var a=o(14),n=o(15);e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?n(e):t}},function(e,t){function o(t){return e.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(t)}e.exports=o},function(e,t,o){var a=o(16);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},function(e,t){!function(){e.exports=this.wp.compose}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){function o(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=o=function(e){return typeof e}:e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(t)}e.exports=o},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function o(t,a){return e.exports=o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(t,a)}e.exports=o},function(e,t,o){"use strict";o.r(t);var a=o(12),n=o(0),l=o(2),r=o.n(l),c=o(1),i=o(5),u=o.n(i),b=o(3);function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function d(e){return e?{backgroundImage:"url(".concat(e,")")}:{}}function p(e){return function(t){if(t&&t.url){var o;if(t.media_type)o="image"===t.media_type?"image":"video";else{if("image"!==t.type&&"video"!==t.type)return;o=t.type}e(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({url:t.url,id:t.id,backgroundType:o},"video"===o?{focalPoint:void 0,hasParallax:void 0}:{}))}else e({url:void 0,id:void 0})}}var g=[{attributes:{align:{type:"string"},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},tagName:{type:"string",default:"section"},paddingTop:{type:"string",default:"extra-small"},paddingBottom:{type:"string",default:"extra-small"},paddingLeft:{type:"string",default:"small"},paddingRight:{type:"string",default:"small"},marginTop:{type:"number",default:"none"},marginBottom:{type:"number",default:"none"},url:{type:"string"},id:{type:"number"},hasParallax:{type:"boolean",default:!1},backgroundType:{type:"string",default:"image"},focalPoint:{type:"object"},bgOpacity:{type:"number",default:50}},supports:{align:["wide","full"],anchor:!0,html:!1},save:function(e){var t,o=e.className,a=e.attributes,n=a.backgroundColor,l=a.customBackgroundColor,i=a.textColor,s=a.customTextColor,p=a.tagName,g=a.url,m=a.backgroundType,f=a.focalPoint,O=a.hasParallax,_="".concat(p),v=Object(b.getColorClassName)("background-color",n),j=Object(b.getColorClassName)("color",i),y=!!a.paddingTop,h=!!a.paddingRight,x=!!a.paddingBottom,k=!!a.paddingLeft,C=!!a.marginTop,E=!!a.marginBottom,P=!!a.bgOpacity,w=u()(o,v,j,(t={"has-text-color":i||s,"has-background":n||l},r()(t,"padding-top-".concat(a.paddingTop),y),r()(t,"padding-right-".concat(a.paddingRight),h),r()(t,"padding-bottom-".concat(a.paddingBottom),x),r()(t,"padding-left-".concat(a.paddingLeft),k),r()(t,"margin-top-".concat(a.marginTop),C),r()(t,"margin-bottom-".concat(a.marginBottom),E),r()(t,"has-parallax",O),r()(t,"has-background-overlay-".concat(a.bgOpacity),P),r()(t,"has-background-overlay",P),t)),B="image"===m?d(g):{};return f&&!O&&(B.backgroundPosition="".concat(Math.round(100*f.x),"% ").concat(Math.round(100*f.y),"%")),Object(c.createElement)(_,{className:w,style:B},"video"===m&&g&&Object(c.createElement)("video",{className:"wp-block-section__video-background",autoPlay:!0,muted:!0,loop:!0,src:g}),Object(c.createElement)("div",{className:"wp-block-oleti-section__inner-container"},Object(c.createElement)(b.InnerBlocks.Content,null)))}}],m=o(6),f=o.n(m),O=o(7),_=o.n(O),v=o(8),j=o.n(v),y=o(9),h=o.n(y),x=o(10),k=o.n(x),C=o(13),E=o(11),P=o(4),w={};w.section=Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Object(c.createElement)("path",{d:"M404 192h-84v-52c0-6.6-5.4-12-12-12H108c-6.6 0-12 5.4-12 12v168c0 6.6 5.4 12 12 12h84v52c0 6.6 5.4 12 12 12h200c6.6 0 12-5.4 12-12V204c0-6.6-5.4-12-12-12zm-276 96V160h160v128zm256 64H224v-32h84c6.6 0 12-5.4 12-12v-84h64zm116-224c6.6 0 12-5.4 12-12V44c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v20H96V44c0-6.6-5.4-12-12-12H12C5.4 32 0 37.4 0 44v72c0 6.6 5.4 12 12 12h20v256H12c-6.6 0-12 5.4-12 12v72c0 6.6 5.4 12 12 12h72c6.6 0 12-5.4 12-12v-20h320v20c0 6.6 5.4 12 12 12h72c6.6 0 12-5.4 12-12v-72c0-6.6-5.4-12-12-12h-20V128zM32 64h32v32H32zm32 384H32v-32h32zm352-52v20H96v-20c0-6.6-5.4-12-12-12H64V128h20c6.6 0 12-5.4 12-12V96h320v20c0 6.6 5.4 12 12 12h20v256h-20c-6.6 0-12 5.4-12 12zm64 52h-32v-32h32zM448 96V64h32v32z"})),w.sectionMedia=Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},Object(c.createElement)("path",{d:"M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-16 400H48v-64h352zm0-112h-16l-97.07-121c-7.46-9.31-22.4-9.31-29.86 0l-63.38 79-33.05-45.78c-7.92-11-25.36-11-33.28 0L64 320H48V80h352zM144 176a32 32 0 1 0-32-32 32 32 0 0 0 32 32z"}));var B=w;function T(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}var S=["image","video"],N=window.getComputedStyle,M=Object(P.withFallbackStyles)((function(e,t){var o=t.attributes,a=o.textColor,n=o.backgroundColor,l=e.querySelector('[contenteditable="true"]'),r=l?N(l):null;return{fallbackBackgroundColor:n||!r?void 0:r.backgroundColor,fallbackTextColor:a||!r?void 0:r.color}})),L=function(e){function t(){return f()(this,t),j()(this,h()(t).apply(this,arguments))}return k()(t,e),_()(t,[{key:"render",value:function(){var e=this.props,t=e.backgroundColor,o=e.setBackgroundColor,a=e.setTextColor,l=e.textColor,i=e.fallbackTextColor,u=e.fallbackBackgroundColor,s=e.attributes,d=e.setAttributes,g=s.tagName,m=s.paddingTop,f=s.paddingRight,O=s.paddingBottom,_=s.paddingLeft,v=s.marginTop,j=s.marginBottom,y=s.id,h=s.url,x=s.backgroundType,k=s.focalPoint,C=s.hasParallax,E=s.bgOpacity,w=p(d);return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(b.BlockControls,null,!!h&&Object(c.createElement)(b.MediaReplaceFlow,{mediaId:y,mediaURL:h,allowedTypes:S,accept:"image/*,video/*",onSelect:w}),!h&&Object(c.createElement)(P.Toolbar,null,Object(c.createElement)(b.MediaUploadCheck,null,Object(c.createElement)(b.MediaUpload,{onSelect:w,allowedTypes:S,value:x,render:function(e){var t=e.open;return Object(c.createElement)(P.IconButton,{className:"components-toolbar__control",label:Object(n.__)("Add background","oleti"),icon:B.sectionMedia,onClick:t})}})))),Object(c.createElement)(b.InspectorControls,null,!h&&Object(c.createElement)(P.PanelBody,{title:Object(n.__)("Media","oleti")},Object(c.createElement)(b.MediaUploadCheck,null,Object(c.createElement)(b.MediaUpload,{onSelect:w,allowedTypes:S,value:x,render:function(e){var t=e.open;return Object(c.createElement)(P.Button,{className:"section-background-image__toggle",onClick:t},Object(n.__)("Add background","oleti"))}}))),!!h&&Object(c.createElement)(P.PanelBody,{title:Object(n.__)("Media settings","oleti")},"image"===x&&Object(c.createElement)(P.ToggleControl,{label:Object(n.__)("Fixed background","oleti"),checked:C,onChange:function(){d(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?T(Object(o),!0).forEach((function(t){r()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):T(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({hasParallax:!C},C?{}:{focalPoint:void 0}))}}),"image"===x&&!C&&Object(c.createElement)(P.FocalPointPicker,{label:Object(n.__)("Focal point picker","oleti"),url:h,value:k,onChange:function(e){return d({focalPoint:e})}}),"video"===x&&Object(c.createElement)("video",{autoPlay:!0,muted:!0,loop:!0,src:h}),Object(c.createElement)(P.PanelRow,null,Object(c.createElement)(P.Button,{isSecondary:!0,isSmall:!0,className:"block-library-section__reset-button",onClick:function(){return d({url:void 0,id:void 0,backgroundType:void 0,focalPoint:void 0,hasParallax:void 0})}},Object(n.__)("Clear Media","oleti")))),Object(c.createElement)(b.PanelColorSettings,{title:Object(n.__)("Color Settings","oleti"),colorSettings:[{value:t.color,onChange:o,label:Object(n.__)("Background Color","oleti")},{value:l.color,onChange:a,label:Object(n.__)("Text Color","oleti")}]},!!h&&Object(c.createElement)(P.RangeControl,{label:Object(n.__)("Background Color opacity","oleti"),value:E,onChange:function(e){return d({bgOpacity:e})},min:0,max:100,step:10}),Object(c.createElement)(b.ContrastChecker,{textColor:l.color,backgroundColor:t.color,fallbackTextColor:i,fallbackBackgroundColor:u})),Object(c.createElement)(P.PanelBody,{title:Object(n.__)("Spacing","oleti"),initialOpen:!1},Object(c.createElement)(P.SelectControl,{label:Object(n.__)("Padding Top","oleti"),value:m,onChange:function(e){return d({paddingTop:e})},options:[{value:"none",label:Object(n.__)("None","oleti")},{value:"extra-small",label:Object(n.__)("Extra Small","oleti")},{value:"small",label:Object(n.__)("Small","oleti")},{value:"normal",label:Object(n.__)("Normal","oleti")},{value:"medium",label:Object(n.__)("Medium","oleti")},{value:"large",label:Object(n.__)("Large","oleti")},{value:"extra-large",label:Object(n.__)("Extra Large","oleti")}]}),Object(c.createElement)(P.SelectControl,{label:Object(n.__)("Padding Right","oleti"),value:f,onChange:function(e){return d({paddingRight:e})},options:[{value:"none",label:Object(n.__)("None","oleti")},{value:"extra-small",label:Object(n.__)("Extra Small","oleti")},{value:"small",label:Object(n.__)("Small","oleti")},{value:"normal",label:Object(n.__)("Normal","oleti")},{value:"medium",label:Object(n.__)("Medium","oleti")},{value:"large",label:Object(n.__)("Large","oleti")},{value:"extra-large",label:Object(n.__)("Extra Large","oleti")}]}),Object(c.createElement)(P.SelectControl,{label:Object(n.__)("Padding Bottom","oleti"),value:O,onChange:function(e){return d({paddingBottom:e})},options:[{value:"none",label:Object(n.__)("None","oleti")},{value:"extra-small",label:Object(n.__)("Extra Small","oleti")},{value:"small",label:Object(n.__)("Small","oleti")},{value:"normal",label:Object(n.__)("Normal","oleti")},{value:"medium",label:Object(n.__)("Medium","oleti")},{value:"large",label:Object(n.__)("Large","oleti")},{value:"extra-large",label:Object(n.__)("Extra Large","oleti")}]}),Object(c.createElement)(P.SelectControl,{label:Object(n.__)("Padding Left","oleti"),value:_,onChange:function(e){return d({paddingLeft:e})},options:[{value:"none",label:Object(n.__)("None","oleti")},{value:"extra-small",label:Object(n.__)("Extra Small","oleti")},{value:"small",label:Object(n.__)("Small","oleti")},{value:"normal",label:Object(n.__)("Normal","oleti")},{value:"medium",label:Object(n.__)("Medium","oleti")},{value:"large",label:Object(n.__)("Large","oleti")},{value:"extra-large",label:Object(n.__)("Extra Large","oleti")}]}),Object(c.createElement)(P.SelectControl,{label:Object(n.__)("Margin Top","oleti"),value:v,onChange:function(e){return d({marginTop:e})},options:[{value:"none",label:Object(n.__)("None","oleti")},{value:"extra-small",label:Object(n.__)("Extra Small","oleti")},{value:"small",label:Object(n.__)("Small","oleti")},{value:"normal",label:Object(n.__)("Normal","oleti")},{value:"medium",label:Object(n.__)("Medium","oleti")},{value:"large",label:Object(n.__)("Large","oleti")},{value:"extra-large",label:Object(n.__)("Extra Large","oleti")}]}),Object(c.createElement)(P.SelectControl,{label:Object(n.__)("Margin Bottom","oleti"),value:j,onChange:function(e){return d({marginBottom:e})},options:[{value:"none",label:Object(n.__)("None","oleti")},{value:"extra-small",label:Object(n.__)("Extra Small","oleti")},{value:"small",label:Object(n.__)("Small","oleti")},{value:"normal",label:Object(n.__)("Normal","oleti")},{value:"medium",label:Object(n.__)("Medium","oleti")},{value:"large",label:Object(n.__)("Large","oleti")},{value:"extra-large",label:Object(n.__)("Extra Large","oleti")}]})),Object(c.createElement)(P.PanelBody,{title:Object(n.__)("Layout","oleti"),initialOpen:!1},Object(c.createElement)(P.SelectControl,{label:Object(n.__)("HTML Tag","oleti"),value:g,onChange:function(e){return d({tagName:e})},options:[{value:"article",label:Object(n.__)("article","oleti")},{value:"aside",label:Object(n.__)("aside","oleti")},{value:"div",label:Object(n.__)("div","oleti")},{value:"footer",label:Object(n.__)("footer","oleti")},{value:"header",label:Object(n.__)("header","oleti")},{value:"main",label:Object(n.__)("main","oleti")},{value:"nav",label:Object(n.__)("nav","oleti")},{value:"section",label:Object(n.__)("section","oleti")}]}))))}}]),t}(c.Component),z=Object(E.compose)([Object(b.withColors)("backgroundColor",{textColor:"color"}),M])(L),R=function(e){function t(){return f()(this,t),j()(this,h()(t).apply(this,arguments))}return k()(t,e),_()(t,[{key:"render",value:function(){var e,t=this.props,o=t.attributes,a=t.backgroundColor,n=t.textColor,l=t.className,i=t.hasInnerBlocks,s=t.isSelected,p=o.tagName,g=o.url,m=o.backgroundType,f=o.focalPoint,O=o.hasParallax,_="".concat(p),v=!!o.paddingTop,j=!!o.paddingRight,y=!!o.paddingBottom,h=!!o.paddingLeft,x=!!o.marginTop,k=!!o.marginBottom,C=!!o.bgOpacity,E=u()(l,(e={"has-background":a.color,"has-text-color":n.color},r()(e,a.class,a.class),r()(e,n.class,n.class),r()(e,"padding-top-".concat(o.paddingTop),v),r()(e,"padding-right-".concat(o.paddingRight),j),r()(e,"padding-bottom-".concat(o.paddingBottom),y),r()(e,"padding-left-".concat(o.paddingLeft),h),r()(e,"margin-top-".concat(o.marginTop),x),r()(e,"margin-bottom-".concat(o.marginBottom),k),r()(e,"has-parallax",O),r()(e,"has-background-overlay-".concat(o.bgOpacity),C),r()(e,"has-background-overlay",C),e)),P="image"===m?d(g):{};return f&&!O&&(P.backgroundPosition="".concat(Math.round(100*f.x),"% ").concat(Math.round(100*f.y),"%")),Object(c.createElement)(c.Fragment,null,s&&Object(c.createElement)(z,this.props),Object(c.createElement)(_,{"data-url":g,className:E,style:P},"image"===m&&Object(c.createElement)("img",{"aria-hidden":!0,alt:"",style:{display:"none"},src:g}),"video"===m&&g&&Object(c.createElement)("video",{className:"wp-block-oleti-section__video-background",autoPlay:!0,muted:!0,loop:!0,src:g}),Object(c.createElement)("div",{className:"wp-block-oleti-section__inner-container"},Object(c.createElement)(b.InnerBlocks,{renderAppender:!i&&b.InnerBlocks.ButtonBlockAppender}))))}}]),t}(c.Component),H=Object(E.compose)([Object(b.withColors)("backgroundColor",{textColor:"color"}),Object(C.withSelect)((function(e,t){var o=t.clientId,a=(0,e("core/block-editor").getBlock)(o);return{hasInnerBlocks:!(!a||!a.innerBlocks.length)}}))])(R);Object(a.registerBlockType)("oleti/section",{title:Object(n.__)("Section","oleti"),description:Object(n.__)("A Gutenberg block that allows you to add other blocks inside.","oleti"),category:"layout",icon:{src:B.section},supports:{align:["wide","full"],anchor:!0,html:!1},keywords:[Object(n.__)("section","oleti"),Object(n.__)("group","oleti"),Object(n.__)("container","oleti"),Object(n.__)("row","oleti"),Object(n.__)("wrapper","oleti")],attributes:{align:{type:"string"},backgroundColor:{type:"string"},textColor:{type:"string"},customBackgroundColor:{type:"string"},customTextColor:{type:"string"},tagName:{type:"string",default:"section"},paddingTop:{type:"string",default:"extra-small"},paddingBottom:{type:"string",default:"extra-small"},paddingLeft:{type:"string",default:"none"},paddingRight:{type:"string",default:"none"},marginTop:{type:"number",default:"none"},marginBottom:{type:"number",default:"none"},url:{type:"string"},id:{type:"number"},hasParallax:{type:"boolean",default:!1},backgroundType:{type:"string",default:"image"},focalPoint:{type:"object"},bgOpacity:{type:"number",default:50}},example:{attributes:{customBackgroundColor:"#ffffff",customTextColor:"#000000"},innerBlocks:[{name:"core/paragraph",attributes:{customTextColor:"#cf2e2e",fontSize:"large",content:Object(n.__)("One.","oleti")}},{name:"core/paragraph",attributes:{customTextColor:"#ff6900",fontSize:"large",content:Object(n.__)("Two.","oleti")}},{name:"core/paragraph",attributes:{customTextColor:"#fcb900",fontSize:"large",content:Object(n.__)("Three.","oleti")}}]},transforms:{from:[{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert:function(e){if(1!==e.length||"oleti/section"!==e[0].name){var t=["wide","full"],o=e.reduce((function(e,o){var a=o.attributes.align;return t.indexOf(a)>t.indexOf(e)?a:e}),void 0),n=e.map((function(e){return Object(a.createBlock)(e.name,e.attributes,e.innerBlocks)}));return Object(a.createBlock)("oleti/section",{align:o},n)}}}]},edit:H,save:function(e){var t,o=e.className,a=e.attributes,n=a.backgroundColor,l=a.customBackgroundColor,i=a.textColor,s=a.customTextColor,p=a.tagName,g=a.url,m=a.backgroundType,f=a.focalPoint,O=a.hasParallax,_="".concat(p),v=Object(b.getColorClassName)("background-color",n),j=Object(b.getColorClassName)("color",i),y=!!a.paddingTop,h=!!a.paddingRight,x=!!a.paddingBottom,k=!!a.paddingLeft,C=!!a.marginTop,E=!!a.marginBottom,P=!!a.bgOpacity,w=u()(o,v,j,(t={"has-text-color":i||s,"has-background":n||l},r()(t,"padding-top-".concat(a.paddingTop),y),r()(t,"padding-right-".concat(a.paddingRight),h),r()(t,"padding-bottom-".concat(a.paddingBottom),x),r()(t,"padding-left-".concat(a.paddingLeft),k),r()(t,"margin-top-".concat(a.marginTop),C),r()(t,"margin-bottom-".concat(a.marginBottom),E),r()(t,"has-parallax",O),r()(t,"has-background-overlay-".concat(a.bgOpacity),P),r()(t,"has-background-overlay",P),t)),B="image"===m?d(g):{};return f&&!O&&(B.backgroundPosition="".concat(Math.round(100*f.x),"% ").concat(Math.round(100*f.y),"%")),Object(c.createElement)(_,{className:w,style:B},"video"===m&&g&&Object(c.createElement)("video",{className:"wp-block-oleti-section__video-background",autoPlay:!0,muted:!0,loop:!0,src:g}),Object(c.createElement)("div",{className:"wp-block-oleti-section__inner-container"},Object(c.createElement)(b.InnerBlocks.Content,null)))},deprecated:g})}]);