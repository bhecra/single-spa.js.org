"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2060],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||g[d]||o;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6148:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],s={id:"migrating-existing-spas",title:"Migrating existing SPAs",sidebar_label:"Migrating existing code"},l=void 0,c={unversionedId:"migrating-existing-spas",id:"version-4.x/migrating-existing-spas",title:"Migrating existing SPAs",description:"If you're interested in migrating existing SPAs into a single-spa, you'll",source:"@site/versioned_docs/version-4.x/migrating-existing-spas.md",sourceDirName:".",slug:"/migrating-existing-spas",permalink:"/docs/4.x/migrating-existing-spas",draft:!1,editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-4.x/migrating-existing-spas.md",tags:[],version:"4.x",frontMatter:{id:"migrating-existing-spas",title:"Migrating existing SPAs",sidebar_label:"Migrating existing code"},sidebar:"version-4.x/docs",previous:{title:"Splitting applications",permalink:"/docs/4.x/separating-applications"},next:{title:"Overview",permalink:"/docs/4.x/parcels-overview"}},p={},u=[{value:"Converting SPAs into registered applications",id:"converting-spas-into-registered-applications",level:2},{value:"(1) Implementing lifecycle functions",id:"1-implementing-lifecycle-functions",level:3},{value:"(2) Getting the CSS, fonts, <code>&lt;script&gt;</code> dependencies to work",id:"2-getting-the-css-fonts-script-dependencies-to-work",level:3}],g={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you're interested in migrating existing SPAs into a single-spa, you'll\nneed to do three things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("a",{parentName:"li",href:"configuration"},"single spa config")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#converting-spas-into-registered-applications"},"Convert your SPA or SPAs to be registered applications")),(0,o.kt)("li",{parentName:"ol"},"Adjust your HTML file so that your single spa config is the new boss in town.\nSee ",(0,o.kt)("a",{parentName:"li",href:"configuration#indexhtml-file"},"docs"),".")),(0,o.kt)("h2",{id:"converting-spas-into-registered-applications"},"Converting SPAs into registered applications"),(0,o.kt)("p",null,"Your existing SPAs, whether they be Angular, React, or something else, probably are\nnot used to unmounting themselves from the DOM. Also, they probably have had the luxury\nof controlling the entire HTML page themselves, instead of being purely JavaScript applications\nthat don't have sole control over ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," tags and ",(0,o.kt)("inlineCode",{parentName:"p"},"<link>")," tags. So in order to convert them\ninto single-spa registered applications, they will need to overcome those obstacles while implementing\nlifecycle functions."),(0,o.kt)("h3",{id:"1-implementing-lifecycle-functions"},"(1) Implementing lifecycle functions"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.x/building-applications#registered-application-lifecycle"},"registered application lifecycle")," docs to see what you need to do.\nThe hardest part will almost certainly be the ",(0,o.kt)("inlineCode",{parentName:"p"},"unmount")," lifecycle, since most SPAs aren't accustomed\nto going dormant and unmounting themselves from the DOM. When implementing your lifecycle functions, first check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.x/ecosystem"},"ecosystem"),"\ndocs before reinventing the wheel yourself. If that doesn't have everything you need, you'll have to make sure that your\nSPA can clean up its DOM, DOM event listeners (all of them, but ",(0,o.kt)("em",{parentName:"p"},"especially")," hashchange and popstate),\nand memory."),(0,o.kt)("h3",{id:"2-getting-the-css-fonts-script-dependencies-to-work"},"(2) Getting the CSS, fonts, ",(0,o.kt)("inlineCode",{parentName:"h3"},"<script>")," dependencies to work"),(0,o.kt)("p",null,"Since existing SPAs are used to having an index.html file for their css, fonts,\nthird party script-tags, etc., it's likely that you'll have to do some work\nto make sure all of those keep on working when your SPA becomes an html-less ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.x/building-applications"},"\napplication"),". It is best to try to put all that\nyou can into the JavaScript bundle, but your escape hatch is to put the things\nyou need into your ",(0,o.kt)("a",{parentName:"p",href:"configuration"},"single spa config"),"."))}d.isMDXComponent=!0}}]);