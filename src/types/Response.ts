export interface Response {
    /**
     * @description The title of the post
     * @type {string}
     */
    title: string;

    /**
     * @description The thumbnail for the post
     * @type {string}
     */
    thumbnail: string;

    /**
     * @description The subreddit this post originated from
     * @type {string}
     */
    subreddit: string;

    /**
     * @description The updotes on this post
     * @type {number}
     */
    ups: number;

    /**
     * @description The downvotes on this post
     * @type {number}
     */
    downs: number;

    /**
     * @description The upvote ratio for this post
     * @type {string}
     */
    ratio: string;

    /**
     * @description Wether the post is original or not
     * @type {boolean}
     */
    original: boolean;

    /**
     * @description The score of this post
     * @type {number}
     */
    score: number;

    /**
     * @description Wether this post is NFSW or not
     * @type {boolean}
     */
    nfsw: boolean;

    /**
     * @description Awards for this post
     * @type {Array<{ name: string, icon: string }>}
     */
    awards: Array<{ name: string, icon: string }>

    /**
     * @description The author of this post
     * @type {string}
     */
    author: string;

    /**
     * @description The url of this post
     * @type {string}
     */
    url: string;

    /**
     * @description Wether this post is an video or not
     * @type {boolean}
     */
    video: boolean;

    /**
     * @description The link of this post
     * @type {string}
     */
    link: string;
}