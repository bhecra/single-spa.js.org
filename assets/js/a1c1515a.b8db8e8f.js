"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9680],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=n.createContext({}),p=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(r.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,h=d["".concat(r,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2397:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=a(7462),i=a(3366),l=(a(7294),a(3905)),o=["components"],s={id:"separating-applications",title:"Splitting up applications",sidebar_label:"Splitting applications"},r=void 0,p={unversionedId:"separating-applications",id:"version-4.x/separating-applications",title:"Splitting up applications",description:"In a large, microserviced system, your root single-spa configuration and each of the applications should probably have its own git repository. How to do that in a JavaScript project isn't necessarily clear, so some options are listed below.",source:"@site/versioned_docs/version-4.x/separating-applications.md",sourceDirName:".",slug:"/separating-applications",permalink:"/docs/4.x/separating-applications",draft:!1,editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-4.x/separating-applications.md",tags:[],version:"4.x",frontMatter:{id:"separating-applications",title:"Splitting up applications",sidebar_label:"Splitting applications"},sidebar:"version-4.x/docs",previous:{title:"single-spa applications",permalink:"/docs/4.x/building-applications"},next:{title:"Migrating existing code",permalink:"/docs/4.x/migrating-existing-spas"}},c={},d=[{value:"Option 1: One code repo, one build",id:"option-1-one-code-repo-one-build",level:4},{value:"Option 2: NPM packages",id:"option-2-npm-packages",level:4},{value:"Option 3: Dynamic Module Loading",id:"option-3-dynamic-module-loading",level:4},{value:"Comparison",id:"comparison",level:4}],u={toc:d};function m(e){var t=e.components,a=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In a large, microserviced system, your root single-spa configuration and each of the applications should probably have its own git repository. How to do that in a JavaScript project isn't necessarily clear, so some options are listed below."),(0,l.kt)("p",null,"Since single-spa is a framework that helps with organizational scaling, it is important to figure out how to split out and separate applications from each other so that developers and teams can work on the applications without interfering one another."),(0,l.kt)("p",null,"Most interpretations of microservice architecture encourage separate code repositories, builds, and deployments. Although ",(0,l.kt)("strong",{parentName:"p"},"single-spa does not solve how code is hosted, built, or deployed"),", these are relevant to many users of single-spa, so some strategies for doing so are discussed here."),(0,l.kt)("h4",{id:"option-1-one-code-repo-one-build"},"Option 1: One code repo, one build"),(0,l.kt)("p",null,"The simplest approach for using single-spa is to have one code repository with everything in it. Typically, you would have a single package.json with a single webpack config that produces a bundle that can be included in an HTML file with a ",(0,l.kt)("inlineCode",{parentName:"p"},"<script>")," tag."),(0,l.kt)("p",null,"Advantages:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Simplest to set up"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://danluu.com/monorepo/"},"monolithic version control has some advantages"))),(0,l.kt)("p",null,"Disadvantages:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"One master Webpack config and package.json means less flexibility and freedom for each individual project"),(0,l.kt)("li",{parentName:"ul"},"Slow build times once your project gets large"),(0,l.kt)("li",{parentName:"ul"},"Builds and deployments are all tied together, which can necessitate fixed release schedules instead of ad hoc releases.")),(0,l.kt)("h4",{id:"option-2-npm-packages"},"Option 2: NPM packages"),(0,l.kt)("p",null,"Create a root application that npm installs each of the single-spa applications. Each child application is in a separate code repository and is responsible for publishing a new version everytime that it updates. The root application should reinstall, rebuild, and redeploy whenever a single-spa application changes."),(0,l.kt)("p",null,"Typically, the single-spa applications compile themselves separately with babel and/or webpack."),(0,l.kt)("p",null,"Note that you can also use the ",(0,l.kt)("a",{parentName:"p",href:"https://medium.com/netscape/the-case-for-monorepos-907c1361708a"},"monorepo methodology")," which allows for separate builds without having separate code repositories."),(0,l.kt)("p",null,"Advantages:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"npm install is familiar and easy to set up"),(0,l.kt)("li",{parentName:"ul"},"Separate npm packages means each application can build itself separately before publishing to npm")),(0,l.kt)("p",null,"Disadvantages:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The root application must reinstall the child applications in order to rebuild/redeploy"),(0,l.kt)("li",{parentName:"ul"},"Medium difficulty to set up")),(0,l.kt)("h4",{id:"option-3-dynamic-module-loading"},"Option 3: Dynamic Module Loading"),(0,l.kt)("p",null,'Create a root application which can allow single-spa applications to deploy themselves separately. To do so,\ncreate a manifest file that the single-spa applications update during their deployment process, which controls\nwhich versions of the single-spa applications are "live". Then change which JavaScript file is loaded based on the manifest.'),(0,l.kt)("p",null,"Changing which JavaScript file is loaded for each child application can be done in many ways."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'Web server: have your webserver create a dynamic script tag for the "live" version of each single-spa application.'),(0,l.kt)("li",{parentName:"ol"},"Use a ",(0,l.kt)("a",{parentName:"li",href:"https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/"},"module loader")," such as ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/systemjs/systemjs"},"SystemJS")," that can download and execute JavaScript code in the browser from dynamic urls.")),(0,l.kt)("h4",{id:"comparison"},"Comparison"),(0,l.kt)("style",{dangerouslySetInnerHTML:{__html:"\n  .comparisonTable td {\n    width: 25%;\n  }\n  .comparisonTable .middle {\n    text-align: center;\n    vertical-align: middle;\n  }\n  .comparisonTable ul {\n    padding-left: 1em;\n  }\n"}}),(0,l.kt)("table",{className:"comparisonTable"},(0,l.kt)("caption",null,"Comparison of front-end system architectures"),(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null),(0,l.kt)("th",{scope:"col",className:"middle"},"Monorepo"),(0,l.kt)("th",{scope:"col",className:"middle"},"NPM modules"),(0,l.kt)("th",{scope:"col",className:"middle"},"Module loading"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"},"Difficulty to set up"),(0,l.kt)("td",{className:"middle"},"Easy"),(0,l.kt)("td",{className:"middle"},"Medium"),(0,l.kt)("td",{className:"middle"},"Hard")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"},"Separate code repositories"),(0,l.kt)("td",{className:"middle"},(0,l.kt)("span",{className:"sr-text"},"No")),(0,l.kt)("td",{className:"middle"},(0,l.kt)("span",{className:"sr-text"},"No")),(0,l.kt)("td",{className:"middle"},(0,l.kt)("span",{role:"img","aria-label":"Yes"},"\u2705"))),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"},"Separate builds"),(0,l.kt)("td",{className:"middle"},(0,l.kt)("span",{className:"sr-text"},"No")),(0,l.kt)("td",{className:"middle"},(0,l.kt)("span",{role:"img","aria-label":"Yes"},"\u2705")),(0,l.kt)("td",{className:"middle"},(0,l.kt)("span",{role:"img","aria-label":"Yes"},"\u2705"))),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"},"Separate deployments"),(0,l.kt)("td",{className:"middle"},(0,l.kt)("span",{className:"sr-text"},"No")),(0,l.kt)("td",{className:"middle"},(0,l.kt)("span",{role:"img","aria-label":"Yes"},"\u2705")),(0,l.kt)("td",{className:"middle"},(0,l.kt)("span",{role:"img","aria-label":"Yes"},"\u2705"))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Examples"),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("a",{href:"https://github.com/joeldenning/simple-single-spa-webpack-example"},"simple-webpack-example")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"https://github.com/single-spa/single-spa-examples"},"single-spa-examples")))),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("a",{href:"https://github.com/jualoppaz/single-spa-login-example-with-npm-packages"},"single-spa-login-example-with-npm-packages")))),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("a",{href:"https://gitlab.com/TheMcMurder/single-spa-portal-example"},"SystemJS example"))))))))}m.isMDXComponent=!0}}]);