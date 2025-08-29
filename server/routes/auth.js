import express from "express";
import {
  elderLogin,
  volunteerLogin,
  ngoLogin
} from "../controller/auth.controller.js";
import {registerElder,
  registerVolunteer,
  registerNGO} from "../services/auth.service.js";

const router = express.Router();

// Registration routes
router.post("/register/elder", registerElder);
router.post("/register/volunteer", registerVolunteer);
router.post("/register/ngo", registerNGO);

// Login routes
router.post("/login/elder", elderLogin);
router.post("/login/volunteer", volunteerLogin);
router.post("/login/ngo", ngoLogin);

// Logout route (dummy, for stateless JWT or session clearing on client)
router.post("/logout", (req, res) => {
  // For JWT, instruct client to delete token. For sessions, destroy session here.
  res.json({ message: "Logged out successfully" });
});

export default router;
