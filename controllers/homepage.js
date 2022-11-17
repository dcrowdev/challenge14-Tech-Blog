const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth')

//render all posts
router.get('/', async (req, res) => {
    const postData = await Post.findAll({include: [{model: User}]});
    const posts = postData.map((post) => post.get({ plain: true }))
    res.render('all-posts', { posts, logged_in: req.session.logged_in });
});

//get single post
router.get('/post/:id', async (req, res) => {
    const postData = await Post.findOne({ 
        include: [{model: User}],
        where: {
            id: req.params.id
        }
    });
    const post = postData.get({ plain: true })
    console.log({...post})
    res.render('single-post', post)
});

// login
router.get('/login', async (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/')
    }
    res.render('login')
});

//signup
router.get('/signup', (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/');
    }
    res.render('signup');
});

//logout 
router.get('/logout', async (req, res) => {
    res.render('logout');
});

module.exports = router;