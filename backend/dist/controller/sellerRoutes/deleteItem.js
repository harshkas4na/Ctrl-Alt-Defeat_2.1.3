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
exports.deleteItem = void 0;
const itemsSchema_1 = require("../../db/itemsSchema");
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const itemId = req.params.itemId;
        const item = yield itemsSchema_1.Items.findOne({ _id: itemId });
        if (!item) {
            res.status(404).json({ message: 'Invalid item id' });
        }
        else {
            yield itemsSchema_1.Items.findByIdAndUpdate(itemId, (err, docs) => {
                if (err) {
                    res.status(400).json({ message: err });
                }
                else {
                    res.status(201).json({ message: `Deleted item ${docs}` });
                }
            });
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.deleteItem = deleteItem;
