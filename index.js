import express from 'express'
const app = express();

import bodyParser from 'body-parser'
import mongoose from 'mongoose'

// import userRouter from './src/routes/userAPI.js'
import currentUserRouter from './src/routes/currentUserAPI.js'
// import contactUserRouter from './src/routes/contactUserAPI.js'

import dotenv from 'dotenv'
import messageHistoryRouter from './src/routes/messageHistoryAPI.js';

dotenv.config();

const port = 5001;

// Connect to the database
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));
  
// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

// Aids CORS issues for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use(bodyParser.json());

// app.use('/users', userRouter);

app.use('/currentUser', currentUserRouter);

// app.use('/contacts', contactUserRouter);

app.use('/messageHistory', messageHistoryRouter);