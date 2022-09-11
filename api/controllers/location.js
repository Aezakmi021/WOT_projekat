import Location from "../models/Location.js"
import Appointment from "../models/Appointment.js"

export const createLocation = async(req,res,next) => {
    const newLocation = new Location(req.body);

    try {
        const savedLocation = await newLocation.save();
        res.status(200).json(savedLocation);
    } catch (err) {
        next(err);
    }
};

export const updateLocation = async(req,res,next)=>{
    try {
        const updatedLocation = await Location.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedLocation);
    } catch (err) {
        next(err);
    }
};

export const deleteLocation = async(req,res,next) => {
    try {
        await Location.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted.");
    } catch (err) {
        next(err);
    }
    
};

export const getLocation = async(req,res,next) => {
    try {
        const location = await Location.findById(req.params.id);
        res.status(200).json(location);
    } catch (err) {
        next(err);
    }
};

export const getLocations = async(req,res,next) => {
    try {
        const locations = await Location.find();
        res.status(200).json(locations);
    } catch (err) {
        next(err);
    }
};