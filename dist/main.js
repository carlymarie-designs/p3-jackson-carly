(()=>{"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,e){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,e)}function e(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var c=new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}(a,(function t(n,e){r(this,t),this.pageTitle=n,this.pageLogoSrc=e}));var c,i,u=(c=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=o(c);if(i){var r=o(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return e(this,t)});function a(t,n,e){var o;return r(this,a),(o=u.call(this,t,n)).message=e,o}return a}())("The Lunch Decider","Let us help you figuare out what to eat for lunch today...","Ultricies Ullamcorper Cras Bibendum Purus"),i="\n  <header>\n    <h1>".concat(c.pageTitle,"</h1>\n    <h2>").concat(c.pageLogoSrc,"</h2>\n    <p>").concat(c.message,'</p>\n  </header>\n\n  <div class="question">\n    <div class="container">\n      <div class="row justify-content-center align-items-center">\n        <button id="fast-food">Fast Food</button>\n        <button id="sit-down">Sit Down Food</button>\n      </div>\n    </div>\n  </div>\n');function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function f(t,n){return!n||"object"!==u(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}document.body.innerHTML+=i;var d=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}(r,(function t(n,e,o){l(this,t),this.name=n,this.location=e,this.number=o}));var n,e,o=(n=r,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=s(n);if(e){var r=s(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return f(this,t)});function r(t,n,e,c){var i;return l(this,r),(i=o.call(this,t,n,e)).rating=c,i}return r}(),p=[new d("Chick Fli A","252 Bumby Road","(845) 645-7787","*****"),new d("Burger King","898 Load Road","(998) 645-7787","***"),new d("Zaxbys","8987 Some Road","(998) 894-7787","****"),new d("McDonalds","8987 Golden Road","(788) 895-7787","**"),new d("Whataburger","434 Space Road","(889) 895-9785","****")],y=[new d("Mom & Pops","454 Bumby Road","(884) 645-4845","****"),new d("River Side","898 River Way","(998) 645-7444","*****"),new d("Silver Slipper","373 Slider Way","(989) 894-7889","**"),new d("Bone Foxes","8987 Golden Road","(788) 895-7787","**"),new d("Real Soul","4344 Soul Road","(889) 895-9785","****")];function b(t){t.sort((function(){return Math.random()-.5}))}b(y),b(p),console.log(y[0].name),document.addEventListener("DOMContentLoaded",(function(t){document.body.insertAdjacentHTML("beforeend",h);var n=document.querySelector("#fast-food"),e=document.querySelector("#sit-down"),o=document.querySelector("#output");n.addEventListener("click",(function(){b(p),o.innerHTML=p[0].name})),e.addEventListener("click",(function(){b(y),o.innerHTML=y[0].name}))}));var h='\n  <div class="results">\n    <div class="container">\n      <div class="row justify-content-center align-item-center">\n        <div class="col-12 col-md-6">\n          <div id="output"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n'})();