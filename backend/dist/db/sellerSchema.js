"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sellers = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const sellerschema = new mongoose_1.default.Schema({
    name: String,
    username: String,
    password: String,
    email: String,
    phoneNo: Number,
    address: String,
    idType: String,
    govId: String,
    publishedItems: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Items' }],
    unsoldItems: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Items' }],
    cardType: String,
    cardNo: Number,
    expiryDate: String,
    cardHolderName: String,
    ifsc: String,
    bankName: String,
    pancardId: String
});
exports.Sellers = mongoose_1.default.model('Sellers', sellerschema);
