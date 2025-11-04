var Vd=e=>{throw TypeError(e)};var ll=(e,t,n)=>t.has(e)||Vd("Cannot "+n);var E=(e,t,n)=>(ll(e,t,"read from private field"),n?n.call(e):t.get(e)),oe=(e,t,n)=>t.has(e)?Vd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Y=(e,t,n,r)=>(ll(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Be=(e,t,n)=>(ll(e,t,"access private method"),n);var ts=(e,t,n,r)=>({set _(i){Y(e,t,i,n)},get _(){return E(e,t,r)}});function Tx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function df(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mf={exports:{}},ja={},pf={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=Symbol.for("react.element"),Ax=Symbol.for("react.portal"),Ix=Symbol.for("react.fragment"),Rx=Symbol.for("react.strict_mode"),Mx=Symbol.for("react.profiler"),Dx=Symbol.for("react.provider"),Lx=Symbol.for("react.context"),Ox=Symbol.for("react.forward_ref"),zx=Symbol.for("react.suspense"),Fx=Symbol.for("react.memo"),$x=Symbol.for("react.lazy"),qd=Symbol.iterator;function _x(e){return e===null||typeof e!="object"?null:(e=qd&&e[qd]||e["@@iterator"],typeof e=="function"?e:null)}var ff={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hf=Object.assign,gf={};function Li(e,t,n){this.props=e,this.context=t,this.refs=gf,this.updater=n||ff}Li.prototype.isReactComponent={};Li.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Li.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vf(){}vf.prototype=Li.prototype;function xu(e,t,n){this.props=e,this.context=t,this.refs=gf,this.updater=n||ff}var wu=xu.prototype=new vf;wu.constructor=xu;hf(wu,Li.prototype);wu.isPureReactComponent=!0;var Gd=Array.isArray,yf=Object.prototype.hasOwnProperty,bu={current:null},xf={key:!0,ref:!0,__self:!0,__source:!0};function wf(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)yf.call(t,r)&&!xf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Vo,type:e,key:s,ref:a,props:i,_owner:bu.current}}function Bx(e,t){return{$$typeof:Vo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ku(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vo}function Wx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Qd=/\/+/g;function cl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wx(""+e.key):t.toString(36)}function Ps(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Vo:case Ax:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+cl(a,0):r,Gd(i)?(n="",e!=null&&(n=e.replace(Qd,"$&/")+"/"),Ps(i,t,n,"",function(u){return u})):i!=null&&(ku(i)&&(i=Bx(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Qd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Gd(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+cl(s,l);a+=Ps(s,t,n,c,i)}else if(c=_x(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+cl(s,l++),a+=Ps(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ns(e,t,n){if(e==null)return e;var r=[],i=0;return Ps(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Ux(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Je={current:null},Ts={transition:null},Hx={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:Ts,ReactCurrentOwner:bu};function bf(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:ns,forEach:function(e,t,n){ns(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ns(e,function(){t++}),t},toArray:function(e){return ns(e,function(t){return t})||[]},only:function(e){if(!ku(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ee.Component=Li;ee.Fragment=Ix;ee.Profiler=Mx;ee.PureComponent=xu;ee.StrictMode=Rx;ee.Suspense=zx;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hx;ee.act=bf;ee.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=hf({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=bu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)yf.call(t,c)&&!xf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Vo,type:e.type,key:i,ref:s,props:r,_owner:a}};ee.createContext=function(e){return e={$$typeof:Lx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Dx,_context:e},e.Consumer=e};ee.createElement=wf;ee.createFactory=function(e){var t=wf.bind(null,e);return t.type=e,t};ee.createRef=function(){return{current:null}};ee.forwardRef=function(e){return{$$typeof:Ox,render:e}};ee.isValidElement=ku;ee.lazy=function(e){return{$$typeof:$x,_payload:{_status:-1,_result:e},_init:Ux}};ee.memo=function(e,t){return{$$typeof:Fx,type:e,compare:t===void 0?null:t}};ee.startTransition=function(e){var t=Ts.transition;Ts.transition={};try{e()}finally{Ts.transition=t}};ee.unstable_act=bf;ee.useCallback=function(e,t){return Je.current.useCallback(e,t)};ee.useContext=function(e){return Je.current.useContext(e)};ee.useDebugValue=function(){};ee.useDeferredValue=function(e){return Je.current.useDeferredValue(e)};ee.useEffect=function(e,t){return Je.current.useEffect(e,t)};ee.useId=function(){return Je.current.useId()};ee.useImperativeHandle=function(e,t,n){return Je.current.useImperativeHandle(e,t,n)};ee.useInsertionEffect=function(e,t){return Je.current.useInsertionEffect(e,t)};ee.useLayoutEffect=function(e,t){return Je.current.useLayoutEffect(e,t)};ee.useMemo=function(e,t){return Je.current.useMemo(e,t)};ee.useReducer=function(e,t,n){return Je.current.useReducer(e,t,n)};ee.useRef=function(e){return Je.current.useRef(e)};ee.useState=function(e){return Je.current.useState(e)};ee.useSyncExternalStore=function(e,t,n){return Je.current.useSyncExternalStore(e,t,n)};ee.useTransition=function(){return Je.current.useTransition()};ee.version="18.3.1";pf.exports=ee;var g=pf.exports;const M=df(g),Su=Tx({__proto__:null,default:M},[g]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vx=g,qx=Symbol.for("react.element"),Gx=Symbol.for("react.fragment"),Qx=Object.prototype.hasOwnProperty,Yx=Vx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kx={key:!0,ref:!0,__self:!0,__source:!0};function kf(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Qx.call(t,r)&&!Kx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:qx,type:e,key:s,ref:a,props:i,_owner:Yx.current}}ja.Fragment=Gx;ja.jsx=kf;ja.jsxs=kf;mf.exports=ja;var o=mf.exports,Sf={exports:{}},gt={},Cf={exports:{}},jf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,P){var O=N.length;N.push(P);e:for(;0<O;){var H=O-1>>>1,B=N[H];if(0<i(B,P))N[H]=P,N[O]=B,O=H;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var P=N[0],O=N.pop();if(O!==P){N[0]=O;e:for(var H=0,B=N.length,X=B>>>1;H<X;){var G=2*(H+1)-1,pe=N[G],ke=G+1,z=N[ke];if(0>i(pe,O))ke<B&&0>i(z,pe)?(N[H]=z,N[ke]=O,H=ke):(N[H]=pe,N[G]=O,H=G);else if(ke<B&&0>i(z,O))N[H]=z,N[ke]=O,H=ke;else break e}}return P}function i(N,P){var O=N.sortIndex-P.sortIndex;return O!==0?O:N.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,m=null,v=3,f=!1,b=!1,p=!1,w=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=N)r(u),P.sortIndex=P.expirationTime,t(c,P);else break;P=n(u)}}function k(N){if(p=!1,x(N),!b)if(n(c)!==null)b=!0,$(S);else{var P=n(u);P!==null&&W(k,P.startTime-N)}}function S(N,P){b=!1,p&&(p=!1,y(T),T=-1),f=!0;var O=v;try{for(x(P),m=n(c);m!==null&&(!(m.expirationTime>P)||N&&!_());){var H=m.callback;if(typeof H=="function"){m.callback=null,v=m.priorityLevel;var B=H(m.expirationTime<=P);P=e.unstable_now(),typeof B=="function"?m.callback=B:m===n(c)&&r(c),x(P)}else r(c);m=n(c)}if(m!==null)var X=!0;else{var G=n(u);G!==null&&W(k,G.startTime-P),X=!1}return X}finally{m=null,v=O,f=!1}}var C=!1,j=null,T=-1,I=5,R=-1;function _(){return!(e.unstable_now()-R<I)}function L(){if(j!==null){var N=e.unstable_now();R=N;var P=!0;try{P=j(!0,N)}finally{P?U():(C=!1,j=null)}}else C=!1}var U;if(typeof h=="function")U=function(){h(L)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,V=D.port2;D.port1.onmessage=L,U=function(){V.postMessage(null)}}else U=function(){w(L,0)};function $(N){j=N,C||(C=!0,U())}function W(N,P){T=w(function(){N(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){b||f||(b=!0,$(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(N){switch(v){case 1:case 2:case 3:var P=3;break;default:P=v}var O=v;v=P;try{return N()}finally{v=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,P){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var O=v;v=N;try{return P()}finally{v=O}},e.unstable_scheduleCallback=function(N,P,O){var H=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?H+O:H):O=H,N){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=O+B,N={id:d++,callback:P,priorityLevel:N,startTime:O,expirationTime:B,sortIndex:-1},O>H?(N.sortIndex=O,t(u,N),n(c)===null&&N===n(u)&&(p?(y(T),T=-1):p=!0,W(k,O-H))):(N.sortIndex=B,t(c,N),b||f||(b=!0,$(S))),N},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(N){var P=v;return function(){var O=v;v=P;try{return N.apply(this,arguments)}finally{v=O}}}})(jf);Cf.exports=jf;var Xx=Cf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jx=g,ht=Xx;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nf=new Set,xo={};function zr(e,t){Ni(e,t),Ni(e+"Capture",t)}function Ni(e,t){for(xo[e]=t,e=0;e<t.length;e++)Nf.add(t[e])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jl=Object.prototype.hasOwnProperty,Zx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yd={},Kd={};function e0(e){return Jl.call(Kd,e)?!0:Jl.call(Yd,e)?!1:Zx.test(e)?Kd[e]=!0:(Yd[e]=!0,!1)}function t0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function n0(e,t,n,r){if(t===null||typeof t>"u"||t0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ze(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cu=/[\-:]([a-z])/g;function ju(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Cu,ju);Fe[t]=new Ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Cu,ju);Fe[t]=new Ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Cu,ju);Fe[t]=new Ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Nu(e,t,n,r){var i=Fe.hasOwnProperty(t)?Fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(n0(t,n,i,r)&&(n=null),r||i===null?e0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Cn=Jx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rs=Symbol.for("react.element"),Xr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),Eu=Symbol.for("react.strict_mode"),Zl=Symbol.for("react.profiler"),Ef=Symbol.for("react.provider"),Pf=Symbol.for("react.context"),Pu=Symbol.for("react.forward_ref"),ec=Symbol.for("react.suspense"),tc=Symbol.for("react.suspense_list"),Tu=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),Tf=Symbol.for("react.offscreen"),Xd=Symbol.iterator;function qi(e){return e===null||typeof e!="object"?null:(e=Xd&&e[Xd]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,ul;function no(e){if(ul===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ul=t&&t[1]||""}return`
`+ul+e}var dl=!1;function ml(e,t){if(!e||dl)return"";dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{dl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?no(e):""}function r0(e){switch(e.tag){case 5:return no(e.type);case 16:return no("Lazy");case 13:return no("Suspense");case 19:return no("SuspenseList");case 0:case 2:case 15:return e=ml(e.type,!1),e;case 11:return e=ml(e.type.render,!1),e;case 1:return e=ml(e.type,!0),e;default:return""}}function nc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jr:return"Fragment";case Xr:return"Portal";case Zl:return"Profiler";case Eu:return"StrictMode";case ec:return"Suspense";case tc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pf:return(e.displayName||"Context")+".Consumer";case Ef:return(e._context.displayName||"Context")+".Provider";case Pu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Tu:return t=e.displayName||null,t!==null?t:nc(e.type)||"Memo";case Dn:t=e._payload,e=e._init;try{return nc(e(t))}catch{}}return null}function i0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nc(t);case 8:return t===Eu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function tr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Af(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function o0(e){var t=Af(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function is(e){e._valueTracker||(e._valueTracker=o0(e))}function If(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Af(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rc(e,t){var n=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Jd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=tr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Rf(e,t){t=t.checked,t!=null&&Nu(e,"checked",t,!1)}function ic(e,t){Rf(e,t);var n=tr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oc(e,t.type,n):t.hasOwnProperty("defaultValue")&&oc(e,t.type,tr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oc(e,t,n){(t!=="number"||Vs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ro=Array.isArray;function ci(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+tr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function sc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function em(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(ro(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:tr(n)}}function Mf(e,t){var n=tr(t.value),r=tr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function tm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Df(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ac(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Df(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var os,Lf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(os=os||document.createElement("div"),os.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=os.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s0=["Webkit","ms","Moz","O"];Object.keys(ao).forEach(function(e){s0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ao[t]=ao[e]})});function Of(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ao.hasOwnProperty(e)&&ao[e]?(""+t).trim():t+"px"}function zf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Of(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var a0=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lc(e,t){if(t){if(a0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function cc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uc=null;function Au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dc=null,ui=null,di=null;function nm(e){if(e=Qo(e)){if(typeof dc!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Aa(t),dc(e.stateNode,e.type,t))}}function Ff(e){ui?di?di.push(e):di=[e]:ui=e}function $f(){if(ui){var e=ui,t=di;if(di=ui=null,nm(e),t)for(e=0;e<t.length;e++)nm(t[e])}}function _f(e,t){return e(t)}function Bf(){}var pl=!1;function Wf(e,t,n){if(pl)return e(t,n);pl=!0;try{return _f(e,t,n)}finally{pl=!1,(ui!==null||di!==null)&&(Bf(),$f())}}function bo(e,t){var n=e.stateNode;if(n===null)return null;var r=Aa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var mc=!1;if(yn)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){mc=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{mc=!1}function l0(e,t,n,r,i,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var lo=!1,qs=null,Gs=!1,pc=null,c0={onError:function(e){lo=!0,qs=e}};function u0(e,t,n,r,i,s,a,l,c){lo=!1,qs=null,l0.apply(c0,arguments)}function d0(e,t,n,r,i,s,a,l,c){if(u0.apply(this,arguments),lo){if(lo){var u=qs;lo=!1,qs=null}else throw Error(A(198));Gs||(Gs=!0,pc=u)}}function Fr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Uf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rm(e){if(Fr(e)!==e)throw Error(A(188))}function m0(e){var t=e.alternate;if(!t){if(t=Fr(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return rm(i),e;if(s===r)return rm(i),t;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function Hf(e){return e=m0(e),e!==null?Vf(e):null}function Vf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vf(e);if(t!==null)return t;e=e.sibling}return null}var qf=ht.unstable_scheduleCallback,im=ht.unstable_cancelCallback,p0=ht.unstable_shouldYield,f0=ht.unstable_requestPaint,Ee=ht.unstable_now,h0=ht.unstable_getCurrentPriorityLevel,Iu=ht.unstable_ImmediatePriority,Gf=ht.unstable_UserBlockingPriority,Qs=ht.unstable_NormalPriority,g0=ht.unstable_LowPriority,Qf=ht.unstable_IdlePriority,Na=null,nn=null;function v0(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Na,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:w0,y0=Math.log,x0=Math.LN2;function w0(e){return e>>>=0,e===0?32:31-(y0(e)/x0|0)|0}var ss=64,as=4194304;function io(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ys(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=io(l):(s&=a,s!==0&&(r=io(s)))}else a=n&~i,a!==0?r=io(a):s!==0&&(r=io(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_t(t),i=1<<n,r|=e[n],t&=~i;return r}function b0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-_t(s),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=b0(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function fc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yf(){var e=ss;return ss<<=1,!(ss&4194240)&&(ss=64),e}function fl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_t(t),e[t]=n}function S0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-_t(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Ru(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_t(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var le=0;function Kf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xf,Mu,Jf,Zf,eh,hc=!1,ls=[],qn=null,Gn=null,Qn=null,ko=new Map,So=new Map,On=[],C0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function om(e,t){switch(e){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":ko.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(t.pointerId)}}function Qi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Qo(t),t!==null&&Mu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function j0(e,t,n,r,i){switch(t){case"focusin":return qn=Qi(qn,e,t,n,r,i),!0;case"dragenter":return Gn=Qi(Gn,e,t,n,r,i),!0;case"mouseover":return Qn=Qi(Qn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ko.set(s,Qi(ko.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,So.set(s,Qi(So.get(s)||null,e,t,n,r,i)),!0}return!1}function th(e){var t=vr(e.target);if(t!==null){var n=Fr(t);if(n!==null){if(t=n.tag,t===13){if(t=Uf(n),t!==null){e.blockedOn=t,eh(e.priority,function(){Jf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function As(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);uc=r,n.target.dispatchEvent(r),uc=null}else return t=Qo(n),t!==null&&Mu(t),e.blockedOn=n,!1;t.shift()}return!0}function sm(e,t,n){As(e)&&n.delete(t)}function N0(){hc=!1,qn!==null&&As(qn)&&(qn=null),Gn!==null&&As(Gn)&&(Gn=null),Qn!==null&&As(Qn)&&(Qn=null),ko.forEach(sm),So.forEach(sm)}function Yi(e,t){e.blockedOn===t&&(e.blockedOn=null,hc||(hc=!0,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,N0)))}function Co(e){function t(i){return Yi(i,e)}if(0<ls.length){Yi(ls[0],e);for(var n=1;n<ls.length;n++){var r=ls[n];r.blockedOn===e&&(r.blockedOn=null)}}for(qn!==null&&Yi(qn,e),Gn!==null&&Yi(Gn,e),Qn!==null&&Yi(Qn,e),ko.forEach(t),So.forEach(t),n=0;n<On.length;n++)r=On[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<On.length&&(n=On[0],n.blockedOn===null);)th(n),n.blockedOn===null&&On.shift()}var mi=Cn.ReactCurrentBatchConfig,Ks=!0;function E0(e,t,n,r){var i=le,s=mi.transition;mi.transition=null;try{le=1,Du(e,t,n,r)}finally{le=i,mi.transition=s}}function P0(e,t,n,r){var i=le,s=mi.transition;mi.transition=null;try{le=4,Du(e,t,n,r)}finally{le=i,mi.transition=s}}function Du(e,t,n,r){if(Ks){var i=gc(e,t,n,r);if(i===null)Cl(e,t,r,Xs,n),om(e,r);else if(j0(i,e,t,n,r))r.stopPropagation();else if(om(e,r),t&4&&-1<C0.indexOf(e)){for(;i!==null;){var s=Qo(i);if(s!==null&&Xf(s),s=gc(e,t,n,r),s===null&&Cl(e,t,r,Xs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Cl(e,t,r,null,n)}}var Xs=null;function gc(e,t,n,r){if(Xs=null,e=Au(r),e=vr(e),e!==null)if(t=Fr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Uf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xs=e,null}function nh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(h0()){case Iu:return 1;case Gf:return 4;case Qs:case g0:return 16;case Qf:return 536870912;default:return 16}default:return 16}}var Un=null,Lu=null,Is=null;function rh(){if(Is)return Is;var e,t=Lu,n=t.length,r,i="value"in Un?Un.value:Un.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return Is=i.slice(e,1<r?1-r:void 0)}function Rs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cs(){return!0}function am(){return!1}function vt(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?cs:am,this.isPropagationStopped=am,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cs)},persist:function(){},isPersistent:cs}),t}var Oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ou=vt(Oi),Go=be({},Oi,{view:0,detail:0}),T0=vt(Go),hl,gl,Ki,Ea=be({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ki&&(Ki&&e.type==="mousemove"?(hl=e.screenX-Ki.screenX,gl=e.screenY-Ki.screenY):gl=hl=0,Ki=e),hl)},movementY:function(e){return"movementY"in e?e.movementY:gl}}),lm=vt(Ea),A0=be({},Ea,{dataTransfer:0}),I0=vt(A0),R0=be({},Go,{relatedTarget:0}),vl=vt(R0),M0=be({},Oi,{animationName:0,elapsedTime:0,pseudoElement:0}),D0=vt(M0),L0=be({},Oi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),O0=vt(L0),z0=be({},Oi,{data:0}),cm=vt(z0),F0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_0[e])?!!t[e]:!1}function zu(){return B0}var W0=be({},Go,{key:function(e){if(e.key){var t=F0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zu,charCode:function(e){return e.type==="keypress"?Rs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),U0=vt(W0),H0=be({},Ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),um=vt(H0),V0=be({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zu}),q0=vt(V0),G0=be({},Oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q0=vt(G0),Y0=be({},Ea,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),K0=vt(Y0),X0=[9,13,27,32],Fu=yn&&"CompositionEvent"in window,co=null;yn&&"documentMode"in document&&(co=document.documentMode);var J0=yn&&"TextEvent"in window&&!co,ih=yn&&(!Fu||co&&8<co&&11>=co),dm=" ",mm=!1;function oh(e,t){switch(e){case"keyup":return X0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zr=!1;function Z0(e,t){switch(e){case"compositionend":return sh(t);case"keypress":return t.which!==32?null:(mm=!0,dm);case"textInput":return e=t.data,e===dm&&mm?null:e;default:return null}}function ew(e,t){if(Zr)return e==="compositionend"||!Fu&&oh(e,t)?(e=rh(),Is=Lu=Un=null,Zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ih&&t.locale!=="ko"?null:t.data;default:return null}}var tw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tw[e.type]:t==="textarea"}function ah(e,t,n,r){Ff(r),t=Js(t,"onChange"),0<t.length&&(n=new Ou("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var uo=null,jo=null;function nw(e){yh(e,0)}function Pa(e){var t=ni(e);if(If(t))return e}function rw(e,t){if(e==="change")return t}var lh=!1;if(yn){var yl;if(yn){var xl="oninput"in document;if(!xl){var fm=document.createElement("div");fm.setAttribute("oninput","return;"),xl=typeof fm.oninput=="function"}yl=xl}else yl=!1;lh=yl&&(!document.documentMode||9<document.documentMode)}function hm(){uo&&(uo.detachEvent("onpropertychange",ch),jo=uo=null)}function ch(e){if(e.propertyName==="value"&&Pa(jo)){var t=[];ah(t,jo,e,Au(e)),Wf(nw,t)}}function iw(e,t,n){e==="focusin"?(hm(),uo=t,jo=n,uo.attachEvent("onpropertychange",ch)):e==="focusout"&&hm()}function ow(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pa(jo)}function sw(e,t){if(e==="click")return Pa(t)}function aw(e,t){if(e==="input"||e==="change")return Pa(t)}function lw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wt=typeof Object.is=="function"?Object.is:lw;function No(e,t){if(Wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jl.call(t,i)||!Wt(e[i],t[i]))return!1}return!0}function gm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vm(e,t){var n=gm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gm(n)}}function uh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?uh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dh(){for(var e=window,t=Vs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vs(e.document)}return t}function $u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cw(e){var t=dh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&uh(n.ownerDocument.documentElement,n)){if(r!==null&&$u(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=vm(n,s);var a=vm(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uw=yn&&"documentMode"in document&&11>=document.documentMode,ei=null,vc=null,mo=null,yc=!1;function ym(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yc||ei==null||ei!==Vs(r)||(r=ei,"selectionStart"in r&&$u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mo&&No(mo,r)||(mo=r,r=Js(vc,"onSelect"),0<r.length&&(t=new Ou("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ei)))}function us(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ti={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionend:us("Transition","TransitionEnd")},wl={},mh={};yn&&(mh=document.createElement("div").style,"AnimationEvent"in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),"TransitionEvent"in window||delete ti.transitionend.transition);function Ta(e){if(wl[e])return wl[e];if(!ti[e])return e;var t=ti[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mh)return wl[e]=t[n];return e}var ph=Ta("animationend"),fh=Ta("animationiteration"),hh=Ta("animationstart"),gh=Ta("transitionend"),vh=new Map,xm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(e,t){vh.set(e,t),zr(t,[e])}for(var bl=0;bl<xm.length;bl++){var kl=xm[bl],dw=kl.toLowerCase(),mw=kl[0].toUpperCase()+kl.slice(1);or(dw,"on"+mw)}or(ph,"onAnimationEnd");or(fh,"onAnimationIteration");or(hh,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(gh,"onTransitionEnd");Ni("onMouseEnter",["mouseout","mouseover"]);Ni("onMouseLeave",["mouseout","mouseover"]);Ni("onPointerEnter",["pointerout","pointerover"]);Ni("onPointerLeave",["pointerout","pointerover"]);zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pw=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function wm(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,d0(r,t,void 0,e),e.currentTarget=null}function yh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;wm(i,l,u),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;wm(i,l,u),s=c}}}if(Gs)throw e=pc,Gs=!1,pc=null,e}function he(e,t){var n=t[Sc];n===void 0&&(n=t[Sc]=new Set);var r=e+"__bubble";n.has(r)||(xh(t,e,2,!1),n.add(r))}function Sl(e,t,n){var r=0;t&&(r|=4),xh(n,e,r,t)}var ds="_reactListening"+Math.random().toString(36).slice(2);function Eo(e){if(!e[ds]){e[ds]=!0,Nf.forEach(function(n){n!=="selectionchange"&&(pw.has(n)||Sl(n,!1,e),Sl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ds]||(t[ds]=!0,Sl("selectionchange",!1,t))}}function xh(e,t,n,r){switch(nh(t)){case 1:var i=E0;break;case 4:i=P0;break;default:i=Du}n=i.bind(null,t,n,e),i=void 0,!mc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Cl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=vr(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Wf(function(){var u=s,d=Au(n),m=[];e:{var v=vh.get(e);if(v!==void 0){var f=Ou,b=e;switch(e){case"keypress":if(Rs(n)===0)break e;case"keydown":case"keyup":f=U0;break;case"focusin":b="focus",f=vl;break;case"focusout":b="blur",f=vl;break;case"beforeblur":case"afterblur":f=vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=lm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=I0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=q0;break;case ph:case fh:case hh:f=D0;break;case gh:f=Q0;break;case"scroll":f=T0;break;case"wheel":f=K0;break;case"copy":case"cut":case"paste":f=O0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=um}var p=(t&4)!==0,w=!p&&e==="scroll",y=p?v!==null?v+"Capture":null:v;p=[];for(var h=u,x;h!==null;){x=h;var k=x.stateNode;if(x.tag===5&&k!==null&&(x=k,y!==null&&(k=bo(h,y),k!=null&&p.push(Po(h,k,x)))),w)break;h=h.return}0<p.length&&(v=new f(v,b,null,n,d),m.push({event:v,listeners:p}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",v&&n!==uc&&(b=n.relatedTarget||n.fromElement)&&(vr(b)||b[xn]))break e;if((f||v)&&(v=d.window===d?d:(v=d.ownerDocument)?v.defaultView||v.parentWindow:window,f?(b=n.relatedTarget||n.toElement,f=u,b=b?vr(b):null,b!==null&&(w=Fr(b),b!==w||b.tag!==5&&b.tag!==6)&&(b=null)):(f=null,b=u),f!==b)){if(p=lm,k="onMouseLeave",y="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(p=um,k="onPointerLeave",y="onPointerEnter",h="pointer"),w=f==null?v:ni(f),x=b==null?v:ni(b),v=new p(k,h+"leave",f,n,d),v.target=w,v.relatedTarget=x,k=null,vr(d)===u&&(p=new p(y,h+"enter",b,n,d),p.target=x,p.relatedTarget=w,k=p),w=k,f&&b)t:{for(p=f,y=b,h=0,x=p;x;x=Vr(x))h++;for(x=0,k=y;k;k=Vr(k))x++;for(;0<h-x;)p=Vr(p),h--;for(;0<x-h;)y=Vr(y),x--;for(;h--;){if(p===y||y!==null&&p===y.alternate)break t;p=Vr(p),y=Vr(y)}p=null}else p=null;f!==null&&bm(m,v,f,p,!1),b!==null&&w!==null&&bm(m,w,b,p,!0)}}e:{if(v=u?ni(u):window,f=v.nodeName&&v.nodeName.toLowerCase(),f==="select"||f==="input"&&v.type==="file")var S=rw;else if(pm(v))if(lh)S=aw;else{S=ow;var C=iw}else(f=v.nodeName)&&f.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(S=sw);if(S&&(S=S(e,u))){ah(m,S,n,d);break e}C&&C(e,v,u),e==="focusout"&&(C=v._wrapperState)&&C.controlled&&v.type==="number"&&oc(v,"number",v.value)}switch(C=u?ni(u):window,e){case"focusin":(pm(C)||C.contentEditable==="true")&&(ei=C,vc=u,mo=null);break;case"focusout":mo=vc=ei=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,ym(m,n,d);break;case"selectionchange":if(uw)break;case"keydown":case"keyup":ym(m,n,d)}var j;if(Fu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Zr?oh(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(ih&&n.locale!=="ko"&&(Zr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Zr&&(j=rh()):(Un=d,Lu="value"in Un?Un.value:Un.textContent,Zr=!0)),C=Js(u,T),0<C.length&&(T=new cm(T,e,null,n,d),m.push({event:T,listeners:C}),j?T.data=j:(j=sh(n),j!==null&&(T.data=j)))),(j=J0?Z0(e,n):ew(e,n))&&(u=Js(u,"onBeforeInput"),0<u.length&&(d=new cm("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:u}),d.data=j))}yh(m,t)})}function Po(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Js(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=bo(e,n),s!=null&&r.unshift(Po(e,s,i)),s=bo(e,t),s!=null&&r.push(Po(e,s,i))),e=e.return}return r}function Vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function bm(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=bo(n,s),c!=null&&a.unshift(Po(n,c,l))):i||(c=bo(n,s),c!=null&&a.push(Po(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var fw=/\r\n?/g,hw=/\u0000|\uFFFD/g;function km(e){return(typeof e=="string"?e:""+e).replace(fw,`
`).replace(hw,"")}function ms(e,t,n){if(t=km(t),km(e)!==t&&n)throw Error(A(425))}function Zs(){}var xc=null,wc=null;function bc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kc=typeof setTimeout=="function"?setTimeout:void 0,gw=typeof clearTimeout=="function"?clearTimeout:void 0,Sm=typeof Promise=="function"?Promise:void 0,vw=typeof queueMicrotask=="function"?queueMicrotask:typeof Sm<"u"?function(e){return Sm.resolve(null).then(e).catch(yw)}:kc;function yw(e){setTimeout(function(){throw e})}function jl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Co(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Co(t)}function Yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zi=Math.random().toString(36).slice(2),Jt="__reactFiber$"+zi,To="__reactProps$"+zi,xn="__reactContainer$"+zi,Sc="__reactEvents$"+zi,xw="__reactListeners$"+zi,ww="__reactHandles$"+zi;function vr(e){var t=e[Jt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xn]||n[Jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cm(e);e!==null;){if(n=e[Jt])return n;e=Cm(e)}return t}e=n,n=e.parentNode}return null}function Qo(e){return e=e[Jt]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ni(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Aa(e){return e[To]||null}var Cc=[],ri=-1;function sr(e){return{current:e}}function ge(e){0>ri||(e.current=Cc[ri],Cc[ri]=null,ri--)}function de(e,t){ri++,Cc[ri]=e.current,e.current=t}var nr={},Ge=sr(nr),ot=sr(!1),Tr=nr;function Ei(e,t){var n=e.type.contextTypes;if(!n)return nr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function st(e){return e=e.childContextTypes,e!=null}function ea(){ge(ot),ge(Ge)}function jm(e,t,n){if(Ge.current!==nr)throw Error(A(168));de(Ge,t),de(ot,n)}function wh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,i0(e)||"Unknown",i));return be({},n,r)}function ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nr,Tr=Ge.current,de(Ge,e),de(ot,ot.current),!0}function Nm(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=wh(e,t,Tr),r.__reactInternalMemoizedMergedChildContext=e,ge(ot),ge(Ge),de(Ge,e)):ge(ot),de(ot,n)}var mn=null,Ia=!1,Nl=!1;function bh(e){mn===null?mn=[e]:mn.push(e)}function bw(e){Ia=!0,bh(e)}function ar(){if(!Nl&&mn!==null){Nl=!0;var e=0,t=le;try{var n=mn;for(le=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mn=null,Ia=!1}catch(i){throw mn!==null&&(mn=mn.slice(e+1)),qf(Iu,ar),i}finally{le=t,Nl=!1}}return null}var ii=[],oi=0,na=null,ra=0,bt=[],kt=0,Ar=null,hn=1,gn="";function hr(e,t){ii[oi++]=ra,ii[oi++]=na,na=e,ra=t}function kh(e,t,n){bt[kt++]=hn,bt[kt++]=gn,bt[kt++]=Ar,Ar=e;var r=hn;e=gn;var i=32-_t(r)-1;r&=~(1<<i),n+=1;var s=32-_t(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,hn=1<<32-_t(t)+i|n<<i|r,gn=s+e}else hn=1<<s|n<<i|r,gn=e}function _u(e){e.return!==null&&(hr(e,1),kh(e,1,0))}function Bu(e){for(;e===na;)na=ii[--oi],ii[oi]=null,ra=ii[--oi],ii[oi]=null;for(;e===Ar;)Ar=bt[--kt],bt[kt]=null,gn=bt[--kt],bt[kt]=null,hn=bt[--kt],bt[kt]=null}var pt=null,mt=null,ye=!1,$t=null;function Sh(e,t){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Em(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,pt=e,mt=Yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,pt=e,mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ar!==null?{id:hn,overflow:gn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,pt=e,mt=null,!0):!1;default:return!1}}function jc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Nc(e){if(ye){var t=mt;if(t){var n=t;if(!Em(e,t)){if(jc(e))throw Error(A(418));t=Yn(n.nextSibling);var r=pt;t&&Em(e,t)?Sh(r,n):(e.flags=e.flags&-4097|2,ye=!1,pt=e)}}else{if(jc(e))throw Error(A(418));e.flags=e.flags&-4097|2,ye=!1,pt=e}}}function Pm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pt=e}function ps(e){if(e!==pt)return!1;if(!ye)return Pm(e),ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bc(e.type,e.memoizedProps)),t&&(t=mt)){if(jc(e))throw Ch(),Error(A(418));for(;t;)Sh(e,t),t=Yn(t.nextSibling)}if(Pm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){mt=Yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}mt=null}}else mt=pt?Yn(e.stateNode.nextSibling):null;return!0}function Ch(){for(var e=mt;e;)e=Yn(e.nextSibling)}function Pi(){mt=pt=null,ye=!1}function Wu(e){$t===null?$t=[e]:$t.push(e)}var kw=Cn.ReactCurrentBatchConfig;function Xi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function fs(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Tm(e){var t=e._init;return t(e._payload)}function jh(e){function t(y,h){if(e){var x=y.deletions;x===null?(y.deletions=[h],y.flags|=16):x.push(h)}}function n(y,h){if(!e)return null;for(;h!==null;)t(y,h),h=h.sibling;return null}function r(y,h){for(y=new Map;h!==null;)h.key!==null?y.set(h.key,h):y.set(h.index,h),h=h.sibling;return y}function i(y,h){return y=Zn(y,h),y.index=0,y.sibling=null,y}function s(y,h,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<h?(y.flags|=2,h):x):(y.flags|=2,h)):(y.flags|=1048576,h)}function a(y){return e&&y.alternate===null&&(y.flags|=2),y}function l(y,h,x,k){return h===null||h.tag!==6?(h=Ml(x,y.mode,k),h.return=y,h):(h=i(h,x),h.return=y,h)}function c(y,h,x,k){var S=x.type;return S===Jr?d(y,h,x.props.children,k,x.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Dn&&Tm(S)===h.type)?(k=i(h,x.props),k.ref=Xi(y,h,x),k.return=y,k):(k=$s(x.type,x.key,x.props,null,y.mode,k),k.ref=Xi(y,h,x),k.return=y,k)}function u(y,h,x,k){return h===null||h.tag!==4||h.stateNode.containerInfo!==x.containerInfo||h.stateNode.implementation!==x.implementation?(h=Dl(x,y.mode,k),h.return=y,h):(h=i(h,x.children||[]),h.return=y,h)}function d(y,h,x,k,S){return h===null||h.tag!==7?(h=Er(x,y.mode,k,S),h.return=y,h):(h=i(h,x),h.return=y,h)}function m(y,h,x){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ml(""+h,y.mode,x),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case rs:return x=$s(h.type,h.key,h.props,null,y.mode,x),x.ref=Xi(y,null,h),x.return=y,x;case Xr:return h=Dl(h,y.mode,x),h.return=y,h;case Dn:var k=h._init;return m(y,k(h._payload),x)}if(ro(h)||qi(h))return h=Er(h,y.mode,x,null),h.return=y,h;fs(y,h)}return null}function v(y,h,x,k){var S=h!==null?h.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:l(y,h,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case rs:return x.key===S?c(y,h,x,k):null;case Xr:return x.key===S?u(y,h,x,k):null;case Dn:return S=x._init,v(y,h,S(x._payload),k)}if(ro(x)||qi(x))return S!==null?null:d(y,h,x,k,null);fs(y,x)}return null}function f(y,h,x,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return y=y.get(x)||null,l(h,y,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case rs:return y=y.get(k.key===null?x:k.key)||null,c(h,y,k,S);case Xr:return y=y.get(k.key===null?x:k.key)||null,u(h,y,k,S);case Dn:var C=k._init;return f(y,h,x,C(k._payload),S)}if(ro(k)||qi(k))return y=y.get(x)||null,d(h,y,k,S,null);fs(h,k)}return null}function b(y,h,x,k){for(var S=null,C=null,j=h,T=h=0,I=null;j!==null&&T<x.length;T++){j.index>T?(I=j,j=null):I=j.sibling;var R=v(y,j,x[T],k);if(R===null){j===null&&(j=I);break}e&&j&&R.alternate===null&&t(y,j),h=s(R,h,T),C===null?S=R:C.sibling=R,C=R,j=I}if(T===x.length)return n(y,j),ye&&hr(y,T),S;if(j===null){for(;T<x.length;T++)j=m(y,x[T],k),j!==null&&(h=s(j,h,T),C===null?S=j:C.sibling=j,C=j);return ye&&hr(y,T),S}for(j=r(y,j);T<x.length;T++)I=f(j,y,T,x[T],k),I!==null&&(e&&I.alternate!==null&&j.delete(I.key===null?T:I.key),h=s(I,h,T),C===null?S=I:C.sibling=I,C=I);return e&&j.forEach(function(_){return t(y,_)}),ye&&hr(y,T),S}function p(y,h,x,k){var S=qi(x);if(typeof S!="function")throw Error(A(150));if(x=S.call(x),x==null)throw Error(A(151));for(var C=S=null,j=h,T=h=0,I=null,R=x.next();j!==null&&!R.done;T++,R=x.next()){j.index>T?(I=j,j=null):I=j.sibling;var _=v(y,j,R.value,k);if(_===null){j===null&&(j=I);break}e&&j&&_.alternate===null&&t(y,j),h=s(_,h,T),C===null?S=_:C.sibling=_,C=_,j=I}if(R.done)return n(y,j),ye&&hr(y,T),S;if(j===null){for(;!R.done;T++,R=x.next())R=m(y,R.value,k),R!==null&&(h=s(R,h,T),C===null?S=R:C.sibling=R,C=R);return ye&&hr(y,T),S}for(j=r(y,j);!R.done;T++,R=x.next())R=f(j,y,T,R.value,k),R!==null&&(e&&R.alternate!==null&&j.delete(R.key===null?T:R.key),h=s(R,h,T),C===null?S=R:C.sibling=R,C=R);return e&&j.forEach(function(L){return t(y,L)}),ye&&hr(y,T),S}function w(y,h,x,k){if(typeof x=="object"&&x!==null&&x.type===Jr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case rs:e:{for(var S=x.key,C=h;C!==null;){if(C.key===S){if(S=x.type,S===Jr){if(C.tag===7){n(y,C.sibling),h=i(C,x.props.children),h.return=y,y=h;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Dn&&Tm(S)===C.type){n(y,C.sibling),h=i(C,x.props),h.ref=Xi(y,C,x),h.return=y,y=h;break e}n(y,C);break}else t(y,C);C=C.sibling}x.type===Jr?(h=Er(x.props.children,y.mode,k,x.key),h.return=y,y=h):(k=$s(x.type,x.key,x.props,null,y.mode,k),k.ref=Xi(y,h,x),k.return=y,y=k)}return a(y);case Xr:e:{for(C=x.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===x.containerInfo&&h.stateNode.implementation===x.implementation){n(y,h.sibling),h=i(h,x.children||[]),h.return=y,y=h;break e}else{n(y,h);break}else t(y,h);h=h.sibling}h=Dl(x,y.mode,k),h.return=y,y=h}return a(y);case Dn:return C=x._init,w(y,h,C(x._payload),k)}if(ro(x))return b(y,h,x,k);if(qi(x))return p(y,h,x,k);fs(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,h!==null&&h.tag===6?(n(y,h.sibling),h=i(h,x),h.return=y,y=h):(n(y,h),h=Ml(x,y.mode,k),h.return=y,y=h),a(y)):n(y,h)}return w}var Ti=jh(!0),Nh=jh(!1),ia=sr(null),oa=null,si=null,Uu=null;function Hu(){Uu=si=oa=null}function Vu(e){var t=ia.current;ge(ia),e._currentValue=t}function Ec(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pi(e,t){oa=e,Uu=si=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(it=!0),e.firstContext=null)}function Nt(e){var t=e._currentValue;if(Uu!==e)if(e={context:e,memoizedValue:t,next:null},si===null){if(oa===null)throw Error(A(308));si=e,oa.dependencies={lanes:0,firstContext:e}}else si=si.next=e;return t}var yr=null;function qu(e){yr===null?yr=[e]:yr.push(e)}function Eh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,qu(t)):(n.next=i.next,i.next=n),t.interleaved=n,wn(e,r)}function wn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ln=!1;function Gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ph(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,wn(e,n)}return i=r.interleaved,i===null?(t.next=t,qu(r)):(t.next=i.next,i.next=t),r.interleaved=t,wn(e,n)}function Ms(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ru(e,n)}}function Am(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function sa(e,t,n,r){var i=e.updateQueue;Ln=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var m=i.baseState;a=0,d=u=c=null,l=s;do{var v=l.lane,f=l.eventTime;if((r&v)===v){d!==null&&(d=d.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,p=l;switch(v=t,f=n,p.tag){case 1:if(b=p.payload,typeof b=="function"){m=b.call(f,m,v);break e}m=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=p.payload,v=typeof b=="function"?b.call(f,m,v):b,v==null)break e;m=be({},m,v);break e;case 2:Ln=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else f={eventTime:f,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=f,c=m):d=d.next=f,a|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(d===null&&(c=m),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Rr|=a,e.lanes=a,e.memoizedState=m}}function Im(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var Yo={},rn=sr(Yo),Ao=sr(Yo),Io=sr(Yo);function xr(e){if(e===Yo)throw Error(A(174));return e}function Qu(e,t){switch(de(Io,t),de(Ao,e),de(rn,Yo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ac(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ac(t,e)}ge(rn),de(rn,t)}function Ai(){ge(rn),ge(Ao),ge(Io)}function Th(e){xr(Io.current);var t=xr(rn.current),n=ac(t,e.type);t!==n&&(de(Ao,e),de(rn,n))}function Yu(e){Ao.current===e&&(ge(rn),ge(Ao))}var xe=sr(0);function aa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var El=[];function Ku(){for(var e=0;e<El.length;e++)El[e]._workInProgressVersionPrimary=null;El.length=0}var Ds=Cn.ReactCurrentDispatcher,Pl=Cn.ReactCurrentBatchConfig,Ir=0,we=null,Ae=null,Me=null,la=!1,po=!1,Ro=0,Sw=0;function We(){throw Error(A(321))}function Xu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wt(e[n],t[n]))return!1;return!0}function Ju(e,t,n,r,i,s){if(Ir=s,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ds.current=e===null||e.memoizedState===null?Ew:Pw,e=n(r,i),po){s=0;do{if(po=!1,Ro=0,25<=s)throw Error(A(301));s+=1,Me=Ae=null,t.updateQueue=null,Ds.current=Tw,e=n(r,i)}while(po)}if(Ds.current=ca,t=Ae!==null&&Ae.next!==null,Ir=0,Me=Ae=we=null,la=!1,t)throw Error(A(300));return e}function Zu(){var e=Ro!==0;return Ro=0,e}function Qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?we.memoizedState=Me=e:Me=Me.next=e,Me}function Et(){if(Ae===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Me===null?we.memoizedState:Me.next;if(t!==null)Me=t,Ae=e;else{if(e===null)throw Error(A(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Me===null?we.memoizedState=Me=e:Me=Me.next=e}return Me}function Mo(e,t){return typeof t=="function"?t(e):t}function Tl(e){var t=Et(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,c=null,u=s;do{var d=u.lane;if((Ir&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,a=r):c=c.next=m,we.lanes|=d,Rr|=d}u=u.next}while(u!==null&&u!==s);c===null?a=r:c.next=l,Wt(r,t.memoizedState)||(it=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,we.lanes|=s,Rr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Al(e){var t=Et(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);Wt(s,t.memoizedState)||(it=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Ah(){}function Ih(e,t){var n=we,r=Et(),i=t(),s=!Wt(r.memoizedState,i);if(s&&(r.memoizedState=i,it=!0),r=r.queue,ed(Dh.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Do(9,Mh.bind(null,n,r,i,t),void 0,null),De===null)throw Error(A(349));Ir&30||Rh(n,t,i)}return i}function Rh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mh(e,t,n,r){t.value=n,t.getSnapshot=r,Lh(t)&&Oh(e)}function Dh(e,t,n){return n(function(){Lh(t)&&Oh(e)})}function Lh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wt(e,n)}catch{return!0}}function Oh(e){var t=wn(e,1);t!==null&&Bt(t,e,1,-1)}function Rm(e){var t=Qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:e},t.queue=e,e=e.dispatch=Nw.bind(null,we,e),[t.memoizedState,e]}function Do(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zh(){return Et().memoizedState}function Ls(e,t,n,r){var i=Qt();we.flags|=e,i.memoizedState=Do(1|t,n,void 0,r===void 0?null:r)}function Ra(e,t,n,r){var i=Et();r=r===void 0?null:r;var s=void 0;if(Ae!==null){var a=Ae.memoizedState;if(s=a.destroy,r!==null&&Xu(r,a.deps)){i.memoizedState=Do(t,n,s,r);return}}we.flags|=e,i.memoizedState=Do(1|t,n,s,r)}function Mm(e,t){return Ls(8390656,8,e,t)}function ed(e,t){return Ra(2048,8,e,t)}function Fh(e,t){return Ra(4,2,e,t)}function $h(e,t){return Ra(4,4,e,t)}function _h(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bh(e,t,n){return n=n!=null?n.concat([e]):null,Ra(4,4,_h.bind(null,t,e),n)}function td(){}function Wh(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uh(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hh(e,t,n){return Ir&21?(Wt(n,t)||(n=Yf(),we.lanes|=n,Rr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=n)}function Cw(e,t){var n=le;le=n!==0&&4>n?n:4,e(!0);var r=Pl.transition;Pl.transition={};try{e(!1),t()}finally{le=n,Pl.transition=r}}function Vh(){return Et().memoizedState}function jw(e,t,n){var r=Jn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qh(e))Gh(t,n);else if(n=Eh(e,t,n,r),n!==null){var i=Xe();Bt(n,e,r,i),Qh(n,t,r)}}function Nw(e,t,n){var r=Jn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qh(e))Gh(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,Wt(l,a)){var c=t.interleaved;c===null?(i.next=i,qu(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Eh(e,t,i,r),n!==null&&(i=Xe(),Bt(n,e,r,i),Qh(n,t,r))}}function qh(e){var t=e.alternate;return e===we||t!==null&&t===we}function Gh(e,t){po=la=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ru(e,n)}}var ca={readContext:Nt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},Ew={readContext:Nt,useCallback:function(e,t){return Qt().memoizedState=[e,t===void 0?null:t],e},useContext:Nt,useEffect:Mm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ls(4194308,4,_h.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ls(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ls(4,2,e,t)},useMemo:function(e,t){var n=Qt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=jw.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var t=Qt();return e={current:e},t.memoizedState=e},useState:Rm,useDebugValue:td,useDeferredValue:function(e){return Qt().memoizedState=e},useTransition:function(){var e=Rm(!1),t=e[0];return e=Cw.bind(null,e[1]),Qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=we,i=Qt();if(ye){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),De===null)throw Error(A(349));Ir&30||Rh(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Mm(Dh.bind(null,r,s,e),[e]),r.flags|=2048,Do(9,Mh.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Qt(),t=De.identifierPrefix;if(ye){var n=gn,r=hn;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ro++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Sw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Pw={readContext:Nt,useCallback:Wh,useContext:Nt,useEffect:ed,useImperativeHandle:Bh,useInsertionEffect:Fh,useLayoutEffect:$h,useMemo:Uh,useReducer:Tl,useRef:zh,useState:function(){return Tl(Mo)},useDebugValue:td,useDeferredValue:function(e){var t=Et();return Hh(t,Ae.memoizedState,e)},useTransition:function(){var e=Tl(Mo)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Ah,useSyncExternalStore:Ih,useId:Vh,unstable_isNewReconciler:!1},Tw={readContext:Nt,useCallback:Wh,useContext:Nt,useEffect:ed,useImperativeHandle:Bh,useInsertionEffect:Fh,useLayoutEffect:$h,useMemo:Uh,useReducer:Al,useRef:zh,useState:function(){return Al(Mo)},useDebugValue:td,useDeferredValue:function(e){var t=Et();return Ae===null?t.memoizedState=e:Hh(t,Ae.memoizedState,e)},useTransition:function(){var e=Al(Mo)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Ah,useSyncExternalStore:Ih,useId:Vh,unstable_isNewReconciler:!1};function Dt(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Pc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ma={isMounted:function(e){return(e=e._reactInternals)?Fr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=Jn(e),s=vn(r,i);s.payload=t,n!=null&&(s.callback=n),t=Kn(e,s,i),t!==null&&(Bt(t,e,i,r),Ms(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=Jn(e),s=vn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Kn(e,s,i),t!==null&&(Bt(t,e,i,r),Ms(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xe(),r=Jn(e),i=vn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Kn(e,i,r),t!==null&&(Bt(t,e,r,n),Ms(t,e,r))}};function Dm(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!No(n,r)||!No(i,s):!0}function Yh(e,t,n){var r=!1,i=nr,s=t.contextType;return typeof s=="object"&&s!==null?s=Nt(s):(i=st(t)?Tr:Ge.current,r=t.contextTypes,s=(r=r!=null)?Ei(e,i):nr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ma,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Lm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ma.enqueueReplaceState(t,t.state,null)}function Tc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Gu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Nt(s):(s=st(t)?Tr:Ge.current,i.context=Ei(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Pc(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ma.enqueueReplaceState(i,i.state,null),sa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ii(e,t){try{var n="",r=t;do n+=r0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Il(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ac(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Aw=typeof WeakMap=="function"?WeakMap:Map;function Kh(e,t,n){n=vn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){da||(da=!0,_c=r),Ac(e,t)},n}function Xh(e,t,n){n=vn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ac(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ac(e,t),typeof r!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Om(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Aw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Hw.bind(null,e,t,n),t.then(e,e))}function zm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fm(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vn(-1,1),t.tag=2,Kn(n,t,1))),n.lanes|=1),e)}var Iw=Cn.ReactCurrentOwner,it=!1;function Ye(e,t,n,r){t.child=e===null?Nh(t,null,n,r):Ti(t,e.child,n,r)}function $m(e,t,n,r,i){n=n.render;var s=t.ref;return pi(t,i),r=Ju(e,t,n,r,s,i),n=Zu(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bn(e,t,i)):(ye&&n&&_u(t),t.flags|=1,Ye(e,t,r,i),t.child)}function _m(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!cd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Jh(e,t,s,r,i)):(e=$s(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:No,n(a,r)&&e.ref===t.ref)return bn(e,t,i)}return t.flags|=1,e=Zn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Jh(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(No(s,r)&&e.ref===t.ref)if(it=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(it=!0);else return t.lanes=e.lanes,bn(e,t,i)}return Ic(e,t,n,r,i)}function Zh(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(li,ct),ct|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(li,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(li,ct),ct|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,de(li,ct),ct|=r;return Ye(e,t,i,n),t.child}function eg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ic(e,t,n,r,i){var s=st(n)?Tr:Ge.current;return s=Ei(t,s),pi(t,i),n=Ju(e,t,n,r,s,i),r=Zu(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bn(e,t,i)):(ye&&r&&_u(t),t.flags|=1,Ye(e,t,n,i),t.child)}function Bm(e,t,n,r,i){if(st(n)){var s=!0;ta(t)}else s=!1;if(pi(t,i),t.stateNode===null)Os(e,t),Yh(t,n,r),Tc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Nt(u):(u=st(n)?Tr:Ge.current,u=Ei(t,u));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Lm(t,a,r,u),Ln=!1;var v=t.memoizedState;a.state=v,sa(t,r,a,i),c=t.memoizedState,l!==r||v!==c||ot.current||Ln?(typeof d=="function"&&(Pc(t,n,d,r),c=t.memoizedState),(l=Ln||Dm(t,n,l,r,v,c,u))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ph(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Dt(t.type,l),a.props=u,m=t.pendingProps,v=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Nt(c):(c=st(n)?Tr:Ge.current,c=Ei(t,c));var f=n.getDerivedStateFromProps;(d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||v!==c)&&Lm(t,a,r,c),Ln=!1,v=t.memoizedState,a.state=v,sa(t,r,a,i);var b=t.memoizedState;l!==m||v!==b||ot.current||Ln?(typeof f=="function"&&(Pc(t,n,f,r),b=t.memoizedState),(u=Ln||Dm(t,n,u,r,v,b,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,b,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,b,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),a.props=r,a.state=b,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Rc(e,t,n,r,s,i)}function Rc(e,t,n,r,i,s){eg(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Nm(t,n,!1),bn(e,t,s);r=t.stateNode,Iw.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ti(t,e.child,null,s),t.child=Ti(t,null,l,s)):Ye(e,t,l,s),t.memoizedState=r.state,i&&Nm(t,n,!0),t.child}function tg(e){var t=e.stateNode;t.pendingContext?jm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jm(e,t.context,!1),Qu(e,t.containerInfo)}function Wm(e,t,n,r,i){return Pi(),Wu(i),t.flags|=256,Ye(e,t,n,r),t.child}var Mc={dehydrated:null,treeContext:null,retryLane:0};function Dc(e){return{baseLanes:e,cachePool:null,transitions:null}}function ng(e,t,n){var r=t.pendingProps,i=xe.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),de(xe,i&1),e===null)return Nc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Oa(a,r,0,null),e=Er(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Dc(n),t.memoizedState=Mc,e):nd(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Rw(e,t,a,r,l,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Zn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Zn(l,s):(s=Er(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?Dc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Mc,r}return s=e.child,e=s.sibling,r=Zn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function nd(e,t){return t=Oa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hs(e,t,n,r){return r!==null&&Wu(r),Ti(t,e.child,null,n),e=nd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rw(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Il(Error(A(422))),hs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Oa({mode:"visible",children:r.children},i,0,null),s=Er(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Ti(t,e.child,null,a),t.child.memoizedState=Dc(a),t.memoizedState=Mc,s);if(!(t.mode&1))return hs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(A(419)),r=Il(s,r,void 0),hs(e,t,a,r)}if(l=(a&e.childLanes)!==0,it||l){if(r=De,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,wn(e,i),Bt(r,e,i,-1))}return ld(),r=Il(Error(A(421))),hs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Vw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,mt=Yn(i.nextSibling),pt=t,ye=!0,$t=null,e!==null&&(bt[kt++]=hn,bt[kt++]=gn,bt[kt++]=Ar,hn=e.id,gn=e.overflow,Ar=t),t=nd(t,r.children),t.flags|=4096,t)}function Um(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ec(e.return,t,n)}function Rl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function rg(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Ye(e,t,r.children,n),r=xe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Um(e,n,t);else if(e.tag===19)Um(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(xe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&aa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Rl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&aa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Rl(t,!0,n,null,s);break;case"together":Rl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Os(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mw(e,t,n){switch(t.tag){case 3:tg(t),Pi();break;case 5:Th(t);break;case 1:st(t.type)&&ta(t);break;case 4:Qu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;de(ia,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(xe,xe.current&1),t.flags|=128,null):n&t.child.childLanes?ng(e,t,n):(de(xe,xe.current&1),e=bn(e,t,n),e!==null?e.sibling:null);de(xe,xe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return rg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(xe,xe.current),r)break;return null;case 22:case 23:return t.lanes=0,Zh(e,t,n)}return bn(e,t,n)}var ig,Lc,og,sg;ig=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lc=function(){};og=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,xr(rn.current);var s=null;switch(n){case"input":i=rc(e,i),r=rc(e,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=sc(e,i),r=sc(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zs)}lc(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&he("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};sg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ji(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Dw(e,t,n){var r=t.pendingProps;switch(Bu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return st(t.type)&&ea(),Ue(t),null;case 3:return r=t.stateNode,Ai(),ge(ot),ge(Ge),Ku(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ps(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$t!==null&&(Uc($t),$t=null))),Lc(e,t),Ue(t),null;case 5:Yu(t);var i=xr(Io.current);if(n=t.type,e!==null&&t.stateNode!=null)og(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Ue(t),null}if(e=xr(rn.current),ps(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Jt]=t,r[To]=s,e=(t.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<oo.length;i++)he(oo[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":Jd(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":em(r,s),he("invalid",r)}lc(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ms(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ms(r.textContent,l,e),i=["children",""+l]):xo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&he("scroll",r)}switch(n){case"input":is(r),Zd(r,s,!0);break;case"textarea":is(r),tm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Zs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Df(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Jt]=t,e[To]=r,ig(e,t,!1,!1),t.stateNode=e;e:{switch(a=cc(n,r),n){case"dialog":he("cancel",e),he("close",e),i=r;break;case"iframe":case"object":case"embed":he("load",e),i=r;break;case"video":case"audio":for(i=0;i<oo.length;i++)he(oo[i],e);i=r;break;case"source":he("error",e),i=r;break;case"img":case"image":case"link":he("error",e),he("load",e),i=r;break;case"details":he("toggle",e),i=r;break;case"input":Jd(e,r),i=rc(e,r),he("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),he("invalid",e);break;case"textarea":em(e,r),i=sc(e,r),he("invalid",e);break;default:i=r}lc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?zf(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Lf(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&wo(e,c):typeof c=="number"&&wo(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xo.hasOwnProperty(s)?c!=null&&s==="onScroll"&&he("scroll",e):c!=null&&Nu(e,s,c,a))}switch(n){case"input":is(e),Zd(e,r,!1);break;case"textarea":is(e),tm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ci(e,!!r.multiple,s,!1):r.defaultValue!=null&&ci(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)sg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=xr(Io.current),xr(rn.current),ps(t)){if(r=t.stateNode,n=t.memoizedProps,r[Jt]=t,(s=r.nodeValue!==n)&&(e=pt,e!==null))switch(e.tag){case 3:ms(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ms(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jt]=t,t.stateNode=r}return Ue(t),null;case 13:if(ge(xe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&mt!==null&&t.mode&1&&!(t.flags&128))Ch(),Pi(),t.flags|=98560,s=!1;else if(s=ps(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(A(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[Jt]=t}else Pi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),s=!1}else $t!==null&&(Uc($t),$t=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||xe.current&1?Re===0&&(Re=3):ld())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return Ai(),Lc(e,t),e===null&&Eo(t.stateNode.containerInfo),Ue(t),null;case 10:return Vu(t.type._context),Ue(t),null;case 17:return st(t.type)&&ea(),Ue(t),null;case 19:if(ge(xe),s=t.memoizedState,s===null)return Ue(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Ji(s,!1);else{if(Re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=aa(e),a!==null){for(t.flags|=128,Ji(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(xe,xe.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ee()>Ri&&(t.flags|=128,r=!0,Ji(s,!1),t.lanes=4194304)}else{if(!r)if(e=aa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ji(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ye)return Ue(t),null}else 2*Ee()-s.renderingStartTime>Ri&&n!==1073741824&&(t.flags|=128,r=!0,Ji(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ee(),t.sibling=null,n=xe.current,de(xe,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return ad(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ct&1073741824&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function Lw(e,t){switch(Bu(t),t.tag){case 1:return st(t.type)&&ea(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ai(),ge(ot),ge(Ge),Ku(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Yu(t),null;case 13:if(ge(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));Pi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(xe),null;case 4:return Ai(),null;case 10:return Vu(t.type._context),null;case 22:case 23:return ad(),null;case 24:return null;default:return null}}var gs=!1,Ve=!1,Ow=typeof WeakSet=="function"?WeakSet:Set,F=null;function ai(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(e,t,r)}else n.current=null}function Oc(e,t,n){try{n()}catch(r){je(e,t,r)}}var Hm=!1;function zw(e,t){if(xc=Ks,e=dh(),$u(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,m=e,v=null;t:for(;;){for(var f;m!==n||i!==0&&m.nodeType!==3||(l=a+i),m!==s||r!==0&&m.nodeType!==3||(c=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(f=m.firstChild)!==null;)v=m,m=f;for(;;){if(m===e)break t;if(v===n&&++u===i&&(l=a),v===s&&++d===r&&(c=a),(f=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=f}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(wc={focusedElem:e,selectionRange:n},Ks=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var p=b.memoizedProps,w=b.memoizedState,y=t.stateNode,h=y.getSnapshotBeforeUpdate(t.elementType===t.type?p:Dt(t.type,p),w);y.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(k){je(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return b=Hm,Hm=!1,b}function fo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Oc(t,n,s)}i=i.next}while(i!==r)}}function Da(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function zc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ag(e){var t=e.alternate;t!==null&&(e.alternate=null,ag(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Jt],delete t[To],delete t[Sc],delete t[xw],delete t[ww])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lg(e){return e.tag===5||e.tag===3||e.tag===4}function Vm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zs));else if(r!==4&&(e=e.child,e!==null))for(Fc(e,t,n),e=e.sibling;e!==null;)Fc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}var Oe=null,Ft=!1;function Tn(e,t,n){for(n=n.child;n!==null;)cg(e,t,n),n=n.sibling}function cg(e,t,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Na,n)}catch{}switch(n.tag){case 5:Ve||ai(n,t);case 6:var r=Oe,i=Ft;Oe=null,Tn(e,t,n),Oe=r,Ft=i,Oe!==null&&(Ft?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(Ft?(e=Oe,n=n.stateNode,e.nodeType===8?jl(e.parentNode,n):e.nodeType===1&&jl(e,n),Co(e)):jl(Oe,n.stateNode));break;case 4:r=Oe,i=Ft,Oe=n.stateNode.containerInfo,Ft=!0,Tn(e,t,n),Oe=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Oc(n,t,a),i=i.next}while(i!==r)}Tn(e,t,n);break;case 1:if(!Ve&&(ai(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){je(n,t,l)}Tn(e,t,n);break;case 21:Tn(e,t,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,Tn(e,t,n),Ve=r):Tn(e,t,n);break;default:Tn(e,t,n)}}function qm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ow),t.forEach(function(r){var i=qw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function It(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Oe=l.stateNode,Ft=!1;break e;case 3:Oe=l.stateNode.containerInfo,Ft=!0;break e;case 4:Oe=l.stateNode.containerInfo,Ft=!0;break e}l=l.return}if(Oe===null)throw Error(A(160));cg(s,a,i),Oe=null,Ft=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){je(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ug(t,e),t=t.sibling}function ug(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),Gt(e),r&4){try{fo(3,e,e.return),Da(3,e)}catch(p){je(e,e.return,p)}try{fo(5,e,e.return)}catch(p){je(e,e.return,p)}}break;case 1:It(t,e),Gt(e),r&512&&n!==null&&ai(n,n.return);break;case 5:if(It(t,e),Gt(e),r&512&&n!==null&&ai(n,n.return),e.flags&32){var i=e.stateNode;try{wo(i,"")}catch(p){je(e,e.return,p)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Rf(i,s),cc(l,a);var u=cc(l,s);for(a=0;a<c.length;a+=2){var d=c[a],m=c[a+1];d==="style"?zf(i,m):d==="dangerouslySetInnerHTML"?Lf(i,m):d==="children"?wo(i,m):Nu(i,d,m,u)}switch(l){case"input":ic(i,s);break;case"textarea":Mf(i,s);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?ci(i,!!s.multiple,f,!1):v!==!!s.multiple&&(s.defaultValue!=null?ci(i,!!s.multiple,s.defaultValue,!0):ci(i,!!s.multiple,s.multiple?[]:"",!1))}i[To]=s}catch(p){je(e,e.return,p)}}break;case 6:if(It(t,e),Gt(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(p){je(e,e.return,p)}}break;case 3:if(It(t,e),Gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Co(t.containerInfo)}catch(p){je(e,e.return,p)}break;case 4:It(t,e),Gt(e);break;case 13:It(t,e),Gt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(od=Ee())),r&4&&qm(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ve=(u=Ve)||d,It(t,e),Ve=u):It(t,e),Gt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(F=e,d=e.child;d!==null;){for(m=F=d;F!==null;){switch(v=F,f=v.child,v.tag){case 0:case 11:case 14:case 15:fo(4,v,v.return);break;case 1:ai(v,v.return);var b=v.stateNode;if(typeof b.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(p){je(r,n,p)}}break;case 5:ai(v,v.return);break;case 22:if(v.memoizedState!==null){Qm(m);continue}}f!==null?(f.return=v,F=f):Qm(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{i=m.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,c=m.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Of("display",a))}catch(p){je(e,e.return,p)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(p){je(e,e.return,p)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:It(t,e),Gt(e),r&4&&qm(e);break;case 21:break;default:It(t,e),Gt(e)}}function Gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(lg(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wo(i,""),r.flags&=-33);var s=Vm(e);$c(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Vm(e);Fc(e,l,a);break;default:throw Error(A(161))}}catch(c){je(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fw(e,t,n){F=e,dg(e)}function dg(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var i=F,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||gs;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ve;l=gs;var u=Ve;if(gs=a,(Ve=c)&&!u)for(F=i;F!==null;)a=F,c=a.child,a.tag===22&&a.memoizedState!==null?Ym(i):c!==null?(c.return=a,F=c):Ym(i);for(;s!==null;)F=s,dg(s),s=s.sibling;F=i,gs=l,Ve=u}Gm(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,F=s):Gm(e)}}function Gm(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ve||Da(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Dt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Im(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Im(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&Co(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Ve||t.flags&512&&zc(t)}catch(v){je(t,t.return,v)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Qm(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function Ym(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Da(4,t)}catch(c){je(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){je(t,i,c)}}var s=t.return;try{zc(t)}catch(c){je(t,s,c)}break;case 5:var a=t.return;try{zc(t)}catch(c){je(t,a,c)}}}catch(c){je(t,t.return,c)}if(t===e){F=null;break}var l=t.sibling;if(l!==null){l.return=t.return,F=l;break}F=t.return}}var $w=Math.ceil,ua=Cn.ReactCurrentDispatcher,rd=Cn.ReactCurrentOwner,jt=Cn.ReactCurrentBatchConfig,re=0,De=null,Pe=null,ze=0,ct=0,li=sr(0),Re=0,Lo=null,Rr=0,La=0,id=0,ho=null,tt=null,od=0,Ri=1/0,dn=null,da=!1,_c=null,Xn=null,vs=!1,Hn=null,ma=0,go=0,Bc=null,zs=-1,Fs=0;function Xe(){return re&6?Ee():zs!==-1?zs:zs=Ee()}function Jn(e){return e.mode&1?re&2&&ze!==0?ze&-ze:kw.transition!==null?(Fs===0&&(Fs=Yf()),Fs):(e=le,e!==0||(e=window.event,e=e===void 0?16:nh(e.type)),e):1}function Bt(e,t,n,r){if(50<go)throw go=0,Bc=null,Error(A(185));qo(e,n,r),(!(re&2)||e!==De)&&(e===De&&(!(re&2)&&(La|=n),Re===4&&zn(e,ze)),at(e,r),n===1&&re===0&&!(t.mode&1)&&(Ri=Ee()+500,Ia&&ar()))}function at(e,t){var n=e.callbackNode;k0(e,t);var r=Ys(e,e===De?ze:0);if(r===0)n!==null&&im(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&im(n),t===1)e.tag===0?bw(Km.bind(null,e)):bh(Km.bind(null,e)),vw(function(){!(re&6)&&ar()}),n=null;else{switch(Kf(r)){case 1:n=Iu;break;case 4:n=Gf;break;case 16:n=Qs;break;case 536870912:n=Qf;break;default:n=Qs}n=xg(n,mg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mg(e,t){if(zs=-1,Fs=0,re&6)throw Error(A(327));var n=e.callbackNode;if(fi()&&e.callbackNode!==n)return null;var r=Ys(e,e===De?ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=pa(e,r);else{t=r;var i=re;re|=2;var s=fg();(De!==e||ze!==t)&&(dn=null,Ri=Ee()+500,Nr(e,t));do try{Ww();break}catch(l){pg(e,l)}while(!0);Hu(),ua.current=s,re=i,Pe!==null?t=0:(De=null,ze=0,t=Re)}if(t!==0){if(t===2&&(i=fc(e),i!==0&&(r=i,t=Wc(e,i))),t===1)throw n=Lo,Nr(e,0),zn(e,r),at(e,Ee()),n;if(t===6)zn(e,r);else{if(i=e.current.alternate,!(r&30)&&!_w(i)&&(t=pa(e,r),t===2&&(s=fc(e),s!==0&&(r=s,t=Wc(e,s))),t===1))throw n=Lo,Nr(e,0),zn(e,r),at(e,Ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:gr(e,tt,dn);break;case 3:if(zn(e,r),(r&130023424)===r&&(t=od+500-Ee(),10<t)){if(Ys(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=kc(gr.bind(null,e,tt,dn),t);break}gr(e,tt,dn);break;case 4:if(zn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-_t(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$w(r/1960))-r,10<r){e.timeoutHandle=kc(gr.bind(null,e,tt,dn),r);break}gr(e,tt,dn);break;case 5:gr(e,tt,dn);break;default:throw Error(A(329))}}}return at(e,Ee()),e.callbackNode===n?mg.bind(null,e):null}function Wc(e,t){var n=ho;return e.current.memoizedState.isDehydrated&&(Nr(e,t).flags|=256),e=pa(e,t),e!==2&&(t=tt,tt=n,t!==null&&Uc(t)),e}function Uc(e){tt===null?tt=e:tt.push.apply(tt,e)}function _w(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Wt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zn(e,t){for(t&=~id,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_t(t),r=1<<n;e[n]=-1,t&=~r}}function Km(e){if(re&6)throw Error(A(327));fi();var t=Ys(e,0);if(!(t&1))return at(e,Ee()),null;var n=pa(e,t);if(e.tag!==0&&n===2){var r=fc(e);r!==0&&(t=r,n=Wc(e,r))}if(n===1)throw n=Lo,Nr(e,0),zn(e,t),at(e,Ee()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gr(e,tt,dn),at(e,Ee()),null}function sd(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(Ri=Ee()+500,Ia&&ar())}}function Mr(e){Hn!==null&&Hn.tag===0&&!(re&6)&&fi();var t=re;re|=1;var n=jt.transition,r=le;try{if(jt.transition=null,le=1,e)return e()}finally{le=r,jt.transition=n,re=t,!(re&6)&&ar()}}function ad(){ct=li.current,ge(li)}function Nr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gw(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(Bu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ea();break;case 3:Ai(),ge(ot),ge(Ge),Ku();break;case 5:Yu(r);break;case 4:Ai();break;case 13:ge(xe);break;case 19:ge(xe);break;case 10:Vu(r.type._context);break;case 22:case 23:ad()}n=n.return}if(De=e,Pe=e=Zn(e.current,null),ze=ct=t,Re=0,Lo=null,id=La=Rr=0,tt=ho=null,yr!==null){for(t=0;t<yr.length;t++)if(n=yr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}yr=null}return e}function pg(e,t){do{var n=Pe;try{if(Hu(),Ds.current=ca,la){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}la=!1}if(Ir=0,Me=Ae=we=null,po=!1,Ro=0,rd.current=null,n===null||n.return===null){Re=1,Lo=t,Pe=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=ze,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var v=d.alternate;v?(d.updateQueue=v.updateQueue,d.memoizedState=v.memoizedState,d.lanes=v.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=zm(a);if(f!==null){f.flags&=-257,Fm(f,a,l,s,t),f.mode&1&&Om(s,u,t),t=f,c=u;var b=t.updateQueue;if(b===null){var p=new Set;p.add(c),t.updateQueue=p}else b.add(c);break e}else{if(!(t&1)){Om(s,u,t),ld();break e}c=Error(A(426))}}else if(ye&&l.mode&1){var w=zm(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Fm(w,a,l,s,t),Wu(Ii(c,l));break e}}s=c=Ii(c,l),Re!==4&&(Re=2),ho===null?ho=[s]:ho.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var y=Kh(s,c,t);Am(s,y);break e;case 1:l=c;var h=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Xn===null||!Xn.has(x)))){s.flags|=65536,t&=-t,s.lanes|=t;var k=Xh(s,l,t);Am(s,k);break e}}s=s.return}while(s!==null)}gg(n)}catch(S){t=S,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function fg(){var e=ua.current;return ua.current=ca,e===null?ca:e}function ld(){(Re===0||Re===3||Re===2)&&(Re=4),De===null||!(Rr&268435455)&&!(La&268435455)||zn(De,ze)}function pa(e,t){var n=re;re|=2;var r=fg();(De!==e||ze!==t)&&(dn=null,Nr(e,t));do try{Bw();break}catch(i){pg(e,i)}while(!0);if(Hu(),re=n,ua.current=r,Pe!==null)throw Error(A(261));return De=null,ze=0,Re}function Bw(){for(;Pe!==null;)hg(Pe)}function Ww(){for(;Pe!==null&&!p0();)hg(Pe)}function hg(e){var t=yg(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?gg(e):Pe=t,rd.current=null}function gg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Lw(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Pe=null;return}}else if(n=Dw(n,t,ct),n!==null){Pe=n;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Re===0&&(Re=5)}function gr(e,t,n){var r=le,i=jt.transition;try{jt.transition=null,le=1,Uw(e,t,n,r)}finally{jt.transition=i,le=r}return null}function Uw(e,t,n,r){do fi();while(Hn!==null);if(re&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(S0(e,s),e===De&&(Pe=De=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vs||(vs=!0,xg(Qs,function(){return fi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jt.transition,jt.transition=null;var a=le;le=1;var l=re;re|=4,rd.current=null,zw(e,n),ug(n,e),cw(wc),Ks=!!xc,wc=xc=null,e.current=n,Fw(n),f0(),re=l,le=a,jt.transition=s}else e.current=n;if(vs&&(vs=!1,Hn=e,ma=i),s=e.pendingLanes,s===0&&(Xn=null),v0(n.stateNode),at(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(da)throw da=!1,e=_c,_c=null,e;return ma&1&&e.tag!==0&&fi(),s=e.pendingLanes,s&1?e===Bc?go++:(go=0,Bc=e):go=0,ar(),null}function fi(){if(Hn!==null){var e=Kf(ma),t=jt.transition,n=le;try{if(jt.transition=null,le=16>e?16:e,Hn===null)var r=!1;else{if(e=Hn,Hn=null,ma=0,re&6)throw Error(A(331));var i=re;for(re|=4,F=e.current;F!==null;){var s=F,a=s.child;if(F.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(F=u;F!==null;){var d=F;switch(d.tag){case 0:case 11:case 15:fo(8,d,s)}var m=d.child;if(m!==null)m.return=d,F=m;else for(;F!==null;){d=F;var v=d.sibling,f=d.return;if(ag(d),d===u){F=null;break}if(v!==null){v.return=f,F=v;break}F=f}}}var b=s.alternate;if(b!==null){var p=b.child;if(p!==null){b.child=null;do{var w=p.sibling;p.sibling=null,p=w}while(p!==null)}}F=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,F=a;else e:for(;F!==null;){if(s=F,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fo(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,F=y;break e}F=s.return}}var h=e.current;for(F=h;F!==null;){a=F;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,F=x;else e:for(a=h;F!==null;){if(l=F,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Da(9,l)}}catch(S){je(l,l.return,S)}if(l===a){F=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,F=k;break e}F=l.return}}if(re=i,ar(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Na,e)}catch{}r=!0}return r}finally{le=n,jt.transition=t}}return!1}function Xm(e,t,n){t=Ii(n,t),t=Kh(e,t,1),e=Kn(e,t,1),t=Xe(),e!==null&&(qo(e,1,t),at(e,t))}function je(e,t,n){if(e.tag===3)Xm(e,e,n);else for(;t!==null;){if(t.tag===3){Xm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xn===null||!Xn.has(r))){e=Ii(n,e),e=Xh(t,e,1),t=Kn(t,e,1),e=Xe(),t!==null&&(qo(t,1,e),at(t,e));break}}t=t.return}}function Hw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Xe(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(ze&n)===n&&(Re===4||Re===3&&(ze&130023424)===ze&&500>Ee()-od?Nr(e,0):id|=n),at(e,t)}function vg(e,t){t===0&&(e.mode&1?(t=as,as<<=1,!(as&130023424)&&(as=4194304)):t=1);var n=Xe();e=wn(e,t),e!==null&&(qo(e,t,n),at(e,n))}function Vw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vg(e,n)}function qw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),vg(e,n)}var yg;yg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ot.current)it=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return it=!1,Mw(e,t,n);it=!!(e.flags&131072)}else it=!1,ye&&t.flags&1048576&&kh(t,ra,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Os(e,t),e=t.pendingProps;var i=Ei(t,Ge.current);pi(t,n),i=Ju(null,t,r,e,i,n);var s=Zu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,st(r)?(s=!0,ta(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gu(t),i.updater=Ma,t.stateNode=i,i._reactInternals=t,Tc(t,r,e,n),t=Rc(null,t,r,!0,s,n)):(t.tag=0,ye&&s&&_u(t),Ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Os(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Qw(r),e=Dt(r,e),i){case 0:t=Ic(null,t,r,e,n);break e;case 1:t=Bm(null,t,r,e,n);break e;case 11:t=$m(null,t,r,e,n);break e;case 14:t=_m(null,t,r,Dt(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),Ic(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),Bm(e,t,r,i,n);case 3:e:{if(tg(t),e===null)throw Error(A(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Ph(e,t),sa(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Ii(Error(A(423)),t),t=Wm(e,t,r,n,i);break e}else if(r!==i){i=Ii(Error(A(424)),t),t=Wm(e,t,r,n,i);break e}else for(mt=Yn(t.stateNode.containerInfo.firstChild),pt=t,ye=!0,$t=null,n=Nh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pi(),r===i){t=bn(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return Th(t),e===null&&Nc(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,bc(r,i)?a=null:s!==null&&bc(r,s)&&(t.flags|=32),eg(e,t),Ye(e,t,a,n),t.child;case 6:return e===null&&Nc(t),null;case 13:return ng(e,t,n);case 4:return Qu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ti(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),$m(e,t,r,i,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,de(ia,r._currentValue),r._currentValue=a,s!==null)if(Wt(s.value,a)){if(s.children===i.children&&!ot.current){t=bn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=vn(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Ec(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(A(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ec(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,pi(t,n),i=Nt(i),r=r(i),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,i=Dt(r,t.pendingProps),i=Dt(r.type,i),_m(e,t,r,i,n);case 15:return Jh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dt(r,i),Os(e,t),t.tag=1,st(r)?(e=!0,ta(t)):e=!1,pi(t,n),Yh(t,r,i),Tc(t,r,i,n),Rc(null,t,r,!0,e,n);case 19:return rg(e,t,n);case 22:return Zh(e,t,n)}throw Error(A(156,t.tag))};function xg(e,t){return qf(e,t)}function Gw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,n,r){return new Gw(e,t,n,r)}function cd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qw(e){if(typeof e=="function")return cd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pu)return 11;if(e===Tu)return 14}return 2}function Zn(e,t){var n=e.alternate;return n===null?(n=Ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $s(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")cd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Jr:return Er(n.children,i,s,t);case Eu:a=8,i|=8;break;case Zl:return e=Ct(12,n,t,i|2),e.elementType=Zl,e.lanes=s,e;case ec:return e=Ct(13,n,t,i),e.elementType=ec,e.lanes=s,e;case tc:return e=Ct(19,n,t,i),e.elementType=tc,e.lanes=s,e;case Tf:return Oa(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ef:a=10;break e;case Pf:a=9;break e;case Pu:a=11;break e;case Tu:a=14;break e;case Dn:a=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Ct(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Er(e,t,n,r){return e=Ct(7,e,r,t),e.lanes=n,e}function Oa(e,t,n,r){return e=Ct(22,e,r,t),e.elementType=Tf,e.lanes=n,e.stateNode={isHidden:!1},e}function Ml(e,t,n){return e=Ct(6,e,null,t),e.lanes=n,e}function Dl(e,t,n){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fl(0),this.expirationTimes=fl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ud(e,t,n,r,i,s,a,l,c){return e=new Yw(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ct(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gu(s),e}function Kw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function wg(e){if(!e)return nr;e=e._reactInternals;e:{if(Fr(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(st(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(st(n))return wh(e,n,t)}return t}function bg(e,t,n,r,i,s,a,l,c){return e=ud(n,r,!0,e,i,s,a,l,c),e.context=wg(null),n=e.current,r=Xe(),i=Jn(n),s=vn(r,i),s.callback=t??null,Kn(n,s,i),e.current.lanes=i,qo(e,i,r),at(e,r),e}function za(e,t,n,r){var i=t.current,s=Xe(),a=Jn(i);return n=wg(n),t.context===null?t.context=n:t.pendingContext=n,t=vn(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kn(i,t,a),e!==null&&(Bt(e,i,a,s),Ms(e,i,a)),a}function fa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function dd(e,t){Jm(e,t),(e=e.alternate)&&Jm(e,t)}function Xw(){return null}var kg=typeof reportError=="function"?reportError:function(e){console.error(e)};function md(e){this._internalRoot=e}Fa.prototype.render=md.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));za(e,t,null,null)};Fa.prototype.unmount=md.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mr(function(){za(null,e,null,null)}),t[xn]=null}};function Fa(e){this._internalRoot=e}Fa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<On.length&&t!==0&&t<On[n].priority;n++);On.splice(n,0,e),n===0&&th(e)}};function pd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zm(){}function Jw(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=fa(a);s.call(u)}}var a=bg(t,r,e,0,null,!1,!1,"",Zm);return e._reactRootContainer=a,e[xn]=a.current,Eo(e.nodeType===8?e.parentNode:e),Mr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=fa(c);l.call(u)}}var c=ud(e,0,!1,null,null,!1,!1,"",Zm);return e._reactRootContainer=c,e[xn]=c.current,Eo(e.nodeType===8?e.parentNode:e),Mr(function(){za(t,c,n,r)}),c}function _a(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var c=fa(a);l.call(c)}}za(t,a,e,i)}else a=Jw(n,t,e,i,r);return fa(a)}Xf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=io(t.pendingLanes);n!==0&&(Ru(t,n|1),at(t,Ee()),!(re&6)&&(Ri=Ee()+500,ar()))}break;case 13:Mr(function(){var r=wn(e,1);if(r!==null){var i=Xe();Bt(r,e,1,i)}}),dd(e,1)}};Mu=function(e){if(e.tag===13){var t=wn(e,134217728);if(t!==null){var n=Xe();Bt(t,e,134217728,n)}dd(e,134217728)}};Jf=function(e){if(e.tag===13){var t=Jn(e),n=wn(e,t);if(n!==null){var r=Xe();Bt(n,e,t,r)}dd(e,t)}};Zf=function(){return le};eh=function(e,t){var n=le;try{return le=e,t()}finally{le=n}};dc=function(e,t,n){switch(t){case"input":if(ic(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Aa(r);if(!i)throw Error(A(90));If(r),ic(r,i)}}}break;case"textarea":Mf(e,n);break;case"select":t=n.value,t!=null&&ci(e,!!n.multiple,t,!1)}};_f=sd;Bf=Mr;var Zw={usingClientEntryPoint:!1,Events:[Qo,ni,Aa,Ff,$f,sd]},Zi={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eb={bundleType:Zi.bundleType,version:Zi.version,rendererPackageName:Zi.rendererPackageName,rendererConfig:Zi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hf(e),e===null?null:e.stateNode},findFiberByHostInstance:Zi.findFiberByHostInstance||Xw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ys.isDisabled&&ys.supportsFiber)try{Na=ys.inject(eb),nn=ys}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zw;gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pd(t))throw Error(A(200));return Kw(e,t,null,n)};gt.createRoot=function(e,t){if(!pd(e))throw Error(A(299));var n=!1,r="",i=kg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ud(e,1,!1,null,null,n,!1,r,i),e[xn]=t.current,Eo(e.nodeType===8?e.parentNode:e),new md(t)};gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Hf(t),e=e===null?null:e.stateNode,e};gt.flushSync=function(e){return Mr(e)};gt.hydrate=function(e,t,n){if(!$a(t))throw Error(A(200));return _a(null,e,t,!0,n)};gt.hydrateRoot=function(e,t,n){if(!pd(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=kg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=bg(t,null,e,1,n??null,i,!1,s,a),e[xn]=t.current,Eo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Fa(t)};gt.render=function(e,t,n){if(!$a(t))throw Error(A(200));return _a(null,e,t,!1,n)};gt.unmountComponentAtNode=function(e){if(!$a(e))throw Error(A(40));return e._reactRootContainer?(Mr(function(){_a(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1};gt.unstable_batchedUpdates=sd;gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$a(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return _a(e,t,n,!1,r)};gt.version="18.3.1-next-f1338f8080-20240426";function Sg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sg)}catch(e){console.error(e)}}Sg(),Sf.exports=gt;var $r=Sf.exports;const Cg=df($r);var jg,ep=$r;jg=ep.createRoot,ep.hydrateRoot;const tb=1,nb=1e6;let Ll=0;function rb(){return Ll=(Ll+1)%Number.MAX_SAFE_INTEGER,Ll.toString()}const Ol=new Map,tp=e=>{if(Ol.has(e))return;const t=setTimeout(()=>{Ol.delete(e),vo({type:"REMOVE_TOAST",toastId:e})},nb);Ol.set(e,t)},ib=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,tb)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?tp(n):e.toasts.forEach(r=>{tp(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},_s=[];let Bs={toasts:[]};function vo(e){Bs=ib(Bs,e),_s.forEach(t=>{t(Bs)})}function St({...e}){const t=rb(),n=i=>vo({type:"UPDATE_TOAST",toast:{...i,id:t}}),r=()=>vo({type:"DISMISS_TOAST",toastId:t});return vo({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:i=>{i||r()}}}),{id:t,dismiss:r,update:n}}function ob(){const[e,t]=g.useState(Bs);return g.useEffect(()=>(_s.push(t),()=>{const n=_s.indexOf(t);n>-1&&_s.splice(n,1)}),[e]),{...e,toast:St,dismiss:n=>vo({type:"DISMISS_TOAST",toastId:n})}}function te(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function np(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Ng(...e){return t=>{let n=!1;const r=e.map(i=>{const s=np(i,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let i=0;i<r.length;i++){const s=r[i];typeof s=="function"?s():np(e[i],null)}}}}function Ne(...e){return g.useCallback(Ng(...e),e)}function Ko(e,t=[]){let n=[];function r(s,a){const l=g.createContext(a),c=n.length;n=[...n,a];const u=m=>{var y;const{scope:v,children:f,...b}=m,p=((y=v==null?void 0:v[e])==null?void 0:y[c])||l,w=g.useMemo(()=>b,Object.values(b));return o.jsx(p.Provider,{value:w,children:f})};u.displayName=s+"Provider";function d(m,v){var p;const f=((p=v==null?void 0:v[e])==null?void 0:p[c])||l,b=g.useContext(f);if(b)return b;if(a!==void 0)return a;throw new Error(`\`${m}\` must be used within \`${s}\``)}return[u,d]}const i=()=>{const s=n.map(a=>g.createContext(a));return function(l){const c=(l==null?void 0:l[e])||s;return g.useMemo(()=>({[`__scope${e}`]:{...l,[e]:c}}),[l,c])}};return i.scopeName=e,[r,sb(i,...t)]}function sb(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(s){const a=r.reduce((l,{useScope:c,scopeName:u})=>{const m=c(s)[`__scope${u}`];return{...l,...m}},{});return g.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}function Oo(e){const t=lb(e),n=g.forwardRef((r,i)=>{const{children:s,...a}=r,l=g.Children.toArray(s),c=l.find(ub);if(c){const u=c.props.children,d=l.map(m=>m===c?g.Children.count(u)>1?g.Children.only(null):g.isValidElement(u)?u.props.children:null:m);return o.jsx(t,{...a,ref:i,children:g.isValidElement(u)?g.cloneElement(u,void 0,d):null})}return o.jsx(t,{...a,ref:i,children:s})});return n.displayName=`${e}.Slot`,n}var ab=Oo("Slot");function lb(e){const t=g.forwardRef((n,r)=>{const{children:i,...s}=n;if(g.isValidElement(i)){const a=mb(i),l=db(s,i.props);return i.type!==g.Fragment&&(l.ref=r?Ng(r,a):a),g.cloneElement(i,l)}return g.Children.count(i)>1?g.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Eg=Symbol("radix.slottable");function cb(e){const t=({children:n})=>o.jsx(o.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=Eg,t}function ub(e){return g.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Eg}function db(e,t){const n={...t};for(const r in t){const i=e[r],s=t[r];/^on[A-Z]/.test(r)?i&&s?n[r]=(...l)=>{const c=s(...l);return i(...l),c}:i&&(n[r]=i):r==="style"?n[r]={...i,...s}:r==="className"&&(n[r]=[i,s].filter(Boolean).join(" "))}return{...e,...n}}function mb(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Pg(e){const t=e+"CollectionProvider",[n,r]=Ko(t),[i,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=p=>{const{scope:w,children:y}=p,h=M.useRef(null),x=M.useRef(new Map).current;return o.jsx(i,{scope:w,itemMap:x,collectionRef:h,children:y})};a.displayName=t;const l=e+"CollectionSlot",c=Oo(l),u=M.forwardRef((p,w)=>{const{scope:y,children:h}=p,x=s(l,y),k=Ne(w,x.collectionRef);return o.jsx(c,{ref:k,children:h})});u.displayName=l;const d=e+"CollectionItemSlot",m="data-radix-collection-item",v=Oo(d),f=M.forwardRef((p,w)=>{const{scope:y,children:h,...x}=p,k=M.useRef(null),S=Ne(w,k),C=s(d,y);return M.useEffect(()=>(C.itemMap.set(k,{ref:k,...x}),()=>void C.itemMap.delete(k))),o.jsx(v,{[m]:"",ref:S,children:h})});f.displayName=d;function b(p){const w=s(e+"CollectionConsumer",p);return M.useCallback(()=>{const h=w.collectionRef.current;if(!h)return[];const x=Array.from(h.querySelectorAll(`[${m}]`));return Array.from(w.itemMap.values()).sort((C,j)=>x.indexOf(C.ref.current)-x.indexOf(j.ref.current))},[w.collectionRef,w.itemMap])}return[{Provider:a,Slot:u,ItemSlot:f},b,r]}var pb=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ce=pb.reduce((e,t)=>{const n=Oo(`Primitive.${t}`),r=g.forwardRef((i,s)=>{const{asChild:a,...l}=i,c=a?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),o.jsx(c,{...l,ref:s})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Tg(e,t){e&&$r.flushSync(()=>e.dispatchEvent(t))}function Ut(e){const t=g.useRef(e);return g.useEffect(()=>{t.current=e}),g.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function fb(e,t=globalThis==null?void 0:globalThis.document){const n=Ut(e);g.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var hb="DismissableLayer",Hc="dismissableLayer.update",gb="dismissableLayer.pointerDownOutside",vb="dismissableLayer.focusOutside",rp,Ag=g.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ba=g.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:a,onDismiss:l,...c}=e,u=g.useContext(Ag),[d,m]=g.useState(null),v=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,f]=g.useState({}),b=Ne(t,j=>m(j)),p=Array.from(u.layers),[w]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),y=p.indexOf(w),h=d?p.indexOf(d):-1,x=u.layersWithOutsidePointerEventsDisabled.size>0,k=h>=y,S=xb(j=>{const T=j.target,I=[...u.branches].some(R=>R.contains(T));!k||I||(i==null||i(j),a==null||a(j),j.defaultPrevented||l==null||l())},v),C=wb(j=>{const T=j.target;[...u.branches].some(R=>R.contains(T))||(s==null||s(j),a==null||a(j),j.defaultPrevented||l==null||l())},v);return fb(j=>{h===u.layers.size-1&&(r==null||r(j),!j.defaultPrevented&&l&&(j.preventDefault(),l()))},v),g.useEffect(()=>{if(d)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(rp=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),ip(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=rp)}},[d,v,n,u]),g.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),ip())},[d,u]),g.useEffect(()=>{const j=()=>f({});return document.addEventListener(Hc,j),()=>document.removeEventListener(Hc,j)},[]),o.jsx(ce.div,{...c,ref:b,style:{pointerEvents:x?k?"auto":"none":void 0,...e.style},onFocusCapture:te(e.onFocusCapture,C.onFocusCapture),onBlurCapture:te(e.onBlurCapture,C.onBlurCapture),onPointerDownCapture:te(e.onPointerDownCapture,S.onPointerDownCapture)})});Ba.displayName=hb;var yb="DismissableLayerBranch",Ig=g.forwardRef((e,t)=>{const n=g.useContext(Ag),r=g.useRef(null),i=Ne(t,r);return g.useEffect(()=>{const s=r.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),o.jsx(ce.div,{...e,ref:i})});Ig.displayName=yb;function xb(e,t=globalThis==null?void 0:globalThis.document){const n=Ut(e),r=g.useRef(!1),i=g.useRef(()=>{});return g.useEffect(()=>{const s=l=>{if(l.target&&!r.current){let c=function(){Rg(gb,n,u,{discrete:!0})};const u={originalEvent:l};l.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=c,t.addEventListener("click",i.current,{once:!0})):c()}else t.removeEventListener("click",i.current);r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",s),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function wb(e,t=globalThis==null?void 0:globalThis.document){const n=Ut(e),r=g.useRef(!1);return g.useEffect(()=>{const i=s=>{s.target&&!r.current&&Rg(vb,n,{originalEvent:s},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function ip(){const e=new CustomEvent(Hc);document.dispatchEvent(e)}function Rg(e,t,n,{discrete:r}){const i=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?Tg(i,s):i.dispatchEvent(s)}var bb=Ba,kb=Ig,$e=globalThis!=null&&globalThis.document?g.useLayoutEffect:()=>{},Sb="Portal",fd=g.forwardRef((e,t)=>{var l;const{container:n,...r}=e,[i,s]=g.useState(!1);$e(()=>s(!0),[]);const a=n||i&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return a?Cg.createPortal(o.jsx(ce.div,{...r,ref:t}),a):null});fd.displayName=Sb;function Cb(e,t){return g.useReducer((n,r)=>t[n][r]??n,e)}var hd=e=>{const{present:t,children:n}=e,r=jb(t),i=typeof n=="function"?n({present:r.isPresent}):g.Children.only(n),s=Ne(r.ref,Nb(i));return typeof n=="function"||r.isPresent?g.cloneElement(i,{ref:s}):null};hd.displayName="Presence";function jb(e){const[t,n]=g.useState(),r=g.useRef(null),i=g.useRef(e),s=g.useRef("none"),a=e?"mounted":"unmounted",[l,c]=Cb(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return g.useEffect(()=>{const u=xs(r.current);s.current=l==="mounted"?u:"none"},[l]),$e(()=>{const u=r.current,d=i.current;if(d!==e){const v=s.current,f=xs(u);e?c("MOUNT"):f==="none"||(u==null?void 0:u.display)==="none"?c("UNMOUNT"):c(d&&v!==f?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,c]),$e(()=>{if(t){let u;const d=t.ownerDocument.defaultView??window,m=f=>{const p=xs(r.current).includes(f.animationName);if(f.target===t&&p&&(c("ANIMATION_END"),!i.current)){const w=t.style.animationFillMode;t.style.animationFillMode="forwards",u=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=w)})}},v=f=>{f.target===t&&(s.current=xs(r.current))};return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",m),t.addEventListener("animationend",m),()=>{d.clearTimeout(u),t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",m),t.removeEventListener("animationend",m)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:g.useCallback(u=>{r.current=u?getComputedStyle(u):null,n(u)},[])}}function xs(e){return(e==null?void 0:e.animationName)||"none"}function Nb(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Eb=Su[" useInsertionEffect ".trim().toString()]||$e;function Vc({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[i,s,a]=Pb({defaultProp:t,onChange:n}),l=e!==void 0,c=l?e:i;{const d=g.useRef(e!==void 0);g.useEffect(()=>{const m=d.current;m!==l&&console.warn(`${r} is changing from ${m?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=l},[l,r])}const u=g.useCallback(d=>{var m;if(l){const v=Tb(d)?d(e):d;v!==e&&((m=a.current)==null||m.call(a,v))}else s(d)},[l,e,s,a]);return[c,u]}function Pb({defaultProp:e,onChange:t}){const[n,r]=g.useState(e),i=g.useRef(n),s=g.useRef(t);return Eb(()=>{s.current=t},[t]),g.useEffect(()=>{var a;i.current!==n&&((a=s.current)==null||a.call(s,n),i.current=n)},[n,i]),[n,r,s]}function Tb(e){return typeof e=="function"}var Mg=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Ab="VisuallyHidden",Wa=g.forwardRef((e,t)=>o.jsx(ce.span,{...e,ref:t,style:{...Mg,...e.style}}));Wa.displayName=Ab;var Ib=Wa,gd="ToastProvider",[vd,Rb,Mb]=Pg("Toast"),[Dg,nE]=Ko("Toast",[Mb]),[Db,Ua]=Dg(gd),Lg=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:s=50,children:a}=e,[l,c]=g.useState(null),[u,d]=g.useState(0),m=g.useRef(!1),v=g.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${gd}\`. Expected non-empty \`string\`.`),o.jsx(vd.Provider,{scope:t,children:o.jsx(Db,{scope:t,label:n,duration:r,swipeDirection:i,swipeThreshold:s,toastCount:u,viewport:l,onViewportChange:c,onToastAdd:g.useCallback(()=>d(f=>f+1),[]),onToastRemove:g.useCallback(()=>d(f=>f-1),[]),isFocusedToastEscapeKeyDownRef:m,isClosePausedRef:v,children:a})})};Lg.displayName=gd;var Og="ToastViewport",Lb=["F8"],qc="toast.viewportPause",Gc="toast.viewportResume",zg=g.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=Lb,label:i="Notifications ({hotkey})",...s}=e,a=Ua(Og,n),l=Rb(n),c=g.useRef(null),u=g.useRef(null),d=g.useRef(null),m=g.useRef(null),v=Ne(t,m,a.onViewportChange),f=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),b=a.toastCount>0;g.useEffect(()=>{const w=y=>{var x;r.length!==0&&r.every(k=>y[k]||y.code===k)&&((x=m.current)==null||x.focus())};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[r]),g.useEffect(()=>{const w=c.current,y=m.current;if(b&&w&&y){const h=()=>{if(!a.isClosePausedRef.current){const C=new CustomEvent(qc);y.dispatchEvent(C),a.isClosePausedRef.current=!0}},x=()=>{if(a.isClosePausedRef.current){const C=new CustomEvent(Gc);y.dispatchEvent(C),a.isClosePausedRef.current=!1}},k=C=>{!w.contains(C.relatedTarget)&&x()},S=()=>{w.contains(document.activeElement)||x()};return w.addEventListener("focusin",h),w.addEventListener("focusout",k),w.addEventListener("pointermove",h),w.addEventListener("pointerleave",S),window.addEventListener("blur",h),window.addEventListener("focus",x),()=>{w.removeEventListener("focusin",h),w.removeEventListener("focusout",k),w.removeEventListener("pointermove",h),w.removeEventListener("pointerleave",S),window.removeEventListener("blur",h),window.removeEventListener("focus",x)}}},[b,a.isClosePausedRef]);const p=g.useCallback(({tabbingDirection:w})=>{const h=l().map(x=>{const k=x.ref.current,S=[k,...Qb(k)];return w==="forwards"?S:S.reverse()});return(w==="forwards"?h.reverse():h).flat()},[l]);return g.useEffect(()=>{const w=m.current;if(w){const y=h=>{var S,C,j;const x=h.altKey||h.ctrlKey||h.metaKey;if(h.key==="Tab"&&!x){const T=document.activeElement,I=h.shiftKey;if(h.target===w&&I){(S=u.current)==null||S.focus();return}const L=p({tabbingDirection:I?"backwards":"forwards"}),U=L.findIndex(D=>D===T);zl(L.slice(U+1))?h.preventDefault():I?(C=u.current)==null||C.focus():(j=d.current)==null||j.focus()}};return w.addEventListener("keydown",y),()=>w.removeEventListener("keydown",y)}},[l,p]),o.jsxs(kb,{ref:c,role:"region","aria-label":i.replace("{hotkey}",f),tabIndex:-1,style:{pointerEvents:b?void 0:"none"},children:[b&&o.jsx(Qc,{ref:u,onFocusFromOutsideViewport:()=>{const w=p({tabbingDirection:"forwards"});zl(w)}}),o.jsx(vd.Slot,{scope:n,children:o.jsx(ce.ol,{tabIndex:-1,...s,ref:v})}),b&&o.jsx(Qc,{ref:d,onFocusFromOutsideViewport:()=>{const w=p({tabbingDirection:"backwards"});zl(w)}})]})});zg.displayName=Og;var Fg="ToastFocusProxy",Qc=g.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...i}=e,s=Ua(Fg,n);return o.jsx(Wa,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:a=>{var u;const l=a.relatedTarget;!((u=s.viewport)!=null&&u.contains(l))&&r()}})});Qc.displayName=Fg;var Xo="Toast",Ob="toast.swipeStart",zb="toast.swipeMove",Fb="toast.swipeCancel",$b="toast.swipeEnd",$g=g.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:i,onOpenChange:s,...a}=e,[l,c]=Vc({prop:r,defaultProp:i??!0,onChange:s,caller:Xo});return o.jsx(hd,{present:n||l,children:o.jsx(Wb,{open:l,...a,ref:t,onClose:()=>c(!1),onPause:Ut(e.onPause),onResume:Ut(e.onResume),onSwipeStart:te(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:te(e.onSwipeMove,u=>{const{x:d,y:m}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${m}px`)}),onSwipeCancel:te(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:te(e.onSwipeEnd,u=>{const{x:d,y:m}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${m}px`),c(!1)})})})});$g.displayName=Xo;var[_b,Bb]=Dg(Xo,{onClose(){}}),Wb=g.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:i,open:s,onClose:a,onEscapeKeyDown:l,onPause:c,onResume:u,onSwipeStart:d,onSwipeMove:m,onSwipeCancel:v,onSwipeEnd:f,...b}=e,p=Ua(Xo,n),[w,y]=g.useState(null),h=Ne(t,D=>y(D)),x=g.useRef(null),k=g.useRef(null),S=i||p.duration,C=g.useRef(0),j=g.useRef(S),T=g.useRef(0),{onToastAdd:I,onToastRemove:R}=p,_=Ut(()=>{var V;(w==null?void 0:w.contains(document.activeElement))&&((V=p.viewport)==null||V.focus()),a()}),L=g.useCallback(D=>{!D||D===1/0||(window.clearTimeout(T.current),C.current=new Date().getTime(),T.current=window.setTimeout(_,D))},[_]);g.useEffect(()=>{const D=p.viewport;if(D){const V=()=>{L(j.current),u==null||u()},$=()=>{const W=new Date().getTime()-C.current;j.current=j.current-W,window.clearTimeout(T.current),c==null||c()};return D.addEventListener(qc,$),D.addEventListener(Gc,V),()=>{D.removeEventListener(qc,$),D.removeEventListener(Gc,V)}}},[p.viewport,S,c,u,L]),g.useEffect(()=>{s&&!p.isClosePausedRef.current&&L(S)},[s,S,p.isClosePausedRef,L]),g.useEffect(()=>(I(),()=>R()),[I,R]);const U=g.useMemo(()=>w?qg(w):null,[w]);return p.viewport?o.jsxs(o.Fragment,{children:[U&&o.jsx(Ub,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:U}),o.jsx(_b,{scope:n,onClose:_,children:$r.createPortal(o.jsx(vd.ItemSlot,{scope:n,children:o.jsx(bb,{asChild:!0,onEscapeKeyDown:te(l,()=>{p.isFocusedToastEscapeKeyDownRef.current||_(),p.isFocusedToastEscapeKeyDownRef.current=!1}),children:o.jsx(ce.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":p.swipeDirection,...b,ref:h,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:te(e.onKeyDown,D=>{D.key==="Escape"&&(l==null||l(D.nativeEvent),D.nativeEvent.defaultPrevented||(p.isFocusedToastEscapeKeyDownRef.current=!0,_()))}),onPointerDown:te(e.onPointerDown,D=>{D.button===0&&(x.current={x:D.clientX,y:D.clientY})}),onPointerMove:te(e.onPointerMove,D=>{if(!x.current)return;const V=D.clientX-x.current.x,$=D.clientY-x.current.y,W=!!k.current,N=["left","right"].includes(p.swipeDirection),P=["left","up"].includes(p.swipeDirection)?Math.min:Math.max,O=N?P(0,V):0,H=N?0:P(0,$),B=D.pointerType==="touch"?10:2,X={x:O,y:H},G={originalEvent:D,delta:X};W?(k.current=X,ws(zb,m,G,{discrete:!1})):op(X,p.swipeDirection,B)?(k.current=X,ws(Ob,d,G,{discrete:!1}),D.target.setPointerCapture(D.pointerId)):(Math.abs(V)>B||Math.abs($)>B)&&(x.current=null)}),onPointerUp:te(e.onPointerUp,D=>{const V=k.current,$=D.target;if($.hasPointerCapture(D.pointerId)&&$.releasePointerCapture(D.pointerId),k.current=null,x.current=null,V){const W=D.currentTarget,N={originalEvent:D,delta:V};op(V,p.swipeDirection,p.swipeThreshold)?ws($b,f,N,{discrete:!0}):ws(Fb,v,N,{discrete:!0}),W.addEventListener("click",P=>P.preventDefault(),{once:!0})}})})})}),p.viewport)})]}):null}),Ub=e=>{const{__scopeToast:t,children:n,...r}=e,i=Ua(Xo,t),[s,a]=g.useState(!1),[l,c]=g.useState(!1);return qb(()=>a(!0)),g.useEffect(()=>{const u=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(u)},[]),l?null:o.jsx(fd,{asChild:!0,children:o.jsx(Wa,{...r,children:s&&o.jsxs(o.Fragment,{children:[i.label," ",n]})})})},Hb="ToastTitle",_g=g.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return o.jsx(ce.div,{...r,ref:t})});_g.displayName=Hb;var Vb="ToastDescription",Bg=g.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return o.jsx(ce.div,{...r,ref:t})});Bg.displayName=Vb;var Wg="ToastAction",Ug=g.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?o.jsx(Vg,{altText:n,asChild:!0,children:o.jsx(yd,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${Wg}\`. Expected non-empty \`string\`.`),null)});Ug.displayName=Wg;var Hg="ToastClose",yd=g.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,i=Bb(Hg,n);return o.jsx(Vg,{asChild:!0,children:o.jsx(ce.button,{type:"button",...r,ref:t,onClick:te(e.onClick,i.onClose)})})});yd.displayName=Hg;var Vg=g.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...i}=e;return o.jsx(ce.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...i,ref:t})});function qg(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),Gb(r)){const i=r.ariaHidden||r.hidden||r.style.display==="none",s=r.dataset.radixToastAnnounceExclude==="";if(!i)if(s){const a=r.dataset.radixToastAnnounceAlt;a&&t.push(a)}else t.push(...qg(r))}}),t}function ws(e,t,n,{discrete:r}){const i=n.originalEvent.currentTarget,s=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?Tg(i,s):i.dispatchEvent(s)}var op=(e,t,n=0)=>{const r=Math.abs(e.x),i=Math.abs(e.y),s=r>i;return t==="left"||t==="right"?s&&r>n:!s&&i>n};function qb(e=()=>{}){const t=Ut(e);$e(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function Gb(e){return e.nodeType===e.ELEMENT_NODE}function Qb(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function zl(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var Yb=Lg,Gg=zg,Qg=$g,Yg=_g,Kg=Bg,Xg=Ug,Jg=yd;function Zg(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Zg(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function ev(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Zg(e))&&(r&&(r+=" "),r+=t);return r}const sp=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,ap=ev,Ha=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return ap(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:s}=t,a=Object.keys(i).map(u=>{const d=n==null?void 0:n[u],m=s==null?void 0:s[u];if(d===null)return null;const v=sp(d)||sp(m);return i[u][v]}),l=n&&Object.entries(n).reduce((u,d)=>{let[m,v]=d;return v===void 0||(u[m]=v),u},{}),c=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,d)=>{let{class:m,className:v,...f}=d;return Object.entries(f).every(b=>{let[p,w]=b;return Array.isArray(w)?w.includes({...s,...l}[p]):{...s,...l}[p]===w})?[...u,m,v]:u},[]);return ap(e,a,c,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tv=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=g.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:a,...l},c)=>g.createElement("svg",{ref:c,...Xb,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:tv("lucide",i),...l},[...a.map(([u,d])=>g.createElement(u,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=(e,t)=>{const n=g.forwardRef(({className:r,...i},s)=>g.createElement(Jb,{ref:s,iconNode:t,className:tv(`lucide-${Kb(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=q("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=q("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=q("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=q("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=q("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=q("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=q("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=q("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=q("ChartNoAxesColumnIncreasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=q("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=q("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=q("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=q("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=q("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=q("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=q("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=q("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=q("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=q("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=q("FileDown",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=q("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=q("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=q("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=q("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=q("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=q("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=q("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=q("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=q("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=q("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=q("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=q("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=q("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=q("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=q("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=q("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=q("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=q("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=q("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=q("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=q("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=q("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=q("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=q("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=q("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=q("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),bd="-",v1=e=>{const t=x1(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:a=>{const l=a.split(bd);return l[0]===""&&l.length!==1&&l.shift(),dv(l,t)||y1(a)},getConflictingClassGroupIds:(a,l)=>{const c=n[a]||[];return l&&r[a]?[...c,...r[a]]:c}}},dv=(e,t)=>{var a;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),i=r?dv(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const s=e.join(bd);return(a=t.validators.find(({validator:l})=>l(s)))==null?void 0:a.classGroupId},pp=/^\[(.+)\]$/,y1=e=>{if(pp.test(e)){const t=pp.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},x1=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return b1(Object.entries(e.classGroups),n).forEach(([s,a])=>{Zc(a,r,s,t)}),r},Zc=(e,t,n,r)=>{e.forEach(i=>{if(typeof i=="string"){const s=i===""?t:fp(t,i);s.classGroupId=n;return}if(typeof i=="function"){if(w1(i)){Zc(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([s,a])=>{Zc(a,fp(t,s),n,r)})})},fp=(e,t)=>{let n=e;return t.split(bd).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},w1=e=>e.isThemeGetter,b1=(e,t)=>t?e.map(([n,r])=>{const i=r.map(s=>typeof s=="string"?t+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([a,l])=>[t+a,l])):s);return[n,i]}):e,k1=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const i=(s,a)=>{n.set(s,a),t++,t>e&&(t=0,r=n,n=new Map)};return{get(s){let a=n.get(s);if(a!==void 0)return a;if((a=r.get(s))!==void 0)return i(s,a),a},set(s,a){n.has(s)?n.set(s,a):i(s,a)}}},mv="!",S1=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,i=t[0],s=t.length,a=l=>{const c=[];let u=0,d=0,m;for(let w=0;w<l.length;w++){let y=l[w];if(u===0){if(y===i&&(r||l.slice(w,w+s)===t)){c.push(l.slice(d,w)),d=w+s;continue}if(y==="/"){m=w;continue}}y==="["?u++:y==="]"&&u--}const v=c.length===0?l:l.substring(d),f=v.startsWith(mv),b=f?v.substring(1):v,p=m&&m>d?m-d:void 0;return{modifiers:c,hasImportantModifier:f,baseClassName:b,maybePostfixModifierPosition:p}};return n?l=>n({className:l,parseClassName:a}):a},C1=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},j1=e=>({cache:k1(e.cacheSize),parseClassName:S1(e),...v1(e)}),N1=/\s+/,E1=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,s=[],a=e.trim().split(N1);let l="";for(let c=a.length-1;c>=0;c-=1){const u=a[c],{modifiers:d,hasImportantModifier:m,baseClassName:v,maybePostfixModifierPosition:f}=n(u);let b=!!f,p=r(b?v.substring(0,f):v);if(!p){if(!b){l=u+(l.length>0?" "+l:l);continue}if(p=r(v),!p){l=u+(l.length>0?" "+l:l);continue}b=!1}const w=C1(d).join(":"),y=m?w+mv:w,h=y+p;if(s.includes(h))continue;s.push(h);const x=i(p,b);for(let k=0;k<x.length;++k){const S=x[k];s.push(y+S)}l=u+(l.length>0?" "+l:l)}return l};function P1(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=pv(t))&&(r&&(r+=" "),r+=n);return r}const pv=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=pv(e[r]))&&(n&&(n+=" "),n+=t);return n};function T1(e,...t){let n,r,i,s=a;function a(c){const u=t.reduce((d,m)=>m(d),e());return n=j1(u),r=n.cache.get,i=n.cache.set,s=l,l(c)}function l(c){const u=r(c);if(u)return u;const d=E1(c,n);return i(c,d),d}return function(){return s(P1.apply(null,arguments))}}const fe=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},fv=/^\[(?:([a-z-]+):)?(.+)\]$/i,A1=/^\d+\/\d+$/,I1=new Set(["px","full","screen"]),R1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,M1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,D1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,L1=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,O1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ln=e=>hi(e)||I1.has(e)||A1.test(e),An=e=>Fi(e,"length",H1),hi=e=>!!e&&!Number.isNaN(Number(e)),$l=e=>Fi(e,"number",hi),eo=e=>!!e&&Number.isInteger(Number(e)),z1=e=>e.endsWith("%")&&hi(e.slice(0,-1)),J=e=>fv.test(e),In=e=>R1.test(e),F1=new Set(["length","size","percentage"]),$1=e=>Fi(e,F1,hv),_1=e=>Fi(e,"position",hv),B1=new Set(["image","url"]),W1=e=>Fi(e,B1,q1),U1=e=>Fi(e,"",V1),to=()=>!0,Fi=(e,t,n)=>{const r=fv.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},H1=e=>M1.test(e)&&!D1.test(e),hv=()=>!1,V1=e=>L1.test(e),q1=e=>O1.test(e),G1=()=>{const e=fe("colors"),t=fe("spacing"),n=fe("blur"),r=fe("brightness"),i=fe("borderColor"),s=fe("borderRadius"),a=fe("borderSpacing"),l=fe("borderWidth"),c=fe("contrast"),u=fe("grayscale"),d=fe("hueRotate"),m=fe("invert"),v=fe("gap"),f=fe("gradientColorStops"),b=fe("gradientColorStopPositions"),p=fe("inset"),w=fe("margin"),y=fe("opacity"),h=fe("padding"),x=fe("saturate"),k=fe("scale"),S=fe("sepia"),C=fe("skew"),j=fe("space"),T=fe("translate"),I=()=>["auto","contain","none"],R=()=>["auto","hidden","clip","visible","scroll"],_=()=>["auto",J,t],L=()=>[J,t],U=()=>["",ln,An],D=()=>["auto",hi,J],V=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],$=()=>["solid","dashed","dotted","double","none"],W=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],N=()=>["start","end","center","between","around","evenly","stretch"],P=()=>["","0",J],O=()=>["auto","avoid","all","avoid-page","page","left","right","column"],H=()=>[hi,J];return{cacheSize:500,separator:":",theme:{colors:[to],spacing:[ln,An],blur:["none","",In,J],brightness:H(),borderColor:[e],borderRadius:["none","","full",In,J],borderSpacing:L(),borderWidth:U(),contrast:H(),grayscale:P(),hueRotate:H(),invert:P(),gap:L(),gradientColorStops:[e],gradientColorStopPositions:[z1,An],inset:_(),margin:_(),opacity:H(),padding:L(),saturate:H(),scale:H(),sepia:P(),skew:H(),space:L(),translate:L()},classGroups:{aspect:[{aspect:["auto","square","video",J]}],container:["container"],columns:[{columns:[In]}],"break-after":[{"break-after":O()}],"break-before":[{"break-before":O()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...V(),J]}],overflow:[{overflow:R()}],"overflow-x":[{"overflow-x":R()}],"overflow-y":[{"overflow-y":R()}],overscroll:[{overscroll:I()}],"overscroll-x":[{"overscroll-x":I()}],"overscroll-y":[{"overscroll-y":I()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[p]}],"inset-x":[{"inset-x":[p]}],"inset-y":[{"inset-y":[p]}],start:[{start:[p]}],end:[{end:[p]}],top:[{top:[p]}],right:[{right:[p]}],bottom:[{bottom:[p]}],left:[{left:[p]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",eo,J]}],basis:[{basis:_()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",J]}],grow:[{grow:P()}],shrink:[{shrink:P()}],order:[{order:["first","last","none",eo,J]}],"grid-cols":[{"grid-cols":[to]}],"col-start-end":[{col:["auto",{span:["full",eo,J]},J]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[to]}],"row-start-end":[{row:["auto",{span:[eo,J]},J]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",J]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",J]}],gap:[{gap:[v]}],"gap-x":[{"gap-x":[v]}],"gap-y":[{"gap-y":[v]}],"justify-content":[{justify:["normal",...N()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...N(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...N(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[h]}],px:[{px:[h]}],py:[{py:[h]}],ps:[{ps:[h]}],pe:[{pe:[h]}],pt:[{pt:[h]}],pr:[{pr:[h]}],pb:[{pb:[h]}],pl:[{pl:[h]}],m:[{m:[w]}],mx:[{mx:[w]}],my:[{my:[w]}],ms:[{ms:[w]}],me:[{me:[w]}],mt:[{mt:[w]}],mr:[{mr:[w]}],mb:[{mb:[w]}],ml:[{ml:[w]}],"space-x":[{"space-x":[j]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[j]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",J,t]}],"min-w":[{"min-w":[J,t,"min","max","fit"]}],"max-w":[{"max-w":[J,t,"none","full","min","max","fit","prose",{screen:[In]},In]}],h:[{h:[J,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[J,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[J,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[J,t,"auto","min","max","fit"]}],"font-size":[{text:["base",In,An]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",$l]}],"font-family":[{font:[to]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",J]}],"line-clamp":[{"line-clamp":["none",hi,$l]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",ln,J]}],"list-image":[{"list-image":["none",J]}],"list-style-type":[{list:["none","disc","decimal",J]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[y]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[y]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",ln,An]}],"underline-offset":[{"underline-offset":["auto",ln,J]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",J]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",J]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[y]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...V(),_1]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",$1]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},W1]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[y]}],"border-style":[{border:[...$(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[y]}],"divide-style":[{divide:$()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...$()]}],"outline-offset":[{"outline-offset":[ln,J]}],"outline-w":[{outline:[ln,An]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:U()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[y]}],"ring-offset-w":[{"ring-offset":[ln,An]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",In,U1]}],"shadow-color":[{shadow:[to]}],opacity:[{opacity:[y]}],"mix-blend":[{"mix-blend":[...W(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":W()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",In,J]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[m]}],saturate:[{saturate:[x]}],sepia:[{sepia:[S]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[y]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[S]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",J]}],duration:[{duration:H()}],ease:[{ease:["linear","in","out","in-out",J]}],delay:[{delay:H()}],animate:[{animate:["none","spin","ping","pulse","bounce",J]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[k]}],"scale-x":[{"scale-x":[k]}],"scale-y":[{"scale-y":[k]}],rotate:[{rotate:[eo,J]}],"translate-x":[{"translate-x":[T]}],"translate-y":[{"translate-y":[T]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",J]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",J]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",J]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[ln,An,$l]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Q1=T1(G1);function me(...e){return Q1(ev(e))}const Y1=Yb,gv=g.forwardRef(({className:e,...t},n)=>o.jsx(Gg,{ref:n,className:me("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));gv.displayName=Gg.displayName;const K1=Ha("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),vv=g.forwardRef(({className:e,variant:t,...n},r)=>o.jsx(Qg,{ref:r,className:me(K1({variant:t}),e),...n}));vv.displayName=Qg.displayName;const X1=g.forwardRef(({className:e,...t},n)=>o.jsx(Xg,{ref:n,className:me("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t}));X1.displayName=Xg.displayName;const yv=g.forwardRef(({className:e,...t},n)=>o.jsx(Jg,{ref:n,className:me("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:o.jsx(uv,{className:"h-4 w-4"})}));yv.displayName=Jg.displayName;const xv=g.forwardRef(({className:e,...t},n)=>o.jsx(Yg,{ref:n,className:me("text-sm font-semibold",e),...t}));xv.displayName=Yg.displayName;const wv=g.forwardRef(({className:e,...t},n)=>o.jsx(Kg,{ref:n,className:me("text-sm opacity-90",e),...t}));wv.displayName=Kg.displayName;function J1(){const{toasts:e}=ob();return o.jsxs(Y1,{children:[e.map(function({id:t,title:n,description:r,action:i,...s}){return o.jsxs(vv,{...s,children:[o.jsxs("div",{className:"grid gap-1",children:[n&&o.jsx(xv,{children:n}),r&&o.jsx(wv,{children:r})]}),i,o.jsx(yv,{})]},t)}),o.jsx(gv,{})]})}var hp=["light","dark"],Z1="(prefers-color-scheme: dark)",ek=g.createContext(void 0),tk={setTheme:e=>{},themes:[]},nk=()=>{var e;return(e=g.useContext(ek))!=null?e:tk};g.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:i,defaultTheme:s,value:a,attrs:l,nonce:c})=>{let u=s==="system",d=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${l.map(b=>`'${b}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,m=i?hp.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(b,p=!1,w=!0)=>{let y=a?a[b]:b,h=p?b+"|| ''":`'${y}'`,x="";return i&&w&&!p&&hp.includes(b)&&(x+=`d.style.colorScheme = '${b}';`),n==="class"?p||y?x+=`c.add(${h})`:x+="null":y&&(x+=`d[s](n,${h})`),x},f=e?`!function(){${d}${v(e)}}()`:r?`!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Z1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${a?`var x=${JSON.stringify(a)};`:""}${v(a?"x[e]":"e",!0)}}${u?"":"else{"+v(s,!1,!1)+"}"}${m}}catch(e){}}()`:`!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${a?`var x=${JSON.stringify(a)};`:""}${v(a?"x[e]":"e",!0)}}else{${v(s,!1,!1)};}${m}}catch(t){}}();`;return g.createElement("script",{nonce:c,dangerouslySetInnerHTML:{__html:f}})});var rk=e=>{switch(e){case"success":return sk;case"info":return lk;case"warning":return ak;case"error":return ck;default:return null}},ik=Array(12).fill(0),ok=({visible:e,className:t})=>M.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},M.createElement("div",{className:"sonner-spinner"},ik.map((n,r)=>M.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),sk=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),ak=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),lk=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),ck=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),uk=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},M.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),M.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),dk=()=>{let[e,t]=M.useState(document.hidden);return M.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},eu=1,mk=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...r}=e,i=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:eu++,s=this.toasts.find(l=>l.id===i),a=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(i)&&this.dismissedToasts.delete(i),s?this.toasts=this.toasts.map(l=>l.id===i?(this.publish({...l,...e,id:i,title:n}),{...l,...e,id:i,dismissible:a,title:n}):l):this.addToast({title:n,...r,dismissible:a,id:i}),i},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let r=e instanceof Promise?e:e(),i=n!==void 0,s,a=r.then(async c=>{if(s=["resolve",c],M.isValidElement(c))i=!1,this.create({id:n,type:"default",message:c});else if(fk(c)&&!c.ok){i=!1;let u=typeof t.error=="function"?await t.error(`HTTP error! status: ${c.status}`):t.error,d=typeof t.description=="function"?await t.description(`HTTP error! status: ${c.status}`):t.description;this.create({id:n,type:"error",message:u,description:d})}else if(t.success!==void 0){i=!1;let u=typeof t.success=="function"?await t.success(c):t.success,d=typeof t.description=="function"?await t.description(c):t.description;this.create({id:n,type:"success",message:u,description:d})}}).catch(async c=>{if(s=["reject",c],t.error!==void 0){i=!1;let u=typeof t.error=="function"?await t.error(c):t.error,d=typeof t.description=="function"?await t.description(c):t.description;this.create({id:n,type:"error",message:u,description:d})}}).finally(()=>{var c;i&&(this.dismiss(n),n=void 0),(c=t.finally)==null||c.call(t)}),l=()=>new Promise((c,u)=>a.then(()=>s[0]==="reject"?u(s[1]):c(s[1])).catch(u));return typeof n!="string"&&typeof n!="number"?{unwrap:l}:Object.assign(n,{unwrap:l})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||eu++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},et=new mk,pk=(e,t)=>{let n=(t==null?void 0:t.id)||eu++;return et.addToast({title:e,...t,id:n}),n},fk=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",hk=pk,gk=()=>et.toasts,vk=()=>et.getActiveToasts(),yk=Object.assign(hk,{success:et.success,info:et.info,warning:et.warning,error:et.error,custom:et.custom,message:et.message,promise:et.promise,dismiss:et.dismiss,loading:et.loading},{getHistory:gk,getToasts:vk});function xk(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}xk(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function bs(e){return e.label!==void 0}var wk=3,bk="32px",kk="16px",gp=4e3,Sk=356,Ck=14,jk=20,Nk=200;function Rt(...e){return e.filter(Boolean).join(" ")}function Ek(e){let[t,n]=e.split("-"),r=[];return t&&r.push(t),n&&r.push(n),r}var Pk=e=>{var t,n,r,i,s,a,l,c,u,d,m;let{invert:v,toast:f,unstyled:b,interacting:p,setHeights:w,visibleToasts:y,heights:h,index:x,toasts:k,expanded:S,removeToast:C,defaultRichColors:j,closeButton:T,style:I,cancelButtonStyle:R,actionButtonStyle:_,className:L="",descriptionClassName:U="",duration:D,position:V,gap:$,loadingIcon:W,expandByDefault:N,classNames:P,icons:O,closeButtonAriaLabel:H="Close toast",pauseWhenPageIsHidden:B}=e,[X,G]=M.useState(null),[pe,ke]=M.useState(null),[z,ae]=M.useState(!1),[Se,se]=M.useState(!1),[ne,ie]=M.useState(!1),[_e,yt]=M.useState(!1),[dr,jn]=M.useState(!1),[mr,Hi]=M.useState(0),[Br,$d]=M.useState(0),Vi=M.useRef(f.duration||D||gp),_d=M.useRef(null),pr=M.useRef(null),wx=x===0,bx=x+1<=y,xt=f.type,Wr=f.dismissible!==!1,kx=f.className||"",Sx=f.descriptionClassName||"",es=M.useMemo(()=>h.findIndex(Q=>Q.toastId===f.id)||0,[h,f.id]),Cx=M.useMemo(()=>{var Q;return(Q=f.closeButton)!=null?Q:T},[f.closeButton,T]),Bd=M.useMemo(()=>f.duration||D||gp,[f.duration,D]),sl=M.useRef(0),Ur=M.useRef(0),Wd=M.useRef(0),Hr=M.useRef(null),[jx,Nx]=V.split("-"),Ud=M.useMemo(()=>h.reduce((Q,ue,ve)=>ve>=es?Q:Q+ue.height,0),[h,es]),Hd=dk(),Ex=f.invert||v,al=xt==="loading";Ur.current=M.useMemo(()=>es*$+Ud,[es,Ud]),M.useEffect(()=>{Vi.current=Bd},[Bd]),M.useEffect(()=>{ae(!0)},[]),M.useEffect(()=>{let Q=pr.current;if(Q){let ue=Q.getBoundingClientRect().height;return $d(ue),w(ve=>[{toastId:f.id,height:ue,position:f.position},...ve]),()=>w(ve=>ve.filter(Pt=>Pt.toastId!==f.id))}},[w,f.id]),M.useLayoutEffect(()=>{if(!z)return;let Q=pr.current,ue=Q.style.height;Q.style.height="auto";let ve=Q.getBoundingClientRect().height;Q.style.height=ue,$d(ve),w(Pt=>Pt.find(Tt=>Tt.toastId===f.id)?Pt.map(Tt=>Tt.toastId===f.id?{...Tt,height:ve}:Tt):[{toastId:f.id,height:ve,position:f.position},...Pt])},[z,f.title,f.description,w,f.id]);let Nn=M.useCallback(()=>{se(!0),Hi(Ur.current),w(Q=>Q.filter(ue=>ue.toastId!==f.id)),setTimeout(()=>{C(f)},Nk)},[f,C,w,Ur]);M.useEffect(()=>{if(f.promise&&xt==="loading"||f.duration===1/0||f.type==="loading")return;let Q;return S||p||B&&Hd?(()=>{if(Wd.current<sl.current){let ue=new Date().getTime()-sl.current;Vi.current=Vi.current-ue}Wd.current=new Date().getTime()})():Vi.current!==1/0&&(sl.current=new Date().getTime(),Q=setTimeout(()=>{var ue;(ue=f.onAutoClose)==null||ue.call(f,f),Nn()},Vi.current)),()=>clearTimeout(Q)},[S,p,f,xt,B,Hd,Nn]),M.useEffect(()=>{f.delete&&Nn()},[Nn,f.delete]);function Px(){var Q,ue,ve;return O!=null&&O.loading?M.createElement("div",{className:Rt(P==null?void 0:P.loader,(Q=f==null?void 0:f.classNames)==null?void 0:Q.loader,"sonner-loader"),"data-visible":xt==="loading"},O.loading):W?M.createElement("div",{className:Rt(P==null?void 0:P.loader,(ue=f==null?void 0:f.classNames)==null?void 0:ue.loader,"sonner-loader"),"data-visible":xt==="loading"},W):M.createElement(ok,{className:Rt(P==null?void 0:P.loader,(ve=f==null?void 0:f.classNames)==null?void 0:ve.loader),visible:xt==="loading"})}return M.createElement("li",{tabIndex:0,ref:pr,className:Rt(L,kx,P==null?void 0:P.toast,(t=f==null?void 0:f.classNames)==null?void 0:t.toast,P==null?void 0:P.default,P==null?void 0:P[xt],(n=f==null?void 0:f.classNames)==null?void 0:n[xt]),"data-sonner-toast":"","data-rich-colors":(r=f.richColors)!=null?r:j,"data-styled":!(f.jsx||f.unstyled||b),"data-mounted":z,"data-promise":!!f.promise,"data-swiped":dr,"data-removed":Se,"data-visible":bx,"data-y-position":jx,"data-x-position":Nx,"data-index":x,"data-front":wx,"data-swiping":ne,"data-dismissible":Wr,"data-type":xt,"data-invert":Ex,"data-swipe-out":_e,"data-swipe-direction":pe,"data-expanded":!!(S||N&&z),style:{"--index":x,"--toasts-before":x,"--z-index":k.length-x,"--offset":`${Se?mr:Ur.current}px`,"--initial-height":N?"auto":`${Br}px`,...I,...f.style},onDragEnd:()=>{ie(!1),G(null),Hr.current=null},onPointerDown:Q=>{al||!Wr||(_d.current=new Date,Hi(Ur.current),Q.target.setPointerCapture(Q.pointerId),Q.target.tagName!=="BUTTON"&&(ie(!0),Hr.current={x:Q.clientX,y:Q.clientY}))},onPointerUp:()=>{var Q,ue,ve,Pt;if(_e||!Wr)return;Hr.current=null;let Tt=Number(((Q=pr.current)==null?void 0:Q.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),En=Number(((ue=pr.current)==null?void 0:ue.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),fr=new Date().getTime()-((ve=_d.current)==null?void 0:ve.getTime()),At=X==="x"?Tt:En,Pn=Math.abs(At)/fr;if(Math.abs(At)>=jk||Pn>.11){Hi(Ur.current),(Pt=f.onDismiss)==null||Pt.call(f,f),ke(X==="x"?Tt>0?"right":"left":En>0?"down":"up"),Nn(),yt(!0),jn(!1);return}ie(!1),G(null)},onPointerMove:Q=>{var ue,ve,Pt,Tt;if(!Hr.current||!Wr||((ue=window.getSelection())==null?void 0:ue.toString().length)>0)return;let En=Q.clientY-Hr.current.y,fr=Q.clientX-Hr.current.x,At=(ve=e.swipeDirections)!=null?ve:Ek(V);!X&&(Math.abs(fr)>1||Math.abs(En)>1)&&G(Math.abs(fr)>Math.abs(En)?"x":"y");let Pn={x:0,y:0};X==="y"?(At.includes("top")||At.includes("bottom"))&&(At.includes("top")&&En<0||At.includes("bottom")&&En>0)&&(Pn.y=En):X==="x"&&(At.includes("left")||At.includes("right"))&&(At.includes("left")&&fr<0||At.includes("right")&&fr>0)&&(Pn.x=fr),(Math.abs(Pn.x)>0||Math.abs(Pn.y)>0)&&jn(!0),(Pt=pr.current)==null||Pt.style.setProperty("--swipe-amount-x",`${Pn.x}px`),(Tt=pr.current)==null||Tt.style.setProperty("--swipe-amount-y",`${Pn.y}px`)}},Cx&&!f.jsx?M.createElement("button",{"aria-label":H,"data-disabled":al,"data-close-button":!0,onClick:al||!Wr?()=>{}:()=>{var Q;Nn(),(Q=f.onDismiss)==null||Q.call(f,f)},className:Rt(P==null?void 0:P.closeButton,(i=f==null?void 0:f.classNames)==null?void 0:i.closeButton)},(s=O==null?void 0:O.close)!=null?s:uk):null,f.jsx||g.isValidElement(f.title)?f.jsx?f.jsx:typeof f.title=="function"?f.title():f.title:M.createElement(M.Fragment,null,xt||f.icon||f.promise?M.createElement("div",{"data-icon":"",className:Rt(P==null?void 0:P.icon,(a=f==null?void 0:f.classNames)==null?void 0:a.icon)},f.promise||f.type==="loading"&&!f.icon?f.icon||Px():null,f.type!=="loading"?f.icon||(O==null?void 0:O[xt])||rk(xt):null):null,M.createElement("div",{"data-content":"",className:Rt(P==null?void 0:P.content,(l=f==null?void 0:f.classNames)==null?void 0:l.content)},M.createElement("div",{"data-title":"",className:Rt(P==null?void 0:P.title,(c=f==null?void 0:f.classNames)==null?void 0:c.title)},typeof f.title=="function"?f.title():f.title),f.description?M.createElement("div",{"data-description":"",className:Rt(U,Sx,P==null?void 0:P.description,(u=f==null?void 0:f.classNames)==null?void 0:u.description)},typeof f.description=="function"?f.description():f.description):null),g.isValidElement(f.cancel)?f.cancel:f.cancel&&bs(f.cancel)?M.createElement("button",{"data-button":!0,"data-cancel":!0,style:f.cancelButtonStyle||R,onClick:Q=>{var ue,ve;bs(f.cancel)&&Wr&&((ve=(ue=f.cancel).onClick)==null||ve.call(ue,Q),Nn())},className:Rt(P==null?void 0:P.cancelButton,(d=f==null?void 0:f.classNames)==null?void 0:d.cancelButton)},f.cancel.label):null,g.isValidElement(f.action)?f.action:f.action&&bs(f.action)?M.createElement("button",{"data-button":!0,"data-action":!0,style:f.actionButtonStyle||_,onClick:Q=>{var ue,ve;bs(f.action)&&((ve=(ue=f.action).onClick)==null||ve.call(ue,Q),!Q.defaultPrevented&&Nn())},className:Rt(P==null?void 0:P.actionButton,(m=f==null?void 0:f.classNames)==null?void 0:m.actionButton)},f.action.label):null))};function vp(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function Tk(e,t){let n={};return[e,t].forEach((r,i)=>{let s=i===1,a=s?"--mobile-offset":"--offset",l=s?kk:bk;function c(u){["top","right","bottom","left"].forEach(d=>{n[`${a}-${d}`]=typeof u=="number"?`${u}px`:u})}typeof r=="number"||typeof r=="string"?c(r):typeof r=="object"?["top","right","bottom","left"].forEach(u=>{r[u]===void 0?n[`${a}-${u}`]=l:n[`${a}-${u}`]=typeof r[u]=="number"?`${r[u]}px`:r[u]}):c(l)}),n}var Ak=g.forwardRef(function(e,t){let{invert:n,position:r="bottom-right",hotkey:i=["altKey","KeyT"],expand:s,closeButton:a,className:l,offset:c,mobileOffset:u,theme:d="light",richColors:m,duration:v,style:f,visibleToasts:b=wk,toastOptions:p,dir:w=vp(),gap:y=Ck,loadingIcon:h,icons:x,containerAriaLabel:k="Notifications",pauseWhenPageIsHidden:S}=e,[C,j]=M.useState([]),T=M.useMemo(()=>Array.from(new Set([r].concat(C.filter(B=>B.position).map(B=>B.position)))),[C,r]),[I,R]=M.useState([]),[_,L]=M.useState(!1),[U,D]=M.useState(!1),[V,$]=M.useState(d!=="system"?d:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),W=M.useRef(null),N=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),P=M.useRef(null),O=M.useRef(!1),H=M.useCallback(B=>{j(X=>{var G;return(G=X.find(pe=>pe.id===B.id))!=null&&G.delete||et.dismiss(B.id),X.filter(({id:pe})=>pe!==B.id)})},[]);return M.useEffect(()=>et.subscribe(B=>{if(B.dismiss){j(X=>X.map(G=>G.id===B.id?{...G,delete:!0}:G));return}setTimeout(()=>{Cg.flushSync(()=>{j(X=>{let G=X.findIndex(pe=>pe.id===B.id);return G!==-1?[...X.slice(0,G),{...X[G],...B},...X.slice(G+1)]:[B,...X]})})})}),[]),M.useEffect(()=>{if(d!=="system"){$(d);return}if(d==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?$("dark"):$("light")),typeof window>"u")return;let B=window.matchMedia("(prefers-color-scheme: dark)");try{B.addEventListener("change",({matches:X})=>{$(X?"dark":"light")})}catch{B.addListener(({matches:G})=>{try{$(G?"dark":"light")}catch(pe){console.error(pe)}})}},[d]),M.useEffect(()=>{C.length<=1&&L(!1)},[C]),M.useEffect(()=>{let B=X=>{var G,pe;i.every(ke=>X[ke]||X.code===ke)&&(L(!0),(G=W.current)==null||G.focus()),X.code==="Escape"&&(document.activeElement===W.current||(pe=W.current)!=null&&pe.contains(document.activeElement))&&L(!1)};return document.addEventListener("keydown",B),()=>document.removeEventListener("keydown",B)},[i]),M.useEffect(()=>{if(W.current)return()=>{P.current&&(P.current.focus({preventScroll:!0}),P.current=null,O.current=!1)}},[W.current]),M.createElement("section",{ref:t,"aria-label":`${k} ${N}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},T.map((B,X)=>{var G;let[pe,ke]=B.split("-");return C.length?M.createElement("ol",{key:B,dir:w==="auto"?vp():w,tabIndex:-1,ref:W,className:l,"data-sonner-toaster":!0,"data-theme":V,"data-y-position":pe,"data-lifted":_&&C.length>1&&!s,"data-x-position":ke,style:{"--front-toast-height":`${((G=I[0])==null?void 0:G.height)||0}px`,"--width":`${Sk}px`,"--gap":`${y}px`,...f,...Tk(c,u)},onBlur:z=>{O.current&&!z.currentTarget.contains(z.relatedTarget)&&(O.current=!1,P.current&&(P.current.focus({preventScroll:!0}),P.current=null))},onFocus:z=>{z.target instanceof HTMLElement&&z.target.dataset.dismissible==="false"||O.current||(O.current=!0,P.current=z.relatedTarget)},onMouseEnter:()=>L(!0),onMouseMove:()=>L(!0),onMouseLeave:()=>{U||L(!1)},onDragEnd:()=>L(!1),onPointerDown:z=>{z.target instanceof HTMLElement&&z.target.dataset.dismissible==="false"||D(!0)},onPointerUp:()=>D(!1)},C.filter(z=>!z.position&&X===0||z.position===B).map((z,ae)=>{var Se,se;return M.createElement(Pk,{key:z.id,icons:x,index:ae,toast:z,defaultRichColors:m,duration:(Se=p==null?void 0:p.duration)!=null?Se:v,className:p==null?void 0:p.className,descriptionClassName:p==null?void 0:p.descriptionClassName,invert:n,visibleToasts:b,closeButton:(se=p==null?void 0:p.closeButton)!=null?se:a,interacting:U,position:B,style:p==null?void 0:p.style,unstyled:p==null?void 0:p.unstyled,classNames:p==null?void 0:p.classNames,cancelButtonStyle:p==null?void 0:p.cancelButtonStyle,actionButtonStyle:p==null?void 0:p.actionButtonStyle,removeToast:H,toasts:C.filter(ne=>ne.position==z.position),heights:I.filter(ne=>ne.position==z.position),setHeights:R,expandByDefault:s,gap:y,loadingIcon:h,expanded:_,pauseWhenPageIsHidden:S,swipeDirections:e.swipeDirections})})):null}))});const Ik=({...e})=>{const{theme:t="system"}=nk();return o.jsx(Ak,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})};var Rk=Su[" useId ".trim().toString()]||(()=>{}),Mk=0;function kd(e){const[t,n]=g.useState(Rk());return $e(()=>{n(r=>r??String(Mk++))},[e]),t?`radix-${t}`:""}const Dk=["top","right","bottom","left"],rr=Math.min,ut=Math.max,va=Math.round,ks=Math.floor,on=e=>({x:e,y:e}),Lk={left:"right",right:"left",bottom:"top",top:"bottom"},Ok={start:"end",end:"start"};function tu(e,t,n){return ut(e,rr(t,n))}function kn(e,t){return typeof e=="function"?e(t):e}function Sn(e){return e.split("-")[0]}function $i(e){return e.split("-")[1]}function Sd(e){return e==="x"?"y":"x"}function Cd(e){return e==="y"?"height":"width"}const zk=new Set(["top","bottom"]);function tn(e){return zk.has(Sn(e))?"y":"x"}function jd(e){return Sd(tn(e))}function Fk(e,t,n){n===void 0&&(n=!1);const r=$i(e),i=jd(e),s=Cd(i);let a=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(a=ya(a)),[a,ya(a)]}function $k(e){const t=ya(e);return[nu(e),t,nu(t)]}function nu(e){return e.replace(/start|end/g,t=>Ok[t])}const yp=["left","right"],xp=["right","left"],_k=["top","bottom"],Bk=["bottom","top"];function Wk(e,t,n){switch(e){case"top":case"bottom":return n?t?xp:yp:t?yp:xp;case"left":case"right":return t?_k:Bk;default:return[]}}function Uk(e,t,n,r){const i=$i(e);let s=Wk(Sn(e),n==="start",r);return i&&(s=s.map(a=>a+"-"+i),t&&(s=s.concat(s.map(nu)))),s}function ya(e){return e.replace(/left|right|bottom|top/g,t=>Lk[t])}function Hk(e){return{top:0,right:0,bottom:0,left:0,...e}}function bv(e){return typeof e!="number"?Hk(e):{top:e,right:e,bottom:e,left:e}}function xa(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function wp(e,t,n){let{reference:r,floating:i}=e;const s=tn(t),a=jd(t),l=Cd(a),c=Sn(t),u=s==="y",d=r.x+r.width/2-i.width/2,m=r.y+r.height/2-i.height/2,v=r[l]/2-i[l]/2;let f;switch(c){case"top":f={x:d,y:r.y-i.height};break;case"bottom":f={x:d,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:m};break;case"left":f={x:r.x-i.width,y:m};break;default:f={x:r.x,y:r.y}}switch($i(t)){case"start":f[a]-=v*(n&&u?-1:1);break;case"end":f[a]+=v*(n&&u?-1:1);break}return f}const Vk=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:a}=n,l=s.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(t));let u=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:d,y:m}=wp(u,r,c),v=r,f={},b=0;for(let p=0;p<l.length;p++){const{name:w,fn:y}=l[p],{x:h,y:x,data:k,reset:S}=await y({x:d,y:m,initialPlacement:r,placement:v,strategy:i,middlewareData:f,rects:u,platform:a,elements:{reference:e,floating:t}});d=h??d,m=x??m,f={...f,[w]:{...f[w],...k}},S&&b<=50&&(b++,typeof S=="object"&&(S.placement&&(v=S.placement),S.rects&&(u=S.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:i}):S.rects),{x:d,y:m}=wp(u,v,c)),p=-1)}return{x:d,y:m,placement:v,strategy:i,middlewareData:f}};async function zo(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:s,rects:a,elements:l,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:m="floating",altBoundary:v=!1,padding:f=0}=kn(t,e),b=bv(f),w=l[v?m==="floating"?"reference":"floating":m],y=xa(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(w)))==null||n?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:u,rootBoundary:d,strategy:c})),h=m==="floating"?{x:r,y:i,width:a.floating.width,height:a.floating.height}:a.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),k=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},S=xa(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:h,offsetParent:x,strategy:c}):h);return{top:(y.top-S.top+b.top)/k.y,bottom:(S.bottom-y.bottom+b.bottom)/k.y,left:(y.left-S.left+b.left)/k.x,right:(S.right-y.right+b.right)/k.x}}const qk=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:s,platform:a,elements:l,middlewareData:c}=t,{element:u,padding:d=0}=kn(e,t)||{};if(u==null)return{};const m=bv(d),v={x:n,y:r},f=jd(i),b=Cd(f),p=await a.getDimensions(u),w=f==="y",y=w?"top":"left",h=w?"bottom":"right",x=w?"clientHeight":"clientWidth",k=s.reference[b]+s.reference[f]-v[f]-s.floating[b],S=v[f]-s.reference[f],C=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u));let j=C?C[x]:0;(!j||!await(a.isElement==null?void 0:a.isElement(C)))&&(j=l.floating[x]||s.floating[b]);const T=k/2-S/2,I=j/2-p[b]/2-1,R=rr(m[y],I),_=rr(m[h],I),L=R,U=j-p[b]-_,D=j/2-p[b]/2+T,V=tu(L,D,U),$=!c.arrow&&$i(i)!=null&&D!==V&&s.reference[b]/2-(D<L?R:_)-p[b]/2<0,W=$?D<L?D-L:D-U:0;return{[f]:v[f]+W,data:{[f]:V,centerOffset:D-V-W,...$&&{alignmentOffset:W}},reset:$}}}),Gk=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:s,rects:a,initialPlacement:l,platform:c,elements:u}=t,{mainAxis:d=!0,crossAxis:m=!0,fallbackPlacements:v,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:p=!0,...w}=kn(e,t);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const y=Sn(i),h=tn(l),x=Sn(l)===l,k=await(c.isRTL==null?void 0:c.isRTL(u.floating)),S=v||(x||!p?[ya(l)]:$k(l)),C=b!=="none";!v&&C&&S.push(...Uk(l,p,b,k));const j=[l,...S],T=await zo(t,w),I=[];let R=((r=s.flip)==null?void 0:r.overflows)||[];if(d&&I.push(T[y]),m){const D=Fk(i,a,k);I.push(T[D[0]],T[D[1]])}if(R=[...R,{placement:i,overflows:I}],!I.every(D=>D<=0)){var _,L;const D=(((_=s.flip)==null?void 0:_.index)||0)+1,V=j[D];if(V&&(!(m==="alignment"?h!==tn(V):!1)||R.every(N=>N.overflows[0]>0&&tn(N.placement)===h)))return{data:{index:D,overflows:R},reset:{placement:V}};let $=(L=R.filter(W=>W.overflows[0]<=0).sort((W,N)=>W.overflows[1]-N.overflows[1])[0])==null?void 0:L.placement;if(!$)switch(f){case"bestFit":{var U;const W=(U=R.filter(N=>{if(C){const P=tn(N.placement);return P===h||P==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(P=>P>0).reduce((P,O)=>P+O,0)]).sort((N,P)=>N[1]-P[1])[0])==null?void 0:U[0];W&&($=W);break}case"initialPlacement":$=l;break}if(i!==$)return{reset:{placement:$}}}return{}}}};function bp(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function kp(e){return Dk.some(t=>e[t]>=0)}const Qk=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...i}=kn(e,t);switch(r){case"referenceHidden":{const s=await zo(t,{...i,elementContext:"reference"}),a=bp(s,n.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:kp(a)}}}case"escaped":{const s=await zo(t,{...i,altBoundary:!0}),a=bp(s,n.floating);return{data:{escapedOffsets:a,escaped:kp(a)}}}default:return{}}}}},kv=new Set(["left","top"]);async function Yk(e,t){const{placement:n,platform:r,elements:i}=e,s=await(r.isRTL==null?void 0:r.isRTL(i.floating)),a=Sn(n),l=$i(n),c=tn(n)==="y",u=kv.has(a)?-1:1,d=s&&c?-1:1,m=kn(t,e);let{mainAxis:v,crossAxis:f,alignmentAxis:b}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return l&&typeof b=="number"&&(f=l==="end"?b*-1:b),c?{x:f*d,y:v*u}:{x:v*u,y:f*d}}const Kk=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:i,y:s,placement:a,middlewareData:l}=t,c=await Yk(t,e);return a===((n=l.offset)==null?void 0:n.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:i+c.x,y:s+c.y,data:{...c,placement:a}}}}},Xk=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:s=!0,crossAxis:a=!1,limiter:l={fn:w=>{let{x:y,y:h}=w;return{x:y,y:h}}},...c}=kn(e,t),u={x:n,y:r},d=await zo(t,c),m=tn(Sn(i)),v=Sd(m);let f=u[v],b=u[m];if(s){const w=v==="y"?"top":"left",y=v==="y"?"bottom":"right",h=f+d[w],x=f-d[y];f=tu(h,f,x)}if(a){const w=m==="y"?"top":"left",y=m==="y"?"bottom":"right",h=b+d[w],x=b-d[y];b=tu(h,b,x)}const p=l.fn({...t,[v]:f,[m]:b});return{...p,data:{x:p.x-n,y:p.y-r,enabled:{[v]:s,[m]:a}}}}}},Jk=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:i,rects:s,middlewareData:a}=t,{offset:l=0,mainAxis:c=!0,crossAxis:u=!0}=kn(e,t),d={x:n,y:r},m=tn(i),v=Sd(m);let f=d[v],b=d[m];const p=kn(l,t),w=typeof p=="number"?{mainAxis:p,crossAxis:0}:{mainAxis:0,crossAxis:0,...p};if(c){const x=v==="y"?"height":"width",k=s.reference[v]-s.floating[x]+w.mainAxis,S=s.reference[v]+s.reference[x]-w.mainAxis;f<k?f=k:f>S&&(f=S)}if(u){var y,h;const x=v==="y"?"width":"height",k=kv.has(Sn(i)),S=s.reference[m]-s.floating[x]+(k&&((y=a.offset)==null?void 0:y[m])||0)+(k?0:w.crossAxis),C=s.reference[m]+s.reference[x]+(k?0:((h=a.offset)==null?void 0:h[m])||0)-(k?w.crossAxis:0);b<S?b=S:b>C&&(b=C)}return{[v]:f,[m]:b}}}},Zk=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:i,rects:s,platform:a,elements:l}=t,{apply:c=()=>{},...u}=kn(e,t),d=await zo(t,u),m=Sn(i),v=$i(i),f=tn(i)==="y",{width:b,height:p}=s.floating;let w,y;m==="top"||m==="bottom"?(w=m,y=v===(await(a.isRTL==null?void 0:a.isRTL(l.floating))?"start":"end")?"left":"right"):(y=m,w=v==="end"?"top":"bottom");const h=p-d.top-d.bottom,x=b-d.left-d.right,k=rr(p-d[w],h),S=rr(b-d[y],x),C=!t.middlewareData.shift;let j=k,T=S;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(T=x),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(j=h),C&&!v){const R=ut(d.left,0),_=ut(d.right,0),L=ut(d.top,0),U=ut(d.bottom,0);f?T=b-2*(R!==0||_!==0?R+_:ut(d.left,d.right)):j=p-2*(L!==0||U!==0?L+U:ut(d.top,d.bottom))}await c({...t,availableWidth:T,availableHeight:j});const I=await a.getDimensions(l.floating);return b!==I.width||p!==I.height?{reset:{rects:!0}}:{}}}};function Ga(){return typeof window<"u"}function _i(e){return Sv(e)?(e.nodeName||"").toLowerCase():"#document"}function ft(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function an(e){var t;return(t=(Sv(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Sv(e){return Ga()?e instanceof Node||e instanceof ft(e).Node:!1}function Vt(e){return Ga()?e instanceof Element||e instanceof ft(e).Element:!1}function sn(e){return Ga()?e instanceof HTMLElement||e instanceof ft(e).HTMLElement:!1}function Sp(e){return!Ga()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ft(e).ShadowRoot}const eS=new Set(["inline","contents"]);function Jo(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=qt(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!eS.has(i)}const tS=new Set(["table","td","th"]);function nS(e){return tS.has(_i(e))}const rS=[":popover-open",":modal"];function Qa(e){return rS.some(t=>{try{return e.matches(t)}catch{return!1}})}const iS=["transform","translate","scale","rotate","perspective"],oS=["transform","translate","scale","rotate","perspective","filter"],sS=["paint","layout","strict","content"];function Nd(e){const t=Ed(),n=Vt(e)?qt(e):e;return iS.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||oS.some(r=>(n.willChange||"").includes(r))||sS.some(r=>(n.contain||"").includes(r))}function aS(e){let t=ir(e);for(;sn(t)&&!Mi(t);){if(Nd(t))return t;if(Qa(t))return null;t=ir(t)}return null}function Ed(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const lS=new Set(["html","body","#document"]);function Mi(e){return lS.has(_i(e))}function qt(e){return ft(e).getComputedStyle(e)}function Ya(e){return Vt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ir(e){if(_i(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Sp(e)&&e.host||an(e);return Sp(t)?t.host:t}function Cv(e){const t=ir(e);return Mi(t)?e.ownerDocument?e.ownerDocument.body:e.body:sn(t)&&Jo(t)?t:Cv(t)}function Fo(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Cv(e),s=i===((r=e.ownerDocument)==null?void 0:r.body),a=ft(i);if(s){const l=ru(a);return t.concat(a,a.visualViewport||[],Jo(i)?i:[],l&&n?Fo(l):[])}return t.concat(i,Fo(i,[],n))}function ru(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function jv(e){const t=qt(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=sn(e),s=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=va(n)!==s||va(r)!==a;return l&&(n=s,r=a),{width:n,height:r,$:l}}function Pd(e){return Vt(e)?e:e.contextElement}function gi(e){const t=Pd(e);if(!sn(t))return on(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:s}=jv(t);let a=(s?va(n.width):n.width)/r,l=(s?va(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const cS=on(0);function Nv(e){const t=ft(e);return!Ed()||!t.visualViewport?cS:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function uS(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==ft(e)?!1:t}function Dr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),s=Pd(e);let a=on(1);t&&(r?Vt(r)&&(a=gi(r)):a=gi(e));const l=uS(s,n,r)?Nv(s):on(0);let c=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,d=i.width/a.x,m=i.height/a.y;if(s){const v=ft(s),f=r&&Vt(r)?ft(r):r;let b=v,p=ru(b);for(;p&&r&&f!==b;){const w=gi(p),y=p.getBoundingClientRect(),h=qt(p),x=y.left+(p.clientLeft+parseFloat(h.paddingLeft))*w.x,k=y.top+(p.clientTop+parseFloat(h.paddingTop))*w.y;c*=w.x,u*=w.y,d*=w.x,m*=w.y,c+=x,u+=k,b=ft(p),p=ru(b)}}return xa({width:d,height:m,x:c,y:u})}function Td(e,t){const n=Ya(e).scrollLeft;return t?t.left+n:Dr(an(e)).left+n}function Ev(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:Td(e,r)),s=r.top+t.scrollTop;return{x:i,y:s}}function dS(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const s=i==="fixed",a=an(r),l=t?Qa(t.floating):!1;if(r===a||l&&s)return n;let c={scrollLeft:0,scrollTop:0},u=on(1);const d=on(0),m=sn(r);if((m||!m&&!s)&&((_i(r)!=="body"||Jo(a))&&(c=Ya(r)),sn(r))){const f=Dr(r);u=gi(r),d.x=f.x+r.clientLeft,d.y=f.y+r.clientTop}const v=a&&!m&&!s?Ev(a,c,!0):on(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+d.x+v.x,y:n.y*u.y-c.scrollTop*u.y+d.y+v.y}}function mS(e){return Array.from(e.getClientRects())}function pS(e){const t=an(e),n=Ya(e),r=e.ownerDocument.body,i=ut(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=ut(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Td(e);const l=-n.scrollTop;return qt(r).direction==="rtl"&&(a+=ut(t.clientWidth,r.clientWidth)-i),{width:i,height:s,x:a,y:l}}function fS(e,t){const n=ft(e),r=an(e),i=n.visualViewport;let s=r.clientWidth,a=r.clientHeight,l=0,c=0;if(i){s=i.width,a=i.height;const u=Ed();(!u||u&&t==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:s,height:a,x:l,y:c}}const hS=new Set(["absolute","fixed"]);function gS(e,t){const n=Dr(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,s=sn(e)?gi(e):on(1),a=e.clientWidth*s.x,l=e.clientHeight*s.y,c=i*s.x,u=r*s.y;return{width:a,height:l,x:c,y:u}}function Cp(e,t,n){let r;if(t==="viewport")r=fS(e,n);else if(t==="document")r=pS(an(e));else if(Vt(t))r=gS(t,n);else{const i=Nv(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return xa(r)}function Pv(e,t){const n=ir(e);return n===t||!Vt(n)||Mi(n)?!1:qt(n).position==="fixed"||Pv(n,t)}function vS(e,t){const n=t.get(e);if(n)return n;let r=Fo(e,[],!1).filter(l=>Vt(l)&&_i(l)!=="body"),i=null;const s=qt(e).position==="fixed";let a=s?ir(e):e;for(;Vt(a)&&!Mi(a);){const l=qt(a),c=Nd(a);!c&&l.position==="fixed"&&(i=null),(s?!c&&!i:!c&&l.position==="static"&&!!i&&hS.has(i.position)||Jo(a)&&!c&&Pv(e,a))?r=r.filter(d=>d!==a):i=l,a=ir(a)}return t.set(e,r),r}function yS(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const a=[...n==="clippingAncestors"?Qa(t)?[]:vS(t,this._c):[].concat(n),r],l=a[0],c=a.reduce((u,d)=>{const m=Cp(t,d,i);return u.top=ut(m.top,u.top),u.right=rr(m.right,u.right),u.bottom=rr(m.bottom,u.bottom),u.left=ut(m.left,u.left),u},Cp(t,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function xS(e){const{width:t,height:n}=jv(e);return{width:t,height:n}}function wS(e,t,n){const r=sn(t),i=an(t),s=n==="fixed",a=Dr(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const c=on(0);function u(){c.x=Td(i)}if(r||!r&&!s)if((_i(t)!=="body"||Jo(i))&&(l=Ya(t)),r){const f=Dr(t,!0,s,t);c.x=f.x+t.clientLeft,c.y=f.y+t.clientTop}else i&&u();s&&!r&&i&&u();const d=i&&!r&&!s?Ev(i,l):on(0),m=a.left+l.scrollLeft-c.x-d.x,v=a.top+l.scrollTop-c.y-d.y;return{x:m,y:v,width:a.width,height:a.height}}function _l(e){return qt(e).position==="static"}function jp(e,t){if(!sn(e)||qt(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return an(e)===n&&(n=n.ownerDocument.body),n}function Tv(e,t){const n=ft(e);if(Qa(e))return n;if(!sn(e)){let i=ir(e);for(;i&&!Mi(i);){if(Vt(i)&&!_l(i))return i;i=ir(i)}return n}let r=jp(e,t);for(;r&&nS(r)&&_l(r);)r=jp(r,t);return r&&Mi(r)&&_l(r)&&!Nd(r)?n:r||aS(e)||n}const bS=async function(e){const t=this.getOffsetParent||Tv,n=this.getDimensions,r=await n(e.floating);return{reference:wS(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function kS(e){return qt(e).direction==="rtl"}const SS={convertOffsetParentRelativeRectToViewportRelativeRect:dS,getDocumentElement:an,getClippingRect:yS,getOffsetParent:Tv,getElementRects:bS,getClientRects:mS,getDimensions:xS,getScale:gi,isElement:Vt,isRTL:kS};function Av(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function CS(e,t){let n=null,r;const i=an(e);function s(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const u=e.getBoundingClientRect(),{left:d,top:m,width:v,height:f}=u;if(l||t(),!v||!f)return;const b=ks(m),p=ks(i.clientWidth-(d+v)),w=ks(i.clientHeight-(m+f)),y=ks(d),x={rootMargin:-b+"px "+-p+"px "+-w+"px "+-y+"px",threshold:ut(0,rr(1,c))||1};let k=!0;function S(C){const j=C[0].intersectionRatio;if(j!==c){if(!k)return a();j?a(!1,j):r=setTimeout(()=>{a(!1,1e-7)},1e3)}j===1&&!Av(u,e.getBoundingClientRect())&&a(),k=!1}try{n=new IntersectionObserver(S,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(S,x)}n.observe(e)}return a(!0),s}function jS(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=Pd(e),d=i||s?[...u?Fo(u):[],...Fo(t)]:[];d.forEach(y=>{i&&y.addEventListener("scroll",n,{passive:!0}),s&&y.addEventListener("resize",n)});const m=u&&l?CS(u,n):null;let v=-1,f=null;a&&(f=new ResizeObserver(y=>{let[h]=y;h&&h.target===u&&f&&(f.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(t)})),n()}),u&&!c&&f.observe(u),f.observe(t));let b,p=c?Dr(e):null;c&&w();function w(){const y=Dr(e);p&&!Av(p,y)&&n(),p=y,b=requestAnimationFrame(w)}return n(),()=>{var y;d.forEach(h=>{i&&h.removeEventListener("scroll",n),s&&h.removeEventListener("resize",n)}),m==null||m(),(y=f)==null||y.disconnect(),f=null,c&&cancelAnimationFrame(b)}}const NS=Kk,ES=Xk,PS=Gk,TS=Zk,AS=Qk,Np=qk,IS=Jk,RS=(e,t,n)=>{const r=new Map,i={platform:SS,...n},s={...i.platform,_c:r};return Vk(e,t,{...i,platform:s})};var MS=typeof document<"u",DS=function(){},Ws=MS?g.useLayoutEffect:DS;function wa(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!wa(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){const s=i[r];if(!(s==="_owner"&&e.$$typeof)&&!wa(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}function Iv(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ep(e,t){const n=Iv(e);return Math.round(t*n)/n}function Bl(e){const t=g.useRef(e);return Ws(()=>{t.current=e}),t}function LS(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:s,floating:a}={},transform:l=!0,whileElementsMounted:c,open:u}=e,[d,m]=g.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[v,f]=g.useState(r);wa(v,r)||f(r);const[b,p]=g.useState(null),[w,y]=g.useState(null),h=g.useCallback(N=>{N!==C.current&&(C.current=N,p(N))},[]),x=g.useCallback(N=>{N!==j.current&&(j.current=N,y(N))},[]),k=s||b,S=a||w,C=g.useRef(null),j=g.useRef(null),T=g.useRef(d),I=c!=null,R=Bl(c),_=Bl(i),L=Bl(u),U=g.useCallback(()=>{if(!C.current||!j.current)return;const N={placement:t,strategy:n,middleware:v};_.current&&(N.platform=_.current),RS(C.current,j.current,N).then(P=>{const O={...P,isPositioned:L.current!==!1};D.current&&!wa(T.current,O)&&(T.current=O,$r.flushSync(()=>{m(O)}))})},[v,t,n,_,L]);Ws(()=>{u===!1&&T.current.isPositioned&&(T.current.isPositioned=!1,m(N=>({...N,isPositioned:!1})))},[u]);const D=g.useRef(!1);Ws(()=>(D.current=!0,()=>{D.current=!1}),[]),Ws(()=>{if(k&&(C.current=k),S&&(j.current=S),k&&S){if(R.current)return R.current(k,S,U);U()}},[k,S,U,R,I]);const V=g.useMemo(()=>({reference:C,floating:j,setReference:h,setFloating:x}),[h,x]),$=g.useMemo(()=>({reference:k,floating:S}),[k,S]),W=g.useMemo(()=>{const N={position:n,left:0,top:0};if(!$.floating)return N;const P=Ep($.floating,d.x),O=Ep($.floating,d.y);return l?{...N,transform:"translate("+P+"px, "+O+"px)",...Iv($.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:P,top:O}},[n,l,$.floating,d.x,d.y]);return g.useMemo(()=>({...d,update:U,refs:V,elements:$,floatingStyles:W}),[d,U,V,$,W])}const OS=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:i}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?Np({element:r.current,padding:i}).fn(n):{}:r?Np({element:r,padding:i}).fn(n):{}}}},zS=(e,t)=>({...NS(e),options:[e,t]}),FS=(e,t)=>({...ES(e),options:[e,t]}),$S=(e,t)=>({...IS(e),options:[e,t]}),_S=(e,t)=>({...PS(e),options:[e,t]}),BS=(e,t)=>({...TS(e),options:[e,t]}),WS=(e,t)=>({...AS(e),options:[e,t]}),US=(e,t)=>({...OS(e),options:[e,t]});var HS="Arrow",Rv=g.forwardRef((e,t)=>{const{children:n,width:r=10,height:i=5,...s}=e;return o.jsx(ce.svg,{...s,ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:o.jsx("polygon",{points:"0,0 30,0 15,10"})})});Rv.displayName=HS;var VS=Rv;function qS(e){const[t,n]=g.useState(void 0);return $e(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const s=i[0];let a,l;if("borderBoxSize"in s){const c=s.borderBoxSize,u=Array.isArray(c)?c[0]:c;a=u.inlineSize,l=u.blockSize}else a=e.offsetWidth,l=e.offsetHeight;n({width:a,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var Ad="Popper",[Mv,Ka]=Ko(Ad),[GS,Dv]=Mv(Ad),Lv=e=>{const{__scopePopper:t,children:n}=e,[r,i]=g.useState(null);return o.jsx(GS,{scope:t,anchor:r,onAnchorChange:i,children:n})};Lv.displayName=Ad;var Ov="PopperAnchor",zv=g.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...i}=e,s=Dv(Ov,n),a=g.useRef(null),l=Ne(t,a);return g.useEffect(()=>{s.onAnchorChange((r==null?void 0:r.current)||a.current)}),r?null:o.jsx(ce.div,{...i,ref:l})});zv.displayName=Ov;var Id="PopperContent",[QS,YS]=Mv(Id),Fv=g.forwardRef((e,t)=>{var z,ae,Se,se,ne,ie;const{__scopePopper:n,side:r="bottom",sideOffset:i=0,align:s="center",alignOffset:a=0,arrowPadding:l=0,avoidCollisions:c=!0,collisionBoundary:u=[],collisionPadding:d=0,sticky:m="partial",hideWhenDetached:v=!1,updatePositionStrategy:f="optimized",onPlaced:b,...p}=e,w=Dv(Id,n),[y,h]=g.useState(null),x=Ne(t,_e=>h(_e)),[k,S]=g.useState(null),C=qS(k),j=(C==null?void 0:C.width)??0,T=(C==null?void 0:C.height)??0,I=r+(s!=="center"?"-"+s:""),R=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},_=Array.isArray(u)?u:[u],L=_.length>0,U={padding:R,boundary:_.filter(XS),altBoundary:L},{refs:D,floatingStyles:V,placement:$,isPositioned:W,middlewareData:N}=LS({strategy:"fixed",placement:I,whileElementsMounted:(..._e)=>jS(..._e,{animationFrame:f==="always"}),elements:{reference:w.anchor},middleware:[zS({mainAxis:i+T,alignmentAxis:a}),c&&FS({mainAxis:!0,crossAxis:!1,limiter:m==="partial"?$S():void 0,...U}),c&&_S({...U}),BS({...U,apply:({elements:_e,rects:yt,availableWidth:dr,availableHeight:jn})=>{const{width:mr,height:Hi}=yt.reference,Br=_e.floating.style;Br.setProperty("--radix-popper-available-width",`${dr}px`),Br.setProperty("--radix-popper-available-height",`${jn}px`),Br.setProperty("--radix-popper-anchor-width",`${mr}px`),Br.setProperty("--radix-popper-anchor-height",`${Hi}px`)}}),k&&US({element:k,padding:l}),JS({arrowWidth:j,arrowHeight:T}),v&&WS({strategy:"referenceHidden",...U})]}),[P,O]=Bv($),H=Ut(b);$e(()=>{W&&(H==null||H())},[W,H]);const B=(z=N.arrow)==null?void 0:z.x,X=(ae=N.arrow)==null?void 0:ae.y,G=((Se=N.arrow)==null?void 0:Se.centerOffset)!==0,[pe,ke]=g.useState();return $e(()=>{y&&ke(window.getComputedStyle(y).zIndex)},[y]),o.jsx("div",{ref:D.setFloating,"data-radix-popper-content-wrapper":"",style:{...V,transform:W?V.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:pe,"--radix-popper-transform-origin":[(se=N.transformOrigin)==null?void 0:se.x,(ne=N.transformOrigin)==null?void 0:ne.y].join(" "),...((ie=N.hide)==null?void 0:ie.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:o.jsx(QS,{scope:n,placedSide:P,onArrowChange:S,arrowX:B,arrowY:X,shouldHideArrow:G,children:o.jsx(ce.div,{"data-side":P,"data-align":O,...p,ref:x,style:{...p.style,animation:W?void 0:"none"}})})})});Fv.displayName=Id;var $v="PopperArrow",KS={top:"bottom",right:"left",bottom:"top",left:"right"},_v=g.forwardRef(function(t,n){const{__scopePopper:r,...i}=t,s=YS($v,r),a=KS[s.placedSide];return o.jsx("span",{ref:s.onArrowChange,style:{position:"absolute",left:s.arrowX,top:s.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[s.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[s.placedSide],visibility:s.shouldHideArrow?"hidden":void 0},children:o.jsx(VS,{...i,ref:n,style:{...i.style,display:"block"}})})});_v.displayName=$v;function XS(e){return e!==null}var JS=e=>({name:"transformOrigin",options:e,fn(t){var w,y,h;const{placement:n,rects:r,middlewareData:i}=t,a=((w=i.arrow)==null?void 0:w.centerOffset)!==0,l=a?0:e.arrowWidth,c=a?0:e.arrowHeight,[u,d]=Bv(n),m={start:"0%",center:"50%",end:"100%"}[d],v=(((y=i.arrow)==null?void 0:y.x)??0)+l/2,f=(((h=i.arrow)==null?void 0:h.y)??0)+c/2;let b="",p="";return u==="bottom"?(b=a?m:`${v}px`,p=`${-c}px`):u==="top"?(b=a?m:`${v}px`,p=`${r.floating.height+c}px`):u==="right"?(b=`${-c}px`,p=a?m:`${f}px`):u==="left"&&(b=`${r.floating.width+c}px`,p=a?m:`${f}px`),{data:{x:b,y:p}}}});function Bv(e){const[t,n="center"]=e.split("-");return[t,n]}var ZS=Lv,Wv=zv,Uv=Fv,Hv=_v,[Xa,rE]=Ko("Tooltip",[Ka]),Rd=Ka(),Vv="TooltipProvider",eC=700,Pp="tooltip.open",[tC,qv]=Xa(Vv),Gv=e=>{const{__scopeTooltip:t,delayDuration:n=eC,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:s}=e,a=g.useRef(!0),l=g.useRef(!1),c=g.useRef(0);return g.useEffect(()=>{const u=c.current;return()=>window.clearTimeout(u)},[]),o.jsx(tC,{scope:t,isOpenDelayedRef:a,delayDuration:n,onOpen:g.useCallback(()=>{window.clearTimeout(c.current),a.current=!1},[]),onClose:g.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>a.current=!0,r)},[r]),isPointerInTransitRef:l,onPointerInTransitChange:g.useCallback(u=>{l.current=u},[]),disableHoverableContent:i,children:s})};Gv.displayName=Vv;var Qv="Tooltip",[iE,Ja]=Xa(Qv),iu="TooltipTrigger",nC=g.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=Ja(iu,n),s=qv(iu,n),a=Rd(n),l=g.useRef(null),c=Ne(t,l,i.onTriggerChange),u=g.useRef(!1),d=g.useRef(!1),m=g.useCallback(()=>u.current=!1,[]);return g.useEffect(()=>()=>document.removeEventListener("pointerup",m),[m]),o.jsx(Wv,{asChild:!0,...a,children:o.jsx(ce.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...r,ref:c,onPointerMove:te(e.onPointerMove,v=>{v.pointerType!=="touch"&&!d.current&&!s.isPointerInTransitRef.current&&(i.onTriggerEnter(),d.current=!0)}),onPointerLeave:te(e.onPointerLeave,()=>{i.onTriggerLeave(),d.current=!1}),onPointerDown:te(e.onPointerDown,()=>{i.open&&i.onClose(),u.current=!0,document.addEventListener("pointerup",m,{once:!0})}),onFocus:te(e.onFocus,()=>{u.current||i.onOpen()}),onBlur:te(e.onBlur,i.onClose),onClick:te(e.onClick,i.onClose)})})});nC.displayName=iu;var rC="TooltipPortal",[oE,iC]=Xa(rC,{forceMount:void 0}),Di="TooltipContent",Yv=g.forwardRef((e,t)=>{const n=iC(Di,e.__scopeTooltip),{forceMount:r=n.forceMount,side:i="top",...s}=e,a=Ja(Di,e.__scopeTooltip);return o.jsx(hd,{present:r||a.open,children:a.disableHoverableContent?o.jsx(Kv,{side:i,...s,ref:t}):o.jsx(oC,{side:i,...s,ref:t})})}),oC=g.forwardRef((e,t)=>{const n=Ja(Di,e.__scopeTooltip),r=qv(Di,e.__scopeTooltip),i=g.useRef(null),s=Ne(t,i),[a,l]=g.useState(null),{trigger:c,onClose:u}=n,d=i.current,{onPointerInTransitChange:m}=r,v=g.useCallback(()=>{l(null),m(!1)},[m]),f=g.useCallback((b,p)=>{const w=b.currentTarget,y={x:b.clientX,y:b.clientY},h=uC(y,w.getBoundingClientRect()),x=dC(y,h),k=mC(p.getBoundingClientRect()),S=fC([...x,...k]);l(S),m(!0)},[m]);return g.useEffect(()=>()=>v(),[v]),g.useEffect(()=>{if(c&&d){const b=w=>f(w,d),p=w=>f(w,c);return c.addEventListener("pointerleave",b),d.addEventListener("pointerleave",p),()=>{c.removeEventListener("pointerleave",b),d.removeEventListener("pointerleave",p)}}},[c,d,f,v]),g.useEffect(()=>{if(a){const b=p=>{const w=p.target,y={x:p.clientX,y:p.clientY},h=(c==null?void 0:c.contains(w))||(d==null?void 0:d.contains(w)),x=!pC(y,a);h?v():x&&(v(),u())};return document.addEventListener("pointermove",b),()=>document.removeEventListener("pointermove",b)}},[c,d,a,u,v]),o.jsx(Kv,{...e,ref:s})}),[sC,aC]=Xa(Qv,{isInside:!1}),lC=cb("TooltipContent"),Kv=g.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":i,onEscapeKeyDown:s,onPointerDownOutside:a,...l}=e,c=Ja(Di,n),u=Rd(n),{onClose:d}=c;return g.useEffect(()=>(document.addEventListener(Pp,d),()=>document.removeEventListener(Pp,d)),[d]),g.useEffect(()=>{if(c.trigger){const m=v=>{const f=v.target;f!=null&&f.contains(c.trigger)&&d()};return window.addEventListener("scroll",m,{capture:!0}),()=>window.removeEventListener("scroll",m,{capture:!0})}},[c.trigger,d]),o.jsx(Ba,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:a,onFocusOutside:m=>m.preventDefault(),onDismiss:d,children:o.jsxs(Uv,{"data-state":c.stateAttribute,...u,...l,ref:t,style:{...l.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[o.jsx(lC,{children:r}),o.jsx(sC,{scope:n,isInside:!0,children:o.jsx(Ib,{id:c.contentId,role:"tooltip",children:i||r})})]})})});Yv.displayName=Di;var Xv="TooltipArrow",cC=g.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=Rd(n);return aC(Xv,n).isInside?null:o.jsx(Hv,{...i,...r,ref:t})});cC.displayName=Xv;function uC(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),s=Math.abs(t.left-e.x);switch(Math.min(n,r,i,s)){case s:return"left";case i:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function dC(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function mC(e){const{top:t,right:n,bottom:r,left:i}=e;return[{x:i,y:t},{x:n,y:t},{x:n,y:r},{x:i,y:r}]}function pC(e,t){const{x:n,y:r}=e;let i=!1;for(let s=0,a=t.length-1;s<t.length;a=s++){const l=t[s],c=t[a],u=l.x,d=l.y,m=c.x,v=c.y;d>r!=v>r&&n<(m-u)*(r-d)/(v-d)+u&&(i=!i)}return i}function fC(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),hC(t)}function hC(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const i=e[r];for(;t.length>=2;){const s=t[t.length-1],a=t[t.length-2];if((s.x-a.x)*(i.y-a.y)>=(s.y-a.y)*(i.x-a.x))t.pop();else break}t.push(i)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const i=e[r];for(;n.length>=2;){const s=n[n.length-1],a=n[n.length-2];if((s.x-a.x)*(i.y-a.y)>=(s.y-a.y)*(i.x-a.x))n.pop();else break}n.push(i)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var gC=Gv,Jv=Yv;const vC=gC,yC=g.forwardRef(({className:e,sideOffset:t=4,...n},r)=>o.jsx(Jv,{ref:r,sideOffset:t,className:me("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));yC.displayName=Jv.displayName;var Za=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},el=typeof window>"u"||"Deno"in globalThis;function Lt(){}function xC(e,t){return typeof e=="function"?e(t):e}function wC(e){return typeof e=="number"&&e>=0&&e!==1/0}function bC(e,t){return Math.max(e+(t||0)-Date.now(),0)}function ou(e,t){return typeof e=="function"?e(t):e}function kC(e,t){return typeof e=="function"?e(t):e}function Tp(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:s,queryKey:a,stale:l}=e;if(a){if(r){if(t.queryHash!==Md(a,t.options))return!1}else if(!_o(t.queryKey,a))return!1}if(n!=="all"){const c=t.isActive();if(n==="active"&&!c||n==="inactive"&&c)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||i&&i!==t.state.fetchStatus||s&&!s(t))}function Ap(e,t){const{exact:n,status:r,predicate:i,mutationKey:s}=e;if(s){if(!t.options.mutationKey)return!1;if(n){if($o(t.options.mutationKey)!==$o(s))return!1}else if(!_o(t.options.mutationKey,s))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function Md(e,t){return((t==null?void 0:t.queryKeyHashFn)||$o)(e)}function $o(e){return JSON.stringify(e,(t,n)=>su(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function _o(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>_o(e[n],t[n])):!1}function Zv(e,t){if(e===t)return e;const n=Ip(e)&&Ip(t);if(n||su(e)&&su(t)){const r=n?e:Object.keys(e),i=r.length,s=n?t:Object.keys(t),a=s.length,l=n?[]:{},c=new Set(r);let u=0;for(let d=0;d<a;d++){const m=n?d:s[d];(!n&&c.has(m)||n)&&e[m]===void 0&&t[m]===void 0?(l[m]=void 0,u++):(l[m]=Zv(e[m],t[m]),l[m]===e[m]&&e[m]!==void 0&&u++)}return i===a&&u===i?e:l}return t}function Ip(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function su(e){if(!Rp(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Rp(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Rp(e){return Object.prototype.toString.call(e)==="[object Object]"}function SC(e){return new Promise(t=>{setTimeout(t,e)})}function CC(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Zv(e,t):t}function jC(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function NC(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Dd=Symbol();function ey(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Dd?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var wr,Fn,yi,nf,EC=(nf=class extends Za{constructor(){super();oe(this,wr);oe(this,Fn);oe(this,yi);Y(this,yi,t=>{if(!el&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){E(this,Fn)||this.setEventListener(E(this,yi))}onUnsubscribe(){var t;this.hasListeners()||((t=E(this,Fn))==null||t.call(this),Y(this,Fn,void 0))}setEventListener(t){var n;Y(this,yi,t),(n=E(this,Fn))==null||n.call(this),Y(this,Fn,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){E(this,wr)!==t&&(Y(this,wr,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof E(this,wr)=="boolean"?E(this,wr):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},wr=new WeakMap,Fn=new WeakMap,yi=new WeakMap,nf),ty=new EC,xi,$n,wi,rf,PC=(rf=class extends Za{constructor(){super();oe(this,xi,!0);oe(this,$n);oe(this,wi);Y(this,wi,t=>{if(!el&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){E(this,$n)||this.setEventListener(E(this,wi))}onUnsubscribe(){var t;this.hasListeners()||((t=E(this,$n))==null||t.call(this),Y(this,$n,void 0))}setEventListener(t){var n;Y(this,wi,t),(n=E(this,$n))==null||n.call(this),Y(this,$n,t(this.setOnline.bind(this)))}setOnline(t){E(this,xi)!==t&&(Y(this,xi,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return E(this,xi)}},xi=new WeakMap,$n=new WeakMap,wi=new WeakMap,rf),ba=new PC;function TC(){let e,t;const n=new Promise((i,s)=>{e=i,t=s});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),e(i)},n.reject=i=>{r({status:"rejected",reason:i}),t(i)},n}function AC(e){return Math.min(1e3*2**e,3e4)}function ny(e){return(e??"online")==="online"?ba.isOnline():!0}var ry=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Wl(e){return e instanceof ry}function iy(e){let t=!1,n=0,r=!1,i;const s=TC(),a=p=>{var w;r||(v(new ry(p)),(w=e.abort)==null||w.call(e))},l=()=>{t=!0},c=()=>{t=!1},u=()=>ty.isFocused()&&(e.networkMode==="always"||ba.isOnline())&&e.canRun(),d=()=>ny(e.networkMode)&&e.canRun(),m=p=>{var w;r||(r=!0,(w=e.onSuccess)==null||w.call(e,p),i==null||i(),s.resolve(p))},v=p=>{var w;r||(r=!0,(w=e.onError)==null||w.call(e,p),i==null||i(),s.reject(p))},f=()=>new Promise(p=>{var w;i=y=>{(r||u())&&p(y)},(w=e.onPause)==null||w.call(e)}).then(()=>{var p;i=void 0,r||(p=e.onContinue)==null||p.call(e)}),b=()=>{if(r)return;let p;const w=n===0?e.initialPromise:void 0;try{p=w??e.fn()}catch(y){p=Promise.reject(y)}Promise.resolve(p).then(m).catch(y=>{var C;if(r)return;const h=e.retry??(el?0:3),x=e.retryDelay??AC,k=typeof x=="function"?x(n,y):x,S=h===!0||typeof h=="number"&&n<h||typeof h=="function"&&h(n,y);if(t||!S){v(y);return}n++,(C=e.onFail)==null||C.call(e,n,y),SC(k).then(()=>u()?void 0:f()).then(()=>{t?v(y):b()})})};return{promise:s,cancel:a,continue:()=>(i==null||i(),s),cancelRetry:l,continueRetry:c,canStart:d,start:()=>(d()?b():f().then(b),s)}}var IC=e=>setTimeout(e,0);function RC(){let e=[],t=0,n=l=>{l()},r=l=>{l()},i=IC;const s=l=>{t?e.push(l):i(()=>{n(l)})},a=()=>{const l=e;e=[],l.length&&i(()=>{r(()=>{l.forEach(c=>{n(c)})})})};return{batch:l=>{let c;t++;try{c=l()}finally{t--,t||a()}return c},batchCalls:l=>(...c)=>{s(()=>{l(...c)})},schedule:s,setNotifyFunction:l=>{n=l},setBatchNotifyFunction:l=>{r=l},setScheduler:l=>{i=l}}}var Ke=RC(),br,of,oy=(of=class{constructor(){oe(this,br)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),wC(this.gcTime)&&Y(this,br,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(el?1/0:5*60*1e3))}clearGcTimeout(){E(this,br)&&(clearTimeout(E(this,br)),Y(this,br,void 0))}},br=new WeakMap,of),bi,kr,wt,Sr,He,Uo,Cr,Ot,cn,sf,MC=(sf=class extends oy{constructor(t){super();oe(this,Ot);oe(this,bi);oe(this,kr);oe(this,wt);oe(this,Sr);oe(this,He);oe(this,Uo);oe(this,Cr);Y(this,Cr,!1),Y(this,Uo,t.defaultOptions),this.setOptions(t.options),this.observers=[],Y(this,Sr,t.client),Y(this,wt,E(this,Sr).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,Y(this,bi,LC(this.options)),this.state=t.state??E(this,bi),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=E(this,He))==null?void 0:t.promise}setOptions(t){this.options={...E(this,Uo),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&E(this,wt).remove(this)}setData(t,n){const r=CC(this.state.data,t,this.options);return Be(this,Ot,cn).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){Be(this,Ot,cn).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,i;const n=(r=E(this,He))==null?void 0:r.promise;return(i=E(this,He))==null||i.cancel(t),n?n.then(Lt).catch(Lt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(E(this,bi))}isActive(){return this.observers.some(t=>kC(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Dd||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>ou(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!bC(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=E(this,He))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=E(this,He))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),E(this,wt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(E(this,He)&&(E(this,Cr)?E(this,He).cancel({revert:!0}):E(this,He).cancelRetry()),this.scheduleGc()),E(this,wt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Be(this,Ot,cn).call(this,{type:"invalidate"})}fetch(t,n){var u,d,m;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(E(this,He))return E(this,He).continueRetry(),E(this,He).promise}if(t&&this.setOptions(t),!this.options.queryFn){const v=this.observers.find(f=>f.options.queryFn);v&&this.setOptions(v.options)}const r=new AbortController,i=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>(Y(this,Cr,!0),r.signal)})},s=()=>{const v=ey(this.options,n),b=(()=>{const p={client:E(this,Sr),queryKey:this.queryKey,meta:this.meta};return i(p),p})();return Y(this,Cr,!1),this.options.persister?this.options.persister(v,b,this):v(b)},l=(()=>{const v={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:E(this,Sr),state:this.state,fetchFn:s};return i(v),v})();(u=this.options.behavior)==null||u.onFetch(l,this),Y(this,kr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((d=l.fetchOptions)==null?void 0:d.meta))&&Be(this,Ot,cn).call(this,{type:"fetch",meta:(m=l.fetchOptions)==null?void 0:m.meta});const c=v=>{var f,b,p,w;Wl(v)&&v.silent||Be(this,Ot,cn).call(this,{type:"error",error:v}),Wl(v)||((b=(f=E(this,wt).config).onError)==null||b.call(f,v,this),(w=(p=E(this,wt).config).onSettled)==null||w.call(p,this.state.data,v,this)),this.scheduleGc()};return Y(this,He,iy({initialPromise:n==null?void 0:n.initialPromise,fn:l.fetchFn,abort:r.abort.bind(r),onSuccess:v=>{var f,b,p,w;if(v===void 0){c(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(v)}catch(y){c(y);return}(b=(f=E(this,wt).config).onSuccess)==null||b.call(f,v,this),(w=(p=E(this,wt).config).onSettled)==null||w.call(p,v,this.state.error,this),this.scheduleGc()},onError:c,onFail:(v,f)=>{Be(this,Ot,cn).call(this,{type:"failed",failureCount:v,error:f})},onPause:()=>{Be(this,Ot,cn).call(this,{type:"pause"})},onContinue:()=>{Be(this,Ot,cn).call(this,{type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode,canRun:()=>!0})),E(this,He).start()}},bi=new WeakMap,kr=new WeakMap,wt=new WeakMap,Sr=new WeakMap,He=new WeakMap,Uo=new WeakMap,Cr=new WeakMap,Ot=new WeakSet,cn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...DC(r.data,this.options),fetchMeta:t.meta??null};case"success":return Y(this,kr,void 0),{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return Wl(i)&&i.revert&&E(this,kr)?{...E(this,kr),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),Ke.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),E(this,wt).notify({query:this,type:"updated",action:t})})},sf);function DC(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:ny(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function LC(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Yt,af,OC=(af=class extends Za{constructor(t={}){super();oe(this,Yt);this.config=t,Y(this,Yt,new Map)}build(t,n,r){const i=n.queryKey,s=n.queryHash??Md(i,n);let a=this.get(s);return a||(a=new MC({client:t,queryKey:i,queryHash:s,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(i)}),this.add(a)),a}add(t){E(this,Yt).has(t.queryHash)||(E(this,Yt).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=E(this,Yt).get(t.queryHash);n&&(t.destroy(),n===t&&E(this,Yt).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Ke.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return E(this,Yt).get(t)}getAll(){return[...E(this,Yt).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Tp(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>Tp(t,r)):n}notify(t){Ke.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Ke.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Ke.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Yt=new WeakMap,af),Kt,Qe,jr,Xt,Rn,lf,zC=(lf=class extends oy{constructor(t){super();oe(this,Xt);oe(this,Kt);oe(this,Qe);oe(this,jr);this.mutationId=t.mutationId,Y(this,Qe,t.mutationCache),Y(this,Kt,[]),this.state=t.state||FC(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){E(this,Kt).includes(t)||(E(this,Kt).push(t),this.clearGcTimeout(),E(this,Qe).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){Y(this,Kt,E(this,Kt).filter(n=>n!==t)),this.scheduleGc(),E(this,Qe).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){E(this,Kt).length||(this.state.status==="pending"?this.scheduleGc():E(this,Qe).remove(this))}continue(){var t;return((t=E(this,jr))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var s,a,l,c,u,d,m,v,f,b,p,w,y,h,x,k,S,C,j,T;const n=()=>{Be(this,Xt,Rn).call(this,{type:"continue"})};Y(this,jr,iy({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(I,R)=>{Be(this,Xt,Rn).call(this,{type:"failed",failureCount:I,error:R})},onPause:()=>{Be(this,Xt,Rn).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>E(this,Qe).canRun(this)}));const r=this.state.status==="pending",i=!E(this,jr).canStart();try{if(r)n();else{Be(this,Xt,Rn).call(this,{type:"pending",variables:t,isPaused:i}),await((a=(s=E(this,Qe).config).onMutate)==null?void 0:a.call(s,t,this));const R=await((c=(l=this.options).onMutate)==null?void 0:c.call(l,t));R!==this.state.context&&Be(this,Xt,Rn).call(this,{type:"pending",context:R,variables:t,isPaused:i})}const I=await E(this,jr).start();return await((d=(u=E(this,Qe).config).onSuccess)==null?void 0:d.call(u,I,t,this.state.context,this)),await((v=(m=this.options).onSuccess)==null?void 0:v.call(m,I,t,this.state.context)),await((b=(f=E(this,Qe).config).onSettled)==null?void 0:b.call(f,I,null,this.state.variables,this.state.context,this)),await((w=(p=this.options).onSettled)==null?void 0:w.call(p,I,null,t,this.state.context)),Be(this,Xt,Rn).call(this,{type:"success",data:I}),I}catch(I){try{throw await((h=(y=E(this,Qe).config).onError)==null?void 0:h.call(y,I,t,this.state.context,this)),await((k=(x=this.options).onError)==null?void 0:k.call(x,I,t,this.state.context)),await((C=(S=E(this,Qe).config).onSettled)==null?void 0:C.call(S,void 0,I,this.state.variables,this.state.context,this)),await((T=(j=this.options).onSettled)==null?void 0:T.call(j,void 0,I,t,this.state.context)),I}finally{Be(this,Xt,Rn).call(this,{type:"error",error:I})}}finally{E(this,Qe).runNext(this)}}},Kt=new WeakMap,Qe=new WeakMap,jr=new WeakMap,Xt=new WeakSet,Rn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Ke.batch(()=>{E(this,Kt).forEach(r=>{r.onMutationUpdate(t)}),E(this,Qe).notify({mutation:this,type:"updated",action:t})})},lf);function FC(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var pn,zt,Ho,cf,$C=(cf=class extends Za{constructor(t={}){super();oe(this,pn);oe(this,zt);oe(this,Ho);this.config=t,Y(this,pn,new Set),Y(this,zt,new Map),Y(this,Ho,0)}build(t,n,r){const i=new zC({mutationCache:this,mutationId:++ts(this,Ho)._,options:t.defaultMutationOptions(n),state:r});return this.add(i),i}add(t){E(this,pn).add(t);const n=Ss(t);if(typeof n=="string"){const r=E(this,zt).get(n);r?r.push(t):E(this,zt).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(E(this,pn).delete(t)){const n=Ss(t);if(typeof n=="string"){const r=E(this,zt).get(n);if(r)if(r.length>1){const i=r.indexOf(t);i!==-1&&r.splice(i,1)}else r[0]===t&&E(this,zt).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=Ss(t);if(typeof n=="string"){const r=E(this,zt).get(n),i=r==null?void 0:r.find(s=>s.state.status==="pending");return!i||i===t}else return!0}runNext(t){var r;const n=Ss(t);if(typeof n=="string"){const i=(r=E(this,zt).get(n))==null?void 0:r.find(s=>s!==t&&s.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Ke.batch(()=>{E(this,pn).forEach(t=>{this.notify({type:"removed",mutation:t})}),E(this,pn).clear(),E(this,zt).clear()})}getAll(){return Array.from(E(this,pn))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Ap(n,r))}findAll(t={}){return this.getAll().filter(n=>Ap(t,n))}notify(t){Ke.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return Ke.batch(()=>Promise.all(t.map(n=>n.continue().catch(Lt))))}},pn=new WeakMap,zt=new WeakMap,Ho=new WeakMap,cf);function Ss(e){var t;return(t=e.options.scope)==null?void 0:t.id}function Mp(e){return{onFetch:(t,n)=>{var d,m,v,f,b;const r=t.options,i=(v=(m=(d=t.fetchOptions)==null?void 0:d.meta)==null?void 0:m.fetchMore)==null?void 0:v.direction,s=((f=t.state.data)==null?void 0:f.pages)||[],a=((b=t.state.data)==null?void 0:b.pageParams)||[];let l={pages:[],pageParams:[]},c=0;const u=async()=>{let p=!1;const w=x=>{Object.defineProperty(x,"signal",{enumerable:!0,get:()=>(t.signal.aborted?p=!0:t.signal.addEventListener("abort",()=>{p=!0}),t.signal)})},y=ey(t.options,t.fetchOptions),h=async(x,k,S)=>{if(p)return Promise.reject();if(k==null&&x.pages.length)return Promise.resolve(x);const j=(()=>{const _={client:t.client,queryKey:t.queryKey,pageParam:k,direction:S?"backward":"forward",meta:t.options.meta};return w(_),_})(),T=await y(j),{maxPages:I}=t.options,R=S?NC:jC;return{pages:R(x.pages,T,I),pageParams:R(x.pageParams,k,I)}};if(i&&s.length){const x=i==="backward",k=x?_C:Dp,S={pages:s,pageParams:a},C=k(r,S);l=await h(S,C,x)}else{const x=e??s.length;do{const k=c===0?a[0]??r.initialPageParam:Dp(r,l);if(c>0&&k==null)break;l=await h(l,k),c++}while(c<x)}return l};t.options.persister?t.fetchFn=()=>{var p,w;return(w=(p=t.options).persister)==null?void 0:w.call(p,u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function Dp(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function _C(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var Ce,_n,Bn,ki,Si,Wn,Ci,ji,uf,BC=(uf=class{constructor(e={}){oe(this,Ce);oe(this,_n);oe(this,Bn);oe(this,ki);oe(this,Si);oe(this,Wn);oe(this,Ci);oe(this,ji);Y(this,Ce,e.queryCache||new OC),Y(this,_n,e.mutationCache||new $C),Y(this,Bn,e.defaultOptions||{}),Y(this,ki,new Map),Y(this,Si,new Map),Y(this,Wn,0)}mount(){ts(this,Wn)._++,E(this,Wn)===1&&(Y(this,Ci,ty.subscribe(async e=>{e&&(await this.resumePausedMutations(),E(this,Ce).onFocus())})),Y(this,ji,ba.subscribe(async e=>{e&&(await this.resumePausedMutations(),E(this,Ce).onOnline())})))}unmount(){var e,t;ts(this,Wn)._--,E(this,Wn)===0&&((e=E(this,Ci))==null||e.call(this),Y(this,Ci,void 0),(t=E(this,ji))==null||t.call(this),Y(this,ji,void 0))}isFetching(e){return E(this,Ce).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return E(this,_n).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=E(this,Ce).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=E(this,Ce).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(ou(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return E(this,Ce).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),i=E(this,Ce).get(r.queryHash),s=i==null?void 0:i.state.data,a=xC(t,s);if(a!==void 0)return E(this,Ce).build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return Ke.batch(()=>E(this,Ce).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=E(this,Ce).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=E(this,Ce);Ke.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=E(this,Ce);return Ke.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=Ke.batch(()=>E(this,Ce).findAll(e).map(i=>i.cancel(n)));return Promise.all(r).then(Lt).catch(Lt)}invalidateQueries(e,t={}){return Ke.batch(()=>(E(this,Ce).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=Ke.batch(()=>E(this,Ce).findAll(e).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let s=i.fetch(void 0,n);return n.throwOnError||(s=s.catch(Lt)),i.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(r).then(Lt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=E(this,Ce).build(this,t);return n.isStaleByTime(ou(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Lt).catch(Lt)}fetchInfiniteQuery(e){return e.behavior=Mp(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Lt).catch(Lt)}ensureInfiniteQueryData(e){return e.behavior=Mp(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return ba.isOnline()?E(this,_n).resumePausedMutations():Promise.resolve()}getQueryCache(){return E(this,Ce)}getMutationCache(){return E(this,_n)}getDefaultOptions(){return E(this,Bn)}setDefaultOptions(e){Y(this,Bn,e)}setQueryDefaults(e,t){E(this,ki).set($o(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...E(this,ki).values()],n={};return t.forEach(r=>{_o(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){E(this,Si).set($o(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...E(this,Si).values()],n={};return t.forEach(r=>{_o(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...E(this,Bn).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Md(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Dd&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...E(this,Bn).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){E(this,Ce).clear(),E(this,_n).clear()}},Ce=new WeakMap,_n=new WeakMap,Bn=new WeakMap,ki=new WeakMap,Si=new WeakMap,Wn=new WeakMap,Ci=new WeakMap,ji=new WeakMap,uf),WC=g.createContext(void 0),UC=({client:e,children:t})=>(g.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),o.jsx(WC.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bo(){return Bo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bo.apply(this,arguments)}var Vn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Vn||(Vn={}));const Lp="popstate";function HC(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:l}=r.location;return au("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ka(i)}return qC(t,n,null,e)}function Te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function sy(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function VC(){return Math.random().toString(36).substr(2,8)}function Op(e,t){return{usr:e.state,key:e.key,idx:t}}function au(e,t,n,r){return n===void 0&&(n=null),Bo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Bi(t):t,{state:n,key:t&&t.key||r||VC()})}function ka(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Bi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function qC(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=Vn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(Bo({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function m(){l=Vn.Pop;let w=d(),y=w==null?null:w-u;u=w,c&&c({action:l,location:p.location,delta:y})}function v(w,y){l=Vn.Push;let h=au(p.location,w,y);u=d()+1;let x=Op(h,u),k=p.createHref(h);try{a.pushState(x,"",k)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(k)}s&&c&&c({action:l,location:p.location,delta:1})}function f(w,y){l=Vn.Replace;let h=au(p.location,w,y);u=d();let x=Op(h,u),k=p.createHref(h);a.replaceState(x,"",k),s&&c&&c({action:l,location:p.location,delta:0})}function b(w){let y=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:ka(w);return h=h.replace(/ $/,"%20"),Te(y,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,y)}let p={get action(){return l},get location(){return e(i,a)},listen(w){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Lp,m),c=w,()=>{i.removeEventListener(Lp,m),c=null}},createHref(w){return t(i,w)},createURL:b,encodeLocation(w){let y=b(w);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:v,replace:f,go(w){return a.go(w)}};return p}var zp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zp||(zp={}));function GC(e,t,n){return n===void 0&&(n="/"),QC(e,t,n,!1)}function QC(e,t,n,r){let i=typeof t=="string"?Bi(t):t,s=Ld(i.pathname||"/",n);if(s==null)return null;let a=ay(e);YC(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=s2(s);l=i2(a[c],u,r)}return l}function ay(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(Te(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=er([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(Te(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ay(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:n2(u,s.index),routesMeta:d})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let c of ly(s.path))i(s,a,c)}),t}function ly(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=ly(r.join("/")),l=[];return l.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function YC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:r2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const KC=/^:[\w-]+$/,XC=3,JC=2,ZC=1,e2=10,t2=-2,Fp=e=>e==="*";function n2(e,t){let n=e.split("/"),r=n.length;return n.some(Fp)&&(r+=t2),t&&(r+=JC),n.filter(i=>!Fp(i)).reduce((i,s)=>i+(KC.test(s)?XC:s===""?ZC:e2),r)}function r2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function i2(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",m=$p({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),v=c.route;if(!m&&u&&n&&!r[r.length-1].route.index&&(m=$p({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!m)return null;Object.assign(i,m.params),a.push({params:i,pathname:er([s,m.pathname]),pathnameBase:u2(er([s,m.pathnameBase])),route:v}),m.pathnameBase!=="/"&&(s=er([s,m.pathnameBase]))}return a}function $p(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=o2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,m)=>{let{paramName:v,isOptional:f}=d;if(v==="*"){let p=l[m]||"";a=s.slice(0,s.length-p.length).replace(/(.)\/+$/,"$1")}const b=l[m];return f&&!b?u[v]=void 0:u[v]=(b||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function o2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),sy(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function s2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return sy(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ld(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function a2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Bi(e):e;return{pathname:n?n.startsWith("/")?n:l2(n,t):t,search:d2(r),hash:m2(i)}}function l2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ul(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function c2(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function cy(e,t){let n=c2(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function uy(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Bi(e):(i=Bo({},e),Te(!i.pathname||!i.pathname.includes("?"),Ul("?","pathname","search",i)),Te(!i.pathname||!i.pathname.includes("#"),Ul("#","pathname","hash",i)),Te(!i.search||!i.search.includes("#"),Ul("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let m=t.length-1;if(!r&&a.startsWith("..")){let v=a.split("/");for(;v[0]==="..";)v.shift(),m-=1;i.pathname=v.join("/")}l=m>=0?t[m]:"/"}let c=a2(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const er=e=>e.join("/").replace(/\/\/+/g,"/"),u2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),d2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,m2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function p2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const dy=["post","put","patch","delete"];new Set(dy);const f2=["get",...dy];new Set(f2);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wo(){return Wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wo.apply(this,arguments)}const Od=g.createContext(null),h2=g.createContext(null),_r=g.createContext(null),tl=g.createContext(null),lr=g.createContext({outlet:null,matches:[],isDataRoute:!1}),my=g.createContext(null);function g2(e,t){let{relative:n}=t===void 0?{}:t;Zo()||Te(!1);let{basename:r,navigator:i}=g.useContext(_r),{hash:s,pathname:a,search:l}=hy(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:er([r,a])),i.createHref({pathname:c,search:l,hash:s})}function Zo(){return g.useContext(tl)!=null}function Wi(){return Zo()||Te(!1),g.useContext(tl).location}function py(e){g.useContext(_r).static||g.useLayoutEffect(e)}function fy(){let{isDataRoute:e}=g.useContext(lr);return e?T2():v2()}function v2(){Zo()||Te(!1);let e=g.useContext(Od),{basename:t,future:n,navigator:r}=g.useContext(_r),{matches:i}=g.useContext(lr),{pathname:s}=Wi(),a=JSON.stringify(cy(i,n.v7_relativeSplatPath)),l=g.useRef(!1);return py(()=>{l.current=!0}),g.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let m=uy(u,JSON.parse(a),s,d.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:er([t,m.pathname])),(d.replace?r.replace:r.push)(m,d.state,d)},[t,r,a,s,e])}function zd(){let{matches:e}=g.useContext(lr),t=e[e.length-1];return t?t.params:{}}function hy(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=g.useContext(_r),{matches:i}=g.useContext(lr),{pathname:s}=Wi(),a=JSON.stringify(cy(i,r.v7_relativeSplatPath));return g.useMemo(()=>uy(e,JSON.parse(a),s,n==="path"),[e,a,s,n])}function y2(e,t){return x2(e,t)}function x2(e,t,n,r){Zo()||Te(!1);let{navigator:i}=g.useContext(_r),{matches:s}=g.useContext(lr),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Wi(),d;if(t){var m;let w=typeof t=="string"?Bi(t):t;c==="/"||(m=w.pathname)!=null&&m.startsWith(c)||Te(!1),d=w}else d=u;let v=d.pathname||"/",f=v;if(c!=="/"){let w=c.replace(/^\//,"").split("/");f="/"+v.replace(/^\//,"").split("/").slice(w.length).join("/")}let b=GC(e,{pathname:f}),p=C2(b&&b.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:er([c,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:er([c,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return t&&p?g.createElement(tl.Provider,{value:{location:Wo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Vn.Pop}},p):p}function w2(){let e=P2(),t=p2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},t),n?g.createElement("pre",{style:i},n):null,null)}const b2=g.createElement(w2,null);class k2 extends g.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?g.createElement(lr.Provider,{value:this.props.routeContext},g.createElement(my.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function S2(e){let{routeContext:t,match:n,children:r}=e,i=g.useContext(Od);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(lr.Provider,{value:t},r)}function C2(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);d>=0||Te(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let m=a[d];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=d),m.route.id){let{loaderData:v,errors:f}=n,b=m.route.loader&&v[m.route.id]===void 0&&(!f||f[m.route.id]===void 0);if(m.route.lazy||b){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,m,v)=>{let f,b=!1,p=null,w=null;n&&(f=l&&m.route.id?l[m.route.id]:void 0,p=m.route.errorElement||b2,c&&(u<0&&v===0?(b=!0,w=null):u===v&&(b=!0,w=m.route.hydrateFallbackElement||null)));let y=t.concat(a.slice(0,v+1)),h=()=>{let x;return f?x=p:b?x=w:m.route.Component?x=g.createElement(m.route.Component,null):m.route.element?x=m.route.element:x=d,g.createElement(S2,{match:m,routeContext:{outlet:d,matches:y,isDataRoute:n!=null},children:x})};return n&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?g.createElement(k2,{location:n.location,revalidation:n.revalidation,component:p,error:f,children:h(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):h()},null)}var gy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(gy||{}),Sa=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Sa||{});function j2(e){let t=g.useContext(Od);return t||Te(!1),t}function N2(e){let t=g.useContext(h2);return t||Te(!1),t}function E2(e){let t=g.useContext(lr);return t||Te(!1),t}function vy(e){let t=E2(),n=t.matches[t.matches.length-1];return n.route.id||Te(!1),n.route.id}function P2(){var e;let t=g.useContext(my),n=N2(Sa.UseRouteError),r=vy(Sa.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function T2(){let{router:e}=j2(gy.UseNavigateStable),t=vy(Sa.UseNavigateStable),n=g.useRef(!1);return py(()=>{n.current=!0}),g.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Wo({fromRouteId:t},s)))},[e,t])}function A2(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Le(e){Te(!1)}function I2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Vn.Pop,navigator:s,static:a=!1,future:l}=e;Zo()&&Te(!1);let c=t.replace(/^\/*/,"/"),u=g.useMemo(()=>({basename:c,navigator:s,static:a,future:Wo({v7_relativeSplatPath:!1},l)}),[c,l,s,a]);typeof r=="string"&&(r=Bi(r));let{pathname:d="/",search:m="",hash:v="",state:f=null,key:b="default"}=r,p=g.useMemo(()=>{let w=Ld(d,c);return w==null?null:{location:{pathname:w,search:m,hash:v,state:f,key:b},navigationType:i}},[c,d,m,v,f,b,i]);return p==null?null:g.createElement(_r.Provider,{value:u},g.createElement(tl.Provider,{children:n,value:p}))}function R2(e){let{children:t,location:n}=e;return y2(lu(t),n)}new Promise(()=>{});function lu(e,t){t===void 0&&(t=[]);let n=[];return g.Children.forEach(e,(r,i)=>{if(!g.isValidElement(r))return;let s=[...t,i];if(r.type===g.Fragment){n.push.apply(n,lu(r.props.children,s));return}r.type!==Le&&Te(!1),!r.props.index||!r.props.children||Te(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=lu(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cu(){return cu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cu.apply(this,arguments)}function M2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function D2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function L2(e,t){return e.button===0&&(!t||t==="_self")&&!D2(e)}const O2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],z2="6";try{window.__reactRouterVersion=z2}catch{}const F2="startTransition",_p=Su[F2];function $2(e){let{basename:t,children:n,future:r,window:i}=e,s=g.useRef();s.current==null&&(s.current=HC({window:i,v5Compat:!0}));let a=s.current,[l,c]=g.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=g.useCallback(m=>{u&&_p?_p(()=>c(m)):c(m)},[c,u]);return g.useLayoutEffect(()=>a.listen(d),[a,d]),g.useEffect(()=>A2(r),[r]),g.createElement(I2,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const _2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",B2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,K=g.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:a,state:l,target:c,to:u,preventScrollReset:d,viewTransition:m}=t,v=M2(t,O2),{basename:f}=g.useContext(_r),b,p=!1;if(typeof u=="string"&&B2.test(u)&&(b=u,_2))try{let x=new URL(window.location.href),k=u.startsWith("//")?new URL(x.protocol+u):new URL(u),S=Ld(k.pathname,f);k.origin===x.origin&&S!=null?u=S+k.search+k.hash:p=!0}catch{}let w=g2(u,{relative:i}),y=W2(u,{replace:a,state:l,target:c,preventScrollReset:d,relative:i,viewTransition:m});function h(x){r&&r(x),x.defaultPrevented||y(x)}return g.createElement("a",cu({},v,{href:b||w,onClick:p||s?r:h,ref:n,target:c}))});var Bp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Bp||(Bp={}));var Wp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wp||(Wp={}));function W2(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,viewTransition:l}=t===void 0?{}:t,c=fy(),u=Wi(),d=hy(e,{relative:a});return g.useCallback(m=>{if(L2(m,n)){m.preventDefault();let v=r!==void 0?r:ka(u)===ka(d);c(e,{replace:v,state:i,preventScrollReset:s,relative:a,viewTransition:l})}},[u,c,d,r,i,n,e,s,a,l])}const U2=Ha("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Z=g.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...i},s)=>{const a=r?ab:"button";return o.jsx(a,{className:me(U2({variant:t,size:n,className:e})),ref:s,...i})});Z.displayName="Button";const yy="/assets/ripotek-logo-BVVvRw7A.png",H2=()=>{const[e,t]=g.useState(!1),n=Wi(),r=[{name:"About",path:"/about"},{name:"Services",path:"/services"},{name:"Training",path:"/training"},{name:"Case Studies",path:"/case-studies"},{name:"Blog",path:"/blog"},{name:"Resources",path:"/resources"},{name:"Careers",path:"/careers"}],i=s=>n.pathname===s;return o.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border",children:o.jsxs("div",{className:"container-custom",children:[o.jsxs("div",{className:"flex items-center justify-between h-16 md:h-20",children:[o.jsxs(K,{to:"/",className:`flex items-center gap-3 hover:opacity-80 transition-opacity ${i("/")?"bg-muted rounded-md px-2 py-1":""}`,"aria-current":i("/")?"page":void 0,children:[o.jsx("img",{src:yy,alt:"Ripotek Technology Inc.",className:"h-10 w-10 md:h-12 md:w-12"}),o.jsxs("div",{className:"leading-tight",children:[o.jsx("div",{className:"font-brand text-3xl md:text-4xl font-extrabold tracking-wide text-primary",children:"Ripotek"}),o.jsx("div",{className:"font-brand text-[9px] md:text-[11px] text-muted-foreground tracking-[0.18em]",children:"Design.Engineer.Deliver"})]})]}),o.jsx("div",{className:"hidden lg:flex items-center gap-1",children:r.map(s=>o.jsx(K,{to:s.path,className:`px-4 py-2 rounded-md text-sm font-medium transition-colors ${i(s.path)?"bg-primary text-primary-foreground":"text-foreground hover:bg-muted"}`,children:s.name},s.path))}),o.jsxs("div",{className:"hidden lg:flex items-center gap-3",children:[o.jsx(Z,{asChild:!0,variant:"outline",children:o.jsx(K,{to:"/contact",children:"Contact Us"})}),o.jsx(Z,{asChild:!0,className:"bg-gradient-to-r from-primary to-accent hover:opacity-90",children:o.jsx(K,{to:"/contact",children:"Let's Talk"})})]}),o.jsx("button",{onClick:()=>t(!e),className:"lg:hidden p-2 rounded-md hover:bg-muted transition-colors","aria-label":"Toggle menu",children:e?o.jsx(uv,{className:"h-6 w-6"}):o.jsx(m1,{className:"h-6 w-6"})})]}),e&&o.jsx("div",{className:"lg:hidden py-4 border-t border-border animate-fade-in",children:o.jsxs("div",{className:"flex flex-col gap-2",children:[r.map(s=>o.jsx(K,{to:s.path,onClick:()=>t(!1),className:`px-4 py-3 rounded-md text-sm font-medium transition-colors ${i(s.path)?"bg-primary text-primary-foreground":"text-foreground hover:bg-muted"}`,children:s.name},s.path)),o.jsxs("div",{className:"flex flex-col gap-2 mt-4 px-4",children:[o.jsx(Z,{asChild:!0,variant:"outline",className:"w-full",children:o.jsx(K,{to:"/contact",onClick:()=>t(!1),children:"Contact Us"})}),o.jsx(Z,{asChild:!0,className:"w-full bg-gradient-to-r from-primary to-accent hover:opacity-90",children:o.jsx(K,{to:"/contact",onClick:()=>t(!1),children:"Book Discovery Call"})})]})]})})]})})},V2=()=>{const e=new Date().getFullYear(),t=[{name:"Strategy & Architecture",path:"/services"},{name:"Data Engineering",path:"/services"},{name:"Analytics & BI",path:"/services"},{name:"MLOps & AI",path:"/services"}],n=[{name:"Power BI Analyst",path:"/training"},{name:"Azure Data Engineer",path:"/training"},{name:"Databricks Engineer",path:"/training"},{name:"AI Engineer",path:"/training"}],r=[{name:"About Us",path:"/about"},{name:"Case Studies",path:"/case-studies"},{name:"Careers",path:"/careers"},{name:"Contact",path:"/contact"}];return o.jsx("footer",{className:"bg-primary text-primary-foreground",children:o.jsxs("div",{className:"container-custom section-padding",children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12",children:[o.jsxs("div",{className:"lg:col-span-2",children:[o.jsxs(K,{to:"/",className:"flex items-center gap-3 mb-4",children:[o.jsx("img",{src:yy,alt:"Ripotek Technology Inc.",className:"h-12 w-12"}),o.jsxs("div",{className:"flex flex-col",children:[o.jsx("span",{className:"text-xl font-bold",children:"Ripotek Technology Inc."}),o.jsx("span",{className:"text-sm opacity-80",children:"Design. Engineer. Deliver"})]})]}),o.jsx("p",{className:"text-sm opacity-80 mb-6 max-w-sm",children:"Enterprise data consulting and training services. Empowering organizations with governed self-service BI, Azure modernization, and industry-leading expertise."}),o.jsxs("div",{className:"space-y-2",children:[o.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[o.jsx(xd,{className:"h-4 w-4"}),o.jsx("span",{children:"Calgary, Alberta, Canada"})]}),o.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[o.jsx(lv,{className:"h-4 w-4"}),o.jsx("a",{href:"mailto:info@ripotek.com",className:"hover:underline",children:"info@ripotek.com"})]}),o.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[o.jsx(cv,{className:"h-4 w-4"}),o.jsx("span",{children:"+1306-999-3552"})]})]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-semibold mb-4",children:"Services"}),o.jsx("ul",{className:"space-y-2",children:t.map(i=>o.jsx("li",{children:o.jsx(K,{to:i.path,className:"text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity",children:i.name})},i.name))})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-semibold mb-4",children:"Training"}),o.jsx("ul",{className:"space-y-2",children:n.map(i=>o.jsx("li",{children:o.jsx(K,{to:i.path,className:"text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity",children:i.name})},i.name))})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-semibold mb-4",children:"Company"}),o.jsx("ul",{className:"space-y-2",children:r.map(i=>o.jsx("li",{children:o.jsx(K,{to:i.path,className:"text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity",children:i.name})},i.name))})]})]}),o.jsx("div",{className:"pt-8 border-t border-primary-foreground/20",children:o.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-4",children:[o.jsxs("p",{className:"text-sm opacity-80",children:["© ",e," Ripotek Technology Inc. All rights reserved."]}),o.jsxs("div",{className:"flex items-center gap-6",children:[o.jsx(K,{to:"/terms",className:"text-sm opacity-80 hover:opacity-100 hover:underline",children:"Terms of Service"}),o.jsx(K,{to:"/privacy",className:"text-sm opacity-80 hover:opacity-100 hover:underline",children:"Privacy Policy"}),o.jsx(K,{to:"/refund",className:"text-sm opacity-80 hover:opacity-100 hover:underline",children:"Refund Policy"})]}),o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"opacity-80 hover:opacity-100 transition-opacity",children:o.jsx(d1,{className:"h-5 w-5"})}),o.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"opacity-80 hover:opacity-100 transition-opacity",children:o.jsx(h1,{className:"h-5 w-5"})})]})]})})]})})},Ie=g.forwardRef(({className:e,...t},n)=>o.jsx("div",{ref:n,className:me("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));Ie.displayName="Card";const nt=g.forwardRef(({className:e,...t},n)=>o.jsx("div",{ref:n,className:me("flex flex-col space-y-1.5 p-6",e),...t}));nt.displayName="CardHeader";const rt=g.forwardRef(({className:e,...t},n)=>o.jsx("h3",{ref:n,className:me("text-2xl font-semibold leading-none tracking-tight",e),...t}));rt.displayName="CardTitle";const Zt=g.forwardRef(({className:e,...t},n)=>o.jsx("p",{ref:n,className:me("text-sm text-muted-foreground",e),...t}));Zt.displayName="CardDescription";const dt=g.forwardRef(({className:e,...t},n)=>o.jsx("div",{ref:n,className:me("p-6 pt-0",e),...t}));dt.displayName="CardContent";const xy=g.forwardRef(({className:e,...t},n)=>o.jsx("div",{ref:n,className:me("flex items-center p-6 pt-0",e),...t}));xy.displayName="CardFooter";const Yr=({icon:e,title:t,description:n,features:r})=>o.jsxs(Ie,{className:"hover-lift h-full border-2 hover:border-accent transition-all duration-300",children:[o.jsxs(nt,{children:[o.jsx("div",{className:"w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4",children:o.jsx(e,{className:"h-6 w-6 text-white"})}),o.jsx(rt,{className:"text-xl",children:t}),o.jsx(Zt,{className:"text-base",children:n})]}),o.jsx(dt,{children:o.jsx("ul",{className:"space-y-2",children:r.map((i,s)=>o.jsxs("li",{className:"flex items-start gap-2 text-sm",children:[o.jsx("span",{className:"text-accent mt-0.5",children:"✓"}),o.jsx("span",{children:i})]},s))})})]}),q2="/assets/hero-image-CfQ76ZwD.jpg",wy="/assets/team-collaboration-B296ViAT.jpg",G2=()=>{const e=[{icon:av,title:"Strategy & Architecture",description:"Data architecture reviews, governance frameworks, and strategic roadmaps.",features:["Enterprise data architecture design","Governance policy development","Technology stack assessments","Migration strategy planning"]},{icon:sv,title:"Data Engineering",description:"Azure/Databricks/Fabric lakehouse, ELT pipelines, and semantic models.",features:["Lakehouse architecture implementation","ETL/ELT pipeline development","Data quality frameworks","Real-time data processing"]},{icon:iv,title:"Analytics & BI",description:"Power BI dashboards, KPI frameworks, and embedded analytics.",features:["Interactive dashboard design","Semantic layer modeling","Embedded analytics solutions","Self-service BI enablement"]},{icon:rv,title:"MLOps & AI",description:"GenAI POCs, feature stores, model serving, and AI integration.",features:["Generative AI solutions","ML model deployment","Feature engineering pipelines","AI governance frameworks"]},{icon:wd,title:"Managed Services",description:"Platform administration, monitoring, and cost optimization.",features:["24/7 infrastructure monitoring","Performance optimization","Cost management","Security compliance"]},{icon:Va,title:"Training & Placement",description:"Industry-leading training programs with training-to-hire pathways.",features:["Hands-on project-based learning","One-on-one coaching & mentorship","Corporate & individual training","Job placement assistance"]}],t=[{icon:nv,value:"15+",label:"Years Combined Experience"},{icon:qa,value:"50+",label:"Enterprise Clients"},{icon:ga,value:"95%",label:"Client Satisfaction"},{icon:fn,value:"100+",label:"Projects Delivered"}],n=[{name:"Microsoft Azure",src:"/logos/color/azure-color.svg",href:"https://azure.microsoft.com/"},{name:"Databricks",src:"/logos/color/databricks-color.svg",href:"https://www.databricks.com/"},{name:"Microsoft Fabric",src:"/logos/color/fabric-color.png",href:"https://www.microsoft.com/fabric"},{name:"Power BI",src:"/logos/color/powerbi-color.svg",href:"https://powerbi.microsoft.com/"},{name:"Snowflake",src:"/logos/color/snowflake-color.svg",href:"https://www.snowflake.com/"}];return o.jsxs("div",{className:"min-h-screen",children:[o.jsxs("section",{className:"relative min-h-[90vh] flex items-center overflow-hidden",children:[o.jsxs("div",{className:"absolute inset-0 z-0",children:[o.jsx("img",{src:q2,alt:"Data Engineering Hero",className:"w-full h-full object-cover opacity-20"}),o.jsx("div",{className:"absolute inset-0 gradient-bg opacity-90"})]}),o.jsx("div",{className:"container-custom relative z-10",children:o.jsxs("div",{className:"max-w-4xl mx-auto text-center animate-fade-in-up",children:[o.jsxs("h1",{className:"text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight",children:[o.jsx("span",{className:"gradient-text",children:"Design. Engineer. Deliver."}),"Enterprise Data Solutions"]}),o.jsx("p",{className:"text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto",children:"Transform your data landscape with governed self-service BI, Azure modernization, and world-class training from seasoned industry professionals."}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[o.jsx(Z,{size:"lg",asChild:!0,className:"bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 text-[#000a00]/[0.51]",children:o.jsxs(K,{to:"/contact",children:["Book Discovery Call ",o.jsx(Ht,{className:"ml-2 h-5 w-5"})]})}),o.jsx(Z,{size:"lg",variant:"outline",asChild:!0,className:"text-lg px-8",children:o.jsx(K,{to:"/services",children:"Explore Services"})})]})]})})]}),o.jsx("section",{className:"section-padding bg-muted/30",children:o.jsx("div",{className:"container-custom",children:o.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:t.map((r,i)=>o.jsxs("div",{className:"text-center animate-fade-in",style:{animationDelay:`${i*100}ms`},children:[o.jsx("div",{className:"inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent mb-4",children:o.jsx(r.icon,{className:"h-6 w-6 text-white"})}),o.jsx("div",{className:"text-3xl md:text-4xl font-bold gradient-text mb-2",children:r.value}),o.jsx("div",{className:"text-sm text-muted-foreground",children:r.label})]},i))})})}),o.jsx("section",{className:"section-padding",children:o.jsxs("div",{className:"container-custom",children:[o.jsxs("div",{className:"text-center mb-12 animate-fade-in",children:[o.jsxs("h2",{className:"text-3xl md:text-5xl font-bold mb-4",children:["Comprehensive ",o.jsx("span",{className:"gradient-text",children:"Data Solutions"})]}),o.jsx("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto",children:"End-to-end consulting services and training programs designed to accelerate your data transformation journey."})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map((r,i)=>o.jsx("div",{className:"animate-fade-in",style:{animationDelay:`${i*100}ms`},children:o.jsx(Yr,{...r})},i))}),o.jsx("div",{className:"text-center mt-12",children:o.jsx(Z,{size:"lg",asChild:!0,variant:"outline",children:o.jsxs(K,{to:"/services",children:["View All Services ",o.jsx(Ht,{className:"ml-2 h-5 w-5"})]})})})]})}),o.jsx("section",{className:"section-padding bg-muted/30",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[o.jsxs("div",{className:"animate-fade-in",children:[o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-6",children:["Why ",o.jsx("span",{className:"gradient-text",children:"Ripotek?"})]}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx(fn,{className:"h-6 w-6 text-accent flex-shrink-0 mt-1"}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-semibold mb-1",children:"Industry-Leading Expertise"}),o.jsx("p",{className:"text-muted-foreground",children:"Renowned instructors and consultants with real-world experience in Energy, Finance, and Public sectors."})]})]}),o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx(fn,{className:"h-6 w-6 text-accent flex-shrink-0 mt-1"}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-semibold mb-1",children:"Hands-On Learning"}),o.jsx("p",{className:"text-muted-foreground",children:"Real-world projects, mentorship, and one-on-one coaching to ensure practical skill development."})]})]}),o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx(fn,{className:"h-6 w-6 text-accent flex-shrink-0 mt-1"}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-semibold mb-1",children:"Training-to-Hire Model"}),o.jsx("p",{className:"text-muted-foreground",children:"Direct pathways to employment with co-op placements and talent network connections."})]})]}),o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx(fn,{className:"h-6 w-6 text-accent flex-shrink-0 mt-1"}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-semibold mb-1",children:"End-to-End Solutions"}),o.jsx("p",{className:"text-muted-foreground",children:"From strategy to implementation, we deliver governed self-service BI and Azure modernization."})]})]})]}),o.jsx("div",{className:"mt-8",children:o.jsx(Z,{size:"lg",asChild:!0,className:"bg-gradient-to-r from-primary to-accent hover:opacity-90",children:o.jsx(K,{to:"/about",children:"Learn More About Us"})})})]}),o.jsx("div",{className:"animate-fade-in",children:o.jsx("img",{src:wy,alt:"Team Collaboration",className:"rounded-2xl shadow-strong hover-lift"})})]})})}),o.jsx("section",{className:"section-padding",children:o.jsxs("div",{className:"container-custom",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:["Trusted ",o.jsx("span",{className:"gradient-text",children:"Technology Partners"})]}),o.jsx("p",{className:"text-lg text-muted-foreground",children:"Certified and experienced in industry-leading platforms"})]}),o.jsx("div",{className:"flex flex-wrap justify-center items-center gap-8 md:gap-12",children:n.map((r,i)=>o.jsxs("a",{href:r.href,target:"_blank",rel:"noopener noreferrer",className:"px-6 py-4 bg-card rounded-lg border-2 border-border hover:border-accent transition-colors hover-lift flex items-center justify-center","aria-label":r.name,title:r.name,children:[o.jsx("img",{src:r.src,alt:r.name,className:"h-10 w-auto transition-all",onError:s=>{const a=s.currentTarget;let l=a.src.replace("/logos/color/","/logos/").replace("-color","");l.endsWith(".png")&&(l=l.slice(0,-4)+".svg"),a.onerror=null,a.src=l}}),o.jsx("noscript",{children:r.name})]},i))})]})}),o.jsx("section",{className:"section-padding gradient-bg text-primary-foreground",children:o.jsxs("div",{className:"container-custom text-center",children:[o.jsx("h2",{className:"text-3xl md:text-5xl font-bold mb-6",children:"Ready to Transform Your Data Journey?"}),o.jsx("p",{className:"text-lg opacity-90 mb-8 max-w-2xl mx-auto",children:"Whether you need consulting services or professional training, we're here to help you achieve your data and AI goals."}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[o.jsx(Z,{size:"lg",asChild:!0,variant:"secondary",className:"text-lg px-8",children:o.jsx(K,{to:"/contact",children:"Request a Proposal"})}),o.jsx(Z,{size:"lg",asChild:!0,variant:"outline",className:"text-lg px-8 border-white text-white hover:bg-white hover:text-primary",children:o.jsx(K,{to:"/training",children:"Browse Training Courses"})})]})]})})]})},Q2=()=>o.jsx(G2,{}),Y2=()=>{const e=[{icon:u1,title:"Innovation",description:"Embracing cutting-edge technologies and methodologies to deliver best-in-class solutions."},{icon:Kc,title:"Excellence",description:"Committed to the highest standards in every project, training session, and client engagement."},{icon:mp,title:"Integrity",description:"Building trust through transparency, honesty, and ethical business practices."},{icon:cp,title:"Client Success",description:"Your success is our success. We're invested in delivering measurable business outcomes."}];return o.jsxs("div",{className:"min-h-screen pt-20",children:[o.jsx("section",{className:"section-padding gradient-bg text-primary-foreground",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"max-w-4xl mx-auto text-center animate-fade-in-up",children:[o.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6",children:"About Ripotek"}),o.jsx("p",{className:"text-xl opacity-90",children:"Founded in March 2023 in Calgary, Alberta, Ripotek Technology Inc. was built on a vision to empower organizations through data-driven transformation and world-class training."})]})})}),o.jsx("section",{className:"section-padding",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"max-w-4xl mx-auto",children:[o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-6 text-center",children:["Our ",o.jsx("span",{className:"gradient-text",children:"Story"})]}),o.jsxs("div",{className:"space-y-6 text-lg text-muted-foreground",children:[o.jsx("p",{children:"Ripotek Technology Inc. emerged from a passion for solving complex data challenges and a commitment to bridging the skills gap in the rapidly evolving fields of data engineering, business intelligence, and artificial intelligence."}),o.jsx("p",{children:"With decades of combined experience across Energy, Financial Services, and Public Sector industries, our founding team recognized the need for a consulting firm that could not only deliver technical excellence but also transfer knowledge effectively."}),o.jsx("p",{children:"Today, we serve enterprise clients across North America, providing end-to-end consulting services from strategy to implementation, while simultaneously running comprehensive training programs that prepare the next generation of data professionals."})]})]})})}),o.jsx("section",{className:"section-padding bg-muted/30",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[o.jsxs("div",{className:"animate-fade-in",children:[o.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6",children:o.jsx(mp,{className:"h-8 w-8 text-white"})}),o.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Our Mission"}),o.jsx("p",{className:"text-lg text-muted-foreground leading-relaxed",children:"To empower organizations and individuals with cutting-edge data solutions and training that drive measurable business value. We are committed to delivering excellence through innovation, expertise, and a client-first approach."})]}),o.jsxs("div",{className:"animate-fade-in",children:[o.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6",children:o.jsx(cp,{className:"h-8 w-8 text-white"})}),o.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Our Vision"}),o.jsx("p",{className:"text-lg text-muted-foreground leading-relaxed",children:"To be the leading data consulting and training organization in Western Canada, recognized for transforming how enterprises leverage data and for developing world-class data professionals who shape the industry's future."})]})]})})}),o.jsx("section",{className:"section-padding",children:o.jsxs("div",{className:"container-custom",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:["Our Core ",o.jsx("span",{className:"gradient-text",children:"Values"})]}),o.jsx("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto",children:"The principles that guide everything we do"})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:e.map((t,n)=>o.jsxs(Ie,{className:"hover-lift text-center animate-fade-in",style:{animationDelay:`${n*100}ms`},children:[o.jsxs(nt,{children:[o.jsx("div",{className:"w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4",children:o.jsx(t.icon,{className:"h-7 w-7 text-white"})}),o.jsx(rt,{className:"text-xl",children:t.title})]}),o.jsx(dt,{children:o.jsx("p",{className:"text-muted-foreground",children:t.description})})]},n))})]})}),o.jsx("section",{className:"section-padding bg-muted/30",children:o.jsxs("div",{className:"container-custom",children:[o.jsx("div",{className:"text-center mb-12",children:o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:["Industries ",o.jsx("span",{className:"gradient-text",children:"We Serve"})]})}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto",children:[o.jsxs("div",{className:"text-center p-8 bg-card rounded-xl border-2 border-border hover:border-accent transition-colors hover-lift",children:[o.jsx("h3",{className:"text-2xl font-bold mb-3",children:"Energy"}),o.jsx("p",{className:"text-muted-foreground",children:"Pipeline integrity, production optimization, and regulatory compliance solutions for oil & gas enterprises."})]}),o.jsxs("div",{className:"text-center p-8 bg-card rounded-xl border-2 border-border hover:border-accent transition-colors hover-lift",children:[o.jsx("h3",{className:"text-2xl font-bold mb-3",children:"Financial Services"}),o.jsx("p",{className:"text-muted-foreground",children:"Risk analytics, fraud detection, and customer intelligence platforms for banks and insurance companies."})]}),o.jsxs("div",{className:"text-center p-8 bg-card rounded-xl border-2 border-border hover:border-accent transition-colors hover-lift",children:[o.jsx("h3",{className:"text-2xl font-bold mb-3",children:"Public Sector"}),o.jsx("p",{className:"text-muted-foreground",children:"Citizen service optimization, performance dashboards, and data governance for government organizations."})]})]})]})}),o.jsx("section",{className:"section-padding",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-6",children:["Meet Our ",o.jsx("span",{className:"gradient-text",children:"Leadership Team"})]}),o.jsx("div",{className:"p-12 bg-muted/30 rounded-2xl border-2 border-dashed border-border",children:o.jsx("p",{className:"text-xl text-muted-foreground",children:"Our leadership profiles are currently being finalized. Check back soon to meet the seasoned professionals leading Ripotek's vision forward."})})]})})})]})},K2=()=>{const e=[{icon:av,title:"Data Architecture Reviews",description:"Comprehensive assessments of your current data landscape with actionable recommendations.",features:["Current state architecture documentation","Gap analysis and risk assessment","Future state design recommendations","Technology stack evaluation"]},{icon:Xc,title:"Data Governance",description:"Establish frameworks that ensure data quality, security, and regulatory compliance.",features:["Governance policy development","Data stewardship programs","Compliance framework design","Data quality standards"]},{icon:a1,title:"Strategic Roadmaps",description:"Detailed implementation roadmaps aligned with your business objectives.",features:["Phased implementation planning","Resource allocation strategies","Risk mitigation planning","ROI modeling and projections"]}],t=[{icon:sv,title:"Lakehouse Architecture",description:"Modern data lakehouse implementations on Azure, Databricks, and Microsoft Fabric.",features:["Medallion architecture design","Data lake to lakehouse migration","Delta Lake implementation","Unity Catalog configuration"]},{icon:g1,title:"ELT Pipeline Development",description:"Scalable, maintainable data pipelines using Azure Data Factory and Databricks.",features:["Batch and streaming pipelines","Incremental loading strategies","Data orchestration workflows","Pipeline monitoring & alerting"]},{icon:Fl,title:"Semantic Modeling",description:"Business-friendly data models that power self-service analytics.",features:["Star/snowflake schema design","Power BI semantic models","DAX calculation development","Performance optimization"]}],n=[{icon:iv,title:"Power BI Solutions",description:"Interactive dashboards and reports that drive business decisions.",features:["Custom dashboard development","Real-time analytics","Mobile-optimized reports","Row-level security implementation"]},{icon:Fl,title:"KPI Frameworks",description:"Strategic metrics that align with your business objectives.",features:["KPI identification workshops","Balanced scorecard design","Executive dashboard creation","Performance tracking systems"]},{icon:dp,title:"Embedded Analytics",description:"Integrate analytics directly into your applications and workflows.",features:["Power BI embedded implementation","White-label analytics solutions","API integration","Custom visualization development"]}],r=[{icon:rv,title:"Generative AI POCs",description:"Rapid prototyping of AI solutions using Azure OpenAI and industry frameworks.",features:["Use case identification","RAG implementation","Prompt engineering","Solution architecture design"]},{icon:dp,title:"MLOps Implementation",description:"Production-ready ML systems with CI/CD, monitoring, and governance.",features:["Model versioning & registry","Automated training pipelines","Model monitoring & drift detection","A/B testing frameworks"]},{icon:f1,title:"Feature Engineering",description:"Feature stores and transformation pipelines for consistent ML features.",features:["Feature store implementation","Feature transformation pipelines","Online/offline feature serving","Feature monitoring"]}],i=[{icon:wd,title:"Platform Administration",description:"Comprehensive management of your data platform infrastructure.",features:["User access management","Platform configuration","Workspace administration","License optimization"]},{icon:Xc,title:"Monitoring & Support",description:"Proactive monitoring and rapid issue resolution to ensure uptime.",features:["24/7 infrastructure monitoring","Performance optimization","Incident response","Regular health checks"]},{icon:Fl,title:"Cost Optimization",description:"Strategic cost management and resource optimization.",features:["Cost analysis and reporting","Resource rightsizing","Reserved capacity planning","Spend forecasting"]}];return o.jsxs("div",{className:"min-h-screen pt-20",children:[o.jsx("section",{className:"section-padding gradient-bg text-primary-foreground",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"max-w-4xl mx-auto text-center animate-fade-in-up",children:[o.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6",children:"Our Services"}),o.jsx("p",{className:"text-xl opacity-90",children:"End-to-end data consulting from strategy to implementation. We deliver governed self-service BI, Azure modernization, and AI-powered solutions."})]})})}),o.jsx("section",{className:"section-padding",children:o.jsxs("div",{className:"container-custom",children:[o.jsxs("div",{className:"mb-12",children:[o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:["Strategy & ",o.jsx("span",{className:"gradient-text",children:"Architecture"})]}),o.jsx("p",{className:"text-lg text-muted-foreground max-w-3xl",children:"Establish a solid foundation with comprehensive data strategy, architecture design, and governance frameworks."})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map((s,a)=>o.jsx("div",{className:"animate-fade-in",style:{animationDelay:`${a*100}ms`},children:o.jsx(Yr,{...s})},a))})]})}),o.jsx("section",{className:"section-padding bg-muted/30",children:o.jsxs("div",{className:"container-custom",children:[o.jsxs("div",{className:"mb-12",children:[o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:["Build & ",o.jsx("span",{className:"gradient-text",children:"Engineering"})]}),o.jsx("p",{className:"text-lg text-muted-foreground max-w-3xl",children:"Modern data platform implementation with Azure, Databricks, and Microsoft Fabric."})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map((s,a)=>o.jsx("div",{className:"animate-fade-in",style:{animationDelay:`${a*100}ms`},children:o.jsx(Yr,{...s})},a))})]})}),o.jsx("section",{className:"section-padding",children:o.jsxs("div",{className:"container-custom",children:[o.jsxs("div",{className:"mb-12",children:[o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:["Analytics & ",o.jsx("span",{className:"gradient-text",children:"Business Intelligence"})]}),o.jsx("p",{className:"text-lg text-muted-foreground max-w-3xl",children:"Transform data into actionable insights with Power BI dashboards and self-service analytics."})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:n.map((s,a)=>o.jsx("div",{className:"animate-fade-in",style:{animationDelay:`${a*100}ms`},children:o.jsx(Yr,{...s})},a))})]})}),o.jsx("section",{className:"section-padding bg-muted/30",children:o.jsxs("div",{className:"container-custom",children:[o.jsxs("div",{className:"mb-12",children:[o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:["MLOps & ",o.jsx("span",{className:"gradient-text",children:"Artificial Intelligence"})]}),o.jsx("p",{className:"text-lg text-muted-foreground max-w-3xl",children:"Harness the power of AI with production-ready ML systems and generative AI solutions."})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:r.map((s,a)=>o.jsx("div",{className:"animate-fade-in",style:{animationDelay:`${a*100}ms`},children:o.jsx(Yr,{...s})},a))})]})}),o.jsx("section",{className:"section-padding",children:o.jsxs("div",{className:"container-custom",children:[o.jsxs("div",{className:"mb-12",children:[o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:["Managed ",o.jsx("span",{className:"gradient-text",children:"Services"})]}),o.jsx("p",{className:"text-lg text-muted-foreground max-w-3xl",children:"Focus on your business while we manage, monitor, and optimize your data platform."})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:i.map((s,a)=>o.jsx("div",{className:"animate-fade-in",style:{animationDelay:`${a*100}ms`},children:o.jsx(Yr,{...s})},a))})]})}),o.jsx("section",{className:"section-padding bg-accent/10 border-y-2 border-accent",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-8",children:[o.jsxs("div",{className:"flex-1",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center",children:o.jsx(Va,{className:"h-6 w-6 text-white"})}),o.jsx("h2",{className:"text-2xl md:text-3xl font-bold",children:"Looking for Training?"})]}),o.jsx("p",{className:"text-lg text-muted-foreground",children:"We offer comprehensive training programs in Power BI, Azure Data Engineering, Databricks, AI, and more. Learn from industry experts with hands-on projects and job placement assistance."})]}),o.jsx(Z,{size:"lg",asChild:!0,className:"bg-gradient-to-r from-primary to-accent hover:opacity-90 whitespace-nowrap",children:o.jsxs(K,{to:"/training",children:["Explore Training Programs ",o.jsx(Ht,{className:"ml-2 h-5 w-5"})]})})]})})}),o.jsx("section",{className:"section-padding gradient-bg text-primary-foreground",children:o.jsxs("div",{className:"container-custom text-center",children:[o.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-6",children:"Ready to Transform Your Data Platform?"}),o.jsx("p",{className:"text-lg opacity-90 mb-8 max-w-2xl mx-auto",children:"Let's discuss how our consulting services can accelerate your data transformation journey."}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[o.jsx(Z,{size:"lg",asChild:!0,variant:"secondary",children:o.jsx(K,{to:"/contact",children:"Request a Proposal"})}),o.jsx(Z,{size:"lg",asChild:!0,variant:"outline",className:"border-white text-white hover:bg-white hover:text-primary",children:o.jsx(K,{to:"/case-studies",children:"View Case Studies"})})]})]})})]})},X2=Ha("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function qe({className:e,variant:t,...n}){return o.jsx("div",{className:me(X2({variant:t}),e),...n})}const J2=({title:e,description:t,duration:n,level:r,format:i,highlights:s})=>o.jsxs(Ie,{className:"hover-lift h-full flex flex-col",children:[o.jsxs(nt,{children:[o.jsxs("div",{className:"flex items-center justify-between mb-2",children:[o.jsx(qe,{variant:"secondary",children:r}),o.jsx(qe,{variant:"outline",children:i})]}),o.jsx(rt,{className:"text-xl",children:e}),o.jsx(Zt,{children:t})]}),o.jsxs(dt,{className:"flex-1",children:[o.jsxs("div",{className:"flex items-center gap-4 mb-4 text-sm text-muted-foreground",children:[o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsx(i1,{className:"h-4 w-4"}),o.jsx("span",{children:n})]}),o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsx(qa,{className:"h-4 w-4"}),o.jsx("span",{children:"Small Groups"})]}),o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsx(t1,{className:"h-4 w-4"}),o.jsx("span",{children:"Hands-on"})]})]}),o.jsx("ul",{className:"space-y-2",children:s.map((a,l)=>o.jsxs("li",{className:"flex items-start gap-2 text-sm",children:[o.jsx("span",{className:"text-accent mt-0.5",children:"→"}),o.jsx("span",{children:a})]},l))})]}),o.jsxs(xy,{className:"gap-2",children:[o.jsx(Z,{className:"flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90",children:"Enroll Now"}),o.jsx(Z,{variant:"outline",className:"flex-1",children:"Learn More"})]})]}),by="/assets/training-session-CxS2FULG.jpg",Z2=()=>{const e=[{title:"Power BI Analyst",description:"Master data visualization and business intelligence with Microsoft Power BI.",duration:"8 weeks",level:"Beginner to Advanced",format:"Hybrid",highlights:["DAX formulas and calculations","Advanced data modeling","Dashboard design best practices","Real-time analytics implementation","Row-level security configuration"]},{title:"Azure Data Engineer",description:"Design and implement data solutions on Microsoft Azure platform.",duration:"10 weeks",level:"Intermediate",format:"Live Online",highlights:["Azure Data Factory pipelines","Azure Synapse Analytics","Data lake architecture","Azure Databricks integration","Certification preparation (DP-203)"]},{title:"Databricks Engineer",description:"Build scalable data pipelines and lakehouse architectures with Databricks.",duration:"8 weeks",level:"Intermediate to Advanced",format:"Hybrid",highlights:["Delta Lake fundamentals","Spark optimization techniques","Unity Catalog administration","Medallion architecture implementation","MLflow integration"]},{title:"Business Intelligence Analyst",description:"Comprehensive BI training covering requirements, modeling, and reporting.",duration:"12 weeks",level:"Beginner",format:"Live Online",highlights:["Requirements gathering","Dimensional modeling","ETL concepts and tools","Power BI + SQL Server","Business storytelling with data"]},{title:"AI Engineer",description:"Build and deploy machine learning and AI solutions in production.",duration:"10 weeks",level:"Advanced",format:"Hybrid",highlights:["ML fundamentals and frameworks","Azure Machine Learning","MLOps best practices","GenAI and LangChain","Model deployment strategies"]},{title:"Prompt Engineer",description:"Master the art of prompt engineering for generative AI applications.",duration:"4 weeks",level:"Beginner to Intermediate",format:"Live Online",highlights:["Prompt design principles","Azure OpenAI Service","RAG implementation","Chain-of-thought techniques","Production prompt management"]},{title:"Python for Data",description:"Python programming fundamentals for data analysis and engineering.",duration:"6 weeks",level:"Beginner",format:"Live Online",highlights:["Python syntax and fundamentals","Pandas and NumPy","Data visualization with Matplotlib","API integration","Jupyter notebooks"]},{title:"Azure Data Factory Masterclass",description:"Deep dive into Azure Data Factory for enterprise ETL/ELT solutions.",duration:"6 weeks",level:"Intermediate",format:"Live Online",highlights:["Pipeline design patterns","Mapping data flows","CI/CD for ADF","Performance optimization","Integration with other Azure services"]}],t=[{icon:xd,title:"In-Person Calgary",description:"Hands-on training at our Calgary facility with direct instructor access."},{icon:Jc,title:"Live Online",description:"Interactive virtual sessions with real-time collaboration and support."},{icon:Zb,title:"Corporate On-Site",description:"Customized training delivered at your organization's location."}];return o.jsxs("div",{className:"min-h-screen pt-20",children:[o.jsx("section",{className:"section-padding gradient-bg text-primary-foreground",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"max-w-4xl mx-auto text-center animate-fade-in-up",children:[o.jsx(qe,{className:"mb-6 px-4 py-2 bg-accent text-accent-foreground",children:"Training-to-Hire Model"}),o.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6",children:"Launch Your Data Career"}),o.jsx("p",{className:"text-xl opacity-90 mb-8",children:"Industry-leading training programs with hands-on projects, mentorship, and direct pathways to employment."}),o.jsx(Z,{size:"lg",asChild:!0,variant:"secondary",children:o.jsx(K,{to:"/contact",children:"Book a Course Consultation"})})]})})}),o.jsx("section",{className:"section-padding",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 items-center",children:[o.jsxs("div",{className:"animate-fade-in",children:[o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-6",children:["Why ",o.jsx("span",{className:"gradient-text",children:"Ripotek Training?"})]}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx(fn,{className:"h-6 w-6 text-accent flex-shrink-0 mt-1"}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-semibold mb-1",children:"Renowned Instructors"}),o.jsx("p",{className:"text-muted-foreground",children:"Learn from seasoned professionals with years of real-world industry experience."})]})]}),o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx(fn,{className:"h-6 w-6 text-accent flex-shrink-0 mt-1"}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-semibold mb-1",children:"Hands-On Projects"}),o.jsx("p",{className:"text-muted-foreground",children:"Work on real-world scenarios and build a portfolio that showcases your skills."})]})]}),o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx(fn,{className:"h-6 w-6 text-accent flex-shrink-0 mt-1"}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-semibold mb-1",children:"One-on-One Coaching"}),o.jsx("p",{className:"text-muted-foreground",children:"Personalized mentorship to ensure you master every concept."})]})]}),o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx(fn,{className:"h-6 w-6 text-accent flex-shrink-0 mt-1"}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-semibold mb-1",children:"Job Placement Support"}),o.jsx("p",{className:"text-muted-foreground",children:"Career coaching, resume workshops, and connections to our hiring network."})]})]})]})]}),o.jsx("div",{className:"animate-fade-in",children:o.jsx("img",{src:by,alt:"Training Session",className:"rounded-2xl shadow-strong hover-lift"})})]})})}),o.jsx("section",{className:"section-padding bg-muted/30",children:o.jsxs("div",{className:"container-custom",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:["Flexible ",o.jsx("span",{className:"gradient-text",children:"Learning Formats"})]}),o.jsx("p",{className:"text-lg text-muted-foreground",children:"Choose the format that fits your schedule and learning style"})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:t.map((n,r)=>o.jsxs("div",{className:"p-8 bg-card rounded-xl border-2 border-border hover:border-accent transition-colors hover-lift text-center",children:[o.jsx("div",{className:"w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4",children:o.jsx(n.icon,{className:"h-7 w-7 text-white"})}),o.jsx("h3",{className:"text-xl font-bold mb-2",children:n.title}),o.jsx("p",{className:"text-muted-foreground",children:n.description})]},r))})]})}),o.jsx("section",{className:"section-padding",children:o.jsxs("div",{className:"container-custom",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:["Course ",o.jsx("span",{className:"gradient-text",children:"Catalog"})]}),o.jsx("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto",children:"Comprehensive training programs designed to prepare you for in-demand data roles"})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map((n,r)=>o.jsx("div",{className:"animate-fade-in",style:{animationDelay:`${r*50}ms`},children:o.jsx(J2,{...n})},r))})]})}),o.jsx("section",{className:"section-padding bg-muted/30",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[o.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6",children:o.jsx(lp,{className:"h-8 w-8 text-white"})}),o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-6",children:["Training-to-Hire ",o.jsx("span",{className:"gradient-text",children:"Pathway"})]}),o.jsx("p",{className:"text-lg text-muted-foreground mb-8",children:"Our unique training-to-hire model connects top graduates with leading organizations looking for skilled data professionals. Complete your training, demonstrate your skills on real projects, and transition directly into a career role."}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[o.jsxs("div",{className:"p-6 bg-card rounded-xl border-2 border-border",children:[o.jsx("div",{className:"text-3xl font-bold gradient-text mb-2",children:"1"}),o.jsx("h3",{className:"font-semibold mb-2",children:"Learn"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Complete hands-on training with expert instructors"})]}),o.jsxs("div",{className:"p-6 bg-card rounded-xl border-2 border-border",children:[o.jsx("div",{className:"text-3xl font-bold gradient-text mb-2",children:"2"}),o.jsx("h3",{className:"font-semibold mb-2",children:"Practice"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Build portfolio projects on real business scenarios"})]}),o.jsxs("div",{className:"p-6 bg-card rounded-xl border-2 border-border",children:[o.jsx("div",{className:"text-3xl font-bold gradient-text mb-2",children:"3"}),o.jsx("h3",{className:"font-semibold mb-2",children:"Connect"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Get matched with hiring partners in our network"})]})]}),o.jsx(Z,{size:"lg",asChild:!0,className:"bg-gradient-to-r from-primary to-accent hover:opacity-90",children:o.jsxs(K,{to:"/contact",children:["Join Our Talent Network ",o.jsx(Ht,{className:"ml-2 h-5 w-5"})]})})]})})}),o.jsx("section",{className:"section-padding",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:[o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent mb-4",children:o.jsx(Va,{className:"h-6 w-6 text-white"})}),o.jsx("div",{className:"text-3xl font-bold gradient-text mb-2",children:"500+"}),o.jsx("div",{className:"text-sm text-muted-foreground",children:"Graduates"})]}),o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent mb-4",children:o.jsx(nv,{className:"h-6 w-6 text-white"})}),o.jsx("div",{className:"text-3xl font-bold gradient-text mb-2",children:"90%"}),o.jsx("div",{className:"text-sm text-muted-foreground",children:"Job Placement Rate"})]}),o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent mb-4",children:o.jsx(qa,{className:"h-6 w-6 text-white"})}),o.jsx("div",{className:"text-3xl font-bold gradient-text mb-2",children:"15"}),o.jsx("div",{className:"text-sm text-muted-foreground",children:"Industry Experts"})]}),o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent mb-4",children:o.jsx(lp,{className:"h-6 w-6 text-white"})}),o.jsx("div",{className:"text-3xl font-bold gradient-text mb-2",children:"50+"}),o.jsx("div",{className:"text-sm text-muted-foreground",children:"Hiring Partners"})]})]})})}),o.jsx("section",{className:"section-padding gradient-bg text-primary-foreground",children:o.jsxs("div",{className:"container-custom text-center",children:[o.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-6",children:"Ready to Start Your Journey?"}),o.jsx("p",{className:"text-lg opacity-90 mb-8 max-w-2xl mx-auto",children:"Explore our training programs and take the first step towards a rewarding career in data and AI."}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[o.jsx(Z,{size:"lg",asChild:!0,variant:"secondary",children:o.jsx(K,{to:"/contact",children:"Enroll in a Course"})}),o.jsx(Z,{size:"lg",asChild:!0,variant:"outline",className:"border-white text-white hover:bg-white hover:text-primary",children:o.jsx(K,{to:"/contact",children:"Schedule a Consultation"})})]})]})})]})},ej=()=>{const e=[{id:1,title:"Pipeline Integrity Dashboard for Major Energy Provider",industry:"Energy",client:"Fortune 500 Oil & Gas Company",challenge:"The client needed real-time visibility into pipeline health across 10,000+ km of infrastructure to ensure regulatory compliance and prevent costly incidents.",solution:"Implemented a comprehensive Power BI solution integrated with IoT sensors and SCADA systems, featuring predictive maintenance alerts and automated regulatory reporting.",technologies:["Power BI","Azure Data Factory","Azure Synapse","Azure IoT Hub"],outcomes:["40% reduction in unplanned maintenance costs","99.9% compliance with regulatory reporting requirements","Real-time anomaly detection reducing incident response time by 60%","Self-service analytics enabling 100+ field engineers to access insights"],icon:wd,color:"from-orange-500 to-red-500"},{id:2,title:"Azure Lakehouse Migration for Financial Services",industry:"Financial Services",client:"Regional Banking Institution",challenge:"Legacy data warehouse struggling with performance, high costs, and inability to support real-time analytics for fraud detection and customer insights.",solution:"Architected and migrated to Azure Databricks lakehouse with Delta Lake, implementing medallion architecture and real-time streaming for fraud detection.",technologies:["Azure Databricks","Delta Lake","Azure Event Hubs","Power BI","Unity Catalog"],outcomes:["70% reduction in infrastructure costs","Sub-second query performance for fraud detection","Enabled real-time customer 360 analytics","Reduced time-to-insight from days to hours"],icon:ga,color:"from-blue-500 to-cyan-500"},{id:3,title:"Governed Self-Service BI for Public Sector",industry:"Public Sector",client:"Provincial Government Agency",challenge:"Multiple departments using disconnected tools, resulting in inconsistent metrics, security concerns, and inability to derive cross-departmental insights.",solution:"Designed and implemented enterprise-wide governed BI platform using Microsoft Fabric, establishing centralized semantic models, data governance, and self-service capabilities.",technologies:["Microsoft Fabric","Power BI","Azure Purview","Power Automate"],outcomes:["Unified 15 departments onto single analytics platform","Established data governance framework with lineage tracking","Enabled 500+ users with self-service capabilities","90% reduction in manual report generation time"],icon:Xc,color:"from-green-500 to-teal-500"}];return o.jsxs("div",{className:"min-h-screen pt-20",children:[o.jsx("section",{className:"section-padding gradient-bg text-primary-foreground",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"max-w-4xl mx-auto text-center animate-fade-in-up",children:[o.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6",children:"Success Stories"}),o.jsx("p",{className:"text-xl opacity-90",children:"Real-world transformations delivered for leading organizations across Energy, Financial Services, and Public Sector industries."})]})})}),o.jsx("section",{className:"section-padding",children:o.jsx("div",{className:"container-custom",children:o.jsx("div",{className:"space-y-12",children:e.map((t,n)=>o.jsxs(Ie,{className:"hover-lift border-2 animate-fade-in",style:{animationDelay:`${n*200}ms`},children:[o.jsx(nt,{children:o.jsx("div",{className:"flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4",children:o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:`w-14 h-14 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`,children:o.jsx(t.icon,{className:"h-7 w-7 text-white"})}),o.jsxs("div",{className:"flex-1",children:[o.jsx(qe,{variant:"secondary",className:"mb-2",children:t.industry}),o.jsx(rt,{className:"text-2xl mb-2",children:t.title}),o.jsx(Zt,{className:"text-base",children:t.client})]})]})})}),o.jsxs(dt,{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"font-semibold text-lg mb-2",children:"Challenge"}),o.jsx("p",{className:"text-muted-foreground",children:t.challenge})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-semibold text-lg mb-2",children:"Solution"}),o.jsx("p",{className:"text-muted-foreground mb-4",children:t.solution}),o.jsx("div",{className:"flex flex-wrap gap-2",children:t.technologies.map((r,i)=>o.jsx(qe,{variant:"outline",children:r},i))})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-semibold text-lg mb-3",children:"Key Outcomes"}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:t.outcomes.map((r,i)=>o.jsxs("div",{className:"flex items-start gap-2",children:[o.jsx("span",{className:"text-accent mt-0.5 flex-shrink-0",children:"✓"}),o.jsx("span",{className:"text-sm",children:r})]},i))})]})]})]},t.id))})})}),o.jsx("section",{className:"section-padding bg-muted/30",children:o.jsxs("div",{className:"container-custom",children:[o.jsx("div",{className:"text-center mb-12",children:o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:["Client ",o.jsx("span",{className:"gradient-text",children:"Testimonials"})]})}),o.jsx("div",{className:"max-w-3xl mx-auto p-12 bg-card rounded-2xl border-2 border-dashed border-border text-center",children:o.jsx("p",{className:"text-xl text-muted-foreground",children:"Client testimonials and detailed case study downloads are coming soon. Contact us to learn more about these projects and discuss how we can help your organization."})})]})}),o.jsx("section",{className:"section-padding gradient-bg text-primary-foreground",children:o.jsxs("div",{className:"container-custom text-center",children:[o.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-6",children:"Ready to Write Your Success Story?"}),o.jsx("p",{className:"text-lg opacity-90 mb-8 max-w-2xl mx-auto",children:"Let's discuss how we can deliver similar transformational outcomes for your organization."}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[o.jsx(Z,{size:"lg",asChild:!0,variant:"secondary",children:o.jsx(K,{to:"/contact",children:"Book Discovery Call"})}),o.jsx(Z,{size:"lg",asChild:!0,variant:"outline",className:"border-white text-white hover:bg-white hover:text-primary",children:o.jsxs(K,{to:"/services",children:["Explore Services ",o.jsx(Ht,{className:"ml-2 h-5 w-5"})]})})]})]})})]})},tj=`# The Practical Guide to AI Implementation for Mid-Market Companies

## Executive Summary

Artificial Intelligence is no longer the exclusive domain of tech giants. Mid-market companies across Canada are successfully implementing AI solutions that deliver measurable business value—often with modest budgets and existing technical resources.

This whitepaper provides a practical, step-by-step framework for organizations ready to move beyond AI exploration into actual implementation. Based on real-world deployments across manufacturing, professional services, retail, and logistics sectors, we outline:

- A structured approach to identifying high-value AI use cases
- Practical guidance on building vs. buying AI solutions
- Strategies for managing risk and ensuring ROI
- Common pitfalls and how to avoid them
- Case studies from Alberta businesses achieving concrete results

Whether you're beginning your AI journey or accelerating existing initiatives, this guide offers actionable insights grounded in practical experience rather than theoretical frameworks.

---

## Table of Contents

1. Introduction: The Mid-Market AI Opportunity
2. Preparation: Building Your AI Foundation
3. Identification: Finding the Right Use Cases
4. Evaluation: Build, Buy, or Partner?
5. Implementation: From Pilot to Production
6. Measurement: Tracking ROI and Success Metrics
7. Scaling: From First Win to AI Maturity
8. Case Studies: Real Results from Canadian Companies
9. Resources and Next Steps

---

## 1. Introduction: The Mid-Market AI Opportunity

### The AI Readiness Gap

Recent surveys indicate a troubling disconnect in Canadian business: 78% of executives identify AI as critical to future competitiveness, yet only 19% have moved beyond experimental pilots to production deployments.

For mid-market companies—organizations with 50-1,000 employees and $10M-$1B in revenue—this gap represents both challenge and opportunity. While lacking the resources of enterprise competitors, mid-market firms possess crucial advantages:

**Agility**: Faster decision-making without layers of bureaucracy  
**Focus**: Ability to target specific, high-impact use cases  
**Culture**: Closer leadership-to-frontline connections for change management  
**Motivation**: Greater urgency to find competitive advantages

### Why Now?

Three converging trends make 2025 the inflection point for mid-market AI adoption:

**Accessibility**: Cloud AI services and pre-trained models eliminate the need for extensive data science teams or infrastructure investments.

**Affordability**: Per-use pricing models mean companies pay only for what they consume, with entry costs measured in thousands rather than millions.

**Availability**: A maturing ecosystem of specialized vendors, consultants, and training programs supports companies without deep technical expertise.

Companies that move decisively in this window will establish advantages that become increasingly difficult for competitors to overcome.

### What This Guide Covers (and Doesn't)

**This guide focuses on:**
- Practical AI applications delivering ROI within 12-18 months
- Solutions accessible to companies without dedicated data science teams
- Real examples from Canadian mid-market businesses
- Specific actions you can take this quarter

**This guide does not cover:**
- Theoretical AI concepts or algorithm deep-dives
- Bleeding-edge research or experimental technologies
- Solutions requiring multi-million dollar investments
- Industry-specific technical jargon

---

## 2. Preparation: Building Your AI Foundation

Before evaluating specific AI applications, organizations must establish foundational capabilities. Companies that skip this step face delays, cost overruns, and failed pilots.

### 2.1 Data Infrastructure Assessment

AI models require quality data—lots of it, in accessible formats. Assess your current state:

**Data Availability**
- What business data do you currently collect?
- Where is it stored (spreadsheets, databases, SaaS applications)?
- How historical data do you have (AI models typically need 6-24 months)?
- Are there obvious gaps in data collection?

**Data Quality**
- How complete is your data (what percentage of records have missing fields)?
- How accurate is it (do you regularly find errors or inconsistencies)?
- How consistent are data formats and definitions across systems?
- When was data last cleaned or validated?

**Data Accessibility**
- Can you easily extract data from current systems?
- Do you have APIs or database access, or only manual exports?
- What technical skills are required to access data?
- Are there legal or compliance restrictions on data use?

**Red Flags**
🚩 Critical data only exists in individual's spreadsheets or email  
🚩 No centralized database or data warehouse  
🚩 Data quality issues known but not addressed  
🚩 Different departments use different definitions for key metrics  

**Green Lights**
✅ Core business data in centralized, accessible systems  
✅ Regular data quality reviews and cleanup processes  
✅ APIs or programmatic access available  
✅ 12+ months of historical data in consistent formats  

### 2.2 Technical Capability Evaluation

Honest assessment of your current technical capabilities prevents costly missteps:

**In-House Technical Skills**
- Do you have developers or technical staff on team?
- What programming languages or platforms do they know?
- Have they worked with APIs, databases, or cloud services?
- Are they excited about learning AI/ML, or already overwhelmed?

**IT Infrastructure**
- Do you use cloud services (AWS, Azure, Google Cloud) or on-premise servers?
- How modern are your core business systems?
- Do systems have open APIs for integration?
- What's your IT team's capacity for new projects?

**Vendor Relationships**
- Who are your key technology vendors?
- Do they offer AI/ML capabilities?
- How responsive are they to customization requests?
- Are contracts flexible enough for new integrations?

Most mid-market companies will need to supplement internal capabilities with external expertise—and that's perfectly fine. The key is knowing your gaps honestly so you can plan accordingly.

### 2.3 Organizational Readiness

Technical readiness matters, but organizational factors often determine success or failure:

**Executive Sponsorship**
- Does leadership understand AI beyond buzzwords?
- Is there a specific executive accountable for AI initiatives?
- Has leadership allocated budget for experimentation?
- Are executives willing to accept that some pilots will fail?

**Change Capacity**
- How many other major initiatives are currently in flight?
- How has your organization handled past technology changes?
- Are employees generally open to new tools and processes?
- Do you have internal champions excited about AI?

**Cultural Factors**
- Is data already used to drive decisions, or is it mostly intuition?
- Are employees comfortable with transparency and measurement?
- How is failure typically treated—learning opportunity or blame assignment?
- Does your culture support experimentation and iteration?

**Resource Reality Check**
- Can you allocate 10-20% of relevant employees' time to AI projects?
- Is there budget for both implementation and ongoing maintenance?
- Can you wait 6-12 months for ROI, or do you need immediate results?
- Are you prepared for the multi-year journey to AI maturity?

### 2.4 Building Your AI Governance Framework

Before implementing anything, establish clear decision-making frameworks:

**Accountability Structure**
- Who makes final decisions on AI investments?
- Who owns AI projects operationally?
- How are competing priorities resolved?
- What approval process applies to AI initiatives?

**Risk Management**
- What data privacy and security standards apply?
- How will you ensure AI decisions are explainable?
- What happens if an AI system makes an error?
- How will you monitor for bias or unfair outcomes?

**Ethics and Values**
- Will AI replace jobs, augment them, or create new ones?
- How will you communicate AI adoption to employees and customers?
- What AI applications are off-limits based on company values?
- How do AI initiatives align with broader CSR commitments?

---

## 3. Identification: Finding the Right Use Cases

The most common mistake in AI adoption is starting with technology rather than business problems. Successful companies flip this approach.

### 3.1 The Use Case Selection Framework

Evaluate potential AI applications across four dimensions:

**Business Value**
- How much time or money could this save annually?
- Could this enable new revenue opportunities?
- Would this improve customer satisfaction or retention?
- Does this address a competitive disadvantage?

**Technical Feasibility**
- Do you have the data this AI application requires?
- Are similar solutions proven in your industry or others?
- Can this be implemented with available technology?
- Are there vendors offering relevant solutions?

**Implementation Complexity**
- How many systems need to integrate?
- How many departments or teams are involved?
- What regulatory or compliance hurdles exist?
- How much process change is required?

**Strategic Alignment**
- Does this support core business objectives?
- Does this build capabilities for future AI applications?
- Does this differentiate you from competitors?
- Does this align with customer expectations and market trends?

Plot potential use cases on this scoring matrix to identify where to start:

**Quick Wins** (High Value, Low Complexity): Start here  
**Strategic Bets** (High Value, High Complexity): Phase 2-3  
**Learning Projects** (Low Value, Low Complexity): Good for building confidence  
**Avoid** (Low Value, High Complexity): Not worth pursuing  

### 3.2 AI Application Categories for Mid-Market Companies

Most successful mid-market AI deployments fall into these categories:

#### Predictive Analytics

**What**: Using historical data to forecast future outcomes  
**Common Applications**:
- Demand forecasting and inventory optimization
- Customer churn prediction
- Equipment maintenance scheduling
- Sales pipeline forecasting

**Best For**: Companies with substantial historical data and recurring patterns  
**Typical ROI**: 15-30% improvement in forecast accuracy  
**Investment Range**: $15,000-$75,000  

#### Process Automation

**What**: Using AI to automate repetitive, rule-based tasks  
**Common Applications**:
- Invoice processing and data entry
- Customer inquiry routing and response
- Contract review and extraction
- Report generation

**Best For**: High-volume, repetitive processes with clear rules  
**Typical ROI**: 40-70% reduction in processing time  
**Investment Range**: $10,000-$50,000  

#### Intelligent Customer Interaction

**What**: AI-powered tools for customer service and engagement  
**Common Applications**:
- Chatbots for common inquiries
- Email response automation
- Product recommendation engines
- Content personalization

**Best For**: Companies with high customer interaction volumes  
**Typical ROI**: 25-50% reduction in response time, 15-20% satisfaction improvement  
**Investment Range**: $20,000-$100,000  

#### Quality and Risk Detection

**What**: Using AI to identify anomalies, defects, or risks  
**Common Applications**:
- Quality control and defect detection
- Fraud detection
- Security threat identification
- Compliance monitoring

**Best For**: Industries with high-cost quality failures or regulatory requirements  
**Typical ROI**: 30-60% reduction in defects or incidents  
**Investment Range**: $25,000-$150,000  

### 3.3 The Prioritization Workshop

A structured workshop helps align stakeholders and select initial use cases:

**Participants** (6-12 people):
- Executive sponsor
- Department heads from key functions
- Frontline employees who understand daily operations
- IT/technical representative
- Finance/operations for ROI analysis

**Agenda** (3-4 hours):

**Part 1: Pain Point Brainstorming** (45 min)
- Each participant lists top 3-5 business problems or inefficiencies
- Group similar items and prioritize by impact
- Focus on problems, not solutions

**Part 2: AI Opportunity Identification** (60 min)
- Review AI application categories
- Discuss which might address identified pain points
- Bring in relevant case studies from similar companies

**Part 3: Scoring and Selection** (45 min)
- Score each potential use case on value/feasibility matrix
- Discuss resource requirements and constraints
- Select 2-3 highest-scoring opportunities to explore further

**Part 4: Next Steps** (30 min)
- Assign owners to each selected use case
- Define timeline for detailed assessment
- Establish checkpoints for decision-making

**Workshop Output**:
- Prioritized list of 2-3 AI use cases for detailed assessment
- Assigned ownership and accountability
- Timeline for next phase of evaluation

---

## 4. Evaluation: Build, Buy, or Partner?

For each prioritized use case, you'll face a fundamental decision: develop custom solutions, purchase commercial software, or partner with specialized vendors.

### 4.1 The Build Option

**When to Build:**
- Your use case is unique to your business and competitive advantage depends on customization
- You have internal technical capability (developers, data scientists)
- Commercial solutions don't adequately address your needs
- You require tight integration with proprietary systems
- Long-term total cost of ownership favors custom development

**Pros:**
✓ Complete control and customization  
✓ Intellectual property remains in-house  
✓ No ongoing vendor licensing fees  
✓ Can iterate based on feedback quickly  

**Cons:**
✗ Higher upfront investment  
✗ Requires internal technical talent  
✗ Longer time to deployment  
✗ Ongoing maintenance burden  
✗ Technology risk if team leaves  

**Cost Range**: $30,000-$200,000+ depending on complexity  
**Timeline**: 4-12 months to initial deployment  

### 4.2 The Buy Option

**When to Buy:**
- Commercial solutions exist that address 80%+ of your requirements
- Vendor products integrate with your existing systems
- You lack internal development resources
- Speed to deployment is priority
- You want ongoing vendor support and updates

**Pros:**
✓ Faster deployment (weeks vs. months)  
✓ Proven, tested solutions  
✓ Vendor handles updates and maintenance  
✓ Lower upfront costs  
✓ Less implementation risk  

**Cons:**
✗ Limited customization options  
✗ Ongoing subscription costs  
✗ Vendor dependency and lock-in  
✗ May include unnecessary features  
✗ Integration challenges with legacy systems  

**Cost Range**: $5,000-$50,000 implementation + $500-$5,000/month subscription  
**Timeline**: 1-4 months to full deployment  

### 4.3 The Partner Option

**When to Partner:**
- You need custom solutions but lack internal expertise
- Use case requires specialized domain knowledge
- You want to maintain strategic control while outsourcing execution
- Budget supports external resources
- Timeline requires acceleration

**Pros:**
✓ Access to specialized expertise  
✓ Faster than building entirely in-house  
✓ More customization than pure commercial products  
✓ Knowledge transfer to internal team  
✓ Lower ongoing costs than subscriptions  

**Cons:**
✗ Finding the right partner is challenging  
✗ Requires effective project management  
✗ Knowledge transfer may be incomplete  
✗ Risk of misaligned incentives  
✗ May still need internal maintenance  

**Cost Range**: $25,000-$150,000 depending on scope  
**Timeline**: 2-6 months to deployment  

### 4.4 The Hybrid Approach

Many successful implementations combine approaches:

**Platform + Customization**: Purchase commercial AI platform and customize for specific needs  
**Build Core + Buy Components**: Develop custom solution using commercial AI APIs and services  
**Partner for Launch + Internal for Scaling**: Use consultants for initial implementation, build internal capability for expansion  

### 4.5 Vendor Evaluation Framework

When evaluating commercial vendors or consulting partners:

**Technical Fit**
□ Does the solution address your specific use case?  
□ Does it integrate with your existing systems?  
□ Is the technology proven and mature?  
□ Can you access and export your data?  
□ What happens if the vendor goes out of business?  

**Vendor Viability**
□ How long has the vendor been in business?  
□ Who are their reference customers?  
□ What's their financial stability?  
□ How responsive is their support?  
□ Do they have domain expertise in your industry?  

**Commercial Terms**
□ Is pricing transparent and predictable?  
□ Are there hidden costs or required add-ons?  
□ What's included in support vs. paid services?  
□ How flexible are contract terms?  
□ What are your exit options if it doesn't work?  

**Implementation Support**
□ What does implementation process look like?  
□ How much of your team's time is required?  
□ What training and documentation is provided?  
□ How long until you're fully live?  
□ What does post-launch support include?  

Always ask for customer references—and actually call them. Ask specifically about implementation challenges, ongoing support quality, and whether they'd choose the same vendor again.

---

## 5. Implementation: From Pilot to Production

Moving from signed contract or approved project to production deployment requires careful planning and execution.

### 5.1 The Pilot-First Approach

We strongly recommend starting with contained pilots before full-scale rollouts:

**Pilot Characteristics:**
- Limited scope (one department, product line, or geography)
- Defined timeline (typically 60-90 days)
- Clear success metrics
- Reversible (can roll back if needed)
- Real-world conditions (not just test data)

**Pilot Objectives:**
1. Validate technical functionality
2. Confirm business value hypothesis
3. Identify integration challenges
4. Surface training and change management needs
5. Build organizational confidence

### 5.2 Implementation Phase Structure

**Phase 1: Project Setup (Weeks 1-2)**

Activities:
- Form cross-functional project team
- Define detailed requirements and success criteria
- Establish project governance and communication
- Kick off technical implementation work
- Begin stakeholder communication

Deliverables:
- Project charter document
- Implementation plan with milestones
- Risk register
 - Communication plan

**Phase 2: Development/Configuration (Weeks 3-8)**

Activities:
- Build or configure AI solution
- Develop integrations with existing systems
- Create training materials
- Conduct internal testing
- Refine based on initial feedback

Deliverables:
- Working AI solution in test environment
- Integration with key systems
- User documentation and training materials
- Test results and validation

**Phase 3: Pilot Deployment (Weeks 9-12)**

Activities:
- Deploy to pilot user group
- Provide intensive support and training
- Monitor usage and gather feedback
- Track success metrics
- Make rapid iterations based on feedback

Deliverables:
- Live system in production with pilot users
- Usage and performance metrics
- Documented issues and resolutions
- Pilot results summary

**Phase 4: Evaluation and Scaling (Weeks 13-16)**

Activities:
- Analyze pilot results vs. success criteria
- Make go/no-go decision on broader rollout
- Refine solution based on lessons learned
- Plan full-scale deployment
- Secure additional resources if needed

Deliverables:
- Pilot evaluation report
- ROI analysis
- Scaling plan (if proceeding)
- Updated training and support materials

### 5.3 Change Management Essentials

Technical implementation is only half the battle—people and process changes often determine success:

**Early and Often Communication**
- Announce project and objectives before technical work begins
- Provide regular updates on progress
- Share early wins and learning
- Address concerns transparently

**Involve End Users**
- Include frontline employees in requirements gathering
- Get pilot volunteers from different user segments
- Create feedback loops for continuous improvement
- Recognize and reward early adopters

**Adequate Training**
- Don't assume AI solutions are "intuitive"
- Provide hands-on practice, not just presentations
- Offer multiple learning formats (videos, documentation, office hours)
- Plan for ongoing refresher training

**Support Infrastructure**
- Designate internal champions as first line of support
- Create clear escalation paths for issues
- Document common questions and answers
- Monitor adoption metrics to identify struggling users

### 5.4 Risk Mitigation Strategies

**Technical Risks:**
- Integration failures → Thorough testing in staging environment before production
- Data quality issues → Data validation and cleanup before launch
- Performance problems → Load testing with realistic scenarios
- Security vulnerabilities → Security review and penetration testing

**Business Risks:**
- Low adoption rates → Early user involvement and strong change management
- Insufficient ROI → Conservative business case with clear metrics
- Vendor issues → Escrow agreements and exit planning
- Compliance violations → Legal/compliance review before deployment

**Organizational Risks:**
- Executive sponsor departure → Engage multiple stakeholders
- Competing priorities → Clear governance and decision rights
- Budget overruns → Phased approach with go/no-go gates
- Key team member loss → Documentation and knowledge sharing

---

## 6. Measurement: Tracking ROI and Success Metrics

"What gets measured gets managed." Defining success criteria before implementation enables objective evaluation.

### 6.1 Types of Success Metrics

**Efficiency Metrics**
- Time saved per transaction
- Processing cost per unit
- Manual effort reduction
- Error rate decrease
- Cycle time improvement

**Quality Metrics**
- Accuracy or precision improvement
- Defect rate reduction
- Consistency increase
- Compliance incident reduction

**Business Impact Metrics**
- Revenue increase
- Cost savings
- Customer satisfaction improvement
- Employee satisfaction improvement
- Competitive advantage

**Adoption Metrics**
- User adoption rate
- Usage frequency
- Feature utilization
- User satisfaction scores

### 6.2 Calculating ROI

**Simple ROI Formula:**

\`\`\`
ROI = (Annual Benefit - Annual Cost) / Total Investment × 100%

Annual Benefit = Time Savings Value + Cost Reductions + Revenue Increases
Annual Cost = Subscription Fees + Maintenance + Support
Total Investment = Implementation Costs + Training + Change Management
\`\`\`

**Example: Invoice Processing Automation**

Implementation: $25,000  
Annual subscription: $6,000  
Time saved: 15 hours/week × $40/hour × 50 weeks = $30,000  
Error reduction value: $8,000  

Annual Benefit: $38,000  
Annual Cost: $6,000  
Net Annual Benefit: $32,000  

ROI = ($32,000 - $6,000) / $25,000 = 104% Year 1  
Payback Period: 7.8 months  

### 6.3 Beyond Financial ROI

Not all benefits are easily quantifiable:

**Strategic Benefits:**
- Capability building for future AI applications
- Organizational learning and culture change
- Competitive positioning
- Employee attraction and retention
- Customer perception and satisfaction

**Risk Reduction:**
- Improved compliance and audit readiness
- Enhanced security
- Business continuity improvements
- Reduced dependence on key individuals

Acknowledge these qualitative benefits in business cases, even if not included in ROI calculations.

### 6.4 Ongoing Monitoring

Measurement doesn't stop at launch:

**Weekly During Pilot:**
- Usage statistics
- Error logs and incidents
- User feedback
- Quick-win identification

**Monthly Post-Launch:**
- Key performance metrics vs. baseline
- User adoption trends
- Cost tracking vs. budget
- Issue resolution time

**Quarterly:**
- Business impact assessment
- ROI recalculation
- Strategic alignment review
- Optimization opportunities

---

## 7. Scaling: From First Win to AI Maturity

One successful AI implementation is great—but the real transformation comes from systematically expanding AI capabilities across the organization.

### 7.1 The AI Maturity Journey

**Stage 1: Experimentation (Months 1-6)**
- Running first pilot projects
- Building initial AI capabilities
- Learning what works in your context

**Stage 2: Targeted Adoption (Months 7-18)**
- Scaling successful pilots
- Adding 2-3 new use cases
- Establishing AI governance
- Developing internal expertise

**Stage 3: Systematic Integration (Months 19-36)**
- AI considered for all major process changes
- AI capabilities embedded in business planning
- Internal AI center of excellence
- Portfolio of 8-12 active AI solutions

**Stage 4: AI-Driven Transformation (36+ Months)**
- AI central to competitive strategy
- Continuous innovation in AI applications
- AI capability as talent attractor
- Potential for AI-enabled new business models

Most mid-market companies should aim to reach Stage 3 within 2-3 years.

### 7.2 Building Internal AI Capability

**Upskilling Existing Team:**
- AI literacy training for all employees
- Technical training for IT and analytics teams
- Executive education on AI strategy
- Specialized certification programs for key staff

**Augmenting with External Expertise:**
- Fractional AI leadership (part-time CTO or Chief AI Officer)
- On-demand data science support
- Specialized consultants for specific projects
- University partnerships for research challenges

**Hiring Selectively:**
- AI product owner or program manager (full-time role around 3-4 active projects)
- Data engineer or ML engineer (when you have 5+ AI applications in production)
- Avoid hiring data scientists too early—focus on engineering and productionization

### 7.3 Creating an AI Innovation Pipeline

**Idea Generation:**
- Regular workshops with different departments
- Employee suggestion programs with incentives
- Customer feedback analysis
- Competitive intelligence monitoring

**Rapid Assessment:**
- Quick scoring against value/feasibility framework
- 1-2 page concept documents
- Go/no-go decision within 2 weeks

**Structured Portfolio:**
- 2-3 pilots in flight at any time
- 1-2 projects in scaling phase
- 4-6 mature solutions in optimization
- Clear decision gates between stages

### 7.4 Common Scaling Challenges

**Challenge: Pilot Success Doesn't Scale**
Solution: Ensure pilots test real-world conditions, not idealized scenarios

**Challenge: Organization Can't Absorb More Change**
Solution: Pace implementations to match organizational capacity; 2-3 major changes per year maximum

**Challenge: Solutions Become Siloed**
Solution: Establish architectural standards and shared platforms early

**Challenge: Early Enthusiasm Wanes**
Solution: Celebrate wins publicly, show ROI clearly, refresh communication

**Challenge: Technical Debt Accumulates**
Solution: Allocate 20-30% of AI team capacity to maintenance and optimization

---

## 8. Case Studies: Real Results from Canadian Companies

### Case Study 1: Manufacturing Quality Control

**Company**: Alberta-based precision parts manufacturer, 120 employees, $18M revenue

**Challenge**: Manual quality inspection process was bottleneck in production, with 8-12% defect rate reaching customers despite inspection

**Solution**: Implemented computer vision AI system for automated defect detection
- Cameras capture images of each part
- AI model identifies defects invisible to human eye
- Flagged parts routed for detailed inspection
- System learned from inspector feedback over time

**Implementation**:
- $45,000 initial investment (hardware + software + setup)
- $400/month cloud processing costs
- 3-month pilot on one product line
- 6-month full rollout across facility

**Results**:
- Defect rate reduced from 8-12% to <2%
- Inspection speed increased 3x
- Customer returns decreased 75%
- ROI achieved in 11 months
- Quality inspector roles shifted to process improvement

### Case Study 2: Professional Services Firm Resource Planning

**Company**: Calgary consulting firm, 85 employees, $12M revenue

**Challenge**: Project staffing decisions based on spreadsheets and institutional knowledge led to utilization rates of only 62% and frequent schedule conflicts

**Solution**: AI-powered resource management system
- Predicts project duration and resource needs based on historical data
- Optimizes consultant assignments across projects
- Identifies skills gaps and training needs
- Forecasts capacity and revenue

**Implementation**:
- Commercial SaaS product with custom configuration
- $28,000 implementation + $12,000/year subscription
- 4-month rollout including training
- Integration with existing project management system

**Results**:
- Utilization increased from 62% to 78%
- Schedule conflicts reduced 88%
- Revenue increased $940,000 annually
- Better work-life balance improved retention
- ROI of 320% in first year

### Case Study 3: Retail Demand Forecasting

**Company**: Edmonton retail chain, 12 locations, 200 employees, $25M revenue

**Challenge**: Poor inventory forecasting led to frequent stockouts (lost sales) and overstock (markdown costs)

**Solution**: Machine learning demand forecasting system
- Predicts sales by SKU by location by week
- Incorporates seasonality, promotions, weather, local events
- Automated purchase order generation
- Exception-based management (buyers focus on outliers)

**Implementation**:
- Custom solution built by technology partner
- $65,000 development + $15,000/year maintenance
- 6-month pilot in 3 stores
- Rollout to all locations over 4 months

**Results**:
- Stockouts reduced 67%
- Excess inventory decreased 42%
- Gross margin improved 3.2 percentage points
- Combined benefit of $780,000 annually
- Payback period of 10 months

---

## 9. Resources and Next Steps

### 9.1 Canadian AI Ecosystem Resources

**Funding and Support:**
- **National Research Council IRAP**: Funding and advisory services for innovation projects
- **BDC Capital**: Financing options for technology investments
- **Alberta Innovates**: Grants and programs for Alberta companies
- **Prairies Economic Development Canada**: Regional development programs

**Research and Education:**
- **Alberta Machine Intelligence Institute (Amii)**: Research partnerships and training
- **Vector Institute**: AI training and talent development
- **CIFAR**: Research funding and collaboration opportunities
- **University AI Labs**: Research partnerships and talent pipeline

**Industry Organizations:**
- **AI Alliance**: Industry collaboration and best practices
- **Digital Alberta**: Provincial digital economy initiatives
- **Canadian AI Association**: Networking and education

### 9.2 Your 90-Day Action Plan

**Days 1-30: Foundation Building**

Week 1:
□ Assess current data infrastructure  
□ Evaluate technical capabilities  
□ Review organizational readiness  

Week 2:
□ Secure executive sponsorship  
□ Establish AI governance framework  
□ Identify potential champions  

Week 3:
□ Conduct use case identification workshop  
□ Prioritize 2-3 opportunities  
□ Assign project ownership  

Week 4:
□ Research available solutions  
□ Connect with potential vendors/partners  
□ Develop initial budget estimates  

**Days 31-60: Planning and Preparation**

Week 5:
□ Create detailed project plans  
□ Finalize vendor selection  
□ Secure budget approval  

Week 6:
□ Define success metrics  
□ Form project team  
□ Develop communication plan  

Week 7:
□ Begin stakeholder communication  
□ Initiate vendor contracts  
□ Plan training approach  

Week 8:
□ Finalize requirements  
□ Establish project governance  
□ Kick off implementation  

**Days 61-90: Pilot Launch**

Week 9-10:
□ Complete technical development  
□ Conduct internal testing  
□ Refine based on feedback  

Week 11:
□ Train pilot users  
□ Deploy to pilot group  
□ Initiate support processes  

Week 12:
□ Monitor pilot closely  
□ Gather feedback systematically  
□ Track success metrics  

Week 13:
□ Evaluate pilot results  
□ Make scaling decision  
□ Plan next steps  

### 9.3 Questions to Guide Your Journey

**Strategic Questions:**
- What business problems keep you up at night that AI might address?
- How would you measure success for AI initiatives?
- What's your timeline and budget reality?
- Who in your organization is excited about AI?

**Tactical Questions:**
- What data do you already have that could power AI applications?
- Which processes are most repetitive and rule-based?
- Where do you currently face competitive disadvantages?
- What quick wins would build organizational confidence?

**Partnership Questions:**
- Do you have the internal expertise to implement AI, or do you need partners?
- What type of partner would complement your capabilities?
- How do you prefer to engage with external experts?
- What outcomes would make a partnership investment worthwhile?

---

## Conclusion: Your Path Forward

AI implementation for mid-market companies isn't about having the biggest budget or the most sophisticated data science team. It's about clarity of purpose, disciplined execution, and willingness to learn.

The companies succeeding with AI share common characteristics:
- They start with business problems, not technology fascination
- They pilot quickly and learn from results
- They invest in their people alongside technology
- They measure results rigorously
- They scale systematically based on evidence

The window of opportunity is open now. Companies that build AI capabilities in 2025-2026 will establish advantages that become increasingly difficult for competitors to overcome.

The question isn't whether AI will transform your industry—it's whether you'll be among the companies leading that transformation or scrambling to catch up.

---

## About Ripotek Technologies

Ripotek Technologies partners with Canadian mid-market companies to implement practical AI solutions that deliver measurable business value. Based in Edmonton, we bring together expertise in AI technology, workforce development, and industry-specific applications.

We believe AI should be accessible to organizations of all sizes—not just tech giants with unlimited budgets. Our approach focuses on achievable quick wins that build confidence and capability, creating a foundation for long-term AI maturity.

**Services:**
- AI readiness assessments
- Use case identification workshops
- Implementation support (build, buy, or partner)
- Workforce training and capability building
- Ongoing optimization and scaling

**Contact us** to discuss your AI journey:  
Website: www.ripotek.com  
Email: info@ripotek.com  
Phone: [Contact Number]

---

*This whitepaper is based on real-world experience implementing AI solutions across manufacturing, professional services, retail, logistics, and other sectors. All case studies represent actual client engagements, with some details modified to protect confidentiality.*

*Version 1.0 | November 2025*
`,nj=`# Building a Digitally-Ready Workforce: A Strategic Framework for Canadian Employers

## Executive Summary

The pace of technological change has created an urgent workforce challenge: the skills employees need today will be obsolete tomorrow, while the skills they'll need tomorrow don't yet have established training pathways.

This whitepaper addresses a critical question facing Canadian businesses: How do you build workforce capabilities that can keep pace with rapid technological evolution while managing costs, maintaining productivity, and retaining talent?

Based on research and real implementations across Canadian organizations, we present a comprehensive framework for workforce digital transformation that covers:

- Assessing your organization's current digital maturity and skill gaps
- Designing effective upskilling and reskilling programs
- Leveraging Canadian government funding to reduce costs
- Measuring ROI on workforce development investments
- Creating sustainable cultures of continuous learning
- Case studies from Canadian companies achieving measurable results

Whether you're just beginning to address digital skills gaps or looking to mature existing programs, this guide provides practical strategies grounded in real-world experience.

---

## Table of Contents

1. The Workforce Capability Crisis
2. Assessment: Understanding Your Skills Landscape
3. Strategy: Building Your Workforce Development Roadmap
4. Implementation: Designing Effective Training Programs
5. Funding: Maximizing Canadian Government Support
6. Measurement: Tracking ROI and Impact
7. Sustainability: Creating Learning Cultures
8. Case Studies: Real Results from Canadian Organizations
9. Action Plan and Resources

---

## 1. The Workforce Capability Crisis

### 1.1 The Accelerating Skills Gap

Canadian businesses face a paradox: unemployment exists alongside unfilled positions. The disconnect? A fundamental mismatch between available skills and required capabilities.

**The Numbers Tell the Story:**
- 73% of Canadian employers report difficulty finding candidates with needed technical skills
- Digital skills gap costs the Canadian economy an estimated $16.6B annually in lost productivity
- Average time to fill technical roles: 65 days, up from 42 days in 2019
- 61% of Canadian workers believe their skills will be obsolete within 3-5 years

This isn't a temporary disruption—it's the new normal. Technology evolution has accelerated to the point where educational institutions can't keep pace, and traditional hiring strategies can't fill gaps fast enough.

### 1.2 The Hidden Cost of Skills Gaps

Organizations often underestimate the true cost of digital skills deficits:

**Direct Costs:**
- Extended time-to-hire for technical roles
- Premium salaries required to attract scarce talent
- Consultant and contractor expenses to fill capability gaps
- Productivity losses from understaffed teams

**Indirect Costs:**
- Delayed technology initiatives due to insufficient internal capability
- Lost competitive opportunities requiring digital capabilities
- Reduced innovation due to limited technical exploration
- Employee turnover driven by lack of development opportunities

One Alberta professional services firm calculated that their inability to deliver data analytics services (due to skills gaps) cost them $1.8M in annual revenue opportunities—far more than it would have cost to train existing staff.

### 1.3 Why External Hiring Alone Won't Solve It

The default response to skills gaps—"just hire someone who knows how to do it"—faces several challenges:

**Supply and Demand Imbalance**: Technology talent markets are intensely competitive. Mid-market companies struggle to compete with enterprise salaries and startup equity offers.

**Integration Challenges**: External hires need 6-12 months to fully understand your business, culture, customers, and processes. Technical skills are only part of effectiveness.

**Retention Risks**: Employees hired purely for technical skills often leave when better opportunities arise—and in hot job markets, they always arise.

**Missed Development Opportunities**: External hiring sends a message to existing employees: "We don't believe you can grow." This damages engagement and retention.

**Cultural Dilution**: Heavy external hiring can dilute organizational culture, particularly when new hires concentrate in technical roles.

Smart organizations balance strategic external hiring with systematic internal development.

### 1.4 The Upskilling Opportunity

The flip side of the skills crisis is opportunity. Organizations that invest strategically in workforce development gain multiple advantages:

**Financial Benefits:**
- Lower cost per skilled employee ($10K-$15K training vs. $75K+ bad hire cost)
- Faster capability building (trained employee productive in 2-4 months vs. 6-12 for external hire)
- Government funding can offset 40-70% of training costs
- Reduced recruiting and onboarding expenses

**Strategic Advantages:**
- Capabilities built around your specific business needs
- Faster technology adoption due to internal expertise
- Improved employee engagement and retention
- Enhanced employer brand for future recruiting

**Organizational Resilience:**
- Reduced dependence on hard-to-replace individuals
- Greater adaptability to technological change
- Stronger innovation capacity
- More effective knowledge transfer and documentation

The question isn't whether to invest in workforce development—it's how to do it effectively and sustainably.

---

## 2. Assessment: Understanding Your Skills Landscape

Before designing training programs, organizations need clear understanding of current state, future needs, and gaps between them.

### 2.1 Current State Assessment

**Skills Inventory Process:**

**Step 1: Define Skill Categories**
Organize skills into manageable categories relevant to your business:

*Technical Skills:*
- Programming languages (Python, JavaScript, SQL, etc.)
- Cloud platforms (AWS, Azure, Google Cloud)
- Data analysis tools (Excel, Tableau, Power BI, SQL)
- AI/ML platforms and concepts
- Cybersecurity fundamentals
- DevOps and automation tools

*Digital Literacy:*
- Collaboration tools (Slack, Teams, project management software)
- Data interpretation and visualization
- Process automation mindset
- AI tool usage (ChatGPT, Copilot, etc.)
- Digital communication and documentation

*Soft Skills:*
- Analytical thinking and problem-solving
- Adaptability and learning agility
- Cross-functional collaboration
- Change management
- Technical communication

**Step 2: Assess Current Proficiency**
Use a simple proficiency framework:

*Level 0 - No Awareness:* Unfamiliar with the skill or technology  
*Level 1 - Basic Awareness:* Understands concepts but can't apply independently  
*Level 2 - Working Knowledge:* Can perform tasks with occasional guidance  
*Level 3 - Proficient:* Can perform tasks independently and efficiently  
*Level 4 - Expert:* Can teach others and handle complex scenarios  

**Step 3: Gather Data**
Multiple data collection methods provide comprehensive view:

*Self-Assessment Surveys:* Employees rate their own proficiency (be aware of both over and under-estimation)

*Manager Assessments:* Managers evaluate team members' demonstrated capabilities

*Skills Tests:* For critical technical skills, use practical assessments or certifications

*Project Reviews:* Analyze which skills were needed vs. available in recent projects

*Exit Interviews:* Departing employees often candidly identify skill gaps

**Step 4: Analyze Results**
Look for patterns:
- Which skills are concentrated in specific individuals (key person risk)?
- Which departments have largest gaps?
- Which roles require skills that no one has?
- Are there generational skill patterns?
- How does proficiency vary by tenure?

### 2.2 Future State Requirements

**Technology Roadmap Alignment:**
Review your organization's technology plans:
- What systems are you implementing in next 12-24 months?
- What technologies are your competitors adopting?
- What capabilities do your customers increasingly expect?
- What efficiency opportunities require new technical skills?

**Business Strategy Translation:**
Connect business objectives to required capabilities:

*Example 1:*  
Business Goal: Increase customer retention 15%  
Required Capability: Predictive analytics to identify at-risk customers  
Skills Needed: Data analysis, machine learning basics, CRM platform expertise  

*Example 2:*  
Business Goal: Launch new product line targeting younger demographic  
Required Capability: Digital marketing and social media analytics  
Skills Needed: Social media advertising, analytics tools, content creation, A/B testing  

*Example 3:*  
Business Goal: Reduce operational costs 20%  
Required Capability: Process automation and optimization  
Skills Needed: Process mapping, automation tools (Power Automate, Zapier), Python basics  

**Industry Benchmarking:**
Research skill requirements in your sector:
- What skills are competitors advertising in job postings?
- What capabilities do industry leaders highlight?
- What skills appear in industry conference programs and topics?
- What certifications are becoming standard in your field?

### 2.3 Gap Analysis

**Quantifying Gaps:**

For each critical skill:

*Current Supply:* How many employees are proficient (Level 3+)?  
*Future Demand:* How many proficient employees will you need?  
*Net Gap:* Demand minus current supply  
*Timeline:* When do you need these capabilities?  
*Risk Level:* What's the business impact if gap persists?  

**Prioritization Framework:**

Plot skills on matrix:

**High Impact + High Gap = CRITICAL PRIORITY**
- Address immediately through intensive training or strategic hiring
- Example: Cloud platform skills when migrating key systems to cloud

**High Impact + Low Gap = MAINTAIN AND DEEPEN**
- Invest in advanced training for current skilled employees
- Develop succession planning for key skills
- Example: Cybersecurity skills with adequate current capability

**Low Impact + High Gap = STRATEGIC WATCH**
- Monitor for changing importance
- Address through just-in-time training as needed
- Example: Emerging technologies not yet critical to business

**Low Impact + Low Gap = LOW PRIORITY**
- No immediate investment needed
- Example: Legacy system skills for systems being phased out

### 2.4 Individual Development Planning

Skills assessment shouldn't be purely organizational—it should inform individual growth:

**Employee Development Conversations:**
- What skills do you want to develop?
- What roles or responsibilities interest you?
- What learning style works best for you?
- What time can you realistically commit to learning?
- What support do you need from the organization?

**Career Pathway Mapping:**
Define how skill development enables career progression:

*Example: Operations Analyst → Data Analyst → Senior Data Analyst*

Operations Analyst → Data Analyst:
- Required: SQL proficiency, Excel advanced, basic statistics, Power BI
- Timeline: 9-12 months
- Support: 100 hours training, project assignments, mentor pairing

Data Analyst → Senior Data Analyst:
- Required: Python, machine learning basics, advanced statistics, stakeholder management
- Timeline: 12-18 months
- Support: Certification program, lead project role, external conference attendance

Clear pathways motivate employees and guide training investments.

---

## 3. Strategy: Building Your Workforce Development Roadmap

Assessment identifies gaps; strategy determines how to address them.

### 3.1 Strategic Choices Framework

**Build vs. Buy vs. Borrow:**

Different capability needs warrant different strategies:

**BUILD (Internal Development)**
- Core capabilities used continuously
- Unique applications to your business
- Long-term capability requirements
- Employee engagement and retention benefits
- *Example: Customer service excellence, core product knowledge*

**BUY (Strategic Hiring)**
- Highly specialized expertise needed quickly
- Skills outside your organization's learning capacity
- Leadership or transformation roles
- Temporary or project-based needs
- *Example: Senior cloud architect for migration project*

**BORROW (Contractors/Consultants)**
- Temporary capability gaps during transition
- Specialized expertise for discrete projects
- Capacity during peak demand periods
- Knowledge transfer and mentoring purposes
- *Example: AI consultant to guide first implementation*

Most organizations need all three strategies in balanced combination.

### 3.2 Training Investment Models

**Minimum Viable Investment:**
- 1% of payroll allocated to workforce development
- Approximately 20 hours per employee annually
- Focus on critical skill gaps only
- Primarily online/self-paced learning
- Limited customization

*Best for:* Small organizations with tight budgets, starting workforce development programs

**Standard Investment:**
- 2-3% of payroll allocated to workforce development
- 40-60 hours per employee annually
- Mix of role-specific and general digital literacy training
- Combination of online, instructor-led, and hands-on learning
- Some customization to business needs

*Best for:* Mid-market companies committed to systematic capability building

**Leading Investment:**
- 4-5% of payroll allocated to workforce development
- 80-100 hours per employee annually
- Comprehensive programs including certifications
- Significant customization and internal content
- Formal learning culture initiatives

*Best for:* Organizations using workforce capability as competitive advantage

**Calculation Example:**

Company: 100 employees, average salary $65,000, total payroll $6.5M

Minimum (1%): $65,000 annual training budget = $650/employee  
Standard (2.5%): $162,500 annual training budget = $1,625/employee  
Leading (4%): $260,000 annual training budget = $2,600/employee  

### 3.3 Learning Modality Mix

Different learning approaches serve different needs:

**Self-Paced Online Learning (30-40% of total)**

*Strengths:*
- Flexible timing and pacing
- Cost-effective for large groups
- Consistent content quality
- Easy to track completion

*Limitations:*
- Requires high self-motivation
- Limited hands-on practice
- Minimal personalization
- Lack of peer interaction

*Best For:* Foundational knowledge, technical concepts, certification prep

*Platforms:* LinkedIn Learning, Coursera, Udemy, Pluralsight, Skillshare

**Instructor-Led Training (20-30% of total)**

*Strengths:*
- Expert guidance and facilitation
- Real-time Q&A and discussion
- Structured curriculum and pacing
- Networking and peer learning

*Limitations:*
- Higher cost per participant
- Scheduling challenges
- Geographic limitations (if in-person)
- Limited flexibility

*Best For:* Complex topics, strategic programs, leadership development

*Formats:* In-person workshops, live virtual classes, bootcamps

**Hands-On Project Learning (30-40% of total)**

*Strengths:*
- Direct application to business needs
- Contextual learning
- Immediate value generation
- Skill validation through output

*Limitations:*
- Requires supportive management
- Can be time-intensive
- Needs structured support/mentorship
- Difficulty measuring learning vs. work output

*Best For:* Technical skill application, process improvement, innovation

*Approaches:* Assigned stretch projects, innovation challenges, process improvement initiatives

**Mentorship and Coaching (10-15% of total)**

*Strengths:*
- Personalized guidance
- Soft skills development
- Career development context
- Relationship building

*Limitations:*
- Hard to scale
- Depends on mentor quality and availability
- Difficult to structure and measure

*Best For:* Leadership development, complex skill integration, career transitions

*Models:* Formal mentorship programs, peer learning circles, external coaches

### 3.4 Timing and Sequencing

**Front-Loaded Approach:**
- Intensive training before applying skills
- Typical for major technology implementations
- Example: 2-week bootcamp before new system launch

*Pros:* Dedicated learning time, comprehensive coverage  
*Cons:* Knowledge decay before application, productivity loss

**Distributed Learning:**
- Ongoing training over extended period
- Typical for general capability building
- Example: 2 hours weekly over 6 months

*Pros:* Better retention, lower disruption  
*Cons:* Requires sustained commitment, slower capability development

**Just-in-Time Learning:**
- Training delivered when immediately needed
- Typical for process improvements
- Example: Learn automation tool while building automation

*Pros:* Immediate application, high relevance  
*Cons:* Less foundational depth, inconsistent coverage

**Hybrid Model (Recommended):**
- Foundational training → application project → advanced training → new project
- Example: 2-week Python basics → 4 weeks building automation → 1-week advanced Python → lead automation project

---

## 4. Implementation: Designing Effective Training Programs

Strategy sets direction; implementation determines success.

### 4.1 Program Design Principles

**Business Relevance:**
Training should connect clearly to business needs. Adult learners engage when they understand "why this matters."

*Poor:* "Learn Python programming"  
*Better:* "Automate your weekly reporting using Python"  

*Poor:* "Introduction to machine learning"  
*Better:* "Predict customer churn using our sales data"  

**Practical Application:**
Learning sticks when immediately applied. Include real work examples and projects.

*Example Structure:*
- Week 1-2: Foundational concepts with simple exercises
- Week 3-4: Practice with realistic scenarios
- Week 5-8: Apply to actual work project
- Week 9: Present results and learning

**Appropriate Challenge Level:**
Too easy bores participants; too difficult discourages. Assess baseline and differentiate.

*Approach:*
- Pre-assessment to gauge starting proficiency
- Tiered content (beginner, intermediate, advanced)
- Flexible pacing for self-directed portions
- Additional support for struggling participants

**Social Learning:**
People learn better together. Build collaboration and peer support.

*Tactics:*
- Cohort-based programs with consistent groups
- Discussion forums or Slack channels
- Pair programming or peer review
- Study groups and learning circles
- Showcase sessions where participants share progress

**Sustained Engagement:**
One-off training rarely sticks. Design for reinforcement and continuation.

*Tactics:*
- Spaced repetition of key concepts
- Progressive skill building across multiple sessions
- Regular touchpoints (weekly check-ins)
- Post-training refreshers or office hours
- Communities of practice for ongoing learning

### 4.2 Program Structures

**Micro-Learning Programs:**

*Characteristics:*
- 10-15 minute modules
- Single concept focus
- Mobile-friendly delivery
- High completion rates

*Best For:* Software tool training, process updates, awareness building

*Example:* "Data Privacy Essentials" - 12 modules covering PIPEDA, handling practices, incident response

**Bootcamp Programs:**

*Characteristics:*
- Intensive 2-12 week programs
- Comprehensive curriculum
- Cohort-based
- Often includes capstone project

*Best For:* Major skill development, career transitions, technology adoption

*Example:* "Data Analytics Bootcamp" - 8 weeks, evenings and Saturdays, covering SQL, Python, statistics, and visualization

**Certification Programs:**

*Characteristics:*
- Structured curriculum leading to recognized credential
- External validation of skills
- Defined competency standards
- Often includes exam or assessment

*Best For:* Technical roles, professional development, external credibility

*Example:* AWS Solutions Architect certification, Google Analytics certification, PMP certification

**Learning Pathways:**

*Characteristics:*
- Multi-stage progression
- Building from foundations to advanced
- Typically 6-18 months duration
- Clear milestones and achievements

*Best For:* Career development, comprehensive capability building, role transitions

*Example:* "Digital Marketing Pathway"
- Stage 1: Digital fundamentals (2 months)
- Stage 2: Channel specialization (3 months)
- Stage 3: Analytics and optimization (3 months)
- Stage 4: Strategy and leadership (4 months)

### 4.3 Content Development

**Leverage Existing Resources:**
Don't reinvent the wheel. Excellent content exists for most technical topics.

*Curate from:*
- LinkedIn Learning (extensive library, business integration)
- Coursera/edX (university-quality courses)
- Vendor training (AWS, Microsoft, Salesforce, etc.)
- Industry associations (sector-specific content)
- YouTube and blogs (supplementary materials)

**Customize Where It Matters:**
Develop internal content for:
- Company-specific tools and processes
- Applications of general concepts to your business
- Case studies from your industry
- Best practices unique to your organization

*Example:* License Python course from Coursera; create internal module on "Using Python with Our Sales Database"

**Internal Subject Matter Experts:**
Leverage internal expertise:
- Identify employees with relevant skills
- Provide training on instructional design
- Compensate for content development time
- Recognize contributions publicly

*Benefits:* Relevant content, leadership development, cost savings, knowledge documentation

### 4.4 Support Infrastructure

**Learning Management System (LMS):**
Essential for programs beyond 20 participants:
- Content hosting and delivery
- Progress tracking and reporting
- Assessment and certification
- Communication and announcements

*Options:*
- Entry: TalentLMS, Absorb LMS ($3-8/user/month)
- Mid: Cornerstone, SAP SuccessFactors ($10-20/user/month)
- Enterprise: Workday Learning, Oracle HCM ($20-40/user/month)

**Dedicated Program Management:**
Programs require ongoing coordination:
- Enrollment and scheduling
- Participant communication
- Issue resolution
- Performance tracking
- Vendor coordination

*Allocation:*
- 0.2-0.3 FTE per 50 participants
- Full-time Learning & Development manager around 150-200 participants

**Technical Support:**
Participants will need help:
- Access and login issues
- Technical difficulties
- Content questions
- General troubleshooting

*Approach:*
- Clear documentation (FAQs, how-to guides)
- Designated support contact
- Regular office hours
- Peer support channels

**Mentorship Coordination:**
If including mentorship:
- Mentor recruitment and matching
- Training for mentors
- Structured check-in cadence
- Feedback collection

---

## 5. Funding: Maximizing Canadian Government Support

Canadian governments offer substantial training subsidies that many employers overlook.

### 5.1 Federal Programs

**Canada Job Grant:**

*Overview:* Shares training costs for employees or new hires

*Funding:* Up to 2/3 of training costs, maximum $10,000 per participant

*Eligibility:*
- Small businesses: $2 employer contribution required per $1 of government funding
- Large businesses: $1 contribution per $1 government funding
- Training must be delivered by eligible third-party provider
- Employee must be Canadian citizen or permanent resident

*Application:* Through provincial/territorial delivery agents

*Best For:* Formal training programs with external providers

*Strategic Tips:*
- Bundle multiple employees in single application
- Choose from approved provider lists
- Submit applications well in advance (8-12 weeks processing)
- Keep detailed records of training costs

**EI Training Support:**

*Overview:* Funding for unemployed or underemployed Canadians

*Funding:* Varies by circumstance and program

*Eligibility:*
- Unemployed individuals receiving EI
- Underemployed individuals (working part-time)
- Recent graduates entering workforce

*Application:* Through Service Canada

*Best For:* Hiring and training new employees

**Youth Employment Programs:**

*Overview:* Wage subsidies for hiring youth in skill-building roles

*Funding:* 50-75% of wages for 6-12 months

*Eligibility:*
- Positions for youth aged 15-30
- Meaningful work experience and skill development
- Various streams (green jobs, STEM, entrepreneurship)

*Application:* Through program administrators

*Best For:* Entry-level technical roles, apprenticeships

### 5.2 Provincial Programs (Alberta)

**Alberta Jobs Now Program:**

*Overview:* Incentives for hiring, training, and promoting Albertans

*Funding:*
- Up to 25% of wages for new hires ($25,000 maximum)
- Up to 37.5% for designated equity groups ($37,500 maximum)
- Training costs covered up to $5,000

*Eligibility:*
- Alberta employers with valid business number
- New employees or promotions
- Full-time positions (minimum 30 hours/week)

*Application:* Through Alberta government portal

*Best For:* Expanding technical teams, internal promotions with training

**Technology and Innovation Grant Programs:**

*Overview:* Project funding for technology adoption and innovation

*Funding:* Varies by program, typically 30-50% of project costs

*Eligibility:* Based on specific program criteria

*Application:* Through Alberta Innovates or industry associations

*Best For:* Technology implementation projects with significant training components

### 5.3 Maximizing Funding

**Strategic Planning:**

*Example Scenario:* Manufacturing company needs 5 employees trained in AI and automation

Option 1: Standard Approach
- Enroll in bootcamp: $8,000/person = $40,000 total
- No funding applications
- Company pays: $40,000

Option 2: Funded Approach
- Same bootcamp: $8,000/person = $40,000
- Apply for Canada Job Grant: $10,000 × 5 employees = $50,000 (capped at training costs)
- Company required contribution: $20,000
- Government funding: $20,000
- Company pays: $20,000 (50% savings)

Option 3: Optimized Approach
- Hire 2 junior employees through Alberta Jobs Now
- Wage subsidies: 37.5% × $45,000/year × 2 = $33,750
- Enroll all 7 (5 existing + 2 new) in bootcamp: $56,000
- Canada Job Grant for all 7: $35,000 funding
- Company pays: $56,000 training + $90,000 wages - $33,750 subsidies - $35,000 training grant = $77,250 over 1 year
- Result: 7 trained employees (vs. 5), 40% more capability at 3% more cost

**Application Best Practices:**

*Timing:*
- Research programs 3-6 months before training
- Submit applications 8-12 weeks before training start
- Plan for approval timelines in project schedules

*Documentation:*
- Maintain detailed training cost records
- Track employee time and wages
- Document learning outcomes
- Capture business impact metrics

*Relationships:*
- Connect with program administrators early
- Attend information sessions and webinars
- Join employer associations sharing funding experiences
- Consider grant writing consultants for complex applications

**Common Pitfalls:**

❌ Waiting until after training to apply (funding must be approved before training begins)  
❌ Using ineligible trainers (many programs require approved providers)  
❌ Poor documentation (applications denied due to insufficient detail)  
❌ Applying for programs that don't match your situation  
❌ Missing deadlines or submission windows  

---

## 6. Measurement: Tracking ROI and Impact

Workforce development programs require ongoing investment—measurement justifies continued funding and enables optimization.

### 6.1 Measurement Framework

**Input Metrics** (Resources Invested)
- Training budget per employee
- Training hours per employee
- Program enrollment rates
- Completion rates
- Time to complete programs

**Output Metrics** (Immediate Results)
- Skills assessments scores (pre vs. post)
- Certification achievement rates
- Projects completed using new skills
- Knowledge retention (30/60/90 day assessments)
- Participant satisfaction scores

**Outcome Metrics** (Business Impact)
- Productivity improvements
- Quality improvements (error reduction)
- Process cycle time reductions
- Innovation metrics (new ideas, process improvements)
- Internal mobility (promotions, role transitions)

**Strategic Metrics** (Long-Term Value)
- Employee retention rates
- Time to fill technical positions
- Internal vs. external hiring ratios
- Employer brand metrics
- Technology adoption speed

### 6.2 ROI Calculation Approaches

**Time Savings ROI:**

*Example:* 10 employees complete data analysis training

Cost:
- Training program: $15,000
- Employee time: 60 hours × 10 employees × $45/hour = $27,000
- Total investment: $42,000

Benefit:
- Each employee saves 3 hours/week through improved efficiency
- 3 hours × 50 weeks × 10 employees = 1,500 hours annually
- Value: 1,500 hours × $45/hour = $67,500

ROI: ($67,500 - $42,000) / $42,000 = 61% Year 1
Payback period: 7.5 months

**Revenue Impact ROI:**

*Example:* Sales team learns advanced CRM and analytics

Cost:
- Training: $25,000
- Time: 40 hours × 20 employees × $60/hour = $48,000
- Total: $73,000

Benefit:
- Improved win rates increase revenue by 8%
- Team's annual sales: $5M
- Revenue increase: $400,000
- Profit impact (30% margin): $120,000

ROI: ($120,000 - $73,000) / $73,000 = 64% Year 1

**Hiring Cost Avoidance ROI:**

*Example:* Company trains 3 employees in cloud architecture rather than hiring externally

Cost:
- Training: $35,000
- Certification: $3,000 × 3 = $9,000
- Time: 120 hours × 3 × $55/hour = $19,800
- Total: $63,800

Avoided Costs:
- Recruiter fees (20% of $120K): $24,000 × 3 = $72,000
- Interview costs: $5,000 × 3 = $15,000
- Lost productivity during search: $30,000
- Onboarding: $10,000 × 3 = $30,000
- Total avoided: $147,000

ROI: ($147,000 - $63,800) / $63,800 = 130% immediate
Additional benefit: 3 employees who already understand the business

**Retention ROI:**

*Example:* Development program reduces turnover in key technical roles

Cost:
- Program design and delivery: $50,000 annually
- Employee time: 60 hours × 30 employees × $50/hour = $90,000
- Total: $140,000

Benefit:
- Turnover reduced from 18% to 12% (6 fewer departures)
- Replacement cost per employee: $85,000 (recruiting, lost productivity, training)
- Savings: 6 × $85,000 = $510,000

ROI: ($510,000 - $140,000) / $140,000 = 264% Year 1

### 6.3 Qualitative Impact Assessment

Not all benefits are quantifiable—capture qualitative impact through:

**Employee Surveys:**
- Confidence levels performing new skills
- Perceived career development opportunities
- Job satisfaction and engagement
- Intent to remain with organization

**Manager Feedback:**
- Observed capability improvements
- Project success stories
- Team performance changes
- Innovation examples

**Customer Impact:**
- Service delivery improvements
- Solution quality feedback
- Speed and responsiveness
- Customer satisfaction scores

**Strategic Progress:**
- Technology adoption success
- Competitive positioning changes
- New capability demonstrations
- Market response

---

## 7. Sustainability: Creating Learning Cultures

One-off training programs deliver one-time impacts. Sustainable transformation requires embedding continuous learning into organizational DNA.

### 7.1 Cultural Characteristics

**Learning-Oriented Organizations Share:**

*Leadership Modeling:*
- Executives publicly engage in learning
- Leaders share their development journeys
- Management allocates time for team learning
- Learning questions welcomed, not viewed as weakness

*Psychological Safety:*
- Mistakes treated as learning opportunities
- Experimentation encouraged
- Failure leads to debrief, not blame
- Questions and curiosity valued

*Time and Resource Allocation:*
- Learning time protected, not first thing cut
- Budget for development consistently funded
- Tools and platforms accessible
- Policies support learning (flexible scheduling, etc.)

*Recognition and Reward:*
- Learning achievements celebrated
- Skill development influences compensation
- Career paths incorporate development
- Knowledge sharing appreciated and valued

*Knowledge Sharing:*
- Regular learning sessions and presentations
- Communities of practice around key skills
- Documentation and resource sharing norms
- Mentorship expected and supported

### 7.2 Implementing Learning Culture

**Phase 1: Foundation (Months 1-6)**

*Executive Alignment:*
- Secure leadership commitment to learning culture
- Develop learning culture principles
- Allocate sustained budget
- Assign executive sponsor

*Infrastructure:*
- Implement learning management system
- Establish program management capability
- Create communication channels
- Develop measurement frameworks

*Pilot Programs:*
- Launch 2-3 high-visibility training programs
- Target areas with clear business need
- Ensure strong support and resources
- Capture and share success stories

**Phase 2: Expansion (Months 7-18)**

*Broaden Participation:*
- Expand program offerings
- Increase employee coverage
- Add multiple learning modalities
- Develop internal content

*Embed Processes:*
- Integrate development planning into performance reviews
- Tie skill development to compensation
- Create clear career progression frameworks
- Establish communities of practice

*Strengthen Support:*
- Train managers as learning champions
- Expand mentorship programs
- Increase internal content and expertise
- Build peer learning networks

**Phase 3: Maturation (Months 19-36)**

*Cultural Integration:*
- Learning becomes "how we work"
- Employees initiate learning proactively
- Knowledge sharing is reflexive
- Innovation flows from applied learning

*Continuous Improvement:*
- Regular program assessment and refinement
- Employee input shapes learning strategy
- Metrics tracked and acted upon
- Funding allocated strategically based on outcomes

*External Recognition:*
- Employer brand emphasizes development
- Industry reputation as learning leader
- Partnerships with educational institutions
- Thought leadership on workforce development

### 7.3 Overcoming Resistance

**Common Objections:**

*"We're too busy to train right now"*

Response: Organizations that are "too busy" to develop capabilities fall further behind competitors investing in their workforce. Start with micro-learning or just-in-time approaches requiring minimal time.

*"Employees will leave after we train them"*

Response: Employees are more likely to leave organizations that don't invest in their development. Training increases retention. Plus, the cost of stagnant skills exceeds training costs even if some trained employees depart.

*"We can't afford training programs"*

Response: You can't afford NOT to. Skills gaps create much higher costs through inefficiency, missed opportunities, and turnover. Plus, government funding can offset 40-70% of costs.

*"We tried training before and it didn't work"*

Response: Poor training results typically stem from:
- Lack of clear business connection
- Insufficient support and follow-through
- No practical application opportunities
- One-off programs without reinforcement

Address these factors and results improve dramatically.

**Change Management Tactics:**

*Start Small, Build Momentum:*
- Begin with volunteers or early adopters
- Choose high-impact, achievable programs
- Celebrate and publicize successes
- Let word-of-mouth build demand

*Make It Easy:*
- Minimal administrative burden
- Convenient scheduling
- Clear paths and requirements
- Strong support infrastructure

*Connect to What Matters:*
- Show business impact clearly
- Link to career advancement
- Demonstrate competitive advantage
- Highlight peer and industry trends

*Stay Consistent:*
- Maintain funding through economic cycles
- Don't let programs wither from neglect
- Provide sustained communication
- Iterate and improve, don't abandon

---

## 8. Case Studies: Real Results from Canadian Organizations

### Case Study 1: Professional Services Firm Digital Transformation

**Organization:** Alberta consulting firm, 95 employees, $14M revenue

**Challenge:** Losing business to competitors leveraging data analytics and automation. Technical capabilities concentrated in 3 employees approaching retirement.

**Program Design:**

*Year 1: Foundation Building*
- Digital literacy for all employees (40 hours online learning)
- Data analysis bootcamp for 12 volunteers (120 hours over 12 weeks)
- Python automation training for operations team (80 hours over 8 weeks)
- Cloud platforms certification for IT team (4 employees)

*Year 2: Expansion and Deepening*
- Advanced analytics for bootcamp graduates (60 hours)
- Machine learning foundations (6 employees, 100 hours)
- Client-facing analytics training for consultants (20 employees, 40 hours)
- Internal certification program for key skills

**Implementation Details:**
- Total investment: $185,000 over 2 years
- Government funding: $78,000 (Canada Job Grant, Alberta programs)
- Net company cost: $107,000
- Mix: 40% online self-paced, 30% bootcamp/intensive, 30% projects

**Results After 24 Months:**
- 18 employees gained data analysis capabilities
- 4 employees achieved Python proficiency
- Built 8 new client service offerings leveraging analytics
- Won $1.8M in new contracts directly attributed to enhanced capabilities
- Employee engagement scores increased 28%
- Zero departures among trained employees
- ROI: 820% ($107K investment → $900K net benefit over 2 years)

**Key Success Factors:**
- Executive sponsor actively participated in training
- Training closely connected to real client projects
- Created internal "data guild" for peer support
- Allocated dedicated project time to apply new skills
- Celebrated successes publicly

---

### Case Study 2: Manufacturing Company Automation Upskilling

**Organization:** Edmonton-based manufacturer, 140 employees, $32M revenue

**Challenge:** Manual production processes created quality inconsistency and limited capacity. Difficulty attracting skilled automation engineers. Legacy workforce unfamiliar with modern technology.

**Program Design:**

*Phase 1: Pilot (6 months)*
- Identified 8 production workers interested in learning
- 6-month part-time program (8 hours/week):
  - Automation fundamentals
  - PLC programming basics
  - Industrial IoT sensors
  - Data analysis for production optimization
- Paired each participant with external mentor
- Assigned real automation project to each pair

*Phase 2: Scale (12 months)*
- Second cohort of 10 employees
- Enhanced program based on pilot learnings
- Advanced training for pilot graduates
- Built internal mentorship from pilot cohort

**Implementation Details:**
- Total investment: $145,000 over 18 months
- Government funding: $62,000
- Net cost: $83,000
- All training during work hours (4 hours/week production time allocation)
- Custom curriculum developed with community college partner

**Results After 18 Months:**
- 18 employees transitioned to automation technician roles
- Reduced dependence on external automation contractors by 75%
- Implemented 12 automation projects improving efficiency by 23%
- Quality defect rates decreased from 4.2% to 1.1%
- Production capacity increased 19% without adding equipment
- Promoted 3 participants to supervisor roles
- Attracted 2 external automation engineers citing learning culture
- ROI: 610% ($83K investment → $520K annual benefit)

**Key Success Factors:**
- Management committed to weekly dedicated learning time
- Real projects provided immediate application
- External mentors brought expertise and credibility
- Pilot approach allowed iteration and refinement
- Transparent communication about role transitions

---

### Case Study 3: Retail Chain Digital Marketing Capabilities

**Organization:** Calgary retail chain, 24 locations, 320 employees, $48M revenue

**Challenge:** Traditional marketing approaches losing effectiveness. Younger competitors excelling with digital tactics. No in-house digital marketing expertise. Marketing team had traditional advertising backgrounds.

**Program Design:**

*Comprehensive Digital Marketing Academy (12 months)*

*Cohort 1 - Marketing Team (12 employees):*
- Digital marketing fundamentals (30 hours)
- Social media advertising (40 hours)
- Google Ads and SEM (40 hours)
- Analytics and conversion optimization (35 hours)
- Content marketing (25 hours)
- Marketing automation platforms (20 hours)
- Each topic: 2 weeks learning + 2 weeks application project

*Cohort 2 - Store Managers (24 employees):*
- Digital marketing essentials (20 hours)
- Local social media marketing (15 hours)
- Customer data and analytics (15 hours)
- Focus: empowering local marketing execution

**Implementation Details:**
- Total investment: $210,000
- Government funding: $95,000
- Net cost: $115,000
- Mix: 50% online courses (LinkedIn Learning), 30% workshops with agency partners, 20% project work
- Agency partnership: Digital agency provided mentorship and workshops at reduced rates (long-term relationship benefit)

**Results After 12 Months:**
- Shifted 65% of advertising budget from traditional to digital channels
- Digital marketing ROI improved from 1.2:1 to 4.3:1
- Reduced agency fees by $180,000 annually (maintained strategic relationship for high-complexity work)
- Grew social media following 340%
- Email list grew 250%, engagement rates tripled
- E-commerce sales increased $2.1M
- Younger demographic engagement improved significantly
- Marketing team job satisfaction scores increased 42%
- ROI: 950% ($115K investment → $1.2M annual benefit)

**Key Success Factors:**
- Agency partner invested in training (viewing it as long-term relationship building)
- Immediate application to live campaigns
- Started with quick wins (social media) to build confidence
- Store managers became local digital advocates
- Measured and shared results continuously

---

## 9. Action Plan and Resources

### 9.1 Your 90-Day Kickstart Plan

**Days 1-30: Assessment and Planning**

Week 1:
□ Conduct initial skills inventory survey  
□ Review technology roadmap and business strategy  
□ Identify 2-3 critical skill gaps  

Week 2:
□ Analyze skills data and identify patterns  
□ Benchmark against industry standards  
□ Interview key stakeholders about needs  

Week 3:
□ Prioritize skills using impact/gap framework  
□ Research training options and costs  
□ Explore government funding opportunities  

Week 4:
□ Develop initial training roadmap  
□ Build preliminary budget  
□ Prepare executive presentation  

**Days 31-60: Design and Preparation**

Week 5:
□ Secure executive approval and budget  
□ Form workforce development steering committee  
□ Select pilot program and participants  

Week 6:
□ Choose training providers or partners  
□ Apply for government funding programs  
□ Develop detailed pilot program plan  

Week 7:
□ Set up learning infrastructure (LMS, etc.)  
□ Create communication and marketing plan  
□ Design measurement framework  

Week 8:
□ Finalize contracts and agreements  
□ Recruit pilot participants  
□ Prepare kickoff materials  

**Days 61-90: Pilot Launch**

Week 9:
□ Launch pilot program with kickoff event  
□ Begin training delivery  
□ Establish support systems  

Week 10-11:
□ Monitor participation and engagement  
□ Gather early feedback  
□ Make rapid adjustments  

Week 12:
□ Mid-pilot review and optimization  
□ Begin planning next phases  
□ Update stakeholders on progress  

Week 13:
□ Complete pilot program  
□ Gather comprehensive feedback  
□ Measure results vs. objectives  
□ Make scaling decision  

### 9.2 Essential Resources

**Government Funding Programs:**
- Canada Job Grant: https://www.canada.ca/en/employment-social-development/programs/job-grant.html
- Alberta Jobs Now: https://www.alberta.ca/alberta-jobs-now-program
- Youth Employment Programs: https://www.canada.ca/en/services/jobs/training/initiatives.html

**Learning Platforms:**
- LinkedIn Learning: https://learning.linkedin.com/
- Coursera for Business: https://www.coursera.org/business
- Pluralsight: https://www.pluralsight.com/
- Udacity: https://www.udacity.com/
- edX for Business: https://business.edx.org/

**Canadian Organizations:**
- Digital Alberta: Resources and networking for Alberta's digital economy
- Information and Communications Technology Council (ICTC): Tech workforce research and programs
- Canadian Council for Aviation & Aerospace (CCAA): Industry-specific training
- Canadian Manufacturers & Exporters (CME): Manufacturing training programs

**Consulting and Support:**
- Ripotek Technologies: Workforce development strategy and implementation
- Local community colleges: Custom training program development
- Industry associations: Sector-specific training and certification

### 9.3 Templates and Tools

**Skills Assessment Survey Template:**
Available for download at www.ripotek.com/resources including:
- Employee self-assessment form
- Manager assessment form
- Gap analysis spreadsheet
- Prioritization framework

**ROI Calculator:**
Excel template for calculating training program ROI across multiple scenarios

**Program Planning Template:**
Comprehensive project plan template for workforce development initiatives

**Funding Application Checklist:**
Step-by-step guide for Canadian government funding programs

---

## Conclusion: The Workforce Development Imperative

The skills your employees have today won't be sufficient tomorrow. Technology evolution has accelerated to the point where continuous workforce development is no longer optional—it's existential.

The good news: You don't need unlimited budgets or sophisticated HR departments to build effective workforce development programs. You need:

✓ Clear understanding of your capability gaps  
✓ Strategic approach to addressing them  
✓ Commitment to sustained investment  
✓ Willingness to experiment and learn  
✓ Leadership that values and models continuous learning  

Canadian businesses have significant advantages: government funding programs that can offset 40-70% of training costs, a collaborative business community, and strong educational institutions.

The organizations that will thrive in the next decade are those investing in their people's capabilities today. The question isn't whether to build a digitally-ready workforce—it's whether you'll be among the companies leading that transformation or struggling to catch up.

Start small. Start now. Start building.

---

## About Ripotek Technologies

Ripotek Technologies partners with Canadian organizations to design and implement effective workforce development programs that build sustainable competitive advantage.

Our comprehensive approach addresses:
- Skills gap assessment and strategic planning
- Program design and curriculum development
- Government funding application support
- Implementation and change management
- Measurement and continuous improvement

We believe every Canadian business should have access to world-class workforce development—not just enterprises with unlimited HR budgets. Our approach focuses on practical, cost-effective solutions that deliver measurable results.

**Services:**
- Workforce capability assessments
- Training program design and implementation
- Government funding maximization
- Learning culture development
- ROI measurement and optimization

**Contact us** to discuss your workforce development needs:  
Website: www.ripotek.com  
Email: info@ripotek.com  
Phone: [Contact Number]

---

*This whitepaper is based on research and real implementations across Canadian organizations in manufacturing, professional services, retail, technology, and other sectors. Case studies represent actual client engagements, with some details modified to protect confidentiality.*

*Version 1.0 | November 2025*
`,ky=[{title:"The Practical Guide to AI Implementation for Mid-Market Companies",slug:"ai-implementation-mid-market",date:"November 2025",summary:"A practical, step-by-step framework for mid-market companies to implement AI with measurable ROI, including use case selection, build/buy/partner decisions, and pilot-to-production guidance.",body:tj,cover:by},{title:"Building a Digitally-Ready Workforce: A Strategic Framework for Canadian Employers",slug:"digitally-ready-workforce",date:"November 2025",summary:"A comprehensive framework for assessing digital skills, designing upskilling programs, maximizing Canadian funding, and measuring capability ROI across organizations.",body:nj,cover:wy}];function rj(e){return ky.find(t=>t.slug===e)}const ij=()=>{const e=[{icon:up,title:"Whitepapers & Research",description:"In-depth analysis on data architecture, governance, and industry trends.",comingSoon:!1},{icon:Jc,title:"Webinar Replays",description:"On-demand access to our expert-led webinars on data and AI topics.",comingSoon:!0},{icon:Yc,title:"Templates & Tools",description:"Downloadable templates for data governance, architecture design, and more.",comingSoon:!0},{icon:Jc,title:"Demo Training Videos",description:"Sample training content showcasing our instructional methodology.",comingSoon:!0}];return o.jsxs("div",{className:"min-h-screen pt-20",children:[o.jsx("section",{className:"section-padding gradient-bg text-primary-foreground",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"max-w-4xl mx-auto text-center animate-fade-in-up",children:[o.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6",children:"Resource Library"}),o.jsx("p",{className:"text-xl opacity-90",children:"Insights, templates, and educational content to accelerate your data journey."})]})})}),o.jsx("section",{className:"section-padding",children:o.jsxs("div",{className:"container-custom",children:[o.jsxs("div",{className:"text-center mb-10",children:[o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:["Whitepapers & ",o.jsx("span",{className:"gradient-text",children:"Research"})]}),o.jsx("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto",children:"In-depth guides and frameworks from real-world Canadian implementations."})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:ky.map((t,n)=>o.jsxs(Ie,{className:"hover-lift border-2 animate-fade-in",style:{animationDelay:`${n*100}ms`},children:[t.cover?o.jsxs("div",{className:"relative h-44 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/30",children:[o.jsx("img",{src:t.cover,alt:t.title,loading:"lazy",onError:r=>{r.currentTarget.style.display="none"},className:"h-full w-full object-cover"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent"})]}):null,o.jsxs(nt,{children:[o.jsxs("div",{className:"flex items-start justify-between mb-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center",children:o.jsx(up,{className:"h-6 w-6 text-white"})}),t.date&&o.jsx(qe,{variant:"secondary",children:t.date})]}),o.jsx(rt,{className:"text-xl",children:t.title})]}),o.jsxs(dt,{children:[o.jsx("p",{className:"text-muted-foreground mb-4",children:t.summary}),o.jsxs(K,{to:`/resources/whitepapers/${t.slug}`,className:"inline-flex items-center text-accent font-medium",children:["Read whitepaper ",o.jsx(Ht,{className:"h-4 w-4 ml-1"})]})]})]},t.slug))})]})}),o.jsx("section",{className:"section-padding",children:o.jsxs("div",{className:"container-custom",children:[o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-16",children:e.map((t,n)=>o.jsxs(Ie,{className:"hover-lift border-2 animate-fade-in",style:{animationDelay:`${n*100}ms`},children:[o.jsxs(nt,{children:[o.jsxs("div",{className:"flex items-start justify-between mb-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center",children:o.jsx(t.icon,{className:"h-6 w-6 text-white"})}),t.comingSoon&&o.jsx(qe,{variant:"secondary",children:"Coming Soon"})]}),o.jsx(rt,{className:"text-xl",children:t.title})]}),o.jsx(dt,{children:o.jsx("p",{className:"text-muted-foreground",children:t.description})})]},n))}),o.jsxs("div",{className:"text-center py-16 bg-muted/30 rounded-2xl border-2 border-dashed border-border",children:[o.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6",children:o.jsx(e1,{className:"h-8 w-8 text-white"})}),o.jsxs("h2",{className:"text-3xl font-bold mb-4",children:["Blog & ",o.jsx("span",{className:"gradient-text",children:"Newsletter"})]}),o.jsx("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto mb-6",children:"Our thought leadership blog and monthly newsletter are currently in development. Stay tuned for expert insights on data architecture, AI trends, and industry best practices."}),o.jsx(qe,{variant:"outline",className:"text-base px-6 py-2",children:"Launching Q2 2025"})]})]})}),o.jsx("section",{className:"section-padding bg-muted/30",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[o.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6",children:o.jsx(Yc,{className:"h-8 w-8 text-white"})}),o.jsxs("h2",{className:"text-3xl font-bold mb-4",children:["Capabilities ",o.jsx("span",{className:"gradient-text",children:"Deck"})]}),o.jsx("p",{className:"text-lg text-muted-foreground mb-8",children:"Download our comprehensive capabilities deck to learn more about our services, methodologies, and success stories."}),o.jsx("div",{className:"p-8 bg-card rounded-xl border-2 border-dashed border-border",children:o.jsxs("p",{className:"text-muted-foreground",children:["Coming soon. For immediate needs, please ",o.jsx("a",{href:"/contact",className:"text-accent hover:underline",children:"contact us"}),"for a custom presentation."]})})]})})})]})},oj=()=>{const{slug:e}=zd(),t=e?rj(e):void 0;if(!t)return o.jsx("div",{className:"min-h-screen pt-20 section-padding",children:o.jsxs("div",{className:"container-custom",children:[o.jsx("p",{className:"text-muted-foreground",children:"Whitepaper not found."}),o.jsx(K,{className:"text-accent hover:underline",to:"/resources",children:"Back to Resources"})]})});const{html:n,headings:r}=sj(t.body),i=r.filter(u=>u.level!==1),s=()=>{const u=new Blob([t.body],{type:"text/markdown;charset=utf-8"}),d=URL.createObjectURL(u),m=document.createElement("a");m.href=d,m.download=`${t.slug}.md`,m.click(),URL.revokeObjectURL(d)},a=async()=>{const u=window.location.href;try{await navigator.clipboard.writeText(u),St({title:"Link copied",description:u})}catch{St({title:"Copy failed",description:"Please copy the URL manually."})}},l=async()=>{const u=window.location.href;if(navigator.share)try{await navigator.share({title:t.title,url:u})}catch{}else await a(),St({title:"Share not supported",description:"Link copied to clipboard instead."})};g.useEffect(()=>{const u=`${window.location.origin}/resources/whitepapers/${t.slug}`;document.title=`${t.title} | Ripotek Resources`;const d=(f,b,p)=>{let w=document.querySelector(`meta[${f}='${b}']`);w||(w=document.createElement("meta"),w.setAttribute(f,b),document.head.appendChild(w)),w.setAttribute("content",p)},m=(f,b)=>{let p=document.querySelector(`link[rel='${f}']`);p||(p=document.createElement("link"),p.setAttribute("rel",f),document.head.appendChild(p)),p.setAttribute("href",b)},v=t.summary||"";return d("property","og:title",t.title),d("property","og:description",v),d("property","og:type","article"),d("property","og:url",u),d("name","twitter:card","summary_large_image"),d("name","twitter:title",t.title),d("name","twitter:description",v),t.cover&&(d("property","og:image",t.cover),d("name","twitter:image",t.cover)),m("canonical",u),()=>{}},[t.title,t.summary,t.slug]);const c=async()=>{const u=`/whitepapers/${t.slug}.pdf`;try{(await fetch(u,{method:"HEAD"})).ok?window.open(u,"_blank"):(St({title:"PDF not available",description:"Opening print dialog to save as PDF."}),window.print())}catch{St({title:"PDF unavailable",description:"Opening print dialog to save as PDF."}),window.print()}};return o.jsxs("div",{className:"min-h-screen pt-20",children:[o.jsx("header",{className:"relative",children:o.jsx("div",{className:"section-padding gradient-bg text-primary-foreground",children:o.jsxs("div",{className:"container-custom max-w-4xl",children:[o.jsx("div",{className:"mb-3 text-primary-foreground/90",children:o.jsx(K,{className:"hover:underline",to:"/resources",children:"← Back to Resources"})}),o.jsx("h1",{className:"text-3xl md:text-5xl font-bold leading-tight mb-2",children:t.title}),t.date&&o.jsx("div",{className:"text-sm opacity-90 mb-4",children:t.date}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsxs("button",{onClick:s,className:"inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md border bg-background text-foreground hover:bg-muted transition-colors",children:[o.jsx(Yc,{className:"h-4 w-4"})," Download (.md)"]}),o.jsxs("button",{onClick:a,className:"inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border bg-background text-foreground hover:bg-muted transition-colors",children:[o.jsx(yo,{className:"h-4 w-4"})," Copy link"]}),o.jsxs("button",{onClick:l,className:"inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border bg-background text-foreground hover:bg-muted transition-colors",children:[o.jsx(ha,{className:"h-4 w-4"})," Share"]}),o.jsxs("button",{onClick:c,className:"inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border bg-background text-foreground hover:bg-muted transition-colors",children:[o.jsx(s1,{className:"h-4 w-4"})," Download PDF"]})]})]})})}),o.jsx("section",{className:"section-padding",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"grid gap-10 lg:grid-cols-[1fr,300px] max-w-5xl mx-auto",children:[o.jsx("article",{className:"prose prose-lg prose-neutral dark:prose-invert max-w-none",dangerouslySetInnerHTML:{__html:n}}),o.jsx("aside",{className:"hidden lg:block",children:o.jsxs("div",{className:"sticky top-28 rounded-xl border-2 p-5 bg-card",children:[o.jsx("div",{className:"text-xs uppercase tracking-wide text-muted-foreground mb-3",children:"Table of contents"}),o.jsxs("nav",{className:"space-y-2",children:[i.length===0&&o.jsx("div",{className:"text-sm text-muted-foreground",children:"No sections"}),i.map(u=>o.jsx("a",{href:`#${u.id}`,className:`block text-sm hover:text-accent ${u.level===3?"ml-4":""}`,children:u.text},u.id))]})]})})]})})}),o.jsx("section",{className:"section-padding pt-0",children:o.jsx("div",{className:"container-custom max-w-5xl",children:o.jsxs("div",{className:"rounded-2xl border-2 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4",children:[o.jsxs("div",{children:[o.jsx("div",{className:"font-semibold",children:"Want help implementing these ideas?"}),o.jsx("div",{className:"text-sm text-muted-foreground",children:"Book a discovery call to explore how this applies to your organization."})]}),o.jsxs(K,{to:"/contact",className:"inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90",children:["Contact Us ",o.jsx(Ht,{className:"ml-2 h-4 w-4"})]})]})})})]})};function sj(e){const t=e.split(/\r?\n/),n=[],r=[];let i=!1,s=!1,a=!1,l="";const c=m=>m.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-"),u=()=>{i&&(n.push("</ul>"),i=!1),s&&(n.push("</ol>"),s=!1)},d=m=>{let v=m.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,(f,b,p)=>`<img src="${String(p)}" alt="${String(b)}" class="rounded-xl border my-6"/>`);return v=v.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-accent underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>'),v=v.replace(/`([^`]+)`/g,"<code>$1</code>"),v=v.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),v=v.replace(/\*([^*]+)\*/g,"<em>$1</em>"),v};for(let m=0;m<t.length;m++){const f=t[m].replace(/\t/g,"  "),b=f.match(/^(```|~~~)(.*)$/);if(b){a?(a=!1,l="",n.push("</code></pre>")):(u(),a=!0,l=(b[2]||"").trim(),n.push(`<pre class="not-prose overflow-x-auto"><code class="language-${l}">`));continue}if(a){n.push(f.replace(/</g,"&lt;").replace(/>/g,"&gt;"));continue}const p=f.match(/^(#{1,3})\s+(.+)$/);if(p){u();const x=p[1].length,k=p[2].trim(),S=c(k);r.push({id:S,text:k,level:x}),n.push(`<h${x} id="${S}">${d(k)}</h${x}>`);continue}if(f.match(/^---+$/)){u(),n.push("<hr/>");continue}const y=f.match(/^\s*[-*]\s+(.+)$/);if(y){i||(u(),i=!0,n.push("<ul>")),n.push(`<li>${d(y[1])}</li>`);continue}const h=f.match(/^\s*\d+\.\s+(.+)$/);if(h){s||(u(),s=!0,n.push("<ol>")),n.push(`<li>${d(h[1])}</li>`);continue}if(f.trim()===""){u(),n.push("<br/>");continue}n.push(`<p>${d(f)}</p>`)}return u(),{html:n.join(`
`),headings:r}}const aj="Ripotek Technologies Inc. is a Calgary-based data and AI consultancy specializing in modern data platform implementations, analytics, and professional training. Since 2023, we've served 50+ enterprise clients across Energy, Financial Services, and Public Sector, delivering $12M+ in measurable business value. Our dual mission: architect enterprise-grade data solutions and develop world-class technical talent through our training programs with an 85% placement rate.",lj="Ripotek Technologies Inc. is an equal opportunity employer committed to building a diverse and inclusive team. We welcome applications from all qualified candidates regardless of race, color, religion, sex, sexual orientation, gender identity, national origin, disability, or veteran status. We encourage applications from underrepresented groups in tech. Accommodation available upon request during recruitment.",uu=[{title:"Senior Data Architect",slug:"senior-data-architect",department:"Consulting",employmentType:"Full-Time",location:"Calgary, AB (Hybrid - 2 days/week in office)",salaryRange:"$130,000 - $165,000 CAD + bonus",travel:"10-20% (primarily Western Canada)",summary:"Lead the design and implementation of modern data platforms for enterprise clients on Azure, Databricks, and Microsoft Fabric, translating business requirements into scalable, governed architectures.",roleOverview:"As a Senior Data Architect, you'll lead the design and implementation of modern data platforms for enterprise clients across Energy, Financial Services, and Public Sector. You'll work directly with C-level stakeholders to translate business requirements into scalable, governed data architectures on Azure, Databricks, and Microsoft Fabric.",sections:[{heading:"Client Delivery (60%)",items:["Lead data architecture assessments and gap analysis for enterprise clients","Design target-state architectures (lakehouse, data mesh, modern data warehouse)","Create detailed technical roadmaps with phased implementation plans","Architect end-to-end solutions: ingestion, storage, processing, consumption layers","Develop governance frameworks: data cataloging, lineage, quality, security","Lead discovery workshops and present architectural recommendations to executives","Mentor junior consultants and provide technical oversight on projects","Ensure solutions align with best practices and compliance (GDPR, PIPEDA, SOC 2)"]},{heading:"Pre-Sales & Business Development (20%)",items:["Support sales with technical discovery and proposal development","Develop client-facing architecture diagrams and solution designs","Provide effort estimates and technical scoping for proposals","Present capabilities and case studies to prospective clients","Participate in industry conferences and networking events"]},{heading:"Thought Leadership (10%)",items:["Contribute to Ripotek's knowledge base and best practices","Mentor team members on architecture patterns and methodologies","Stay current with emerging technologies and platform updates","Write whitepapers and blog posts on data architecture topics","Present at internal lunch-and-learns and training sessions"]},{heading:"Internal Projects (10%)",items:["Contribute to internal IP (accelerators, frameworks, templates)","Participate in hiring and interviewing candidates","Support development of training curriculum content","Participate in strategic planning and service offerings refinement"]},{heading:"Required Qualifications — Experience",items:["8+ years in data architecture, engineering, or related roles","5+ years designing and implementing enterprise data platforms","3+ years with Azure data services (Data Lake, Synapse, Data Factory, Databricks)","Delivered 5+ large-scale data platform implementations","Experience across multiple industries (Energy, Finance, or Public Sector preferred)"]},{heading:"Required Qualifications — Technical Skills",items:["Cloud: Azure (primary), AWS/GCP (secondary)","Platforms: Azure Synapse, Databricks, Microsoft Fabric, Snowflake","Modeling: Dimensional, Data Vault 2.0, OBT patterns","Frameworks: TOGAF, Zachman or similar","Governance: Azure Purview, Collibra or similar","Programming: SQL (advanced), Python/Scala (intermediate)","DevOps: Git, Azure DevOps, CI/CD","BI: Power BI, Tableau, or Looker"]},{heading:"Required Qualifications — Soft Skills",items:["Exceptional communication; explain complex concepts to non-technical stakeholders","Strong facilitation for workshops and discovery sessions","Ability to influence and gain stakeholder buy-in","Client relationship management experience","Comfortable presenting to C-level executives","Self-motivated, independent, strong problem-solving"]},{heading:"Preferred Qualifications",items:["Azure Solutions Architect Expert (Microsoft)","Databricks Certified Data Engineer/Architect","TOGAF 9.2","Experience with data mesh patterns","Knowledge of AI/ML platform design","Prior consulting experience","Domain knowledge: Oil & Gas, Banking, Government"]},{heading:"What We Offer — Compensation & Benefits",items:["Competitive salary $130K-$165K + 10-20% bonus","RRSP matching (5%)","Comprehensive health, dental, vision","Professional development budget ($5,000/year)","Certification & training support","Annual tech allowance ($1,500)"]},{heading:"What We Offer — Work Environment",items:["Hybrid: 2 days/week in Calgary office","Flexible hours (core 10am-3pm MT)","Modern downtown office, standing desks","Latest MacBook Pro or Surface Laptop","Home office allowance ($2,000)"]},{heading:"What We Offer — Growth & Development",items:["Cutting-edge Azure, Databricks, and AI projects","Diverse industries and use cases","Mentorship from seasoned architects","Contribute to training curriculum","Path to Principal Architect and leadership","Conference attendance and speaking"]},{heading:"What We Offer — Culture & Impact",items:["Small team; visible impact","Direct client interaction and ownership","Collaborative, low-ego culture","Train the next generation of data pros","Drive real business transformation"]}],interviewProcess:["Phone Screen (30 min) — HR and hiring manager","Technical Interview (90 min) — Architecture design exercise","Case Study (60 min) — Present solution to mock client","Culture Fit (45 min) — Meet leadership and peers","Reference Checks (3 professional references)"],timeline:"2-3 weeks from application to offer",howToApply:{email:"careers@ripotek.ca",subject:"Senior Data Architect - [Your Name]",instructions:["A challenging data architecture problem you solved and your approach","Your experience with Azure/Databricks and excitement about the stack","What draws you to consulting and diverse clients"]}},{title:"Junior Data Engineer (Entry-Level)",slug:"junior-data-engineer",department:"Consulting",employmentType:"Full-Time",location:"Calgary, AB (Hybrid - 2 days/week in office)",salaryRange:"$65,000 - $80,000 CAD",reportingTo:"Senior Data Engineer or Architect",summary:"Support client projects by building data pipelines, writing SQL, and assisting with data platform implementations with strong mentorship and growth path.",roleOverview:"As a Junior Data Engineer, you'll support client projects by building data pipelines, writing SQL queries, and assisting with data platform implementations. This is an entry-level role ideal for recent graduates or candidates with 0-2 years of experience.",sections:[{heading:"Data Engineering (60%)",items:["Build and maintain ELT pipelines (ADF, Databricks, Fabric)","Write SQL for transformations and validation","Develop Python/Scala scripts for processing","Implement data quality checks and error handling","Assist with data modeling (dimensional, facts)","Document data flows and transformations","Unit test pipelines and monitor executions"]},{heading:"Client Support (20%)",items:["Participate in client meetings and standups","Gather requirements from business users","Create runbooks and data dictionaries","Provide status updates; support UAT"]},{heading:"Learning & Development (20%)",items:["Shadow senior engineers and architects","Complete training modules and certifications","Participate in code reviews","Attend weekly knowledge shares","Work toward Microsoft certifications"]},{heading:"Required — Education & Experience",items:["Bachelor's in CS/IS or related, OR","Completion of Ripotek training, OR","Equivalent self-taught with projects","0-2 years in data engineering/analytics/BI","Internship/co-op is a plus; GitHub portfolio"]},{heading:"Technical Skills",items:["SQL: SELECT, JOIN, GROUP BY, window functions","Python basics (pandas, requests, file I/O)","Azure basics (portal, RGs, storage)","Data concepts: ETL/ELT, DW, lakes","Git basics; VS Code/Azure Data Studio"]},{heading:"Nice to Have",items:["ADF, Databricks, Synapse exposure","Power BI","Spark/Scala basics","CI/CD concepts","Agile (Scrum/Kanban)"]},{heading:"Soft Skills",items:["Eagerness to learn; attention to detail","Follow instructions; ask clarifying questions","Time management and deadlines","Team player; receptive to feedback","Strong written and verbal communication"]},{heading:"Preferred Qualifications",items:["DP-900 (Azure Data Fundamentals)","DP-203 (Azure Data Engineer) or pursuing","Completion of Ripotek program with strong performance","Internship in tech/consulting","Open-source contributions; blog/portfolio"]},{heading:"What We Offer — Compensation & Benefits",items:["Salary $65K-$80K + 5-10% bonus","RRSP matching (3%)","Health, dental, vision","Professional development ($2,500/year)","Certification exam fees covered"]},{heading:"Work Environment",items:["Hybrid: 2 days/week for collaboration","Flexible hours (core 10am-3pm MT)","MacBook Pro or Surface","Home office allowance ($1,000)","Modern downtown office"]},{heading:"Growth & Development",items:["Structured onboarding and mentorship","Pair programming; bi-weekly 1:1s","Clear path to Intermediate/Senior","Exposure to multiple clients and industries","Encouraged to certify; annual reviews"]},{heading:"Culture",items:["Supportive, learning-focused","Questions encouraged; diverse team","Meaningful projects for real clients","Collaborative, low-pressure; celebrates growth"]},{heading:"What Success Looks Like (First Year)",items:["Months 1-3: Onboarding; small pipeline tasks","Months 4-6: Build simple pipelines; DP-900","Months 7-9: Lead small modules; start DP-203","Months 10-12: Contribute to design; earn DP-203"]}],interviewProcess:["Phone Screen (30 min) — HR and hiring manager","Technical Assessment (2-3 hours take-home) — Simple pipeline","Technical Interview (60 min) — SQL, Python, Azure basics","Behavioral Interview (30 min)","Team Meet (30 min)"],timeline:"2 weeks from application to offer",howToApply:{email:"careers@ripotek.ca",subject:"Junior Data Engineer - [Your Name]",instructions:["What excites you about data engineering","A project you've worked on and what you learned","Why you want to start at Ripotek"]}},{title:"Student Success Coordinator",slug:"student-success-coordinator",department:"Training & Development",employmentType:"Full-Time",location:"Calgary, AB (Hybrid - 3 days/week in office)",salaryRange:"$55,000 - $70,000 CAD",reportingTo:"Director of Training Programs",summary:"Own student lifecycle from enrollment to job placement, combining operations, advising, career coaching, and community building to maximize outcomes.",roleOverview:"As Student Success Coordinator, you'll be the primary point of contact for students enrolled in Ripotek's training programs. You'll manage the student lifecycle from enrollment through graduation and job placement, ensuring every student has the support and resources they need to succeed.",sections:[{heading:"Student Onboarding & Operations (30%)",items:["Manage enrollment process and system access","Onboard new students and orientation","Maintain records in CRM and LMS","Coordinate schedules, rooms, Zoom links","Send weekly announcements and reminders","Track attendance and follow up","Process LOA/deferrals/withdrawals","Manage equipment loans","Coordinate with instructors on accommodations"]},{heading:"Student Support & Advising (25%)",items:["First point of contact for questions","Monitor engagement; proactive outreach","Check-in calls/meetings with at-risk students","Connect to tutoring, mental health, aid","Facilitate study groups and communities","Mediate conflicts; gather feedback","Maintain pulse on sentiment and escalate"]},{heading:"Career Services & Job Placement (30%)",items:["Resume and LinkedIn reviews","Mock interviews (technical and behavioral)","Teach job search and networking","Connect with hiring partners","Track job search progress and outcomes","Maintain alumni and employer relationships","Organize employer sessions and events","Prepare for assessments and interviews","Celebrate wins on social media"]},{heading:"Community Building & Events (10%)",items:["Plan and execute student events","Manage Slack workspace","Create community and belonging","Recognize achievements and foster mentorship","Coordinate guest speakers"]},{heading:"Reporting & Process Improvement (5%)",items:["Track and report key metrics","Identify trends and recommend improvements","Document processes and SOPs","Support marketing with testimonials","Participate in program reviews"]},{heading:"Required Qualifications — Experience",items:["2+ years in student services, customer success, or advising","Experience with adult learners or career-changers","Background in education/training/edtech","Relationship-building and trust","Manage multiple priorities and deadlines"]},{heading:"Required Skills",items:["Communication: excellent written and verbal","Empathy: understand challenges; provide support","Organization: strong PM and admin","Tech savvy: CRMs, LMS, Slack, Zoom, Google Workspace","Problem solving: resourceful and solutions-oriented","Career coaching basics","Data-driven and metrics aware"]},{heading:"Soft Skills",items:["Passion for helping people succeed","High emotional intelligence","Patient and calm under pressure","Proactive with strong follow-through","Detail-oriented and collaborative","Positive, encouraging attitude"]},{heading:"Preferred Qualifications",items:["BA in Education/Psychology/Social Work or related","Bootcamp or technical training experience","Knowledge of data/tech careers","LinkedIn Recruiter and job boards","Career coach/counselor certified","Salesforce/HubSpot or CRM experience","Bilingual is an asset; HR/talent background"]},{heading:"What We Offer — Compensation & Benefits",items:["Salary $55K-$70K + 5-10% bonus","RRSP matching (3%)","Health, dental, vision","Professional development ($2,000/year)","Wellness stipend ($500/year)"]},{heading:"Work Environment",items:["Hybrid: 3 days/week in office","Flexible hours with some evenings","Modern downtown office","Laptop and home office allowance","Casual dress code"]},{heading:"Growth & Impact",items:["Direct impact on student transformations","Build tight-knit community","Shape experience as programs scale","Path to Director of Student Success","Cross-functional exposure"]},{heading:"Culture",items:["Mission-driven; student outcomes focused","Supportive, collaborative team","Celebrate wins together","Work-life balance respected","Inclusive and welcoming"]},{heading:"Typical Week",items:["Mon: Team meeting, check-ins, resume reviews","Tue: In-office — meetings, employer outreach, admin","Wed: In-office — orientation and 1-on-1s","Thu: Remote — Slack engagement, mock interviews, reporting","Fri: Remote — planning and development","Evenings (2-3x/wk): Student calls (6-8pm MT)"]}],interviewProcess:["Phone Screen (30 min) — HR and hiring manager","Scenario Interview (45 min) — Student situations role play","Career Coaching Demo (30 min) — Resume review and feedback","Team Fit (30 min) — Meet instructors and operations","Reference Checks (2 references)"],howToApply:{email:"careers@ripotek.ca",subject:"Student Success Coordinator - [Your Name]",instructions:["A time you helped someone overcome a challenge","Why you're passionate about adult education and transitions","Your approach to community and belonging"]}},{title:"Azure Solutions Consultant",slug:"azure-solutions-consultant",department:"Consulting",employmentType:"Full-Time",location:"Calgary, AB (Hybrid - 2 days/week in office)",salaryRange:"$95,000 - $130,000 CAD + bonus",travel:"10-20% (Western Canada)",summary:"Design and implement modern data platforms on Azure for enterprise clients, building end-to-end pipelines, lakehouses, and governed analytics solutions.",roleOverview:"As an Azure Solutions Consultant, you'll design and implement modern data platforms on Azure for enterprise clients. You'll build end-to-end data pipelines, implement lakehouses, and create governed analytics solutions using Azure Data Factory, Databricks, Synapse, and Microsoft Fabric.",sections:[{heading:"Solution Delivery (65%)",items:["Design and implement Azure data architectures","Build ELT pipelines using ADF and Databricks","Implement medallion architecture with Delta Lake","Design and optimize data models","Configure security and governance (Purview)","Implement CI/CD with Azure DevOps","Troubleshoot and optimize performance","Create technical documentation","Provide knowledge transfer"]},{heading:"Client Engagement (25%)",items:["Discovery workshops and requirements","Present solutions to stakeholders","Collaborate with client teams","Manage expectations and status","Support sales with scoping and estimation","Gather feedback and iterate"]},{heading:"Professional Development (10%)",items:["Stay current with Azure updates","Pursue Microsoft certifications","Contribute to knowledge sharing","Mentor junior consultants","Participate in community events"]},{heading:"Required Qualifications — Experience",items:["4+ years in data/cloud engineering or BI","2+ years with Azure data services","Delivered 3+ end-to-end platforms","Experience with on-prem and cloud","Direct client/business stakeholder work"]},{heading:"Required Qualifications — Technical Skills",items:["ADF, Data Lake Gen2, Synapse, Databricks","SQL (advanced), Python (intermediate)","Orchestration: ADF, Databricks workflows, Functions","Modeling: dimensional, SCD","Git, Azure Repos/GitHub, CI/CD","Power BI basics","IaC: ARM, Terraform, Bicep (nice to have)"]},{heading:"Required Qualifications — Soft Skills",items:["Strong communication across audiences","Problem-solving mindset","Self-directed; manage priorities","Comfortable with ambiguity","Team player; collaborative","Eagerness to learn"]},{heading:"Preferred Qualifications",items:["DP-203, Solutions Architect Expert","Databricks DE Associate","Experience with Microsoft Fabric","Governance tools (Purview, Collibra)","Streaming (Event Hubs, Kafka, Stream Analytics)","Consulting experience","Domain expertise: Energy, Finance, Public Sector"]},{heading:"What We Offer — Compensation & Benefits",items:["Salary $95K-$130K + 10-15% bonus","RRSP matching (4%)","Health, dental, vision","Professional development ($3,500/year)","Cert exam fees and training covered"]},{heading:"Work Environment",items:["Hybrid: 2 days/week in-office","Flexible hours (core 10am-3pm MT)","Latest MacBook Pro or Surface","Home office allowance ($1,500)","Downtown Calgary office"]},{heading:"Growth & Development",items:["Diverse projects across industries","Mentorship from senior architects","Clear career progression","Specialize in Databricks/Fabric/AI","Pre-sales and client management exposure","Internal training on new services"]},{heading:"Culture",items:["Collaborative, low-ego team","Direct impact on client success","Knowledge sharing culture","Supportive of work-life balance","Small company; your voice matters"]}],interviewProcess:["Phone Screen (30 min) — HR + technical lead","Technical Interview (90 min) — Azure architecture & pipelines","Coding Challenge (take-home, 2-3 hours) — Simple ELT pipeline","Client Scenario (45 min) — Present solution","Team Fit (30 min) — Meet the team"],timeline:"2-3 weeks from application to offer",howToApply:{email:"careers@ripotek.ca",subject:"Azure Solutions Consultant - [Your Name]",instructions:["Brief description of the most complex pipeline you've built","Your Azure certification status or plan","What excites you about modern data platforms and Azure"]}},{title:"Power BI Instructor (Training Programs)",slug:"power-bi-instructor",department:"Training & Development",employmentType:"Contract (Renewable)",location:"Remote (Calgary-based preferred)",compensation:"$80-$120/hour CAD",commitment:"12-24 weeks per cohort, 2-3 cohorts per year",summary:"Deliver live, instructor-led Power BI Analyst training programs to 15-25 students per cohort, combining teaching, mentorship, and career coaching.",roleOverview:"Deliver live, instructor-led Power BI Analyst training programs to aspiring data professionals. You'll teach 15-25 students per cohort through a 12-week intensive program covering Power BI Desktop, DAX, data modeling, and enterprise BI best practices.",sections:[{heading:"Instruction & Curriculum Delivery (50%)",items:["Deliver 3-hour live sessions 3x/week (Mon/Wed/Sat 6-9pm MT)","Teach foundational to advanced Power BI topics","Demonstrate concepts through live coding and real examples","Facilitate hands-on labs and troubleshoot in real-time","Adapt teaching style to diverse learning paces","Create engaging sessions (polls, breakouts, Q&A)","Record sessions for review"]},{heading:"Student Support & Mentorship (25%)",items:["Weekly office hours (2-3 hours) for 1-on-1 help","Review and grade weekly lab assignments","Provide detailed feedback on projects","1-on-1 check-ins with struggling students","Mentor on career development and job search","Write LinkedIn recommendations for top students","Serve as technical reference for students"]},{heading:"Assessment & Feedback (15%)",items:["Create and grade quizzes, exams, and assessments","Evaluate capstone projects using rubric","Provide feedback on DAX, models, and design","Track progress and identify at-risk students","Prepare for PL-300 certification","Conduct mock technical interviews"]},{heading:"Curriculum Development & Improvement (10%)",items:["Update materials based on feedback and industry","Develop new labs and capstone scenarios","Stay current with Power BI updates","Suggest curriculum improvements","Contribute to Power BI knowledge base"]},{heading:"Required Qualifications — Professional Experience",items:["5+ years as BI developer/analyst/consultant with Power BI","Built 20+ production Power BI dashboards","Deep expertise in DAX and data modeling","Power Query M for data transformation","Power BI Service, workspaces, pipelines, RLS","Visualization best practices"]},{heading:"Required Qualifications — Teaching Experience",items:["2+ years teaching, training, or mentoring","Explain complex concepts to beginners","Comfortable with live, virtual instruction","Adapt teaching style to student needs","Patient, encouraging, and supportive"]},{heading:"Required Qualifications — Technical Skills",items:["Power BI Desktop, Service, Report Builder, Paginated","DAX advanced functions and time intelligence","Power Query M language and custom functions","Data modeling (star schema, SCD, fact tables)","SQL (T-SQL intermediate)","Excel advanced (pivot, Power Pivot)","Azure basics (SQL, Data Lake, Synapse nice to have)"]},{heading:"Required Qualifications — Soft Skills",items:["Excellent communication","High energy for teaching","Empathy for non-technical backgrounds","Strong time management","Actionable feedback","Comfortable with public speaking"]},{heading:"Preferred Qualifications",items:["PL-300 certified","Prior teaching in bootcamp/college/corporate","Experience with LMS platforms","Background in adult education/instructional design","Active in Power BI community","Consulting or freelance experience","Knowledge of Tableau/Looker/Qlik"]},{heading:"Compensation",items:["$80-$120/hour based on experience","Guaranteed minimum hours/cohort (150)","Paid prep time","Bonuses based on satisfaction and placement"]},{heading:"Flexibility",items:["Remote instruction (Canada)","Evening classes (6-9pm MT)","12-week commitment per cohort","2-4 week breaks between cohorts"]},{heading:"Impact & Growth",items:["Direct impact on student careers","Build personal brand as instructor","Contribute to curriculum","Potential to teach additional programs","Join expert instructor community"]},{heading:"Support & Resources",items:["Comprehensive curriculum and materials","TA support for large cohorts","Instructor training and peer learning","Access to Azure/Power BI environments","Admin support for grading and management"]},{heading:"Teaching Schedule (12-Week Program)",items:["Live: Mon/Wed/Sat 6-9pm MT (36 sessions)","Office hours: 2-3 hours/week","Grading: ~3-5 hours/week","Total: ~15-18 hours/week"]}],interviewProcess:["Initial Screening (30 min) — Philosophy & experience","Technical Assessment (60 min) — Build a dashboard (take-home)","Teaching Demo (45 min) — 15-min DAX lesson","Student Empathy (30 min) — Approach to diverse learners","Reference Checks (2 references)"],howToApply:{email:"training@ripotek.ca",subject:"Power BI Instructor - [Your Name]",instructions:["A complex Power BI concept you love teaching and your beginner-friendly explanation","Your proudest dashboard and what made it successful","Why you're passionate about teaching data skills"]}}],cj=()=>{const e=fy(),t=[{icon:ga,title:"Competitive Compensation",description:"Industry-leading salaries with performance bonuses and equity options."},{icon:Kc,title:"Health & Wellness",description:"Comprehensive health benefits, wellness programs, and mental health support."},{icon:Va,title:"Learning & Development",description:"Continuous learning budget, certifications, and conference attendance."},{icon:l1,title:"Flexible Work",description:"Hybrid work model with remote options and flexible scheduling."},{icon:o1,title:"Work-Life Balance",description:"Generous PTO, parental leave, and focus on sustainable work practices."},{icon:c1,title:"Latest Technology",description:"Access to cutting-edge tools, platforms, and development resources."}],n=s=>`${window.location.origin}/careers/${s}`,r=async s=>{const a=n(s);try{await navigator.clipboard.writeText(a),St({title:"Link copied",description:a})}catch{St({title:"Copy failed",description:"Unable to copy link. Please try again."})}};g.useEffect(()=>{var a;const s=(a=window.location.hash)==null?void 0:a.replace("#","");s&&uu.some(l=>l.slug===s)&&e(`/careers/${s}`,{replace:!0})},[e]);const i=async(s,a)=>{const l=n(a);if(navigator.share)try{await navigator.share({title:s,text:`Opportunity at Ripotek: ${s}`,url:l})}catch{}else await r(a),St({title:"Share not supported",description:"Link copied to clipboard instead."})};return o.jsxs("div",{className:"min-h-screen pt-20",children:[o.jsx("section",{className:"section-padding gradient-bg text-primary-foreground",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"max-w-4xl mx-auto text-center animate-fade-in-up",children:[o.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6",children:"Join Our Team"}),o.jsx("p",{className:"text-xl opacity-90 mb-8",children:"Build your career with a fast-growing consulting firm at the forefront of data engineering, AI, and business intelligence."}),o.jsx(Z,{size:"lg",asChild:!0,variant:"secondary",children:o.jsx("a",{href:"#openings",children:"View Open Positions"})})]})})}),o.jsx("section",{className:"section-padding bg-muted/30",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"text-center mb-12",children:[o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:["About ",o.jsx("span",{className:"gradient-text",children:"Ripotek"})]}),o.jsx("p",{className:"text-lg text-muted-foreground max-w-3xl mx-auto",children:aj})]})})}),o.jsx("section",{className:"section-padding",children:o.jsxs("div",{className:"container-custom",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:["Why ",o.jsx("span",{className:"gradient-text",children:"Ripotek?"})]}),o.jsx("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto",children:"We're building something special - a company where talented individuals can make an impact while growing their careers."})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map((s,a)=>o.jsxs(Ie,{className:"hover-lift border-2 animate-fade-in",style:{animationDelay:`${a*100}ms`},children:[o.jsxs(nt,{children:[o.jsx("div",{className:"w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4",children:o.jsx(s.icon,{className:"h-6 w-6 text-white"})}),o.jsx(rt,{className:"text-lg",children:s.title})]}),o.jsx(dt,{children:o.jsx("p",{className:"text-muted-foreground text-sm",children:s.description})})]},a))})]})}),o.jsx("section",{className:"section-padding bg-muted/30",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"max-w-4xl mx-auto",children:[o.jsx("div",{className:"text-center mb-12",children:o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:["Our ",o.jsx("span",{className:"gradient-text",children:"Culture"})]})}),o.jsxs("div",{className:"space-y-8",children:[o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0",children:o.jsx(qa,{className:"h-6 w-6 text-white"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Collaborative Environment"}),o.jsx("p",{className:"text-muted-foreground",children:"We believe the best solutions come from diverse perspectives working together. Our open, collaborative culture encourages knowledge sharing and mutual support."})]})]}),o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0",children:o.jsx(ga,{className:"h-6 w-6 text-white"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Growth Mindset"}),o.jsx("p",{className:"text-muted-foreground",children:"Continuous learning is at our core. We invest in your professional development with training budgets, mentorship programs, and opportunities to work on cutting-edge projects."})]})]}),o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0",children:o.jsx(Kc,{className:"h-6 w-6 text-white"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Work-Life Integration"}),o.jsx("p",{className:"text-muted-foreground",children:"We understand that our team members have lives outside work. Our flexible policies and supportive culture help you maintain balance and well-being."})]})]})]})]})})}),o.jsx("section",{id:"openings",className:"section-padding",children:o.jsxs("div",{className:"container-custom",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:["Open ",o.jsx("span",{className:"gradient-text",children:"Positions"})]}),o.jsx("p",{className:"text-lg text-muted-foreground",children:"Join our growing team and make an impact from day one"})]}),o.jsx("div",{className:"max-w-4xl mx-auto space-y-6",children:uu.map((s,a)=>o.jsx(Ie,{id:s.slug,className:"hover-lift border-2 hover:border-accent transition-all animate-fade-in",style:{animationDelay:`${a*100}ms`},children:o.jsx(nt,{children:o.jsxs("div",{className:"flex flex-col md:flex-row md:items-start justify-between gap-4",children:[o.jsxs("div",{className:"flex-1",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[o.jsx(qe,{children:s.employmentType}),o.jsx(qe,{variant:"outline",children:s.location}),o.jsx(qe,{variant:"secondary",children:s.department})]}),o.jsx(rt,{className:"text-2xl mb-2",children:s.title}),o.jsx(Zt,{className:"text-base",children:s.summary})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Z,{asChild:!0,className:"bg-gradient-to-r from-primary to-accent hover:opacity-90 whitespace-nowrap",children:o.jsx(K,{to:`/careers/${s.slug}`,children:"View Details"})}),o.jsxs(Z,{variant:"outline",size:"sm",onClick:()=>r(s.slug),title:"Copy job link",children:[o.jsx(yo,{className:"h-4 w-4 mr-1"})," Copy link"]}),o.jsxs(Z,{variant:"ghost",size:"sm",onClick:()=>i(s.title,s.slug),title:"Share",children:[o.jsx(ha,{className:"h-4 w-4 mr-1"})," Share"]})]})]})})},s.slug))}),o.jsxs("div",{className:"text-center mt-12",children:[o.jsx("p",{className:"text-muted-foreground mb-4",children:"Don't see the right role? We're always looking for talented individuals."}),o.jsx(Z,{size:"lg",variant:"outline",asChild:!0,children:o.jsxs(K,{to:"/contact",children:["Submit Your Resume ",o.jsx(Ht,{className:"ml-2 h-5 w-5"})]})})]})]})}),o.jsx("section",{className:"section-padding bg-muted/30",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[o.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-6",children:["Community ",o.jsx("span",{className:"gradient-text",children:"Impact"})]}),o.jsx("p",{className:"text-lg text-muted-foreground mb-8",children:"Beyond our core business, we're committed to giving back through mentorship programs, scholarship initiatives, community meetup hosting, and educational speaking engagements."}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[o.jsxs("div",{className:"p-6 bg-card rounded-xl border-2 border-border text-left",children:[o.jsx("h3",{className:"font-semibold text-lg mb-2",children:"Mentorship Programs"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Providing guidance to aspiring data professionals through one-on-one mentorship."})]}),o.jsxs("div",{className:"p-6 bg-card rounded-xl border-2 border-border text-left",children:[o.jsx("h3",{className:"font-semibold text-lg mb-2",children:"Scholarship Initiatives"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Supporting underrepresented groups in tech through training scholarships."})]}),o.jsxs("div",{className:"p-6 bg-card rounded-xl border-2 border-border text-left",children:[o.jsx("h3",{className:"font-semibold text-lg mb-2",children:"Community Meetups"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Hosting regular meetups for data professionals to network and learn."})]}),o.jsxs("div",{className:"p-6 bg-card rounded-xl border-2 border-border text-left",children:[o.jsx("h3",{className:"font-semibold text-lg mb-2",children:"Speaking Engagements"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Sharing knowledge at conferences, universities, and industry events."})]})]})]})})}),o.jsx("section",{className:"section-padding",children:o.jsx("div",{className:"container-custom max-w-4xl",children:o.jsx("div",{className:"text-sm text-muted-foreground",children:lj})})})]})},uj=()=>{const{slug:e}=zd(),t=uu.find(a=>a.slug===e);if(!t)return o.jsx("div",{className:"min-h-screen pt-20 section-padding",children:o.jsxs("div",{className:"container-custom",children:[o.jsx("p",{className:"text-muted-foreground",children:"Role not found."}),o.jsx(K,{className:"text-accent hover:underline",to:"/careers",children:"Back to Careers"})]})});const n=()=>`${window.location.origin}/careers/${t.slug}`,r=async()=>{const a=n();try{await navigator.clipboard.writeText(a),St({title:"Link copied",description:a})}catch{St({title:"Copy failed",description:"Unable to copy link. Please try again."})}},i=async()=>{const a=n();if(navigator.share)try{await navigator.share({title:t.title,text:`Opportunity at Ripotek: ${t.title}`,url:a})}catch{}else await r(),St({title:"Share not supported",description:"Link copied to clipboard instead."})},s={"@context":"https://schema.org/","@type":"JobPosting",title:t.title,description:`${t.roleOverview}`,employmentType:t.employmentType,hiringOrganization:{"@type":"Organization",name:"Ripotek Technologies Inc.",sameAs:"https://ripotek.com"},jobLocation:{"@type":"Place",address:{"@type":"PostalAddress",addressLocality:t.location,addressCountry:"CA"}},applicantLocationRequirements:void 0,industry:t.department,identifier:{"@type":"PropertyValue",name:"Ripotek",value:t.slug},estimatedSalary:t.salaryRange||t.compensation,url:n()};return o.jsxs("div",{className:"min-h-screen pt-20 pb-24 lg:pb-0",children:[o.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(s)}}),o.jsx("section",{className:"section-padding gradient-bg text-primary-foreground",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"max-w-4xl",children:[o.jsx("div",{className:"mb-4",children:o.jsx(K,{to:"/careers",className:"text-primary-foreground/90 hover:underline",children:"← Back to Careers"})}),o.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-3",children:[o.jsx(qe,{variant:"secondary",children:t.employmentType}),o.jsx(qe,{variant:"outline",className:"bg-background/10 text-primary-foreground",children:t.location}),o.jsx(qe,{className:"bg-background/20 text-primary-foreground",children:t.department})]}),o.jsx("h1",{className:"text-3xl md:text-5xl font-bold mb-3",children:t.title}),o.jsx("p",{className:"text-lg opacity-90 max-w-3xl",children:t.roleOverview}),o.jsxs("div",{className:"mt-6 flex flex-wrap gap-2",children:[o.jsx(Z,{asChild:!0,className:"bg-gradient-to-r from-primary to-accent hover:opacity-90",children:o.jsxs("a",{href:`mailto:${t.howToApply.email}?subject=${encodeURIComponent(t.howToApply.subject)}`,children:["Apply Now ",o.jsx(Ht,{className:"ml-2 h-4 w-4"})]})}),o.jsxs(Z,{variant:"outline",onClick:r,children:[o.jsx(yo,{className:"h-4 w-4 mr-1"})," Copy link"]}),o.jsxs(Z,{variant:"ghost",onClick:i,children:[o.jsx(ha,{className:"h-4 w-4 mr-1"})," Share"]})]})]})})}),o.jsx("section",{className:"section-padding",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"grid gap-8 lg:grid-cols-[1fr,320px] max-w-6xl",children:[o.jsxs("article",{className:"space-y-8",children:[o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[t.salaryRange&&o.jsxs(Ie,{className:"p-4",children:[o.jsx("div",{className:"text-xs uppercase tracking-wide text-muted-foreground",children:"Salary Range"}),o.jsx("div",{className:"font-semibold",children:t.salaryRange})]}),t.travel&&o.jsxs(Ie,{className:"p-4",children:[o.jsx("div",{className:"text-xs uppercase tracking-wide text-muted-foreground",children:"Travel"}),o.jsx("div",{className:"font-semibold",children:t.travel})]}),t.commitment&&o.jsxs(Ie,{className:"p-4",children:[o.jsx("div",{className:"text-xs uppercase tracking-wide text-muted-foreground",children:"Commitment"}),o.jsx("div",{className:"font-semibold",children:t.commitment})]}),t.reportingTo&&o.jsxs(Ie,{className:"p-4",children:[o.jsx("div",{className:"text-xs uppercase tracking-wide text-muted-foreground",children:"Reporting To"}),o.jsx("div",{className:"font-semibold",children:t.reportingTo})]})]}),t.sections.map((a,l)=>o.jsxs("section",{className:"space-y-3",children:[o.jsx("h2",{className:"text-xl md:text-2xl font-semibold",children:a.heading}),a.paragraphs&&a.paragraphs.map((c,u)=>o.jsx("p",{className:"text-muted-foreground",children:c},u)),a.items&&o.jsx("ul",{className:"list-disc pl-5 space-y-1 text-muted-foreground",children:a.items.map((c,u)=>o.jsx("li",{children:c},u))})]},l)),t.interviewProcess&&o.jsxs("section",{className:"space-y-3",children:[o.jsx("h2",{className:"text-xl md:text-2xl font-semibold",children:"Interview Process"}),o.jsx("ol",{className:"list-decimal pl-5 space-y-1 text-muted-foreground",children:t.interviewProcess.map((a,l)=>o.jsx("li",{children:a},l))}),t.timeline&&o.jsxs("p",{className:"text-sm text-muted-foreground",children:["Timeline: ",t.timeline]})]})]}),o.jsx("aside",{className:"space-y-4",children:o.jsxs(Ie,{className:"p-5",children:[o.jsx("h3",{className:"font-semibold mb-2",children:"Apply for this role"}),o.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Send your application to:"}),o.jsx("a",{className:"text-accent underline",href:`mailto:${t.howToApply.email}?subject=${encodeURIComponent(t.howToApply.subject)}`,children:t.howToApply.email}),t.howToApply.instructions&&t.howToApply.instructions.length>0&&o.jsxs("div",{className:"mt-3",children:[o.jsx("div",{className:"text-sm font-medium mb-1",children:"Include:"}),o.jsx("ul",{className:"list-disc pl-5 text-sm text-muted-foreground space-y-1",children:t.howToApply.instructions.map((a,l)=>o.jsx("li",{children:a},l))})]}),o.jsxs("div",{className:"mt-4 flex gap-2",children:[o.jsx(Z,{asChild:!0,children:o.jsx("a",{href:`mailto:${t.howToApply.email}?subject=${encodeURIComponent(t.howToApply.subject)}`,children:"Apply Now"})}),o.jsxs(Z,{variant:"outline",onClick:r,children:[o.jsx(yo,{className:"h-4 w-4 mr-1"})," Copy link"]})]})]})})]})})}),o.jsx("div",{className:"lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-sm p-3",children:o.jsxs("div",{className:"container-custom flex gap-2",children:[o.jsx(Z,{asChild:!0,className:"flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90",children:o.jsx("a",{href:`mailto:${t.howToApply.email}?subject=${encodeURIComponent(t.howToApply.subject)}`,children:"Apply Now"})}),o.jsx(Z,{variant:"outline",onClick:r,children:o.jsx(yo,{className:"h-4 w-4"})}),o.jsx(Z,{variant:"ghost",onClick:i,children:o.jsx(ha,{className:"h-4 w-4"})})]})})]})},Kr=g.forwardRef(({className:e,type:t,...n},r)=>o.jsx("input",{type:t,className:me("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...n}));Kr.displayName="Input";var dj="Label",Sy=g.forwardRef((e,t)=>o.jsx(ce.label,{...e,ref:t,onMouseDown:n=>{var i;n.target.closest("button, input, select, textarea")||((i=e.onMouseDown)==null||i.call(e,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault())}}));Sy.displayName=dj;var Cy=Sy;const mj=Ha("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),un=g.forwardRef(({className:e,...t},n)=>o.jsx(Cy,{ref:n,className:me(mj(),e),...t}));un.displayName=Cy.displayName;const jy=g.forwardRef(({className:e,...t},n)=>o.jsx("textarea",{className:me("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:n,...t}));jy.displayName="Textarea";function Up(e,[t,n]){return Math.min(n,Math.max(t,e))}var pj=g.createContext(void 0);function fj(e){const t=g.useContext(pj);return e||t||"ltr"}var Hl=0;function hj(){g.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Hp()),document.body.insertAdjacentElement("beforeend",e[1]??Hp()),Hl++,()=>{Hl===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Hl--}},[])}function Hp(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Vl="focusScope.autoFocusOnMount",ql="focusScope.autoFocusOnUnmount",Vp={bubbles:!1,cancelable:!0},gj="FocusScope",Ny=g.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:s,...a}=e,[l,c]=g.useState(null),u=Ut(i),d=Ut(s),m=g.useRef(null),v=Ne(t,p=>c(p)),f=g.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;g.useEffect(()=>{if(r){let p=function(x){if(f.paused||!l)return;const k=x.target;l.contains(k)?m.current=k:Mn(m.current,{select:!0})},w=function(x){if(f.paused||!l)return;const k=x.relatedTarget;k!==null&&(l.contains(k)||Mn(m.current,{select:!0}))},y=function(x){if(document.activeElement===document.body)for(const S of x)S.removedNodes.length>0&&Mn(l)};document.addEventListener("focusin",p),document.addEventListener("focusout",w);const h=new MutationObserver(y);return l&&h.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",p),document.removeEventListener("focusout",w),h.disconnect()}}},[r,l,f.paused]),g.useEffect(()=>{if(l){Gp.add(f);const p=document.activeElement;if(!l.contains(p)){const y=new CustomEvent(Vl,Vp);l.addEventListener(Vl,u),l.dispatchEvent(y),y.defaultPrevented||(vj(kj(Ey(l)),{select:!0}),document.activeElement===p&&Mn(l))}return()=>{l.removeEventListener(Vl,u),setTimeout(()=>{const y=new CustomEvent(ql,Vp);l.addEventListener(ql,d),l.dispatchEvent(y),y.defaultPrevented||Mn(p??document.body,{select:!0}),l.removeEventListener(ql,d),Gp.remove(f)},0)}}},[l,u,d,f]);const b=g.useCallback(p=>{if(!n&&!r||f.paused)return;const w=p.key==="Tab"&&!p.altKey&&!p.ctrlKey&&!p.metaKey,y=document.activeElement;if(w&&y){const h=p.currentTarget,[x,k]=yj(h);x&&k?!p.shiftKey&&y===k?(p.preventDefault(),n&&Mn(x,{select:!0})):p.shiftKey&&y===x&&(p.preventDefault(),n&&Mn(k,{select:!0})):y===h&&p.preventDefault()}},[n,r,f.paused]);return o.jsx(ce.div,{tabIndex:-1,...a,ref:v,onKeyDown:b})});Ny.displayName=gj;function vj(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Mn(r,{select:t}),document.activeElement!==n)return}function yj(e){const t=Ey(e),n=qp(t,e),r=qp(t.reverse(),e);return[n,r]}function Ey(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function qp(e,t){for(const n of e)if(!xj(n,{upTo:t}))return n}function xj(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function wj(e){return e instanceof HTMLInputElement&&"select"in e}function Mn(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&wj(e)&&t&&e.select()}}var Gp=bj();function bj(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Qp(e,t),e.unshift(t)},remove(t){var n;e=Qp(e,t),(n=e[0])==null||n.resume()}}}function Qp(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function kj(e){return e.filter(t=>t.tagName!=="A")}function Sj(e){const t=g.useRef({value:e,previous:e});return g.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var Cj=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},qr=new WeakMap,Cs=new WeakMap,js={},Gl=0,Py=function(e){return e&&(e.host||Py(e.parentNode))},jj=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Py(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Nj=function(e,t,n,r){var i=jj(t,Array.isArray(e)?e:[e]);js[n]||(js[n]=new WeakMap);var s=js[n],a=[],l=new Set,c=new Set(i),u=function(m){!m||l.has(m)||(l.add(m),u(m.parentNode))};i.forEach(u);var d=function(m){!m||c.has(m)||Array.prototype.forEach.call(m.children,function(v){if(l.has(v))d(v);else try{var f=v.getAttribute(r),b=f!==null&&f!=="false",p=(qr.get(v)||0)+1,w=(s.get(v)||0)+1;qr.set(v,p),s.set(v,w),a.push(v),p===1&&b&&Cs.set(v,!0),w===1&&v.setAttribute(n,"true"),b||v.setAttribute(r,"true")}catch(y){console.error("aria-hidden: cannot operate on ",v,y)}})};return d(t),l.clear(),Gl++,function(){a.forEach(function(m){var v=qr.get(m)-1,f=s.get(m)-1;qr.set(m,v),s.set(m,f),v||(Cs.has(m)||m.removeAttribute(r),Cs.delete(m)),f||m.removeAttribute(n)}),Gl--,Gl||(qr=new WeakMap,qr=new WeakMap,Cs=new WeakMap,js={})}},Ej=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),i=Cj(e);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live]"))),Nj(r,i,n,"aria-hidden")):function(){return null}},en=function(){return en=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},en.apply(this,arguments)};function Ty(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Pj(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var Us="right-scroll-bar-position",Hs="width-before-scroll-bar",Tj="with-scroll-bars-hidden",Aj="--removed-body-scroll-bar-size";function Ql(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Ij(e,t){var n=g.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var i=n.value;i!==r&&(n.value=r,n.callback(r,i))}}}})[0];return n.callback=t,n.facade}var Rj=typeof window<"u"?g.useLayoutEffect:g.useEffect,Yp=new WeakMap;function Mj(e,t){var n=Ij(null,function(r){return e.forEach(function(i){return Ql(i,r)})});return Rj(function(){var r=Yp.get(n);if(r){var i=new Set(r),s=new Set(e),a=n.current;i.forEach(function(l){s.has(l)||Ql(l,null)}),s.forEach(function(l){i.has(l)||Ql(l,a)})}Yp.set(n,e)},[e]),n}function Dj(e){return e}function Lj(e,t){t===void 0&&(t=Dj);var n=[],r=!1,i={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(s){var a=t(s,r);return n.push(a),function(){n=n.filter(function(l){return l!==a})}},assignSyncMedium:function(s){for(r=!0;n.length;){var a=n;n=[],a.forEach(s)}n={push:function(l){return s(l)},filter:function(){return n}}},assignMedium:function(s){r=!0;var a=[];if(n.length){var l=n;n=[],l.forEach(s),a=n}var c=function(){var d=a;a=[],d.forEach(s)},u=function(){return Promise.resolve().then(c)};u(),n={push:function(d){a.push(d),u()},filter:function(d){return a=a.filter(d),n}}}};return i}function Oj(e){e===void 0&&(e={});var t=Lj(null);return t.options=en({async:!0,ssr:!1},e),t}var Ay=function(e){var t=e.sideCar,n=Ty(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return g.createElement(r,en({},n))};Ay.isSideCarExport=!0;function zj(e,t){return e.useMedium(t),Ay}var Iy=Oj(),Yl=function(){},nl=g.forwardRef(function(e,t){var n=g.useRef(null),r=g.useState({onScrollCapture:Yl,onWheelCapture:Yl,onTouchMoveCapture:Yl}),i=r[0],s=r[1],a=e.forwardProps,l=e.children,c=e.className,u=e.removeScrollBar,d=e.enabled,m=e.shards,v=e.sideCar,f=e.noRelative,b=e.noIsolation,p=e.inert,w=e.allowPinchZoom,y=e.as,h=y===void 0?"div":y,x=e.gapMode,k=Ty(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),S=v,C=Mj([n,t]),j=en(en({},k),i);return g.createElement(g.Fragment,null,d&&g.createElement(S,{sideCar:Iy,removeScrollBar:u,shards:m,noRelative:f,noIsolation:b,inert:p,setCallbacks:s,allowPinchZoom:!!w,lockRef:n,gapMode:x}),a?g.cloneElement(g.Children.only(l),en(en({},j),{ref:C})):g.createElement(h,en({},j,{className:c,ref:C}),l))});nl.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};nl.classNames={fullWidth:Hs,zeroRight:Us};var Fj=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function $j(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Fj();return t&&e.setAttribute("nonce",t),e}function _j(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Bj(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Wj=function(){var e=0,t=null;return{add:function(n){e==0&&(t=$j())&&(_j(t,n),Bj(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Uj=function(){var e=Wj();return function(t,n){g.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Ry=function(){var e=Uj(),t=function(n){var r=n.styles,i=n.dynamic;return e(r,i),null};return t},Hj={left:0,top:0,right:0,gap:0},Kl=function(e){return parseInt(e||"",10)||0},Vj=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],i=t[e==="padding"?"paddingRight":"marginRight"];return[Kl(n),Kl(r),Kl(i)]},qj=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Hj;var t=Vj(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Gj=Ry(),vi="data-scroll-locked",Qj=function(e,t,n,r){var i=e.left,s=e.top,a=e.right,l=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Tj,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(l,"px ").concat(r,`;
  }
  body[`).concat(vi,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(s,`px;
    padding-right: `).concat(a,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Us,` {
    right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(Hs,` {
    margin-right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(Us," .").concat(Us,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Hs," .").concat(Hs,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(vi,`] {
    `).concat(Aj,": ").concat(l,`px;
  }
`)},Kp=function(){var e=parseInt(document.body.getAttribute(vi)||"0",10);return isFinite(e)?e:0},Yj=function(){g.useEffect(function(){return document.body.setAttribute(vi,(Kp()+1).toString()),function(){var e=Kp()-1;e<=0?document.body.removeAttribute(vi):document.body.setAttribute(vi,e.toString())}},[])},Kj=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,i=r===void 0?"margin":r;Yj();var s=g.useMemo(function(){return qj(i)},[i]);return g.createElement(Gj,{styles:Qj(s,!t,i,n?"":"!important")})},du=!1;if(typeof window<"u")try{var Ns=Object.defineProperty({},"passive",{get:function(){return du=!0,!0}});window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{du=!1}var Gr=du?{passive:!1}:!1,Xj=function(e){return e.tagName==="TEXTAREA"},My=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Xj(e)&&n[t]==="visible")},Jj=function(e){return My(e,"overflowY")},Zj=function(e){return My(e,"overflowX")},Xp=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var i=Dy(e,r);if(i){var s=Ly(e,r),a=s[1],l=s[2];if(a>l)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},eN=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},tN=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Dy=function(e,t){return e==="v"?Jj(t):Zj(t)},Ly=function(e,t){return e==="v"?eN(t):tN(t)},nN=function(e,t){return e==="h"&&t==="rtl"?-1:1},rN=function(e,t,n,r,i){var s=nN(e,window.getComputedStyle(t).direction),a=s*r,l=n.target,c=t.contains(l),u=!1,d=a>0,m=0,v=0;do{if(!l)break;var f=Ly(e,l),b=f[0],p=f[1],w=f[2],y=p-w-s*b;(b||y)&&Dy(e,l)&&(m+=y,v+=b);var h=l.parentNode;l=h&&h.nodeType===Node.DOCUMENT_FRAGMENT_NODE?h.host:h}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return(d&&(Math.abs(m)<1||!i)||!d&&(Math.abs(v)<1||!i))&&(u=!0),u},Es=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Jp=function(e){return[e.deltaX,e.deltaY]},Zp=function(e){return e&&"current"in e?e.current:e},iN=function(e,t){return e[0]===t[0]&&e[1]===t[1]},oN=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},sN=0,Qr=[];function aN(e){var t=g.useRef([]),n=g.useRef([0,0]),r=g.useRef(),i=g.useState(sN++)[0],s=g.useState(Ry)[0],a=g.useRef(e);g.useEffect(function(){a.current=e},[e]),g.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var p=Pj([e.lockRef.current],(e.shards||[]).map(Zp),!0).filter(Boolean);return p.forEach(function(w){return w.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),p.forEach(function(w){return w.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var l=g.useCallback(function(p,w){if("touches"in p&&p.touches.length===2||p.type==="wheel"&&p.ctrlKey)return!a.current.allowPinchZoom;var y=Es(p),h=n.current,x="deltaX"in p?p.deltaX:h[0]-y[0],k="deltaY"in p?p.deltaY:h[1]-y[1],S,C=p.target,j=Math.abs(x)>Math.abs(k)?"h":"v";if("touches"in p&&j==="h"&&C.type==="range")return!1;var T=Xp(j,C);if(!T)return!0;if(T?S=j:(S=j==="v"?"h":"v",T=Xp(j,C)),!T)return!1;if(!r.current&&"changedTouches"in p&&(x||k)&&(r.current=S),!S)return!0;var I=r.current||S;return rN(I,w,p,I==="h"?x:k,!0)},[]),c=g.useCallback(function(p){var w=p;if(!(!Qr.length||Qr[Qr.length-1]!==s)){var y="deltaY"in w?Jp(w):Es(w),h=t.current.filter(function(S){return S.name===w.type&&(S.target===w.target||w.target===S.shadowParent)&&iN(S.delta,y)})[0];if(h&&h.should){w.cancelable&&w.preventDefault();return}if(!h){var x=(a.current.shards||[]).map(Zp).filter(Boolean).filter(function(S){return S.contains(w.target)}),k=x.length>0?l(w,x[0]):!a.current.noIsolation;k&&w.cancelable&&w.preventDefault()}}},[]),u=g.useCallback(function(p,w,y,h){var x={name:p,delta:w,target:y,should:h,shadowParent:lN(y)};t.current.push(x),setTimeout(function(){t.current=t.current.filter(function(k){return k!==x})},1)},[]),d=g.useCallback(function(p){n.current=Es(p),r.current=void 0},[]),m=g.useCallback(function(p){u(p.type,Jp(p),p.target,l(p,e.lockRef.current))},[]),v=g.useCallback(function(p){u(p.type,Es(p),p.target,l(p,e.lockRef.current))},[]);g.useEffect(function(){return Qr.push(s),e.setCallbacks({onScrollCapture:m,onWheelCapture:m,onTouchMoveCapture:v}),document.addEventListener("wheel",c,Gr),document.addEventListener("touchmove",c,Gr),document.addEventListener("touchstart",d,Gr),function(){Qr=Qr.filter(function(p){return p!==s}),document.removeEventListener("wheel",c,Gr),document.removeEventListener("touchmove",c,Gr),document.removeEventListener("touchstart",d,Gr)}},[]);var f=e.removeScrollBar,b=e.inert;return g.createElement(g.Fragment,null,b?g.createElement(s,{styles:oN(i)}):null,f?g.createElement(Kj,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function lN(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const cN=zj(Iy,aN);var Oy=g.forwardRef(function(e,t){return g.createElement(nl,en({},e,{ref:t,sideCar:cN}))});Oy.classNames=nl.classNames;var uN=[" ","Enter","ArrowUp","ArrowDown"],dN=[" ","Enter"],Lr="Select",[rl,il,mN]=Pg(Lr),[Ui,sE]=Ko(Lr,[mN,Ka]),ol=Ka(),[pN,cr]=Ui(Lr),[fN,hN]=Ui(Lr),zy=e=>{const{__scopeSelect:t,children:n,open:r,defaultOpen:i,onOpenChange:s,value:a,defaultValue:l,onValueChange:c,dir:u,name:d,autoComplete:m,disabled:v,required:f,form:b}=e,p=ol(t),[w,y]=g.useState(null),[h,x]=g.useState(null),[k,S]=g.useState(!1),C=fj(u),[j,T]=Vc({prop:r,defaultProp:i??!1,onChange:s,caller:Lr}),[I,R]=Vc({prop:a,defaultProp:l,onChange:c,caller:Lr}),_=g.useRef(null),L=w?b||!!w.closest("form"):!0,[U,D]=g.useState(new Set),V=Array.from(U).map($=>$.props.value).join(";");return o.jsx(ZS,{...p,children:o.jsxs(pN,{required:f,scope:t,trigger:w,onTriggerChange:y,valueNode:h,onValueNodeChange:x,valueNodeHasChildren:k,onValueNodeHasChildrenChange:S,contentId:kd(),value:I,onValueChange:R,open:j,onOpenChange:T,dir:C,triggerPointerDownPosRef:_,disabled:v,children:[o.jsx(rl.Provider,{scope:t,children:o.jsx(fN,{scope:e.__scopeSelect,onNativeOptionAdd:g.useCallback($=>{D(W=>new Set(W).add($))},[]),onNativeOptionRemove:g.useCallback($=>{D(W=>{const N=new Set(W);return N.delete($),N})},[]),children:n})}),L?o.jsxs(ax,{"aria-hidden":!0,required:f,tabIndex:-1,name:d,autoComplete:m,value:I,onChange:$=>R($.target.value),disabled:v,form:b,children:[I===void 0?o.jsx("option",{value:""}):null,Array.from(U)]},V):null]})})};zy.displayName=Lr;var Fy="SelectTrigger",$y=g.forwardRef((e,t)=>{const{__scopeSelect:n,disabled:r=!1,...i}=e,s=ol(n),a=cr(Fy,n),l=a.disabled||r,c=Ne(t,a.onTriggerChange),u=il(n),d=g.useRef("touch"),[m,v,f]=cx(p=>{const w=u().filter(x=>!x.disabled),y=w.find(x=>x.value===a.value),h=ux(w,p,y);h!==void 0&&a.onValueChange(h.value)}),b=p=>{l||(a.onOpenChange(!0),f()),p&&(a.triggerPointerDownPosRef.current={x:Math.round(p.pageX),y:Math.round(p.pageY)})};return o.jsx(Wv,{asChild:!0,...s,children:o.jsx(ce.button,{type:"button",role:"combobox","aria-controls":a.contentId,"aria-expanded":a.open,"aria-required":a.required,"aria-autocomplete":"none",dir:a.dir,"data-state":a.open?"open":"closed",disabled:l,"data-disabled":l?"":void 0,"data-placeholder":lx(a.value)?"":void 0,...i,ref:c,onClick:te(i.onClick,p=>{p.currentTarget.focus(),d.current!=="mouse"&&b(p)}),onPointerDown:te(i.onPointerDown,p=>{d.current=p.pointerType;const w=p.target;w.hasPointerCapture(p.pointerId)&&w.releasePointerCapture(p.pointerId),p.button===0&&p.ctrlKey===!1&&p.pointerType==="mouse"&&(b(p),p.preventDefault())}),onKeyDown:te(i.onKeyDown,p=>{const w=m.current!=="";!(p.ctrlKey||p.altKey||p.metaKey)&&p.key.length===1&&v(p.key),!(w&&p.key===" ")&&uN.includes(p.key)&&(b(),p.preventDefault())})})})});$y.displayName=Fy;var _y="SelectValue",By=g.forwardRef((e,t)=>{const{__scopeSelect:n,className:r,style:i,children:s,placeholder:a="",...l}=e,c=cr(_y,n),{onValueNodeHasChildrenChange:u}=c,d=s!==void 0,m=Ne(t,c.onValueNodeChange);return $e(()=>{u(d)},[u,d]),o.jsx(ce.span,{...l,ref:m,style:{pointerEvents:"none"},children:lx(c.value)?o.jsx(o.Fragment,{children:a}):s})});By.displayName=_y;var gN="SelectIcon",Wy=g.forwardRef((e,t)=>{const{__scopeSelect:n,children:r,...i}=e;return o.jsx(ce.span,{"aria-hidden":!0,...i,ref:t,children:r||"▼"})});Wy.displayName=gN;var vN="SelectPortal",Uy=e=>o.jsx(fd,{asChild:!0,...e});Uy.displayName=vN;var Or="SelectContent",Hy=g.forwardRef((e,t)=>{const n=cr(Or,e.__scopeSelect),[r,i]=g.useState();if($e(()=>{i(new DocumentFragment)},[]),!n.open){const s=r;return s?$r.createPortal(o.jsx(Vy,{scope:e.__scopeSelect,children:o.jsx(rl.Slot,{scope:e.__scopeSelect,children:o.jsx("div",{children:e.children})})}),s):null}return o.jsx(qy,{...e,ref:t})});Hy.displayName=Or;var Mt=10,[Vy,ur]=Ui(Or),yN="SelectContentImpl",xN=Oo("SelectContent.RemoveScroll"),qy=g.forwardRef((e,t)=>{const{__scopeSelect:n,position:r="item-aligned",onCloseAutoFocus:i,onEscapeKeyDown:s,onPointerDownOutside:a,side:l,sideOffset:c,align:u,alignOffset:d,arrowPadding:m,collisionBoundary:v,collisionPadding:f,sticky:b,hideWhenDetached:p,avoidCollisions:w,...y}=e,h=cr(Or,n),[x,k]=g.useState(null),[S,C]=g.useState(null),j=Ne(t,z=>k(z)),[T,I]=g.useState(null),[R,_]=g.useState(null),L=il(n),[U,D]=g.useState(!1),V=g.useRef(!1);g.useEffect(()=>{if(x)return Ej(x)},[x]),hj();const $=g.useCallback(z=>{const[ae,...Se]=L().map(ie=>ie.ref.current),[se]=Se.slice(-1),ne=document.activeElement;for(const ie of z)if(ie===ne||(ie==null||ie.scrollIntoView({block:"nearest"}),ie===ae&&S&&(S.scrollTop=0),ie===se&&S&&(S.scrollTop=S.scrollHeight),ie==null||ie.focus(),document.activeElement!==ne))return},[L,S]),W=g.useCallback(()=>$([T,x]),[$,T,x]);g.useEffect(()=>{U&&W()},[U,W]);const{onOpenChange:N,triggerPointerDownPosRef:P}=h;g.useEffect(()=>{if(x){let z={x:0,y:0};const ae=se=>{var ne,ie;z={x:Math.abs(Math.round(se.pageX)-(((ne=P.current)==null?void 0:ne.x)??0)),y:Math.abs(Math.round(se.pageY)-(((ie=P.current)==null?void 0:ie.y)??0))}},Se=se=>{z.x<=10&&z.y<=10?se.preventDefault():x.contains(se.target)||N(!1),document.removeEventListener("pointermove",ae),P.current=null};return P.current!==null&&(document.addEventListener("pointermove",ae),document.addEventListener("pointerup",Se,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",ae),document.removeEventListener("pointerup",Se,{capture:!0})}}},[x,N,P]),g.useEffect(()=>{const z=()=>N(!1);return window.addEventListener("blur",z),window.addEventListener("resize",z),()=>{window.removeEventListener("blur",z),window.removeEventListener("resize",z)}},[N]);const[O,H]=cx(z=>{const ae=L().filter(ne=>!ne.disabled),Se=ae.find(ne=>ne.ref.current===document.activeElement),se=ux(ae,z,Se);se&&setTimeout(()=>se.ref.current.focus())}),B=g.useCallback((z,ae,Se)=>{const se=!V.current&&!Se;(h.value!==void 0&&h.value===ae||se)&&(I(z),se&&(V.current=!0))},[h.value]),X=g.useCallback(()=>x==null?void 0:x.focus(),[x]),G=g.useCallback((z,ae,Se)=>{const se=!V.current&&!Se;(h.value!==void 0&&h.value===ae||se)&&_(z)},[h.value]),pe=r==="popper"?mu:Gy,ke=pe===mu?{side:l,sideOffset:c,align:u,alignOffset:d,arrowPadding:m,collisionBoundary:v,collisionPadding:f,sticky:b,hideWhenDetached:p,avoidCollisions:w}:{};return o.jsx(Vy,{scope:n,content:x,viewport:S,onViewportChange:C,itemRefCallback:B,selectedItem:T,onItemLeave:X,itemTextRefCallback:G,focusSelectedItem:W,selectedItemText:R,position:r,isPositioned:U,searchRef:O,children:o.jsx(Oy,{as:xN,allowPinchZoom:!0,children:o.jsx(Ny,{asChild:!0,trapped:h.open,onMountAutoFocus:z=>{z.preventDefault()},onUnmountAutoFocus:te(i,z=>{var ae;(ae=h.trigger)==null||ae.focus({preventScroll:!0}),z.preventDefault()}),children:o.jsx(Ba,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:s,onPointerDownOutside:a,onFocusOutside:z=>z.preventDefault(),onDismiss:()=>h.onOpenChange(!1),children:o.jsx(pe,{role:"listbox",id:h.contentId,"data-state":h.open?"open":"closed",dir:h.dir,onContextMenu:z=>z.preventDefault(),...y,...ke,onPlaced:()=>D(!0),ref:j,style:{display:"flex",flexDirection:"column",outline:"none",...y.style},onKeyDown:te(y.onKeyDown,z=>{const ae=z.ctrlKey||z.altKey||z.metaKey;if(z.key==="Tab"&&z.preventDefault(),!ae&&z.key.length===1&&H(z.key),["ArrowUp","ArrowDown","Home","End"].includes(z.key)){let se=L().filter(ne=>!ne.disabled).map(ne=>ne.ref.current);if(["ArrowUp","End"].includes(z.key)&&(se=se.slice().reverse()),["ArrowUp","ArrowDown"].includes(z.key)){const ne=z.target,ie=se.indexOf(ne);se=se.slice(ie+1)}setTimeout(()=>$(se)),z.preventDefault()}})})})})})})});qy.displayName=yN;var wN="SelectItemAlignedPosition",Gy=g.forwardRef((e,t)=>{const{__scopeSelect:n,onPlaced:r,...i}=e,s=cr(Or,n),a=ur(Or,n),[l,c]=g.useState(null),[u,d]=g.useState(null),m=Ne(t,j=>d(j)),v=il(n),f=g.useRef(!1),b=g.useRef(!0),{viewport:p,selectedItem:w,selectedItemText:y,focusSelectedItem:h}=a,x=g.useCallback(()=>{if(s.trigger&&s.valueNode&&l&&u&&p&&w&&y){const j=s.trigger.getBoundingClientRect(),T=u.getBoundingClientRect(),I=s.valueNode.getBoundingClientRect(),R=y.getBoundingClientRect();if(s.dir!=="rtl"){const ne=R.left-T.left,ie=I.left-ne,_e=j.left-ie,yt=j.width+_e,dr=Math.max(yt,T.width),jn=window.innerWidth-Mt,mr=Up(ie,[Mt,Math.max(Mt,jn-dr)]);l.style.minWidth=yt+"px",l.style.left=mr+"px"}else{const ne=T.right-R.right,ie=window.innerWidth-I.right-ne,_e=window.innerWidth-j.right-ie,yt=j.width+_e,dr=Math.max(yt,T.width),jn=window.innerWidth-Mt,mr=Up(ie,[Mt,Math.max(Mt,jn-dr)]);l.style.minWidth=yt+"px",l.style.right=mr+"px"}const _=v(),L=window.innerHeight-Mt*2,U=p.scrollHeight,D=window.getComputedStyle(u),V=parseInt(D.borderTopWidth,10),$=parseInt(D.paddingTop,10),W=parseInt(D.borderBottomWidth,10),N=parseInt(D.paddingBottom,10),P=V+$+U+N+W,O=Math.min(w.offsetHeight*5,P),H=window.getComputedStyle(p),B=parseInt(H.paddingTop,10),X=parseInt(H.paddingBottom,10),G=j.top+j.height/2-Mt,pe=L-G,ke=w.offsetHeight/2,z=w.offsetTop+ke,ae=V+$+z,Se=P-ae;if(ae<=G){const ne=_.length>0&&w===_[_.length-1].ref.current;l.style.bottom="0px";const ie=u.clientHeight-p.offsetTop-p.offsetHeight,_e=Math.max(pe,ke+(ne?X:0)+ie+W),yt=ae+_e;l.style.height=yt+"px"}else{const ne=_.length>0&&w===_[0].ref.current;l.style.top="0px";const _e=Math.max(G,V+p.offsetTop+(ne?B:0)+ke)+Se;l.style.height=_e+"px",p.scrollTop=ae-G+p.offsetTop}l.style.margin=`${Mt}px 0`,l.style.minHeight=O+"px",l.style.maxHeight=L+"px",r==null||r(),requestAnimationFrame(()=>f.current=!0)}},[v,s.trigger,s.valueNode,l,u,p,w,y,s.dir,r]);$e(()=>x(),[x]);const[k,S]=g.useState();$e(()=>{u&&S(window.getComputedStyle(u).zIndex)},[u]);const C=g.useCallback(j=>{j&&b.current===!0&&(x(),h==null||h(),b.current=!1)},[x,h]);return o.jsx(kN,{scope:n,contentWrapper:l,shouldExpandOnScrollRef:f,onScrollButtonChange:C,children:o.jsx("div",{ref:c,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:k},children:o.jsx(ce.div,{...i,ref:m,style:{boxSizing:"border-box",maxHeight:"100%",...i.style}})})})});Gy.displayName=wN;var bN="SelectPopperPosition",mu=g.forwardRef((e,t)=>{const{__scopeSelect:n,align:r="start",collisionPadding:i=Mt,...s}=e,a=ol(n);return o.jsx(Uv,{...a,...s,ref:t,align:r,collisionPadding:i,style:{boxSizing:"border-box",...s.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});mu.displayName=bN;var[kN,Fd]=Ui(Or,{}),pu="SelectViewport",Qy=g.forwardRef((e,t)=>{const{__scopeSelect:n,nonce:r,...i}=e,s=ur(pu,n),a=Fd(pu,n),l=Ne(t,s.onViewportChange),c=g.useRef(0);return o.jsxs(o.Fragment,{children:[o.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),o.jsx(rl.Slot,{scope:n,children:o.jsx(ce.div,{"data-radix-select-viewport":"",role:"presentation",...i,ref:l,style:{position:"relative",flex:1,overflow:"hidden auto",...i.style},onScroll:te(i.onScroll,u=>{const d=u.currentTarget,{contentWrapper:m,shouldExpandOnScrollRef:v}=a;if(v!=null&&v.current&&m){const f=Math.abs(c.current-d.scrollTop);if(f>0){const b=window.innerHeight-Mt*2,p=parseFloat(m.style.minHeight),w=parseFloat(m.style.height),y=Math.max(p,w);if(y<b){const h=y+f,x=Math.min(b,h),k=h-x;m.style.height=x+"px",m.style.bottom==="0px"&&(d.scrollTop=k>0?k:0,m.style.justifyContent="flex-end")}}}c.current=d.scrollTop})})})]})});Qy.displayName=pu;var Yy="SelectGroup",[SN,CN]=Ui(Yy),jN=g.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,i=kd();return o.jsx(SN,{scope:n,id:i,children:o.jsx(ce.div,{role:"group","aria-labelledby":i,...r,ref:t})})});jN.displayName=Yy;var Ky="SelectLabel",Xy=g.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,i=CN(Ky,n);return o.jsx(ce.div,{id:i.id,...r,ref:t})});Xy.displayName=Ky;var Ca="SelectItem",[NN,Jy]=Ui(Ca),Zy=g.forwardRef((e,t)=>{const{__scopeSelect:n,value:r,disabled:i=!1,textValue:s,...a}=e,l=cr(Ca,n),c=ur(Ca,n),u=l.value===r,[d,m]=g.useState(s??""),[v,f]=g.useState(!1),b=Ne(t,h=>{var x;return(x=c.itemRefCallback)==null?void 0:x.call(c,h,r,i)}),p=kd(),w=g.useRef("touch"),y=()=>{i||(l.onValueChange(r),l.onOpenChange(!1))};if(r==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return o.jsx(NN,{scope:n,value:r,disabled:i,textId:p,isSelected:u,onItemTextChange:g.useCallback(h=>{m(x=>x||((h==null?void 0:h.textContent)??"").trim())},[]),children:o.jsx(rl.ItemSlot,{scope:n,value:r,disabled:i,textValue:d,children:o.jsx(ce.div,{role:"option","aria-labelledby":p,"data-highlighted":v?"":void 0,"aria-selected":u&&v,"data-state":u?"checked":"unchecked","aria-disabled":i||void 0,"data-disabled":i?"":void 0,tabIndex:i?void 0:-1,...a,ref:b,onFocus:te(a.onFocus,()=>f(!0)),onBlur:te(a.onBlur,()=>f(!1)),onClick:te(a.onClick,()=>{w.current!=="mouse"&&y()}),onPointerUp:te(a.onPointerUp,()=>{w.current==="mouse"&&y()}),onPointerDown:te(a.onPointerDown,h=>{w.current=h.pointerType}),onPointerMove:te(a.onPointerMove,h=>{var x;w.current=h.pointerType,i?(x=c.onItemLeave)==null||x.call(c):w.current==="mouse"&&h.currentTarget.focus({preventScroll:!0})}),onPointerLeave:te(a.onPointerLeave,h=>{var x;h.currentTarget===document.activeElement&&((x=c.onItemLeave)==null||x.call(c))}),onKeyDown:te(a.onKeyDown,h=>{var k;((k=c.searchRef)==null?void 0:k.current)!==""&&h.key===" "||(dN.includes(h.key)&&y(),h.key===" "&&h.preventDefault())})})})})});Zy.displayName=Ca;var so="SelectItemText",ex=g.forwardRef((e,t)=>{const{__scopeSelect:n,className:r,style:i,...s}=e,a=cr(so,n),l=ur(so,n),c=Jy(so,n),u=hN(so,n),[d,m]=g.useState(null),v=Ne(t,y=>m(y),c.onItemTextChange,y=>{var h;return(h=l.itemTextRefCallback)==null?void 0:h.call(l,y,c.value,c.disabled)}),f=d==null?void 0:d.textContent,b=g.useMemo(()=>o.jsx("option",{value:c.value,disabled:c.disabled,children:f},c.value),[c.disabled,c.value,f]),{onNativeOptionAdd:p,onNativeOptionRemove:w}=u;return $e(()=>(p(b),()=>w(b)),[p,w,b]),o.jsxs(o.Fragment,{children:[o.jsx(ce.span,{id:c.textId,...s,ref:v}),c.isSelected&&a.valueNode&&!a.valueNodeHasChildren?$r.createPortal(s.children,a.valueNode):null]})});ex.displayName=so;var tx="SelectItemIndicator",nx=g.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e;return Jy(tx,n).isSelected?o.jsx(ce.span,{"aria-hidden":!0,...r,ref:t}):null});nx.displayName=tx;var fu="SelectScrollUpButton",rx=g.forwardRef((e,t)=>{const n=ur(fu,e.__scopeSelect),r=Fd(fu,e.__scopeSelect),[i,s]=g.useState(!1),a=Ne(t,r.onScrollButtonChange);return $e(()=>{if(n.viewport&&n.isPositioned){let l=function(){const u=c.scrollTop>0;s(u)};const c=n.viewport;return l(),c.addEventListener("scroll",l),()=>c.removeEventListener("scroll",l)}},[n.viewport,n.isPositioned]),i?o.jsx(ox,{...e,ref:a,onAutoScroll:()=>{const{viewport:l,selectedItem:c}=n;l&&c&&(l.scrollTop=l.scrollTop-c.offsetHeight)}}):null});rx.displayName=fu;var hu="SelectScrollDownButton",ix=g.forwardRef((e,t)=>{const n=ur(hu,e.__scopeSelect),r=Fd(hu,e.__scopeSelect),[i,s]=g.useState(!1),a=Ne(t,r.onScrollButtonChange);return $e(()=>{if(n.viewport&&n.isPositioned){let l=function(){const u=c.scrollHeight-c.clientHeight,d=Math.ceil(c.scrollTop)<u;s(d)};const c=n.viewport;return l(),c.addEventListener("scroll",l),()=>c.removeEventListener("scroll",l)}},[n.viewport,n.isPositioned]),i?o.jsx(ox,{...e,ref:a,onAutoScroll:()=>{const{viewport:l,selectedItem:c}=n;l&&c&&(l.scrollTop=l.scrollTop+c.offsetHeight)}}):null});ix.displayName=hu;var ox=g.forwardRef((e,t)=>{const{__scopeSelect:n,onAutoScroll:r,...i}=e,s=ur("SelectScrollButton",n),a=g.useRef(null),l=il(n),c=g.useCallback(()=>{a.current!==null&&(window.clearInterval(a.current),a.current=null)},[]);return g.useEffect(()=>()=>c(),[c]),$e(()=>{var d;const u=l().find(m=>m.ref.current===document.activeElement);(d=u==null?void 0:u.ref.current)==null||d.scrollIntoView({block:"nearest"})},[l]),o.jsx(ce.div,{"aria-hidden":!0,...i,ref:t,style:{flexShrink:0,...i.style},onPointerDown:te(i.onPointerDown,()=>{a.current===null&&(a.current=window.setInterval(r,50))}),onPointerMove:te(i.onPointerMove,()=>{var u;(u=s.onItemLeave)==null||u.call(s),a.current===null&&(a.current=window.setInterval(r,50))}),onPointerLeave:te(i.onPointerLeave,()=>{c()})})}),EN="SelectSeparator",sx=g.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e;return o.jsx(ce.div,{"aria-hidden":!0,...r,ref:t})});sx.displayName=EN;var gu="SelectArrow",PN=g.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,i=ol(n),s=cr(gu,n),a=ur(gu,n);return s.open&&a.position==="popper"?o.jsx(Hv,{...i,...r,ref:t}):null});PN.displayName=gu;var TN="SelectBubbleInput",ax=g.forwardRef(({__scopeSelect:e,value:t,...n},r)=>{const i=g.useRef(null),s=Ne(r,i),a=Sj(t);return g.useEffect(()=>{const l=i.current;if(!l)return;const c=window.HTMLSelectElement.prototype,d=Object.getOwnPropertyDescriptor(c,"value").set;if(a!==t&&d){const m=new Event("change",{bubbles:!0});d.call(l,t),l.dispatchEvent(m)}},[a,t]),o.jsx(ce.select,{...n,style:{...Mg,...n.style},ref:s,defaultValue:t})});ax.displayName=TN;function lx(e){return e===""||e===void 0}function cx(e){const t=Ut(e),n=g.useRef(""),r=g.useRef(0),i=g.useCallback(a=>{const l=n.current+a;t(l),function c(u){n.current=u,window.clearTimeout(r.current),u!==""&&(r.current=window.setTimeout(()=>c(""),1e3))}(l)},[t]),s=g.useCallback(()=>{n.current="",window.clearTimeout(r.current)},[]);return g.useEffect(()=>()=>window.clearTimeout(r.current),[]),[n,i,s]}function ux(e,t,n){const i=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,s=n?e.indexOf(n):-1;let a=AN(e,Math.max(s,0));i.length===1&&(a=a.filter(u=>u!==n));const c=a.find(u=>u.textValue.toLowerCase().startsWith(i.toLowerCase()));return c!==n?c:void 0}function AN(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var IN=zy,dx=$y,RN=By,MN=Wy,DN=Uy,mx=Hy,LN=Qy,px=Xy,fx=Zy,ON=ex,zN=nx,hx=rx,gx=ix,vx=sx;const ef=IN,tf=RN,vu=g.forwardRef(({className:e,children:t,...n},r)=>o.jsxs(dx,{ref:r,className:me("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...n,children:[t,o.jsx(MN,{asChild:!0,children:o.jsx(ov,{className:"h-4 w-4 opacity-50"})})]}));vu.displayName=dx.displayName;const yx=g.forwardRef(({className:e,...t},n)=>o.jsx(hx,{ref:n,className:me("flex cursor-default items-center justify-center py-1",e),...t,children:o.jsx(r1,{className:"h-4 w-4"})}));yx.displayName=hx.displayName;const xx=g.forwardRef(({className:e,...t},n)=>o.jsx(gx,{ref:n,className:me("flex cursor-default items-center justify-center py-1",e),...t,children:o.jsx(ov,{className:"h-4 w-4"})}));xx.displayName=gx.displayName;const yu=g.forwardRef(({className:e,children:t,position:n="popper",...r},i)=>o.jsx(DN,{children:o.jsxs(mx,{ref:i,className:me("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:n,...r,children:[o.jsx(yx,{}),o.jsx(LN,{className:me("p-1",n==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),o.jsx(xx,{})]})}));yu.displayName=mx.displayName;const FN=g.forwardRef(({className:e,...t},n)=>o.jsx(px,{ref:n,className:me("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...t}));FN.displayName=px.displayName;const lt=g.forwardRef(({className:e,children:t,...n},r)=>o.jsxs(fx,{ref:r,className:me("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",e),...n,children:[o.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:o.jsx(zN,{children:o.jsx(n1,{className:"h-4 w-4"})})}),o.jsx(ON,{children:t})]}));lt.displayName=fx.displayName;const $N=g.forwardRef(({className:e,...t},n)=>o.jsx(vx,{ref:n,className:me("-mx-1 my-1 h-px bg-muted",e),...t}));$N.displayName=vx.displayName;const Xl={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},_N=()=>{const[e,t]=g.useState("consulting"),n=(Xl==null?void 0:Xl.VITE_CALENDLY_URL)||"https://calendly.com/paroyal007/30min";g.useEffect(()=>{const s="https://assets.calendly.com/assets/external/widget.js";if(document.querySelector(`script[src='${s}']`))return;const a=document.createElement("script");a.src=s,a.async=!0,document.body.appendChild(a)},[]);const r=typeof window<"u"?`${n}${n.includes("?")?"&":"?"}embed_domain=${window.location.hostname||"localhost"}&embed_type=Inline`:n,i=s=>{s.preventDefault(),yk.success("Message sent successfully! We'll be in touch soon.")};return o.jsxs("div",{className:"min-h-screen pt-20",children:[o.jsx("section",{className:"section-padding gradient-bg text-primary-foreground",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"max-w-4xl mx-auto text-center animate-fade-in-up",children:[o.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6",children:"Get in Touch"}),o.jsx("p",{className:"text-xl opacity-90",children:"Whether you need consulting services, training programs, or career opportunities, we're here to help."})]})})}),o.jsx("section",{className:"section-padding",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[o.jsxs("div",{className:"space-y-8",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Contact Information"}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex items-start gap-3",children:[o.jsx(xd,{className:"h-5 w-5 text-accent mt-1 flex-shrink-0"}),o.jsxs("div",{children:[o.jsx("p",{className:"font-semibold",children:"Location"}),o.jsx("p",{className:"text-muted-foreground",children:"Calgary, Alberta, Canada"})]})]}),o.jsxs("div",{className:"flex items-start gap-3",children:[o.jsx(lv,{className:"h-5 w-5 text-accent mt-1 flex-shrink-0"}),o.jsxs("div",{children:[o.jsx("p",{className:"font-semibold",children:"Email"}),o.jsx("a",{href:"mailto:info@ripotek.com",className:"text-muted-foreground hover:text-accent transition-colors",children:"info@ripotek.com"})]})]}),o.jsxs("div",{className:"flex items-start gap-3",children:[o.jsx(cv,{className:"h-5 w-5 text-accent mt-1 flex-shrink-0"}),o.jsxs("div",{children:[o.jsx("p",{className:"font-semibold",children:"Phone"}),o.jsx("p",{className:"text-muted-foreground",children:"+1306-999-3552"})]})]})]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-bold mb-4",children:"Office Hours"}),o.jsxs("div",{className:"space-y-2 text-muted-foreground",children:[o.jsx("p",{children:"Monday - Friday: 9:00 AM - 5:00 PM MST"}),o.jsx("p",{children:"Saturday - Sunday: Closed"})]})]}),o.jsxs(Ie,{className:"border-2 border-accent/50 bg-accent/5",children:[o.jsxs(nt,{children:[o.jsx(rt,{className:"text-lg",children:"Booking Calendar"}),o.jsx(Zt,{children:"Schedule a discovery call directly on our calendar"})]}),o.jsxs(dt,{children:[o.jsx("div",{className:"rounded-lg overflow-hidden border",children:o.jsx("div",{className:"calendly-inline-widget","data-url":r,style:{minWidth:"320px",height:"720px"}})}),o.jsx("div",{className:"mt-3 text-right",children:o.jsx("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"text-sm underline text-accent hover:opacity-80",children:"Open in Calendly"})})]})]})]}),o.jsx("div",{className:"lg:col-span-2",children:o.jsxs(Ie,{className:"border-2",children:[o.jsxs(nt,{children:[o.jsx(rt,{className:"text-2xl",children:"Send Us a Message"}),o.jsx(Zt,{children:"Fill out the form below and we'll get back to you within 24 hours"})]}),o.jsx(dt,{children:o.jsxs("form",{onSubmit:i,className:"space-y-6",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(un,{htmlFor:"formType",children:"I'm interested in"}),o.jsxs(ef,{value:e,onValueChange:t,children:[o.jsx(vu,{id:"formType",children:o.jsx(tf,{})}),o.jsxs(yu,{children:[o.jsx(lt,{value:"consulting",children:"Consulting Services"}),o.jsx(lt,{value:"training",children:"Training Programs"}),o.jsx(lt,{value:"careers",children:"Career Opportunities"}),o.jsx(lt,{value:"general",children:"General Inquiry"})]})]})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(un,{htmlFor:"firstName",children:"First Name *"}),o.jsx(Kr,{id:"firstName",placeholder:"John",required:!0})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(un,{htmlFor:"lastName",children:"Last Name *"}),o.jsx(Kr,{id:"lastName",placeholder:"Doe",required:!0})]})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(un,{htmlFor:"email",children:"Email *"}),o.jsx(Kr,{id:"email",type:"email",placeholder:"john@example.com",required:!0})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(un,{htmlFor:"phone",children:"Phone"}),o.jsx(Kr,{id:"phone",type:"tel",placeholder:"+1306-999-3552"})]})]}),(e==="consulting"||e==="general")&&o.jsxs("div",{className:"space-y-2",children:[o.jsx(un,{htmlFor:"company",children:"Company/Organization"}),o.jsx(Kr,{id:"company",placeholder:"Your Company Name"})]}),e==="training"&&o.jsxs("div",{className:"space-y-2",children:[o.jsx(un,{htmlFor:"course",children:"Course of Interest"}),o.jsxs(ef,{children:[o.jsx(vu,{id:"course",children:o.jsx(tf,{placeholder:"Select a course"})}),o.jsxs(yu,{children:[o.jsx(lt,{value:"powerbi",children:"Power BI Analyst"}),o.jsx(lt,{value:"azure",children:"Azure Data Engineer"}),o.jsx(lt,{value:"databricks",children:"Databricks Engineer"}),o.jsx(lt,{value:"bi",children:"Business Intelligence Analyst"}),o.jsx(lt,{value:"ai",children:"AI Engineer"}),o.jsx(lt,{value:"prompt",children:"Prompt Engineer"}),o.jsx(lt,{value:"python",children:"Python for Data"}),o.jsx(lt,{value:"adf",children:"Azure Data Factory"})]})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(un,{htmlFor:"message",children:"Message *"}),o.jsx(jy,{id:"message",placeholder:"Tell us about your needs...",rows:6,required:!0})]}),o.jsxs(Z,{type:"submit",size:"lg",className:"w-full bg-gradient-to-r from-primary to-accent hover:opacity-90",children:[o.jsx(p1,{className:"mr-2 h-5 w-5"}),"Send Message"]}),o.jsxs("p",{className:"text-xs text-muted-foreground text-center",children:["By submitting this form, you agree to our"," ",o.jsx("a",{href:"/privacy",className:"text-accent hover:underline",children:"Privacy Policy"})]})]})})]})})]})})}),o.jsx("section",{className:"section-padding bg-muted/30",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[o.jsxs(Ie,{className:"hover-lift border-2",children:[o.jsxs(nt,{children:[o.jsx(rt,{children:"Request a Proposal"}),o.jsx(Zt,{children:"Get a detailed proposal for your consulting project"})]}),o.jsx(dt,{children:o.jsx(Z,{className:"w-full",variant:"outline",children:"Request Proposal"})})]}),o.jsxs(Ie,{className:"hover-lift border-2",children:[o.jsxs(nt,{children:[o.jsx(rt,{children:"Download Capabilities"}),o.jsx(Zt,{children:"Learn more about our services and expertise"})]}),o.jsx(dt,{children:o.jsx(Z,{className:"w-full",variant:"outline",children:"Download Deck"})})]}),o.jsxs(Ie,{className:"hover-lift border-2",children:[o.jsxs(nt,{children:[o.jsx(rt,{children:"Join Talent Network"}),o.jsx(Zt,{children:"Connect with us for future opportunities"})]}),o.jsx(dt,{children:o.jsx(Z,{className:"w-full",variant:"outline",children:"Join Network"})})]})]})})})]})},BN=()=>o.jsx("div",{className:"min-h-screen pt-20",children:o.jsx("section",{className:"section-padding",children:o.jsxs("div",{className:"container-custom max-w-4xl",children:[o.jsx("h1",{className:"text-4xl font-bold mb-8",children:"Terms of Service"}),o.jsxs("div",{className:"prose prose-lg max-w-none space-y-6 text-muted-foreground",children:[o.jsxs("p",{className:"text-sm italic",children:["Last Updated: ",new Date().toLocaleDateString()]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"1. Agreement to Terms"}),o.jsx("p",{children:"By accessing or using Ripotek Technology Inc.'s services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"2. Services Description"}),o.jsx("p",{children:"Ripotek Technology Inc. provides data consulting services and professional training programs. Our services include but are not limited to:"}),o.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[o.jsx("li",{children:"Data architecture and strategy consulting"}),o.jsx("li",{children:"Data engineering and analytics implementation"}),o.jsx("li",{children:"Professional training programs"}),o.jsx("li",{children:"Managed services and platform administration"})]})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"3. Consulting Services"}),o.jsx("p",{children:"Consulting engagements are governed by individual statements of work (SOW) that detail project scope, deliverables, timelines, and fees. Both parties must agree to and sign the SOW before work commences."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"4. Training Programs"}),o.jsx("p",{children:"Training program terms, including enrollment requirements, payment terms, and refund policies, are detailed in our separate Refund Policy and training enrollment agreements."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"5. Intellectual Property"}),o.jsx("p",{children:"All content, methodologies, and materials provided by Ripotek Technology Inc. remain our intellectual property unless explicitly transferred through written agreement. Client data and deliverables created specifically for clients remain client property."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"6. Confidentiality"}),o.jsx("p",{children:"Both parties agree to maintain confidentiality of proprietary information shared during the engagement. Specific confidentiality terms are outlined in individual engagement agreements and NDAs."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"7. Limitation of Liability"}),o.jsx("p",{children:"Ripotek Technology Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"8. Modifications to Terms"}),o.jsx("p",{children:"We reserve the right to modify these terms at any time. We will notify users of material changes via email or through our website. Continued use of our services after changes constitutes acceptance of the modified terms."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"9. Governing Law"}),o.jsx("p",{children:"These terms shall be governed by and construed in accordance with the laws of the Province of Alberta, Canada, without regard to its conflict of law provisions."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"10. Contact Information"}),o.jsxs("p",{children:["For questions about these Terms of Service, please contact us at:"," ",o.jsx("a",{href:"mailto:legal@ripotek.com",className:"text-accent hover:underline",children:"legal@ripotek.com"})]})]})]})]})})}),WN=()=>o.jsx("div",{className:"min-h-screen pt-20",children:o.jsx("section",{className:"section-padding",children:o.jsxs("div",{className:"container-custom max-w-4xl",children:[o.jsx("h1",{className:"text-4xl font-bold mb-8",children:"Privacy Policy"}),o.jsxs("div",{className:"prose prose-lg max-w-none space-y-6 text-muted-foreground",children:[o.jsxs("p",{className:"text-sm italic",children:["Last Updated: ",new Date().toLocaleDateString()]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"1. Introduction"}),o.jsx("p",{children:'Ripotek Technology Inc. ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.'})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"2. Information We Collect"}),o.jsx("p",{children:"We collect information that you provide directly to us, including:"}),o.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[o.jsx("li",{children:"Name, email address, phone number, and company information"}),o.jsx("li",{children:"Training enrollment and course participation data"}),o.jsx("li",{children:"Payment and billing information"}),o.jsx("li",{children:"Communication preferences and correspondence"}),o.jsx("li",{children:"Technical data such as IP address, browser type, and device information"})]})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"3. How We Use Your Information"}),o.jsx("p",{children:"We use the information we collect to:"}),o.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[o.jsx("li",{children:"Provide, maintain, and improve our services"}),o.jsx("li",{children:"Process transactions and send related information"}),o.jsx("li",{children:"Send administrative information, updates, and marketing communications"}),o.jsx("li",{children:"Respond to inquiries and provide customer support"}),o.jsx("li",{children:"Monitor and analyze usage and trends"}),o.jsx("li",{children:"Comply with legal obligations"})]})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"4. Information Sharing"}),o.jsx("p",{children:"We do not sell, trade, or rent your personal information to third parties. We may share your information with:"}),o.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[o.jsx("li",{children:"Service providers who assist in our operations"}),o.jsx("li",{children:"Business partners for joint offerings or events"}),o.jsx("li",{children:"Legal authorities when required by law"}),o.jsx("li",{children:"Professional advisors such as lawyers and accountants"})]})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"5. Data Security"}),o.jsx("p",{children:"We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"6. Data Retention"}),o.jsx("p",{children:"We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"7. Your Rights"}),o.jsx("p",{children:"You have the right to:"}),o.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[o.jsx("li",{children:"Access and receive a copy of your personal information"}),o.jsx("li",{children:"Correct inaccurate or incomplete information"}),o.jsx("li",{children:"Request deletion of your personal information"}),o.jsx("li",{children:"Object to processing of your personal information"}),o.jsx("li",{children:"Opt-out of marketing communications"})]})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"8. Cookies and Tracking"}),o.jsx("p",{children:"We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"9. Third-Party Links"}),o.jsx("p",{children:"Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"10. Children's Privacy"}),o.jsx("p",{children:"Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"11. Changes to This Policy"}),o.jsx("p",{children:'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.'})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"12. Contact Us"}),o.jsxs("p",{children:["If you have questions about this Privacy Policy, please contact us at:"," ",o.jsx("a",{href:"mailto:privacy@ripotek.com",className:"text-accent hover:underline",children:"privacy@ripotek.com"})]})]})]})]})})}),UN=()=>o.jsx("div",{className:"min-h-screen pt-20",children:o.jsx("section",{className:"section-padding",children:o.jsxs("div",{className:"container-custom max-w-4xl",children:[o.jsx("h1",{className:"text-4xl font-bold mb-8",children:"Training Refund Policy"}),o.jsxs("div",{className:"prose prose-lg max-w-none space-y-6 text-muted-foreground",children:[o.jsxs("p",{className:"text-sm italic",children:["Last Updated: ",new Date().toLocaleDateString()]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"1. Overview"}),o.jsx("p",{children:"Ripotek Technology Inc. is committed to providing high-quality training programs. This Refund Policy outlines the terms and conditions for refunds related to our training courses and programs."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"2. Full Refund Eligibility"}),o.jsx("p",{children:"Students are eligible for a full refund if:"}),o.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[o.jsx("li",{children:"Cancellation is made at least 14 days before the course start date"}),o.jsx("li",{children:"The course is cancelled by Ripotek Technology Inc."}),o.jsx("li",{children:"Students are unable to attend due to documented medical emergencies"}),o.jsx("li",{children:"Technical issues on our end prevent course delivery"})]})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"3. Partial Refund Policy"}),o.jsx("p",{children:"Students who cancel within 7-13 days before the course start date are eligible for a 50% refund of the course fee."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"4. No Refund Conditions"}),o.jsx("p",{children:"No refunds will be issued if:"}),o.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[o.jsx("li",{children:"Cancellation is made less than 7 days before the course start date"}),o.jsx("li",{children:"The student has completed more than 25% of the course material"}),o.jsx("li",{children:"The student violates our code of conduct or training agreements"}),o.jsx("li",{children:"Non-attendance without prior notification"})]})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"5. Course Transfer"}),o.jsx("p",{children:"As an alternative to refunds, students may request to transfer their enrollment to a future session of the same course at no additional cost, subject to seat availability. Transfer requests must be made at least 7 days before the course start date."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"6. Corporate Training Programs"}),o.jsx("p",{children:"Refund terms for corporate training programs are specified in individual training agreements and may differ from individual enrollment policies."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"7. Refund Processing"}),o.jsx("p",{children:"Approved refunds will be processed within 14 business days and issued to the original payment method. Students will receive email confirmation once the refund has been processed."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"8. Course Materials"}),o.jsx("p",{children:"Any course materials, including digital resources and access credentials, must be returned or access terminated before a refund can be processed."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"9. Exceptional Circumstances"}),o.jsx("p",{children:"We understand that exceptional circumstances may arise. Students facing unforeseen situations should contact our training coordinator to discuss their specific situation. We will evaluate each case individually and may offer alternative solutions."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"10. How to Request a Refund"}),o.jsxs("p",{children:["To request a refund, please submit a written request to"," ",o.jsx("a",{href:"mailto:training@ripotek.com",className:"text-accent hover:underline",children:"training@ripotek.com"})," ","including:"]}),o.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[o.jsx("li",{children:"Your full name and enrollment details"}),o.jsx("li",{children:"Course name and start date"}),o.jsx("li",{children:"Reason for refund request"}),o.jsx("li",{children:"Any supporting documentation (if applicable)"})]})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"11. Satisfaction Guarantee"}),o.jsx("p",{children:"We are committed to your success. If you're not satisfied with your training experience within the first two sessions, please contact us immediately. We'll work with you to address any concerns or provide appropriate solutions."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"12. Policy Changes"}),o.jsx("p",{children:"Ripotek Technology Inc. reserves the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to our website. Students enrolled before policy changes will be subject to the policy in effect at the time of enrollment."})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-4",children:"13. Contact Information"}),o.jsxs("p",{children:["For questions about this Refund Policy or to request a refund, please contact:"," ",o.jsx("a",{href:"mailto:training@ripotek.com",className:"text-accent hover:underline",children:"training@ripotek.com"})]})]})]})]})})}),HN=()=>{const e=Wi();return g.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),o.jsx("div",{className:"flex min-h-screen items-center justify-center bg-gray-100",children:o.jsxs("div",{className:"text-center",children:[o.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),o.jsx("p",{className:"mb-4 text-xl text-gray-600",children:"Oops! Page not found"}),o.jsx("a",{href:"/",className:"text-blue-500 underline hover:text-blue-700",children:"Return to Home"})]})})},Pr=[{title:"Navigating the AI Revolution: A Practical Guide for Canadian Businesses",slug:"navigating-the-ai-revolution",date:"November 2025",author:"Ripotek Technologies Team",readingTime:"6 minutes",tags:["AI","Strategy","Canada"],summary:"A phased, people-first approach to adopting AI—start with business problems, upskill teams, and scale iteratively.",heroImage:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",featured:!1,body:`# Navigating the AI Revolution: A Practical Guide for Canadian Businesses

**Published: November 2025 | Reading Time: 6 minutes**

The artificial intelligence revolution isn't coming—it's already here. But for many Canadian businesses, especially in Alberta's thriving tech ecosystem, the question isn't whether to adopt AI, but how to do it strategically and sustainably.

## The AI Adoption Gap

Recent statistics show that while 73% of Canadian executives believe AI will be critical to their business success, only 22% have successfully implemented AI solutions beyond pilot projects. This gap represents both a challenge and an opportunity for forward-thinking organizations.

## Three Pillars of Successful AI Integration

### 1. Start with Business Problems, Not Technology

The most common mistake organizations make is falling in love with AI technology before identifying clear business use cases. Instead of asking "How can we use AI?", successful companies ask "What business problems can AI help us solve?"

At Ripotek Technologies, we've seen the most successful implementations start with specific pain points: reducing customer service response times, improving inventory forecasting, or automating repetitive data entry tasks. These concrete objectives provide clear metrics for success and ROI calculation.

### 2. Invest in Your People First

Technology is only as good as the people who implement and use it. Before deploying any AI solution, organizations need to:

- **Upskill existing teams**: Your current employees understand your business better than any external hire. Providing them with AI literacy and technical training creates internal champions who can bridge the gap between technology and business operations.

- **Create cross-functional teams**: AI projects succeed when data scientists work alongside domain experts. A customer service AI solution designed without input from your customer service team is likely to miss critical nuances.

- **Establish clear governance**: Who owns AI decisions in your organization? Clear accountability prevents projects from stalling in committee or creating compliance risks.

### 3. Build Incrementally

The path to AI maturity isn't a single leap—it's a series of calculated steps. We recommend a phased approach:

**Phase 1: Foundation (Months 1-3)**
- Assess current data infrastructure
- Identify low-hanging fruit use cases
- Establish AI governance framework
- Begin team training programs

**Phase 2: Proof of Concept (Months 3-6)**
- Deploy 1-2 pilot projects in controlled environments
- Measure results against baseline metrics
- Gather user feedback and iterate
- Document lessons learned

**Phase 3: Scale and Optimize (Months 6-12)**
- Roll out successful pilots to broader organization
- Integrate AI tools into existing workflows
- Expand use cases based on proven ROI
- Establish continuous improvement processes

## The Alberta Advantage

Alberta's business environment offers unique advantages for AI adoption. Our province boasts:

- Strong research institutions like the Alberta Machine Intelligence Institute (AMII)
- A diverse economy spanning energy, agriculture, logistics, and tech
- Government support through innovation grants and tax incentives
- A collaborative business community willing to share best practices

Companies that leverage these resources can accelerate their AI journey while managing costs and risks effectively.

## Common Pitfalls to Avoid

**Underestimating Data Requirements**: AI models are only as good as the data they're trained on. Before starting any AI project, audit your data quality, completeness, and accessibility.

**Ignoring Change Management**: Even the best AI solution will fail if employees resist adoption. Involve end-users early, communicate transparently about how AI will augment (not replace) their roles, and celebrate early wins.

**Expecting Immediate ROI**: While some AI applications deliver quick returns, transformational projects typically require 12-18 months to show full value. Set realistic expectations and maintain stakeholder support through interim milestones.

## Taking the First Step

If you're reading this and wondering where to start, here's our recommendation: Begin with an AI readiness assessment. This typically involves:

1. Evaluating your current technology stack and data infrastructure
2. Identifying business processes with high automation potential
3. Assessing your team's current AI capabilities and training needs
4. Benchmarking against industry peers and competitors

At Ripotek Technologies, we offer complimentary readiness assessments for Alberta businesses looking to begin their AI journey. Our team brings together expertise in AI implementation, workforce development, and industry-specific applications to create customized roadmaps that align with your business objectives and budget constraints.

## The Bottom Line

AI adoption isn't about chasing the latest technology trends—it's about positioning your business for long-term competitiveness and growth. By starting with clear business objectives, investing in your people, and building incrementally, Canadian businesses can harness AI's transformative potential while managing risks and costs.

The question isn't whether your competitors are exploring AI—it's whether you'll be leading the transformation or playing catch-up in three years.

---

**Ready to explore how AI can transform your business?** Contact Ripotek Technologies for a free consultation and readiness assessment. Let's build your AI roadmap together.

**About the Author**: The Ripotek Technologies team specializes in AI implementation, workforce training, and digital transformation for Canadian businesses. Based in Edmonton, we're committed to making advanced technology accessible and practical for organizations of all sizes.
`},{title:"The Upskilling Imperative: Preparing Your Workforce for Tomorrow's Technology",slug:"the-upskilling-imperative",date:"November 2025",author:"Ripotek Technologies Team",readingTime:"7 minutes",tags:["Training","Workforce","AI"],summary:"Why upskilling beats hiring alone: a practical, grant‑aware approach to building internal capabilities that drive ROI.",heroImage:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",featured:!1,body:`# The Upskilling Imperative: Preparing Your Workforce for Tomorrow's Technology

**Published: November 2025 | Reading Time: 7 minutes**

In conversations with Alberta business leaders, one concern comes up repeatedly: "We want to adopt new technology, but our team doesn't have the skills." It's a valid concern, but also a solvable one. The key is viewing workforce development not as a prerequisite for transformation, but as an integral part of it.

## Why Traditional Hiring Isn't Enough

When facing a skills gap, many organizations default to hiring externally. While bringing in specialized talent has its place, this approach alone creates several challenges:

**The Talent War is Real**: Demand for AI engineers, data scientists, and cloud architects far exceeds supply. Competition is fierce, and salary expectations reflect it. For many mid-sized businesses, competing with tech giants for top talent simply isn't financially viable.

**Cultural Integration Takes Time**: Even when you successfully hire skilled technologists, integrating them into your existing culture and operations can take 6-12 months. They need to learn your business, your customers, and your processes before delivering maximum value.

**You're Overlooking Your Best Asset**: Your current employees already understand your business deeply. They know your customers, your challenges, and your culture. With the right training, these folks can become your most effective technology champions.

## The ROI of Upskilling

Let's talk numbers. Training an existing employee to acquire new technical skills typically costs $5,000-$15,000 per person, depending on the depth and duration of training. Compare this to:

- Average cost of a bad hire: $50,000-$75,000 (recruitment, salary, lost productivity)
- Time to productivity for external hire: 6-12 months
- Time to productivity for trained internal employee: 2-4 months (they already know the business)
- Retention rate improvement: Companies investing in employee development see 34% higher retention

One Alberta logistics company we worked with spent $80,000 training 8 existing employees in data analytics and Python programming. Within 9 months, this team built internal tools that eliminated 15 hours of manual work per week—delivering ROI in less than a year while boosting team morale and retention.

## Building an Effective Upskilling Program

Successful workforce development programs share several key characteristics:

### 1. Assess Before You Invest

Not every employee needs the same training, and not every role requires deep technical expertise. Start with a skills inventory:

- **Current State**: What technical skills does your team have today?
- **Future Needs**: What skills will your business need in 12-24 months?
- **Gap Analysis**: Where are the largest gaps, and which roles are most critical to fill?
- **Individual Interests**: Who on your team is excited about learning new technologies?

This last point is crucial. Forcing unmotivated employees into technical training rarely succeeds. Instead, focus on those who are curious and eager to develop new skills.

### 2. Blend Learning Methods

The most effective training programs combine multiple approaches:

**Structured Coursework (30%)**: Foundation building through structured curriculum—online courses, bootcamps, or workshops that cover fundamentals systematically.

**Hands-On Projects (50%)**: Real-world application through actual business projects. Theory becomes meaningful when employees immediately apply new skills to solve problems they understand.

**Mentorship and Peer Learning (20%)**: Pairing less experienced team members with skilled mentors, whether internal or external, accelerates learning and builds confidence.

One manufacturing client implemented "Learning Labs"—weekly 2-hour sessions where employees work on technology projects together, with access to external mentors for guidance. This approach fostered collaboration while building skills organically.

### 3. Create Clear Career Pathways

Employees invest effort in learning when they see how new skills advance their careers. Effective programs include:

- **Defined competency levels**: Junior, intermediate, advanced skill tiers with clear requirements
- **Compensation alignment**: Salary or bonus adjustments tied to skill acquisition
- **Role evolution**: Clear paths from current positions to more technical or hybrid roles
- **Recognition**: Formal acknowledgment of newly acquired certifications or capabilities

### 4. Allow Time for Learning

Here's a hard truth: expecting employees to upskill entirely on their own time is unrealistic and sends the wrong message. Companies serious about workforce development allocate dedicated learning time:

- **Minimum approach**: 2-4 hours per week during work hours
- **Intensive approach**: 20% time allocation (one day per week) for focused learning
- **Project-based**: Assigned to learning projects that replace some normal duties temporarily

Yes, this has short-term productivity costs. But the alternative—maintaining a workforce unable to leverage modern technology—has far greater long-term costs.

## Technology Domains Worth Investing In

Based on current market needs and future trends, we recommend prioritizing training in these areas:

**For Everyone (Digital Literacy)**
- AI fundamentals and prompt engineering
- Data interpretation and visualization
- Collaboration tools and cloud platforms
- Cybersecurity awareness

**For Technical Roles**
- Python programming for automation and data analysis
- SQL and database fundamentals
- Cloud platforms (AWS, Azure, or Google Cloud basics)
- API integration and workflow automation

**For Leadership**
- Technology strategy and digital transformation
- AI ethics and governance
- Data-driven decision making
- Change management for technology projects

## The Government Support Advantage

Canadian businesses have access to significant training subsidies that many organizations overlook:

- **Canada Job Grant**: Provides up to 2/3 of training costs (maximum $10,000 per employee)
- **Alberta Jobs Now Program**: Covers up to 37.5% of wages for new hires or promotions tied to training
- **Sectoral Training Programs**: Industry-specific funding for group training initiatives

These programs can dramatically reduce the cost of upskilling initiatives. One client reduced their training investment by 60% through strategic use of available grants.

## Overcoming Common Obstacles

**"We're too busy to train right now"**

This is like saying you're driving too fast to stop for gas. The reality: Companies that postpone training fall further behind competitors who are investing in their workforce today. Start small—even 2 hours per week per employee compounds over time.

**"What if we train them and they leave?"**

The more important question: What if you don't train them and they stay? Stagnant skills lead to declining competitiveness. Plus, development opportunities are a top retention driver—trained employees are actually more likely to stay with companies investing in their growth.

**"We don't know what to train them on"**

This is where external partners add value. At Ripotek, we conduct technology needs assessments, benchmark against industry standards, and recommend training roadmaps aligned with your business strategy. You don't need to figure this out alone.

## A Real-World Success Story

Last year, an Alberta-based professional services firm faced a challenge: their client-facing team was losing deals to competitors leveraging AI-powered analytics. Rather than hiring a data science team (which would have cost $400,000+ annually), they:

1. Identified 5 interested employees from sales and operations
2. Enrolled them in a 6-month data analytics bootcamp ($40,000 total)
3. Provided 8 hours per week for learning during work hours
4. Assigned real client projects as training exercises
5. Partnered with a data science consultant for monthly mentorship

Results after 12 months:
- Built 3 client-facing analytics tools that became competitive differentiators
- Won $1.2M in new contracts directly attributed to enhanced capabilities
- Improved employee satisfaction scores by 23%
- All 5 participants remain with the company, now mentoring others

## Taking Action

If you're ready to begin upskilling your workforce, here's a practical starting point:

**30-Day Action Plan**

*Week 1: Assessment*
- Survey employees about interest in learning new skills
- Identify 2-3 business processes that could benefit from automation or advanced analytics
- Research available training grants and subsidies

*Week 2: Planning*
- Define specific skills needed to address identified business needs
- Set aside budget for training (aim for 1-2% of payroll as starting point)
- Identify 3-5 pilot program participants

*Week 3: Resource Selection*
- Evaluate training providers and programs
- Apply for relevant grant programs
- Establish internal mentorship or project support

*Week 4: Launch*
- Kick off pilot training program
- Set clear expectations and success metrics
- Schedule regular check-ins and progress reviews

## The Long Game

Workforce development isn't a one-time initiative—it's an ongoing commitment to organizational capability building. Companies that embrace continuous learning as part of their culture don't just keep pace with technology change; they position themselves to lead their industries.

The technology landscape will keep evolving. The question is whether your team will evolve with it.

---

**Need help designing an upskilling program for your organization?** Ripotek Technologies offers workforce needs assessments, custom training programs, and grant application support. Let's build your team's capabilities together.

**About Ripotek Technologies**: We're an Edmonton-based consultancy specializing in practical technology adoption and workforce development. Our mission is making advanced technology accessible and actionable for Canadian businesses of all sizes.
`},{title:"Small Wins, Big Impact: Process Automation for Growing Businesses",slug:"small-wins-big-impact",date:"November 2025",author:"Ripotek Technologies Team",readingTime:"5 minutes",tags:["Automation","SMB","ROI"],summary:"Quick‑win automations that save time and compound ROI—without enterprise budgets or complexity.",heroImage:"https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1600&q=80",featured:!1,body:`# Small Wins, Big Impact: Process Automation for Growing Businesses

**Published: November 2025 | Reading Time: 5 minutes**

When most people hear "automation" and "AI," they picture massive enterprise systems, armies of programmers, and million-dollar budgets. But some of the most impactful automation happens at a much smaller scale—and requires far less investment than you might think.

## The Power of Small Automations

Here's a truth that large consultancies don't like to advertise: You don't need a complete digital transformation to see meaningful results from automation. Sometimes, eliminating a single repetitive task that takes 30 minutes a day can improve employee satisfaction, reduce errors, and free up capacity for higher-value work.

Let's look at real examples from Alberta businesses:

**The Invoice Processing Bottleneck**

A local construction supplier was manually entering data from supplier invoices into their accounting system—about 50 invoices daily, taking roughly 3 hours of an accounting clerk's time. A simple optical character recognition (OCR) solution integrated with their existing software reduced this to 20 minutes of review time. 

Cost: $3,000 setup + $200/month  
Time saved: 550 hours annually  
ROI achieved: 4 months

**The Customer Inquiry Loop**

A professional services firm received the same 15-20 basic questions repeatedly via email—about pricing, service offerings, scheduling, etc. Each response took 10-15 minutes as staff searched for current information and crafted replies.

They implemented an AI-powered email assistant that drafted responses to common inquiries for staff approval. Simple, well-scoped questions got instant draft responses; complex inquiries were still routed to humans.

Cost: $5,000 implementation + $150/month  
Time saved: 12 hours weekly  
Additional benefit: Faster response times improved customer satisfaction scores by 31%

**The Scheduling Nightmare**

A training company spent 8-10 hours weekly coordinating instructor availability, room bookings, and student schedules across multiple courses. A custom automation tool connected their calendar system, room booking database, and registration platform.

Cost: $8,000 development  
Time saved: 400 hours annually  
Bonus: Eliminated double-bookings and scheduling conflicts entirely

## Where to Start: The Automation Opportunity Assessment

Not every process is a good candidate for automation. The best opportunities share these characteristics:

✅ **High Volume**: The task happens frequently (daily or weekly)  
✅ **Rule-Based**: The process follows consistent, documented steps  
✅ **Low Complexity**: Limited exceptions or judgment calls required  
✅ **Time-Consuming**: Takes meaningful time away from other work  
✅ **Error-Prone**: Manual execution leads to occasional mistakes

**Quick Exercise**: Have your team track their time for one week, noting:
- Tasks that feel repetitive or tedious
- Processes where they're mostly copying/moving data between systems
- Activities they wish they could delegate but can't

These pain points often reveal prime automation candidates.

## Three Categories of Quick-Win Automation

### 1. Data Entry and Movement

**The Problem**: Your team spends hours moving information from one system to another—downloading reports from your CRM, reformatting them, and uploading to your ERP system.

**The Solution**: Integration tools like Zapier, Make (formerly Integromat), or custom API connections can automate data flows between systems.

**Investment Level**: $0-$5,000 depending on complexity  
**Typical Payback**: 2-6 months

### 2. Document Generation and Processing

**The Problem**: Creating repetitive documents (contracts, proposals, reports) from templates, or extracting data from incoming documents (invoices, applications, forms).

**The Solution**: Document automation tools can generate customized documents from data inputs, or intelligent OCR can extract information from incoming files.

**Investment Level**: $2,000-$10,000  
**Typical Payback**: 3-8 months

### 3. Communication and Scheduling

**The Problem**: Coordinating meetings, sending reminder emails, following up on pending tasks, or routing inquiries to appropriate team members.

**The Solution**: Workflow automation platforms can handle routine communications, schedule management, and task routing based on predefined rules.

**Investment Level**: $1,000-$8,000  
**Typical Payback**: 4-10 months

## The Build vs. Buy Decision

When considering automation, you'll face a key decision: purchase off-the-shelf software or build custom solutions?

**Buy When:**
- A proven solution exists for your exact use case
- The software integrates easily with your current systems
- Subscription costs are reasonable relative to time savings
- You need the solution deployed quickly

**Build When:**
- Your process is unique to your business
- Off-the-shelf solutions require extensive customization anyway
- You have complex integration requirements
- Long-term total cost of ownership favors custom development

Many successful automations blend both approaches—using commercial platforms as foundations with custom code handling business-specific logic.

## Common Pitfalls (and How to Avoid Them)

**Pitfall 1: Automating Broken Processes**

Automation doesn't fix inefficient workflows—it just makes them fail faster. Before automating anything, ask: "Is this the best way to do this task?" Sometimes the right answer is process redesign, not automation.

**Pitfall 2: Over-Engineering the Solution**

The quest for perfection kills many automation projects. Start with automating 80% of cases, leaving edge cases for manual handling. You can always enhance later.

**Pitfall 3: Neglecting Change Management**

Even simple automation changes how people work. Involve affected employees early, provide adequate training, and gather feedback during pilot phases.

**Pitfall 4: Ignoring Maintenance**

Automated processes need periodic updates as business rules change, systems get upgraded, or new requirements emerge. Budget for ongoing maintenance—typically 10-15% of initial development costs annually.

## Starting Small: A 90-Day Pilot

Here's a proven approach for businesses new to automation:

**Days 1-30: Discovery and Planning**
- Identify one high-impact, low-complexity process to automate
- Document current workflow in detail
- Define success metrics (time saved, error reduction, etc.)
- Get buy-in from affected team members

**Days 31-60: Implementation**
- Build or purchase the automation solution
- Test thoroughly with real data in a controlled environment
- Train team members on the new process
- Prepare rollback plan in case of issues

**Days 61-90: Deployment and Optimization**
- Roll out to full team
- Monitor closely and gather feedback
- Make adjustments based on real-world use
- Measure results against success metrics

If your pilot succeeds (and most do when properly scoped), you'll have both ROI proof and organizational momentum for tackling additional automations.

## The Technology Stack You Already Have

Many businesses overlook automation capabilities built into tools they already use:

- **Microsoft 365**: Power Automate offers hundreds of pre-built automation templates
- **Google Workspace**: Google Apps Script enables custom workflow automation
- **Salesforce**: Flow Builder provides point-and-click process automation
- **QuickBooks**: Rules and recurring transactions automate accounting workflows

Before investing in new tools, explore what your current software can already do. We've seen companies achieve 30-40% of their automation goals using existing subscriptions more effectively.

## When to Bring in Help

While many automations are simple enough for internal teams to handle, consider external expertise when:

- You're unsure which processes to prioritize
- Integration requirements are complex or involve legacy systems
- Your team lacks technical skills for implementation
- You want to accelerate deployment and reduce trial-and-error

A good automation consultant should pay for themselves through time savings within 6-12 months.

## The Compound Effect

Here's what makes process automation transformative: the benefits compound over time.

That invoice processing automation saving 2.5 hours daily? Over 5 years, it frees up 3,200 hours—the equivalent of hiring a part-time employee, except the "employee" never calls in sick, never makes errors, and costs a fraction of the salary.

More importantly, automation creates capacity for growth. Companies that eliminate routine work can take on more customers, develop new services, or focus on strategic initiatives—all without increasing headcount proportionally.

## Your Next Step

If you're ready to explore automation opportunities in your business, start simple:

1. **This week**: Ask your team what they wish they could automate
2. **Next week**: Pick one process and document exactly how it works today
3. **Following week**: Research potential solutions (talk to us if you'd like guidance!)
4. **Month one**: Implement a pilot automation

You don't need a massive transformation program. You just need to start.

---

**Ready to identify automation opportunities in your business?** Ripotek Technologies offers free process assessment consultations for Alberta businesses. Let's find your quick wins together.

**About Ripotek Technologies**: Based in Edmonton, we help Canadian businesses implement practical, cost-effective automation solutions that deliver real ROI. No buzzwords, no unnecessary complexity—just results.
`},{title:"5 Azure Data Engineering Best Practices for Enterprise Success",slug:"5-azure-data-engineering-best-practices",date:"January 15, 2025",author:"Sarah Chen, Lead Data Architect",readingTime:"8 minutes",tags:["Azure","Data Engineering","Best Practices"],summary:"Five field-tested patterns for Azure data platforms: medallion architecture, governance from day one, IaC, cost guardrails, and observability.",heroImage:"https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1600&q=80",featured:!0,body:`### Introduction

After implementing 30+ Azure data platforms across Energy, Financial Services, and Public Sector clients, we've identified patterns that separate successful implementations from struggling ones. Whether you're migrating from on-premises or building greenfield, these five best practices will save you time, money, and headaches.

### 1. Design for Scalability from Day One

**The Mistake:** Starting with a simple architecture and planning to refactor later.

**The Better Approach:** Build medallion architecture (Bronze/Silver/Gold) from the beginning, even if you're starting small.

**Why It Matters:**
- Refactoring a monolithic data lake costs 3-5x more than building it right initially
- Bronze layer (raw data) gives you disaster recovery and audit trails
- Silver layer (cleansed, conformed) enables multiple consumption patterns
- Gold layer (business-ready) serves analytics without impacting upstream processing

**Real Example:** A Calgary energy company started with flat files in Data Lake Gen2. Six months later, they needed to support real-time analytics and regulatory reporting. The refactor took 4 months and cost $400K. If they'd started with medallion architecture, it would have been a 2-week config change.

    **Action Items:**
    ~~~
    ✓ Use Bronze/Silver/Gold folder structure in ADLS Gen2
    ✓ Implement Delta Lake format (even in Bronze layer)
    ✓ Design schemas with extensibility in mind (avoid SELECT *)
    ✓ Plan for incremental loads, not full refreshes
    ~~~

### 2. Governance Is Not Optional (Even for POCs)

**The Mistake:** Building pipelines first, governance later.

**The Better Approach:** Implement Azure Purview and data classification in Week 1.

**Why It Matters:**
- Retroactively cataloging 10,000 tables takes months
- Data breaches from ungoverned platforms cost millions
- Auditors will ask "Where is this data? Who accessed it?" You need answers.
- Self-service analytics requires trusted, cataloged data

**Real Example:** A financial services client launched a data lake without Purview. When auditors asked for data lineage during a compliance review, they spent 3 months manually documenting 2,500 pipelines. With Purview from day one, it would have been automated.

    **Action Items:**
    ~~~
    ✓ Set up Azure Purview in parallel with your first Data Factory pipeline
    ✓ Tag PII/sensitive data immediately (use automated classification)
    ✓ Implement role-based access control (RBAC) before adding users
    ✓ Document data lineage as you build, not after
    ~~~

### 3. Embrace Infrastructure as Code (IaC)

**The Mistake:** Clicking through the Azure portal to create resources.

**The Better Approach:** Use Bicep, ARM templates, or Terraform from day one.

**Why It Matters:**
- Manual deployments are error-prone and not repeatable
- You'll need DEV/TEST/PROD environments eventually
- Disaster recovery requires rebuilding infrastructure quickly
- DevOps teams expect IaC for CI/CD pipelines

    **Sample Bicep Snippet:**
    ~~~bicep
    resource dataLake 'Microsoft.Storage/storageAccounts@2023-01-01' = {
      name: 'dl\${environment}\${uniqueString(resourceGroup().id)}'
      location: location
      kind: 'StorageV2'
      sku: {
        name: 'Standard_LRS'
      }
      properties: {
        isHnsEnabled: true // Hierarchical namespace for Data Lake Gen2
        minimumTlsVersion: 'TLS1_2'
        supportsHttpsTrafficOnly: true
      }
    }
    ~~~

### 4. Optimize Costs Before They Spiral

**Why Azure Costs Explode:** Synapse always-on, idle Databricks clusters, hot storage everywhere, no budgets/alerts.

    **Cost Optimization Checklist:**
    ~~~
    ✓ Pause Synapse Dedicated Pools when not in use (or use Serverless)
    ✓ Set Databricks cluster auto-termination (15–30 minutes idle)
    ✓ Implement Data Lake lifecycle policies (hot → cool after 30 days)
    ✓ Use Azure Cost Management budgets and alerts
    ✓ Tag resources by project/department for chargeback
    ✓ Review costs weekly for the first 3 months
    ~~~

### 5. Build for Observability and Monitoring

**Observability Stack:** Azure Monitor, Log Analytics, ADF dashboards, Power BI health, PagerDuty.

**What to Monitor:** execution status, data quality metrics, utilization, cost trends, freshness.

### Conclusion

These five practices aren't theoretical—they're lessons learned from dozens of enterprise implementations. The upfront investment pays dividends within months.
`},{title:"How to Transition Into a Data Career (Without a CS Degree)",slug:"how-to-transition-into-a-data-career",date:"January 8, 2025",author:"Marcus Johnson, Principal BI Consultant",readingTime:"10 minutes",tags:["Career","Training","Career Change"],summary:"A step‑by‑step roadmap to pivot into data roles—skills, portfolio, applications, and interviews—with 400+ student outcomes.",heroImage:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",featured:!1,body:`### Introduction

"I want to break into data, but I don't have a computer science degree. Am I too late?" Absolutely not. This guide outlines the exact steps that helped 400+ students land data roles.

### The Data Career Landscape (2025)

Entry, mid, and senior roles—from BI Analyst to ML Engineer—what they do and how they pay.

### Step 1: Choose Your First Role (30 Days)

Pick ONE target: BI/Data Analyst, Data Engineer, or Analytics Engineer. Align with your strengths and interests.

### Step 2: Learn the Right Skills (3–6 Months)

Bootcamp vs self‑taught vs university—and a 12‑ or 24‑week curriculum by role.

### Step 3: Build a Portfolio

Three project ideas per role that hiring managers actually value.

### Steps 4–7

Resume/LinkedIn optimization, application strategy, networking for referrals, interview prep, and offer negotiation.

### Conclusion

Follow the process consistently and you will break in.
`},{title:"Power BI vs Tableau: Which Should You Learn in 2025?",slug:"power-bi-vs-tableau-which-should-you-learn-2025",date:"December 18, 2024",author:"David Thompson, Senior Databricks Instructor",readingTime:"12 minutes",tags:["Business Intelligence","Career","Tools"],summary:"A practitioner’s comparison across market demand, capabilities, cost, and career impact—with real job posting data in Canada.",heroImage:"https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80",featured:!1,body:`### Introduction

"Should I learn Power BI or Tableau?" It depends on your goals, market, and career path. This guide breaks down the trade‑offs and gives a clear learning path.

### TL;DR – Quick Decision Matrix

Choose Power BI in Canada/MSFT shops; Tableau for design‑forward US orgs; both for consultants.

### Market Demand (2025)

Power BI jobs outnumber Tableau ~2.5:1 in Canada; in Calgary ~3:1.

### Deep Dives

Strengths/limits of each tool (integration, DAX vs calcs, cost, performance) with examples and code.

### Head‑to‑Head Comparison

Feature‑by‑feature overview and when we recommend each.

### Conclusion

Pick one, go deep 3–6 months, then add the other.
`},{title:"Building Your First Data Lakehouse: A Practical Guide",slug:"building-your-first-data-lakehouse-a-practical-guide",date:"December 10, 2024",author:"Elena Rodriguez, Cloud Solutions Architect",readingTime:"15 minutes",tags:["Data Engineering","Architecture","Azure","Databricks"],summary:"What a lakehouse is, when you need one, and how to build it on Azure/Databricks with the medallion pattern.",heroImage:"https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1600&q=80",featured:!1,body:`### Introduction

“Lakehouse” is more than a buzzword. It merges the flexibility of lakes with the performance of warehouses—using open formats and a transaction layer.

### What Is a Lakehouse?

Simple vs technical definitions, why it matters, and real outcomes from client projects.

### When You Need One (And When You Don’t)

Criteria to decide if lakehouse fits your needs.

### Architecture & Step‑by‑Step Build

Bronze/Silver/Gold layers, ingestion, cleansing, aggregation, and BI.

### Best Practices & Common Mistakes

Partitioning, schema evolution, performance, governance, cost—and pitfalls to avoid.

### Conclusion

Start simple with one dataset and iterate.
`},{title:"The Ultimate Guide to Landing Your First Data Job in 2025",slug:"ultimate-guide-to-landing-your-first-data-job-2025",date:"January 5, 2025",author:"Ripotek Career Services Team",readingTime:"20 minutes",tags:["Career","Job Search","Data Jobs"],summary:"A no‑BS, results‑driven playbook: positioning, applications, networking, interviews, negotiation, and your first 90 days.",heroImage:"https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",featured:!1,body:`### Introduction

You’ve built skills and projects but aren’t getting interviews. This guide translates 1,000+ student outcomes into a proven process for offers.

### Market Reality (2025)

Good news, challenges, and realistic funnel metrics.

### Phase 1: Positioning

Target one role, tailor resume/LinkedIn, build a simple portfolio site.

### Phase 2–4: Apply, Network, Interview

Cadence, where to apply, referral playbook, technical/behavioral prep.

### Phase 5–6: Offer & First 90 Days

Evaluate and negotiate thoughtfully, then rack up quick wins.

### Conclusion

Follow the process over 3–6 months and you will land the role.
`}],VN=e=>Pr.find(t=>t.slug===e),qN=()=>{const e=new Set;for(const t of Pr)(t.tags||[]).forEach(n=>e.add(n));return Array.from(e).sort((t,n)=>t.localeCompare(n))},GN=()=>{const[e,t]=g.useState(null),n=g.useMemo(()=>Pr.find(i=>i.featured)||Pr[0],[]),r=g.useMemo(()=>{const i=Pr.filter(s=>!s.featured);return e?i.filter(s=>(s.tags||[]).includes(e)):i},[e]);return o.jsxs("div",{className:"min-h-screen pt-20",children:[o.jsx("section",{className:"section-padding gradient-bg text-primary-foreground",children:o.jsx("div",{className:"container-custom",children:o.jsxs("div",{className:"max-w-4xl mx-auto text-center animate-fade-in-up",children:[o.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-3",children:"Insights & Articles"}),o.jsx("p",{className:"text-lg opacity-90",children:"Practical guides and thought leadership from the Ripotek team."})]})})}),o.jsx("section",{className:"section-padding",children:o.jsxs("div",{className:"container-custom",children:[o.jsx(QN,{tags:g.useMemo(()=>qN(),[]),activeTag:e,setActiveTag:t}),o.jsx(YN,{featured:n}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:r.map((i,s)=>o.jsx("article",{className:"group overflow-hidden rounded-2xl border-2 bg-card hover:shadow-xl transition-shadow animate-fade-in",style:{animationDelay:`${s*75}ms`},children:o.jsxs(K,{to:`/blog/${i.slug}`,className:"block",children:[o.jsxs("div",{className:"relative h-56 md:h-56 w-full overflow-hidden",children:[i.heroImage?o.jsx("img",{src:i.heroImage,alt:"",className:"h-full w-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500",loading:"lazy"}):o.jsx("div",{className:"h-full w-full bg-gradient-to-br from-primary/20 to-accent/30"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent"}),o.jsx("div",{className:"absolute top-3 left-3 flex flex-wrap gap-2",children:(i.tags||[]).slice(0,3).map(a=>o.jsx(qe,{variant:"secondary",className:"backdrop-blur",children:a},a))})]}),o.jsxs("div",{className:"p-6",children:[o.jsxs("div",{className:"text-sm text-muted-foreground mb-2 flex gap-2",children:[o.jsx("span",{children:i.date}),o.jsx("span",{children:"•"}),o.jsx("span",{children:i.readingTime})]}),o.jsx("h2",{className:"text-xl font-bold mb-2 group-hover:text-accent transition-colors",children:i.title}),o.jsx("p",{className:"text-muted-foreground mb-4",children:i.summary}),o.jsxs("div",{className:"inline-flex items-center text-accent font-medium",children:["Read more ",o.jsx(Ht,{className:"h-4 w-4 ml-1"})]})]})]})},i.slug))})]})})]})},QN=({tags:e,activeTag:t,setActiveTag:n})=>o.jsxs("div",{className:"mb-8 flex flex-wrap gap-2 items-center",children:[o.jsx("span",{className:"text-sm text-muted-foreground mr-2",children:"Filter by tag:"}),o.jsx("button",{className:`px-3 py-1 rounded-full text-sm border ${t?"hover:bg-muted":"bg-primary text-primary-foreground"}`,onClick:()=>n(null),children:"All"}),e.map(r=>o.jsx("button",{className:`px-3 py-1 rounded-full text-sm border ${t===r?"bg-primary text-primary-foreground":"hover:bg-muted"}`,onClick:()=>n(t===r?null:r),children:r},r))]}),YN=({featured:e})=>e?o.jsx(K,{to:`/blog/${e.slug}`,className:"block mb-10",children:o.jsxs("div",{className:"relative h-72 w-full overflow-hidden rounded-2xl border-2",children:[e.heroImage?o.jsx("img",{src:e.heroImage,alt:"",className:"h-full w-full object-cover"}):o.jsx("div",{className:"h-full w-full bg-gradient-to-br from-primary/20 to-accent/30"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"}),o.jsx("div",{className:"absolute inset-0 flex items-end",children:o.jsxs("div",{className:"p-6",children:[o.jsxs("div",{className:"mb-2 text-sm text-muted-foreground",children:[e.date," • ",e.readingTime]}),o.jsx("h2",{className:"text-2xl md:text-3xl font-bold max-w-3xl",children:e.title}),o.jsx("p",{className:"max-w-3xl text-muted-foreground mt-2",children:e.summary}),o.jsxs("div",{className:"mt-4 inline-flex items-center text-accent font-medium",children:["Read post ",o.jsx(Ht,{className:"h-4 w-4 ml-1"})]})]})})]})}):null,KN=()=>{const{slug:e}=zd(),t=e?VN(e):void 0;if(!t)return o.jsx("div",{className:"min-h-screen pt-20 section-padding",children:o.jsxs("div",{className:"container-custom",children:[o.jsx("p",{className:"text-muted-foreground",children:"Post not found."}),o.jsx(K,{className:"text-accent hover:underline",to:"/blog",children:"Back to Blog"})]})});const{html:n,headings:r}=JN(t.body),i=r.filter(s=>s.level!==1);return o.jsxs("div",{className:"min-h-screen pt-20",children:[o.jsxs("header",{className:"relative",children:[o.jsx("div",{className:"h-[38vh] md:h-[48vh] w-full overflow-hidden",children:t.heroImage?o.jsx("img",{src:t.heroImage,alt:"",className:"h-full w-full object-cover"}):o.jsx("div",{className:"h-full w-full bg-gradient-to-br from-primary/20 to-accent/30"})}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"}),o.jsx("div",{className:"absolute inset-0 flex items-end",children:o.jsxs("div",{className:"container-custom max-w-4xl pb-6 md:pb-10",children:[o.jsx("div",{className:"mb-3 flex flex-wrap gap-2",children:(t.tags||[]).map(s=>o.jsx(qe,{variant:"secondary",className:"backdrop-blur",children:s},s))}),o.jsx("h1",{className:"text-3xl md:text-5xl font-bold leading-tight mb-2",children:t.title}),o.jsxs("div",{className:"text-sm text-muted-foreground",children:[o.jsx("span",{children:t.date}),o.jsx("span",{className:"mx-2",children:"•"}),o.jsx("span",{children:t.readingTime}),o.jsx("span",{className:"mx-2",children:"•"}),o.jsxs("span",{children:["By ",t.author]})]})]})})]}),o.jsx("section",{className:"section-padding",children:o.jsxs("div",{className:"container-custom",children:[o.jsx("div",{className:"mb-6 text-sm max-w-5xl mx-auto",children:o.jsx(K,{className:"text-accent hover:underline",to:"/blog",children:"Back to Blog"})}),o.jsxs("div",{className:"grid gap-10 lg:grid-cols-[1fr,300px] max-w-5xl mx-auto",children:[o.jsx("article",{className:"prose prose-lg prose-neutral dark:prose-invert max-w-none",dangerouslySetInnerHTML:{__html:n}}),o.jsx("aside",{className:"hidden lg:block",children:o.jsxs("div",{className:"sticky top-28 rounded-xl border-2 p-5 bg-card",children:[o.jsx("div",{className:"text-xs uppercase tracking-wide text-muted-foreground mb-3",children:"Table of contents"}),o.jsxs("nav",{className:"space-y-2",children:[i.length===0&&o.jsx("div",{className:"text-sm text-muted-foreground",children:"No sections"}),i.map(s=>o.jsx("a",{href:`#${s.id}`,className:`block text-sm hover:text-accent ${s.level===3?"ml-4":""}`,children:s.text},s.id))]})]})})]})]})}),o.jsx("section",{className:"section-padding pt-0",children:o.jsxs("div",{className:"container-custom max-w-5xl",children:[o.jsx("h3",{className:"text-2xl font-bold mb-6",children:"Related posts"}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:XN(t.slug).map(s=>o.jsxs(K,{to:`/blog/${s.slug}`,className:"group overflow-hidden rounded-2xl border-2 bg-card hover:shadow-xl transition-shadow",children:[o.jsxs("div",{className:"relative h-40 w-full overflow-hidden",children:[s.heroImage?o.jsx("img",{src:s.heroImage,alt:"",className:"h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"}):o.jsx("div",{className:"h-full w-full bg-gradient-to-br from-primary/20 to-accent/30"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent"})]}),o.jsxs("div",{className:"p-5",children:[o.jsxs("div",{className:"text-xs text-muted-foreground mb-1",children:[s.date," • ",s.readingTime]}),o.jsx("div",{className:"font-semibold group-hover:text-accent",children:s.title})]})]},s.slug))})]})})]})};function XN(e){const t=Pr.find(i=>i.slug===e),n=Pr.filter(i=>i.slug!==e),r=i=>{const s=new Set((t==null?void 0:t.tags)||[]);let a=0;for(const l of i.tags||[])s.has(l)&&a++;return a};return n.map(i=>({p:i,s:r(i)})).sort((i,s)=>s.s-i.s).slice(0,3).map(i=>i.p)}function JN(e){const t=e.split(/\r?\n/),n=[],r=[];let i=!1,s=!1,a=!1,l="";const c=m=>m.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-"),u=()=>{i&&(n.push("</ul>"),i=!1),s&&(n.push("</ol>"),s=!1)},d=m=>{let v=m.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,(f,b,p)=>`<img src="${String(p)}" alt="${String(b)}" class="rounded-xl border my-6"/>`);return v=v.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-accent underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>'),v=v.replace(/`([^`]+)`/g,"<code>$1</code>"),v=v.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),v=v.replace(/\*([^*]+)\*/g,"<em>$1</em>"),v};for(let m=0;m<t.length;m++){const f=t[m].replace(/\t/g,"  "),b=f.match(/^(```|~~~)(.*)$/);if(b){a?(a=!1,l="",n.push("</code></pre>")):(u(),a=!0,l=(b[2]||"").trim(),n.push(`<pre class="not-prose overflow-x-auto"><code class="language-${l}">`));continue}if(a){n.push(f.replace(/</g,"&lt;").replace(/>/g,"&gt;"));continue}const p=f.trimEnd();if(p===""){u(),n.push("<br/>");continue}if(/^---+$/.test(p)){u(),n.push("<hr/>");continue}if(p.startsWith("### ")){u();const y=p.slice(4),h=c(y);r.push({id:h,text:y,level:3}),n.push(`<h3 id="${h}">${d(y)}</h3>`);continue}if(p.startsWith("## ")){u();const y=p.slice(3),h=c(y);r.push({id:h,text:y,level:2}),n.push(`<h2 id="${h}">${d(y)}</h2>`);continue}if(p.startsWith("# ")){u();const y=p.slice(2),h=c(y);r.push({id:h,text:y,level:1}),n.push(`<h1 id="${h}">${d(y)}</h1>`);continue}if(p.startsWith("> ")){u(),n.push(`<blockquote>${d(p.slice(2))}</blockquote>`);continue}if(/^[-*]\s+/.test(p)){i||(u(),i=!0,n.push("<ul>")),n.push(`<li>${d(p.replace(/^[-*]\s+/,""))}</li>`);continue}if(/^\d+\.\s+/.test(p)){s||(u(),s=!0,n.push("<ol>")),n.push(`<li>${d(p.replace(/^\d+\.\s+/,""))}</li>`);continue}const w=y=>(y.match(/\|/g)||[]).length;if(w(p)>=2){const y=(t[m+1]||"").trim();if(/^\s*[:\-\|\s]+$/.test(y)&&w(y)>=1){const h=p.split("|").map(k=>k.trim()).filter(k=>k.length);n.push("<table><thead><tr>"+h.map(k=>`<th>${d(k)}</th>`).join("")+"</tr></thead><tbody>");let x=m+2;for(;x<t.length;){const k=(t[x]||"").trimEnd();if(!k||w(k)<1)break;const S=k.split("|").map(C=>C.trim()).filter(C=>C.length);n.push("<tr>"+S.map(C=>`<td>${d(C)}</td>`).join("")+"</tr>"),x++}n.push("</tbody></table>"),m=x-1;continue}}u(),n.push(`<p>${d(p)}</p>`)}return u(),{html:n.join(`
`),headings:r}}const ZN=new BC,eE=()=>o.jsx(UC,{client:ZN,children:o.jsxs(vC,{children:[o.jsx(J1,{}),o.jsx(Ik,{}),o.jsx($2,{children:o.jsxs("div",{className:"flex flex-col min-h-screen",children:[o.jsx(H2,{}),o.jsx("main",{className:"flex-1",children:o.jsxs(R2,{children:[o.jsx(Le,{path:"/",element:o.jsx(Q2,{})}),o.jsx(Le,{path:"/about",element:o.jsx(Y2,{})}),o.jsx(Le,{path:"/services",element:o.jsx(K2,{})}),o.jsx(Le,{path:"/training",element:o.jsx(Z2,{})}),o.jsx(Le,{path:"/case-studies",element:o.jsx(ej,{})}),o.jsx(Le,{path:"/blog",element:o.jsx(GN,{})}),o.jsx(Le,{path:"/blog/:slug",element:o.jsx(KN,{})}),o.jsx(Le,{path:"/resources",element:o.jsx(ij,{})}),o.jsx(Le,{path:"/resources/whitepapers/:slug",element:o.jsx(oj,{})}),o.jsx(Le,{path:"/careers",element:o.jsx(cj,{})}),o.jsx(Le,{path:"/careers/:slug",element:o.jsx(uj,{})}),o.jsx(Le,{path:"/contact",element:o.jsx(_N,{})}),o.jsx(Le,{path:"/terms",element:o.jsx(BN,{})}),o.jsx(Le,{path:"/privacy",element:o.jsx(WN,{})}),o.jsx(Le,{path:"/refund",element:o.jsx(UN,{})}),o.jsx(Le,{path:"*",element:o.jsx(HN,{})})]})}),o.jsx(V2,{})]})})]})});jg(document.getElementById("root")).render(o.jsx(eE,{}));
