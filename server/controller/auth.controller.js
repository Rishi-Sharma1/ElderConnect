import jwt from "jsonwebtoken";
import { Elderly } from "../models/Elderly.js";
import { Volunteer } from "../models/Volunteer.js";
import { NGO } from "../models/NGO.js";
import bcrypt from "bcryptjs";

// Elder login
export async function elderLogin(req, res) {
  const { contact, password } = req.body;
  try {
    console.log("JWT_SECRET:", process.env.JWT_SECRET);
    const user = await Elderly.findOne({ contact });
    if (!user) return res.status(404).json({ error: "Elder not found" });
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: "Invalid password" });
    const token = jwt.sign({ id: user._id, role: "elder" }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ message: "Login successful", token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Volunteer login
export async function volunteerLogin(req, res) {
  const { contact, password } = req.body;
  try {
    const user = await Volunteer.findOne({ contact });
    if (!user) return res.status(404).json({ error: "Volunteer not found" });
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: "Invalid password" });
    const token = jwt.sign({ id: user._id, role: "volunteer" }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ message: "Login successful", token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// NGO login
export async function ngoLogin(req, res) {
  const { contact, password } = req.body;
  try {
    const user = await NGO.findOne({ contact });
    if (!user) return res.status(404).json({ error: "NGO not found" });
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: "Invalid password" });
    const token = jwt.sign({ id: user._id, role: "ngo" }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ message: "Login successful", token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
