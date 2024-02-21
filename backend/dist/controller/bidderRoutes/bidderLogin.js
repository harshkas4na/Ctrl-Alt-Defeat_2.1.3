"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bidderLogin = void 0;
const bidderSchema_1 = require("../../db/bidderSchema");
const bidderToken_1 = require("../jwtTokenGeneration/bidderToken");
const bidderLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bidder = yield bidderSchema_1.Bidders.findOne({ username: req.body.username, password: req.body.password, role: req.body.role });
        if (!bidder) {
            res.status(401).json({ message: 'Bidder not found' });
        }
        else {
            //@ts-ignore
            const token = (0, bidderToken_1.generateTokenBidder)(bidder._id);
            res.cookie('token', token);
            return res.status(201).json({
                message: 'Bidder logged in successfully'
            });
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.bidderLogin = bidderLogin;
