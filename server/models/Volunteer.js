import mongoose from "mongoose";

const VolunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  contact: { type: String },
  skills: { type: [String] },
  availability: { type: String },
  password: { type: String, required: true },
  profilePicture: { type: String },
  identity: { type: String },
});

export const Volunteer = mongoose.model("Volunteer", VolunteerSchema);
