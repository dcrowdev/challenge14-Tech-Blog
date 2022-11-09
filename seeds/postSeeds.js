const { Post } = require('../models');

const postSeedsArr = [
    {
        post_title: "My thoughts on herokus free tier.",
        post_body: "It is very unfortunate that herokus free tier is being taken down the same time as we start P2!",
        post_id: 2
    },
    {
        post_title: "Test Post 1",
        post_body: "This is a test post!",
        post_id: 3
    },
    {
        post_title: "Bootcamp is awesome!",
        post_body: "My bootcamp has been great so far! I've learned so much about the technologies ive been introduced to, and the instructional staff are great!",
        post_id: 1
    },
    {
        post_title: "Test post 2",
        post_body: "This is the second iteration of test post!",
        post_id: 4
    }
]

const postSeeds = () => Post.bulkCreate(postSeedsArr);

module.exports = postSeeds;