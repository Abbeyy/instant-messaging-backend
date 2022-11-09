import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const MessagesSchema = new Schema({
  message: [String],
  timeStamp: {
    type: Date, 
    required: true
  }
});

export const Messages = mongoose.model('Messages', MessagesSchema);
