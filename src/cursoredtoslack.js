'use strict';

/**
 * Persistence options key.
 * @type {string}
 */
const OptionsKey = "hoge";

/**
 * ContextMenuId
 * @type {string}
 */
const ContextMenuId = "fuga";

/**
 */
export default class CursoredToSlack {

    /**
     * Represents a CursoredToSlack
     * @constructor
     * @param {object} chrome API
     */
    constructor(chrome) {
        this.chrome = chrome;
    }

    /**
     * Get persistence options.
     * @return {Promise} options returned if it resolved.
     */
    async getOptions() {
        return new Promise(resolve => {
            this.chrome.storage.sync.get([OptionsKey], (result) => {
                resolve(result[OptionsKey])
            })
        })
    }

    /**
     * Set persistence options.
     * @param {object} object has persistence options.
     * @return {Promise} returns bool if it resolved.
     */
    async setOptions(value) {
        return new Promise(resolve => {
            this.chrome.storage.sync.set({[OptionsKey]: value}, () => {
                resolve(true)
            })
        })
    }

    /**
     * contextMenus.onClicked callback.
     *
     * this is used by addContextMenu() function.
     * @see {@link https://developer.chrome.com/extensions/contextMenus#event-onClicked}
     */
    contextMenuOnClickedCallback(info) {
        const isMyEvent = ContextMenuId === info.menuItemId;
        if (!isMyEvent) {
            return;
        }

        let message = "";
        const orderList = ["selectionText", "linkUrl", "srcUrl", "pageUrl", "frameUrl"];
        for (const order of orderList) {
            if (info[order]) {
                message = info[order];
                break;
            }
        }
        console.log(message);
        // console.log("item " + info.menuItemId + " was clicked");
        // console.log("info: " + JSON.stringify(info));
        // console.log("tab: " + JSON.stringify(tab));

        // TODO: send message to slack and send chrome-message to ui.
    }

    /**
     * Add context menu.
     */
    addContextMenu() {

        // add onClicked callback.
        this.chrome.contextMenus.onClicked.addListener(this.contextMenuOnClickedCallback);

        //const contexts = ["page", "selection", "link", "editable", "image", "video", "audio"];
        const contexts = ["all"];
        this.chrome.contextMenus.create({
            id: ContextMenuId,
            type: "normal",
            title: "Send to Slack",
            contexts: contexts,
            visible: true
        });
    }
}

