import{E as V}from"./vendor.1953f4d2.js";var k={exports:{}},K=function(e,t){return function(){for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];return e.apply(t,s)}},ye=K,g=Object.prototype.toString;function _(r){return g.call(r)==="[object Array]"}function U(r){return typeof r=="undefined"}function be(r){return r!==null&&!U(r)&&r.constructor!==null&&!U(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function ge(r){return g.call(r)==="[object ArrayBuffer]"}function we(r){return typeof FormData!="undefined"&&r instanceof FormData}function xe(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&r.buffer instanceof ArrayBuffer,e}function Ee(r){return typeof r=="string"}function Se(r){return typeof r=="number"}function X(r){return r!==null&&typeof r=="object"}function O(r){if(g.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function Ce(r){return g.call(r)==="[object Date]"}function Oe(r){return g.call(r)==="[object File]"}function Ae(r){return g.call(r)==="[object Blob]"}function W(r){return g.call(r)==="[object Function]"}function Re(r){return X(r)&&W(r.pipe)}function je(r){return typeof URLSearchParams!="undefined"&&r instanceof URLSearchParams}function Ne(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function $e(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function B(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),_(r))for(var t=0,n=r.length;t<n;t++)e.call(null,r[t],t,r);else for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.call(null,r[s],s,r)}function q(){var r={};function e(s,i){O(r[i])&&O(s)?r[i]=q(r[i],s):O(s)?r[i]=q({},s):_(s)?r[i]=s.slice():r[i]=s}for(var t=0,n=arguments.length;t<n;t++)B(arguments[t],e);return r}function Pe(r,e,t){return B(e,function(s,i){t&&typeof s=="function"?r[i]=ye(s,t):r[i]=s}),r}function Te(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var h={isArray:_,isArrayBuffer:ge,isBuffer:be,isFormData:we,isArrayBufferView:xe,isString:Ee,isNumber:Se,isObject:X,isPlainObject:O,isUndefined:U,isDate:Ce,isFile:Oe,isBlob:Ae,isFunction:W,isStream:Re,isURLSearchParams:je,isStandardBrowserEnv:$e,forEach:B,merge:q,extend:Pe,trim:Ne,stripBOM:Te},x=h;function G(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Q=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(x.isURLSearchParams(t))s=t.toString();else{var i=[];x.forEach(t,function(a,v){a===null||typeof a=="undefined"||(x.isArray(a)?v=v+"[]":a=[a],x.forEach(a,function(l){x.isDate(l)?l=l.toISOString():x.isObject(l)&&(l=JSON.stringify(l)),i.push(G(v)+"="+G(l))}))}),s=i.join("&")}if(s){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e},ke=h;function A(){this.handlers=[]}A.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};A.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};A.prototype.forEach=function(e){ke.forEach(this.handlers,function(n){n!==null&&e(n)})};var _e=A,Ue=h,Be=function(e,t){Ue.forEach(e,function(s,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=s,delete e[i])})},Y=function(e,t,n,s,i){return e.config=t,n&&(e.code=n),e.request=s,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},qe=Y,Z=function(e,t,n,s,i){var o=new Error(e);return qe(o,t,n,s,i)},De=Z,Le=function(e,t,n){var s=n.config.validateStatus;!n.status||!s||s(n.status)?e(n):t(De("Request failed with status code "+n.status,n.config,null,n.request,n))},R=h,He=R.isStandardBrowserEnv()?function(){return{write:function(t,n,s,i,o,u){var a=[];a.push(t+"="+encodeURIComponent(n)),R.isNumber(s)&&a.push("expires="+new Date(s).toGMTString()),R.isString(i)&&a.push("path="+i),R.isString(o)&&a.push("domain="+o),u===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var n=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Me=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},Fe=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Ie=Me,Je=Fe,ze=function(e,t){return e&&!Ie(t)?Je(e,t):t},D=h,Ve=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Ke=function(e){var t={},n,s,i;return e&&D.forEach(e.split(`
`),function(u){if(i=u.indexOf(":"),n=D.trim(u.substr(0,i)).toLowerCase(),s=D.trim(u.substr(i+1)),n){if(t[n]&&Ve.indexOf(n)>=0)return;n==="set-cookie"?t[n]=(t[n]?t[n]:[]).concat([s]):t[n]=t[n]?t[n]+", "+s:s}}),t},ee=h,Xe=ee.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),n;function s(i){var o=i;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return n=s(window.location.href),function(o){var u=ee.isString(o)?s(o):o;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}(),j=h,We=Le,Ge=He,Qe=Q,Ye=ze,Ze=Ke,er=Xe,L=Z,re=function(e){return new Promise(function(n,s){var i=e.data,o=e.headers,u=e.responseType;j.isFormData(i)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var v=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(v+":"+w)}var l=Ye(e.baseURL,e.url);a.open(e.method.toUpperCase(),Qe(l,e.params,e.paramsSerializer),!0),a.timeout=e.timeout;function f(){if(!!a){var b="getAllResponseHeaders"in a?Ze(a.getAllResponseHeaders()):null,y=!u||u==="text"||u==="json"?a.responseText:a.response,S={data:y,status:a.status,statusText:a.statusText,headers:b,config:e,request:a};We(n,s,S),a=null}}if("onloadend"in a?a.onloadend=f:a.onreadystatechange=function(){!a||a.readyState!==4||a.status===0&&!(a.responseURL&&a.responseURL.indexOf("file:")===0)||setTimeout(f)},a.onabort=function(){!a||(s(L("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){s(L("Network Error",e,null,a)),a=null},a.ontimeout=function(){var y="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),s(L(y,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",a)),a=null},j.isStandardBrowserEnv()){var c=(e.withCredentials||er(l))&&e.xsrfCookieName?Ge.read(e.xsrfCookieName):void 0;c&&(o[e.xsrfHeaderName]=c)}"setRequestHeader"in a&&j.forEach(o,function(y,S){typeof i=="undefined"&&S.toLowerCase()==="content-type"?delete o[S]:a.setRequestHeader(S,y)}),j.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),u&&u!=="json"&&(a.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&a.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(y){!a||(a.abort(),s(y),a=null)}),i||(i=null),a.send(i)})},d=h,te=Be,rr=Y,tr={"Content-Type":"application/x-www-form-urlencoded"};function ne(r,e){!d.isUndefined(r)&&d.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function nr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=re),r}function sr(r,e,t){if(d.isString(r))try{return(e||JSON.parse)(r),d.trim(r)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(r)}var N={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:nr(),transformRequest:[function(e,t){return te(t,"Accept"),te(t,"Content-Type"),d.isFormData(e)||d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e)?e:d.isArrayBufferView(e)?e.buffer:d.isURLSearchParams(e)?(ne(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):d.isObject(e)||t&&t["Content-Type"]==="application/json"?(ne(t,"application/json"),sr(e)):e}],transformResponse:[function(e){var t=this.transitional,n=t&&t.silentJSONParsing,s=t&&t.forcedJSONParsing,i=!n&&this.responseType==="json";if(i||s&&d.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?rr(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};N.headers={common:{Accept:"application/json, text/plain, */*"}};d.forEach(["delete","get","head"],function(e){N.headers[e]={}});d.forEach(["post","put","patch"],function(e){N.headers[e]=d.merge(tr)});var H=N,ar=h,ir=H,or=function(e,t,n){var s=this||ir;return ar.forEach(n,function(o){e=o.call(s,e,t)}),e},se=function(e){return!!(e&&e.__CANCEL__)},ae=h,M=or,ur=se,cr=H;function F(r){r.cancelToken&&r.cancelToken.throwIfRequested()}var fr=function(e){F(e),e.headers=e.headers||{},e.data=M.call(e,e.data,e.headers,e.transformRequest),e.headers=ae.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ae.forEach(["delete","get","head","post","put","patch","common"],function(s){delete e.headers[s]});var t=e.adapter||cr.adapter;return t(e).then(function(s){return F(e),s.data=M.call(e,s.data,s.headers,e.transformResponse),s},function(s){return ur(s)||(F(e),s&&s.response&&(s.response.data=M.call(e,s.response.data,s.response.headers,e.transformResponse))),Promise.reject(s)})},p=h,ie=function(e,t){t=t||{};var n={},s=["url","method","data"],i=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],u=["validateStatus"];function a(f,c){return p.isPlainObject(f)&&p.isPlainObject(c)?p.merge(f,c):p.isPlainObject(c)?p.merge({},c):p.isArray(c)?c.slice():c}function v(f){p.isUndefined(t[f])?p.isUndefined(e[f])||(n[f]=a(void 0,e[f])):n[f]=a(e[f],t[f])}p.forEach(s,function(c){p.isUndefined(t[c])||(n[c]=a(void 0,t[c]))}),p.forEach(i,v),p.forEach(o,function(c){p.isUndefined(t[c])?p.isUndefined(e[c])||(n[c]=a(void 0,e[c])):n[c]=a(void 0,t[c])}),p.forEach(u,function(c){c in t?n[c]=a(e[c],t[c]):c in e&&(n[c]=a(void 0,e[c]))});var w=s.concat(i).concat(o).concat(u),l=Object.keys(e).concat(Object.keys(t)).filter(function(c){return w.indexOf(c)===-1});return p.forEach(l,v),n};const lr=[["axios@0.21.4","/home/runner/work/vite-v3-template/vite-v3-template"]],dr="axios@0.21.4",pr="axios@0.21.4",hr=!1,mr="sha512-ut5vewkiu8jjGBdqpM44XxjuCjq9LAKeHVmoVfHVzy8eHgxxq8SbAVQNovDA8mVi05kP0Ea/n/UzcSHcTJQfNg==",vr="/axios",yr={},br={type:"version",registry:!0,raw:"axios@0.21.4",name:"axios",escapedName:"axios",rawSpec:"0.21.4",saveSpec:null,fetchSpec:"0.21.4"},gr=["/"],wr="http://nexus.datavaluable.com/repository/npm-public/axios/-/axios-0.21.4.tgz",xr="0.21.4",Er="/home/runner/work/vite-v3-template/vite-v3-template",Sr={name:"Matt Zabriskie"},Cr={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},Or={url:"https://github.com/axios/axios/issues"},Ar=[{path:"./dist/axios.min.js",threshold:"5kB"}],Rr={"follow-redirects":"^1.14.0"},jr="Promise based HTTP client for the browser and node.js",Nr={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},$r="https://axios-http.com",Pr="dist/axios.min.js",Tr=["xhr","http","ajax","promise","node"],kr="MIT",_r="index.js",Ur="axios",Br={type:"git",url:"git+https://github.com/axios/axios.git"},qr={build:"NODE_ENV=production grunt build",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",examples:"node ./examples/server.js",fix:"eslint --fix lib/**/*.js",postversion:"git push && git push --tags",preversion:"npm test",start:"node ./sandbox/server.js",test:"grunt test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"},Dr="./index.d.ts",Lr="dist/axios.min.js",Hr="0.21.4";var Mr={_args:lr,_from:dr,_id:pr,_inBundle:hr,_integrity:mr,_location:vr,_phantomChildren:yr,_requested:br,_requiredBy:gr,_resolved:wr,_spec:xr,_where:Er,author:Sr,browser:Cr,bugs:Or,bundlesize:Ar,dependencies:Rr,description:jr,devDependencies:Nr,homepage:$r,jsdelivr:Pr,keywords:Tr,license:kr,main:_r,name:Ur,repository:Br,scripts:qr,typings:Dr,unpkg:Lr,version:Hr},oe=Mr,I={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){I[r]=function(n){return typeof n===r||"a"+(e<1?"n ":" ")+r}});var ue={},Fr=oe.version.split(".");function ce(r,e){for(var t=e?e.split("."):Fr,n=r.split("."),s=0;s<3;s++){if(t[s]>n[s])return!0;if(t[s]<n[s])return!1}return!1}I.transitional=function(e,t,n){var s=t&&ce(t);function i(o,u){return"[Axios v"+oe.version+"] Transitional option '"+o+"'"+u+(n?". "+n:"")}return function(o,u,a){if(e===!1)throw new Error(i(u," has been removed in "+t));return s&&!ue[u]&&(ue[u]=!0,console.warn(i(u," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(o,u,a):!0}};function Ir(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var n=Object.keys(r),s=n.length;s-- >0;){var i=n[s],o=e[i];if(o){var u=r[i],a=u===void 0||o(u,i,r);if(a!==!0)throw new TypeError("option "+i+" must be "+a);continue}if(t!==!0)throw Error("Unknown option "+i)}}var Jr={isOlderVersion:ce,assertOptions:Ir,validators:I},fe=h,zr=Q,le=_e,de=fr,$=ie,pe=Jr,E=pe.validators;function C(r){this.defaults=r,this.interceptors={request:new le,response:new le}}C.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=$(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;t!==void 0&&pe.assertOptions(t,{silentJSONParsing:E.transitional(E.boolean,"1.0.0"),forcedJSONParsing:E.transitional(E.boolean,"1.0.0"),clarifyTimeoutError:E.transitional(E.boolean,"1.0.0")},!1);var n=[],s=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(e)===!1||(s=s&&f.synchronous,n.unshift(f.fulfilled,f.rejected))});var i=[];this.interceptors.response.forEach(function(f){i.push(f.fulfilled,f.rejected)});var o;if(!s){var u=[de,void 0];for(Array.prototype.unshift.apply(u,n),u=u.concat(i),o=Promise.resolve(e);u.length;)o=o.then(u.shift(),u.shift());return o}for(var a=e;n.length;){var v=n.shift(),w=n.shift();try{a=v(a)}catch(l){w(l);break}}try{o=de(a)}catch(l){return Promise.reject(l)}for(;i.length;)o=o.then(i.shift(),i.shift());return o};C.prototype.getUri=function(e){return e=$(this.defaults,e),zr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};fe.forEach(["delete","get","head","options"],function(e){C.prototype[e]=function(t,n){return this.request($(n||{},{method:e,url:t,data:(n||{}).data}))}});fe.forEach(["post","put","patch"],function(e){C.prototype[e]=function(t,n,s){return this.request($(s||{},{method:e,url:t,data:n}))}});var Vr=C;function J(r){this.message=r}J.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};J.prototype.__CANCEL__=!0;var he=J,Kr=he;function P(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(s){e=s});var t=this;r(function(s){t.reason||(t.reason=new Kr(s),e(t.reason))})}P.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};P.source=function(){var e,t=new P(function(s){e=s});return{token:t,cancel:e}};var Xr=P,Wr=function(e){return function(n){return e.apply(null,n)}},Gr=function(e){return typeof e=="object"&&e.isAxiosError===!0},me=h,Qr=K,T=Vr,Yr=ie,Zr=H;function ve(r){var e=new T(r),t=Qr(T.prototype.request,e);return me.extend(t,T.prototype,e),me.extend(t,e),t}var m=ve(Zr);m.Axios=T;m.create=function(e){return ve(Yr(m.defaults,e))};m.Cancel=he;m.CancelToken=Xr;m.isCancel=se;m.all=function(e){return Promise.all(e)};m.spread=Wr;m.isAxiosError=Gr;k.exports=m;k.exports.default=m;var et=k.exports;const rt="https://api.github.com",z=et.create({baseURL:rt,timeout:2e4});z.interceptors.request.use(r=>r,r=>Promise.reject(r));z.interceptors.response.use(r=>r,r=>{if(r.response&&r.response.data){const e=r.response.status,t=r.response.data.message;V.error(`Code: ${e}, Message: ${t}`),console.log("[Axios Error]",r.response)}else V.error(`${r}`);return Promise.reject(r)});const nt={setup(r){return z.get("/users/XPoet").then(e=>{console.log("res: ",e)}).catch(e=>{console.log("err: ",e)}),(e,t)=>"axios"}};export{nt as default};
