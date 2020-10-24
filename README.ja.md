# Copy to Slack

[en](README.md) | ja

Chromeブラザ上でドラッグしたコンテンツをSlackに送信するChrome拡張です。

[Logo](doc/liam-briese-wB7V7mhufy4-unsplash.png?raw=true)

<span>Photo by <a href="https://unsplash.com/@liam_1?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Liam Briese</a> on <a href="https://unsplash.com/s/photos/cursor?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

![License-MIT](https://img.shields.io/badge/License-MIT-informational?style=flat)

**Features**

![Features](/doc/features.gif)

ドラッグしたコンテンツをSlackに送信します。

## インストール

### 1. SlackのWebhook URLを取得

1. Slack Appを作ります。
2. Slackのワークスペースに新しいWebhookを追加します。

詳細は[こちら](https://api.slack.com/messaging/webhooks).

### 2. Chrome拡張をChromeで読み込みます

1. Chromeを開き、拡張機能タブを開きます。
2. デベロッパーモードをONにします。
3. `パッケージ化されていない拡張機能を読み込む`をクリックして、`extroot`を選択します。

詳細は[こちら](https://developer.chrome.com/extensions/getstarted#manifest).

### 3. Set Webhook URL on the extension option.

1. メニューに追加された拡張機能のアイコンをクリックして、メニューを開きます。
2. `Options`をクリックして、オプション画面を開きます。
3. 1.で取得したWebhook URLを入力してから`Save`をクリックして保存する。

## 使用方法

1. ブラウザ上でSlackに送りたいコンテンツを選択します。
2. 右クリックしてメニューを開きます。
3. `Send to Slack`を選択すると、コンテンツがSlackに送信されます。

## 開発

### 環境

* node: v12.17.0
* npm: 6.14.4

### セットアップ

npmモジュールのインストール

```shell
$ npm install
```

#### コマンド

| コマンド | 説明 |
| :----- | :----- |
| `npm run build` | 本番用ビルド |
| `npm run build:dev` | 開発用ビルド |
| `npm run test` | テスト実行 |
| `npm run lint` | ESLintでLint |
| `npm run lint:fix` | Prettierでソースフォーマット |

### Structure

```
.
├── extroot: ビルドアセット出力先
├── images: アイコン
└── src: 機能拡張のソース
```

## Support

[@takakd](https://twitter.com/takakdkd)

## License

* [MIT license](/LICENSE)
* Copyright 2020 &copy; takakd
