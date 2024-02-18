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
exports.bidderSignup = void 0;
const bidderSchema_1 = require("../../db/bidderSchema");
const bidderSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bidder = yield bidderSchema_1.Bidders.findOne({ username: req.body.username });
        if (bidder) {
            res.status(409).json({ message: 'Bidder already exists' });
        }
        else {
            const Bidder = Object.assign(Object.assign({}, req.body), { purchasedItems: [] });
            const newBidder = new bidderSchema_1.Bidders(Bidder);
            yield newBidder.save();
            return res.status(201).json(newBidder);
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.bidderSignup = bidderSignup;
