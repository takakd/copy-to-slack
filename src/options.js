import CursoredToSlack from "./cursoredtoslack";
import CursoredToSlackOption from "./cursoredtoslack-option";

export const Const = {
  domId: {
    form: "optionForm",
    webhookUrl: "slackWebhookUrlInput",
    testButton: "testButton",
    saveButton: "saveButton",
    testButtonLabel: "testButtonLabel",
    saveButtonLabel: "saveButtonLabel",
    webhookFeedback: "slackWebhookUrlInvalidFeedback",
    webhookMaskButton: "toggleWebhoookUrlMaskButton",
    webhookIconMask: "toggleWebhoookUrlMaskButtonMask",
    webhookIconUnMask: "toggleWebhoookUrlMaskButtonUnMask",
    alert: "alertMessage",
    alertTemplate: "alertMessageTemplate",
  },
  label: {
    save: "Save",
    saving: "Saving...",
    saveSuccess: "Saved.",
    test: "Test",
    testing: "Sending...",
    testSuccess: "Sent. Check Slack channel.",
    testFailed: "Failed to send a test message.",
  },
  uiStateChangeIntervalInSec: 1,
};

/**
 * Get form values.
 * @returns CursoredToSlackOption
 */
export function getOptionFromForm() {
  const webhookUrlInput = document.getElementById(Const.domId.webhookUrl);

  const option = new CursoredToSlackOption();
  option.webhookUrl = webhookUrlInput.value;

  return option;
}

/**
 * Validate Form, update UI state.
 * @returns {boolean} Returns true if valid, false otherwise.
 */
export function validateForm() {
  const validUrl = validateSlackWebhookUrl();
  validateButtons();
  return validUrl;
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
  } else if (!value.match(/^https:\/\/[\w!?/+\-_~=;.,*&@#$%()'[\]]+/)) {
    error = "Enter a correct URL.";
  }
  return error;
}

/**
 * Validate webhook url, and update UI state.
 * @returns {boolean} Returns true if valid, false otherwise.
 */
export function validateSlackWebhookUrl() {
  const option = getOptionFromForm();
  const errors = option.validate();
  const input = document.getElementById(Const.domId.webhookUrl);
  if (errors["webhookUrl"]) {
    input.classList.add("is-invalid");
  } else {
    input.classList.remove("is-invalid");
  }

  if (errors["webhookUrl"]) {
    const feedBack = document.getElementById(Const.domId.webhookFeedback);
    feedBack.textContent = errors["webhookUrl"];
  }

  return typeof errors["webhookUrl"] === "undefined";
}

/**
 * Validate Button UIs.
 */
export function validateButtons() {
  const option = getOptionFromForm();
  const errors = option.validate();
  const isValid = typeof errors["webhookUrl"] === "undefined";

  setButtonUiState(
    Const.domId.testButton,
    Const.domId.testButtonLabelst,
    isValid ? 2 : 1,
    ""
  );
  setButtonUiState(
    Const.domId.saveButton,
    Const.domId.saveButtonLabele,
    isValid ? 2 : 1,
    ""
  );
}

/**
 * Set a button UI sate.
 * @param {string} buttonId UI id.
 * @param {string} labelId UI id.
 * @param {number} state 1:disabled 2:enabled 3:running 4:error
 * @param {string} label Button label.
 */
export function setButtonUiState(buttonId, labelId, state, label) {
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
export function maskWebhookUrlInputValue(isMask) {
  const input = document.getElementById(Const.domId.webhookUrl);
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
export function toggleWebhookUrlInputMask() {
  const maskIcon = document.getElementById(Const.domId.webhookIconMask);
  const isMaskNext = maskIcon.classList.contains("d-none");
  maskWebhookUrlInputValue(isMaskNext);
}

/**
 * Show alert.
 * @param {boolean} isShow Show the alert if it's true, hide otherwise.
 * @param {boolean} isError Show the danger alert if it's true, success otherwise.
 * @param {string} message Alert message.
 * @param {string} additionMessage Alert addition message.
 */
export function showAlertMessage(isShow, isError, message, additionMessage) {
  if (isShow) {
    const template = document.getElementById(Const.domId.alertTemplate);
    const alertBlock = template.cloneNode(true);
    const alert = alertBlock.getElementsByClassName("alert");
    const alertMessage = alert[0].getElementsByClassName("alertMessage");
    const alertAdditionMessage = alert[0].getElementsByClassName(
      "alertAdditionMessage"
    );
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
export function constructOptions() {
  const webhookInput = document.getElementById(Const.domId.webhookUrl);
  if (webhookInput) {
    webhookInput.addEventListener("blur", () => {
      validateSlackWebhookUrl();
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

      setButtonUiState(
        Const.domId.testButton,
        Const.domId.testButtonLabel,
        3,
        Const.label.testing
      );
      setTimeout(async () => {
        const cts = new CursoredToSlack(chrome);
        const result = await cts
          .sendRequestToSlackApi("test message.")
          .catch((error) => error);

        const isError = result instanceof Error;
        if (isError) {
          showAlertMessage(true, isError, Const.label.testFailed, result.stack);
        } else {
          showAlertMessage(true, isError, Const.label.testSuccess);
        }

        setButtonUiState(
          Const.domId.testButton,
          Const.domId.testButtonLabel,
          2,
          Const.label.test
        );
      }, Const.uiStateChangeIntervalInSec * 1000);
    });
  }

  const form = document.getElementById(Const.domId.form);
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const isValid = validateForm();
      if (!isValid) {
        return;
      }

      showAlertMessage(false);

      setButtonUiState(
        Const.domId.saveButton,
        Const.domId.saveButtonLabel,
        3,
        Const.label.saving
      );
      setTimeout(() => {
        const cts = new CursoredToSlack(chrome);
        const option = getOptionFromForm();
        cts.setOptions(option).then(() => {
          console.log("done: save", option);

          showAlertMessage(true, false, Const.label.saveSuccess);

          setButtonUiState(
            Const.domId.saveButton,
            Const.domId.saveButtonLabel,
            2,
            Const.label.save
          );
        });
      }, Const.uiStateChangeIntervalInSec * 1000);
    });
  }

  const maskButton = document.getElementById(Const.domId.webhookMaskButton);
  if (maskButton) {
    maskButton.addEventListener("click", () => {
      toggleWebhookUrlInputMask();
    });
  }

  // initialize.
  const cts = new CursoredToSlack(chrome);
  cts.getOptions().then((options) => {
    const isValid = validateSlackWebhookUrlValue(options.webhookUrl) === "";
    if (isValid) {
      document.getElementById(Const.domId.webhookUrl).value =
        options.webhookUrl;
    }
    validateButtons();

    maskWebhookUrlInputValue(true);
  });
}

const isCalledChrome =
  typeof RUNNING_ON_CHROME !== "undefined" && RUNNING_ON_CHROME;
if (isCalledChrome) {
  constructOptions();
}
