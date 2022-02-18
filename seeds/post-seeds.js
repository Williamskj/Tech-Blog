const { Post } = require('../models');

const postData = [
    {
        title: "Aliens on Mars Discovered",
        post_content: "Heard some guy in Utah was looking at mars on google maps and saw a baby yoda flipping the finger.",
        user_id: 1
    },
    {
        title: "Amazon taking over the world",
        post_content: "Amazon just bought Sony for 15 billion dollars. Can confirm, we are all doomed.",
        user_id: 5
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;