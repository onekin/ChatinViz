
const MindmeisterBackground = require('./mindmeister/MindmeisterBackground')
const ChatGPTBackground = require('./chatgpt/ChatGPTBackground')
const LLMManagerBackground = require('./background/LLMManagerBackground')
const ModelManager = require('./background/ModelManager')

class Background {
  constructor () {
    this._mindmeisterManager = null
    this._chatGPTManager = null
    this.llmManager = null
    this.modelManager = null
  }
  init () {
    this._mindmeisterManager = new MindmeisterBackground()
    this._mindmeisterManager.init()
    this._chatGPTManager = new ChatGPTBackground()
    this._chatGPTManager.init()
    // Initialize LLM manager
    this.llmManager = new LLMManagerBackground()
    this.llmManager.init()
    this.modelManager = new ModelManager()
    this.modelManager.init()

    /* chrome.browserAction.onClicked.addListener(function () {
      var newURL = chrome.extension.getURL('pages/options.html')
      chrome.tabs.create({ url: newURL })
    }) */
  }
}

const background = new Background()
background.init()
