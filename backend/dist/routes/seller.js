"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sellerSignup_1 = require("../controller/sellerRoutes/sellerSignup");
const sellerLogin_1 = require("../controller/sellerRoutes/sellerLogin");
const updateProfile_1 = require("../controller/sellerRoutes/updateProfile");
const addItem_1 = require("../controller/sellerRoutes/addItem");
const updateItem_1 = require("../controller/sellerRoutes/updateItem");
const deleteItem_1 = require("../controller/sellerRoutes/deleteItem");
const jwtSeller_1 = require("../middlewares/jwtSeller");
const app = (0, express_1.default)();
app.post('/signup', sellerSignup_1.sellerSignup); // Route for seller to signup.
app.post('/login', sellerLogin_1.sellerLogin); // Route for seller to login.
app.put('/:sellerId', jwtSeller_1.jwtVerificationSeller, updateProfile_1.updateProfileSeller); // Route for seller to update/modify his/her profile.
app.post('/item/:sellerId', jwtSeller_1.jwtVerificationSeller, addItem_1.addItem); // Route for seller to publish new item for bidding into any upcoming event.
app.put('/item/:itemId', jwtSeller_1.jwtVerificationSeller, updateItem_1.updateItem); // Route for seller to update/modify the details of his/her published items.
app.delete('/item/:itemid', jwtSeller_1.jwtVerificationSeller, deleteItem_1.deleteItem); // Route for seller to delete his/her item from the listing. 
exports.default = app;
