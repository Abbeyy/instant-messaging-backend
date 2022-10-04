import { ContactUserSchema } from './contactUser.js';
import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const MessageHistorySchema = new Schema({
  sender: {
    type: ContactUserSchema,
    required: true
  },
  recipient: {
    type: ContactUserSchema,
    required: true
  },
  messageList: [String],
  timeStamp: {
    type: Date, 
    required: true
  }
});

export const MessageHistory = mongoose.model('MessageHistory', MessageHistorySchema);
