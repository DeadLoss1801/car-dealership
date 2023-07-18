import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    admin_id: {
        type: String,
        unique: true,
        required: [true, 'admin_id should be present']
    },
    password: {
        type: String,
        required: [true, 'password should be present']
    }
})