import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const ContactUserSchema = new Schema({
  userId: {
    type: String, 
    required: true
  }
});

export const ContactUser = mongoose.model('ContactUser', ContactUserSchema);
