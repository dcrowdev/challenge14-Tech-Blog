const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//define model relationships
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    through: Post
});

Comment.belongsTo(User, {
    through: Post
});

Post.hasMany(Comment, {
    through: User
});

Comment.belongsTo(Post, {
    through: User
});

module.exports = { User, Post, Comment }