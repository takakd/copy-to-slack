"use strict";

export const SlackWebhookCommonHostPath = "https://hooks.slack.com/services/";

/**
 */
export class CursoredToSlackOption {
  /**
   * Represents a options in extension.
   * @constructor
   */
  constructor(values) {
    this.webhookPath = "";

    if (typeof values === "object") {
      if (values.webhookPath) {
        this.webhookPath = values.webhookPath;
      }
    }
  }

  /**
   * Slack Webhook URL.
   * @returns {string} Slack Webhook URL.
   */
  get webhookUrl() {
    if (!this.webhookPath) {
      return "";
    }
    return SlackWebhookCommonHostPath + this.webhookPath;
  }

  /**
   * Validate option.
   *
   * @returns {object} Returns error message if not valid, empty otherwise.
   *  Each message is associated with key.
   */
  validate() {
    const errors = {};

    if (!this.webhookPath) {
      errors.webhookPath = "Enter a Slack Webhook URL for sending message.";
    } else if (!this.webhookPath.match(/^(?!(http|\/))[a-zA-Z0-9/]+/)) {
      errors.webhookPath = "Enter a correct URL.";
    }

    return errors;
  }
}
