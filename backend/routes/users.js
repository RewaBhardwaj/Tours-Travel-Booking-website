const router = require('express').Router();
const { updateUser, deleteUser, getSingleUser, getAllUsers } = require('../controllers/userController');
const { verifyUser, verifyAdmin } = require('../utils/verifyToken');

// update user
router.put('/:id', verifyUser, updateUser);
// delete user
router.delete('/:id', verifyUser, deleteUser);
// get single user
router.get('/:id', verifyUser, getSingleUser);
// get all users
router.get('/', verifyAdmin, getAllUsers);

module.exports = router;