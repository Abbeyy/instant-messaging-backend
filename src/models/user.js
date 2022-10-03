import { ContactUserSchema } from './contactUser.js';
import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  id: {
    type: String, 
    required: true
  },
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
    type: [ContactUserSchema],
    required: function() {
        return typeof this.country === 'undefined' || (this.country != null && typeof this.country != 'string')
    },
  },
});

UserSchema.methods.findByEmail = (email) => 
   this.find({email})



export const User = mongoose.model('currentUser', UserSchema);
