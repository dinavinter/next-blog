(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6299:function(e){e.exports={prefix:"far",iconName:"gem",icon:[576,512,[],"f3a5","M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z"]}},5951:function(e,t,r){"use strict";r.d(t,{a:function(){return a}});var n=r(5893),o=(r(7294),r(1664)),a=function(){return(0,n.jsx)("nav",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(o.default,{href:"/post/about",children:(0,n.jsx)("a",{children:"About"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(o.default,{href:"post/groups",children:(0,n.jsx)("a",{children:"Groups"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(o.default,{href:"/post/captcha",children:(0,n.jsx)("a",{children:"Captcha"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(o.default,{href:"/post/idx",children:(0,n.jsx)("a",{children:"IDX"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(o.default,{href:"/post/gai",children:(0,n.jsx)("a",{children:"GAI"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(o.default,{href:"/post/fiddo",children:(0,n.jsx)("a",{children:"Fido"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(o.default,{href:"/post/ato",children:(0,n.jsx)("a",{children:"ATO"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(o.default,{href:"/post/nss",children:(0,n.jsx)("a",{children:"NSS"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(o.default,{href:"/post/oauth",children:(0,n.jsx)("a",{children:"OAuth"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(o.default,{href:"/post/consent",children:(0,n.jsx)("a",{children:"Consent"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(o.default,{href:"/post/idx",children:(0,n.jsx)("a",{children:"IDX"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(o.default,{href:"/post/liteUi",children:(0,n.jsx)("a",{children:"Lite"})})})]})})}},6071:function(e,t,r){"use strict";var n=r(3848),o=r(9448);t.default=void 0;var a=o(r(7294)),i=r(1689),c=r(2441),u=r(5749),s={};function l(e,t,r,n){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,c.useRouter)(),o=r&&r.pathname||"/",f=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),r=n(t,2),a=r[0],c=r[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,m=e.replace,v=e.shallow,y=e.scroll,b=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var g=a.Children.only(h),_=g&&"object"===typeof g&&g.ref,j=(0,u.useIntersection)({rootMargin:"200px"}),x=n(j,2),O=x[0],w=x[1],M=a.default.useCallback((function(e){O(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,O]);(0,a.useEffect)((function(){var e=w&&t&&(0,i.isLocalURL)(d),n="undefined"!==typeof b?b:r&&r.locale,o=s[d+"%"+p+(n?"%"+n:"")];e&&!o&&l(r,d,p,{locale:n})}),[p,d,w,b,t,r]);var k={ref:M,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:a,locale:u,scroll:c}))}(e,r,d,p,m,v,y,b)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),l(r,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var C="undefined"!==typeof b?b:r&&r.locale,P=r&&r.isLocaleDomain&&(0,i.getDomainLocale)(p,C,r&&r.locales,r&&r.domainLocales);k.href=P||(0,i.addBasePath)((0,i.addLocale)(p,C,r&&r.defaultLocale))}return a.default.cloneElement(g,k)};t.default=f},5749:function(e,t,r){"use strict";var n=r(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,u=(0,o.useRef)(),s=(0,o.useState)(!1),l=n(s,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=r(7294),a=r(8391),i="undefined"!==typeof IntersectionObserver;var c=new Map},3367:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},a=r(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||o&&i}},1647:function(e,t,r){"use strict";var n=r(1682);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}c(r(7294));var i=c(r(5547));function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},4287:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=o},7947:function(e,t,r){"use strict";var n=r(1682);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294)),c=(a=r(617))&&a.__esModule?a:{default:a},u=r(3367),s=r(4287),l=r(7845);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=h.length;u<s;u++){var l=h[u];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?a=!1:r.add(l);else{var f=o.props[l],d=n[l]||new Set;"name"===l&&i||!d.has(f)?(d.add(f),n[l]=d):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}function v(e){var t=e.children,r=(0,i.useContext)(u.AmpStateContext),n=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,l.isInAmpMode)(r)},t)}v.rewind=function(){};var y=v;t.default=y},8903:function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},5547:function(e,t,r){"use strict";var n=r(1682),o=r(2553),a=r(2012);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var l,f=(l=r(7294))&&l.__esModule?l:{default:l},d=r(7161),p=r(8903);var h=[],m=[],v=!1;function y(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function b(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var o=y(e[n]);o.loading?t.loading=!0:(t.loaded[n]=o.loaded,t.error=o.error),r.push(o.promise),o.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function g(e,t){return f.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function _(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:g,webpack:null,modules:null},t),n=null;function o(){if(!n){var t=new j(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!v&&"function"===typeof r.webpack){var a=r.webpack();m.push((function(e){var t,r=u(a);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return o()}}catch(i){r.e(i)}finally{r.f()}}))}var i=function(e,t){o();var a=f.default.useContext(p.LoadableContext),i=(0,d.useSubscription)(n);return f.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),f.default.useMemo((function(){return i.loading||i.error?f.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?r.render(i.loaded,e):null}),[e,i])};return i.preload=function(){return o()},i.displayName="LoadableComponent",f.default.forwardRef(i)}var j=function(){function e(t,r){o(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=c(c({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function x(e){return _(y,e)}function O(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return O(e,t)}))}x.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return _(b,e)},x.preloadAll=function(){return new Promise((function(e,t){O(h).then(e,t)}))},x.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return v=!0,t()};O(m,e).then(r,r)}))},window.__NEXT_PRELOADREADY=x.preloadReady;var w=x;t.default=w},617:function(e,t,r){"use strict";var n=r(3115),o=r(2553),a=r(2012),i=(r(450),r(9807)),c=r(7690),u=r(9828);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}t.__esModule=!0,t.default=void 0;var l=r(7294),f=function(e){i(r,e);var t=s(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=f},8474:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893),o=r(9008),a=r(5474),i=r.n(a),c=r(5951);r(5152),r(7294),r(6299);function u(){return(0,n.jsxs)("div",{className:i().container,children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"2021 Q1 Blog"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css",integrity:"sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy",crossOrigin:"anonymous"}),(0,n.jsx)("style",{children:"\n            .page {\n              height: 100vh;\n            }\n          "})]}),(0,n.jsxs)("main",{id:"main",className:i().main,children:[(0,n.jsxs)("h1",{className:i().title,children:["Welcome to ",(0,n.jsx)("a",{href:"https://nextjs.org",children:"2021 Q2"})]}),(0,n.jsxs)("header",{id:"header",children:[(0,n.jsx)("div",{className:"logo",children:(0,n.jsx)("span",{className:"icon fa-diamond"})}),(0,n.jsx)("div",{className:"content",children:(0,n.jsxs)("div",{className:"inner",children:[(0,n.jsx)("h1",{children:"2021 Q1 Blog"}),(0,n.jsx)("p",{className:i().description,children:(0,n.jsx)("code",{className:i().code,children:"Explore 2021 Q1 hot features"})}),(0,n.jsx)("faGem",{})]})}),(0,n.jsx)(c.a,{})]})]}),(0,n.jsx)("footer",{className:i().footer,children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,n.jsx)("span",{className:i().logo,children:(0,n.jsx)("img",{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})}),(0,n.jsx)("div",{id:"bg"})]})}},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8474)}])},5474:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},5152:function(e,t,r){r(1647)},9008:function(e,t,r){e.exports=r(7947)},1664:function(e,t,r){e.exports=r(6071)},8164:function(e,t,r){var n=r(4360);e.exports=function(e){if(Array.isArray(e))return n(e)}},450:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},1682:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},9828:function(e){function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(r)}e.exports=t},9807:function(e,t,r){var n=r(1914);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},7690:function(e,t,r){var n=r(7917),o=r(450);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},3115:function(e,t,r){var n=r(8164),o=r(7381),a=r(3585),i=r(5725);e.exports=function(e){return n(e)||o(e)||a(e)||i()}}},function(e){e.O(0,[774,351],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);