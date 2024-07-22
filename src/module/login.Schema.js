import mongoose from "mongoose";

const loginSchema = new mongoose.Schema(
    {
        userName:{
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        lastName:{
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email:{
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        }
    },
    {
        timestamps: true
    }
)

export const login = mongoose.model("login", loginSchema)