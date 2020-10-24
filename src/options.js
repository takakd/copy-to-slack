import $ from "jquery";
import "bootstrap";
import CursoredToSlack from "./copytoslack";
import {
  CursoredToSlackOption,
  SlackWebhookCommonHostPath,
} from "./copytoslack-option";

export const Const = {
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
    alertTemplate: "alertMessageTemplate",
  },
  label: {
    save: "Save",
    saving: "Saving...",
    saveSuccess: "Saved.",
    test: "Test",
    testing: "Sending...",
    testSuccess: "Sent.",
    testSuccessAddition: "Check Slack channel.",
    testFailed: "Failed to send a test message.",
  },
  uiStateChangeIntervalInSec: 1,
};

/**
 * Get form values.
 * @returns CursoredToSlackOption
 */
export function getOptionFromForm() {
  const option = new CursoredToSlackOption();
  option.webhookPath = $(`#${Const.domId.webhookPath}`).val();
  return option;
}

/**
 * Validate Form, update UI state.
 * @returns {boolean} Returns true if valid, false otherwise.
 */
export function validateForm() {
  const validUrl = validateSlackwebhookPath();
  validateButtons();
  return validUrl;
}

/**
 * Remove host and common path from URL.
 * @params {string} value.
 * @returns {string} Returns Removed URL.
 */
export function removeSlackHostPathFromSlackwebhookPath() {
  const $input = $(`#${Const.domId.webhookPath}`);
  const value = $input.val();
  if (value) {
    const replaced = value.replace(SlackWebhookCommonHostPath, "");
    if (replaced) {
      $input.val(replaced);
    }
  }
}

/**
 * Validate webhook url, and update UI state.
 * @returns {boolean} Returns true if valid, false otherwise.
 */
export function validateSlackwebhookPath() {
  const option = getOptionFromForm();
  const errors = option.validate();
  const $input = $(`#${Const.domId.webhookPath}`);
  if (errors.webhookPath) {
    $input.addClass("is-invalid");
  } else {
    $input.removeClass("is-invalid");
  }

  if (errors.webhookPath) {
    const $feedBack = $(`#${Const.domId.webhookFeedback}`);
    $feedBack.text(errors.webhookPath);
  }

  return typeof errors.webhookPath === "undefined";
}

/**
 * Validate Button UIs.
 */
export function validateButtons() {
  const option = getOptionFromForm();
  const errors = option.validate();
  const isValid = typeof errors.webhookPath === "undefined";

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
  const $button = $(`#${buttonId}`);
  const $buttonLabel = $(`#${labelId}`);
  if ($buttonLabel.length) {
    $buttonLabel.text(label);
  }
  if (state === 1) {
    $button.removeClass("running").prop("disabled", true);
  } else if (state === 2) {
    $button.removeClass("running").prop("disabled", false);
  } else if (state === 3) {
    $button.addClass("running").prop("disabled", false);
  }
}

/**
 * Change Webhook URL Mask Icon visible state.
 * @param {boolean} isMask Mask URL if it's true, Unmask otherwise.
 */
export function maskwebhookPathInputValue(isMask) {
  const $input = $(`#${Const.domId.webhookPath}`);
  const $iconMask = $(`#${Const.domId.webhookIconMask}`);
  const $iconUnMask = $(`#${Const.domId.webhookIconUnMask}`);
  if (isMask) {
    $input.attr("type", "password");
    $iconMask.removeClass("d-none");
    $iconUnMask.addClass("d-none");
  } else {
    $input.attr("type", "text");
    $iconMask.addClass("d-none");
    $iconUnMask.removeClass("d-none");
  }
}

/**
 * Toggle Webhook URL Mask Icon visible state.
 */
export function togglewebhookPathInputMask() {
  const isMaskNext = $(`#${Const.domId.webhookIconMask}`).hasClass("d-none");
  maskwebhookPathInputValue(isMaskNext);
}

/**
 * Show alert.
 * @param {boolean} isShow Show the alert if it's true, hide otherwise.
 * @param {boolean} isError Show the danger alert if it's true, success otherwise.
 * @param {string} message Alert message.
 * @param {string} additionMessage Alert addition message.
 */
export function showAlertMessage(isShow, isError, message, additionMessage) {
  if (!isShow) {
    $(`#${Const.domId.alert}`).remove();
  } else {
    const $template = $(`#${Const.domId.alertTemplate}`);
    const $alertBlock = $template.clone(true);
    const $alert = $(".alert", $alertBlock);
    const $alertMessage = $(".alertMessage", $alert);
    const $alertAdditionMessage = $(".alertAdditionMessage", $alert);
    $alert
      .attr("id", Const.domId.alert)
      .addClass(isError ? "alert-danger" : "alert-success");
    $alertMessage.text(message);
    if (additionMessage) {
      $alertAdditionMessage.text(additionMessage);
    } else {
      $alertAdditionMessage.remove();
    }
    $template.before($alert);
  }
}

/**
 * construct options js.
 */
export function constructOptions() {
  $(`#${Const.domId.webhookPath}`).on("blur", () => {
    removeSlackHostPathFromSlackwebhookPath();
    validateSlackwebhookPath();
    validateButtons();
  });

  $(`#${Const.domId.testButton}`).on("click", () => {
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
      const option = getOptionFromForm();
      const result = await cts
        .sendRequestToSlackApi("test message.", option.webhookUrl)
        .catch((error) => error);

      const isError = result instanceof Error;
      if (isError) {
        showAlertMessage(true, isError, Const.label.testFailed, result.stack);
      } else {
        showAlertMessage(
          true,
          isError,
          Const.label.testSuccess,
          Const.label.testSuccessAddition
        );
      }

      setButtonUiState(
        Const.domId.testButton,
        Const.domId.testButtonLabel,
        2,
        Const.label.test
      );
    }, Const.uiStateChangeIntervalInSec * 1000);
  });

  $(`#${Const.domId.form}`).on("submit", () => {
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

  $(`#${Const.domId.webhookMaskButton}`).on("click", () => {
    togglewebhookPathInputMask();
  });

  // initialize.
  const cts = new CursoredToSlack(chrome);
  cts.getOptions().then((options) => {
    const isValid = Object.keys(options.validate()).length === 0;
    if (isValid) {
      $(`#${Const.domId.webhookPath}`).val(options.webhookPath);
    }
    validateButtons();

    maskwebhookPathInputValue(true);
  });
}

const isCalledChrome =
  typeof RUNNING_ON_CHROME !== "undefined" && RUNNING_ON_CHROME;
if (isCalledChrome) {
  constructOptions();
}
