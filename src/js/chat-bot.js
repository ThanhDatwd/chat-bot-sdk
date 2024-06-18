import '../css/styles.css';
class ChatBotSDK {
  constructor(config, ui) {
    if (typeof config === 'string') {
      this.fetchConfig(config);
  } else if (typeof config === 'object') {
      this.initConfig(config);
  } else {
      throw new Error('Invalid configuration type');
  }
   
  }
fetchConfig(configPath) {
    // Assuming you fetch the JSON configuration from a server endpoint or local file
    fetch(configPath)
        .then(response => response.json())
        .then(data => {
            this.initConfig(data);
        })
        .catch(error => {
            console.error('Error loading configuration:', error);
        });
}

initConfig(config) {
    if (!config.apiKey) {
        throw new Error("API key is required");
    }
    this.apiKey = config.apiKey;
    this.loadStyles();
    this.initUI(config.ui);
    this.ui = config.ui;
    this.config = config;
    this.conversationId = config.conversationId ?? null;
    this.userId = config.userId ?? null;
    this.botId = config.botId ?? null;
    this.loadMarkedLibrary();
    this.loadHighlightLibrary();
    this.initWebSocket();
    this.WS_URL_8080 = "ws://46.250.249.219:8000/ws/";
    (this.messageString = ""), (this.currentMessageElement = null);
    this.loading = false;
}
  // LOAD FILE CSS
  loadStyles() {
    const linkHighlight = document.createElement("link");
    linkHighlight.rel = "stylesheet";
    linkHighlight.href =
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css";
    document.head.appendChild(linkHighlight);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "src/css/styles.css";
    document.head.appendChild(link);
  }
  // LOAD LIBRARY OUTSIDE
  loadMarkedLibrary() {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/markdown.js/0.5.0/markdown.min.js";
    // "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
    document.head.appendChild(script);

    script.onload = () => {
      console.log("marked.js đã được tải thành công!");
    };
  }
  // LOAD LIBRARY HIGHLIGHT.JS
  loadHighlightLibrary() {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js";
    document.head.appendChild(script);

    script.onload = () => {
      console.log("highlight.js đã được tải thành công!");
      hljs.highlightAll();
    };
  }

