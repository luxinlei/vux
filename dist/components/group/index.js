/*!
 * Vux v0.1.3-rc6 (https://vux.li)
 * Licensed under the MIT license
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxGroup=e():t.vuxGroup=e()}(this,function(){return function(t){function e(r){if(o[r])return o[r].exports;var i=o[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(4)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{title:String,titleColor:String}}},function(t,e){},function(t,e){t.exports="<div> <div class=weui_cells_title v-if=title :style={color:titleColor} v-html=title></div> <div class=weui_cells :class=\"{'vux-no-group-title':!title}\"> <slot></slot> </div> </div>"},function(t,e,o){var r,i;o(2),r=o(1),i=o(3),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}])});