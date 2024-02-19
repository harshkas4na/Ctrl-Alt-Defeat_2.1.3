"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const eventschema = new mongoose_1.default.Schema({
    name: String,
    date: Date,
    time: Date,
    startTime: Number,
    category: String,
    items: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Items' }]
});
exports.Events = mongoose_1.default.model('Events', eventschema);
