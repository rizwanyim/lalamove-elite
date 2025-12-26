(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var hy={exports:{}},$l={},dy={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Co=Symbol.for("react.element"),yE=Symbol.for("react.portal"),_E=Symbol.for("react.fragment"),vE=Symbol.for("react.strict_mode"),wE=Symbol.for("react.profiler"),EE=Symbol.for("react.provider"),TE=Symbol.for("react.context"),IE=Symbol.for("react.forward_ref"),SE=Symbol.for("react.suspense"),AE=Symbol.for("react.memo"),kE=Symbol.for("react.lazy"),Ip=Symbol.iterator;function CE(t){return t===null||typeof t!="object"?null:(t=Ip&&t[Ip]||t["@@iterator"],typeof t=="function"?t:null)}var fy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},py=Object.assign,my={};function Yi(t,e,n){this.props=t,this.context=e,this.refs=my,this.updater=n||fy}Yi.prototype.isReactComponent={};Yi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function gy(){}gy.prototype=Yi.prototype;function qh(t,e,n){this.props=t,this.context=e,this.refs=my,this.updater=n||fy}var Gh=qh.prototype=new gy;Gh.constructor=qh;py(Gh,Yi.prototype);Gh.isPureReactComponent=!0;var Sp=Array.isArray,yy=Object.prototype.hasOwnProperty,Kh={current:null},_y={key:!0,ref:!0,__self:!0,__source:!0};function vy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)yy.call(e,r)&&!_y.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Co,type:t,key:s,ref:o,props:i,_owner:Kh.current}}function RE(t,e){return{$$typeof:Co,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Co}function PE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ap=/\/+/g;function Hu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?PE(""+t.key):e.toString(36)}function Na(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Co:case yE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Hu(o,0):r,Sp(i)?(n="",t!=null&&(n=t.replace(Ap,"$&/")+"/"),Na(i,e,n,"",function(h){return h})):i!=null&&(Qh(i)&&(i=RE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ap,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Sp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Hu(s,l);o+=Na(s,e,n,u,i)}else if(u=CE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Hu(s,l++),o+=Na(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function oa(t,e,n){if(t==null)return t;var r=[],i=0;return Na(t,r,"","",function(s){return e.call(n,s,i++)}),r}function xE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},Da={transition:null},NE={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Da,ReactCurrentOwner:Kh};function wy(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:oa,forEach:function(t,e,n){oa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return oa(t,function(){e++}),e},toArray:function(t){return oa(t,function(e){return e})||[]},only:function(t){if(!Qh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Yi;ee.Fragment=_E;ee.Profiler=wE;ee.PureComponent=qh;ee.StrictMode=vE;ee.Suspense=SE;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NE;ee.act=wy;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=py({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)yy.call(e,u)&&!_y.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Co,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:TE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:EE,_context:t},t.Consumer=t};ee.createElement=vy;ee.createFactory=function(t){var e=vy.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:IE,render:t}};ee.isValidElement=Qh;ee.lazy=function(t){return{$$typeof:kE,_payload:{_status:-1,_result:t},_init:xE}};ee.memo=function(t,e){return{$$typeof:AE,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Da.transition;Da.transition={};try{t()}finally{Da.transition=e}};ee.unstable_act=wy;ee.useCallback=function(t,e){return ht.current.useCallback(t,e)};ee.useContext=function(t){return ht.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ht.current.useEffect(t,e)};ee.useId=function(){return ht.current.useId()};ee.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ht.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};ee.useRef=function(t){return ht.current.useRef(t)};ee.useState=function(t){return ht.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ht.current.useTransition()};ee.version="18.3.1";dy.exports=ee;var _e=dy.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DE=_e,VE=Symbol.for("react.element"),OE=Symbol.for("react.fragment"),ME=Object.prototype.hasOwnProperty,bE=DE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LE={key:!0,ref:!0,__self:!0,__source:!0};function Ey(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ME.call(e,r)&&!LE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:VE,type:t,key:s,ref:o,props:i,_owner:bE.current}}$l.Fragment=OE;$l.jsx=Ey;$l.jsxs=Ey;hy.exports=$l;var N=hy.exports,Ty={exports:{}},Rt={},Iy={exports:{}},Sy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var J=z.length;z.push(G);e:for(;0<J;){var le=J-1>>>1,ye=z[le];if(0<i(ye,G))z[le]=G,z[J]=ye,J=le;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],J=z.pop();if(J!==G){z[0]=J;e:for(var le=0,ye=z.length,pn=ye>>>1;le<pn;){var at=2*(le+1)-1,Qt=z[at],ft=at+1,Xt=z[ft];if(0>i(Qt,J))ft<ye&&0>i(Xt,Qt)?(z[le]=Xt,z[ft]=J,le=ft):(z[le]=Qt,z[at]=J,le=at);else if(ft<ye&&0>i(Xt,J))z[le]=Xt,z[ft]=J,le=ft;else break e}}return G}function i(z,G){var J=z.sortIndex-G.sortIndex;return J!==0?J:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,g=3,k=!1,P=!1,D=!1,M=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(z){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=z)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function V(z){if(D=!1,A(z),!P)if(n(u)!==null)P=!0,Cr(U);else{var G=n(h);G!==null&&Kt(V,G.startTime-z)}}function U(z,G){P=!1,D&&(D=!1,I(y),y=-1),k=!0;var J=g;try{for(A(G),p=n(u);p!==null&&(!(p.expirationTime>G)||z&&!S());){var le=p.callback;if(typeof le=="function"){p.callback=null,g=p.priorityLevel;var ye=le(p.expirationTime<=G);G=t.unstable_now(),typeof ye=="function"?p.callback=ye:p===n(u)&&r(u),A(G)}else r(u);p=n(u)}if(p!==null)var pn=!0;else{var at=n(h);at!==null&&Kt(V,at.startTime-G),pn=!1}return pn}finally{p=null,g=J,k=!1}}var F=!1,_=null,y=-1,v=5,T=-1;function S(){return!(t.unstable_now()-T<v)}function C(){if(_!==null){var z=t.unstable_now();T=z;var G=!0;try{G=_(!0,z)}finally{G?E():(F=!1,_=null)}}else F=!1}var E;if(typeof w=="function")E=function(){w(C)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,Lt=De.port2;De.port1.onmessage=C,E=function(){Lt.postMessage(null)}}else E=function(){M(C,0)};function Cr(z){_=z,F||(F=!0,E())}function Kt(z,G){y=M(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){P||k||(P=!0,Cr(U))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var J=g;g=G;try{return z()}finally{g=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=g;g=z;try{return G()}finally{g=J}},t.unstable_scheduleCallback=function(z,G,J){var le=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?le+J:le):J=le,z){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=J+ye,z={id:f++,callback:G,priorityLevel:z,startTime:J,expirationTime:ye,sortIndex:-1},J>le?(z.sortIndex=J,e(h,z),n(u)===null&&z===n(h)&&(D?(I(y),y=-1):D=!0,Kt(V,J-le))):(z.sortIndex=ye,e(u,z),P||k||(P=!0,Cr(U))),z},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(z){var G=g;return function(){var J=g;g=G;try{return z.apply(this,arguments)}finally{g=J}}}})(Sy);Iy.exports=Sy;var FE=Iy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UE=_e,Ct=FE;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ay=new Set,to={};function ei(t,e){bi(t,e),bi(t+"Capture",e)}function bi(t,e){for(to[t]=e,t=0;t<e.length;t++)Ay.add(e[t])}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rc=Object.prototype.hasOwnProperty,jE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kp={},Cp={};function zE(t){return Rc.call(Cp,t)?!0:Rc.call(kp,t)?!1:jE.test(t)?Cp[t]=!0:(kp[t]=!0,!1)}function BE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $E(t,e,n,r){if(e===null||typeof e>"u"||BE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xh=/[\-:]([a-z])/g;function Yh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xh,Yh);Qe[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xh,Yh);Qe[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xh,Yh);Qe[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jh(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($E(e,n,i,r)&&(n=null),r||i===null?zE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Nn=UE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,aa=Symbol.for("react.element"),di=Symbol.for("react.portal"),fi=Symbol.for("react.fragment"),Zh=Symbol.for("react.strict_mode"),Pc=Symbol.for("react.profiler"),ky=Symbol.for("react.provider"),Cy=Symbol.for("react.context"),ed=Symbol.for("react.forward_ref"),xc=Symbol.for("react.suspense"),Nc=Symbol.for("react.suspense_list"),td=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),Ry=Symbol.for("react.offscreen"),Rp=Symbol.iterator;function Ss(t){return t===null||typeof t!="object"?null:(t=Rp&&t[Rp]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,Wu;function Ds(t){if(Wu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wu=e&&e[1]||""}return`
`+Wu+t}var qu=!1;function Gu(t,e){if(!t||qu)return"";qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{qu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ds(t):""}function HE(t){switch(t.tag){case 5:return Ds(t.type);case 16:return Ds("Lazy");case 13:return Ds("Suspense");case 19:return Ds("SuspenseList");case 0:case 2:case 15:return t=Gu(t.type,!1),t;case 11:return t=Gu(t.type.render,!1),t;case 1:return t=Gu(t.type,!0),t;default:return""}}function Dc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fi:return"Fragment";case di:return"Portal";case Pc:return"Profiler";case Zh:return"StrictMode";case xc:return"Suspense";case Nc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Cy:return(t.displayName||"Context")+".Consumer";case ky:return(t._context.displayName||"Context")+".Provider";case ed:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case td:return e=t.displayName||null,e!==null?e:Dc(t.type)||"Memo";case zn:e=t._payload,t=t._init;try{return Dc(t(e))}catch{}}return null}function WE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dc(e);case 8:return e===Zh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Py(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qE(t){var e=Py(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function la(t){t._valueTracker||(t._valueTracker=qE(t))}function xy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Py(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Za(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vc(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ny(t,e){e=e.checked,e!=null&&Jh(t,"checked",e,!1)}function Oc(t,e){Ny(t,e);var n=fr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mc(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mc(t,e,n){(e!=="number"||Za(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vs=Array.isArray;function Ai(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function bc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Np(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(Vs(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function Dy(t,e){var n=fr(e.value),r=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Dp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ua,Oy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ua=ua||document.createElement("div"),ua.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ua.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function no(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var js={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},GE=["Webkit","ms","Moz","O"];Object.keys(js).forEach(function(t){GE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),js[e]=js[t]})});function My(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||js.hasOwnProperty(t)&&js[t]?(""+e).trim():e+"px"}function by(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=My(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var KE=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fc(t,e){if(e){if(KE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function Uc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jc=null;function nd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zc=null,ki=null,Ci=null;function Vp(t){if(t=xo(t)){if(typeof zc!="function")throw Error(L(280));var e=t.stateNode;e&&(e=Kl(e),zc(t.stateNode,t.type,e))}}function Ly(t){ki?Ci?Ci.push(t):Ci=[t]:ki=t}function Fy(){if(ki){var t=ki,e=Ci;if(Ci=ki=null,Vp(t),e)for(t=0;t<e.length;t++)Vp(e[t])}}function Uy(t,e){return t(e)}function jy(){}var Ku=!1;function zy(t,e,n){if(Ku)return t(e,n);Ku=!0;try{return Uy(t,e,n)}finally{Ku=!1,(ki!==null||Ci!==null)&&(jy(),Fy())}}function ro(t,e){var n=t.stateNode;if(n===null)return null;var r=Kl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Bc=!1;if(Tn)try{var As={};Object.defineProperty(As,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{Bc=!1}function QE(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var zs=!1,el=null,tl=!1,$c=null,XE={onError:function(t){zs=!0,el=t}};function YE(t,e,n,r,i,s,o,l,u){zs=!1,el=null,QE.apply(XE,arguments)}function JE(t,e,n,r,i,s,o,l,u){if(YE.apply(this,arguments),zs){if(zs){var h=el;zs=!1,el=null}else throw Error(L(198));tl||(tl=!0,$c=h)}}function ti(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function By(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Op(t){if(ti(t)!==t)throw Error(L(188))}function ZE(t){var e=t.alternate;if(!e){if(e=ti(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Op(i),t;if(s===r)return Op(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function $y(t){return t=ZE(t),t!==null?Hy(t):null}function Hy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hy(t);if(e!==null)return e;t=t.sibling}return null}var Wy=Ct.unstable_scheduleCallback,Mp=Ct.unstable_cancelCallback,eT=Ct.unstable_shouldYield,tT=Ct.unstable_requestPaint,Re=Ct.unstable_now,nT=Ct.unstable_getCurrentPriorityLevel,rd=Ct.unstable_ImmediatePriority,qy=Ct.unstable_UserBlockingPriority,nl=Ct.unstable_NormalPriority,rT=Ct.unstable_LowPriority,Gy=Ct.unstable_IdlePriority,Hl=null,rn=null;function iT(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Hl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:aT,sT=Math.log,oT=Math.LN2;function aT(t){return t>>>=0,t===0?32:31-(sT(t)/oT|0)|0}var ca=64,ha=4194304;function Os(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function rl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Os(l):(s&=o,s!==0&&(r=Os(s)))}else o=n&~i,o!==0?r=Os(o):s!==0&&(r=Os(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ht(e),i=1<<n,r|=t[n],e&=~i;return r}function lT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ht(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=lT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Hc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ky(){var t=ca;return ca<<=1,!(ca&4194240)&&(ca=64),t}function Qu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ro(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ht(e),t[e]=n}function cT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ht(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function id(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ht(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function Qy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Xy,sd,Yy,Jy,Zy,Wc=!1,da=[],Jn=null,Zn=null,er=null,io=new Map,so=new Map,$n=[],hT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bp(t,e){switch(t){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(e.pointerId)}}function ks(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=xo(e),e!==null&&sd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function dT(t,e,n,r,i){switch(e){case"focusin":return Jn=ks(Jn,t,e,n,r,i),!0;case"dragenter":return Zn=ks(Zn,t,e,n,r,i),!0;case"mouseover":return er=ks(er,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return io.set(s,ks(io.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,so.set(s,ks(so.get(s)||null,t,e,n,r,i)),!0}return!1}function e_(t){var e=br(t.target);if(e!==null){var n=ti(e);if(n!==null){if(e=n.tag,e===13){if(e=By(n),e!==null){t.blockedOn=e,Zy(t.priority,function(){Yy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Va(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);jc=r,n.target.dispatchEvent(r),jc=null}else return e=xo(n),e!==null&&sd(e),t.blockedOn=n,!1;e.shift()}return!0}function Lp(t,e,n){Va(t)&&n.delete(e)}function fT(){Wc=!1,Jn!==null&&Va(Jn)&&(Jn=null),Zn!==null&&Va(Zn)&&(Zn=null),er!==null&&Va(er)&&(er=null),io.forEach(Lp),so.forEach(Lp)}function Cs(t,e){t.blockedOn===e&&(t.blockedOn=null,Wc||(Wc=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,fT)))}function oo(t){function e(i){return Cs(i,t)}if(0<da.length){Cs(da[0],t);for(var n=1;n<da.length;n++){var r=da[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jn!==null&&Cs(Jn,t),Zn!==null&&Cs(Zn,t),er!==null&&Cs(er,t),io.forEach(e),so.forEach(e),n=0;n<$n.length;n++)r=$n[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<$n.length&&(n=$n[0],n.blockedOn===null);)e_(n),n.blockedOn===null&&$n.shift()}var Ri=Nn.ReactCurrentBatchConfig,il=!0;function pT(t,e,n,r){var i=ae,s=Ri.transition;Ri.transition=null;try{ae=1,od(t,e,n,r)}finally{ae=i,Ri.transition=s}}function mT(t,e,n,r){var i=ae,s=Ri.transition;Ri.transition=null;try{ae=4,od(t,e,n,r)}finally{ae=i,Ri.transition=s}}function od(t,e,n,r){if(il){var i=qc(t,e,n,r);if(i===null)sc(t,e,r,sl,n),bp(t,r);else if(dT(i,t,e,n,r))r.stopPropagation();else if(bp(t,r),e&4&&-1<hT.indexOf(t)){for(;i!==null;){var s=xo(i);if(s!==null&&Xy(s),s=qc(t,e,n,r),s===null&&sc(t,e,r,sl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else sc(t,e,r,null,n)}}var sl=null;function qc(t,e,n,r){if(sl=null,t=nd(r),t=br(t),t!==null)if(e=ti(t),e===null)t=null;else if(n=e.tag,n===13){if(t=By(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sl=t,null}function t_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nT()){case rd:return 1;case qy:return 4;case nl:case rT:return 16;case Gy:return 536870912;default:return 16}default:return 16}}var Qn=null,ad=null,Oa=null;function n_(){if(Oa)return Oa;var t,e=ad,n=e.length,r,i="value"in Qn?Qn.value:Qn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Oa=i.slice(t,1<r?1-r:void 0)}function Ma(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fa(){return!0}function Fp(){return!1}function Pt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fa:Fp,this.isPropagationStopped=Fp,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fa)},persist:function(){},isPersistent:fa}),e}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ld=Pt(Ji),Po=Te({},Ji,{view:0,detail:0}),gT=Pt(Po),Xu,Yu,Rs,Wl=Te({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ud,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Rs&&(Rs&&t.type==="mousemove"?(Xu=t.screenX-Rs.screenX,Yu=t.screenY-Rs.screenY):Yu=Xu=0,Rs=t),Xu)},movementY:function(t){return"movementY"in t?t.movementY:Yu}}),Up=Pt(Wl),yT=Te({},Wl,{dataTransfer:0}),_T=Pt(yT),vT=Te({},Po,{relatedTarget:0}),Ju=Pt(vT),wT=Te({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),ET=Pt(wT),TT=Te({},Ji,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),IT=Pt(TT),ST=Te({},Ji,{data:0}),jp=Pt(ST),AT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=CT[t])?!!e[t]:!1}function ud(){return RT}var PT=Te({},Po,{key:function(t){if(t.key){var e=AT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ma(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ud,charCode:function(t){return t.type==="keypress"?Ma(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ma(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xT=Pt(PT),NT=Te({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zp=Pt(NT),DT=Te({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ud}),VT=Pt(DT),OT=Te({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),MT=Pt(OT),bT=Te({},Wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),LT=Pt(bT),FT=[9,13,27,32],cd=Tn&&"CompositionEvent"in window,Bs=null;Tn&&"documentMode"in document&&(Bs=document.documentMode);var UT=Tn&&"TextEvent"in window&&!Bs,r_=Tn&&(!cd||Bs&&8<Bs&&11>=Bs),Bp=" ",$p=!1;function i_(t,e){switch(t){case"keyup":return FT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pi=!1;function jT(t,e){switch(t){case"compositionend":return s_(e);case"keypress":return e.which!==32?null:($p=!0,Bp);case"textInput":return t=e.data,t===Bp&&$p?null:t;default:return null}}function zT(t,e){if(pi)return t==="compositionend"||!cd&&i_(t,e)?(t=n_(),Oa=ad=Qn=null,pi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return r_&&e.locale!=="ko"?null:e.data;default:return null}}var BT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!BT[t.type]:e==="textarea"}function o_(t,e,n,r){Ly(r),e=ol(e,"onChange"),0<e.length&&(n=new ld("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var $s=null,ao=null;function $T(t){y_(t,0)}function ql(t){var e=yi(t);if(xy(e))return t}function HT(t,e){if(t==="change")return e}var a_=!1;if(Tn){var Zu;if(Tn){var ec="oninput"in document;if(!ec){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),ec=typeof Wp.oninput=="function"}Zu=ec}else Zu=!1;a_=Zu&&(!document.documentMode||9<document.documentMode)}function qp(){$s&&($s.detachEvent("onpropertychange",l_),ao=$s=null)}function l_(t){if(t.propertyName==="value"&&ql(ao)){var e=[];o_(e,ao,t,nd(t)),zy($T,e)}}function WT(t,e,n){t==="focusin"?(qp(),$s=e,ao=n,$s.attachEvent("onpropertychange",l_)):t==="focusout"&&qp()}function qT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(ao)}function GT(t,e){if(t==="click")return ql(e)}function KT(t,e){if(t==="input"||t==="change")return ql(e)}function QT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gt=typeof Object.is=="function"?Object.is:QT;function lo(t,e){if(Gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rc.call(e,i)||!Gt(t[i],e[i]))return!1}return!0}function Gp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kp(t,e){var n=Gp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gp(n)}}function u_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?u_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function c_(){for(var t=window,e=Za();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Za(t.document)}return e}function hd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function XT(t){var e=c_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&u_(n.ownerDocument.documentElement,n)){if(r!==null&&hd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Kp(n,s);var o=Kp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var YT=Tn&&"documentMode"in document&&11>=document.documentMode,mi=null,Gc=null,Hs=null,Kc=!1;function Qp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kc||mi==null||mi!==Za(r)||(r=mi,"selectionStart"in r&&hd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hs&&lo(Hs,r)||(Hs=r,r=ol(Gc,"onSelect"),0<r.length&&(e=new ld("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=mi)))}function pa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gi={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},tc={},h_={};Tn&&(h_=document.createElement("div").style,"AnimationEvent"in window||(delete gi.animationend.animation,delete gi.animationiteration.animation,delete gi.animationstart.animation),"TransitionEvent"in window||delete gi.transitionend.transition);function Gl(t){if(tc[t])return tc[t];if(!gi[t])return t;var e=gi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in h_)return tc[t]=e[n];return t}var d_=Gl("animationend"),f_=Gl("animationiteration"),p_=Gl("animationstart"),m_=Gl("transitionend"),g_=new Map,Xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){g_.set(t,e),ei(e,[t])}for(var nc=0;nc<Xp.length;nc++){var rc=Xp[nc],JT=rc.toLowerCase(),ZT=rc[0].toUpperCase()+rc.slice(1);Tr(JT,"on"+ZT)}Tr(d_,"onAnimationEnd");Tr(f_,"onAnimationIteration");Tr(p_,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(m_,"onTransitionEnd");bi("onMouseEnter",["mouseout","mouseover"]);bi("onMouseLeave",["mouseout","mouseover"]);bi("onPointerEnter",["pointerout","pointerover"]);bi("onPointerLeave",["pointerout","pointerover"]);ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ms));function Yp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,JE(r,e,void 0,t),t.currentTarget=null}function y_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Yp(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Yp(i,l,h),s=u}}}if(tl)throw t=$c,tl=!1,$c=null,t}function fe(t,e){var n=e[Zc];n===void 0&&(n=e[Zc]=new Set);var r=t+"__bubble";n.has(r)||(__(e,t,2,!1),n.add(r))}function ic(t,e,n){var r=0;e&&(r|=4),__(n,t,r,e)}var ma="_reactListening"+Math.random().toString(36).slice(2);function uo(t){if(!t[ma]){t[ma]=!0,Ay.forEach(function(n){n!=="selectionchange"&&(e1.has(n)||ic(n,!1,t),ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ma]||(e[ma]=!0,ic("selectionchange",!1,e))}}function __(t,e,n,r){switch(t_(e)){case 1:var i=pT;break;case 4:i=mT;break;default:i=od}n=i.bind(null,e,n,t),i=void 0,!Bc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function sc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=br(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}zy(function(){var h=s,f=nd(n),p=[];e:{var g=g_.get(t);if(g!==void 0){var k=ld,P=t;switch(t){case"keypress":if(Ma(n)===0)break e;case"keydown":case"keyup":k=xT;break;case"focusin":P="focus",k=Ju;break;case"focusout":P="blur",k=Ju;break;case"beforeblur":case"afterblur":k=Ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=_T;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=VT;break;case d_:case f_:case p_:k=ET;break;case m_:k=MT;break;case"scroll":k=gT;break;case"wheel":k=LT;break;case"copy":case"cut":case"paste":k=IT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=zp}var D=(e&4)!==0,M=!D&&t==="scroll",I=D?g!==null?g+"Capture":null:g;D=[];for(var w=h,A;w!==null;){A=w;var V=A.stateNode;if(A.tag===5&&V!==null&&(A=V,I!==null&&(V=ro(w,I),V!=null&&D.push(co(w,V,A)))),M)break;w=w.return}0<D.length&&(g=new k(g,P,null,n,f),p.push({event:g,listeners:D}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",g&&n!==jc&&(P=n.relatedTarget||n.fromElement)&&(br(P)||P[In]))break e;if((k||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,k?(P=n.relatedTarget||n.toElement,k=h,P=P?br(P):null,P!==null&&(M=ti(P),P!==M||P.tag!==5&&P.tag!==6)&&(P=null)):(k=null,P=h),k!==P)){if(D=Up,V="onMouseLeave",I="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(D=zp,V="onPointerLeave",I="onPointerEnter",w="pointer"),M=k==null?g:yi(k),A=P==null?g:yi(P),g=new D(V,w+"leave",k,n,f),g.target=M,g.relatedTarget=A,V=null,br(f)===h&&(D=new D(I,w+"enter",P,n,f),D.target=A,D.relatedTarget=M,V=D),M=V,k&&P)t:{for(D=k,I=P,w=0,A=D;A;A=ai(A))w++;for(A=0,V=I;V;V=ai(V))A++;for(;0<w-A;)D=ai(D),w--;for(;0<A-w;)I=ai(I),A--;for(;w--;){if(D===I||I!==null&&D===I.alternate)break t;D=ai(D),I=ai(I)}D=null}else D=null;k!==null&&Jp(p,g,k,D,!1),P!==null&&M!==null&&Jp(p,M,P,D,!0)}}e:{if(g=h?yi(h):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var U=HT;else if(Hp(g))if(a_)U=KT;else{U=qT;var F=WT}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(U=GT);if(U&&(U=U(t,h))){o_(p,U,n,f);break e}F&&F(t,g,h),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&Mc(g,"number",g.value)}switch(F=h?yi(h):window,t){case"focusin":(Hp(F)||F.contentEditable==="true")&&(mi=F,Gc=h,Hs=null);break;case"focusout":Hs=Gc=mi=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,Qp(p,n,f);break;case"selectionchange":if(YT)break;case"keydown":case"keyup":Qp(p,n,f)}var _;if(cd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else pi?i_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(r_&&n.locale!=="ko"&&(pi||y!=="onCompositionStart"?y==="onCompositionEnd"&&pi&&(_=n_()):(Qn=f,ad="value"in Qn?Qn.value:Qn.textContent,pi=!0)),F=ol(h,y),0<F.length&&(y=new jp(y,t,null,n,f),p.push({event:y,listeners:F}),_?y.data=_:(_=s_(n),_!==null&&(y.data=_)))),(_=UT?jT(t,n):zT(t,n))&&(h=ol(h,"onBeforeInput"),0<h.length&&(f=new jp("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=_))}y_(p,e)})}function co(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ol(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ro(t,n),s!=null&&r.unshift(co(t,s,i)),s=ro(t,e),s!=null&&r.push(co(t,s,i))),t=t.return}return r}function ai(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=ro(n,s),u!=null&&o.unshift(co(n,u,l))):i||(u=ro(n,s),u!=null&&o.push(co(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var t1=/\r\n?/g,n1=/\u0000|\uFFFD/g;function Zp(t){return(typeof t=="string"?t:""+t).replace(t1,`
`).replace(n1,"")}function ga(t,e,n){if(e=Zp(e),Zp(t)!==e&&n)throw Error(L(425))}function al(){}var Qc=null,Xc=null;function Yc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,r1=typeof clearTimeout=="function"?clearTimeout:void 0,em=typeof Promise=="function"?Promise:void 0,i1=typeof queueMicrotask=="function"?queueMicrotask:typeof em<"u"?function(t){return em.resolve(null).then(t).catch(s1)}:Jc;function s1(t){setTimeout(function(){throw t})}function oc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),oo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);oo(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zi=Math.random().toString(36).slice(2),nn="__reactFiber$"+Zi,ho="__reactProps$"+Zi,In="__reactContainer$"+Zi,Zc="__reactEvents$"+Zi,o1="__reactListeners$"+Zi,a1="__reactHandles$"+Zi;function br(t){var e=t[nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[In]||n[nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tm(t);t!==null;){if(n=t[nn])return n;t=tm(t)}return e}t=n,n=t.parentNode}return null}function xo(t){return t=t[nn]||t[In],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function yi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function Kl(t){return t[ho]||null}var eh=[],_i=-1;function Ir(t){return{current:t}}function ge(t){0>_i||(t.current=eh[_i],eh[_i]=null,_i--)}function ce(t,e){_i++,eh[_i]=t.current,t.current=e}var pr={},rt=Ir(pr),vt=Ir(!1),Hr=pr;function Li(t,e){var n=t.type.contextTypes;if(!n)return pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wt(t){return t=t.childContextTypes,t!=null}function ll(){ge(vt),ge(rt)}function nm(t,e,n){if(rt.current!==pr)throw Error(L(168));ce(rt,e),ce(vt,n)}function v_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,WE(t)||"Unknown",i));return Te({},n,r)}function ul(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Hr=rt.current,ce(rt,t),ce(vt,vt.current),!0}function rm(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=v_(t,e,Hr),r.__reactInternalMemoizedMergedChildContext=t,ge(vt),ge(rt),ce(rt,t)):ge(vt),ce(vt,n)}var gn=null,Ql=!1,ac=!1;function w_(t){gn===null?gn=[t]:gn.push(t)}function l1(t){Ql=!0,w_(t)}function Sr(){if(!ac&&gn!==null){ac=!0;var t=0,e=ae;try{var n=gn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gn=null,Ql=!1}catch(i){throw gn!==null&&(gn=gn.slice(t+1)),Wy(rd,Sr),i}finally{ae=e,ac=!1}}return null}var vi=[],wi=0,cl=null,hl=0,xt=[],Nt=0,Wr=null,yn=1,_n="";function Vr(t,e){vi[wi++]=hl,vi[wi++]=cl,cl=t,hl=e}function E_(t,e,n){xt[Nt++]=yn,xt[Nt++]=_n,xt[Nt++]=Wr,Wr=t;var r=yn;t=_n;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var s=32-Ht(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yn=1<<32-Ht(e)+i|n<<i|r,_n=s+t}else yn=1<<s|n<<i|r,_n=t}function dd(t){t.return!==null&&(Vr(t,1),E_(t,1,0))}function fd(t){for(;t===cl;)cl=vi[--wi],vi[wi]=null,hl=vi[--wi],vi[wi]=null;for(;t===Wr;)Wr=xt[--Nt],xt[Nt]=null,_n=xt[--Nt],xt[Nt]=null,yn=xt[--Nt],xt[Nt]=null}var kt=null,St=null,ve=!1,zt=null;function T_(t,e){var n=Vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function im(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,St=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,St=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:yn,overflow:_n}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,St=null,!0):!1;default:return!1}}function th(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nh(t){if(ve){var e=St;if(e){var n=e;if(!im(t,e)){if(th(t))throw Error(L(418));e=tr(n.nextSibling);var r=kt;e&&im(t,e)?T_(r,n):(t.flags=t.flags&-4097|2,ve=!1,kt=t)}}else{if(th(t))throw Error(L(418));t.flags=t.flags&-4097|2,ve=!1,kt=t}}}function sm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function ya(t){if(t!==kt)return!1;if(!ve)return sm(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yc(t.type,t.memoizedProps)),e&&(e=St)){if(th(t))throw I_(),Error(L(418));for(;e;)T_(t,e),e=tr(e.nextSibling)}if(sm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){St=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}St=null}}else St=kt?tr(t.stateNode.nextSibling):null;return!0}function I_(){for(var t=St;t;)t=tr(t.nextSibling)}function Fi(){St=kt=null,ve=!1}function pd(t){zt===null?zt=[t]:zt.push(t)}var u1=Nn.ReactCurrentBatchConfig;function Ps(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function _a(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function om(t){var e=t._init;return e(t._payload)}function S_(t){function e(I,w){if(t){var A=I.deletions;A===null?(I.deletions=[w],I.flags|=16):A.push(w)}}function n(I,w){if(!t)return null;for(;w!==null;)e(I,w),w=w.sibling;return null}function r(I,w){for(I=new Map;w!==null;)w.key!==null?I.set(w.key,w):I.set(w.index,w),w=w.sibling;return I}function i(I,w){return I=sr(I,w),I.index=0,I.sibling=null,I}function s(I,w,A){return I.index=A,t?(A=I.alternate,A!==null?(A=A.index,A<w?(I.flags|=2,w):A):(I.flags|=2,w)):(I.flags|=1048576,w)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,w,A,V){return w===null||w.tag!==6?(w=pc(A,I.mode,V),w.return=I,w):(w=i(w,A),w.return=I,w)}function u(I,w,A,V){var U=A.type;return U===fi?f(I,w,A.props.children,V,A.key):w!==null&&(w.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===zn&&om(U)===w.type)?(V=i(w,A.props),V.ref=Ps(I,w,A),V.return=I,V):(V=Ba(A.type,A.key,A.props,null,I.mode,V),V.ref=Ps(I,w,A),V.return=I,V)}function h(I,w,A,V){return w===null||w.tag!==4||w.stateNode.containerInfo!==A.containerInfo||w.stateNode.implementation!==A.implementation?(w=mc(A,I.mode,V),w.return=I,w):(w=i(w,A.children||[]),w.return=I,w)}function f(I,w,A,V,U){return w===null||w.tag!==7?(w=zr(A,I.mode,V,U),w.return=I,w):(w=i(w,A),w.return=I,w)}function p(I,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return w=pc(""+w,I.mode,A),w.return=I,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case aa:return A=Ba(w.type,w.key,w.props,null,I.mode,A),A.ref=Ps(I,null,w),A.return=I,A;case di:return w=mc(w,I.mode,A),w.return=I,w;case zn:var V=w._init;return p(I,V(w._payload),A)}if(Vs(w)||Ss(w))return w=zr(w,I.mode,A,null),w.return=I,w;_a(I,w)}return null}function g(I,w,A,V){var U=w!==null?w.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return U!==null?null:l(I,w,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case aa:return A.key===U?u(I,w,A,V):null;case di:return A.key===U?h(I,w,A,V):null;case zn:return U=A._init,g(I,w,U(A._payload),V)}if(Vs(A)||Ss(A))return U!==null?null:f(I,w,A,V,null);_a(I,A)}return null}function k(I,w,A,V,U){if(typeof V=="string"&&V!==""||typeof V=="number")return I=I.get(A)||null,l(w,I,""+V,U);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case aa:return I=I.get(V.key===null?A:V.key)||null,u(w,I,V,U);case di:return I=I.get(V.key===null?A:V.key)||null,h(w,I,V,U);case zn:var F=V._init;return k(I,w,A,F(V._payload),U)}if(Vs(V)||Ss(V))return I=I.get(A)||null,f(w,I,V,U,null);_a(w,V)}return null}function P(I,w,A,V){for(var U=null,F=null,_=w,y=w=0,v=null;_!==null&&y<A.length;y++){_.index>y?(v=_,_=null):v=_.sibling;var T=g(I,_,A[y],V);if(T===null){_===null&&(_=v);break}t&&_&&T.alternate===null&&e(I,_),w=s(T,w,y),F===null?U=T:F.sibling=T,F=T,_=v}if(y===A.length)return n(I,_),ve&&Vr(I,y),U;if(_===null){for(;y<A.length;y++)_=p(I,A[y],V),_!==null&&(w=s(_,w,y),F===null?U=_:F.sibling=_,F=_);return ve&&Vr(I,y),U}for(_=r(I,_);y<A.length;y++)v=k(_,I,y,A[y],V),v!==null&&(t&&v.alternate!==null&&_.delete(v.key===null?y:v.key),w=s(v,w,y),F===null?U=v:F.sibling=v,F=v);return t&&_.forEach(function(S){return e(I,S)}),ve&&Vr(I,y),U}function D(I,w,A,V){var U=Ss(A);if(typeof U!="function")throw Error(L(150));if(A=U.call(A),A==null)throw Error(L(151));for(var F=U=null,_=w,y=w=0,v=null,T=A.next();_!==null&&!T.done;y++,T=A.next()){_.index>y?(v=_,_=null):v=_.sibling;var S=g(I,_,T.value,V);if(S===null){_===null&&(_=v);break}t&&_&&S.alternate===null&&e(I,_),w=s(S,w,y),F===null?U=S:F.sibling=S,F=S,_=v}if(T.done)return n(I,_),ve&&Vr(I,y),U;if(_===null){for(;!T.done;y++,T=A.next())T=p(I,T.value,V),T!==null&&(w=s(T,w,y),F===null?U=T:F.sibling=T,F=T);return ve&&Vr(I,y),U}for(_=r(I,_);!T.done;y++,T=A.next())T=k(_,I,y,T.value,V),T!==null&&(t&&T.alternate!==null&&_.delete(T.key===null?y:T.key),w=s(T,w,y),F===null?U=T:F.sibling=T,F=T);return t&&_.forEach(function(C){return e(I,C)}),ve&&Vr(I,y),U}function M(I,w,A,V){if(typeof A=="object"&&A!==null&&A.type===fi&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case aa:e:{for(var U=A.key,F=w;F!==null;){if(F.key===U){if(U=A.type,U===fi){if(F.tag===7){n(I,F.sibling),w=i(F,A.props.children),w.return=I,I=w;break e}}else if(F.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===zn&&om(U)===F.type){n(I,F.sibling),w=i(F,A.props),w.ref=Ps(I,F,A),w.return=I,I=w;break e}n(I,F);break}else e(I,F);F=F.sibling}A.type===fi?(w=zr(A.props.children,I.mode,V,A.key),w.return=I,I=w):(V=Ba(A.type,A.key,A.props,null,I.mode,V),V.ref=Ps(I,w,A),V.return=I,I=V)}return o(I);case di:e:{for(F=A.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===A.containerInfo&&w.stateNode.implementation===A.implementation){n(I,w.sibling),w=i(w,A.children||[]),w.return=I,I=w;break e}else{n(I,w);break}else e(I,w);w=w.sibling}w=mc(A,I.mode,V),w.return=I,I=w}return o(I);case zn:return F=A._init,M(I,w,F(A._payload),V)}if(Vs(A))return P(I,w,A,V);if(Ss(A))return D(I,w,A,V);_a(I,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,w!==null&&w.tag===6?(n(I,w.sibling),w=i(w,A),w.return=I,I=w):(n(I,w),w=pc(A,I.mode,V),w.return=I,I=w),o(I)):n(I,w)}return M}var Ui=S_(!0),A_=S_(!1),dl=Ir(null),fl=null,Ei=null,md=null;function gd(){md=Ei=fl=null}function yd(t){var e=dl.current;ge(dl),t._currentValue=e}function rh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Pi(t,e){fl=t,md=Ei=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_t=!0),t.firstContext=null)}function Mt(t){var e=t._currentValue;if(md!==t)if(t={context:t,memoizedValue:e,next:null},Ei===null){if(fl===null)throw Error(L(308));Ei=t,fl.dependencies={lanes:0,firstContext:t}}else Ei=Ei.next=t;return e}var Lr=null;function _d(t){Lr===null?Lr=[t]:Lr.push(t)}function k_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,_d(e)):(n.next=i.next,i.next=n),e.interleaved=n,Sn(t,r)}function Sn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bn=!1;function vd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function C_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function En(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Sn(t,n)}return i=r.interleaved,i===null?(e.next=e,_d(r)):(e.next=i.next,i.next=e),r.interleaved=e,Sn(t,n)}function ba(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,id(t,n)}}function am(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pl(t,e,n,r){var i=t.updateQueue;Bn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var g=l.lane,k=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,D=l;switch(g=e,k=n,D.tag){case 1:if(P=D.payload,typeof P=="function"){p=P.call(k,p,g);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=D.payload,g=typeof P=="function"?P.call(k,p,g):P,g==null)break e;p=Te({},p,g);break e;case 2:Bn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else k={eventTime:k,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=k,u=p):f=f.next=k,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Gr|=o,t.lanes=o,t.memoizedState=p}}function lm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var No={},sn=Ir(No),fo=Ir(No),po=Ir(No);function Fr(t){if(t===No)throw Error(L(174));return t}function wd(t,e){switch(ce(po,e),ce(fo,t),ce(sn,No),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lc(e,t)}ge(sn),ce(sn,e)}function ji(){ge(sn),ge(fo),ge(po)}function R_(t){Fr(po.current);var e=Fr(sn.current),n=Lc(e,t.type);e!==n&&(ce(fo,t),ce(sn,n))}function Ed(t){fo.current===t&&(ge(sn),ge(fo))}var we=Ir(0);function ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var lc=[];function Td(){for(var t=0;t<lc.length;t++)lc[t]._workInProgressVersionPrimary=null;lc.length=0}var La=Nn.ReactCurrentDispatcher,uc=Nn.ReactCurrentBatchConfig,qr=0,Ee=null,Oe=null,ze=null,gl=!1,Ws=!1,mo=0,c1=0;function Ye(){throw Error(L(321))}function Id(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gt(t[n],e[n]))return!1;return!0}function Sd(t,e,n,r,i,s){if(qr=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,La.current=t===null||t.memoizedState===null?p1:m1,t=n(r,i),Ws){s=0;do{if(Ws=!1,mo=0,25<=s)throw Error(L(301));s+=1,ze=Oe=null,e.updateQueue=null,La.current=g1,t=n(r,i)}while(Ws)}if(La.current=yl,e=Oe!==null&&Oe.next!==null,qr=0,ze=Oe=Ee=null,gl=!1,e)throw Error(L(300));return t}function Ad(){var t=mo!==0;return mo=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Ee.memoizedState=ze=t:ze=ze.next=t,ze}function bt(){if(Oe===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=ze===null?Ee.memoizedState:ze.next;if(e!==null)ze=e,Oe=t;else{if(t===null)throw Error(L(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},ze===null?Ee.memoizedState=ze=t:ze=ze.next=t}return ze}function go(t,e){return typeof e=="function"?e(t):e}function cc(t){var e=bt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((qr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ee.lanes|=f,Gr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Gt(r,e.memoizedState)||(_t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,Gr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hc(t){var e=bt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Gt(s,e.memoizedState)||(_t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function P_(){}function x_(t,e){var n=Ee,r=bt(),i=e(),s=!Gt(r.memoizedState,i);if(s&&(r.memoizedState=i,_t=!0),r=r.queue,kd(V_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,yo(9,D_.bind(null,n,r,i,e),void 0,null),Be===null)throw Error(L(349));qr&30||N_(n,e,i)}return i}function N_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function D_(t,e,n,r){e.value=n,e.getSnapshot=r,O_(e)&&M_(t)}function V_(t,e,n){return n(function(){O_(e)&&M_(t)})}function O_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gt(t,n)}catch{return!0}}function M_(t){var e=Sn(t,1);e!==null&&Wt(e,t,1,-1)}function um(t){var e=en();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:t},e.queue=t,t=t.dispatch=f1.bind(null,Ee,t),[e.memoizedState,t]}function yo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function b_(){return bt().memoizedState}function Fa(t,e,n,r){var i=en();Ee.flags|=t,i.memoizedState=yo(1|e,n,void 0,r===void 0?null:r)}function Xl(t,e,n,r){var i=bt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&Id(r,o.deps)){i.memoizedState=yo(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=yo(1|e,n,s,r)}function cm(t,e){return Fa(8390656,8,t,e)}function kd(t,e){return Xl(2048,8,t,e)}function L_(t,e){return Xl(4,2,t,e)}function F_(t,e){return Xl(4,4,t,e)}function U_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function j_(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4,4,U_.bind(null,e,t),n)}function Cd(){}function z_(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Id(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function B_(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Id(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function $_(t,e,n){return qr&21?(Gt(n,e)||(n=Ky(),Ee.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=n)}function h1(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=uc.transition;uc.transition={};try{t(!1),e()}finally{ae=n,uc.transition=r}}function H_(){return bt().memoizedState}function d1(t,e,n){var r=ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},W_(t))q_(e,n);else if(n=k_(t,e,n,r),n!==null){var i=ct();Wt(n,t,r,i),G_(n,e,r)}}function f1(t,e,n){var r=ir(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(W_(t))q_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Gt(l,o)){var u=e.interleaved;u===null?(i.next=i,_d(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=k_(t,e,i,r),n!==null&&(i=ct(),Wt(n,t,r,i),G_(n,e,r))}}function W_(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function q_(t,e){Ws=gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function G_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,id(t,n)}}var yl={readContext:Mt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},p1={readContext:Mt,useCallback:function(t,e){return en().memoizedState=[t,e===void 0?null:e],t},useContext:Mt,useEffect:cm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fa(4194308,4,U_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fa(4,2,t,e)},useMemo:function(t,e){var n=en();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=en();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=d1.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=en();return t={current:t},e.memoizedState=t},useState:um,useDebugValue:Cd,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=um(!1),e=t[0];return t=h1.bind(null,t[1]),en().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=en();if(ve){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),Be===null)throw Error(L(349));qr&30||N_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,cm(V_.bind(null,r,s,t),[t]),r.flags|=2048,yo(9,D_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=en(),e=Be.identifierPrefix;if(ve){var n=_n,r=yn;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=mo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=c1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},m1={readContext:Mt,useCallback:z_,useContext:Mt,useEffect:kd,useImperativeHandle:j_,useInsertionEffect:L_,useLayoutEffect:F_,useMemo:B_,useReducer:cc,useRef:b_,useState:function(){return cc(go)},useDebugValue:Cd,useDeferredValue:function(t){var e=bt();return $_(e,Oe.memoizedState,t)},useTransition:function(){var t=cc(go)[0],e=bt().memoizedState;return[t,e]},useMutableSource:P_,useSyncExternalStore:x_,useId:H_,unstable_isNewReconciler:!1},g1={readContext:Mt,useCallback:z_,useContext:Mt,useEffect:kd,useImperativeHandle:j_,useInsertionEffect:L_,useLayoutEffect:F_,useMemo:B_,useReducer:hc,useRef:b_,useState:function(){return hc(go)},useDebugValue:Cd,useDeferredValue:function(t){var e=bt();return Oe===null?e.memoizedState=t:$_(e,Oe.memoizedState,t)},useTransition:function(){var t=hc(go)[0],e=bt().memoizedState;return[t,e]},useMutableSource:P_,useSyncExternalStore:x_,useId:H_,unstable_isNewReconciler:!1};function Ut(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ih(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yl={isMounted:function(t){return(t=t._reactInternals)?ti(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ct(),i=ir(t),s=En(r,i);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,i),e!==null&&(Wt(e,t,i,r),ba(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ct(),i=ir(t),s=En(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,i),e!==null&&(Wt(e,t,i,r),ba(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ct(),r=ir(t),i=En(n,r);i.tag=2,e!=null&&(i.callback=e),e=nr(t,i,r),e!==null&&(Wt(e,t,r,n),ba(e,t,r))}};function hm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!lo(n,r)||!lo(i,s):!0}function K_(t,e,n){var r=!1,i=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Mt(s):(i=wt(e)?Hr:rt.current,r=e.contextTypes,s=(r=r!=null)?Li(t,i):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function dm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yl.enqueueReplaceState(e,e.state,null)}function sh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},vd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Mt(s):(s=wt(e)?Hr:rt.current,i.context=Li(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ih(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Yl.enqueueReplaceState(i,i.state,null),pl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function zi(t,e){try{var n="",r=e;do n+=HE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function oh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var y1=typeof WeakMap=="function"?WeakMap:Map;function Q_(t,e,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){vl||(vl=!0,gh=r),oh(t,e)},n}function X_(t,e,n){n=En(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){oh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){oh(t,e),typeof r!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function fm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new y1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=N1.bind(null,t,e,n),e.then(t,t))}function pm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=En(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var _1=Nn.ReactCurrentOwner,_t=!1;function ut(t,e,n,r){e.child=t===null?A_(e,null,n,r):Ui(e,t.child,n,r)}function gm(t,e,n,r,i){n=n.render;var s=e.ref;return Pi(e,i),r=Sd(t,e,n,r,s,i),n=Ad(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(ve&&n&&dd(e),e.flags|=1,ut(t,e,r,i),e.child)}function ym(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Md(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Y_(t,e,s,r,i)):(t=Ba(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:lo,n(o,r)&&t.ref===e.ref)return An(t,e,i)}return e.flags|=1,t=sr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Y_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(lo(s,r)&&t.ref===e.ref)if(_t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,An(t,e,i)}return ah(t,e,n,r,i)}function J_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Ii,It),It|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Ii,It),It|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Ii,It),It|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Ii,It),It|=r;return ut(t,e,i,n),e.child}function Z_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ah(t,e,n,r,i){var s=wt(n)?Hr:rt.current;return s=Li(e,s),Pi(e,i),n=Sd(t,e,n,r,s,i),r=Ad(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(ve&&r&&dd(e),e.flags|=1,ut(t,e,n,i),e.child)}function _m(t,e,n,r,i){if(wt(n)){var s=!0;ul(e)}else s=!1;if(Pi(e,i),e.stateNode===null)Ua(t,e),K_(e,n,r),sh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Mt(h):(h=wt(n)?Hr:rt.current,h=Li(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&dm(e,o,r,h),Bn=!1;var g=e.memoizedState;o.state=g,pl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||vt.current||Bn?(typeof f=="function"&&(ih(e,n,f,r),u=e.memoizedState),(l=Bn||hm(e,n,l,r,g,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,C_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Ut(e.type,l),o.props=h,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Mt(u):(u=wt(n)?Hr:rt.current,u=Li(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&dm(e,o,r,u),Bn=!1,g=e.memoizedState,o.state=g,pl(e,r,o,i);var P=e.memoizedState;l!==p||g!==P||vt.current||Bn?(typeof k=="function"&&(ih(e,n,k,r),P=e.memoizedState),(h=Bn||hm(e,n,h,r,g,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return lh(t,e,n,r,s,i)}function lh(t,e,n,r,i,s){Z_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&rm(e,n,!1),An(t,e,s);r=e.stateNode,_1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ui(e,t.child,null,s),e.child=Ui(e,null,l,s)):ut(t,e,l,s),e.memoizedState=r.state,i&&rm(e,n,!0),e.child}function ev(t){var e=t.stateNode;e.pendingContext?nm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&nm(t,e.context,!1),wd(t,e.containerInfo)}function vm(t,e,n,r,i){return Fi(),pd(i),e.flags|=256,ut(t,e,n,r),e.child}var uh={dehydrated:null,treeContext:null,retryLane:0};function ch(t){return{baseLanes:t,cachePool:null,transitions:null}}function tv(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(we,i&1),t===null)return nh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=eu(o,r,0,null),t=zr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ch(n),e.memoizedState=uh,t):Rd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return v1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=sr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=sr(l,s):(s=zr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ch(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=uh,r}return s=t.child,t=s.sibling,r=sr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rd(t,e){return e=eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function va(t,e,n,r){return r!==null&&pd(r),Ui(e,t.child,null,n),t=Rd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function v1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=dc(Error(L(422))),va(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=eu({mode:"visible",children:r.children},i,0,null),s=zr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ui(e,t.child,null,o),e.child.memoizedState=ch(o),e.memoizedState=uh,s);if(!(e.mode&1))return va(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(L(419)),r=dc(s,r,void 0),va(t,e,o,r)}if(l=(o&t.childLanes)!==0,_t||l){if(r=Be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Sn(t,i),Wt(r,t,i,-1))}return Od(),r=dc(Error(L(421))),va(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=D1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,St=tr(i.nextSibling),kt=e,ve=!0,zt=null,t!==null&&(xt[Nt++]=yn,xt[Nt++]=_n,xt[Nt++]=Wr,yn=t.id,_n=t.overflow,Wr=e),e=Rd(e,r.children),e.flags|=4096,e)}function wm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rh(t.return,e,n)}function fc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function nv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ut(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wm(t,n,e);else if(t.tag===19)wm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ml(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),fc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ml(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}fc(e,!0,n,null,s);break;case"together":fc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ua(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function An(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function w1(t,e,n){switch(e.tag){case 3:ev(e),Fi();break;case 5:R_(e);break;case 1:wt(e.type)&&ul(e);break;case 4:wd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(dl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?tv(t,e,n):(ce(we,we.current&1),t=An(t,e,n),t!==null?t.sibling:null);ce(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return nv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,J_(t,e,n)}return An(t,e,n)}var rv,hh,iv,sv;rv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hh=function(){};iv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Fr(sn.current);var s=null;switch(n){case"input":i=Vc(t,i),r=Vc(t,r),s=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),s=[];break;case"textarea":i=bc(t,i),r=bc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=al)}Fc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(to.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(to.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&fe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};sv=function(t,e,n,r){n!==r&&(e.flags|=4)};function xs(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function E1(t,e,n){var r=e.pendingProps;switch(fd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return wt(e.type)&&ll(),Je(e),null;case 3:return r=e.stateNode,ji(),ge(vt),ge(rt),Td(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zt!==null&&(vh(zt),zt=null))),hh(t,e),Je(e),null;case 5:Ed(e);var i=Fr(po.current);if(n=e.type,t!==null&&e.stateNode!=null)iv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return Je(e),null}if(t=Fr(sn.current),ya(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[nn]=e,r[ho]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<Ms.length;i++)fe(Ms[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":Pp(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":Np(r,s),fe("invalid",r)}Fc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ga(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ga(r.textContent,l,t),i=["children",""+l]):to.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":la(r),xp(r,s,!0);break;case"textarea":la(r),Dp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=al)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[nn]=e,t[ho]=r,rv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Uc(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ms.length;i++)fe(Ms[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":Pp(t,r),i=Vc(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),fe("invalid",t);break;case"textarea":Np(t,r),i=bc(t,r),fe("invalid",t);break;default:i=r}Fc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?by(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Oy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&no(t,u):typeof u=="number"&&no(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(to.hasOwnProperty(s)?u!=null&&s==="onScroll"&&fe("scroll",t):u!=null&&Jh(t,s,u,o))}switch(n){case"input":la(t),xp(t,r,!1);break;case"textarea":la(t),Dp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ai(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ai(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)sv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=Fr(po.current),Fr(sn.current),ya(e)){if(r=e.stateNode,n=e.memoizedProps,r[nn]=e,(s=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:ga(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ga(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nn]=e,e.stateNode=r}return Je(e),null;case 13:if(ge(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&St!==null&&e.mode&1&&!(e.flags&128))I_(),Fi(),e.flags|=98560,s=!1;else if(s=ya(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[nn]=e}else Fi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else zt!==null&&(vh(zt),zt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?be===0&&(be=3):Od())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return ji(),hh(t,e),t===null&&uo(e.stateNode.containerInfo),Je(e),null;case 10:return yd(e.type._context),Je(e),null;case 17:return wt(e.type)&&ll(),Je(e),null;case 19:if(ge(we),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)xs(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ml(t),o!==null){for(e.flags|=128,xs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>Bi&&(e.flags|=128,r=!0,xs(s,!1),e.lanes=4194304)}else{if(!r)if(t=ml(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return Je(e),null}else 2*Re()-s.renderingStartTime>Bi&&n!==1073741824&&(e.flags|=128,r=!0,xs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=we.current,ce(we,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return Vd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?It&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function T1(t,e){switch(fd(e),e.tag){case 1:return wt(e.type)&&ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ji(),ge(vt),ge(rt),Td(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ed(e),null;case 13:if(ge(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));Fi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(we),null;case 4:return ji(),null;case 10:return yd(e.type._context),null;case 22:case 23:return Vd(),null;case 24:return null;default:return null}}var wa=!1,tt=!1,I1=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ti(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function dh(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var Em=!1;function S1(t,e){if(Qc=il,t=c_(),hd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,g=null;t:for(;;){for(var k;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(k=p.firstChild)!==null;)g=p,p=k;for(;;){if(p===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++f===r&&(u=o),(k=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xc={focusedElem:t,selectionRange:n},il=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var D=P.memoizedProps,M=P.memoizedState,I=e.stateNode,w=I.getSnapshotBeforeUpdate(e.elementType===e.type?D:Ut(e.type,D),M);I.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(V){Ae(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return P=Em,Em=!1,P}function qs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&dh(e,n,s)}i=i.next}while(i!==r)}}function Jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function fh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ov(t){var e=t.alternate;e!==null&&(t.alternate=null,ov(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[nn],delete e[ho],delete e[Zc],delete e[o1],delete e[a1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function av(t){return t.tag===5||t.tag===3||t.tag===4}function Tm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||av(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ph(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=al));else if(r!==4&&(t=t.child,t!==null))for(ph(t,e,n),t=t.sibling;t!==null;)ph(t,e,n),t=t.sibling}function mh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(mh(t,e,n),t=t.sibling;t!==null;)mh(t,e,n),t=t.sibling}var We=null,jt=!1;function Un(t,e,n){for(n=n.child;n!==null;)lv(t,e,n),n=n.sibling}function lv(t,e,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Hl,n)}catch{}switch(n.tag){case 5:tt||Ti(n,e);case 6:var r=We,i=jt;We=null,Un(t,e,n),We=r,jt=i,We!==null&&(jt?(t=We,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(jt?(t=We,n=n.stateNode,t.nodeType===8?oc(t.parentNode,n):t.nodeType===1&&oc(t,n),oo(t)):oc(We,n.stateNode));break;case 4:r=We,i=jt,We=n.stateNode.containerInfo,jt=!0,Un(t,e,n),We=r,jt=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&dh(n,e,o),i=i.next}while(i!==r)}Un(t,e,n);break;case 1:if(!tt&&(Ti(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,e,l)}Un(t,e,n);break;case 21:Un(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Un(t,e,n),tt=r):Un(t,e,n);break;default:Un(t,e,n)}}function Im(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new I1),e.forEach(function(r){var i=V1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:We=l.stateNode,jt=!1;break e;case 3:We=l.stateNode.containerInfo,jt=!0;break e;case 4:We=l.stateNode.containerInfo,jt=!0;break e}l=l.return}if(We===null)throw Error(L(160));lv(s,o,i),We=null,jt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ae(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)uv(e,t),e=e.sibling}function uv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ft(e,t),Zt(t),r&4){try{qs(3,t,t.return),Jl(3,t)}catch(D){Ae(t,t.return,D)}try{qs(5,t,t.return)}catch(D){Ae(t,t.return,D)}}break;case 1:Ft(e,t),Zt(t),r&512&&n!==null&&Ti(n,n.return);break;case 5:if(Ft(e,t),Zt(t),r&512&&n!==null&&Ti(n,n.return),t.flags&32){var i=t.stateNode;try{no(i,"")}catch(D){Ae(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ny(i,s),Uc(l,o);var h=Uc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?by(i,p):f==="dangerouslySetInnerHTML"?Oy(i,p):f==="children"?no(i,p):Jh(i,f,p,h)}switch(l){case"input":Oc(i,s);break;case"textarea":Dy(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var k=s.value;k!=null?Ai(i,!!s.multiple,k,!1):g!==!!s.multiple&&(s.defaultValue!=null?Ai(i,!!s.multiple,s.defaultValue,!0):Ai(i,!!s.multiple,s.multiple?[]:"",!1))}i[ho]=s}catch(D){Ae(t,t.return,D)}}break;case 6:if(Ft(e,t),Zt(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){Ae(t,t.return,D)}}break;case 3:if(Ft(e,t),Zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oo(e.containerInfo)}catch(D){Ae(t,t.return,D)}break;case 4:Ft(e,t),Zt(t);break;case 13:Ft(e,t),Zt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Nd=Re())),r&4&&Im(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(h=tt)||f,Ft(e,t),tt=h):Ft(e,t),Zt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(p=$=f;$!==null;){switch(g=$,k=g.child,g.tag){case 0:case 11:case 14:case 15:qs(4,g,g.return);break;case 1:Ti(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(D){Ae(r,n,D)}}break;case 5:Ti(g,g.return);break;case 22:if(g.memoizedState!==null){Am(p);continue}}k!==null?(k.return=g,$=k):Am(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=My("display",o))}catch(D){Ae(t,t.return,D)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(D){Ae(t,t.return,D)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ft(e,t),Zt(t),r&4&&Im(t);break;case 21:break;default:Ft(e,t),Zt(t)}}function Zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(av(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(no(i,""),r.flags&=-33);var s=Tm(t);mh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Tm(t);ph(t,l,o);break;default:throw Error(L(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function A1(t,e,n){$=t,cv(t)}function cv(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||wa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||tt;l=wa;var h=tt;if(wa=o,(tt=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?km(i):u!==null?(u.return=o,$=u):km(i);for(;s!==null;)$=s,cv(s),s=s.sibling;$=i,wa=l,tt=h}Sm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Sm(t)}}function Sm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||Jl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&oo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}tt||e.flags&512&&fh(e)}catch(g){Ae(e,e.return,g)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Am(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function km(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jl(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ae(e,i,u)}}var s=e.return;try{fh(e)}catch(u){Ae(e,s,u)}break;case 5:var o=e.return;try{fh(e)}catch(u){Ae(e,o,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var k1=Math.ceil,_l=Nn.ReactCurrentDispatcher,Pd=Nn.ReactCurrentOwner,Ot=Nn.ReactCurrentBatchConfig,se=0,Be=null,xe=null,Ke=0,It=0,Ii=Ir(0),be=0,_o=null,Gr=0,Zl=0,xd=0,Gs=null,gt=null,Nd=0,Bi=1/0,mn=null,vl=!1,gh=null,rr=null,Ea=!1,Xn=null,wl=0,Ks=0,yh=null,ja=-1,za=0;function ct(){return se&6?Re():ja!==-1?ja:ja=Re()}function ir(t){return t.mode&1?se&2&&Ke!==0?Ke&-Ke:u1.transition!==null?(za===0&&(za=Ky()),za):(t=ae,t!==0||(t=window.event,t=t===void 0?16:t_(t.type)),t):1}function Wt(t,e,n,r){if(50<Ks)throw Ks=0,yh=null,Error(L(185));Ro(t,n,r),(!(se&2)||t!==Be)&&(t===Be&&(!(se&2)&&(Zl|=n),be===4&&Hn(t,Ke)),Et(t,r),n===1&&se===0&&!(e.mode&1)&&(Bi=Re()+500,Ql&&Sr()))}function Et(t,e){var n=t.callbackNode;uT(t,e);var r=rl(t,t===Be?Ke:0);if(r===0)n!==null&&Mp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Mp(n),e===1)t.tag===0?l1(Cm.bind(null,t)):w_(Cm.bind(null,t)),i1(function(){!(se&6)&&Sr()}),n=null;else{switch(Qy(r)){case 1:n=rd;break;case 4:n=qy;break;case 16:n=nl;break;case 536870912:n=Gy;break;default:n=nl}n=_v(n,hv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function hv(t,e){if(ja=-1,za=0,se&6)throw Error(L(327));var n=t.callbackNode;if(xi()&&t.callbackNode!==n)return null;var r=rl(t,t===Be?Ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=El(t,r);else{e=r;var i=se;se|=2;var s=fv();(Be!==t||Ke!==e)&&(mn=null,Bi=Re()+500,jr(t,e));do try{P1();break}catch(l){dv(t,l)}while(!0);gd(),_l.current=s,se=i,xe!==null?e=0:(Be=null,Ke=0,e=be)}if(e!==0){if(e===2&&(i=Hc(t),i!==0&&(r=i,e=_h(t,i))),e===1)throw n=_o,jr(t,0),Hn(t,r),Et(t,Re()),n;if(e===6)Hn(t,r);else{if(i=t.current.alternate,!(r&30)&&!C1(i)&&(e=El(t,r),e===2&&(s=Hc(t),s!==0&&(r=s,e=_h(t,s))),e===1))throw n=_o,jr(t,0),Hn(t,r),Et(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:Or(t,gt,mn);break;case 3:if(Hn(t,r),(r&130023424)===r&&(e=Nd+500-Re(),10<e)){if(rl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Jc(Or.bind(null,t,gt,mn),e);break}Or(t,gt,mn);break;case 4:if(Hn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ht(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*k1(r/1960))-r,10<r){t.timeoutHandle=Jc(Or.bind(null,t,gt,mn),r);break}Or(t,gt,mn);break;case 5:Or(t,gt,mn);break;default:throw Error(L(329))}}}return Et(t,Re()),t.callbackNode===n?hv.bind(null,t):null}function _h(t,e){var n=Gs;return t.current.memoizedState.isDehydrated&&(jr(t,e).flags|=256),t=El(t,e),t!==2&&(e=gt,gt=n,e!==null&&vh(e)),t}function vh(t){gt===null?gt=t:gt.push.apply(gt,t)}function C1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Gt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hn(t,e){for(e&=~xd,e&=~Zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ht(e),r=1<<n;t[n]=-1,e&=~r}}function Cm(t){if(se&6)throw Error(L(327));xi();var e=rl(t,0);if(!(e&1))return Et(t,Re()),null;var n=El(t,e);if(t.tag!==0&&n===2){var r=Hc(t);r!==0&&(e=r,n=_h(t,r))}if(n===1)throw n=_o,jr(t,0),Hn(t,e),Et(t,Re()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Or(t,gt,mn),Et(t,Re()),null}function Dd(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Bi=Re()+500,Ql&&Sr())}}function Kr(t){Xn!==null&&Xn.tag===0&&!(se&6)&&xi();var e=se;se|=1;var n=Ot.transition,r=ae;try{if(Ot.transition=null,ae=1,t)return t()}finally{ae=r,Ot.transition=n,se=e,!(se&6)&&Sr()}}function Vd(){It=Ii.current,ge(Ii)}function jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,r1(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(fd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ll();break;case 3:ji(),ge(vt),ge(rt),Td();break;case 5:Ed(r);break;case 4:ji();break;case 13:ge(we);break;case 19:ge(we);break;case 10:yd(r.type._context);break;case 22:case 23:Vd()}n=n.return}if(Be=t,xe=t=sr(t.current,null),Ke=It=e,be=0,_o=null,xd=Zl=Gr=0,gt=Gs=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Lr=null}return t}function dv(t,e){do{var n=xe;try{if(gd(),La.current=yl,gl){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gl=!1}if(qr=0,ze=Oe=Ee=null,Ws=!1,mo=0,Pd.current=null,n===null||n.return===null){be=1,_o=e,xe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ke,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=pm(o);if(k!==null){k.flags&=-257,mm(k,o,l,s,e),k.mode&1&&fm(s,h,e),e=k,u=h;var P=e.updateQueue;if(P===null){var D=new Set;D.add(u),e.updateQueue=D}else P.add(u);break e}else{if(!(e&1)){fm(s,h,e),Od();break e}u=Error(L(426))}}else if(ve&&l.mode&1){var M=pm(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),mm(M,o,l,s,e),pd(zi(u,l));break e}}s=u=zi(u,l),be!==4&&(be=2),Gs===null?Gs=[s]:Gs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=Q_(s,u,e);am(s,I);break e;case 1:l=u;var w=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(rr===null||!rr.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=X_(s,l,e);am(s,V);break e}}s=s.return}while(s!==null)}mv(n)}catch(U){e=U,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function fv(){var t=_l.current;return _l.current=yl,t===null?yl:t}function Od(){(be===0||be===3||be===2)&&(be=4),Be===null||!(Gr&268435455)&&!(Zl&268435455)||Hn(Be,Ke)}function El(t,e){var n=se;se|=2;var r=fv();(Be!==t||Ke!==e)&&(mn=null,jr(t,e));do try{R1();break}catch(i){dv(t,i)}while(!0);if(gd(),se=n,_l.current=r,xe!==null)throw Error(L(261));return Be=null,Ke=0,be}function R1(){for(;xe!==null;)pv(xe)}function P1(){for(;xe!==null&&!eT();)pv(xe)}function pv(t){var e=yv(t.alternate,t,It);t.memoizedProps=t.pendingProps,e===null?mv(t):xe=e,Pd.current=null}function mv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=T1(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,xe=null;return}}else if(n=E1(n,e,It),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);be===0&&(be=5)}function Or(t,e,n){var r=ae,i=Ot.transition;try{Ot.transition=null,ae=1,x1(t,e,n,r)}finally{Ot.transition=i,ae=r}return null}function x1(t,e,n,r){do xi();while(Xn!==null);if(se&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(cT(t,s),t===Be&&(xe=Be=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ea||(Ea=!0,_v(nl,function(){return xi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ot.transition,Ot.transition=null;var o=ae;ae=1;var l=se;se|=4,Pd.current=null,S1(t,n),uv(n,t),XT(Xc),il=!!Qc,Xc=Qc=null,t.current=n,A1(n),tT(),se=l,ae=o,Ot.transition=s}else t.current=n;if(Ea&&(Ea=!1,Xn=t,wl=i),s=t.pendingLanes,s===0&&(rr=null),iT(n.stateNode),Et(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vl)throw vl=!1,t=gh,gh=null,t;return wl&1&&t.tag!==0&&xi(),s=t.pendingLanes,s&1?t===yh?Ks++:(Ks=0,yh=t):Ks=0,Sr(),null}function xi(){if(Xn!==null){var t=Qy(wl),e=Ot.transition,n=ae;try{if(Ot.transition=null,ae=16>t?16:t,Xn===null)var r=!1;else{if(t=Xn,Xn=null,wl=0,se&6)throw Error(L(331));var i=se;for(se|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:qs(8,f,s)}var p=f.child;if(p!==null)p.return=f,$=p;else for(;$!==null;){f=$;var g=f.sibling,k=f.return;if(ov(f),f===h){$=null;break}if(g!==null){g.return=k,$=g;break}$=k}}}var P=s.alternate;if(P!==null){var D=P.child;if(D!==null){P.child=null;do{var M=D.sibling;D.sibling=null,D=M}while(D!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qs(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,$=I;break e}$=s.return}}var w=t.current;for($=w;$!==null;){o=$;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,$=A;else e:for(o=w;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Jl(9,l)}}catch(U){Ae(l,l.return,U)}if(l===o){$=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,$=V;break e}$=l.return}}if(se=i,Sr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Hl,t)}catch{}r=!0}return r}finally{ae=n,Ot.transition=e}}return!1}function Rm(t,e,n){e=zi(n,e),e=Q_(t,e,1),t=nr(t,e,1),e=ct(),t!==null&&(Ro(t,1,e),Et(t,e))}function Ae(t,e,n){if(t.tag===3)Rm(t,t,n);else for(;e!==null;){if(e.tag===3){Rm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rr===null||!rr.has(r))){t=zi(n,t),t=X_(e,t,1),e=nr(e,t,1),t=ct(),e!==null&&(Ro(e,1,t),Et(e,t));break}}e=e.return}}function N1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ct(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(Ke&n)===n&&(be===4||be===3&&(Ke&130023424)===Ke&&500>Re()-Nd?jr(t,0):xd|=n),Et(t,e)}function gv(t,e){e===0&&(t.mode&1?(e=ha,ha<<=1,!(ha&130023424)&&(ha=4194304)):e=1);var n=ct();t=Sn(t,e),t!==null&&(Ro(t,e,n),Et(t,n))}function D1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),gv(t,n)}function V1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),gv(t,n)}var yv;yv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vt.current)_t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _t=!1,w1(t,e,n);_t=!!(t.flags&131072)}else _t=!1,ve&&e.flags&1048576&&E_(e,hl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ua(t,e),t=e.pendingProps;var i=Li(e,rt.current);Pi(e,n),i=Sd(null,e,r,t,i,n);var s=Ad();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(s=!0,ul(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vd(e),i.updater=Yl,e.stateNode=i,i._reactInternals=e,sh(e,r,t,n),e=lh(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&dd(e),ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ua(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=M1(r),t=Ut(r,t),i){case 0:e=ah(null,e,r,t,n);break e;case 1:e=_m(null,e,r,t,n);break e;case 11:e=gm(null,e,r,t,n);break e;case 14:e=ym(null,e,r,Ut(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),ah(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),_m(t,e,r,i,n);case 3:e:{if(ev(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,C_(t,e),pl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=zi(Error(L(423)),e),e=vm(t,e,r,n,i);break e}else if(r!==i){i=zi(Error(L(424)),e),e=vm(t,e,r,n,i);break e}else for(St=tr(e.stateNode.containerInfo.firstChild),kt=e,ve=!0,zt=null,n=A_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fi(),r===i){e=An(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return R_(e),t===null&&nh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Yc(r,i)?o=null:s!==null&&Yc(r,s)&&(e.flags|=32),Z_(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&nh(e),null;case 13:return tv(t,e,n);case 4:return wd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ui(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),gm(t,e,r,i,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(dl,r._currentValue),r._currentValue=o,s!==null)if(Gt(s.value,o)){if(s.children===i.children&&!vt.current){e=An(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=En(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),rh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(L(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),rh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Pi(e,n),i=Mt(i),r=r(i),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,i=Ut(r,e.pendingProps),i=Ut(r.type,i),ym(t,e,r,i,n);case 15:return Y_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Ua(t,e),e.tag=1,wt(r)?(t=!0,ul(e)):t=!1,Pi(e,n),K_(e,r,i),sh(e,r,i,n),lh(null,e,r,!0,t,n);case 19:return nv(t,e,n);case 22:return J_(t,e,n)}throw Error(L(156,e.tag))};function _v(t,e){return Wy(t,e)}function O1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(t,e,n,r){return new O1(t,e,n,r)}function Md(t){return t=t.prototype,!(!t||!t.isReactComponent)}function M1(t){if(typeof t=="function")return Md(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ed)return 11;if(t===td)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=Vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ba(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Md(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fi:return zr(n.children,i,s,e);case Zh:o=8,i|=8;break;case Pc:return t=Vt(12,n,e,i|2),t.elementType=Pc,t.lanes=s,t;case xc:return t=Vt(13,n,e,i),t.elementType=xc,t.lanes=s,t;case Nc:return t=Vt(19,n,e,i),t.elementType=Nc,t.lanes=s,t;case Ry:return eu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ky:o=10;break e;case Cy:o=9;break e;case ed:o=11;break e;case td:o=14;break e;case zn:o=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=Vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zr(t,e,n,r){return t=Vt(7,t,r,e),t.lanes=n,t}function eu(t,e,n,r){return t=Vt(22,t,r,e),t.elementType=Ry,t.lanes=n,t.stateNode={isHidden:!1},t}function pc(t,e,n){return t=Vt(6,t,null,e),t.lanes=n,t}function mc(t,e,n){return e=Vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function b1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qu(0),this.expirationTimes=Qu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bd(t,e,n,r,i,s,o,l,u){return t=new b1(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vd(s),t}function L1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function vv(t){if(!t)return pr;t=t._reactInternals;e:{if(ti(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(wt(n))return v_(t,n,e)}return e}function wv(t,e,n,r,i,s,o,l,u){return t=bd(n,r,!0,t,i,s,o,l,u),t.context=vv(null),n=t.current,r=ct(),i=ir(n),s=En(r,i),s.callback=e??null,nr(n,s,i),t.current.lanes=i,Ro(t,i,r),Et(t,r),t}function tu(t,e,n,r){var i=e.current,s=ct(),o=ir(i);return n=vv(n),e.context===null?e.context=n:e.pendingContext=n,e=En(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=nr(i,e,o),t!==null&&(Wt(t,i,o,s),ba(t,i,o)),o}function Tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ld(t,e){Pm(t,e),(t=t.alternate)&&Pm(t,e)}function F1(){return null}var Ev=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fd(t){this._internalRoot=t}nu.prototype.render=Fd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));tu(t,e,null,null)};nu.prototype.unmount=Fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){tu(null,t,null,null)}),e[In]=null}};function nu(t){this._internalRoot=t}nu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$n.length&&e!==0&&e<$n[n].priority;n++);$n.splice(n,0,t),n===0&&e_(t)}};function Ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xm(){}function U1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Tl(o);s.call(h)}}var o=wv(e,r,t,0,null,!1,!1,"",xm);return t._reactRootContainer=o,t[In]=o.current,uo(t.nodeType===8?t.parentNode:t),Kr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Tl(u);l.call(h)}}var u=bd(t,0,!1,null,null,!1,!1,"",xm);return t._reactRootContainer=u,t[In]=u.current,uo(t.nodeType===8?t.parentNode:t),Kr(function(){tu(e,u,n,r)}),u}function iu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Tl(o);l.call(u)}}tu(e,o,t,i)}else o=U1(n,e,t,i,r);return Tl(o)}Xy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Os(e.pendingLanes);n!==0&&(id(e,n|1),Et(e,Re()),!(se&6)&&(Bi=Re()+500,Sr()))}break;case 13:Kr(function(){var r=Sn(t,1);if(r!==null){var i=ct();Wt(r,t,1,i)}}),Ld(t,1)}};sd=function(t){if(t.tag===13){var e=Sn(t,134217728);if(e!==null){var n=ct();Wt(e,t,134217728,n)}Ld(t,134217728)}};Yy=function(t){if(t.tag===13){var e=ir(t),n=Sn(t,e);if(n!==null){var r=ct();Wt(n,t,e,r)}Ld(t,e)}};Jy=function(){return ae};Zy=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};zc=function(t,e,n){switch(e){case"input":if(Oc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Kl(r);if(!i)throw Error(L(90));xy(r),Oc(r,i)}}}break;case"textarea":Dy(t,n);break;case"select":e=n.value,e!=null&&Ai(t,!!n.multiple,e,!1)}};Uy=Dd;jy=Kr;var j1={usingClientEntryPoint:!1,Events:[xo,yi,Kl,Ly,Fy,Dd]},Ns={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},z1={bundleType:Ns.bundleType,version:Ns.version,rendererPackageName:Ns.rendererPackageName,rendererConfig:Ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$y(t),t===null?null:t.stateNode},findFiberByHostInstance:Ns.findFiberByHostInstance||F1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{Hl=Ta.inject(z1),rn=Ta}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j1;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ud(e))throw Error(L(200));return L1(t,e,null,n)};Rt.createRoot=function(t,e){if(!Ud(t))throw Error(L(299));var n=!1,r="",i=Ev;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=bd(t,1,!1,null,null,n,!1,r,i),t[In]=e.current,uo(t.nodeType===8?t.parentNode:t),new Fd(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=$y(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return Kr(t)};Rt.hydrate=function(t,e,n){if(!ru(e))throw Error(L(200));return iu(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!Ud(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ev;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=wv(e,null,t,1,n??null,i,!1,s,o),t[In]=e.current,uo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new nu(e)};Rt.render=function(t,e,n){if(!ru(e))throw Error(L(200));return iu(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!ru(t))throw Error(L(40));return t._reactRootContainer?(Kr(function(){iu(null,null,t,!1,function(){t._reactRootContainer=null,t[In]=null})}),!0):!1};Rt.unstable_batchedUpdates=Dd;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ru(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return iu(t,e,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426";function Tv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tv)}catch(t){console.error(t)}}Tv(),Ty.exports=Rt;var B1=Ty.exports,Iv,Nm=B1;Iv=Nm.createRoot,Nm.hydrateRoot;const $1=()=>{};var Dm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},H1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Av={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,k=h&63;u||(k=64,o||(g=64)),r.push(n[f],n[p],n[g],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):H1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new W1;const g=s<<2|l>>4;if(r.push(g),h!==64){const k=l<<4&240|h>>2;if(r.push(k),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class W1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const q1=function(t){const e=Sv(t);return Av.encodeByteArray(e,!0)},Il=function(t){return q1(t).replace(/\./g,"")},kv=function(t){try{return Av.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1=()=>G1().__FIREBASE_DEFAULTS__,Q1=()=>{if(typeof process>"u"||typeof Dm>"u")return;const t=Dm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},X1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kv(t[1]);return e&&JSON.parse(e)},su=()=>{try{return $1()||K1()||Q1()||X1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cv=t=>{var e,n;return(n=(e=su())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Y1=t=>{const e=Cv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rv=()=>{var t;return(t=su())==null?void 0:t.config},Pv=t=>{var e;return(e=su())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function xv(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Il(JSON.stringify(n)),Il(JSON.stringify(o)),""].join(".")}const Qs={};function eI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Qs))Qs[e]?t.emulator.push(e):t.prod.push(e);return t}function tI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Vm=!1;function Nv(t,e){if(typeof window>"u"||typeof document>"u"||!es(window.location.host)||Qs[t]===e||Qs[t]||Vm)return;Qs[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=eI().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,k){g.setAttribute("width","24"),g.setAttribute("id",k),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Vm=!0,o()},g}function f(g,k){g.setAttribute("id",k),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=tI(r),k=n("text"),P=document.getElementById(k)||document.createElement("span"),D=n("learnmore"),M=document.getElementById(D)||document.createElement("a"),I=n("preprendIcon"),w=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const A=g.element;l(A),f(M,D);const V=h();u(w,I),A.append(w,P,M,V),document.body.appendChild(A)}s?(P.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(w.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function rI(){var e;const t=(e=su())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function iI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function oI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aI(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lI(){return!rI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function uI(){try{return typeof indexedDB=="object"}catch{return!1}}function cI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hI,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Do.prototype.create)}}class Do{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?dI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Dn(i,l,r)}}function dI(t,e){return t.replace(fI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fI=/\{\$([^}]+)}/g;function pI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Om(s)&&Om(o)){if(!Qr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Om(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mI(t,e){const n=new gI(t,e);return n.subscribe.bind(n)}class gI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=gc),i.error===void 0&&(i.error=gc),i.complete===void 0&&(i.complete=gc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){return t&&t._delegate?t._delegate:t}class Xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new J1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wI(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vI(t){return t===Mr?void 0:t}function wI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _I(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const TI={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},II=te.INFO,SI={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},AI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=SI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jd{constructor(e){this.name=e,this._logLevel=II,this._logHandler=AI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const kI=(t,e)=>e.some(n=>t instanceof n);let Mm,bm;function CI(){return Mm||(Mm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RI(){return bm||(bm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dv=new WeakMap,wh=new WeakMap,Vv=new WeakMap,yc=new WeakMap,zd=new WeakMap;function PI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(or(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dv.set(n,t)}).catch(()=>{}),zd.set(e,t),e}function xI(t){if(wh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});wh.set(t,e)}let Eh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function NI(t){Eh=t(Eh)}function DI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_c(this),e,...n);return Vv.set(r,e.sort?e.sort():[e]),or(r)}:RI().includes(t)?function(...e){return t.apply(_c(this),e),or(Dv.get(this))}:function(...e){return or(t.apply(_c(this),e))}}function VI(t){return typeof t=="function"?DI(t):(t instanceof IDBTransaction&&xI(t),kI(t,CI())?new Proxy(t,Eh):t)}function or(t){if(t instanceof IDBRequest)return PI(t);if(yc.has(t))return yc.get(t);const e=VI(t);return e!==t&&(yc.set(t,e),zd.set(e,t)),e}const _c=t=>zd.get(t);function OI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=or(o);return r&&o.addEventListener("upgradeneeded",u=>{r(or(o.result),u.oldVersion,u.newVersion,or(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const MI=["get","getKey","getAll","getAllKeys","count"],bI=["put","add","delete","clear"],vc=new Map;function Lm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vc.get(e))return vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=bI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||MI.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return vc.set(e,s),s}NI(t=>({...t,get:(e,n,r)=>Lm(e,n)||t.get(e,n,r),has:(e,n)=>!!Lm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function FI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Th="@firebase/app",Fm="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new jd("@firebase/app"),UI="@firebase/app-compat",jI="@firebase/analytics-compat",zI="@firebase/analytics",BI="@firebase/app-check-compat",$I="@firebase/app-check",HI="@firebase/auth",WI="@firebase/auth-compat",qI="@firebase/database",GI="@firebase/data-connect",KI="@firebase/database-compat",QI="@firebase/functions",XI="@firebase/functions-compat",YI="@firebase/installations",JI="@firebase/installations-compat",ZI="@firebase/messaging",eS="@firebase/messaging-compat",tS="@firebase/performance",nS="@firebase/performance-compat",rS="@firebase/remote-config",iS="@firebase/remote-config-compat",sS="@firebase/storage",oS="@firebase/storage-compat",aS="@firebase/firestore",lS="@firebase/ai",uS="@firebase/firestore-compat",cS="firebase",hS="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="[DEFAULT]",dS={[Th]:"fire-core",[UI]:"fire-core-compat",[zI]:"fire-analytics",[jI]:"fire-analytics-compat",[$I]:"fire-app-check",[BI]:"fire-app-check-compat",[HI]:"fire-auth",[WI]:"fire-auth-compat",[qI]:"fire-rtdb",[GI]:"fire-data-connect",[KI]:"fire-rtdb-compat",[QI]:"fire-fn",[XI]:"fire-fn-compat",[YI]:"fire-iid",[JI]:"fire-iid-compat",[ZI]:"fire-fcm",[eS]:"fire-fcm-compat",[tS]:"fire-perf",[nS]:"fire-perf-compat",[rS]:"fire-rc",[iS]:"fire-rc-compat",[sS]:"fire-gcs",[oS]:"fire-gcs-compat",[aS]:"fire-fst",[uS]:"fire-fst-compat",[lS]:"fire-vertex","fire-js":"fire-js",[cS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=new Map,fS=new Map,Sh=new Map;function Um(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $i(t){const e=t.name;if(Sh.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;Sh.set(e,t);for(const n of Sl.values())Um(n,t);for(const n of fS.values())Um(n,t);return!0}function Bd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Bt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ar=new Do("app","Firebase",pS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=hS;function Ov(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ih,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw ar.create("bad-app-name",{appName:String(i)});if(n||(n=Rv()),!n)throw ar.create("no-options");const s=Sl.get(i);if(s){if(Qr(n,s.options)&&Qr(r,s.config))return s;throw ar.create("duplicate-app",{appName:i})}const o=new EI(i);for(const u of Sh.values())o.addComponent(u);const l=new mS(n,r,o);return Sl.set(i,l),l}function Mv(t=Ih){const e=Sl.get(t);if(!e&&t===Ih&&Rv())return Ov();if(!e)throw ar.create("no-app",{appName:t});return e}function lr(t,e,n){let r=dS[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(o.join(" "));return}$i(new Xr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="firebase-heartbeat-database",yS=1,vo="firebase-heartbeat-store";let wc=null;function bv(){return wc||(wc=OI(gS,yS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(vo)}catch(n){console.warn(n)}}}}).catch(t=>{throw ar.create("idb-open",{originalErrorMessage:t.message})})),wc}async function _S(t){try{const n=(await bv()).transaction(vo),r=await n.objectStore(vo).get(Lv(t));return await n.done,r}catch(e){if(e instanceof Dn)kn.warn(e.message);else{const n=ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function jm(t,e){try{const r=(await bv()).transaction(vo,"readwrite");await r.objectStore(vo).put(e,Lv(t)),await r.done}catch(n){if(n instanceof Dn)kn.warn(n.message);else{const r=ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(r.message)}}}function Lv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=1024,wS=30;class ES{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new IS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>wS){const o=SS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zm(),{heartbeatsToSend:r,unsentEntries:i}=TS(this._heartbeatsCache.heartbeats),s=Il(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return kn.warn(n),""}}}function zm(){return new Date().toISOString().substring(0,10)}function TS(t,e=vS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class IS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uI()?cI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _S(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Bm(t){return Il(JSON.stringify({version:2,heartbeats:t})).length}function SS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(t){$i(new Xr("platform-logger",e=>new LI(e),"PRIVATE")),$i(new Xr("heartbeat",e=>new ES(e),"PRIVATE")),lr(Th,Fm,t),lr(Th,Fm,"esm2020"),lr("fire-js","")}AS("");var kS="firebase",CS="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lr(kS,CS,"app");function Fv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RS=Fv,Uv=new Do("auth","Firebase",Fv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=new jd("@firebase/auth");function PS(t,...e){Al.logLevel<=te.WARN&&Al.warn(`Auth (${ts}): ${t}`,...e)}function $a(t,...e){Al.logLevel<=te.ERROR&&Al.error(`Auth (${ts}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,...e){throw $d(t,...e)}function on(t,...e){return $d(t,...e)}function jv(t,e,n){const r={...RS(),[e]:n};return new Do("auth","Firebase",r).create(e,{appName:t.name})}function ur(t){return jv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $d(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Uv.create(t,...e)}function Q(t,e,...n){if(!t)throw $d(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $a(e),new Error(e)}function Rn(t,e){t||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function xS(){return $m()==="http:"||$m()==="https:"}function $m(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xS()||sI()||"connection"in navigator)?navigator.onLine:!0}function DS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rn(n>e,"Short delay should be less than long delay!"),this.isMobile=nI()||oI()}get(){return NS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(t,e){Rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],MS=new Oo(3e4,6e4);function ou(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ns(t,e,n,r,i={}){return Bv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Vo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return iI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&es(t.emulatorConfig.host)&&(h.credentials="include"),zv.fetch()(await Hv(t,t.config.apiHost,n,l),h)})}async function Bv(t,e,n){t._canInitEmulator=!1;const r={...VS,...e};try{const i=new bS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ia(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ia(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ia(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ia(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw jv(t,f,h);Cn(t,f)}}catch(i){if(i instanceof Dn)throw i;Cn(t,"network-request-failed",{message:String(i)})}}async function $v(t,e,n,r,i={}){const s=await ns(t,e,n,r,i);return"mfaPendingCredential"in s&&Cn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Hv(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Hd(t.config,i):`${t.config.apiScheme}://${i}`;return OS.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class bS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),MS.get())})}}function Ia(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=on(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS(t,e){return ns(t,"POST","/v1/accounts:delete",e)}async function kl(t,e){return ns(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FS(t,e=!1){const n=st(t),r=await n.getIdToken(e),i=Wd(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Xs(Ec(i.auth_time)),issuedAtTime:Xs(Ec(i.iat)),expirationTime:Xs(Ec(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ec(t){return Number(t)*1e3}function Wd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $a("JWT malformed, contained fewer than 3 sections"),null;try{const i=kv(n);return i?JSON.parse(i):($a("Failed to decode base64 JWT payload"),null)}catch(i){return $a("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hm(t){const e=Wd(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&US(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function US({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cl(t){var p;const e=t.auth,n=await t.getIdToken(),r=await wo(t,kl(e,{idToken:n}));Q(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?Wv(i.providerUserInfo):[],o=BS(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new kh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function zS(t){const e=st(t);await Cl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Wv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $S(t,e){const n=await Bv(t,{},async()=>{const r=Vo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Hv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&es(t.emulatorConfig.host)&&(u.credentials="include"),zv.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function HS(t,e){return ns(t,"POST","/v2/accounts:revokeToken",ou(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Hm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await $S(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ni;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ni,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $t{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new jS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new kh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await wo(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FS(this,e)}reload(){return zS(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Cl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(ur(this.auth));const e=await this.getIdToken();return await wo(this,LS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:k,providerData:P,stsTokenManager:D}=n;Q(p&&D,e,"internal-error");const M=Ni.fromJSON(this.name,D);Q(typeof p=="string",e,"internal-error"),jn(r,e.name),jn(i,e.name),Q(typeof g=="boolean",e,"internal-error"),Q(typeof k=="boolean",e,"internal-error"),jn(s,e.name),jn(o,e.name),jn(l,e.name),jn(u,e.name),jn(h,e.name),jn(f,e.name);const I=new $t({uid:p,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:k,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:M,createdAt:h,lastLoginAt:f});return P&&Array.isArray(P)&&(I.providerData=P.map(w=>({...w}))),u&&(I._redirectEventId=u),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ni;i.updateFromServerResponse(n);const s=new $t({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Cl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Wv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ni;l.updateFromIdToken(r);const u=new $t({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new kh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=new Map;function wn(t){Rn(t instanceof Function,"Expected a class definition");let e=Wm.get(t);return e?(Rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qv.type="NONE";const qm=qv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t,e,n){return`firebase:${t}:${e}:${n}`}class Di{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ha(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ha("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await kl(this.auth,{idToken:e}).catch(()=>{});return n?$t._fromGetAccountInfoResponse(this.auth,n,e):null}return $t._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Di(wn(qm),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||wn(qm);const o=Ha(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await kl(e,{idToken:f}).catch(()=>{});if(!g)break;p=await $t._fromGetAccountInfoResponse(e,g,f)}else p=$t._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Di(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Di(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jv(e))return"Blackberry";if(Zv(e))return"Webos";if(Kv(e))return"Safari";if((e.includes("chrome/")||Qv(e))&&!e.includes("edge/"))return"Chrome";if(Yv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gv(t=it()){return/firefox\//i.test(t)}function Kv(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qv(t=it()){return/crios\//i.test(t)}function Xv(t=it()){return/iemobile/i.test(t)}function Yv(t=it()){return/android/i.test(t)}function Jv(t=it()){return/blackberry/i.test(t)}function Zv(t=it()){return/webos/i.test(t)}function qd(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function WS(t=it()){var e;return qd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function qS(){return aI()&&document.documentMode===10}function e0(t=it()){return qd(t)||Yv(t)||Zv(t)||Jv(t)||/windows phone/i.test(t)||Xv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(t,e=[]){let n;switch(t){case"Browser":n=Gm(it());break;case"Worker":n=`${Gm(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ts}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KS(t,e={}){return ns(t,"GET","/v2/passwordPolicy",ou(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=6;class XS{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??QS,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Km(this),this.idTokenSubscription=new Km(this),this.beforeStateQueue=new GS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Uv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Di.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await kl(this,{idToken:e}),r=await $t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bt(this.app))return Promise.reject(ur(this));const n=e?st(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bt(this.app)?Promise.reject(ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KS(this),n=new XS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Do("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await HS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Di.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&PS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function au(t){return st(t)}class Km{constructor(e){this.auth=e,this.observer=null,this.addObserver=mI(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JS(t){Gd=t}function ZS(t){return Gd.loadJS(t)}function eA(){return Gd.gapiScript}function tA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(t,e){const n=Bd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Qr(s,e??{}))return i;Cn(i,"already-initialized")}return n.initialize({options:e})}function rA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function iA(t,e,n){const r=au(t);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=n0(e),{host:o,port:l}=sA(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(Qr(h,r.config.emulator)&&Qr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,es(o)?(xv(`${s}//${o}${u}`),Nv("Auth",!0)):oA()}function n0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sA(t){const e=n0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Qm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Qm(o)}}}function Qm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(t,e){return $v(t,"POST","/v1/accounts:signInWithIdp",ou(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="http://localhost";class Yr extends r0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vi(e,n)}buildRequest(){const e={requestUri:aA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends i0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Mo{constructor(){super("facebook.com")}static credential(e){return Yr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Mo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Mo{constructor(){super("github.com")}static credential(e){return Yr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Mo{constructor(){super("twitter.com")}static credential(e,n){return Yr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(t,e){return $v(t,"POST","/v1/accounts:signUp",ou(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await $t._fromIdTokenResponse(e,r,i),o=Xm(r);return new mr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Xm(r);return new mr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Xm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(t){var i;if(Bt(t.app))return Promise.reject(ur(t));const e=au(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new mr({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await lA(e,{returnSecureToken:!0}),r=await mr._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends Dn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Rl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Rl(e,n,r,i)}}function s0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Rl._fromErrorAndOperation(t,s,e,r):s})}async function cA(t,e,n=!1){const r=await wo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(t,e,n=!1){const{auth:r}=t;if(Bt(r.app))return Promise.reject(ur(r));const i="reauthenticate";try{const s=await wo(t,s0(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=Wd(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),mr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Cn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(t,e,n=!1){if(Bt(t.app))return Promise.reject(ur(t));const r="signIn",i=await s0(t,r,e),s=await mr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function fA(t,e,n,r){return st(t).onIdTokenChanged(e,n,r)}function pA(t,e,n){return st(t).beforeAuthStateChanged(e,n)}function mA(t,e,n,r){return st(t).onAuthStateChanged(e,n,r)}const Pl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pl,"1"),this.storage.removeItem(Pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=1e3,yA=10;class a0 extends o0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=e0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);qS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}a0.type="LOCAL";const _A=a0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0 extends o0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}l0.type="SESSION";const u0=l0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new lu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await vA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Kd("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function EA(t){an().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function TA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function SA(){return c0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="firebaseLocalStorageDb",AA=1,xl="firebaseLocalStorage",d0="fbase_key";class bo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uu(t,e){return t.transaction([xl],e?"readwrite":"readonly").objectStore(xl)}function kA(){const t=indexedDB.deleteDatabase(h0);return new bo(t).toPromise()}function Ch(){const t=indexedDB.open(h0,AA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xl,{keyPath:d0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xl)?e(r):(r.close(),await kA(),e(await Ch()))})})}async function Ym(t,e,n){const r=uu(t,!0).put({[d0]:e,value:n});return new bo(r).toPromise()}async function CA(t,e){const n=uu(t,!1).get(e),r=await new bo(n).toPromise();return r===void 0?null:r.value}function Jm(t,e){const n=uu(t,!0).delete(e);return new bo(n).toPromise()}const RA=800,PA=3;class f0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ch(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>PA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return c0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lu._getInstance(SA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await TA(),!this.activeServiceWorker)return;this.sender=new wA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ch();return await Ym(e,Pl,"1"),await Jm(e,Pl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ym(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>CA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=uu(i,!1).getAll();return new bo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}f0.type="LOCAL";const xA=f0;new Oo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(t,e){return e?wn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd extends r0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DA(t){return dA(t.auth,new Qd(t),t.bypassAuthState)}function VA(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),hA(n,new Qd(t),t.bypassAuthState)}async function OA(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),cA(n,new Qd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DA;case"linkViaPopup":case"linkViaRedirect":return OA;case"reauthViaPopup":case"reauthViaRedirect":return VA;default:Cn(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=new Oo(2e3,1e4);class Si extends p0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Si.currentPopupAction&&Si.currentPopupAction.cancel(),Si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=Kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,MA.get())};e()}}Si.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA="pendingRedirect",Wa=new Map;class LA extends p0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wa.get(this.auth._key());if(!e){try{const r=await FA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wa.set(this.auth._key(),e)}return this.bypassAuthState||Wa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FA(t,e){const n=zA(e),r=jA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function UA(t,e){Wa.set(t._key(),e)}function jA(t){return wn(t._redirectPersistence)}function zA(t){return Ha(bA,t.config.apiKey,t.name)}async function BA(t,e,n=!1){if(Bt(t.app))return Promise.reject(ur(t));const r=au(t),i=NA(r,e),o=await new LA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=10*60*1e3;class HA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!m0(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$A&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zm(e))}saveEventToCache(e){this.cachedEventUids.add(Zm(e)),this.lastProcessedEventTime=Date.now()}}function Zm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function m0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return m0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qA(t,e={}){return ns(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KA=/^https?/;async function QA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qA(t);for(const n of e)try{if(XA(n))return}catch{}Cn(t,"unauthorized-domain")}function XA(t){const e=Ah(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!KA.test(n))return!1;if(GA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=new Oo(3e4,6e4);function eg(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function JA(t){return new Promise((e,n)=>{var i,s,o;function r(){eg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{eg(),n(on(t,"network-request-failed"))},timeout:YA.get()})}if((s=(i=an().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=an().gapi)!=null&&o.load)r();else{const l=tA("iframefcb");return an()[l]=()=>{gapi.load?r():n(on(t,"network-request-failed"))},ZS(`${eA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw qa=null,e})}let qa=null;function ZA(t){return qa=qa||JA(t),qa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=new Oo(5e3,15e3),tk="__/auth/iframe",nk="emulator/auth/iframe",rk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ik=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sk(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hd(e,nk):`https://${t.config.authDomain}/${tk}`,r={apiKey:e.apiKey,appName:t.name,v:ts},i=ik.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Vo(r).slice(1)}`}async function ok(t){const e=await ZA(t),n=an().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:sk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),l=an().setTimeout(()=>{s(o)},ek.get());function u(){an().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lk=500,uk=600,ck="_blank",hk="http://localhost";class tg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dk(t,e,n,r=lk,i=uk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...ak,width:r.toString(),height:i.toString(),top:s,left:o},h=it().toLowerCase();n&&(l=Qv(h)?ck:n),Gv(h)&&(e=e||hk,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[k,P])=>`${g}${k}=${P},`,"");if(WS(h)&&l!=="_self")return fk(e||"",l),new tg(null);const p=window.open(e||"",l,f);Q(p,t,"popup-blocked");try{p.focus()}catch{}return new tg(p)}function fk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk="__/auth/handler",mk="emulator/auth/handler",gk=encodeURIComponent("fac");async function ng(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ts,eventId:i};if(e instanceof i0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Mo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${gk}=${encodeURIComponent(u)}`:"";return`${yk(t)}?${Vo(l).slice(1)}${h}`}function yk({config:t}){return t.emulator?Hd(t,mk):`https://${t.authDomain}/${pk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="webStorageSupport";class _k{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=u0,this._completeRedirectFn=BA,this._overrideRedirectResult=UA}async _openPopup(e,n,r,i){var o;Rn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await ng(e,n,r,Ah(),i);return dk(e,s,Kd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ng(e,n,r,Ah(),i);return EA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Rn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ok(e),r=new HA(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tc,{type:Tc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Tc];s!==void 0&&n(!!s),Cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return e0()||Kv()||qd()}}const vk=_k;var rg="@firebase/auth",ig="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Tk(t){$i(new Xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t0(t)},h=new YS(r,i,s,u);return rA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$i(new Xr("auth-internal",e=>{const n=au(e.getProvider("auth").getImmediate());return(r=>new wk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),lr(rg,ig,Ek(t)),lr(rg,ig,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik=5*60,Sk=Pv("authIdTokenMaxAge")||Ik;let sg=null;const Ak=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Sk)return;const i=n==null?void 0:n.token;sg!==i&&(sg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kk(t=Mv()){const e=Bd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nA(t,{popupRedirectResolver:vk,persistence:[xA,_A,u0]}),r=Pv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Ak(s.toString());pA(n,o,()=>o(n.currentUser)),fA(n,l=>o(l))}}const i=Cv("auth");return i&&iA(n,`http://${i}`),n}function Ck(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}JS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=on("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Ck().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Tk("Browser");var og=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cr,g0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function v(){}v.prototype=y.prototype,_.F=y.prototype,_.prototype=new v,_.prototype.constructor=_,_.D=function(T,S,C){for(var E=Array(arguments.length-2),De=2;De<arguments.length;De++)E[De-2]=arguments[De];return y.prototype[S].apply(T,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,y,v){v||(v=0);const T=Array(16);if(typeof y=="string")for(var S=0;S<16;++S)T[S]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(S=0;S<16;++S)T[S]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=_.g[0],v=_.g[1],S=_.g[2];let C=_.g[3],E;E=y+(C^v&(S^C))+T[0]+3614090360&4294967295,y=v+(E<<7&4294967295|E>>>25),E=C+(S^y&(v^S))+T[1]+3905402710&4294967295,C=y+(E<<12&4294967295|E>>>20),E=S+(v^C&(y^v))+T[2]+606105819&4294967295,S=C+(E<<17&4294967295|E>>>15),E=v+(y^S&(C^y))+T[3]+3250441966&4294967295,v=S+(E<<22&4294967295|E>>>10),E=y+(C^v&(S^C))+T[4]+4118548399&4294967295,y=v+(E<<7&4294967295|E>>>25),E=C+(S^y&(v^S))+T[5]+1200080426&4294967295,C=y+(E<<12&4294967295|E>>>20),E=S+(v^C&(y^v))+T[6]+2821735955&4294967295,S=C+(E<<17&4294967295|E>>>15),E=v+(y^S&(C^y))+T[7]+4249261313&4294967295,v=S+(E<<22&4294967295|E>>>10),E=y+(C^v&(S^C))+T[8]+1770035416&4294967295,y=v+(E<<7&4294967295|E>>>25),E=C+(S^y&(v^S))+T[9]+2336552879&4294967295,C=y+(E<<12&4294967295|E>>>20),E=S+(v^C&(y^v))+T[10]+4294925233&4294967295,S=C+(E<<17&4294967295|E>>>15),E=v+(y^S&(C^y))+T[11]+2304563134&4294967295,v=S+(E<<22&4294967295|E>>>10),E=y+(C^v&(S^C))+T[12]+1804603682&4294967295,y=v+(E<<7&4294967295|E>>>25),E=C+(S^y&(v^S))+T[13]+4254626195&4294967295,C=y+(E<<12&4294967295|E>>>20),E=S+(v^C&(y^v))+T[14]+2792965006&4294967295,S=C+(E<<17&4294967295|E>>>15),E=v+(y^S&(C^y))+T[15]+1236535329&4294967295,v=S+(E<<22&4294967295|E>>>10),E=y+(S^C&(v^S))+T[1]+4129170786&4294967295,y=v+(E<<5&4294967295|E>>>27),E=C+(v^S&(y^v))+T[6]+3225465664&4294967295,C=y+(E<<9&4294967295|E>>>23),E=S+(y^v&(C^y))+T[11]+643717713&4294967295,S=C+(E<<14&4294967295|E>>>18),E=v+(C^y&(S^C))+T[0]+3921069994&4294967295,v=S+(E<<20&4294967295|E>>>12),E=y+(S^C&(v^S))+T[5]+3593408605&4294967295,y=v+(E<<5&4294967295|E>>>27),E=C+(v^S&(y^v))+T[10]+38016083&4294967295,C=y+(E<<9&4294967295|E>>>23),E=S+(y^v&(C^y))+T[15]+3634488961&4294967295,S=C+(E<<14&4294967295|E>>>18),E=v+(C^y&(S^C))+T[4]+3889429448&4294967295,v=S+(E<<20&4294967295|E>>>12),E=y+(S^C&(v^S))+T[9]+568446438&4294967295,y=v+(E<<5&4294967295|E>>>27),E=C+(v^S&(y^v))+T[14]+3275163606&4294967295,C=y+(E<<9&4294967295|E>>>23),E=S+(y^v&(C^y))+T[3]+4107603335&4294967295,S=C+(E<<14&4294967295|E>>>18),E=v+(C^y&(S^C))+T[8]+1163531501&4294967295,v=S+(E<<20&4294967295|E>>>12),E=y+(S^C&(v^S))+T[13]+2850285829&4294967295,y=v+(E<<5&4294967295|E>>>27),E=C+(v^S&(y^v))+T[2]+4243563512&4294967295,C=y+(E<<9&4294967295|E>>>23),E=S+(y^v&(C^y))+T[7]+1735328473&4294967295,S=C+(E<<14&4294967295|E>>>18),E=v+(C^y&(S^C))+T[12]+2368359562&4294967295,v=S+(E<<20&4294967295|E>>>12),E=y+(v^S^C)+T[5]+4294588738&4294967295,y=v+(E<<4&4294967295|E>>>28),E=C+(y^v^S)+T[8]+2272392833&4294967295,C=y+(E<<11&4294967295|E>>>21),E=S+(C^y^v)+T[11]+1839030562&4294967295,S=C+(E<<16&4294967295|E>>>16),E=v+(S^C^y)+T[14]+4259657740&4294967295,v=S+(E<<23&4294967295|E>>>9),E=y+(v^S^C)+T[1]+2763975236&4294967295,y=v+(E<<4&4294967295|E>>>28),E=C+(y^v^S)+T[4]+1272893353&4294967295,C=y+(E<<11&4294967295|E>>>21),E=S+(C^y^v)+T[7]+4139469664&4294967295,S=C+(E<<16&4294967295|E>>>16),E=v+(S^C^y)+T[10]+3200236656&4294967295,v=S+(E<<23&4294967295|E>>>9),E=y+(v^S^C)+T[13]+681279174&4294967295,y=v+(E<<4&4294967295|E>>>28),E=C+(y^v^S)+T[0]+3936430074&4294967295,C=y+(E<<11&4294967295|E>>>21),E=S+(C^y^v)+T[3]+3572445317&4294967295,S=C+(E<<16&4294967295|E>>>16),E=v+(S^C^y)+T[6]+76029189&4294967295,v=S+(E<<23&4294967295|E>>>9),E=y+(v^S^C)+T[9]+3654602809&4294967295,y=v+(E<<4&4294967295|E>>>28),E=C+(y^v^S)+T[12]+3873151461&4294967295,C=y+(E<<11&4294967295|E>>>21),E=S+(C^y^v)+T[15]+530742520&4294967295,S=C+(E<<16&4294967295|E>>>16),E=v+(S^C^y)+T[2]+3299628645&4294967295,v=S+(E<<23&4294967295|E>>>9),E=y+(S^(v|~C))+T[0]+4096336452&4294967295,y=v+(E<<6&4294967295|E>>>26),E=C+(v^(y|~S))+T[7]+1126891415&4294967295,C=y+(E<<10&4294967295|E>>>22),E=S+(y^(C|~v))+T[14]+2878612391&4294967295,S=C+(E<<15&4294967295|E>>>17),E=v+(C^(S|~y))+T[5]+4237533241&4294967295,v=S+(E<<21&4294967295|E>>>11),E=y+(S^(v|~C))+T[12]+1700485571&4294967295,y=v+(E<<6&4294967295|E>>>26),E=C+(v^(y|~S))+T[3]+2399980690&4294967295,C=y+(E<<10&4294967295|E>>>22),E=S+(y^(C|~v))+T[10]+4293915773&4294967295,S=C+(E<<15&4294967295|E>>>17),E=v+(C^(S|~y))+T[1]+2240044497&4294967295,v=S+(E<<21&4294967295|E>>>11),E=y+(S^(v|~C))+T[8]+1873313359&4294967295,y=v+(E<<6&4294967295|E>>>26),E=C+(v^(y|~S))+T[15]+4264355552&4294967295,C=y+(E<<10&4294967295|E>>>22),E=S+(y^(C|~v))+T[6]+2734768916&4294967295,S=C+(E<<15&4294967295|E>>>17),E=v+(C^(S|~y))+T[13]+1309151649&4294967295,v=S+(E<<21&4294967295|E>>>11),E=y+(S^(v|~C))+T[4]+4149444226&4294967295,y=v+(E<<6&4294967295|E>>>26),E=C+(v^(y|~S))+T[11]+3174756917&4294967295,C=y+(E<<10&4294967295|E>>>22),E=S+(y^(C|~v))+T[2]+718787259&4294967295,S=C+(E<<15&4294967295|E>>>17),E=v+(C^(S|~y))+T[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(S+(E<<21&4294967295|E>>>11))&4294967295,_.g[2]=_.g[2]+S&4294967295,_.g[3]=_.g[3]+C&4294967295}r.prototype.v=function(_,y){y===void 0&&(y=_.length);const v=y-this.blockSize,T=this.C;let S=this.h,C=0;for(;C<y;){if(S==0)for(;C<=v;)i(this,_,C),C+=this.blockSize;if(typeof _=="string"){for(;C<y;)if(T[S++]=_.charCodeAt(C++),S==this.blockSize){i(this,T),S=0;break}}else for(;C<y;)if(T[S++]=_[C++],S==this.blockSize){i(this,T),S=0;break}}this.h=S,this.o+=y},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;y=this.o*8;for(var v=_.length-8;v<_.length;++v)_[v]=y&255,y/=256;for(this.v(_),_=Array(16),y=0,v=0;v<4;++v)for(let T=0;T<32;T+=8)_[y++]=this.g[v]>>>T&255;return _};function s(_,y){var v=l;return Object.prototype.hasOwnProperty.call(v,_)?v[_]:v[_]=y(_)}function o(_,y){this.h=y;const v=[];let T=!0;for(let S=_.length-1;S>=0;S--){const C=_[S]|0;T&&C==y||(v[S]=C,T=!1)}this.g=v}var l={};function u(_){return-128<=_&&_<128?s(_,function(y){return new o([y|0],y<0?-1:0)}):new o([_|0],_<0?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return p;if(_<0)return M(h(-_));const y=[];let v=1;for(let T=0;_>=v;T++)y[T]=_/v|0,v*=4294967296;return new o(y,0)}function f(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return M(f(_.substring(1),y));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(y,8));let T=p;for(let C=0;C<_.length;C+=8){var S=Math.min(8,_.length-C);const E=parseInt(_.substring(C,C+S),y);S<8?(S=h(Math.pow(y,S)),T=T.j(S).add(h(E))):(T=T.j(v),T=T.add(h(E)))}return T}var p=u(0),g=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-M(this).m();let _=0,y=1;for(let v=0;v<this.g.length;v++){const T=this.i(v);_+=(T>=0?T:4294967296+T)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(P(this))return"0";if(D(this))return"-"+M(this).toString(_);const y=h(Math.pow(_,6));var v=this;let T="";for(;;){const S=V(v,y).g;v=I(v,S.j(y));let C=((v.g.length>0?v.g[0]:v.h)>>>0).toString(_);if(v=S,P(v))return C+T;for(;C.length<6;)C="0"+C;T=C+T}},t.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function P(_){if(_.h!=0)return!1;for(let y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function D(_){return _.h==-1}t.l=function(_){return _=I(this,_),D(_)?-1:P(_)?0:1};function M(_){const y=_.g.length,v=[];for(let T=0;T<y;T++)v[T]=~_.g[T];return new o(v,~_.h).add(g)}t.abs=function(){return D(this)?M(this):this},t.add=function(_){const y=Math.max(this.g.length,_.g.length),v=[];let T=0;for(let S=0;S<=y;S++){let C=T+(this.i(S)&65535)+(_.i(S)&65535),E=(C>>>16)+(this.i(S)>>>16)+(_.i(S)>>>16);T=E>>>16,C&=65535,E&=65535,v[S]=E<<16|C}return new o(v,v[v.length-1]&-2147483648?-1:0)};function I(_,y){return _.add(M(y))}t.j=function(_){if(P(this)||P(_))return p;if(D(this))return D(_)?M(this).j(M(_)):M(M(this).j(_));if(D(_))return M(this.j(M(_)));if(this.l(k)<0&&_.l(k)<0)return h(this.m()*_.m());const y=this.g.length+_.g.length,v=[];for(var T=0;T<2*y;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(let S=0;S<_.g.length;S++){const C=this.i(T)>>>16,E=this.i(T)&65535,De=_.i(S)>>>16,Lt=_.i(S)&65535;v[2*T+2*S]+=E*Lt,w(v,2*T+2*S),v[2*T+2*S+1]+=C*Lt,w(v,2*T+2*S+1),v[2*T+2*S+1]+=E*De,w(v,2*T+2*S+1),v[2*T+2*S+2]+=C*De,w(v,2*T+2*S+2)}for(_=0;_<y;_++)v[_]=v[2*_+1]<<16|v[2*_];for(_=y;_<2*y;_++)v[_]=0;return new o(v,0)};function w(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function A(_,y){this.g=_,this.h=y}function V(_,y){if(P(y))throw Error("division by zero");if(P(_))return new A(p,p);if(D(_))return y=V(M(_),y),new A(M(y.g),M(y.h));if(D(y))return y=V(_,M(y)),new A(M(y.g),y.h);if(_.g.length>30){if(D(_)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,T=y;T.l(_)<=0;)v=U(v),T=U(T);var S=F(v,1),C=F(T,1);for(T=F(T,2),v=F(v,2);!P(T);){var E=C.add(T);E.l(_)<=0&&(S=S.add(v),C=E),T=F(T,1),v=F(v,1)}return y=I(_,S.j(y)),new A(S,y)}for(S=p;_.l(y)>=0;){for(v=Math.max(1,Math.floor(_.m()/y.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),C=h(v),E=C.j(y);D(E)||E.l(_)>0;)v-=T,C=h(v),E=C.j(y);P(C)&&(C=g),S=S.add(C),_=I(_,E)}return new A(S,_)}t.B=function(_){return V(this,_).h},t.and=function(_){const y=Math.max(this.g.length,_.g.length),v=[];for(let T=0;T<y;T++)v[T]=this.i(T)&_.i(T);return new o(v,this.h&_.h)},t.or=function(_){const y=Math.max(this.g.length,_.g.length),v=[];for(let T=0;T<y;T++)v[T]=this.i(T)|_.i(T);return new o(v,this.h|_.h)},t.xor=function(_){const y=Math.max(this.g.length,_.g.length),v=[];for(let T=0;T<y;T++)v[T]=this.i(T)^_.i(T);return new o(v,this.h^_.h)};function U(_){const y=_.g.length+1,v=[];for(let T=0;T<y;T++)v[T]=_.i(T)<<1|_.i(T-1)>>>31;return new o(v,_.h)}function F(_,y){const v=y>>5;y%=32;const T=_.g.length-v,S=[];for(let C=0;C<T;C++)S[C]=y>0?_.i(C+v)>>>y|_.i(C+v+1)<<32-y:_.i(C+v);return new o(S,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,g0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,cr=o}).apply(typeof og<"u"?og:typeof self<"u"?self:typeof window<"u"?window:{});var Sa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var y0,bs,_0,Ga,Rh,v0,w0,E0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sa=="object"&&Sa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var R=a[m];if(!(R in d))break e;d=d[R]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(c){var d=[],m;for(m in c)Object.prototype.hasOwnProperty.call(c,m)&&d.push([m,c[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,R,x){for(var j=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)j[Z-2]=arguments[Z];return c.prototype[R].apply(m,j)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function k(a){const c=a.length;if(c>0){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function P(a,c){for(let m=1;m<arguments.length;m++){const R=arguments[m];var d=typeof R;if(d=d!="object"?d:R?Array.isArray(R)?"array":d:"null",d=="array"||d=="object"&&typeof R.length=="number"){d=a.length||0;const x=R.length||0;a.length=d+x;for(let j=0;j<x;j++)a[d+j]=R[j]}else a.push(R)}}class D{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function M(a){o.setTimeout(()=>{throw a},0)}function I(){var a=_;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class w{constructor(){this.h=this.g=null}add(c,d){const m=A.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var A=new D(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let U,F=!1,_=new w,y=()=>{const a=Promise.resolve(void 0);U=()=>{a.then(v)}};function v(){for(var a;a=I();){try{a.h.call(a.g)}catch(d){M(d)}var c=A;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}F=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function E(a){return/^[\s\xa0]*$/.test(a)}function De(a,c){S.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}p(De,S),De.prototype.init=function(a,c){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&De.Z.h.call(this)},De.prototype.h=function(){De.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Lt="closure_listenable_"+(Math.random()*1e6|0),Cr=0;function Kt(a,c,d,m,R){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=R,this.key=++Cr,this.da=this.fa=!1}function z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function G(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function J(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function le(a){const c={};for(const d in a)c[d]=a[d];return c}const ye="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pn(a,c){let d,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(d in m)a[d]=m[d];for(let x=0;x<ye.length;x++)d=ye[x],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function at(a){this.src=a,this.g={},this.h=0}at.prototype.add=function(a,c,d,m,R){const x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);const j=ft(a,c,m,R);return j>-1?(c=a[j],d||(c.fa=!1)):(c=new Kt(c,this.src,x,!!m,R),c.fa=d,a.push(c)),c};function Qt(a,c){const d=c.type;if(d in a.g){var m=a.g[d],R=Array.prototype.indexOf.call(m,c,void 0),x;(x=R>=0)&&Array.prototype.splice.call(m,R,1),x&&(z(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ft(a,c,d,m){for(let R=0;R<a.length;++R){const x=a[R];if(!x.da&&x.listener==c&&x.capture==!!d&&x.ha==m)return R}return-1}var Xt="closure_lm_"+(Math.random()*1e6|0),as={};function Bo(a,c,d,m,R){if(Array.isArray(c)){for(let x=0;x<c.length;x++)Bo(a,c[x],d,m,R);return null}return d=Go(d),a&&a[Lt]?a.J(c,d,l(m)?!!m.capture:!1,R):$o(a,c,d,!1,m,R)}function $o(a,c,d,m,R,x){if(!c)throw Error("Invalid event type");const j=l(R)?!!R.capture:!!R;let Z=$e(a);if(Z||(a[Xt]=Z=new at(a)),d=Z.add(c,d,m,j,x),d.proxy)return d;if(m=Ho(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)C||(R=j),R===void 0&&(R=!1),a.addEventListener(c.toString(),m,R);else if(a.attachEvent)a.attachEvent(W(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ho(){function a(d){return c.call(a.src,a.listener,d)}const c=he;return a}function Wo(a,c,d,m,R){if(Array.isArray(c))for(var x=0;x<c.length;x++)Wo(a,c[x],d,m,R);else m=l(m)?!!m.capture:!!m,d=Go(d),a&&a[Lt]?(a=a.i,x=String(c).toString(),x in a.g&&(c=a.g[x],d=ft(c,d,m,R),d>-1&&(z(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[x],a.h--)))):a&&(a=$e(a))&&(c=a.g[c.toString()],a=-1,c&&(a=ft(c,d,m,R)),(d=a>-1?c[a]:null)&&pt(d))}function pt(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Lt])Qt(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(W(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=$e(c))?(Qt(d,a),d.h==0&&(d.src=null,c[Xt]=null)):z(a)}}}function W(a){return a in as?as[a]:as[a]="on"+a}function he(a,c){if(a.da)a=!0;else{c=new De(c,this);const d=a.listener,m=a.ha||a.src;a.fa&&pt(a),a=d.call(m,c)}return a}function $e(a){return a=a[Xt],a instanceof at?a:null}var qo="__closure_events_fn_"+(Math.random()*1e9>>>0);function Go(a){return typeof a=="function"?a:(a[qo]||(a[qo]=function(c){return a.handleEvent(c)}),a[qo])}function ke(){T.call(this),this.i=new at(this),this.M=this,this.G=null}p(ke,T),ke.prototype[Lt]=!0,ke.prototype.removeEventListener=function(a,c,d,m){Wo(this,a,c,d,m)};function He(a,c){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new S(c,a);else if(c instanceof S)c.target=c.target||a;else{var R=c;c=new S(m,a),pn(c,R)}R=!0;let x,j;if(d)for(j=d.length-1;j>=0;j--)x=c.g=d[j],R=Ko(x,m,!0,c)&&R;if(x=c.g=a,R=Ko(x,m,!0,c)&&R,R=Ko(x,m,!1,c)&&R,d)for(j=0;j<d.length;j++)x=c.g=d[j],R=Ko(x,m,!1,c)&&R}ke.prototype.N=function(){if(ke.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let m=0;m<d.length;m++)z(d[m]);delete a.g[c],a.h--}}this.G=null},ke.prototype.J=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},ke.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function Ko(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let R=!0;for(let x=0;x<c.length;++x){const j=c[x];if(j&&!j.da&&j.capture==d){const Z=j.listener,Ve=j.ha||j.src;j.fa&&Qt(a.i,j),R=Z.call(Ve,m)!==!1&&R}}return R&&!m.defaultPrevented}function Ww(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function Pf(a){a.g=Ww(()=>{a.g=null,a.i&&(a.i=!1,Pf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class qw extends T{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Pf(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ls(a){T.call(this),this.h=a,this.g={}}p(ls,T);var xf=[];function Nf(a){G(a.g,function(c,d){this.g.hasOwnProperty(d)&&pt(c)},a),a.g={}}ls.prototype.N=function(){ls.Z.N.call(this),Nf(this)},ls.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Cu=o.JSON.stringify,Gw=o.JSON.parse,Kw=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Df(){}function Vf(){}var us={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ru(){S.call(this,"d")}p(Ru,S);function Pu(){S.call(this,"c")}p(Pu,S);var Rr={},Of=null;function Qo(){return Of=Of||new ke}Rr.Ia="serverreachability";function Mf(a){S.call(this,Rr.Ia,a)}p(Mf,S);function cs(a){const c=Qo();He(c,new Mf(c))}Rr.STAT_EVENT="statevent";function bf(a,c){S.call(this,Rr.STAT_EVENT,a),this.stat=c}p(bf,S);function lt(a){const c=Qo();He(c,new bf(c,a))}Rr.Ja="timingevent";function Lf(a,c){S.call(this,Rr.Ja,a),this.size=c}p(Lf,S);function hs(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function ds(){this.g=!0}ds.prototype.ua=function(){this.g=!1};function Qw(a,c,d,m,R,x){a.info(function(){if(a.g)if(x){var j="",Z=x.split("&");for(let ue=0;ue<Z.length;ue++){var Ve=Z[ue].split("=");if(Ve.length>1){const Ue=Ve[0];Ve=Ve[1];const Jt=Ue.split("_");j=Jt.length>=2&&Jt[1]=="type"?j+(Ue+"="+Ve+"&"):j+(Ue+"=redacted&")}}}else j=null;else j=x;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+c+`
`+d+`
`+j})}function Xw(a,c,d,m,R,x,j){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+c+`
`+d+`
`+x+" "+j})}function ii(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Jw(a,d)+(m?" "+m:"")})}function Yw(a,c){a.info(function(){return"TIMEOUT: "+c})}ds.prototype.info=function(){};function Jw(a,c){if(!a.g)return c;if(!c)return null;try{const x=JSON.parse(c);if(x){for(a=0;a<x.length;a++)if(Array.isArray(x[a])){var d=x[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var R=m[0];if(R!="noop"&&R!="stop"&&R!="close")for(let j=1;j<m.length;j++)m[j]=""}}}}return Cu(x)}catch{return c}}var Xo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ff={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Uf;function xu(){}p(xu,Df),xu.prototype.g=function(){return new XMLHttpRequest},Uf=new xu;function fs(a){return encodeURIComponent(String(a))}function Zw(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function Vn(a,c,d,m){this.j=a,this.i=c,this.l=d,this.S=m||1,this.V=new ls(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new jf}function jf(){this.i=null,this.g="",this.h=!1}var zf={},Nu={};function Du(a,c,d){a.M=1,a.A=Jo(Yt(c)),a.u=d,a.R=!0,Bf(a,null)}function Bf(a,c){a.F=Date.now(),Yo(a),a.B=Yt(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),tp(d.i,"t",m),a.C=0,d=a.j.L,a.h=new jf,a.g=vp(a.j,d?c:null,!a.u),a.P>0&&(a.O=new qw(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,m=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(xf[0]=R.toString()),R=xf);for(let x=0;x<R.length;x++){const j=Bo(d,R[x],m||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=a.J?le(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),cs(),Qw(a.i,a.v,a.B,a.l,a.S,a.u)}Vn.prototype.ba=function(a){a=a.target;const c=this.O;c&&bn(a)==3?c.j():this.Y(a)},Vn.prototype.Y=function(a){try{if(a==this.g)e:{const Z=bn(this.g),Ve=this.g.ya(),ue=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||lp(this.g)))){this.K||Z!=4||Ve==7||(Ve==8||ue<=0?cs(3):cs(2)),Vu(this);var c=this.g.ca();this.X=c;var d=eE(this);if(this.o=c==200,Xw(this.i,this.v,this.B,this.l,this.S,Z,c),this.o){if(this.U&&!this.L){t:{if(this.g){var m,R=this.g;if((m=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(m)){var x=m;break t}}x=null}if(a=x)ii(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ou(this,a);else{this.o=!1,this.m=3,lt(12),Pr(this),ps(this);break e}}if(this.R){a=!0;let Ue;for(;!this.K&&this.C<d.length;)if(Ue=tE(this,d),Ue==Nu){Z==4&&(this.m=4,lt(14),a=!1),ii(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==zf){this.m=4,lt(15),ii(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else ii(this.i,this.l,Ue,null),Ou(this,Ue);if($f(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||d.length!=0||this.h.h||(this.m=1,lt(16),a=!1),this.o=this.o&&a,!a)ii(this.i,this.l,d,"[Invalid Chunked Response]"),Pr(this),ps(this);else if(d.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Bu(j),j.P=!0,lt(11))}}else ii(this.i,this.l,d,null),Ou(this,d);Z==4&&Pr(this),this.o&&!this.K&&(Z==4?mp(this.j,this):(this.o=!1,Yo(this)))}else mE(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,lt(12)):(this.m=0,lt(13)),Pr(this),ps(this)}}}catch{}finally{}};function eE(a){if(!$f(a))return a.g.la();const c=lp(a.g);if(c==="")return"";let d="";const m=c.length,R=bn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Pr(a),ps(a),"";a.h.i=new o.TextDecoder}for(let x=0;x<m;x++)a.h.h=!0,d+=a.h.i.decode(c[x],{stream:!(R&&x==m-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function $f(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function tE(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?Nu:(d=Number(c.substring(d,m)),isNaN(d)?zf:(m+=1,m+d>c.length?Nu:(c=c.slice(m,m+d),a.C=m+d,c)))}Vn.prototype.cancel=function(){this.K=!0,Pr(this)};function Yo(a){a.T=Date.now()+a.H,Hf(a,a.H)}function Hf(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=hs(h(a.aa,a),c)}function Vu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Vn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Yw(this.i,this.B),this.M!=2&&(cs(),lt(17)),Pr(this),this.m=2,ps(this)):Hf(this,this.T-a)};function ps(a){a.j.I==0||a.K||mp(a.j,a)}function Pr(a){Vu(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Nf(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Ou(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||Mu(d.h,a))){if(!a.L&&Mu(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)ra(d),ta(d);else break e;zu(d),lt(18)}}else d.xa=R[1],0<d.xa-d.K&&R[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=hs(h(d.Va,d),6e3));Gf(d.h)<=1&&d.ta&&(d.ta=void 0)}else Nr(d,11)}else if((a.L||d.g==a)&&ra(d),!E(c))for(R=d.Ba.g.parse(c),c=0;c<R.length;c++){let ue=R[c];const Ue=ue[0];if(!(Ue<=d.K))if(d.K=Ue,ue=ue[1],d.I==2)if(ue[0]=="c"){d.M=ue[1],d.ba=ue[2];const Jt=ue[3];Jt!=null&&(d.ka=Jt,d.j.info("VER="+d.ka));const Dr=ue[4];Dr!=null&&(d.za=Dr,d.j.info("SVER="+d.za));const Ln=ue[5];Ln!=null&&typeof Ln=="number"&&Ln>0&&(m=1.5*Ln,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Fn=a.g;if(Fn){const sa=Fn.g?Fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(sa){var x=m.h;x.g||sa.indexOf("spdy")==-1&&sa.indexOf("quic")==-1&&sa.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(bu(x,x.h),x.h=null))}if(m.G){const $u=Fn.g?Fn.g.getResponseHeader("X-HTTP-Session-Id"):null;$u&&(m.wa=$u,de(m.J,m.G,$u))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var j=a;if(m.na=_p(m,m.L?m.ba:null,m.W),j.L){Kf(m.h,j);var Z=j,Ve=m.O;Ve&&(Z.H=Ve),Z.D&&(Vu(Z),Yo(Z)),m.g=j}else fp(m);d.i.length>0&&na(d)}else ue[0]!="stop"&&ue[0]!="close"||Nr(d,7);else d.I==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Nr(d,7):ju(d):ue[0]!="noop"&&d.l&&d.l.qa(ue),d.A=0)}}cs(4)}catch{}}var nE=class{constructor(a,c){this.g=a,this.map=c}};function Wf(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function qf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Gf(a){return a.h?1:a.g?a.g.size:0}function Mu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function bu(a,c){a.g?a.g.add(c):a.h=c}function Kf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Wf.prototype.cancel=function(){if(this.i=Qf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Qf(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return k(a.i)}var Xf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rE(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let R,x=null;m>=0?(R=a[d].substring(0,m),x=a[d].substring(m+1)):R=a[d],c(R,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function On(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof On?(this.l=a.l,ms(this,a.j),this.o=a.o,this.g=a.g,gs(this,a.u),this.h=a.h,Lu(this,np(a.i)),this.m=a.m):a&&(c=String(a).match(Xf))?(this.l=!1,ms(this,c[1]||"",!0),this.o=ys(c[2]||""),this.g=ys(c[3]||"",!0),gs(this,c[4]),this.h=ys(c[5]||"",!0),Lu(this,c[6]||"",!0),this.m=ys(c[7]||"")):(this.l=!1,this.i=new vs(null,this.l))}On.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(_s(c,Yf,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(_s(c,Yf,!0),"@"),a.push(fs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(_s(d,d.charAt(0)=="/"?oE:sE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",_s(d,lE)),a.join("")},On.prototype.resolve=function(a){const c=Yt(this);let d=!!a.j;d?ms(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var m=a.h;if(d)gs(c,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var R=c.h.lastIndexOf("/");R!=-1&&(m=c.h.slice(0,R+1)+m)}if(R=m,R==".."||R==".")m="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){m=R.lastIndexOf("/",0)==0,R=R.split("/");const x=[];for(let j=0;j<R.length;){const Z=R[j++];Z=="."?m&&j==R.length&&x.push(""):Z==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),m&&j==R.length&&x.push("")):(x.push(Z),m=!0)}m=x.join("/")}else m=R}return d?c.h=m:d=a.i.toString()!=="",d?Lu(c,np(a.i)):d=!!a.m,d&&(c.m=a.m),c};function Yt(a){return new On(a)}function ms(a,c,d){a.j=d?ys(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function gs(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Lu(a,c,d){c instanceof vs?(a.i=c,uE(a.i,a.l)):(d||(c=_s(c,aE)),a.i=new vs(c,a.l))}function de(a,c,d){a.i.set(c,d)}function Jo(a){return de(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ys(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function _s(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,iE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function iE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Yf=/[#\/\?@]/g,sE=/[#\?:]/g,oE=/[#\?]/g,aE=/[#\?@]/g,lE=/#/g;function vs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function xr(a){a.g||(a.g=new Map,a.h=0,a.i&&rE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=vs.prototype,t.add=function(a,c){xr(this),this.i=null,a=si(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Jf(a,c){xr(a),c=si(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Zf(a,c){return xr(a),c=si(a,c),a.g.has(c)}t.forEach=function(a,c){xr(this),this.g.forEach(function(d,m){d.forEach(function(R){a.call(c,R,m,this)},this)},this)};function ep(a,c){xr(a);let d=[];if(typeof c=="string")Zf(a,c)&&(d=d.concat(a.g.get(si(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return xr(this),this.i=null,a=si(this,a),Zf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=ep(this,a),a.length>0?String(a[0]):c):c};function tp(a,c,d){Jf(a,c),d.length>0&&(a.i=null,a.g.set(si(a,c),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let m=0;m<c.length;m++){var d=c[m];const R=fs(d);d=ep(this,d);for(let x=0;x<d.length;x++){let j=R;d[x]!==""&&(j+="="+fs(d[x])),a.push(j)}}return this.i=a.join("&")};function np(a){const c=new vs;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function si(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function uE(a,c){c&&!a.j&&(xr(a),a.i=null,a.g.forEach(function(d,m){const R=m.toLowerCase();m!=R&&(Jf(this,m),tp(this,R,d))},a)),a.j=c}function cE(a,c){const d=new ds;if(o.Image){const m=new Image;m.onload=f(Mn,d,"TestLoadImage: loaded",!0,c,m),m.onerror=f(Mn,d,"TestLoadImage: error",!1,c,m),m.onabort=f(Mn,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=f(Mn,d,"TestLoadImage: timeout",!1,c,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function hE(a,c){const d=new ds,m=new AbortController,R=setTimeout(()=>{m.abort(),Mn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(x=>{clearTimeout(R),x.ok?Mn(d,"TestPingServer: ok",!0,c):Mn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Mn(d,"TestPingServer: error",!1,c)})}function Mn(a,c,d,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(d)}catch{}}function dE(){this.g=new Kw}function Fu(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Fu,Df),Fu.prototype.g=function(){return new Zo(this.i,this.h)};function Zo(a,c){ke.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Zo,ke),t=Zo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,Es(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ws(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Es(this)),this.g&&(this.readyState=3,Es(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;rp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function rp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ws(this):Es(this),this.readyState==3&&rp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ws(this))},t.Na=function(a){this.g&&(this.response=a,ws(this))},t.ga=function(){this.g&&ws(this)};function ws(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Es(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Es(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Zo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ip(a){let c="";return G(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function Uu(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=ip(d),typeof a=="string"?d!=null&&fs(d):de(a,c,d))}function Se(a){ke.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Se,ke);var fE=/^https?$/i,pE=["POST","PUT"];t=Se.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Uf.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(x){sp(this,x);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)d.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const x of m.keys())d.set(x,m.get(x));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(pE,c,void 0)>=0)||m||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,j]of d)this.g.setRequestHeader(x,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(x){sp(this,x)}};function sp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,op(a),ea(a)}function op(a){a.A||(a.A=!0,He(a,"complete"),He(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,He(this,"complete"),He(this,"abort"),ea(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ea(this,!0)),Se.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ap(this):this.Xa())},t.Xa=function(){ap(this)};function ap(a){if(a.h&&typeof s<"u"){if(a.v&&bn(a)==4)setTimeout(a.Ca.bind(a),0);else if(He(a,"readystatechange"),bn(a)==4){a.h=!1;try{const x=a.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=x===0){let j=String(a.D).match(Xf)[1]||null;!j&&o.self&&o.self.location&&(j=o.self.location.protocol.slice(0,-1)),m=!fE.test(j?j.toLowerCase():"")}d=m}if(d)He(a,"complete"),He(a,"success");else{a.o=6;try{var R=bn(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",op(a)}}finally{ea(a)}}}}function ea(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||He(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function bn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return bn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Gw(c)}};function lp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function mE(a){const c={};a=(a.g&&bn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(E(a[m]))continue;var d=Zw(a[m]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=c[R]||[];c[R]=x,x.push(d)}J(c,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ts(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function up(a){this.za=0,this.i=[],this.j=new ds,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ts("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ts("baseRetryDelayMs",5e3,a),this.Za=Ts("retryDelaySeedMs",1e4,a),this.Ta=Ts("forwardChannelMaxRetries",2,a),this.va=Ts("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Wf(a&&a.concurrentRequestLimit),this.Ba=new dE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=up.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,m){lt(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=_p(this,null,this.W),na(this)};function ju(a){if(cp(a),a.I==3){var c=a.V++,d=Yt(a.J);if(de(d,"SID",a.M),de(d,"RID",c),de(d,"TYPE","terminate"),Is(a,d),c=new Vn(a,a.j,c),c.M=2,c.A=Jo(Yt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=vp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Yo(c)}yp(a)}function ta(a){a.g&&(Bu(a),a.g.cancel(),a.g=null)}function cp(a){ta(a),a.v&&(o.clearTimeout(a.v),a.v=null),ra(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function na(a){if(!qf(a.h)&&!a.m){a.m=!0;var c=a.Ea;U||y(),F||(U(),F=!0),_.add(c,a),a.D=0}}function gE(a,c){return Gf(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=hs(h(a.Ea,a,c),gp(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new Vn(this,this.j,a);let x=this.o;if(this.U&&(x?(x=le(x),pn(x,this.U)):x=this.U),this.u!==null||this.R||(R.J=x,x=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=dp(this,R,c),d=Yt(this.J),de(d,"RID",a),de(d,"CVER",22),this.G&&de(d,"X-HTTP-Session-Id",this.G),Is(this,d),x&&(this.R?c="headers="+fs(ip(x))+"&"+c:this.u&&Uu(d,this.u,x)),bu(this.h,R),this.Ra&&de(d,"TYPE","init"),this.S?(de(d,"$req",c),de(d,"SID","null"),R.U=!0,Du(R,d,null)):Du(R,d,c),this.I=2}}else this.I==3&&(a?hp(this,a):this.i.length==0||qf(this.h)||hp(this))};function hp(a,c){var d;c?d=c.l:d=a.V++;const m=Yt(a.J);de(m,"SID",a.M),de(m,"RID",d),de(m,"AID",a.K),Is(a,m),a.u&&a.o&&Uu(m,a.u,a.o),d=new Vn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=dp(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),bu(a.h,d),Du(d,m,c)}function Is(a,c){a.H&&G(a.H,function(d,m){de(c,m,d)}),a.l&&G({},function(d,m){de(c,m,d)})}function dp(a,c,d){d=Math.min(a.i.length,d);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var R=a.i;let Z=-1;for(;;){const Ve=["count="+d];Z==-1?d>0?(Z=R[0].g,Ve.push("ofs="+Z)):Z=0:Ve.push("ofs="+Z);let ue=!0;for(let Ue=0;Ue<d;Ue++){var x=R[Ue].g;const Jt=R[Ue].map;if(x-=Z,x<0)Z=Math.max(0,R[Ue].g-100),ue=!1;else try{x="req"+x+"_"||"";try{var j=Jt instanceof Map?Jt:Object.entries(Jt);for(const[Dr,Ln]of j){let Fn=Ln;l(Ln)&&(Fn=Cu(Ln)),Ve.push(x+Dr+"="+encodeURIComponent(Fn))}}catch(Dr){throw Ve.push(x+"type="+encodeURIComponent("_badmap")),Dr}}catch{m&&m(Jt)}}if(ue){j=Ve.join("&");break e}}j=void 0}return a=a.i.splice(0,d),c.G=a,j}function fp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;U||y(),F||(U(),F=!0),_.add(c,a),a.A=0}}function zu(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=hs(h(a.Da,a),gp(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,pp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=hs(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,lt(10),ta(this),pp(this))};function Bu(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function pp(a){a.g=new Vn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Yt(a.na);de(c,"RID","rpc"),de(c,"SID",a.M),de(c,"AID",a.K),de(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&de(c,"TO",a.ia),de(c,"TYPE","xmlhttp"),Is(a,c),a.u&&a.o&&Uu(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Jo(Yt(c)),d.u=null,d.R=!0,Bf(d,a)}t.Va=function(){this.C!=null&&(this.C=null,ta(this),zu(this),lt(19))};function ra(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function mp(a,c){var d=null;if(a.g==c){ra(a),Bu(a),a.g=null;var m=2}else if(Mu(a.h,c))d=c.G,Kf(a.h,c),m=1;else return;if(a.I!=0){if(c.o)if(m==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var R=a.D;m=Qo(),He(m,new Lf(m,d)),na(a)}else fp(a);else if(R=c.m,R==3||R==0&&c.X>0||!(m==1&&gE(a,c)||m==2&&zu(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),R){case 1:Nr(a,5);break;case 4:Nr(a,10);break;case 3:Nr(a,6);break;default:Nr(a,2)}}}function gp(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function Nr(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),m=a.Ua;const R=!m;m=new On(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ms(m,"https"),Jo(m),R?cE(m.toString(),d):hE(m.toString(),d)}else lt(2);a.I=0,a.l&&a.l.pa(c),yp(a),cp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function yp(a){if(a.I=0,a.ja=[],a.l){const c=Qf(a.h);(c.length!=0||a.i.length!=0)&&(P(a.ja,c),P(a.ja,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.oa()}}function _p(a,c,d){var m=d instanceof On?Yt(d):new On(d);if(m.g!="")c&&(m.g=c+"."+m.g),gs(m,m.u);else{var R=o.location;m=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;const x=new On(null);m&&ms(x,m),c&&(x.g=c),R&&gs(x,R),d&&(x.h=d),m=x}return d=a.G,c=a.wa,d&&c&&de(m,d,c),de(m,"VER",a.ka),Is(a,m),m}function vp(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Se(new Fu({ab:d})):new Se(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wp(){}t=wp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ia(){}ia.prototype.g=function(a,c){return new Tt(a,c)};function Tt(a,c){ke.call(this),this.g=new up(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!E(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new oi(this)}p(Tt,ke),Tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){ju(this.g)},Tt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Cu(a),a=d);c.i.push(new nE(c.Ya++,a)),c.I==3&&na(c)},Tt.prototype.N=function(){this.g.l=null,delete this.j,ju(this.g),delete this.g,Tt.Z.N.call(this)};function Ep(a){Ru.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}p(Ep,Ru);function Tp(){Pu.call(this),this.status=1}p(Tp,Pu);function oi(a){this.g=a}p(oi,wp),oi.prototype.ra=function(){He(this.g,"a")},oi.prototype.qa=function(a){He(this.g,new Ep(a))},oi.prototype.pa=function(a){He(this.g,new Tp)},oi.prototype.oa=function(){He(this.g,"b")},ia.prototype.createWebChannel=ia.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,E0=function(){return new ia},w0=function(){return Qo()},v0=Rr,Rh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Xo.NO_ERROR=0,Xo.TIMEOUT=8,Xo.HTTP_ERROR=6,Ga=Xo,Ff.COMPLETE="complete",_0=Ff,Vf.EventType=us,us.OPEN="a",us.CLOSE="b",us.ERROR="c",us.MESSAGE="d",ke.prototype.listen=ke.prototype.J,bs=Vf,Se.prototype.listenOnce=Se.prototype.K,Se.prototype.getLastError=Se.prototype.Ha,Se.prototype.getLastErrorCode=Se.prototype.ya,Se.prototype.getStatus=Se.prototype.ca,Se.prototype.getResponseJson=Se.prototype.La,Se.prototype.getResponseText=Se.prototype.la,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Fa,y0=Se}).apply(typeof Sa<"u"?Sa:typeof self<"u"?self:typeof window<"u"?window:{});const ag="@firebase/firestore",lg="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new jd("@firebase/firestore");function li(){return Jr.logLevel}function B(t,...e){if(Jr.logLevel<=te.DEBUG){const n=e.map(Xd);Jr.debug(`Firestore (${rs}): ${t}`,...n)}}function Pn(t,...e){if(Jr.logLevel<=te.ERROR){const n=e.map(Xd);Jr.error(`Firestore (${rs}): ${t}`,...n)}}function Hi(t,...e){if(Jr.logLevel<=te.WARN){const n=e.map(Xd);Jr.warn(`Firestore (${rs}): ${t}`,...n)}}function Xd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,T0(t,r,n)}function T0(t,e,n){let r=`FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Pn(r),new Error(r)}function oe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||T0(e,i,r)}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Rk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class Pk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xk{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Br;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Br,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Br)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new I0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new et(e)}}class Nk{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Dk{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Nk(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ug{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vk{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Bt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ug(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ug(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Ok(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function Ph(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Ic(i)===Ic(s)?ne(i,s):Ic(i)?1:-1}return ne(t.length,e.length)}const Mk=55296,bk=57343;function Ic(t){const e=t.charCodeAt(0);return e>=Mk&&e<=bk}function Wi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="__name__";class tn{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return tn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=tn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=tn.isNumericId(e),i=tn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?tn.extractNumericId(e).compare(tn.extractNumericId(n)):Ph(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return cr.fromString(e.substring(4,e.length-2))}}class pe extends tn{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const Lk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends tn{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return Lk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cg}static keyField(){return new Ge([cg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(pe.fromString(e))}static fromName(e){return new q(pe.fromString(e).popFirst(5))}static empty(){return new q(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new pe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(t,e,n){if(!n)throw new H(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Fk(t,e,n,r){if(e===!0&&r===!0)throw new H(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hg(t){if(!q.isDocumentKey(t))throw new H(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dg(t){if(q.isDocumentKey(t))throw new H(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function A0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Jd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function hr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jd(t);throw new H(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t,e){const n={typeString:t};return e&&(n.value=e),n}function Lo(t,e){if(!A0(t))throw new H(b.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new H(b.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=-62135596800,pg=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*pg);return new me(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<fg)throw new H(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/pg}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Lo(e,me._jsonSchema))return new me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:Ne("string",me._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new me(0,0))}static max(){return new X(new me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=-1;function Uk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new me(n+1,0):new me(n,r));return new gr(i,q.empty(),e)}function jk(t){return new gr(t.readTime,t.key,Eo)}class gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gr(X.min(),q.empty(),Eo)}static max(){return new gr(X.max(),q.empty(),Eo)}}function zk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $k{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==Bk)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Hk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ss(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}cu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd=-1;function hu(t){return t==null}function Nl(t){return t===0&&1/t==-1/0}function Wk(t){return typeof t=="number"&&Number.isInteger(t)&&!Nl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="";function qk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=mg(e)),e=Gk(t.get(n),e);return mg(e)}function Gk(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case k0:n+="";break;default:n+=s}}return n}function mg(t){return t+k0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ar(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function C0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Aa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Aa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Aa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Aa(this.root,e,this.comparator,!0)}}class Aa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??qe.RED,this.left=i??qe.EMPTY,this.right=s??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yg(this.data.getIterator())}getIteratorFrom(e){return new yg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class yg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new At([])}unionWith(e){let n=new Fe(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new At(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Wi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new R0("Invalid base64 string: "+s):s}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const Kk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yr(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=Kk.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _r(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="server_timestamp",x0="__type__",N0="__previous_value__",D0="__local_write_time__";function ef(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[x0])==null?void 0:r.stringValue)===P0}function du(t){const e=t.mapValue.fields[N0];return ef(e)?du(e):e}function To(t){const e=yr(t.mapValue.fields[D0].timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,n,r,i,s,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const Dl="(default)";class Io{constructor(e,n){this.projectId=e,this.database=n||Dl}static empty(){return new Io("","")}get isDefaultDatabase(){return this.database===Dl}isEqual(e){return e instanceof Io&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0="__type__",Xk="__max__",ka={mapValue:{}},O0="__vector__",Vl="value";function vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ef(t)?4:Jk(t)?9007199254740991:Yk(t)?10:11:K(28295,{value:t})}function dn(t,e){if(t===e)return!0;const n=vr(t);if(n!==vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return To(t).isEqual(To(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=yr(i.timestampValue),l=yr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return _r(i.bytesValue).isEqual(_r(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ce(i.geoPointValue.latitude)===Ce(s.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ce(i.integerValue)===Ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ce(i.doubleValue),l=Ce(s.doubleValue);return o===l?Nl(o)===Nl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Wi(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(gg(o)!==gg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!dn(o[u],l[u])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function So(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function qi(t,e){if(t===e)return 0;const n=vr(t),r=vr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ce(s.integerValue||s.doubleValue),u=Ce(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return _g(t.timestampValue,e.timestampValue);case 4:return _g(To(t),To(e));case 5:return Ph(t.stringValue,e.stringValue);case 6:return function(s,o){const l=_r(s),u=_r(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ne(l[h],u[h]);if(f!==0)return f}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ne(Ce(s.latitude),Ce(o.latitude));return l!==0?l:ne(Ce(s.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return vg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,k,P,D;const l=s.fields||{},u=o.fields||{},h=(g=l[Vl])==null?void 0:g.arrayValue,f=(k=u[Vl])==null?void 0:k.arrayValue,p=ne(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((D=f==null?void 0:f.values)==null?void 0:D.length)||0);return p!==0?p:vg(h,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ka.mapValue&&o===ka.mapValue)return 0;if(s===ka.mapValue)return 1;if(o===ka.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=Ph(u[p],f[p]);if(g!==0)return g;const k=qi(l[u[p]],h[f[p]]);if(k!==0)return k}return ne(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function _g(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=yr(t),r=yr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function vg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=qi(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function Gi(t){return xh(t)}function xh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=yr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _r(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=xh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${xh(n.fields[o])}`;return i+"}"}(t.mapValue):K(61005,{value:t})}function Ka(t){switch(vr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=du(t);return e?16+Ka(e):16;case 5:return 2*t.stringValue.length;case 6:return _r(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Ka(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Ar(r.fields,(s,o)=>{i+=s.length+Ka(o)}),i}(t.mapValue);default:throw K(13486,{value:t})}}function Nh(t){return!!t&&"integerValue"in t}function tf(t){return!!t&&"arrayValue"in t}function wg(t){return!!t&&"nullValue"in t}function Eg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qa(t){return!!t&&"mapValue"in t}function Yk(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[V0])==null?void 0:r.stringValue)===O0}function Ys(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ar(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ys(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ys(t.arrayValue.values[n]);return e}return{...t}}function Jk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Xk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ys(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Qa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ar(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new yt(Ys(this.value))}}function M0(t){const e=[];return Ar(t.fields,(n,r)=>{const i=new Ge([n]);if(Qa(r)){const s=M0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new At(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new nt(e,0,X.min(),X.min(),X.min(),yt.empty(),0)}static newFoundDocument(e,n,r,i){return new nt(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new nt(e,2,n,X.min(),X.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,X.min(),X.min(),yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n){this.position=e,this.inclusive=n}}function Tg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=qi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ig(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n="asc"){this.field=e,this.dir=n}}function Zk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{}class Me extends b0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new tC(e,n,r):n==="array-contains"?new iC(e,r):n==="in"?new sC(e,r):n==="not-in"?new oC(e,r):n==="array-contains-any"?new aC(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new nC(e,r):new rC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(qi(n,this.value)):n!==null&&vr(this.value)===vr(n)&&this.matchesComparison(qi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends b0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new fn(e,n)}matches(e){return L0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function L0(t){return t.op==="and"}function F0(t){return eC(t)&&L0(t)}function eC(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function Dh(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+Gi(t.value);if(F0(t))return t.filters.map(e=>Dh(e)).join(",");{const e=t.filters.map(n=>Dh(n)).join(",");return`${t.op}(${e})`}}function U0(t,e){return t instanceof Me?function(r,i){return i instanceof Me&&r.op===i.op&&r.field.isEqual(i.field)&&dn(r.value,i.value)}(t,e):t instanceof fn?function(r,i){return i instanceof fn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&U0(o,i.filters[l]),!0):!1}(t,e):void K(19439)}function j0(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${Gi(n.value)}`}(t):t instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map(j0).join(" ,")+"}"}(t):"Filter"}class tC extends Me{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class nC extends Me{constructor(e,n){super(e,"in",n),this.keys=z0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class rC extends Me{constructor(e,n){super(e,"not-in",n),this.keys=z0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function z0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class iC extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tf(n)&&So(n.arrayValue,this.value)}}class sC extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&So(this.value.arrayValue,n)}}class oC extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(So(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!So(this.value.arrayValue,n)}}class aC extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>So(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Sg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new lC(t,e,n,r,i,s,o)}function nf(t){const e=Y(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Dh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),hu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Gi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Gi(r)).join(",")),e.Te=n}return e.Te}function rf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Zk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!U0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ig(t.startAt,e.startAt)&&Ig(t.endAt,e.endAt)}function Vh(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function uC(t,e,n,r,i,s,o,l){return new fu(t,e,n,r,i,s,o,l)}function sf(t){return new fu(t)}function Ag(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function cC(t){return t.collectionGroup!==null}function Js(t){const e=Y(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Fe(Ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Ml(s,r))}),n.has(Ge.keyField().canonicalString())||e.Ie.push(new Ml(Ge.keyField(),r))}return e.Ie}function ln(t){const e=Y(t);return e.Ee||(e.Ee=hC(e,Js(t))),e.Ee}function hC(t,e){if(t.limitType==="F")return Sg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ml(i.field,s)});const n=t.endAt?new Ol(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ol(t.startAt.position,t.startAt.inclusive):null;return Sg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Oh(t,e,n){return new fu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pu(t,e){return rf(ln(t),ln(e))&&t.limitType===e.limitType}function B0(t){return`${nf(ln(t))}|lt:${t.limitType}`}function ui(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>j0(i)).join(", ")}]`),hu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Gi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Gi(i)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function mu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Js(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Tg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Js(r),i)||r.endAt&&!function(o,l,u){const h=Tg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Js(r),i))}(t,e)}function dC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $0(t){return(e,n)=>{let r=!1;for(const i of Js(t)){const s=fC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function fC(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?qi(u,h):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ar(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return C0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=new Ie(q.comparator);function xn(){return pC}const H0=new Ie(q.comparator);function Ls(...t){let e=H0;for(const n of t)e=e.insert(n.key,n);return e}function W0(t){let e=H0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ur(){return Zs()}function q0(){return Zs()}function Zs(){return new ni(t=>t.toString(),(t,e)=>t.isEqual(e))}const mC=new Ie(q.comparator),gC=new Fe(q.comparator);function re(...t){let e=gC;for(const n of t)e=e.add(n);return e}const yC=new Fe(ne);function _C(){return yC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nl(e)?"-0":e}}function G0(t){return{integerValue:""+t}}function vC(t,e){return Wk(e)?G0(e):of(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(){this._=void 0}}function wC(t,e,n){return t instanceof bl?function(i,s){const o={fields:{[x0]:{stringValue:P0},[D0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ef(s)&&(s=du(s)),s&&(o.fields[N0]=s),{mapValue:o}}(n,e):t instanceof Ao?Q0(t,e):t instanceof ko?X0(t,e):function(i,s){const o=K0(i,s),l=kg(o)+kg(i.Ae);return Nh(o)&&Nh(i.Ae)?G0(l):of(i.serializer,l)}(t,e)}function EC(t,e,n){return t instanceof Ao?Q0(t,e):t instanceof ko?X0(t,e):n}function K0(t,e){return t instanceof Ll?function(r){return Nh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class bl extends gu{}class Ao extends gu{constructor(e){super(),this.elements=e}}function Q0(t,e){const n=Y0(e);for(const r of t.elements)n.some(i=>dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ko extends gu{constructor(e){super(),this.elements=e}}function X0(t,e){let n=Y0(e);for(const r of t.elements)n=n.filter(i=>!dn(i,r));return{arrayValue:{values:n}}}class Ll extends gu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function kg(t){return Ce(t.integerValue||t.doubleValue)}function Y0(t){return tf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function TC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ao&&i instanceof Ao||r instanceof ko&&i instanceof ko?Wi(r.elements,i.elements,dn):r instanceof Ll&&i instanceof Ll?dn(r.Ae,i.Ae):r instanceof bl&&i instanceof bl}(t.transform,e.transform)}class IC{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class yu{}function J0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new af(t.key,qt.none()):new Fo(t.key,t.data,qt.none());{const n=t.data,r=yt.empty();let i=new Fe(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new kr(t.key,r,new At(i.toArray()),qt.none())}}function SC(t,e,n){t instanceof Fo?function(i,s,o){const l=i.value.clone(),u=Rg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof kr?function(i,s,o){if(!Xa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Rg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Z0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function eo(t,e,n,r){return t instanceof Fo?function(s,o,l,u){if(!Xa(s.precondition,o))return l;const h=s.value.clone(),f=Pg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof kr?function(s,o,l,u){if(!Xa(s.precondition,o))return l;const h=Pg(s.fieldTransforms,u,o),f=o.data;return f.setAll(Z0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Xa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function AC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=K0(r.transform,i||null);s!=null&&(n===null&&(n=yt.empty()),n.set(r.field,s))}return n||null}function Cg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Wi(r,i,(s,o)=>TC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fo extends yu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class kr extends yu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Z0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Rg(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,EC(o,l,n[i]))}return r}function Pg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,wC(s,o,e))}return r}class af extends yu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kC extends yu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&SC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=eo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=eo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=q0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=J0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Wi(this.mutations,e.mutations,(n,r)=>Cg(n,r))&&Wi(this.baseMutations,e.baseMutations,(n,r)=>Cg(n,r))}}class lf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return mC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new lf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,ie;function xC(t){switch(t){case b.OK:return K(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function ew(t){if(t===void 0)return Pn("GRPC error has no .code"),b.UNKNOWN;switch(t){case Pe.OK:return b.OK;case Pe.CANCELLED:return b.CANCELLED;case Pe.UNKNOWN:return b.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return b.INTERNAL;case Pe.UNAVAILABLE:return b.UNAVAILABLE;case Pe.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Pe.NOT_FOUND:return b.NOT_FOUND;case Pe.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Pe.ABORTED:return b.ABORTED;case Pe.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Pe.DATA_LOSS:return b.DATA_LOSS;default:return K(39323,{code:t})}}(ie=Pe||(Pe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=new cr([4294967295,4294967295],0);function xg(t){const e=NC().encode(t),n=new g0;return n.update(e),new Uint8Array(n.digest())}function Ng(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new cr([n,r],0),new cr([i,s],0)]}class uf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Fs(`Invalid padding: ${n}`);if(r<0)throw new Fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Fs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=cr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(cr.fromNumber(r)));return i.compare(DC)===1&&(i=new cr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=xg(e),[r,i]=Ng(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new uf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=xg(e),[r,i]=Ng(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Uo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _u(X.min(),i,new Ie(ne),xn(),re())}}class Uo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Uo(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class tw{constructor(e,n){this.targetId=e,this.Ce=n}}class nw{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Dg{constructor(){this.ve=0,this.Fe=Vg(),this.Me=Xe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K(38017,{changeType:s})}}),new Uo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Vg()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class VC{constructor(e){this.Ge=e,this.ze=new Map,this.je=xn(),this.Je=Ca(),this.He=Ca(),this.Ye=new Ie(ne)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Vh(s))if(r===0){const o=new q(s.path);this.et(n,o,nt.newNoDocument(o,X.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=_r(r).toUint8Array()}catch(u){if(u instanceof R0)return Hi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new uf(o,i,s)}catch(u){return Hi(u instanceof Fs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Vh(l.target)){const u=new q(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,nt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=re();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new _u(e,n,this.Ye,this.je,r);return this.je=xn(),this.Je=Ca(),this.He=Ca(),this.Ye=new Ie(ne),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Dg,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Fe(ne),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Fe(ne),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Dg),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ca(){return new Ie(q.comparator)}function Vg(){return new Ie(q.comparator)}const OC={asc:"ASCENDING",desc:"DESCENDING"},MC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bC={and:"AND",or:"OR"};class LC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mh(t,e){return t.useProto3Json||hu(e)?e:{value:e}}function Fl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function FC(t,e){return Fl(t,e.toTimestamp())}function un(t){return oe(!!t,49232),X.fromTimestamp(function(n){const r=yr(n);return new me(r.seconds,r.nanos)}(t))}function cf(t,e){return bh(t,e).canonicalString()}function bh(t,e){const n=function(i){return new pe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function iw(t){const e=pe.fromString(t);return oe(uw(e),10190,{key:e.toString()}),e}function Lh(t,e){return cf(t.databaseId,e.path)}function Sc(t,e){const n=iw(e);if(n.get(1)!==t.databaseId.projectId)throw new H(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(ow(n))}function sw(t,e){return cf(t.databaseId,e)}function UC(t){const e=iw(t);return e.length===4?pe.emptyPath():ow(e)}function Fh(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ow(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Og(t,e,n){return{name:Lh(t,e),fields:n.value.mapValue.fields}}function jC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(oe(f===void 0||typeof f=="string",58123),Xe.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Xe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?b.UNKNOWN:ew(h.code);return new H(f,h.message||"")}(o);n=new nw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Sc(t,r.document.name),s=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):X.min(),l=new yt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ya(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Sc(t,r.document),s=r.readTime?un(r.readTime):X.min(),o=nt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ya([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Sc(t,r.document),s=r.removedTargetIds||[];n=new Ya([],s,i,null)}else{if(!("filter"in e))return K(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new PC(i,s),l=r.targetId;n=new tw(l,o)}}return n}function zC(t,e){let n;if(e instanceof Fo)n={update:Og(t,e.key,e.value)};else if(e instanceof af)n={delete:Lh(t,e.key)};else if(e instanceof kr)n={update:Og(t,e.key,e.data),updateMask:XC(e.fieldMask)};else{if(!(e instanceof kC))return K(16599,{Vt:e.type});n={verify:Lh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof bl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ao)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ko)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ll)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:FC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K(27497)}(t,e.precondition)),n}function BC(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?un(i.updateTime):un(s);return o.isEqual(X.min())&&(o=un(s)),new IC(o,i.transformResults||[])}(n,e))):[]}function $C(t,e){return{documents:[sw(t,e.path)]}}function HC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=sw(t,i);const s=function(h){if(h.length!==0)return lw(fn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:ci(g.field),direction:GC(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Mh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:i}}function WC(t){let e=UC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=aw(p);return g instanceof fn&&F0(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(P){return new Ml(hi(P.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,hu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,k=p.values||[];return new Ol(k,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,k=p.values||[];return new Ol(k,g)}(n.endAt)),uC(e,i,o,s,l,"F",u,h)}function qC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function aw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=hi(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=hi(n.unaryFilter.field);return Me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=hi(n.unaryFilter.field);return Me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hi(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return Me.create(hi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(r=>aw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function GC(t){return OC[t]}function KC(t){return MC[t]}function QC(t){return bC[t]}function ci(t){return{fieldPath:t.canonicalString()}}function hi(t){return Ge.fromServerFormat(t.fieldPath)}function lw(t){return t instanceof Me?function(n){if(n.op==="=="){if(Eg(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NAN"}};if(wg(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Eg(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NAN"}};if(wg(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ci(n.field),op:KC(n.op),value:n.value}}}(t):t instanceof fn?function(n){const r=n.getFilters().map(i=>lw(i));return r.length===1?r[0]:{compositeFilter:{op:QC(n.op),filters:r}}}(t):K(54877,{filter:t})}function XC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n,r,i,s=X.min(),o=X.min(),l=Xe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e){this.yt=e}}function JC(t){const e=WC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Oh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(){this.Cn=new eR}addToCollectionParentIndex(e,n){return this.Cn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(gr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(gr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class eR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Fe(pe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Fe(pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},cw=41943040;class mt{static withCacheSize(e){return new mt(e,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt.DEFAULT_COLLECTION_PERCENTILE=10,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mt.DEFAULT=new mt(cw,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mt.DISABLED=new mt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ki(0)}static cr(){return new Ki(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="LruGarbageCollector",tR=1048576;function Lg([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class nR{constructor(e){this.Ir=e,this.buffer=new Fe(Lg),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Lg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class rR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){B(bg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ss(n)?B(bg,"Ignoring IndexedDB error during garbage collection: ",n):await is(n)}await this.Vr(3e5)})}}class iR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(cu.ce);const r=new nR(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Mg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Mg):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),li()<=te.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function sR(t,e){return new iR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(){this.changes=new ni(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&eo(r.mutation,i,At.empty(),me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Ur();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ls();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=xn();const o=Zs(),l=function(){return Zs()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof kr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),eo(f.mutation,h,f.mutation.getFieldMask(),me.now())):o.set(h.key,At.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new aR(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Zs();let i=new Ie((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||At.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=q0();f.forEach(g=>{if(!s.has(g)){const k=J0(n.get(g),r.get(g));k!==null&&p.set(g,k),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):cC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Ur());let l=Eo,u=s;return o.next(h=>O.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,re())).next(f=>({batchId:l,changes:W0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Ls();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ls();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const h=function(p,g){return new fu(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,nt.newInvalidDocument(f)))});let l=Ls();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&eo(f.mutation,h,At.empty(),me.now()),mu(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return O.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:un(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:JC(i.bundledQuery),readTime:un(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(){this.overlays=new Ie(q.comparator),this.qr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ur();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Ur(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Ur(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Ur(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return O.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new RC(n,r));let s=this.qr.get(n);s===void 0&&(s=re(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.Qr=new Fe(je.$r),this.Ur=new Fe(je.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new je(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new je(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new q(new pe([])),r=new je(n,e),i=new je(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new q(new pe([])),r=new je(n,e),i=new je(n,e+1);let s=re();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new je(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return q.comparator(e.key,n.key)||ne(e.Yr,n.Yr)}static Kr(e,n){return ne(e.Yr,n.Yr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Fe(je.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new CC(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new je(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?Zd:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),i=new je(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(ne);return n.forEach(i=>{const s=new je(i,0),o=new je(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new je(new q(s),0);let l=new Fe(ne);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Yr)),!0)},o),O.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(n.mutations,i=>{const s=new je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new je(n,0),i=this.Zr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.ri=e,this.docs=function(){return new Ie(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=xn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=xn();const o=n.path,l=new q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||zk(jk(f),r)<=0||(i.has(f.key)||mu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K(9500)}ii(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new pR(this)}getSize(e){return O.resolve(this.size)}}class pR extends oR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.persistence=e,this.si=new ni(n=>nf(n),rf),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.oi=0,this._i=new hf,this.targetCount=0,this.ai=Ki.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),O.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ki(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Pr(n),O.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,n){this.ui={},this.overlays={},this.ci=new cu(0),this.li=!1,this.li=!0,this.hi=new hR,this.referenceDelegate=e(this),this.Pi=new mR(this),this.indexManager=new ZC,this.remoteDocumentCache=function(i){return new fR(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new YC(n),this.Ii=new uR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new dR(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new gR(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return O.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class gR extends $k{constructor(e){super(),this.currentSequenceNumber=e}}class df{constructor(e){this.persistence=e,this.Ri=new hf,this.Vi=null}static mi(e){return new df(e)}get fi(){if(this.Vi)return this.Vi;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,r=>{const i=q.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ul{constructor(e,n){this.persistence=e,this.pi=new ni(r=>qk(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=sR(this,n)}static mi(e,n){return new Ul(e,n)}Ei(){}di(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return O.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?O.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,X.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ka(e.data.value)),n}br(e,n,r){return O.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return O.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ff(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return lI()?8:Hk(it())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new yR;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(li()<=te.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",ui(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(li()<=te.DEBUG&&B("QueryEngine","Query:",ui(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(li()<=te.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",ui(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):O.resolve())}ys(e,n){if(Ag(n))return O.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Oh(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(n,l);return this.Cs(n,h,o,u.readTime)?this.ys(e,Oh(n,null,"F")):this.vs(e,h,n,u)}))})))}ws(e,n,r,i){return Ag(n)||i.isEqual(X.min())?O.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?O.resolve(null):(li()<=te.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ui(n)),this.vs(e,o,n,Uk(i,Eo)).next(l=>l))})}Ds(e,n){let r=new Fe($0(e));return n.forEach((i,s)=>{mu(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return li()<=te.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",ui(n)),this.ps.getDocumentsMatchingQuery(e,n,gr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="LocalStore",vR=3e8;class wR{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Ie(ne),this.xs=new ni(s=>nf(s),rf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function ER(t,e,n,r){return new wR(t,e,n,r)}async function dw(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:l}))})})}function TR(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,g=p.keys();let k=O.resolve();return g.forEach(P=>{k=k.next(()=>f.getEntry(u,P)).next(D=>{const M=h.docVersions.get(P);oe(M!==null,48541),D.version.compareTo(M)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function fw(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function IR(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.Pi.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(s,f.addedDocuments,p)));let k=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?k=k.withResumeToken(Xe.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),i=i.insert(p,k),function(D,M,I){return D.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=vR?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,k,f)&&l.push(n.Pi.updateTargetData(s,k))});let u=xn(),h=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(SR(s,o,e.documentUpdates).next(f=>{u=f.ks,h=f.qs})),!r.isEqual(X.min())){const f=n.Pi.getLastRemoteSnapshotVersion(s).next(p=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Ms=i,s))}function SR(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=xn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):B(pf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{ks:o,qs:i}})}function AR(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Zd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function kR(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new Yn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Uh(t,e,n){const r=Y(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ss(o))throw o;B(pf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Fg(t,e,n){const r=Y(t);let i=X.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=Y(u),g=p.xs.get(f);return g!==void 0?O.resolve(p.Ms.get(g)):p.Pi.getTargetData(h,f)}(r,o,ln(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:re())).next(l=>(CR(r,dC(e),l),{documents:l,Qs:s})))}function CR(t,e,n){let r=t.Os.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class Ug{constructor(){this.activeTargetIds=_C()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RR{constructor(){this.Mo=new Ug,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ug,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="ConnectivityMonitor";class zg{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){B(jg,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){B(jg,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ra=null;function jh(){return Ra===null?Ra=function(){return 268435456+Math.round(2147483648*Math.random())}():Ra++,"0x"+Ra.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="RestConnection",xR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class NR{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Dl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=jh(),l=this.zo(e,n.toUriEncodedString());B(Ac,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:h}=new URL(l),f=es(h);return this.Jo(e,l,u,r,f).then(p=>(B(Ac,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Hi(Ac,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=xR[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection";class VR extends NR{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=jh();return new Promise((l,u)=>{const h=new y0;h.setWithCredentials(!0),h.listenOnce(_0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ga.NO_ERROR:const p=h.getResponseJson();B(Ze,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ga.TIMEOUT:B(Ze,`RPC '${e}' ${o} timed out`),u(new H(b.DEADLINE_EXCEEDED,"Request time out"));break;case Ga.HTTP_ERROR:const g=h.getStatus();if(B(Ze,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let k=h.getResponseJson();Array.isArray(k)&&(k=k[0]);const P=k==null?void 0:k.error;if(P&&P.status&&P.message){const D=function(I){const w=I.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(w)>=0?w:b.UNKNOWN}(P.status);u(new H(D,P.message))}else u(new H(b.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new H(b.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{B(Ze,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);B(Ze,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}T_(e,n,r){const i=jh(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=E0(),l=w0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");B(Ze,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);this.I_(p);let g=!1,k=!1;const P=new DR({Yo:M=>{k?B(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,M):(g||(B(Ze,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),B(Ze,`RPC '${e}' stream ${i} sending:`,M),p.send(M))},Zo:()=>p.close()}),D=(M,I,w)=>{M.listen(I,A=>{try{w(A)}catch(V){setTimeout(()=>{throw V},0)}})};return D(p,bs.EventType.OPEN,()=>{k||(B(Ze,`RPC '${e}' stream ${i} transport opened.`),P.o_())}),D(p,bs.EventType.CLOSE,()=>{k||(k=!0,B(Ze,`RPC '${e}' stream ${i} transport closed`),P.a_(),this.E_(p))}),D(p,bs.EventType.ERROR,M=>{k||(k=!0,Hi(Ze,`RPC '${e}' stream ${i} transport errored. Name:`,M.name,"Message:",M.message),P.a_(new H(b.UNAVAILABLE,"The operation could not be completed")))}),D(p,bs.EventType.MESSAGE,M=>{var I;if(!k){const w=M.data[0];oe(!!w,16349);const A=w,V=(A==null?void 0:A.error)||((I=A[0])==null?void 0:I.error);if(V){B(Ze,`RPC '${e}' stream ${i} received error:`,V);const U=V.status;let F=function(v){const T=Pe[v];if(T!==void 0)return ew(T)}(U),_=V.message;F===void 0&&(F=b.INTERNAL,_="Unknown error status: "+U+" with message "+V.message),k=!0,P.a_(new H(F,_)),p.close()}else B(Ze,`RPC '${e}' stream ${i} received:`,w),P.u_(w)}}),D(l,v0.STAT_EVENT,M=>{M.stat===Rh.PROXY?B(Ze,`RPC '${e}' stream ${i} detected buffering proxy`):M.stat===Rh.NOPROXY&&B(Ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function kc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(t){return new LC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg="PersistentStream";class mw{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new pw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new H(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return B(Bg,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(B(Bg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OR extends mw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=jC(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?un(o.readTime):X.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Fh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Vh(u)?{documents:$C(s,u)}:{query:HC(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=rw(s,o.resumeToken);const h=Mh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=Fl(s,o.snapshotVersion.toTimestamp());const h=Mh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=qC(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Fh(this.serializer),n.removeTarget=e,this.q_(n)}}class MR extends mw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=BC(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Fh(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zC(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{}class LR extends bR{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new H(b.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,bh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(b.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,bh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(b.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class FR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Pn(n),this.aa=!1):B("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="RemoteStore";class UR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{ri(this)&&(B(Zr,"Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.Ea.add(4),await jo(h),h.Ra.set("Unknown"),h.Ea.delete(4),await wu(h)}(this))})}),this.Ra=new FR(r,i)}}async function wu(t){if(ri(t))for(const e of t.da)await e(!0)}async function jo(t){for(const e of t.da)await e(!1)}function gw(t,e){const n=Y(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),_f(n)?yf(n):os(n).O_()&&gf(n,e))}function mf(t,e){const n=Y(t),r=os(n);n.Ia.delete(e),r.O_()&&yw(n,e),n.Ia.size===0&&(r.O_()?r.L_():ri(n)&&n.Ra.set("Unknown"))}function gf(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}os(t).Y_(e)}function yw(t,e){t.Va.Ue(e),os(t).Z_(e)}function yf(t){t.Va=new VC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),os(t).start(),t.Ra.ua()}function _f(t){return ri(t)&&!os(t).x_()&&t.Ia.size>0}function ri(t){return Y(t).Ea.size===0}function _w(t){t.Va=void 0}async function jR(t){t.Ra.set("Online")}async function zR(t){t.Ia.forEach((e,n)=>{gf(t,e)})}async function BR(t,e){_w(t),_f(t)?(t.Ra.ha(e),yf(t)):t.Ra.set("Unknown")}async function $R(t,e,n){if(t.Ra.set("Online"),e instanceof nw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){B(Zr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await jl(t,r)}else if(e instanceof Ya?t.Va.Ze(e):e instanceof tw?t.Va.st(e):t.Va.tt(e),!n.isEqual(X.min()))try{const r=await fw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ia.get(h);f&&s.Ia.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Ia.get(u);if(!f)return;s.Ia.set(u,f.withResumeToken(Xe.EMPTY_BYTE_STRING,f.snapshotVersion)),yw(s,u);const p=new Yn(f.target,u,h,f.sequenceNumber);gf(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){B(Zr,"Failed to raise snapshot:",r),await jl(t,r)}}async function jl(t,e,n){if(!ss(e))throw e;t.Ea.add(1),await jo(t),t.Ra.set("Offline"),n||(n=()=>fw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B(Zr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await wu(t)})}function vw(t,e){return e().catch(n=>jl(t,n,e))}async function Eu(t){const e=Y(t),n=wr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Zd;for(;HR(e);)try{const i=await AR(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,WR(e,i)}catch(i){await jl(e,i)}ww(e)&&Ew(e)}function HR(t){return ri(t)&&t.Ta.length<10}function WR(t,e){t.Ta.push(e);const n=wr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function ww(t){return ri(t)&&!wr(t).x_()&&t.Ta.length>0}function Ew(t){wr(t).start()}async function qR(t){wr(t).ra()}async function GR(t){const e=wr(t);for(const n of t.Ta)e.ea(n.mutations)}async function KR(t,e,n){const r=t.Ta.shift(),i=lf.from(r,e,n);await vw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Eu(t)}async function QR(t,e){e&&wr(t).X_&&await async function(r,i){if(function(o){return xC(o)&&o!==b.ABORTED}(i.code)){const s=r.Ta.shift();wr(r).B_(),await vw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Eu(r)}}(t,e),ww(t)&&Ew(t)}async function $g(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),B(Zr,"RemoteStore received new credentials");const r=ri(n);n.Ea.add(3),await jo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await wu(n)}async function XR(t,e){const n=Y(t);e?(n.Ea.delete(2),await wu(n)):e||(n.Ea.add(2),await jo(n),n.Ra.set("Unknown"))}function os(t){return t.ma||(t.ma=function(n,r,i){const s=Y(n);return s.sa(),new OR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:jR.bind(null,t),t_:zR.bind(null,t),r_:BR.bind(null,t),H_:$R.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),_f(t)?yf(t):t.Ra.set("Unknown")):(await t.ma.stop(),_w(t))})),t.ma}function wr(t){return t.fa||(t.fa=function(n,r,i){const s=Y(n);return s.sa(),new MR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:qR.bind(null,t),r_:QR.bind(null,t),ta:GR.bind(null,t),na:KR.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Eu(t)):(await t.fa.stop(),t.Ta.length>0&&(B(Zr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new vf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wf(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),ss(t))return new H(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{static emptySet(e){return new Oi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Ls(),this.sortedSet=new Ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Oi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Oi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(){this.ga=new Ie(q.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):K(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Qi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Qi(e,n,Oi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class JR{constructor(){this.queries=Wg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=Wg(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new H(b.ABORTED,"Firestore shutting down"))}}function Wg(){return new ni(t=>B0(t),pu)}async function ZR(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new YR,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=wf(o,`Initialization of query '${ui(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Ef(n)}async function eP(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function tP(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Ef(n)}function nP(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Ef(t){t.Ca.forEach(e=>{e.next()})}var zh,qg;(qg=zh||(zh={})).Ma="default",qg.Cache="cache";class rP{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Qi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==zh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e){this.key=e}}class Iw{constructor(e){this.key=e}}class iP{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=re(),this.mutatedKeys=re(),this.eu=$0(e),this.tu=new Oi(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Hg,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),k=mu(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),D=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let M=!1;g&&k?g.data.isEqual(k.data)?P!==D&&(r.track({type:3,doc:k}),M=!0):this.su(g,k)||(r.track({type:2,doc:k}),M=!0,(u&&this.eu(k,u)>0||h&&this.eu(k,h)<0)&&(l=!0)):!g&&k?(r.track({type:0,doc:k}),M=!0):g&&!k&&(r.track({type:1,doc:g}),M=!0,(u||h)&&(l=!0)),M&&(k?(o=o.add(k),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(k,P){const D=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Rt:M})}};return D(k)-D(P)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,h=u!==this.Za;return this.Za=u,o.length!==0||h?{snapshot:new Qi(this.query,e.tu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Hg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=re(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new Iw(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new Tw(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Qi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Tf="SyncEngine";class sP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class oP{constructor(e){this.key=e,this.hu=!1}}class aP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ni(l=>B0(l),pu),this.Iu=new Map,this.Eu=new Set,this.du=new Ie(q.comparator),this.Au=new Map,this.Ru=new hf,this.Vu={},this.mu=new Map,this.fu=Ki.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function lP(t,e,n=!0){const r=Pw(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await Sw(r,e,n,!0),i}async function uP(t,e){const n=Pw(t);await Sw(n,e,!0,!1)}async function Sw(t,e,n,r){const i=await kR(t.localStore,ln(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await cP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&gw(t.remoteStore,i),l}async function cP(t,e,n,r,i){t.pu=(p,g,k)=>async function(D,M,I,w){let A=M.view.ru(I);A.Cs&&(A=await Fg(D.localStore,M.query,!1).then(({documents:_})=>M.view.ru(_,A)));const V=w&&w.targetChanges.get(M.targetId),U=w&&w.targetMismatches.get(M.targetId)!=null,F=M.view.applyChanges(A,D.isPrimaryClient,V,U);return Kg(D,M.targetId,F.au),F.snapshot}(t,p,g,k);const s=await Fg(t.localStore,e,!0),o=new iP(e,s.Qs),l=o.ru(s.documents),u=Uo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Kg(t,n,h.au);const f=new sP(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function hP(t,e,n){const r=Y(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!pu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Uh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&mf(r.remoteStore,i.targetId),Bh(r,i.targetId)}).catch(is)):(Bh(r,i.targetId),await Uh(r.localStore,i.targetId,!0))}async function dP(t,e){const n=Y(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),mf(n.remoteStore,r.targetId))}async function fP(t,e,n){const r=wP(t);try{const i=await function(o,l){const u=Y(o),h=me.now(),f=l.reduce((k,P)=>k.add(P.key),re());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let P=xn(),D=re();return u.Ns.getEntries(k,f).next(M=>{P=M,P.forEach((I,w)=>{w.isValidDocument()||(D=D.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,P)).next(M=>{p=M;const I=[];for(const w of l){const A=AC(w,p.get(w.key).overlayedDocument);A!=null&&I.push(new kr(w.key,A,M0(A.value.mapValue),qt.exists(!0)))}return u.mutationQueue.addMutationBatch(k,h,I,l)}).next(M=>{g=M;const I=M.applyToLocalDocumentSet(p,D);return u.documentOverlayCache.saveOverlays(k,M.batchId,I)})}).then(()=>({batchId:g.batchId,changes:W0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Vu[o.currentUser.toKey()];h||(h=new Ie(ne)),h=h.insert(l,u),o.Vu[o.currentUser.toKey()]=h}(r,i.batchId,n),await zo(r,i.changes),await Eu(r.remoteStore)}catch(i){const s=wf(i,"Failed to persist write");n.reject(s)}}async function Aw(t,e){const n=Y(t);try{const r=await IR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?oe(o.hu,14607):i.removedDocuments.size>0&&(oe(o.hu,42227),o.hu=!1))}),await zo(n,r,e)}catch(r){await is(r)}}function Gg(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const g of p.Sa)g.va(l)&&(h=!0)}),h&&Ef(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pP(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ie(q.comparator);o=o.insert(s,nt.newNoDocument(s,X.min()));const l=re().add(s),u=new _u(X.min(),new Map,new Ie(ne),o,l);await Aw(r,u),r.du=r.du.remove(s),r.Au.delete(e),If(r)}else await Uh(r.localStore,e,!1).then(()=>Bh(r,e,n)).catch(is)}async function mP(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await TR(n.localStore,e);Cw(n,r,null),kw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zo(n,i)}catch(i){await is(i)}}async function gP(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(oe(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Cw(r,e,n),kw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zo(r,i)}catch(i){await is(i)}}function kw(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Cw(t,e,n){const r=Y(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Bh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||Rw(t,r)})}function Rw(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(mf(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),If(t))}function Kg(t,e,n){for(const r of n)r instanceof Tw?(t.Ru.addReference(r.key,e),yP(t,r)):r instanceof Iw?(B(Tf,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Rw(t,r.key)):K(19791,{wu:r})}function yP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(B(Tf,"New document in limbo: "+n),t.Eu.add(r),If(t))}function If(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new q(pe.fromString(e)),r=t.fu.next();t.Au.set(r,new oP(n)),t.du=t.du.insert(n,r),gw(t.remoteStore,new Yn(ln(sf(n.path)),r,"TargetPurposeLimboResolution",cu.ce))}}async function zo(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=ff.As(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,h){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>O.forEach(h,g=>O.forEach(g.Es,k=>f.persistence.referenceDelegate.addReference(p,g.targetId,k)).next(()=>O.forEach(g.ds,k=>f.persistence.referenceDelegate.removeReference(p,g.targetId,k)))))}catch(p){if(!ss(p))throw p;B(pf,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const k=f.Ms.get(g),P=k.snapshotVersion,D=k.withLastLimboFreeSnapshotVersion(P);f.Ms=f.Ms.insert(g,D)}}}(r.localStore,s))}async function _P(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){B(Tf,"User change. New user:",e.toKey());const r=await dw(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new H(b.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zo(n,r.Ls)}}function vP(t,e){const n=Y(t),r=n.Au.get(e);if(r&&r.hu)return re().add(r.key);{let i=re();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function Pw(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Aw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pP.bind(null,e),e.Pu.H_=tP.bind(null,e.eventManager),e.Pu.yu=nP.bind(null,e.eventManager),e}function wP(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gP.bind(null,e),e}class zl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return ER(this.persistence,new _R,e.initialUser,this.serializer)}Cu(e){return new hw(df.mi,this.serializer)}Du(e){return new RR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zl.provider={build:()=>new zl};class EP extends zl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){oe(this.persistence.referenceDelegate instanceof Ul,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new rR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?mt.withCacheSize(this.cacheSizeBytes):mt.DEFAULT;return new hw(r=>Ul.mi(r,n),this.serializer)}}class $h{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Gg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_P.bind(null,this.syncEngine),await XR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JR}()}createDatastore(e){const n=vu(e.databaseInfo.databaseId),r=function(s){return new VR(s)}(e.databaseInfo);return function(s,o,l,u){return new LR(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new UR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Gg(this.syncEngine,n,0),function(){return zg.v()?new zg:new PR}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new aP(i,s,o,l,u,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);B(Zr,"RemoteStore shutting down."),s.Ea.add(5),await jo(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}$h.provider={build:()=>new $h};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="FirestoreClient";class IP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=Yd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{B(Er,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B(Er,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Cc(t,e){t.asyncQueue.verifyOperationInProgress(),B(Er,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await dw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Qg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await SP(t);B(Er,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>$g(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>$g(e.remoteStore,i)),t._onlineComponents=e}async function SP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(Er,"Using user provided OfflineComponentProvider");try{await Cc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Hi("Error using user provided cache. Falling back to memory cache: "+n),await Cc(t,new zl)}}else B(Er,"Using default OfflineComponentProvider"),await Cc(t,new EP(void 0));return t._offlineComponents}async function xw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(Er,"Using user provided OnlineComponentProvider"),await Qg(t,t._uninitializedComponentsProvider._online)):(B(Er,"Using default OnlineComponentProvider"),await Qg(t,new $h))),t._onlineComponents}function AP(t){return xw(t).then(e=>e.syncEngine)}async function Xg(t){const e=await xw(t),n=e.eventManager;return n.onListen=lP.bind(null,e.syncEngine),n.onUnlisten=hP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=uP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=dP.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="firestore.googleapis.com",Jg=!0;class Zg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Dw,this.ssl=Jg}else this.host=e.host,this.ssl=e.ssl??Jg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=cw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<tR)throw new H(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Fk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nw(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Tu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Rk;switch(r.type){case"firstParty":return new Dk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Yg.get(n);r&&(B("ComponentProvider","Removing Datastore"),Yg.delete(n),r.terminate())}(this),Promise.resolve()}}function kP(t,e,n,r={}){var h;t=hr(t,Tu);const i=es(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(xv(`https://${l}`),Nv("Firestore",!0)),s.host!==Dw&&s.host!==l&&Hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Qr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=et.MOCK_USER;else{f=Z1(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new H(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new et(g)}t._authCredentials=new Pk(new I0(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Iu(this.firestore,e,this._query)}}class Le{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}toJSON(){return{type:Le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Lo(n,Le._jsonSchema))return new Le(e,r||null,new q(pe.fromString(n.referencePath)))}}Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:Ne("string",Le._jsonSchemaVersion),referencePath:Ne("string")};class dr extends Iu{constructor(e,n,r){super(e,n,sf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new q(e))}withConverter(e){return new dr(this.firestore,e,this._path)}}function ey(t,e,...n){if(t=st(t),S0("collection","path",e),t instanceof Tu){const r=pe.fromString(e,...n);return dg(r),new dr(t,null,r)}{if(!(t instanceof Le||t instanceof dr))throw new H(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return dg(r),new dr(t.firestore,null,r)}}function Hh(t,e,...n){if(t=st(t),arguments.length===1&&(e=Yd.newId()),S0("doc","path",e),t instanceof Tu){const r=pe.fromString(e,...n);return hg(r),new Le(t,null,new q(r))}{if(!(t instanceof Le||t instanceof dr))throw new H(b.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return hg(r),new Le(t.firestore,t instanceof dr?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="AsyncQueue";class ny{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new pw(this,"async_queue_retry"),this._c=()=>{const r=kc();r&&B(ty,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=kc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=kc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Br;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ss(e))throw e;B(ty,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Pn("INTERNAL UNHANDLED ERROR: ",ry(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=vf.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&K(47125,{Pc:ry(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function ry(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Xi extends Tu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ny,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ny(e),this._firestoreClient=void 0,await e}}}function CP(t,e){const n=typeof t=="object"?t:Mv(),r=typeof t=="string"?t:Dl,i=Bd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Y1("firestore");s&&kP(i,...s)}return i}function Vw(t){if(t._terminated)throw new H(b.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||RP(t),t._firestoreClient}function RP(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,h,f){return new Qk(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Nw(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new IP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dt(Xe.fromBase64String(e))}catch(n){throw new H(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Dt(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Dt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Lo(e,Dt._jsonSchema))return Dt.fromBase64String(e.bytes)}}Dt._jsonSchemaVersion="firestore/bytes/1.0",Dt._jsonSchema={type:Ne("string",Dt._jsonSchemaVersion),bytes:Ne("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:cn._jsonSchemaVersion}}static fromJSON(e){if(Lo(e,cn._jsonSchema))return new cn(e.latitude,e.longitude)}}cn._jsonSchemaVersion="firestore/geoPoint/1.0",cn._jsonSchema={type:Ne("string",cn._jsonSchemaVersion),latitude:Ne("number"),longitude:Ne("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:hn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Lo(e,hn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new hn(e.vectorValues);throw new H(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}hn._jsonSchemaVersion="firestore/vectorValue/1.0",hn._jsonSchema={type:Ne("string",hn._jsonSchemaVersion),vectorValues:Ne("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=/^__.*__$/;class xP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fo(e,this.data,n,this.fieldTransforms)}}class Ow{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new kr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Mw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ac:t})}}class Af{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Af({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Bl(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Mw(this.Ac)&&PP.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class NP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||vu(e)}Cc(e,n,r,i=!1){return new Af({Ac:e,methodName:n,Dc:r,path:Ge.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bw(t){const e=t._freezeSettings(),n=vu(t._databaseId);return new NP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function DP(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);kf("Data must be an object, but it was:",o,r);const l=Lw(r,o);let u,h;if(s.merge)u=new At(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=Wh(e,p,n);if(!o.contains(g))throw new H(b.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Uw(f,g)||f.push(g)}u=new At(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new xP(new yt(l),u,h)}class Au extends Sf{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Au}}function VP(t,e,n,r){const i=t.Cc(1,e,n);kf("Data must be an object, but it was:",i,r);const s=[],o=yt.empty();Ar(r,(u,h)=>{const f=Cf(e,u,n);h=st(h);const p=i.yc(f);if(h instanceof Au)s.push(f);else{const g=ku(h,p);g!=null&&(s.push(f),o.set(f,g))}});const l=new At(s);return new Ow(o,l,i.fieldTransforms)}function OP(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[Wh(e,r,n)],u=[i];if(s.length%2!=0)throw new H(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(Wh(e,s[g])),u.push(s[g+1]);const h=[],f=yt.empty();for(let g=l.length-1;g>=0;--g)if(!Uw(h,l[g])){const k=l[g];let P=u[g];P=st(P);const D=o.yc(k);if(P instanceof Au)h.push(k);else{const M=ku(P,D);M!=null&&(h.push(k),f.set(k,M))}}const p=new At(h);return new Ow(f,p,o.fieldTransforms)}function ku(t,e){if(Fw(t=st(t)))return kf("Unsupported field value:",e,t),Lw(t,e);if(t instanceof Sf)return function(r,i){if(!Mw(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=ku(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=st(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=me.fromDate(r);return{timestampValue:Fl(i.serializer,s)}}if(r instanceof me){const s=new me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fl(i.serializer,s)}}if(r instanceof cn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Dt)return{bytesValue:rw(i.serializer,r._byteString)};if(r instanceof Le){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:cf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof hn)return function(o,l){return{mapValue:{fields:{[V0]:{stringValue:O0},[Vl]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return of(l.serializer,h)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Jd(r)}`)}(t,e)}function Lw(t,e){const n={};return C0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ar(t,(r,i)=>{const s=ku(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Fw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof me||t instanceof cn||t instanceof Dt||t instanceof Le||t instanceof Sf||t instanceof hn)}function kf(t,e,n){if(!Fw(n)||!A0(n)){const r=Jd(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Wh(t,e,n){if((e=st(e))instanceof Su)return e._internalPath;if(typeof e=="string")return Cf(t,e);throw Bl("Field path arguments must be of type string or ",t,!1,void 0,n)}const MP=new RegExp("[~\\*/\\[\\]]");function Cf(t,e,n){if(e.search(MP)>=0)throw Bl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Su(...e.split("."))._internalPath}catch{throw Bl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(b.INVALID_ARGUMENT,l+t+u)}function Uw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bP extends jw{data(){return super.data()}}function zw(t,e){return typeof e=="string"?Cf(t,e):e instanceof Su?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class FP{convertValue(e,n="none"){switch(vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ar(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Vl].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ce(o.doubleValue));return new hn(n)}convertGeoPoint(e){return new cn(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=du(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(To(e));default:return null}}convertTimestamp(e){const n=yr(e);return new me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);oe(uw(r),9688,{name:e});const i=new Io(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Pn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Us{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $r extends jw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ja(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(zw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=$r._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}$r._jsonSchemaVersion="firestore/documentSnapshot/1.0",$r._jsonSchema={type:Ne("string",$r._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class Ja extends $r{data(e={}){return super.data(e)}}class Mi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Us(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ja(this._firestore,this._userDataWriter,r.key,r,new Us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ja(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Us(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ja(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Us(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:jP(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Mi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function jP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}Mi._jsonSchemaVersion="firestore/querySnapshot/1.0",Mi._jsonSchema={type:Ne("string",Mi._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class Bw extends FP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function zP(t,e,n,...r){t=hr(t,Le);const i=hr(t.firestore,Xi),s=bw(i);let o;return o=typeof(e=st(e))=="string"||e instanceof Su?OP(s,"updateDoc",t._key,e,n,r):VP(s,"updateDoc",t._key,e),Rf(i,[o.toMutation(t._key,qt.exists(!0))])}function BP(t){return Rf(hr(t.firestore,Xi),[new af(t._key,qt.none())])}function $P(t,e){const n=hr(t.firestore,Xi),r=Hh(t),i=UP(t.converter,e);return Rf(n,[DP(bw(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function HP(t,...e){var u,h,f;t=st(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||iy(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(iy(e[r])){const p=e[r];e[r]=(u=p.next)==null?void 0:u.bind(p),e[r+1]=(h=p.error)==null?void 0:h.bind(p),e[r+2]=(f=p.complete)==null?void 0:f.bind(p)}let s,o,l;if(t instanceof Le)o=hr(t.firestore,Xi),l=sf(t._key.path),s={next:p=>{e[r]&&e[r](WP(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=hr(t,Iu);o=hr(p.firestore,Xi),l=p._query;const g=new Bw(o);s={next:k=>{e[r]&&e[r](new Mi(o,g,p,k))},error:e[r+1],complete:e[r+2]},LP(t._query)}return function(g,k,P,D){const M=new TP(D),I=new rP(k,M,P);return g.asyncQueue.enqueueAndForget(async()=>ZR(await Xg(g),I)),()=>{M.Nu(),g.asyncQueue.enqueueAndForget(async()=>eP(await Xg(g),I))}}(Vw(o),l,i,s)}function Rf(t,e){return function(r,i){const s=new Br;return r.asyncQueue.enqueueAndForget(async()=>fP(await AP(r),i,s)),s.promise}(Vw(t),e)}function WP(t,e,n){const r=n.docs.get(e._key),i=new Bw(t);return new $r(t,i,e._key,r,new Us(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){rs=i})(ts),$i(new Xr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Xi(new xk(r.getProvider("auth-internal")),new Vk(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new H(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Io(h.options.projectId,f)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),lr(ag,lg,e),lr(ag,lg,"esm2020")})();/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),GP=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),sy=t=>{const e=GP(t);return e.charAt(0).toUpperCase()+e.slice(1)},$w=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),KP=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var QP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=_e.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>_e.createElement("svg",{ref:u,...QP,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:$w("lucide",i),...!s&&!KP(l)&&{"aria-hidden":"true"},...l},[...o.map(([h,f])=>_e.createElement(h,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=(t,e)=>{const n=_e.forwardRef(({className:r,...i},s)=>_e.createElement(XP,{ref:s,iconNode:e,className:$w(`lucide-${qP(sy(t))}`,`lucide-${t}`,r),...i}));return n.displayName=sy(t),n};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],JP=ot("calendar",YP);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZP=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],e2=ot("chart-column",ZP);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],oy=ot("check",t2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],r2=ot("chevron-left",n2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],s2=ot("chevron-right",i2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],a2=ot("circle-alert",o2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],u2=ot("cloud",l2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],ay=ot("credit-card",c2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],ly=ot("pen",h2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],f2=ot("plus",d2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],m2=ot("save",p2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],y2=ot("settings",g2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],v2=ot("trash-2",_2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],uy=ot("truck",w2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],T2=ot("wrench",E2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],S2=ot("x",I2),A2={apiKey:"AIzaSyAfmhXFTbr0xs8Mujkrsw_5JHTZozmRohU",authDomain:"lalamove-elite.firebaseapp.com",projectId:"lalamove-elite",storageBucket:"lalamove-elite.firebasestorage.app",messagingSenderId:"365572224560",appId:"1:365572224560:web:849c2760beed4008281ff5"},Hw=Ov(A2),cy=kk(Hw),Pa=CP(Hw),xa="lalamove-elite-2026",k2=()=>{const[t,e]=_e.useState(null),[n,r]=_e.useState([]),[i,s]=_e.useState(1e3),[o,l]=_e.useState(!1),[u,h]=_e.useState(1e3),[f,p]=_e.useState(new Date),[g,k]=_e.useState(""),[P,D]=_e.useState(""),[M,I]=_e.useState(""),[w,A]=_e.useState(new Date().toISOString().split("T")[0]),[V,U]=_e.useState(!1),[F,_]=_e.useState(null),[y,v]=_e.useState(null),[T,S]=_e.useState(!0),C=10,E=.3,De=i/20+C;_e.useEffect(()=>{(async()=>{try{await uA(cy)}catch($e){console.error("Auth error:",$e)}})();const he=mA(cy,$e=>{e($e)});return()=>he()},[]),_e.useEffect(()=>{if(!t)return;const W=ey(Pa,"artifacts",xa,"public","data","earnings"),he=HP(W,$e=>{const Go=$e.docs.map(ke=>({id:ke.id,...ke.data()})).sort((ke,He)=>new Date(He.date)-new Date(ke.date));r(Go),S(!1)},$e=>{console.error("Firestore error:",$e),S(!1)});return()=>he()},[t]);const Lt=f.getMonth(),Cr=f.getFullYear(),Kt=n.filter(W=>{const he=new Date(W.date);return he.getMonth()===Lt&&he.getFullYear()===Cr}),z=Kt.reduce((W,he)=>(W[he.date]||(W[he.date]={totalNet:0,totalJobs:0,totalSpending:0}),W[he.date].totalNet+=he.net,W[he.date].totalJobs+=he.jobs,W[he.date].totalSpending+=he.spending||0,W),{});let G=0,J=0,le=0,ye=0;Object.values(z).forEach(W=>{const he=Math.min(W.totalNet*E,C);G+=W.totalNet-he-W.totalSpending,J+=he,le+=W.totalJobs,ye+=W.totalSpending});const pn=Object.keys(z).length,at=Math.min(G/i*100,100),Qt=Math.max(0,i-G),ft=new Date().toISOString().split("T")[0],Xt=z[ft]||{totalNet:0},as=async W=>{if(W.preventDefault(),!g||!t)return;const he={net:parseFloat(g),jobs:parseInt(P)||0,spending:parseFloat(M)||0,date:w,timestamp:Date.now()};try{if(F){const $e=Hh(Pa,"artifacts",xa,"public","data","earnings",F);await zP($e,he),_(null)}else{const $e=ey(Pa,"artifacts",xa,"public","data","earnings");await $P($e,he)}$o()}catch($e){console.error("Save error:",$e)}},Bo=W=>{_(W.id),k(W.net.toString()),D(W.jobs.toString()),I(W.spending?W.spending.toString():""),A(W.date),U(!0),window.scrollTo({top:0,behavior:"smooth"})},$o=()=>{k(""),D(""),I(""),A(new Date().toISOString().split("T")[0]),U(!1),_(null)},Ho=W=>{const he=new Date(f.getFullYear(),f.getMonth()+W,1);p(he)},Wo=async()=>{if(!(!y||!t))try{const W=Hh(Pa,"artifacts",xa,"public","data","earnings",y);await BP(W),v(null)}catch(W){console.error("Delete error:",W)}},pt=W=>new Intl.NumberFormat("ms-MY",{style:"currency",currency:"MYR"}).format(W);return T?N.jsxs("div",{className:"min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center",children:[N.jsx("div",{className:"w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin mb-4"}),N.jsx("p",{className:"text-slate-400 font-black uppercase text-[10px] tracking-[0.2em]",children:"Menghubungkan ke Cloud Elite..."}),N.jsx("p",{className:"text-slate-300 text-[8px] mt-2 uppercase",children:"Pastikan Firebase Config sudah diisi dalam App.jsx"})]}):N.jsxs("div",{className:"min-h-screen bg-slate-50 font-sans pb-16",children:[y&&N.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm",children:N.jsxs("div",{className:"bg-white rounded-3xl p-8 max-w-xs w-full shadow-2xl",children:[N.jsx("div",{className:"w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mx-auto mb-4",children:N.jsx(a2,{className:"w-7 h-7"})}),N.jsx("h3",{className:"text-center font-black text-slate-900 text-lg mb-2",children:"Hapus Rekod?"}),N.jsx("p",{className:"text-center text-slate-500 text-sm mb-6 leading-relaxed px-2",children:"Data ini akan dihapus permanen dari jurnal Elite Anda."}),N.jsxs("div",{className:"flex gap-3",children:[N.jsx("button",{onClick:()=>v(null),className:"flex-1 py-3 font-bold text-slate-400 bg-slate-100 rounded-xl",children:"Batal"}),N.jsx("button",{onClick:Wo,className:"flex-1 py-3 font-bold text-white bg-red-500 rounded-xl shadow-lg transition-all text-sm",children:"Hapus"})]})]})}),N.jsx("header",{className:"bg-orange-600 text-white pt-8 pb-16 px-6 rounded-b-[32px] shadow-lg relative overflow-hidden",children:N.jsxs("div",{className:"max-w-md mx-auto relative z-10",children:[N.jsxs("div",{className:"flex justify-between items-start mb-6",children:[N.jsxs("div",{children:[N.jsxs("h1",{className:"text-xl font-bold flex items-center gap-2 italic uppercase tracking-tighter",children:[N.jsx(uy,{className:"w-6 h-6"})," Lalamove Elite"]}),N.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[o?N.jsxs("div",{className:"flex items-center gap-1 bg-orange-700/50 rounded-xl p-1 border border-orange-400/30",children:[N.jsx("span",{className:"text-xs font-bold pl-1",children:"RM"}),N.jsx("input",{type:"number",value:u,onChange:W=>h(W.target.value),className:"bg-transparent border-none text-white text-xs font-black w-16 focus:ring-0 p-1",autoFocus:!0}),N.jsx("button",{onClick:()=>{s(parseFloat(u)),l(!1)},className:"p-1 bg-green-500 rounded-lg shadow-sm",children:N.jsx(oy,{className:"w-3.5 h-3.5 text-white"})})]}):N.jsxs("button",{onClick:()=>l(!0),className:"flex items-center gap-2 bg-orange-700/30 px-3 py-1.5 rounded-full border border-orange-400/30 group transition-colors",children:[N.jsxs("span",{className:"text-[10px] font-black uppercase tracking-wider",children:["Target: ",pt(i)]}),N.jsx(ly,{className:"w-3 h-3 text-orange-200 opacity-50 group-hover:opacity-100"})]}),N.jsxs("div",{className:"bg-green-500/20 text-green-200 text-[8px] font-black px-2 py-1 rounded border border-green-500/30 flex items-center gap-1",children:[N.jsx(u2,{className:"w-2 h-2"})," CLOUD SYNC"]})]})]}),N.jsx("div",{className:"bg-orange-500/50 p-2 rounded-2xl border border-orange-400/50 shadow-inner",children:N.jsx(y2,{className:"w-5 h-5 text-white"})})]}),N.jsxs("div",{className:"flex items-center justify-between mb-6 bg-black/10 rounded-2xl p-1.5 border border-white/10 backdrop-blur-md text-white",children:[N.jsx("button",{onClick:()=>Ho(-1),className:"p-2 hover:bg-white/10 rounded-xl transition-all",children:N.jsx(r2,{className:"w-4 h-4"})}),N.jsxs("div",{className:"text-center",children:[N.jsx("p",{className:"text-[10px] font-black uppercase tracking-widest opacity-60 leading-none mb-1",children:"Jurnal"}),N.jsx("p",{className:"text-sm font-black uppercase tracking-tighter leading-none",children:f.toLocaleString("ms-MY",{month:"long",year:"numeric"})})]}),N.jsx("button",{onClick:()=>Ho(1),className:"p-2 hover:bg-white/10 rounded-xl transition-all",children:N.jsx(s2,{className:"w-4 h-4"})})]}),N.jsxs("div",{className:"text-center",children:[N.jsx("p",{className:"text-orange-100 text-[10px] mb-1 uppercase font-black opacity-80 tracking-widest",children:"Duit Poket (Baki Bersih)"}),N.jsx("h2",{className:"text-5xl font-black mb-3 drop-shadow-lg tracking-tighter",children:pt(G)}),N.jsxs("div",{className:"flex justify-center gap-2",children:[N.jsxs("div",{className:"bg-black/10 px-3 py-1.5 rounded-xl text-[9px] font-black border border-white/10 backdrop-blur-sm",children:[pn," HARI KERJA"]}),N.jsxs("div",{className:"bg-black/10 px-3 py-1.5 rounded-xl text-[9px] font-black border border-white/10 backdrop-blur-sm uppercase",children:[le," Job Selesai"]})]})]})]})}),N.jsxs("main",{className:"max-w-md mx-auto px-4 -mt-8 relative z-20",children:[N.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-5 mb-5 border border-white relative overflow-hidden group",children:[N.jsxs("div",{className:"flex justify-between items-end mb-3",children:[N.jsxs("div",{children:[N.jsx("p",{className:"text-slate-400 text-[10px] font-black uppercase mb-0.5 tracking-widest",children:"Prestasi Sasaran"}),N.jsx("h3",{className:"text-xl font-black text-slate-900 tracking-tight leading-none",children:Qt>0?`Kurang ${pt(Qt)}`:"SASARAN DICAPAI! 🏆"})]}),N.jsxs("div",{className:"text-orange-600 font-black text-2xl italic leading-none",children:[at.toFixed(0),"%"]})]}),N.jsx("div",{className:"w-full bg-slate-100 h-2.5 rounded-full overflow-hidden shadow-inner",children:N.jsx("div",{className:"h-full bg-orange-500 rounded-full transition-all duration-1000 shadow-sm",style:{width:`${at}%`}})})]}),N.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-5",children:[N.jsxs("div",{className:"bg-slate-900 rounded-2xl p-4 text-white shadow-xl flex flex-col justify-between h-28 border border-slate-800",children:[N.jsx("p",{className:"text-orange-500 text-[9px] font-black uppercase tracking-widest",children:"Gaji Hari Ini"}),N.jsx("p",{className:"text-xl font-black leading-none",children:pt(Xt.totalNet)}),N.jsx("div",{className:"pt-2 border-t border-slate-800",children:N.jsxs("p",{className:"text-[8px] text-slate-500 font-bold uppercase truncate tracking-tighter",children:["Goal: ",pt(De)]})})]}),N.jsxs("div",{className:"bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col justify-between h-28",children:[N.jsx("p",{className:"text-emerald-600 text-[9px] font-black uppercase tracking-widest",children:"Tabung Maintenance"}),N.jsx("p",{className:"text-xl font-black text-slate-900 leading-none",children:pt(J)}),N.jsx("div",{className:"pt-2 border-t border-slate-50",children:N.jsx("p",{className:"text-[8px] text-slate-400 font-bold uppercase italic tracking-tighter",children:"RM10 Cap Harian"})})]})]}),V?N.jsxs("div",{className:"bg-white p-6 rounded-2xl shadow-2xl mb-6 border-2 border-orange-500 animate-in zoom-in-95 duration-200",children:[N.jsxs("div",{className:"flex justify-between items-center mb-5",children:[N.jsx("h3",{className:"font-black text-slate-900 flex items-center gap-2 uppercase text-[10px] tracking-widest",children:F?"Edit Data":"Detail Penghantaran"}),N.jsx("button",{onClick:$o,className:"p-1.5 bg-slate-50 rounded-full text-slate-400",children:N.jsx(S2,{className:"w-4 h-4"})})]}),N.jsxs("form",{onSubmit:as,className:"space-y-4",children:[N.jsxs("div",{children:[N.jsx("label",{className:"block text-[9px] font-black text-slate-400 uppercase mb-1.5 ml-1 tracking-widest text-center",children:"Hasil Wallet Lalamove"}),N.jsxs("div",{className:"relative",children:[N.jsx("span",{className:"absolute left-4 top-1/2 -translate-y-1/2 font-black text-slate-300 text-xl",children:"RM"}),N.jsx("input",{type:"number",step:"0.01",value:g,onChange:W=>k(W.target.value),placeholder:"0.00",className:"w-full pl-12 p-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-orange-500 focus:outline-none text-2xl font-black tracking-tight transition-all",autoFocus:!0})]})]}),N.jsxs("div",{className:"bg-orange-50 p-4 rounded-xl border border-orange-100 text-orange-600",children:[N.jsxs("label",{className:"block text-[9px] font-black uppercase mb-2 ml-1 flex items-center gap-2 tracking-widest",children:[N.jsx(ay,{className:"w-3 h-3"})," Total Belanja"]}),N.jsxs("div",{className:"relative",children:[N.jsx("span",{className:"absolute left-4 top-1/2 -translate-y-1/2 font-black text-orange-300 text-lg",children:"RM"}),N.jsx("input",{type:"number",step:"0.01",value:M,onChange:W=>I(W.target.value),placeholder:"0.00",className:"w-full pl-11 p-2.5 bg-white border-2 border-transparent focus:border-orange-300 rounded-xl focus:outline-none text-lg font-black text-orange-900"})]})]}),N.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[N.jsxs("div",{className:"bg-slate-50 rounded-xl p-2 px-3 border border-slate-100 text-center",children:[N.jsx("label",{className:"block text-[8px] font-black text-slate-400 uppercase mb-0.5",children:"Bil. Job"}),N.jsx("input",{type:"number",value:P,onChange:W=>D(W.target.value),placeholder:"1",className:"w-full bg-transparent font-black text-center text-lg focus:outline-none"})]}),N.jsxs("div",{className:"bg-slate-50 rounded-xl p-2 px-3 border border-slate-100",children:[N.jsx("label",{className:"block text-[8px] font-black text-slate-400 uppercase mb-0.5",children:"Tarikh"}),N.jsx("input",{type:"date",value:w,onChange:W=>A(W.target.value),className:"w-full bg-transparent font-bold text-[9px] focus:outline-none"})]})]}),N.jsxs("button",{type:"submit",className:"w-full bg-orange-600 text-white py-3.5 rounded-xl font-black shadow-lg shadow-orange-100 uppercase tracking-widest flex items-center justify-center gap-2 text-xs active:scale-95 transition-all",children:[F?N.jsx(m2,{className:"w-4 h-4"}):N.jsx(oy,{className:"w-4 h-4"}),F?"Kemaskini":"Sahkan"]})]})]}):N.jsxs("button",{onClick:()=>U(!0),className:"w-full bg-white hover:bg-slate-50 text-slate-900 py-4 rounded-2xl font-black shadow-md border border-slate-200 flex items-center justify-center gap-3 transition-all mb-6 active:scale-95 group",children:[N.jsx(f2,{className:"w-5 h-5 bg-orange-600 rounded-lg text-white"}),N.jsx("span",{className:"uppercase tracking-widest text-xs",children:"Rekod Job Baru"})]}),N.jsxs("div",{className:"bg-white rounded-2xl p-5 mb-6 border border-slate-100 shadow-sm relative overflow-hidden group",children:[N.jsxs("div",{className:"flex items-center gap-2 mb-4 relative z-10",children:[N.jsx(e2,{className:"w-3.5 h-3.5 text-orange-500"}),N.jsxs("h4",{className:"text-slate-900 font-black text-[9px] uppercase tracking-widest leading-none",children:["Ringkasan ",f.toLocaleString("ms-MY",{month:"short"})]})]}),N.jsxs("div",{className:"grid grid-cols-3 gap-2 relative z-10",children:[N.jsxs("div",{className:"bg-orange-50 p-2.5 rounded-xl border border-orange-100 text-center shadow-sm",children:[N.jsx("p",{className:"text-[7px] font-black text-orange-600 uppercase mb-1 truncate tracking-tighter",children:"Total Gaji"}),N.jsx("p",{className:"text-[11px] font-black text-slate-900 truncate leading-none tracking-tighter",children:pt(G)})]}),N.jsxs("div",{className:"bg-indigo-50 p-2.5 rounded-xl border border-indigo-100 text-center shadow-sm",children:[N.jsx("p",{className:"text-[7px] font-black text-indigo-600 uppercase mb-1 truncate tracking-tighter",children:"Job Selesai"}),N.jsx("p",{className:"text-[11px] font-black text-slate-900 leading-none",children:le})]}),N.jsxs("div",{className:"bg-emerald-50 p-2.5 rounded-xl border border-emerald-100 text-center shadow-sm",children:[N.jsx("p",{className:"text-[7px] font-black text-emerald-600 uppercase mb-1 truncate tracking-tighter",children:"Total Belanja"}),N.jsx("p",{className:"text-[11px] font-black text-slate-900 truncate leading-none tracking-tighter",children:pt(ye)})]})]})]}),N.jsxs("div",{className:"space-y-3",children:[N.jsxs("div",{className:"flex justify-between items-center px-1",children:[N.jsxs("h3",{className:"text-slate-900 font-black text-[9px] uppercase tracking-widest flex items-center gap-2",children:[N.jsx(JP,{className:"w-3.5 h-3.5 text-orange-500"})," Jurnal Elite"]}),N.jsxs("span",{className:"text-[8px] font-black text-slate-400 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm",children:[Kt.length," Rekod"]})]}),Kt.length===0?N.jsx("div",{className:"bg-white border-2 border-dashed border-slate-200 rounded-2xl p-10 text-center opacity-50",children:N.jsx("p",{className:"text-slate-400 text-[9px] font-black uppercase tracking-widest leading-none",children:"Tiada rekod data."})}):Kt.map(W=>N.jsxs("div",{className:"bg-white p-4 rounded-2xl shadow-sm flex justify-between items-center group border border-transparent hover:border-orange-100 transition-all hover:shadow-md",children:[N.jsxs("div",{className:"flex items-center gap-3",children:[N.jsx("div",{className:`w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-md transition-transform group-hover:rotate-3 ${W.date===ft?"bg-orange-600":"bg-slate-900"}`,children:N.jsx(uy,{className:"w-5 h-5"})}),N.jsxs("div",{children:[N.jsxs("div",{className:"flex items-center gap-2 mb-0.5",children:[N.jsx("p",{className:"font-black text-slate-900 text-base leading-none",children:pt(W.net)}),N.jsxs("span",{className:"text-[8px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-md font-black uppercase",children:[W.jobs," J"]})]}),N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsx("p",{className:"text-[9px] font-bold text-slate-400 uppercase tracking-tighter leading-none",children:new Date(W.date).toLocaleDateString("ms-MY",{day:"numeric",month:"short"})}),W.spending>0&&N.jsxs("p",{className:"text-[8px] font-black text-orange-500 uppercase flex items-center gap-0.5 tracking-tighter leading-none",children:[N.jsx(ay,{className:"w-2 h-2"})," -",pt(W.spending)]})]})]})]}),N.jsxs("div",{className:"flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity",children:[N.jsx("button",{onClick:()=>Bo(W),className:"p-2 text-slate-300 hover:text-orange-600 transition-all active:scale-90",children:N.jsx(ly,{className:"w-4 h-4"})}),N.jsx("button",{onClick:()=>v(W.id),className:"p-2 text-slate-300 hover:text-red-500 transition-all active:scale-90",children:N.jsx(v2,{className:"w-4 h-4"})})]})]},W.id))]}),N.jsx("div",{className:"mt-10 text-center pb-8 opacity-40",children:N.jsxs("div",{className:"inline-flex items-center gap-2 text-[9px] font-black text-slate-300 uppercase tracking-widest",children:[N.jsx(T2,{className:"w-2.5 h-2.5"})," Created by Wan SK"]})})]})]})};Iv(document.getElementById("root")).render(N.jsx(_e.StrictMode,{children:N.jsx(k2,{})}));
