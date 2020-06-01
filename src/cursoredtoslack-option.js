"use strict";

/**
 */
export default class CursoredToSlackOption {
  /**
   * Represents a options in extension.
   * @constructor
   */
  constructor() {
    this._webhookUrl = "";
  }

  /**
   * Slack Webhook URL
   * @returns {string|*}
   */
  get webhookUrl() {
    return this._webhookUrl;
  }

  /**
   *
   * Slack Webhook URL
   * @param value
   */
  set webhookUrl(value) {
    this._webhookUrl = value;
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
