(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+IV6":function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},"67gb":function(e,t,n){"use strict";n.r(t);var r=n("J5T5"),o=n("u7GP"),i=n("c/1k"),s=n("6lFQ"),a=n("JF+v"),c=n("mXGw"),u=n.n(c),f=n("xARA"),l=n("YIiZ"),p=n.n(l),h=n("jffb"),d=n.n(h),v=n("KFr5"),b=n.n(v),y=n("+Ltg"),m=n.n(y),g=n("mjdu"),w=n.n(g);var _=/chrome/gi.test(window.navigator.userAgent)?function(e){for(var t=e.cloneRange(),n=[],r=e.endContainer;null!=r;r=r.parentNode){var o=r===e.commonAncestorContainer;o?t.setStart(e.startContainer,e.startOffset):t.setStart(t.endContainer,0);var i,s=Array.from(t.getClientRects());if(n.push(s),o)return n.reverse(),(i=[]).concat.apply(i,n);t.setEndBefore(r)}m()(!1,"Found an unexpected detached subtree when getting range client rects.")}:function(e){return Array.from(e.getClientRects())};function O(e){var t=e.getSelection();if(!t.rangeCount)return null;var n=function(e){var t=_(e),n=0,r=0,o=0,i=0;if(t.length){if(t.length>1&&0===t[0].width){var s=t[1];n=s.top,r=s.right,o=s.bottom,i=s.left}else{var a=t[0];n=a.top,r=a.right,o=a.bottom,i=a.left}for(var c=1;c<t.length;c++){var u=t[c];0!==u.height&&0!==u.width&&(n=Math.min(n,u.top),r=Math.max(r,u.right),o=Math.max(o,u.bottom),i=Math.min(i,u.left))}}return{top:n,right:r,bottom:o,left:i,width:r-i,height:o-n}}(t.getRangeAt(0)),r=n.top,o=n.right,i=n.bottom,s=n.left;return 0===r&&0===o&&0===i&&0===s?null:n}var j=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),x=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},R=function(e){function t(){var e,n,r;j(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=r=x(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={isPressed:!1,selectionPosition:null,isTextSelected:!1,isOpen:!1},r.updatePosition=function(){var e=document.getSelection(),t=r.props,n=t.onTextSelect,o=t.onTextUnselect,i=r.props.selectionRef&&r.props.selectionRef.current,s=O(window);null!=s&&null!=i&&null!=e&&!0===i.contains(e.anchorNode)&&!0===i.contains(e.focusNode)?(!1===e.isCollapsed?(n&&n(),r.setState({isTextSelected:!0,isOpen:!0})):(o&&o(),r.setState({isTextSelected:!1,isOpen:!1})),r.setState({selectionPosition:s})):r.state.isTextSelected&&(o&&o(),r.setState({isTextSelected:!1,isOpen:!1}))},x(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),E(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.selectionRef,r=t.measureRef,o=t.gap,i=t.scrollRef,s=t.placementStrategy,a=t.contentRect,c=t.windowHeight,f=t.windowWidth,l=t.children,p=t.className,h=this.state.selectionPosition,d="boolean"==typeof this.props.isOpen?this.props.isOpen:this.state.isOpen,v={};return null!==h&&null!=a.bounds.width&&0!==a.bounds.width&&((v=s({gap:o,frameWidth:f,frameHeight:c,frameLeft:0,frameTop:0,boxWidth:a.bounds.width,boxHeight:a.bounds.height,selectionTop:h.top,selectionLeft:h.left,selectionWidth:h.width,selectionHeight:h.height})).pointerEvents=!0===this.state.mousePressed?"none":"auto"),[u.a.createElement(w.a,{key:"update-position",target:document,onSelectionChange:this.updatePosition}),u.a.createElement(w.a,{key:"on-resize-window",target:window,onResize:this.updatePosition}),u.a.createElement(w.a,{key:"on-scroll",target:i&&i.current?i.current:window,onScroll:this.updatePosition}),u.a.createElement(w.a,{key:"on-mouse-up",target:n&&n.current?n.current:document.body,onMouseUp:function(){return e.setState({mousePressed:!1})}}),u.a.createElement(w.a,{key:"on-mouse-down",target:n&&n.current?n.current:document,onMouseDown:function(){return e.setState({mousePressed:!0})}}),null!=h&&d&&0!=a.bounds.width?u.a.createElement("div",{key:"popup",className:p,style:v,ref:r},l):null]}}]),t}(c.Component);R.defaultProps={selectionRef:{current:document.body},scrollRef:{current:window},placementStrategy:function(e){var t=e.gap,n=e.frameWidth,r=e.frameLeft,o=e.frameTop,i=e.boxHeight,s=e.boxWidth,a=e.selectionTop,c=e.selectionLeft,u=e.selectionWidth,f=e.selectionHeight,l={position:"fixed"};return l.left=c+u/2-s/2,l.top=a-i-t,l.left<r?l.left=r:l.left+s>n&&(l.left=n-s),l.top<o&&(l.top=a+f+t),l},gap:5};var T,P=(T=p()("bounds","offset")(b()({take:function(){return{windowWidth:window.innerWidth,windowHeight:window.innerHeight}},debounce:function(e){return d()(e,120)}})(R)),function(e){var t=e.children,n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children"]);return Object(f.createPortal)(u.a.createElement(T,n,u.a.createElement(c.Fragment,null,t)),n.containerNode||document.body)}),k=n("DmAm"),M=n("6h0R");var S=Object(r.a)("div",{target:"e18yecfp3",label:"ActionsWrapper"})({name:"8r7bkt",styles:"display:flex;align-items:center;border-radius:0.375rem;z-index:1;background:#0a0a0a;&>*{padding:0.5rem;:hover{cursor:pointer;}}"}),W=Object(r.a)(o.a,{target:"e18yecfp2",label:"LinkedinIcon"})({name:"220rkc",styles:"color:#fff"}),z=Object(r.a)(s.a,{target:"e18yecfp1",label:"CopyIcon"})({name:"1uh3mrk",styles:"color:#fff;&:hover{cursor:pointer;}"}),A=Object(r.a)(i.a,{target:"e18yecfp0",label:"TwitterIcon"})({name:"220rkc",styles:"color:#fff"});t.default=function(e){var t=e.selectionRef,n=Object(a.useLocation)(),r=n.protocol,o=n.host,i=n.pathname,s=function(){return r+"//"+o+i},u=Object(c.useState)(""),f=u[0],l=u[1];return Object(M.jsx)(P,{selectionRef:t,onTextSelect:function(){return l(document.getSelection().toString())}},Object(M.jsx)(S,null,Object(M.jsx)("a",{target:"_blank",rel:"noopener",href:"https://twitter.com/intent/tweet?text="+encodeURIComponent(function(){var e=" — "+s(),t=f;if((t+e).length>=280){var n=280-e.length;t=t.substring(0,n-3)+"..."}return""+t+e}())},Object(M.jsx)(A,{size:"20"})),Object(M.jsx)("a",{target:"_blank",rel:"noopener",href:"https://www.linkedin.com/sharing/share-offsite/?url="+encodeURIComponent(s())},Object(M.jsx)(W,{size:"20"})),Object(M.jsx)(z,{size:"20",onMouseDown:function(){return Object(k.b)(f)}})))}},EQjT:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n("mXGw"),a=(r=s)&&r.__esModule?r:{default:r};function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.take,n=void 0===t?function(){return{width:window.innerWidth,height:window.innerHeight}}:t,r=e.debounce,s=void 0===r?function(e){return e}:r;return function(e){var t,r;return r=t=function(t){function r(){var e,t,n;c(this,r);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=n=u(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(i))),n.state={width:0,height:0},n.onResize=s((function(){n.setState({width:window.innerWidth,height:window.innerHeight})})),u(n,t)}return f(r,t),i(r,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.onResize,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize,!1)}},{key:"render",value:function(){var t=this.props,r=n(t);return a.default.createElement(e,o({},t,r))}}]),r}(a.default.Component),t.displayName="WindowDimensions",r}}},FIWN:function(e,t,n){"use strict";var r=function(){};e.exports=r},"H+Pq":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n={};if(t.indexOf("client")>-1&&(n.client={top:e.clientTop,left:e.clientLeft,width:e.clientWidth,height:e.clientHeight}),t.indexOf("offset")>-1&&(n.offset={top:e.offsetTop,left:e.offsetLeft,width:e.offsetWidth,height:e.offsetHeight}),t.indexOf("scroll")>-1&&(n.scroll={top:e.scrollTop,left:e.scrollLeft,width:e.scrollWidth,height:e.scrollHeight}),t.indexOf("bounds")>-1){var r=e.getBoundingClientRect();n.bounds={top:r.top,right:r.right,bottom:r.bottom,left:r.left,width:r.width,height:r.height}}if(t.indexOf("margin")>-1){var o=getComputedStyle(e);n.margin={top:parseInt(o.marginTop),right:parseInt(o.marginRight),bottom:parseInt(o.marginBottom),left:parseInt(o.marginLeft)}}return n}},K4DB:function(e,t,n){var r=n("e+GP"),o=n("T1e2");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},KFr5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("EQjT"),i=(r=o)&&r.__esModule?r:{default:r};t.default=i.default},NToG:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},SDJZ:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},YIiZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("mXGw"),s=(f(i),f(n("W0B4"))),a=f(n("iXzu")),c=f(n("dOXj")),u=f(n("H+Pq"));function f(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.default=function(e){return function(t){var n,f;return f=n=function(n){function s(){var t,n,r;l(this,s);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=p(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this].concat(i))),r.state={contentRect:{entry:{},client:{},offset:{},scroll:{},bounds:{},margin:{}}},r.measure=function(t){var n=(0,u.default)(r._node,e||(0,c.default)(r.props));t&&(n.entry=t[0].contentRect),r.setState({contentRect:n}),"function"==typeof r.props.onResize&&r.props.onResize(n)},r._handleRef=function(e){r._resizeObserver&&(e?r._resizeObserver.observe(e):r._resizeObserver.disconnect(r._node)),r._node=e,"function"==typeof r.props.innerRef&&r.props.innerRef(e)},p(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,n),o(s,[{key:"componentWillMount",value:function(){this._resizeObserver=new a.default(this.measure)}},{key:"componentWillUnmount",value:function(){this._resizeObserver&&this._node&&this._resizeObserver.disconnect(this._node),this._resizeObserver=null}},{key:"render",value:function(){var e=this.props,n=(e.innerRef,e.onResize,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["innerRef","onResize"]));return(0,i.createElement)(t,r({},n,{measureRef:this._handleRef,measure:this.measure,contentRect:this.state.contentRect}))}}]),s}(i.Component),n.propTypes={client:s.default.bool,offset:s.default.bool,scroll:s.default.bool,bounds:s.default.bool,margin:s.default.bool,innerRef:s.default.func,onResize:s.default.func},f}}},dOXj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=[];return r.forEach((function(n){e[n]&&t.push(n)})),t};var r=["client","offset","scroll","bounds","margin"]},"eef+":function(e,t,n){var r=n("WI9V");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},iXzu:function(e,t,n){"use strict";n.r(t),function(e){n("x3Br");var r=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];e.call(t,o[1],o[0])}},t}()}(),o="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,i=void 0!==e&&e.Math===Math?e:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),s="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var a=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,u=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,o=0;function i(){n&&(n=!1,e()),r&&c()}function a(){s(i)}function c(){var e=Date.now();if(n){if(e-o<2)return;r=!0}else n=!0,r=!1,setTimeout(a,t);o=e}return c}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){o&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){o&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;a.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),f=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},l=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||i},p=m(0,0,0,0);function h(e){return parseFloat(e)||0}function d(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+h(e["border-"+n+"-width"])}),0)}function v(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return p;var r=l(e).getComputedStyle(e),o=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n],i=e["padding-"+o];t[o]=h(i)}return t}(r),i=o.left+o.right,s=o.top+o.bottom,a=h(r.width),c=h(r.height);if("border-box"===r.boxSizing&&(Math.round(a+i)!==t&&(a-=d(r,"left","right")+i),Math.round(c+s)!==n&&(c-=d(r,"top","bottom")+s)),!function(e){return e===l(e).document.documentElement}(e)){var u=Math.round(a+i)-t,f=Math.round(c+s)-n;1!==Math.abs(u)&&(a-=u),1!==Math.abs(f)&&(c-=f)}return m(o.left,o.top,a,c)}var b="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof l(e).SVGGraphicsElement}:function(e){return e instanceof l(e).SVGElement&&"function"==typeof e.getBBox};function y(e){return o?b(e)?function(e){var t=e.getBBox();return m(0,0,t.width,t.height)}(e):v(e):p}function m(e,t,n,r){return{x:e,y:t,width:n,height:r}}var g=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=m(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=y(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),w=function(e,t){var n,r,o,i,s,a,c,u=(r=(n=t).x,o=n.y,i=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),f(c,{x:r,y:o,width:i,height:s,top:o,right:r+i,bottom:s+o,left:r}),c);f(this,{target:e,contentRect:u})},_=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof l(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new g(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof l(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new w(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),O="undefined"!=typeof WeakMap?new WeakMap:new r,j=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=u.getInstance(),r=new _(t,n,this);O.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){j.prototype[e]=function(){var t;return(t=O.get(this))[e].apply(t,arguments)}}));var E=void 0!==i.ResizeObserver?i.ResizeObserver:j;t.default=E}.call(this,n("pCvA"))},jffb:function(e,t,n){(function(t){var n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,s=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=a||c||Function("return this")(),f=Object.prototype.toString,l=Math.max,p=Math.min,h=function(){return u.Date.now()};function d(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(d(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=d(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var a=o.test(e);return a||i.test(e)?s(e.slice(2),a?2:8):r.test(e)?NaN:+e}e.exports=function(e,t,n){var r,o,i,s,a,c,u=0,f=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=r,i=o;return r=o=void 0,u=t,s=e.apply(i,n)}function g(e){return u=e,a=setTimeout(_,t),f?m(e):s}function w(e){var n=e-c;return void 0===c||n>=t||n<0||b&&e-u>=i}function _(){var e=h();if(w(e))return O(e);a=setTimeout(_,function(e){var n=t-(e-c);return b?p(n,i-(e-u)):n}(e))}function O(e){return a=void 0,y&&r?m(e):(r=o=void 0,s)}function j(){var e=h(),n=w(e);if(r=arguments,o=this,c=e,n){if(void 0===a)return g(c);if(b)return a=setTimeout(_,t),m(c)}return void 0===a&&(a=setTimeout(_,t)),s}return t=v(t)||0,d(n)&&(f=!!n.leading,i=(b="maxWait"in n)?l(v(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),j.cancel=function(){void 0!==a&&clearTimeout(a),u=0,r=c=o=a=void 0},j.flush=function(){return void 0===a?s:O(h())},j}}).call(this,n("pCvA"))},mjdu:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("SDJZ")),i=r(n("NToG")),s=r(n("K4DB")),a=r(n("+IV6")),c=r(n("eef+")),u=r(n("e+GP")),f=r(n("RiSW")),l=r(n("8VmE")),p=r(n("mXGw"));r(n("W0B4")),r(n("FIWN"));var h,d=(h=null,function(){if(null!==h)return h;var e,t,n,r=!1;try{window.addEventListener("test",null,(e={},t="passive",n={get:function(){r=!0}},Object.defineProperty(e,t,n)))}catch(o){}return h=r,r}()),v={capture:!1,passive:!1};function b(e){return l({},v,e)}function y(e,t,n){var r=[e,t];return r.push(d?n:n.capture),r}function m(e,t,n,r){e.addEventListener.apply(e,y(t,n,r))}function g(e,t,n,r){e.removeEventListener.apply(e,y(t,n,r))}function w(e,t){e.children,e.target;var n=f(e,["children","target"]);Object.keys(n).forEach((function(e){if("on"===e.substring(0,2)){var r=n[e],o=u(r),i="object"===o;if(i||"function"===o){var s="capture"===e.substr(-7).toLowerCase(),a=e.substring(2).toLowerCase();a=s?a.substring(0,a.length-7):a,i?t(a,r.handler,r.options):t(a,r,b({capture:s}))}}}))}var _=function(e){function t(){return o(this,t),s(this,a(t).apply(this,arguments))}return c(t,e),i(t,[{key:"componentDidMount",value:function(){this.applyListeners(m)}},{key:"componentDidUpdate",value:function(e){this.applyListeners(g,e),this.applyListeners(m)}},{key:"componentWillUnmount",value:function(){this.applyListeners(g)}},{key:"applyListeners",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props,n=t.target;if(n){var r=n;"string"==typeof n&&(r=window[n]),w(t,e.bind(null,r))}}},{key:"render",value:function(){return this.props.children||null}}]),t}(p.PureComponent);_.propTypes={},t.withOptions=function(e,t){return{handler:e,options:b(t)}},t.default=_}}]);
//# sourceMappingURL=11-34c8da54276e4098e020.js.map