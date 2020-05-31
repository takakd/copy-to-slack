export const DomIdList = {
  webhookUrl: "slackWebhookUrlInput",
  channel: "slackCannelNameInput",
  testButton: "testButton",
  saveButton: "saveButton",
  webhookFeedback: "slackWebhookUrlInvalidFeedback",
  channelFeedback: "slackCannelNameInvalidFeedback",
};

/**
 * Get form values.
 * @returns Errors if exists.
 */
export function getFormValues() {
  const webhookUrlInput = document.getElementById(DomIdList.webhookUrl);
  const channelNameInput = document.getElementById(DomIdList.channel);

  const result = {};
  result[DomIdList.webhookUrl] = webhookUrlInput.value;
  result[DomIdList.channel] = channelNameInput.value;
  return result;
}

/**
 * Validate Form, update UI state.
 * @returns {boolean} Returns true if valid, false otherwise.
 */
export function validateForm() {
  const validUrl = validateSlackWebhookUrl();
  const validChannel = validateSlackChannelName();
  validateButtons();
  return validUrl && validChannel;
}

/**
 * Validate webhook url.
 * @params {string} value.
 * @returns {string} Returns error string if not valid, empty otherwise.
 */
export function validateSlackWebhookUrlValue(value) {
  let error = "";
  if (!value) {
    error = "Enter a Slack Webhook URL for sending message.";
  } else if (!value.match(/^https:\/\/[\w!?/+\-_~=;.,*&@#$%()'[]]+/)) {
    error = "Enter a correct URL.";
  }
  return error;
}

/**
 * Validate webhook url, and update UI state.
 * @returns {boolean} Returns true if valid, false otherwise.
 */
export function validateSlackWebhookUrl() {
  const values = getFormValues();
  const error = validateSlackWebhookUrlValue(values[DomIdList.webhookUrl]);
  const input = document.getElementById(DomIdList.webhookUrl);
  if (error) {
    input.classList.add("is-invalid");
  } else {
    input.classList.remove("is-invalid");
  }

  const feedBack = document.getElementById(DomIdList.webhookFeedback);
  feedBack.textContent = error;

  return error === "";
}

/**
 * Validate channel.
 * We cannot use space, dot, camma as of 2020/5/31
 * @params {string} value.
 * @returns {string} Returns error string if not valid, empty otherwise.
 */
export function validateSlackChannelNameValue(value) {
  let error = "";
  if (!value) {
    error = "Enter a Slack Channel Name for sending message.";
  } else if (value.match(/[ .,]+/)) {
    error = "Enter a valid channel name, cannot use space, dot and camma.";
  }
  return error;
}

/**
 * Validate channel, and upadte UI state.
 * @returns {boolean} Returns true if valid, false otherwise.
 */
export function validateSlackChannelName() {
  const values = getFormValues();
  const error = validateSlackChannelNameValue(values[DomIdList.channel]);
  const input = document.getElementById(DomIdList.channel);
  if (error) {
    input.classList.add("is-invalid");
  } else {
    input.classList.remove("is-invalid");
  }

  const feedBack = document.getElementById(DomIdList.channelFeedback);
  feedBack.textContent = error;

  return error === "";
}

/**
 * Validate Button UIs.
 */
export function validateButtons() {
  const values = getFormValues();
  const isValid =
    validateSlackWebhookUrlValue(values[DomIdList.webhookUrl]) === "" &&
    validateSlackChannelNameValue(values[DomIdList.channel]) === "";

  const testButton = document.getElementById(DomIdList.testButton);
  testButton.disabled = !isValid;

  const saveButton = document.getElementById(DomIdList.saveButton);
  saveButton.disabled = !isValid;
}

/**
 * construct options js.
 */
export function constructOptions() {
  const webhookInput = document.getElementById(DomIdList.webhookUrl);
  if (webhookInput) {
    webhookInput.addEventListener("blur", () => {
      validateSlackWebhookUrl();
      validateButtons();
    });
  }

  const channelInput = document.getElementById(DomIdList.channel);
  if (channelInput) {
    channelInput.addEventListener("blur", () => {
      validateSlackChannelName();
      validateButtons();
    });
  }

  const testButton = document.getElementById(DomIdList.testButton);
  if (testButton) {
    testButton.addEventListener("click", () => {
      const isValid = validateForm();
      if (!isValid) {
        return;
      }

      // TODO: send to slack
      console.log(
        "send to slack",
        "test message from Cursored to Slack Chrome Extension."
      );
    });
  }

  const saveButon = document.getElementById(DomIdList.saveButton);
  if (saveButon) {
    saveButon.addEventListener("click", () => {
      const isValid = validateForm();
      if (!isValid) {
        return;
      }

      // TODO: send to slack
      console.log(
        "send to slack",
        "message from Cursored to Slack Chrome Extension."
      );
    });
  }

  // initial check.
  validateButtons();
}

const isCalledChrome =
  typeof RUNNING_ON_CHROME !== "undefined" && RUNNING_ON_CHROME;
if (isCalledChrome) {
  constructOptions();
}

// sample:
// let page = document.getElementById('buttonDiv');
// const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
//
// function constructOptions(kButtonColors) {
//     for (let item of kButtonColors) {
//         let button = document.createElement('button');
//         button.style.backgroundColor = item;
//         button.addEventListener('click', function () {
//             chrome.storage.sync.set({color: item}, function () {
//                 console.log('color is ' + item);
//             })
//         });
//         page.appendChild(button);
//     }
// }
//
// constructOptions(kButtonColors);
