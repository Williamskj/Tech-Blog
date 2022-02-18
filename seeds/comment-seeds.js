const { Comment } = require('../models');

const commentData = [
    {
        user_id: 4,
        post_id: 1,
        comment_text: "Pics or didn't happen"
    },
    {
        user_id: 3,
        post_id: 1,
        comment_text: "Fake news."
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;