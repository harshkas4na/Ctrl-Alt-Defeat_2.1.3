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
// const multer = require('multer');
// Configure multer for handling file uploads
// Set the destination folder for uploaded files
const addItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const url = req.protocol + '://' + req.get('host');
        const sellerId = req.params.sellerId;
        console.log(sellerId);
        const name = req.body.name;
        console.log(req.body);
        // const item = await Items.findOne({ name: name });
        // if (item) {
        //     return res.status(409).json({ message: 'Item already exists' });
        // }
        const newItemData = Object.assign(Object.assign({}, req.body), { itemPic: url + '/public/' + ((_a = req.file) === null || _a === void 0 ? void 0 : _a.filename) // Store the path of uploaded file in the itemPic field
         });
        const newItem = new itemsSchema_1.Items(newItemData);
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
