import Appointment from "../models/Appointment.js";
import Location from "../models/Location.js";
import { createError } from "../utils/error.js";

export const createAppointment = async(req,res,next) => {
    const locationId = req.params.locationid;
    const newAppointment = new Appointment(req.body);

    try {
        const savedAppointment = await newAppointment.save();
        try {
            await Location.findByIdAndUpdate(locationId, {
                $push: { appointments: savedAppointment._id },
            });
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedAppointment);
    } catch (err) {
        next(err)
    }
};

export const updateAppointment = async(req,res,next)=>{
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedAppointment);
    } catch (err) {
        next(err);
    }
};

export const deleteAppointment = async(req,res,next) => {
    const locationId = req.params.locationid;
    try {
        await Appointment.findByIdAndDelete(req.params.id);
        try {
            await Location.findByIdAndUpdate(locationId, {
                $pull: { appointments: req.params.id},
            });
        } catch (err) {
            next(err)
        }
        res.status(200).json("Appointment has been deleted.");
    } catch (err) {
        next(err);
    }
    
};

export const getAppointment = async(req,res,next) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        res.status(200).json(appointment);
    } catch (err) {
        next(err);
    }
};

export const getAppointments = async(req,res,next) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    } catch (err) {
        next(err);
    }
};