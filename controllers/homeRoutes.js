const router = require('express').Router();
const { Posts, User, Comments } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const postData = await Posts.findAll({
        include: [
          {
            model: User,
            attributes: ['username', 'id'],
          },
          {
            model: Comments
          }
        ],
        order: [['date_created', 'DESC']]
      });
  
      // Serialize data so the template can read it
      const posts = postData.map((post) => post.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('welcome', { 
        posts,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
});