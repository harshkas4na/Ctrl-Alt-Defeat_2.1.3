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
exports.sellerSignup = void 0;
const sellerSchema_1 = require("../../db/sellerSchema");
const sellerSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const seller = yield sellerSchema_1.Sellers.findOne({ username: req.body.username });
        if (seller) {
            res.status(409).json({ message: 'Bidder already exists' });
        }
        else {
            const Seller = Object.assign(Object.assign({}, req.body), { publishedItems: [], unsoldItems: [] });
            const newSeller = new sellerSchema_1.Sellers(Seller);
            yield newSeller.save();
            return res.status(201).json(newSeller);
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.sellerSignup = sellerSignup;
