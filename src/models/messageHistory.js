import mongoose from 'mongoose'

const Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

export const MessageHistorySchema = new Schema({
  parties: [{
    type: ObjectId,
    ref: 'User',
  }],
  messageList: [{
    type: ObjectId,
    ref: 'Messages',
  }]
});

MessageHistorySchema.statics.findBySenderId = function(senderId) {
  const senderObjectId = new ObjectId(`${senderId}`)
  return this.find({sender: senderObjectId})
}

export const MessageHistory = mongoose.model('MessageHistory', MessageHistorySchema);
