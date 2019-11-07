(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{213:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return l}));a(59),a(32),a(23),a(24),a(60),a(0);var n=a(225);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={title:"single-spa parcels, explained",author:"Joel Denning",authorURL:"https://twitter.com/joelbdenning",authorImageURL:"https://avatars2.githubusercontent.com/u/5524384?s=400&u=ff145fcb2ae5305555628a446e9f725d4e145aaa&v=4"},i=[{value:"Another way to do framework agnostic components?",id:"another-way-to-do-framework-agnostic-components",children:[]},{value:"Okay but you haven\u2019t told me what a single-spa parcel is",id:"okay-but-you-havent-told-me-what-a-single-spa-parcel-is",children:[]},{value:"A few more specifics",id:"a-few-more-specifics",children:[]},{value:"Syntactic sugar makes this easier",id:"syntactic-sugar-makes-this-easier",children:[]},{value:"How hard is it to try this out?",id:"how-hard-is-it-to-try-this-out",children:[]},{value:"Let us know what you think!",id:"let-us-know-what-you-think",children:[]}],s={rightToc:i},c="wrapper";function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(c,o({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Ever since single-spa@1.0.0, the single-spa team has been dedicated to bringing microservices to the frontend. We have made it possible for AngularJS, React, Angular, Vue, and other frameworks to coexist side by side in the same page."),Object(n.b)("p",null,"And with the release of ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/CanopyTax/single-spa/releases/tag/v4.0.0"}),"version 4"),", I\u2019m pleased to announce that ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/CanopyTax/single-spa"}),"single-spa")," is expanding that effort so that ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("em",{parentName:"strong"},"individual components"))," written with different frameworks can interoperate. It is new terrain for the single-spa community, which previously had focused on getting large applications to interoperate with each other, instead of the individual components."),Object(n.b)("h2",{id:"another-way-to-do-framework-agnostic-components"},"Another way to do framework agnostic components?"),Object(n.b)("p",null,"For those familiar with ",Object(n.b)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components"}),"web components")," and ",Object(n.b)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements"}),"custom elements"),", you may be wondering why a javascript library would try to do what browsers are starting natively to do."),Object(n.b)("p",null,"And as one of the contributors to the custom elements polyfill, let me be the first one to say that we did not make this decision lightly."),Object(n.b)("p",null,"If you\u2019re interested in diving into the details, check out ",Object(n.b)("a",o({parentName:"p"},{href:"https://medium.com/canopy-tax/one-companys-relationship-with-custom-elements-d360baf3b253"}),"One Company\u2019s Relationship With Custom Elements"),", which explains some of the difficulties we\u2019ve been through with web components and custom elements."),Object(n.b)("p",null,"TLDR: React and some other frameworks don\u2019t interop with custom elements very well. Additionally dealing with inner html, attributes vs properties, and customized builtins can be a pain."),Object(n.b)("h2",{id:"okay-but-you-havent-told-me-what-a-single-spa-parcel-is"},"Okay but you haven\u2019t told me what a single-spa parcel is"),Object(n.b)("p",null,"A parcel is single-spa\u2019s way of building a component in one framework and using it in another."),Object(n.b)("p",null,"To implement a parcel, just create a javascript object that has 3\u20134 functions on it. We call this javascript object a ",Object(n.b)("em",{parentName:"p"},"parcel config")," and there are three required functions to implement: bootstrap, mount, and unmount. A fourth function, update, is optional."),Object(n.b)("p",null,"Each of the functions will be called by single-spa at the right time, but the parcel config will control what happens. In other words, single-spa controls the \u201cwhen,\u201d but the parcel config controls the \u201cwhat\u201d and the \u201chow.\u201d"),Object(n.b)("p",null,"Once you\u2019ve implemented the parcel config, simply call singleSpa.mountRootParcel(parcelConfig, parcelProps) to mount it. This is the key to what makes parcels framework agnostic \u2014 regardless of whether the parcel config is implemented with React, Angular, Vue, or anything else, to use the parcel you always just call mountRootParcel()."),Object(n.b)("h2",{id:"a-few-more-specifics"},"A few more specifics"),Object(n.b)("p",null,"We\u2019ve glossed over a few things that I want to touch on real quick:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"How do you implement the lifecycle functions on the parcel config?")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"        Use a helper library for your framework of choice. [single-spa-react](https://github.com/CanopyTax/single-spa-react), [single-spa-angular](https://github.com/CanopyTax/single-spa-angular) (for angular@2+), [single-spa-angularjs](https://github.com/CanopyTax/single-spa-angularjs), [single-spa-vue](https://github.com/CanopyTax/single-spa-vue), and [others](https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-ecosystem.md) will implement the entire parcel config for you.\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"What are the props you pass to mountRootParcel()?")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"        The props passed as the second argument to singleSpa.mountRootParcel(parcelConfig, parcelProps) are an object with one required prop and as many custom props as you\u2019d like. The required prop is domElement, which tells the parcel where to mount. And the custom props get passed through to the parcel config lifecycle functions.\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"How do you re-render and unmount a parcel?")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),'        The singleSpa.mountRootParcel() function returns a parcel object that lets you re-render and unmount the parcel whenever you\u2019d like to.\n\n        <iframe src="https://medium.com/media/b2d981b380b937009f7ce84e1cc2d753" frameBorder="0" />\n')))),Object(n.b)("h2",{id:"syntactic-sugar-makes-this-easier"},"Syntactic sugar makes this easier"),Object(n.b)("p",null,"Calling all of those functions manually might get annoying. So let\u2019s make it easier. Here\u2019s an example of some syntactic sugar for React. Similar features will be added soon for Angular, Vue, and other frameworks."),Object(n.b)("iframe",{src:"https://medium.com/media/9b5904d3423359cb2eef410f9ee35648",frameBorder:"0"}),Object(n.b)("h2",{id:"how-hard-is-it-to-try-this-out"},"How hard is it to try this out?"),Object(n.b)("p",null,"You can get started with parcels immediately, without using the rest of single-spa. To do so, either npm install or script tag single-spa, then call mountRootParcel with your first parcel config."),Object(n.b)("p",null,"You can also check out ",Object(n.b)("a",o({parentName:"p"},{href:"https://codepen.io/joeldenning/pen/qKVoQg?editors=0010#0"}),"this codepen example")," to start out."),Object(n.b)("p",null,"And if you are already a user of ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/CanopyTax/single-spa/blob/master/docs/applications.md"}),"single-spa applications"),", parcels mean that your applications can mount and unmount shared functionality whenever you want them to. Since parcels don\u2019t have ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-config.md#activity-function"}),"activity functions"),", you don\u2019t have to set up routes for them."),Object(n.b)("h2",{id:"let-us-know-what-you-think"},"Let us know what you think!"),Object(n.b)("p",null,"We\u2019d love to get your feedback on parcels. What do you think of this new way of framework interop? Is the implementation easy to understand? Are parcels useful for you or do they not quite fit into what you\u2019re trying to accomplish?How hard was it for you to try out?"),Object(n.b)("p",null,"Check out the ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/CanopyTax/single-spa/blob/master/docs/parcels.md"}),"official docs")," for more examples, explanations, and ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/CanopyTax/single-spa/blob/master/docs/parcels-api.md"}),"api documentation"),"."),Object(n.b)("p",null,"And let us know your thoughts in the ",Object(n.b)("a",o({parentName:"p"},{href:"https://join.slack.com/t/single-spa/shared_invite/enQtODAwNTIyMzc4OTE1LWUxMTUwY2M1MTY0ZGMzOTUzMGNkMzI1NzRiYzYwOWM1MTEzZDM1NDAyNWM3ZmViOTAzZThkMDcwMWZmNTFmMWQ"}),"single-spa Slack channel"),", a ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/CanopyTax/single-spa/issues"}),"Github issue"),", or ",Object(n.b)("a",o({parentName:"p"},{href:"https://twitter.com/Single_spa"}),"on Twitter"),"!"))}l.isMDXComponent=!0},225:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n),r=o.a.createContext({}),i=function(e){var t=o.a.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},s=function(e){var t=i(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),p=i(a),u=n,h=p[s+"."+u]||p[u]||l[u]||r;return a?o.a.createElement(h,Object.assign({},{ref:t},c,{components:a})):o.a.createElement(h,Object.assign({},{ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);