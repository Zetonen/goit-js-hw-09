const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},e=new class{constructor({changeColor:t}){this.isActiveInterval=!1,this.idInterval=null,this.changeColor=t}getRandomHexColor(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}start(t){this.isActiveInterval||(this.isActiveInterval=!0,this.idInterval=setInterval((()=>{const t=this.getRandomHexColor();this.changeColor(t)}),t))}stop(){this.isActiveInterval&&(this.isActiveInterval=!1,clearInterval(this.idInterval))}}({changeColor:function(t){document.body.style.backgroundColor=t}});t.startBtn.addEventListener("click",e.start.bind(e,1e3)),t.stopBtn.addEventListener("click",e.stop.bind(e));
//# sourceMappingURL=01-color-switcher.41f1a6d0.js.map