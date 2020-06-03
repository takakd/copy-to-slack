/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/background.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cursoredtoslack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cursoredtoslack */ "./src/cursoredtoslack.js");

chrome.runtime.onInstalled.addListener(function () {
  const cts = new _cursoredtoslack__WEBPACK_IMPORTED_MODULE_0__["default"](chrome);
  cts.addContextMenu(); // chrome.storage.sync.set({color: '#3aa757'}, function () {
  //     console.log("The color is green.");
  // });
  // chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
  //     chrome.declarativeContent.onPageChanged.addRules([{
  //         conditions: [new chrome.declarativeContent.PageStateMatcher({
  //             pageUrl: {hostEquals: 'developer.chrome.com'},
  //         })
  //         ],
  //         actions: [new chrome.declarativeContent.ShowPageAction()]
  //     }]);
  // });
});

/***/ }),

/***/ "./src/cursoredtoslack-option.js":
/*!***************************************!*\
  !*** ./src/cursoredtoslack-option.js ***!
  \***************************************/
/*! exports provided: SlackWebhookCommonHostPath, CursoredToSlackOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlackWebhookCommonHostPath", function() { return SlackWebhookCommonHostPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoredToSlackOption", function() { return CursoredToSlackOption; });


const SlackWebhookCommonHostPath = "https://hooks.slack.com/services/";
/**
 */

class CursoredToSlackOption {
  /**
   * Represents a options in extension.
   * @constructor
   */
  constructor(values) {
    this.webhookPath = "";

    if (typeof values === "object") {
      if (values["webhookPath"]) {
        this.webhookPath = values["webhookPath"];
      }
    }
  }
  /**
   * Slack Webhook URL.
   * @returns {string} Slack Webhook URL.
   */


  get webhookUrl() {
    if (!this.webhookPath) {
      return "";
    }

    return SlackWebhookCommonHostPath + this.webhookPath;
  }
  /**
   * Validate option.
   *
   * @returns {object} Returns error message if not valid, empty otherwise.
   *  Each message is associated with key.
   */


  validate() {
    let errors = {};

    if (!this.webhookPath) {
      errors["webhookPath"] = "Enter a Slack Webhook URL for sending message.";
    } else if (!this.webhookPath.match(/^(?!(http|\/))[a-zA-Z0-9/]+/)) {
      errors["webhookPath"] = "Enter a correct URL.";
    }

    return errors;
  }

}

/***/ }),

/***/ "./src/cursoredtoslack.js":
/*!********************************!*\
  !*** ./src/cursoredtoslack.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CursoredToSlack; });
/* harmony import */ var _cursoredtoslack_option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cursoredtoslack-option */ "./src/cursoredtoslack-option.js");



/**
 * Persistence options key.
 * @type {string}
 */

const OptionsKey = "hoge";
/**
 * ContextMenuId
 * @type {string}
 */

const ContextMenuId = "fuga";
/**
 */

class CursoredToSlack {
  /**
   * Represents a CursoredToSlack
   * @constructor
   * @param {object} chrome API
   */
  constructor(chrome) {
    this.chrome = chrome;
  }
  /**
   * Get persistence options.
   * @return {Promise} options returned if it resolved.
   */


  async getOptions() {
    return new Promise(resolve => {
      this.chrome.storage.sync.get([OptionsKey], result => {
        const value = new _cursoredtoslack_option__WEBPACK_IMPORTED_MODULE_0__["CursoredToSlackOption"](result[OptionsKey]);
        resolve(value);
      });
    });
  }
  /**
   * Set persistence options.
   * @param {object} object has persistence options.
   * @return {Promise} returns bool if it resolved.
   */


  async setOptions(value) {
    return new Promise((resolve, reject) => {
      if (value instanceof _cursoredtoslack_option__WEBPACK_IMPORTED_MODULE_0__["CursoredToSlackOption"] === false) {
        reject("wrong instanceof");
        return;
      }

      this.chrome.storage.sync.set({
        [OptionsKey]: value
      }, () => {
        resolve(true);
      });
    });
  }
  /**
   * contextMenus.onClicked callback.
   *
   * this is used by addContextMenu() function.
   * @see {@link https://developer.chrome.com/extensions/contextMenus#event-onClicked}
   */


  async contextMenuOnClickedCallback(info) {
    const isMyEvent = ContextMenuId === info.menuItemId;

    if (!isMyEvent) {
      return;
    }

    let message = "";
    const orderList = ["selectionText", "linkUrl", "srcUrl", "pageUrl", "frameUrl"];

    for (const order of orderList) {
      if (info[order]) {
        message = info[order];
        break;
      }
    }

    if (!message) {
      console.log('no contents');
      return;
    }

    const options = await this.getOptions();
    this.sendRequestToSlackApi(message, options.webhookUrl);
  }
  /**
   * Add context menu.
   */


