"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtVerificationBidder = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret_key_bidder = process.env.secret_key_bidder || 'IwillsettleForthis02';
const jwtVerificationBidder = (req, res, next) => {
    var _a;
    try {
        const token = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized, please login' });
        }
        jsonwebtoken_1.default.verify(token, secret_key_bidder, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Token authentication failed' });
            }
            if (!decoded) {
                return res.status(401).json({ message: 'Invalid token' });
            }
            next();
        });
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};
exports.jwtVerificationBidder = jwtVerificationBidder;
