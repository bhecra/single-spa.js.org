"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8210],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(t),b=i,d=c["".concat(s,".").concat(b)]||c[b]||u[b]||r;return t?a.createElement(d,o(o({ref:n},m),{},{components:t})):a.createElement(d,o({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=b;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},7719:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],p={id:"ecosystem-ember",title:"single-spa-ember",sidebar_label:"Ember"},s=void 0,l={unversionedId:"ecosystem-ember",id:"version-5.x/ecosystem-ember",title:"single-spa-ember",description:"single-spa-ember is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for use with Ember.js. Check out the single-spa-ember github.",source:"@site/versioned_docs/version-5.x/ecosystem-ember.md",sourceDirName:".",slug:"/ecosystem-ember",permalink:"/docs/ecosystem-ember",draft:!1,editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-5.x/ecosystem-ember.md",tags:[],version:"5.x",frontMatter:{id:"ecosystem-ember",title:"single-spa-ember",sidebar_label:"Ember"},sidebar:"version-5.x/docs",previous:{title:"Cycle",permalink:"/docs/ecosystem-cycle"},next:{title:"Inferno",permalink:"/docs/ecosystem-inferno"}},m={},c=[{value:"Overview",id:"overview",level:2},{value:"API",id:"api",level:2},{value:"loadEmberApp",id:"loademberapp",level:3},{value:"singleSpaEmber",id:"singlespaember",level:3},{value:"Usage with ember cli",id:"usage-with-ember-cli",level:2}],u={toc:c};function b(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"single-spa-ember is a helper library that helps implement ",(0,r.kt)("a",{parentName:"p",href:"configuration#registering-applications"},"single-spa registered application")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/building-applications#registered-application-lifecycle"},"lifecycle functions")," (bootstrap, mount and unmount) for use with ",(0,r.kt)("a",{parentName:"p",href:"https://www.emberjs.com/"},"Ember.js"),". Check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa-ember"},"single-spa-ember github"),"."),(0,r.kt)("p",null,"It is available on npm as ",(0,r.kt)("inlineCode",{parentName:"p"},"single-spa-ember"),", and also available on bower as ",(0,r.kt)("inlineCode",{parentName:"p"},"single-spa-ember")," in case you want to use it with ember cli and need to use bower."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"When you are building an ember application that you want to work as a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md#registered-applications"},"single-spa application"),", there are five things you need to implement:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/blob/master/docs/root-application.md#loading-function"},"loading function")),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/blob/master/docs/root-application.md#activity-function"},"activity function")),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md#bootstrap"},"bootstrap function")),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md#mount"},"mount function")),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md#unmount"},"unmount function"))),(0,r.kt)("p",null,"Single-spa-ember will help you implement all of those except for the activity function."),(0,r.kt)("p",null,"Note that the loading and activity functions are part of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa/blob/master/docs/root-application.md"},"single-spa root application"),", whereas the bootstrap, mount, and unmount functions are part of a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md"},"single-spa application")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"loademberapp"},"loadEmberApp"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"loadEmberApp(appName, appUrl, vendorUrl)")," is a function that helps you implement the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa/blob/master/docs/root-application.md#loading-function"},"loading function")," for your ember application.\n",(0,r.kt)("inlineCode",{parentName:"p"},"appName")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"appUrl")," are both strings and both required, whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"vendorUrl")," is an optional string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// In the single-spa root application\n\nimport {registerApplication} from 'single-spa';\nimport {loadEmberApp} from 'single-spa-ember';\n\nconst name = 'ember-app';\nconst app = () => loadEmberApp(name, '/dist/ember-app/assets/ember-app.js', '/dist/ember-app/assets/vendor.js');\nconst activeWhen = location => location.hash.startsWith('ember');\n\nregisterApplication({ name, app, activeWhen });\n")),(0,r.kt)("h3",{id:"singlespaember"},"singleSpaEmber"),(0,r.kt)("p",null,"Single-spa-ember will implement the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md#application-lifecycle"},"single-spa lifecyle functions")," for you. To use it, you call the default export as a function with a configuration object, which returns an object that has ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mount"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"unmount")," lifecycle functions on it. The provided configuration object has the following options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"App")," (required): The ",(0,r.kt)("a",{parentName:"li",href:"https://www.emberjs.com/api/ember/2.14.1/classes/Ember.Application"},"ember Application"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createOpts")," (optional): The options to provide when calling ",(0,r.kt)("a",{parentName:"li",href:"https://www.emberjs.com/api/ember/2.14.1/classes/Ember.Application"},"App.create(options)"),". See the ",(0,r.kt)("a",{parentName:"li",href:"https://www.emberjs.com/api/ember/2.14.1/classes/Ember.Application"},"ember docs")," for more details.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// In the ember application\nimport singleSpaEmber from 'single-spa-ember/src/single-spa-ember';\n\nconst emberLifecycles = singleSpaEmber({\n  appName: 'ember-app', // required\n  createOpts: { // See https://www.emberjs.com/api/ember/2.14.1/classes/Ember.Application\n    rootElement: '#ember-app',\n  },\n});\n\nexport const bootstrap = emberLifecycles.bootstrap;\nexport const mount = emberLifecycles.mount;\nexport const unmount = emberLifecycles.unmount;\n")),(0,r.kt)("h2",{id:"usage-with-ember-cli"},"Usage with ember cli"),(0,r.kt)("p",null,"For the most part, you can get applications that use ",(0,r.kt)("a",{parentName:"p",href:"https://ember-cli.com/"},"ember cli")," to work pretty seamlessly with single-spa. Maybe the biggest thing you'll have to worry about is that ember-cli assumes that it controls the entire HTML page, whereas a single-spa application does not. However, usually we can achieve equivalent behavior by just loading the vendor and app bundles into the HTML page dynamically, instead of baking them right into the HTML page. Below is a description of the known things you should do when setting up an ember-cli application with single-spa:"),(0,r.kt)("p",null,"First, you'll need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"single-spa-ember")," as a dependency to the ember project. This can be done with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"bower"),". For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm init")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm install single-spa-ember"),"\nor"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bower init")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bower install single-spa-ember --save"))),(0,r.kt)("p",null,"Add the following options to your ember-cli-build.js file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* eslint-env node */\n'use strict';\n\nconst EmberApp = require('ember-cli/lib/broccoli/ember-app');\n\nmodule.exports = function(defaults) {\n  let app = new EmberApp(defaults, {\n    autoRun: false, // Set autoRun to false, because we only want the ember app to render to the DOM when single-spa tells it to.\n    storeConfigInMeta: false, // We're making a single-spa application, which doesn't exclusively own the HTML file. So we don't want to have to have a `<meta>` tag for the ember environment to be initialized.\n        fingerprint: {\n            customHash: null, // This is optional, just will make it easier for you to have the same url every time you do an ember build.\n        },\n    // Add options here\n  });\n\n  // Tell ember how to use the single-spa-ember library - pick one of the following\n  // if you used npm or yarn\n  app.import('node_modules/single-spa-ember/amd/single-spa-ember.js', {\n        using: [\n            {transformation: 'amd', as: 'single-spa-ember'},\n        ],\n    });\n\n  // **or** if you used bower\n  app.import('bower_components/single-spa-ember/amd/single-spa-ember.js', {\n        using: [\n            {transformation: 'amd', as: 'single-spa-ember'},\n        ],\n    });\n  \n\n  return app.toTree();\n};\n")),(0,r.kt)("p",null,"In your single-spa root application (which is separate from anything generated by ember cli):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// root-application.js\nimport * as singleSpa from 'single-spa';\nimport {loadEmberApp} from 'single-spa-ember';\n\nsingleSpa.registerApplication('ember-app', loadingFunction, activityFunction);\n\nfunction activityFunction(location) {\n  // Only render the ember app when the url hash starts with ember\n  return location.hash.startsWith('ember');\n}\n\n// single-spa-ember helps us load the script tags and give the ember app module to single-spa.\nfunction loadingFunction() {\n  const appName = 'ember-app';\n  const appUrl = '/dist/ember-app/assets/ember-app.js';\n  const vendorUrl = '/dist/ember-app/assets/vendor.js'; // Optional if you have one vendor bundle used for many different ember apps\n  return loadEmberApp(appName, appUrl, vendorUrl);\n}\n")),(0,r.kt)("p",null,"In your app.js file (that is generated by ember cli)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// app.js (the ember application)\nimport Ember from 'ember';\nimport Resolver from './resolver';\nimport loadInitializers from 'ember-load-initializers';\nimport config from './config/environment';\nimport singleSpaEmber from 'single-spa-ember';\n\n// This part is generated by the ember cli\nconst App = Ember.Application.extend({\n  modulePrefix: config.modulePrefix,\n  podModulePrefix: config.podModulePrefix,\n  Resolver\n});\n\nloadInitializers(App, config.modulePrefix);\n\nexport default App;\n\n// This is the single-spa part\nconst emberLifecycles = singleSpaEmber({\n    App, // required\n    appName: 'ember-app', // required\n    createOpts: { // optional\n        rootElement: '#ember-app',\n    },\n})\n\n// Single-spa lifecycles.\nexport const bootstrap = emberLifecycles.bootstrap;\nexport const mount = emberLifecycles.mount;\nexport const unmount = emberLifecycles.unmount;\n")))}b.isMDXComponent=!0}}]);