/*! For license information please see main.c5cd66a8df3f0fc51613.1.0.1.js.LICENSE.txt */
(()=>{"use strict";var e,t,r={75:(e,t,r)=>{var n,a,o=r(215),i=r.n(o),l=r(791),u=r.n(l),c=r(175),s=r(329);function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}(a=n||(n={})).Pop="POP",a.Push="PUSH",a.Replace="REPLACE";const h="popstate";function d(e,t){if(!1===e||null==e)throw new Error(t)}function p(e,t){return{usr:e.state,key:e.key,idx:t}}function v(e,t,r,n){return void 0===r&&(r=null),f({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?g(t):t,{state:r,key:t&&t.key||n||Math.random().toString(36).substr(2,8)})}function m(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function g(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}var b;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(b||(b={})),new Set(["lazy","caseSensitive","path","id","index","children"]),Error;const y=["post","put","patch","delete"],w=(new Set(y),["get",...y]);function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},S.apply(this,arguments)}new Set(w),new Set([301,302,303,307,308]),new Set([307,308]),Symbol("deferred");const E=c.createContext(null),P=c.createContext(null);function x(e){let{basename:t="/",children:r=null,location:a,navigationType:o=n.Pop,navigator:i,static:l=!1,future:u}=e;null!=c.useContext(P)&&d(!1);let s=t.replace(/^\/*/,"/"),f=c.useMemo((()=>({basename:s,navigator:i,static:l,future:S({v7_relativeSplatPath:!1},u)})),[s,u,i,l]);"string"==typeof a&&(a=g(a));let{pathname:h="/",search:p="",hash:v="",state:m=null,key:b="default"}=a,y=c.useMemo((()=>{let e=function(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}(h,s);return null==e?null:{location:{pathname:e,search:p,hash:v,state:m,key:b},navigationType:o}}),[s,h,p,v,m,b,o]);return null==y?null:c.createElement(E.Provider,{value:f},c.createElement(P.Provider,{children:r,value:y}))}c.Component,c.startTransition,new Promise((()=>{})),c.Component,new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(e){}new Map;const k=c.startTransition;function C(e){let{basename:t,children:r,future:a,window:o}=e,i=c.useRef();var l;null==i.current&&(i.current=(void 0===(l={window:o,v5Compat:!0})&&(l={}),function(e,t,r,a){void 0===a&&(a={});let{window:o=document.defaultView,v5Compat:i=!1}=a,l=o.history,u=n.Pop,c=null,s=g();function g(){return(l.state||{idx:null}).idx}function b(){u=n.Pop;let e=g(),t=null==e?null:e-s;s=e,c&&c({action:u,location:w.location,delta:t})}function y(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,r="string"==typeof e?e:m(e);return r=r.replace(/ $/,"%20"),d(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)}null==s&&(s=0,l.replaceState(f({},l.state,{idx:s}),""));let w={get action(){return u},get location(){return e(o,l)},listen(e){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(h,b),c=e,()=>{o.removeEventListener(h,b),c=null}},createHref:e=>t(o,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){u=n.Push;let a=v(w.location,e,t);r&&r(a,e),s=g()+1;let f=p(a,s),h=w.createHref(a);try{l.pushState(f,"",h)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;o.location.assign(h)}i&&c&&c({action:u,location:w.location,delta:1})},replace:function(e,t){u=n.Replace;let a=v(w.location,e,t);r&&r(a,e),s=g();let o=p(a,s),f=w.createHref(a);l.replaceState(o,"",f),i&&c&&c({action:u,location:w.location,delta:0})},go:e=>l.go(e)};return w}((function(e,t){let{pathname:r,search:n,hash:a}=e.location;return v("",{pathname:r,search:n,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:m(t)}),null,l)));let u=i.current,[s,g]=c.useState({action:u.action,location:u.location}),{v7_startTransition:b}=a||{},y=c.useCallback((e=>{b&&k?k((()=>g(e))):g(e)}),[g,b]);return c.useLayoutEffect((()=>u.listen(y)),[u,y]),c.createElement(x,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:u,future:a})}var O,j,L,R;s.flushSync,c.useId,"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,(R=O||(O={})).UseScrollRestoration="useScrollRestoration",R.UseSubmit="useSubmit",R.UseSubmitFetcher="useSubmitFetcher",R.UseFetcher="useFetcher",R.useViewTransitionState="useViewTransitionState",(L=j||(j={})).UseFetcher="useFetcher",L.UseFetchers="useFetchers",L.UseScrollRestoration="useScrollRestoration";const U=()=>i().createElement("h1",null,"Hello Cambodia");u().render(i().createElement(C,null,i().createElement(U,null)),document.getElementById("root"))}},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,a),o.exports}a.m=r,a.c=n,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+"."+{315:"ba98059fd5950db84511",325:"86d2878823fef9e4b450",604:"127e8486d010e83fb302",696:"fff1ff4aeb87a8e6cc6c"}[e]+".1.0.1.js",a.miniCssF=e=>{},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="accounting:",a.l=(r,n,o,i)=>{if(e[r])e[r].push(n);else{var l,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var f=c[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+o){l=f;break}}l||(u=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[n];var h=(t,n)=>{l.onerror=l.onload=null,clearTimeout(d);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=h.bind(null,l.onerror),l.onload=h.bind(null,l.onload),u&&document.head.appendChild(l)}},(()=>{a.S={};var e={},t={};a.I=(r,n)=>{n||(n=[]);var o=t[r];if(o||(o=t[r]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[r])return e[r];a.o(a.S,r)||(a.S[r]={});var i=a.S[r],l="accounting",u=(e,t,r,n)=>{var a=i[e]=i[e]||{},o=a[t];(!o||!o.loaded&&(!n!=!o.eager?n:l>o.from))&&(a[t]={get:r,from:l,eager:!!n})},c=[];return"default"===r&&(u("react-dom","17.0.2",(()=>Promise.all([a.e(325),a.e(604)]).then((()=>()=>a(325))))),u("react","17.0.2",(()=>a.e(696).then((()=>()=>a(696)))))),e[r]=c.length?Promise.all(c).then((()=>e[r]=1)):1}}})(),a.p="/",(()=>{var e=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},t=e=>{var r=e[0],n="";if(1===e.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,n+="u"==(typeof(l=e[o]))[0]?"-":(a>0?".":"")+(a=2,l);return n}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():t(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},r=(t,n)=>{if(0 in t){n=e(n);var a=t[0],o=a<0;o&&(a=-a-1);for(var i=0,l=1,u=!0;;l++,i++){var c,s,f=l<t.length?(typeof t[l])[0]:"";if(i>=n.length||"o"==(s=(typeof(c=n[i]))[0]))return!u||("u"==f?l>a&&!o:""==f!=o);if("u"==s){if(!u||"u"!=f)return!1}else if(u)if(f==s)if(l<=a){if(c!=t[l])return!1}else{if(o?c>t[l]:c<t[l])return!1;c!=t[l]&&(u=!1)}else if("s"!=f&&"n"!=f){if(o||l<=a)return!1;u=!1,l--}else{if(l<=a||s<f!=o)return!1;u=!1}else"s"!=f&&"n"!=f&&(u=!1,l--)}}var h=[],d=h.pop.bind(h);for(i=1;i<t.length;i++){var p=t[i];h.push(1==p?d()|d():2==p?d()&d():p?r(p,n):!d())}return!!d()},n=(t,r)=>{var n=t[r];return Object.keys(n).reduce(((t,r)=>!t||!n[t].loaded&&((t,r)=>{t=e(t),r=e(r);for(var n=0;;){if(n>=t.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=t[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}})(t,r)?r:t),0)},o=(e,a,o,u)=>{var c=n(e,o);return r(u,c)||i(((e,r,n,a)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(a)+")")(e,o,c,u)),l(e[o][c])},i=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},l=e=>(e.loaded=1,e.get()),u=(e=>function(t,r,n,o){var i=a.I(t);return i&&i.then?i.then(e.bind(e,t,a.S[t],r,n,o)):e(t,a.S[t],r,n,o)})(((e,t,r,n,i)=>t&&a.o(t,r)?o(t,0,r,n):i())),c={},s={604:()=>u("default","react",[4,17,0,2],(()=>a.e(315).then((()=>()=>a(696))))),215:()=>u("default","react",[1,17,0,2],(()=>a.e(696).then((()=>()=>a(696))))),791:()=>u("default","react-dom",[1,17,0,2],(()=>Promise.all([a.e(325),a.e(604)]).then((()=>()=>a(325))))),175:()=>u("default","react",[0,16,8],(()=>a.e(696).then((()=>()=>a(696))))),329:()=>u("default","react-dom",[0,16,8],(()=>Promise.all([a.e(325),a.e(604)]).then((()=>()=>a(325)))))};[215,791,175,329].forEach((e=>{a.m[e]=t=>{c[e]=0,delete a.c[e];var r=s[e]();if("function"!=typeof r)throw new Error("Shared module is not available for eager consumption: "+e);t.exports=r()}}));var f={604:[604]},h={};a.f.consumes=(e,t)=>{a.o(f,e)&&f[e].forEach((e=>{if(a.o(c,e))return t.push(c[e]);if(!h[e]){var r=t=>{c[e]=0,a.m[e]=r=>{delete a.c[e],r.exports=t()}};h[e]=!0;var n=t=>{delete c[e],a.m[e]=r=>{throw delete a.c[e],t}};try{var o=s[e]();o.then?t.push(c[e]=o.then(r).catch(n)):r(o)}catch(e){n(e)}}}))}})(),(()=>{var e={792:0,215:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(604!=t){var o=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=o);var i=a.p+a.u(t),l=new Error;a.l(i,(r=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}}),"chunk-"+t,t)}else e[t]=0};var t=(t,r)=>{var n,o,[i,l,u]=r,c=0;if(i.some((t=>0!==e[t]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);u&&u(a)}for(t&&t(r);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkaccounting=self.webpackChunkaccounting||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a(75)})();