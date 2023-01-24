"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1308],{3905:function(e,a,n){n.d(a,{Zo:function(){return c},kt:function(){return b}});var l=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var r=l.createContext({}),p=function(e){var a=l.useContext(r),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=p(e.components);return l.createElement(r.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},g=l.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,r=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),g=t,b=u["".concat(r,".").concat(g)]||u[g]||d[g]||o;return n?l.createElement(b,s(s({ref:a},c),{},{components:n})):l.createElement(b,s({ref:a},c))}));function b(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,s=new Array(o);s[0]=g;var i={};for(var r in a)hasOwnProperty.call(a,r)&&(i[r]=a[r]);i.originalType=e,i[u]="string"==typeof e?e:t,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9261:function(e,a,n){n.r(a),n.d(a,{assets:function(){return c},contentTitle:function(){return r},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var l=n(7462),t=n(3366),o=(n(7294),n(3905)),s=["components"],i={id:"ecosystem-leaked-globals",title:"single-spa-leaked-globals",sidebar_label:"Leaked globals"},r=void 0,p={unversionedId:"ecosystem-leaked-globals",id:"version-5.x/ecosystem-leaked-globals",title:"single-spa-leaked-globals",description:"single-spa-leaked-globals is a helper library for dealing with single-spa-applications",source:"@site/versioned_docs/version-5.x/ecosystem-leaked-globals.md",sourceDirName:".",slug:"/ecosystem-leaked-globals",permalink:"/docs/ecosystem-leaked-globals",draft:!1,editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-5.x/ecosystem-leaked-globals.md",tags:[],version:"5.x",frontMatter:{id:"ecosystem-leaked-globals",title:"single-spa-leaked-globals",sidebar_label:"Leaked globals"},sidebar:"version-5.x/docs",previous:{title:"HTML / Web Components",permalink:"/docs/ecosystem-html-web-components"},next:{title:"Dojo",permalink:"/docs/ecosystem-dojo"}},c={},u=[{value:"What single-spa-leaked-globals does",id:"what-single-spa-leaked-globals-does",level:2},{value:"Before using single-spa-leaked-globals",id:"before-using-single-spa-leaked-globals",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Installation",id:"installation",level:2},{value:"Via npm",id:"via-npm",level:3},{value:"Via cdn",id:"via-cdn",level:3},{value:"Usage",id:"usage",level:2},{value:"API / Options",id:"api--options",level:2}],d={toc:u};function g(e){var a=e.components,n=(0,t.Z)(e,s);return(0,o.kt)("wrapper",(0,l.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa-leaked-globals"},"single-spa-leaked-globals")," is a helper library for dealing with single-spa-applications\nthat depend on global variables. Such applications are usually applications that use AngularJS, Backbone, or other older frameworks\nthat were popular when ES modules were not yet available."),(0,o.kt)("h2",{id:"what-single-spa-leaked-globals-does"},"What single-spa-leaked-globals does"),(0,o.kt)("p",null,"single-spa-leaked-globals will remove specific global variables from ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," during your application's\n",(0,o.kt)("a",{parentName:"p",href:"/docs/building-applications.html#unmount"},"unmount lifecycle"),", and add them back to ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," during your application's\n",(0,o.kt)("a",{parentName:"p",href:"/docs/building-applications.html#mount"},"mount lifecycle"),"."),(0,o.kt)("h2",{id:"before-using-single-spa-leaked-globals"},"Before using single-spa-leaked-globals"),(0,o.kt)("p",null,"It might be okay for single-spa applications to leak some global variables. Those leaked global variables could be harmless. Below are some\nsituations where using single-spa-leaked-globals could be useful. If your situation is not listed, consider not using single-spa-leaked-globals."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Your applications are accidentally sharing global variables and the order in which they are mounted matters. For example, the jQuery ",(0,o.kt)("inlineCode",{parentName:"li"},"$")," variable\nis available at the start, but app1 installs a jQuery plugin that app2 assumes is there. If app2 is mounted\nbefore app1, you might get an error because the jQuery plugin is not installed. In that situation, the best solution is maybe to install\nthe jQuery plugin inside of your ",(0,o.kt)("a",{parentName:"li",href:"/docs/configuration.html"},"single-spa config"),". But if that's not desireable, you can use single-spa-leaked-globals\nto manage two separate versions of jQuery -- one for app1 and one for app2."),(0,o.kt)("li",{parentName:"ol"},"Your applications require different versions of the same global variable. For example, consider when app1 depends on\nan ",(0,o.kt)("a",{parentName:"li",href:"https://underscorejs.org/"},"underscorejs")," ",(0,o.kt)("inlineCode",{parentName:"li"},"_")," global variable and app2 depends on a ",(0,o.kt)("a",{parentName:"li",href:"https://lodash.com/"},"lodash")," ",(0,o.kt)("inlineCode",{parentName:"li"},"_")," global variable.\nThey both need a global ",(0,o.kt)("inlineCode",{parentName:"li"},"_")," variable, but expect different functions to be available on it. The same could be true for different versions of the\nsame library, such as lodash 3 vs lodash 4. In those situations, you can use single-spa-leaked-globals to make sure the ",(0,o.kt)("inlineCode",{parentName:"li"},"_")," that is available\nfor app1 and app2 is the correct one.")),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"single-spa-leaked-globals cannot change the global nature of global dependencies. Only one instance of the global variable can be on the\n",(0,o.kt)("inlineCode",{parentName:"p"},"window")," at a time. ",(0,o.kt)("strong",{parentName:"p"},"This means that you probably can only have one application mounted at a time that depends on that global variable."),"\nIf two applications depend on the same global variable and are ",(0,o.kt)("a",{parentName:"p",href:"docs/configuration.html#activity-function"},"active")," at the same time,\nsingle-spa-leaked-globals won't work for you."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("h3",{id:"via-npm"},"Via npm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save single-spa-leaked-globals\n\n# or\nyarn add single-spa-leaked-globals\n")),(0,o.kt)("h3",{id:"via-cdn"},"Via cdn"),(0,o.kt)("p",null,"You can also use single-spa-leaked-globals via CDN, ironically as a global variable itself:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/single-spa-leaked-globals"><\/script>\n')),(0,o.kt)("p",null,"Note that you should probably lock down the version of the library to avoid accidentally upgrading. See\n",(0,o.kt)("a",{parentName:"p",href:"https://cdn.jsdelivr.net/npm/single-spa-leaked-globals/"},"https://cdn.jsdelivr.net/npm/single-spa-leaked-globals/")," to find the latest version."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The single-spa-leaked-globals library is often used in conjunction with another helper library, such as\nsingle-spa-angularjs or single-spa-backbone. As such, you'll want to\n",(0,o.kt)("a",{parentName:"p",href:"/docs/building-applications.html#registered-application-lifecycle"},"export an array")," for your lifecycle functions\ninstead of exporting just a function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import singleSpaLeakedGlobals from 'single-spa-leaked-globals';\n\n// Use single-spa-angularjs, single-spa-backbone, etc to get your framework specific lifecycles\nconst frameworkLifecycles = ...\n\nconst leakedGlobalsLifecycles = singleSpaLeakedGlobals({\n  globalVariableNames: ['$', 'jQuery', '_'],\n})\n\nexport const bootstrap = [\n  leakedGlobalsLifecycles.bootstrap,\n  frameworkLifecycles.bootstrap,\n]\n\nexport const mount = [\n  // Make sure leaked globals lifecycles' mount function is **before** other lifecycles' mount\n  // This is so the global vars are available when the framework mounts\n  leakedGlobalsLifecycles.mount,\n  frameworkLifecycles.mount,\n]\n\nexport const unmount = [\n  leakedGlobalsLifecycles.unmount,\n  // Make sure leaked globals lifecycles' unmount function is **after** other lifecycles' unmount\n  // This is so the global vars are still available during the framework unmount lifecycle function.\n  frameworkLifecycles.unmount,\n]\n")),(0,o.kt)("p",null,"If you're using single-spa-leaked-globals as a global variable itself:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const leakedGlobalsLifecycles = window.singleSpaLeakedGlobals.default({\n  globalVariableNames: ['_'],\n})\n")),(0,o.kt)("h2",{id:"api--options"},"API / Options"),(0,o.kt)("p",null,"single-spa-leaked-globals is called with an object with the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"globalVariableNames")," (required): An array of strings. Each string is the name of a global variable that should\nbe removed when the application is unmounted, and added back when the application is mounted.")))}g.isMDXComponent=!0}}]);