import express from "express";
import { createLocation, deleteLocation, getLocation, getLocations, updateLocation } from "../controllers/location.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createLocation);

//UPDATE
router.put("/:id", verifyAdmin, updateLocation);

//DELETE
router.delete("/:id", verifyAdmin, deleteLocation);

//GET
router.get("/:id", getLocation);

//GET ALL
router.get("/", getLocations);

export default router