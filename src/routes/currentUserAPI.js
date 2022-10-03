import express from 'express'
import {User} from '../models/user.js'

const currentUserRouter = express.Router();

currentUserRouter.get('/', (req, res, next) => {
  const email = req.body.email

  if (email) {
    User.findByEmail(email).then(data => res.json(data)).catch(next)
  }
});

export default currentUserRouter;

//Placeholders

// router.get('/todos', (req, res, next) => {
//   // get placeholder
// });
// router.post('/todos', (req, res, next) => {
//   // post placeholder
// });
// router.delete('/todos/:id', (req, res, next) => {
//   // delete placeholder
// });