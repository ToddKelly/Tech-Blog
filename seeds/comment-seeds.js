const { Comment } = require('../models');
const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This was very useful."
    },
    {
        user_id: 2,
        post_id: 4,
        comment_text: "Floored with new information"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Amazing!"
    },
    {
        user_id: 4,
        post_id: 2,

        comment_text: "This changes how I understand and view hings now"
    }
    
]

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;