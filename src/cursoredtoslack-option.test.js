import CursoredToSlackOption from "./cursoredtoslack-option";

describe("CursoredToSlackOption", () => {
  test("property", () => {
    const c = new CursoredToSlackOption();
    c.webhookUrl = "test";
    expect(c.webhookUrl).toBe("test");
  });

  test("validate", () => {
    const c = new CursoredToSlackOption();
    let errors;

    c.webhookUrl = "";
    errors = c.validate();
    expect(errors).toMatchObject({
      webhookUrl: "Enter a Slack Webhook URL for sending message.",
    });

    c.webhookUrl = "http://localhost";
    errors = c.validate();
    expect(errors).toMatchObject({ webhookUrl: "Enter a correct URL." });

    c.webhookUrl = "abc";
    errors = c.validate();
    expect(errors).toMatchObject({ webhookUrl: "Enter a correct URL." });

    c.webhookUrl = "https://localhost";
    errors = c.validate();
    expect(errors).toMatchObject({});
  });
});
