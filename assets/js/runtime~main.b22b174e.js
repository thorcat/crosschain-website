!function(){"use strict";var e,t,n,r,c,o={},f={};function a(e){var t=f[e];if(void 0!==t)return t.exports;var n=f[e]={id:e,loaded:!1,exports:{}};return o[e].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=o,a.c=f,e=[],a.O=function(t,n,r,c){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],c=e[d][2];for(var f=!0,u=0;u<n.length;u++)(!1&c||o>=c)&&Object.keys(a.O).every((function(e){return a.O[e](n[u])}))?n.splice(u--,1):(f=!1,c<o&&(o=c));if(f){e.splice(d--,1);var i=r();void 0!==i&&(t=i)}}return t}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[n,r,c]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},a.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var c=Object.create(null);a.r(c);var o={};t=t||[null,n({}),n([]),n(n)];for(var f=2&r&&e;"object"==typeof f&&!~t.indexOf(f);f=n(f))Object.getOwnPropertyNames(f).forEach((function(t){o[t]=function(){return e[t]}}));return o.default=function(){return e},a.d(c,o),c},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))},a.u=function(e){return"assets/js/"+({13:"01a85c17",53:"935f2afb",85:"1f391b9e",89:"a6aa9e1f",95:"4105165d",103:"ccc49370",205:"a80da1cf",237:"1df93b7f",247:"2a201df4",414:"393be207",429:"9cef8574",435:"cdfa8367",477:"b2f554cd",514:"1be78505",533:"b2b675dd",535:"814f3328",608:"9e4087bc",610:"6875c492",713:"a7023ddc",889:"9747880a",918:"17896441",981:"c9066f26"}[e]||e)+"."+{13:"424173a7",53:"2d2c9c5b",75:"e575ba20",85:"d5e5a405",89:"3c34f908",95:"e39efffe",103:"fc69e90e",205:"d857ed87",237:"9afec213",247:"02baac06",386:"965be09b",414:"b837aacf",429:"7de19bc0",435:"559c2451",477:"9d3a3ce4",514:"0ba99d8b",533:"50881834",535:"f4366597",608:"d58d292d",610:"5f1da477",713:"c8a070e9",829:"a16d0ae2",889:"f31ad181",918:"f73f81b4",981:"b5dae676"}[e]+".js"},a.miniCssF=function(e){return"assets/css/styles.603b4b7d.css"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},c="crosschain-quest:",a.l=function(e,t,n,o){if(r[e])r[e].push(t);else{var f,u;if(void 0!==n)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var s=i[d];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==c+n){f=s;break}}f||(u=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,a.nc&&f.setAttribute("nonce",a.nc),f.setAttribute("data-webpack",c+n),f.src=e),r[e]=[t];var b=function(t,n){f.onerror=f.onload=null,clearTimeout(l);var c=r[e];if(delete r[e],f.parentNode&&f.parentNode.removeChild(f),c&&c.forEach((function(e){return e(n)})),t)return t(n)},l=setTimeout(b.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=b.bind(null,f.onerror),f.onload=b.bind(null,f.onload),u&&document.head.appendChild(f)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="/",a.gca=function(e){return e={17896441:"918","01a85c17":"13","935f2afb":"53","1f391b9e":"85",a6aa9e1f:"89","4105165d":"95",ccc49370:"103",a80da1cf:"205","1df93b7f":"237","2a201df4":"247","393be207":"414","9cef8574":"429",cdfa8367:"435",b2f554cd:"477","1be78505":"514",b2b675dd:"533","814f3328":"535","9e4087bc":"608","6875c492":"610",a7023ddc:"713","9747880a":"889",c9066f26:"981"}[e]||e,a.p+a.u(e)},function(){var e={303:0,532:0};a.f.j=function(t,n){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var c=new Promise((function(n,c){r=e[t]=[n,c]}));n.push(r[2]=c);var o=a.p+a.u(t),f=new Error;a.l(o,(function(n){if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var c=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+t+" failed.\n("+c+": "+o+")",f.name="ChunkLoadError",f.type=c,f.request=o,r[1](f)}}),"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,c,o=n[0],f=n[1],u=n[2],i=0;if(o.some((function(t){return 0!==e[t]}))){for(r in f)a.o(f,r)&&(a.m[r]=f[r]);if(u)var d=u(a)}for(t&&t(n);i<o.length;i++)c=o[i],a.o(e,c)&&e[c]&&e[c][0](),e[o[i]]=0;return a.O(d)},n=self.webpackChunkcrosschain_quest=self.webpackChunkcrosschain_quest||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();