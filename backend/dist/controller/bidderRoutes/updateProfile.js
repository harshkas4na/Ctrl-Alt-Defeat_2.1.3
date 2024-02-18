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
exports.updateProfileBidder = void 0;
const bidderSchema_1 = require("../../db/bidderSchema");
const updateProfileBidder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.bidderId;
        const bidder = yield bidderSchema_1.Bidders.findOne({ _id: id });
        if (!bidder) {
            res.status(400).json({ message: 'Invalid bidder id' });
        }
        else {
            yield bidderSchema_1.Bidders.findByIdAndUpdate(id, Object.assign({}, req.body), (err, user) => {
                if (err) {
                    res.status(400).json({ message: err });
                }
                else {
                    res.status(201).json({ message: `Updated bidder ${user}` });
                }
            });
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.updateProfileBidder = updateProfileBidder;
