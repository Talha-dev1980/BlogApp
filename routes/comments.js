var express = require('express');
const db = require('../config');
const commentsController = require('../controller/commentsController');
var router = express.Router();

router.get('/', commentsController.getComments)
router.get('/d/', commentsController.getDetailComments)

router.get('/d/:id', commentsController.getCommentDetail)
router.post('/add',commentsController.newComment )
router.get('/:id',commentsController.getComment )
router.delete('/:id',commentsController.deleteComment )
router.put("/:id",commentsController.updateComment)

module.exports = router;
