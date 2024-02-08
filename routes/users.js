var express = require('express');
const db = require('../config');
const userController = require('../controller/usersController');
var router = express.Router();

router.get('/', userController.getUsers)
router.post('/add',userController.addUser )
router.get('/:id',userController.getUser )
router.delete('/:id',userController.deleteUser )
router.put("/:id",userController.updateUser)

module.exports = router;
