import {
  Const,
  getOptionFromForm,
  maskWebhookUrlInputValue,
  setButtonUiState,
  toggleWebhookUrlInputMask,
  validateButtons,
  validateForm,
  validateSlackWebhookUrl,
  validateSlackWebhookUrlValue,
} from "./options";

/**
 * @see {@link https://jestjs.io/docs/en/tutorial-jquery}
 */
const setMockHtml = (document) => {
  document.body.innerHTML = `
    <form class="mt-4">
        <div class="form-group">
            <label for="slackWebhookUrlInput">Slack Webhook URL</label>
            <div>
              <button id="toggleWebhoookUrlMaskButton" type="button">
                <span id="toggleWebhoookUrlMaskButtonUnMask" class="toggleWebhookUrlMaskIcon toggleWebhookUrlMaskIcon-hide">&#x1f649;</span>
                <span id="toggleWebhoookUrlMaskButtonMask" class="toggleWebhookUrlMaskIcon">&#x1f648;</span>
              </button>            
              <input type="password" class="form-control" id="slackWebhookUrlInput" aria-describedby="slackWebhookHelp">
              <div class="valid-feedback">
                  OK.
              </div>
              <div class="invalid-feedback" id="slackWebhookUrlInvalidFeedback">
                  Please provide Slack Webhook URL.
              </div>
            </div>
            <small id="slackWebhookHelp" class="form-text text-muted">Input Slack Webhook URL of Slack team.</small>
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
    `;
  return document;
};
describe("options", () => {
  test("getOptionFromForm", () => {
    setMockHtml(document);
    document.getElementById(Const.domId.webhookUrl).value = "https://localhost";

    const got = getOptionFromForm();
    expect(got.webhookUrl).toBe("https://localhost");
  });

  test("validateForm", () => {
    setMockHtml(document);
    document.getElementById(Const.domId.webhookUrl).value = "https://localhost";
    let isValid = validateForm();
    expect(true).toBe(isValid);
    expect(false).toBe(
      document
        .getElementById(Const.domId.webhookUrl)
        .classList.contains("is-invalid")
    );
    expect(false).toBe(
      document
        .getElementById(Const.domId.webhookUrl)
        .classList.contains("is-invalid")
    );

    setMockHtml(document);
    document.getElementById(Const.domId.webhookUrl).value = "";
    isValid = validateForm();
    expect(false).toBe(isValid);
    expect(true).toBe(
      document
        .getElementById(Const.domId.webhookUrl)
        .classList.contains("is-invalid")
    );
    expect(true).toBe(
      document
        .getElementById(Const.domId.webhookUrl)
        .classList.contains("is-invalid")
    );
  });

  test("validateSlackWebhookUrlValue", () => {
    expect(validateSlackWebhookUrlValue("https://localhost")).toBe("");
    expect(validateSlackWebhookUrlValue("http://localhost")).not.toBe("");
    expect(validateSlackWebhookUrlValue("test")).not.toBe("");
    expect(validateSlackWebhookUrlValue("")).not.toBe("");
  });

  test("validateSlackWebhookUrl", () => {
    setMockHtml(document);
    document.getElementById(Const.domId.webhookUrl).value = "https://localhost";
    let isValid = validateSlackWebhookUrl();
    expect(true).toBe(isValid);
    expect(false).toBe(
      document
        .getElementById(Const.domId.webhookUrl)
        .classList.contains("is-invalid")
    );

    setMockHtml(document);
    document.getElementById(Const.domId.webhookUrl).value = "";
    isValid = validateForm();
    expect(false).toBe(isValid);
    expect(true).toBe(
      document
        .getElementById(Const.domId.webhookUrl)
        .classList.contains("is-invalid")
    );
  });

  test("validateButtons", () => {
    setMockHtml(document);

    document.getElementById(Const.domId.webhookUrl).value = "https://localhost";
    validateButtons();
    expect(document.getElementById(Const.domId.testButton).disabled).toBe(
      false
    );
    expect(document.getElementById(Const.domId.saveButton).disabled).toBe(
      false
    );

    document.getElementById(Const.domId.webhookUrl).value = "";
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

  test("maskWebhookUrlInputValue", () => {
    setMockHtml(document);
    let mask, Unmask, input;

    maskWebhookUrlInputValue(true);
    mask = document.getElementById(Const.domId.webhookIconMask);
    Unmask = document.getElementById(Const.domId.webhookIconUnMask);
    input = document.getElementById(Const.domId.webhookUrl);
    expect(mask.classList.contains(Const.class.hideWebhookMaskIcon)).toBe(
      false
    );
    expect(Unmask.classList.contains(Const.class.hideWebhookMaskIcon)).toBe(
      true
    );
    expect(input.getAttribute("type")).toBe("password");

    maskWebhookUrlInputValue(false);
    mask = document.getElementById(Const.domId.webhookIconMask);
    Unmask = document.getElementById(Const.domId.webhookIconUnMask);
    input = document.getElementById(Const.domId.webhookUrl);
    expect(mask.classList.contains(Const.class.hideWebhookMaskIcon)).toBe(true);
    expect(Unmask.classList.contains(Const.class.hideWebhookMaskIcon)).toBe(
      false
    );
    expect(input.getAttribute("type")).toBe("text");
  });

  test("toggleWebhookUrlInputMask", () => {
    setMockHtml(document);
    let mask, Unmask, input;

    // set initial state.
    maskWebhookUrlInputValue(true);

    // to unmask.
    toggleWebhookUrlInputMask();
    mask = document.getElementById(Const.domId.webhookIconMask);
    Unmask = document.getElementById(Const.domId.webhookIconUnMask);
    input = document.getElementById(Const.domId.webhookUrl);
    expect(mask.classList.contains(Const.class.hideWebhookMaskIcon)).toBe(true);
    expect(Unmask.classList.contains(Const.class.hideWebhookMaskIcon)).toBe(
      false
    );
    expect(input.getAttribute("type")).toBe("text");

    // to mask.
    toggleWebhookUrlInputMask();
    mask = document.getElementById(Const.domId.webhookIconMask);
    Unmask = document.getElementById(Const.domId.webhookIconUnMask);
    input = document.getElementById(Const.domId.webhookUrl);
    expect(mask.classList.contains(Const.class.hideWebhookMaskIcon)).toBe(
      false
    );
    expect(Unmask.classList.contains(Const.class.hideWebhookMaskIcon)).toBe(
      true
    );
    expect(input.getAttribute("type")).toBe("password");
  });
});
