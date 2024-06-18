/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var t={};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function r(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,n){return(e=l(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(){a=function(){return n};var t,n={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",h=c.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),c=new T(r||[]);return i(a,"_invoke",{value:S(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=d;var v="suspendedStart",y="suspendedYield",g="executing",p="completed",m={};function b(){}function k(){}function w(){}var E={};u(E,s,(function(){return this}));var L=Object.getPrototypeOf,j=L&&L(L(B([])));j&&j!==r&&o.call(j,s)&&(E=j);var x=w.prototype=b.prototype=Object.create(E);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function M(t,n){function r(a,i,c,s){var l=f(t[a],t,i);if("throw"!==l.type){var h=l.arg,u=h.value;return u&&"object"==e(u)&&o.call(u,"__await")?n.resolve(u.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):n.resolve(u).then((function(t){h.value=t,c(h)}),(function(t){return r("throw",t,c,s)}))}s(l.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}})}function S(e,n,r){var o=v;return function(a,i){if(o===g)throw Error("Generator is already running");if(o===p){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var s=I(c,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===v)throw o=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=g;var l=f(e,n,r);if("normal"===l.type){if(o=r.done?p:y,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=p,r.method="throw",r.arg=l.arg)}}}function I(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,I(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var a=f(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,m;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function B(n){if(n||""===n){var r=n[s];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var a=-1,i=function e(){for(;++a<n.length;)if(o.call(n,a))return e.value=n[a],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(e(n)+" is not iterable")}return k.prototype=w,i(x,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:k,configurable:!0}),k.displayName=u(w,h,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,h,"GeneratorFunction")),t.prototype=Object.create(x),t},n.awrap=function(t){return{__await:t}},O(M.prototype),u(M.prototype,l,(function(){return this})),n.AsyncIterator=M,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new M(d(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(x),u(x,h,"Generator"),u(x,s,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=B,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:B(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},n}function i(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){i(a,r,o,c,s,"next",t)}function s(t){i(a,r,o,c,s,"throw",t)}c(void 0)}))}}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,l(r.key),r)}}function l(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var h=function(){return t=function t(e,n){var r,o,a;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!e.apiKey)throw new Error("API key is required");this.apiKey=e.apiKey,this.loadStyles(),this.initUI(n),this.ui=n,this.config=e,this.conversationId=null!==(r=e.conversationId)&&void 0!==r?r:null,this.userId=null!==(o=e.userId)&&void 0!==o?o:null,this.botId=null!==(a=e.botId)&&void 0!==a?a:null,this.loadMarkedLibrary(),this.loadHighlightLibrary(),this.initWebSocket(),this.WS_URL_8080="ws://46.250.249.219:8000/ws/",this.messageString="",this.currentMessageElement=null,this.loading=!1},e=[{key:"loadStyles",value:function(){var t=document.createElement("link");t.rel="stylesheet",t.href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css",document.head.appendChild(t);var e=document.createElement("link");e.rel="stylesheet",e.href="src/css/styles.css",document.head.appendChild(e)}},{key:"loadMarkedLibrary",value:function(){var t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/markdown.js/0.5.0/markdown.min.js",document.head.appendChild(t),t.onload=function(){console.log("marked.js đã được tải thành công!")}}},{key:"loadHighlightLibrary",value:function(){var t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js",document.head.appendChild(t),t.onload=function(){console.log("highlight.js đã được tải thành công!"),hljs.highlightAll()}}},{key:"initUI",value:function(t){var e,n=this,r=document.createElement("div");r.innerHTML='\n    <div id="katech-chatbot">\n    <button id="katech-chatbot-button">Chat with us</button>\n    <div  id="katech-chatbot-container" >\n        <div id="katech-chatbot-header-area">\n        '.concat(t.header.html?t.header.html:'<div style="'.concat(t.header.style,'" id="katech-chatbot-header" class="katech-chatbot-header">\n                  <img\n                      src="').concat(null==t||null===(e=t.bot)||void 0===e?void 0:e.avatar,'" />\n                  <div id="katech-chatbot-header_content" style="">\n                      <span class="subtitle">Chat with</span>\n                      <span class="title">').concat(t.bot.name,'</span>\n                  </div>\n              </div>\n              <div style="border-color:').concat(t.bot.color,";color:").concat(t.bot.color,'" id="katech-chatbot-header_btn-close">-</div>\n          </div>'),'\n        <div style="').concat(t.body.style,'" id="katech-chatbot-body" class="katech-chatbot-body">\n        <div style="').concat(t.greeting.style,'" id="katech-chatbot-greeting">\n        ').concat(t.greeting.html?t.greeting.html:'\n            <img src="'.concat(t.greeting.image,'" />\n            <div id="">\n                <span class="title">').concat(t.greeting.title,"</span>\n            </div>"),'\n          </div>\n        </div>\n        <div id="katech-chatbot-footer-area">\n        ').concat(t.footer.html?t.footer.html:'<div style="'.concat(t.body.style,'" id="katech-chatbot-footer" class="katech-chatbot-footer">\n                  <input id="katech-chatbot-input" type="text" class="katech-chatbot-input"\n                    placeholder="Type your message...">\n                  <div id="katech-chatbot-footer_action">\n                    <div></div>\n                    <button style="background:').concat(t.bot.background,"; color:").concat(t.bot.color,'" id="katech-chatbot-send-button" class="katech-chatbot-send-button">\n                      Send\n                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:').concat(t.bot.color,';transform: ;msFilter:;">\n                        <path d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                '),"\n        </div>\n    </div>\n</div>"),document.body.appendChild(r);var o=document.getElementById("katech-chatbot-button"),a=document.getElementById("katech-chatbot-header_btn-close"),i=document.getElementById("katech-chatbot-container"),c=function(){i.classList.toggle("hidden")};o.addEventListener("click",c),a.addEventListener("click",c);var s=document.getElementById("katech-chatbot-send-button"),l=document.getElementById("katech-chatbot-input");document.getElementById("katech-chatbot-body"),s.addEventListener("click",(function(){var t=l.value.trim();t&&(n.sendMessage(t),l.value="")})),l.addEventListener("keypress",(function(t){if("Enter"===t.key){var e=l.value.trim();e&&(n.sendMessage(e),l.value="")}}))}},{key:"loadMessages",value:(i=c(a().mark((function t(){var e,n,r=this;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.getElementById("katech-chatbot-body").innerHTML="",t.prev=2,t.next=5,fetch("http://46.250.249.219:8000/api/v1/conversation/".concat(this.conversationId),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.apiKey),"X-Sub":this.userId}});case 5:if((e=t.sent).ok){t.next=8;break}throw new Error("Failed to fetch data");case 8:return t.next=10,e.json();case 10:delete(n=t.sent).data.messageMap.system,Object.keys(n.data.messageMap).map((function(t){return n.data.messageMap[t]})).forEach((function(t){var e=markdown.toHTML(t.content[0].body);r.displayMessage(e,t.role)})),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(2),console.error("Error loading messages:",t.t0);case 19:case"end":return t.stop()}}),t,this,[[2,16]])}))),function(){return i.apply(this,arguments)})},{key:"sendMessage",value:(o=c(a().mark((function t(e){var n,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loading=!0,this.currentMessageElement=null,this.messageString="",this.displayMessage(e,"user"),this.showLoadingMessage(),this.hideGreetingMessage(),n={role:"user",content:[{contentType:"text",body:e}],model:"claude-v3-haiku",parentMessageId:null,messageId:null},t.next=10,fetch("http://46.250.249.219:8000/api/v1/conversation/stream?access_token=".concat(this.apiKey),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.apiKey),"X-Sub":this.userId},body:JSON.stringify({conversationId:this.conversationId,botId:this.botId,message:r(r({},n),{},{parentMessageId:null})}),timeout:3e4});case 10:return o=t.sent,t.next=13,o.json();case 13:t.sent,t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.error("Error sending message:",t.t0);case 19:case"end":return t.stop()}}),t,this,[[0,16]])}))),function(t){return o.apply(this,arguments)})},{key:"showLoadingMessage",value:function(){var t,e=document.getElementById("katech-chatbot-body");e.insertAdjacentHTML("beforeend",'\n      <div id="katech-chatbot-message" class="katech-bot-message-group katech-chatbot-loading-message">\n          <img src="'.concat(null===(t=this.ui)||void 0===t||null===(t=t.bot)||void 0===t?void 0:t.avatar,'" />\n          <div style="').concat(this.ui.body.message.out.style,'" class="katech-bot-message">\n          ').concat(this.ui.loading.html?this.ui.loading.html:'\n            <div class="typing">\n            <div style="'.concat(this.ui.loading.style,'" class="typing__dot"></div>\n            <div style="').concat(this.ui.loading.style,'" class="typing__dot"></div>\n            <div style="').concat(this.ui.loading.style,'" class="typing__dot"></div>\n          </div>'),"\n          </div>\n      </div>\n    ")),this.loadingMessageElement=e.lastElementChild,e.scrollTop=e.scrollHeight}},{key:"hideLoadingMessage",value:function(){this.loadingMessageElement&&(this.loadingMessageElement.remove(),this.loadingMessageElement=null)}},{key:"hideGreetingMessage",value:function(){document.getElementById("katech-chatbot-greeting").classList.add("hidden")}},{key:"displayMessage",value:function(t,e){var n=document.getElementById("katech-chatbot-body");if("user"===e)n.insertAdjacentHTML("beforeend",'\n          <div id="katech-chatbot-message" class="katech-user-message-group">\n          <div style="'.concat(this.ui.body.message.in.style,'" class="katech-user-message">').concat(t,"</div>\n          </div>\n      ")),this.currentMessageElement=null;else if("assistant"===e){var r;this.currentMessageElement?this.currentMessageElement.innerHTML=t:(this.hideLoadingMessage(),n.insertAdjacentHTML("beforeend",'\n          <div id="katech-chatbot-message" class="katech-bot-message-group">\n              <img src="'.concat(null===(r=this.ui)||void 0===r||null===(r=r.bot)||void 0===r?void 0:r.avatar,'" />\n              <div style="').concat(this.ui.body.message.out.style,'" class="katech-bot-message">').concat(t,"</div>\n          </div>\n        ")),this.currentMessageElement=n.lastElementChild.querySelector(".katech-bot-message"))}n.scrollTop=n.scrollHeight}},{key:"initWebSocket",value:function(){var t=this;this.socket=new WebSocket("ws://46.250.249.219:8000/ws/conversation?accessToken=".concat(this.apiKey)),this.socket.addEventListener("open",(function(t){console.log("WebSocket connection established:",t)})),this.socket.addEventListener("message",(function(e){var n=JSON.parse(e.data),r=atob(n.data.body),o=decodeURIComponent(escape(r));t.messageString+=o;var a=markdown.toHTML(t.messageString);t.displayMessage(a,"assistant")})),this.socket.addEventListener("close",(function(t){console.log("WebSocket connection closed:",t)})),this.socket.addEventListener("error",(function(t){console.error("WebSocket error observed:",t)}))}}],e&&s(t.prototype,e),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,n,o,i}();window.ChatBotSDK=h})();