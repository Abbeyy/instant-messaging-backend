import express from 'express'
import mongoose from 'mongoose';
import { Messages } from '../../models/messages.js';

var ObjectId = mongoose.Types.ObjectId;

const messagesRouter = express.Router();

messagesRouter.get('/bySenderId', (req, res, next) => {
    const _id = req.query._id

    Messages.findBySenderId(_id)
    .then(data => res.json(data)).catch(next)
});

messagesRouter.get('/bySenderIds', (req, res, next) => {
    const _ids = req.query._ids

    Messages.findBySenderIds(_ids)
    .then(data => res.json(data)).catch(next)
});

export default messagesRouter;