"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7365],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(t),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return t?r.createElement(d,a(a({ref:n},c),{},{components:t})):r.createElement(d,a({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[f]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6161:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={id:"ecosystem-inferno",title:"single-spa-inferno",sidebar_label:"Inferno"},s=void 0,p={unversionedId:"ecosystem-inferno",id:"version-5.x/ecosystem-inferno",title:"single-spa-inferno",description:"single-spa-inferno is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with Inferno. Check out the single-spa-inferno github.",source:"@site/versioned_docs/version-5.x/ecosystem-inferno.md",sourceDirName:".",slug:"/ecosystem-inferno",permalink:"/docs/ecosystem-inferno",draft:!1,editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-5.x/ecosystem-inferno.md",tags:[],version:"5.x",frontMatter:{id:"ecosystem-inferno",title:"single-spa-inferno",sidebar_label:"Inferno"},sidebar:"version-5.x/docs",previous:{title:"Ember",permalink:"/docs/ecosystem-ember"},next:{title:"Preact",permalink:"/docs/ecosystem-preact"}},c={},f=[{value:"Quickstart",id:"quickstart",level:2},{value:"Options",id:"options",level:2}],u={toc:f};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"single-spa-inferno is a helper library that helps implement ",(0,i.kt)("a",{parentName:"p",href:"configuration#registering-applications"},"single-spa registered application")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/building-applications#registered-application-lifecycle"},"lifecycle functions")," (bootstrap, mount and unmount) for for use with ",(0,i.kt)("a",{parentName:"p",href:"https://infernojs.org/"},"Inferno"),". Check out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa-inferno"},"single-spa-inferno github"),"."),(0,i.kt)("h2",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,"First, in the application, run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install --save single-spa-inferno"),". Then, add the following to your application's entry file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Inferno from 'inferno';\nimport rootComponent from './path-to-root-component.js';\nimport singleSpaInferno from 'single-spa-inferno';\n\nconst infernoLifecycles = singleSpaInferno({\n  Inferno,\n  createElement,\n  rootComponent,\n  domElementGetter: () => document.getElementById('main-content'),\n});\n\nexport const bootstrap = infernoLifecyles.bootstrap;\nexport const mount = infernoLifecyles.mount;\nexport const unmount = infernoLifecyles.unmount;\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,"All options are passed to single-spa-inferno via the ",(0,i.kt)("inlineCode",{parentName:"p"},"opts")," parameter when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"singleSpaInferno(opts)"),". The following options are available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inferno"),": (required) The main Inferno object, which is generally either exposed onto the window or is available via ",(0,i.kt)("inlineCode",{parentName:"li"},"require('inferno')")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"import Inferno from 'inferno'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"createElement"),": (required) The default export from Inferno's ",(0,i.kt)("inlineCode",{parentName:"li"},"inferno-create-element")," package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rootComponent"),": (required) The top level Inferno component which will be rendered."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"domElementGetter"),": (required) A function that takes in no arguments and returns a DOMElement. This dom element is where the Inferno application will be bootstrapped, mounted, and unmounted.")))}m.isMDXComponent=!0}}]);