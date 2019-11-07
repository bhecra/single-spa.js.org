(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{174:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return i})),n.d(a,"rightToc",(function(){return o})),n.d(a,"default",(function(){return c}));n(59),n(32),n(23),n(24),n(60),n(0);var l=n(225);function t(){return(t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var i={id:"ecosystem-leaked-globals",title:"single-spa-leaked-globals",sidebar_label:"Leaked globals"},o=[{value:"What single-spa-leaked-globals does",id:"what-single-spa-leaked-globals-does",children:[]},{value:"Before using single-spa-leaked-globals",id:"before-using-single-spa-leaked-globals",children:[]},{value:"Limitations",id:"limitations",children:[]},{value:"Installation",id:"installation",children:[{value:"Via npm",id:"via-npm",children:[]},{value:"Via cdn",id:"via-cdn",children:[]}]},{value:"Usage",id:"usage",children:[]},{value:"API / Options",id:"api--options",children:[]}],s={rightToc:o},r="wrapper";function c(e){var a=e.components,n=function(e,a){if(null==e)return{};var n,l,t={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,["components"]);return Object(l.b)(r,t({},s,n,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",t({parentName:"p"},{href:"https://github.com/CanopyTax/single-spa-leaked-globals"}),"single-spa-leaked-globals")," is a helper library for dealing with single-spa-applications\nthat depend on global variables. Such applications are usually applications that use AngularJS, Backbone, or other older frameworks\nthat were popular when ES modules were not yet available."),Object(l.b)("h2",{id:"what-single-spa-leaked-globals-does"},"What single-spa-leaked-globals does"),Object(l.b)("p",null,"single-spa-leaked-globals will remove specific global variables from ",Object(l.b)("inlineCode",{parentName:"p"},"window")," during your application's\n",Object(l.b)("a",t({parentName:"p"},{href:"/docs/building-applications.html#unmount"}),"unmount lifecycle"),", and add them back to ",Object(l.b)("inlineCode",{parentName:"p"},"window")," during your application's\n",Object(l.b)("a",t({parentName:"p"},{href:"/docs/building-applications.html#mount"}),"mount lifecycle"),"."),Object(l.b)("h2",{id:"before-using-single-spa-leaked-globals"},"Before using single-spa-leaked-globals"),Object(l.b)("p",null,"It might be okay for single-spa applications to leak some global variables. Those leaked global variables could be harmless. Below are some\nsituations where using single-spa-leaked-globals could be useful. If your situation is not listed, consider not using single-spa-leaked-globals."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Your applications are accidentally sharing global variables and the order in which they are mounted matters. For example, the jQuery ",Object(l.b)("inlineCode",{parentName:"li"},"$")," variable\nis available at the start, but app1 installs a jQuery plugin that app2 assumes is there. If app2 is mounted\nbefore app1, you might get an error because the jQuery plugin is not installed. In that situation, the best solution is maybe to install\nthe jQuery plugin inside of your ",Object(l.b)("a",t({parentName:"li"},{href:"/docs/configuration.html"}),"single-spa config"),". But if that's not desireable, you can use single-spa-leaked-globals\nto manage two separate versions of jQuery -- one for app1 and one for app2."),Object(l.b)("li",{parentName:"ol"},"Your applications require different versions of the same global variable. For example, consider when app1 depends on\nan ",Object(l.b)("a",t({parentName:"li"},{href:"https://underscorejs.org/"}),"underscorejs")," ",Object(l.b)("inlineCode",{parentName:"li"},"_")," global variable and app2 depends on a ",Object(l.b)("a",t({parentName:"li"},{href:"https://lodash.com/"}),"lodash")," ",Object(l.b)("inlineCode",{parentName:"li"},"_")," global variable.\nThey both need a global ",Object(l.b)("inlineCode",{parentName:"li"},"_")," variable, but expect different functions to be available on it. The same could be true for different versions of the\nsame library, such as lodash 3 vs lodash 4. In those situations, you can use single-spa-leaked-globals to make sure the ",Object(l.b)("inlineCode",{parentName:"li"},"_")," that is available\nfor app1 and app2 is the correct one.")),Object(l.b)("h2",{id:"limitations"},"Limitations"),Object(l.b)("p",null,"single-spa-leaked-globals cannot change the global nature of global dependencies. Only one instance of the global variable can be on the\n",Object(l.b)("inlineCode",{parentName:"p"},"window")," at a time. ",Object(l.b)("strong",{parentName:"p"},"This means that you probably can only have one application mounted at a time that depends on that global variable."),"\nIf two applications depend on the same global variable and are ",Object(l.b)("a",t({parentName:"p"},{href:"docs/configuration.html#activity-function"}),"active")," at the same time,\nsingle-spa-leaked-globals won't work for you."),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("h3",{id:"via-npm"},"Via npm"),Object(l.b)("pre",null,Object(l.b)("code",t({parentName:"pre"},{className:"language-sh"}),"npm install --save single-spa-leaked-globals\n\n# Or\n\nyarn add single-spa-leaked-globals\n")),Object(l.b)("h3",{id:"via-cdn"},"Via cdn"),Object(l.b)("p",null,"You can also use single-spa-leaked-globals via CDN, ironically as a global variable itself:"),Object(l.b)("pre",null,Object(l.b)("code",t({parentName:"pre"},{className:"language-html"}),'<script src="https://cdn.jsdelivr.net/npm/single-spa-leaked-globals"><\/script>\n')),Object(l.b)("p",null,"Note that you should probably lock down the version of the library to avoid accidentally upgrading. See\n",Object(l.b)("a",t({parentName:"p"},{href:"https://cdn.jsdelivr.net/npm/single-spa-leaked-globals/"}),"https://cdn.jsdelivr.net/npm/single-spa-leaked-globals/")," to find the latest version."),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("p",null,"The single-spa-leaked-globals library is often used in conjunction with another helper library, such as\nsingle-spa-angularjs or single-spa-backbone. As such, you'll want to\n",Object(l.b)("a",t({parentName:"p"},{href:"/docs/building-applications.html#registered-application-lifecycle"}),"export an array")," for your lifecycle functions\ninstead of exporting just a function."),Object(l.b)("pre",null,Object(l.b)("code",t({parentName:"pre"},{className:"language-js"}),"import singleSpaLeakedGlobals from 'single-spa-leaked-globals';\n\n// Use single-spa-angularjs, single-spa-backbone, etc to get your framework specific lifecycles\nconst frameworkLifecycles = ...\n\nconst leakedGlobalsLifecycles = singleSpaLeakedGlobals({\n  globalVariableNames: ['$', 'jQuery', '_'],\n})\n\nexport const bootstrap = [\n  leakedGlobalsLifecycles.bootstrap,\n  frameworkLifecycles.bootstrap,\n]\n\nexport const mount = [\n  // Make sure leaked globals lifecycles' mount function is **before** other lifecycles' mount\n  // This is so the global vars are available when the framework mounts\n  leakedGlobalsLifecycles.mount,\n  frameworkLifecycles.mount,\n]\n\nexport const unmount = [\n  leakedGlobalsLifecycles.mount,\n  // Make sure leaked globals lifecycles' unmount function is **after** other lifecycles' unmount\n  // This is so the global vars are still available during the framework unmount lifecycle function.\n  frameworkLifecycles.unmount,\n]\n")),Object(l.b)("p",null,"If you're using single-spa-leaked-globals as a global variable itself:"),Object(l.b)("pre",null,Object(l.b)("code",t({parentName:"pre"},{className:"language-js"}),"const leakedGlobalsLifecycles = window.singleSpaLeakedGlobals.default({\n  globalVariableNames: ['_'],\n})\n")),Object(l.b)("h2",{id:"api--options"},"API / Options"),Object(l.b)("p",null,"single-spa-leaked-globals is called with an object with the following properties:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"globalVariableNames")," (required): An array of strings. Each string is the name of a global variable that should\nbe removed when the application is unmounted, and added back when the application is mounted.")))}c.isMDXComponent=!0},225:function(e,a,n){"use strict";n.d(a,"a",(function(){return s})),n.d(a,"b",(function(){return b}));var l=n(0),t=n.n(l),i=t.a.createContext({}),o=function(e){var a=t.a.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):Object.assign({},a,e)),n},s=function(e){var a=o(e.components);return t.a.createElement(i.Provider,{value:a},e.children)};var r="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},p=Object(l.forwardRef)((function(e,a){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,r=function(e,a){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&-1===a.indexOf(l)&&(n[l]=e[l]);return n}(e,["components","mdxType","originalType","parentName"]),p=o(n),b=l,d=p[s+"."+b]||p[b]||c[b]||i;return n?t.a.createElement(d,Object.assign({},{ref:a},r,{components:n})):t.a.createElement(d,Object.assign({},{ref:a},r))}));function b(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s[r]="string"==typeof e?e:l,o[1]=s;for(var b=2;b<i;b++)o[b]=n[b];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);