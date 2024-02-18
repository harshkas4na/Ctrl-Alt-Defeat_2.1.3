import mongoose from 'mongoose';

const itemschema = new mongoose.Schema({
    name: String,
    seller: { type: String, ref: 'Sellers' },
    description: String,
    sold: Boolean,
    itemPic: String,
    buyer: { type: String, ref: 'Bidders' },
    startingPrice: Number,
    soldPrice: Number
})

export const Items = mongoose.model('Items', itemschema);