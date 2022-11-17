import express from 'express'
import mongoose from 'mongoose';
import { Messages } from '../../models/messages.js';
import { MessageHistory } from '../../models/messageHistory.js';

var ObjectId = mongoose.Types.ObjectId;

const messagesRouter = express.Router();

messagesRouter.get('/byIds', (req, res, next) => {
    const _ids = req.query._ids

    Messages.findByIds(_ids)
    .then(data => res.json(data)).catch(next)
});

messagesRouter.post('/postMessages', (req, res, next) => {
    const errs = []

    const newMessageId = new ObjectId()
    const newMessages = req.body.params.messages
    const timeStamp = req.body.params.timeStamp
    const sender = req.body.params.sender

    const newMessagesDoc = new Messages({_id: newMessageId, messages: newMessages, timeStamp, sender })

    newMessagesDoc.save((err, message) => {
        if (err) {
            errs.push(err)
            res.send(errs)
        } else {
            const historyId = req.body.params._id

            const _id = new ObjectId(historyId)

            MessageHistory.findByIdAndUpdate({_id}, { $push: {"messageList": newMessageId}})
            .then(data => res.json({
                ...data, 
                newMsgId: newMessageId
            })).catch(next)
        }
    })
});

export default messagesRouter;