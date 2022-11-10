import mongoose from 'mongoose'

const Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

export const MessagesSchema = new Schema({
  message: [String],
  timeStamp: {
    type: Date, 
    required: true
  },
  sender: {
    type: ObjectId,
    ref: 'User',
  }
});

export const Messages = mongoose.model('Messages', MessagesSchema);
