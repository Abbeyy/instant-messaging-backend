import express from 'express'
import mongoose from 'mongoose';
import { Messages } from '../../models/messages.js';

var ObjectId = mongoose.Types.ObjectId;

const messagesRouter = express.Router();

messagesRouter.get('/byIds', (req, res, next) => {
    const _ids = req.query._ids

    Messages.findByIds(_ids)
    .then(data => res.json(data)).catch(next)
});

export default messagesRouter;