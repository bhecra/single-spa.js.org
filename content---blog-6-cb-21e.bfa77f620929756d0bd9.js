(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{212:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));n(59),n(32),n(23),n(24),n(60),n(0);var a=n(225);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={title:"single-spa Inspector and 4.1",author:"Anthony Frehner",authorURL:"https://twitter.com/aahfrena",authorImageURL:"https://pbs.twimg.com/profile_images/1037162092963348480/1XLEV4MK_400x400.jpg"},s=[{value:"Background",id:"background",children:[]},{value:"Current Inspector Features",id:"current-inspector-features",children:[]},{value:"single-spa 4.1",id:"single-spa-41",children:[]},{value:"Help Wanted!",id:"help-wanted",children:[]}],i={rightToc:s},l="wrapper";function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(l,o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"background"},"Background"),Object(a.b)("p",null,"For a long time, Canopy has had the benefit of using a tool called ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/CanopyTax/sofe-inspector"}),"sofe inspector")," (note: this is an out-of-date version of it) to list, override, and interact with single-spa applications. There has always been a desire to ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/CanopyTax/single-spa/issues/151"}),"figure out how to share this tool so others can benefit as well"),"."),Object(a.b)("p",null,"With that in mind, I'm proud to announce an initial release for ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",o({parentName:"strong"},{href:"https://github.com/CanopyTax/single-spa-inspector"}),"single-spa Inspector")),"! single-spa Inspector is a Firefox and Chrome extension, much like React/Vue devtools, that allows you see and interact with your single-spa applications and configuration."),Object(a.b)("h2",{id:"current-inspector-features"},"Current Inspector Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"List registered applications"),Object(a.b)("li",{parentName:"ul"},"Show application status"),Object(a.b)("li",{parentName:"ul"},"Force an app to mount or unmount"),Object(a.b)("li",{parentName:"ul"},'Hover over an app name to have an "inspect element"-like view of your apps (Overlays)')),Object(a.b)("p",null,"(Note: Overlays require a small update to your code, but should hopefully be simple! See ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/CanopyTax/single-spa-inspector#configuring-app-overlays"}),"how to configure app overlays"),")"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"The single-spa Inspector will only work with single-spa versions 4.1 and higher"),", since we had to expose and add some functionality to the single-spa library itself in order to implement these features."),Object(a.b)("h2",{id:"single-spa-41"},"single-spa 4.1"),Object(a.b)("p",null,"single-spa 4.1 was released, which includes a couple of key updates:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Support for single-spa Inspector"),Object(a.b)("li",{parentName:"ol"},"ESM bundle output"),Object(a.b)("li",{parentName:"ol"},"Simpmlified test configuration for developers/contributors to single-spa")),Object(a.b)("p",null,"For most people, ESM (EcmaScript Module) support shouldn't affect how you use single-spa, but for those looking to play around with modules or other advanced Javascript things, it's a welcome addition."),Object(a.b)("p",null,'We also changed our test suite to purely use Jest instead of Saucelabs, and hopefully false positive "failing" tests on pull requests will be a thing of the past.'),Object(a.b)("h2",{id:"help-wanted"},"Help Wanted!"),Object(a.b)("p",null,"If you would like to suggest a new feature for single-spa Inspector, report a bug, improve our (admittedly horrible and hopefully temporary) UI/UX, or add features, please see the ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/CanopyTax/single-spa-inspector"}),"github repo")," and hack away!"),Object(a.b)("p",null,"We also hope to update some of our example repos to the lastest single-spa so that anyone with the extension installed can test out the features and see how to implement overlays. But this process will go faster if someone wants to help out. :)"),Object(a.b)("p",null,"Thank you!"))}p.isMDXComponent=!0},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var a=n(0),o=n.n(a),r=o.a.createContext({}),s=function(e){var t=o.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=s(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,h=u[i+"."+c]||u[c]||p[c]||r;return n?o.a.createElement(h,Object.assign({},{ref:t},l,{components:n})):o.a.createElement(h,Object.assign({},{ref:t},l))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);