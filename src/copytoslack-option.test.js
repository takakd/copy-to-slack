import {
  CursoredToSlackOption,
  SlackWebhookCommonHostPath,
} from "./copytoslack-option";

describe("CursoredToSlackOption", () => {
  test("property", () => {
    const c = new CursoredToSlackOption();
    c.webhookPath = "test";
    expect(c.webhookPath).toBe("test");
    expect(c.webhookUrl).toBe(SlackWebhookCommonHostPath + "test");

    c.webhookPath = "";
    expect(c.webhookPath).toBe("");
    expect(c.webhookUrl).toBe("");
  });

  test("validate", () => {
    const c = new CursoredToSlackOption();
    let errors;

    c.webhookPath = "HZ54X/B01KE0V/Z251nBgwCPG";
    errors = c.validate();
    expect(errors).toMatchObject({});

    c.webhookPath = "";
    errors = c.validate();
    expect(errors).toMatchObject({
      webhookPath: "Enter a Slack Webhook URL for sending message.",
    });

    c.webhookPath = "http://localhost";
    errors = c.validate();
    expect(errors).toMatchObject({ webhookPath: "Enter a correct URL." });

    c.webhookPath = "https://localhost";
    errors = c.validate();
    expect(errors).toMatchObject({ webhookPath: "Enter a correct URL." });
  });
});
