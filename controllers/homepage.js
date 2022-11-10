const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

//render all posts
router.get('/', async (req, res) => {
    const postData = await Post.findAll();
    const posts = postData.map((post) => post.get({ plain: true }))
    if(!req.session.logged_in) {
    res.render('all-posts', { posts });
    } 
    res.render('all-posts', { posts, layout: 'dashboard' });
});

//get single post
router.get('/post/:id', async (req, res) => {
    const postData = await Post.findOne({
        where: {
            id: req.params.id
        }
    });
    const post = postData.get({ plain: true })
    res.render('single-post', { ...post })
});

// login
router.get('/login', async (req, res) => {
   if(req.session.logged_in) {
    const postData = await Post.findAll();
    const posts = postData.map((post) => post.get({ plain: true }))
    res.render('all-posts', { posts, layout: 'dashboard' })
   }
   res.render('login');
});

//signup
router.get('/users/signup', (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/');
    }
    res.render('signup');
});

module.exports = router;