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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/options.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ }),

/***/ "./src/options.js":
/*!************************!*\
  !*** ./src/options.js ***!
  \************************/
/*! exports provided: Const, getOptionFromForm, validateForm, removeSlackHostPathFromSlackwebhookPath, validateSlackwebhookPath, validateButtons, setButtonUiState, maskwebhookPathInputValue, togglewebhookPathInputMask, showAlertMessage, constructOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Const", function() { return Const; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionFromForm", function() { return getOptionFromForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateForm", function() { return validateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSlackHostPathFromSlackwebhookPath", function() { return removeSlackHostPathFromSlackwebhookPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateSlackwebhookPath", function() { return validateSlackwebhookPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateButtons", function() { return validateButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setButtonUiState", function() { return setButtonUiState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskwebhookPathInputValue", function() { return maskwebhookPathInputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "togglewebhookPathInputMask", function() { return togglewebhookPathInputMask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAlertMessage", function() { return showAlertMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructOptions", function() { return constructOptions; });
/* harmony import */ var _cursoredtoslack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cursoredtoslack */ "./src/cursoredtoslack.js");
/* harmony import */ var _cursoredtoslack_option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cursoredtoslack-option */ "./src/cursoredtoslack-option.js");


const Const = {
  domId: {
    form: "optionForm",
    webhookPath: "slackWebhookPathInput",
    testButton: "testButton",
    saveButton: "saveButton",
    testButtonLabel: "testButtonLabel",
    saveButtonLabel: "saveButtonLabel",
    webhookFeedback: "slackWebhookPathInvalidFeedback",
    webhookMaskButton: "toggleWebhookPathMaskButton",
    webhookIconMask: "toggleWebhookPathMaskButtonMask",
    webhookIconUnMask: "toggleWebhookPathMaskButtonUnMask",
    alert: "alertMessage",
    alertTemplate: "alertMessageTemplate"
  },
  label: {
    save: "Save",
    saving: "Saving...",
    saveSuccess: "Saved.",
    test: "Test",
    testing: "Sending...",
    testSuccess: "Sent.",
    testSuccessAddition: "Check Slack channel.",
    testFailed: "Failed to send a test message."
  },
  uiStateChangeIntervalInSec: 1
};
/**
 * Get form values.
 * @returns CursoredToSlackOption
 */

function getOptionFromForm() {
  const webhookPathInput = document.getElementById(Const.domId.webhookPath);
  const option = new _cursoredtoslack_option__WEBPACK_IMPORTED_MODULE_1__["CursoredToSlackOption"]();
  option.webhookPath = webhookPathInput.value;
  return option;
}
/**
 * Validate Form, update UI state.
 * @returns {boolean} Returns true if valid, false otherwise.
 */

function validateForm() {
  const validUrl = validateSlackwebhookPath();
  validateButtons();
  return validUrl;
}
/**
 * Remove host and common path from URL.
 * @params {string} value.
 * @returns {string} Returns Removed URL.
 */

function removeSlackHostPathFromSlackwebhookPath() {
  const input = document.getElementById(Const.domId.webhookPath);
  const replaced = input.value.replace(_cursoredtoslack_option__WEBPACK_IMPORTED_MODULE_1__["SlackWebhookCommonHostPath"], "");

  if (replaced) {
    input.value = replaced;
  }
}
/**
 * Validate webhook url, and update UI state.
 * @returns {boolean} Returns true if valid, false otherwise.
 */

function validateSlackwebhookPath() {
  const option = getOptionFromForm();
  const errors = option.validate();
  const input = document.getElementById(Const.domId.webhookPath);

  if (errors["webhookPath"]) {
    input.classList.add("is-invalid");
  } else {
    input.classList.remove("is-invalid");
  }

  if (errors["webhookPath"]) {
    const feedBack = document.getElementById(Const.domId.webhookFeedback);
    feedBack.textContent = errors["webhookPath"];
  }

  return typeof errors["webhookPath"] === "undefined";
}
/**
 * Validate Button UIs.
 */

function validateButtons() {
  const option = getOptionFromForm();
  const errors = option.validate();
  const isValid = typeof errors["webhookPath"] === "undefined";
  setButtonUiState(Const.domId.testButton, Const.domId.testButtonLabelst, isValid ? 2 : 1, "");
  setButtonUiState(Const.domId.saveButton, Const.domId.saveButtonLabele, isValid ? 2 : 1, "");
}
/**
 * Set a button UI sate.
 * @param {string} buttonId UI id.
 * @param {string} labelId UI id.
 * @param {number} state 1:disabled 2:enabled 3:running 4:error
 * @param {string} label Button label.
 */

function setButtonUiState(buttonId, labelId, state, label) {
  const button = document.getElementById(buttonId);
  const buttonLabel = document.getElementById(labelId);

  if (buttonLabel) {
    buttonLabel.textContent = label;
  }

  if (state === 1) {
    button.classList.remove("running");
    button.disabled = true;
  } else if (state === 2) {
    button.classList.remove("running");
    button.disabled = false;
  } else if (state === 3) {
    button.classList.add("running");
    button.disabled = false;
  }
}
/**
 * Change Webhook URL Mask Icon visible state.
 * @param {boolean} isMask Mask URL if it's true, Unmask otherwise.
 */

function maskwebhookPathInputValue(isMask) {
  const input = document.getElementById(Const.domId.webhookPath);
  const iconMask = document.getElementById(Const.domId.webhookIconMask);
  const iconUnMask = document.getElementById(Const.domId.webhookIconUnMask);

  if (isMask) {
    input.setAttribute("type", "password");
    iconMask.classList.remove("d-none");
    iconUnMask.classList.add("d-none");
  } else {
    input.setAttribute("type", "text");
    iconMask.classList.add("d-none");
    iconUnMask.classList.remove("d-none");
  }
}
/**
 * Toggle Webhook URL Mask Icon visible state.
 */

