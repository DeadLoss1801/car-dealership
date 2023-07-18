import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    type: String,
    name: String,
    model: String,
    car_info: Object
})

export const carModel = new mongoose.Schema('car', carSchema)