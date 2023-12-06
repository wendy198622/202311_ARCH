!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("path")):"function"==typeof define&&define.amd?define(["path"],n):(t=t||self).barba=n(t.path)}(this,function(t){function n(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,r,i){return r&&n(t.prototype,r),i&&n(t,i),t}function i(){return(i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}function e(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}function o(t,n){try{var r=t()}catch(t){return n(t)}return r&&r.then?r.then(void 0,n):r}t=t&&t.hasOwnProperty("default")?t.default:t,"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var u,s="2.7.1",f=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then},c=function(t,n){return function(t){var n=t.exports=function(t,n){return n=n||function(){},function(){var r=!1,i=arguments,e=new Promise(function(n,e){var o=t.apply({async:function(){return r=!0,function(t,r){t?e(t):n(r)}}},Array.prototype.slice.call(i));r||(f(o)?o.then(n,e):n(o))});return e.then(n.bind(null,null),n),e}};n.cb=function(t,r){return n(function(){var n=Array.prototype.slice.call(arguments);return n.length===t.length-1&&n.push(this.async()),t.apply(this,n)},r)}}(n={exports:{}}),n.exports}(),a=function(){};!function(t){t[t.off=0]="off",t[t.error=1]="error",t[t.warning=2]="warning",t[t.info=3]="info",t[t.debug=4]="debug"}(u||(u={}));var h=u.off,v=function(){function t(t){this.t=t}t.getLevel=function(){return h},t.setLevel=function(t){return h=u[t]};var n=t.prototype;return n.error=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.error,u.error,n)},n.warn=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.warn,u.warning,n)},n.info=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.info,u.info,n)},n.debug=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.log,u.debug,n)},n.i=function(n,r,i){r<=t.getLevel()&&n.apply(console,["["+this.t+"] "].concat(i))},t}(),d=new(function(t){function n(){var n;return(n=t.call(this)||this).logger=new v("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeAppear","appear","afterAppear","appearCanceled","before","beforeLeave","leave","afterLeave","leaveCanceled","beforeEnter","enter","afterEnter","enterCanceled","after"],n.registered=new Map,n.init(),n}e(n,t);var r=n.prototype;return r.init=function(){var t=this;this.registered.clear(),this.all.forEach(function(n){t[n]||(t[n]=function(r,i){void 0===i&&(i=null),t.registered.has(n)||t.registered.set(n,new Set),t.registered.get(n).add({ctx:i,fn:r})})})},r.do=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(this.registered.has(t)){var e=Promise.resolve();return this.registered.get(t).forEach(function(t){var n=t.ctx?t.fn.bind(t.ctx):t.fn;e=e.then(function(){return c(n).apply(void 0,r)})}),e}return Promise.resolve()},r.clear=function(){var t=this;this.all.forEach(function(n){delete t[n]}),this.init()},r.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var t=[];this.registered.forEach(function(n,r){return t.push(r)}),this.logger.info("Registered hooks: "+t.join(","))},n}(a)),l=function t(n,r,i){return n instanceof RegExp?function(t,n){if(!n)return t;var r=t.source.match(/\((?!\?)/g);if(r)for(var i=0;i<r.length;i++)n.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return t}(n,r):Array.isArray(n)?function(n,r,i){for(var e=[],o=0;o<n.length;o++)e.push(t(n[o],r,i).source);return new RegExp("(?:"+e.join("|")+")",A(i))}(n,r,i):function(t,n,r){return k(P(t,r),n,r)}(n,r,i)},p=P,w=g,m=k,y="/",b=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function P(t,n){for(var r,i=[],e=0,o=0,u="",s=n&&n.delimiter||y,f=n&&n.whitelist||void 0,c=!1;null!==(r=b.exec(t));){var a=r[0],h=r[1],v=r.index;if(u+=t.slice(o,v),o=v+a.length,h)u+=h[1],c=!0;else{var d="",l=r[2],p=r[3],w=r[4],m=r[5];if(!c&&u.length){var P=u.length-1,g=u[P];(!f||f.indexOf(g)>-1)&&(d=g,u=u.slice(0,P))}u&&(i.push(u),u="",c=!1);var A=p||w,k=d||s;i.push({name:l||e++,prefix:d,delimiter:k,optional:"?"===m||"*"===m,repeat:"+"===m||"*"===m,pattern:A?x(A):"[^"+E(k===s?k:k+s)+"]+?"})}}return(u||o<t.length)&&i.push(u+t.substr(o)),i}function g(t){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$"));return function(r,i){for(var e="",o=i&&i.encode||encodeURIComponent,u=0;u<t.length;u++){var s=t[u];if("string"!=typeof s){var f,c=r?r[s.name]:void 0;if(Array.isArray(c)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===c.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var a=0;a<c.length;a++){if(f=o(c[a],s),!n[u].test(f))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');e+=(0===a?s.prefix:s.delimiter)+f}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"))}else{if(f=o(String(c),s),!n[u].test(f))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+f+'"');e+=s.prefix+f}}else e+=s}return e}}function E(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function x(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function A(t){return t&&t.sensitive?"":"i"}function k(t,n,r){for(var i=(r=r||{}).strict,e=!1!==r.start,o=!1!==r.end,u=r.delimiter||y,s=[].concat(r.endsWith||[]).map(E).concat("$").join("|"),f=e?"^":"",c=0;c<t.length;c++){var a=t[c];if("string"==typeof a)f+=E(a);else{var h=a.repeat?"(?:"+a.pattern+")(?:"+E(a.delimiter)+"(?:"+a.pattern+"))*":a.pattern;n&&n.push(a),f+=a.optional?a.prefix?"(?:"+E(a.prefix)+"("+h+"))?":"("+h+")?":E(a.prefix)+"("+h+")"}}if(o)i||(f+="(?:"+E(u)+")?"),f+="$"===s?"$":"(?="+s+")";else{var v=t[t.length-1],d="string"==typeof v?v[v.length-1]===u:void 0===v;i||(f+="(?:"+E(u)+"(?="+s+"))?"),d||(f+="(?="+E(u)+"|"+s+")")}return new RegExp(f,A(r))}l.parse=p,l.compile=function(t,n){return g(P(t,n))},l.tokensToFunction=w,l.tokensToRegExp=m;var T={container:"container",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},S=new(function(){function n(){this.o=T,this.u=new DOMParser}var r=n.prototype;return r.toString=function(t){return t.outerHTML},r.toDocument=function(t){return this.u.parseFromString(t,"text/html")},r.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},r.getHtml=function(t){return void 0===t&&(t=document),this.toString(t.documentElement)},r.getWrapper=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},r.getContainer=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},r.removeContainer=function(t){document.body.contains(t)&&t.parentNode.removeChild(t)},r.addContainer=function(t,n){var r=this.getContainer();r?this.s(t,r):n.appendChild(t)},r.getNamespace=function(t){void 0===t&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},r.getHref=function(n){if(n.tagName&&"a"===n.tagName.toLowerCase()){if("string"==typeof n.href)return n.href;var r=n.getAttribute("href")||n.getAttribute("xlink:href");if(r){var i=r.baseVal||r;if(/^http/.test(i))return i;if(/^\/\//.test(i))return window.location.protocol+i;if(/^\//.test(i))return window.location.origin+i;if(/^(\w+|\.\/|\.\.\/)/.test(i)){var e=window.location.pathname.replace(/[^\/]*$/,"");return window.location.origin+t.resolve(e,i)}return window.location.href+i}}return null},r.s=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},n}()),R=new(function(){function t(){this.h=[]}var n=t.prototype;return n.init=function(t,n){var r={index:0,ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(r),window.history&&window.history.replaceState(r,"",r.url)},n.add=function(t,n,r,i){void 0===r&&(r=null),void 0===i&&(i=!0);var e={index:r||this.size,ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(e),i&&window.history&&window.history.pushState(e,"",e.url)},n.remove=function(){this.h.pop()},n.clear=function(){this.h=[]},n.update=function(t){var n=i({},this.current,{},t);this.current=n,window.history&&window.history.replaceState(n,"",n.url)},n.cancel=function(){this.remove(),window.history&&window.history.back()},n.get=function(t){return this.h[t]},n.getDirection=function(t){var n="popstate";return t<this.current.index?n="back":t>this.current.index&&(n="forward"),n},r(t,[{key:"current",get:function(){return this.h[this.h.length-1]},set:function(t){this.h[this.h.length-1]=t}},{key:"previous",get:function(){return this.h.length<2?null:this.h[this.h.length-2]}},{key:"size",get:function(){return this.h.length}}]),t}()),j=function(t,n){try{var r=function(){if(!n.next.html)return Promise.resolve(t).then(function(t){var r=n.next;if(t){var i=S.toElement(t);r.namespace=S.getNamespace(i),r.container=S.getContainer(i),r.html=t,R.update({ns:r.namespace});var e=S.toDocument(t);document.title=e.title}})}();return Promise.resolve(r&&r.then?r.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},L=l,$={update:j,nextTick:function(){return new Promise(function(t){window.requestAnimationFrame(t)})},pathToRegexp:L},M=function(){return window.location.origin},O=function(t){var n=t||window.location.port,r=window.location.protocol;return""!==n?parseInt(n,10):"https:"===r?443:80},q=function(t){var n,r=t.replace(M(),""),i={},e=r.indexOf("#");e>=0&&(n=r.slice(e+1),r=r.slice(0,e));var o=r.indexOf("?");return o>=0&&(i=C(r.slice(o+1)),r=r.slice(0,o)),{hash:n,path:r,query:i}},C=function(t){return t.split("&").reduce(function(t,n){var r=n.split("=");return t[r[0]]=r[1],t},{})},B=function(t){return t.replace(/(\/#.*|\/|#.*)$/,"")},H={getHref:function(){return window.location.href},getOrigin:M,getPort:O,getPath:function(t){return q(t).path},parse:q,parseQuery:C,clean:B},I=function(){function t(t){if(this.v=[],"boolean"==typeof t)this.l=t;else{var n=Array.isArray(t)?t:[t];this.v=n.map(function(t){return L(t)})}}return t.prototype.checkHref=function(t){if("boolean"==typeof this.l)return this.l;var n=q(t).path;return this.v.some(function(t){return null!==t.exec(n)})},t}(),N=function(t){function n(n){var r;return(r=t.call(this,n)||this).h=new Map,r}e(n,t);var r=n.prototype;return r.set=function(t,n,r){return this.checkHref(t)||this.h.set(t,{action:r,request:n}),{action:r,request:n}},r.get=function(t){return this.h.get(t)},r.getRequest=function(t){return this.h.get(t).request},r.getAction=function(t){return this.h.get(t).action},r.has=function(t){return this.h.has(t)},r.delete=function(t){return this.h.delete(t)},r.update=function(t,n){var r=i({},this.h.get(t),{},n);return this.h.set(t,r),r},n}(I);function U(t,n,r){return void 0===n&&(n=2e3),new Promise(function(i,e){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(o.readyState===XMLHttpRequest.DONE)if(200===o.status)i(o.responseText);else if(o.status){var n={status:o.status,statusText:o.statusText};r(t,n),e(n)}},o.ontimeout=function(){var i=new Error("Timeout error ["+n+"]");r(t,i),e(i)},o.onerror=function(){var n=new Error("Fetch error");r(t,n),e(n)},o.open("GET",t),o.timeout=n,o.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),o.setRequestHeader("x-barba","yes"),o.send()})}var D=function(){return!window.history.pushState},X=function(t){return!t.el||!t.href},z=function(t){var n=t.event;return n.which>1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey},F=function(t){var n=t.el;return n.hasAttribute("target")&&"_blank"===n.target},G=function(t){var n=t.el;return void 0!==n.protocol&&window.location.protocol!==n.protocol||void 0!==n.hostname&&window.location.hostname!==n.hostname},Q=function(t){var n=t.el;return void 0!==n.port&&O()!==O(n.port)},W=function(t){var n=t.el;return n.getAttribute&&"string"==typeof n.getAttribute("download")},_=function(t){return t.el.hasAttribute(T.prefix+"-"+T.prevent)},J=function(t){return Boolean(t.el.closest("["+T.prefix+"-"+T.prevent+'="all"]'))},K=function(t){return B(t.href)===B(window.location.href)},V=function(t){function n(n){var r;return(r=t.call(this,n)||this).suite=[],r.tests=new Map,r.init(),r}e(n,t);var r=n.prototype;return r.init=function(){this.add("pushState",D),this.add("exists",X),this.add("newTab",z),this.add("blank",F),this.add("corsDomain",G),this.add("corsPort",Q),this.add("download",W),this.add("preventSelf",_),this.add("preventAll",J),this.add("sameUrl",K,!1)},r.add=function(t,n,r){void 0===r&&(r=!0),this.tests.set(t,n),r&&this.suite.push(t)},r.run=function(t,n,r,i){return this.tests.get(t)({el:n,event:r,href:i})},r.checkLink=function(t,n,r){var i=this;return this.suite.some(function(e){return i.run(e,t,n,r)})},n}(I),Y=function(){function t(t){void 0===t&&(t=[]),this.logger=new v("@barba/core"),this.all=[],this.appear=[],this.p=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var n=t.prototype;return n.add=function(t,n){switch(t){case"rule":this.p.splice(n.position||0,0,n.value);break;case"transition":default:this.all.push(n)}this.update()},n.resolve=function(t,n){var r=this;void 0===n&&(n={});var i=n.appear?this.appear:this.all;i=i.filter(n.self?function(t){return t.name&&"self"===t.name}:function(t){return!t.name||"self"!==t.name});var e=new Map,o=i.find(function(i){var o=!0,u={};return!(!n.self||"self"!==i.name)||(r.p.reverse().forEach(function(e){o&&(o=r.m(i,e,t,u),n.appear||(i.from&&i.to&&(o=r.m(i,e,t,u,"from")&&r.m(i,e,t,u,"to")),i.from&&!i.to&&(o=r.m(i,e,t,u,"from")),!i.from&&i.to&&(o=r.m(i,e,t,u,"to"))))}),e.set(i,u),o)}),u=e.get(o),s=[];if(s.push(n.appear?"appear":"page"),n.self&&s.push("self"),u){var f,c=[o];Object.keys(u).length>0&&c.push(u),(f=this.logger).info.apply(f,["Transition found ["+s.join(",")+"]"].concat(c))}else this.logger.info("No transition found ["+s.join(",")+"]");return o},n.update=function(){var t=this;this.all=this.all.map(function(n){return t.P(n)}).sort(function(t,n){return t.priority-n.priority}).reverse().map(function(t){return delete t.priority,t}),this.appear=this.all.filter(function(t){return void 0!==t.appear})},n.m=function(t,n,r,i,e){var o=!0,u=!1,s=t,f=n.name,c=f,a=f,h=f,v=e?s[e]:s,d="to"===e?r.next:r.current;if(e?v&&v[f]:v[f]){switch(n.type){case"strings":default:var l=Array.isArray(v[c])?v[c]:[v[c]];d[c]&&-1!==l.indexOf(d[c])&&(u=!0),-1===l.indexOf(d[c])&&(o=!1);break;case"object":var p=Array.isArray(v[a])?v[a]:[v[a]];d[a]&&(d[a].name&&-1!==p.indexOf(d[a].name)&&(u=!0),-1===p.indexOf(d[a].name)&&(o=!1));break;case"function":v[h](r)?u=!0:o=!1}u&&(e?(i[e]=i[e]||{},i[e][f]=s[e][f]):i[f]=s[f])}return o},n.g=function(t,n,r){var i=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(i+=Math.pow(10,r),t.from&&t.from[n]&&(i+=1),t.to&&t.to[n]&&(i+=2)),i},n.P=function(t){var n=this;t.priority=0;var r=0;return this.p.forEach(function(i,e){r+=n.g(t,i.name,e+1)}),t.priority=r,t},t}(),Z=function(){function t(t){void 0===t&&(t=[]),this.logger=new v("@barba/core"),this.A=!1,this.store=new Y(t)}var n=t.prototype;return n.get=function(t,n){return this.store.resolve(t,n)},n.doAppear=function(t){var n=t.data,r=t.transition;try{var i=function(t){if(e)return t;u.A=!1},e=!1,u=this,s=r||{};u.A=!0;var f=o(function(){return Promise.resolve(u.k("beforeAppear",n,s)).then(function(){return Promise.resolve(u.appear(n,s)).then(function(){return Promise.resolve(u.k("afterAppear",n,s)).then(function(){})})})},function(t){throw u.A=!1,u.logger.error(t),new Error("Transition error [appear]")});return Promise.resolve(f&&f.then?f.then(i):i(f))}catch(t){return Promise.reject(t)}},n.doPage=function(t){var n=t.data,r=t.transition,i=t.page,e=t.wrapper;try{var u=function(t){if(s)return t;f.A=!1},s=!1,f=this,c=r||{},a=!0===c.sync||!1;f.A=!0;var h=o(function(){function t(){return Promise.resolve(f.k("before",n,c)).then(function(){var t=!1;function r(r){return t?r:Promise.resolve(f.remove(n)).then(function(){return Promise.resolve(f.k("after",n,c)).then(function(){})})}var u=function(){if(a)return o(function(){return Promise.resolve(f.add(n,e)).then(function(){return Promise.resolve(f.k("beforeLeave",n,c)).then(function(){return Promise.resolve(f.k("beforeEnter",n,c)).then(function(){return Promise.resolve(Promise.all([f.leave(n,c),f.enter(n,c)])).then(function(){return Promise.resolve(f.k("afterLeave",n,c)).then(function(){return Promise.resolve(f.k("afterEnter",n,c)).then(function(){})})})})})})},function(){throw new Error("Transition error [page][sync]")});var r=function(r){return t?r:o(function(){var t=function(){if(!1!==u)return Promise.resolve(f.add(n,e)).then(function(){return Promise.resolve(f.k("beforeEnter",n,c)).then(function(){return Promise.resolve(f.enter(n,c,u)).then(function(){return Promise.resolve(f.k("afterEnter",n,c)).then(function(){})})})})}();if(t&&t.then)return t.then(function(){})},function(){throw new Error("Transition error [page][enter]")})},u=!1,s=o(function(){return Promise.resolve(f.k("beforeLeave",n,c)).then(function(){return Promise.resolve(Promise.all([f.leave(n,c),j(i,n)]).then(function(t){return t[0]})).then(function(t){return u=t,Promise.resolve(f.k("afterLeave",n,c)).then(function(){})})})},function(){throw new Error("Transition error [page][leave]")});return s&&s.then?s.then(r):r(s)}();return u&&u.then?u.then(r):r(u)})}var r=function(){if(a)return Promise.resolve(j(i,n)).then(function(){})}();return r&&r.then?r.then(t):t()},function(t){throw f.A=!1,f.logger.error(t),new Error("Transition error")});return Promise.resolve(h&&h.then?h.then(u):u(h))}catch(t){return Promise.reject(t)}},n.appear=function(t,n){try{return Promise.resolve(d.do("appear",t,n)).then(function(){return n.appear?c(n.appear)(t):Promise.resolve()})}catch(t){return Promise.reject(t)}},n.leave=function(t,n){try{return Promise.resolve(d.do("leave",t,n)).then(function(){return n.leave?c(n.leave)(t):Promise.resolve()})}catch(t){return Promise.reject(t)}},n.enter=function(t,n,r){try{return Promise.resolve(d.do("enter",t,n)).then(function(){return n.enter?c(n.enter)(t,r):Promise.resolve()})}catch(t){return Promise.reject(t)}},n.add=function(t,n){try{return S.addContainer(t.next.container,n),d.do("nextAdded",t),Promise.resolve()}catch(t){return Promise.reject(t)}},n.remove=function(t){try{return S.removeContainer(t.current.container),d.do("currentRemoved",t),Promise.resolve()}catch(t){return Promise.reject(t)}},n.k=function(t,n,r){try{return Promise.resolve(d.do(t,n,r)).then(function(){return r[t]?c(r[t])(n):Promise.resolve()})}catch(t){return Promise.reject(t)}},r(t,[{key:"isRunning",get:function(){return this.A},set:function(t){this.A=t}},{key:"hasAppear",get:function(){return this.store.appear.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return"self"===t.name})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),t}(),tt=function(){function t(t){var n=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,0!==t.length&&(t.forEach(function(t){n.byNamespace.set(t.namespace,t)}),this.names.forEach(function(t){d[t](n.T(t),n)}))}return t.prototype.T=function(t){var n=this;return function(r){var i=t.match(/enter/i)?r.next:r.current,e=n.byNamespace.get(i.namespace);return e&&e[t]?c(e[t])(r):Promise.resolve()}},t}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var n=this;do{if(n.matches(t))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null});var nt={container:void 0,html:void 0,namespace:void 0,url:{hash:void 0,href:void 0,path:void 0,query:{}}};return new(function(){function t(){this.version=s,this.schemaPage=nt,this.Logger=v,this.logger=new v("@barba/core"),this.plugins=[],this.hooks=d,this.dom=S,this.helpers=$,this.history=R,this.request=U,this.url=H}var n=t.prototype;return n.use=function(t,n){var r=this.plugins;r.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):"function"==typeof t.install?(t.install(this,n),r.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},n.init=function(t){var n=void 0===t?{}:t,r=n.transitions,i=void 0===r?[]:r,e=n.views,o=void 0===e?[]:e,u=n.schema,s=void 0===u?T:u,f=n.requestError,c=n.timeout,a=void 0===c?2e3:c,h=n.cacheIgnore,d=void 0!==h&&h,l=n.prefetchIgnore,p=void 0!==l&&l,w=n.preventRunning,m=void 0!==w&&w,y=n.prevent,b=void 0===y?null:y,P=n.debug,g=n.logLevel;if(v.setLevel(!0===(void 0!==P&&P)?"debug":void 0===g?"off":g),this.logger.info(this.version),Object.keys(s).forEach(function(t){T[t]&&(T[t]=s[t])}),this.S=f,this.timeout=a,this.cacheIgnore=d,this.prefetchIgnore=p,this.preventRunning=m,this.R=this.dom.getWrapper(),!this.R)throw new Error("[@barba/core] No Barba wrapper found");this.R.setAttribute("aria-live","polite"),this.j();var E=this.data.current;if(!E.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new N(d),this.prevent=new V(p),this.transitions=new Z(i),this.views=new tt(o),null!==b){if("function"!=typeof b)throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",b)}this.history.init(E.url.href,E.namespace),this.L=this.L.bind(this),this.$=this.$.bind(this),this.M=this.M.bind(this),this.O(),this.plugins.forEach(function(t){return t.init()});var x=this.data;x.trigger="barba",x.next=x.current,this.hooks.do("ready",x),this.appear(x),this.j()},n.destroy=function(){this.j(),this.q(),this.history.clear(),this.hooks.clear(),this.plugins=[]},n.force=function(t){window.location.assign(t)},n.go=function(t,n,r){var i;if(void 0===n&&(n="barba"),this.transitions.isRunning)this.force(t);else if(!(i="popstate"===n?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf){if("popstate"===n){var e=r.state;n=this.history.getDirection(e.index),this.history.add(t,e.ns,e.index,!1)}else this.history.add(t,"tmp");return r&&(r.stopPropagation(),r.preventDefault()),this.page(t,n,i)}},n.appear=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function r(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var i=function(){if(n.transitions.hasAppear){var r=o(function(){var r=n.transitions.get(t,{appear:!0});return Promise.resolve(n.transitions.doAppear({transition:r,data:t})).then(function(){})},function(t){n.logger.error(t)});if(r&&r.then)return r.then(function(){})}}();return i&&i.then?i.then(r):r()})}catch(t){return Promise.reject(t)}},n.page=function(t,n,r){try{var e=function(){var t=u.data;return Promise.resolve(u.hooks.do("page",t)).then(function(){var n=o(function(){var n=u.transitions.get(t,{appear:!1,self:r});return Promise.resolve(u.transitions.doPage({data:t,page:s,transition:n,wrapper:u.R})).then(function(){u.j()})},function(t){u.logger.error(t)});if(n&&n.then)return n.then(function(){})})},u=this;u.data.next.url=i({href:t},u.url.parse(t)),u.data.trigger=n;var s=u.cache.has(t)?u.cache.update(t,{action:"click"}).request:u.cache.set(t,u.request(t,u.timeout,u.onRequestError.bind(u,n)),"click").request,f=function(){if(u.transitions.shouldWait)return Promise.resolve(j(s,u.data)).then(function(){})}();return Promise.resolve(f&&f.then?f.then(e):e())}catch(t){return Promise.reject(t)}},n.onRequestError=function(t){this.transitions.isRunning=!1;for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var e=r[0],o=r[1],u=this.cache.getAction(e);return this.cache.delete(e),!(this.S&&!1===this.S(t,u,e,o)||("click"===u&&this.force(e),1))},n.prefetch=function(t){var n=this;this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba")).catch(function(t){n.logger.error(t)}),"prefetch")},n.O=function(){!0!==this.prefetchIgnore&&(document.addEventListener("mouseover",this.L),document.addEventListener("touchstart",this.L)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.M)},n.q=function(){!0!==this.prefetchIgnore&&(document.removeEventListener("mouseover",this.L),document.removeEventListener("touchstart",this.L)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.M)},n.L=function(t){var n=this,r=this.C(t);if(r){var i=this.dom.getHref(r);this.prevent.checkHref(i)||this.cache.has(i)||this.cache.set(i,this.request(i,this.timeout,this.onRequestError.bind(this,r)).catch(function(t){n.logger.error(t)}),"enter")}},n.$=function(t){var n=this.C(t);if(n)return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(n),n,t)},n.M=function(t){this.go(this.url.getHref(),"popstate",t)},n.C=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},n.j=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:i({href:t},this.url.parse(t))};this.B={current:n,next:i({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},r(t,[{key:"data",get:function(){return this.B}},{key:"wrapper",get:function(){return this.R}}]),t}())});
//# sourceMappingURL=barba.umd.js.map