  // INIT UI
  initUI(ui) {
    const chatBot = document.createElement("div");
    chatBot.innerHTML = `
    <div id="katech-chatbot">
    <button id="katech-chatbot-button">Chat with us</button>
    <div  id="katech-chatbot-container" >
        <div id="katech-chatbot-header-area">
        ${
          ui.header.html
            ? ui.header.html
            : `<div style="${ui.header.style}" id="katech-chatbot-header" class="katech-chatbot-header">
                  <img
                      src="${ui?.bot?.avatar}" />
                  <div id="katech-chatbot-header_content" style="">
                      <span class="subtitle">Chat with</span>
                      <span class="title">${ui.bot.name}</span>
                  </div>
              </div>
              <div style="border-color:${ui.bot.color};color:${ui.bot.color}" id="katech-chatbot-header_btn-close">-</div>
          </div>`
        }
        <div style="${
          ui.body.style
        }" id="katech-chatbot-body" class="katech-chatbot-body">
        <div style="${ui.greeting.style}" id="katech-chatbot-greeting">
        ${
          ui.greeting.html
            ? ui.greeting.html
            : `
            <img src="${ui.greeting.image}" />
            <div id="">
                <span class="title">${ui.greeting.title}</span>
            </div>`
        }
          </div>
        </div>
        <div id="katech-chatbot-footer-area">
        ${
          ui.footer.html
            ? ui.footer.html
            : `<div style="${ui.body.style}" id="katech-chatbot-footer" class="katech-chatbot-footer">
                  <input id="katech-chatbot-input" type="text" class="katech-chatbot-input"
                    placeholder="Type your message...">
                  <div id="katech-chatbot-footer_action">
                    <div></div>
                    <button style="background:${ui.bot.background}; color:${ui.bot.color}" id="katech-chatbot-send-button" class="katech-chatbot-send-button">
                      Send
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:${ui.bot.color};transform: ;msFilter:;">
                        <path d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                `
        }
        </div>
    </div>
</div>`;

    document.body.appendChild(chatBot);
    // HANDLE EVENT LISTENER EVENT
    const chatButton = document.getElementById("katech-chatbot-button");
    const chatButtonClose = document.getElementById(
      "katech-chatbot-header_btn-close"
    );
    const chatContainer = document.getElementById("katech-chatbot-container");
    const toggleChatContainer = () => {
      chatContainer.classList.toggle("hidden");
    };
    const handleEnter = (value) => {
      if (value.key === "Enter") {
      }
      console.log("this is value when on key up", value);
    };

    chatButton.addEventListener("click", toggleChatContainer);
    chatButtonClose.addEventListener("click", toggleChatContainer);
    // chatButtonClose.addEventListener("click", toggleChatContainer);

    const sendButton = document.getElementById("katech-chatbot-send-button");
    const userInput = document.getElementById("katech-chatbot-input");
    const chatBody = document.getElementById("katech-chatbot-body");

    sendButton.addEventListener("click", () => {
      const message = userInput.value.trim();
      if (message) {
        this.sendMessage(message);
        userInput.value = "";
      }
    });
    userInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        const message = userInput.value.trim();
        if (message) {
          this.sendMessage(message);
          userInput.value = "";
        }
      }
    });
  }

  // HANDLE GET HISTORY MESSAGE
  async loadMessages() {
    const chatBody = document.getElementById("katech-chatbot-body");
    chatBody.innerHTML = "";

    try {
      const response = await fetch(
        `http://46.250.249.219:8000/api/v1/conversation/${this.conversationId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.apiKey}`,
            "X-Sub": this.userId,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      delete data.data.messageMap.system;
      const messageMap = Object.keys(data.data.messageMap).map(
        (key) => data.data.messageMap[key]
      );

      messageMap.forEach((msg) => {
        let convertMd = markdown.toHTML(msg.content[0].body);
        // let convertMd = marked.setOptions({
        //   highlight: function(code) {
        //     return hljs.highlightAuto(msg.content[0].body).value;
        //   }
        // });
        //  const hl= hljs.highlightAuto(
        //   msg.content[0].body
        //   ).value
        //   ` <pre>
        //   <code >
        //     ${convertMd}
        //   </code>
        // </pre>`
        this.displayMessage(convertMd, msg.role);
      });
    } catch (error) {
      console.error("Error loading messages:", error);
    }
  }
  // HANDLE SEND MESSAGE
  async sendMessage(message) {
    try {
      this.loading = true;
      this.currentMessageElement = null;
      this.messageString = "";
      this.displayMessage(message, "user");
      this.showLoadingMessage();
      this.hideGreetingMessage();

      const userMessage = {
        role: "user",
        content: [{ contentType: "text", body: message }],
        model: "claude-v3-haiku",
        parentMessageId: null,
        messageId: null,
      };
      const response = await fetch(
        `http://46.250.249.219:8000/api/v1/conversation/stream?access_token=${this.apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.apiKey}`,
            "X-Sub": this.userId,
          },
          body: JSON.stringify({
            conversationId: this.conversationId,
            botId: this.botId,
            message: {
              ...userMessage,
              parentMessageId: null,
            },
          }),
          timeout: 30000,
        }
      );
      const data = await response.json();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }
  // SHOW LOADING MESSAGE
  showLoadingMessage() {
    const chatBody = document.getElementById("katech-chatbot-body");
    chatBody.insertAdjacentHTML(
      "beforeend",
      `
      <div id="katech-chatbot-message" class="katech-bot-message-group katech-chatbot-loading-message">
          <img src="${this.ui?.bot?.avatar}" />
          <div style="${
            this.ui.body.message.out.style
          }" class="katech-bot-message">
          ${
            this.ui.loading.html
              ? this.ui.loading.html
              : `
            <div class="typing">
            <div style="${this.ui.loading.style}" class="typing__dot"></div>
            <div style="${this.ui.loading.style}" class="typing__dot"></div>
            <div style="${this.ui.loading.style}" class="typing__dot"></div>
          </div>`
          }
          </div>
      </div>
    `
    );
    this.loadingMessageElement = chatBody.lastElementChild;
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // HIDE LOADING MESSAGE
  hideLoadingMessage() {
    if (this.loadingMessageElement) {
      this.loadingMessageElement.remove();
      this.loadingMessageElement = null;
    }
  }
  // HIDE GREETING MESSAGE
  hideGreetingMessage() {
    const greetingMessage = document.getElementById("katech-chatbot-greeting");
    greetingMessage.classList.add("hidden");
  }
  // HANDEL RENDER  UI MESSAGE
  displayMessage(message, sender) {
    const chatBody = document.getElementById("katech-chatbot-body");

    if (sender === "user") {
      chatBody.insertAdjacentHTML(
        "beforeend",
        `
          <div id="katech-chatbot-message" class="katech-user-message-group">
          <div style="${this.ui.body.message.in.style}" class="katech-user-message">${message}</div>
          </div>
      `
      );
      this.currentMessageElement = null;
    } else if (sender === "assistant") {
      if (!this.currentMessageElement) {
        this.hideLoadingMessage();
        chatBody.insertAdjacentHTML(
          "beforeend",
          `
          <div id="katech-chatbot-message" class="katech-bot-message-group">
              <img src="${this.ui?.bot?.avatar}" />
              <div style="${this.ui.body.message.out.style}" class="katech-bot-message">${message}</div>
          </div>
        `
        );
        this.currentMessageElement = chatBody.lastElementChild.querySelector(
          ".katech-bot-message"
        );
      } else {
        this.currentMessageElement.innerHTML = message;
      }
    }
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  // INIT WEBSOCKET
  initWebSocket() {
    this.socket = new WebSocket(
      `ws://46.250.249.219:8000/ws/conversation?accessToken=${this.apiKey}`
    );

    this.socket.addEventListener("open", (event) => {
      console.log("WebSocket connection established:", event);
    });

    this.socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      const decodedString = atob(data.data.body);
      const vietnameseString = decodeURIComponent(escape(decodedString));
      this.messageString += vietnameseString;
      const convertMd = markdown.toHTML(this.messageString);
      this.displayMessage(convertMd, "assistant");
    });

    this.socket.addEventListener("close", (event) => {
      console.log("WebSocket connection closed:", event);
    });

    this.socket.addEventListener("error", (event) => {
      console.error("WebSocket error observed:", event);
    });
  }
}
window.ChatBotSDK = ChatBotSDK;
