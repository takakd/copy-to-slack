import $ from "jquery";
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
    $(`#${Const.domId.webhookPath}`).val("HZ54X/B01KE0V/Z251nBgwCPG");

    const got = getOptionFromForm();
    expect(got.webhookPath).toBe("HZ54X/B01KE0V/Z251nBgwCPG");
  });

  test("validateForm", () => {
    setMockHtml(document);
    $(`#${Const.domId.webhookPath}`).val("HZ54X/B01KE0V/Z251nBgwCPG");
    let isValid = validateForm();
    expect(true).toBe(isValid);
    expect(false).toBe($(`#${Const.domId.webhookPath}`).hasClass("is-invalid"));

    setMockHtml(document);
    $(`#${Const.domId.webhookPath}`).val("");
    isValid = validateForm();
    expect(false).toBe(isValid);
    expect(true).toBe($(`#${Const.domId.webhookPath}`).hasClass("is-invalid"));
  });

  test("validateSlackwebhookPath", () => {
    setMockHtml(document);
    $(`#${Const.domId.webhookPath}`).val("HZ54X/B01KE0V/Z251nBgwCPG");
    let isValid = validateSlackwebhookPath();
    expect(true).toBe(isValid);
    expect(false).toBe($(`#${Const.domId.webhookPath}`).hasClass("is-invalid"));

    setMockHtml(document);
    $(`#${Const.domId.webhookPath}`).val("");
    isValid = validateForm();
    expect(false).toBe(isValid);
    expect(true).toBe($(`#${Const.domId.webhookPath}`).hasClass("is-invalid"));
  });

  test("validateButtons", () => {
    setMockHtml(document);
    $(`#${Const.domId.webhookPath}`).val("HZ54X/B01KE0V/Z251nBgwCPG");
    validateButtons();
    expect($(`#${Const.domId.testButton}`).prop("disabled")).toBe(false);
    expect($(`#${Const.domId.saveButton}`).prop("disabled")).toBe(false);

    $(`#${Const.domId.webhookPath}`).val("");
    validateButtons();
    expect($(`#${Const.domId.testButton}`).prop("disabled")).toBe(true);
    expect($(`#${Const.domId.saveButton}`).prop("disabled")).toBe(true);
  });

  test("setButtonUiState", () => {
    setMockHtml(document);

    setButtonUiState(
      Const.domId.saveButton,
      Const.domId.saveButtonLabel,
      1,
      "Save"
    );
    expect($(`#${Const.domId.saveButton}`).prop("disabled")).toBe(true);

    setButtonUiState(
      Const.domId.saveButton,
      Const.domId.saveButtonLabel,
      2,
      "Save"
    );
    expect($(`#${Const.domId.saveButton}`).prop("disabled")).toBe(false);

    setButtonUiState(
      Const.domId.saveButton,
      Const.domId.saveButtonLabel,
      3,
      "Save"
    );
    expect($(`#${Const.domId.saveButton}`).hasClass("running")).toBe(true);

    setButtonUiState(
      Const.domId.saveButton,
      Const.domId.saveButtonLabel,
      1,
      "Done"
    );
    expect($(`#${Const.domId.saveButtonLabel}`).text()).toBe("Done");
  });

  test("maskwebhookPathInputValue", () => {
    setMockHtml(document);

    maskwebhookPathInputValue(true);
    expect($(`#${Const.domId.webhookIconMask}`).hasClass("d-none")).toBe(false);
    expect($(`#${Const.domId.webhookIconUnMask}`).hasClass("d-none")).toBe(
      true
    );
    expect($(`#${Const.domId.webhookPath}`).attr("type")).toBe("password");

    maskwebhookPathInputValue(false);
    expect($(`#${Const.domId.webhookIconMask}`).hasClass("d-none")).toBe(true);
    expect($(`#${Const.domId.webhookIconUnMask}`).hasClass("d-none")).toBe(
      false
    );
    expect($(`#${Const.domId.webhookPath}`).attr("type")).toBe("text");
  });

  test("togglewebhookPathInputMask", () => {
    setMockHtml(document);

    // set initial state.
    maskwebhookPathInputValue(true);

    // to unmask.
    togglewebhookPathInputMask();
    expect($(`#${Const.domId.webhookIconMask}`).hasClass("d-none")).toBe(true);
    expect($(`#${Const.domId.webhookIconUnMask}`).hasClass("d-none")).toBe(
      false
    );
    expect($(`#${Const.domId.webhookPath}`).attr("type")).toBe("text");

    // to mask.
    togglewebhookPathInputMask();
    expect($(`#${Const.domId.webhookIconMask}`).hasClass("d-none")).toBe(false);
    expect($(`#${Const.domId.webhookIconUnMask}`).hasClass("d-none")).toBe(
      true
    );
    expect($(`#${Const.domId.webhookPath}`).attr("type")).toBe("password");
  });

  test("showAlertMessage", () => {
    setMockHtml(document);
    let $alert;

    showAlertMessage(true, true, "message", "addition");
    $alert = $(`#${Const.domId.alert}`);
    expect($alert.length).not.toBe(0);
    if ($alert.length) {
      expect($alert.hasClass("alert-danger")).toBe(true);
      expect($(".alertMessage", $alert).text()).toBe("message");
      expect($(".alertAdditionMessage", $alert).text()).toBe("addition");
    }

    showAlertMessage(false);
    $alert = $(`#${Const.domId.alert}`);
    expect($alert.length).toBe(0);

    showAlertMessage(true, true, "message", "");
    $alert = $(`#${Const.domId.alert}`);
    expect($alert.length).not.toBe(0);
    if ($alert.length) {
      expect($alert.hasClass("alert-danger")).toBe(true);
      expect($(".alertMessage", $alert).text()).toBe("message");
      expect($(".alertAdditionMessage", $alert).length).toBe(0);
    }
    showAlertMessage(false);

    showAlertMessage(true, true, "", "");
    $alert = $(`#${Const.domId.alert}`);
    expect($alert.length).not.toBe(0);
    if ($alert.length) {
      expect($alert.hasClass("alert-danger")).toBe(true);
      expect($(".alertMessage", $alert).text()).toBe("");
      expect($(".alertAdditionMessage", $alert).length).toBe(0);
    }
    showAlertMessage(false);

    // showAlertMessage(true, false, 'message', 'addition');
    // showAlertMessage(false, false, 'message', 'addition');

    showAlertMessage(true, false, "message", "addition");
    $alert = $(`#${Const.domId.alert}`);
    expect($alert.length).not.toBe(0);
    if ($alert.length) {
      expect($alert.hasClass("alert-success")).toBe(true);
      expect($(".alertMessage", $alert).text()).toBe("message");
      expect($(".alertAdditionMessage", $alert).text()).toBe("addition");
    }
  });

  test("removeSlackHostPathFromSlackwebhookPath", () => {
    setMockHtml(document);

    $(`#${Const.domId.webhookPath}`).val(
      "https://hooks.slack.com/services/abc/edf"
    );
    removeSlackHostPathFromSlackwebhookPath();
    expect($(`#${Const.domId.webhookPath}`).val()).toBe("abc/edf");

    $(`#${Const.domId.webhookPath}`).val("https://localhost/test");
    removeSlackHostPathFromSlackwebhookPath();
    expect($(`#${Const.domId.webhookPath}`).val()).toBe(
      "https://localhost/test"
    );
  });
});
