import mongoose from 'mongoose';

const bidderschema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: String,
    phoneNo: Number,
    address: String,
    idType: String,
    govId: String,
    purchasedItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Items' }],
    cardType: String,
    cardNo: Number,
    expiryDate: String,
    cardHolderName: String,
    ifsc: String,
    bankName: String,
    pancardId: String
});

export const Bidders = mongoose.model('Bidders', bidderschema);