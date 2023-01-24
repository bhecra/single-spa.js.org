"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[453],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(g,r(r({ref:t},c),{},{components:n})):i.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4798:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={id:"configuration",title:"Configuring single-spa",sidebar_label:"Configuring single-spa"},p=void 0,s={unversionedId:"configuration",id:"version-4.x/configuration",title:"Configuring single-spa",description:"The single-spa root config consists of the following:",source:"@site/versioned_docs/version-4.x/single-spa-config.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/4.x/configuration",draft:!1,editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-4.x/single-spa-config.md",tags:[],version:"4.x",frontMatter:{id:"configuration",title:"Configuring single-spa",sidebar_label:"Configuring single-spa"},sidebar:"version-4.x/docs",previous:{title:"Resources",permalink:"/docs/4.x/examples"},next:{title:"single-spa applications",permalink:"/docs/4.x/building-applications"}},c={},u=[{value:"index.html file",id:"indexhtml-file",level:2},{value:"Registering applications",id:"registering-applications",level:2},{value:"Application name",id:"application-name",level:3},{value:"Loading Function or Application",id:"loading-function-or-application",level:3},{value:"Application as second argument",id:"application-as-second-argument",level:4},{value:"Loading function",id:"loading-function",level:4},{value:"Activity function",id:"activity-function",level:3},{value:"Calling singleSpa.start()",id:"calling-singlespastart",level:2},{value:"Two registered applications simultaneously??",id:"two-registered-applications-simultaneously",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The single-spa root config consists of the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The root HTML file that is shared by all single-spa applications."),(0,o.kt)("li",{parentName:"ol"},"The JavaScript that calls ",(0,o.kt)("a",{parentName:"li",href:"/docs/api.html#registerapplication"},(0,o.kt)("inlineCode",{parentName:"a"},"singleSpa.registerApplication()")),".")),(0,o.kt)("p",null,"Your root config exists only to start up the single-spa applications."),(0,o.kt)("h2",{id:"indexhtml-file"},"index.html file"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"http://single-spa-playground.org/playground/html-file"},"this example root config")," for what a root HTML file looks like.\nNotice how it does not have any divs or buttons, but just calls ",(0,o.kt)("inlineCode",{parentName:"p"},"registerApplication()"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You do not have to use SystemJS when using single-spa"),", but many examples and tutorials will encourage you to do so because\nit allows you to ",(0,o.kt)("a",{parentName:"p",href:"/docs/separating-applications.html"},"independently deploy")," your applications."),(0,o.kt)("h2",{id:"registering-applications"},"Registering applications"),(0,o.kt)("p",null,"You must register ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.x/building-applications"},"applications")," with single-spa so it knows how and when to\ninitiate, load, mount, and unmount each application. Registration most commonly occurs inside of the single-spa config but\ndoes not have to. Note that if an application is registered from within another application, no hierarchy will be\nmaintained between the applications. Instead, the applications will be siblings and will be mounted\nand unmounted according to their own activity functions."),(0,o.kt)("p",null,"In order to register an application, call the ",(0,o.kt)("inlineCode",{parentName:"p"},"registerApplication(name, howToLoad, activityFunction)")," api. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// single-spa-config.js\nimport { registerApplication, start } from \'single-spa\';\n\nregisterApplication("applicationName", loadingFunction, activityFunction);\nstart();\n\nfunction loadingFunction() {\n  return import("src/app1/main.js");\n}\n\nfunction activityFunction(location) {\n  return location.pathname.indexOf("/app1/") === 0;\n}\n')),(0,o.kt)("h3",{id:"application-name"},"Application name"),(0,o.kt)("p",null,"The first argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"registerApplication")," must be a string name."),(0,o.kt)("h3",{id:"loading-function-or-application"},"Loading Function or Application"),(0,o.kt)("p",null,"The second argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"registerApplication")," must be either a function that returns a promise ",(0,o.kt)("a",{parentName:"p",href:"configuration#loading-function"},"loading function")," or the resolved Application."),(0,o.kt)("h4",{id:"application-as-second-argument"},"Application as second argument"),(0,o.kt)("p",null,"Optionally for the second argument you can use the resolved Application, consisting of an object with the lifecycle methods.\nThis allows you import the Application from another file or define applications inline in your single-spa-config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const application = {\n  bootstrap: () => Promise.resolve(), //bootstrap function\n  mount: () => Promise.resolve(), //mount function\n  unmount: () => Promise.resolve(), //unmount function\n}\nregisterApplication('applicationName', application, activityFunction)\n\n")),(0,o.kt)("h4",{id:"loading-function"},"Loading function"),(0,o.kt)("p",null,"The second argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"registerApplication")," must be a function that returns a promise (or an ",(0,o.kt)("a",{parentName:"p",href:"https://ponyfoo.com/articles/understanding-javascript-async-await"},'"async function"'),").\nThe function will be called with no arguments when it's time to load the application for the first time. The returned\npromise must be resolved with the application. The most common implementation of a loading function is an import call:\n",(0,o.kt)("inlineCode",{parentName:"p"},"() => import('/path/to/application.js')")),(0,o.kt)("h3",{id:"activity-function"},"Activity function"),(0,o.kt)("p",null,"The third argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"registerApplication")," must be a pure function, the function is provided ",(0,o.kt)("inlineCode",{parentName:"p"},"window.location")," as the first argument, and returns a truthy\nvalue whenever the application should be active. Most commonly, the activity function determines if an application\nis active by looking at ",(0,o.kt)("inlineCode",{parentName:"p"},"window.location"),"/the first param."),(0,o.kt)("p",null,"Another way of looking at this is that single-spa is a top-level router that has a lot of applications that have their own sub-router."),(0,o.kt)("p",null,"single-spa will call each application's activity function under the following scenarios:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hashchange")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"popstate")," event"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pushState")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"replaceState")," is called"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/4.x/api#triggerappchange"},(0,o.kt)("inlineCode",{parentName:"a"},"triggerAppChange"))," api is called on single-spa"),(0,o.kt)("li",{parentName:"ul"},"Whenever the ",(0,o.kt)("inlineCode",{parentName:"li"},"checkActivityFunctions")," method is called")),(0,o.kt)("h2",{id:"calling-singlespastart"},"Calling singleSpa.start()"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.x/api#start"},(0,o.kt)("inlineCode",{parentName:"a"},"start()")," api")," ",(0,o.kt)("strong",{parentName:"p"},"must")," be called by your single spa config in order for\napplications to actually be mounted. Before ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," is called, applications will be loaded, but not bootstrapped/mounted/unmounted.\nThe reason for ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," is to give you control over performance. For example, you may want to register applications\nimmediately (to start downloading the code for the active ones), but not actually mount the applications\nuntil an initial AJAX request (maybe to get information about the logged in user) has been completed. In that case,\nthe best performance is achieved by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"registerApplication")," immediately, but calling ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," after\nthe AJAX request is completed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//single-spa-config.js\nimport { start } from 'single-spa';\n\n/* Calling start before registering apps means that single-spa can immediately mount apps, without\n * waiting for any initial setup of the single page app.\n */\nstart();\n\n// Register applications....\n")),(0,o.kt)("h2",{id:"two-registered-applications-simultaneously"},"Two registered applications simultaneously??"),(0,o.kt)("p",null,"Yep, it's possible. And it's actually not that scary if you do it right. And once you do,\nit's really really powerful. One approach to do this is to create a ",(0,o.kt)("inlineCode",{parentName:"p"},'<div id="app-name"></div>')," for each app,\nso that they never try to modify the same DOM at the same time."))}m.isMDXComponent=!0}}]);