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
    anonymousId: String,
    password: String,
    email: String,
    phoneNo: Number,
    permanentAddress: String,
    correspondenceAddress: String,
    idType: String,
    govId: String,
    purchasedItems: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Items' }],
    cardType: String,
    cardNo: Number,
    expiryDate: String,
    cardHolderName: String,
    ifsc: String,
    bankName: String,
    pancardId: String
});
exports.Bidders = mongoose_1.default.model('Bidders', bidderschema);
