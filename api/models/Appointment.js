import mongoose from "mongoose";
const AppointmentSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        staff: [{ staff: String, unavailableDates: {type: [Date]}}],
    },
    { timestamps: true }
);

export default mongoose.model("Appointment", AppointmentSchema);