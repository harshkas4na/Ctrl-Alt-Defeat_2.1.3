"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const cors_1 = __importDefault(require("cors"));
const bidder_1 = __importDefault(require("./routes/bidder"));
const seller_1 = __importDefault(require("./routes/seller"));
const event_1 = __importDefault(require("./routes/event"));
const item_1 = __importDefault(require("./routes/item"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use('/event', event_1.default);
app.use('/seller', bidder_1.default);
app.use('/bidder', seller_1.default);
app.use('/item', item_1.default);
(0, mongoose_1.connect)('mongodb+srv://namandevv45:XcaNAef52r7n9GF8@cluster0.mttpu48.mongodb.net/Subasta', { dbName: 'Subasta' });
app.listen(3000, () => {
    console.log('server is listening on port 3000');
});
