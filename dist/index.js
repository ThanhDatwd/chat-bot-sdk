/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function e(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(t,e,n){return(e=s(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(){r=function(){return e};var t,e={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",h=c.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),c=new P(r||[]);return i(a,"_invoke",{value:S(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var v="suspendedStart",g="suspendedYield",y="executing",p="completed",m={};function b(){}function k(){}function w(){}var E={};u(E,s,(function(){return this}));var L=Object.getPrototypeOf,j=L&&L(L(C([])));j&&j!==n&&o.call(j,s)&&(E=j);var x=w.prototype=b.prototype=Object.create(E);function M(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(r,i,c,s){var l=f(t[r],t,i);if("throw"!==l.type){var h=l.arg,u=h.value;return u&&"object"==a(u)&&o.call(u,"__await")?e.resolve(u.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(u).then((function(t){h.value=t,c(h)}),(function(t){return n("throw",t,c,s)}))}s(l.arg)}var r;i(this,"_invoke",{value:function(t,o){function i(){return new e((function(e,r){n(t,o,e,r)}))}return r=r?r.then(i,i):i()}})}function S(e,n,r){var o=v;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===p){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var s=I(c,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===v)throw o=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var l=f(e,n,r);if("normal"===l.type){if(o=r.done?p:g,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=p,r.method="throw",r.arg=l.arg)}}}function I(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,I(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var i=f(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function C(e){if(e||""===e){var n=e[s];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function n(){for(;++r<e.length;)if(o.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(a(e)+" is not iterable")}return k.prototype=w,i(x,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:k,configurable:!0}),k.displayName=u(w,h,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,h,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},M(O.prototype),u(O.prototype,l,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new O(d(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},M(x),u(x,h,"Generator"),u(x,s,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=C,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}function o(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function c(t){o(a,r,i,c,s,"next",t)}function s(t){o(a,r,i,c,s,"throw",t)}c(void 0)}))}}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function s(t){var e=function(t,e){if("object"!=a(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==a(e)?e:e+""}var l=function(){return t=function t(e,n){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),"string"==typeof e)this.fetchConfig(e);else{if("object"!==a(e))throw new Error("Invalid configuration type");this.initConfig(e)}},n=[{key:"fetchConfig",value:function(t){var e=this;fetch(t).then((function(t){return t.json()})).then((function(t){e.initConfig(t)})).catch((function(t){console.error("Error loading configuration:",t)}))}},{key:"initConfig",value:function(t){var e,n,r;if(!t.apiKey)throw new Error("API key is required");this.apiKey=t.apiKey,this.loadStyles(),this.initUI(t.ui),this.ui=t.ui,this.config=t,this.conversationId=null!==(e=t.conversationId)&&void 0!==e?e:null,this.userId=null!==(n=t.userId)&&void 0!==n?n:null,this.botId=null!==(r=t.botId)&&void 0!==r?r:null,this.loadMarkedLibrary(),this.loadHighlightLibrary(),this.initWebSocket(),this.WS_URL_8080="ws://46.250.249.219:8000/ws/",this.messageString="",this.currentMessageElement=null,this.loading=!1}},{key:"loadStyles",value:function(){var t=document.createElement("link");t.rel="stylesheet",t.href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css",document.head.appendChild(t);var e=document.createElement("link");e.rel="stylesheet",e.href="src/css/styles.css",document.head.appendChild(e)}},{key:"loadMarkedLibrary",value:function(){var t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/markdown.js/0.5.0/markdown.min.js",document.head.appendChild(t),t.onload=function(){console.log("marked.js đã được tải thành công!")}}},{key:"loadHighlightLibrary",value:function(){var t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js",document.head.appendChild(t),t.onload=function(){console.log("highlight.js đã được tải thành công!"),hljs.highlightAll()}}},{key:"initUI",value:function(t){var e,n=this,r=document.createElement("div");r.innerHTML='\n    <div id="katech-chatbot">\n    <button id="katech-chatbot-button">Chat with us</button>\n    <div  id="katech-chatbot-container" >\n        <div id="katech-chatbot-header-area">\n        '.concat(t.header.html?t.header.html:'<div style="'.concat(t.header.style,'" id="katech-chatbot-header" class="katech-chatbot-header">\n                  <img\n                      src="').concat(null==t||null===(e=t.bot)||void 0===e?void 0:e.avatar,'" />\n                  <div id="katech-chatbot-header_content" style="">\n                      <span class="subtitle">Chat with</span>\n                      <span class="title">').concat(t.bot.name,'</span>\n                  </div>\n              </div>\n              <div style="border-color:').concat(t.bot.color,";color:").concat(t.bot.color,'" id="katech-chatbot-header_btn-close">-</div>\n          </div>'),'\n        <div style="').concat(t.body.style,'" id="katech-chatbot-body" class="katech-chatbot-body">\n        <div style="').concat(t.greeting.style,'" id="katech-chatbot-greeting">\n        ').concat(t.greeting.html?t.greeting.html:'\n            <img src="'.concat(t.greeting.image,'" />\n            <div id="">\n                <span class="title">').concat(t.greeting.title,"</span>\n            </div>"),'\n          </div>\n        </div>\n        <div id="katech-chatbot-footer-area">\n        ').concat(t.footer.html?t.footer.html:'<div style="'.concat(t.body.style,'" id="katech-chatbot-footer" class="katech-chatbot-footer">\n                  <input id="katech-chatbot-input" type="text" class="katech-chatbot-input"\n                    placeholder="Type your message...">\n                  <div id="katech-chatbot-footer_action">\n                    <div></div>\n                    <button style="background:').concat(t.bot.background,"; color:").concat(t.bot.color,'" id="katech-chatbot-send-button" class="katech-chatbot-send-button">\n                      Send\n                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:').concat(t.bot.color,';transform: ;msFilter:;">\n                        <path d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                '),"\n        </div>\n    </div>\n</div>"),document.body.appendChild(r);var o=document.getElementById("katech-chatbot-button"),i=document.getElementById("katech-chatbot-header_btn-close"),a=document.getElementById("katech-chatbot-container"),c=function(){a.classList.toggle("hidden")};o.addEventListener("click",c),i.addEventListener("click",c);var s=document.getElementById("katech-chatbot-send-button"),l=document.getElementById("katech-chatbot-input");document.getElementById("katech-chatbot-body"),s.addEventListener("click",(function(){var t=l.value.trim();t&&(n.sendMessage(t),l.value="")})),l.addEventListener("keypress",(function(t){if("Enter"===t.key){var e=l.value.trim();e&&(n.sendMessage(e),l.value="")}}))}},{key:"loadMessages",value:(l=i(r().mark((function t(){var e,n,o=this;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.getElementById("katech-chatbot-body").innerHTML="",t.prev=2,t.next=5,fetch("http://46.250.249.219:8000/api/v1/conversation/".concat(this.conversationId),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.apiKey),"X-Sub":this.userId}});case 5:if((e=t.sent).ok){t.next=8;break}throw new Error("Failed to fetch data");case 8:return t.next=10,e.json();case 10:delete(n=t.sent).data.messageMap.system,Object.keys(n.data.messageMap).map((function(t){return n.data.messageMap[t]})).forEach((function(t){var e=markdown.toHTML(t.content[0].body);o.displayMessage(e,t.role)})),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(2),console.error("Error loading messages:",t.t0);case 19:case"end":return t.stop()}}),t,this,[[2,16]])}))),function(){return l.apply(this,arguments)})},{key:"sendMessage",value:(s=i(r().mark((function t(n){var o,i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loading=!0,this.currentMessageElement=null,this.messageString="",this.displayMessage(n,"user"),this.showLoadingMessage(),this.hideGreetingMessage(),o={role:"user",content:[{contentType:"text",body:n}],model:"claude-v3-haiku",parentMessageId:null,messageId:null},t.next=10,fetch("http://46.250.249.219:8000/api/v1/conversation/stream?access_token=".concat(this.apiKey),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.apiKey),"X-Sub":this.userId},body:JSON.stringify({conversationId:this.conversationId,botId:this.botId,message:e(e({},o),{},{parentMessageId:null})}),timeout:3e4});case 10:return i=t.sent,t.next=13,i.json();case 13:t.sent,t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.error("Error sending message:",t.t0);case 19:case"end":return t.stop()}}),t,this,[[0,16]])}))),function(t){return s.apply(this,arguments)})},{key:"showLoadingMessage",value:function(){var t,e=document.getElementById("katech-chatbot-body");e.insertAdjacentHTML("beforeend",'\n      <div id="katech-chatbot-message" class="katech-bot-message-group katech-chatbot-loading-message">\n          <img src="'.concat(null===(t=this.ui)||void 0===t||null===(t=t.bot)||void 0===t?void 0:t.avatar,'" />\n          <div style="').concat(this.ui.body.message.out.style,'" class="katech-bot-message">\n          ').concat(this.ui.loading.html?this.ui.loading.html:'\n            <div class="typing">\n            <div style="'.concat(this.ui.loading.style,'" class="typing__dot"></div>\n            <div style="').concat(this.ui.loading.style,'" class="typing__dot"></div>\n            <div style="').concat(this.ui.loading.style,'" class="typing__dot"></div>\n          </div>'),"\n          </div>\n      </div>\n    ")),this.loadingMessageElement=e.lastElementChild,e.scrollTop=e.scrollHeight}},{key:"hideLoadingMessage",value:function(){this.loadingMessageElement&&(this.loadingMessageElement.remove(),this.loadingMessageElement=null)}},{key:"hideGreetingMessage",value:function(){document.getElementById("katech-chatbot-greeting").classList.add("hidden")}},{key:"displayMessage",value:function(t,e){var n=document.getElementById("katech-chatbot-body");if("user"===e)n.insertAdjacentHTML("beforeend",'\n          <div id="katech-chatbot-message" class="katech-user-message-group">\n          <div style="'.concat(this.ui.body.message.in.style,'" class="katech-user-message">').concat(t,"</div>\n          </div>\n      ")),this.currentMessageElement=null;else if("assistant"===e){var r;this.currentMessageElement?this.currentMessageElement.innerHTML=t:(this.hideLoadingMessage(),n.insertAdjacentHTML("beforeend",'\n          <div id="katech-chatbot-message" class="katech-bot-message-group">\n              <img src="'.concat(null===(r=this.ui)||void 0===r||null===(r=r.bot)||void 0===r?void 0:r.avatar,'" />\n              <div style="').concat(this.ui.body.message.out.style,'" class="katech-bot-message">').concat(t,"</div>\n          </div>\n        ")),this.currentMessageElement=n.lastElementChild.querySelector(".katech-bot-message"))}n.scrollTop=n.scrollHeight}},{key:"initWebSocket",value:function(){var t=this;this.socket=new WebSocket("ws://46.250.249.219:8000/ws/conversation?accessToken=".concat(this.apiKey)),this.socket.addEventListener("open",(function(t){console.log("WebSocket connection established:",t)})),this.socket.addEventListener("message",(function(e){var n=JSON.parse(e.data),r=atob(n.data.body),o=decodeURIComponent(escape(r));t.messageString+=o;var i=markdown.toHTML(t.messageString);t.displayMessage(i,"assistant")})),this.socket.addEventListener("close",(function(t){console.log("WebSocket connection closed:",t)})),this.socket.addEventListener("error",(function(t){console.error("WebSocket error observed:",t)}))}}],n&&c(t.prototype,n),o&&c(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n,o,s,l}();window.ChatBotSDK=l})();