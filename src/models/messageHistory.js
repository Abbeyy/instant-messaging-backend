import { ContactUserSchema } from './contactUser.js';
import mongoose from 'mongoose'
import { MessagesSchema } from './messages.js';

const Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

export const MessageHistorySchema = new Schema({
  sender: {
    type: ObjectId,
    ref: 'ContactUser',
  },
  recipient: {
    type: ObjectId,
    ref: 'ContactUser',
  },
  messageList: [{type: MessagesSchema}]
});

MessageHistorySchema.statics.findBySenderId = function(senderId) {
  const senderObjectId = new ObjectId(`${senderId}`)
  return this.find({sender: senderObjectId})
}

export const MessageHistory = mongoose.model('MessageHistory', MessageHistorySchema);
