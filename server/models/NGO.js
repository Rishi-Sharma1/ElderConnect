import mongoose from "mongoose";

const NGOSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String },
  address: { type: String },
  services: { type: [String] },
  registrationNumber: { type: String },
});

export const NGO = mongoose.model("NGO", NGOSchema);
