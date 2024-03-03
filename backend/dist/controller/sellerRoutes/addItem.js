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
exports.addItem = void 0;
const itemsSchema_1 = require("../../db/itemsSchema");
const sellerSchema_1 = require("../../db/sellerSchema");
const addItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const validationResult = ItemSchema.safeParse(req.body);
        // if (!validationResult.success) {
        //     return res.status(400).json({ message: 'Validation error', errors: validationResult.error.errors });
        // }
        const sellerId = req.params.sellerId;
        const { name } = req.body;
        const item = yield itemsSchema_1.Items.findOne({ name: name });
        if (item) {
            return res.status(409).json({ message: 'Item already exists' });
        }
        const newItem = new itemsSchema_1.Items(req.body);
        yield newItem.save();
        yield sellerSchema_1.Sellers.findByIdAndUpdate(sellerId, { $push: { publishedItems: newItem._id, unsoldItems: newItem._id } }, { new: true });
        return res.status(201).json(newItem);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.addItem = addItem;
