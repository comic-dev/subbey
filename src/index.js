const { default: { get } } = require("axios");
module.exports = {
    subbey: async (options) => {
        if (!options) options = { sub: "memes", nfsw: false, max: 3, top: false };
        let { data: { children } } = await (await get(`https://api.reddit.com/r/${options?.sub ?? "memes"}${options?.top ? "/top" : ""}`)).data;
        const res = children.filter(v => {
            return v.data.preview && ((options?.nfsw ? v.data.over_18 === true : !v.data.over_18))
        }).map(v => {
            const { title, ups, downs, upvote_ratio, thumbnail, author, all_awardings, url, permalink, subreddit_name_prefixed, is_original_content, over_18, score, is_video } = v.data;
            return {
                title,
                ups,
                downs,
                media: url,
                ratio: `${upvote_ratio * 100}%`,
                thumbnail,
                author,
                awardings: all_awardings.map(v => { return { name: v.name, icon: v.icon_url } }),
                link: `https://new.reddit.com${permalink}`,
                subreddit: subreddit_name_prefixed,
                original: is_original_content,
                nfsw: over_18,
                score,
                video: is_video
            }
        })
        res.forEach((_, i) => {
            const j = Math.floor(Math.random() * (i-1));
            const t = res[i];
            res[i] = res[j];
            res[j] = t;
        })
        return res.slice(0, options.max)
    }
}