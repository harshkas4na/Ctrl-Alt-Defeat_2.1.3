"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTokenSeller = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret_key_seller = process.env.secret_key_user || 'IwillsettleForthis02';
const generateTokenSeller = (userid) => {
    const payload = {
        _id: userid
    };
    return jsonwebtoken_1.default.sign(payload, secret_key_seller);
};
exports.generateTokenSeller = generateTokenSeller;