  addContextMenu() {
    // add onClicked callback.
    this.chrome.contextMenus.onClicked.addListener(this.contextMenuOnClickedCallback.bind(this)); // const contexts = ["page", "selection", "link", "editable", "image", "video", "audio"];

    const contexts = ["all"];
    this.chrome.contextMenus.create({
      id: ContextMenuId,
      type: "normal",
      title: "Send to Slack",
      contexts: contexts,
      visible: true
    });
  }
  /**
   * Send request to Slack API.
   * @param {string} text Properties of post body.
   * @param {string} webhookUrl SlackWebhookUrl
   */


  async sendRequestToSlackApi(text, webhookUrl) {
    // build data
    const body = {
      text: text
    };
    return await fetch(webhookUrl, {
      method: "POST",
      cache: "no-cache",
      headers: {
        // NOTE: Slack Webhook does not support preflight.
        // https://api.slack.com/web
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: JSON.stringify(body)
    }).then(res => res.text()).then(body => body);
  }

}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1cnNvcmVkdG9zbGFjay1vcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1cnNvcmVkdG9zbGFjay5qcyJdLCJuYW1lcyI6WyJjaHJvbWUiLCJydW50aW1lIiwib25JbnN0YWxsZWQiLCJhZGRMaXN0ZW5lciIsImN0cyIsIkN1cnNvcmVkVG9TbGFjayIsImFkZENvbnRleHRNZW51IiwiU2xhY2tXZWJob29rQ29tbW9uSG9zdFBhdGgiLCJDdXJzb3JlZFRvU2xhY2tPcHRpb24iLCJjb25zdHJ1Y3RvciIsInZhbHVlcyIsIndlYmhvb2tQYXRoIiwid2ViaG9va1VybCIsInZhbGlkYXRlIiwiZXJyb3JzIiwibWF0Y2giLCJPcHRpb25zS2V5IiwiQ29udGV4dE1lbnVJZCIsImdldE9wdGlvbnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwicmVzdWx0IiwidmFsdWUiLCJzZXRPcHRpb25zIiwicmVqZWN0Iiwic2V0IiwiY29udGV4dE1lbnVPbkNsaWNrZWRDYWxsYmFjayIsImluZm8iLCJpc015RXZlbnQiLCJtZW51SXRlbUlkIiwibWVzc2FnZSIsIm9yZGVyTGlzdCIsIm9yZGVyIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJzZW5kUmVxdWVzdFRvU2xhY2tBcGkiLCJjb250ZXh0TWVudXMiLCJvbkNsaWNrZWQiLCJiaW5kIiwiY29udGV4dHMiLCJjcmVhdGUiLCJpZCIsInR5cGUiLCJ0aXRsZSIsInZpc2libGUiLCJ0ZXh0IiwiYm9keSIsImZldGNoIiwibWV0aG9kIiwiY2FjaGUiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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dC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2JhY2tncm91bmQuanNcIik7XG4iLCJpbXBvcnQgQ3Vyc29yZWRUb1NsYWNrIGZyb20gXCIuL2N1cnNvcmVkdG9zbGFja1wiO1xuXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGN0cyA9IG5ldyBDdXJzb3JlZFRvU2xhY2soY2hyb21lKTtcbiAgY3RzLmFkZENvbnRleHRNZW51KCk7XG5cbiAgLy8gY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoe2NvbG9yOiAnIzNhYTc1Nyd9LCBmdW5jdGlvbiAoKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhcIlRoZSBjb2xvciBpcyBncmVlbi5cIik7XG4gIC8vIH0pO1xuICAvLyBjaHJvbWUuZGVjbGFyYXRpdmVDb250ZW50Lm9uUGFnZUNoYW5nZWQucmVtb3ZlUnVsZXModW5kZWZpbmVkLCBmdW5jdGlvbiAoKSB7XG4gIC8vICAgICBjaHJvbWUuZGVjbGFyYXRpdmVDb250ZW50Lm9uUGFnZUNoYW5nZWQuYWRkUnVsZXMoW3tcbiAgLy8gICAgICAgICBjb25kaXRpb25zOiBbbmV3IGNocm9tZS5kZWNsYXJhdGl2ZUNvbnRlbnQuUGFnZVN0YXRlTWF0Y2hlcih7XG4gIC8vICAgICAgICAgICAgIHBhZ2VVcmw6IHtob3N0RXF1YWxzOiAnZGV2ZWxvcGVyLmNocm9tZS5jb20nfSxcbiAgLy8gICAgICAgICB9KVxuICAvLyAgICAgICAgIF0sXG4gIC8vICAgICAgICAgYWN0aW9uczogW25ldyBjaHJvbWUuZGVjbGFyYXRpdmVDb250ZW50LlNob3dQYWdlQWN0aW9uKCldXG4gIC8vICAgICB9XSk7XG4gIC8vIH0pO1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFNsYWNrV2ViaG9va0NvbW1vbkhvc3RQYXRoID0gXCJodHRwczovL2hvb2tzLnNsYWNrLmNvbS9zZXJ2aWNlcy9cIjtcblxuLyoqXG4gKi9cbmV4cG9ydCBjbGFzcyBDdXJzb3JlZFRvU2xhY2tPcHRpb24ge1xuICAvKipcbiAgICogUmVwcmVzZW50cyBhIG9wdGlvbnMgaW4gZXh0ZW5zaW9uLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlcykge1xuICAgIHRoaXMud2ViaG9va1BhdGggPSBcIlwiO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGlmICh2YWx1ZXNbXCJ3ZWJob29rUGF0aFwiXSkge1xuICAgICAgICB0aGlzLndlYmhvb2tQYXRoID0gdmFsdWVzW1wid2ViaG9va1BhdGhcIl07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNsYWNrIFdlYmhvb2sgVVJMLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBTbGFjayBXZWJob29rIFVSTC5cbiAgICovXG4gIGdldCB3ZWJob29rVXJsKCkge1xuICAgIGlmICghdGhpcy53ZWJob29rUGF0aCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBTbGFja1dlYmhvb2tDb21tb25Ib3N0UGF0aCArIHRoaXMud2ViaG9va1BhdGg7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgb3B0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSBSZXR1cm5zIGVycm9yIG1lc3NhZ2UgaWYgbm90IHZhbGlkLCBlbXB0eSBvdGhlcndpc2UuXG4gICAqICBFYWNoIG1lc3NhZ2UgaXMgYXNzb2NpYXRlZCB3aXRoIGtleS5cbiAgICovXG4gIHZhbGlkYXRlKCkge1xuICAgIGxldCBlcnJvcnMgPSB7fTtcblxuICAgIGlmICghdGhpcy53ZWJob29rUGF0aCkge1xuICAgICAgZXJyb3JzW1wid2ViaG9va1BhdGhcIl0gPSBcIkVudGVyIGEgU2xhY2sgV2ViaG9vayBVUkwgZm9yIHNlbmRpbmcgbWVzc2FnZS5cIjtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLndlYmhvb2tQYXRoLm1hdGNoKC9eKD8hKGh0dHB8XFwvKSlbYS16QS1aMC05L10rLykpIHtcbiAgICAgIGVycm9yc1tcIndlYmhvb2tQYXRoXCJdID0gXCJFbnRlciBhIGNvcnJlY3QgVVJMLlwiO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDdXJzb3JlZFRvU2xhY2tPcHRpb24gfSBmcm9tIFwiLi9jdXJzb3JlZHRvc2xhY2stb3B0aW9uXCI7XG5cbi8qKlxuICogUGVyc2lzdGVuY2Ugb3B0aW9ucyBrZXkuXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBPcHRpb25zS2V5ID0gXCJob2dlXCI7XG5cbi8qKlxuICogQ29udGV4dE1lbnVJZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgQ29udGV4dE1lbnVJZCA9IFwiZnVnYVwiO1xuXG4vKipcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Vyc29yZWRUb1NsYWNrIHtcbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYSBDdXJzb3JlZFRvU2xhY2tcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjaHJvbWUgQVBJXG4gICAqL1xuICBjb25zdHJ1Y3RvcihjaHJvbWUpIHtcbiAgICB0aGlzLmNocm9tZSA9IGNocm9tZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGVyc2lzdGVuY2Ugb3B0aW9ucy5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gb3B0aW9ucyByZXR1cm5lZCBpZiBpdCByZXNvbHZlZC5cbiAgICovXG4gIGFzeW5jIGdldE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLmNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFtPcHRpb25zS2V5XSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG5ldyBDdXJzb3JlZFRvU2xhY2tPcHRpb24ocmVzdWx0W09wdGlvbnNLZXldKTtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcGVyc2lzdGVuY2Ugb3B0aW9ucy5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9iamVjdCBoYXMgcGVyc2lzdGVuY2Ugb3B0aW9ucy5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gcmV0dXJucyBib29sIGlmIGl0IHJlc29sdmVkLlxuICAgKi9cbiAgYXN5bmMgc2V0T3B0aW9ucyh2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBDdXJzb3JlZFRvU2xhY2tPcHRpb24gPT09IGZhbHNlKSB7XG4gICAgICAgIHJlamVjdChcIndyb25nIGluc3RhbmNlb2ZcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBbT3B0aW9uc0tleV06IHZhbHVlIH0sICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbnRleHRNZW51cy5vbkNsaWNrZWQgY2FsbGJhY2suXG4gICAqXG4gICAqIHRoaXMgaXMgdXNlZCBieSBhZGRDb250ZXh0TWVudSgpIGZ1bmN0aW9uLlxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2V4dGVuc2lvbnMvY29udGV4dE1lbnVzI2V2ZW50LW9uQ2xpY2tlZH1cbiAgICovXG4gIGFzeW5jIGNvbnRleHRNZW51T25DbGlja2VkQ2FsbGJhY2soaW5mbykge1xuICAgIGNvbnN0IGlzTXlFdmVudCA9IENvbnRleHRNZW51SWQgPT09IGluZm8ubWVudUl0ZW1JZDtcbiAgICBpZiAoIWlzTXlFdmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBtZXNzYWdlID0gXCJcIjtcbiAgICBjb25zdCBvcmRlckxpc3QgPSBbXG4gICAgICBcInNlbGVjdGlvblRleHRcIixcbiAgICAgIFwibGlua1VybFwiLFxuICAgICAgXCJzcmNVcmxcIixcbiAgICAgIFwicGFnZVVybFwiLFxuICAgICAgXCJmcmFtZVVybFwiLFxuICAgIF07XG4gICAgZm9yIChjb25zdCBvcmRlciBvZiBvcmRlckxpc3QpIHtcbiAgICAgIGlmIChpbmZvW29yZGVyXSkge1xuICAgICAgICBtZXNzYWdlID0gaW5mb1tvcmRlcl07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdubyBjb250ZW50cycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnMgPSBhd2FpdCB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICB0aGlzLnNlbmRSZXF1ZXN0VG9TbGFja0FwaShtZXNzYWdlLCBvcHRpb25zLndlYmhvb2tVcmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBjb250ZXh0IG1lbnUuXG4gICAqL1xuICBhZGRDb250ZXh0TWVudSgpIHtcbiAgICAvLyBhZGQgb25DbGlja2VkIGNhbGxiYWNrLlxuICAgIHRoaXMuY2hyb21lLmNvbnRleHRNZW51cy5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoXG4gICAgICB0aGlzLmNvbnRleHRNZW51T25DbGlja2VkQ2FsbGJhY2suYmluZCh0aGlzKVxuICAgICk7XG5cbiAgICAvLyBjb25zdCBjb250ZXh0cyA9IFtcInBhZ2VcIiwgXCJzZWxlY3Rpb25cIiwgXCJsaW5rXCIsIFwiZWRpdGFibGVcIiwgXCJpbWFnZVwiLCBcInZpZGVvXCIsIFwiYXVkaW9cIl07XG4gICAgY29uc3QgY29udGV4dHMgPSBbXCJhbGxcIl07XG4gICAgdGhpcy5jaHJvbWUuY29udGV4dE1lbnVzLmNyZWF0ZSh7XG4gICAgICBpZDogQ29udGV4dE1lbnVJZCxcbiAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICB0aXRsZTogXCJTZW5kIHRvIFNsYWNrXCIsXG4gICAgICBjb250ZXh0czogY29udGV4dHMsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgcmVxdWVzdCB0byBTbGFjayBBUEkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFByb3BlcnRpZXMgb2YgcG9zdCBib2R5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gd2ViaG9va1VybCBTbGFja1dlYmhvb2tVcmxcbiAgICovXG4gIGFzeW5jIHNlbmRSZXF1ZXN0VG9TbGFja0FwaSh0ZXh0LCB3ZWJob29rVXJsKSB7XG4gICAgLy8gYnVpbGQgZGF0YVxuICAgIGNvbnN0IGJvZHkgPSB7IHRleHQ6IHRleHQgfTtcblxuICAgIHJldHVybiBhd2FpdCBmZXRjaCh3ZWJob29rVXJsLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgLy8gTk9URTogU2xhY2sgV2ViaG9vayBkb2VzIG5vdCBzdXBwb3J0IHByZWZsaWdodC5cbiAgICAgICAgLy8gaHR0cHM6Ly9hcGkuc2xhY2suY29tL3dlYlxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMudGV4dCgpKVxuICAgICAgLnRoZW4oKGJvZHkpID0+IGJvZHkpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9