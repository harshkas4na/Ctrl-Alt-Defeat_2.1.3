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
exports.updateProfileSeller = void 0;
const sellerSchema_1 = require("../../db/sellerSchema");
const updateProfileSeller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.bidderId;
        const bidder = yield sellerSchema_1.Sellers.findOne({ _id: id });
        if (!bidder) {
            res.status(400).json({ message: 'Invalid seller id' });
        }
        else {
            yield sellerSchema_1.Sellers.findByIdAndUpdate(id, Object.assign({}, req.body), (err, docs) => {
                if (err) {
                    res.status(400).json({ message: err });
                }
                else {
                    res.status(201).json({ message: `Updated seller details ${docs}` });
                }
            });
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.updateProfileSeller = updateProfileSeller;
