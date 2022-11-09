import mongoose from 'mongoose'

const Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

export const UserSchema = new Schema({
  email: {
    type: String, 
    required: true
  },
  password: {
    type: String, 
    required: true
  },
  firstName: {
    type: String, 
    required: true
  },
  surname: {
    type: String, 
    required: true
  },
  displayName: {
    type: String, 
    required: function() {
        return typeof this.country === 'undefined' || (this.country != null && typeof this.country != 'string')
    }
  }, 
  contacts: {
    type: [{
      type: ObjectId,
      ref: 'User',
    }],
    required: function() {
        return typeof this.country === 'undefined' || (this.country != null && typeof this.country != 'string')
    },
  },
});

UserSchema.statics.findByEmail = function(email) { 
   return this.find({email: email.trim()})
}

export const User = mongoose.model('User', UserSchema);
