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
exports.allEvents = void 0;
const eventSchema_1 = require("../../db/eventSchema");
const allEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield eventSchema_1.Events.find({});
        res.status(200).json(events);
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.allEvents = allEvents;
