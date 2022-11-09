const { Comment } = require('../models');

const commentSeedsArr = [
    {
        comment_body: "What a great thought!",
        user_id: 3,
        post_id: 1
    },
    {
        comment_body: "Thats awesome!",
        user_id: 1,
        post_id: 2
    },
    {
        comment_body: "Wow! Just WOW!",
        user_id: 2,
        post_id: 3
    }
]

const commentSeeds = () => Comment.bulkCreate(commentSeedsArr);

module.exports = commentSeeds;