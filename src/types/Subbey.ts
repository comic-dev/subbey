export interface Subbey {
    /**
     * @description The subreddit you want to recieve posts from
     * @optional
     * @default memes
     * @type {string}
     */
    sub?: string,

    /**
     * @description Wether you want to recieve NFSW results
     * @optional
     * @default false
     * @type {boolean}
     */
    nfsw?: boolean;

    /**
     * @description The number of results you want to recieve
     * @optional
     * @default 3
     * @type {number}
     */
    max?: number


    /**
     * @description Wether you want the top posts or not
     * @optional
     * @default false
     * @type {boolean}
     */
    top?: boolean
}