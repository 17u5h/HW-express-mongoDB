const userRouter = require('express').Router()
const {createUser, updateUser, getAllUsers, getUser, deleteUser} = require("../controllers/users");

userRouter.get('/library/users', getAllUsers)
userRouter.get('/library/:user_id', getUser)
userRouter.post('/library', createUser)
userRouter.patch('/library/:user_id', updateUser)
userRouter.delete('/library/:user_id', deleteUser)

module.exports = userRouter
