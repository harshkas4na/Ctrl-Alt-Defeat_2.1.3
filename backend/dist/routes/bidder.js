"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bidderSignup_1 = require("../controller/bidderRoutes/bidderSignup");
const bidderLogin_1 = require("../controller/bidderRoutes/bidderLogin");
const updateProfile_1 = require("../controller/bidderRoutes/updateProfile");
const jwtBidder_1 = require("../middlewares/jwtBidder");
const app = (0, express_1.default)();
app.post('/signup', bidderSignup_1.bidderSignup);
app.post('/login', bidderLogin_1.bidderLogin);
app.put('/:bidderId', jwtBidder_1.jwtVerificationBidder, updateProfile_1.updateProfileBidder);
exports.default = app;