function togglewebhookPathInputMask() {
  const maskIcon = document.getElementById(Const.domId.webhookIconMask);
  const isMaskNext = maskIcon.classList.contains("d-none");
  maskwebhookPathInputValue(isMaskNext);
}
/**
 * Show alert.
 * @param {boolean} isShow Show the alert if it's true, hide otherwise.
 * @param {boolean} isError Show the danger alert if it's true, success otherwise.
 * @param {string} message Alert message.
 * @param {string} additionMessage Alert addition message.
 */

function showAlertMessage(isShow, isError, message, additionMessage) {
  if (isShow) {
    const template = document.getElementById(Const.domId.alertTemplate);
    const alertBlock = template.cloneNode(true);
    const alert = alertBlock.getElementsByClassName("alert");
    const alertMessage = alert[0].getElementsByClassName("alertMessage");
    const alertAdditionMessage = alert[0].getElementsByClassName("alertAdditionMessage");
    alert[0].id = Const.domId.alert;
    alert[0].classList.add(isError ? "alert-danger" : "alert-success");
    alertMessage[0].textContent = message;

    if (additionMessage) {
      alertAdditionMessage[0].textContent = additionMessage;
    } else {
      alertAdditionMessage[0].remove();
    }

    template.before(alert[0]);
  } else {
    const alert = document.getElementById(Const.domId.alert);

    if (alert) {
      alert.remove();
    }
  }
}
/**
 * construct options js.
 */

function constructOptions() {
  const webhookInput = document.getElementById(Const.domId.webhookPath);

  if (webhookInput) {
    webhookInput.addEventListener("blur", () => {
      removeSlackHostPathFromSlackwebhookPath();
      validateSlackwebhookPath();
      validateButtons();
    });
  }

  const testButton = document.getElementById(Const.domId.testButton);

  if (testButton) {
    testButton.addEventListener("click", () => {
      const isValid = validateForm();

      if (!isValid) {
        return;
      }

      showAlertMessage(false);
      setButtonUiState(Const.domId.testButton, Const.domId.testButtonLabel, 3, Const.label.testing);
      setTimeout(async () => {
        const cts = new _cursoredtoslack__WEBPACK_IMPORTED_MODULE_0__["default"](chrome);
        const option = getOptionFromForm();
        const result = await cts.sendRequestToSlackApi("test message.", option.webhookUrl).catch(error => error);
        const isError = result instanceof Error;

        if (isError) {
          showAlertMessage(true, isError, Const.label.testFailed, result.stack);
        } else {
          showAlertMessage(true, isError, Const.label.testSuccess, Const.label.testSuccessAddition);
        }

        setButtonUiState(Const.domId.testButton, Const.domId.testButtonLabel, 2, Const.label.test);
      }, Const.uiStateChangeIntervalInSec * 1000);
    });
  }

  const form = document.getElementById(Const.domId.form);

  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      event.stopPropagation();
      const isValid = validateForm();

      if (!isValid) {
        return;
      }

      showAlertMessage(false);
      setButtonUiState(Const.domId.saveButton, Const.domId.saveButtonLabel, 3, Const.label.saving);
      setTimeout(() => {
        const cts = new _cursoredtoslack__WEBPACK_IMPORTED_MODULE_0__["default"](chrome);
        const option = getOptionFromForm();
        cts.setOptions(option).then(() => {
          showAlertMessage(true, false, Const.label.saveSuccess);
          setButtonUiState(Const.domId.saveButton, Const.domId.saveButtonLabel, 2, Const.label.save);
        });
      }, Const.uiStateChangeIntervalInSec * 1000);
    });
  }

  const maskButton = document.getElementById(Const.domId.webhookMaskButton);

  if (maskButton) {
    maskButton.addEventListener("click", () => {
      togglewebhookPathInputMask();
    });
  } // initialize.


  const cts = new _cursoredtoslack__WEBPACK_IMPORTED_MODULE_0__["default"](chrome);
  cts.getOptions().then(options => {
    const isValid = Object.keys(options.validate()).length === 0;

    if (isValid) {
      document.getElementById(Const.domId.webhookPath).value = options.webhookPath;
    }

    validateButtons();
    maskwebhookPathInputValue(true);
  });
}
const isCalledChrome =  true && true;

