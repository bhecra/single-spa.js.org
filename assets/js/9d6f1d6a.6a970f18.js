"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4904],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=i,m=c["".concat(l,".").concat(g)]||c[g]||d[g]||r;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9929:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],s={id:"e2e",title:"E2E testing",sidebar_label:"E2E testing"},l=void 0,p={unversionedId:"testing/e2e",id:"version-5.x/testing/e2e",title:"E2E testing",description:"As microfrontends gain widespread adoption, testing tools will catch up and the testing story will improve.",source:"@site/versioned_docs/version-5.x/testing/e2e.md",sourceDirName:"testing",slug:"/testing/e2e",permalink:"/docs/testing/e2e",draft:!1,editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-5.x/testing/e2e.md",tags:[],version:"5.x",frontMatter:{id:"e2e",title:"E2E testing",sidebar_label:"E2E testing"},sidebar:"version-5.x/docs",previous:{title:"Unit testing",permalink:"/docs/testing/units"},next:{title:"Overview",permalink:"/docs/layout-overview"}},u={},c=[{value:"Testing Options",id:"testing-options",level:2},{value:"&quot;E2E&quot; testing with &quot;standalone&quot; mode",id:"e2e-testing-with-standalone-mode",level:3},{value:"Testing everything together",id:"testing-everything-together",level:3},{value:"Configuring E2E tests to work with overrides",id:"configuring-e2e-tests-to-work-with-overrides",level:4}],d={toc:c};function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"As microfrontends gain widespread adoption, testing tools will catch up and the testing story will improve.")),(0,r.kt)("p",null,"End to End (E2E) testing a single-spa ",(0,r.kt)("a",{parentName:"p",href:"/docs/module-types#applications"},"application"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/module-types#parcels"},"parcel"),", or ",(0,r.kt)("a",{parentName:"p",href:"/docs/module-types/#utilities"},"utility")," is very similar to E2E testing in other architectures. Because you are testing in the browser you can even use tools like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/joeldenning/import-map-overrides"},"import-map-overrides")," to run your tests in a production or production like environment with an override ",(0,r.kt)("em",{parentName:"p"},"before")," deploying to that environment. "),(0,r.kt)("p",null,"In general we suggest only using E2E tests to test integration points between microfrontends and core functionality following principles of either the ",(0,r.kt)("a",{parentName:"p",href:"https://www.browserstack.com/guide/testing-pyramid-for-test-automation"},"testing pyramid")," or the ",(0,r.kt)("a",{parentName:"p",href:"https://kentcdodds.com/blog/write-tests"},"testing trophy"),"."),(0,r.kt)("h2",{id:"testing-options"},"Testing Options"),(0,r.kt)("p",null,"In single-spa, there are more ways to test your code in a browser using tools like ",(0,r.kt)("a",{parentName:"p",href:"https://www.cypress.io/"},"cypress"),". Two common approaches are to test individual applications by using standalone mode and testing everything together, both provide value in different ways."),(0,r.kt)("h3",{id:"e2e-testing-with-standalone-mode"},'"E2E" testing with "standalone" mode'),(0,r.kt)("p",null,"While not perfect standalone mode offers a way to run individual single-spa applications and can be used to test a single-spa application. If the microfrontend relies upon configuration or initialization happening in your single-spa ",(0,r.kt)("inlineCode",{parentName:"p"},"root-config")," you cannot test those areas in standalone mode without mocking. Standalone mode works by creating a custom single-spa root-config on the fly that will just render the one application, so the code is the same as if it were running in production but the configuration is different."),(0,r.kt)("h3",{id:"testing-everything-together"},"Testing everything together"),(0,r.kt)("p",null,"Much like E2E tests run in traditional SPA applications you can open a brower and run assertions using tools like ",(0,r.kt)("a",{parentName:"p",href:"https://www.cypress.io/"},"Cypress"),". Taking this approach is mirroring a full end to end test. You are running the exact same code that is in the environment. With some configuration and tools like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/joeldenning/import-map-overrides"},"import-map-overrides")," you can set-up your testing environment to work with overrides to the import map and can run end-to-end tests before deploying your code changes to an environment."),(0,r.kt)("h4",{id:"configuring-e2e-tests-to-work-with-overrides"},"Configuring E2E tests to work with overrides"),(0,r.kt)("p",null,"At a high level you will need to do the following before your environment can utilize overrides in E2E tests"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use a tool like ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/joeldenning/import-map-overrides"},"import-map-overrides")),(0,r.kt)("li",{parentName:"ol"},'Get the built code on a publically accessible domain. Similar to a "review app"'),(0,r.kt)("li",{parentName:"ol"},"Configure your E2E testing environment to set the override"),(0,r.kt)("li",{parentName:"ol"},"Run the E2E tests")))}g.isMDXComponent=!0}}]);