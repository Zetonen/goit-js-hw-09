!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var n={};function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t,e,n){e&&r(t.prototype,e);n&&r(t,n);return t};var a=function(){"use strict";function r(n){var a=n.changeColor;t(e)(this,r),this.isActiveInterval=!1,this.idInterval=null,this.changeColor=a}return t(n)(r,[{key:"getRandomHexColor",value:function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}},{key:"start",value:function(t){var e=this;this.isActiveInterval||(this.isActiveInterval=!0,this.idInterval=setInterval((function(){var t=e.getRandomHexColor();e.changeColor(t)}),t))}},{key:"stop",value:function(){this.isActiveInterval&&(this.isActiveInterval=!1,clearInterval(this.idInterval))}}]),r}();var o={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},i=new a({changeColor:function(t){document.body.style.backgroundColor=t}});o.startBtn.addEventListener("click",i.start.bind(i,1e3)),o.stopBtn.addEventListener("click",i.stop.bind(i))}();
//# sourceMappingURL=01-color-switcher.26521cf4.js.map
