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
exports.sellerLogin = void 0;
const sellerSchema_1 = require("../../db/sellerSchema");
const sellerToken_1 = require("../jwtTokenGeneration/sellerToken");
const sellerLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const seller = yield sellerSchema_1.Sellers.findOne({ username: req.body.username, password: req.body.password });
        if (!seller) {
            res.status(401).json({ message: 'Seller not found' });
        }
        else {
            //@ts-ignore
            const token = (0, sellerToken_1.generateTokenSeller)(seller._id);
            res.cookie('token', token);
            return res.status(200).json({
                message: 'Seller logged in successfully'
            });
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.sellerLogin = sellerLogin;
