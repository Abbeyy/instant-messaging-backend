import express from 'express'
import { MessageHistory } from '../models/messageHistory.js';

const messageHistoryRouter = express.Router();

messageHistoryRouter.get('/bySenderId', (req, res, next) => {
    const _id = req.query._id

    MessageHistory.findBySenderId(_id).then(data => res.json(data)).catch(next)
});

export default messageHistoryRouter;