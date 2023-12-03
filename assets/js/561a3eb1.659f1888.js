"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2541],{3722:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"5.x","label":"5.x","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-5.x","isLast":false,"docsSidebars":{"version-5.x/docs":[{"type":"category","label":"Overview","items":[{"type":"link","label":"Overview of single-spa","href":"/docs/5.x/getting-started-overview","docId":"getting-started-overview"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Examples","items":[{"type":"link","label":"Resources","href":"/docs/5.x/examples","docId":"examples"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Tutorials","items":[{"type":"link","label":"Official Courses","href":"https://single-spa-workshop.com"},{"type":"link","label":"Playground","href":"/docs/5.x/single-spa-playground","docId":"single-spa-playground"},{"type":"link","label":"Videos","href":"/docs/5.x/videos","docId":"videos"}],"collapsed":true,"collapsible":true},{"type":"category","label":"CLI","items":[{"type":"link","label":"create-single-spa","href":"/docs/5.x/create-single-spa","docId":"create-single-spa"},{"type":"link","label":"Shared Webpack configs","href":"/docs/5.x/shared-webpack-configs","docId":"shared-webpack-configs"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Concept: Microfrontend","items":[{"type":"link","label":"Overview","href":"/docs/5.x/microfrontends-concept","docId":"microfrontends-concept"},{"type":"link","label":"Microfrontend Types","href":"/docs/5.x/module-types","docId":"module-types"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Concept: Root Config","items":[{"type":"link","label":"Configuring single-spa","href":"/docs/5.x/configuration","docId":"configuration"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Concept: Application","items":[{"type":"link","label":"single-spa applications","href":"/docs/5.x/building-applications","docId":"building-applications"},{"type":"link","label":"Splitting applications","href":"/docs/5.x/separating-applications","docId":"separating-applications"},{"type":"link","label":"Migrating existing code","href":"/docs/5.x/migrating-existing-spas","docId":"migrating-existing-spas"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Concept: Parcel","items":[{"type":"link","label":"Overview","href":"/docs/5.x/parcels-overview","docId":"parcels-overview"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Testing","items":[{"type":"link","label":"Unit testing","href":"/docs/5.x/testing/units","docId":"testing/units"},{"type":"link","label":"E2E testing","href":"/docs/5.x/testing/e2e","docId":"testing/e2e"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Layout Engine","items":[{"type":"link","label":"Overview","href":"/docs/5.x/layout-overview","docId":"layout-overview"},{"type":"link","label":"Layout Definition","href":"/docs/5.x/layout-definition","docId":"layout-definition"},{"type":"link","label":"API","href":"/docs/5.x/layout-api","docId":"layout-api"}],"collapsed":true,"collapsible":true},{"type":"category","label":"The Recommended Setup","items":[{"type":"link","label":"Overview","href":"/docs/5.x/recommended-setup","docId":"recommended-setup"}],"collapsed":true,"collapsible":true},{"type":"category","label":"API","items":[{"type":"link","label":"Applications API","href":"/docs/5.x/api","docId":"api"},{"type":"link","label":"Parcels API","href":"/docs/5.x/parcels-api","docId":"parcels-api"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Ecosystem","items":[{"type":"link","label":"Overview","href":"/docs/5.x/ecosystem","docId":"ecosystem"},{"type":"link","label":"CSS","href":"/docs/5.x/ecosystem-css","docId":"ecosystem-css"},{"type":"link","label":"React","href":"/docs/5.x/ecosystem-react","docId":"ecosystem-react"},{"type":"link","label":"Vue","href":"/docs/5.x/ecosystem-vue","docId":"ecosystem-vue"},{"type":"link","label":"Angular","href":"/docs/5.x/ecosystem-angular","docId":"ecosystem-angular"},{"type":"link","label":"AngularJS","href":"/docs/5.x/ecosystem-angularjs","docId":"ecosystem-angularjs"},{"type":"link","label":"Cycle","href":"/docs/5.x/ecosystem-cycle","docId":"ecosystem-cycle"},{"type":"link","label":"Ember","href":"/docs/5.x/ecosystem-ember","docId":"ecosystem-ember"},{"type":"link","label":"Inferno","href":"/docs/5.x/ecosystem-inferno","docId":"ecosystem-inferno"},{"type":"link","label":"Preact","href":"/docs/5.x/ecosystem-preact","docId":"ecosystem-preact"},{"type":"link","label":"Svelte","href":"/docs/5.x/ecosystem-svelte","docId":"ecosystem-svelte"},{"type":"link","label":"Riot","href":"/docs/5.x/ecosystem-riot","docId":"ecosystem-riot"},{"type":"link","label":"Backbone","href":"/docs/5.x/ecosystem-backbone","docId":"ecosystem-backbone"},{"type":"link","label":"HTML / Web Components","href":"/docs/5.x/ecosystem-html-web-components","docId":"ecosystem-html-web-components"},{"type":"link","label":"Leaked globals","href":"/docs/5.x/ecosystem-leaked-globals","docId":"ecosystem-leaked-globals"},{"type":"link","label":"Dojo","href":"/docs/5.x/ecosystem-dojo","docId":"ecosystem-dojo"},{"type":"link","label":"AlpineJS","href":"/docs/5.x/ecosystem-alpinejs","docId":"ecosystem-alpinejs"},{"type":"link","label":"Vite","href":"/docs/5.x/ecosystem-vite","docId":"ecosystem-vite"},{"type":"link","label":"Snowpack","href":"/docs/5.x/ecosystem-snowpack","docId":"ecosystem-snowpack"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Server Side Rendering (New)","items":[{"type":"link","label":"Overview","href":"/docs/5.x/ssr-overview","docId":"ssr-overview"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Dev Tools","items":[{"type":"link","label":"Overview","href":"/docs/5.x/devtools","docId":"devtools"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Contributing","items":[{"type":"link","label":"Overview","href":"/docs/5.x/contributing-overview","docId":"contributing-overview"},{"type":"link","label":"Code of Conduct","href":"/docs/5.x/code-of-conduct","docId":"code-of-conduct"}],"collapsed":true,"collapsible":true}]},"docs":{"api":{"id":"api","title":"Applications API","description":"Single-spa exports named functions and variables rather than a single default export.","sidebar":"version-5.x/docs"},"building-applications":{"id":"building-applications","title":"Building single-spa applications","description":"A single-spa registered application is everything that a normal SPA is, except that it doesn\'t have an HTML page. In a single-spa world, your SPA contains many registered applications, where each has its own framework. Registered applications have their own client-side routing and their own frameworks/libraries. They render their own HTML and have full freedom to do whatever they want, whenever they are mounted. The concept of being mounted refers to whether a registered application is putting content on the DOM or not. What determines if a registered application is mounted is its activity function. Whenever a registered application is not mounted, it should remain completely dormant until mounted.","sidebar":"version-5.x/docs"},"code-of-conduct":{"id":"code-of-conduct","title":"Code of Conduct","description":"This code of conduct outlines our expectations for participants within the single-spa community, as well as steps to reporting unacceptable behavior. We are committed to providing a welcoming and inspiring community for all and expect our code of conduct to be honored. Anyone who violates this code of conduct may be banned from the community.","sidebar":"version-5.x/docs"},"configuration":{"id":"configuration","title":"Configuring single-spa","description":"The single-spa root config consists of the following:","sidebar":"version-5.x/docs"},"contributing-overview":{"id":"contributing-overview","title":"Contributing to Single-spa","description":"List of current contributors","sidebar":"version-5.x/docs"},"create-single-spa":{"id":"create-single-spa","title":"create-single-spa","description":"Single-spa offers a CLI for those who prefer autogenerated and managed configurations for webpack, babel, jest, etc. You do not have to use the CLI in order to use single-spa.","sidebar":"version-5.x/docs"},"devtools":{"id":"devtools","title":"single-spa-inspector","description":"The single-spa-inspector is a Firefox/Chrome devtools extension to provide utilities for helping with single-spa applications. Github project.","sidebar":"version-5.x/docs"},"ecosystem":{"id":"ecosystem","title":"The single-spa ecosystem","description":"The single-spa ecosystem is quickly growing to support as many frameworks and build tools as possible.","sidebar":"version-5.x/docs"},"ecosystem-alpinejs":{"id":"ecosystem-alpinejs","title":"single-spa-alpinejs","description":"single-spa-alpinejs is a helper library for mounting alpinejs components as","sidebar":"version-5.x/docs"},"ecosystem-angular":{"id":"ecosystem-angular","title":"single-spa-angular","description":"Project Status","sidebar":"version-5.x/docs"},"ecosystem-angularjs":{"id":"ecosystem-angularjs","title":"single-spa-angularjs","description":"single-spa-angularjs is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for use with AngularJS. Check out the single-spa-angularjs github.","sidebar":"version-5.x/docs"},"ecosystem-backbone":{"id":"ecosystem-backbone","title":"single-spa-backbone","description":"A single-spa helper library which provides lifecycle events for building single-spa applications using Backbone.","sidebar":"version-5.x/docs"},"ecosystem-css":{"id":"ecosystem-css","title":"CSS","description":"In a microfrontends architecture, it\'s important to have both shared CSS and microfrontend-specific CSS. There should only be one copy of all shared CSS, and CSS specific to a microfrontend should be scoped so that class names do not collide between microfrontends.","sidebar":"version-5.x/docs"},"ecosystem-cycle":{"id":"ecosystem-cycle","title":"single-spa-cycle","description":"single-spa-cycle is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with Cycle.js. Check out the single-spa-cycle github.","sidebar":"version-5.x/docs"},"ecosystem-dojo":{"id":"ecosystem-dojo","title":"single-spa-dojo","description":"Build Status","sidebar":"version-5.x/docs"},"ecosystem-ember":{"id":"ecosystem-ember","title":"single-spa-ember","description":"single-spa-ember is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for use with Ember.js. Check out the single-spa-ember github.","sidebar":"version-5.x/docs"},"ecosystem-html-web-components":{"id":"ecosystem-html-web-components","title":"single-spa-html","description":"single-spa-html is a helper library for mounting raw HTML and web components as","sidebar":"version-5.x/docs"},"ecosystem-inferno":{"id":"ecosystem-inferno","title":"single-spa-inferno","description":"single-spa-inferno is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with Inferno. Check out the single-spa-inferno github.","sidebar":"version-5.x/docs"},"ecosystem-leaked-globals":{"id":"ecosystem-leaked-globals","title":"single-spa-leaked-globals","description":"single-spa-leaked-globals is a helper library for dealing with single-spa-applications","sidebar":"version-5.x/docs"},"ecosystem-preact":{"id":"ecosystem-preact","title":"single-spa-preact","description":"single-spa-preact is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with Preact. Check out the single-spa-preact github.","sidebar":"version-5.x/docs"},"ecosystem-react":{"id":"ecosystem-react","title":"single-spa-react","description":"Build Status","sidebar":"version-5.x/docs"},"ecosystem-riot":{"id":"ecosystem-riot","title":"single-spa-riot","description":"single-spa-riot is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with riot. Check out the single-spa-riot github.","sidebar":"version-5.x/docs"},"ecosystem-snowpack":{"id":"ecosystem-snowpack","title":"Snowpack","description":"Snowpack is a tool for both local development and the building of applications. It uses in-browser ES modules during development, and then bundles with webpack (or other build tools) for production.","sidebar":"version-5.x/docs"},"ecosystem-svelte":{"id":"ecosystem-svelte","title":"single-spa-svelte","description":"single-spa-svelte is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with svelte. Check out the single-spa-svelte github.","sidebar":"version-5.x/docs"},"ecosystem-vite":{"id":"ecosystem-vite","title":"Vite","description":"Vite is a tool for both local development and the building of applications. It was created within the Vue ecosystem, but can be used with other UI frameworks, too.","sidebar":"version-5.x/docs"},"ecosystem-vue":{"id":"ecosystem-vue","title":"single-spa-vue","description":"single-spa-vue is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for use with Vue.js. Check out the single-spa-vue github.","sidebar":"version-5.x/docs"},"examples":{"id":"examples","title":"Single-spa Examples","description":"Core team examples","sidebar":"version-5.x/docs"},"faq":{"id":"faq","title":"Frequently Asked Questions","description":"What does single-spa do?"},"getting-started-overview":{"id":"getting-started-overview","title":"Getting Started with single-spa","description":"JavaScript Microfrontends","sidebar":"version-5.x/docs"},"glossary":{"id":"glossary","title":"Glossary","description":"Activity Function"},"layout-api":{"id":"layout-api","title":"Layout Engine API","description":"The single-spa-layout library exposes several javascript functions as a public API.","sidebar":"version-5.x/docs"},"layout-definition":{"id":"layout-definition","title":"Layout Definition","description":"A layout is a combination of HTMLElements, routes, and single-spa applications. Layout is defined statically in your root config to handle your top level routes and dom elements. Single-spa-layout should not be used outside of the root config; instead, a UI framework (React, Angular, Vue) should handle layouts within the applications.","sidebar":"version-5.x/docs"},"layout-overview":{"id":"layout-overview","title":"Layout Engine","description":"Introduction","sidebar":"version-5.x/docs"},"microfrontends-concept":{"id":"microfrontends-concept","title":"Microfrontends Overview","description":"Tutorial video: Youtube / Bilibili","sidebar":"version-5.x/docs"},"migrating-existing-spas":{"id":"migrating-existing-spas","title":"Migrating existing SPAs","description":"If you\'re interested in migrating existing SPAs into a single-spa, you\'ll","sidebar":"version-5.x/docs"},"module-types":{"id":"module-types","title":"single-spa Microfrontend Types","description":"Single-spa has different categories of microfrontends. It is up to you where and how you use each of them. However, the single-spa core team has recommendations.","sidebar":"version-5.x/docs"},"parcels-api":{"id":"parcels-api","title":"Parcels API","description":"Most parcel methods will be called on the parcel itself, with the exception being around mounting.","sidebar":"version-5.x/docs"},"parcels-overview":{"id":"parcels-overview","title":"Parcels","description":"Parcels are an advanced feature of single-spa. We recommend that you use applications as the primary type of microfrontend in your architecture. See this explanation for more details","sidebar":"version-5.x/docs"},"recommended-setup":{"id":"recommended-setup","title":"The Recommended Setup","description":"The single-spa npm package is not opinionated about your build tools, CI process, or local development workflow. However, to implement single-spa you will have to figure all of those things out (and more). To help you decide how to approach these problems, the single-spa core team has put together a \\"recommended setup\\" that gives an opinionated approach to solving the practical problems of microfrontends.","sidebar":"version-5.x/docs"},"separating-applications":{"id":"separating-applications","title":"Splitting up applications","description":"In a large, microserviced system, your root single-spa configuration and each of the applications should probably have its own git repository. How to do that in a JavaScript project isn\'t necessarily clear, so some options are listed below.","sidebar":"version-5.x/docs"},"shared-webpack-configs":{"id":"shared-webpack-configs","title":"Shared Webpack configs","description":"single-spa also publishes a few shared Webpack config packages that include basics needed for creating single-spa applications. These configs are used by applications generated with create-single-spa, and can be used as a starting point to extend/modify a custom configuration for your organization/team.","sidebar":"version-5.x/docs"},"single-spa-playground":{"id":"single-spa-playground","title":"single-spa-playground","description":"Playground website","sidebar":"version-5.x/docs"},"ssr-overview":{"id":"ssr-overview","title":"Server Side Rendering","description":"Intro to SSR","sidebar":"version-5.x/docs"},"testing/e2e":{"id":"testing/e2e","title":"E2E testing","description":"As microfrontends gain widespread adoption, testing tools will catch up and the testing story will improve.","sidebar":"version-5.x/docs"},"testing/units":{"id":"testing/units","title":"Unit testing","description":"As microfrontends gain widespread adoption, testing tools will catch up and the testing story will improve.","sidebar":"version-5.x/docs"},"videos":{"id":"videos","title":"Video Tutorials","description":"A variety of video tutorials exist from both the single-spa core team and other community members.","sidebar":"version-5.x/docs"}}}')}}]);