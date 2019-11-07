(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{206:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return c}));a(59),a(32),a(23),a(24),a(60),a(0);var n=a(225);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={id:"separating-applications",title:"Splitting up applications",sidebar_label:"Splitting applications"},o=[],s={rightToc:o},r="wrapper";function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(n.b)(r,l({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"In a large, microserviced system, your root single-spa configuration and each of the applications should probably have its own git repository. How to do that in a javascript project isn't necessarily clear, so some options are listed below."),Object(n.b)("p",null,"Since single-spa is a framework that helps with organizational scaling, it is important to figure out how to split out and separate applications from each other so that developers and teams can work on the applications without interfering one another."),Object(n.b)("p",null,"Most interpretations of microservice architecture encourage separate code repositories, builds, and deployments. Although ",Object(n.b)("strong",{parentName:"p"},"single-spa does not solve how code is hosted, built, or deployed"),", these are relevant to many users of single-spa, so some strategies for doing so are discussed here."),Object(n.b)("h4",{id:"option-1-one-code-repo-one-build"},"Option 1: One code repo, one build"),Object(n.b)("p",null,"The simplest approach for using single-spa is to have one code repository with everything in it. Typically, you would have a single package.json with a single webpack config that produces a bundle that can be included in an html file with a ",Object(n.b)("inlineCode",{parentName:"p"},"<script>")," tag."),Object(n.b)("p",null,"Advantages:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Simplest to set up"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"https://danluu.com/monorepo/"}),"monolithic version control has some advantages"))),Object(n.b)("p",null,"Disadvantages:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"One master Webpack config and package.json means less flexibility and freedom for each individual project"),Object(n.b)("li",{parentName:"ul"},"Slow build times once your project gets large"),Object(n.b)("li",{parentName:"ul"},"Builds and deployments are all tied together, which can necessitate fixed release schedules instead of ad hoc releases.")),Object(n.b)("h4",{id:"option-2-npm-packages"},"Option 2: NPM packages"),Object(n.b)("p",null,"Create a root application that npm installs each of the single-spa applications. Each child application is in a separate code repository and is responsible for publishing a new version everytime that it updates. The root application should reinstall, rebuild, and redeploy whenever a single-spa application changes."),Object(n.b)("p",null,"Typically, the single-spa applications compile themselves separately with babel and/or webpack."),Object(n.b)("p",null,"Note that you can also use the ",Object(n.b)("a",l({parentName:"p"},{href:"https://medium.com/netscape/the-case-for-monorepos-907c1361708a"}),"monorepo methodology")," which allows for separate builds without having separate code repositories."),Object(n.b)("p",null,"Advantages:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"npm install is familiar and easy to set up"),Object(n.b)("li",{parentName:"ul"},"Separate npm packages means each application can build itself separately before publishing to npm")),Object(n.b)("p",null,"Disadvantages:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The root application must reinstall the child applications in order to rebuild/redeploy"),Object(n.b)("li",{parentName:"ul"},"Medium difficulty to set up")),Object(n.b)("h4",{id:"option-3-dynamic-module-loading"},"Option 3: Dynamic Module Loading"),Object(n.b)("p",null,'Create a root application which can allow single-spa applications to deploy themselves separately. To do so,\ncreate a manifest file that the single-spa applications update during their deployment process, which controls\nwhich versions of the single-spa applications are "live". Then change which javascript file is loaded based on the manifest.'),Object(n.b)("p",null,"Changing which javascript file is loaded for each child application can be done in many ways."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},'Web server: have your webserver create a dynamic script tag for the "live" version of each single-spa application.'),Object(n.b)("li",{parentName:"ol"},"Use a ",Object(n.b)("a",l({parentName:"li"},{href:"https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/"}),"module loader")," such as ",Object(n.b)("a",l({parentName:"li"},{href:"https://github.com/systemjs/systemjs"}),"SystemJS")," that can download and execute javascript code in the browser from dynamic urls.")),Object(n.b)("h4",{id:"comparison"},"Comparison"),Object(n.b)("style",{dangerouslySetInnerHTML:{__html:"\n  .comparisonTable td {\n    width: 25%;\n  }\n  .comparisonTable .middle {\n    text-align: center;\n    vertical-align: middle;\n  }\n  .comparisonTable ul {\n    padding-left: 1em;\n  }\n"}}),Object(n.b)("table",{className:"comparisonTable"},Object(n.b)("caption",null,"Comparison of front-end system architectures"),Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null),Object(n.b)("th",{scope:"col",className:"middle"},"Monorepo"),Object(n.b)("th",{scope:"col",className:"middle"},"NPM modules"),Object(n.b)("th",{scope:"col",className:"middle"},"Module loading"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("th",{scope:"row"},"Difficulty to set up"),Object(n.b)("td",{className:"middle"},"Easy"),Object(n.b)("td",{className:"middle"},"Medium"),Object(n.b)("td",{className:"middle"},"Hard")),Object(n.b)("tr",null,Object(n.b)("th",{scope:"row"},"Separate code repositories"),Object(n.b)("td",{className:"middle"},Object(n.b)("span",{className:"sr-text"},"No")),Object(n.b)("td",{className:"middle"},Object(n.b)("span",{className:"sr-text"},"No")),Object(n.b)("td",{className:"middle"},Object(n.b)("span",{role:"img","aria-label":"Yes"},"\u2705"))),Object(n.b)("tr",null,Object(n.b)("th",{scope:"row"},"Separate builds"),Object(n.b)("td",{className:"middle"},Object(n.b)("span",{className:"sr-text"},"No")),Object(n.b)("td",{className:"middle"},Object(n.b)("span",{role:"img","aria-label":"Yes"},"\u2705")),Object(n.b)("td",{className:"middle"},Object(n.b)("span",{role:"img","aria-label":"Yes"},"\u2705"))),Object(n.b)("tr",null,Object(n.b)("th",{scope:"row"},"Separate deployments"),Object(n.b)("td",{className:"middle"},Object(n.b)("span",{className:"sr-text"},"No")),Object(n.b)("td",{className:"middle"},Object(n.b)("span",{role:"img","aria-label":"Yes"},"\u2705")),Object(n.b)("td",{className:"middle"},Object(n.b)("span",{role:"img","aria-label":"Yes"},"\u2705"))),Object(n.b)("tr",null,Object(n.b)("th",null,"Examples"),Object(n.b)("td",null,Object(n.b)("ul",null,Object(n.b)("li",null,Object(n.b)("a",{href:"https://github.com/joeldenning/simple-single-spa-webpack-example"},"simple-webpack-example")),Object(n.b)("li",null,Object(n.b)("a",{href:"https://github.com/CanopyTax/single-spa-examples"},"single-spa-examples")))),Object(n.b)("td",null,"Contributions accepted!"),Object(n.b)("td",null,Object(n.b)("ul",null,Object(n.b)("li",null,Object(n.b)("a",{href:"https://gitlab.com/TheMcMurder/single-spa-portal-example"},"SystemJS example"))))))))}c.isMDXComponent=!0},225:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return b}));var n=a(0),l=a.n(n),i=l.a.createContext({}),o=function(e){var t=l.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},s=function(e){var t=o(e.components);return l.a.createElement(i.Provider,{value:t},e.children)};var r="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,r=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),p=o(a),b=n,d=p[s+"."+b]||p[b]||c[b]||i;return a?l.a.createElement(d,Object.assign({},{ref:t},r,{components:a})):l.a.createElement(d,Object.assign({},{ref:t},r))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[r]="string"==typeof e?e:n,o[1]=s;for(var b=2;b<i;b++)o[b]=a[b];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);