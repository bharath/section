!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=17)}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){!function(){t.exports=this.wp.blockEditor}()},function(t,e){t.exports=function(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}},function(t,e){!function(){t.exports=this.wp.components}()},function(t,e,o){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var a=typeof n;if("string"===a||"number"===a)t.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&t.push(c)}else if("object"===a)for(var i in n)o.call(n,i)&&n[i]&&t.push(i)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(n=function(){return r}.apply(e,[]))||(t.exports=n)}()},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function o(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}},function(t,e,o){var n=o(14),r=o(15);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?r(t):e}},function(t,e){function o(e){return t.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(e)}t.exports=o},function(t,e,o){var n=o(16);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},function(t,e){!function(){t.exports=this.wp.compose}()},function(t,e){!function(){t.exports=this.wp.blocks}()},function(t,e){!function(){t.exports=this.wp.data}()},function(t,e){function o(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=o=function(t){return typeof t}:t.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(e)}t.exports=o},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function o(e,n){return t.exports=o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},o(e,n)}t.exports=o},function(t,e,o){"use strict";o.r(e);var n=o(12),r=o(1),a=o(3),c=o.n(a),i=o(0),l=o(5),u=o.n(l),s=o(2),p=[{attributes:{backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"},paddingSize:{type:"string"},paddingUnit:{type:"string",default:"px"},marginSize:{type:"string"},marginUnit:{type:"string",default:"px"},tagName:{type:"string",default:"section"}},supports:{align:["wide","full"],anchor:!0,html:!1},save:function(t){var e,o=t.className,n=t.attributes,r=n.backgroundColor,a=n.customBackgroundColor,l=n.textColor,p=n.customTextColor,b=n.tagName,g="".concat(b),m=Object(s.getColorClassName)("background-color",r),d=Object(s.getColorClassName)("color",l),f=!!n.paddingSize,v=!!n.marginSize,h=u()(o,m,d,(e={"has-text-color":l||p,"has-background":r||a,"has-padding":f,"has-margin":v},c()(e,"padding-".concat(n.paddingSize),f),c()(e,"margin-".concat(n.marginSize),v),e)),O={backgroundColor:m?void 0:a,color:d?void 0:p};return Object(i.createElement)(g,{className:h,style:O},Object(i.createElement)("div",{className:"wp-block-oleti-section__inner-container"},Object(i.createElement)(s.InnerBlocks.Content,null)))}}],b=o(6),g=o.n(b),m=o(7),d=o.n(m),f=o(8),v=o.n(f),h=o(9),O=o.n(h),y=o(10),j=o.n(y),C=o(13),_=o(11),x=o(4),k=window.getComputedStyle,B=Object(x.withFallbackStyles)((function(t,e){var o=e.attributes,n=o.textColor,r=o.backgroundColor,a=t.querySelector('[contenteditable="true"]'),c=a?k(a):null;return{fallbackBackgroundColor:r||!c?void 0:c.backgroundColor,fallbackTextColor:n||!c?void 0:c.color}})),T=function(t){function e(){return g()(this,e),v()(this,O()(e).apply(this,arguments))}return j()(e,t),d()(e,[{key:"render",value:function(){var t=this.props,e=t.backgroundColor,o=t.setBackgroundColor,n=t.setTextColor,a=t.textColor,c=t.fallbackTextColor,l=t.fallbackBackgroundColor,u=t.attributes,p=t.setAttributes,b=u.tagName,g=u.paddingTop,m=u.paddingBottom,d=u.marginTop,f=u.marginBottom;return Object(i.createElement)(i.Fragment,null,Object(i.createElement)(s.InspectorControls,null,Object(i.createElement)(x.PanelBody,{title:Object(r.__)("Spacing","oleti")},Object(i.createElement)(x.RangeControl,{value:g,onChange:function(t){return p({paddingTop:t})},label:Object(r.__)("Padding Top"),min:0,max:100,initialPosition:0,allowReset:!0}),Object(i.createElement)(x.RangeControl,{value:m,onChange:function(t){return p({paddingBottom:t})},label:Object(r.__)("Padding Bottom"),min:0,max:100,initialPosition:0,allowReset:!0}),Object(i.createElement)(x.RangeControl,{value:d,onChange:function(t){return p({marginTop:t})},label:Object(r.__)("Margin Top"),min:0,max:100,initialPosition:0,allowReset:!0}),Object(i.createElement)(x.RangeControl,{value:f,onChange:function(t){return p({marginBottom:t})},label:Object(r.__)("Margin Bottom"),min:0,max:100,initialPosition:0,allowReset:!0})),Object(i.createElement)(s.PanelColorSettings,{title:Object(r.__)("Color Settings","oleti"),initialOpen:!1,colorSettings:[{value:e.color,onChange:o,label:Object(r.__)("Background Color","oleti")},{value:a.color,onChange:n,label:Object(r.__)("Text Color","oleti")}]},Object(i.createElement)(s.ContrastChecker,{textColor:a.color,backgroundColor:e.color,fallbackTextColor:c,fallbackBackgroundColor:l})),Object(i.createElement)(x.PanelBody,{title:Object(r.__)("Layout","oleti"),initialOpen:!1},Object(i.createElement)(x.SelectControl,{label:Object(r.__)("HTML Tag","oleti"),value:b,onChange:function(t){return p({tagName:t})},options:[{value:"article",label:Object(r.__)("article","oleti")},{value:"aside",label:Object(r.__)("aside","oleti")},{value:"div",label:Object(r.__)("div","oleti")},{value:"footer",label:Object(r.__)("footer","oleti")},{value:"header",label:Object(r.__)("header","oleti")},{value:"main",label:Object(r.__)("main","oleti")},{value:"nav",label:Object(r.__)("nav","oleti")},{value:"section",label:Object(r.__)("section","oleti")}]}))))}}]),e}(i.Component),w=Object(_.compose)([Object(s.withColors)("backgroundColor",{textColor:"color"}),B])(T),S=function(t){function e(){return g()(this,e),v()(this,O()(e).apply(this,arguments))}return j()(e,t),d()(e,[{key:"render",value:function(){var t,e=this.props,o=e.attributes,n=e.backgroundColor,r=e.textColor,a=e.className,l=e.hasInnerBlocks,p=e.isSelected,b=o.tagName,g=o.paddingTop,m=o.paddingBottom,d=o.marginTop,f=o.marginBottom,v="".concat(b),h=!!o.paddingTop,O=!!o.paddingBottom,y=!!o.marginTop,j=!!o.marginBottom,C=u()(a,(t={"has-background":n.color,"has-text-color":r.color},c()(t,n.class,n.class),c()(t,r.class,r.class),c()(t,"padding-top-".concat(o.paddingTop),h),c()(t,"padding-bottom-".concat(o.paddingBottom),O),c()(t,"margin-top-".concat(o.marginTop),y),c()(t,"margin-bottom-".concat(o.marginBottom),j),t)),_={backgroundColor:n.color,color:r.color,paddingTop:g?g+"px":void 0,paddingBottom:m?m+"px":void 0,marginTop:d?d+"px":void 0,marginBottom:f?f+"px":void 0};return Object(i.createElement)(i.Fragment,null,p&&Object(i.createElement)(w,this.props),Object(i.createElement)(v,{className:C,style:_},Object(i.createElement)("div",{className:"wp-block-oleti-section__inner-container"},Object(i.createElement)(s.InnerBlocks,{renderAppender:!l&&s.InnerBlocks.ButtonBlockAppender}))))}}]),e}(i.Component),E=Object(_.compose)([Object(s.withColors)("backgroundColor",{textColor:"color"}),Object(C.withSelect)((function(t,e){var o=e.clientId,n=(0,t("core/block-editor").getBlock)(o);return{hasInnerBlocks:!(!n||!n.innerBlocks.length)}}))])(S);var z=Object(i.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Object(i.createElement)("path",{d:"M404 192h-84v-52c0-6.6-5.4-12-12-12H108c-6.6 0-12 5.4-12 12v168c0 6.6 5.4 12 12 12h84v52c0 6.6 5.4 12 12 12h200c6.6 0 12-5.4 12-12V204c0-6.6-5.4-12-12-12zm-276 96V160h160v128zm256 64H224v-32h84c6.6 0 12-5.4 12-12v-84h64zm116-224c6.6 0 12-5.4 12-12V44c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v20H96V44c0-6.6-5.4-12-12-12H12C5.4 32 0 37.4 0 44v72c0 6.6 5.4 12 12 12h20v256H12c-6.6 0-12 5.4-12 12v72c0 6.6 5.4 12 12 12h72c6.6 0 12-5.4 12-12v-20h320v20c0 6.6 5.4 12 12 12h72c6.6 0 12-5.4 12-12v-72c0-6.6-5.4-12-12-12h-20V128zM32 64h32v32H32zm32 384H32v-32h32zm352-52v20H96v-20c0-6.6-5.4-12-12-12H64V128h20c6.6 0 12-5.4 12-12V96h320v20c0 6.6 5.4 12 12 12h20v256h-20c-6.6 0-12 5.4-12 12zm64 52h-32v-32h32zM448 96V64h32v32z"}));Object(n.registerBlockType)("oleti/section",{title:Object(r.__)("Section","oleti"),description:Object(r.__)("A Gutenberg block that allows you to add other blocks inside.","oleti"),category:"layout",icon:z,supports:{align:["wide","full"],anchor:!0,html:!1},keywords:[Object(r.__)("section","oleti"),Object(r.__)("group","oleti"),Object(r.__)("container","oleti"),Object(r.__)("row","oleti"),Object(r.__)("wrapper","oleti")],attributes:{backgroundColor:{type:"string"},textColor:{type:"string"},customBackgroundColor:{type:"string"},customTextColor:{type:"string"},paddingSize:{type:"string"},paddingUnit:{type:"string",default:"px"},marginSize:{type:"string"},marginUnit:{type:"string",default:"px"},tagName:{type:"string",default:"section"},paddingTop:{type:"number"},paddingBottom:{type:"number"},marginTop:{type:"number"},marginBottom:{type:"number"}},example:{attributes:{customBackgroundColor:"#ffffff",customTextColor:"#000000"},innerBlocks:[{name:"core/paragraph",attributes:{customTextColor:"#cf2e2e",fontSize:"large",content:Object(r.__)("One.")}},{name:"core/paragraph",attributes:{customTextColor:"#ff6900",fontSize:"large",content:Object(r.__)("Two.")}},{name:"core/paragraph",attributes:{customTextColor:"#fcb900",fontSize:"large",content:Object(r.__)("Three.")}},{name:"core/paragraph",attributes:{customTextColor:"#00d084",fontSize:"large",content:Object(r.__)("Four.")}},{name:"core/paragraph",attributes:{customTextColor:"#0693e3",fontSize:"large",content:Object(r.__)("Five.")}},{name:"core/paragraph",attributes:{customTextColor:"#9b51e0",fontSize:"large",content:Object(r.__)("Six.")}}]},transforms:{from:[{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert:function(t){if(1!==t.length||"oleti/section"!==t[0].name){var e=["wide","full"],o=t.reduce((function(t,o){var n=o.attributes.align;return e.indexOf(n)>e.indexOf(t)?n:t}),void 0),r=t.map((function(t){return Object(n.createBlock)(t.name,t.attributes,t.innerBlocks)}));return Object(n.createBlock)("oleti/section",{align:o},r)}}}]},edit:E,save:function(t){var e,o=t.className,n=t.attributes,r=n.backgroundColor,a=n.customBackgroundColor,l=n.textColor,p=n.customTextColor,b=n.tagName,g=n.paddingTop,m=n.paddingBottom,d=n.marginTop,f=n.marginBottom,v="".concat(b),h=Object(s.getColorClassName)("background-color",r),O=Object(s.getColorClassName)("color",l),y=!!n.paddingTop,j=!!n.paddingBottom,C=!!n.marginTop,_=!!n.marginBottom,x=u()(o,h,O,(e={"has-text-color":l||p,"has-background":r||a},c()(e,"padding-top-".concat(n.paddingTop),y),c()(e,"padding-bottom-".concat(n.paddingBottom),j),c()(e,"margin-top-".concat(n.marginTop),C),c()(e,"margin-bottom-".concat(n.marginBottom),_),e)),k={backgroundColor:h?void 0:a,color:O?void 0:p,paddingTop:g?g+"px":void 0,paddingBottom:m?m+"px":void 0,marginTop:d?d+"px":void 0,marginBottom:f?f+"px":void 0};return Object(i.createElement)(v,{className:x,style:k},Object(i.createElement)("div",{className:"wp-block-oleti-section__inner-container"},Object(i.createElement)(s.InnerBlocks.Content,null)))},deprecated:p})}]);