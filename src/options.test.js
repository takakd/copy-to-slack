import {
  Const,
  getFormValues,
  setButtonUiState,
  validateButtons,
  validateForm,
  validateSlackChannelName,
  validateSlackChannelNameValue,
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
            <input type="url" class="form-control" id="slackWebhookUrlInput" aria-describedby="slackWebhookHelp">
            <small id="slackWebhookHelp" class="form-text text-muted">Input Slack Webhook URL of Slack team.</small>
            <div class="valid-feedback">
                OK.
            </div>
            <div class="invalid-feedback" id="slackWebhookUrlInvalidFeedback">
                Please provide Slack Webhook URL.
            </div>
        </div>
        <div class="form-group">
            <label for="slackCannelNameInput">Channel</label>
            <input type="input" class="form-control" id="slackCannelNameInput" aria-describedby="slackChannelHelp"
                   placeholder="If it's private, add '#', public is '@'">
            <small id="slackChannelHelp" class="form-text text-muted">Input Channel name to send message.</small>
            <div class="valid-feedback">
                OK.
            </div>
            <div class="invalid-feedback" id="slackCannelNameInvalidFeedback">
                Please provide Slack Channel name.
            </div>
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
  test("getFormValues", () => {
    setMockHtml(document);
    document.getElementById(Const.domId.webhookUrl).value = "https://localhost";
    document.getElementById(Const.domId.channel).value = "#webhook";

    const got = getFormValues();
    expect(got[Const.domId.webhookUrl]).toBe("https://localhost");
    expect(got[Const.domId.channel]).toBe("#webhook");
  });

  test("validateForm", () => {
    setMockHtml(document);
    document.getElementById(Const.domId.webhookUrl).value = "https://localhost";
    document.getElementById(Const.domId.channel).value = "#webhook";
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
    document.getElementById(Const.domId.channel).value = "";
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

  test("validateSlackChannelNameValue", () => {
    expect(validateSlackChannelNameValue("#channel")).toBe("");
    expect(validateSlackChannelNameValue("channel")).toBe("");
    expect(validateSlackChannelNameValue("チャンネル")).toBe("");
    expect(validateSlackChannelNameValue("chan nel")).not.toBe("");
    expect(validateSlackChannelNameValue("channel.")).not.toBe("");
    expect(validateSlackChannelNameValue("channel,")).not.toBe("");
  });

  test("validateSlackChannelName", () => {
    setMockHtml(document);
    document.getElementById(Const.domId.channel).value = "#webhook";
    let isValid = validateSlackChannelName();
    expect(true).toBe(isValid);
    expect(false).toBe(
      document
        .getElementById(Const.domId.channel)
        .classList.contains("is-invalid")
    );

    setMockHtml(document);
    document.getElementById(Const.domId.webhookUrl).value = "";
    isValid = validateForm();
    expect(false).toBe(isValid);
    expect(true).toBe(
      document
        .getElementById(Const.domId.channel)
        .classList.contains("is-invalid")
    );
  });

  test("validateButtons", () => {
    setMockHtml(document);

    document.getElementById(Const.domId.webhookUrl).value = "https://localhost";
    document.getElementById(Const.domId.channel).value = "#webhook";
    validateButtons();
    expect(document.getElementById(Const.domId.testButton).disabled).toBe(
      false
    );
    expect(document.getElementById(Const.domId.saveButton).disabled).toBe(
      false
    );

    document.getElementById(Const.domId.webhookUrl).value = "";
    document.getElementById(Const.domId.channel).value = "";
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
});
