module.exports = async function (context, req) {
    context.res = {
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            youtubeApiKey: process.env.YOUTUBE_API_KEY,
            youtubeChannelId: process.env.YOUTUBE_CHANNEL_ID
        }
    };
}; 