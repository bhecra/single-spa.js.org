(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{215:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return c}));n(59),n(32),n(23),n(24),n(60),n(0);var o=n(225);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var r={title:"A Case for SOA in the Browser",author:"Bret Little",authorURL:"https://twitter.com/little_bret",authorImageURL:"https://pbs.twimg.com/profile_images/950593946178080768/eaNp6p-u_400x400.jpg"},i=[{value:"What is Service-oriented Architecture?",id:"what-is-service-oriented-architecture",children:[]},{value:"Why Service-oriented Architecture on the Front-end?",id:"why-service-oriented-architecture-on-the-front-end",children:[]},{value:"Introducing sofe",id:"introducing-sofe",children:[]}],s={rightToc:i},l="wrapper";function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(l,a({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"So you are a web-developer. You write a lot of JavaScript. You have a large single-page application (SPA) with features to add and bugs to maintain. Over time the application grows in size and complexity. It becomes more difficult to modify one portion of the SPA without breaking another portion."),Object(o.b)("p",null,"The company is growing and you are looking for ways to scale the team and code-base. You add unit tests. You add a linter. You add continuous integration. You modularize the code with ES2015 modules, webpack, and npm. Eventually you even introduce new, independent SPAs with each SPA being owned and deployed by independent squads. Congratulations, you have successfully introduced service-oriented architecture on the front-end, or have you?"),Object(o.b)("h2",{id:"what-is-service-oriented-architecture"},"What is Service-oriented Architecture?"),Object(o.b)("p",null,"The fundamental concept behind service-oriented architecture is a service. A service is an isolated piece of code which can only be interacted with through its API. Unlike a shared library, a service itself can be deployed independently of its consumers. Think of a back-end API. The API is the service and the browser is the consumer. The API is deployed independently of the front-end application. There is also only one deployed version of the API available at a URL."),Object(o.b)("p",null,"Contrast a service to a shared library. A shared library is a piece of code that is bundled and deployed with your code. For example, libraries such as Express, Lodash, and React are all shared libraries included in your application\u2019s distributable. Upgrading a version of a shared library requires a new deployment of that distributable."),Object(o.b)("p",null,"Service-oriented architecture is an approach to building software where the application is composed of many independent and isolated services. Those services are independently deployable, generally non-versioned, and auto discoverable."),Object(o.b)("h2",{id:"why-service-oriented-architecture-on-the-front-end"},"Why Service-oriented Architecture on the Front-end?"),Object(o.b)("p",null,"The benefits of SOA can be illustrated with this real life example from Canopy. At Canopy we have multiple single page applications. The first application is external to the customers and the second is internal, yet both applications share common functionality. That functionality includes among other things, authentication and error logging."),Object(o.b)("img",{src:"https://cdn-images-1.medium.com/max/1600/1*itLASVdD-5a3fm56hfltYQ.png",alt:"cdn-images-1"}),Object(o.b)("p",{style:{color:"gray",fontSize:"15px",fontStyle:"italic"}},"Shared libraries between two separate applications. ",Object(o.b)("strong",null,"App 1")," depends upon shared libs ",Object(o.b)("strong",null,"a"),", ",Object(o.b)("strong",null,"b"),", and ",Object(o.b)("strong",null,"c"),". ",Object(o.b)("strong",null,"App 2")," depends upon only shared libs ",Object(o.b)("strong",null,"a")," and ",Object(o.b)("strong",null,"b"),"."),Object(o.b)("p",null,"Overall the design looks good. The code is modularized and shared. The complexities arrive when we start to upgrade the code to different versions. For example, after a short period of time, ",Object(o.b)("strong",null,"App 2")," (being internal only) is upgraded to a new beta version of the shared lib ",Object(o.b)("strong",null,"b"),". Because the shared ",Object(o.b)("strong",null,"a")," also depends upon ",Object(o.b)("strong",null,"b")," (and we don\u2019t want multiple versions of ",Object(o.b)("strong",null,"b")," bundled) we also create a new version of ",Object(o.b)("strong",null,"a"),". This one change causes a rebuild and deploy of three separate pieces of code: ",Object(o.b)("strong",null,"App 2")," and shared libs ",Object(o.b)("strong",null,"a")," and ",Object(o.b)("strong",null,"b"),". Our dependency structure is no longer quite so simple."),Object(o.b)("img",{src:"https://cdn-images-1.medium.com/max/1600/1*T5YHqkoZApSvC32jVS0osw.png",alt:"cdn-images-2"}),Object(o.b)("p",{style:{color:"gray",fontSize:"15px",fontStyle:"italic"}},"In reality, a duplicate instance of lib ",Object(o.b)("strong",null,"a")," and ",Object(o.b)("strong",null,"b")," exist in both apps. Each app does not point to the same instance of the shared libraries, even when they are the same version. This is more noticeable when the shared libraries have separate versions."),Object(o.b)("p",null,"Now imagine a bug in both versions of shared lib ",Object(o.b)("strong",null,"b"),". In order to fix the problem, you will have to republish both versions of ",Object(o.b)("strong",null,"a")," and ",Object(o.b)("strong",null,"b")," as well as ",Object(o.b)("strong",null,"c"),". Also ",Object(o.b)("strong",null,"App 1")," and ",Object(o.b)("strong",null,"App 2")," will have to be re-deployed. That is five new versions to publish and two apps to redeploy, all to fix one bug. All downstream dependencies have to be redeployed when a single library is changed. This is deploy dependency hell."),Object(o.b)("p",null,"Service oriented architecture avoids these problems in a couple ways. Instead of bundling common dependencies, common code is shared through independent services. Services are not bundled, but rather loaded at run time. This also means that front-end services are not versioned (just like a back-end API). Both ",Object(o.b)("strong",null,"App 1")," and ",Object(o.b)("strong",null,"App 2")," load the exact same code for a front-end service."),Object(o.b)("h2",{id:"introducing-sofe"},"Introducing sofe"),Object(o.b)("p",null,"Built upon the new ECMAScript module specification, sofe is a JavaScript library that enables independently deployable JavaScript services to be retrieved at run-time in the browser. Because the new module specification isn\u2019t available within today\u2019s browsers, sofe relies upon ",Object(o.b)("a",a({parentName:"p"},{href:"https://github.com/systemjs/systemjs"}),"System.js")," to load services at run-time."),Object(o.b)("p",null,"You can load a sofe service either with static or asynchronous imports."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-js"}),"// Static imports\nimport auth from 'auth-service!sofe';\nconst user = auth.getLoggedInUser();\n// Asynchronous imports\nSystem.import('auth-service!sofe').then(auth => auth.getLoggedInUser());\n")),Object(o.b)("p",null,"The real power behind sofe is that services are resolved at run-time, making them unversioned. If ",Object(o.b)("strong",null,"auth-service")," is redeployed, it is immediately made available to all upstream dependencies. The above scenario becomes much easier to resolve because there is only one version of each shared library as services. This is powerful because it allows you to deploy once, update everywhere. Also because the code is loaded at run-time, we can also enable developer tools to override what service is loaded into your application. Or in other words, you can test code on production without actually deploying to production."),Object(o.b)("img",{src:"https://cdn-images-1.medium.com/max/1600/1*o7IS8yKgYKSDc2w7VpyZFw.png",alt:"cdn-images-2"}),Object(o.b)("p",{style:{color:"gray",fontSize:"15px",fontStyle:"italic"}},"The common dependencies are now services that are independent from the application code. Because services are unversioned, the dependency structure is again flat. Each service can individually be deployed and be available to every upstream dependency."),Object(o.b)("p",null,"Obviously not all front-end code should be a service. Services have their own challenges. Specifically your code has to stay backwards compatible. But code can\u2019t always be backwards compatible. Sometimes there needs to be breaking changes. The same problem exists for back-end services. A back-end API has to stay backwards compatible. Breaking changes on the back-end are generally solved by either creating an entirely new (versioned) API or implementing feature toggles within the API itself. The same solution applies to sofe services. An entirely new sofe service can be deployed or feature toggles can exist inside the front-end service. However it is solved, the key point is that services exist outside your application within their own distributable."),Object(o.b)("p",null,"Another potential problem for sofe services is performance. Because they are loaded at run-time, performance can become a concern if you synchronously load too many services during bootstrap. Performance degradation can be mitigated by asynchronously loading larger services after the application bootstraps. Despite these challenges, there are many benefits to services on the front-end. The most exciting thing about sofe is there is now an option for services in the browser. You can decide what should and shouldn\u2019t be a service."),Object(o.b)("p",null,"Getting started with sofe requires only System.js. But to help you get started we have built sofe to work with a variety of technologies, including webpack, Babel, jspm, and the Chrome Developer Tools. Sofe is also actively used in production at Canopy Tax. We would love feedback on sofe and a number of open source projects that have been built around it. As you approach your next front-end project or look to improve your existing app, consider how it might benefit from service oriented architecture."),Object(o.b)("p",null,"Read more about how to get started with sofe ",Object(o.b)("a",a({parentName:"p"},{href:"https://github.com/CanopyTax/sofe"}),"here"),"."))}c.isMDXComponent=!0},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o),r=a.a.createContext({}),i=function(e){var t=a.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=i(e.components);return a.a.createElement(r.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),d=i(n),u=o,p=d[s+"."+u]||d[u]||c[u]||r;return n?a.a.createElement(p,Object.assign({},{ref:t},l,{components:n})):a.a.createElement(p,Object.assign({},{ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);