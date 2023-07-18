import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user_email: {
        type: String,
        unique: true,
        required: [true, "Email should be present"]
    },
    user_location: {
        type: String
    },
    user_info: Object,
    password: {
        type: String,
        required: [true, 'password should be present']
    },
    vehicle_info: [{
        type: mongoose.Schema.Types.ObjectId
    }]
})
export const userModel = new mongoose.Model('user', userSchema);