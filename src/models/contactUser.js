import mongoose from 'mongoose'

const Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

export const ContactUserSchema = new Schema({
  user: {
    type: [{
      type: ObjectId,
      ref: 'User',
    }],
    required: function() {
        return typeof this.country === 'undefined' || (this.country != null && typeof this.country != 'string')
    },
  },
});

export const ContactUser = mongoose.model('ContactUser', ContactUserSchema);
