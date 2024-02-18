"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const eventDetails_1 = require("../controller/eventRoutes/eventDetails");
const allEvents_1 = require("../controller/eventRoutes/allEvents");
const app = (0, express_1.default)();
app.post('/createEvent');
app.get('/:category', eventDetails_1.eventDetails);
app.get('/', allEvents_1.allEvents);
exports.default = app;
