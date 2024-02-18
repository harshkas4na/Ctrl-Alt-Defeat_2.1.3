import mongoose from 'mongoose';

const itemschema = new mongoose.Schema({
    name: String,
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'Sellers' },
    description: String,
    sold: Boolean,
    itemPic: String,
    buyer: { type: String, ref: 'Bidders' },
    startingPrice: Number,
    soldPrice: Number,
    category: String,
    eventName: { type: mongoose.Schema.Types.ObjectId, ref: 'Events' }
})

export const Items = mongoose.model('Items', itemschema);