"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const allItems_1 = require("../controller/itemRoutes/allItems");
const sellerItems_1 = require("../controller/itemRoutes/sellerItems");
const itemDetails_1 = require("../controller/itemRoutes/itemDetails");
const app = (0, express_1.default)();
app.use('/', allItems_1.allItems); // Route to get all the published items irrespective of any categories or filters.
app.use('/:sellerId', sellerItems_1.sellerItems); // Route to get all the items published by a particular seller.
app.use('/event/:eventId', itemDetails_1.itemDetails);
exports.default = app;
