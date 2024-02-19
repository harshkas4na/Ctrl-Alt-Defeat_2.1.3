"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bidders = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bidderschema = new mongoose_1.default.Schema({
    name: String,
    username: String,
    profileType: String,
    password: String,
    email: String,
    phone: Number,
    address: String,
    idType: String,
    idNumber: String,
    purchasedItems: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Items' }],
    accountType: String,
    cardNumber: Number,
    expiryDate: String,
    cardHolderName: String,
    ifscCode: String,
    bankName: String,
    pancardId: String
});
exports.Bidders = mongoose_1.default.model('Bidders', bidderschema);
