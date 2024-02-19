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
exports.allItems = void 0;
const itemsSchema_1 = require("../../db/itemsSchema");
const allItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield itemsSchema_1.Items.find({});
        // console.log(items);
        res.status(200).json(items);
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.allItems = allItems;
