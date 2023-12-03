"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3288],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var r=a.createContext({}),p=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(r.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,r=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(n),c=s,h=g["".concat(r,".").concat(c)]||g[c]||m[c]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[g]="string"==typeof e?e:s,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},453:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return r},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return g}});var a=n(7462),s=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"single-spa 6",author:"Joel Denning",authorURL:"https://x.com/joelbdenning",authorImageURL:"https://avatars2.githubusercontent.com/u/5524384?s=460&v=4"},r="Announcing single-spa@6",p={permalink:"/blog/2023/11/27/single-spa-6",source:"@site/blog/2023-11-27-single-spa-6.md",title:"single-spa 6",description:"We have released single-spa@6! The single-spa core team is committed to a stable single-spa runtime with very few breaking changes. We expect over 95% of single-spa users can upgrade easily without altering their changes!",date:"2023-11-27T00:00:00.000Z",formattedDate:"November 27, 2023",tags:[],readingTime:9.505,hasTruncateMarker:!1,authors:[{name:"Joel Denning",url:"https://x.com/joelbdenning",imageURL:"https://avatars2.githubusercontent.com/u/5524384?s=460&v=4"}],frontMatter:{title:"single-spa 6",author:"Joel Denning",authorURL:"https://x.com/joelbdenning",authorImageURL:"https://avatars2.githubusercontent.com/u/5524384?s=460&v=4"},nextItem:{title:"November 2023 Core Team Meeting",permalink:"/blog/2023/11/07/core-team-meeting-notes"}},u={authorsImageUrls:[void 0]},g=[{value:"Note from single-spa&#39;s creator",id:"note-from-single-spas-creator",level:2},{value:"Summary",id:"summary",level:2},{value:"Browser Support / IE11",id:"browser-support--ie11",level:2},{value:"Migration",id:"migration",level:2},{value:"Steps",id:"steps",level:3},{value:"IE11",id:"ie11",level:3},{value:"Import Maps",id:"import-maps",level:4},{value:"Webpack",id:"webpack",level:4},{value:"Rollup",id:"rollup",level:4},{value:"Import",id:"import",level:4},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Features",id:"features",level:2},{value:"Async navigation cancelation",id:"async-navigation-cancelation",level:2},{value:"New patchHistoryApi",id:"new-patchhistoryapi",level:3},{value:"New profiler",id:"new-profiler",level:3},{value:"Fixes",id:"fixes",level:2},{value:"Maintenance",id:"maintenance",level:2}],m={toc:g};function c(e){var t=e.components,n=(0,s.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We have released single-spa@6! The single-spa core team is committed to a stable single-spa runtime with very few breaking changes. We expect over 95% of single-spa users can upgrade easily without altering their changes!"),(0,i.kt)("h2",{id:"note-from-single-spas-creator"},"Note from single-spa's creator"),(0,i.kt)("p",null,"On September 22, 2015, I pushed single-spa's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa/commit/1b885d783fde8000489cf19fc4db8e167aa55526"},"initial commit"),". 8 years later, I am releasing single-spa@6. I am committed to this project and hope to improve and grow it for many years to come. The single-spa core team recently started monthly calls where we discuss important pull requests and roadmap (see first ",(0,i.kt)("a",{parentName:"p",href:"https://single-spa.js.org/blog/2023/11/07/core-team-meeting-notes"},"meeting notes"),"). The future of microfrontends still includes single-spa."),(0,i.kt)("p",null,"On December 11, 2023, the company I founded is launching a product called ",(0,i.kt)("a",{parentName:"p",href:"https://baseplate.cloud"},"Baseplate Cloud")," that offers single-spa hosting. Baseplate Cloud is the single-spa hosting solution born from 4+ years of consulting with various companies who were implementing single-spa. ",(0,i.kt)("a",{parentName:"p",href:"https://baseplate.cloud/docs/cdn/intro"},"Baseplate CDN")," is a Cloudflare worker that proxies JS files from cloud storage, provides edge-side import map processing, auto-implements single-spa root configs, and more. Cloudflare edge-side processing provides many performance advantages while retaining the impressive scalability and security of Cloudflare. As a sign of good will towards the open source and single-spa communities, I have kept the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/JustUtahCoders/baseplate-cloudflare-worker"},"baseplate-cloudflare-worker")," public, with a \"Commons Clause\" + AGPL 3.0 license. Companies can use and contribute to baseplate-cloudflare-worker freely, as long as they don't try to sell it in competition to Baseplate Cloud. I would appreciate the community's backing and hope Baseplate becomes the way to financially sustain the single-spa project in the long term."),(0,i.kt)("p",null,"It would mean the world to me if your company or organization considered signing up for Baseplate's paid, private beta launch. We used the revenue the community gave us for ",(0,i.kt)("a",{parentName:"p",href:"https://single-spa-workshop.com"},"single-spa-workshop.com")," to create Baseplate, and plan to use Baseplate revenue to fund maintenance of single-spa's open source ecosystem. The Baseplate team is proudly a worker-owned business that has not sacrificed ownership of the company to outside investors. We built Baseplate with the revenue the community gave us via single-spa-workshop.com as the initial funding, which is only a few thousand dollars a month. The best Christmas present I could receive this year is a few dozen companies signing up immediately and putting Baseplate on their Q1 or Q2 roadmaps for 2024. I am asking for corporate partners to ensure long term financial sustainability so that single-spa will remain a good microfrontends solution for years to come."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"mailto:sales@baseplate.cloud"},"Contact Baseplate Sales")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"single-spa@6 provides advanced features such as async navigation cancelation and parcel-only mode (via ",(0,i.kt)("inlineCode",{parentName:"p"},"patchHistoryApi"),"), while also updating the package configuration to use modern NodeJS and bundler features like ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/dist/latest-v16.x/docs/api/packages.html#packages_package_entry_points"},"package entrypoints")," and ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/dist/latest-v16.x/docs/api/packages.html#packages_type"},(0,i.kt)("inlineCode",{parentName:"a"},'"type": "module"')),". We also updated ",(0,i.kt)("inlineCode",{parentName:"p"},"urlRerouteOnly")," to default to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", as it boosts performance and we consider it to be a best practice to author applications that work when urlRerouteOnly is set to true."),(0,i.kt)("h2",{id:"browser-support--ie11"},"Browser Support / IE11"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"We still support IE11")," and the same versions of NodeJS (at least as old as Node 10). However, we've changed our defaults such that IE11 is only supported with some additional configuration, as described in the IE11 Migration section below."),(0,i.kt)("p",null,"For the ",(0,i.kt)("inlineCode",{parentName:"p"},"single-spa")," npm package, we plan single-spa@6 to be the last major version that supports IE11. In general, we've released a major version of single-spa every 1-2 years. We do not have a concrete timeline or plans for single-spa@7, and will accept community contributions for any important patches to single-spa@6 after single-spa@7 is released."),(0,i.kt)("p",null,"For all surrounding packages (single-spa-react, single-spa-vue, systemjs-webpack-interop, single-spa-angular, etc) we may begin dropping IE11 support sooner than the single-spa@7 release. As we do so, we'll create documentation that lists the latest versions of packages that support IE11, and also accept community contributions to those versions for important updates."),(0,i.kt)("p",null,"The motivation for dropping IE11 support over time is to allow our core team to spend less time on supporting a nine year old browser and more time pushing the single-spa ecosystem forward. Also, we believe that the majority of end users should not suffer performance penalties because of a small percentage of users still using IE11. Slowly dropping IE11 also will also allow us to focus on a systemjs-less future for single-spa, where native browser modules are used rather than systemjs modules."),(0,i.kt)("p",null,"We understand and sympathize with companies who cannot drop IE11 support now, which is why we're supporting IE11 even though much of the ecosystem has already dropped it (Vue 3 does not support ie11, Angular only does after some effort, and even webpack 5 requires extra configuration to get it working in IE11). Many of single-spa's users are large financial institutions, large ecommerce companies, and other very large companies, where dropping IE11 support is a long process that involves many dozens of people from separate departments. We encourage single-spa users to start the conversations at your companies about dropping IE11 support, even if they take a long time or result in a decision to drop IE11 years in the future."),(0,i.kt)("h2",{id:"migration"},"Migration"),(0,i.kt)("p",null,"We think that >95% of single-spa users will be able to safely upgrade with no code changes. The breaking changes below are largely related to advanced features that most single-spa users do not use."),(0,i.kt)("h3",{id:"steps"},"Steps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If using SystemJS + import maps, change the URL of single-spa in your import map:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'<script type="systemjs-importmap">\n  {\n    "imports": {\n-     "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.2/lib/system/single-spa.min.js"\n+     "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@6.0.0/lib/es2015/system/single-spa.min.js"\n    }\n  }\n<\/script>\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"In all your microfrontends (including root config), upgrade single-spa:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install single-spa@6\nyarn add single-spa@6\npnpm install single-spa@6\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Test things out."),(0,i.kt)("li",{parentName:"ol"},"If your app is not re-rendering during route transitions like it should (this is most common for Angular apps, but can happen in other frameworks to if you do a route transition without modifying the URL), change your root config's call to ",(0,i.kt)("inlineCode",{parentName:"li"},"start()"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"import { start } from 'single-spa';\n\n// DO NOT MAKE THIS CHANGE unless you are experiencing problems.\n- start();\n+ start({\n+   urlRerouteOnly: false\n+ });\n")),(0,i.kt)("p",null,"That's it! If you experience other issues, let us know in Github issues."),(0,i.kt)("h3",{id:"ie11"},"IE11"),(0,i.kt)("p",null,"If you support IE11, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"es5")," version of single-spa rather than ",(0,i.kt)("inlineCode",{parentName:"p"},"es2015"),". The method of doing this depends on your configuration - some common ones are explained below:"),(0,i.kt)("h4",{id:"import-maps"},"Import Maps"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'<script type="systemjs-importmap">\n  {\n    "imports": {\n-     "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@6.0.0/lib/es2015/system/single-spa.min.js"\n+     "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@6.0.0/lib/es5/system/single-spa.min.js"\n    }\n  }\n<\/script>\n')),(0,i.kt)("h4",{id:"webpack"},"Webpack"),(0,i.kt)("p",null,"If externalizing single-spa in your webpack config (very common, and the default with webpack-config-single-spa), you do not need to make the changes below. Otherwise, though, these changes will ensure you use the IE11-compatible version of single-spa."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// webpack.config.js\nmodule.exports = {\n  resolve: {\n    "alias": {\n      "single-spa": require.resolve("single-spa/lib/es5/esm/single-spa.min.js")\n    }\n  }\n}\n')),(0,i.kt)("h4",{id:"rollup"},"Rollup"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rollup/plugin-alias"},"https://www.npmjs.com/package/@rollup/plugin-alias")," to alias the import similarly to webpack"),(0,i.kt)("h4",{id:"import"},"Import"),(0,i.kt)("p",null,"If you do not wish to change bundler configuration, you can modify your import statements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"- import { start } from 'single-spa';\n+ import { start } from 'single-spa/lib/es5/esm/single-spa.min.js';\n")),(0,i.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"single-spa's package.json's ",(0,i.kt)("inlineCode",{parentName:"li"},'"main"')," field now points to an es2015 version of single-spa that does not work in IE11. To support IE11, see section below."),(0,i.kt)("li",{parentName:"ul"},"Delay patching history api until start() or patchHistoryApi() is called. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/pull/827"},"Github link")),(0,i.kt)("li",{parentName:"ul"},"Do not show start() warning when registerApplication hasn't been called (for parcel-only use cases) ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/pull/827"},"Github link")),(0,i.kt)("li",{parentName:"ul"},"Change urlRerouteOnly default value to true. This is a performance boost for most applications, but for some situations can result in single-spa not triggering mounts/unmounts when it should. You can read more about it at ",(0,i.kt)("a",{parentName:"li",href:"https://single-spa.js.org/docs/api#start"},"https://single-spa.js.org/docs/api#start")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/issues/484"},"https://github.com/single-spa/single-spa/issues/484"),". Angular users may want to set it to false due to nuanced behavior of angular router. To do so, call ",(0,i.kt)("inlineCode",{parentName:"li"},"start({urlRerouteOnly: false})")," in your root config. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/pull/828"},"Github link")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cancelNavigation(val)")," no longer cancels navigation if ",(0,i.kt)("inlineCode",{parentName:"li"},"val")," is falsy ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/pull/826"},"Github link")),(0,i.kt)("li",{parentName:"ul"},"single-spa's package.json ",(0,i.kt)("inlineCode",{parentName:"li"},'"type"')," is now set to ",(0,i.kt)("inlineCode",{parentName:"li"},'"module"'),". This only impacts NodeJS usage of single-spa (not webpack/rollup/browser). Read more at ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/dist/latest-v16.x/docs/api/packages.html#packages_type"},"official nodejs docs"),"."),(0,i.kt)("li",{parentName:"ul"},"single-spa's package.json now has ",(0,i.kt)("inlineCode",{parentName:"li"},'"exports"'),". This changes which of single-spa's bundles are used by NodeJS, webpack, and rollup. The main change is that webpack / rollup will now use an IE11-incompatible (es2015) version of single-spa. See IE11 section below for more details. Additionally, an ESM version of single-spa will now be used when loaded via ",(0,i.kt)("inlineCode",{parentName:"li"},"import('single-spa')")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"import 'single-spa';"),", whereas a UMD version will be used when calling ",(0,i.kt)("inlineCode",{parentName:"li"},"require(\"single-spa')"),". To avoid the ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/dist/latest-v16.x/docs/api/packages.html#packages_dual_commonjs_es_module_packages"},"dual package hazard"),", only use ",(0,i.kt)("inlineCode",{parentName:"li"},"import")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"require")," to load single-spa in your NodeJS code - do not use both. You can see the package exports at ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/blob/dea22f1aac39777a07252897ae625ab1d8313e9d/package.json#L8-L25"},"https://github.com/single-spa/single-spa/blob/dea22f1aac39777a07252897ae625ab1d8313e9d/package.json#L8-L25"),"."),(0,i.kt)("li",{parentName:"ul"},"The published ",(0,i.kt)("inlineCode",{parentName:"li"},"umd")," builds now have ",(0,i.kt)("inlineCode",{parentName:"li"},".cjs")," extensions rather than ",(0,i.kt)("inlineCode",{parentName:"li"},".js"),", since all ",(0,i.kt)("inlineCode",{parentName:"li"},".js")," files in the single-spa package are assumed to be ESM.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"File structure published to npm\n\n# Before\n# See https://www.jsdelivr.com/package/npm/single-spa?path=lib&version=5.9.3\nlib/\n  # IE11\n  umd/\n    single-spa.dev.js\n    single-spa.min.js\n  # IE11\n  esm/\n    single-spa.dev.js\n    single-spa.min.js\n  # IE11\n  system/\n    single-spa.dev.js\n    single-spa.min.js\n  # No IE11\n  es2015/\n    single-spa.dev.js\n    single-spa.min.js\n\n# After\n# See https://www.jsdelivr.com/package/npm/single-spa?path=lib&version=6.0.0\nlib\n  # IE11\n  es5/\n    umd/\n      single-spa.dev.js\n      single-spa.min.js\n    system/\n      single-spa.dev.js\n      single-spa.min.js\n    esm/\n      single-spa.dev.js\n      single-spa.min.js\n  # No IE11\n  es2015/\n    umd/\n      single-spa.dev.cjs\n      single-spa.min.cjs\n    system/\n      single-spa.dev.js\n      single-spa.min.js\n    esm/\n      single-spa.dev.js\n      single-spa.min.js\n")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("h2",{id:"async-navigation-cancelation"},"Async navigation cancelation"),(0,i.kt)("p",null,"We've added support for async navigation cancelation. To use it, call ",(0,i.kt)("inlineCode",{parentName:"p"},"cancelNavigation(promise)")," with a promise as an argument. Single-spa will wait until that promise resolves/rejects before proceeding with navigation. If the promise resolves with a truthy value, navigation is canceled. If the promise resolves with a falsy value or rejects, navigation is not canceled.  ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa/pull/826"},"Github link")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'window.addEventListener("single-spa:before-routing-event", evt => {\n  if (evt.detail.oldUrl === "/settings") {\n    evt.detail.cancelNavigation(checkSettingsOkay())\n  }\n})\n\nasync function checkSettingsOkay() {\n  const response = await fetch(\'/api/settings-okay\')\n  if (response.ok) {\n    return true;\n  } else {\n    alert("Please fix your settings before leaving the page");\n    return false\n  }\n}\n')),(0,i.kt)("h3",{id:"new-patchhistoryapi"},"New patchHistoryApi"),(0,i.kt)("p",null,"We've exposed a new ",(0,i.kt)("inlineCode",{parentName:"p"},"patchHistoryApi()")," api. This lets you use single-spa's modified implementations of pushState/replaceState/popstate/hashchange without using single-spa applications. This is intended to be used by single-spa users who exclusively use single-spa parcels, rather than applications ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa/pull/827"},"Github link")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { patchHistoryApi, mountRootParcel } from 'single-spa';\n\npatchHistoryApi({\n  urlRerouteOnly: true\n})\n\n// now you don't need to call start() if you're only using parcels\n\nmountRootParcel(parcelConfig, parcelProps)\n")),(0,i.kt)("h3",{id:"new-profiler"},"New profiler"),(0,i.kt)("p",null,"We've implemented a profiler that is available within the dev builds of single-spa@6. A visualization of the profiler is available in the ",(0,i.kt)("a",{parentName:"p",href:"mailto:single-spa-inspector@0.6.0"},"single-spa-inspector@0.6.0")," browser extension:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Implement profiler for lifecycle events. by @joeldenning in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/pull/868"},"#868")),(0,i.kt)("li",{parentName:"ul"},"Implement parcel and routing profiler events. by @joeldenning in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/pull/903"},"#903"))),(0,i.kt)("img",{src:"/img/profiler-screenshot.png",alt:"Screenshot of single-spa-inspector profiler tab"}),(0,i.kt)("h2",{id:"fixes"},"Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix regression with parcel name ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/pull/825"},"Github link")),(0,i.kt)("li",{parentName:"ul"},"Ensure all reroute promises (triggerAppChange() return value) resolve even during cancelation ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/pull/831"},"Github link")),(0,i.kt)("li",{parentName:"ul"},"fix(types): fix SingleSpaAppsByNewStatus interface by @FelixGraf in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/pull/988"},"#988")),(0,i.kt)("li",{parentName:"ul"},"Ensure app is unmounted during unregisterApplication. Resolves #871 by @joeldenning in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/pull/875"},"#875"))),(0,i.kt)("h2",{id:"maintenance"},"Maintenance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Switch from yarn -> pnpm ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/pull/824"},"Github link")),(0,i.kt)("li",{parentName:"ul"},"Upgrade all dependencies ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/pull/824"},"Github link")),(0,i.kt)("li",{parentName:"ul"},"Upgrade husky from v4 to v7. Use pinst to avoid issues with yarn 2 users as described in ",(0,i.kt)("a",{parentName:"li",href:"https://typicode.github.io/husky/#/?id=yarn-2"},"https://typicode.github.io/husky/#/?id=yarn-2")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/pull/824"},"Github link")),(0,i.kt)("li",{parentName:"ul"},"Upgrade to Jest 27. Fix tests to work with Jest 27. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/pull/824"},"Github link")),(0,i.kt)("li",{parentName:"ul"},"Upgrade to Node 16. Fix tests to work with Node 16 (Fix tests in Node 15 #652) ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/pull/824"},"Github link")),(0,i.kt)("li",{parentName:"ul"},"Run upgraded version of prettier on all files. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/pull/824"},"Github link")),(0,i.kt)("li",{parentName:"ul"},"Remove unused babel-eslint dependency ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/pull/824"},"Github link")),(0,i.kt)("li",{parentName:"ul"},"Upgrade to new package names for all rollup plugins. (@rollup/plugin-node-resolve instead of rollup-plugin-node-resolve) ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/pull/824"},"Github link")),(0,i.kt)("li",{parentName:"ul"},"Remove file size impact workflow since it's broken. by @joeldenning in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/pull/879"},"#879")),(0,i.kt)("li",{parentName:"ul"},"Remove console.log in test by @joeldenning in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/pull/878"},"#878"))))}c.isMDXComponent=!0}}]);