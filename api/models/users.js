import mongoose, { trusted } from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
})