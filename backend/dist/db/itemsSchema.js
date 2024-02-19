"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Items = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const itemschema = new mongoose_1.default.Schema({
    name: String,
    seller: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Sellers' },
    description: String,
    sold: Boolean,
    itemPic: String,
    buyer: { type: String, ref: 'Bidders' },
    startingPrice: Number,
    soldPrice: Number,
    category: String,
    eventName: String
});
exports.Items = mongoose_1.default.model('Items', itemschema);
