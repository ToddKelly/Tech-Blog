const { Post } = require('../models');
const postData = [
    {
        title: "This Is a post",
        post_content: "Testing first post",
        user_id: 3
    },
    {
        title: "This is a second post",
        post_content: "This is the text for the second post",
        user_id: 1
    },
    {
        title: "Coding is the best",
        post_content: "Bestest coding ever",
        user_id: 2

    },
    {
        title: "Really hope they like this",
        post_content: "Hey I'm trying my best",
        user_id: 4
    },
    {
        title: "Running out of ideas to be origional",
        post_content: "Ok this will be the last one",
        user_id: 4
    }
]


const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;