if (isCalledChrome) {
  constructOptions();
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1cnNvcmVkdG9zbGFjay1vcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1cnNvcmVkdG9zbGFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3B0aW9ucy5qcyJdLCJuYW1lcyI6WyJTbGFja1dlYmhvb2tDb21tb25Ib3N0UGF0aCIsIkN1cnNvcmVkVG9TbGFja09wdGlvbiIsImNvbnN0cnVjdG9yIiwidmFsdWVzIiwid2ViaG9va1BhdGgiLCJ3ZWJob29rVXJsIiwidmFsaWRhdGUiLCJlcnJvcnMiLCJtYXRjaCIsIk9wdGlvbnNLZXkiLCJDb250ZXh0TWVudUlkIiwiQ3Vyc29yZWRUb1NsYWNrIiwiY2hyb21lIiwiZ2V0T3B0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwic3RvcmFnZSIsInN5bmMiLCJnZXQiLCJyZXN1bHQiLCJ2YWx1ZSIsInNldE9wdGlvbnMiLCJyZWplY3QiLCJzZXQiLCJjb250ZXh0TWVudU9uQ2xpY2tlZENhbGxiYWNrIiwiaW5mbyIsImlzTXlFdmVudCIsIm1lbnVJdGVtSWQiLCJtZXNzYWdlIiwib3JkZXJMaXN0Iiwib3JkZXIiLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsInNlbmRSZXF1ZXN0VG9TbGFja0FwaSIsImFkZENvbnRleHRNZW51IiwiY29udGV4dE1lbnVzIiwib25DbGlja2VkIiwiYWRkTGlzdGVuZXIiLCJiaW5kIiwiY29udGV4dHMiLCJjcmVhdGUiLCJpZCIsInR5cGUiLCJ0aXRsZSIsInZpc2libGUiLCJ0ZXh0IiwiYm9keSIsImZldGNoIiwibWV0aG9kIiwiY2FjaGUiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJDb25zdCIsImRvbUlkIiwiZm9ybSIsInRlc3RCdXR0b24iLCJzYXZlQnV0dG9uIiwidGVzdEJ1dHRvbkxhYmVsIiwic2F2ZUJ1dHRvbkxhYmVsIiwid2ViaG9va0ZlZWRiYWNrIiwid2ViaG9va01hc2tCdXR0b24iLCJ3ZWJob29rSWNvbk1hc2siLCJ3ZWJob29rSWNvblVuTWFzayIsImFsZXJ0IiwiYWxlcnRUZW1wbGF0ZSIsImxhYmVsIiwic2F2ZSIsInNhdmluZyIsInNhdmVTdWNjZXNzIiwidGVzdCIsInRlc3RpbmciLCJ0ZXN0U3VjY2VzcyIsInRlc3RTdWNjZXNzQWRkaXRpb24iLCJ0ZXN0RmFpbGVkIiwidWlTdGF0ZUNoYW5nZUludGVydmFsSW5TZWMiLCJnZXRPcHRpb25Gcm9tRm9ybSIsIndlYmhvb2tQYXRoSW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib3B0aW9uIiwidmFsaWRhdGVGb3JtIiwidmFsaWRVcmwiLCJ2YWxpZGF0ZVNsYWNrd2ViaG9va1BhdGgiLCJ2YWxpZGF0ZUJ1dHRvbnMiLCJyZW1vdmVTbGFja0hvc3RQYXRoRnJvbVNsYWNrd2ViaG9va1BhdGgiLCJpbnB1dCIsInJlcGxhY2VkIiwicmVwbGFjZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImZlZWRCYWNrIiwidGV4dENvbnRlbnQiLCJpc1ZhbGlkIiwic2V0QnV0dG9uVWlTdGF0ZSIsInRlc3RCdXR0b25MYWJlbHN0Iiwic2F2ZUJ1dHRvbkxhYmVsZSIsImJ1dHRvbklkIiwibGFiZWxJZCIsInN0YXRlIiwiYnV0dG9uIiwiYnV0dG9uTGFiZWwiLCJkaXNhYmxlZCIsIm1hc2t3ZWJob29rUGF0aElucHV0VmFsdWUiLCJpc01hc2siLCJpY29uTWFzayIsImljb25Vbk1hc2siLCJzZXRBdHRyaWJ1dGUiLCJ0b2dnbGV3ZWJob29rUGF0aElucHV0TWFzayIsIm1hc2tJY29uIiwiaXNNYXNrTmV4dCIsImNvbnRhaW5zIiwic2hvd0FsZXJ0TWVzc2FnZSIsImlzU2hvdyIsImlzRXJyb3IiLCJhZGRpdGlvbk1lc3NhZ2UiLCJ0ZW1wbGF0ZSIsImFsZXJ0QmxvY2siLCJjbG9uZU5vZGUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYWxlcnRNZXNzYWdlIiwiYWxlcnRBZGRpdGlvbk1lc3NhZ2UiLCJiZWZvcmUiLCJjb25zdHJ1Y3RPcHRpb25zIiwid2ViaG9va0lucHV0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJjdHMiLCJjYXRjaCIsImVycm9yIiwiRXJyb3IiLCJzdGFjayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJtYXNrQnV0dG9uIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImlzQ2FsbGVkQ2hyb21lIiwiUlVOTklOR19PTl9DSFJPTUUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQWE7O0FBRU4sTUFBTUEsMEJBQTBCLEdBQUcsbUNBQW5DO0FBRVA7OztBQUVPLE1BQU1DLHFCQUFOLENBQTRCO0FBQ2pDOzs7O0FBSUFDLGFBQVcsQ0FBQ0MsTUFBRCxFQUFTO0FBQ2xCLFNBQUtDLFdBQUwsR0FBbUIsRUFBbkI7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cUMsTUFBTTtBQUN6Q2pCLGdDQUEwQjtBQUMzQixLQUZEO0FBR0QsR0FoR2dDLENBa0dqQzs7O0FBQ0EsUUFBTW1CLEdBQUcsR0FBRyxJQUFJeEgsd0RBQUosQ0FBb0JDLE1BQXBCLENBQVo7QUFDQXVILEtBQUcsQ0FBQ3RILFVBQUosR0FBaUJ5QyxJQUFqQixDQUF1QnJCLE9BQUQsSUFBYTtBQUNqQyxVQUFNZ0UsT0FBTyxHQUFHMkMsTUFBTSxDQUFDQyxJQUFQLENBQVk1RyxPQUFPLENBQUMzQixRQUFSLEVBQVosRUFBZ0N3SSxNQUFoQyxLQUEyQyxDQUEzRDs7QUFDQSxRQUFJN0MsT0FBSixFQUFhO0FBQ1hoQixjQUFRLENBQUNDLGNBQVQsQ0FBd0IxQixLQUFLLENBQUNDLEtBQU4sQ0FBWXJELFdBQXBDLEVBQWlEZ0IsS0FBakQsR0FDRWEsT0FBTyxDQUFDN0IsV0FEVjtBQUVEOztBQUNEbUYsbUJBQWU7QUFFZm9CLDZCQUF5QixDQUFDLElBQUQsQ0FBekI7QUFDRCxHQVREO0FBVUQ7QUFFRCxNQUFNb0MsY0FBYyxHQUNsQixTQUE0Q0MsSUFEOUM7O0FBRUEsSUFBSUQsY0FBSixFQUFvQjtBQUNsQmhCLGtCQUFnQjtBQUNqQixDIiwiZmlsZSI6Im9wdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9vcHRpb25zLmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBTbGFja1dlYmhvb2tDb21tb25Ib3N0UGF0aCA9IFwiaHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvXCI7XG5cbi8qKlxuICovXG5leHBvcnQgY2xhc3MgQ3Vyc29yZWRUb1NsYWNrT3B0aW9uIHtcbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYSBvcHRpb25zIGluIGV4dGVuc2lvbi5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZXMpIHtcbiAgICB0aGlzLndlYmhvb2tQYXRoID0gXCJcIjtcblxuICAgIGlmICh0eXBlb2YgdmFsdWVzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBpZiAodmFsdWVzW1wid2ViaG9va1BhdGhcIl0pIHtcbiAgICAgICAgdGhpcy53ZWJob29rUGF0aCA9IHZhbHVlc1tcIndlYmhvb2tQYXRoXCJdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTbGFjayBXZWJob29rIFVSTC5cbiAgICogQHJldHVybnMge3N0cmluZ30gU2xhY2sgV2ViaG9vayBVUkwuXG4gICAqL1xuICBnZXQgd2ViaG9va1VybCgpIHtcbiAgICBpZiAoIXRoaXMud2ViaG9va1BhdGgpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gU2xhY2tXZWJob29rQ29tbW9uSG9zdFBhdGggKyB0aGlzLndlYmhvb2tQYXRoO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIG9wdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMge29iamVjdH0gUmV0dXJucyBlcnJvciBtZXNzYWdlIGlmIG5vdCB2YWxpZCwgZW1wdHkgb3RoZXJ3aXNlLlxuICAgKiAgRWFjaCBtZXNzYWdlIGlzIGFzc29jaWF0ZWQgd2l0aCBrZXkuXG4gICAqL1xuICB2YWxpZGF0ZSgpIHtcbiAgICBsZXQgZXJyb3JzID0ge307XG5cbiAgICBpZiAoIXRoaXMud2ViaG9va1BhdGgpIHtcbiAgICAgIGVycm9yc1tcIndlYmhvb2tQYXRoXCJdID0gXCJFbnRlciBhIFNsYWNrIFdlYmhvb2sgVVJMIGZvciBzZW5kaW5nIG1lc3NhZ2UuXCI7XG4gICAgfSBlbHNlIGlmICghdGhpcy53ZWJob29rUGF0aC5tYXRjaCgvXig/IShodHRwfFxcLykpW2EtekEtWjAtOS9dKy8pKSB7XG4gICAgICBlcnJvcnNbXCJ3ZWJob29rUGF0aFwiXSA9IFwiRW50ZXIgYSBjb3JyZWN0IFVSTC5cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ3Vyc29yZWRUb1NsYWNrT3B0aW9uIH0gZnJvbSBcIi4vY3Vyc29yZWR0b3NsYWNrLW9wdGlvblwiO1xuXG4vKipcbiAqIFBlcnNpc3RlbmNlIG9wdGlvbnMga2V5LlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgT3B0aW9uc0tleSA9IFwiaG9nZVwiO1xuXG4vKipcbiAqIENvbnRleHRNZW51SWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IENvbnRleHRNZW51SWQgPSBcImZ1Z2FcIjtcblxuLyoqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvcmVkVG9TbGFjayB7XG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGEgQ3Vyc29yZWRUb1NsYWNrXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge29iamVjdH0gY2hyb21lIEFQSVxuICAgKi9cbiAgY29uc3RydWN0b3IoY2hyb21lKSB7XG4gICAgdGhpcy5jaHJvbWUgPSBjaHJvbWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHBlcnNpc3RlbmNlIG9wdGlvbnMuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IG9wdGlvbnMgcmV0dXJuZWQgaWYgaXQgcmVzb2x2ZWQuXG4gICAqL1xuICBhc3luYyBnZXRPcHRpb25zKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5jaHJvbWUuc3RvcmFnZS5zeW5jLmdldChbT3B0aW9uc0tleV0sIChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBuZXcgQ3Vyc29yZWRUb1NsYWNrT3B0aW9uKHJlc3VsdFtPcHRpb25zS2V5XSk7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHBlcnNpc3RlbmNlIG9wdGlvbnMuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3QgaGFzIHBlcnNpc3RlbmNlIG9wdGlvbnMuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IHJldHVybnMgYm9vbCBpZiBpdCByZXNvbHZlZC5cbiAgICovXG4gIGFzeW5jIHNldE9wdGlvbnModmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQ3Vyc29yZWRUb1NsYWNrT3B0aW9uID09PSBmYWxzZSkge1xuICAgICAgICByZWplY3QoXCJ3cm9uZyBpbnN0YW5jZW9mXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgW09wdGlvbnNLZXldOiB2YWx1ZSB9LCAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb250ZXh0TWVudXMub25DbGlja2VkIGNhbGxiYWNrLlxuICAgKlxuICAgKiB0aGlzIGlzIHVzZWQgYnkgYWRkQ29udGV4dE1lbnUoKSBmdW5jdGlvbi5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9leHRlbnNpb25zL2NvbnRleHRNZW51cyNldmVudC1vbkNsaWNrZWR9XG4gICAqL1xuICBhc3luYyBjb250ZXh0TWVudU9uQ2xpY2tlZENhbGxiYWNrKGluZm8pIHtcbiAgICBjb25zdCBpc015RXZlbnQgPSBDb250ZXh0TWVudUlkID09PSBpbmZvLm1lbnVJdGVtSWQ7XG4gICAgaWYgKCFpc015RXZlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbWVzc2FnZSA9IFwiXCI7XG4gICAgY29uc3Qgb3JkZXJMaXN0ID0gW1xuICAgICAgXCJzZWxlY3Rpb25UZXh0XCIsXG4gICAgICBcImxpbmtVcmxcIixcbiAgICAgIFwic3JjVXJsXCIsXG4gICAgICBcInBhZ2VVcmxcIixcbiAgICAgIFwiZnJhbWVVcmxcIixcbiAgICBdO1xuICAgIGZvciAoY29uc3Qgb3JkZXIgb2Ygb3JkZXJMaXN0KSB7XG4gICAgICBpZiAoaW5mb1tvcmRlcl0pIHtcbiAgICAgICAgbWVzc2FnZSA9IGluZm9bb3JkZXJdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICBjb25zb2xlLmxvZygnbm8gY29udGVudHMnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zID0gYXdhaXQgdGhpcy5nZXRPcHRpb25zKCk7XG4gICAgdGhpcy5zZW5kUmVxdWVzdFRvU2xhY2tBcGkobWVzc2FnZSwgb3B0aW9ucy53ZWJob29rVXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgY29udGV4dCBtZW51LlxuICAgKi9cbiAgYWRkQ29udGV4dE1lbnUoKSB7XG4gICAgLy8gYWRkIG9uQ2xpY2tlZCBjYWxsYmFjay5cbiAgICB0aGlzLmNocm9tZS5jb250ZXh0TWVudXMub25DbGlja2VkLmFkZExpc3RlbmVyKFxuICAgICAgdGhpcy5jb250ZXh0TWVudU9uQ2xpY2tlZENhbGxiYWNrLmJpbmQodGhpcylcbiAgICApO1xuXG4gICAgLy8gY29uc3QgY29udGV4dHMgPSBbXCJwYWdlXCIsIFwic2VsZWN0aW9uXCIsIFwibGlua1wiLCBcImVkaXRhYmxlXCIsIFwiaW1hZ2VcIiwgXCJ2aWRlb1wiLCBcImF1ZGlvXCJdO1xuICAgIGNvbnN0IGNvbnRleHRzID0gW1wiYWxsXCJdO1xuICAgIHRoaXMuY2hyb21lLmNvbnRleHRNZW51cy5jcmVhdGUoe1xuICAgICAgaWQ6IENvbnRleHRNZW51SWQsXG4gICAgICB0eXBlOiBcIm5vcm1hbFwiLFxuICAgICAgdGl0bGU6IFwiU2VuZCB0byBTbGFja1wiLFxuICAgICAgY29udGV4dHM6IGNvbnRleHRzLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHJlcXVlc3QgdG8gU2xhY2sgQVBJLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBQcm9wZXJ0aWVzIG9mIHBvc3QgYm9keS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHdlYmhvb2tVcmwgU2xhY2tXZWJob29rVXJsXG4gICAqL1xuICBhc3luYyBzZW5kUmVxdWVzdFRvU2xhY2tBcGkodGV4dCwgd2ViaG9va1VybCkge1xuICAgIC8vIGJ1aWxkIGRhdGFcbiAgICBjb25zdCBib2R5ID0geyB0ZXh0OiB0ZXh0IH07XG5cbiAgICByZXR1cm4gYXdhaXQgZmV0Y2god2ViaG9va1VybCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC8vIE5PVEU6IFNsYWNrIFdlYmhvb2sgZG9lcyBub3Qgc3VwcG9ydCBwcmVmbGlnaHQuXG4gICAgICAgIC8vIGh0dHBzOi8vYXBpLnNsYWNrLmNvbS93ZWJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLnRleHQoKSlcbiAgICAgIC50aGVuKChib2R5KSA9PiBib2R5KTtcbiAgfVxufVxuIiwiaW1wb3J0IEN1cnNvcmVkVG9TbGFjayBmcm9tIFwiLi9jdXJzb3JlZHRvc2xhY2tcIjtcbmltcG9ydCB7XG4gIFNsYWNrV2ViaG9va0NvbW1vbkhvc3RQYXRoLFxuICBDdXJzb3JlZFRvU2xhY2tPcHRpb24sXG59IGZyb20gXCIuL2N1cnNvcmVkdG9zbGFjay1vcHRpb25cIjtcblxuZXhwb3J0IGNvbnN0IENvbnN0ID0ge1xuICBkb21JZDoge1xuICAgIGZvcm06IFwib3B0aW9uRm9ybVwiLFxuICAgIHdlYmhvb2tQYXRoOiBcInNsYWNrV2ViaG9va1BhdGhJbnB1dFwiLFxuICAgIHRlc3RCdXR0b246IFwidGVzdEJ1dHRvblwiLFxuICAgIHNhdmVCdXR0b246IFwic2F2ZUJ1dHRvblwiLFxuICAgIHRlc3RCdXR0b25MYWJlbDogXCJ0ZXN0QnV0dG9uTGFiZWxcIixcbiAgICBzYXZlQnV0dG9uTGFiZWw6IFwic2F2ZUJ1dHRvbkxhYmVsXCIsXG4gICAgd2ViaG9va0ZlZWRiYWNrOiBcInNsYWNrV2ViaG9va1BhdGhJbnZhbGlkRmVlZGJhY2tcIixcbiAgICB3ZWJob29rTWFza0J1dHRvbjogXCJ0b2dnbGVXZWJob29rUGF0aE1hc2tCdXR0b25cIixcbiAgICB3ZWJob29rSWNvbk1hc2s6IFwidG9nZ2xlV2ViaG9va1BhdGhNYXNrQnV0dG9uTWFza1wiLFxuICAgIHdlYmhvb2tJY29uVW5NYXNrOiBcInRvZ2dsZVdlYmhvb2tQYXRoTWFza0J1dHRvblVuTWFza1wiLFxuICAgIGFsZXJ0OiBcImFsZXJ0TWVzc2FnZVwiLFxuICAgIGFsZXJ0VGVtcGxhdGU6IFwiYWxlcnRNZXNzYWdlVGVtcGxhdGVcIixcbiAgfSxcbiAgbGFiZWw6IHtcbiAgICBzYXZlOiBcIlNhdmVcIixcbiAgICBzYXZpbmc6IFwiU2F2aW5nLi4uXCIsXG4gICAgc2F2ZVN1Y2Nlc3M6IFwiU2F2ZWQuXCIsXG4gICAgdGVzdDogXCJUZXN0XCIsXG4gICAgdGVzdGluZzogXCJTZW5kaW5nLi4uXCIsXG4gICAgdGVzdFN1Y2Nlc3M6IFwiU2VudC5cIixcbiAgICB0ZXN0U3VjY2Vzc0FkZGl0aW9uOiBcIkNoZWNrIFNsYWNrIGNoYW5uZWwuXCIsXG4gICAgdGVzdEZhaWxlZDogXCJGYWlsZWQgdG8gc2VuZCBhIHRlc3QgbWVzc2FnZS5cIixcbiAgfSxcbiAgdWlTdGF0ZUNoYW5nZUludGVydmFsSW5TZWM6IDEsXG59O1xuXG4vKipcbiAqIEdldCBmb3JtIHZhbHVlcy5cbiAqIEByZXR1cm5zIEN1cnNvcmVkVG9TbGFja09wdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3B0aW9uRnJvbUZvcm0oKSB7XG4gIGNvbnN0IHdlYmhvb2tQYXRoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChDb25zdC5kb21JZC53ZWJob29rUGF0aCk7XG5cbiAgY29uc3Qgb3B0aW9uID0gbmV3IEN1cnNvcmVkVG9TbGFja09wdGlvbigpO1xuICBvcHRpb24ud2ViaG9va1BhdGggPSB3ZWJob29rUGF0aElucHV0LnZhbHVlO1xuXG4gIHJldHVybiBvcHRpb247XG59XG5cbi8qKlxuICogVmFsaWRhdGUgRm9ybSwgdXBkYXRlIFVJIHN0YXRlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB2YWxpZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xuICBjb25zdCB2YWxpZFVybCA9IHZhbGlkYXRlU2xhY2t3ZWJob29rUGF0aCgpO1xuICB2YWxpZGF0ZUJ1dHRvbnMoKTtcbiAgcmV0dXJuIHZhbGlkVXJsO1xufVxuXG4vKipcbiAqIFJlbW92ZSBob3N0IGFuZCBjb21tb24gcGF0aCBmcm9tIFVSTC5cbiAqIEBwYXJhbXMge3N0cmluZ30gdmFsdWUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIFJlbW92ZWQgVVJMLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU2xhY2tIb3N0UGF0aEZyb21TbGFja3dlYmhvb2tQYXRoKCkge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKENvbnN0LmRvbUlkLndlYmhvb2tQYXRoKTtcbiAgY29uc3QgcmVwbGFjZWQgPSBpbnB1dC52YWx1ZS5yZXBsYWNlKFNsYWNrV2ViaG9va0NvbW1vbkhvc3RQYXRoLCBcIlwiKTtcbiAgaWYgKHJlcGxhY2VkKSB7XG4gICAgaW5wdXQudmFsdWUgPSByZXBsYWNlZDtcbiAgfVxufVxuXG4vKipcbiAqIFZhbGlkYXRlIHdlYmhvb2sgdXJsLCBhbmQgdXBkYXRlIFVJIHN0YXRlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB2YWxpZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVTbGFja3dlYmhvb2tQYXRoKCkge1xuICBjb25zdCBvcHRpb24gPSBnZXRPcHRpb25Gcm9tRm9ybSgpO1xuICBjb25zdCBlcnJvcnMgPSBvcHRpb24udmFsaWRhdGUoKTtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChDb25zdC5kb21JZC53ZWJob29rUGF0aCk7XG4gIGlmIChlcnJvcnNbXCJ3ZWJob29rUGF0aFwiXSkge1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJpcy1pbnZhbGlkXCIpO1xuICB9IGVsc2Uge1xuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1pbnZhbGlkXCIpO1xuICB9XG5cbiAgaWYgKGVycm9yc1tcIndlYmhvb2tQYXRoXCJdKSB7XG4gICAgY29uc3QgZmVlZEJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChDb25zdC5kb21JZC53ZWJob29rRmVlZGJhY2spO1xuICAgIGZlZWRCYWNrLnRleHRDb250ZW50ID0gZXJyb3JzW1wid2ViaG9va1BhdGhcIl07XG4gIH1cblxuICByZXR1cm4gdHlwZW9mIGVycm9yc1tcIndlYmhvb2tQYXRoXCJdID09PSBcInVuZGVmaW5lZFwiO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlIEJ1dHRvbiBVSXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUJ1dHRvbnMoKSB7XG4gIGNvbnN0IG9wdGlvbiA9IGdldE9wdGlvbkZyb21Gb3JtKCk7XG4gIGNvbnN0IGVycm9ycyA9IG9wdGlvbi52YWxpZGF0ZSgpO1xuICBjb25zdCBpc1ZhbGlkID0gdHlwZW9mIGVycm9yc1tcIndlYmhvb2tQYXRoXCJdID09PSBcInVuZGVmaW5lZFwiO1xuXG4gIHNldEJ1dHRvblVpU3RhdGUoXG4gICAgQ29uc3QuZG9tSWQudGVzdEJ1dHRvbixcbiAgICBDb25zdC5kb21JZC50ZXN0QnV0dG9uTGFiZWxzdCxcbiAgICBpc1ZhbGlkID8gMiA6IDEsXG4gICAgXCJcIlxuICApO1xuICBzZXRCdXR0b25VaVN0YXRlKFxuICAgIENvbnN0LmRvbUlkLnNhdmVCdXR0b24sXG4gICAgQ29uc3QuZG9tSWQuc2F2ZUJ1dHRvbkxhYmVsZSxcbiAgICBpc1ZhbGlkID8gMiA6IDEsXG4gICAgXCJcIlxuICApO1xufVxuXG4vKipcbiAqIFNldCBhIGJ1dHRvbiBVSSBzYXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IGJ1dHRvbklkIFVJIGlkLlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsSWQgVUkgaWQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhdGUgMTpkaXNhYmxlZCAyOmVuYWJsZWQgMzpydW5uaW5nIDQ6ZXJyb3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBCdXR0b24gbGFiZWwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRCdXR0b25VaVN0YXRlKGJ1dHRvbklkLCBsYWJlbElkLCBzdGF0ZSwgbGFiZWwpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnV0dG9uSWQpO1xuICBjb25zdCBidXR0b25MYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxhYmVsSWQpO1xuICBpZiAoYnV0dG9uTGFiZWwpIHtcbiAgICBidXR0b25MYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsO1xuICB9XG4gIGlmIChzdGF0ZSA9PT0gMSkge1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwicnVubmluZ1wiKTtcbiAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKHN0YXRlID09PSAyKSB7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJydW5uaW5nXCIpO1xuICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKHN0YXRlID09PSAzKSB7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJydW5uaW5nXCIpO1xuICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogQ2hhbmdlIFdlYmhvb2sgVVJMIE1hc2sgSWNvbiB2aXNpYmxlIHN0YXRlLlxuICogQHBhcmFtIHtib29sZWFufSBpc01hc2sgTWFzayBVUkwgaWYgaXQncyB0cnVlLCBVbm1hc2sgb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFza3dlYmhvb2tQYXRoSW5wdXRWYWx1ZShpc01hc2spIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChDb25zdC5kb21JZC53ZWJob29rUGF0aCk7XG4gIGNvbnN0IGljb25NYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQ29uc3QuZG9tSWQud2ViaG9va0ljb25NYXNrKTtcbiAgY29uc3QgaWNvblVuTWFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKENvbnN0LmRvbUlkLndlYmhvb2tJY29uVW5NYXNrKTtcbiAgaWYgKGlzTWFzaykge1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJwYXNzd29yZFwiKTtcbiAgICBpY29uTWFzay5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xuICAgIGljb25Vbk1hc2suY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBpY29uTWFzay5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xuICAgIGljb25Vbk1hc2suY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcbiAgfVxufVxuXG4vKipcbiAqIFRvZ2dsZSBXZWJob29rIFVSTCBNYXNrIEljb24gdmlzaWJsZSBzdGF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZXdlYmhvb2tQYXRoSW5wdXRNYXNrKCkge1xuICBjb25zdCBtYXNrSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKENvbnN0LmRvbUlkLndlYmhvb2tJY29uTWFzayk7XG4gIGNvbnN0IGlzTWFza05leHQgPSBtYXNrSWNvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJkLW5vbmVcIik7XG4gIG1hc2t3ZWJob29rUGF0aElucHV0VmFsdWUoaXNNYXNrTmV4dCk7XG59XG5cbi8qKlxuICogU2hvdyBhbGVydC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTaG93IFNob3cgdGhlIGFsZXJ0IGlmIGl0J3MgdHJ1ZSwgaGlkZSBvdGhlcndpc2UuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzRXJyb3IgU2hvdyB0aGUgZGFuZ2VyIGFsZXJ0IGlmIGl0J3MgdHJ1ZSwgc3VjY2VzcyBvdGhlcndpc2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBBbGVydCBtZXNzYWdlLlxuICogQHBhcmFtIHtzdHJpbmd9IGFkZGl0aW9uTWVzc2FnZSBBbGVydCBhZGRpdGlvbiBtZXNzYWdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FsZXJ0TWVzc2FnZShpc1Nob3csIGlzRXJyb3IsIG1lc3NhZ2UsIGFkZGl0aW9uTWVzc2FnZSkge1xuICBpZiAoaXNTaG93KSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChDb25zdC5kb21JZC5hbGVydFRlbXBsYXRlKTtcbiAgICBjb25zdCBhbGVydEJsb2NrID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNvbnN0IGFsZXJ0ID0gYWxlcnRCbG9jay5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWxlcnRcIik7XG4gICAgY29uc3QgYWxlcnRNZXNzYWdlID0gYWxlcnRbMF0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFsZXJ0TWVzc2FnZVwiKTtcbiAgICBjb25zdCBhbGVydEFkZGl0aW9uTWVzc2FnZSA9IGFsZXJ0WzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICBcImFsZXJ0QWRkaXRpb25NZXNzYWdlXCJcbiAgICApO1xuICAgIGFsZXJ0WzBdLmlkID0gQ29uc3QuZG9tSWQuYWxlcnQ7XG4gICAgYWxlcnRbMF0uY2xhc3NMaXN0LmFkZChpc0Vycm9yID8gXCJhbGVydC1kYW5nZXJcIiA6IFwiYWxlcnQtc3VjY2Vzc1wiKTtcbiAgICBhbGVydE1lc3NhZ2VbMF0udGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgIGlmIChhZGRpdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGFsZXJ0QWRkaXRpb25NZXNzYWdlWzBdLnRleHRDb250ZW50ID0gYWRkaXRpb25NZXNzYWdlO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydEFkZGl0aW9uTWVzc2FnZVswXS5yZW1vdmUoKTtcbiAgICB9XG4gICAgdGVtcGxhdGUuYmVmb3JlKGFsZXJ0WzBdKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKENvbnN0LmRvbUlkLmFsZXJ0KTtcbiAgICBpZiAoYWxlcnQpIHtcbiAgICAgIGFsZXJ0LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIGNvbnN0cnVjdCBvcHRpb25zIGpzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0T3B0aW9ucygpIHtcbiAgY29uc3Qgd2ViaG9va0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQ29uc3QuZG9tSWQud2ViaG9va1BhdGgpO1xuICBpZiAod2ViaG9va0lucHV0KSB7XG4gICAgd2ViaG9va0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgIHJlbW92ZVNsYWNrSG9zdFBhdGhGcm9tU2xhY2t3ZWJob29rUGF0aCgpO1xuICAgICAgdmFsaWRhdGVTbGFja3dlYmhvb2tQYXRoKCk7XG4gICAgICB2YWxpZGF0ZUJ1dHRvbnMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHRlc3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChDb25zdC5kb21JZC50ZXN0QnV0dG9uKTtcbiAgaWYgKHRlc3RCdXR0b24pIHtcbiAgICB0ZXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBpc1ZhbGlkID0gdmFsaWRhdGVGb3JtKCk7XG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzaG93QWxlcnRNZXNzYWdlKGZhbHNlKTtcblxuICAgICAgc2V0QnV0dG9uVWlTdGF0ZShcbiAgICAgICAgQ29uc3QuZG9tSWQudGVzdEJ1dHRvbixcbiAgICAgICAgQ29uc3QuZG9tSWQudGVzdEJ1dHRvbkxhYmVsLFxuICAgICAgICAzLFxuICAgICAgICBDb25zdC5sYWJlbC50ZXN0aW5nXG4gICAgICApO1xuICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN0cyA9IG5ldyBDdXJzb3JlZFRvU2xhY2soY2hyb21lKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZ2V0T3B0aW9uRnJvbUZvcm0oKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3RzXG4gICAgICAgICAgLnNlbmRSZXF1ZXN0VG9TbGFja0FwaShcInRlc3QgbWVzc2FnZS5cIiwgb3B0aW9uLndlYmhvb2tVcmwpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3IpO1xuXG4gICAgICAgIGNvbnN0IGlzRXJyb3IgPSByZXN1bHQgaW5zdGFuY2VvZiBFcnJvcjtcbiAgICAgICAgaWYgKGlzRXJyb3IpIHtcbiAgICAgICAgICBzaG93QWxlcnRNZXNzYWdlKHRydWUsIGlzRXJyb3IsIENvbnN0LmxhYmVsLnRlc3RGYWlsZWQsIHJlc3VsdC5zdGFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hvd0FsZXJ0TWVzc2FnZShcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICBpc0Vycm9yLFxuICAgICAgICAgICAgQ29uc3QubGFiZWwudGVzdFN1Y2Nlc3MsXG4gICAgICAgICAgICBDb25zdC5sYWJlbC50ZXN0U3VjY2Vzc0FkZGl0aW9uXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEJ1dHRvblVpU3RhdGUoXG4gICAgICAgICAgQ29uc3QuZG9tSWQudGVzdEJ1dHRvbixcbiAgICAgICAgICBDb25zdC5kb21JZC50ZXN0QnV0dG9uTGFiZWwsXG4gICAgICAgICAgMixcbiAgICAgICAgICBDb25zdC5sYWJlbC50ZXN0XG4gICAgICAgICk7XG4gICAgICB9LCBDb25zdC51aVN0YXRlQ2hhbmdlSW50ZXJ2YWxJblNlYyAqIDEwMDApO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKENvbnN0LmRvbUlkLmZvcm0pO1xuICBpZiAoZm9ybSkge1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgY29uc3QgaXNWYWxpZCA9IHZhbGlkYXRlRm9ybSgpO1xuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2hvd0FsZXJ0TWVzc2FnZShmYWxzZSk7XG5cbiAgICAgIHNldEJ1dHRvblVpU3RhdGUoXG4gICAgICAgIENvbnN0LmRvbUlkLnNhdmVCdXR0b24sXG4gICAgICAgIENvbnN0LmRvbUlkLnNhdmVCdXR0b25MYWJlbCxcbiAgICAgICAgMyxcbiAgICAgICAgQ29uc3QubGFiZWwuc2F2aW5nXG4gICAgICApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN0cyA9IG5ldyBDdXJzb3JlZFRvU2xhY2soY2hyb21lKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZ2V0T3B0aW9uRnJvbUZvcm0oKTtcbiAgICAgICAgY3RzLnNldE9wdGlvbnMob3B0aW9uKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBzaG93QWxlcnRNZXNzYWdlKHRydWUsIGZhbHNlLCBDb25zdC5sYWJlbC5zYXZlU3VjY2Vzcyk7XG5cbiAgICAgICAgICBzZXRCdXR0b25VaVN0YXRlKFxuICAgICAgICAgICAgQ29uc3QuZG9tSWQuc2F2ZUJ1dHRvbixcbiAgICAgICAgICAgIENvbnN0LmRvbUlkLnNhdmVCdXR0b25MYWJlbCxcbiAgICAgICAgICAgIDIsXG4gICAgICAgICAgICBDb25zdC5sYWJlbC5zYXZlXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCBDb25zdC51aVN0YXRlQ2hhbmdlSW50ZXJ2YWxJblNlYyAqIDEwMDApO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgbWFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKENvbnN0LmRvbUlkLndlYmhvb2tNYXNrQnV0dG9uKTtcbiAgaWYgKG1hc2tCdXR0b24pIHtcbiAgICBtYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0b2dnbGV3ZWJob29rUGF0aElucHV0TWFzaygpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gaW5pdGlhbGl6ZS5cbiAgY29uc3QgY3RzID0gbmV3IEN1cnNvcmVkVG9TbGFjayhjaHJvbWUpO1xuICBjdHMuZ2V0T3B0aW9ucygpLnRoZW4oKG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBpc1ZhbGlkID0gT2JqZWN0LmtleXMob3B0aW9ucy52YWxpZGF0ZSgpKS5sZW5ndGggPT09IDA7XG4gICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKENvbnN0LmRvbUlkLndlYmhvb2tQYXRoKS52YWx1ZSA9XG4gICAgICAgIG9wdGlvbnMud2ViaG9va1BhdGg7XG4gICAgfVxuICAgIHZhbGlkYXRlQnV0dG9ucygpO1xuXG4gICAgbWFza3dlYmhvb2tQYXRoSW5wdXRWYWx1ZSh0cnVlKTtcbiAgfSk7XG59XG5cbmNvbnN0IGlzQ2FsbGVkQ2hyb21lID1cbiAgdHlwZW9mIFJVTk5JTkdfT05fQ0hST01FICE9PSBcInVuZGVmaW5lZFwiICYmIFJVTk5JTkdfT05fQ0hST01FO1xuaWYgKGlzQ2FsbGVkQ2hyb21lKSB7XG4gIGNvbnN0cnVjdE9wdGlvbnMoKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=