import {
  DomIdList,
  getFormValues,
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
            <button id="testButton" type="button" class="btn btn-outline-secondary mr-2">Test</button>
            <button id="saveButton" type="submit" class="btn btn-primary">Save</button>
        </div>
    </form>    
    `;
  return document;
};
describe("options", () => {
  test("getFormValues", async () => {
    setMockHtml(document);
    document.getElementById(DomIdList.webhookUrl).value = "https://localhost";
    document.getElementById(DomIdList.channel).value = "#webhook";

    const got = getFormValues();
    expect(got[DomIdList.webhookUrl]).toBe("https://localhost");
    expect(got[DomIdList.channel]).toBe("#webhook");
  });

  test("validateForm", async () => {
    setMockHtml(document);
    document.getElementById(DomIdList.webhookUrl).value = "https://localhost";
    document.getElementById(DomIdList.channel).value = "#webhook";
    let isValid = validateForm();
    expect(true).toBe(isValid);
    expect(false).toBe(
      document
        .getElementById(DomIdList.webhookUrl)
        .classList.contains("is-invalid")
    );
    expect(false).toBe(
      document
        .getElementById(DomIdList.webhookUrl)
        .classList.contains("is-invalid")
    );

    setMockHtml(document);
    document.getElementById(DomIdList.webhookUrl).value = "";
    document.getElementById(DomIdList.channel).value = "";
    isValid = validateForm();
    expect(false).toBe(isValid);
    expect(true).toBe(
      document
        .getElementById(DomIdList.webhookUrl)
        .classList.contains("is-invalid")
    );
    expect(true).toBe(
      document
        .getElementById(DomIdList.webhookUrl)
        .classList.contains("is-invalid")
    );
  });

  test("validateSlackWebhookUrlValue", async () => {
    expect(validateSlackWebhookUrlValue("https://localhost")).toBe("");
    expect(validateSlackWebhookUrlValue("http://localhost")).not.toBe("");
    expect(validateSlackWebhookUrlValue("test")).not.toBe("");
    expect(validateSlackWebhookUrlValue("")).not.toBe("");
  });

  test("validateSlackWebhookUrl", async () => {
    setMockHtml(document);
    document.getElementById(DomIdList.webhookUrl).value = "https://localhost";
    let isValid = validateSlackWebhookUrl();
    expect(true).toBe(isValid);
    expect(false).toBe(
      document
        .getElementById(DomIdList.webhookUrl)
        .classList.contains("is-invalid")
    );

    setMockHtml(document);
    document.getElementById(DomIdList.webhookUrl).value = "";
    isValid = validateForm();
    expect(false).toBe(isValid);
    expect(true).toBe(
      document
        .getElementById(DomIdList.webhookUrl)
        .classList.contains("is-invalid")
    );
  });

  test("validateSlackChannelNameValue", async () => {
    expect(validateSlackChannelNameValue("#channel")).toBe("");
    expect(validateSlackChannelNameValue("channel")).toBe("");
    expect(validateSlackChannelNameValue("チャンネル")).toBe("");
    expect(validateSlackChannelNameValue("chan nel")).not.toBe("");
    expect(validateSlackChannelNameValue("channel.")).not.toBe("");
    expect(validateSlackChannelNameValue("channel,")).not.toBe("");
  });

  test("validateSlackChannelName", async () => {
    setMockHtml(document);
    document.getElementById(DomIdList.channel).value = "#webhook";
    let isValid = validateSlackChannelName();
    expect(true).toBe(isValid);
    expect(false).toBe(
      document
        .getElementById(DomIdList.channel)
        .classList.contains("is-invalid")
    );

    setMockHtml(document);
    document.getElementById(DomIdList.webhookUrl).value = "";
    isValid = validateForm();
    expect(false).toBe(isValid);
    expect(true).toBe(
      document
        .getElementById(DomIdList.channel)
        .classList.contains("is-invalid")
    );
  });

  test("validateButtons", async () => {
    setMockHtml(document);
    document.getElementById(DomIdList.webhookUrl).value = "https://localhost";
    document.getElementById(DomIdList.channel).value = "#webhook";
    validateButtons();
    expect(document.getElementById(DomIdList.testButton).disabled).toBe(false);
    expect(document.getElementById(DomIdList.saveButton).disabled).toBe(false);

    document.getElementById(DomIdList.webhookUrl).value = "";
    document.getElementById(DomIdList.channel).value = "";
    validateButtons();
    expect(document.getElementById(DomIdList.testButton).disabled).toBe(true);
    expect(document.getElementById(DomIdList.saveButton).disabled).toBe(true);
  });
});
