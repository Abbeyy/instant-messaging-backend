import express from 'express'
import {User} from '../../models/user.js'

const userRouter = express.Router();

userRouter.get('/all', (req, res, next) => {
    User.find({}).then(data => res.json(data)).catch(next)
});

module.exports = userRouter;