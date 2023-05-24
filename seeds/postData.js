const { Posts } = require('../models')

const postsData = [
    {
        title: "Why React is the future",
        text_content: "React is great I like it alot",
        user_id: "1"
    },
    {
        title: "I love Github",
        text_content: "Git hub is sooo great I use it all the time.",
        user_id: "2"
    }
];

const seedPosts = () => Posts.bulkCreate(postsData);

module.exports = seedPosts;
