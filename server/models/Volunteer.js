import mongoose from "mongoose";

const VolunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  contact: { type: String, required: true },
  skills: { type: [String], required: true },
  availability: { type: String, required: true },
  location: { type: String, required: true },
  
});

export const Volunteer = mongoose.model("Volunteer", VolunteerSchema);
