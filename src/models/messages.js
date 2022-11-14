import mongoose from 'mongoose'

const Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

export const MessagesSchema = new Schema({
  messages: [String],
  timeStamp: {
    type: Date, 
    required: true
  },
  sender: {
    type: ObjectId,
    ref: 'User',
  }
});

MessagesSchema.statics.findBySenderId = function(senderId) {
  const senderObjectId = new ObjectId(`${senderId}`)
  return this.find({sender: senderObjectId})
}

MessagesSchema.statics.findBySenderIds = function(senderIds) {
  const senderObjectIds = senderIds.map((id) => new ObjectId(`${id}`))
  return this.find({sender: senderObjectIds})
}

export const Messages = mongoose.model('Messages', MessagesSchema);
