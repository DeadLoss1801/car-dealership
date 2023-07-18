import mongoose from "mongoose";

const dealSchema = new mongoose.Schema({
    car_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'car'
    },
    deal_info: Object
})

export const dealModel = new mongoose.Model('deal', dealSchema);