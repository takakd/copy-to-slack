# Copy to Slack

Chrome extension to note with Slack.

![Logo](doc/liam-briese-wB7V7mhufy4-unsplash.png?raw=true)

<span>Photo by <a href="https://unsplash.com/@liam_1?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Liam Briese</a> on <a href="https://unsplash.com/s/photos/cursor?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

![License-MIT](https://img.shields.io/badge/License-MIT-informational?style=flat)

##Features

Send contents dragged to slack.

![Features](/doc/features.gif)

## Install

### 1. Get Slack Webhook URL

1. Create your Slack App.
2. Add a new Webhook to your workspace.

See the details [here](https://api.slack.com/messaging/webhooks).

### 2. Load Chrome extension

1. Open Chrome and Extension tab.
2. Turn ON Developer mode.
3. Click `Load unpacked` and select `extroot` in this repository.

See the details [here](https://developer.chrome.com/extensions/getstarted#manifest).

### 3. Set Webhook URL on the extension option.

1. Click the extension icon to open the menu.
2. Select `Options` to open the options tab.
3. Enter Webhook URL and Click `Save`.

## Usage

1. Select the contents you want to send to Slack.
2. Right-click to open the menu.
3. Select `Send to Slack` menu and the contents will be sent.

## Development

### Requirement

* node: v12.17.0
* npm: 6.14.4

It probably works on another version, but it hs been tested in the above version.

### Setup

Install npm packages.

```shell
$ npm install
```

#### Commands

| Command | Description |
| :----- | :----- |
| `npm run build` | Build production resources. |
| `npm run build:dev` | Build development resources. |
| `npm run test` | Run unit tests. |
| `npm run lint` | Lint sources by ESLint. |
| `npm run lint:fix` | Format sources by Prettier. |

### Structure

```
.
├── extroot: Directory to put outputs
├── images: Icons
└── src: Sources
```

## License

* [MIT license](/LICENSE)
* Copyright 2020 &copy; [takakd](https://twitter.com/takakdkd)
