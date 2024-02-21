"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const cors_1 = __importDefault(require("cors"));
const seller_1 = __importDefault(require("./routes/seller"));
const bidder_1 = __importDefault(require("./routes/bidder"));
const event_1 = __importDefault(require("./routes/event"));
const item_1 = __importDefault(require("./routes/item"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use('/event', event_1.default);
app.use('/seller', seller_1.default);
app.use('/bidder', bidder_1.default);
app.use('/item', item_1.default);
const mongodb_url = process.env.mongoDB_URL || 'mongodb+srv://namandevv45:REoyCgljCUv02b7c@cluster0.sfelgwu.mongodb.net/Subasta';
(0, mongoose_1.connect)(mongodb_url, { dbName: 'Subasta' });
app.listen(3000, () => {
    console.log('server is listening on port 3000');
});
