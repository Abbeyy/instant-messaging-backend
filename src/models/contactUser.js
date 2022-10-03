import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const ContactUserSchema = new Schema({
  id: {
    type: String, 
    required: true
  },
  userId: {
    type: String, 
    required: true
  }
});

export const ContactUser = mongoose.model('contactUser', ContactUserSchema);
