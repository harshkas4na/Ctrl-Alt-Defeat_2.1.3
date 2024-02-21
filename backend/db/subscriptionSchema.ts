import mongoose from "mongoose";


const subscriptionSchema = new mongoose.Schema({
    username: String,
    email: String,
    address: String,
    Subscription: String
})


export const Subscriptions = mongoose.model('Subscriptions', subscriptionSchema);