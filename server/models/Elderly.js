import mongoose from "mongoose";

const ElderlySchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String },
  contact: { type: String },
  needs: { type: String },
  email:{
    type: String,
    required: false,
    unique: true,
  },
  password: { type: String, required: true },
});

export const Elderly = mongoose.model("Elderly", ElderlySchema);
