var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);const r={form:document.querySelector(".form")};function i(e,o){return new Promise(((t,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}var l=n("iQIUW");r.form.addEventListener("submit",(function(e){e.preventDefault();const o={};new FormData(e.currentTarget).forEach(((e,t)=>{o[t]=Number(e)}));for(let e=1;e<=o.amount;e++)i(e,o.delay).then((({position:e,delay:o})=>{l.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{l.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),o.delay+=o.step}));
//# sourceMappingURL=03-promises.61835d77.js.map
