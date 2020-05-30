'use strict';

/**
 * Persistence options key.
 * @type {string}
 */
const OptionsKey = "hoge";

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
}

