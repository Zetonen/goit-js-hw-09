!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);const r={form:document.querySelector(".form")};function i(e,o){return new Promise(((n,t)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}var l=t("h6c0i");r.form.addEventListener("submit",(function(e){e.preventDefault();const o={};new FormData(e.currentTarget).forEach(((e,n)=>{o[n]=Number(e)}));for(let e=1;e<=o.amount;e++)i(e,o.delay).then((({position:e,delay:o})=>{l.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{l.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),o.delay+=o.step}))}();
//# sourceMappingURL=03-promises.bd7e84c5.js.map
