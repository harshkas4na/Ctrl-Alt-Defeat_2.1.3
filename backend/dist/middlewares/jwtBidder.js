"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtVerificationBidder = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret_key_bidder = process.env.secret_key_user || 'IwillsettleForthis02';
const jwtVerificationBidder = (req, res, next) => {
    try {
        const authHeader = req.header('authorization');
        if (authHeader) {
            const Token = authHeader.split(' ')[1];
            jsonwebtoken_1.default.verify(Token, secret_key_bidder, (err, user) => {
                if (err)
                    throw res.sendStatus(401);
                next();
            });
        }
        else {
            res.status(401).json({ message: 'Token authentication failed' });
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};
exports.jwtVerificationBidder = jwtVerificationBidder;
