import mongoose from "mongoose";

const dealershipSchema = new mongoose.Schema({
    dealership_email: {
        type: String,
        unique: true,
        required: [true, 'email should be present']
    },
    dealership_name: String,
    dealership_location: String,
    password: {
        type: String,
        required: [true, 'password should be present']
    },
    dealership_info: Object,
    cars: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'car'
    }],
    deals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'deal'
    }],
    sold_vehicles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sold_vehicle'
    }]
})

export const dealershipModel = new mongoose.Model('dealership', dealershipSchema);