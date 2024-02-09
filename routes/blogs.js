var express = require('express');
const db = require('../config');
const blogsController = require('../controller/blogsController');
var router = express.Router();

router.get('/', blogsController.getBlogs)
router.get('/d/', blogsController.getDetailBlogs)

router.get('/d/:id', blogsController.getBlogDetail)
router.post('/add',blogsController.newBlog )
router.get('/:id',blogsController.getBlog )
router.delete('/:id',blogsController.deleteBlog )
router.put("/:id",blogsController.updateBlog)

module.exports = router;
