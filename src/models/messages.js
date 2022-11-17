import mongoose from 'mongoose'

const Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

export const MessagesSchema = new Schema({
  messages: [String],
  timeStamp: {
    type: Date, 
  },
  sender: {
    type: ObjectId,
    ref: 'User',
  }
});

MessagesSchema.statics.findByIds = function(ids) {
  const messageIds = ids.map((id) => new ObjectId(`${id}`))
  return this.find({_id: messageIds})
}

export const Messages = mongoose.model('Messages', MessagesSchema);
