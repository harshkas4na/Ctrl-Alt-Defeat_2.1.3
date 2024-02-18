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
const bidderValidations_1 = require("../../zod/bidderValidations");
const bidderSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validationResult = bidderValidations_1.BidderSchema.safeParse(req.body);
        if (!validationResult.success) {
            return res.status(400).json({ message: 'Validation error', errors: validationResult.error.errors });
        }
        const bidder = yield bidderSchema_1.Bidders.findOne({ username: req.body.username });
        if (bidder) {
            return res.status(409).json({ message: 'Bidder already exists' });
        }
        const newBidder = new bidderSchema_1.Bidders(Object.assign(Object.assign({}, req.body), { purchasedItems: [] }));
        yield newBidder.save();
        return res.status(201).json(newBidder);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.bidderSignup = bidderSignup;
