const router = require('express').Router();
const { Post , User, Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Post.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, (req, res) => {
  try {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
} catch (err) {
  res.status(500).json(err)
}
})

module.exports = router;