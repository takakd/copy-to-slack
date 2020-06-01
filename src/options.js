import CursoredToSlack from "./cursoredtoslack";

export const Const = {
  domId: {
    form: "optionForm",
    webhookUrl: "slackWebhookUrlInput",
    testButton: "testButton",
    saveButton: "saveButton",
    testButtonLabel: "testButtonLabel",
    saveButtonLabel: "saveButtonLabel",
    webhookFeedback: "slackWebhookUrlInvalidFeedback",
  },
  label: {
    save: "Save",
    saving: "Saving",
    test: "Test",
    testing: "Sending",
  },
  uiStateChangeIntervalInSec: 1,
};

/**
 * Get form values.
 * @returns Errors if exists.
 */
export function getFormValues() {
  const webhookUrlInput = document.getElementById(Const.domId.webhookUrl);

  const result = {};
  result[Const.domId.webhookUrl] = webhookUrlInput.value;
  return result;
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
  const values = getFormValues();
  const error = validateSlackWebhookUrlValue(values[Const.domId.webhookUrl]);
  const input = document.getElementById(Const.domId.webhookUrl);
  if (error) {
    input.classList.add("is-invalid");
  } else {
    input.classList.remove("is-invalid");
  }

  const feedBack = document.getElementById(Const.domId.webhookFeedback);
  feedBack.textContent = error;

  return error === "";
}

/**
 * Validate Button UIs.
 */
export function validateButtons() {
  const values = getFormValues();
  const isValid =
    validateSlackWebhookUrlValue(values[Const.domId.webhookUrl]) === "";
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
 * @param {number} state 1:disabled 2:enabled 3:running
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

      setButtonUiState(
        Const.domId.testButton,
        Const.domId.testButtonLabel,
        3,
        Const.label.testing
      );
      setTimeout(() => {
        // TODO: send to slack
        console.log(
          "send to slack",
          "test message from Cursored to Slack Chrome Extension."
        );

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

      setButtonUiState(
        Const.domId.saveButton,
        Const.domId.saveButtonLabel,
        3,
        Const.label.saving
      );
      setTimeout(() => {
        const cts = new CursoredToSlack(chrome);
        const values = getFormValues();
        cts.setOptions(values).then(() => {
          console.log("done: save", values);
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

  // initialize.
  const cts = new CursoredToSlack(chrome);
  cts.getOptions().then((options) => {
    let isValid;

    isValid =
      validateSlackWebhookUrlValue(options[Const.domId.webhookUrl]) === "";
    if (isValid) {
      document.getElementById(Const.domId.webhookUrl).value =
        options[Const.domId.webhookUrl];
    }
    validateButtons();
  });
}

const isCalledChrome =
  typeof RUNNING_ON_CHROME !== "undefined" && RUNNING_ON_CHROME;
if (isCalledChrome) {
  constructOptions();
}
