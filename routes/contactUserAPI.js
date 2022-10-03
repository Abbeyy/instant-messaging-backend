import express from 'express'
import {ContactUser} from '../../models/contactUser.js';

const contactUserRouter = express.Router();

contactUserRouter.get('/all', (req, res, next) => {
    ContactUser.find({}).then(data => res.json(data)).catch(next)
  });

module.exports = contactUserRouter;