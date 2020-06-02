"use strict";

/**
 */
export default class CursoredToSlackOption {
  /**
   * Represents a options in extension.
   * @constructor
   */
  constructor(values) {
    this.webhookUrl = "";

    if (typeof values === "object") {
      if (values["webhookUrl"]) {
        this.webhookUrl = values["webhookUrl"];
      }
    }
  }

  /**
   * Validate option.
   *
   * @returns {object} Returns error message if not valid, empty otherwise.
   *  Each message is associated with key.
   */
  validate() {
    let errors = {};

    if (!this.webhookUrl) {
      errors["webhookUrl"] = "Enter a Slack Webhook URL for sending message.";
    } else if (
      !this.webhookUrl.match(/^https:\/\/[\w!?/+\-_~=;.,*&@#$%()'[\]]+/)
    ) {
      errors["webhookUrl"] = "Enter a correct URL.";
    }

    return errors;
  }
}
