var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,a=c||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return a.Date.now()};function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function p(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var c=r.test(t);return c||i.test(t)?u(t.slice(2),c?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var o,r,i,u,c,f,a=0,l=!1,y=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){var n=o,i=r;return o=r=void 0,a=e,u=t.apply(i,n)}function g(t){return a=t,c=setTimeout(O,e),l?h(t):u}function j(t){var n=t-f;return void 0===f||n>=e||n<0||y&&t-a>=i}function O(){var t=m();if(j(t))return T(t);c=setTimeout(O,function(t){var n=e-(t-f);return y?d(n,i-(t-a)):n}(t))}function T(t){return c=void 0,b&&o?h(t):(o=r=void 0,u)}function $(){var t=m(),n=j(t);if(o=arguments,r=this,f=t,n){if(void 0===c)return g(f);if(y)return c=setTimeout(O,e),h(f)}return void 0===c&&(c=setTimeout(O,e)),u}return e=p(e)||0,v(n)&&(l=!!n.leading,i=(y="maxWait"in n)?s(p(n.maxWait)||0,e):i,b="trailing"in n?!!n.trailing:b),$.cancel=function(){void 0!==c&&clearTimeout(c),a=0,o=f=r=c=void 0},$.flush=function(){return void 0===c?u:T(m())},$};let y={},b=document.querySelector("#search-box");document.querySelector(".country-info");b.autofocus=!0,b.pattern="[A-Za-z]",b.title="Country name should only contain english letters",b.placeholder="Enter country name",b.addEventListener("input",e((function(t){t.preventDefault();let e=document.querySelector(".country-list");const n=t.target.value.trim();return countriesObject=fetch(`https://restcountries.com/v3.1/name/${n}`).then((t=>t.json())).then((t=>{let n="";t.forEach((t=>{n+=`<li class="form-item" data-value="${t.name.common}">${t.name.common}</li>`,console.log(e),e.insertAdjacentHTML("afterend",`${n}`)}))})).catch((t=>console.log(t))),countriesObject}),1e3)),document.addEventListener("input",(function(t){t.preventDefault(),y&&console.log("є обєкт")}));
//# sourceMappingURL=index.f888848f.js.map
