import {
  Const,
  getOptionFromForm,
  maskwebhookPathInputValue,
  removeSlackHostPathFromSlackwebhookPath,
  setButtonUiState,
  showAlertMessage,
  togglewebhookPathInputMask,
  validateButtons,
  validateForm,
  validateSlackwebhookPath,
} from "./options";

/**
 * @see {@link https://jestjs.io/docs/en/tutorial-jquery}
 */
const setMockHtml = (document) => {
  document.body.innerHTML = `
  <form id="optionForm" class="mt-4">
    <div class="form-group">
      <label for="slackWebhookPathInput">Slack Webhook URL</label>
      <div>
        <button id="toggleWebhookPathMaskButton" type="button">
          <span id="toggleWebhookPathMaskButtonUnMask" class="togglewebhookPathMaskIcon d-none">&#x1f649;</span>
          <span id="toggleWebhookPathMaskButtonMask" class="togglewebhookPathMaskIcon">&#x1f648;</span>
        </button>
        <input type="password" class="form-control" id="slackWebhookPathInput" aria-describedby="slackWebhookHelp">
        <div class="valid-feedback">
          OK.
        </div>
        <div class="invalid-feedback" id="slackWebhookPathInvalidFeedback">
          Please provide Slack Webhook URL.
        </div>
      </div>
      <small id="slackWebhookHelp" class="form-text text-muted">Provide Slack Webhook URL of your Slack team. <a href="https://api.slack.com/messaging/webhooks" target="_blank">Here to get it.</a></small>
    </div>

    <div class="button-group mt-4">
      <button id="testButton" type="button" class="btn btn-outline-secondary ld-ext-right mr-2">
        <span id="testButtonLabel">Test</span>
        <div class="ld ld-ring ld-spin"></div>
      </button>
      <button id="saveButton" type="submit" class="btn btn-primary ld-ext-right">
        <span id="saveButtonLabel">Save</span>
        <div class="ld ld-ring ld-spin"></div>
      </button>
    </div>
  </form>

  <div id="alertMessageTemplate" style="display:none;">
    <div class="alert mt-4 alert-dismissible fade show" role="alert">
      <span class="alertMessage">Failed to send a test message.</span>
      <small class="alertAdditionMessage d-block mt-2"></small>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
    `;
  return document;
};
describe("options", () => {
  test("getOptionFromForm", () => {
    setMockHtml(document);
    document.getElementById(Const.domId.webhookPath).value =
      "HZ54X/B01KE0V/Z251nBgwCPG";

    const got = getOptionFromForm();
    expect(got.webhookPath).toBe("HZ54X/B01KE0V/Z251nBgwCPG");
  });

  test("validateForm", () => {
    setMockHtml(document);
    document.getElementById(Const.domId.webhookPath).value =
      "HZ54X/B01KE0V/Z251nBgwCPG";
    let isValid = validateForm();
    expect(true).toBe(isValid);
    expect(false).toBe(
      document
        .getElementById(Const.domId.webhookPath)
        .classList.contains("is-invalid")
    );
    expect(false).toBe(
      document
        .getElementById(Const.domId.webhookPath)
        .classList.contains("is-invalid")
    );

    setMockHtml(document);
    document.getElementById(Const.domId.webhookPath).value = "";
    isValid = validateForm();
    expect(false).toBe(isValid);
    expect(true).toBe(
      document
        .getElementById(Const.domId.webhookPath)
        .classList.contains("is-invalid")
    );
    expect(true).toBe(
      document
        .getElementById(Const.domId.webhookPath)
        .classList.contains("is-invalid")
    );
  });

  test("validateSlackwebhookPath", () => {
    setMockHtml(document);
    document.getElementById(Const.domId.webhookPath).value =
      "HZ54X/B01KE0V/Z251nBgwCPG";
    let isValid = validateSlackwebhookPath();
    expect(true).toBe(isValid);
    expect(false).toBe(
      document
        .getElementById(Const.domId.webhookPath)
        .classList.contains("is-invalid")
    );

    setMockHtml(document);
    document.getElementById(Const.domId.webhookPath).value = "";
    isValid = validateForm();
    expect(false).toBe(isValid);
    expect(true).toBe(
      document
        .getElementById(Const.domId.webhookPath)
        .classList.contains("is-invalid")
    );
  });

  test("validateButtons", () => {
    setMockHtml(document);

    document.getElementById(Const.domId.webhookPath).value =
      "HZ54X/B01KE0V/Z251nBgwCPG";
    validateButtons();
    expect(document.getElementById(Const.domId.testButton).disabled).toBe(
      false
    );
    expect(document.getElementById(Const.domId.saveButton).disabled).toBe(
      false
    );

    document.getElementById(Const.domId.webhookPath).value = "";
    validateButtons();
    expect(document.getElementById(Const.domId.testButton).disabled).toBe(true);
    expect(document.getElementById(Const.domId.saveButton).disabled).toBe(true);
  });

  test("setButtonUiState", () => {
    setMockHtml(document);

    setButtonUiState(
      Const.domId.saveButton,
      Const.domId.saveButtonLabel,
      1,
      "Save"
    );
    expect(document.getElementById(Const.domId.saveButton).disabled).toBe(true);

    setButtonUiState(
      Const.domId.saveButton,
      Const.domId.saveButtonLabel,
      2,
      "Save"
    );
    expect(document.getElementById(Const.domId.saveButton).disabled).toBe(
      false
    );

    setButtonUiState(
      Const.domId.saveButton,
      Const.domId.saveButtonLabel,
      3,
      "Save"
    );
    expect(
      document
        .getElementById(Const.domId.saveButton)
        .classList.contains("running")
    ).toBe(true);

    setButtonUiState(
      Const.domId.saveButton,
      Const.domId.saveButtonLabel,
      1,
      "Done"
    );
    expect(
      document.getElementById(Const.domId.saveButtonLabel).textContent
    ).toBe("Done");
  });

  test("maskwebhookPathInputValue", () => {
    setMockHtml(document);
    let mask, Unmask, input;

    maskwebhookPathInputValue(true);
    mask = document.getElementById(Const.domId.webhookIconMask);
    Unmask = document.getElementById(Const.domId.webhookIconUnMask);
    input = document.getElementById(Const.domId.webhookPath);
    expect(mask.classList.contains("d-none")).toBe(false);
    expect(Unmask.classList.contains("d-none")).toBe(true);
    expect(input.getAttribute("type")).toBe("password");

    maskwebhookPathInputValue(false);
    mask = document.getElementById(Const.domId.webhookIconMask);
    Unmask = document.getElementById(Const.domId.webhookIconUnMask);
    input = document.getElementById(Const.domId.webhookPath);
    expect(mask.classList.contains("d-none")).toBe(true);
    expect(Unmask.classList.contains("d-none")).toBe(false);
    expect(input.getAttribute("type")).toBe("text");
  });

  test("togglewebhookPathInputMask", () => {
    setMockHtml(document);
    let mask, Unmask, input;

    // set initial state.
    maskwebhookPathInputValue(true);

    // to unmask.
    togglewebhookPathInputMask();
    mask = document.getElementById(Const.domId.webhookIconMask);
    Unmask = document.getElementById(Const.domId.webhookIconUnMask);
    input = document.getElementById(Const.domId.webhookPath);
    expect(mask.classList.contains("d-none")).toBe(true);
    expect(Unmask.classList.contains("d-none")).toBe(false);
    expect(input.getAttribute("type")).toBe("text");

    // to mask.
    togglewebhookPathInputMask();
    mask = document.getElementById(Const.domId.webhookIconMask);
    Unmask = document.getElementById(Const.domId.webhookIconUnMask);
    input = document.getElementById(Const.domId.webhookPath);
    expect(mask.classList.contains("d-none")).toBe(false);
    expect(Unmask.classList.contains("d-none")).toBe(true);
    expect(input.getAttribute("type")).toBe("password");
  });

  test("showAlertMessage", () => {
    setMockHtml(document);
    let alert, message, addition;

    showAlertMessage(true, true, "message", "addition");
    alert = document.getElementById(Const.domId.alert);
    expect(alert).not.toBeNull();
    if (alert) {
      message = alert.getElementsByClassName("alertMessage");
      addition = alert.getElementsByClassName("alertAdditionMessage");
      expect(alert.classList.contains("alert-danger")).toBe(true);
      expect(message[0].textContent).toBe("message");
      expect(addition[0].textContent).toBe("addition");
    }

    showAlertMessage(false);
    alert = document.getElementById(Const.domId.alert);
    expect(alert).toBeNull();

    showAlertMessage(true, true, "message", "");
    alert = document.getElementById(Const.domId.alert);
    expect(alert).not.toBeNull();
    if (alert) {
      message = alert.getElementsByClassName("alertMessage");
      addition = alert.getElementsByClassName("alertAdditionMessage");
      expect(alert.classList.contains("alert-danger")).toBe(true);
      expect(message[0].textContent).toBe("message");
      expect(addition.length).toBe(0);
    }
    showAlertMessage(false);

    showAlertMessage(true, true, "", "");
    alert = document.getElementById(Const.domId.alert);
    expect(alert).not.toBeNull();
    if (alert) {
      message = alert.getElementsByClassName("alertMessage");
      addition = alert.getElementsByClassName("alertAdditionMessage");
      expect(alert.classList.contains("alert-danger")).toBe(true);
      expect(message[0].textContent).toBe("");
      expect(addition.length).toBe(0);
    }
    showAlertMessage(false);

    // showAlertMessage(true, false, 'message', 'addition');
    // showAlertMessage(false, false, 'message', 'addition');

    showAlertMessage(true, false, "message", "addition");
    alert = document.getElementById(Const.domId.alert);
    expect(alert).not.toBeNull();
    if (alert) {
      message = alert.getElementsByClassName("alertMessage");
      addition = alert.getElementsByClassName("alertAdditionMessage");
      expect(alert.classList.contains("alert-success")).toBe(true);
      expect(message[0].textContent).toBe("message");
      expect(addition[0].textContent).toBe("addition");
    }
  });

  test("removeSlackHostPathFromSlackwebhookPath", () => {
    setMockHtml(document);

    const input = document.getElementById(Const.domId.webhookPath);
    input.value = "https://hooks.slack.com/services/abc/edf";
    removeSlackHostPathFromSlackwebhookPath();
    expect(input.value).toBe("abc/edf");

    input.value = "https://localhost/test";
    removeSlackHostPathFromSlackwebhookPath();
    expect(input.value).toBe("https://localhost/test");
  });
});
