import express from "express";
import { createAppointment, deleteAppointment, getAppointment, getAppointments, updateAppointment } from "../controllers/appointment.js";
import { createLocation, deleteLocation, getLocation, getLocations, updateLocation } from "../controllers/location.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:locationid", verifyAdmin, createAppointment);

//UPDATE
router.put("/:id", verifyAdmin, updateAppointment);

//DELETE
router.delete("/:id/:locationid", verifyAdmin, deleteAppointment);

//GET
router.get("/:id", getAppointment);

//GET ALL
router.get("/", getAppointments);

export default router