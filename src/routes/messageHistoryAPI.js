import express from 'express'
import { MessageHistory } from '../models/messageHistory.js';

const messageHistoryRouter = express.Router();

messageHistoryRouter.get('/bySenderId', (req, res, next) => {
    const _id = req.query._id

    MessageHistory.findBySenderId(_id).then(data => {
        console.log('field: sender')
        console.log('_id:', _id)
        console.log('data:', data)
        return res.json(data)
    }).catch(next)
    // MessageHistory.find({}).then(data => {
    //         console.log('field: sender')
    //         console.log('_id:', _id)
    //         console.log('data:', data)
    //         return res.json(data)
    //     }).catch(next)
});

export default messageHistoryRouter;