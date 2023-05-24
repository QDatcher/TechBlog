const {Comments} = require('../models')

const comments = [
    {
        text_content: "BROOOOOOOOO I FEEL THE SAME",
        user_id: "1",
        post_id: "2"
    },
    {
        text_content: "MY GUY I LOVE THIS. REACT ALL THE WAY",
        user_id: "2",
        post_id: "1"
    }
]

const seedComments = () => Comments.bulkCreate(comments);

module.exports = seedComments;