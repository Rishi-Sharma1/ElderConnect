import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Elderly } from '../models/Elderly.js';
import { Volunteer } from '../models/Volunteer.js';
import { NGO } from '../models/NGO.js';

// Register Elderly
export async function registerElder(req, res) {
  try {
    const { name, age, address, contact, needs, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newElder = new Elderly({ name, age, address, contact, needs, password: hashedPassword });
    await newElder.save();
    res.status(201).json({ message: "Elder registered", user: newElder });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Register Volunteer
export async function registerVolunteer(req, res) {
  try {
    const { name, age, contact, skills, availability, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newVolunteer = new Volunteer({ 
      name, 
      age, 
      contact, 
      skills, 
      availability, 
      password: hashedPassword,
      profilePicture: req.files.profilePicture ? req.files.profilePicture[0].path : null,
      identity: req.files.identity ? req.files.identity[0].path : null,
    });
    await newVolunteer.save();
    res.status(201).json({ message: "Volunteer registered", user: newVolunteer });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Register NGO
export async function registerNGO(req, res) {
  try {
    const { name, contact, address, services, registrationNumber, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newNGO = new NGO({ 
      name, 
      contact, 
      address, 
      services, 
      registrationNumber, 
      password: hashedPassword,
      logo: req.files.logo ? req.files.logo[0].path : null,
      documents: req.files.documents ? req.files.documents.map(file => file.path) : [],
    });
    await newNGO.save();
    res.status(201).json({ message: "NGO registered", user: newNGO });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// JWT Authentication Middleware
export function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET || "your_jwt_secret", (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
}