var tl="object"==typeof tl?tl:{};tl.newsletter=function(e){function t(t){for(var n,s,l=t[0],o=t[1],i=t[2],m=0,d=[];m<l.length;m++)s=l[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(u&&u(t);d.length;)d.shift()();return c.push.apply(c,i||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={4:0},c=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window.webpackJsonp=window.webpackJsonp||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=o;return c.push([605,0]),a()}({605:function(e,t,a){"use strict";a.r(t);var n=a(43),r=a.n(n),c=a(0),s=a.n(c),l=a(8);function o(e){return s.a.createElement("section",Object.assign({},e,{className:"newsletter is-marginless has-text-left ".concat(e.className)}),s.a.createElement("div",{className:"container"},e.children," "))}function i(e){return s.a.createElement("p",Object.assign({},e,{className:"title is-5 ".concat(e.className)}),e.children)}function u(e){return s.a.createElement("button",Object.assign({},e,{className:"button is-text is-paddingless is-light is-inverted {props.className}"}),"No thanks")}function m(e){return s.a.createElement("div",{className:"control is-fullwidth"},s.a.createElement("input",Object.assign({},e,{type:"email",defaultValue:"",name:"EMAIL",placeholder:"Email address",className:"input has-text-light has-placeholder-light has-background-black has-shadow-dark is-rounded ".concat(e.className)})))}function d(e){return s.a.createElement("div",{className:"control"},s.a.createElement("input",Object.assign({},e,{type:"submit",value:"Submit",className:"button is-primary has-shadow-primary is-rounded has-text-weight-bold ".concat(e.className)})))}function f(e){return s.a.createElement("div",{className:"control"},s.a.createElement("input",Object.assign({},e,{type:"checkbox",className:"checkbox is-big-checkbox ".concat(e.className)})),s.a.createElement("label",{className:"has-text-justified is-size-7"},"By checking this box you acknowledge that your information will be transferred to Mailchimp for processing and agree to our ",s.a.createElement("a",{href:"/legal-imprint-privacy-policy.html",target:"_blank"},"privacy policy"),"."))}var p=function(e){var t=e.onSubscriptionSend,a=Object(c.useState)(!1),n=Object(l.a)(a,2),r=n[0],o=n[1],i=Object(c.useCallback)(function(){o(!r)},[r,o]);return s.a.createElement("form",{action:"https://foundation.us20.list-manage.com/subscribe/post?u=ad97861a3786f82a87c0c7417&amp;id=7125095980",method:"post",target:"_blank",onSubmit:t,className:"has-controls-top"},s.a.createElement("div",{className:"field has-addons"},s.a.createElement(m,null),s.a.createElement(d,{disabled:!r})),s.a.createElement("div",{className:"field"},s.a.createElement(f,{onClick:i})))},b="userHasSubscribedOrClosedBanner";function h(){return function(e){var t=JSON.parse(e);return null!==t&&t}(window.localStorage.getItem(b))}function g(){var e;e=!0,window.localStorage.setItem(b,e)}var v=function(){var e=Object(c.useState)(!h()),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useCallback)(function(){g(),n(!1)},[n]);return s.a.createElement(o,{className:"has-background-dark has-text-light has-thin-padding ".concat(a?"":"is-hidden")},s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-5 is-offset-1"},s.a.createElement(i,{className:"has-text-light"},"Subscribe to our newsletter & stay up to date"),s.a.createElement(u,{onClick:r})),s.a.createElement("div",{className:"column is-5"},s.a.createElement(p,{onSubscriptionSend:r}))))};var E=function(){return s.a.createElement(o,{className:"has-background-light has-text-black has-decent-padding"},s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-half is-offset-one-quarter has-text-centered"},s.a.createElement(i,{className:"has-text-black"},"Be the first to hear about Trustlines Protocol related updates, subscribe to our newsletter!"))),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-4 is-offset-4"},s.a.createElement(p,{onSubscriptionSend:function(){g()}}))))};r.a.render(s.a.createElement(E,null),document.getElementById("rootNewsletterSection"));var N=document.getElementById("rootNewsletterBanner");N&&r.a.render(s.a.createElement(v,null),N)}});