/*!
 * Vux v0.1.3-rc6 (https://vux.li)
 * Licensed under the MIT license
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxClocker=e():t.vuxClocker=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(40)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports=!n(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(25),o=n(6);t.exports=function(t){return r(o(t))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(10);e["default"]={ready:function(){this.slot=this.$el.querySelector(".vux-clocker-tpl"),this.slotString=this.slot.innerHTML,""!==this.slotString&&(this.showTimeString=!1),this.render()},methods:{render:function(){var t=this;this.clocker=new r(this.time).on("tick",function(e){t.update(e),t.$emit("on-tick",e)}).on("finish",function(){t.timeString="00:00:00",t.$emit("on-finish")}).start()},update:function(t){if(this.showTimeString)this.timeString=t.strftime(this.format);else{var e=t.strftime(this.slotString);e!==this.cacheSlotString&&(this.slot.innerHTML=this.cacheSlotString=e)}}},props:{time:{type:String,required:!0},format:{type:String,"default":"%D 天 %H 小时 %M 分 %S 秒"}},watch:{time:function(){this.clocker.remove(),this.render()}},data:function(){return{showTimeString:!0,timeString:"",slotString:"",cacheSlotString:""}},beforeDestroy:function(){this.clocker.remove(),this.clocker=null}}},function(t,e,n){"use strict";function r(t){if(t instanceof Date)return t;if(String(t).match(f))return String(t).match(/^[0-9]*$/)&&(t=Number(t)),String(t).match(/\-/)&&(t=String(t).replace(/\-/g,"/")),new Date(t);throw new Error("Couldn't cast `"+t+"` to a date object.")}function o(t){var e=t.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(e)}function i(t){return function(e){var n=e.match(/%(-|!)?[A-Z]{1}(:[^]+)?/gi);if(n)for(var r=0,i=n.length;i>r;++r){var u=n[r].match(/%(-|!)?([a-zA-Z]{1})(:[^]+)?/),c=o(u[0]),f=u[1]||"",l=u[3]||"",p=null;u=u[2],a.hasOwnProperty(u)&&(p=a[u],p=Number(t[p])),null!==p&&("!"===f&&(p=s(l,p)),""===f&&10>p&&(p="0"+p.toString()),e=e.replace(c,p.toString()))}return e=e.replace("%_M1",t.minutes_1).replace("%_M2",t.minutes_2).replace("%_S1",t.seconds_1).replace("%_S2",t.seconds_2).replace("%_H1",t.hours_1).replace("%_H2",t.hours_2).replace("%_D1",t.days_1).replace("%_D2",t.days_2),e=e.replace(/%%/,"%")}}function s(t,e){var n="s",r="";return t&&(t=t.replace(/(:||\s)/gi,"").split(/,/),1===t.length?n=t[0]:(r=t[0],n=t[1])),1===Math.abs(e)?r:n}function u(t){return t+="",t=(1===t.length?"0"+t:t)+"",t.split("")}var c=[],f=[];f.push(/^[0-9]*$/.source),f.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),f.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),f=new RegExp(f.join("|"));var a={Y:"years",m:"months",w:"weeks",D:"days",H:"hours",M:"minutes",S:"seconds"},l=function(t,e){e=e||{},this.PRECISION=e.precision||100,this.interval=null,this.offset={},this.instanceNumber=c.length,c.push(this),this.setFinalDate(t)},p=n(11);p.mixTo(l);var h=l.prototype,v={start:function(){null!==this.interval&&clearInterval(this.interval);var t=this;return this.update(),this.interval=setInterval(function(){t.update()},this.PRECISION),this},stop:function(){return clearInterval(this.interval),this.interval=null,this._dispatchEvent("stoped"),this},toggle:function(){return this.interval?this.stop():this.start(),this},pause:function(){return this.stop()},resume:function(){return this.start()},remove:function(){this.stop(),c[this.instanceNumber]=null},setFinalDate:function(t){return this.finalDate=r(t),this},getOffset:function(){return this.totalSecsLeft=this.finalDate.getTime()-(new Date).getTime(),this.totalSecsLeft=Math.ceil(this.totalSecsLeft/1e3),this.totalSecsLeft=this.totalSecsLeft<0?0:this.totalSecsLeft,{seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30),years:Math.floor(this.totalSecsLeft/60/60/24/365)}},update:function(){this.offset=this.getOffset();for(var t=["days","hours","minutes","seconds"],e=0;e<t.length;e++){var n=t[e],r=u(this.offset[n]);this.offset[n+"_1"]=r[0],this.offset[n+"_2"]=r[1]}return 0===this.totalSecsLeft?(this.stop(),this._dispatchEvent("finish")):this._dispatchEvent("update"),this},_dispatchEvent:function(t){var e={};e.finalDate=this.finalDate,e.offset=this.offset,e.strftime=i(this.offset),this.emit(t,e),this.emit("tick",e)}};for(var d in v)h[d]=v[d];t.exports=l},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){}function i(t,e,n){var r=!0;if(t){var o=0,i=t.length,s=e[0],u=e[1],c=e[2];switch(e.length){case 0:for(;i>o;o+=2)r=t[o].call(t[o+1]||n)!==!1&&r;break;case 1:for(;i>o;o+=2)r=t[o].call(t[o+1]||n,s)!==!1&&r;break;case 2:for(;i>o;o+=2)r=t[o].call(t[o+1]||n,s,u)!==!1&&r;break;case 3:for(;i>o;o+=2)r=t[o].call(t[o+1]||n,s,u,c)!==!1&&r;break;default:for(;i>o;o+=2)r=t[o].apply(t[o+1]||n,e)!==!1&&r}}return r}function s(t){return"[object Function]"===Object.prototype.toString.call(t)}var u=n(12),c=r(u),f=/\s+/;o.prototype.on=function(t,e,n){var r,o,i;if(!e)return this;for(r=this.__events||(this.__events={}),t=t.split(f);o=t.shift();)i=r[o]||(r[o]=[]),i.push(e,n);return this},o.prototype.once=function(t,e,n){var r=this,o=function i(){r.off(t,i),e.apply(n||r,arguments)};return this.on(t,o,n)},o.prototype.off=function(t,e,n){var r,o,i,s;if(!(r=this.__events))return this;if(!(t||e||n))return delete this.__events,this;for(t=t?t.split(f):a(r);o=t.shift();)if(i=r[o])if(e||n)for(s=i.length-2;s>=0;s-=2)e&&i[s]!==e||n&&i[s+1]!==n||i.splice(s,2);else delete r[o];return this},o.prototype.trigger=function(t){var e,n,r,o,s,u,c=[],a=!0;if(!(e=this.__events))return this;for(t=t.split(f),s=1,u=arguments.length;u>s;s++)c[s-1]=arguments[s];for(;n=t.shift();)(r=e.all)&&(r=r.slice()),(o=e[n])&&(o=o.slice()),"all"!==n&&(a=i(o,c,this)&&a),a=i(r,[n].concat(c),this)&&a;return a},o.prototype.emit=o.prototype.trigger;var a=c["default"];a||(a=function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e}),o.mixTo=function(t){function e(e){t[e]=function(){return n[e].apply(i,Array.prototype.slice.call(arguments)),this}}var n=o.prototype;if(s(t))for(var r in n)n.hasOwnProperty(r)&&(t.prototype[r]=n[r]);else{var i=new o;for(var u in n)n.hasOwnProperty(u)&&e(u)}},t.exports=o},function(t,e,n){t.exports={"default":n(13),__esModule:!0}},function(t,e,n){n(38),t.exports=n(1).Object.keys},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(8),o=n(34),i=n(33);t.exports=function(t){return function(e,n,s){var u,c=r(e),f=o(c.length),a=i(s,f);if(t&&n!=n){for(;f>a;)if(u=c[a++],u!=u)return!0}else for(;f>a;a++)if((t||a in c)&&c[a]===n)return t||a||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(14);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(5),o=n(4).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(4),o=n(1),i=n(18),s=n(23),u="prototype",c=function(t,e,n){var f,a,l,p=t&c.F,h=t&c.G,v=t&c.S,d=t&c.P,y=t&c.B,m=t&c.W,g=h?o:o[e]||(o[e]={}),x=g[u],S=h?r:v?r[e]:(r[e]||{})[u];h&&(n=e);for(f in n)a=!p&&S&&void 0!==S[f],a&&f in g||(l=a?S[f]:n[f],g[f]=h&&"function"!=typeof S[f]?n[f]:y&&a?i(l,r):m&&S[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[u]=t[u],e}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((g.virtual||(g.virtual={}))[f]=l,t&c.R&&x&&!x[f]&&s(x,f,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(26),o=n(30);t.exports=n(2)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(2)&&!n(3)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(17);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(15),o=n(24),i=n(36),s=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return s(t,e,n)}catch(u){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(22),o=n(8),i=n(16)(!1),s=n(31)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),c=0,f=[];for(n in u)n!=s&&r(u,n)&&f.push(n);for(;e.length>c;)r(u,n=e[c++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){var r=n(27),o=n(20);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(21),o=n(1),i=n(3);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],s={};s[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",s)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(32)("keys"),o=n(37);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(4),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){var r=n(7),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),0>t?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(7),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(6);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(35),o=n(28);n(29)("keys",function(){return function(t){return o(r(t))}})},function(t,e){t.exports="<div> <span v-if=showTimeString>{{timeString}}</span> <div class=vux-clocker-tpl><slot></slot></div> </div>"},function(t,e,n){var r,o;r=n(9),o=n(39),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}])});