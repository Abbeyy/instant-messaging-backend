import express from 'express'
import mongoose from 'mongoose';
import { MessageHistory } from '../../models/messageHistory.js';
import { Messages } from '../../models/messages.js';

var ObjectId = mongoose.Types.ObjectId;

const chatRouter = express.Router();

chatRouter.post('/appendMessages', (req, res, next) => {
    const errs = []
    //Create new Messages record

    const newMessages = req.query.messages
    const timeStamp = req.query.timeStamp
    const sender = req.query.sender
    const newMessageDocId = new ObjectId()

    const chatId = req.query._id

    const newMessagesDoc = new Messages({_id: newMessageDocId, message: newMessages, timeStamp, sender })

    newMessagesDoc.save((err, message) => { // return?
        if (err) {
            errs.push(err)
        }

        //Success, now append to MessageHistory
        const _id = new ObjectId(chatId)

        MessageHistory.findByIdAndUpdate({_id}, { $push: {"messageList": newMessageDocId}})
        .then(data => res.json({...data})).catch(next)
    })
});

export default chatRouter;