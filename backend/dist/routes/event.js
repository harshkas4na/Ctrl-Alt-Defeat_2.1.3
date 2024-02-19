"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categoryEventDetails_1 = require("../controller/eventRoutes/categoryEventDetails");
const allEvents_1 = require("../controller/eventRoutes/allEvents");
const eventDetails_1 = require("../controller/eventRoutes/eventDetails");
const app = (0, express_1.default)();
app.get('/:category', categoryEventDetails_1.categoryEventDetails); // Route to get all the events listed in the given category.
app.get('/', allEvents_1.allEvents); // Route to get all the events without any filter.   
app.get('/:eventId', eventDetails_1.eventDetails);
exports.default = app;
