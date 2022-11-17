import express from 'express'

import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import currentUserRouter from './src/routes/currentUserAPI.js'

import dotenv from 'dotenv'
import messageHistoryRouter from './src/routes/messages/messageHistoryAPI.js';
import userRouter from './src/routes/userAPI.js';
import messagesRouter from './src/routes/messages/messageListAPI.js';

import { createServer } from 'http';
import { Server } from 'socket.io';

const port = 5001;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

dotenv.config();

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

//websocket

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });

io.on('connection', function(socket){
  console.log('User is connected');

  socket.on('disconnect', function(){
    console.log('User has been disconnected');
  });

  socket.on('toServer', function(){
    console.log('all the way from the API!');
  });

  socket.emit('toAPI')
});

io.listen(8000);

//routes

app.use('/user', userRouter);

app.use('/currentUser', currentUserRouter);

app.use('/messageHistory', messageHistoryRouter);

app.use('/messageList', messagesRouter);