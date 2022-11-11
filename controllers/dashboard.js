const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [ { model: User } ]
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('dashbaord', { posts, loggin_in: req.session.loggin_in })
    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router;