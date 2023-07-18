import mongoose from "mongoose";

const sold_vehicleSchema = new mongoose.Schema({
    car_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'car'
    },
    vehicle_info: Object
})
export const sold_vehicleModel = new mongoose.Model('sold_vehicle', sold_vehicleSchema);