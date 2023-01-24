"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2038],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||r;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1328:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],s={title:"single-spa parcels, explained",author:"Joel Denning",authorURL:"https://twitter.com/joelbdenning",authorImageURL:"https://avatars2.githubusercontent.com/u/5524384?s=400&u=ff145fcb2ae5305555628a446e9f725d4e145aaa&v=4"},l=void 0,p={permalink:"/blog/2018/06/19/single-spa-parcels-explained",source:"@site/blog/2018-06-19-single-spa-parcels-explained.md",title:"single-spa parcels, explained",description:"Ever since single-spa@1.0.0, the single-spa team has been dedicated to bringing microservices to the frontend. We have made it possible for AngularJS, React, Angular, Vue, and other frameworks to coexist side by side in the same page.",date:"2018-06-19T00:00:00.000Z",formattedDate:"June 19, 2018",tags:[],readingTime:3.69,hasTruncateMarker:!1,authors:[{name:"Joel Denning",url:"https://twitter.com/joelbdenning",imageURL:"https://avatars2.githubusercontent.com/u/5524384?s=400&u=ff145fcb2ae5305555628a446e9f725d4e145aaa&v=4"}],frontMatter:{title:"single-spa parcels, explained",author:"Joel Denning",authorURL:"https://twitter.com/joelbdenning",authorImageURL:"https://avatars2.githubusercontent.com/u/5524384?s=400&u=ff145fcb2ae5305555628a446e9f725d4e145aaa&v=4"},prevItem:{title:"single-spa Inspector and 4.1",permalink:"/blog/2019/02/20/single-spa-inspector"},nextItem:{title:"A step-by-step guide to single-spa",permalink:"/blog/2016/12/16/a-step-by-step-guide-to-single-spa"}},c={authorsImageUrls:[void 0]},u=[{value:"Another way to do framework agnostic components?",id:"another-way-to-do-framework-agnostic-components",level:2},{value:"Okay but you haven\u2019t told me what a single-spa parcel is",id:"okay-but-you-havent-told-me-what-a-single-spa-parcel-is",level:2},{value:"A few more specifics",id:"a-few-more-specifics",level:2},{value:"Syntactic sugar makes this easier",id:"syntactic-sugar-makes-this-easier",level:2},{value:"How hard is it to try this out?",id:"how-hard-is-it-to-try-this-out",level:2},{value:"Let us know what you think!",id:"let-us-know-what-you-think",level:2}],h={toc:u};function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ever since ",(0,r.kt)("a",{parentName:"p",href:"mailto:single-spa@1.0.0"},"single-spa@1.0.0"),", the single-spa team has been dedicated to bringing microservices to the frontend. We have made it possible for AngularJS, React, Angular, Vue, and other frameworks to coexist side by side in the same page."),(0,r.kt)("p",null,"And with the release of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa/releases/tag/v4.0.0"},"version 4"),", I\u2019m pleased to announce that ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa"},"single-spa")," is expanding that effort so that ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"individual components"))," written with different frameworks can interoperate. It is new terrain for the single-spa community, which previously had focused on getting large applications to interoperate with each other, instead of the individual components."),(0,r.kt)("h2",{id:"another-way-to-do-framework-agnostic-components"},"Another way to do framework agnostic components?"),(0,r.kt)("p",null,"For those familiar with ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components"},"web components")," and ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements"},"custom elements"),", you may be wondering why a JavaScript library would try to do what browsers are starting natively to do."),(0,r.kt)("p",null,"And as one of the contributors to the custom elements polyfill, let me be the first one to say that we did not make this decision lightly."),(0,r.kt)("p",null,"If you\u2019re interested in diving into the details, check out ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/canopy-tax/one-companys-relationship-with-custom-elements-d360baf3b253"},"One Company\u2019s Relationship With Custom Elements"),", which explains some of the difficulties we\u2019ve been through with web components and custom elements."),(0,r.kt)("p",null,"TLDR: React and some other frameworks don\u2019t interop with custom elements very well. Additionally dealing with inner HTML, attributes vs properties, and customized builtins can be a pain."),(0,r.kt)("h2",{id:"okay-but-you-havent-told-me-what-a-single-spa-parcel-is"},"Okay but you haven\u2019t told me what a single-spa parcel is"),(0,r.kt)("p",null,"A parcel is single-spa\u2019s way of building a component in one framework and using it in another."),(0,r.kt)("p",null,"To implement a parcel, just create a JavaScript object that has 3\u20134 functions on it. We call this JavaScript object a ",(0,r.kt)("em",{parentName:"p"},"parcel config")," and there are three required functions to implement: bootstrap, mount, and unmount. A fourth function, update, is optional."),(0,r.kt)("p",null,"Each of the functions will be called by single-spa at the right time, but the parcel config will control what happens. In other words, single-spa controls the \u201cwhen,\u201d but the parcel config controls the \u201cwhat\u201d and the \u201chow.\u201d"),(0,r.kt)("p",null,"Once you\u2019ve implemented the parcel config, simply call singleSpa.mountRootParcel(parcelConfig, parcelProps) to mount it. This is the key to what makes parcels framework agnostic \u2014 regardless of whether the parcel config is implemented with React, Angular, Vue, or anything else, to use the parcel you always just call mountRootParcel()."),(0,r.kt)("h2",{id:"a-few-more-specifics"},"A few more specifics"),(0,r.kt)("p",null,"We\u2019ve glossed over a few things that I want to touch on real quick:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"How do you implement the lifecycle functions on the parcel config?")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"        Use a helper library for your framework of choice. [single-spa-react](https://github.com/single-spa/single-spa-react), [single-spa-angular](https://github.com/single-spa/single-spa-angular) (for angular@2+), [single-spa-angularjs](https://github.com/single-spa/single-spa-angularjs), [single-spa-vue](https://github.com/single-spa/single-spa-vue), and [others](https://github.com/single-spa/single-spa/blob/master/docs/single-spa-ecosystem.md) will implement the entire parcel config for you.\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"What are the props you pass to mountRootParcel()?")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"        The props passed as the second argument to singleSpa.mountRootParcel(parcelConfig, parcelProps) are an object with one required prop and as many custom props as you\u2019d like. The required prop is domElement, which tells the parcel where to mount. And the custom props get passed through to the parcel config lifecycle functions.\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"How do you re-render and unmount a parcel?")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'        The singleSpa.mountRootParcel() function returns a parcel object that lets you re-render and unmount the parcel whenever you\u2019d like to.\n\n        <iframe src="https://medium.com/media/b2d981b380b937009f7ce84e1cc2d753" frameBorder="0" />\n')))),(0,r.kt)("h2",{id:"syntactic-sugar-makes-this-easier"},"Syntactic sugar makes this easier"),(0,r.kt)("p",null,"Calling all of those functions manually might get annoying. So let\u2019s make it easier. Here\u2019s an example of some syntactic sugar for React. Similar features will be added soon for Angular, Vue, and other frameworks."),(0,r.kt)("iframe",{src:"https://medium.com/media/9b5904d3423359cb2eef410f9ee35648",frameBorder:"0"}),(0,r.kt)("h2",{id:"how-hard-is-it-to-try-this-out"},"How hard is it to try this out?"),(0,r.kt)("p",null,"You can get started with parcels immediately, without using the rest of single-spa. To do so, either npm install or script tag single-spa, then call mountRootParcel with your first parcel config."),(0,r.kt)("p",null,"You can also check out ",(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/joeldenning/pen/qKVoQg?editors=0010#0"},"this codepen example")," to start out."),(0,r.kt)("p",null,"And if you are already a user of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md"},"single-spa applications"),", parcels mean that your applications can mount and unmount shared functionality whenever you want them to. Since parcels don\u2019t have ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa/blob/master/docs/configuration#activity-function"},"activity functions"),", you don\u2019t have to set up routes for them."),(0,r.kt)("h2",{id:"let-us-know-what-you-think"},"Let us know what you think!"),(0,r.kt)("p",null,"We\u2019d love to get your feedback on parcels. What do you think of this new way of framework interop? Is the implementation easy to understand? Are parcels useful for you or do they not quite fit into what you\u2019re trying to accomplish?How hard was it for you to try out?"),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa/blob/master/docs/parcels.md"},"official docs")," for more examples, explanations, and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa/blob/master/docs/parcels-api.md"},"api documentation"),"."),(0,r.kt)("p",null,"And let us know your thoughts in the ",(0,r.kt)("a",{parentName:"p",href:"https://join.slack.com/t/single-spa/shared_invite/zt-15a59134l-ytK9bWMD1z3vGTC9LwPREg"},"single-spa Slack channel"),", a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa/issues"},"Github issue"),", or ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/Single_spa"},"on Twitter"),"!"))}m.isMDXComponent=!0}}]);